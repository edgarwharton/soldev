window.LANSA.addSrc("wdgt",function(d,c,a,b,p){var t={};c.Ikc=function(a){l.K.call(this);this.BRa=a;this.G$a=function(){};this.eU=this.NNb=!1;this.mOb=[];this.lOb=[];this.hOb=[];this.gOb=[];this.jOb=[]};var l=c.u(c.Ikc,c.jf);l.NW=function(){return this.NNb};l.Lh=function(){return this.BRa.nm};l.U0c=function(){return this.BRa.js||[]};l.I1c=function(){return this.BRa.st||[]};l.hXc=function(){return this.BRa.fn};l.cYc=function(){return this.BRa.fe};l.a5=function(){return this.G$a};l.Bid=function(){function a(){if(l<
p.length){var c=p[l],e=document.createElement("script");e.type="text/javascript";e.onload=function(){e.onload=null;e.onerror=null;l++;a()};e.onerror=function(){e.onload=null;e.onerror=null;throw"Error defining Widget "+d+", failed to load script: "+c;};document.body.appendChild(e);e.src=c}else b()}function b(){function a(){if(!c.NNb){for(c.NNb=!0;0<c.gOb.length;){var b=c.gOb.shift();c.Xqb(b)}for(;0<c.lOb.length;)b=c.lOb.shift(),c.Zqb(b.hKb,b.SId,b.value);for(;0<c.jOb.length;)b=c.jOb.shift(),c.y7b(b.hKb,
b.parent);for(;0<c.mOb.length;)b=c.mOb.shift(),c.$qb(b);for(;0<c.hOb.length;)b=c.hOb.shift(),c.Yqb(b)}}var d=c.hXc(),f=c.G$a.prototype;e&&e(f);var g={Loading:{},Completed:{},Finalize:function(){a()}};d(f,g)!==g.Loading&&a()}var c=this,d=c.Lh(),e=c.cYc();t[d]=c;for(var f=c.I1c(),g=0;g<f.length;g++){var n=f[g],k=document.createElement("link");k.type="text/css";k.rel="stylesheet";k.href=n;document.body.appendChild(k)}var l=0,p=c.U0c();a()};l.Zqb=function(a,b,c){if(this.NW()){var e=a["set"+b];if(!e)throw d.qjd("set"+
b);e&&e.call(a,c)}else this.lOb.push({hKb:a,SId:b,value:c})};l.Yqb=function(a){this.NW()?a.jXa():this.hOb.push(a)};l.Xqb=function(a){if(this.NW()){var b=a.onCreateInstance;b&&b.call(a)}else this.gOb.push(a)};l.y7b=function(a,b){if(this.NW()){var c=a.onRealizeControl;if(!c)throw d.pjd();c.call(a,b)}else this.jOb.push({hKb:a,parent:b})};l.$qb=function(a){if(this.NW()){var b=a.onSizeChanged;b&&b.call(a)}else this.mOb.push(a)};c.F1a=function(){q.K.call(this)};var q=c.u(c.F1a,c.Zl);q.Sc|=a.Wd.gKa;q.Lz=
function(){return this.Ta()&&this.Ta().w4c()?this:null};q[a.ea.Uy]=function(b){var c=!1;this.Ta()&&(c=b.$c!==p?b.$c:a.fa.VO,c=c==a.fa.VO||c==a.fa.iA||c==a.fa.NE?this.Ta().L0b(null):this.Ta().M0b(null));c||q.k.iR.call(this,b)};q[a.ea.uKa]=function(b){var c=!1;this.Ta()&&(c=(b.$c!==p?b.$c:a.fa.VO)==a.fa.VO?this.Ta().L0b(document.activeElement):this.Ta().M0b(document.activeElement));c||q.k.bjb.call(this,b)};c.ijc=function(){s.K.call(this)};var s=c.u(c.ijc,c.Bd);d.Ld(c.ijc,"PRIM_WDGT",{});c.kjc=function(){k.K.call(this);
var a=this.WXa(),a=this.QZ=t[a],b=this.DM=new (a.a5());b.LANSA_Component=this;b.LANSA_Class=a;a.Xqb(b)};var k=c.u(c.kjc,c.Bd);k.Wqb=function(a,b){if(this.QZ.NW()){var c=this.DM[a];if(!c)throw d.kpc(a);return c.apply(this.DM,b)}throw d.U3a();};k.DIa=function(a){if(this.QZ.NW()){var b=this.DM["get"+a];if(!b)throw d.jpc("get"+a);return b.call(this.DM)}throw d.U3a();};k.ONa=function(a,b){this.QZ.Zqb(this.DM,a,b)};k.H0=function(){var a=this;setTimeout(function(){a.QZ.Yqb(a)},5)};k.jXa=function(){this.Ga(a.Q.fca)};
d.Sa(c.kjc,"PRIM_WDGT","Object",{});var e=k;e.get=e.DIa;e.set=e.ONa;e.invoke=e.Wqb;c.jjc=function(){g.K.call(this);var b=this.WXa(),b=this.QZ=t[b],c=this.DM=new (b.a5());c.LANSA_Component=this;c.LANSA_Class=b;b.Xqb(c);this.Sc&=~a.Wd.iS;this.Sc&=~a.Wd.T0};var g=c.u(c.jjc,c.F1a);g.Ae=function(){return c.Hkc};g.Ic=function(a,c,d){g.k.Ic.call(this,a,c,d);a=this.Ta().$a();b.me[a].vbd(this.DM)};g.Wqb=function(a,b){if(this.QZ.NW()){var c=this.DM[a];if(!c)throw d.kpc(a);return c.apply(this.DM,b)}throw d.U3a();
};g.DIa=function(a){if(this.QZ.NW()){var b=this.DM["get"+a];if(!b)throw d.jpc("get"+a);return b.call(this.DM)}throw d.U3a();};g.ONa=function(a,b){this.QZ.Zqb(this.DM,a,b)};g.n9d=function(){this.jXa()};g[a.ea.Qka]=function(){this.QZ.Yqb(this)};g[a.ea.NI]=function(){this.Xb()&&this.QZ.$qb(this.DM)};g.tma=function(){g.k.tma.call(this);this.Xb()&&this.QZ.$qb(this.DM)};d.Sa(c.jjc,"PRIM_WDGT","Control",{});e=g;e.get=e.DIa;e.set=e.ONa;e.invoke=e.Wqb;c.Vic=function(){f.K.call(this);this.Nb=b.Mf(0,0,100,100);
this.M9=this.PRa=""};var f=c.u(c.Vic,c.F1a);f.Ae=function(){return c.Rjc};f.UYc=function(){return this.PRa};f.Yqd=function(b){this.PRa!=b&&(this.PRa=b,this.pa(a.g.j),this.Hd())};f.FC=function(){return this.M9};f.Uma=function(a){this.M9=a};f.ZC=function(a){var d=this.Jo(),e=this.pq();if(d||e){var f=new c.qa;new c.qa(0,0,1E4,1E4);var g=[];g[0]=d;g[1]=e;g[2]=a;g[3]=0;g[4]=0;var n=this.$a();g[3]=0;g[4]=0;null!=n&&b.me[n].myc(g);f.Va(g[3]);f.Ja(g[4]);d&&a.Va(a.aa()+this.ha.Ki()+f.ja()+this.ha.Fj());e&&
a.Ja(a.$()+this.ha.Uj()+f.la()+this.ha.hl())}};d.Sa(c.Vic,"PRIM_WEB","HtmlContainer",{Aa:{Html:{a:f.UYc,f:function(a){this.Yqd(d.ka(a))}},Description:{a:f.FC,f:function(a){this.Uma(d.ka(a))}}},df:{bf:"Html"}});c.Q1a=function(a){v.K.call(this,a)};var v=c.u(c.Q1a,c.mo);v.pJa=function(){return!1};v.w4c=function(){return 0<this.ehb().length};v.ES=function(a){v.k.ES.call(this,a);return!1};v.L0b=function(a){var b=this.ehb();for(a=a?b.indexOf(a)+1:0;0<=a&&a<b.length;){var c=b[a];if(c&&(c.focus(),c==document.activeElement))return!0;
a++}return!1};v.M0b=function(a){var b=this.ehb();for(a=a?b.indexOf(a)-1:b.length-1;0<=a;){var c=b[a];if(c&&(c.focus(),c==document.activeElement))return!0;a--}return!1};v.ehb=function(){var a=[],b=[];this.knc(this.v,b);for(var c=1;c<b.length;c++)a=a.concat(b[c]||[]);return a=a.concat(b[0]||[])};v.knc=function(a,b){var c=a.tabIndex;0<=c&&(b[c]===p&&(b[c]=[]),b[c].push(a));for(var c=a.childNodes,d=0;d<c.length;d++)a=c[d],this.knc(a,b)};v.Maa=v[a.Ra.zT]=function(b){b.Tf=a.Ra.Rha|a.Ra.IVa};c.Hkc=function(a){B.K.call(this,
a);this.gb=null};var B=c.u(c.Hkc,c.Q1a);B.Gd=function(a,b){this.v=document.createElement("div");this.v.setAttribute("id",a+this.hc);this.v.setAttribute("LANSAHandle",this.hc);return B.k.Gd.call(this,a,b)};B.vbd=function(a){null==this.gb&&(this.gb=document.createElement("div"),this.gb.style.left="0px",this.gb.style.top="0px",this.gb.style.width="100%",this.gb.style.height="100%",a.LANSA_Class.y7b(a,this.gb),this.v.appendChild(this.gb))};c.Rjc=function(a){n.K.call(this,a);this.gb=null};var n=c.u(c.Rjc,
c.Q1a);n.Cz=function(){n.k.Cz.call(this);this.v.style.whiteSpace="normal"};n.Gd=function(a,b){this.v=document.createElement("div");this.v.setAttribute("id",a+this.hc);this.v.setAttribute("LANSAHandle",this.hc);this.gb=document.createElement("div");this.gb.style.left="0px";this.gb.style.top="0px";this.gb.style.width="100%";this.gb.style.height="100%";this.gb.innerHTML=this.L.PRa;this.v.appendChild(this.gb);return n.k.Gd.call(this,a,b)};n.EEd=function(){var a=this.L.Jo(),b=this.L.pq();this.gb.style.width=
a?"":"100%";this.gb.style.height=b?"":"100%";this.gb.innerHTML=this.L.PRa};n.Ic=function(){n.k.Ic.call(this);this.EEd()};n.myc=function(a){var b=a[0],c=a[2],d=this.gb.style.width;a[1]&&!b&&(this.gb.style.width=c.ja()+"px");a[3]=this.gb.clientWidth;a[4]=this.gb.clientHeight;this.gb.style.width=d}});
