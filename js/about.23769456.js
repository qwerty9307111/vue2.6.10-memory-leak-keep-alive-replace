(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0cb2":function(t,e,n){var r=n("e330"),a=n("7b0b"),o=Math.floor,i=r("".charAt),u=r("".replace),c=r("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,f,d){var v=n+t.length,p=r.length,x=l;return void 0!==f&&(f=a(f),x=s),u(d,x,(function(a,u){var s;switch(i(u,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,n);case"'":return c(e,v);case"<":s=f[c(u,1,-1)];break;default:var l=+u;if(0===l)return a;if(l>p){var d=o(l/10);return 0===d?a:d<=p?void 0===r[d-1]?i(u,1):r[d-1]+i(u,1):a}s=r[l-1]}return void 0===s?"":s}))}},"107c":function(t,e,n){var r=n("d039"),a=n("da84"),o=a.RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,e,n){var r=n("da84"),a=n("c65b"),o=n("825a"),i=n("1626"),u=n("c6b6"),c=n("9263"),s=r.TypeError;t.exports=function(t,e){var n=t.exec;if(i(n)){var r=a(n,t,e);return null!==r&&o(r),r}if("RegExp"===u(t))return a(c,t,e);throw s("RegExp#exec called on incompatible receiver")}},"25f0":function(t,e,n){"use strict";var r=n("e330"),a=n("5e77").PROPER,o=n("6eeb"),i=n("825a"),u=n("3a9b"),c=n("577e"),s=n("d039"),l=n("ad6d"),f="toString",d=RegExp.prototype,v=d[f],p=r(l),x=s((function(){return"/a/b"!=v.call({source:"a",flags:"b"})})),g=a&&v.name!=f;(x||g)&&o(RegExp.prototype,f,(function(){var t=i(this),e=c(t.source),n=t.flags,r=c(void 0===n&&u(d,t)&&!("flags"in d)?p(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"2fe4":function(t,e,n){"use strict";n("4328")},4328:function(t,e,n){},5319:function(t,e,n){"use strict";var r=n("2ba4"),a=n("c65b"),o=n("e330"),i=n("d784"),u=n("d039"),c=n("825a"),s=n("1626"),l=n("5926"),f=n("50c4"),d=n("577e"),v=n("1d80"),p=n("8aa5"),x=n("dc4a"),g=n("0cb2"),h=n("14c3"),b=n("b622"),m=b("replace"),E=Math.max,I=Math.min,$=o([].concat),y=o([].push),R=o("".indexOf),w=o("".slice),k=function(t){return void 0===t?t:String(t)},_=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),C=!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));i("replace",(function(t,e,n){var o=A?"$":"$0";return[function(t,n){var r=v(this),o=void 0==t?void 0:x(t,m);return o?a(o,t,r,n):a(e,d(r),t,n)},function(t,a){var i=c(this),u=d(t);if("string"==typeof a&&-1===R(a,o)&&-1===R(a,"$<")){var v=n(e,i,u,a);if(v.done)return v.value}var x=s(a);x||(a=d(a));var b=i.global;if(b){var m=i.unicode;i.lastIndex=0}var _=[];while(1){var A=h(i,u);if(null===A)break;if(y(_,A),!b)break;var C=d(A[0]);""===C&&(i.lastIndex=p(u,f(i.lastIndex),m))}for(var S="",O=0,T=0;T<_.length;T++){A=_[T];for(var M=d(A[0]),P=E(I(l(A.index),u.length),0),D=[],N=1;N<A.length;N++)y(D,k(A[N]));var K=A.groups;if(x){var j=$([M],D,P,u);void 0!==K&&y(j,K);var q=d(r(a,void 0,j))}else q=g(M,u,P,D,K,a);P>=O&&(S+=w(u,O,P)+q,O=P+M.length)}return S+w(u,O)}]}),!C||!_||A)},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("c65b"),a=n("e330"),o=n("577e"),i=n("ad6d"),u=n("9f7f"),c=n("5692"),s=n("7c73"),l=n("69f3").get,f=n("fce3"),d=n("107c"),v=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,x=p,g=a("".charAt),h=a("".indexOf),b=a("".replace),m=a("".slice),E=function(){var t=/a/,e=/b*/g;return r(p,t,"a"),r(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),I=u.BROKEN_CARET,$=void 0!==/()??/.exec("")[1],y=E||$||I||f||d;y&&(x=function(t){var e,n,a,u,c,f,d,y=this,R=l(y),w=o(t),k=R.raw;if(k)return k.lastIndex=y.lastIndex,e=r(x,k,w),y.lastIndex=k.lastIndex,e;var _=R.groups,A=I&&y.sticky,C=r(i,y),S=y.source,O=0,T=w;if(A&&(C=b(C,"y",""),-1===h(C,"g")&&(C+="g"),T=m(w,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==g(w,y.lastIndex-1))&&(S="(?: "+S+")",T=" "+T,O++),n=new RegExp("^(?:"+S+")",C)),$&&(n=new RegExp("^"+S+"$(?!\\s)",C)),E&&(a=y.lastIndex),u=r(p,A?n:y,T),A?u?(u.input=m(u.input,O),u[0]=m(u[0],O),u.index=y.lastIndex,y.lastIndex+=u[0].length):y.lastIndex=0:E&&u&&(y.lastIndex=y.global?u.index+u[0].length:a),$&&u&&u.length>1&&r(v,u[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(u[c]=void 0)})),u&&_)for(u.groups=f=s(null),c=0;c<_.length;c++)d=_[c],f[d[0]]=u[d[1]];return u}),t.exports=x},"9f7f":function(t,e,n){var r=n("d039"),a=n("da84"),o=a.RegExp,i=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),u=i||r((function(){return!o("a","y").sticky})),c=i||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:u,UNSUPPORTED_Y:i}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),o=n("9263"),i=n("d039"),u=n("b622"),c=n("9112"),s=u("species"),l=RegExp.prototype;t.exports=function(t,e,n,f){var d=u(t),v=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!v||!p||n){var x=r(/./[d]),g=e(d,""[t],(function(t,e,n,a,i){var u=r(t),c=e.exec;return c===o||c===l.exec?v&&!i?{done:!0,value:x(e,n,a)}:{done:!0,value:u(n,e,a)}:{done:!1}}));a(String.prototype,t,g[0]),a(l,d,g[1])}f&&c(l[d],"sham",!0)}},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.flag?n("div",{staticClass:"about"},[n("button",{on:{click:t.onClick}},[t._v("刷新")]),n("AboutComponent",{attrs:{msg:"This is an about page"}})],1):t._e()},a=[],o=(n("ac1f"),n("5319"),n("d3b7"),n("25f0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])}),i=[],u={name:"About",props:{msg:String},data:function(){return{text:""}},mounted:function(){this.getData()},methods:{getData:function(){this.text=this.$route.query.id}}},c=u,s=(n("2fe4"),n("2877")),l=Object(s["a"])(c,o,i,!1,null,"5b4bed44",null),f=l.exports,d={name:"about",components:{AboutComponent:f},data:function(){return{flag:!0}},watch:{$route:{handler:function(){this.reload()},deep:!0}},methods:{onClick:function(){this.$router.replace({query:{id:Math.random().toString().substring(2)}})},reload:function(){var t=this;this.flag=!1,this.$nextTick((function(){t.flag=!0}))}}},v=d,p=Object(s["a"])(v,r,a,!1,null,null,null);e["default"]=p.exports},fce3:function(t,e,n){var r=n("d039"),a=n("da84"),o=a.RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=about.23769456.js.map