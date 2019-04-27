// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mrsudoku.events');
goog.require('mrsudoku.views');
goog.require('mrsudoku.config');
mrsudoku.core.dev_setup = (function mrsudoku$core$dev_setup(){
if(mrsudoku.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"<mrsudoku> in dev mode");
} else {
return null;
}
});
mrsudoku.core.mount_root = (function mrsudoku$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.views.main_panel], null),document.getElementById("app"));
});
mrsudoku.core.re_render = (function mrsudoku$core$re_render(){
if(mrsudoku.config.debug_QMARK_){
cljs.core.println.call(null,"<mrsudoku> re-render hook");
} else {
}

return mrsudoku.core.mount_root.call(null);
});
if((typeof mrsudoku !== 'undefined') && (typeof mrsudoku.core !== 'undefined') && (typeof mrsudoku.core.start_up !== 'undefined')){
} else {
mrsudoku.core.start_up = (function (){
mrsudoku.core.dev_setup.call(null);

mrsudoku.core.mount_root.call(null);

return true;
})()
;
}

//# sourceMappingURL=core.js.map
