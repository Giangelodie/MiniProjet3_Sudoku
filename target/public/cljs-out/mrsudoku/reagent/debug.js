// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8068__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8069__i = 0, G__8069__a = new Array(arguments.length -  0);
while (G__8069__i < G__8069__a.length) {G__8069__a[G__8069__i] = arguments[G__8069__i + 0]; ++G__8069__i;}
  args = new cljs.core.IndexedSeq(G__8069__a,0,null);
} 
return G__8068__delegate.call(this,args);};
G__8068.cljs$lang$maxFixedArity = 0;
G__8068.cljs$lang$applyTo = (function (arglist__8070){
var args = cljs.core.seq(arglist__8070);
return G__8068__delegate(args);
});
G__8068.cljs$core$IFn$_invoke$arity$variadic = G__8068__delegate;
return G__8068;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8071__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8072__i = 0, G__8072__a = new Array(arguments.length -  0);
while (G__8072__i < G__8072__a.length) {G__8072__a[G__8072__i] = arguments[G__8072__i + 0]; ++G__8072__i;}
  args = new cljs.core.IndexedSeq(G__8072__a,0,null);
} 
return G__8071__delegate.call(this,args);};
G__8071.cljs$lang$maxFixedArity = 0;
G__8071.cljs$lang$applyTo = (function (arglist__8073){
var args = cljs.core.seq(arglist__8073);
return G__8071__delegate(args);
});
G__8071.cljs$core$IFn$_invoke$arity$variadic = G__8071__delegate;
return G__8071;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
