// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.model.conflict');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('mrsudoku.model.grid');
/**
 * Return the set of values of a vector or grid `cells`.
 */
mrsudoku.model.conflict.values = (function mrsudoku$model$conflict$values(cells){
var s = cells;
var res = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
var G__8319 = cljs.core.rest.call(null,s);
var G__8320 = cljs.core.conj.call(null,res,cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217)));
s = G__8319;
res = G__8320;
continue;
} else {
return cljs.core.disj.call(null,res,null);
}
break;
}
});
/**
 * Return the set of values of a vector of cells, except the `except`-th.
 */
mrsudoku.model.conflict.values_except = (function mrsudoku$model$conflict$values_except(cells,except){
if(((((1) <= except)) && ((except <= cljs.core.count.call(null,cells))))){
} else {
throw (new Error("Assert failed: (<= 1 except (count cells))"));
}

var s = cells;
var i = (0);
var res = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(!(cljs.core._EQ_.call(null,i,(except - (1))))){
var G__8321 = cljs.core.rest.call(null,s);
var G__8322 = (i + (1));
var G__8323 = cljs.core.conj.call(null,res,cljs.core.first.call(null,s));
s = G__8321;
i = G__8322;
res = G__8323;
continue;
} else {
var G__8324 = cljs.core.rest.call(null,s);
var G__8325 = (i + (1));
var G__8326 = res;
s = G__8324;
i = G__8325;
res = G__8326;
continue;
}
} else {
return mrsudoku.model.conflict.values.call(null,res);
}
break;
}
});
mrsudoku.model.conflict.mk_conflict = (function mrsudoku$model$conflict$mk_conflict(kind,cx,cy,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
mrsudoku.model.conflict.merge_conflict_kind = (function mrsudoku$model$conflict$merge_conflict_kind(kind1,kind2){
if(cljs.core.set_QMARK_.call(null,kind1)){
if(cljs.core.set_QMARK_.call(null,kind2)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,clojure.set.union.call(null,kind1,kind2)),(1))){
return cljs.core.first.call(null,cljs.core.seq.call(null,clojure.set.union.call(null,kind1,kind2)));
} else {
return clojure.set.union.call(null,kind1,kind2);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,clojure.set.union.call(null,kind1,cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind2))),(1))){
return cljs.core.first.call(null,cljs.core.seq.call(null,clojure.set.union.call(null,kind1,cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind2))));
} else {
return clojure.set.union.call(null,kind1,cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind2));
}
}
} else {
if(cljs.core.set_QMARK_.call(null,kind2)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,clojure.set.union.call(null,cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind1),kind2)),(1))){
return cljs.core.first.call(null,cljs.core.seq.call(null,clojure.set.union.call(null,cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind1),kind2)));
} else {
return clojure.set.union.call(null,cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind1),kind2);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,clojure.set.union.call(null,cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind1),cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind2))),(1))){
return cljs.core.first.call(null,cljs.core.seq.call(null,clojure.set.union.call(null,cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind1),cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind2))));
} else {
return clojure.set.union.call(null,cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind1),cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind2));
}
}
}
});
mrsudoku.model.conflict.merge_conflict = (function mrsudoku$model$conflict$merge_conflict(conflict1,conflict2){
return conflict1;
});
mrsudoku.model.conflict.merge_conflicts = (function mrsudoku$model$conflict$merge_conflicts(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8328 = arguments.length;
var i__4532__auto___8329 = (0);
while(true){
if((i__4532__auto___8329 < len__4531__auto___8328)){
args__4534__auto__.push((arguments[i__4532__auto___8329]));

var G__8330 = (i__4532__auto___8329 + (1));
i__4532__auto___8329 = G__8330;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mrsudoku.model.conflict.merge_conflicts.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mrsudoku.model.conflict.merge_conflicts.cljs$core$IFn$_invoke$arity$variadic = (function (conflicts){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.merge_with,mrsudoku.model.conflict.merge_conflict),conflicts);
});

mrsudoku.model.conflict.merge_conflicts.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mrsudoku.model.conflict.merge_conflicts.cljs$lang$applyTo = (function (seq8327){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8327));
});

mrsudoku.model.conflict.update_conflicts = (function mrsudoku$model$conflict$update_conflicts(conflict_kind,cx,cy,value,conflicts){
var temp__5718__auto__ = cljs.core.get.call(null,conflicts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
if(cljs.core.truth_(temp__5718__auto__)){
var conflict = temp__5718__auto__;
return cljs.core.assoc.call(null,conflicts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),mrsudoku.model.conflict.mk_conflict.call(null,mrsudoku.model.conflict.merge_conflict_kind.call(null,conflict_kind,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(conflict)),cx,cy,value));
} else {
return cljs.core.assoc.call(null,conflicts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),mrsudoku.model.conflict.mk_conflict.call(null,conflict_kind,cx,cy,value));
}
});
mrsudoku.model.conflict.conflict_value = (function mrsudoku$model$conflict$conflict_value(values,except,cell){
var temp__5720__auto__ = mrsudoku.model.grid.cell_value.call(null,cell);
if(cljs.core.truth_(temp__5720__auto__)){
var value = temp__5720__auto__;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"init","init",-1875481434))) && (cljs.core.contains_QMARK_.call(null,mrsudoku.model.conflict.values_except.call(null,values,except),value)))){
return value;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns a map of conflicts in a `col`.
 */
mrsudoku.model.conflict.col_conflicts = (function mrsudoku$model$conflict$col_conflicts(col,cx){
var cy = (1);
var cells = cljs.core.seq.call(null,col);
var conflicts = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,cells)){
var cell = cljs.core.first.call(null,cells);
var temp__5718__auto__ = mrsudoku.model.conflict.conflict_value.call(null,col,cy,cell);
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
var G__8331 = (cy + (1));
var G__8332 = cljs.core.rest.call(null,cells);
var G__8333 = mrsudoku.model.conflict.update_conflicts.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),cx,cy,value,conflicts);
cy = G__8331;
cells = G__8332;
conflicts = G__8333;
continue;
} else {
var G__8334 = (cy + (1));
var G__8335 = cljs.core.rest.call(null,cells);
var G__8336 = conflicts;
cy = G__8334;
cells = G__8335;
conflicts = G__8336;
continue;
}
} else {
return conflicts;
}
break;
}
});
mrsudoku.model.conflict.cols_conflicts = (function mrsudoku$model$conflict$cols_conflicts(grid){
return cljs.core.reduce.call(null,mrsudoku.model.conflict.merge_conflicts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (c){
return mrsudoku.model.conflict.col_conflicts.call(null,mrsudoku.model.grid.col.call(null,grid,c),c);
}),cljs.core.range.call(null,(1),(10))));
});
/**
 * Returns a map of conflicts in a `row`.
 */
mrsudoku.model.conflict.row_conflicts = (function mrsudoku$model$conflict$row_conflicts(row,cy){
var s = row;
var e = cljs.core.PersistentHashSet.EMPTY;
var res = cljs.core.PersistentArrayMap.EMPTY;
var i = (1);
var mset = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core.contains_QMARK_.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217))){
if(cljs.core.contains_QMARK_.call(null,e,cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217)))){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"status","status",-1997798413)),new cljs.core.Keyword(null,"set","set",304602554))){
if(cljs.core.contains_QMARK_.call(null,mset,cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217)))){
var G__8337 = cljs.core.rest.call(null,s);
var G__8338 = e;
var G__8339 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cy], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,mset,cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217))),cy], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217))], null));
var G__8340 = (i + (1));
var G__8341 = mset;
s = G__8337;
e = G__8338;
res = G__8339;
i = G__8340;
mset = G__8341;
continue;
} else {
var G__8342 = cljs.core.rest.call(null,s);
var G__8343 = e;
var G__8344 = cljs.core.assoc.call(null,res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cy], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217))], null));
var G__8345 = (i + (1));
var G__8346 = cljs.core.assoc.call(null,mset,cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217)),i);
s = G__8342;
e = G__8343;
res = G__8344;
i = G__8345;
mset = G__8346;
continue;
}
} else {
var G__8347 = cljs.core.rest.call(null,s);
var G__8348 = e;
var G__8349 = res;
var G__8350 = (i + (1));
var G__8351 = mset;
s = G__8347;
e = G__8348;
res = G__8349;
i = G__8350;
mset = G__8351;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"status","status",-1997798413)),new cljs.core.Keyword(null,"set","set",304602554))){
var G__8352 = cljs.core.rest.call(null,s);
var G__8353 = cljs.core.conj.call(null,e,cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217)));
var G__8354 = res;
var G__8355 = (i + (1));
var G__8356 = cljs.core.assoc.call(null,mset,cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217)),i);
s = G__8352;
e = G__8353;
res = G__8354;
i = G__8355;
mset = G__8356;
continue;
} else {
var G__8357 = cljs.core.rest.call(null,s);
var G__8358 = cljs.core.conj.call(null,e,cljs.core.get.call(null,cljs.core.first.call(null,s),new cljs.core.Keyword(null,"value","value",305978217)));
var G__8359 = res;
var G__8360 = (i + (1));
var G__8361 = mset;
s = G__8357;
e = G__8358;
res = G__8359;
i = G__8360;
mset = G__8361;
continue;
}
}
} else {
var G__8362 = cljs.core.rest.call(null,s);
var G__8363 = e;
var G__8364 = res;
var G__8365 = (i + (1));
var G__8366 = mset;
s = G__8362;
e = G__8363;
res = G__8364;
i = G__8365;
mset = G__8366;
continue;
}
} else {
return res;
}
break;
}
});
/**
 * Returns a map of conflicts in all rows of `grid`
 */
mrsudoku.model.conflict.rows_conflicts = (function mrsudoku$model$conflict$rows_conflicts(grid){
return cljs.core.reduce.call(null,mrsudoku.model.conflict.merge_conflicts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (a){
return mrsudoku.model.conflict.row_conflicts.call(null,mrsudoku.model.grid.row.call(null,grid,a),a);
}),cljs.core.range.call(null,(1),(10))));
});
mrsudoku.model.conflict.block_conflicts = (function mrsudoku$model$conflict$block_conflicts(block,b){
return mrsudoku.model.grid.reduce_block.call(null,(function (conflicts,index,cx,cy,cell){
var temp__5718__auto__ = mrsudoku.model.conflict.conflict_value.call(null,block,index,cell);
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return mrsudoku.model.conflict.update_conflicts.call(null,new cljs.core.Keyword(null,"block","block",664686210),cx,cy,value,conflicts);
} else {
return conflicts;
}
}),cljs.core.PersistentArrayMap.EMPTY,block,b);
});
mrsudoku.model.conflict.blocks_conflicts = (function mrsudoku$model$conflict$blocks_conflicts(grid){
return cljs.core.reduce.call(null,mrsudoku.model.conflict.merge_conflicts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (b){
return mrsudoku.model.conflict.block_conflicts.call(null,mrsudoku.model.grid.block.call(null,grid,b),b);
}),cljs.core.range.call(null,(1),(10))));
});
/**
 * Compute all conflicts in the Sudoku grid.
 */
mrsudoku.model.conflict.grid_conflicts = (function mrsudoku$model$conflict$grid_conflicts(grid){
cljs.core.println.call(null,"compute conflicts");

cljs.core.println.call(null,mrsudoku.model.grid.grid__GT_str.call(null,grid));

return mrsudoku.model.conflict.merge_conflicts.call(null,mrsudoku.model.conflict.rows_conflicts.call(null,grid),mrsudoku.model.conflict.cols_conflicts.call(null,grid),mrsudoku.model.conflict.blocks_conflicts.call(null,grid));
});

//# sourceMappingURL=conflict.js.map
