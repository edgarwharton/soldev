window.LANSA.addSrc("wrtn",function(d,c,a,b,p){function t(a){return null===a?d.dd:"object"==typeof a?a.mimetype&&a.data&&a.filename?new c.UI(a):"":a}function m(a){if(a===d.dd)return null;switch(typeof a){case "object":if(a instanceof c.pk)return a.toString();if(c.$q&&a instanceof c.$q)return a.qxc();if(a instanceof c.UI)return a.dEa}return a}function q(b,c,d){var e=document.createElement("form");e.setAttribute("method","post");e.setAttribute("action",b);d==a.K2.Uvc&&e.setAttribute("target","_blank");
for(var f in c)c.hasOwnProperty(f)&&(b=document.createElement("input"),b.setAttribute("type","hidden"),b.setAttribute("name",f),b.setAttribute("value",c[f]),e.appendChild(b));document.body.appendChild(e);e.submit()}function s(a){return(a=a.sm)&&"M"==a}function h(a,b){u&&b.append("_SESSIONKEY",u);var e=a.FLD;if(e!==p)for(var f in e){var l=e[f];if(l===d.dd)return!1;l instanceof c.UI?b.append(f,l.Tua(),l.Lg()):b.append(f,m(l))}e=a.LIST;if(e!==p)for(var k in e){for(var h=e[k],r=h.aq={},q=h.entryCount(),
s=1;s<=q;s++)for(f in h.getEntry(s),1==s&&b.append(k+"..",1),r){l=s.toString();4>l.length&&(l="000"+l,l=l.substr(l.length-4));var t=k+"."+l+"."+f,l=r[f];if(l===d.dd)return delete h.aq,!1;l instanceof c.UI?b.append(t,l.Tua(),l.Lg()):b.append(t,m(l))}delete h.aq}return!0}function e(a,b){var c=b.webroutine={},d=c.context={};u&&(d["session-key"]=u);A&&(d["session-key-name"]=A);l&&(d["session-key-method"]=l);d=a.FLD;if(d!==p){var e=c.fields={},f;for(f in d)(e[f]={}).value=m(d[f])}d=a.LIST;if(d!==p){var c=
c.lists={},k;for(k in d){for(var h=c[k]={},e=h.header=[],h=h.entries=[],r=d[k],q=r.aq={},s=r.entryCount(),t=1;t<=s;t++){r.getEntry(t);if(1==t)for(f in q){var E={};e.push(E);E.name=f}E=[];h.push(E);for(f in q)E.push(m(q[f]))}delete r.aq}}}function k(a){if(a=a.context){var b=a["session-key"];b!=p&&""!=b&&b!=u&&b!=r&&(r=u,u=b,A=a["session-key-name"],l=a["session-key-method"])}}function f(a,b,c){function e(a){if(a!=p){var b=a.FLD;f(a.LIST);f(b)}}function f(b){if(b!=p)for(var c in b)if(null===b[c])throw d.Wkd(c,
a.UEa,a.TEa);}e(b);e(c)}var u=p,A=p,l="hidden",r=p;a.K2={eHb:0,Uvc:1};a.K2.v={CURRENT:a.K2.eHb,NEW:a.K2.Uvc};d.Ld(function(){},"PRIM_WRTN",{});c.ikc=function(){E.K.call(this)};var E=c.u(c.ikc,c.td);E.D5=function(){return u!==p?u:""};E.T5a=function(a){u=a;r=p};E.xCb=function(){var a=b.Ei().hZa();if(a.mua()){var c="lansa-session-"+b.TIa(),d=JSON.stringify({key:this.D5()});if(a.Xh(c,d))return!0}return!1};E.iCb=function(){var a=b.Ei().hZa();if(a.mua()&&(a=a.Hx("lansa-session-"+b.TIa()))){var c=null;try{c=
JSON.parse(a.kb())}catch(d){c=null}if(c)return this.T5a(c.key),!0}return!1};E.Tk=function(){var a=b.Ei().hZa();a.mua()&&a.$s("lansa-session-"+b.TIa());l=A=u=p};d.Sa(c.ikc,"PRIM_WEB","Session",{Aa:{Key:{a:E.D5}},jc:{Save:E.xCb,Restore:E.iCb,Clear:E.Tk}});c.jMa=function(a,b){C.K.call(this);this.UEa=a;this.TEa=b;this.iPb=this.jOb=""};var C=c.u(c.jMa,c.td);C.HYd=function(){return this.jOb};C.ege=function(a){this.jOb=a};C.a0d=function(){return this.iPb};C.sge=function(a){this.iPb=a};C.F2c=function(){return this.UEa};
C.n2c=function(){return this.TEa};C.Xz=function(){return b.uMc(this.jOb,b.sIa(),this.UEa,this.TEa,this.$1c())};C.$1c=function(){var a=this.iPb;""==a&&(a=b.rIa());return a};d.Sa(c.jMa,"PRIM_WEB","ServerRequest",{Aa:{ServerModule:{a:C.F2c},Routine:{a:C.n2c}}});c.Jxa=function(a,b){x.K.call(this,a,b)};var x=c.u(c.Jxa,c.jMa);x.V_=function(a,b){this.W0b(a,b,!1,null)};x.U4=function(a,c){this.W0b(a,c,!0,b.$X())};x.W0b=function(c,m,r,q){function E(c){var e=null;try{e=JSON.parse(c)}catch(f){e=null}if(e){if(c=
e.webroutine)if(c=c.messages)for(var h=d.N0c(),r=0;r<c.length;r++)h.Xh(c[r],null);if(c=e["vlweb-error"]){var s=a.rY.XXa;switch(c["message-id"]){case "HM42":case "HM43":s=a.rY.Z1b;l=A=u=p;break;case "HM05":s=a.rY.Y1b}s=J.SHa(s);if(!s&&c.message!==p)throw d.SBb(J.UEa,J.TEa,c.message);}else{h=m;if(e=e.webroutine){r=h.FLD;if(r!==p){var C=e.fields;if(C)for(var x in r)c=C[x],c!==p&&(c=t(c.value),r[x].set(c))}x=h.LIST;if(x!==p&&(h=e.lists))for(s in x)if(r=x[s],r.Rj(),c=h[s])for(var C=c.header,y=c.entries,
z=0;z<y.length;z++){for(var D=r.aq={},K=y[z],L=0;L<K.length;L++)c=t(K[L]),D[C[L].name]=c;r.zg();delete r.aq}k(e)}J.Y4()}}else if(s=J.SHa(a.rY.XXa),!s)throw d.SBb(J.UEa,J.TEa,"Invalid JSON");b.CB(q)}function C(c){if(!J.SHa(a.rY.XXa))throw d.SBb(J.UEa,J.TEa,"response code "+c);b.CB(q)}function x(a){a.lengthComputable&&J.yVc(a.loaded,a.total,d.O(a.loaded/a.total*100))}function K(a){if(a.lengthComputable){var b=a.loaded/a.total*100;J.B1b(a.loaded,a.total,d.O(b))}else J.B1b(a.loaded,-1,-1)}var J=this;
f(J,c,m);if(s(c)){var L=new FormData;if(h(c,L)){b.Hhd(this.Xz(),L,E,C,x,K,r);return}}L={};e(c,L);b.Coc(this.Xz(),L,E,C,x,K,r)};x.SHa=function(c){var e=!1,e=d.cc();e.cN("REASON",c,a.rY.v);e.lg("HANDLED",!1);this.Ga(a.Q.X4,e);(e=e.Zg("HANDLED"))||(e=b.Ei().pVc(this,c));return e};x.Y4=function(){this.Ga(a.Q.zaa)};x.yVc=function(b,c,e){var f=d.cc();f.KF("LOADED",b);f.KF("TOTAL",c);f.KF("PROGRESS",e);this.Ga(a.Q.eHd,f)};x.B1b=function(b,c,e){var f=d.cc();f.KF("LOADED",b);f.KF("TOTAL",c);f.KF("PROGRESS",
e);this.Ga(a.Q.LSc,f)};d.Sa(c.Jxa,"PRIM_WEB","DataRequest",{jc:{Execute:x.V_,ExecuteAsync:x.U4}});c.dya=function(b,c){K.K.call(this,b,c);this.Fn=a.K2.eHb};var K=c.u(c.dya,c.jMa);K.n3c=function(){return this.Fn};K.UEb=function(a){this.Fn=a};K.V_=function(a,b){f(this,a,b);var c={};u&&(c._SESSIONKEY=u);var d=a.FLD;if(d!==p)for(var e in d)c[e]=m(d[e]);d=a.LIST;if(d!==p)for(var l in d){for(var k=d[l],h=k.aq={},r=k.entryCount(),s=1;s<=r;s++)for(e in k.getEntry(s),1==s&&(c[l+".."]=1),h){var t=s.toString();
4>t.length&&(t="000"+t,t=t.substr(t.length-4));c[l+"."+t+"."+e]=m(h[e])}delete k.aq}q(this.Xz(),c,this.Fn)};d.Sa(c.dya,"PRIM_WEB","WebPageRequest",{Aa:{Target:{a:function(){return d.wa(this.Fn,a.K2.v)},f:function(b){this.UEb(d.va(b,a.K2.v))}}},jc:{Execute:K.V_}});c.Wxa=function(b,c){J.K.call(this,b,c);this.Fn=a.K2.eHb};var J=c.u(c.Wxa,c.jMa);J.n3c=function(){return this.Fn};J.UEb=function(a){this.Fn=a};J.V_=function(a,b){f(this,a,b);var c={};u&&(c._SESSIONKEY=u);var d=a.FLD;if(d!==p)for(var e in d)c[e]=
m(d[e]);d=a.LIST;if(d!==p)for(var l in d){for(var k=d[l],h=k.aq={},r=k.entryCount(),s=1;s<=r;s++)for(e in k.getEntry(s),1==s&&(c[l+".."]=1),h){var t=s.toString();4>t.length&&(t="000"+t,t=t.substr(t.length-4));c[l+"."+t+"."+e]=m(h[e])}delete k.aq}q(this.Xz(),c,this.Fn)};d.Sa(c.Wxa,"PRIM_WEB","ResourceRequest",{Aa:{Target:{a:function(){return d.wa(this.Fn,a.K2.v)},f:function(b){this.UEb(d.va(b,a.K2.v))}}},jc:{Execute:J.V_}});b.iUc=function(b,c){var d=c.webroutine;if(d){var e=b.uz.PIa(),f=d.fields;if(f){var l=
b.JNa(e),k;for(k in f){var h=null,m=b.fm[k];m&&(h=m.l_());if(!h&&l)for(var r in l)if(m=l[r],m.uh()==k){h=m;break}h&&(m=t(f[k].value),h.set(m))}}if(d=d.lists){var e=b.imd(e),p;for(p in d){f=null;if(m=b.fm[p])switch(m.vua()){case a.Ly.vAc:case a.Ly.E9a:case a.Ly.qhb:f=m}!f&&e&&(f=e[p]);if(f)for(m=d[p],l=m.header,k=m.entries,h=0;h<k.length;h++){r=f.aq={};for(var u=k[h],q=0;q<u.length;q++)m=t(u[q]),r[l[q].name]=m;f.zg();delete f.aq}}}}};b.hUc=function(a){(a=a.webroutine)&&k(a)}});