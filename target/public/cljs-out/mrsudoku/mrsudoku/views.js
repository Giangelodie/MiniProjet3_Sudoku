// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mrsudoku.subs');
goog.require('mrsudoku.events');
goog.require('mrsudoku.model.grid');
mrsudoku.views.cellv_value = (function mrsudoku$views$cellv_value(cv){
return cv.target.value;
});
mrsudoku.views.cell_view = (function mrsudoku$views$cell_view(cell,block_index,cell_col,cell_row,cell_conflicts){
var classes = cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cellview",["block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_index)].join(''),["col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_col)].join(''),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_row)].join('')], null),(function (){var G__11677 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cell);
var G__11677__$1 = (((G__11677 instanceof cljs.core.Keyword))?G__11677.fqn:null);
switch (G__11677__$1) {
case "init":
return "init-cell";

break;
case "empty":
return "empty-cell";

break;
case "set":
return "set-cell";

break;
default:
return "unknown-cell";

}
})());
var classes_SINGLEQUOTE_ = (((cell_conflicts == null))?classes:cljs.core.conj.call(null,classes,"conflict-cell"));
var cell_classes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",classes_SINGLEQUOTE_)], null);
var G__11678 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cell);
var G__11678__$1 = (((G__11678 instanceof cljs.core.Keyword))?G__11678.fqn:null);
switch (G__11678__$1) {
case "init":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cell_classes,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cell))].join('')], null);

break;
case "empty":
case "set":
case "conflict":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cell_classes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"max","max",61366548),"9",new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cell))].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (G__11678,G__11678__$1,classes,classes_SINGLEQUOTE_,cell_classes){
return (function (p1__11676_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-value-changed","cell-value-changed",-452878054),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.views.cellv_value.call(null,p1__11676_SHARP_),cell_col,cell_row], null)], null));
});})(G__11678,G__11678__$1,classes,classes_SINGLEQUOTE_,cell_classes))
], null)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cell_classes,["<<Unknown:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell),">>"].join('')], null);

}
});
mrsudoku.views.block_view = (function mrsudoku$views$block_view(grid,conflicts,block_index){
return cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["blockview"," block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_index)].join('')], null),mrsudoku.model.grid.reduce_block.call(null,(function (cviews,_,cx,cy,cell){
return cljs.core.conj.call(null,cviews,mrsudoku.views.cell_view.call(null,cell,block_index,cx,cy,cljs.core.get.call(null,conflicts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null))));
}),cljs.core.PersistentVector.EMPTY,mrsudoku.model.grid.block.call(null,grid,block_index),block_index));
});
mrsudoku.views.grid_view = (function mrsudoku$views$grid_view(){
var model = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mrsudoku.subs","grid-changed","mrsudoku.subs/grid-changed",1919843698)], null));
cljs.core.println.call(null,"[view]",["grid=\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mrsudoku.model.grid.grid__GT_str.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model))))].join(''));

cljs.core.println.call(null,"[view] conflicts=",new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model)));

return cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"gridview"], null),(function (){var b = (1);
var bviews = cljs.core.PersistentVector.EMPTY;
while(true){
if((b <= (9))){
var mmodel = cljs.core.deref.call(null,model);
var grid = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(mmodel);
var conflicts = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(mmodel);
var G__11681 = (b + (1));
var G__11682 = cljs.core.conj.call(null,bviews,mrsudoku.views.block_view.call(null,grid,conflicts,b));
b = G__11681;
bviews = G__11682;
continue;
} else {
return bviews;
}
break;
}
})());
});
mrsudoku.views.main_panel = (function mrsudoku$views$main_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mrsudoku.subs","name","mrsudoku.subs/name",120853156)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.deref.call(null,name)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control-panel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
});})(name))
], null),"Reinitialize"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solve-button-clicked","solve-button-clicked",-415460974),cljs.core.PersistentVector.EMPTY], null));
});})(name))
], null),"Solve"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sudokuview"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.views.grid_view], null)], null)], null);
});

//# sourceMappingURL=views.js.map
