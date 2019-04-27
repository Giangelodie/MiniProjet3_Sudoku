// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.main.generated.mrsudoku_auto_test_runner');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('cljs_test_display.core');
goog.require('mrsudoku.conflict_test');
goog.require('mrsudoku.grid_test');
cljs.test.run_block.call(null,(function (){var env11699 = cljs_test_display.core.init_BANG_.call(null,"app-auto-testing");
var summary11700 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11699,summary11700){
return (function (){
cljs.test.set_env_BANG_.call(null,env11699);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mrsudoku.conflict-test","mrsudoku.conflict-test",1657383328,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9212__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9212__auto__,env11699,summary11700){
return (function (){
if((env__9212__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9212__auto__,env11699,summary11700))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return mrsudoku.conflict_test.values_test;},new cljs.core.Symbol("mrsudoku.conflict-test","values-test","mrsudoku.conflict-test/values-test",508589795,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.conflict-test","mrsudoku.conflict-test",1657383328,null),new cljs.core.Symbol(null,"values-test","values-test",701694124,null),"C:\\Users\\elodi\\Desktop\\mrsudoku-project\\test\\cljs\\mrsudoku\\conflict_test.cljs",21,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.conflict_test.values_test)?mrsudoku.conflict_test.values_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.conflict_test.values_except_test;},new cljs.core.Symbol("mrsudoku.conflict-test","values-except-test","mrsudoku.conflict-test/values-except-test",873694256,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.conflict-test","mrsudoku.conflict-test",1657383328,null),new cljs.core.Symbol(null,"values-except-test","values-except-test",1603753547,null),"C:\\Users\\elodi\\Desktop\\mrsudoku-project\\test\\cljs\\mrsudoku\\conflict_test.cljs",28,1,31,31,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.conflict_test.values_except_test)?mrsudoku.conflict_test.values_except_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.conflict_test.merge_conflict_kind_test;},new cljs.core.Symbol("mrsudoku.conflict-test","merge-conflict-kind-test","mrsudoku.conflict-test/merge-conflict-kind-test",-682754260,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.conflict-test","mrsudoku.conflict-test",1657383328,null),new cljs.core.Symbol(null,"merge-conflict-kind-test","merge-conflict-kind-test",-36793881,null),"C:\\Users\\elodi\\Desktop\\mrsudoku-project\\test\\cljs\\mrsudoku\\conflict_test.cljs",34,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.conflict_test.merge_conflict_kind_test)?mrsudoku.conflict_test.merge_conflict_kind_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.conflict_test.row_conflicts_tests;},new cljs.core.Symbol("mrsudoku.conflict-test","row-conflicts-tests","mrsudoku.conflict-test/row-conflicts-tests",1931415602,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.conflict-test","mrsudoku.conflict-test",1657383328,null),new cljs.core.Symbol(null,"row-conflicts-tests","row-conflicts-tests",-2070133257,null),"C:\\Users\\elodi\\Desktop\\mrsudoku-project\\test\\cljs\\mrsudoku\\conflict_test.cljs",29,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.conflict_test.row_conflicts_tests)?mrsudoku.conflict_test.row_conflicts_tests.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.conflict_test.grid_conflicts_test;},new cljs.core.Symbol("mrsudoku.conflict-test","grid-conflicts-test","mrsudoku.conflict-test/grid-conflicts-test",1139890947,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.conflict-test","mrsudoku.conflict-test",1657383328,null),new cljs.core.Symbol(null,"grid-conflicts-test","grid-conflicts-test",1953691334,null),"C:\\Users\\elodi\\Desktop\\mrsudoku-project\\test\\cljs\\mrsudoku\\conflict_test.cljs",29,1,67,67,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.conflict_test.grid_conflicts_test)?mrsudoku.conflict_test.grid_conflicts_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9212__auto__,env11699,summary11700){
return (function (){
if((env__9212__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9212__auto__,env11699,summary11700))
], null));
})());
});})(env11699,summary11700))
,((function (env11699,summary11700){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mrsudoku.conflict-test","mrsudoku.conflict-test",1657383328,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11699,summary11700))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11699,summary11700){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11700,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11700),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11699,summary11700))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11699,summary11700){
return (function (){
cljs.test.set_env_BANG_.call(null,env11699);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9212__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9212__auto__,env11699,summary11700){
return (function (){
if((env__9212__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9212__auto__,env11699,summary11700))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return mrsudoku.grid_test.cell_value_test;},new cljs.core.Symbol("mrsudoku.grid-test","cell-value-test","mrsudoku.grid-test/cell-value-test",-1788345675,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"cell-value-test","cell-value-test",-1994453812,null),"test\\cljs\\mrsudoku\\grid_test.cljs",25,1,67,67,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.cell_value_test)?mrsudoku.grid_test.cell_value_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.cell_test;},new cljs.core.Symbol("mrsudoku.grid-test","cell-test","mrsudoku.grid-test/cell-test",-1433825157,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"cell-test","cell-test",-834884062,null),"test\\cljs\\mrsudoku\\grid_test.cljs",19,1,77,77,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.cell_test)?mrsudoku.grid_test.cell_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.change_cell_test;},new cljs.core.Symbol("mrsudoku.grid-test","change-cell-test","mrsudoku.grid-test/change-cell-test",-610824382,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"change-cell-test","change-cell-test",-16474855,null),"test\\cljs\\mrsudoku\\grid_test.cljs",26,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.change_cell_test)?mrsudoku.grid_test.change_cell_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.cell__GT_str_test;},new cljs.core.Symbol("mrsudoku.grid-test","cell->str-test","mrsudoku.grid-test/cell->str-test",893279020,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"cell->str-test","cell->str-test",1371744741,null),"test\\cljs\\mrsudoku\\grid_test.cljs",24,1,104,104,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.cell__GT_str_test)?mrsudoku.grid_test.cell__GT_str_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.block_test;},new cljs.core.Symbol("mrsudoku.grid-test","block-test","mrsudoku.grid-test/block-test",-1170635150,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"block-test","block-test",-1580420037,null),"test\\cljs\\mrsudoku\\grid_test.cljs",20,1,108,108,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.block_test)?mrsudoku.grid_test.block_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.reduce_block_test;},new cljs.core.Symbol("mrsudoku.grid-test","reduce-block-test","mrsudoku.grid-test/reduce-block-test",641326004,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"reduce-block-test","reduce-block-test",42781039,null),"test\\cljs\\mrsudoku\\grid_test.cljs",27,1,131,131,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.reduce_block_test)?mrsudoku.grid_test.reduce_block_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.do_block_test;},new cljs.core.Symbol("mrsudoku.grid-test","do-block-test","mrsudoku.grid-test/do-block-test",-852742865,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"do-block-test","do-block-test",568271094,null),"test\\cljs\\mrsudoku\\grid_test.cljs",23,1,145,145,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.do_block_test)?mrsudoku.grid_test.do_block_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.block_row_test;},new cljs.core.Symbol("mrsudoku.grid-test","block-row-test","mrsudoku.grid-test/block-row-test",-624680371,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"block-row-test","block-row-test",-45525902,null),"test\\cljs\\mrsudoku\\grid_test.cljs",24,1,154,154,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.block_row_test)?mrsudoku.grid_test.block_row_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.row_test;},new cljs.core.Symbol("mrsudoku.grid-test","row-test","mrsudoku.grid-test/row-test",-819214850,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"row-test","row-test",-357106937,null),"test\\cljs\\mrsudoku\\grid_test.cljs",18,1,165,165,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.row_test)?mrsudoku.grid_test.row_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.row__GT_str_test;},new cljs.core.Symbol("mrsudoku.grid-test","row->str-test","mrsudoku.grid-test/row->str-test",-991819831,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"row->str-test","row->str-test",-646900240,null),"test\\cljs\\mrsudoku\\grid_test.cljs",23,1,188,188,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.row__GT_str_test)?mrsudoku.grid_test.row__GT_str_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.rows_test;},new cljs.core.Symbol("mrsudoku.grid-test","rows-test","mrsudoku.grid-test/rows-test",-1356857998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"rows-test","rows-test",-1030561655,null),"test\\cljs\\mrsudoku\\grid_test.cljs",19,1,192,192,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.rows_test)?mrsudoku.grid_test.rows_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.grid__GT_str_test;},new cljs.core.Symbol("mrsudoku.grid-test","grid->str-test","mrsudoku.grid-test/grid->str-test",-1928268805,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"grid->str-test","grid->str-test",-513546830,null),"test\\cljs\\mrsudoku\\grid_test.cljs",24,1,196,196,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.grid__GT_str_test)?mrsudoku.grid_test.grid__GT_str_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.col_test;},new cljs.core.Symbol("mrsudoku.grid-test","col-test","mrsudoku.grid-test/col-test",-408674171,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"col-test","col-test",-1944513972,null),"test\\cljs\\mrsudoku\\grid_test.cljs",18,1,201,201,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.col_test)?mrsudoku.grid_test.col_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.reduce_grid_test;},new cljs.core.Symbol("mrsudoku.grid-test","reduce-grid-test","mrsudoku.grid-test/reduce-grid-test",947375245,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"reduce-grid-test","reduce-grid-test",502968900,null),"test\\cljs\\mrsudoku\\grid_test.cljs",26,1,225,225,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.reduce_grid_test)?mrsudoku.grid_test.reduce_grid_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return mrsudoku.grid_test.do_grid_test;},new cljs.core.Symbol("mrsudoku.grid-test","do-grid-test","mrsudoku.grid-test/do-grid-test",-633054817,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Symbol(null,"do-grid-test","do-grid-test",-19322304,null),"test\\cljs\\mrsudoku\\grid_test.cljs",22,1,233,233,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.grid_test.do_grid_test)?mrsudoku.grid_test.do_grid_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9212__auto__,env11699,summary11700){
return (function (){
if((env__9212__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9212__auto__,env11699,summary11700))
], null));
})());
});})(env11699,summary11700))
,((function (env11699,summary11700){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mrsudoku.grid-test","mrsudoku.grid-test",315689397,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11699,summary11700))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11699,summary11700){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11700,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11700),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11699,summary11700))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11699,summary11700){
return (function (){
cljs.test.set_env_BANG_.call(null,env11699);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary11700));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary11700),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env11699,summary11700))
], null));
})());

//# sourceMappingURL=mrsudoku_auto_test_runner.js.map
