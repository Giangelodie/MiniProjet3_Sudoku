// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.model.grid');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mrsudoku.utils');
mrsudoku.model.grid.contrainte = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var1","var1",1378718176),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"var2","var2",-1416129845),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_], null);
mrsudoku.model.grid.intervalle = (function mrsudoku$model$grid$intervalle(min,max){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.range.call(null,min,max));
});
mrsudoku.model.grid.check_constraint = (function mrsudoku$model$grid$check_constraint(constraint,instance){
var var1 = new cljs.core.Keyword(null,"var1","var1",1378718176).cljs$core$IFn$_invoke$arity$1(constraint);
var var2 = new cljs.core.Keyword(null,"var2","var2",-1416129845).cljs$core$IFn$_invoke$arity$1(constraint);
var check = new cljs.core.Keyword(null,"check","check",1226308904).cljs$core$IFn$_invoke$arity$1(constraint);
return check.call(null,cljs.core.get.call(null,instance,var1),cljs.core.get.call(null,instance,var2));
});
mrsudoku.model.grid.all_singleton_QMARK_ = (function mrsudoku$model$grid$all_singleton_QMARK_(doms){
return cljs.core.every_QMARK_.call(null,(function (p1__7969_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__7969_SHARP_),(1));
}),cljs.core.vals.call(null,doms));
});
mrsudoku.model.grid.build_solution = (function mrsudoku$model$grid$build_solution(doms){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7970){
var vec__7971 = p__7970;
var x = cljs.core.nth.call(null,vec__7971,(0),null);
var xdom = cljs.core.nth.call(null,vec__7971,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.first.call(null,xdom)], null);
}),doms));
});
mrsudoku.model.grid.solution_QMARK_ = (function mrsudoku$model$grid$solution_QMARK_(constraints,sol){
var cs = constraints;
while(true){
if(cljs.core.seq.call(null,cs)){
var constraint = cljs.core.first.call(null,cs);
if(cljs.core.truth_(new cljs.core.Keyword(null,"check","check",1226308904).cljs$core$IFn$_invoke$arity$1(constraint).call(null,cljs.core.get.call(null,sol,new cljs.core.Keyword(null,"var1","var1",1378718176).cljs$core$IFn$_invoke$arity$1(constraint)),cljs.core.get.call(null,sol,new cljs.core.Keyword(null,"var2","var2",-1416129845).cljs$core$IFn$_invoke$arity$1(constraint))))){
var G__7974 = cljs.core.rest.call(null,cs);
cs = G__7974;
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
mrsudoku.model.grid.contrainte1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var1","var1",1378718176),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"var2","var2",-1416129845),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_], null)], null);
mrsudoku.model.grid.contraintes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var1","var1",1378718176),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"var2","var2",-1416129845),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var1","var1",1378718176),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"var2","var2",-1416129845),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"check","check",1226308904),cljs.core._GT__EQ_], null)], null);
mrsudoku.model.grid.select_var = (function mrsudoku$model$grid$select_var(doms){
return cljs.core.some.call(null,(function (p__7975){
var vec__7976 = p__7975;
var x = cljs.core.nth.call(null,vec__7976,(0),null);
var xdom = cljs.core.nth.call(null,vec__7976,(1),null);
if((cljs.core.count.call(null,xdom) > (1))){
return x;
} else {
return null;
}
}),doms);
});
mrsudoku.model.grid.find_solution = (function mrsudoku$model$grid$find_solution(constraints,doms){
if(cljs.core.truth_(mrsudoku.model.grid.all_singleton_QMARK_.call(null,doms))){
var sol = mrsudoku.model.grid.build_solution.call(null,doms);
if(cljs.core.truth_(mrsudoku.model.grid.solution_QMARK_.call(null,constraints,sol))){
return sol;
} else {
return null;
}
} else {
var x = mrsudoku.model.grid.select_var.call(null,doms);
cljs.core.println.call(null,x);

var xvals = cljs.core.get.call(null,doms,x);
while(true){
if(cljs.core.seq.call(null,xvals)){
var sol = mrsudoku.model.grid.find_solution.call(null,constraints,cljs.core.assoc.call(null,doms,x,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,xvals)])));
cljs.core.println.call(null,cljs.core.assoc.call(null,doms,x,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,xvals)])));

if(cljs.core.truth_(sol)){
return sol;
} else {
var G__7979 = cljs.core.rest.call(null,xvals);
xvals = G__7979;
continue;
}
} else {
return null;
}
break;
}
}
});
mrsudoku.model.grid.nettoie = (function mrsudoku$model$grid$nettoie(propos){
var s = propos;
var t = cljs.core.first.call(null,s);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(((cljs.core._EQ_.call(null,cljs.core.type.call(null,t),cljs.core.LazySeq)) || (cljs.core._EQ_.call(null,cljs.core.type.call(null,t),cljs.core.PersistentArrayMapSeq)))){
if(cljs.core.seq.call(null,t)){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,cljs.core.first.call(null,t)),cljs.core.MapEntry)){
var G__7980 = s;
var G__7981 = cljs.core.rest.call(null,cljs.core.rest.call(null,t));
var G__7982 = cljs.core.conj.call(null,res,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,t)),cljs.core.first.call(null,t))));
s = G__7980;
t = G__7981;
res = G__7982;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,t),null)){
var G__7983 = s;
var G__7984 = cljs.core.rest.call(null,t);
var G__7985 = res;
s = G__7983;
t = G__7984;
res = G__7985;
continue;
} else {
var G__7986 = s;
var G__7987 = cljs.core.rest.call(null,t);
var G__7988 = cljs.core.conj.call(null,res,cljs.core.first.call(null,t));
s = G__7986;
t = G__7987;
res = G__7988;
continue;
}
}
} else {
var G__7989 = cljs.core.rest.call(null,s);
var G__7990 = cljs.core.first.call(null,cljs.core.rest.call(null,s));
var G__7991 = res;
s = G__7989;
t = G__7990;
res = G__7991;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,t),cljs.core.PersistentArrayMap)){
var G__7992 = cljs.core.rest.call(null,s);
var G__7993 = cljs.core.first.call(null,cljs.core.rest.call(null,s));
var G__7994 = cljs.core.conj.call(null,res,cljs.core.first.call(null,s));
s = G__7992;
t = G__7993;
res = G__7994;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,t),cljs.core.MapEntry)){
var G__7995 = cljs.core.rest.call(null,cljs.core.rest.call(null,s));
var G__7996 = cljs.core.first.call(null,cljs.core.rest.call(null,s));
var G__7997 = cljs.core.conj.call(null,res,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,s)),cljs.core.first.call(null,s))));
s = G__7995;
t = G__7996;
res = G__7997;
continue;
} else {
var G__7998 = cljs.core.rest.call(null,s);
var G__7999 = cljs.core.first.call(null,cljs.core.rest.call(null,s));
var G__8000 = res;
s = G__7998;
t = G__7999;
res = G__8000;
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
mrsudoku.model.grid.find_all_solutions = (function mrsudoku$model$grid$find_all_solutions(constraints,doms){
if(cljs.core.truth_(mrsudoku.model.grid.all_singleton_QMARK_.call(null,doms))){
var sol = mrsudoku.model.grid.build_solution.call(null,doms);
if(cljs.core.truth_(mrsudoku.model.grid.solution_QMARK_.call(null,constraints,sol))){
return sol;
} else {
return null;
}
} else {
var x = mrsudoku.model.grid.select_var.call(null,doms);
var xvals = cljs.core.get.call(null,doms,x);
return (new cljs.core.LazySeq(null,((function (xvals,x){
return (function (){
return cljs.core.cons.call(null,mrsudoku.model.grid.find_all_solutions.call(null,constraints,cljs.core.assoc.call(null,doms,x,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,xvals)]))),mrsudoku.model.grid.find_all_solutions.call(null,constraints,cljs.core.assoc.call(null,doms,x,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.rest.call(null,xvals)))));
});})(xvals,x))
,null,null));
}
});
/**
 * Tries to augment the match with the supplied visited nodes.
 *   Returns the reverted edges of the complete maximal matching.
 */
mrsudoku.model.grid.augment = (function mrsudoku$model$grid$augment(graph,src,visited,match){
var dests = cljs.core.get.call(null,graph,src);
var visited__$1 = visited;
while(true){
if(cljs.core.seq.call(null,dests)){
if(cljs.core.truth_(visited__$1.call(null,cljs.core.first.call(null,dests)))){
var G__8004 = cljs.core.rest.call(null,dests);
var G__8005 = visited__$1;
dests = G__8004;
visited__$1 = G__8005;
continue;
} else {
var temp__5718__auto__ = cljs.core.get.call(null,match,cljs.core.first.call(null,dests));
if(cljs.core.truth_(temp__5718__auto__)){
var old_src = temp__5718__auto__;
var vec__8001 = mrsudoku.model.grid.augment.call(null,graph,old_src,cljs.core.conj.call(null,visited__$1,cljs.core.first.call(null,dests)),match);
var found = cljs.core.nth.call(null,vec__8001,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8001,(1),null);
var match_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8001,(2),null);
if(cljs.core.truth_(found)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,visited_SINGLEQUOTE_,cljs.core.assoc.call(null,match_SINGLEQUOTE_,cljs.core.first.call(null,dests),src)], null);
} else {
var G__8006 = cljs.core.rest.call(null,dests);
var G__8007 = visited_SINGLEQUOTE_;
dests = G__8006;
visited__$1 = G__8007;
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
mrsudoku.model.grid.cle = (function mrsudoku$model$grid$cle(match,valeur){
var s = match;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.first.call(null,s)),valeur)){
return cljs.core.first.call(null,cljs.core.first.call(null,s));
} else {
var G__8008 = cljs.core.rest.call(null,s);
s = G__8008;
continue;
}
} else {
return false;
}
break;
}
});
mrsudoku.model.grid.max_matching = (function mrsudoku$model$grid$max_matching(graph){
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
if(cljs.core._EQ_.call(null,true,cljs.core.first.call(null,mrsudoku.model.grid.augment.call(null,graph,cljs.core.first.call(null,s),visited,match)))){
var G__8012 = cljs.core.rest.call(null,s);
var G__8013 = cljs.core.second.call(null,mrsudoku.model.grid.augment.call(null,graph,cljs.core.first.call(null,s),visited,match));
var G__8014 = cljs.core.last.call(null,mrsudoku.model.grid.augment.call(null,graph,cljs.core.first.call(null,s),visited,match));
var G__8015 = buffk;
var G__8016 = buffv;
var G__8017 = aller;
var G__8018 = retour;
s = G__8012;
visited = G__8013;
match = G__8014;
buffk = G__8015;
buffv = G__8016;
aller = G__8017;
retour = G__8018;
continue;
} else {
var G__8019 = s;
var G__8020 = visited;
var G__8021 = match;
var G__8022 = cljs.core.conj.call(null,buffk,cljs.core.first.call(null,s));
var G__8023 = cljs.core.get.call(null,graph,cljs.core.first.call(null,s));
var G__8024 = aller;
var G__8025 = retour;
s = G__8019;
visited = G__8020;
match = G__8021;
buffk = G__8022;
buffv = G__8023;
aller = G__8024;
retour = G__8025;
continue;
}
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,cljs.core.vals.call(null,match)),cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,match))))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.pop.call(null,buffk))){
var G__8026 = cljs.core.rest.call(null,s);
var G__8027 = visited;
var G__8028 = cljs.core.assoc.call(null,match,cljs.core.first.call(null,clojure.set.difference(cljs.core.disj.call(null,buffv,mrsudoku.model.grid.cle.call(null,match,cljs.core.last.call(null,buffk))),aller,retour)),cljs.core.last.call(null,buffk));
var G__8029 = cljs.core.pop.call(null,buffk);
var G__8030 = cljs.core.get.call(null,graph,cljs.core.last.call(null,cljs.core.pop.call(null,buffk)));
var G__8031 = aller;
var G__8032 = retour;
s = G__8026;
visited = G__8027;
match = G__8028;
buffk = G__8029;
buffv = G__8030;
aller = G__8031;
retour = G__8032;
continue;
} else {
var G__8033 = s;
var G__8034 = visited;
var G__8035 = cljs.core.assoc.call(null,match,cljs.core.first.call(null,clojure.set.difference(cljs.core.disj.call(null,buffv,mrsudoku.model.grid.cle.call(null,match,cljs.core.last.call(null,buffk))),aller,retour)),cljs.core.last.call(null,buffk));
var G__8036 = cljs.core.pop.call(null,buffk);
var G__8037 = cljs.core.get.call(null,graph,cljs.core.last.call(null,cljs.core.pop.call(null,buffk)));
var G__8038 = aller;
var G__8039 = retour;
s = G__8033;
visited = G__8034;
match = G__8035;
buffk = G__8036;
buffv = G__8037;
aller = G__8038;
retour = G__8039;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,match),cljs.core.count.call(null,graph))){
var G__8040 = cljs.core.rest.call(null,s);
var G__8041 = visited;
var G__8042 = match;
var G__8043 = buffk;
var G__8044 = buffv;
var G__8045 = aller;
var G__8046 = retour;
s = G__8040;
visited = G__8041;
match = G__8042;
buffk = G__8043;
buffv = G__8044;
aller = G__8045;
retour = G__8046;
continue;
} else {
var val = cljs.core.first.call(null,clojure.set.difference(cljs.core.disj.call(null,buffv,mrsudoku.model.grid.cle.call(null,match,cljs.core.last.call(null,buffk))),aller,retour));
cljs.core.print.call(null,"\t val : ",val);

if(cljs.core._EQ_.call(null,null,val)){
if(cljs.core.empty_QMARK_.call(null,cljs.core.pop.call(null,buffk))){
var G__8047 = cljs.core.rest.call(null,s);
var G__8048 = visited;
var G__8049 = match;
var G__8050 = cljs.core.pop.call(null,buffk);
var G__8051 = cljs.core.PersistentHashSet.EMPTY;
var G__8052 = cljs.core.PersistentHashSet.EMPTY;
var G__8053 = cljs.core.PersistentHashSet.EMPTY;
s = G__8047;
visited = G__8048;
match = G__8049;
buffk = G__8050;
buffv = G__8051;
aller = G__8052;
retour = G__8053;
continue;
} else {
var G__8054 = s;
var G__8055 = visited;
var G__8056 = match;
var G__8057 = cljs.core.pop.call(null,buffk);
var G__8058 = cljs.core.get.call(null,graph,cljs.core.last.call(null,cljs.core.pop.call(null,buffk)));
var G__8059 = cljs.core.disj.call(null,aller,mrsudoku.model.grid.cle.call(null,match,cljs.core.last.call(null,cljs.core.pop.call(null,buffk))));
var G__8060 = cljs.core.conj.call(null,retour,mrsudoku.model.grid.cle.call(null,match,cljs.core.last.call(null,buffk)));
s = G__8054;
visited = G__8055;
match = G__8056;
buffk = G__8057;
buffv = G__8058;
aller = G__8059;
retour = G__8060;
continue;
}
} else {
var vec__8009 = mrsudoku.model.grid.augment.call(null,graph,cljs.core.get.call(null,match,val),visited,match);
var bool = cljs.core.nth.call(null,vec__8009,(0),null);
var v = cljs.core.nth.call(null,vec__8009,(1),null);
var m = cljs.core.nth.call(null,vec__8009,(2),null);
if(cljs.core._EQ_.call(null,true,bool)){
var G__8061 = s;
var G__8062 = v;
var G__8063 = cljs.core.assoc.call(null,m,val,cljs.core.last.call(null,buffk));
var G__8064 = cljs.core.pop.call(null,buffk);
var G__8065 = cljs.core.get.call(null,graph,cljs.core.last.call(null,cljs.core.pop.call(null,buffk)));
var G__8066 = aller;
var G__8067 = retour;
s = G__8061;
visited = G__8062;
match = G__8063;
buffk = G__8064;
buffv = G__8065;
aller = G__8066;
retour = G__8067;
continue;
} else {
if(cljs.core._EQ_.call(null,false,mrsudoku.model.grid.cle.call(null,match,cljs.core.last.call(null,buffk)))){
var G__8068 = s;
var G__8069 = v;
var G__8070 = m;
var G__8071 = cljs.core.conj.call(null,buffk,cljs.core.get.call(null,match,val));
var G__8072 = cljs.core.get.call(null,graph,cljs.core.get.call(null,match,val));
var G__8073 = aller;
var G__8074 = retour;
s = G__8068;
visited = G__8069;
match = G__8070;
buffk = G__8071;
buffv = G__8072;
aller = G__8073;
retour = G__8074;
continue;
} else {
var G__8075 = s;
var G__8076 = v;
var G__8077 = m;
var G__8078 = cljs.core.conj.call(null,buffk,cljs.core.get.call(null,match,val));
var G__8079 = cljs.core.get.call(null,graph,cljs.core.get.call(null,match,val));
var G__8080 = cljs.core.conj.call(null,aller,mrsudoku.model.grid.cle.call(null,match,cljs.core.last.call(null,buffk)));
var G__8081 = retour;
s = G__8075;
visited = G__8076;
match = G__8077;
buffk = G__8078;
buffv = G__8079;
aller = G__8080;
retour = G__8081;
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
mrsudoku.model.grid.complete_matching = (function mrsudoku$model$grid$complete_matching(vars,match){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,vars),cljs.core.count.call(null,match));
});
mrsudoku.model.grid.vars_of = (function mrsudoku$model$grid$vars_of(doms){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,doms));
});
mrsudoku.model.grid.dfs = (function mrsudoku$model$grid$dfs(var_args){
var G__8083 = arguments.length;
switch (G__8083) {
case 4:
return mrsudoku.model.grid.dfs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mrsudoku.model.grid.dfs.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mrsudoku.model.grid.dfs.cljs$core$IFn$_invoke$arity$4 = (function (graph,vert,f,init){
return cljs.core.first.call(null,mrsudoku.model.grid.dfs.call(null,graph,vert,f,init,cljs.core.PersistentHashSet.EMPTY));
});

mrsudoku.model.grid.dfs.cljs$core$IFn$_invoke$arity$5 = (function (graph,vert,f,init,visited){
if(cljs.core.truth_(visited.call(null,vert))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,visited], null);
} else {
var verts = cljs.core.get.call(null,graph,vert);
var res = f.call(null,init,vert);
var visited__$1 = cljs.core.conj.call(null,visited,vert);
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__8084 = mrsudoku.model.grid.dfs.call(null,graph,cljs.core.first.call(null,verts),f,res,visited__$1);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8084,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8084,(1),null);
var G__8088 = cljs.core.rest.call(null,verts);
var G__8089 = res_SINGLEQUOTE_;
var G__8090 = visited_SINGLEQUOTE_;
verts = G__8088;
res = G__8089;
visited__$1 = G__8090;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,visited__$1], null);
}
break;
}
}
});

mrsudoku.model.grid.dfs.cljs$lang$maxFixedArity = 5;

mrsudoku.model.grid.dfs_post = (function mrsudoku$model$grid$dfs_post(var_args){
var G__8092 = arguments.length;
switch (G__8092) {
case 4:
return mrsudoku.model.grid.dfs_post.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mrsudoku.model.grid.dfs_post.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mrsudoku.model.grid.dfs_post.cljs$core$IFn$_invoke$arity$4 = (function (graph,vert,f,init){
return cljs.core.first.call(null,mrsudoku.model.grid.dfs_post.call(null,graph,vert,f,init,cljs.core.PersistentHashSet.EMPTY));
});

mrsudoku.model.grid.dfs_post.cljs$core$IFn$_invoke$arity$5 = (function (graph,vert,f,init,visited){
if(cljs.core.truth_(visited.call(null,vert))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,visited], null);
} else {
var verts = cljs.core.get.call(null,graph,vert);
var res = init;
var visited__$1 = cljs.core.conj.call(null,visited,vert);
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__8093 = mrsudoku.model.grid.dfs_post.call(null,graph,cljs.core.first.call(null,verts),f,res,visited__$1);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8093,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8093,(1),null);
var G__8097 = cljs.core.rest.call(null,verts);
var G__8098 = res_SINGLEQUOTE_;
var G__8099 = visited_SINGLEQUOTE_;
verts = G__8097;
res = G__8098;
visited__$1 = G__8099;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,res,vert),visited__$1], null);
}
break;
}
}
});

mrsudoku.model.grid.dfs_post.cljs$lang$maxFixedArity = 5;

mrsudoku.model.grid.dfs_stack = (function mrsudoku$model$grid$dfs_stack(graph){
var verts = cljs.core.keys.call(null,graph);
var stack = cljs.core.List.EMPTY;
var visited = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__8100 = mrsudoku.model.grid.dfs_post.call(null,graph,cljs.core.first.call(null,verts),cljs.core.conj,stack,visited);
var stack_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8100,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8100,(1),null);
var G__8103 = cljs.core.rest.call(null,verts);
var G__8104 = stack_SINGLEQUOTE_;
var G__8105 = visited_SINGLEQUOTE_;
verts = G__8103;
stack = G__8104;
visited = G__8105;
continue;
} else {
return stack;
}
break;
}
});
mrsudoku.model.grid.inv_edges = (function mrsudoku$model$grid$inv_edges(src,dest){
return cljs.core.zipmap.call(null,dest,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([src])));
});
mrsudoku.model.grid.merge_edges = (function mrsudoku$model$grid$merge_edges(edges1,edges2){
var s = edges2;
var m = edges1;
while(true){
if(cljs.core.seq.call(null,s)){
var vec__8106 = cljs.core.first.call(null,s);
var k = cljs.core.nth.call(null,vec__8106,(0),null);
var v2 = cljs.core.nth.call(null,vec__8106,(1),null);
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var v1 = temp__5718__auto__;
var G__8109 = cljs.core.rest.call(null,s);
var G__8110 = cljs.core.assoc.call(null,m,k,clojure.set.union(v1,v2));
s = G__8109;
m = G__8110;
continue;
} else {
var G__8111 = cljs.core.rest.call(null,s);
var G__8112 = cljs.core.assoc.call(null,m,k,v2);
s = G__8111;
m = G__8112;
continue;
}
} else {
return m;
}
break;
}
});
mrsudoku.model.grid.transpose = (function mrsudoku$model$grid$transpose(graph){
mrsudoku.model.grid.l = cljs.core.keys.call(null,graph);

var trans1 = (function (){var s = cljs.core.keys.call(null,graph);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
cljs.core.println.call(null,res);

var G__8113 = cljs.core.rest.call(null,s);
var G__8114 = cljs.core.conj.call(null,res,mrsudoku.model.grid.inv_edges.call(null,cljs.core.first.call(null,s),cljs.core.get.call(null,graph,cljs.core.first.call(null,s))));
s = G__8113;
res = G__8114;
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
cljs.core.println.call(null,mrsudoku.model.grid.merge_edges.call(null,cljs.core.nth.call(null,trans1,k),cljs.core.nth.call(null,trans1,(k + (1)))));

var merge = mrsudoku.model.grid.merge_edges.call(null,res,cljs.core.nth.call(null,trans1,(k + (1))));
var G__8115 = (k + (1));
var G__8116 = merge;
k = G__8115;
res = G__8116;
continue;
} else {
return res;
}
break;
}
})();
var s = trans2;
var t = mrsudoku.model.grid.l;
while(true){
if(cljs.core.seq.call(null,t)){
if(!(cljs.core.contains_QMARK_.call(null,s,cljs.core.first.call(null,t)))){
var G__8117 = cljs.core.assoc.call(null,s,cljs.core.first.call(null,t),cljs.core.PersistentHashSet.EMPTY);
var G__8118 = cljs.core.rest.call(null,t);
s = G__8117;
t = G__8118;
continue;
} else {
var G__8119 = s;
var G__8120 = cljs.core.rest.call(null,t);
s = G__8119;
t = G__8120;
continue;
}
} else {
return s;
}
break;
}
});
mrsudoku.model.grid.compute_scc = (function mrsudoku$model$grid$compute_scc(graph){
var stack = mrsudoku.model.grid.dfs_stack.call(null,graph);
var tgraph = mrsudoku.model.grid.transpose.call(null,graph);
var s = stack;
var visited = cljs.core.PersistentHashSet.EMPTY;
var scc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core.truth_(visited.call(null,cljs.core.first.call(null,s)))){
var G__8124 = cljs.core.rest.call(null,s);
var G__8125 = visited;
var G__8126 = scc;
s = G__8124;
visited = G__8125;
scc = G__8126;
continue;
} else {
var vec__8121 = mrsudoku.model.grid.dfs.call(null,tgraph,cljs.core.first.call(null,s),cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,visited);
var comp = cljs.core.nth.call(null,vec__8121,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8121,(1),null);
var G__8127 = cljs.core.rest.call(null,s);
var G__8128 = visited_SINGLEQUOTE_;
var G__8129 = cljs.core.conj.call(null,scc,comp);
s = G__8127;
visited = G__8128;
scc = G__8129;
continue;
}
} else {
return scc;
}
break;
}
});
mrsudoku.model.grid.add_vertex = (function mrsudoku$model$grid$add_vertex(graph,vert){
if(cljs.core.contains_QMARK_.call(null,graph,vert)){
return graph;
} else {
return cljs.core.assoc.call(null,graph,vert,cljs.core.PersistentHashSet.EMPTY);
}
});
mrsudoku.model.grid.add_edge = (function mrsudoku$model$grid$add_edge(graph,src,dest){
return cljs.core.update.call(null,graph,src,(function (p1__8130_SHARP_){
return cljs.core.conj.call(null,p1__8130_SHARP_,dest);
}));
});
mrsudoku.model.grid.remove_edge = (function mrsudoku$model$grid$remove_edge(graph,src,dest){
return cljs.core.update.call(null,graph,src,(function (p1__8131_SHARP_){
return cljs.core.disj.call(null,p1__8131_SHARP_,dest);
}));
});
mrsudoku.model.grid.graph_with_matching = (function mrsudoku$model$grid$graph_with_matching(graph,match){
return cljs.core.reduce.call(null,(function (ngraph,p__8132){
var vec__8133 = p__8132;
var src = cljs.core.nth.call(null,vec__8133,(0),null);
var dest = cljs.core.nth.call(null,vec__8133,(1),null);
return mrsudoku.model.grid.remove_edge.call(null,mrsudoku.model.grid.add_edge.call(null,mrsudoku.model.grid.add_vertex.call(null,ngraph,src),src,dest),dest,src);
}),graph,match);
});
mrsudoku.model.grid.doms_from_sccomp = (function mrsudoku$model$grid$doms_from_sccomp(variables,comp){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,comp),(1))){
if(cljs.core.contains_QMARK_.call(null,variables,cljs.core.first.call(null,comp))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,comp),cljs.core.PersistentHashSet.EMPTY]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
var vars = clojure.set.select((function (p1__8136_SHARP_){
return cljs.core.contains_QMARK_.call(null,variables,p1__8136_SHARP_);
}),comp);
var values = clojure.set.difference(comp,vars);
return cljs.core.zipmap.call(null,vars,cljs.core.repeat.call(null,values));
}
});
mrsudoku.model.grid.doms_from_scc = (function mrsudoku$model$grid$doms_from_scc(vars,scc){
var s = scc;
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
var G__8137 = cljs.core.rest.call(null,s);
var G__8138 = cljs.core.conj.call(null,res,mrsudoku.model.grid.doms_from_sccomp.call(null,vars,cljs.core.first.call(null,s)));
s = G__8137;
res = G__8138;
continue;
} else {
return res;
}
break;
}
});
mrsudoku.model.grid.isolated_values = (function mrsudoku$model$grid$isolated_values(variables,scc){
var s = scc;
var res = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,s)),(1))) && (cljs.core.not.call(null,variables.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s))))))){
var G__8139 = cljs.core.rest.call(null,s);
var G__8140 = cljs.core.conj.call(null,res,cljs.core.first.call(null,cljs.core.first.call(null,s)));
s = G__8139;
res = G__8140;
continue;
} else {
var G__8141 = cljs.core.rest.call(null,s);
var G__8142 = res;
s = G__8141;
res = G__8142;
continue;
}
} else {
return res;
}
break;
}
});
mrsudoku.model.grid.value_known_by = (function mrsudoku$model$grid$value_known_by(doms,value){
return cljs.core.reduce.call(null,(function (res,p__8143){
var vec__8144 = p__8143;
var v = cljs.core.nth.call(null,vec__8144,(0),null);
var values = cljs.core.nth.call(null,vec__8144,(1),null);
if(cljs.core.contains_QMARK_.call(null,values,value)){
return cljs.core.conj.call(null,res,v);
} else {
return res;
}
}),cljs.core.PersistentHashSet.EMPTY,doms);
});
mrsudoku.model.grid.add_value = (function mrsudoku$model$grid$add_value(doms,vs,val){
var res = doms;
var s = vs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__8147 = cljs.core.update.call(null,res,cljs.core.first.call(null,s),cljs.core.conj,val);
var G__8148 = cljs.core.rest.call(null,s);
res = G__8147;
s = G__8148;
continue;
} else {
return res;
}
break;
}
});
mrsudoku.model.grid.access = (function mrsudoku$model$grid$access(doms,scc){
var scc_doms = mrsudoku.model.grid.doms_from_scc.call(null,mrsudoku.model.grid.vars_of.call(null,doms),scc);
var isolated = mrsudoku.model.grid.isolated_values.call(null,mrsudoku.model.grid.vars_of.call(null,doms),scc);
return cljs.core.reduce.call(null,((function (scc_doms,isolated){
return (function (doms_SINGLEQUOTE_,value){
return mrsudoku.model.grid.add_value.call(null,doms_SINGLEQUOTE_,mrsudoku.model.grid.value_known_by.call(null,doms,value),value);
});})(scc_doms,isolated))
,scc_doms,isolated);
});
mrsudoku.model.grid.alldiff = (function mrsudoku$model$grid$alldiff(doms){
var match = mrsudoku.model.grid.max_matching.call(null,doms);
if(cljs.core.truth_(mrsudoku.model.grid.complete_matching.call(null,doms,match))){
var scc = mrsudoku.model.grid.compute_scc.call(null,mrsudoku.model.grid.graph_with_matching.call(null,doms,match));
return mrsudoku.model.grid.access.call(null,doms,scc);
} else {
return null;
}
});
/**
 * Create a new cell.
 */
mrsudoku.model.grid.mk_cell = (function mrsudoku$model$grid$mk_cell(var_args){
var G__8150 = arguments.length;
switch (G__8150) {
case 0:
return mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null);
});

mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$1 = (function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217),v], null);
});

mrsudoku.model.grid.mk_cell.cljs$core$IFn$_invoke$arity$2 = (function (st,v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),st,new cljs.core.Keyword(null,"value","value",305978217),v], null);
});

mrsudoku.model.grid.mk_cell.cljs$lang$maxFixedArity = 2;

mrsudoku.model.grid.cell_value = (function mrsudoku$model$grid$cell_value(cell){
var G__8152 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cell);
var G__8152__$1 = (((G__8152 instanceof cljs.core.Keyword))?G__8152.fqn:null);
switch (G__8152__$1) {
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
mrsudoku.model.grid.sudoku_grid = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null,(5)),mrsudoku.model.grid.mk_cell.call(null,(3)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(9)),mrsudoku.model.grid.mk_cell.call(null,(8))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null,(9)),mrsudoku.model.grid.mk_cell.call(null,(5)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(4)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(3)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(2)),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(3)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(4)),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null,(9)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null,(2)),mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(5)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null,(9))], null)], null)], null);
/**
 * Get the cell at coordinates `(cx,cy)`
 * with `cx` the column number and `cy` the row number.
 */
mrsudoku.model.grid.cell = (function mrsudoku$model$grid$cell(grid,cx,cy){
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
mrsudoku.model.grid.change_cell = (function mrsudoku$model$grid$change_cell(grid,cx,cy,cell){
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
mrsudoku.model.grid.cell__GT_str = (function mrsudoku$model$grid$cell__GT_str(cell){
var pred__8154 = cljs.core._EQ_;
var expr__8155 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.truth_(pred__8154.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),expr__8155))){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cell))," "].join('');
} else {
if(cljs.core.truth_(pred__8154.call(null,new cljs.core.Keyword(null,"empty","empty",767870958),expr__8155))){
return " . ";
} else {
if(cljs.core.truth_(pred__8154.call(null,new cljs.core.Keyword(null,"set","set",304602554),expr__8155))){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cell)),"]"].join('');
} else {
if(cljs.core.truth_(pred__8154.call(null,new cljs.core.Keyword(null,"conflict","conflict",1978796605),expr__8155))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cell)),"!"].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8155)].join('')));
}
}
}
}
});
/**
 * Get the #`b` block of the `grid`.
 */
mrsudoku.model.grid.block = (function mrsudoku$model$grid$block(grid,b){
if(((((1) <= b)) && ((b <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 b 9)"));
}

var row = cljs.core.quot.call(null,(b - (1)),(3));
var blk = cljs.core.rem.call(null,(b - (1)),(3));
return cljs.core.nth.call(null,cljs.core.nth.call(null,grid,row),blk);
});
/**
 * Reduce the `b`-th `block` of a sudoku grid with a function taking 4
 *   parameters: `acc` for the accumulated value, `index` for the cell
 *   index in the block, `cx, cy` for the cell
 *   coordinates in the grid and `cell` for the cell content.
 */
mrsudoku.model.grid.reduce_block = (function mrsudoku$model$grid$reduce_block(f,init,block,b){
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
var vec__8157 = (function (){var xoffset = (0);
var index__$1 = index;
var cells__$1 = cells;
var acc__$1 = acc;
while(true){
if(cljs.core._EQ_.call(null,xoffset,(3))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc__$1,cells__$1,index__$1], null);
} else {
var G__8160 = (xoffset + (1));
var G__8161 = (index__$1 + (1));
var G__8162 = cljs.core.rest.call(null,cells__$1);
var G__8163 = f.call(null,acc__$1,index__$1,((bx + xoffset) + (1)),((by + yoffset) + (1)),cljs.core.first.call(null,cells__$1));
xoffset = G__8160;
index__$1 = G__8161;
cells__$1 = G__8162;
acc__$1 = G__8163;
continue;
}
break;
}
})();
var nacc = cljs.core.nth.call(null,vec__8157,(0),null);
var ncells = cljs.core.nth.call(null,vec__8157,(1),null);
var nindex = cljs.core.nth.call(null,vec__8157,(2),null);
var G__8164 = (yoffset + (1));
var G__8165 = nindex;
var G__8166 = ncells;
var G__8167 = nacc;
yoffset = G__8164;
index = G__8165;
cells = G__8166;
acc = G__8167;
continue;
}
break;
}
});
/**
 * Do the effects in function `f!` while traversing the `b`-th `block`
 *   of a sudoku grid . The function `f!` takes 4 parameters: `index` for
 *   the index of the cell in the block, `cx, cy`
 *   for the cell coordinates in the grid and `cell` for the cell content.
 */
mrsudoku.model.grid.do_block = (function mrsudoku$model$grid$do_block(f_BANG_,block,b){
return mrsudoku.model.grid.reduce_block.call(null,(function (_,index,cx,cy,cell){
return f_BANG_.call(null,index,cx,cy,cell);
}),null,block,b);
});
/**
 * Get the #`r` row in the `grid`.
 */
mrsudoku.model.grid.block_row = (function mrsudoku$model$grid$block_row(block,r){
if(((((1) <= r)) && ((r <= (3))))){
} else {
throw (new Error("Assert failed: (<= 1 r 3)"));
}

var base = ((r - (1)) * (3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,block,base),cljs.core.nth.call(null,block,(base + (1))),cljs.core.nth.call(null,block,(base + (2)))], null);
});
/**
 * Get the #`r` row in the `grid`.
 */
mrsudoku.model.grid.row = (function mrsudoku$model$grid$row(grid,r){
if(((((1) <= r)) && ((r <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 r 9)"));
}

var block_r = cljs.core.quot.call(null,(r - (1)),(3));
var row_r = (cljs.core.rem.call(null,(r - (1)),(3)) + (1));
var blocks = cljs.core.nth.call(null,grid,block_r);
return mrsudoku.utils.concatv.call(null,mrsudoku.model.grid.block_row.call(null,cljs.core.nth.call(null,blocks,(0)),row_r),mrsudoku.model.grid.block_row.call(null,cljs.core.nth.call(null,blocks,(1)),row_r),mrsudoku.model.grid.block_row.call(null,cljs.core.nth.call(null,blocks,(2)),row_r));
});
mrsudoku.model.grid.row__GT_str = (function mrsudoku$model$grid$row__GT_str(row){
return clojure.string.join.call(null," ",cljs.core.map.call(null,mrsudoku.model.grid.cell__GT_str,row));
});
/**
 * Fetch all the rows of a sudoku `grid`.
 */
mrsudoku.model.grid.rows = (function mrsudoku$model$grid$rows(grid){
var iter__4324__auto__ = (function mrsudoku$model$grid$rows_$_iter__8168(s__8169){
return (new cljs.core.LazySeq(null,(function (){
var s__8169__$1 = s__8169;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__8169__$1);
if(temp__5720__auto__){
var s__8169__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8169__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8169__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8171 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8170 = (0);
while(true){
if((i__8170 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8170);
cljs.core.chunk_append.call(null,b__8171,mrsudoku.model.grid.row.call(null,grid,i));

var G__8172 = (i__8170 + (1));
i__8170 = G__8172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8171),mrsudoku$model$grid$rows_$_iter__8168.call(null,cljs.core.chunk_rest.call(null,s__8169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8171),null);
}
} else {
var i = cljs.core.first.call(null,s__8169__$2);
return cljs.core.cons.call(null,mrsudoku.model.grid.row.call(null,grid,i),mrsudoku$model$grid$rows_$_iter__8168.call(null,cljs.core.rest.call(null,s__8169__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),(10)));
});
mrsudoku.model.grid.grid__GT_str = (function mrsudoku$model$grid$grid__GT_str(grid){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,mrsudoku.model.grid.row__GT_str,mrsudoku.model.grid.rows.call(null,grid)));
});
/**
 * Get the #`c` column of the `grid`.
 */
mrsudoku.model.grid.col = (function mrsudoku$model$grid$col(grid,c){
if(((((1) <= c)) && ((c <= (9))))){
} else {
throw (new Error("Assert failed: (<= 1 c 9)"));
}

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4324__auto__ = (function mrsudoku$model$grid$col_$_iter__8173(s__8174){
return (new cljs.core.LazySeq(null,(function (){
var s__8174__$1 = s__8174;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__8174__$1);
if(temp__5720__auto__){
var s__8174__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8174__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8174__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8176 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8175 = (0);
while(true){
if((i__8175 < size__4323__auto__)){
var cy = cljs.core._nth.call(null,c__4322__auto__,i__8175);
cljs.core.chunk_append.call(null,b__8176,mrsudoku.model.grid.cell.call(null,grid,c,cy));

var G__8177 = (i__8175 + (1));
i__8175 = G__8177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8176),mrsudoku$model$grid$col_$_iter__8173.call(null,cljs.core.chunk_rest.call(null,s__8174__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8176),null);
}
} else {
var cy = cljs.core.first.call(null,s__8174__$2);
return cljs.core.cons.call(null,mrsudoku.model.grid.cell.call(null,grid,c,cy),mrsudoku$model$grid$col_$_iter__8173.call(null,cljs.core.rest.call(null,s__8174__$2)));
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
/**
 * Reduce the whole `grid` of a sudoku with a function taking 4
 *   parameters: `acc` for the accumulated value, `cx, cy` for the cell
 *   coordinates and `cell` for the cell content.
 */
mrsudoku.model.grid.reduce_grid = (function mrsudoku$model$grid$reduce_grid(f,init,grid){
var cy = (1);
var acc = init;
while(true){
if(cljs.core._EQ_.call(null,cy,(10))){
return acc;
} else {
var nacc = (function (){var cx = (1);
var acc__$1 = acc;
while(true){
if(cljs.core._EQ_.call(null,cx,(10))){
return acc__$1;
} else {
var G__8178 = (cx + (1));
var G__8179 = f.call(null,acc__$1,cx,cy,mrsudoku.model.grid.cell.call(null,grid,cx,cy));
cx = G__8178;
acc__$1 = G__8179;
continue;
}
break;
}
})();
var G__8180 = (cy + (1));
var G__8181 = nacc;
cy = G__8180;
acc = G__8181;
continue;
}
break;
}
});
/**
 * Do the effects in function `f!` while traversing the `grid` of a
 *   sudoku. The function `f!` takes 3 parameters: `cx, cy` for the cell
 *   coordinates and `cell` for the cell content.
 */
mrsudoku.model.grid.do_grid = (function mrsudoku$model$grid$do_grid(f_BANG_,grid){
return mrsudoku.model.grid.reduce_grid.call(null,(function (_,cx,cy,cell){
return f_BANG_.call(null,cx,cy,cell);
}),null,grid);
});
mrsudoku.model.grid.elimine_block = (function mrsudoku$model$grid$elimine_block(grid,n){
var poss = (function (){var t = mrsudoku.model.grid.block.call(null,grid,n);
var a = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null);
while(true){
if(cljs.core.seq.call(null,t)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)),(1))){
var G__8182 = cljs.core.rest.call(null,t);
var G__8183 = a;
t = G__8182;
a = G__8183;
continue;
} else {
var G__8184 = cljs.core.rest.call(null,t);
var G__8185 = cljs.core.disj.call(null,a,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
t = G__8184;
a = G__8185;
continue;
}
} else {
return a;
}
break;
}
})();
var s = mrsudoku.model.grid.block.call(null,grid,n);
var v = mrsudoku.model.grid.reduce_block.call(null,((function (s,poss){
return (function (acc,index,cx,cy,cell){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});})(s,poss))
,cljs.core.PersistentVector.EMPTY,mrsudoku.model.grid.block.call(null,mrsudoku.model.grid.sudoku_grid,n),n);
var r = cljs.core.PersistentArrayMap.EMPTY;
var p = poss;
var i = (0);
while(true){
if((i < (9))){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s))),(1))){
var G__8186 = cljs.core.rest.call(null,s);
var G__8187 = v;
var G__8188 = cljs.core.assoc.call(null,r,cljs.core.nth.call(null,v,i),p);
var G__8189 = p;
var G__8190 = (i + (1));
s = G__8186;
v = G__8187;
r = G__8188;
p = G__8189;
i = G__8190;
continue;
} else {
var G__8191 = cljs.core.rest.call(null,s);
var G__8192 = v;
var G__8193 = cljs.core.assoc.call(null,r,cljs.core.nth.call(null,v,i),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217))]));
var G__8194 = p;
var G__8195 = (i + (1));
s = G__8191;
v = G__8192;
r = G__8193;
p = G__8194;
i = G__8195;
continue;
}
} else {
return r;
}
break;
}
});
mrsudoku.model.grid.elimine_row = (function mrsudoku$model$grid$elimine_row(grid,n){
var poss = (function (){var t = mrsudoku.model.grid.row.call(null,grid,n);
var a = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null);
while(true){
if(cljs.core.seq.call(null,t)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)),(1))){
var G__8196 = cljs.core.rest.call(null,t);
var G__8197 = a;
t = G__8196;
a = G__8197;
continue;
} else {
var G__8198 = cljs.core.rest.call(null,t);
var G__8199 = cljs.core.disj.call(null,a,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
t = G__8198;
a = G__8199;
continue;
}
} else {
return a;
}
break;
}
})();
var s = mrsudoku.model.grid.row.call(null,grid,n);
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),n], null);
var r = cljs.core.PersistentArrayMap.EMPTY;
var p = poss;
var i = (0);
while(true){
if((i < (9))){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s))),(1))){
var G__8200 = cljs.core.rest.call(null,s);
var G__8201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i + (1)) + (1)),n], null);
var G__8202 = cljs.core.assoc.call(null,r,v,p);
var G__8203 = p;
var G__8204 = (i + (1));
s = G__8200;
v = G__8201;
r = G__8202;
p = G__8203;
i = G__8204;
continue;
} else {
var G__8205 = cljs.core.rest.call(null,s);
var G__8206 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i + (1)) + (1)),n], null);
var G__8207 = cljs.core.assoc.call(null,r,v,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217))]));
var G__8208 = p;
var G__8209 = (i + (1));
s = G__8205;
v = G__8206;
r = G__8207;
p = G__8208;
i = G__8209;
continue;
}
} else {
return r;
}
break;
}
});
mrsudoku.model.grid.elimine_col = (function mrsudoku$model$grid$elimine_col(grid,n){
var poss = (function (){var t = mrsudoku.model.grid.col.call(null,grid,n);
var a = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null);
while(true){
if(cljs.core.seq.call(null,t)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)),(1))){
var G__8210 = cljs.core.rest.call(null,t);
var G__8211 = a;
t = G__8210;
a = G__8211;
continue;
} else {
var G__8212 = cljs.core.rest.call(null,t);
var G__8213 = cljs.core.disj.call(null,a,cljs.core.first.call(null,t).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
t = G__8212;
a = G__8213;
continue;
}
} else {
return a;
}
break;
}
})();
var s = mrsudoku.model.grid.col.call(null,grid,n);
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(1)], null);
var r = cljs.core.PersistentArrayMap.EMPTY;
var p = poss;
var i = (0);
while(true){
if((i < (9))){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,s))),(1))){
var G__8214 = cljs.core.rest.call(null,s);
var G__8215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,((i + (1)) + (1))], null);
var G__8216 = cljs.core.assoc.call(null,r,v,p);
var G__8217 = p;
var G__8218 = (i + (1));
s = G__8214;
v = G__8215;
r = G__8216;
p = G__8217;
i = G__8218;
continue;
} else {
var G__8219 = cljs.core.rest.call(null,s);
var G__8220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,((i + (1)) + (1))], null);
var G__8221 = cljs.core.assoc.call(null,r,v,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,cljs.core.seq.call(null,s)).call(null,new cljs.core.Keyword(null,"value","value",305978217))]));
var G__8222 = p;
var G__8223 = (i + (1));
s = G__8219;
v = G__8220;
r = G__8221;
p = G__8222;
i = G__8223;
continue;
}
} else {
return r;
}
break;
}
});
mrsudoku.model.grid.elimine_brc = (function mrsudoku$model$grid$elimine_brc(grid){
var i = (1);
var res = cljs.core.PersistentVector.EMPTY;
var j = (1);
while(true){
if(cljs.core._EQ_.call(null,j,(1))){
if((i < (10))){
var G__8224 = (i + (1));
var G__8225 = cljs.core.conj.call(null,res,mrsudoku.model.grid.elimine_block.call(null,grid,i));
var G__8226 = j;
i = G__8224;
res = G__8225;
j = G__8226;
continue;
} else {
var G__8227 = (1);
var G__8228 = res;
var G__8229 = (j + (1));
i = G__8227;
res = G__8228;
j = G__8229;
continue;
}
} else {
if(cljs.core._EQ_.call(null,j,(2))){
if((i < (10))){
var G__8230 = (i + (1));
var G__8231 = cljs.core.conj.call(null,res,mrsudoku.model.grid.elimine_row.call(null,grid,i));
var G__8232 = j;
i = G__8230;
res = G__8231;
j = G__8232;
continue;
} else {
var G__8233 = (1);
var G__8234 = res;
var G__8235 = (j + (1));
i = G__8233;
res = G__8234;
j = G__8235;
continue;
}
} else {
if(cljs.core._EQ_.call(null,j,(3))){
if((i < (10))){
var G__8236 = (i + (1));
var G__8237 = cljs.core.conj.call(null,res,mrsudoku.model.grid.elimine_col.call(null,grid,i));
var G__8238 = j;
i = G__8236;
res = G__8237;
j = G__8238;
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
mrsudoku.model.grid.merge_brc = (function mrsudoku$model$grid$merge_brc(brc1,brc2){
var s = brc2;
var m = brc1;
while(true){
if(cljs.core.seq.call(null,s)){
var vec__8239 = cljs.core.first.call(null,s);
var k = cljs.core.nth.call(null,vec__8239,(0),null);
var v2 = cljs.core.nth.call(null,vec__8239,(1),null);
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var v1 = temp__5718__auto__;
var G__8242 = cljs.core.rest.call(null,s);
var G__8243 = cljs.core.assoc.call(null,m,k,clojure.set.intersection(v1,v2));
s = G__8242;
m = G__8243;
continue;
} else {
var G__8244 = cljs.core.rest.call(null,s);
var G__8245 = cljs.core.assoc.call(null,m,k,v2);
s = G__8244;
m = G__8245;
continue;
}
} else {
return m;
}
break;
}
});
mrsudoku.model.grid.elimine_grid = (function mrsudoku$model$grid$elimine_grid(grid){
var v = mrsudoku.model.grid.elimine_brc.call(null,grid);
var prem = cljs.core.first.call(null,cljs.core.seq.call(null,v));
var s = cljs.core.rest.call(null,cljs.core.seq.call(null,v));
var res = prem;
while(true){
if(cljs.core.seq.call(null,s)){
var G__8246 = cljs.core.rest.call(null,s);
var G__8247 = mrsudoku.model.grid.merge_brc.call(null,res,cljs.core.first.call(null,s));
s = G__8246;
res = G__8247;
continue;
} else {
return res;
}
break;
}
});
mrsudoku.model.grid.constraint_block = (function mrsudoku$model$grid$constraint_block(grid,n){
var base = (function (){var res = cljs.core.PersistentArrayMap.EMPTY;
var v = mrsudoku.model.grid.reduce_block.call(null,((function (res){
return (function (acc,index,cx,cy,cell){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});})(res))
,cljs.core.PersistentVector.EMPTY,mrsudoku.model.grid.block.call(null,mrsudoku.model.grid.sudoku_grid,n),n);
var i = (0);
while(true){
if((i < (9))){
var G__8248 = cljs.core.assoc.call(null,res,i,cljs.core.nth.call(null,v,i));
var G__8249 = v;
var G__8250 = (i + (1));
res = G__8248;
v = G__8249;
i = G__8250;
continue;
} else {
return res;
}
break;
}
})();
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_);
});
mrsudoku.model.grid.constraint_row = (function mrsudoku$model$grid$constraint_row(grid,n){
var base = (function (){var res = cljs.core.PersistentArrayMap.EMPTY;
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),n], null);
var i = (0);
while(true){
if((i < (9))){
var G__8251 = cljs.core.assoc.call(null,res,i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i + (1)) + (1)),n], null));
var G__8252 = v;
var G__8253 = (i + (1));
res = G__8251;
v = G__8252;
i = G__8253;
continue;
} else {
return res;
}
break;
}
})();
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_);
});
mrsudoku.model.grid.constraint_col = (function mrsudoku$model$grid$constraint_col(grid,n){
var base = (function (){var res = cljs.core.PersistentArrayMap.EMPTY;
var v = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(1)], null);
var i = (0);
while(true){
if((i < (9))){
var G__8254 = cljs.core.assoc.call(null,res,i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,((i + (1)) + (1))], null));
var G__8255 = v;
var G__8256 = (i + (1));
res = G__8254;
v = G__8255;
i = G__8256;
continue;
} else {
return res;
}
break;
}
})();
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"check","check",1226308904),cljs.core.not_EQ_);
});
mrsudoku.model.grid.check_constraint = (function mrsudoku$model$grid$check_constraint(constraint,ngrid){
var bl = (function (){var s = constraint;
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,s)),new cljs.core.Keyword(null,"check","check",1226308904))){
var G__8257 = cljs.core.rest.call(null,s);
var G__8258 = res;
s = G__8257;
res = G__8258;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.get.call(null,ngrid,cljs.core.get.call(null,constraint,cljs.core.first.call(null,cljs.core.first.call(null,s))))),(1))){
var G__8259 = cljs.core.rest.call(null,s);
var G__8260 = cljs.core.assoc.call(null,res,cljs.core.get.call(null,constraint,cljs.core.first.call(null,cljs.core.first.call(null,s))),cljs.core.get.call(null,ngrid,cljs.core.get.call(null,constraint,cljs.core.first.call(null,cljs.core.first.call(null,s)))));
s = G__8259;
res = G__8260;
continue;
} else {
var G__8261 = cljs.core.rest.call(null,s);
var G__8262 = res;
s = G__8261;
res = G__8262;
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
var G__8263 = s;
var G__8264 = k;
var G__8265 = (l + (1));
s = G__8263;
k = G__8264;
l = G__8265;
continue;
} else {
return false;
}
} else {
var G__8266 = s;
var G__8267 = k;
var G__8268 = (l + (1));
s = G__8266;
k = G__8267;
l = G__8268;
continue;
}
} else {
var G__8269 = s;
var G__8270 = (k + (1));
var G__8271 = (0);
s = G__8269;
k = G__8270;
l = G__8271;
continue;
}
} else {
return true;
}
break;
}
});
mrsudoku.model.grid.get_block = (function mrsudoku$model$grid$get_block(cx,cy){
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
mrsudoku.model.grid.check_constraint_particular = (function mrsudoku$model$grid$check_constraint_particular(grid,ngrid){
var i = (1);
var j = (1);
while(true){
if((i < (10))){
if((j < (10))){
if(((((cljs.core._EQ_.call(null,mrsudoku.model.grid.check_constraint.call(null,mrsudoku.model.grid.constraint_row.call(null,grid,i),ngrid),true)) && (cljs.core._EQ_.call(null,mrsudoku.model.grid.check_constraint.call(null,mrsudoku.model.grid.constraint_col.call(null,grid,j),ngrid),true)))) && (cljs.core._EQ_.call(null,mrsudoku.model.grid.check_constraint.call(null,mrsudoku.model.grid.constraint_block.call(null,grid,mrsudoku.model.grid.get_block.call(null,i,j)),ngrid),true)))){
var G__8272 = i;
var G__8273 = (j + (1));
i = G__8272;
j = G__8273;
continue;
} else {
return false;
}
} else {
var G__8274 = (i + (1));
var G__8275 = (1);
i = G__8274;
j = G__8275;
continue;
}
} else {
return true;
}
break;
}
});

//# sourceMappingURL=grid.js.map
