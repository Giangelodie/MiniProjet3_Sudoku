

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

;(cell sudoku-grid 1 5)

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

;(change-cell sudoku-grid 1 3 {:status :init, :value 3})

(defn block
  "Get the #`b` block of the `grid`."
  [grid b]
  {:pre [(<= 1 b 9)]}
  (let [row (quot (- b 1) 3)
        blk (rem (- b 1) 3)]
    (nth (nth grid row) blk)))

(block sudoku-grid 1)

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

;(block-row (block sudoku-grid 2) 2)


(defn concatv
  "Concatenate vectors."
  ([] [])
  ([v] v)
  ([v1 v2] (into v1 v2))
  ([v1 v2 & more]
   (into v1 (apply concat (cons v2 more)))))

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

(row sudoku-grid 3)

(defn col
  "Get the #`c` column of the `grid`."
  [grid c]
  {:pre [(<= 1 c 9)]}
  (into [] (for [cy (range 1 10)]
             (cell grid c cy))))

(col sudoku-grid 4)




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

(elimine-block sudoku-grid 1) ;{[1 2] #{6}, [2 2] #{7 1 4 2}, [3 2] #{7 1 4 2}, [1 3] #{7 1 4 2}, [2 3] #{9}, [3 1] #{7 1 4 2}, [1 1] #{5}, [3 3] #{8}, [2 1] #{3}}
;(elimine-block sudoku-grid 8) ;{[6 8] #{9}, [6 9] #{7 6 3 2 5}, [5 7] #{7 6 3 2 5}, [5 9] #{8}, [4 7] #{7 6 3 2 5}, [4 9] #{7 6 3 2 5}, [6 7] #{7 6 3 2 5}, [4 8] #{4}, [5 8] #{1}}


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

;(elimine-row sudoku-grid 1) ;{[9 1] #{1 4 6 2 9 8}, [7 1] #{1 4 6 2 9 8}, [8 1] #{1 4 6 2 9 8}, [3 1] #{1 4 6 2 9 8}, [5 1] #{7}, [1 1] #{5}, [2 1] #{3}, [4 1] #{1 4 6 2 9 8}, [6 1] #{1 4 6 2 9 8}}
;(elimine-row sudoku-grid 8) ;{[6 8] #{9}, [8 8] #{7 6 3 2 8}, [4 8] #{4}, [1 8] #{7 6 3 2 8}, [7 8] #{7 6 3 2 8}, [5 8] #{1}, [3 8] #{7 6 3 2 8}, [9 8] #{5}, [2 8] #{7 6 3 2 8}}

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

;(elimine-col sudoku-grid 1) ;{[1 2] #{6}, [1 5] #{4}, [1 3] #{1 3 2 9}, [1 1] #{5}, [1 4] #{8}, [1 7] #{1 3 2 9}, [1 8] #{1 3 2 9}, [1 9] #{1 3 2 9}, [1 6] #{7}}
;(elimine-col sudoku-grid 8) ;{[8 5] #{1 4 3 2 9 5}, [8 1] #{1 4 3 2 9 5}, [8 3] #{6}, [8 8] #{1 4 3 2 9 5}, [8 7] #{8}, [8 4] #{1 4 3 2 9 5}, [8 6] #{1 4 3 2 9 5}, [8 9] #{7}, [8 2] #{1 4 3 2 9 5}}

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

(elimine-brc sudoku-grid)


(defn merge-brc [brc1 brc2]
  (loop [s brc2, m brc1]
    (if (seq s)
      (let [[k, v2] (first s)]
        (if-let [v1 (get m k)]
          (recur (rest s) (assoc m k (clojure.set/intersection v1 v2)))
          (recur (rest s) (assoc m k v2))))
      m)))

(merge-brc (elimine-col sudoku-grid 3) (elimine-row sudoku-grid 2)) ;{[3 4] #{7 1 4 6 3 2 9 5}, [1 2] #{6}, [2 2] #{7 4 3 2 8}, [3 2] #{7 4 3 2}, [7 2] #{7 4 3 2 8}, [4 2] #{1}, [5 2] #{9}, [3 1] #{7 1 4 6 3 2 9 5}, [3 3] #{8}, [3 5] #{7 1 4 6 3 2 9 5}, [3 9] #{7 1 4 6 3 2 9 5}, [3 6] #{7 1 4 6 3 2 9 5}, [3 8] #{7 1 4 6 3 2 9 5}, [3 7] #{7 1 4 6 3 2 9 5}, [6 2] #{5}, [8 2] #{7 4 3 2 8}, [9 2] #{7 4 3 2 8}}

(defn elimine-grid [grid]
  (let [v (elimine-brc grid)]
    (let [prem (first (seq v))]
      (loop [s (rest (seq v)), res prem]
        (if (seq s)
          (recur (rest s) (merge-brc res (first s)))
          res)))))

(elimine-grid sudoku-grid)

(defn constraint-block [grid n]
  (let [base (loop [res {}, v (reduce-block (fn [acc index cx cy cell] (conj acc [cx,cy])) [] (block sudoku-grid n) n), i 0]
              (if (< i 9)
                (recur (assoc res i (nth v i)) v (inc i))
                res))]
    (assoc base :check not=)))

(constraint-block sudoku-grid 5)
(reduce-block (fn [acc index cx cy cell] (conj acc [cx,cy])) [] (block sudoku-grid 1) 1)

(defn constraint-row [grid n]
  (let [base (loop [res {}, v [1 n], i 0]
              (if (< i 9)
                (recur (assoc res i [(inc (inc i)) n]) v (inc i))
                res))]
    (assoc base :check not=)))

(constraint-row sudoku-grid 5)


(defn constraint-col [grid n]
  (let [base (loop [res {}, v [n 1], i 0]
              (if (< i 9)
                (recur (assoc res i [n (inc (inc i))]) v (inc i))
                res))]
    (assoc base :check not=)))

(constraint-col sudoku-grid 5)
(constraint-col (elimine-grid sudoku-grid) 5)

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
(check-constraint (constraint-block sudoku-grid 2) (elimine-grid sudoku-grid));true

;regarde si la contrainte est respectée sur la ligne 5 de la grille du sudoku
(check-constraint (constraint-row sudoku-grid 5) (elimine-grid sudoku-grid));true

;regarde si la contrainte est respectée sur la colonne 7 de la grille du sudoku
(check-constraint (constraint-col sudoku-grid 2) (elimine-grid sudoku-grid));true

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

(get-block 8 5)


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

(check-constraint-particular sudoku-grid (elimine-grid sudoku-grid))





cell-value
cell
change-cell
block
reduce-block
block-row
concatv
row
col
elimine-block
elimine-row
elimine-col
elimine-brc
merge-brc
elimine-grid
constraint-block
constraint-col
constraint-row
check-constraint
get-block
check-constraint-particular
