(ns mrsudoku.model.solver
  (:require [clojure.string :as string]
            [mrsudoku.utils :refer [concatv]]
            [mrsudoku.model.grid :as g :refer []]))

(def contrainte {:var1 :b, :var2 :a, :check not=})

(def contrainte1 [{:var1 :b, :var2 :a, :check not=}])

(def contraintes [{:var1 :b, :var2 :a, :check not=}
                  {:var1 :b, :var2 :a, :check >=}])

(def graph {:x1 #{1 4 43}, :x2 #{1}, :x3 #{4}})

(def graph2 {:x1 #{1 2 3} :x2 #{1 2 3} :x3 #{1 2 3} :x4 #{1 2 3}})

(def alldiff-doms {:x1 #{1 2 3} :x2 #{1 2 4 5} :x3 #{4 5 6} :x4 #{4 5 6} :x5 #{4 5 6}})

(def graph3 {:A #{:F :B :C}, :B #{:C}, :C #{:D}, :D #{:E}, :E #{:C}, :F #{:H :G}, :G #{:H :I}, :H #{:F :I}, :I #{}})

(def graph4 {:A #{:F :B :C}, :B #{:C}, :C #{:D}, :D #{:E}, :E #{:C}, :F #{:H}, :G #{:H :I}, :H #{:F :I}, :I #{}})

(def graph5 {:v2 #{4 2 5}, 1 #{:v2}, :v5 #{6 5}, :v1 #{1 2}, 4 #{:v5}, 6 #{:v4}, 3 #{:v1}, :v4 #{4 5}, :v3 #{4 6}, 5 #{:v3}})

(def graph6 {:v1 #{}, :v2 #{}, :v5 #{4 6 5}, :v4 #{4 6 5}, :v3 #{4 6 5}})


(def sudoku-grid @#'g/sudoku-grid)
(def sudoku-grid-difficile @#'g/sudoku-grid-difficile)
(def sudoku-grid-tres-difficile @#'g/sudoku-grid-tres-difficile)



;********************   on a récupéré des fonctions de grid.cljs   *****************************


;les tests de ces fonctions sont dans le fichier grid_test.cljs



(defn mk-cell
  "Create a new cell."
  ([] {:status :empty})
  ([v] {:status :init, :value v})
  ([st v] {:status st, :value v}))




(defn cell-value [cell]
  (case (:status cell)
    (:init :set :solved :conflict) (:value cell)
    nil))




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




(defn col
  "Get the #`c` column of the `grid`."
  [grid c]
  {:pre [(<= 1 c 9)]}
  (into [] (for [cy (range 1 10)]
             (cell grid c cy))))





;**************************************************************************************










;******   on réduit au maximum les possibilités de valeurs pour chaque case   **********






(defn add-vertex [graph vert]
  ;ajout d'un sommet non relié dans le graphe s'il n'existe pas déjà
  (if (contains? graph vert)
    graph
    (assoc graph vert #{})))

;(add-vertex {:x1 #{1 4 43}, :x2 #{1}, :x3 #{4}} :x4)



(defn add-edge [graph src dest]
  ;ajout d'une arête non existante entre une source et une destination
  (update graph src #(conj % dest)))

;(add-edge graph :x2 3)



(defn remove-edge [graph src dest]
  ;remove d'une arête existante entre une source et une destination
  (update graph src #(disj % dest)))

;(remove-edge graph :x2 1)



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

;(augment graph :x1 #{} {}) ; [true #{1} {1 :x1}]
;(augment graph :x2 #{1} {1 :x1}) ;[false #{1} {1 :x1}]
;(augment graph :x1 #{1} {1 :x1}) ;[true #{1 4} {1 :x1, 4 :x1}]
;(augment graph :x3 #{4 1} {1 :x2, 4 :x1}) ;[false #{1 4} {1 :x2, 4 :x1}]
;(augment graph :x2 #{4 1} {1 :x2, 4 :x1}) ;[false #{1 4} {1 :x2, 4 :x1}]
;(augment graph :x1 #{4 1} {1 :x2, 4 :x1}) ;[true #{1 4 43} {1 :x2, 4 :x1, 43 :x1}]
;(augment graph :x1 #{4 1} {1 :x2}) ;[true #{1 4 43} {1 :x2, 43 :x1}]



(defn cle [match valeur]
  (loop [s match]
    (if (seq s)
      (if (= (last (first s)) valeur)
        (first (first s))
        (recur (rest s)))
      false)))

;(cle {1 :x1, 4 :x5, 6 :x3, 5 :x4, 2 :x2} :x5) ;4
;(cle {1 :x1, 4 :x5, 6 :x3, 5 :x4, 2 :x2} :x4) ;5



(defn max-matching [graph]
  (loop [s (keys graph), visited #{}, match {}, buffk [], buffv #{}, aller #{}, retour #{}]
    (do
      ;(print "s : " s "\t visited : " visited "\t match : " match "\t buffk : " buffk "\t buffv : " buffv "\t aller : " aller "\t retour : " retour)
      (if (seq s)
        (if (empty? buffk)
          (if (contains? (set (vals match)) (first s))
            (recur (rest s) visited match buffk #{} aller retour)
            (if (= true (first (augment graph (first s) visited match)))
              (recur (rest s) (second (augment graph (first s) visited match)) (last (augment graph (first s) visited match)) buffk  buffv aller retour)
              (recur s visited match (conj buffk (first s)) (get graph (first s)) aller retour)))
          (if (not= (count (vals match)) (count (set (vals match))))
            (if (empty? (pop buffk))
              (recur (rest s) visited (assoc match (first (clojure.set/difference (disj buffv (cle match (last buffk))) aller retour)) (last buffk)) (pop buffk) (get graph (last (pop buffk))) #{} retour)
              (recur s visited (assoc match (first (clojure.set/difference (disj buffv (cle match (last buffk))) aller retour)) (last buffk)) (pop buffk) (get graph (last (pop buffk))) (disj aller (cle match (last buffk))) retour))
            (if (= (count match) (count graph))
              (recur (rest s) visited match buffk buffv aller retour)
              (let [val (first (clojure.set/difference (disj buffv (cle match (last buffk))) aller retour))]
                (do
                  ;(print "\t val : " val)
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

;(max-matching graph) ;{1 :x2, 4 :x3, 43 :x1}

;(max-matching graph2) ;nil

;(max-matching alldiff-doms) ;{1 :x1, 4 :x5, 6 :x3, 5 :x4, 2 :x2}



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

;(merge-edges {:A #{:F :B :C}} {:A #{:G}, :B #{:C}}) ;{:A #{:F :B :C :G}, :B #{:C}}
;(merge-edges {:A #{:F :B :C}, :C #{:H :I}} {:A #{:G}, :B #{:C}, :C #{:A :F}}) ;{:A #{:F :B :C :G}, :C #{:I :H :A :F}, :B #{:C}}





(defn sinks [graph verts]
  (loop [g graph, s verts]
    (if (seq s)
      (if (contains? g (first s))
        (recur g (rest s))
        (recur (assoc g s #{}) (rest s)))
      g)))

;(sinks graph4 [:A]) ;{:I #{}, :A #{:F :B :C}, :F #{:H}, :D #{:E}, :B #{:C}, :C #{:D}, :E #{:C}, :G #{:I :H}, :H #{:I :F}}
;(sinks graph4 [:A :J]) ;{:I #{}, :A #{:F :B :C}, :F #{:H}, :D #{:E}, :B #{:C}, :J #{}, :C #{:D}, :E #{:C}, :G #{:I :H}, :H #{:I :F}}




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

;(dfs graph3 :A conj []) ;[:A :F :G :I :H :B :C :D :E]
;(dfs graph3 :A (fn [res _] (inc res)) 0) ;9





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

;(dfs-post graph3 :A conj ()) ;(:A :B :C :D :E :F :G :H :I)




(defn dfs-stack [graph]
  (loop [verts (keys graph), stack (), visited #{}]
    (if (seq verts)
      (let [[stack', visited'] (dfs-post graph (first verts) conj stack visited)]
        (recur (rest verts) stack' visited'))
      stack)))

;(dfs-stack graph5) ;(3 :v1 1 :v2 2 4 :v5 6 :v4 5 :v3)




(defn transpose [graph]
  ;Renvoie la transposé d'un graphe
  (def l (keys graph))
  (let [trans1 (loop [s (keys graph), res []]
                (if (seq s)
                  (do
                    ;(println res)
                    (recur (rest s) (conj res (inv-edges (first s) (get graph (first s))))))
                  res))]
    (let [trans2 (loop [k 0, res (first trans1)]
                   (if (< (+ k 1) (count trans1))
                     (do
                       ;(println (merge-edges (nth trans1 k) (nth trans1 (+ k 1))))
                       (let [merge (merge-edges res (nth trans1 (+ k 1)))]
                         (recur (inc k) merge)))
                     res))]
        (loop [s trans2, t l]
          (if (seq t)
            (if (not (contains? s (first t)))
              (recur (assoc s (first t) #{}) (rest t))
              (recur s (rest t)))
            s)))))

;(transpose graph3) ;{:I #{:G :H}, :A #{}, :F #{:A :H}, :D #{:C}, :B #{:A}, :C #{:A :B :E}, :E #{:D}, :G #{:F}, :H #{:F :G}}
;(transpose {:v2 #{4 2 5}, 1 #{:v2}, :v5 #{6 5}, :v1 #{1 2}, 4 #{:v5}, 6 #{:v4}, 3 #{:v1}, :v4 #{4 5}, :v3 #{4 6}, 5 #{:v3}}) ;{:v2 #{1}, 1 #{:v1}, 2 #{:v2 :v1}, 3 #{}, 4 #{:v2 :v4 :v3}, 5 #{:v2 :v5 :v4}, :v5 #{4}, :v1 #{3}, 6 #{:v5 :v3}, :v4 #{6}, :v3 #{5}}





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

;(compute-scc graph3) ;[#{:A} #{:B} #{:C :E :D} #{:F :H :G} #{:I}]
;(compute-scc {:v2 #{4 2 5} 1 #{:v2} :v5 #{6 5} :v1 #{1 2} 4 #{:v5} 6 #{:v4} 3 #{:v1} :v4 #{4 5} :v3 #{4 6} 5 #{:v3}}) ;[#{3} #{:v1} #{1} #{:v2} #{2} #{4 :v4 6 :v5 :v3 5}]




(defn vars-of [doms]
  (into #{} (keys doms)))

;(vars-of alldiff-doms) ;#{:x1 :x2 :x3 :x4 :x5}




(defn complete-matching [vars match]
  (= (count vars) (count match)))

;(complete-matching (vars-of alldiff-doms) alldiff-doms) ;true
;(complete-matching (vars-of alldiff-doms) (dissoc alldiff-doms :x4)) ;false
;(complete-matching (vars-of alldiff-doms) (max-matching alldiff-doms)) ;true




(defn graph-with-matching [graph match]
  (reduce (fn [ngraph [src dest]]
            (-> ngraph
              (add-vertex src)
              (add-edge src dest)
              (remove-edge dest src))) graph match))

;(graph-with-matching alldiff-doms (max-matching alldiff-doms)) ;{1 #{:x1}, 2 #{:x2}, 4 #{:x5}, 5 #{:x4}, 6 #{:x3}, :x4 #{4 6}, :x3 #{4 5}, :x1 #{3 2}, :x5 #{6 5}, :x2 #{1 4 5}}




(defn doms-from-sccomp [variables comp]
  (if (= (count comp) 1)
    (if (contains? variables (first comp))
      {(first comp) #{}}
      {})
    (let [vars (clojure.set/select  #(contains? variables %) comp)
          values (clojure.set/difference comp vars)]
      (zipmap vars (repeat values)))))

;(doms-from-sccomp (vars-of alldiff-doms) #{:x5 4 6 :x4 :x3 5}) ;{:x4 #{4 6 5}, :x3 #{4 6 5}, :x5 #{4 6 5}}





(defn doms-from-scc [vars scc]
  ;si c'est un singleton et que le singleton contient une keyword on ajoute au resultat une association avec le kw en clé et un ensemble vide en valeur
  (loop [s scc, res {}]
    (if (seq s)
     (recur (rest s) (conj res (doms-from-sccomp vars (first s))))
     res)))

;(doms-from-scc (vars-of alldiff-doms) [#{3} #{:x1} #{1} #{:x2} #{2} #{:x5 4 6 :x4 :x3 5}]) ;{:x1 #{}, :x2 #{}, :x4 #{4 6 5}, :x3 #{4 6 5}, :x5 #{4 6 5}}





(defn isolated-values [variables scc]
  ;prendre que les singletons qui n'appartiennent pas aux variables
  (loop [s scc, res #{}]
    (if (seq s)
      (if (and (= (count (first s)) 1) (not (variables (first (first s)))))
        (recur (rest s) (conj res (first (first s))))
        (recur (rest s) res))
      res)))

;(isolated-values (vars-of alldiff-doms) [#{3} #{:x1} #{1} #{:x2} #{2} #{:x5 4 6 :x4 :x3 5}]) ;#{3 1 2}





(defn value-known-by [doms value]
  (reduce (fn [res [v values]]
           (if (contains? values value)
             (conj res v)
             res))
      #{} doms))

;(value-known-by alldiff-doms 4) ;#{:x2 :x3 :x4 :x5}
;(value-known-by alldiff-doms 1) ;#{:x1 :x2}





(defn add-value [doms vs value]
  (loop [res doms, s vs]
    (if (seq s)
      (recur (update doms (first s) conj value) (rest s))
      res)))

;(add-value graph6 #{:v1, :v2} 2) ;{:v1 #{2}, :v2 #{2}, :v5 #{4 6 5}, :v4 #{4 6 5}, :v3 #{4 6 5}}





(defn access [doms scc]
  (let [scc-doms (doms-from-scc (vars-of doms) scc)
        isolated (isolated-values (vars-of doms) scc)]
    (reduce (fn [doms' value] (add-value doms' (value-known-by doms value) value))
      scc-doms isolated)))

;(access alldiff-doms [#{3} #{:x1} #{1} #{:x2} #{2} #{:x5 4 6 :x4 :x3 5}]) ;{:x1 #{3 1 2}, :x2 #{1 2}, :x4 #{4 6 5}, :x3 #{4 6 5}, :x5 #{4 6 5}}





(defn alldiff [doms]
  ;simplifie les 'doms' pour les 'all-different' contraintes, retoune nil si ca n'est pas satisfiable
  (let [match (max-matching doms)]
    (if (complete-matching doms match)
      (let [scc (compute-scc (graph-with-matching doms match))]
        (access doms scc))
      ;incomplet
      nil)))

;(alldiff alldiff-doms) ;{:x2 #{1 2}, :x1 #{1 2 3}, :x4 #{4 5 6}, :x3 #{4 5 6}, :x5 #{4 5 6}}
;(alldiff {:x #{:rouge :blanc} :y #{:rouge :noir} :z #{:blanc :noir} :t #{:rouge, :blanc}}) ;nil
;(alldiff {:x #{:bleu :blanc} :y #{:rouge :noir} :z #{:blanc :rouge} :t #{:rouge, :blanc}}) ;{:y #{:noir}, :x #{:bleu}, :t #{:blanc :rouge}, :z #{:blanc :rouge}}




(defn elimine-block [grid n]
  ;on obtient un ensemble des vecteurs correspondant aux cases de la grille avec les valeurs dispo en fonction des valeurs déjà présentes dans le block
  (let [poss (loop [t (block grid n), a #{1 2 3 4 5 6 7 8 9}]
              (if (seq t)
                (if (= (count (first t)) 1)
                  (recur (rest t) a)
                  (if (set? ((first t) :value))
                    (recur (rest t) a)
                    (recur (rest t) (disj a ((first t) :value)))))
                a))]
    (loop [s (block grid n), v (reduce-block (fn [acc index cx cy cell] (conj acc [cx,cy])) [] (block sudoku-grid n) n), r {},p poss, i 0]
      (if (< i 9)
        (if (= (count (first (seq s))) 1)
          (recur (rest s) v (assoc r (nth v i) p) p (inc i))
          (if (set? ((first (seq s)) :value))
            (if (empty? ((first (seq s)) :value))
              (recur (rest s) v (assoc r (nth v i) p) p (inc i))
              (recur (rest s) v (assoc r (nth v i) (clojure.set/intersection ((first (seq s)) :value) p)) p (inc i)))
            (recur (rest s) v (assoc r (nth v i) #{((first (seq s)) :value)}) p (inc i))))
        r))))

;(elimine-block sudoku-grid 1)
;(elimine-block sudoku-grid 8)





(defn elimine-row [grid n]
  ;on obtient un ensemble des vecteurs avec les valeurs dispo en fonction des valeurs déjà présentes sur la ligne
  (let [poss (loop [t (row grid n), a #{1 2 3 4 5 6 7 8 9}]
              (if (seq t)
                (if (= (count (first t)) 1)
                   (recur (rest t) a)
                   (if (set? ((first t) :value))
                     (recur (rest t) a)
                     (recur (rest t) (disj a ((first t) :value)))))
                a))]
    (loop [s (row grid n), v [1 n], r {},p poss, i 0]
      (if (< i 9)
        (if (= (count (first (seq s))) 1)
          (recur (rest s) [(inc (inc i)) n] (assoc r v p) p (inc i))
          (if (set? ((first (seq s)) :value))
            (if (empty? ((first (seq s)) :value))
              (recur (rest s) [(inc (inc i)) n] (assoc r v p) p (inc i))
              (recur (rest s) [(inc (inc i)) n] (assoc r v (clojure.set/intersection ((first (seq s)) :value) p)) p (inc i)))
            (recur (rest s) [(inc (inc i)) n] (assoc r v #{((first (seq s)) :value)}) p (inc i))))
        r))))

;(elimine-row sudoku-grid 1)
;(elimine-row sudoku-grid 8)






(defn elimine-col [grid n]
  ;on obtient un ensemble des vecteurs avec les valeurs dispo en fonction des val déjà présentes sur la colonne
  (let [poss (loop [t (col grid n), a #{1 2 3 4 5 6 7 8 9}]
              (if (seq t)
                (if (= (count (first t)) 1)
                   (recur (rest t) a)
                   (if (set? ((first t) :value))
                     (recur (rest t) a)
                     (recur (rest t) (disj a ((first t) :value)))))
                a))]
    (loop [s (col grid n), v [n 1], r {},p poss, i 0]
      (if (< i 9)
        (if (= (count (first (seq s))) 1)
          (recur (rest s) [n (inc (inc i))] (assoc r v p) p (inc i))
          (if (set? ((first (seq s)) :value))
            (if (empty? ((first (seq s)) :value))
              (recur (rest s) [n (inc (inc i))] (assoc r v p) p (inc i))
              (recur (rest s) [n (inc (inc i))] (assoc r v (clojure.set/intersection ((first (seq s)) :value) p)) p (inc i)))
            (recur (rest s) [n (inc (inc i))] (assoc r v #{((first (seq s)) :value)}) p (inc i))))
        r))))

;(elimine-col sudoku-grid 1)
;(elimine-col sudoku-grid 8)






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

;(elimine-brc sudoku-grid)






(defn merge-brc [brc1 brc2]
  (loop [s brc2, m brc1]
    (if (seq s)
      (let [[k, v2] (first s)]
        (if-let [v1 (get m k)]
          (recur (rest s) (assoc m k (clojure.set/intersection v1 v2)))
          (recur (rest s) (assoc m k v2))))
      m)))

;(merge-brc (elimine-col sudoku-grid 3) (elimine-row sudoku-grid 2))





(defn elimine-grid [grid]
  (let [v (elimine-brc grid)]
    (let [prem (first (seq v))]
      (loop [s (rest (seq v)), res prem]
        (if (seq s)
          (recur (rest s) (merge-brc res (first s)))
          res)))))

;(elimine-grid sudoku-grid)





(defn modif-grid [grid map-grid]
  (loop [g grid, s map-grid]
    (if (seq s)
      (if (or (= :init ((cell g (first (first (first s))) (second (first (first s)))) :status)) (= :set ((cell g (first (first (first s))) (second (first (first s)))) :status)))
        (recur g (rest s))
        (if (= 1 (count (second (first s))))
          (recur (change-cell g (first (first (first s))) (second (first (first s))) {:status :set, :value (first (second (first s)))}) (rest s))
          (recur (change-cell g (first (first (first s))) (second (first (first s))) {:status :conflict, :value (second (first s))}) (rest s))))
      g)))

;(modif-grid sudoku-grid (elimine-grid sudoku-grid))






(defn clean-grid [grid]
  (let [g (modif-grid grid (elimine-grid grid))]
    (if (= grid g)
      grid
      (clean-grid g))))

;(clean-grid sudoku-grid)





(defn alldiff-brc [grid]
  (loop [i 1, res [], j 1]
    (if (= j 1)
      (if (< i 10)
        (recur (inc i) (conj res (merge-brc (alldiff (elimine-block grid i)) (elimine-block grid i))) j)
        (recur 1 res (inc j)))
      (if (= j 2)
        (if (< i 10)
          (recur (inc i) (conj res (merge-brc (alldiff (elimine-row grid i)) (elimine-row grid i))) j)
          (recur 1 res (inc j)))
        (if (= j 3)
          (if (< i 10)
            (recur (inc i) (conj res (merge-brc (alldiff (elimine-col grid i)) (elimine-col grid i))) j)
            res))))))

;(alldiff-brc (clean-grid sudoku-grid))




(defn elimine-alldiff-grid [grid]
  (let [v (alldiff-brc grid)]
    (let [prem (first (seq v))]
      (loop [s (rest (seq v)), res prem]
        (if (seq s)
          (recur (rest s) (merge-brc res (first s)))
          res)))))

;(elimine-alldiff-grid (clean-grid sudoku-grid))





(defn clean-alldiff-grid [grid]
  (let [g (modif-grid grid (elimine-alldiff-grid grid))]
    (if (= grid g)
      grid
      (clean-alldiff-grid g))))

;(clean-alldiff-grid (clean-grid sudoku-grid))




;**********************************************************************************************************************************






;*****    on cherche la bonne combinaison de valeurs pour que chaque case respecte les contraintes des règles du sudoku   *********





(defn intervalle[min max]
  (into #{} (range min max)))

;(intervalle 1 5)




(defn all-singleton? [doms]
  ;tester si tous les domaines sont des singletons
  (every? #(= (count %) 1) (vals doms)))

;(all-singleton? {:a #{1}, :b #{2}})





(defn select-var [doms]
  ;selectionne la premiere variable dont le domaine est d'arité supérieure à 1
  (some (fn [[x xdom]]
          (if (> (count xdom) 1)
            x
            nil)) doms))

;(select-var {:a #{1}, :b #{2 3 4}})





(defn constraint-block [grid n]
  (let [base (loop [res {}, v (reduce-block (fn [acc index cx cy cell] (conj acc [cx,cy])) [] (block sudoku-grid n) n), i 0]
              (if (< i 9)
                (recur (assoc res i (nth v i)) v (inc i))
                res))]
    (assoc base :check not=)))

;(constraint-block sudoku-grid 5)






(defn constraint-row [grid n]
  (let [base (loop [res {}, v [1 n], i 0]
              (if (< i 9)
                (recur (assoc res i [(inc i) n]) v (inc i))
                res))]
    (assoc base :check not=)))

;(constraint-row sudoku-grid 5)






(defn constraint-col [grid n]
  (let [base (loop [res {}, v [n 1], i 0]
              (if (< i 9)
                (recur (assoc res i [n (inc i)]) v (inc i))
                res))]
    (assoc base :check not=)))

;(constraint-col sudoku-grid 5)






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

;regarde si la contrainte est respectée dans le block 2 de la grille de sudoku
;(check-constraint (constraint-block sudoku-grid 2) (elimine-grid sudoku-grid))

;regarde si la contrainte est respectée dans sur la ligne 5 de la grille du sudoku
;(check-constraint (constraint-row sudoku-grid 5) (elimine-grid sudoku-grid))

;regarde si la contrainte est respectée sur la colonne 7 de la grille du sudoku
;(check-constraint (constraint-col sudoku-grid 2) (elimine-grid sudoku-grid))






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

;(get-block 8 5)






(defn constraint-grid [grid cx cy]
  ;contraintes d'une case en particulier
  (let [row (constraint-row grid cy), col (constraint-col grid cx),
        bl (constraint-block grid (get-block cx cy)), fin (conj (conj (conj {} row) col) bl)]
    (conj (conj (conj [] row) col) bl)))

;(constraint-grid sudoku-grid 5 6)
;(check-constraint (first (constraint-grid sudoku-grid 5 6)) sudoku-grid)







(defn check-constraint-particular [constraint ngrid]
  ;grid = grille de départ /ngrid = grille qu'il faut vérifier
  (loop [i 1, j 1]
    (if (< i 10)
      (if (< j 10)
        (if (and (and (= (check-constraint (first (constraint ngrid i j)) ngrid) true)
                      (= (check-constraint (second (constraint ngrid i j)) ngrid) true)
                  (= (check-constraint (nth (constraint ngrid i j) 2) ngrid) true)))
          (recur i (inc j))
          false)
        (recur (inc i) 1))
      true)))

;(check-constraint-particular constraint-grid (elimine-grid sudoku-grid))
;(check-constraint (nth (constraint-grid sudoku-grid 1 2) 2) (elimine-grid sudoku-grid))




;find-solution2 sur la grille obtenue avec des contraintes qui va vérifier que pour chaque case,
;la contrainte de colonne, de ligne et de block est respectée


(defn find-solution2 [constraints doms]
  ;renvoie la première solution possible qui respecte les contraintes
  (if (all-singleton? doms)
    (if (check-constraint-particular constraints doms)
      doms
      nil)
    (let [x (select-var doms)]
      (loop [xvals (get doms x)]
        (if (seq xvals)
          (let [sol (find-solution2 constraints (assoc doms x #{(first xvals)}))]
            (if sol
              sol
              (recur (rest xvals))))
          nil)))))





;**********************************************************************************************************************************************






(defn solve
  "Solve the sudoku `grid` by returing a full solved grid,
 or `nil` if the solver fails."
  [grid]
  (modif-grid (clean-alldiff-grid (clean-grid sudoku-grid)) (find-solution2 constraint-grid (elimine-grid (clean-alldiff-grid (clean-grid sudoku-grid))))))
