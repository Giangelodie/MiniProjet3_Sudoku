// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.user.src_BSLASH_cljs_BSLASH_mrsudoku_BSLASH_model_BSLASH_test79BAF9D');
goog.require('cljs.core');
cljs.user.cell_value = (function cljs$user$cell_value(cell){
var G__14375 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cell);
var G__14375__$1 = (((G__14375 instanceof cljs.core.Keyword))?G__14375.fqn:null);
switch (G__14375__$1) {
case "init":
case "set":
case "solved":
case "conflict":
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cell);

break;
default:
return null;

}
});
/**
 * Get the cell at coordinates `(cx,cy)`
 * with `cx` the column number and `cy` the row number.
 */
cljs.user.cell = (function cljs$user$cell(grid,cx,cy){
if(((((1) <= cx)) && ((cx <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 cx 9)"));
}

if(((((1) <= cy)) && ((cy <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 cy 9)"));
}

var block_x = cljs.core.quot.call(null,(cx - (1)),(3));
var cell_x = cljs.core.rem.call(null,(cx - (1)),(3));
var block_y = cljs.core.quot.call(null,(cy - (1)),(3));
var cell_y = cljs.core.rem.call(null,(cy - (1)),(3));
var cell_ref = ((cell_y * (3)) + cell_x);
var block = grid.call(null,block_y).call(null,block_x);
return block.call(null,cell_ref);
});
/**
 * Change the `grid` cell at coordinates `(cx,cy)`
 *   with `cx` the column number and `cy` the row number,
 *   and `cell` is the new cell-content.
 */
cljs.user.change_cell = (function cljs$user$change_cell(grid,cx,cy,cell){
if(((((1) <= cx)) && ((cx <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 cx 9)"));
}

if(((((1) <= cy)) && ((cy <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 cy 9)"));
}

var block_x = cljs.core.quot.call(null,(cx - (1)),(3));
var cell_x = cljs.core.rem.call(null,(cx - (1)),(3));
var block_y = cljs.core.quot.call(null,(cy - (1)),(3));
var cell_y = cljs.core.rem.call(null,(cy - (1)),(3));
var cell_ref = ((cell_y * (3)) + cell_x);
return cljs.core.update_in.call(null,grid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_y,block_x,cell_ref], null),((function (block_x,cell_x,block_y,cell_y,cell_ref){
return (function (_){
return cell;
});})(block_x,cell_x,block_y,cell_y,cell_ref))
);
});
/**
 * Get the #`b` block of the `grid`.
 */
cljs.user.block = (function cljs$user$block(grid,b){
if(((((1) <= b)) && ((b <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 b 9)"));
}

var row = cljs.core.quot.call(null,(b - (1)),(3));
var blk = cljs.core.rem.call(null,(b - (1)),(3));
return cljs.core.nth.call(null,cljs.core.nth.call(null,grid,row),blk);
});
cljs.user.block.call(null,cljs.user.sudoku_grid,(1));
/**
 * Reduce the `b`-th `block` of a sudoku grid with a function taking 4
 *   parameters: `acc` for the accumulated value, `index` for the cell
 *   index in the block, `cx, cy` for the cell
 *   coordinates in the grid and `cell` for the cell content.
 */
cljs.user.reduce_block = (function cljs$user$reduce_block(f,init,block,b){
var bx = ((3) * cljs.core.rem.call(null,(b - (1)),(3)));
var by = ((3) * cljs.core.quot.call(null,(b - (1)),(3)));
var yoffset = (0);
var index = (1);
var cells = block;
var acc = init;
while(true){
if(cljs.core._EQ_.call(null,yoffset,(3))){
return acc;
} else {
var vec__14379 = (function (){var xoffset = (0);
var index__$1 = index;
var cells__$1 = cells;
var acc__$1 = acc;
while(true){
if(cljs.core._EQ_.call(null,xoffset,(3))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc__$1,cells__$1,index__$1], null);
} else {
var G__14382 = (xoffset + (1));
var G__14383 = (index__$1 + (1));
var G__14384 = cljs.core.rest.call(null,cells__$1);
var G__14385 = f.call(null,acc__$1,index__$1,((bx + xoffset) + (1)),((by + yoffset) + (1)),cljs.core.first.call(null,cells__$1));
xoffset = G__14382;
index__$1 = G__14383;
cells__$1 = G__14384;
acc__$1 = G__14385;
continue;
}
break;
}
})();
var nacc = cljs.core.nth.call(null,vec__14379,(0),null);
var ncells = cljs.core.nth.call(null,vec__14379,(1),null);
var nindex = cljs.core.nth.call(null,vec__14379,(2),null);
var G__14386 = (yoffset + (1));
var G__14387 = nindex;
var G__14388 = ncells;
var G__14389 = nacc;
yoffset = G__14386;
index = G__14387;
cells = G__14388;
acc = G__14389;
continue;
}
break;
}
});
/**
 * Get the #`r` row in the `grid`.
 */
cljs.user.block_row = (function cljs$user$block_row(block,r){
if(((((1) <= r)) && ((r <= (3))))){
} else {
throw (new Error("Assert failed: (<= 1 r 3)"));
}

var base = ((r - (1)) * (3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,block,base),cljs.core.nth.call(null,block,(base + (1))),cljs.core.nth.call(null,block,(base + (2)))], null);
});
/**
 * Concatenate vectors.
 */
cljs.user.concatv = (function cljs$user$concatv(var_args){
var G__14394 = arguments.length;
switch (G__14394) {
case 0:
return cljs.user.concatv.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.user.concatv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.user.concatv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14396 = arguments.length;
var i__4532__auto___14397 = (0);
while(true){
if((i__4532__auto___14397 < len__4531__auto___14396)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14397]));

var G__14398 = (i__4532__auto___14397 + (1));
i__4532__auto___14397 = G__14398;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return cljs.user.concatv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

cljs.user.concatv.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljs.user.concatv.cljs$core$IFn$_invoke$arity$1 = (function (v){
return v;
});

cljs.user.concatv.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return cljs.core.into.call(null,v1,v2);
});

cljs.user.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,more){
return cljs.core.into.call(null,v1,cljs.core.apply.call(null,cljs.core.concat,cljs.core.cons.call(null,v2,more)));
});

/** @this {Function} */
cljs.user.concatv.cljs$lang$applyTo = (function (seq14391){
var G__14392 = cljs.core.first.call(null,seq14391);
var seq14391__$1 = cljs.core.next.call(null,seq14391);
var G__14393 = cljs.core.first.call(null,seq14391__$1);
var seq14391__$2 = cljs.core.next.call(null,seq14391__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14392,G__14393,seq14391__$2);
});

cljs.user.concatv.cljs$lang$maxFixedArity = (2);

/**
 * Get the #`r` row in the `grid`.
 */
cljs.user.row = (function cljs$user$row(grid,r){
if(((((1) <= r)) && ((r <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 r 9)"));
}

var block_r = cljs.core.quot.call(null,(r - (1)),(3));
var row_r = (cljs.core.rem.call(null,(r - (1)),(3)) + (1));
var blocks = cljs.core.nth.call(null,grid,block_r);
return cljs.user.concatv.call(null,cljs.user.block_row.call(null,cljs.core.nth.call(null,blocks,(0)),row_r),cljs.user.block_row.call(null,cljs.core.nth.call(null,blocks,(1)),row_r),cljs.user.block_row.call(null,cljs.core.nth.call(null,blocks,(2)),row_r));
});
cljs.user.row.call(null,cljs.user.sudoku_grid,(3));
/**
 * Get the #`c` column of the `grid`.
 */
cljs.user.col = (function cljs$user$col(grid,c){
if(((((1) <= c)) && ((c <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 c 9)"));
}

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4324__auto__ = (function cljs$user$col_$_iter__14399(s__14400){
return (new cljs.core.LazySeq(null,(function (){
var s__14400__$1 = s__14400;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__14400__$1);
if(temp__5720__auto__){
var s__14400__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14400__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14400__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14402 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14401 = (0);
while(true){
if((i__14401 < size__4323__auto__)){
var cy = cljs.core._nth.call(null,c__4322__auto__,i__14401);
cljs.core.chunk_append.call(null,b__14402,cljs.user.cell.call(null,grid,c,cy));

var G__14403 = (i__14401 + (1));
i__14401 = G__14403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14402),cljs$user$col_$_iter__14399.call(null,cljs.core.chunk_rest.call(null,s__14400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14402),null);
}
} else {
var cy = cljs.core.first.call(null,s__14400__$2);
return cljs.core.cons.call(null,cljs.user.cell.call(null,grid,c,cy),cljs$user$col_$_iter__14399.call(null,cljs.core.rest.call(null,s__14400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),(10)));
})());
});
cljs.user.col.call(null,cljs.user.sudoku_grid,(4));
cljs.user.elimine_block = (function cljs$user$elimine_block(grid,n){
var poss = (function (){var t = cljs.user.block.call(null,grid,n);
var a = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null);
while(true){
if(cljs.core.seq.call(null,t)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)),(1))){
var G__14404 = cljs.core.rest.call(null,t);
var G__14405 = a;
t = G__14404;
a = G__14405;
continue;
} else {
var G__14406 = cljs.core.rest.call(null,t);
var G__14407 = cljs.core.disj.call(null,a,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
t = G__14406;
a = G__14407;
continue;
}
} else {
return a;
}
break;
}
})();
var s = cljs.user.block.call(null,grid,n);
var v = cljs.user.reduce_block.call(null,((function (s,poss){
return (function (acc,index,cx,cy,cell){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});})(s,poss))
,cljs.core.PersistentVector.EMPTY,cljs.user.block.call(null,cljs.user.sudoku_grid,n),n);
var r = cljs.core.PersistentArrayMap.EMPTY;
var p = poss;
var i = (0);
while(true){
if((i < (9))){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s))),(1))){
var G__14408 = cljs.core.rest.call(null,s);
var G__14409 = v;
var G__14410 = cljs.core.assoc.call(null,r,cljs.core.nth.call(null,v,i),p);
var G__14411 = p;
var G__14412 = (i + (1));
s = G__14408;
v = G__14409;
r = G__14410;
p = G__14411;
i = G__14412;
continue;
} else {
var G__14413 = cljs.core.rest.call(null,s);
var G__14414 = v;
var G__14415 = cljs.core.assoc.call(null,r,cljs.core.nth.call(null,v,i),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217))]));
var G__14416 = p;
var G__14417 = (i + (1));
s = G__14413;
v = G__14414;
r = G__14415;
p = G__14416;
i = G__14417;
continue;
}
} else {
return r;
}
break;
}
});
cljs.user.elimine_block.call(null,cljs.user.sudoku_grid,(1));
cljs.user.elimine_row = (function cljs$user$elimine_row(grid,n){
var poss = (function (){var t = cljs.user.row.call(null,grid,n);
var a = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null);
while(true){
if(cljs.core.seq.call(null,t)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)),(1))){
var G__14418 = cljs.core.rest.call(null,t);
var G__14419 = a;
t = G__14418;
a = G__14419;
continue;
} else {
var G__14420 = cljs.core.rest.call(null,t);
var G__14421 = cljs.core.disj.call(null,a,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
t = G__14420;
a = G__14421;
continue;
}
} else {
return a;
}
break;
}
})();
var s = cljs.user.row.call(null,grid,n);
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),n], null);
var r = cljs.core.PersistentArrayMap.EMPTY;
var p = poss;
var i = (0);
while(true){
if((i < (9))){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s))),(1))){
var G__14422 = cljs.core.rest.call(null,s);
var G__14423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i + (1)) + (1)),n], null);
var G__14424 = cljs.core.assoc.call(null,r,v,p);
var G__14425 = p;
var G__14426 = (i + (1));
s = G__14422;
v = G__14423;
r = G__14424;
p = G__14425;
i = G__14426;
continue;
} else {
var G__14427 = cljs.core.rest.call(null,s);
var G__14428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i + (1)) + (1)),n], null);
var G__14429 = cljs.core.assoc.call(null,r,v,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217))]));
var G__14430 = p;
var G__14431 = (i + (1));
s = G__14427;
v = G__14428;
r = G__14429;
p = G__14430;
i = G__14431;
continue;
}
} else {
return r;
}
break;
}
});
cljs.user.elimine_col = (function cljs$user$elimine_col(grid,n){
var poss = (function (){var t = cljs.user.col.call(null,grid,n);
var a = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null);
while(true){
if(cljs.core.seq.call(null,t)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)),(1))){
var G__14432 = cljs.core.rest.call(null,t);
var G__14433 = a;
t = G__14432;
a = G__14433;
continue;
} else {
var G__14434 = cljs.core.rest.call(null,t);
var G__14435 = cljs.core.disj.call(null,a,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
t = G__14434;
a = G__14435;
continue;
}
} else {
return a;
}
break;
}
})();
var s = cljs.user.col.call(null,grid,n);
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(1)], null);
var r = cljs.core.PersistentArrayMap.EMPTY;
var p = poss;
var i = (0);
while(true){
if((i < (9))){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s))),(1))){
var G__14436 = cljs.core.rest.call(null,s);
var G__14437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,((i + (1)) + (1))], null);
var G__14438 = cljs.core.assoc.call(null,r,v,p);
var G__14439 = p;
var G__14440 = (i + (1));
s = G__14436;
v = G__14437;
r = G__14438;
p = G__14439;
i = G__14440;
continue;
} else {
var G__14441 = cljs.core.rest.call(null,s);
var G__14442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,((i + (1)) + (1))], null);
var G__14443 = cljs.core.assoc.call(null,r,v,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217))]));
var G__14444 = p;
var G__14445 = (i + (1));
s = G__14441;
v = G__14442;
r = G__14443;
p = G__14444;
i = G__14445;
continue;
}
} else {
return r;
}
break;
}
});
cljs.user.elimine_brc = (function cljs$user$elimine_brc(grid){
var i = (1);
var res = cljs.core.PersistentVector.EMPTY;
var j = (1);
while(true){
if(cljs.core._EQ_.call(null,j,(1))){
if((i < (10))){
var G__14446 = (i + (1));
var G__14447 = cljs.core.conj.call(null,res,cljs.user.elimine_block.call(null,grid,i));
var G__14448 = j;
i = G__14446;
res = G__14447;
j = G__14448;
continue;
} else {
var G__14449 = (1);
var G__14450 = res;
var G__14451 = (j + (1));
i = G__14449;
res = G__14450;
j = G__14451;
continue;
}
} else {
if(cljs.core._EQ_.call(null,j,(2))){
if((i < (10))){
var G__14452 = (i + (1));
var G__14453 = cljs.core.conj.call(null,res,cljs.user.elimine_row.call(null,grid,i));
var G__14454 = j;
i = G__14452;
res = G__14453;
j = G__14454;
continue;
} else {
var G__14455 = (1);
var G__14456 = res;
var G__14457 = (j + (1));
i = G__14455;
res = G__14456;
j = G__14457;
continue;
}
} else {
if(cljs.core._EQ_.call(null,j,(3))){
if((i < (10))){
var G__14458 = (i + (1));
var G__14459 = cljs.core.conj.call(null,res,cljs.user.elimine_col.call(null,grid,i));
var G__14460 = j;
i = G__14458;
res = G__14459;
j = G__14460;
continue;
} else {
return res;
}
} else {
return null;
}
}
}
break;
}
});
cljs.user.elimine_brc.call(null,cljs.user.sudoku_grid);
cljs.user.merge_brc = (function cljs$user$merge_brc(brc1,brc2){
var s = brc2;
var m = brc1;
while(true){
if(cljs.core.seq.call(null,s)){
var vec__14461 = cljs.core.first.call(null,s);
var k = cljs.core.nth.call(null,vec__14461,(0),null);
var v2 = cljs.core.nth.call(null,vec__14461,(1),null);
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var v1 = temp__5718__auto__;
var G__14464 = cljs.core.rest.call(null,s);
var G__14465 = cljs.core.assoc.call(null,m,k,clojure.set.intersection.call(null,v1,v2));
s = G__14464;
m = G__14465;
continue;
} else {
var G__14466 = cljs.core.rest.call(null,s);
var G__14467 = cljs.core.assoc.call(null,m,k,v2);
s = G__14466;
m = G__14467;
continue;
}
} else {
return m;
}
break;
}
});
cljs.user.merge_brc.call(null,cljs.user.elimine_col.call(null,cljs.user.sudoku_grid,(3)),cljs.user.elimine_row.call(null,cljs.user.sudoku_grid,(2)));
cljs.user.elimine_grid = (function cljs$user$elimine_grid(grid){
var v = cljs.user.elimine_brc.call(null,grid);
var prem = cljs.core.first.call(null,cljs.core.seq.call(null,v));
var s = cljs.core.rest.call(null,cljs.core.seq.call(null,v));
var res = prem;
while(true){
if(cljs.core.seq.call(null,s)){
var G__14468 = cljs.core.rest.call(null,s);
var G__14469 = cljs.user.merge_brc.call(null,res,cljs.core.first.call(null,s));
s = G__14468;
res = G__14469;
continue;
} else {
return res;
}
break;
}
});
cljs.user.elimine_grid.call(null,cljs.user.sudoku_grid);
cljs.user.constraint_block = (function cljs$user$constraint_block(grid,n){
var base = (function (){var res = cljs.core.PersistentArrayMap.EMPTY;
var v = cljs.user.reduce_block.call(null,((function (res){
return (function (acc,index,cx,cy,cell){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});})(res))
,cljs.core.PersistentVector.EMPTY,cljs.user.block.call(null,cljs.user.sudoku_grid,n),n);
var i = (0);
while(true){
if((i < (9))){
var G__14470 = cljs.core.assoc.call(null,res,i,cljs.core.nth.call(null,v,i));
var G__14471 = v;
var G__14472 = (i + (1));
res = G__14470;
v = G__14471;
i = G__14472;
continue;
} else {
return res;
}
break;
}
})();
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_);
});
cljs.user.constraint_block.call(null,cljs.user.sudoku_grid,(5));
cljs.user.reduce_block.call(null,(function (acc,index,cx,cy,cell){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
}),cljs.core.PersistentVector.EMPTY,cljs.user.block.call(null,cljs.user.sudoku_grid,(1)),(1));
cljs.user.constraint_row = (function cljs$user$constraint_row(grid,n){
var base = (function (){var res = cljs.core.PersistentArrayMap.EMPTY;
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),n], null);
var i = (0);
while(true){
if((i < (9))){
var G__14473 = cljs.core.assoc.call(null,res,i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i + (1)) + (1)),n], null));
var G__14474 = v;
var G__14475 = (i + (1));
res = G__14473;
v = G__14474;
i = G__14475;
continue;
} else {
return res;
}
break;
}
})();
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_);
});
cljs.user.constraint_row.call(null,cljs.user.sudoku_grid,(5));
cljs.user.constraint_col = (function cljs$user$constraint_col(grid,n){
var base = (function (){var res = cljs.core.PersistentArrayMap.EMPTY;
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(1)], null);
var i = (0);
while(true){
if((i < (9))){
var G__14476 = cljs.core.assoc.call(null,res,i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,((i + (1)) + (1))], null));
var G__14477 = v;
var G__14478 = (i + (1));
res = G__14476;
v = G__14477;
i = G__14478;
continue;
} else {
return res;
}
break;
}
})();
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_);
});
cljs.user.constraint_col.call(null,cljs.user.sudoku_grid,(5));
cljs.user.constraint_col.call(null,cljs.user.elimine_grid.call(null,cljs.user.sudoku_grid),(5));
cljs.user.check_constraint = (function cljs$user$check_constraint(constraint,ngrid){
var bl = (function (){var s = constraint;
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s)),new cljs.core.Keyword(null,"check","check",1226308904))){
var G__14479 = cljs.core.rest.call(null,s);
var G__14480 = res;
s = G__14479;
res = G__14480;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.get.call(null,ngrid,cljs.core.get.call(null,constraint,cljs.core.first.call(null,cljs.core.first.call(null,s))))),(1))){
var G__14481 = cljs.core.rest.call(null,s);
var G__14482 = cljs.core.assoc.call(null,res,cljs.core.get.call(null,constraint,cljs.core.first.call(null,cljs.core.first.call(null,s))),cljs.core.get.call(null,ngrid,cljs.core.get.call(null,constraint,cljs.core.first.call(null,cljs.core.first.call(null,s)))));
s = G__14481;
res = G__14482;
continue;
} else {
var G__14483 = cljs.core.rest.call(null,s);
var G__14484 = res;
s = G__14483;
res = G__14484;
continue;
}
}
} else {
return res;
}
break;
}
})();
var s = cljs.core.vals.call(null,bl);
var k = (0);
var l = (0);
while(true){
if((k < cljs.core.count.call(null,bl))){
if((l < cljs.core.count.call(null,bl))){
if(!(cljs.core._EQ_.call(null,k,l))){
var var1 = cljs.core.first.call(null,cljs.core.nth.call(null,s,k));
var var2 = cljs.core.first.call(null,cljs.core.nth.call(null,s,l));
var check = new cljs.core.Keyword(null,"check","check",1226308904).cljs$core$IFn$_invoke$arity$1(constraint);
if(cljs.core.truth_(check.call(null,var1,var2))){
var G__14485 = s;
var G__14486 = k;
var G__14487 = (l + (1));
s = G__14485;
k = G__14486;
l = G__14487;
continue;
} else {
return false;
}
} else {
var G__14488 = s;
var G__14489 = k;
var G__14490 = (l + (1));
s = G__14488;
k = G__14489;
l = G__14490;
continue;
}
} else {
var G__14491 = s;
var G__14492 = (k + (1));
var G__14493 = (0);
s = G__14491;
k = G__14492;
l = G__14493;
continue;
}
} else {
return true;
}
break;
}
});
cljs.user.check_constraint.call(null,cljs.user.constraint_block.call(null,cljs.user.sudoku_grid,(2)),cljs.user.elimine_grid.call(null,cljs.user.sudoku_grid));
cljs.user.check_constraint.call(null,cljs.user.constraint_row.call(null,cljs.user.sudoku_grid,(5)),cljs.user.elimine_grid.call(null,cljs.user.sudoku_grid));
cljs.user.check_constraint.call(null,cljs.user.constraint_col.call(null,cljs.user.sudoku_grid,(2)),cljs.user.elimine_grid.call(null,cljs.user.sudoku_grid));
cljs.user.get_block = (function cljs$user$get_block(cx,cy){
if((((cx >= (1))) && ((cx <= (3))))){
if((((cy >= (1))) && ((cy <= (3))))){
return (1);
} else {
if((((cy >= (4))) && ((cy <= (6))))){
return (4);
} else {
if((((cy >= (7))) && ((cy <= (9))))){
return (7);
} else {
return null;
}
}
}
} else {
if((((cx >= (4))) && ((cx <= (6))))){
if((((cy >= (1))) && ((cy <= (3))))){
return (2);
} else {
if((((cy >= (4))) && ((cy <= (6))))){
return (5);
} else {
if((((cy >= (7))) && ((cy <= (9))))){
return (8);
} else {
return null;
}
}
}
} else {
if((((cx >= (7))) && ((cx <= (9))))){
if((((cy >= (1))) && ((cy <= (3))))){
return (3);
} else {
if((((cy >= (4))) && ((cy <= (6))))){
return (6);
} else {
if((((cy >= (7))) && ((cy <= (9))))){
return (9);
} else {
return null;
}
}
}
} else {
return null;
}
}
}
});
cljs.user.get_block.call(null,(8),(5));
cljs.user.check_constraint_particular = (function cljs$user$check_constraint_particular(grid,ngrid){
var i = (1);
var j = (1);
while(true){
if((i < (10))){
if((j < (10))){
if(((((cljs.core._EQ_.call(null,cljs.user.check_constraint.call(null,cljs.user.constraint_row.call(null,grid,i),ngrid),true)) && (cljs.core._EQ_.call(null,cljs.user.check_constraint.call(null,cljs.user.constraint_col.call(null,grid,j),ngrid),true)))) && (cljs.core._EQ_.call(null,cljs.user.check_constraint.call(null,cljs.user.constraint_block.call(null,grid,cljs.user.get_block.call(null,i,j)),ngrid),true)))){
var G__14494 = i;
var G__14495 = (j + (1));
i = G__14494;
j = G__14495;
continue;
} else {
return false;
}
} else {
var G__14496 = (i + (1));
var G__14497 = (1);
i = G__14496;
j = G__14497;
continue;
}
} else {
return true;
}
break;
}
});
cljs.user.check_constraint_particular.call(null,cljs.user.sudoku_grid,cljs.user.elimine_grid.call(null,cljs.user.sudoku_grid));

//# sourceMappingURL=src_BSLASH_cljs_BSLASH_mrsudoku_BSLASH_model_BSLASH_test79BAF9D.js.map
