(ns mrsudoku.conflict-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [mrsudoku.model.grid :as g]
            [mrsudoku.model.conflict :refer [values values-except
                                             mk-conflict merge-conflict-kind
                                             row-conflicts
                                             grid-conflicts]]))

(def ^:private sudoku-grid @#'g/sudoku-grid)

(deftest values-test
  (is (= (values (g/block sudoku-grid 1))
         #{5 3 6 9 8}))

  (is (= (values (g/row sudoku-grid 1))
         #{5 3 7}))

  (is (= (values (g/col sudoku-grid 1))
         #{5 6 8 4 7}))

  (is (= (values (g/block sudoku-grid 8))
         #{4 1 9 8}))

  (is (= (values (g/row sudoku-grid 8))
         #{4 1 9 5}))

  (is (= (values (g/col sudoku-grid 8))
         #{6 8 7})))


(deftest values-except-test
  (is (= (values-except (g/block sudoku-grid 1) 1)
         #{3 6 9 8}))

  (is (= (values-except (g/block sudoku-grid 1) 4)
         #{5 3 9 8})))


(deftest merge-conflict-kind-test
  (is (= (merge-conflict-kind :row :row)
         :row))

  (is (= (merge-conflict-kind :row :block)
         #{:row :block}))

  (is (= (merge-conflict-kind :row #{:row :block})
         #{:block :row}))

  (is (= (merge-conflict-kind #{:row :block} :block)
         #{:block :row}))

  (is (= (merge-conflict-kind #{:row :block} #{:block :col})
         #{:block :row :col})))


(deftest row-conflicts-tests
  (is (= (row-conflicts (map #(g/mk-cell :set %) [1 2 3 4]) 1)
         {}))

  (is (= (row-conflicts (map #(g/mk-cell :set %) [1 2 3 1]) 1)
         {[1 1] {:status :conflict, :kind :row, :value 1},
          [4 1] {:status :conflict, :kind :row, :value 1}}))

  (is (= (row-conflicts [{:status :init, :value 8} {:status :empty} {:status :empty} {:status :empty} {:status :init, :value 6} {:status :set, :value 6} {:status :empty} {:status :empty} {:status :init, :value 3}] 4)
         {[6 4] {:status :conflict, :kind :row, :value 6}})))

(deftest grid-conflicts-test
  (is (= (grid-conflicts sudoku-grid)
         {})))
