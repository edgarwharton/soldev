window.LANSA.addSrc("web",function(d,c,a,b,p){d.Pb("PRIM_LABL");var t=localStorage,l=sessionStorage;a.SO={yBb:0,dqc:1,eqc:2,cqc:3};a.SO.G={INLINE:a.SO.yBb,LEFT:a.SO.dqc,RIGHT:a.SO.eqc,CENTER:a.SO.cqc};a.QI={TWa:0,UZb:1,YZb:2,ZZb:3,a_b:4,lkb:5};a.QI.G={NONE:a.QI.TWa,NOTLOADED:a.QI.UZb,PERMISSIONDENIED:a.QI.YZb,POSITIONUNAVAILABLE:a.QI.ZZb,TIMEOUT:a.QI.a_b,UNKNOWNERROR:a.QI.lkb};a.m_={TSb:0,RSb:1,USb:2,SSb:4};a.m_.G={NONE:a.m_.TSb,ERROR:a.m_.RSb,WARNING:a.m_.USb,INFORMATION:a.m_.SSb};c.Twb=function(){q.K.call(this);
this.nb=[]};var q=c.u(c.Twb,c.Bd);q.R=function(){q.k.R.call(this)};q.Kc=function(){return this.nb.length};q.te=function(a){return this.nb[a-1]};q.pI=function(a){for(var c=null,d=0;d<this.nb.length;d++){var e=this.nb[d];if(b.fA(e.gq,a)){c=e;break}}return c};d.Sa(c.Twb,"PRIM_WEB","URLParameters",{Aa:{Item:{a:function(a){return this.pI(d.ka(a))},Fz:"na"},ItemCount:{a:q.Kc}},df:{bf:"Item"},us:{Rr:function(a){return this.te(d.O(a))},Ty:q.Kc}});b.Ncd=function(a,b,d){a.nb.push(new c.O1a(b,d))};b.Mcd=function(a,
d){b.Jl().X4b().nb.unshift(new c.O1a(a,d))};c.O1a=function(a,b){s.K.call(this);this.gq=a;this.cb=b};var s=c.u(c.O1a,c.Bd);s.Lh=function(){return this.gq.toUpperCase()};s.kb=function(){return this.cb};d.Sa(c.O1a,"PRIM_WEB","URLParameter",{Aa:{Name:{a:s.Lh},Value:{a:s.kb}}});c.Rwb=function(){k.K.call(this);this.Hp=null;this.o9=p};var k=c.u(c.Rwb,c.Bd);k.R=function(){k.k.R.call(this)};k.Uta=function(){if(this.o9===p&&(this.o9=!1,t))try{var a,c=b.Jl().r4b();t.setItem(c,c);a=t.getItem(c)==c;t.removeItem(c);
a&&(this.o9=!0)}catch(d){}return this.o9};k.Kc=function(){return this.eW().length};k.te=function(a){return this.eW()[a-1]};k.pI=function(a){for(var b=null,c=this.eW(),d=0;d<c.length;d++){var e=c[d];if(e.gq==a){b=e;break}}return b};k.eW=function(){if(null==this.Hp&&(this.Hp=[],t))for(var a=0;a<t.length;a++){var b=t.key(a);""!=b&&t[b]!=p&&this.Hp.push(new c.M1a(b))}return this.Hp};k.WMa=function(){this.Hp=null};k.si=function(a,b){var d=this.eW(),e=this.pI(a);null==e&&(e=new c.M1a(a),d.push(e));e.ob(b)||
d.splice(d.indexOf(e),1)};k.Ru=function(c){var d=this.eW(),e=this.pI(c);null!=e&&(t.removeItem(c),d.splice(d.indexOf(e),1),b.Jl().Cia(a.tJ.cAa))};k.Vl=function(){t&&(t.clear(),this.WMa(),b.Jl().Cia(a.tJ.cAa))};d.Sa(c.Rwb,"PRIM_WEB","LocalStorage",{Aa:{Available:{a:k.Uta},Item:{a:function(a){return this.pI(d.ka(a))},Fz:"na"},ItemCount:{a:k.Kc}},jc:{Add:k.si,Remove:k.Ru,Clear:k.Vl},df:{bf:"Item"},us:{Rr:function(a){return this.te(d.O(a))},Ty:k.Kc}});c.M1a=function(a){e.K.call(this);this.gq=a};var e=
c.u(c.M1a,c.Bd);e.Lh=function(){return this.gq};e.kb=function(){var a="";t&&(a=t[this.gq],a===p&&(a=""));return a};e.ob=function(c){var d=!0;try{t[this.gq]=c,b.Jl().Cia(a.tJ.cAa)}catch(e){b.Jl().I0b(a.tJ.cAa),d=!1}return d};d.Sa(c.M1a,"PRIM_WEB","LocalStorageItem",{Aa:{Name:{a:e.Lh},Value:{a:e.kb,f:function(a){this.ob(d.ka(a))}}},df:{bf:"Value"}});c.Swb=function(){g.K.call(this);this.Hp=null;this.o9=p};var g=c.u(c.Swb,c.Bd);g.R=function(){g.k.R.call(this)};g.Uta=function(){if(this.o9===p&&(this.o9=
!1,l))try{var a,c=b.Jl().r4b();l.setItem(c,c);a=l.getItem(c)==c;l.removeItem(c);a&&(this.o9=!0)}catch(d){}return this.o9};g.Kc=function(){return this.eW().length};g.te=function(a){return this.eW()[a-1]};g.pI=function(a){for(var b=null,c=this.eW(),d=0;d<c.length;d++){var e=c[d];if(e.gq==a){b=e;break}}return b};g.eW=function(){if(null==this.Hp&&(this.Hp=[],l))for(var a=0;a<l.length;a++){var b=l.key(a);""!=b&&l[b]!=p&&this.Hp.push(new c.N1a(b))}return this.Hp};g.WMa=function(){this.Hp=null};g.si=function(a,
b){var d=this.eW(),e=this.pI(a);null==e&&(e=new c.N1a(a),d.push(e));return e.ob(b)?!0:(d.splice(d.indexOf(e),1),!1)};g.Ru=function(c){var d=this.eW(),e=this.pI(c);null!=e&&(l.removeItem(c),d.splice(d.indexOf(e),1),b.Jl().Cia(a.tJ.dAa))};g.Vl=function(){l&&(l.clear(),this.WMa(),b.Jl().Cia(a.tJ.dAa))};d.Sa(c.Swb,"PRIM_WEB","SessionStorage",{Aa:{Available:{a:g.Uta},Item:{a:function(a){return this.pI(d.ka(a))},Fz:"na"},ItemCount:{a:g.Kc}},jc:{Add:g.si,Remove:g.Ru,Clear:g.Vl},df:{bf:"Item"},us:{Rr:function(a){return this.te(d.O(a))},
Ty:g.Kc}});c.N1a=function(a){f.K.call(this);this.gq=a};var f=c.u(c.N1a,c.Bd);f.Lh=function(){return this.gq};f.kb=function(){var a="";l&&(a=l[this.gq],a===p&&(a=""));return a};f.ob=function(c){var d=!0;try{l[this.gq]=c,b.Jl().Cia(a.tJ.dAa)}catch(e){b.Jl().I0b(a.tJ.dAa),d=!1}return d};d.Sa(c.N1a,"PRIM_WEB","SessionStorageItem",{Aa:{Name:{a:f.Lh},Value:{a:f.kb,f:function(a){this.ob(d.ka(a))}}},df:{bf:"Value"}});c.Qwb=function(){v.K.call(this)};var v=c.u(c.Qwb,c.Bd);v.R=function(){v.k.R.call(this)};
v.W2c=function(a){0<a&&window.history.go(0-a)};v.X2c=function(a){0<a&&window.history.go(a)};v.si=function(a,c){var d=window.location.protocol+"//"+window.location.host+window.location.pathname;0<a.length&&(d+="?"+a);window.history.pushState(null,"",d);b.Jl().eBb();c&&b.Jl().lXa()};v.QAb=function(a,c){var d=window.location.protocol+"//"+window.location.host+window.location.pathname;0<a.length&&(d+="?"+a);window.history.replaceState(null,"",d);b.Jl().eBb();c&&b.Jl().lXa()};d.Sa(c.Qwb,"PRIM_WEB","History",
{jc:{Add:function(a,b){this.si(d.ka(a),b===p?!0:d.Ca(b))},Replace:function(a,b){this.QAb(d.ka(a),b===p?!0:d.Ca(b))},GoBack:function(a){this.W2c(a===p?1:d.O(a))},GoForward:function(a){this.X2c(a===p?1:d.O(a))}}});c.Aic=function(){B.K.call(this);this.Nb=b.Mf(0,0,400,400);this.M9=this.Ve="";this.Sc&=~a.Wd.iS;this.Sc&=~a.Wd.T0};var B=c.u(c.Aic,c.Zl);B.Ae=function(){return c.mjc};B.eB=function(){return this.Ve};B.vl=function(b){this.Ve!=b&&(this.Ve=b,this.pa(a.g.j))};B.FC=function(){return this.M9};B.Uma=
function(a){this.M9=a};B.Ic=function(a,c,d){B.k.Ic.call(this,a,c,d);a=this.Ta().$a();b.me[a].vl(this.Ve)};B.NTc=function(){this.Ga(a.Q.Cac)};d.Sa(c.Aic,"PRIM_WEB","Page",{Aa:{Source:{a:B.eB,f:function(a){this.vl(d.ka(a))}},Description:{a:B.FC,f:function(a){this.Uma(d.ka(a))}}}});c.Jxa=function(){n.K.call(this)};var n=c.u(c.Jxa,c.Zl);n.$nb=function(){for(var a=null,b=this;b;){if(b instanceof c.$wb){a=b;break}b=b.fc}return a};n.c7=function(){n.k.c7.call(this);var a=this.$nb();a&&a.P4(this)};n.kX=function(){n.k.kX.call(this);
var a=this.$nb();a&&a.Q4(this)};n.gf=function(a){n.k.gf.call(this,a);var b=this.$nb();b==this&&b.jE(a,!1)};d.Sa(c.Jxa,"PRIM_WEB","RichTextItem",{});c.dxb=function(){r.K.call(this)};var r=c.u(c.dxb,c.Jxa);r.Ae=function(){return c.vkc};d.Sa(c.dxb,"PRIM_WEB","RichTextLine",{});c.axb=function(){E.K.call(this)};var E=c.u(c.axb,c.Jxa);E.Ae=function(){return c.tkc};d.Sa(c.axb,"PRIM_WEB","RichTextBreak",{});c.bxb=function(){C.K.call(this);this.y3=null;this.fTa=a.SO.yBb;this.Ycb=this.Zcb=0};var C=c.u(c.bxb,
c.Jxa);C.R=function(){C.k.R.call(this);this.K5a(null)};C.Ae=function(){return c.ukc};C.K0c=function(){return this.y3};C.K5a=function(b){this.y3!=b&&(null!=this.y3&&(this.y3.Ha(this,this.pXb),this.y3.vb()),this.y3=b,null!=this.y3&&(this.y3.Ba(),this.y3.Ia(this,this.pXb)),this.pa(a.g.j))};C.j_d=function(){return this.fTa};C.wsc=function(b){this.fTa!=b&&(this.fTa=b,this.pa(a.g.j))};C.L0c=function(){return this.Zcb};C.ysc=function(b){this.Zcb!=b&&(this.Zcb=b,this.pa(a.g.j))};C.J0c=function(){return this.Ycb};
C.xsc=function(b){this.Ycb!=b&&(this.Ycb=b,this.pa(a.g.j))};C.Ic=function(a,c,d){C.k.Ic.call(this,a,c,d);a=this.Ta().$a();b.me[a].ei(this.fTa,this.Zcb,this.Ycb)};C.PAb=function(){var a=this.y3,c=this.Ta().$a(),a=a?a.Lg():"";b.me[c].zd(a)};C.pXb=function(b,c){switch(c.fb){case a.g.Cb:case a.g.Vb:this.K5a(null);break;case a.g.j:this.pa(a.g.j)}};d.Sa(c.bxb,"PRIM_WEB","RichTextImage",{Aa:{Image:{a:C.K0c,f:function(a){this.K5a(a)}},Width:{a:C.L0c,f:function(a){this.ysc(d.O(a))}},Height:{a:C.J0c,f:function(a){this.xsc(d.O(a))}},
Alignment:{a:function(){return d.wa(this.fTa,a.SO.G)},f:function(b){this.wsc(d.va(b,a.SO.G))}}}});c.P1a=function(){x.K.call(this);this.CA=null};var x=c.u(c.P1a,c.Jxa);x.Ae=function(){return c.wkc};x.My=function(){null==this.CA&&(this.CA=new c.cxb(this));return this.CA};d.Sa(c.P1a,"PRIM_WEB","RichTextParagraph",{Aa:{Items:{a:x.My}}});c.$wb=function(){M.K.call(this);this.Nb=b.Mf(0,0,100,100)};var M=c.u(c.$wb,c.P1a);M.Ae=function(){return c.skc};M.P4=function(b){if(!this.Od()){var c=d.gc();c.kc("ITEM",
b);this.Ga(a.Q.hO,c);c.Lc()}};M.Q4=function(b){if(!this.Od()){var c=d.gc();c.kc("ITEM",b);this.Ga(a.Q.jO,c);c.Lc()}};M.Saa=function(b){if(!this.Od()){var c=d.gc();c.kc("ITEM",b);this.Ga(a.Q.iO,c);c.Lc()}};M.jE=function(b,c){if(!c&&!this.Od()){var e=d.gc();e.kc("ITEM",b);e.pg("CONTINUE",!0);this.Ga(a.Q.gO,e);c=!e.eh("CONTINUE");e.Lc()}return c};d.Sa(c.$wb,"PRIM_WEB","RichText",{});c.cxb=function(a){I.K.call(this);this.nb=[];this.TD=a};var I=c.u(c.cxb,c.Bd);I.R=function(){I.k.R.call(this)};I.Kc=function(){return this.nb.length};
I.te=function(a){return this.nb[a-1]};I.si=function(b,d,e,f){var g=new c.dxb;g.Ba();g.tb(b);d!=p&&g.Jb(d);e!=p&&g.yp(e);f!=p&&g.ir(f);g.Oa(this.TD);this.nb[this.nb.length]=g;this.TD.pa(a.g.j);this.TD.Xb()&&this.TD.hh();return g};I.XDc=function(){var b=new c.axb;b.Ba();b.Oa(this.TD);this.nb[this.nb.length]=b;this.TD.pa(a.g.j);this.TD.Xb()&&this.TD.hh();return b};I.gEc=function(b,d,e,f,g,n,k){var l=new c.bxb;l.Ba();l.K5a(b);d!=p&&l.wsc(d);e!=p&&l.ysc(e);f!=p&&l.xsc(f);g!=p&&l.Jb(g);n!=p&&l.yp(n);k!=
p&&l.ir(k);l.Oa(this.TD);this.nb[this.nb.length]=l;this.TD.pa(a.g.j);this.TD.Xb()&&this.TD.hh();return l};I.lEc=function(b,d,e,f){var g=new c.P1a;g.Ba();b!=p&&g.tb(b);d!=p&&g.Jb(d);e!=p&&g.yp(e);f!=p&&g.ir(f);g.Oa(this.TD);this.nb[this.nb.length]=g;this.TD.pa(a.g.j);this.TD.Xb()&&this.TD.hh();return g};I.Ru=function(b){this.nb.splice(this.nb.indexOf(b),1);b.Oa(null);b.vb();this.TD.pa(a.g.j)};I.Kl=function(){for(;0<this.nb.length;)this.Ru(this.nb[0]);this.TD.pa(a.g.j)};d.Sa(c.cxb,"PRIM_WEB","RichTextItems",
{Aa:{Item:{a:function(a){return this.te(d.O(a))},Fz:"na"},ItemCount:{a:I.Kc}},jc:{Add:I.si,AddBreak:I.XDc,AddImage:function(b,c,e,f,g,n,k){return this.gEc(b,d.va(c,a.SO.G),e,f,g,n,k)},AddParagraph:I.lEc,Remove:I.Ru,RemoveAll:I.Kl},df:{bf:"Item"},us:{Rr:function(a){return this.te(d.O(a))},Ty:I.Kc}});c.Iic=function(){D.K.call(this);this.Nb=b.Mf(0,0,100,100)};var D=c.u(c.Iic,c.Zl);D.Ae=function(){return c.Gjc};D.Ic=function(a,b,c){D.k.Ic.call(this,a,b,c)};D.gg=function(a){this.KG();a&&this.sMa();b.qb().MF(this)};
D.IG=function(){this.ha.a4()};d.Sa(c.Iic,"PRIM_WEB","Camera",{});c.hjc=function(){L.K.call(this);this.Nb=b.Mf(0,0,100,100);this.BJ=null;this.sVa("")};var L=c.u(c.hjc,c.Zl);L.R=function(){this.BJ=null;L.k.R.call(this)};L.Ae=function(){return c.xkc};L.GHa=function(){this.Ta()&&this.sVa(this.Ta().kVc());return this.BJ};L.sVa=function(a){this.BJ=new c.RI({data:a,mimetype:"image/png",filename:"signature.png"})};L.Vl=function(){if(this.Ta()){var a=this.Ta().$a();b.me[a].Vl();this.De()}};L.Ic=function(a,
b,c){L.k.Ic.call(this,a,b,c)};L.gg=function(a){this.KG();a&&this.sMa();b.qb().MF(this)};L.IG=function(){this.ha.a4()};L.De=function(){this.Ga(a.Q.Ah)};d.Sa(c.hjc,"PRIM_WEB","Signature",{Aa:{Blob:{a:L.GHa}},jc:{Clear:L.Vl}});c.Uic=function(){ca.K.call(this);this.fPb=this.eNb=this.sKb=this.rKb=this.mKb=this.Ybb=this.ONb=0;this.Tfa=a.QI.UZb};var ca=c.u(c.Uic,c.Bd);ca.e_c=function(){return this.ONb};ca.rZc=function(){return this.Ybb};ca.BUc=function(){return this.mKb};ca.QUc=function(){return this.rKb};
ca.RUc=function(){return this.sKb};ca.FYc=function(){return this.eNb};ca.u1c=function(){return this.fPb};ca.dWd=function(){return this.Tfa};ca.oid=function(){var b=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(d){b.ONb=d.coords.longitude;b.Ybb=d.coords.latitude;b.mKb=d.coords.accuracy;b.rKb=d.coords.altitude?d.coords.altitude:0;b.sKb=d.coords.altitudeAccuracy?d.coords.altitudeAccuracy:0;b.eNb=d.coords.heading?d.coords.heading:0;b.fPb=d.coords.speed?d.coords.speed:0;
b.Tfa=a.QI.TWa;b.Ga(a.Q.Roc,new c.gxa)},function(d){b.ONb=0;b.Ybb=0;b.mKb=0;b.rKb=0;b.sKb=0;b.eNb=0;b.fPb=0;b.Tfa=a.QI.lkb;switch(d.code){case d.PERMISSION_DENIED:b.Tfa=a.QI.YZb;break;case d.POSITION_UNAVAILABLE:b.Tfa=a.QI.ZZb;break;case d.TIMEOUT:b.Tfa=a.QI.a_b;break;case d.UNKNOWN_ERROR:b.Tfa=a.QI.lkb}b.Ga(a.Q.Roc,new c.gxa)});return this.Ybb};d.Sa(c.Uic,"PRIM_WEB","Geolocation",{Aa:{Longitude:{a:ca.e_c},Latitude:{a:ca.rZc},Accuracy:{a:ca.BUc},Altitude:{a:ca.QUc},AltitudeAccuracy:{a:ca.RUc},Heading:{a:ca.FYc},
Speed:{a:ca.u1c},ErrorCode:{a:function(){return d.wa(this.Tfa,a.QI.G)}}},jc:{Refresh:ca.oid}});c.Qic=function(){F.K.call(this)};var F=c.u(c.Qic,c.Bd);F.Fbd=function(b,c){if("undefined"!==typeof console)switch(c){case a.m_.RSb:console.error(b);break;case a.m_.USb:console.warn(b);break;case a.m_.SSb:console.info(b);break;default:console.log(b)}};d.Sa(c.Qic,"PRIM_WEB","Console",{Aa:{},jc:{Log:function(b,c){return this.Fbd(d.ka(b),c?d.va(c,a.m_.G):a.m_.TSb)}}});c.Tic=function(){z.K.call(this);this.wc=
this.pb=null;this.yM=this.tr="";this.Rqa=!1};var z=c.u(c.Tic,c.Mw);z.R=function(){z.k.R.call(this);this.yq(null)};z.Ae=function(){return c.Pjc};z.Lg=function(){return this.tr};z.Qmb=function(){return this.yM};z.Gh=function(b){this.pb!=b&&(this.yq(b),this.m(a.g.j))};z.rb=function(){var a=null;return a=this.pb};z.nc=function(){return this.wc};z.Jja=function(){return this.Rqa};z.v5a=function(b){this.Rqa!=b&&(this.Rqa=b,this.pa(a.g.j))};z.De=function(){this.Ga(a.Q.Ah)};z.Gta=function(b,c){var e=d.gc();
e.kc("FILE",b);e.kc("FILES",c);this.Ga(a.Q.Rkb,e);e.Lc()};z.OQ=function(){this.xY=b.Bxa(this.wc.mk());this.pb.C_(this.nc())};z.yq=function(a){var c=null;a&&(c=a.Ez(),this.pb==a?c.Kn(this.wc):a.yC(c));this.pb&&(this.pb.Ha(this),this.wc.Ha(this),b.ga(this.wc),this.wc=null);if(this.pb=a)this.pb.Ia(this,this.Np),this.wc=c,this.wc.Ia(this,this.Hy);this.$h()};z.zEd=function(){};z.Np=function(b,c){c.fb==a.g.j?c.uu==a.Je.$z?this.pb.yC(this.nc()):this.yq(this.pb):c.fb==a.g.Cb&&this.Gh(null)};z.Hy=function(b,
c){c.fb==a.g.j&&c.uu==a.Je.$z&&this.OQ()};d.Sa(c.Tic,"PRIM_WEB","FilePicker",{Aa:{MultiSelect:{a:z.Jja,f:function(a){this.v5a(d.Ca(a))}}}});c.CLa=function(a){W.K.call(this);this.Tbb=a;this.qU=this.BJ=null};var W=c.u(c.CLa,c.Bd);W.R=function(){null!=this.BJ&&(this.BJ=null);null!=this.qU&&(b.KUb(this.qU),this.qU=null);W.k.R.call(this)};W.Lh=function(){return this.Tbb.name};W.GHa=function(){null==this.BJ&&(this.BJ=new c.hec(this.Tbb));return this.BJ};W.lob=function(){return this.Tbb.size};W.u_c=function(){return this.Tbb.type};
d.Sa(c.CLa,"PRIM_WEB","File",{Aa:{Name:{a:W.Lh},Blob:{a:W.GHa},FileSize:{a:W.lob},MimeType:{a:W.u_c}}});c.Pwb=function(){y.K.call(this);this.nb=[]};var y=c.u(c.Pwb,c.Bd);y.R=function(){for(var a=0;a<this.nb.length;a++)this.nb[a].vb();this.nb=[];y.k.R.call(this)};y.Kc=function(){return this.nb.length};y.te=function(a){return this.nb[a-1]};y.ss=function(a){this.nb.push(a);a.Ba()};d.Sa(c.Pwb,"PRIM_WEB","Files",{Aa:{Item:{a:function(a){return this.te(d.O(a))},Fz:"na"},ItemCount:{a:y.Kc}},df:{bf:"Item"},
us:{Rr:function(a){return this.te(d.O(a))},Ty:y.Kc}});c.Pic=function(){ea.K.call(this)};var ea=c.u(c.Pic,c.Bd);ea.CAb=function(a){var d=this;if(window.FileReader&&a instanceof c.RI){if(a=a.yua()){var e=b.NX(),f=new FileReader;f.onload=function(a){d.L4(a.target.result);b.zB(e)};f.readAsText(a)}}else d.L4("")};ea.L4=function(b){var c=d.gc();c.VD("DATA",b);this.Ga(a.Q.naa,c)};d.Sa(c.Pic,"PRIM_WEB","ClobReader",{jc:{Read:ea.CAb}});c.Dic=function(){aa.K.call(this)};var aa=c.u(c.Dic,c.Bd);aa.CAb=function(a){var d=
this;if(window.FileReader&&a instanceof c.RI){if(a=a.yua()){var e=b.NX(),f=new FileReader;f.onload=function(a){d.L4(b.V_b(a.target.result));b.zB(e)};f.readAsDataURL(a)}}else d.L4("","")};aa.L4=function(b){var c=d.gc();c.VD("DATA",b);this.Ga(a.Q.naa,c)};d.Sa(c.Dic,"PRIM_WEB","BlobReader",{jc:{Read:aa.CAb}});c.skc=function(a){K.K.call(this,a)};var K=c.u(c.skc,c.mo);K.tb=function(a){this.v.textContent=a};K.Cz=function(){K.k.Cz.call(this);this.v.style.whiteSpace="normal";this.v.style.overflowX="auto";
this.v.style.overflowY="auto"};K.Gd=function(a,b){this.v=document.createElement("div");this.v.setAttribute("id",a+this.hc);this.v.setAttribute("LANSAHandle",this.hc);return K.k.Gd.call(this,a,b)};c.wkc=function(a){S.K.call(this,a)};var S=c.u(c.wkc,c.mo);S.tb=function(a){this.v.textContent=a};S.lJa=function(){return!1};S.Joa=function(){};S.Cz=function(){};S.Gd=function(a,b){this.v=document.createElement("p");this.v.setAttribute("id",a+this.hc);this.v.setAttribute("LANSAHandle",this.hc);return S.k.Gd.call(this,
a,b)};c.tkc=function(a){G.K.call(this,a)};var G=c.u(c.tkc,c.mo);G.lJa=function(){return!1};G.Joa=function(){};G.Cz=function(){};G.Gd=function(a,b){this.v=document.createElement("br");this.v.setAttribute("id",a+this.hc);this.v.setAttribute("LANSAHandle",this.hc);return G.k.Gd.call(this,a,b)};c.ukc=function(a){H.K.call(this,a)};var H=c.u(c.ukc,c.mo);H.zd=function(a){this.v.src=a};H.lJa=function(){return!1};H.ei=function(b,c,d){this.v.style.width=0==c?"auto":c+"px";this.v.style.height=0==d?"auto":d+
"px";switch(b){case a.SO.yBb:this.v.style.marginLeft="initial";this.v.style.marginRight="initial";this.v.style.display="inline";this.v.style.cssFloat="none";break;case a.SO.dqc:this.v.style.marginLeft="initial";this.v.style.marginRight="initial";this.v.style.display="inline";this.v.style.cssFloat="left";break;case a.SO.eqc:this.v.style.marginLeft="initial";this.v.style.marginRight="initial";this.v.style.display="inline";this.v.style.cssFloat="right";break;case a.SO.cqc:this.v.style.marginLeft="auto",
this.v.style.marginRight="auto",this.v.style.display="block",this.v.style.cssFloat="none"}};H.Joa=function(){};H.Cz=function(){this.v.style.borderStyle="solid"};H.Gd=function(a,b){this.v=document.createElement("img");this.v.setAttribute("id",a+this.hc);this.v.setAttribute("LANSAHandle",this.hc);return H.k.Gd.call(this,a,b)};c.vkc=function(a){V.K.call(this,a)};var V=c.u(c.vkc,c.mo);V.tb=function(a){this.v.textContent=a};V.lJa=function(){return!1};V.Joa=function(){};V.Cz=function(){};V.Gd=function(a,
b){this.v=document.createElement("span");this.v.setAttribute("id",a+this.hc);this.v.setAttribute("LANSAHandle",this.hc);return V.k.Gd.call(this,a,b)};c.Gjc=function(a){qa.K.call(this,a)};var qa=c.u(c.Gjc,c.mo);qa.Gd=function(a,b){this.v=document.createElement("div");this.v.setAttribute("id",a+this.hc);this.v.setAttribute("LANSAHandle",this.hc);return qa.k.Gd.call(this,a,b)};c.xkc=function(a){ha.K.call(this,a);this.iv=this.Ep=null;this.CAc=this.uQb=!1;this.nNb=null};var ha=c.u(c.xkc,c.mo);ha.E6b=function(){return!0};
ha.Gd=function(a,b){this.v=document.createElement("div");this.v.setAttribute("id",a+this.hc);this.v.setAttribute("LANSAHandle",this.hc);this.v.style.msTouchAction="none";this.iv=document.createElement("canvas");this.iv.style.touchAction="none";this.v.appendChild(this.iv);this.Ep=this.iv.getContext("2d");this.HUb();return ha.k.Gd.call(this,a,b)};ha.tq=function(a,b,c,d){ha.k.tq.call(this,a,b,c,d);if(c>this.iv.width||d>this.iv.height)a=this.Ep.getImageData(0,0,this.iv.width-1,this.iv.height-1),this.iv.width=
this.Id,this.iv.height=this.Pd,this.Ep.putImageData(a,0,0)};ha.ES=function(a){this.BEb(a);return!0};ha.iyb=function(a){this.Btc(a);return!0};ha.f2a=function(a){this.AEb(a);return!0};ha.BG=function(a){a.buttons&&this.BEb(a);return ha.k.BG.call(this,a)};ha.CG=function(a){this.AEb(a);return ha.k.CG.call(this,a)};ha.CBa=function(a){this.BEb(a);return!0};ha.cy=function(a){this.Btc(a);return!0};ha.Doa=function(a){this.AEb(a);return!0};ha.x7b=function(a){this.v.onpointerdown===p&&a.touches!==p?(a.cKb=a.touches[0].pageX-
this.L.Ut(),a.dKb=a.touches[0].pageY-this.L.Vt()):(a.cKb=a.clientX-this.L.Ut(),a.dKb=a.clientY-this.L.Vt());this.L.De()};ha.HUb=function(){this.zgb(!0);this.nNb=new Image;this.nNb.onload=function(){throw 0;};this.nNb.src=null};ha.zgb=function(a){(this.CAc||a)&&this.Ep.clearRect(0,0,this.Ep.canvas.width,this.Ep.canvas.height);this.CAc=!1};ha.kVc=function(){var a=this.iv.toDataURL("image/png");return b.V_b(a)};ha.Vl=function(){this.HUb()};ha.BEb=function(a){a.preventDefault();this.zgb(!1);this.Ep.beginPath();
this.x7b(a);this.Ep.moveTo(a.cKb,a.dKb);this.uQb=!0};ha.AEb=function(a){a.preventDefault();this.uQb=!1};ha.Xfe=function(a){this.cy(a)};ha.Btc=function(a){this.uQb&&(a.preventDefault(),this.zgb(!1),this.Ep.strokeStyle="rgb(0,0,0)",this.Ep.lineWidth=1,this.x7b(a),this.Ep.lineTo(a.cKb,a.dKb),this.Ep.stroke())};c.mjc=function(a){ka.K.call(this,a);this.esa=this.gb=null};var ka=c.u(c.mjc,c.mo);ka.vl=function(a){this.esa.src=a};ka.Gd=function(a,b){this.v=document.createElement("div");this.v.setAttribute("id",
a+this.hc);this.v.setAttribute("LANSAHandle",this.hc);this.esa=document.createElement("iframe");this.WZ(this.esa);this.esa.style.width="100%";this.esa.style.height="100%";this.v.appendChild(this.esa);return ka.k.Gd.call(this,a,b)};ka.Cy=function(){var a=this;ka.k.Cy.call(this);a.esa.addEventListener("load",function(){a.L&&a.L.NTc()},!1)};ka.WZ=function(a){ka.k.WZ.call(this,a);this.v.style.overflowX="auto";this.v.style.overflowY="auto"};c.Pjc=function(a){sa.K.call(this,a);this.ur=null};var sa=c.u(c.Pjc,
c.mxb);sa.Gd=function(a,b){var c=sa.k.Gd.call(this,a,b);this.ur=document.createElement("input");this.ur.type="File";this.ur.title="";var d=this.ur.style;this.eb.style.zIndex=1;d.opacity=0;d.position="absolute";d.zIndex=99998;d.background="rgb( 255, 0, 0 )";c.appendChild(this.ur);return c};sa.Ic=function(){sa.k.Ic.call(this);this.PPa()};sa.tq=function(a,b,c,d){sa.k.tq.call(this,a,b,c,d);this.ur.style.left="0px";this.ur.style.top="0px";this.ur.style.width=c+"px";this.ur.style.height=d+"px"};sa.Cy=function(){var a=
this;this.b_();a.ur.addEventListener("change",function(b){a.L&&(a.XFa(b),a.ur.value="")},!1)};sa.PPa=function(){this.ur.multiple=this.L.Jja()};sa.XFa=function(a){a=a.target.files||a.dataTransfer.files;for(var b=null,d=new c.Pwb,e=0,f;f=a[e];e++)f=new c.CLa(f),null==b&&(b=f),d.ss(f);b&&this.L.Gta(b,d)}},{rp:["PRIM_LABL"]});
