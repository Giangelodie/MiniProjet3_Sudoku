(ns figwheel.main.generated.mrsudoku-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [mrsudoku.conflict-test] [mrsudoku.grid-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote mrsudoku.conflict-test) (quote mrsudoku.grid-test))