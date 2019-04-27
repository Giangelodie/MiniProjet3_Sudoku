// Compiled by ClojureScript 1.10.339 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10485 = arguments.length;
var i__4532__auto___10486 = (0);
while(true){
if((i__4532__auto___10486 < len__4531__auto___10485)){
args__4534__auto__.push((arguments[i__4532__auto___10486]));

var G__10487 = (i__4532__auto___10486 + (1));
i__4532__auto___10486 = G__10487;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq10484){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10484));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__10488){
var vec__10489 = p__10488;
var test = cljs.core.nth.call(null,vec__10489,(0),null);
var result = cljs.core.nth.call(null,vec__10489,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__10493){
var vec__10494 = p__10493;
var seq__10495 = cljs.core.seq.call(null,vec__10494);
var first__10496 = cljs.core.first.call(null,seq__10495);
var seq__10495__$1 = cljs.core.next.call(null,seq__10495);
var head = first__10496;
var first__10496__$1 = cljs.core.first.call(null,seq__10495__$1);
var seq__10495__$2 = cljs.core.next.call(null,seq__10495__$1);
var expr = first__10496__$1;
var more = seq__10495__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__10494,seq__10495,first__10496,seq__10495__$1,head,first__10496__$1,seq__10495__$2,expr,more){
return (function (p1__10492_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__10492_SHARP_);
});})(clauses,default$,vec__10494,seq__10495,first__10496,seq__10495__$1,head,first__10496__$1,seq__10495__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__10498){
var vec__10499 = p__10498;
var seq__10500 = cljs.core.seq.call(null,vec__10499);
var first__10501 = cljs.core.first.call(null,seq__10500);
var seq__10500__$1 = cljs.core.next.call(null,seq__10500);
var head = first__10501;
var more = seq__10500__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__10499,seq__10500,first__10501,seq__10500__$1,head,more){
return (function (p1__10497_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__10497_SHARP_);
});})(clauses,vec__10499,seq__10500,first__10501,seq__10500__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__10503){
var vec__10504 = p__10503;
var seq__10505 = cljs.core.seq.call(null,vec__10504);
var first__10506 = cljs.core.first.call(null,seq__10505);
var seq__10505__$1 = cljs.core.next.call(null,seq__10505);
var head = first__10506;
var first__10506__$1 = cljs.core.first.call(null,seq__10505__$1);
var seq__10505__$2 = cljs.core.next.call(null,seq__10505__$1);
var pred = first__10506__$1;
var first__10506__$2 = cljs.core.first.call(null,seq__10505__$2);
var seq__10505__$3 = cljs.core.next.call(null,seq__10505__$2);
var expr = first__10506__$2;
var more = seq__10505__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__10504,seq__10505,first__10506,seq__10505__$1,head,first__10506__$1,seq__10505__$2,pred,first__10506__$2,seq__10505__$3,expr,more){
return (function (p1__10502_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__10502_SHARP_);
});})(clauses,default$,vec__10504,seq__10505,first__10506,seq__10505__$1,head,first__10506__$1,seq__10505__$2,pred,first__10506__$2,seq__10505__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__10508){
var vec__10509 = p__10508;
var seq__10510 = cljs.core.seq.call(null,vec__10509);
var first__10511 = cljs.core.first.call(null,seq__10510);
var seq__10510__$1 = cljs.core.next.call(null,seq__10510);
var head = first__10511;
var stmts = seq__10510__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__10509,seq__10510,first__10511,seq__10510__$1,head,stmts){
return (function (p1__10507_SHARP_){
return fipp.visit.visit.call(null,p,p1__10507_SHARP_);
});})(vec__10509,seq__10510,first__10511,seq__10510__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__10513){
var vec__10514 = p__10513;
var seq__10515 = cljs.core.seq.call(null,vec__10514);
var first__10516 = cljs.core.first.call(null,seq__10515);
var seq__10515__$1 = cljs.core.next.call(null,seq__10515);
var head = first__10516;
var first__10516__$1 = cljs.core.first.call(null,seq__10515__$1);
var seq__10515__$2 = cljs.core.next.call(null,seq__10515__$1);
var test = first__10516__$1;
var more = seq__10515__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__10514,seq__10515,first__10516,seq__10515__$1,head,first__10516__$1,seq__10515__$2,test,more){
return (function (p1__10512_SHARP_){
return fipp.visit.visit.call(null,p,p1__10512_SHARP_);
});})(vec__10514,seq__10515,first__10516,seq__10515__$1,head,first__10516__$1,seq__10515__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__10518){
var vec__10519 = p__10518;
var seq__10520 = cljs.core.seq.call(null,vec__10519);
var first__10521 = cljs.core.first.call(null,seq__10520);
var seq__10520__$1 = cljs.core.next.call(null,seq__10520);
var params = first__10521;
var body = seq__10520__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__10519,seq__10520,first__10521,seq__10520__$1,params,body){
return (function (p1__10517_SHARP_){
return fipp.visit.visit.call(null,p,p1__10517_SHARP_);
});})(vec__10519,seq__10520,first__10521,seq__10520__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__10524){
var vec__10525 = p__10524;
var seq__10526 = cljs.core.seq.call(null,vec__10525);
var first__10527 = cljs.core.first.call(null,seq__10526);
var seq__10526__$1 = cljs.core.next.call(null,seq__10526);
var head = first__10527;
var first__10527__$1 = cljs.core.first.call(null,seq__10526__$1);
var seq__10526__$2 = cljs.core.next.call(null,seq__10526__$1);
var fn_name = first__10527__$1;
var more = seq__10526__$2;
var vec__10528 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__10528,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__10528,(1),null);
var vec__10531 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__10531,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__10531,(1),null);
var vec__10534 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__10534,(0),null);
var body = cljs.core.nth.call(null,vec__10534,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__3938__auto__ = params;
if(cljs.core.truth_(and__3938__auto__)){
return (((docstring == null)) && ((attr_map == null)));
} else {
return and__3938__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__3938__auto__ = params;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__3938__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__10528,docstring,more__$1,vec__10531,attr_map,more__$2,vec__10534,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__10525,seq__10526,first__10527,seq__10526__$1,head,first__10527__$1,seq__10526__$2,fn_name,more){
return (function (p1__10522_SHARP_){
return fipp.visit.visit.call(null,p,p1__10522_SHARP_);
});})(vec__10528,docstring,more__$1,vec__10531,attr_map,more__$2,vec__10534,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__10525,seq__10526,first__10527,seq__10526__$1,head,first__10527__$1,seq__10526__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__10528,docstring,more__$1,vec__10531,attr_map,more__$2,vec__10534,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__10525,seq__10526,first__10527,seq__10526__$1,head,first__10527__$1,seq__10526__$2,fn_name,more){
return (function (p1__10523_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__10523_SHARP_);
});})(vec__10528,docstring,more__$1,vec__10531,attr_map,more__$2,vec__10534,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__10525,seq__10526,first__10527,seq__10526__$1,head,first__10527__$1,seq__10526__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__10539){
var vec__10540 = p__10539;
var seq__10541 = cljs.core.seq.call(null,vec__10540);
var first__10542 = cljs.core.first.call(null,seq__10541);
var seq__10541__$1 = cljs.core.next.call(null,seq__10541);
var head = first__10542;
var more = seq__10541__$1;
var vec__10543 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__10543,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__10543,(1),null);
var vec__10546 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__10546,(0),null);
var body = cljs.core.nth.call(null,vec__10546,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__10543,fn_name,more__$1,vec__10546,params,body,vec__10540,seq__10541,first__10542,seq__10541__$1,head,more){
return (function (p1__10537_SHARP_){
return fipp.visit.visit.call(null,p,p1__10537_SHARP_);
});})(vec__10543,fn_name,more__$1,vec__10546,params,body,vec__10540,seq__10541,first__10542,seq__10541__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__10543,fn_name,more__$1,vec__10546,params,body,vec__10540,seq__10541,first__10542,seq__10541__$1,head,more){
return (function (p1__10538_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__10538_SHARP_);
});})(vec__10543,fn_name,more__$1,vec__10546,params,body,vec__10540,seq__10541,first__10542,seq__10541__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__10552){
var vec__10553 = p__10552;
var _ = cljs.core.nth.call(null,vec__10553,(0),null);
var params = cljs.core.nth.call(null,vec__10553,(1),null);
var body = cljs.core.nth.call(null,vec__10553,(2),null);
var form = vec__10553;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__10556 = cljs.core.split_with.call(null,((function (vec__10553,_,params,body,form){
return (function (p1__10549_SHARP_){
return cljs.core.not_EQ_.call(null,p1__10549_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__10553,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__10556,(0),null);
var rests = cljs.core.nth.call(null,vec__10556,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__10556,inits,rests,vec__10553,_,params,body,form){
return (function (p1__10550_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__10550_SHARP_ + (1)))].join(''));
});})(vec__10556,inits,rests,vec__10553,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__10556,inits,rests,params_STAR_,body_STAR_,vec__10553,_,params,body,form){
return (function (p1__10551_SHARP_){
return fipp.visit.visit.call(null,p,p1__10551_SHARP_);
});})(vec__10556,inits,rests,params_STAR_,body_STAR_,vec__10553,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__10560){
var vec__10561 = p__10560;
var seq__10562 = cljs.core.seq.call(null,vec__10561);
var first__10563 = cljs.core.first.call(null,seq__10562);
var seq__10562__$1 = cljs.core.next.call(null,seq__10562);
var head = first__10563;
var clauses = seq__10562__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__10561,seq__10562,first__10563,seq__10562__$1,head,clauses){
return (function (p1__10559_SHARP_){
return fipp.visit.visit.call(null,p,p1__10559_SHARP_);
});})(vec__10561,seq__10562,first__10563,seq__10562__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__10565){
var vec__10566 = p__10565;
var seq__10567 = cljs.core.seq.call(null,vec__10566);
var first__10568 = cljs.core.first.call(null,seq__10567);
var seq__10567__$1 = cljs.core.next.call(null,seq__10567);
var head = first__10568;
var first__10568__$1 = cljs.core.first.call(null,seq__10567__$1);
var seq__10567__$2 = cljs.core.next.call(null,seq__10567__$1);
var ns_sym = first__10568__$1;
var more = seq__10567__$2;
var vec__10569 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__10569,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__10569,(1),null);
var vec__10572 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__10572,(0),null);
var specs = cljs.core.nth.call(null,vec__10572,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__10569,docstring,more__$1,vec__10572,attr_map,specs,vec__10566,seq__10567,first__10568,seq__10567__$1,head,first__10568__$1,seq__10567__$2,ns_sym,more){
return (function (p1__10564_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__10564_SHARP_);
});})(vec__10569,docstring,more__$1,vec__10572,attr_map,specs,vec__10566,seq__10567,first__10568,seq__10567__$1,head,first__10568__$1,seq__10567__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__10575){
var vec__10576 = p__10575;
var macro = cljs.core.nth.call(null,vec__10576,(0),null);
var arg = cljs.core.nth.call(null,vec__10576,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__10579 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__10579__$1 = (((G__10579 instanceof cljs.core.Keyword))?G__10579.fqn:null);
switch (G__10579__$1) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10579__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4324__auto__ = (function fipp$clojure$pretty_bindings_$_iter__10581(s__10582){
return (new cljs.core.LazySeq(null,(function (){
var s__10582__$1 = s__10582;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__10582__$1);
if(temp__5720__auto__){
var s__10582__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10582__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__10582__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__10584 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__10583 = (0);
while(true){
if((i__10583 < size__4323__auto__)){
var vec__10585 = cljs.core._nth.call(null,c__4322__auto__,i__10583);
var k = cljs.core.nth.call(null,vec__10585,(0),null);
var v = cljs.core.nth.call(null,vec__10585,(1),null);
cljs.core.chunk_append.call(null,b__10584,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__10591 = (i__10583 + (1));
i__10583 = G__10591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10584),fipp$clojure$pretty_bindings_$_iter__10581.call(null,cljs.core.chunk_rest.call(null,s__10582__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10584),null);
}
} else {
var vec__10588 = cljs.core.first.call(null,s__10582__$2);
var k = cljs.core.nth.call(null,vec__10588,(0),null);
var v = cljs.core.nth.call(null,vec__10588,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__10581.call(null,cljs.core.rest.call(null,s__10582__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__10593){
var vec__10594 = p__10593;
var seq__10595 = cljs.core.seq.call(null,vec__10594);
var first__10596 = cljs.core.first.call(null,seq__10595);
var seq__10595__$1 = cljs.core.next.call(null,seq__10595);
var head = first__10596;
var first__10596__$1 = cljs.core.first.call(null,seq__10595__$1);
var seq__10595__$2 = cljs.core.next.call(null,seq__10595__$1);
var bvec = first__10596__$1;
var body = seq__10595__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__10594,seq__10595,first__10596,seq__10595__$1,head,first__10596__$1,seq__10595__$2,bvec,body){
return (function (p1__10592_SHARP_){
return fipp.visit.visit.call(null,p,p1__10592_SHARP_);
});})(vec__10594,seq__10595,first__10596,seq__10595__$1,head,first__10596__$1,seq__10595__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__10597_SHARP_){
return fipp.visit.visit.call(null,p,p1__10597_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__10598){
var vec__10599 = p__10598;
var seq__10600 = cljs.core.seq.call(null,vec__10599);
var first__10601 = cljs.core.first.call(null,seq__10600);
var seq__10600__$1 = cljs.core.next.call(null,seq__10600);
var head = first__10601;
var first__10601__$1 = cljs.core.first.call(null,seq__10600__$1);
var seq__10600__$2 = cljs.core.next.call(null,seq__10600__$1);
var fields = first__10601__$1;
var opts_PLUS_specs = seq__10600__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__10602){
var vec__10603 = p__10602;
var seq__10604 = cljs.core.seq.call(null,vec__10603);
var first__10605 = cljs.core.first.call(null,seq__10604);
var seq__10604__$1 = cljs.core.next.call(null,seq__10604);
var head = first__10605;
var opts_PLUS_specs = seq__10604__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function fipp$clojure$build_symbol_map_$_iter__10606(s__10607){
return (new cljs.core.LazySeq(null,(function (){
var s__10607__$1 = s__10607;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__10607__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__10614 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__10614,(0),null);
var syms = cljs.core.nth.call(null,vec__10614,(1),null);
var iterys__4320__auto__ = ((function (s__10607__$1,vec__10614,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__10606_$_iter__10608(s__10609){
return (new cljs.core.LazySeq(null,((function (s__10607__$1,vec__10614,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__10609__$1 = s__10609;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__10609__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4320__auto__ = ((function (s__10609__$1,s__10607__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__10614,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__10606_$_iter__10608_$_iter__10610(s__10611){
return (new cljs.core.LazySeq(null,((function (s__10609__$1,s__10607__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__10614,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__10611__$1 = s__10611;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__10611__$1);
if(temp__5720__auto____$2){
var s__10611__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10611__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__10611__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__10613 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__10612 = (0);
while(true){
if((i__10612 < size__4323__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4322__auto__,i__10612);
cljs.core.chunk_append.call(null,b__10613,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__10617 = (i__10612 + (1));
i__10612 = G__10617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10613),fipp$clojure$build_symbol_map_$_iter__10606_$_iter__10608_$_iter__10610.call(null,cljs.core.chunk_rest.call(null,s__10611__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10613),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__10611__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__10606_$_iter__10608_$_iter__10610.call(null,cljs.core.rest.call(null,s__10611__$2)));
}
} else {
return null;
}
break;
}
});})(s__10609__$1,s__10607__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__10614,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__10609__$1,s__10607__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__10614,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__10606_$_iter__10608.call(null,cljs.core.rest.call(null,s__10609__$1)));
} else {
var G__10618 = cljs.core.rest.call(null,s__10609__$1);
s__10609__$1 = G__10618;
continue;
}
} else {
return null;
}
break;
}
});})(s__10607__$1,vec__10614,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__10607__$1,vec__10614,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,syms));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__10606.call(null,cljs.core.rest.call(null,s__10607__$1)));
} else {
var G__10619 = cljs.core.rest.call(null,s__10607__$1);
s__10607__$1 = G__10619;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var G__10621 = arguments.length;
switch (G__10621) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=clojure.js.map
