(ns mrsudoku.model.grid
  (:require [clojure.string :as string]
            [mrsudoku.utils :refer [concatv]]))


(def contrainte {:var1 :b, :var2 :a, :check not=})

(defn intervalle [min max]
  (into #{} (range min max)))

;(intervalle 1 5)

(defn check-constraint [constraint instance]
  (let [var1 (:var1 constraint), var2 (:var2 constraint), check (:check constraint)]
    (check (get instance var1) (get instance var2))))

;(check-constraint contrainte {:a 6, :b 7})

(defn all-singleton? [doms]
  ;tester si tous les domaines sont des singletons
  (every? #(= (count %) 1) (vals doms)))

;(all-singleton? {:a #{1}, :b #{2}})


(defn build-solution [doms]
  (into {} (map (fn [[x xdom]] [x (first xdom)])
                doms)))

;(build-solution {:a #{1 2}, :b #{2}})
;(build-solution {:a #{2}, :b #{2}})


(defn solution? [constraints sol]
  ;tester la solution
  (loop [cs constraints]
    (if (seq cs)
      (let [constraint (first cs)]
        (if ((:check constraint) (get sol (:var1 constraint)) (get sol (:var2 constraint)))
          (recur (rest cs))
          false))
      true)))

(def contrainte1 [{:var1 :b, :var2 :a, :check not=}])
(def contraintes [{:var1 :b, :var2 :a, :check not=}
                  {:var1 :b, :var2 :a, :check >=}])
;(solution? contrainte1 {:a 0, :b 0})
;(solution? contrainte1 {:a 0, :b 1})
;(solution? contraintes {:a 1, :b 0})
;(solution? contraintes {:a 0, :b 1})

(defn select-var [doms]
  ;selectionne la premiere variable dont le domaine est d'arité supérieure à 1
  (some (fn [[x xdom]]
          (if (> (count xdom) 1)
            x
            nil)) doms))

;(select-var {:a #{1}, :b #{2 3 4}})



(defn find-solution [constraints doms]
  ;renvoie la première solution possible qui respecte les contraintes
  (if (all-singleton? doms)
    (let [sol (build-solution doms)]
      (if (solution? constraints sol)
        sol
        nil))
    (let [x (select-var doms)]
      (println x)
      (loop [xvals (get doms x)]
        (if (seq xvals)
          (let [sol (find-solution constraints (assoc doms x #{(first xvals)}))]
            (println  (assoc doms x #{(first xvals)}))
            (if sol
              sol
              (recur (rest xvals))))
          nil)))))

;(find-solution contraintes {:a #{1}, :b #{2 3}})
;(find-solution contraintes {:a #{2 3 1}, :b #{3 2}})
;(find-solution contraintes {:a #{1 2 3}, :b #{1 2 4}})
;(find-solution contraintes {:a #{4 5 6}, :b #{3}})

(defn nettoie [propos]
  ;nettoie ce qu'est renvoyé par la fontion "find-all-solutions"
  (loop [s propos, t (first s), res []]
    (if (seq s)
      (if (or (= (type t) cljs.core/LazySeq) (= (type t) cljs.core/PersistentArrayMapSeq))
        (if (seq t)
          (if (= (type (first t)) cljs.core/MapEntry)
            (recur s (rest (rest t)) (conj res (reduce conj {} (conj (conj () (second t)) (first t)))))
            (if (= (first t) nil)
              (recur s (rest t) res)
              (recur s (rest t) (conj res (first t)))))
          (recur (rest s) (first (rest s)) res))
        (if (= (type t) cljs.core/PersistentArrayMap)
          (recur (rest s) (first (rest s)) (conj res (first s)))
          (if (= (type t) clojure.core/MapEntry)
            (recur (rest (rest s)) (first (rest s)) (conj res (reduce conj {} (conj (conj () (second s)) (first s)))))
            (recur (rest s) (first (rest s)) res))))
      res)))

;(nettoie '(({:a 1, :b 3} [:a 1] [:b 2]) (nil) {:a 2, :b 3}))

;(nettoie '(({:a 1, :b 4} {:a 1, :b 3} {:a 1, :b 2} [:a 1] [:b 5])))
;({:a 3, :b 4} nil nil [:a 3] [:b 5]) {:a 2, :b 4} {:a 2, :b 3}  nil [:a 2] [:b 5]

(defn find-all-solutions [constraints doms]
  (if (all-singleton? doms)
    (let [sol (build-solution doms)]
      (if (solution? constraints sol)
        sol
        nil))
    (let [x (select-var doms)]
      (let [xvals (get doms x)]
        (lazy-seq (cons (find-all-solutions constraints (assoc doms x #{(first xvals)}))
                   (find-all-solutions constraints (assoc doms x (into #{} (rest xvals))))))))))


;(find-all-solutions contraintes {:a #{1 2 3}, :b #{3 4}}) ;(({:a 1, :b 4} [:a 1] [:b 3]) ({:a 3, :b 4}) {:a 2, :b 4} [:a 2] [:b 3])
;(nettoie (find-all-solutions contraintes {:a #{1 2 3}, :b #{3 4}}))

;(find-all-solutions contraintes {:a #{1 2 3}, :b #{1 2}})
;(nettoie (find-all-solutions contraintes {:a #{1 2 3}, :b #{1 2}}))


;(find-all-solutions contraintes {:a #{1 5}, :b #{2 3}})
;(nettoie (find-all-solutions contraintes {:a #{1 5}, :b #{2 3}}))

;(find-all-solutions contraintes {:a #{4 2 1}, :b #{9 4 5}})
;(nettoie (find-all-solutions contraintes {:a #{4 2 1}, :b #{9 4 5}}))




(defn augment
  "Tries to augment the match with the supplied visited nodes.
  Returns the reverted edges of the complete maximal matching."
  [graph src visited match]
  (loop [dests (get graph src), visited visited]
    (if (seq dests)
    ;tant qu'il y a des destinations
      (if (visited (first dests))
        (recur (rest dests) visited)
        (if-let [old-src (get match (first dests))]
          (let [[found, visited', match']
                (augment graph old-src (conj visited (first dests)) match)]
            (if found
              [true, visited', (assoc match' (first dests) src)]
              (recur (rest dests) visited')))
          ; La valeur qu'on veut n'est pas dans le match
          [true, (conj visited (first dests)), (assoc match (first dests) src)]))
      ; Aucune valeur disponible
     [false, visited, match])))

(defn cle [match valeur]
  (loop [s match]
    (if (seq s)
      (if (= (last (first s)) valeur)
        (first (first s))
        (recur (rest s)))
      false)))

(defn max-matching [graph]
  (loop [s (keys graph), visited #{}, match {}, buffk [], buffv #{}, aller #{}, retour #{}]
    (do
      (print "s : " s "\t visited : " visited "\t match : " match "\t buffk : " buffk "\t buffv : " buffv "\t aller : " aller "\t retour : " retour)
      (if (seq s)
        (if (empty? buffk)
          (if (= true (first (augment graph (first s) visited match)))
            (recur (rest s) (second (augment graph (first s) visited match)) (last (augment graph (first s) visited match)) buffk  buffv aller retour)
            (recur s visited match (conj buffk (first s)) (get graph (first s)) aller retour))
          (if (not= (count (vals match)) (count (set (vals match))))
            (if (empty? (pop buffk))
              (recur (rest s) visited (assoc match (first (clojure.set/difference (disj buffv (cle match (last buffk))) aller retour)) (last buffk)) (pop buffk) (get graph (last (pop buffk))) aller retour)
              (recur s visited (assoc match (first (clojure.set/difference (disj buffv (cle match (last buffk))) aller retour)) (last buffk)) (pop buffk) (get graph (last (pop buffk))) aller retour))
            (if (= (count match) (count graph))
              (recur (rest s) visited match buffk buffv aller retour)
              (let [val (first (clojure.set/difference (disj buffv (cle match (last buffk))) aller retour))]
                (do
                  (print "\t val : " val)
                  (if (= nil val)
                    (if (empty? (pop buffk))
                      (recur (rest s) visited match (pop buffk) #{} #{} #{})
                      (recur s visited  match (pop buffk) (get graph (last (pop buffk))) (disj aller (cle match (last (pop buffk)))) (conj retour (cle match (last buffk)))))
                    (let [[bool v m] (augment graph (get match val) visited match)]
                      (if (= true bool)
                        (recur s v (assoc m val (last buffk)) (pop buffk) (get graph (last (pop buffk))) aller retour)
                        (if (= false (cle match (last buffk)))
                          (recur s v m (conj buffk (get match val)) (get graph (get match val)) aller retour)
                          (recur s v m (conj buffk (get match val)) (get graph (get match val)) (conj aller (cle match (last buffk))) retour))))))))))
        (if (= (count match) (count graph))
          match
          nil)))))

(defn complete-matching [vars match]
  (= (count vars) (count match)))


(defn vars-of [doms]
  (into #{} (keys doms)))

(defn dfs
  ([graph vert f init] (first (dfs graph vert f init #{})))
  ([graph vert f init visited]
   (if (visited vert)
     [init visited]
     (loop [verts (get graph vert), res (f init vert), visited (conj visited vert)]
       (if (seq verts)
         (let [[res', visited'] (dfs graph (first verts) f res visited)]
           (recur (rest verts) res' visited'))
         [res visited])))))

(defn dfs-post
  ([graph vert f init] (first (dfs-post graph vert f init #{})))
  ([graph vert f init visited]
   (if (visited vert)
     [init visited]
     (loop [verts (get graph vert), res init, visited (conj visited vert)]
       (if (seq verts)
         (let [[res', visited'] (dfs-post graph (first verts) f res visited)]
           (recur (rest verts) res' visited'))
         [(f res vert) visited])))))


(defn dfs-stack [graph]
  (loop [verts (keys graph), stack (), visited #{}]
    (if (seq verts)
      (let [[stack', visited'] (dfs-post graph (first verts) conj stack visited)]
        (recur (rest verts) stack' visited'))
      stack)))


(defn inv-edges [src dest]
  ;Inverse sources et destinations
  (zipmap dest (repeat #{src})))

;(inv-edges :A #{:F :B :C}) ;{:F #{:A}, :B #{:A}, :C #{:A}}

(defn merge-edges [edges1 edges2]
  ;Fusionne 2 graphes
  (loop [s edges2, m edges1]
    (if (seq s)
      (let [[k, v2] (first s)]
        (if-let [v1 (get m k)]
          (recur (rest s) (assoc m k (clojure.set/union v1 v2)))
          (recur (rest s) (assoc m k v2))))
      m)))


(defn transpose [graph]
  (def l (keys graph))
  (let [trans1 (loop [s (keys graph), res []]
                (if (seq s)
                  (do
                    (println res)
                    (recur (rest s) (conj res (inv-edges (first s) (get graph (first s))))))
                  res))]
    (let [trans2 (loop [k 0, res (first trans1)]
                   (if (< (+ k 1) (count trans1))
                     (do
                       (println (merge-edges (nth trans1 k) (nth trans1 (+ k 1))))
                       (let [merge (merge-edges res (nth trans1 (+ k 1)))]
                         (recur (inc k) merge)))
                     res))]
        (loop [s trans2, t l]
          (if (seq t)
            (if (not (contains? s (first t)))
              (recur (assoc s (first t) #{}) (rest t))
              (recur s (rest t)))
            s)))))

(defn compute-scc [graph]
  (let [stack (dfs-stack graph)
        tgraph (transpose graph)]
    (loop [s stack, visited #{}, scc []]
      (if (seq s)
        (if (visited (first s))
          (recur (rest s) visited scc)
          (let [[comp, visited'] (dfs tgraph (first s) conj #{} visited)]
            (recur (rest s) visited' (conj scc comp))))
        ;fin de la stack
        scc))))


(defn add-vertex [graph vert]
  ;ajout d'un sommet non relié dans le graphe s'il n'existe pas déjà
  (if (contains? graph vert)
    graph
    (assoc graph vert #{})))


(defn add-edge [graph src dest]
  ;ajout d'une arête non existante entre une source et une destination
  (update graph src #(conj % dest)))


(defn remove-edge [graph src dest]
  ;remove d'une arête existante entre une source et une destination
  (update graph src #(disj % dest)))


(defn graph-with-matching [graph match]
  (reduce (fn [ngraph [src dest]]
            (-> ngraph
              (add-vertex src)
              (add-edge src dest)
              (remove-edge dest src))) graph match))


(defn doms-from-sccomp [variables comp]
  (if (= (count comp) 1)
    (if (contains? variables (first comp))
      {(first comp) #{}}
      {})
    (let [vars (clojure.set/select  #(contains? variables %) comp)
          values (clojure.set/difference comp vars)]
      (zipmap vars (repeat values)))))

(defn doms-from-scc [vars scc]
  ;si c'est un singleton et que le singleton contient une keyword on ajoute au resultat une association avec le kw en clé et un ensemble vide en valeur
  (loop [s scc, res {}]
    (if (seq s)
     (recur (rest s) (conj res (doms-from-sccomp vars (first s))))
     res)))

(defn isolated-values [variables scc]
  ;prendre que les singletons qui n'appartiennent pas aux variables
  ;(into #{} (mapfirst (filter #(and (= (count %) 1) (not (variables (first %) scc)))))))
  (loop [s scc, res #{}]
    (if (seq s)
      (if (and (= (count (first s)) 1) (not (variables (first (first s)))))
        (recur (rest s) (conj res (first (first s))))
        (recur (rest s) res))
      res)))

(defn value-known-by [doms value]
  (reduce (fn [res [v values]]
           (if (contains? values value)
             (conj res v)
             res))
      #{} doms))

(defn add-value [doms vs val]
  (loop [res doms, s vs]
    (if (seq s)
      (recur (update res (first s) conj val) (rest s))
      res)))

(defn access [doms scc]
  (let [scc-doms (doms-from-scc (vars-of doms) scc)
        isolated (isolated-values (vars-of doms) scc)]
    (reduce (fn [doms' value] (add-value doms' (value-known-by doms value) value))
      scc-doms isolated)))

(defn alldiff [doms]
  ;simplifie les 'doms' pour les 'all-different' contraintes, retoune nil si ca n'est pas satisfiable
  (let [match (max-matching doms)]
    (if (complete-matching doms match)
      (let [scc (compute-scc (graph-with-matching doms match))]
        (access doms scc))
      ;incomplet
      nil)))



(defn mk-cell
  "Create a new cell."
  ([] {:status :empty})
  ([v] {:status :init, :value v})
  ([st v] {:status st, :value v}))

(defn cell-value [cell]
  (case (:status cell)
    (:init :set :solved :conflict) (:value cell)
    nil))

(def ^:private sudoku-grid
  [[;; row 1
    [(mk-cell 5) (mk-cell 3) (mk-cell)
     (mk-cell 6) (mk-cell) (mk-cell)
     (mk-cell) (mk-cell 9) (mk-cell 8)]
    [(mk-cell) (mk-cell 7) (mk-cell)
     (mk-cell 1) (mk-cell 9) (mk-cell 5)
     (mk-cell) (mk-cell) (mk-cell)]
    [(mk-cell) (mk-cell) (mk-cell)
     (mk-cell) (mk-cell) (mk-cell)
     (mk-cell) (mk-cell 6) (mk-cell)] ],
   [;; row 2
    [(mk-cell 8) (mk-cell) (mk-cell)
     (mk-cell 4) (mk-cell) (mk-cell)
     (mk-cell 7) (mk-cell) (mk-cell)]
    [(mk-cell) (mk-cell 6) (mk-cell)
     (mk-cell 8) (mk-cell) (mk-cell 3)
     (mk-cell) (mk-cell 2) (mk-cell)]
    [(mk-cell) (mk-cell) (mk-cell 3)
     (mk-cell) (mk-cell) (mk-cell 1)
     (mk-cell) (mk-cell) (mk-cell 6)]],
   [;; row 3
    [(mk-cell) (mk-cell 6) (mk-cell)
      (mk-cell) (mk-cell) (mk-cell)
     (mk-cell) (mk-cell) (mk-cell)]
    [(mk-cell) (mk-cell) (mk-cell)
     (mk-cell 4) (mk-cell 1) (mk-cell 9)
     (mk-cell) (mk-cell 8) (mk-cell)]
    [(mk-cell 2) (mk-cell 8) (mk-cell)
     (mk-cell) (mk-cell) (mk-cell 5)
     (mk-cell) (mk-cell 7) (mk-cell 9)]]])


(defn cell
  "Get the cell at coordinates `(cx,cy)`
with `cx` the column number and `cy` the row number."
  [grid cx cy]
  {:pre [(<= 1 cx 9)
         (<= 1 cy 9)]}
  (let [block-x (quot (- cx 1) 3)
        cell-x (rem (- cx 1) 3)
        block-y (quot (- cy 1) 3)
        cell-y (rem (- cy 1) 3)
        cell-ref (+ (* cell-y 3) cell-x)]
    ;(println (str "block-x=" block-x ", block-y=" block-y))
    ;(println (str "cell-x=" cell-x ", cell-y=" cell-y))
    (let [block ((grid block-y) block-x)]
      ;(println (str "block=" block))
      (block cell-ref))))

(defn change-cell
  "Change the `grid` cell at coordinates `(cx,cy)`
  with `cx` the column number and `cy` the row number,
  and `cell` is the new cell-content."
  [grid cx cy cell]
  {:pre  [(<= 1 cx 9)
          (<= 1 cy 9)]}
  (let [block-x (quot (- cx 1) 3)
        cell-x (rem (- cx 1) 3)
        block-y (quot (- cy 1) 3)
        cell-y (rem (- cy 1) 3)
        cell-ref (+ (* cell-y 3) cell-x)]
    (update-in grid [block-y block-x cell-ref] (fn [_] cell))))

(defn cell->str [cell]
  (condp = (:status cell)
    :init (str " " (:value cell) " ")
    :empty " . "
    :set (str "[" (:value cell) "]")
    :conflict (str "!" (:value cell) "!")))

(defn block
  "Get the #`b` block of the `grid`."
  [grid b]
  {:pre [(<= 1 b 9)]}
  (let [row (quot (- b 1) 3)
        blk (rem (- b 1) 3)]
    (nth (nth grid row) blk)))

(defn reduce-block
  "Reduce the `b`-th `block` of a sudoku grid with a function taking 4
  parameters: `acc` for the accumulated value, `index` for the cell
  index in the block, `cx, cy` for the cell
  coordinates in the grid and `cell` for the cell content."
  [f init block b]
  (let [bx (* 3 (rem (- b 1) 3))
        by (* 3 (quot (- b 1) 3))]
    (loop [yoffset 0, index 1, cells block, acc init]
      (if (= yoffset 3)
        acc
        (let [[nacc, ncells, nindex]
              (loop [xoffset 0, index index, cells cells, acc acc]
                (if (= xoffset 3)
                  [acc, cells, index]
                  (recur (+ xoffset 1) (+ index 1)
                         (rest cells) (f acc
                                         index
                                         (+ bx xoffset 1)
                                         (+ by yoffset 1)
                                         (first cells)))))]
          (recur (+ yoffset 1) nindex ncells nacc))))))


(defn do-block
  "Do the effects in function `f!` while traversing the `b`-th `block`
  of a sudoku grid . The function `f!` takes 4 parameters: `index` for
  the index of the cell in the block, `cx, cy`
  for the cell coordinates in the grid and `cell` for the cell content."
  [f! block b]
  (reduce-block (fn [_ index cx cy cell]
                  (f! index cx cy cell)) nil block b))


(defn block-row
  "Get the #`r` row in the `grid`."
  [block r]
  {:pre [(<= 1 r 3)]}
  (let [base (* (- r 1) 3)]
    [(nth block base) (nth block (+ base 1)) (nth block (+ base 2))]))

(defn row
  "Get the #`r` row in the `grid`."
  [grid r]
  {:pre [(<= 1 r 9)]}
  (let [block-r (quot (- r 1) 3)
        row-r (+ (rem (- r 1) 3) 1)
        blocks (nth grid block-r)]
    (concatv (block-row (nth blocks 0) row-r)
             (block-row (nth blocks 1) row-r)
             (block-row (nth blocks 2) row-r))))

(defn row->str [row]
  (string/join " " (map cell->str row)))

(defn rows
  "Fetch all the rows of a sudoku `grid`."
  [grid]
  (for [i (range 1 10)]
    (row grid i)))

(defn grid->str [grid]
  (string/join "\n" (map row->str (rows grid))))

(defn col
  "Get the #`c` column of the `grid`."
  [grid c]
  {:pre [(<= 1 c 9)]}
  (into [] (for [cy (range 1 10)]
             (cell grid c cy))))

(defn reduce-grid
  "Reduce the whole `grid` of a sudoku with a function taking 4
  parameters: `acc` for the accumulated value, `cx, cy` for the cell
  coordinates and `cell` for the cell content."
  [f init grid]
  (loop [cy 1, acc init]
    (if (= cy 10)
      acc
      (let [nacc (loop [cx 1, acc acc]
                   (if (= cx 10)
                     acc
                     (recur (+ cx 1) (f acc cx cy (cell grid cx cy)))))]
        (recur (+ cy 1) nacc)))))

(defn do-grid
  "Do the effects in function `f!` while traversing the `grid` of a
  sudoku. The function `f!` takes 3 parameters: `cx, cy` for the cell
  coordinates and `cell` for the cell content."
  [f! grid]
  (reduce-grid (fn [_ cx cy cell]
                 (f! cx cy cell)) nil grid))

(defn elimine-block [grid n]
 (let [poss (loop [t (block grid n), a #{1 2 3 4 5 6 7 8 9}]
             (if (seq t)
               (if (= (count (first t)) 1)
                  (recur (rest t) a)
                  (recur (rest t) (disj a ((first t) :value))))
               a))]
   ;on regarde les valeurs possibles pour un bloc en fonction des chiffres déjà présents
   (loop [s (block grid n), v (reduce-block (fn [acc index cx cy cell] (conj acc [cx,cy])) [] (block sudoku-grid n) n), r {},p poss, i 0]
     (if (< i 9)
       (if (= (count (first (seq s))) 1)
         (recur (rest s) v (assoc r (nth v i) p) p (inc i))
         (recur (rest s) v (assoc r (nth v i) #{((first (seq s)) :value)}) p (inc i)))
       r))))

(defn elimine-row [grid n]
 ;on obtient un ensemble des vecteurs [numcol numligne] avec les valeurs dispo en fonction des val déjà présentes sur la ligne
 (let [poss (loop [t (row grid n), a #{1 2 3 4 5 6 7 8 9}]
             (if (seq t)
               (if (= (count (first t)) 1)
                  (recur (rest t) a)
                  (recur (rest t) (disj a ((first t) :value))))
               a))]
   ;on élimine les valeurs possibles pour une ligne de la grille
   (loop [s (row grid n), v [1 n], r {},p poss, i 0]
     (if (< i 9)
       (if (= (count (first (seq s))) 1)
         (recur (rest s) [(inc (inc i)) n] (assoc r v p) p (inc i))
         (recur (rest s) [(inc (inc i)) n] (assoc r v #{((first (seq s)) :value)}) p (inc i)))
       r))))

(defn elimine-col [grid n]
 ;on obtient un ensemble de vecteurs [numligne numcol] avec les valeurs dispo en fonction des val déjà présentes sur la col
 (let [poss (loop [t (col grid n), a #{1 2 3 4 5 6 7 8 9}]
             (if (seq t)
               (if (= (count (first t)) 1)
                  (recur (rest t) a)
                  (recur (rest t) (disj a ((first t) :value))))
               a))]
   (loop [s (col grid n), v [n 1], r {},p poss, i 0]
     (if (< i 9)
       (if (= (count (first (seq s))) 1)
         (recur (rest s) [n (inc (inc i))] (assoc r v p) p (inc i))
         (recur (rest s) [n (inc (inc i))] (assoc r v #{((first (seq s)) :value)}) p (inc i)))
       r))))

(defn elimine-brc [grid]
 (loop [i 1, res [], j 1]
   (if (= j 1)
     (if (< i 10)
       (recur (inc i) (conj res (elimine-block grid i)) j)
       (recur 1 res (inc j)))
     (if (= j 2)
       (if (< i 10)
         (recur (inc i) (conj res (elimine-row grid i)) j)
         (recur 1 res (inc j)))
       (if (= j 3)
         (if (< i 10)
           (recur (inc i) (conj res (elimine-col grid i)) j)
           res))))))

(defn merge-brc [brc1 brc2]
 (loop [s brc2, m brc1]
   (if (seq s)
     (let [[k, v2] (first s)]
       (if-let [v1 (get m k)]
         (recur (rest s) (assoc m k (clojure.set/intersection v1 v2)))
         (recur (rest s) (assoc m k v2))))
     m)))

(defn elimine-grid [grid]
 (let [v (elimine-brc grid)]
   (let [prem (first (seq v))]
     (loop [s (rest (seq v)), res prem]
       (if (seq s)
         (recur (rest s) (merge-brc res (first s)))
         res)))))

(defn constraint-block [grid n]
 (let [base (loop [res {}, v (reduce-block (fn [acc index cx cy cell] (conj acc [cx,cy])) [] (block sudoku-grid n) n), i 0]
             (if (< i 9)
               (recur (assoc res i (nth v i)) v (inc i))
               res))]
   (assoc base :check not=)))


(defn constraint-row [grid n]
 (let [base (loop [res {}, v [1 n], i 0]
             (if (< i 9)
               (recur (assoc res i [(inc (inc i)) n]) v (inc i))
               res))]
   (assoc base :check not=)))

(defn constraint-col [grid n]
 (let [base (loop [res {}, v [n 1], i 0]
             (if (< i 9)
               (recur (assoc res i [n (inc (inc i))]) v (inc i))
               res))]
   (assoc base :check not=)))


(defn check-constraint [constraint ngrid]
 ;constraint = la contrainte; ngrid = la grille à filtrer
 ;pour vérifier que ça marche, on met à la place du premier let :
 ;(let [bl {[5 1] #{7}, [5 2] #{9}, [4 2] #{1}, [6 2] #{7}}]
 ;et ça doit nous renvoyer false car il y a 2 valeurs identiques dans le bloc
 (let [bl (loop [s constraint, res {}]
             (if (seq s)
               (if (= (first (first s)) :check)
                 (recur (rest s) res)
                 (if (= (count (get ngrid (get constraint (first (first s))))) 1)
                   (recur (rest s) (assoc res (get constraint (first (first s))) (get ngrid (get constraint (first (first s))))))
                   (recur (rest s) res)))
               res))]
   (loop [s (vals bl), k 0, l 0]
     (if (< k (count bl))
       (if (< l (count bl))
         (if (not (= k l))
           (do
             (let [var1 (first (nth s k)), var2 (first (nth s l)), check (:check constraint)]
               (if (check var1 var2)
                 (recur s k (inc l))
                 false)))
           (recur s k (inc l)))
         (recur s (inc k) 0))
       true))))

(defn get-block [cx cy]
 (if (and (>= cx 1) (<= cx 3))
   (if (and (>= cy 1) (<= cy 3))
     1
     (if (and (>= cy 4) (<= cy 6))
       4
       (if (and (>= cy 7) (<= cy 9))
         7)))
   (if (and (>= cx 4) (<= cx 6))
     (if (and (>= cy 1) (<= cy 3))
       2
       (if (and (>= cy 4) (<= cy 6))
         5
         (if (and (>= cy 7) (<= cy 9))
           8)))
     (if (and (>= cx 7) (<= cx 9))
       (if (and (>= cy 1) (<= cy 3))
         3
         (if (and (>= cy 4) (<= cy 6))
           6
           (if (and (>= cy 7) (<= cy 9))
             9)))))))

(defn check-constraint-particular [grid ngrid]
 ;grid = grille de départ /ngrid = grille qu'il faut vérifier
 (loop [i 1, j 1]
   (if (< i 10)
     (if (< j 10)
       (if (and (and (= (check-constraint (constraint-row grid i) ngrid) true)
                     (= (check-constraint (constraint-col grid j) ngrid) true))
               (= (check-constraint (constraint-block grid (get-block i j)) ngrid) true))
         (recur i (inc j))
         false)
       (recur (inc i) 1))
     true)))
