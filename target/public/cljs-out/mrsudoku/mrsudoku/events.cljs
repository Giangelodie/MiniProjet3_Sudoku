(ns mrsudoku.events
  (:require
   [re-frame.core :as re-frame]
   [mrsudoku.db :as db]
   [mrsudoku.model.grid :as g]
   [mrsudoku.model.conflict :as c]
   [mrsudoku.model.solver :as s]))

(re-frame/reg-event-db
 :initialize
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 :cell-value-changed
 (fn [db [_ [newval cell-col cell-row]]]
   ;;(println "[cell-value-changed] newval= "newval " cell-col=" cell-col " cell-row=" cell-row)
   (let [nval (js/parseInt newval)
         val-ok? (<= 1 nval 9)
         grid (g/change-cell (:grid db) cell-col cell-row (if val-ok?
                                                            (g/mk-cell :set nval)
                                                            (g/mk-cell)))
         conflicts (c/grid-conflicts grid)]
     (assoc db
            :grid grid
            :conflicts conflicts))))

(re-frame/reg-event-db
 :solve-button-clicked
 (fn [db _]
   (if-let [grid' (s/solve (:grid db))]
     (assoc db
            :grid grid'
            :conflicts {})
     ;; pas solvable
     (do (js/alert "Cannot solve Sudoku")
         db))))
