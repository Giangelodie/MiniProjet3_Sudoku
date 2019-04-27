// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("mrsudoku.subs","name","mrsudoku.subs/name",120853156),(function (db){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db))].join('');
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("mrsudoku.subs","grid-changed","mrsudoku.subs/grid-changed",1919843698),(function (db){
console.log(["grid:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db))].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(db)], null);
}));

//# sourceMappingURL=subs.js.map
