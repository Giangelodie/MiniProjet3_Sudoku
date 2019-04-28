(defproject mrsudoku "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.0"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-garden "0.2.8"]
            [lein-doo "0.1.10"]]

  :source-paths ["src/clj" "src/cljs" "test/cljs" "resources"]

  :resource-paths ["target"]

  :aliases { "fig" ["trampoline" "run" "-m" "figwheel.main"]
            "build" ["trampoline" "run" "-m" "figwheel.main" "-b" "mrsudoku"]}
  
  :garden {:builds [{:id           "screen"
                     :source-paths ["src/clj"]
                     :stylesheet   mrsudoku.css/screen
                     :compiler     {:output-to     "resources/public/css/screen.css"
                                    :pretty-print? true}}]}

  :clean-targets ^{:protect false} ["target"
                                      "resources/public/css"]

  :profiles
  {:dev
   {:dependencies [[org.clojure/clojurescript "1.10.339"]
                   [com.bhauman/figwheel-main "0.2.0"]
                   [com.bhauman/rebel-readline-cljs "0.1.4"]
                   [com.bhauman/cljs-test-display "0.1.1"]
                   [binaryage/devtools "0.9.10"]
                   [doo "0.1.10"]
                   [reagent "0.7.0"]
                   [re-frame "0.10.5"]
                   [garden "1.3.5"]
                   [ns-tracker "0.3.1"]]}

   :css-dirs ["resources/public/css"]

   :clean-targets ^{:protect false} ["target"
                                      "resources/public/css"]}

  :cljsbuild
  {:builds
   [{:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main            mrsudoku.core
                    :output-to            "target/public/cljs-out/mrsudoku-main.js"
                    :asset-path           "target/public/cljs-out/mrsudoku"
                    :optimizations   :simple
                    :pretty-print    false}}]})
