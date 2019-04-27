(ns mrsudoku.grid-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [mrsudoku.model.grid :as g :refer [cell-value cell change-cell cell->str
                                               block reduce-block do-block
                                               block-row row row->str rows
                                               grid->str
                                               col
                                               reduce-grid do-grid
                                               augment
                                               max-matching
                                               cle
                                               dfs
                                               dfs-post
                                               dfs-stack
                                               inv-edges
                                               merge-edges
                                               transpose
                                               compute-scc
                                               vars-of
                                               complete-matching
                                               add-vertex
                                               add-edge
                                               remove-edge
                                               graph-with-matching
                                               doms-from-sccomp
                                               doms-from-scc
                                               isolated-values
                                               value-known-by
                                               add-value
                                               access
                                               alldiff
                                               intervalle
                                               check-constraint
                                               all-singleton?
                                               build-solution
                                               solution?
                                               select-var
                                               find-solution
                                               nettoie
                                               find-all-solutions
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
                                               ]]))

(def alldiff-doms {:x1 #{1 2 3} :x2 #{1 2 4 5} :x3 #{4 5 6} :x4 #{4 5 6} :x5 #{4 5 6}})
(def graph1 {:A #{:F :B :C}, :B #{:C}, :C #{:D}, :D #{:E}, :E #{:C}, :F #{:H :G}, :G #{:H :I}, :H #{:F :I}, :I #{}})
(def graph3 {:v2 #{4 2 5}, 1 #{:v2}, :v5 #{6 5}, :v1 #{1 2}, 4 #{:v5}, 6 #{:v4}, 3 #{:v1}, :v4 #{4 5}, :v3 #{4 6}, 5 #{:v3}})
(def graph4 {:v1 #{}, :v2 #{}, :v5 #{4 6 5}, :v4 #{4 6 5}, :v3 #{4 6 5}})
(def contrainte {:var1 :b, :var2 :a, :check not=})
(def contrainte1 [{:var1 :b, :var2 :a, :check not=}])
(def contraintes [{:var1 :b, :var2 :a, :check not=}
                  {:var1 :b, :var2 :a, :check >=}])
(def foo (conj (lazy-seq [1 2 3]) 0))
(def sudoku-grid [[[{:status :init, :value 5} {:status :init, :value 3} {:status :empty} {:status :init, :value 6} {:status :empty} {:status :empty} {:status :empty} {:status :init, :value 9} {:status :init, :value 8}] [{:status :empty} {:status :init, :value 7} {:status :empty} {:status :init, :value 1} {:status :init, :value 9} {:status :init, :value 5} {:status :empty} {:status :empty} {:status :empty}] [{:status :empty} {:status :empty} {:status :empty} {:status :empty} {:status :empty} {:status :empty} {:status :empty} {:status :init, :value 6} {:status :empty}]] [[{:status :init, :value 8} {:status :empty} {:status :empty} {:status :init, :value 4} {:status :empty} {:status :empty} {:status :init, :value 7} {:status :empty} {:status :empty}] [{:status :empty} {:status :init, :value 6} {:status :empty} {:status :init, :value 8} {:status :empty} {:status :init, :value 3} {:status :empty} {:status :init, :value 2} {:status :empty}] [{:status :empty} {:status :empty} {:status :init, :value 3} {:status :empty} {:status :empty} {:status :init, :value 1} {:status :empty} {:status :empty} {:status :init, :value 6}]] [[{:status :empty} {:status :init, :value 6} {:status :empty} {:status :empty} {:status :empty} {:status :empty} {:status :empty} {:status :empty} {:status :empty}] [{:status :empty} {:status :empty} {:status :empty} {:status :init, :value 4} {:status :init, :value 1} {:status :init, :value 9} {:status :empty} {:status :init, :value 8} {:status :empty}] [{:status :init, :value 2} {:status :init, :value 8} {:status :empty} {:status :empty} {:status :empty} {:status :init, :value 5} {:status :empty} {:status :init, :value 7} {:status :init, :value 9}]]])


(deftest cell-value-test
  (is (= (find-solution contraintes {:a #{1 2 3}, :b #{3 4}}) 1))
  (is (= (find-all-solutions contraintes {:a #{1 2 3}, :b #{3 4}}) 1))
  (is (= (nettoie (find-all-solutions contraintes {:a #{1 2 3}, :b #{3 4}})) 1))
  ;(is (= (elimine-row sudoku-grid 1) 1)))
  (is (= (find-all-solutions (constraint-block sudoku-grid 2) (elimine-grid sudoku-grid)) 1)))


;(def sudoku-grid @#'g/sudoku-grid)

(deftest cell-test
  (is (= (cell sudoku-grid 1 1)
         {:status :init, :value 5}))

  (is (= (cell sudoku-grid 2 1)
         {:status :init, :value 3}))

  (is (= (cell sudoku-grid 3 1)
         {:status :empty}))

  (is (= (cell sudoku-grid 1 2)
         {:status :init, :value 6}))

  (is (= (cell sudoku-grid 5 2)
         {:status :init, :value 9}))

  (is (= (cell sudoku-grid 5 6)
         {:status :init, :value 2}))

  (is (= (cell sudoku-grid 9 9))
      {:status :init, :value 9}))

(deftest change-cell-test
  (is (= (cell (change-cell sudoku-grid 1 1 {:status :set, :value 4}) 1 1)
         {:status :set, :value 4})))


(deftest cell->str-test
  (is (= (cell->str (cell sudoku-grid 1 1)) " 5 "))
  (is (= (cell->str (cell sudoku-grid 1 3)) " . ")))

(deftest block-test
  (is (= (block sudoku-grid 1)
         [{:status :init, :value 5}
          {:status :init, :value 3}
          {:status :empty}
          {:status :init, :value 6}
          {:status :empty}
          {:status :empty}
          {:status :empty}
          {:status :init, :value 9}
          {:status :init, :value 8}]))

  (is (= (block sudoku-grid 8)
         [{:status :empty}
          {:status :empty}
          {:status :empty}
          {:status :init, :value 4}
          {:status :init, :value 1}
          {:status :init, :value 9}
          {:status :empty}
          {:status :init, :value 8}
          {:status :empty}])))

(deftest reduce-block-test
  (is (= (reduce-block (fn [acc index cx cy cell]
                         (conj acc [index, [cx,cy]])) [] (block sudoku-grid 1) 1)
         [[1 [1 1]] [2 [2 1]] [3 [3 1]] [4 [1 2]] [5 [2 2]] [6 [3 2]] [7 [1 3]] [8 [2 3]] [9 [3 3]]]))

  (is (= (reduce-block (fn [acc index cx cy cell]
                        (conj acc (cell-value cell))) [] (block sudoku-grid 1) 1)
         [5 3 nil 6 nil nil nil 9 8]))

  (is (= (reduce-block (fn [acc index cx cy cell]
                        (conj acc [cx,cy])) [] (block sudoku-grid 8) 8)
         [[4 7] [5 7] [6 7] [4 8] [5 8] [6 8] [4 9] [5 9] [6 9]])))


(deftest do-block-test
  (is (= (let [cnt (atom 0)]
           (do-block (fn [index cx cy cell]
                       (when (= (:status cell) :empty)
                         (swap! cnt #(+ % 1)))) (block sudoku-grid 1) 1)
           @cnt)
         4)))


(deftest block-row-test
  (is (= (block-row (nth (nth sudoku-grid 0) 0) 1)
         [{:status :init, :value 5} {:status :init, :value 3} {:status :empty}]))

  (is (= (block-row (nth (nth sudoku-grid 0) 0) 2)
         [{:status :init, :value 6} {:status :empty} {:status :empty}]))

  (is (= (block-row (nth (nth sudoku-grid 0) 0) 3)
         [{:status :empty} {:status :init, :value 9} {:status :init, :value 8}])))


(deftest row-test
  (is (= (row sudoku-grid 1)
         [{:status :init, :value 5}
          {:status :init, :value 3}
          {:status :empty}
          {:status :empty}
          {:status :init, :value 7}
          {:status :empty}
          {:status :empty}
          {:status :empty}
          {:status :empty}]))

  (is (= (row sudoku-grid 7)
         [{:status :empty}
          {:status :init :value 6}
          {:status :empty}
          {:status :empty}
          {:status :empty}
          {:status :empty}
          {:status :init, :value 2}
          {:status :init, :value 8}
          {:status :empty}])))

(deftest row->str-test
  (is (= (row->str (row sudoku-grid 1))
         " 5   3   .   .   7   .   .   .   . ")))

(deftest rows-test
  (is (= (count (rows sudoku-grid))
         9)))

(deftest grid->str-test
  (is (= (grid->str sudoku-grid)
         " 5   3   .   .   7   .   .   .   . \n 6   .   .   1   9   5   .   .   . \n .   9   8   .   .   .   .   6   . \n 8   .   .   .   6   .   .   .   3 \n 4   .   .   8   .   3   .   .   1 \n 7   .   .   .   2   .   .   .   6 \n .   6   .   .   .   .   2   8   . \n .   .   .   4   1   9   .   .   5 \n .   .   .   .   8   .   .   7   9 ")))


(deftest col-test
  (is (= (col sudoku-grid 1)
         [{:status :init, :value 5}
          {:status :init, :value 6}
          {:status :empty}
          {:status :init, :value 8}
          {:status :init, :value 4}
          {:status :init, :value 7}
          {:status :empty}
          {:status :empty}
          {:status :empty}]))

  (is (= (col sudoku-grid 8)
         [{:status :empty}
          {:status :empty}
          {:status :init, :value 6}
          {:status :empty}
          {:status :empty}
          {:status :empty}
          {:status :init, :value 8}
          {:status :empty}
          {:status :init, :value 7}])))


(deftest reduce-grid-test
  (is (= (reduce-grid (fn [acc cx cy cell]
                        (if (= (:status cell) :empty)
                          (+ acc 1)
                          acc)) 0 sudoku-grid)
         51)))


(deftest do-grid-test
  (is (= (let [cnt (atom 0)]
           (do-grid (fn [cx cy cell]
                      (when (= (:status cell) :empty)
                        (swap! cnt #(+ % 1)))) sudoku-grid)
           @cnt)
         51)))
