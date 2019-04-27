(ns mrsudoku.model.conflict
  (:require [clojure.set :as set]
            [mrsudoku.model.grid :as g]))


;; ========================================================================
;; Fichier à compléter : il faut utiliser les fonctions du namespace grid.
;; et regarder également les tests dans `test/cljs/mrsudoku/conflict_test.cljs`
;; et bien sûr `test/cljs/mrsudoku/grid_test.cljs`  (et les autres tests ...)
;; ========================================================================

(defn values
  "Return the set of values of a vector or grid `cells`."
  [cells]
  (loop [s cells, res #{}]
    (if (seq s)
      (recur (rest s) (conj res (get (first s) :value)))
      (disj res nil))))

(defn values-except
  "Return the set of values of a vector of cells, except the `except`-th."
  [cells except]
  {:pre [(<= 1 except (count cells))]}
  (loop [s cells, i 0, res #{}]
    (if (seq s)
      (if (not (= i (- except 1)))
        (recur (rest s) (inc i) (conj res (first s)))
        (recur (rest s) (inc i) res))
      (values res))))


(defn mk-conflict [kind cx cy value]
  {:status :conflict
   :kind kind
   :value value})

(defn merge-conflict-kind
  [kind1 kind2]
  (if (set? kind1)
    (if (set? kind2)
      (if (= (count (clojure.set/union kind1 kind2)) 1)
        (first (seq (clojure.set/union kind1 kind2)))
        (clojure.set/union kind1 kind2))
      (if (= (count (clojure.set/union kind1 (conj #{} kind2))) 1)
        (first (seq (clojure.set/union kind1 (conj #{} kind2))))
        (clojure.set/union kind1 (conj #{} kind2))))
    (if (set? kind2)
      (if (= (count (clojure.set/union (conj #{} kind1) kind2)) 1)
        (first (seq (clojure.set/union (conj #{} kind1) kind2)))
        (clojure.set/union (conj #{} kind1) kind2))
      (if (= (count (clojure.set/union (conj #{} kind1) (conj #{} kind2))) 1)
        (first (seq (clojure.set/union (conj #{} kind1) (conj #{} kind2))))
        (clojure.set/union (conj #{} kind1) (conj #{} kind2))))))


(defn merge-conflict [conflict1 conflict2]
  ;; Attention : réponse fausse
  conflict1)

(defn merge-conflicts [& conflicts]
  (apply (partial merge-with merge-conflict) conflicts))

(defn update-conflicts
  [conflict-kind cx cy value conflicts]
  (if-let [conflict (get conflicts [cx, cy])]
    (assoc conflicts [cx, cy] (mk-conflict (merge-conflict-kind conflict-kind (:kind conflict))
                                           cx cy value))
    (assoc conflicts [cx, cy] (mk-conflict conflict-kind cx cy value))))

(defn conflict-value [values except cell]
  (when-let [value (g/cell-value cell)]
    (when (and (not= (:status cell) :init)
               (contains? (values-except values except) value))
      value)))

(defn col-conflicts
  "Returns a map of conflicts in a `col`."
  [col cx]
  (loop [cy 1, cells (seq col), conflicts {}]
    ;(println conflicts)
    (if (seq cells)
      (let [cell (first cells)]
        (if-let [value (conflict-value col cy cell)]
          (recur (+ cy 1) (rest cells) (update-conflicts :col cx cy value conflicts))
          (recur (+ cy 1) (rest cells) conflicts)))
      ;; no more cells
      conflicts)))

(defn cols-conflicts
  [grid] (reduce merge-conflicts {}
                 (map (fn [c] (col-conflicts (g/col grid c) c)) (range 1 10))))



(defn row-conflicts
  "Returns a map of conflicts in a `row`."
  [row cy]
  (loop [s row, e #{}, res {}, i 1, mset {}]
    (if (seq s)
      (if (contains? (first s) :value)
        (if (contains? e (get (first s) :value))
          (if (= (get (first s) :status) :set)
            (if (contains? mset (get (first s) :value))
              (recur (rest s) e (assoc (assoc res [i cy] {:status :conflict, :kind :row, :value (get (first s) :value)}) [(get mset (get (first s) :value)) cy] {:status :conflict, :kind :row, :value (get (first s) :value)}) (inc i) mset)
              (recur (rest s) e (assoc res [i cy] {:status :conflict, :kind :row, :value (get (first s) :value)}) (inc i) (assoc mset (get (first s) :value) i)))
            (recur (rest s) e res (inc i) mset))
          (if (= (get (first s) :status) :set)
            (recur (rest s) (conj e (get (first s) :value)) res (inc i) (assoc mset (get (first s) :value) i))
            (recur (rest s) (conj e (get (first s) :value)) res (inc i) mset)))
        (recur (rest s) e res (inc i) mset))
      res)))

(defn rows-conflicts
  "Returns a map of conflicts in all rows of `grid`"
  [grid]
  (reduce merge-conflicts {}
          (map (fn [a] (row-conflicts (g/row grid a) a)) (range 1 10))))

(defn block-conflicts
  [block b]
  (g/reduce-block (fn [conflicts index cx cy cell]
                    (if-let [value (conflict-value block index cell)]
                      (update-conflicts :block cx cy value conflicts)
                      conflicts)) {} block b))

(defn blocks-conflicts
  [grid]
  (reduce merge-conflicts {}
          (map (fn [b] (block-conflicts (g/block grid b) b)) (range 1 10))))

(defn grid-conflicts
  "Compute all conflicts in the Sudoku grid."
  [grid]
  (println "compute conflicts")
  (println (g/grid->str grid))
  (merge-conflicts (rows-conflicts grid)
                   (cols-conflicts grid)
                   (blocks-conflicts grid)))
