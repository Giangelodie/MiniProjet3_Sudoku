// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__11188){
var map__11189 = p__11188;
var map__11189__$1 = ((((!((map__11189 == null)))?(((((map__11189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11189):map__11189);
var operation = cljs.core.get.call(null,map__11189__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__11189__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__11189__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__11189__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__11191_11203 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11192_11204 = null;
var count__11193_11205 = (0);
var i__11194_11206 = (0);
while(true){
if((i__11194_11206 < count__11193_11205)){
var vec__11195_11207 = cljs.core._nth.call(null,chunk__11192_11204,i__11194_11206);
var k_11208 = cljs.core.nth.call(null,vec__11195_11207,(0),null);
var cb_11209 = cljs.core.nth.call(null,vec__11195_11207,(1),null);
try{cb_11209.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e11198){var e_11210 = e11198;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_11208,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_11210);
}

var G__11211 = seq__11191_11203;
var G__11212 = chunk__11192_11204;
var G__11213 = count__11193_11205;
var G__11214 = (i__11194_11206 + (1));
seq__11191_11203 = G__11211;
chunk__11192_11204 = G__11212;
count__11193_11205 = G__11213;
i__11194_11206 = G__11214;
continue;
} else {
var temp__5720__auto___11215 = cljs.core.seq.call(null,seq__11191_11203);
if(temp__5720__auto___11215){
var seq__11191_11216__$1 = temp__5720__auto___11215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11191_11216__$1)){
var c__4351__auto___11217 = cljs.core.chunk_first.call(null,seq__11191_11216__$1);
var G__11218 = cljs.core.chunk_rest.call(null,seq__11191_11216__$1);
var G__11219 = c__4351__auto___11217;
var G__11220 = cljs.core.count.call(null,c__4351__auto___11217);
var G__11221 = (0);
seq__11191_11203 = G__11218;
chunk__11192_11204 = G__11219;
count__11193_11205 = G__11220;
i__11194_11206 = G__11221;
continue;
} else {
var vec__11199_11222 = cljs.core.first.call(null,seq__11191_11216__$1);
var k_11223 = cljs.core.nth.call(null,vec__11199_11222,(0),null);
var cb_11224 = cljs.core.nth.call(null,vec__11199_11222,(1),null);
try{cb_11224.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e11202){var e_11225 = e11202;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_11223,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_11225);
}

var G__11226 = cljs.core.next.call(null,seq__11191_11216__$1);
var G__11227 = null;
var G__11228 = (0);
var G__11229 = (0);
seq__11191_11203 = G__11226;
chunk__11192_11204 = G__11227;
count__11193_11205 = G__11228;
i__11194_11206 = G__11229;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
