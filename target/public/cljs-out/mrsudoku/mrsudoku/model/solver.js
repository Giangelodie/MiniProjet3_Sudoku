// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.model.solver');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mrsudoku.utils');
mrsudoku.model.solver.contrainte = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var1","var1",1378718176),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"var2","var2",-1416129845),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_], null);
mrsudoku.model.solver.intervalle = (function mrsudoku$model$solver$intervalle(min,max){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.range.call(null,min,max));
});
mrsudoku.model.solver.intervalle.call(null,(1),(5));
mrsudoku.model.solver.all_singleton_QMARK_ = (function mrsudoku$model$solver$all_singleton_QMARK_(doms){
return cljs.core.every_QMARK_.call(null,(function (p1__11317_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__11317_SHARP_),(1));
}),cljs.core.vals.call(null,doms));
});
mrsudoku.model.solver.all_singleton_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null)], null));
mrsudoku.model.solver.build_solution = (function mrsudoku$model$solver$build_solution(doms){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11318){
var vec__11319 = p__11318;
var x = cljs.core.nth.call(null,vec__11319,(0),null);
var xdom = cljs.core.nth.call(null,vec__11319,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.first.call(null,xdom)], null);
}),doms));
});
mrsudoku.model.solver.build_solution.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null)], null));
mrsudoku.model.solver.build_solution.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null)], null));
mrsudoku.model.solver.solution_QMARK_ = (function mrsudoku$model$solver$solution_QMARK_(constraints,sol){
var cs = constraints;
while(true){
if(cljs.core.seq.call(null,cs)){
var constraint = cljs.core.first.call(null,cs);
if(cljs.core.truth_(new cljs.core.Keyword(null,"check","check",1226308904).cljs$core$IFn$_invoke$arity$1(constraint).call(null,cljs.core.get.call(null,sol,new cljs.core.Keyword(null,"var1","var1",1378718176).cljs$core$IFn$_invoke$arity$1(constraint)),cljs.core.get.call(null,sol,new cljs.core.Keyword(null,"var2","var2",-1416129845).cljs$core$IFn$_invoke$arity$1(constraint))))){
var G__11322 = cljs.core.rest.call(null,cs);
cs = G__11322;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
mrsudoku.model.solver.contrainte1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var1","var1",1378718176),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"var2","var2",-1416129845),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_], null)], null);
mrsudoku.model.solver.contraintes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var1","var1",1378718176),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"var2","var2",-1416129845),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var1","var1",1378718176),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"var2","var2",-1416129845),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"check","check",1226308904),cljs.core._GT__EQ_], null)], null);
mrsudoku.model.solver.solution_QMARK_.call(null,mrsudoku.model.solver.contrainte1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(0)], null));
mrsudoku.model.solver.solution_QMARK_.call(null,mrsudoku.model.solver.contrainte1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(1)], null));
mrsudoku.model.solver.solution_QMARK_.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(0)], null));
mrsudoku.model.solver.solution_QMARK_.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(1)], null));
mrsudoku.model.solver.select_var = (function mrsudoku$model$solver$select_var(doms){
return cljs.core.some.call(null,(function (p__11323){
var vec__11324 = p__11323;
var x = cljs.core.nth.call(null,vec__11324,(0),null);
var xdom = cljs.core.nth.call(null,vec__11324,(1),null);
if((cljs.core.count.call(null,xdom) > (1))){
return x;
} else {
return null;
}
}),doms);
});
mrsudoku.model.solver.select_var.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(3),null,(2),null], null), null)], null));
mrsudoku.model.solver.find_solution = (function mrsudoku$model$solver$find_solution(constraints,doms){
if(cljs.core.truth_(mrsudoku.model.solver.all_singleton_QMARK_.call(null,doms))){
var sol = mrsudoku.model.solver.build_solution.call(null,doms);
if(cljs.core.truth_(mrsudoku.model.solver.solution_QMARK_.call(null,constraints,doms))){
return doms;
} else {
return null;
}
} else {
var x = mrsudoku.model.solver.select_var.call(null,doms);
var xvals = cljs.core.get.call(null,doms,x);
while(true){
if(cljs.core.seq.call(null,xvals)){
var sol = mrsudoku.model.solver.find_solution.call(null,constraints,cljs.core.assoc.call(null,doms,x,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,xvals)])));
if(cljs.core.truth_(sol)){
return sol;
} else {
var G__11327 = cljs.core.rest.call(null,xvals);
xvals = G__11327;
continue;
}
} else {
return null;
}
break;
}
}
});
mrsudoku.model.solver.find_solution.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(3),null,(2),null], null), null)], null));
mrsudoku.model.solver.find_solution.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(3),null,(2),null], null), null)], null));
mrsudoku.model.solver.find_solution.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(2),null], null), null)], null));
mrsudoku.model.solver.find_solution.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null)], null));
mrsudoku.model.solver.nettoie = (function mrsudoku$model$solver$nettoie(propos){
var s = propos;
var t = cljs.core.first.call(null,s);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(((cljs.core._EQ_.call(null,cljs.core.type.call(null,t),clojure.lang.LazySeq)) || (cljs.core._EQ_.call(null,cljs.core.type.call(null,t),clojure.lang.PersistentArrayMap$Seq)))){
if(cljs.core.seq.call(null,t)){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,cljs.core.first.call(null,t)),clojure.lang.MapEntry)){
var G__11328 = s;
var G__11329 = cljs.core.rest.call(null,cljs.core.rest.call(null,t));
var G__11330 = cljs.core.conj.call(null,res,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,t)),cljs.core.first.call(null,t))));
s = G__11328;
t = G__11329;
res = G__11330;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,t),null)){
var G__11331 = s;
var G__11332 = cljs.core.rest.call(null,t);
var G__11333 = res;
s = G__11331;
t = G__11332;
res = G__11333;
continue;
} else {
var G__11334 = s;
var G__11335 = cljs.core.rest.call(null,t);
var G__11336 = cljs.core.conj.call(null,res,cljs.core.first.call(null,t));
s = G__11334;
t = G__11335;
res = G__11336;
continue;
}
}
} else {
var G__11337 = cljs.core.rest.call(null,s);
var G__11338 = cljs.core.first.call(null,cljs.core.rest.call(null,s));
var G__11339 = res;
s = G__11337;
t = G__11338;
res = G__11339;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,t),clojure.lang.PersistentArrayMap)){
var G__11340 = cljs.core.rest.call(null,s);
var G__11341 = cljs.core.first.call(null,cljs.core.rest.call(null,s));
var G__11342 = cljs.core.conj.call(null,res,cljs.core.first.call(null,s));
s = G__11340;
t = G__11341;
res = G__11342;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,t),clojure.lang.MapEntry)){
var G__11343 = cljs.core.rest.call(null,cljs.core.rest.call(null,s));
var G__11344 = cljs.core.first.call(null,cljs.core.rest.call(null,s));
var G__11345 = cljs.core.conj.call(null,res,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,s)),cljs.core.first.call(null,s))));
s = G__11343;
t = G__11344;
res = G__11345;
continue;
} else {
var G__11346 = cljs.core.rest.call(null,s);
var G__11347 = cljs.core.first.call(null,cljs.core.rest.call(null,s));
var G__11348 = res;
s = G__11346;
t = G__11347;
res = G__11348;
continue;
}
}
}
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.find_all_solutions = (function mrsudoku$model$solver$find_all_solutions(constraints,doms){
if(cljs.core.truth_(mrsudoku.model.solver.all_singleton_QMARK_.call(null,doms))){
var sol = mrsudoku.model.solver.build_solution.call(null,doms);
if(cljs.core.truth_(mrsudoku.model.solver.solution_QMARK_.call(null,constraints,doms))){
return doms;
} else {
return null;
}
} else {
var x = mrsudoku.model.solver.select_var.call(null,doms);
var xvals = cljs.core.get.call(null,doms,x);
return (new cljs.core.LazySeq(null,((function (xvals,x){
return (function (){
return cljs.core.cons.call(null,mrsudoku.model.solver.find_all_solutions.call(null,constraints,cljs.core.assoc.call(null,doms,x,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,xvals)]))),mrsudoku.model.solver.find_all_solutions.call(null,constraints,cljs.core.assoc.call(null,doms,x,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.rest.call(null,xvals)))));
});})(xvals,x))
,null,null));
}
});
mrsudoku.model.solver.find_all_solutions.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(3),null], null), null)], null));
mrsudoku.model.solver.nettoie.call(null,mrsudoku.model.solver.find_all_solutions.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(3),null], null), null)], null)));
mrsudoku.model.solver.find_all_solutions.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null)], null));
mrsudoku.model.solver.nettoie.call(null,mrsudoku.model.solver.find_all_solutions.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null)], null)));
mrsudoku.model.solver.find_all_solutions.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(5),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(3),null,(2),null], null), null)], null));
mrsudoku.model.solver.nettoie.call(null,mrsudoku.model.solver.find_all_solutions.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(5),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(3),null,(2),null], null), null)], null)));
mrsudoku.model.solver.find_all_solutions.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(2),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(9),null,(5),null], null), null)], null));
mrsudoku.model.solver.nettoie.call(null,mrsudoku.model.solver.find_all_solutions.call(null,mrsudoku.model.solver.contraintes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(2),null], null), null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(9),null,(5),null], null), null)], null)));
mrsudoku.model.solver.graph = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null);
mrsudoku.model.solver.add_vertex = (function mrsudoku$model$solver$add_vertex(graph,vert){
if(cljs.core.contains_QMARK_.call(null,graph,vert)){
return graph;
} else {
return cljs.core.assoc.call(null,graph,vert,cljs.core.PersistentHashSet.EMPTY);
}
});
mrsudoku.model.solver.add_vertex.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x4","x4",1510536137));
mrsudoku.model.solver.add_edge = (function mrsudoku$model$solver$add_edge(graph,src,dest){
return cljs.core.update.call(null,graph,src,(function (p1__11349_SHARP_){
return cljs.core.conj.call(null,p1__11349_SHARP_,dest);
}));
});
mrsudoku.model.solver.add_edge.call(null,mrsudoku.model.solver.graph,new cljs.core.Keyword(null,"x2","x2",-1362513475),(3));
mrsudoku.model.solver.remove_edge = (function mrsudoku$model$solver$remove_edge(graph,src,dest){
return cljs.core.update.call(null,graph,src,(function (p1__11350_SHARP_){
return cljs.core.disj.call(null,p1__11350_SHARP_,dest);
}));
});
mrsudoku.model.solver.remove_edge.call(null,mrsudoku.model.solver.graph,new cljs.core.Keyword(null,"x2","x2",-1362513475),(1));
/**
 * Tries to augment the match with the supplied visited nodes.
 *   Returns the reverted edges of the complete maximal matching.
 */
mrsudoku.model.solver.augment = (function mrsudoku$model$solver$augment(graph,src,visited,match){
var dests = cljs.core.get.call(null,graph,src);
var visited__$1 = visited;
while(true){
if(cljs.core.seq.call(null,dests)){
if(cljs.core.truth_(visited__$1.call(null,cljs.core.first.call(null,dests)))){
var G__11354 = cljs.core.rest.call(null,dests);
var G__11355 = visited__$1;
dests = G__11354;
visited__$1 = G__11355;
continue;
} else {
var temp__5718__auto__ = cljs.core.get.call(null,match,cljs.core.first.call(null,dests));
if(cljs.core.truth_(temp__5718__auto__)){
var old_src = temp__5718__auto__;
var vec__11351 = mrsudoku.model.solver.augment.call(null,graph,old_src,cljs.core.conj.call(null,visited__$1,cljs.core.first.call(null,dests)),match);
var found = cljs.core.nth.call(null,vec__11351,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11351,(1),null);
var match_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11351,(2),null);
if(cljs.core.truth_(found)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,visited_SINGLEQUOTE_,cljs.core.assoc.call(null,match_SINGLEQUOTE_,cljs.core.first.call(null,dests),src)], null);
} else {
var G__11356 = cljs.core.rest.call(null,dests);
var G__11357 = visited_SINGLEQUOTE_;
dests = G__11356;
visited__$1 = G__11357;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.conj.call(null,visited__$1,cljs.core.first.call(null,dests)),cljs.core.assoc.call(null,match,cljs.core.first.call(null,dests),src)], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,visited__$1,match], null);
}
break;
}
});
mrsudoku.model.solver.cle = (function mrsudoku$model$solver$cle(match,valeur){
var s = match;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.first.call(null,s)),valeur)){
return cljs.core.first.call(null,cljs.core.first.call(null,s));
} else {
var G__11358 = cljs.core.rest.call(null,s);
s = G__11358;
continue;
}
} else {
return false;
}
break;
}
});
mrsudoku.model.solver.max_matching = (function mrsudoku$model$solver$max_matching(graph){
var s = cljs.core.keys.call(null,graph);
var visited = cljs.core.PersistentHashSet.EMPTY;
var match = cljs.core.PersistentArrayMap.EMPTY;
var buffk = cljs.core.PersistentVector.EMPTY;
var buffv = cljs.core.PersistentHashSet.EMPTY;
var aller = cljs.core.PersistentHashSet.EMPTY;
var retour = cljs.core.PersistentHashSet.EMPTY;
while(true){
cljs.core.print.call(null,"s : ",s,"\t visited : ",visited,"\t match : ",match,"\t buffk : ",buffk,"\t buffv : ",buffv,"\t aller : ",aller,"\t retour : ",retour);

if(cljs.core.seq.call(null,s)){
if(cljs.core.empty_QMARK_.call(null,buffk)){
if(cljs.core._EQ_.call(null,true,cljs.core.first.call(null,mrsudoku.model.solver.augment.call(null,graph,cljs.core.first.call(null,s),visited,match)))){
var G__11362 = cljs.core.rest.call(null,s);
var G__11363 = cljs.core.second.call(null,mrsudoku.model.solver.augment.call(null,graph,cljs.core.first.call(null,s),visited,match));
var G__11364 = cljs.core.last.call(null,mrsudoku.model.solver.augment.call(null,graph,cljs.core.first.call(null,s),visited,match));
var G__11365 = buffk;
var G__11366 = buffv;
var G__11367 = aller;
var G__11368 = retour;
s = G__11362;
visited = G__11363;
match = G__11364;
buffk = G__11365;
buffv = G__11366;
aller = G__11367;
retour = G__11368;
continue;
} else {
var G__11369 = s;
var G__11370 = visited;
var G__11371 = match;
var G__11372 = cljs.core.conj.call(null,buffk,cljs.core.first.call(null,s));
var G__11373 = cljs.core.get.call(null,graph,cljs.core.first.call(null,s));
var G__11374 = aller;
var G__11375 = retour;
s = G__11369;
visited = G__11370;
match = G__11371;
buffk = G__11372;
buffv = G__11373;
aller = G__11374;
retour = G__11375;
continue;
}
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,cljs.core.vals.call(null,match)),cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,match))))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.pop.call(null,buffk))){
var G__11376 = cljs.core.rest.call(null,s);
var G__11377 = visited;
var G__11378 = cljs.core.assoc.call(null,match,cljs.core.first.call(null,clojure.set.difference.call(null,cljs.core.disj.call(null,buffv,mrsudoku.model.solver.cle.call(null,match,cljs.core.last.call(null,buffk))),aller,retour)),cljs.core.last.call(null,buffk));
var G__11379 = cljs.core.pop.call(null,buffk);
var G__11380 = cljs.core.get.call(null,graph,cljs.core.last.call(null,cljs.core.pop.call(null,buffk)));
var G__11381 = aller;
var G__11382 = retour;
s = G__11376;
visited = G__11377;
match = G__11378;
buffk = G__11379;
buffv = G__11380;
aller = G__11381;
retour = G__11382;
continue;
} else {
var G__11383 = s;
var G__11384 = visited;
var G__11385 = cljs.core.assoc.call(null,match,cljs.core.first.call(null,clojure.set.difference.call(null,cljs.core.disj.call(null,buffv,mrsudoku.model.solver.cle.call(null,match,cljs.core.last.call(null,buffk))),aller,retour)),cljs.core.last.call(null,buffk));
var G__11386 = cljs.core.pop.call(null,buffk);
var G__11387 = cljs.core.get.call(null,graph,cljs.core.last.call(null,cljs.core.pop.call(null,buffk)));
var G__11388 = aller;
var G__11389 = retour;
s = G__11383;
visited = G__11384;
match = G__11385;
buffk = G__11386;
buffv = G__11387;
aller = G__11388;
retour = G__11389;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,match),cljs.core.count.call(null,graph))){
var G__11390 = cljs.core.rest.call(null,s);
var G__11391 = visited;
var G__11392 = match;
var G__11393 = buffk;
var G__11394 = buffv;
var G__11395 = aller;
var G__11396 = retour;
s = G__11390;
visited = G__11391;
match = G__11392;
buffk = G__11393;
buffv = G__11394;
aller = G__11395;
retour = G__11396;
continue;
} else {
var val = cljs.core.first.call(null,clojure.set.difference.call(null,cljs.core.disj.call(null,buffv,mrsudoku.model.solver.cle.call(null,match,cljs.core.last.call(null,buffk))),aller,retour));
cljs.core.print.call(null,"\t val : ",val);

if(cljs.core._EQ_.call(null,null,val)){
if(cljs.core.empty_QMARK_.call(null,cljs.core.pop.call(null,buffk))){
var G__11397 = cljs.core.rest.call(null,s);
var G__11398 = visited;
var G__11399 = match;
var G__11400 = cljs.core.pop.call(null,buffk);
var G__11401 = cljs.core.PersistentHashSet.EMPTY;
var G__11402 = cljs.core.PersistentHashSet.EMPTY;
var G__11403 = cljs.core.PersistentHashSet.EMPTY;
s = G__11397;
visited = G__11398;
match = G__11399;
buffk = G__11400;
buffv = G__11401;
aller = G__11402;
retour = G__11403;
continue;
} else {
var G__11404 = s;
var G__11405 = visited;
var G__11406 = match;
var G__11407 = cljs.core.pop.call(null,buffk);
var G__11408 = cljs.core.get.call(null,graph,cljs.core.last.call(null,cljs.core.pop.call(null,buffk)));
var G__11409 = cljs.core.disj.call(null,aller,mrsudoku.model.solver.cle.call(null,match,cljs.core.last.call(null,cljs.core.pop.call(null,buffk))));
var G__11410 = cljs.core.conj.call(null,retour,mrsudoku.model.solver.cle.call(null,match,cljs.core.last.call(null,buffk)));
s = G__11404;
visited = G__11405;
match = G__11406;
buffk = G__11407;
buffv = G__11408;
aller = G__11409;
retour = G__11410;
continue;
}
} else {
var vec__11359 = mrsudoku.model.solver.augment.call(null,graph,cljs.core.get.call(null,match,val),visited,match);
var bool = cljs.core.nth.call(null,vec__11359,(0),null);
var v = cljs.core.nth.call(null,vec__11359,(1),null);
var m = cljs.core.nth.call(null,vec__11359,(2),null);
if(cljs.core._EQ_.call(null,true,bool)){
var G__11411 = s;
var G__11412 = v;
var G__11413 = cljs.core.assoc.call(null,m,val,cljs.core.last.call(null,buffk));
var G__11414 = cljs.core.pop.call(null,buffk);
var G__11415 = cljs.core.get.call(null,graph,cljs.core.last.call(null,cljs.core.pop.call(null,buffk)));
var G__11416 = aller;
var G__11417 = retour;
s = G__11411;
visited = G__11412;
match = G__11413;
buffk = G__11414;
buffv = G__11415;
aller = G__11416;
retour = G__11417;
continue;
} else {
if(cljs.core._EQ_.call(null,false,mrsudoku.model.solver.cle.call(null,match,cljs.core.last.call(null,buffk)))){
var G__11418 = s;
var G__11419 = v;
var G__11420 = m;
var G__11421 = cljs.core.conj.call(null,buffk,cljs.core.get.call(null,match,val));
var G__11422 = cljs.core.get.call(null,graph,cljs.core.get.call(null,match,val));
var G__11423 = aller;
var G__11424 = retour;
s = G__11418;
visited = G__11419;
match = G__11420;
buffk = G__11421;
buffv = G__11422;
aller = G__11423;
retour = G__11424;
continue;
} else {
var G__11425 = s;
var G__11426 = v;
var G__11427 = m;
var G__11428 = cljs.core.conj.call(null,buffk,cljs.core.get.call(null,match,val));
var G__11429 = cljs.core.get.call(null,graph,cljs.core.get.call(null,match,val));
var G__11430 = cljs.core.conj.call(null,aller,mrsudoku.model.solver.cle.call(null,match,cljs.core.last.call(null,buffk)));
var G__11431 = retour;
s = G__11425;
visited = G__11426;
match = G__11427;
buffk = G__11428;
buffv = G__11429;
aller = G__11430;
retour = G__11431;
continue;
}
}
}
}
}
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,match),cljs.core.count.call(null,graph))){
return match;
} else {
return null;
}
}
break;
}
});
mrsudoku.model.solver.graph = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(4),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null);
mrsudoku.model.solver.max_matching.call(null,mrsudoku.model.solver.graph);
mrsudoku.model.solver.graph = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"x4","x4",1510536137),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null)], null);
mrsudoku.model.solver.max_matching.call(null,mrsudoku.model.solver.graph);
mrsudoku.model.solver.graph = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(3),null], null), null)], null);
mrsudoku.model.solver.max_matching.call(null,mrsudoku.model.solver.graph);
mrsudoku.model.solver.alldiff_doms = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(2),null,(5),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"x4","x4",1510536137),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"x5","x5",-1179553667),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null);
mrsudoku.model.solver.max_matching.call(null,mrsudoku.model.solver.alldiff_doms);
mrsudoku.model.solver.graph1 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327)],[cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"D","D",-8015893),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"F","F",-1115543258),null], null), null)]);
mrsudoku.model.solver.inv_edges = (function mrsudoku$model$solver$inv_edges(src,dest){
return cljs.core.zipmap.call(null,dest,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([src])));
});
mrsudoku.model.solver.inv_edges.call(null,new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null));
mrsudoku.model.solver.merge_edges = (function mrsudoku$model$solver$merge_edges(edges1,edges2){
var s = edges2;
var m = edges1;
while(true){
if(cljs.core.seq.call(null,s)){
var vec__11432 = cljs.core.first.call(null,s);
var k = cljs.core.nth.call(null,vec__11432,(0),null);
var v2 = cljs.core.nth.call(null,vec__11432,(1),null);
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var v1 = temp__5718__auto__;
var G__11435 = cljs.core.rest.call(null,s);
var G__11436 = cljs.core.assoc.call(null,m,k,clojure.set.union.call(null,v1,v2));
s = G__11435;
m = G__11436;
continue;
} else {
var G__11437 = cljs.core.rest.call(null,s);
var G__11438 = cljs.core.assoc.call(null,m,k,v2);
s = G__11437;
m = G__11438;
continue;
}
} else {
return m;
}
break;
}
});
mrsudoku.model.solver.merge_edges.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"G","G",-738544397),null], null), null),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null)], null));
mrsudoku.model.solver.sinks = (function mrsudoku$model$solver$sinks(graph,verts){
var g = graph;
var s = verts;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core.contains_QMARK_.call(null,g,cljs.core.first.call(null,s))){
var G__11439 = g;
var G__11440 = cljs.core.rest.call(null,s);
g = G__11439;
s = G__11440;
continue;
} else {
var G__11441 = cljs.core.assoc.call(null,g,s,cljs.core.PersistentHashSet.EMPTY);
var G__11442 = cljs.core.rest.call(null,s);
g = G__11441;
s = G__11442;
continue;
}
} else {
return g;
}
break;
}
});
mrsudoku.model.solver.dfs = (function mrsudoku$model$solver$dfs(var_args){
var G__11444 = arguments.length;
switch (G__11444) {
case 4:
return mrsudoku.model.solver.dfs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mrsudoku.model.solver.dfs.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mrsudoku.model.solver.dfs.cljs$core$IFn$_invoke$arity$4 = (function (graph,vert,f,init){
return cljs.core.first.call(null,mrsudoku.model.solver.dfs.call(null,graph,vert,f,init,cljs.core.PersistentHashSet.EMPTY));
});

mrsudoku.model.solver.dfs.cljs$core$IFn$_invoke$arity$5 = (function (graph,vert,f,init,visited){
if(cljs.core.truth_(visited.call(null,vert))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,visited], null);
} else {
var verts = cljs.core.get.call(null,graph,vert);
var res = f.call(null,init,vert);
var visited__$1 = cljs.core.conj.call(null,visited,vert);
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__11445 = mrsudoku.model.solver.dfs.call(null,graph,cljs.core.first.call(null,verts),f,res,visited__$1);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11445,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11445,(1),null);
var G__11449 = cljs.core.rest.call(null,verts);
var G__11450 = res_SINGLEQUOTE_;
var G__11451 = visited_SINGLEQUOTE_;
verts = G__11449;
res = G__11450;
visited__$1 = G__11451;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,visited__$1], null);
}
break;
}
}
});

mrsudoku.model.solver.dfs.cljs$lang$maxFixedArity = 5;

mrsudoku.model.solver.graph1 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327)],[cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"D","D",-8015893),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"F","F",-1115543258),null], null), null)]);
mrsudoku.model.solver.dfs.call(null,mrsudoku.model.solver.graph1,new cljs.core.Keyword(null,"A","A",-1688942394),cljs.core.conj,cljs.core.PersistentVector.EMPTY);
mrsudoku.model.solver.dfs_post = (function mrsudoku$model$solver$dfs_post(var_args){
var G__11453 = arguments.length;
switch (G__11453) {
case 4:
return mrsudoku.model.solver.dfs_post.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mrsudoku.model.solver.dfs_post.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mrsudoku.model.solver.dfs_post.cljs$core$IFn$_invoke$arity$4 = (function (graph,vert,f,init){
return cljs.core.first.call(null,mrsudoku.model.solver.dfs_post.call(null,graph,vert,f,init,cljs.core.PersistentHashSet.EMPTY));
});

mrsudoku.model.solver.dfs_post.cljs$core$IFn$_invoke$arity$5 = (function (graph,vert,f,init,visited){
if(cljs.core.truth_(visited.call(null,vert))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,visited], null);
} else {
var verts = cljs.core.get.call(null,graph,vert);
var res = init;
var visited__$1 = cljs.core.conj.call(null,visited,vert);
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__11454 = mrsudoku.model.solver.dfs_post.call(null,graph,cljs.core.first.call(null,verts),f,res,visited__$1);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11454,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11454,(1),null);
var G__11458 = cljs.core.rest.call(null,verts);
var G__11459 = res_SINGLEQUOTE_;
var G__11460 = visited_SINGLEQUOTE_;
verts = G__11458;
res = G__11459;
visited__$1 = G__11460;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,res,vert),visited__$1], null);
}
break;
}
}
});

mrsudoku.model.solver.dfs_post.cljs$lang$maxFixedArity = 5;

mrsudoku.model.solver.dfs_stack = (function mrsudoku$model$solver$dfs_stack(graph){
var verts = cljs.core.keys.call(null,graph);
var stack = cljs.core.List.EMPTY;
var visited = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__11461 = mrsudoku.model.solver.dfs_post.call(null,graph,cljs.core.first.call(null,verts),cljs.core.conj,stack,visited);
var stack_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11461,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11461,(1),null);
var G__11464 = cljs.core.rest.call(null,verts);
var G__11465 = stack_SINGLEQUOTE_;
var G__11466 = visited_SINGLEQUOTE_;
verts = G__11464;
stack = G__11465;
visited = G__11466;
continue;
} else {
return stack;
}
break;
}
});
mrsudoku.model.solver.transpose = (function mrsudoku$model$solver$transpose(graph){
mrsudoku.model.solver.l = cljs.core.keys.call(null,graph);

var trans1 = (function (){var s = cljs.core.keys.call(null,graph);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
cljs.core.println.call(null,res);

var G__11467 = cljs.core.rest.call(null,s);
var G__11468 = cljs.core.conj.call(null,res,mrsudoku.model.solver.inv_edges.call(null,cljs.core.first.call(null,s),cljs.core.get.call(null,graph,cljs.core.first.call(null,s))));
s = G__11467;
res = G__11468;
continue;
} else {
return res;
}
break;
}
})();
var trans2 = (function (){var k = (0);
var res = cljs.core.first.call(null,trans1);
while(true){
if(((k + (1)) < cljs.core.count.call(null,trans1))){
cljs.core.println.call(null,mrsudoku.model.solver.merge_edges.call(null,cljs.core.nth.call(null,trans1,k),cljs.core.nth.call(null,trans1,(k + (1)))));

var merge = mrsudoku.model.solver.merge_edges.call(null,res,cljs.core.nth.call(null,trans1,(k + (1))));
var G__11469 = (k + (1));
var G__11470 = merge;
k = G__11469;
res = G__11470;
continue;
} else {
return res;
}
break;
}
})();
var s = trans2;
var t = mrsudoku.model.solver.l;
while(true){
if(cljs.core.seq.call(null,t)){
if(!(cljs.core.contains_QMARK_.call(null,s,cljs.core.first.call(null,t)))){
var G__11471 = cljs.core.assoc.call(null,s,cljs.core.first.call(null,t),cljs.core.PersistentHashSet.EMPTY);
var G__11472 = cljs.core.rest.call(null,t);
s = G__11471;
t = G__11472;
continue;
} else {
var G__11473 = s;
var G__11474 = cljs.core.rest.call(null,t);
s = G__11473;
t = G__11474;
continue;
}
} else {
return s;
}
break;
}
});
mrsudoku.model.solver.compute_scc = (function mrsudoku$model$solver$compute_scc(graph){
var stack = mrsudoku.model.solver.dfs_stack.call(null,graph);
var tgraph = mrsudoku.model.solver.transpose.call(null,graph);
var s = stack;
var visited = cljs.core.PersistentHashSet.EMPTY;
var scc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core.truth_(visited.call(null,cljs.core.first.call(null,s)))){
var G__11478 = cljs.core.rest.call(null,s);
var G__11479 = visited;
var G__11480 = scc;
s = G__11478;
visited = G__11479;
scc = G__11480;
continue;
} else {
var vec__11475 = mrsudoku.model.solver.dfs.call(null,tgraph,cljs.core.first.call(null,s),cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,visited);
var comp = cljs.core.nth.call(null,vec__11475,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11475,(1),null);
var G__11481 = cljs.core.rest.call(null,s);
var G__11482 = visited_SINGLEQUOTE_;
var G__11483 = cljs.core.conj.call(null,scc,comp);
s = G__11481;
visited = G__11482;
scc = G__11483;
continue;
}
} else {
return scc;
}
break;
}
});
mrsudoku.model.solver.vars_of = (function mrsudoku$model$solver$vars_of(doms){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,doms));
});
mrsudoku.model.solver.alldiff_doms = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(2),null,(5),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"x4","x4",1510536137),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"x5","x5",-1179553667),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null);
mrsudoku.model.solver.complete_matching = (function mrsudoku$model$solver$complete_matching(vars,match){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,vars),cljs.core.count.call(null,match));
});
mrsudoku.model.solver.graph_with_matching = (function mrsudoku$model$solver$graph_with_matching(graph,match){
return cljs.core.reduce.call(null,(function (ngraph,p__11484){
var vec__11485 = p__11484;
var src = cljs.core.nth.call(null,vec__11485,(0),null);
var dest = cljs.core.nth.call(null,vec__11485,(1),null);
return mrsudoku.model.solver.remove_edge.call(null,mrsudoku.model.solver.add_edge.call(null,mrsudoku.model.solver.add_vertex.call(null,ngraph,src),src,dest),dest,src);
}),graph,match);
});
mrsudoku.model.solver.doms_from_sccomp = (function mrsudoku$model$solver$doms_from_sccomp(variables,comp){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,comp),(1))){
if(cljs.core.contains_QMARK_.call(null,variables,cljs.core.first.call(null,comp))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,comp),cljs.core.PersistentHashSet.EMPTY]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
var vars = clojure.set.select.call(null,(function (p1__11488_SHARP_){
return cljs.core.contains_QMARK_.call(null,variables,p1__11488_SHARP_);
}),comp);
var values = clojure.set.difference.call(null,comp,vars);
return cljs.core.zipmap.call(null,vars,cljs.core.repeat.call(null,values));
}
});
mrsudoku.model.solver.doms_from_scc = (function mrsudoku$model$solver$doms_from_scc(vars,scc){
var s = scc;
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
var G__11489 = cljs.core.rest.call(null,s);
var G__11490 = cljs.core.conj.call(null,res,mrsudoku.model.solver.doms_from_sccomp.call(null,vars,cljs.core.first.call(null,s)));
s = G__11489;
res = G__11490;
continue;
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.isolated_values = (function mrsudoku$model$solver$isolated_values(variables,scc){
var s = scc;
var res = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,s)),(1))) && (cljs.core.not.call(null,variables.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s))))))){
var G__11491 = cljs.core.rest.call(null,s);
var G__11492 = cljs.core.conj.call(null,res,cljs.core.first.call(null,cljs.core.first.call(null,s)));
s = G__11491;
res = G__11492;
continue;
} else {
var G__11493 = cljs.core.rest.call(null,s);
var G__11494 = res;
s = G__11493;
res = G__11494;
continue;
}
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.isolated_values.call(null,mrsudoku.model.solver.vars_of.call(null,mrsudoku.model.solver.alldiff_doms),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x1","x1",-1863922247),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x2","x2",-1362513475),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(4),null,new cljs.core.Keyword(null,"x4","x4",1510536137),null,(6),null,new cljs.core.Keyword(null,"x3","x3",-1314178287),null,(5),null,new cljs.core.Keyword(null,"x5","x5",-1179553667),null], null), null)], null));
mrsudoku.model.solver.value_known_by = (function mrsudoku$model$solver$value_known_by(doms,value){
return cljs.core.reduce.call(null,(function (res,p__11495){
var vec__11496 = p__11495;
var v = cljs.core.nth.call(null,vec__11496,(0),null);
var values = cljs.core.nth.call(null,vec__11496,(1),null);
if(cljs.core.contains_QMARK_.call(null,values,value)){
return cljs.core.conj.call(null,res,v);
} else {
return res;
}
}),cljs.core.PersistentHashSet.EMPTY,doms);
});
mrsudoku.model.solver.add_value = (function mrsudoku$model$solver$add_value(doms,vs,value){
var res = doms;
var s = vs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__11499 = cljs.core.update.call(null,doms,cljs.core.first.call(null,s),cljs.core.conj,value);
var G__11500 = cljs.core.rest.call(null,s);
res = G__11499;
s = G__11500;
continue;
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.access = (function mrsudoku$model$solver$access(doms,scc){
var scc_doms = mrsudoku.model.solver.doms_from_scc.call(null,mrsudoku.model.solver.vars_of.call(null,doms),scc);
var isolated = mrsudoku.model.solver.isolated_values.call(null,mrsudoku.model.solver.vars_of.call(null,doms),scc);
return cljs.core.reduce.call(null,((function (scc_doms,isolated){
return (function (doms_SINGLEQUOTE_,value){
return mrsudoku.model.solver.add_value.call(null,doms_SINGLEQUOTE_,mrsudoku.model.solver.value_known_by.call(null,doms,value),value);
});})(scc_doms,isolated))
,scc_doms,isolated);
});
mrsudoku.model.solver.alldiff = (function mrsudoku$model$solver$alldiff(doms){
var match = mrsudoku.model.solver.max_matching.call(null,doms);
if(cljs.core.truth_(mrsudoku.model.solver.complete_matching.call(null,doms,match))){
var scc = mrsudoku.model.solver.compute_scc.call(null,mrsudoku.model.solver.graph_with_matching.call(null,doms,match));
return mrsudoku.model.solver.access.call(null,doms,scc);
} else {
return null;
}
});
mrsudoku.model.solver.sudoku_grid = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(9)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(8)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(7)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(9)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(5)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(8)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(4)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(7)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(8)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(6)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(9)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(8)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(8)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(5)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(7)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),(9)], null)], null)], null)], null);
mrsudoku.model.solver.cell_value = (function mrsudoku$model$solver$cell_value(cell){
var G__11501 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cell);
var G__11501__$1 = (((G__11501 instanceof cljs.core.Keyword))?G__11501.fqn:null);
switch (G__11501__$1) {
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
mrsudoku.model.solver.cell = (function mrsudoku$model$solver$cell(grid,cx,cy){
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
mrsudoku.model.solver.change_cell = (function mrsudoku$model$solver$change_cell(grid,cx,cy,cell){
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
mrsudoku.model.solver.block = (function mrsudoku$model$solver$block(grid,b){
if(((((1) <= b)) && ((b <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 b 9)"));
}

var row = cljs.core.quot.call(null,(b - (1)),(3));
var blk = cljs.core.rem.call(null,(b - (1)),(3));
return cljs.core.nth.call(null,cljs.core.nth.call(null,grid,row),blk);
});
mrsudoku.model.solver.block.call(null,mrsudoku.model.solver.sudoku_grid,(1));
/**
 * Reduce the `b`-th `block` of a sudoku grid with a function taking 4
 *   parameters: `acc` for the accumulated value, `index` for the cell
 *   index in the block, `cx, cy` for the cell
 *   coordinates in the grid and `cell` for the cell content.
 */
mrsudoku.model.solver.reduce_block = (function mrsudoku$model$solver$reduce_block(f,init,block,b){
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
var vec__11503 = (function (){var xoffset = (0);
var index__$1 = index;
var cells__$1 = cells;
var acc__$1 = acc;
while(true){
if(cljs.core._EQ_.call(null,xoffset,(3))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc__$1,cells__$1,index__$1], null);
} else {
var G__11506 = (xoffset + (1));
var G__11507 = (index__$1 + (1));
var G__11508 = cljs.core.rest.call(null,cells__$1);
var G__11509 = f.call(null,acc__$1,index__$1,((bx + xoffset) + (1)),((by + yoffset) + (1)),cljs.core.first.call(null,cells__$1));
xoffset = G__11506;
index__$1 = G__11507;
cells__$1 = G__11508;
acc__$1 = G__11509;
continue;
}
break;
}
})();
var nacc = cljs.core.nth.call(null,vec__11503,(0),null);
var ncells = cljs.core.nth.call(null,vec__11503,(1),null);
var nindex = cljs.core.nth.call(null,vec__11503,(2),null);
var G__11510 = (yoffset + (1));
var G__11511 = nindex;
var G__11512 = ncells;
var G__11513 = nacc;
yoffset = G__11510;
index = G__11511;
cells = G__11512;
acc = G__11513;
continue;
}
break;
}
});
/**
 * Get the #`r` row in the `grid`.
 */
mrsudoku.model.solver.block_row = (function mrsudoku$model$solver$block_row(block,r){
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
mrsudoku.utils.concatv = (function mrsudoku$model$solver$concatv(var_args){
var G__11518 = arguments.length;
switch (G__11518) {
case 0:
return mrsudoku.model.solver.concatv.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return mrsudoku.model.solver.concatv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mrsudoku.model.solver.concatv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___11520 = arguments.length;
var i__4532__auto___11521 = (0);
while(true){
if((i__4532__auto___11521 < len__4531__auto___11520)){
args_arr__4546__auto__.push((arguments[i__4532__auto___11521]));

var G__11522 = (i__4532__auto___11521 + (1));
i__4532__auto___11521 = G__11522;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return mrsudoku.model.solver.concatv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$1 = (function (v){
return v;
});

mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return cljs.core.into.call(null,v1,v2);
});

mrsudoku.utils.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,more){
return cljs.core.into.call(null,v1,cljs.core.apply.call(null,cljs.core.concat,cljs.core.cons.call(null,v2,more)));
});

/** @this {Function} */
mrsudoku.utils.concatv.cljs$lang$applyTo = (function (seq11515){
var G__11516 = cljs.core.first.call(null,seq11515);
var seq11515__$1 = cljs.core.next.call(null,seq11515);
var G__11517 = cljs.core.first.call(null,seq11515__$1);
var seq11515__$2 = cljs.core.next.call(null,seq11515__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11516,G__11517,seq11515__$2);
});

mrsudoku.utils.concatv.cljs$lang$maxFixedArity = (2);

/**
 * Get the #`r` row in the `grid`.
 */
mrsudoku.model.solver.row = (function mrsudoku$model$solver$row(grid,r){
if(((((1) <= r)) && ((r <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 r 9)"));
}

var block_r = cljs.core.quot.call(null,(r - (1)),(3));
var row_r = (cljs.core.rem.call(null,(r - (1)),(3)) + (1));
var blocks = cljs.core.nth.call(null,grid,block_r);
return mrsudoku.utils.concatv.call(null,mrsudoku.model.solver.block_row.call(null,cljs.core.nth.call(null,blocks,(0)),row_r),mrsudoku.model.solver.block_row.call(null,cljs.core.nth.call(null,blocks,(1)),row_r),mrsudoku.model.solver.block_row.call(null,cljs.core.nth.call(null,blocks,(2)),row_r));
});
mrsudoku.model.solver.row.call(null,mrsudoku.model.solver.sudoku_grid,(3));
/**
 * Get the #`c` column of the `grid`.
 */
mrsudoku.model.solver.col = (function mrsudoku$model$solver$col(grid,c){
if(((((1) <= c)) && ((c <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 c 9)"));
}

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4324__auto__ = (function mrsudoku$model$solver$col_$_iter__11523(s__11524){
return (new cljs.core.LazySeq(null,(function (){
var s__11524__$1 = s__11524;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__11524__$1);
if(temp__5720__auto__){
var s__11524__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11524__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__11524__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__11526 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__11525 = (0);
while(true){
if((i__11525 < size__4323__auto__)){
var cy = cljs.core._nth.call(null,c__4322__auto__,i__11525);
cljs.core.chunk_append.call(null,b__11526,mrsudoku.model.solver.cell.call(null,grid,c,cy));

var G__11527 = (i__11525 + (1));
i__11525 = G__11527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11526),mrsudoku$model$solver$col_$_iter__11523.call(null,cljs.core.chunk_rest.call(null,s__11524__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11526),null);
}
} else {
var cy = cljs.core.first.call(null,s__11524__$2);
return cljs.core.cons.call(null,mrsudoku.model.solver.cell.call(null,grid,c,cy),mrsudoku$model$solver$col_$_iter__11523.call(null,cljs.core.rest.call(null,s__11524__$2)));
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
mrsudoku.model.solver.col.call(null,mrsudoku.model.solver.sudoku_grid,(4));
mrsudoku.model.solver.elimine_block = (function mrsudoku$model$solver$elimine_block(grid,n){
var poss = (function (){var t = mrsudoku.model.solver.block.call(null,grid,n);
var a = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null);
while(true){
if(cljs.core.seq.call(null,t)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)),(1))){
var G__11528 = cljs.core.rest.call(null,t);
var G__11529 = a;
t = G__11528;
a = G__11529;
continue;
} else {
if(cljs.core.set_QMARK_.call(null,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)))){
var G__11530 = cljs.core.rest.call(null,t);
var G__11531 = a;
t = G__11530;
a = G__11531;
continue;
} else {
var G__11532 = cljs.core.rest.call(null,t);
var G__11533 = cljs.core.disj.call(null,a,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
t = G__11532;
a = G__11533;
continue;
}
}
} else {
return a;
}
break;
}
})();
var s = mrsudoku.model.solver.block.call(null,grid,n);
var v = mrsudoku.model.solver.reduce_block.call(null,((function (s,poss){
return (function (acc,index,cx,cy,cell){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});})(s,poss))
,cljs.core.PersistentVector.EMPTY,mrsudoku.model.solver.block.call(null,mrsudoku.model.solver.sudoku_grid,n),n);
var r = cljs.core.PersistentArrayMap.EMPTY;
var p = poss;
var i = (0);
while(true){
if((i < (9))){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s))),(1))){
var G__11534 = cljs.core.rest.call(null,s);
var G__11535 = v;
var G__11536 = cljs.core.assoc.call(null,r,cljs.core.nth.call(null,v,i),p);
var G__11537 = p;
var G__11538 = (i + (1));
s = G__11534;
v = G__11535;
r = G__11536;
p = G__11537;
i = G__11538;
continue;
} else {
if(cljs.core.set_QMARK_.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217)))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217)))){
var G__11539 = cljs.core.rest.call(null,s);
var G__11540 = v;
var G__11541 = cljs.core.assoc.call(null,r,cljs.core.nth.call(null,v,i),p);
var G__11542 = p;
var G__11543 = (i + (1));
s = G__11539;
v = G__11540;
r = G__11541;
p = G__11542;
i = G__11543;
continue;
} else {
var G__11544 = cljs.core.rest.call(null,s);
var G__11545 = v;
var G__11546 = cljs.core.assoc.call(null,r,cljs.core.nth.call(null,v,i),clojure.set.intersection.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217)),p));
var G__11547 = p;
var G__11548 = (i + (1));
s = G__11544;
v = G__11545;
r = G__11546;
p = G__11547;
i = G__11548;
continue;
}
} else {
var G__11549 = cljs.core.rest.call(null,s);
var G__11550 = v;
var G__11551 = cljs.core.assoc.call(null,r,cljs.core.nth.call(null,v,i),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217))]));
var G__11552 = p;
var G__11553 = (i + (1));
s = G__11549;
v = G__11550;
r = G__11551;
p = G__11552;
i = G__11553;
continue;
}
}
} else {
return r;
}
break;
}
});
mrsudoku.model.solver.elimine_block.call(null,mrsudoku.model.solver.sudoku_grid,(1));
mrsudoku.model.solver.elimine_row = (function mrsudoku$model$solver$elimine_row(grid,n){
var poss = (function (){var t = mrsudoku.model.solver.row.call(null,grid,n);
var a = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null);
while(true){
if(cljs.core.seq.call(null,t)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)),(1))){
var G__11554 = cljs.core.rest.call(null,t);
var G__11555 = a;
t = G__11554;
a = G__11555;
continue;
} else {
if(cljs.core.set_QMARK_.call(null,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)))){
var G__11556 = cljs.core.rest.call(null,t);
var G__11557 = a;
t = G__11556;
a = G__11557;
continue;
} else {
var G__11558 = cljs.core.rest.call(null,t);
var G__11559 = cljs.core.disj.call(null,a,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
t = G__11558;
a = G__11559;
continue;
}
}
} else {
return a;
}
break;
}
})();
var s = mrsudoku.model.solver.row.call(null,grid,n);
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),n], null);
var r = cljs.core.PersistentArrayMap.EMPTY;
var p = poss;
var i = (0);
while(true){
if((i < (9))){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s))),(1))){
var G__11560 = cljs.core.rest.call(null,s);
var G__11561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i + (1)) + (1)),n], null);
var G__11562 = cljs.core.assoc.call(null,r,v,p);
var G__11563 = p;
var G__11564 = (i + (1));
s = G__11560;
v = G__11561;
r = G__11562;
p = G__11563;
i = G__11564;
continue;
} else {
if(cljs.core.set_QMARK_.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217)))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217)))){
var G__11565 = cljs.core.rest.call(null,s);
var G__11566 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i + (1)) + (1)),n], null);
var G__11567 = cljs.core.assoc.call(null,r,v,p);
var G__11568 = p;
var G__11569 = (i + (1));
s = G__11565;
v = G__11566;
r = G__11567;
p = G__11568;
i = G__11569;
continue;
} else {
var G__11570 = cljs.core.rest.call(null,s);
var G__11571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i + (1)) + (1)),n], null);
var G__11572 = cljs.core.assoc.call(null,r,v,clojure.set.intersection.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217)),p));
var G__11573 = p;
var G__11574 = (i + (1));
s = G__11570;
v = G__11571;
r = G__11572;
p = G__11573;
i = G__11574;
continue;
}
} else {
var G__11575 = cljs.core.rest.call(null,s);
var G__11576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i + (1)) + (1)),n], null);
var G__11577 = cljs.core.assoc.call(null,r,v,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217))]));
var G__11578 = p;
var G__11579 = (i + (1));
s = G__11575;
v = G__11576;
r = G__11577;
p = G__11578;
i = G__11579;
continue;
}
}
} else {
return r;
}
break;
}
});
mrsudoku.model.solver.elimine_row.call(null,mrsudoku.model.solver.sudoku_grid,(1));
mrsudoku.model.solver.elimine_col = (function mrsudoku$model$solver$elimine_col(grid,n){
var poss = (function (){var t = mrsudoku.model.solver.col.call(null,grid,n);
var a = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null);
while(true){
if(cljs.core.seq.call(null,t)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)),(1))){
var G__11580 = cljs.core.rest.call(null,t);
var G__11581 = a;
t = G__11580;
a = G__11581;
continue;
} else {
if(cljs.core.set_QMARK_.call(null,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)))){
var G__11582 = cljs.core.rest.call(null,t);
var G__11583 = a;
t = G__11582;
a = G__11583;
continue;
} else {
var G__11584 = cljs.core.rest.call(null,t);
var G__11585 = cljs.core.disj.call(null,a,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
t = G__11584;
a = G__11585;
continue;
}
}
} else {
return a;
}
break;
}
})();
var s = mrsudoku.model.solver.col.call(null,grid,n);
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(1)], null);
var r = cljs.core.PersistentArrayMap.EMPTY;
var p = poss;
var i = (0);
while(true){
if((i < (9))){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s))),(1))){
var G__11586 = cljs.core.rest.call(null,s);
var G__11587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,((i + (1)) + (1))], null);
var G__11588 = cljs.core.assoc.call(null,r,v,p);
var G__11589 = p;
var G__11590 = (i + (1));
s = G__11586;
v = G__11587;
r = G__11588;
p = G__11589;
i = G__11590;
continue;
} else {
if(cljs.core.set_QMARK_.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217)))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217)))){
var G__11591 = cljs.core.rest.call(null,s);
var G__11592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,((i + (1)) + (1))], null);
var G__11593 = cljs.core.assoc.call(null,r,v,p);
var G__11594 = p;
var G__11595 = (i + (1));
s = G__11591;
v = G__11592;
r = G__11593;
p = G__11594;
i = G__11595;
continue;
} else {
var G__11596 = cljs.core.rest.call(null,s);
var G__11597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,((i + (1)) + (1))], null);
var G__11598 = cljs.core.assoc.call(null,r,v,clojure.set.intersection.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217)),p));
var G__11599 = p;
var G__11600 = (i + (1));
s = G__11596;
v = G__11597;
r = G__11598;
p = G__11599;
i = G__11600;
continue;
}
} else {
var G__11601 = cljs.core.rest.call(null,s);
var G__11602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,((i + (1)) + (1))], null);
var G__11603 = cljs.core.assoc.call(null,r,v,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217))]));
var G__11604 = p;
var G__11605 = (i + (1));
s = G__11601;
v = G__11602;
r = G__11603;
p = G__11604;
i = G__11605;
continue;
}
}
} else {
return r;
}
break;
}
});
mrsudoku.model.solver.elimine_col.call(null,mrsudoku.model.solver.sudoku_grid,(1));
mrsudoku.model.solver.elimine_brc = (function mrsudoku$model$solver$elimine_brc(grid){
var i = (1);
var res = cljs.core.PersistentVector.EMPTY;
var j = (1);
while(true){
if(cljs.core._EQ_.call(null,j,(1))){
if((i < (10))){
var G__11606 = (i + (1));
var G__11607 = cljs.core.conj.call(null,res,mrsudoku.model.solver.elimine_block.call(null,grid,i));
var G__11608 = j;
i = G__11606;
res = G__11607;
j = G__11608;
continue;
} else {
var G__11609 = (1);
var G__11610 = res;
var G__11611 = (j + (1));
i = G__11609;
res = G__11610;
j = G__11611;
continue;
}
} else {
if(cljs.core._EQ_.call(null,j,(2))){
if((i < (10))){
var G__11612 = (i + (1));
var G__11613 = cljs.core.conj.call(null,res,mrsudoku.model.solver.elimine_row.call(null,grid,i));
var G__11614 = j;
i = G__11612;
res = G__11613;
j = G__11614;
continue;
} else {
var G__11615 = (1);
var G__11616 = res;
var G__11617 = (j + (1));
i = G__11615;
res = G__11616;
j = G__11617;
continue;
}
} else {
if(cljs.core._EQ_.call(null,j,(3))){
if((i < (10))){
var G__11618 = (i + (1));
var G__11619 = cljs.core.conj.call(null,res,mrsudoku.model.solver.elimine_col.call(null,grid,i));
var G__11620 = j;
i = G__11618;
res = G__11619;
j = G__11620;
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
mrsudoku.model.solver.elimine_brc.call(null,mrsudoku.model.solver.sudoku_grid);
mrsudoku.model.solver.merge_brc = (function mrsudoku$model$solver$merge_brc(brc1,brc2){
var s = brc2;
var m = brc1;
while(true){
if(cljs.core.seq.call(null,s)){
var vec__11621 = cljs.core.first.call(null,s);
var k = cljs.core.nth.call(null,vec__11621,(0),null);
var v2 = cljs.core.nth.call(null,vec__11621,(1),null);
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var v1 = temp__5718__auto__;
var G__11624 = cljs.core.rest.call(null,s);
var G__11625 = cljs.core.assoc.call(null,m,k,clojure.set.intersection.call(null,v1,v2));
s = G__11624;
m = G__11625;
continue;
} else {
var G__11626 = cljs.core.rest.call(null,s);
var G__11627 = cljs.core.assoc.call(null,m,k,v2);
s = G__11626;
m = G__11627;
continue;
}
} else {
return m;
}
break;
}
});
mrsudoku.model.solver.merge_brc.call(null,mrsudoku.model.solver.elimine_col.call(null,mrsudoku.model.solver.sudoku_grid,(3)),mrsudoku.model.solver.elimine_row.call(null,mrsudoku.model.solver.sudoku_grid,(2)));
mrsudoku.model.solver.elimine_grid = (function mrsudoku$model$solver$elimine_grid(grid){
var v = mrsudoku.model.solver.elimine_brc.call(null,grid);
var prem = cljs.core.first.call(null,cljs.core.seq.call(null,v));
var s = cljs.core.rest.call(null,cljs.core.seq.call(null,v));
var res = prem;
while(true){
if(cljs.core.seq.call(null,s)){
var G__11628 = cljs.core.rest.call(null,s);
var G__11629 = mrsudoku.model.solver.merge_brc.call(null,res,cljs.core.first.call(null,s));
s = G__11628;
res = G__11629;
continue;
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.elimine_grid.call(null,mrsudoku.model.solver.sudoku_grid);
mrsudoku.model.solver.modif_grid = (function mrsudoku$model$solver$modif_grid(grid,map_grid){
var g = grid;
var s = map_grid;
while(true){
if(cljs.core.seq.call(null,s)){
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mrsudoku.model.solver.cell.call(null,g,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s))),cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s)))).call(null,new cljs.core.Keyword(null,"status","status",-1997798413)))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"set","set",304602554),mrsudoku.model.solver.cell.call(null,g,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s))),cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s)))).call(null,new cljs.core.Keyword(null,"status","status",-1997798413)))))){
var G__11630 = g;
var G__11631 = cljs.core.rest.call(null,s);
g = G__11630;
s = G__11631;
continue;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.second.call(null,cljs.core.first.call(null,s))))){
var G__11632 = mrsudoku.model.solver.change_cell.call(null,g,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s))),cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,cljs.core.second.call(null,cljs.core.first.call(null,s)))], null));
var G__11633 = cljs.core.rest.call(null,s);
g = G__11632;
s = G__11633;
continue;
} else {
var G__11634 = mrsudoku.model.solver.change_cell.call(null,g,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s))),cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.second.call(null,cljs.core.first.call(null,s))], null));
var G__11635 = cljs.core.rest.call(null,s);
g = G__11634;
s = G__11635;
continue;
}
}
} else {
return g;
}
break;
}
});
mrsudoku.model.solver.modif_grid.call(null,mrsudoku.model.solver.sudoku_grid,mrsudoku.model.solver.elimine_grid.call(null,mrsudoku.model.solver.sudoku_grid));
mrsudoku.model.solver.clean_grid = (function mrsudoku$model$solver$clean_grid(grid){
var g = mrsudoku.model.solver.modif_grid.call(null,grid,mrsudoku.model.solver.elimine_grid.call(null,grid));
if(cljs.core._EQ_.call(null,grid,g)){
return grid;
} else {
return mrsudoku.model.solver.clean_grid.call(null,g);
}
});
mrsudoku.model.solver.clean_grid.call(null,mrsudoku.model.solver.sudoku_grid);
mrsudoku.model.solver.constraint_block = (function mrsudoku$model$solver$constraint_block(grid,n){
var base = (function (){var res = cljs.core.PersistentArrayMap.EMPTY;
var v = mrsudoku.model.solver.reduce_block.call(null,((function (res){
return (function (acc,index,cx,cy,cell){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});})(res))
,cljs.core.PersistentVector.EMPTY,mrsudoku.model.solver.block.call(null,mrsudoku.model.solver.sudoku_grid,n),n);
var i = (0);
while(true){
if((i < (9))){
var G__11636 = cljs.core.assoc.call(null,res,i,cljs.core.nth.call(null,v,i));
var G__11637 = v;
var G__11638 = (i + (1));
res = G__11636;
v = G__11637;
i = G__11638;
continue;
} else {
return res;
}
break;
}
})();
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_);
});
mrsudoku.model.solver.constraint_block.call(null,mrsudoku.model.solver.sudoku_grid,(5));
mrsudoku.model.solver.constraint_row = (function mrsudoku$model$solver$constraint_row(grid,n){
var base = (function (){var res = cljs.core.PersistentArrayMap.EMPTY;
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),n], null);
var i = (0);
while(true){
if((i < (9))){
var G__11639 = cljs.core.assoc.call(null,res,i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i + (1)) + (1)),n], null));
var G__11640 = v;
var G__11641 = (i + (1));
res = G__11639;
v = G__11640;
i = G__11641;
continue;
} else {
return res;
}
break;
}
})();
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_);
});
mrsudoku.model.solver.constraint_row.call(null,mrsudoku.model.solver.sudoku_grid,(5));
mrsudoku.model.solver.constraint_col = (function mrsudoku$model$solver$constraint_col(grid,n){
var base = (function (){var res = cljs.core.PersistentArrayMap.EMPTY;
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(1)], null);
var i = (0);
while(true){
if((i < (9))){
var G__11642 = cljs.core.assoc.call(null,res,i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,((i + (1)) + (1))], null));
var G__11643 = v;
var G__11644 = (i + (1));
res = G__11642;
v = G__11643;
i = G__11644;
continue;
} else {
return res;
}
break;
}
})();
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_);
});
mrsudoku.model.solver.constraint_col.call(null,mrsudoku.model.solver.sudoku_grid,(5));
mrsudoku.model.solver.constraint_col.call(null,mrsudoku.model.solver.elimine_grid.call(null,mrsudoku.model.solver.sudoku_grid),(5));
mrsudoku.model.solver.get_block = (function mrsudoku$model$solver$get_block(cx,cy){
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
mrsudoku.model.solver.get_block.call(null,(8),(5));
mrsudoku.model.solver.constraint_grid = (function mrsudoku$model$solver$constraint_grid(grid,cx,cy){
var row = mrsudoku.model.solver.constraint_row.call(null,grid,cy);
var col = mrsudoku.model.solver.constraint_col.call(null,grid,cx);
var bl = mrsudoku.model.solver.constraint_block.call(null,grid,mrsudoku.model.solver.get_block.call(null,cx,cy));
var fin = cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,row),col),bl);
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,row),col),bl);
});
mrsudoku.model.solver.constraint_grid.call(null,mrsudoku.model.solver.sudoku_grid,(5),(6));
mrsudoku.model.solver.check_constraint.call(null,cljs.core.first.call(null,mrsudoku.model.solver.constraint_grid.call(null,mrsudoku.model.solver.sudoku_grid,(5),(6))),mrsudoku.model.solver.sudoku_grid);
mrsudoku.model.solver.constraint_grid.call(null,mrsudoku.model.solver.sudoku_grid,(1),(2));
mrsudoku.model.solver.check_constraint = (function mrsudoku$model$solver$check_constraint(constraint,ngrid){
var bl = (function (){var s = constraint;
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s)),new cljs.core.Keyword(null,"check","check",1226308904))){
var G__11645 = cljs.core.rest.call(null,s);
var G__11646 = res;
s = G__11645;
res = G__11646;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.get.call(null,ngrid,cljs.core.get.call(null,constraint,cljs.core.first.call(null,cljs.core.first.call(null,s))))),(1))){
var G__11647 = cljs.core.rest.call(null,s);
var G__11648 = cljs.core.assoc.call(null,res,cljs.core.get.call(null,constraint,cljs.core.first.call(null,cljs.core.first.call(null,s))),cljs.core.get.call(null,ngrid,cljs.core.get.call(null,constraint,cljs.core.first.call(null,cljs.core.first.call(null,s)))));
s = G__11647;
res = G__11648;
continue;
} else {
var G__11649 = cljs.core.rest.call(null,s);
var G__11650 = res;
s = G__11649;
res = G__11650;
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
var G__11651 = s;
var G__11652 = k;
var G__11653 = (l + (1));
s = G__11651;
k = G__11652;
l = G__11653;
continue;
} else {
return false;
}
} else {
var G__11654 = s;
var G__11655 = k;
var G__11656 = (l + (1));
s = G__11654;
k = G__11655;
l = G__11656;
continue;
}
} else {
var G__11657 = s;
var G__11658 = (k + (1));
var G__11659 = (0);
s = G__11657;
k = G__11658;
l = G__11659;
continue;
}
} else {
return true;
}
break;
}
});
mrsudoku.model.solver.check_constraint.call(null,mrsudoku.model.solver.constraint_block.call(null,mrsudoku.model.solver.sudoku_grid,(2)),mrsudoku.model.solver.elimine_grid.call(null,mrsudoku.model.solver.sudoku_grid));
mrsudoku.model.solver.check_constraint.call(null,mrsudoku.model.solver.constraint_row.call(null,mrsudoku.model.solver.sudoku_grid,(5)),mrsudoku.model.solver.elimine_grid.call(null,mrsudoku.model.solver.sudoku_grid));
mrsudoku.model.solver.check_constraint.call(null,mrsudoku.model.solver.constraint_col.call(null,mrsudoku.model.solver.sudoku_grid,(2)),mrsudoku.model.solver.elimine_grid.call(null,mrsudoku.model.solver.sudoku_grid));
mrsudoku.model.solver.check_constraint_particular = (function mrsudoku$model$solver$check_constraint_particular(constraint,ngrid){
var i = (1);
var j = (1);
while(true){
if((i < (10))){
if((j < (10))){
if(((cljs.core._EQ_.call(null,mrsudoku.model.solver.check_constraint.call(null,cljs.core.first.call(null,constraint.call(null,ngrid,i,j)),ngrid),true)) && (cljs.core._EQ_.call(null,mrsudoku.model.solver.check_constraint.call(null,cljs.core.second.call(null,constraint.call(null,ngrid,i,j)),ngrid),true)) && (cljs.core._EQ_.call(null,mrsudoku.model.solver.check_constraint.call(null,cljs.core.nth.call(null,constraint.call(null,ngrid,i,j),(2)),ngrid),true)))){
var G__11660 = i;
var G__11661 = (j + (1));
i = G__11660;
j = G__11661;
continue;
} else {
return false;
}
} else {
var G__11662 = (i + (1));
var G__11663 = (1);
i = G__11662;
j = G__11663;
continue;
}
} else {
return true;
}
break;
}
});
mrsudoku.model.solver.check_constraint_particular.call(null,mrsudoku.model.solver.constraint_grid,mrsudoku.model.solver.elimine_grid.call(null,mrsudoku.model.solver.sudoku_grid));
mrsudoku.model.solver.check_constraint.call(null,cljs.core.nth.call(null,mrsudoku.model.solver.constraint_grid.call(null,mrsudoku.model.solver.sudoku_grid,(1),(2)),(2)),mrsudoku.model.solver.elimine_grid.call(null,mrsudoku.model.solver.sudoku_grid));
mrsudoku.model.solver.find_solution2 = (function mrsudoku$model$solver$find_solution2(constraints,doms){
if(cljs.core.truth_(mrsudoku.model.solver.all_singleton_QMARK_.call(null,doms))){
if(cljs.core.truth_(mrsudoku.model.solver.check_constraint_particular.call(null,constraints,doms))){
return doms;
} else {
return null;
}
} else {
var x = mrsudoku.model.solver.select_var.call(null,doms);
var xvals = cljs.core.get.call(null,doms,x);
while(true){
if(cljs.core.seq.call(null,xvals)){
var sol = mrsudoku.model.solver.find_solution2.call(null,constraints,cljs.core.assoc.call(null,doms,x,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,xvals)])));
if(cljs.core.truth_(sol)){
return sol;
} else {
var G__11664 = cljs.core.rest.call(null,xvals);
xvals = G__11664;
continue;
}
} else {
return null;
}
break;
}
}
});
mrsudoku.model.solver.find_all_solutions2 = (function mrsudoku$model$solver$find_all_solutions2(constraints,doms){
if(cljs.core.truth_(mrsudoku.model.solver.all_singleton_QMARK_.call(null,doms))){
if(cljs.core.truth_(mrsudoku.model.solver.check_constraint_particular.call(null,constraints,doms))){
return doms;
} else {
return null;
}
} else {
var x = mrsudoku.model.solver.select_var.call(null,doms);
var xvals = cljs.core.get.call(null,doms,x);
return (new cljs.core.LazySeq(null,((function (xvals,x){
return (function (){
return cljs.core.cons.call(null,mrsudoku.model.solver.find_all_solutions2.call(null,constraints,cljs.core.assoc.call(null,doms,x,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,xvals)]))),mrsudoku.model.solver.find_all_solutions2.call(null,constraints,cljs.core.assoc.call(null,doms,x,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.rest.call(null,xvals)))));
});})(xvals,x))
,null,null));
}
});
mrsudoku.model.solver.find_solution2.call(null,mrsudoku.model.solver.constraint_grid,mrsudoku.model.solver.elimine_grid.call(null,mrsudoku.model.solver.sudoku_grid));
mrsudoku.model.solver.find_all_solutions2.call(null,mrsudoku.model.solver.constraint_grid,mrsudoku.model.solver.elimine_grid.call(null,mrsudoku.model.solver.sudoku_grid));
/**
 * Solve the sudoku `grid` by returing a full solved grid,
 *  or `nil` if the solver fails.
 */
mrsudoku.model.solver.solve = (function mrsudoku$model$solver$solve(grid){
return mrsudoku.model.solver.clean_grid.call(null,mrsudoku.model.solver.sudoku_grid);
});
mrsudoku.model.solver.solve.call(null,mrsudoku.model.solver.sudoku_grid);

//# sourceMappingURL=solver.js.map
