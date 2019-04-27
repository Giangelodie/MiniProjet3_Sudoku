// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_11338 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__11339 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11340 = null;
var count__11341 = (0);
var i__11342 = (0);
while(true){
if((i__11342 < count__11341)){
var vec__11343 = cljs.core._nth.call(null,chunk__11340,i__11342);
var effect_key = cljs.core.nth.call(null,vec__11343,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11343,(1),null);
var temp__5718__auto___11359 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11359)){
var effect_fn_11360 = temp__5718__auto___11359;
effect_fn_11360.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11361 = seq__11339;
var G__11362 = chunk__11340;
var G__11363 = count__11341;
var G__11364 = (i__11342 + (1));
seq__11339 = G__11361;
chunk__11340 = G__11362;
count__11341 = G__11363;
i__11342 = G__11364;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11339);
if(temp__5720__auto__){
var seq__11339__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11339__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11339__$1);
var G__11365 = cljs.core.chunk_rest.call(null,seq__11339__$1);
var G__11366 = c__4351__auto__;
var G__11367 = cljs.core.count.call(null,c__4351__auto__);
var G__11368 = (0);
seq__11339 = G__11365;
chunk__11340 = G__11366;
count__11341 = G__11367;
i__11342 = G__11368;
continue;
} else {
var vec__11346 = cljs.core.first.call(null,seq__11339__$1);
var effect_key = cljs.core.nth.call(null,vec__11346,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11346,(1),null);
var temp__5718__auto___11369 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11369)){
var effect_fn_11370 = temp__5718__auto___11369;
effect_fn_11370.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11371 = cljs.core.next.call(null,seq__11339__$1);
var G__11372 = null;
var G__11373 = (0);
var G__11374 = (0);
seq__11339 = G__11371;
chunk__11340 = G__11372;
count__11341 = G__11373;
i__11342 = G__11374;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11166__auto___11375 = re_frame.interop.now.call(null);
var duration__11167__auto___11376 = (end__11166__auto___11375 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11167__auto___11376,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11166__auto___11375);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11338;
}} else {
var seq__11349 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11350 = null;
var count__11351 = (0);
var i__11352 = (0);
while(true){
if((i__11352 < count__11351)){
var vec__11353 = cljs.core._nth.call(null,chunk__11350,i__11352);
var effect_key = cljs.core.nth.call(null,vec__11353,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11353,(1),null);
var temp__5718__auto___11377 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11377)){
var effect_fn_11378 = temp__5718__auto___11377;
effect_fn_11378.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11379 = seq__11349;
var G__11380 = chunk__11350;
var G__11381 = count__11351;
var G__11382 = (i__11352 + (1));
seq__11349 = G__11379;
chunk__11350 = G__11380;
count__11351 = G__11381;
i__11352 = G__11382;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11349);
if(temp__5720__auto__){
var seq__11349__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11349__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11349__$1);
var G__11383 = cljs.core.chunk_rest.call(null,seq__11349__$1);
var G__11384 = c__4351__auto__;
var G__11385 = cljs.core.count.call(null,c__4351__auto__);
var G__11386 = (0);
seq__11349 = G__11383;
chunk__11350 = G__11384;
count__11351 = G__11385;
i__11352 = G__11386;
continue;
} else {
var vec__11356 = cljs.core.first.call(null,seq__11349__$1);
var effect_key = cljs.core.nth.call(null,vec__11356,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11356,(1),null);
var temp__5718__auto___11387 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11387)){
var effect_fn_11388 = temp__5718__auto___11387;
effect_fn_11388.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11389 = cljs.core.next.call(null,seq__11349__$1);
var G__11390 = null;
var G__11391 = (0);
var G__11392 = (0);
seq__11349 = G__11389;
chunk__11350 = G__11390;
count__11351 = G__11391;
i__11352 = G__11392;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__11393 = cljs.core.seq.call(null,value);
var chunk__11394 = null;
var count__11395 = (0);
var i__11396 = (0);
while(true){
if((i__11396 < count__11395)){
var map__11397 = cljs.core._nth.call(null,chunk__11394,i__11396);
var map__11397__$1 = ((((!((map__11397 == null)))?(((((map__11397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11397):map__11397);
var effect = map__11397__$1;
var ms = cljs.core.get.call(null,map__11397__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11397__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11393,chunk__11394,count__11395,i__11396,map__11397,map__11397__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11393,chunk__11394,count__11395,i__11396,map__11397,map__11397__$1,effect,ms,dispatch))
,ms);
}


var G__11401 = seq__11393;
var G__11402 = chunk__11394;
var G__11403 = count__11395;
var G__11404 = (i__11396 + (1));
seq__11393 = G__11401;
chunk__11394 = G__11402;
count__11395 = G__11403;
i__11396 = G__11404;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11393);
if(temp__5720__auto__){
var seq__11393__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11393__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11393__$1);
var G__11405 = cljs.core.chunk_rest.call(null,seq__11393__$1);
var G__11406 = c__4351__auto__;
var G__11407 = cljs.core.count.call(null,c__4351__auto__);
var G__11408 = (0);
seq__11393 = G__11405;
chunk__11394 = G__11406;
count__11395 = G__11407;
i__11396 = G__11408;
continue;
} else {
var map__11399 = cljs.core.first.call(null,seq__11393__$1);
var map__11399__$1 = ((((!((map__11399 == null)))?(((((map__11399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11399):map__11399);
var effect = map__11399__$1;
var ms = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11393,chunk__11394,count__11395,i__11396,map__11399,map__11399__$1,effect,ms,dispatch,seq__11393__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11393,chunk__11394,count__11395,i__11396,map__11399,map__11399__$1,effect,ms,dispatch,seq__11393__$1,temp__5720__auto__))
,ms);
}


var G__11409 = cljs.core.next.call(null,seq__11393__$1);
var G__11410 = null;
var G__11411 = (0);
var G__11412 = (0);
seq__11393 = G__11409;
chunk__11394 = G__11410;
count__11395 = G__11411;
i__11396 = G__11412;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__11413 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11414 = null;
var count__11415 = (0);
var i__11416 = (0);
while(true){
if((i__11416 < count__11415)){
var event = cljs.core._nth.call(null,chunk__11414,i__11416);
re_frame.router.dispatch.call(null,event);


var G__11417 = seq__11413;
var G__11418 = chunk__11414;
var G__11419 = count__11415;
var G__11420 = (i__11416 + (1));
seq__11413 = G__11417;
chunk__11414 = G__11418;
count__11415 = G__11419;
i__11416 = G__11420;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11413);
if(temp__5720__auto__){
var seq__11413__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11413__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11413__$1);
var G__11421 = cljs.core.chunk_rest.call(null,seq__11413__$1);
var G__11422 = c__4351__auto__;
var G__11423 = cljs.core.count.call(null,c__4351__auto__);
var G__11424 = (0);
seq__11413 = G__11421;
chunk__11414 = G__11422;
count__11415 = G__11423;
i__11416 = G__11424;
continue;
} else {
var event = cljs.core.first.call(null,seq__11413__$1);
re_frame.router.dispatch.call(null,event);


var G__11425 = cljs.core.next.call(null,seq__11413__$1);
var G__11426 = null;
var G__11427 = (0);
var G__11428 = (0);
seq__11413 = G__11425;
chunk__11414 = G__11426;
count__11415 = G__11427;
i__11416 = G__11428;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__11429 = cljs.core.seq.call(null,value);
var chunk__11430 = null;
var count__11431 = (0);
var i__11432 = (0);
while(true){
if((i__11432 < count__11431)){
var event = cljs.core._nth.call(null,chunk__11430,i__11432);
clear_event.call(null,event);


var G__11433 = seq__11429;
var G__11434 = chunk__11430;
var G__11435 = count__11431;
var G__11436 = (i__11432 + (1));
seq__11429 = G__11433;
chunk__11430 = G__11434;
count__11431 = G__11435;
i__11432 = G__11436;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11429);
if(temp__5720__auto__){
var seq__11429__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11429__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11429__$1);
var G__11437 = cljs.core.chunk_rest.call(null,seq__11429__$1);
var G__11438 = c__4351__auto__;
var G__11439 = cljs.core.count.call(null,c__4351__auto__);
var G__11440 = (0);
seq__11429 = G__11437;
chunk__11430 = G__11438;
count__11431 = G__11439;
i__11432 = G__11440;
continue;
} else {
var event = cljs.core.first.call(null,seq__11429__$1);
clear_event.call(null,event);


var G__11441 = cljs.core.next.call(null,seq__11429__$1);
var G__11442 = null;
var G__11443 = (0);
var G__11444 = (0);
seq__11429 = G__11441;
chunk__11430 = G__11442;
count__11431 = G__11443;
i__11432 = G__11444;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
