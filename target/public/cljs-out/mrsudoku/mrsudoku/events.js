// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mrsudoku.db');
goog.require('mrsudoku.model.grid');
goog.require('mrsudoku.model.conflict');
goog.require('mrsudoku.model.solver');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return mrsudoku.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"cell-value-changed","cell-value-changed",-452878054),(function (db,p__11667){
var vec__11668 = p__11667;
var _ = cljs.core.nth.call(null,vec__11668,(0),null);
var vec__11671 = cljs.core.nth.call(null,vec__11668,(1),null);
var newval = cljs.core.nth.call(null,vec__11671,(0),null);
var cell_col = cljs.core.nth.call(null,vec__11671,(1),null);
var cell_row = cljs.core.nth.call(null,vec__11671,(2),null);
var nval = parseInt(newval);
var val_ok_QMARK_ = ((((1) <= nval)) && ((nval <= (9))));
var grid = mrsudoku.model.grid.change_cell.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(db),cell_col,cell_row,((val_ok_QMARK_)?mrsudoku.model.grid.mk_cell.call(null,new cljs.core.Keyword(null,"set","set",304602554),nval):mrsudoku.model.grid.mk_cell.call(null)));
var conflicts = mrsudoku.model.conflict.grid_conflicts.call(null,grid);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"grid","grid",402978600),grid,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),conflicts);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"solve-button-clicked","solve-button-clicked",-415460974),(function (db,_){
var temp__5718__auto__ = mrsudoku.model.solver.solve.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(temp__5718__auto__)){
var grid_SINGLEQUOTE_ = temp__5718__auto__;
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"grid","grid",402978600),grid_SINGLEQUOTE_,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),cljs.core.PersistentArrayMap.EMPTY);
} else {
alert("Cannot solve Sudoku");

return db;
}
}));

//# sourceMappingURL=events.js.map
