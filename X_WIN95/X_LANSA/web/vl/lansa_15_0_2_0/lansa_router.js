window.LANSA.addSrc("router",function(d,c,a,b){d.Pb("PRIM_MD");a.Fma={pBb:0,Pkd:1};a.Fma.G={PUBLIC:a.Fma.pBb,PROTECTED:a.Fma.Pkd};c.gjc=function(){p.K.call(this);this.aUa=[]};var p=c.u(c.gjc,c.u1a);p.OTc=function(c,l,k){var e=d.gc();e.VD("PATH",c);e.kc("ROUTE",l);e.pg("ALLOW",l.Nea==a.Fma.pBb);e.VD("REDIRECT","");this.Ga(a.Q.fdd,e);c=e.eh("ALLOW");l=b.qB(e.PC("REDIRECT"));0<l.length&&k&&(k.DOb=!0,k.T$=l,c=!1);e.Lc();return c};p.Lya=function(a,b,c){for(var d,g=this.aUa,f=0;f<g.length&&null!=(d=g[f]);f++){var l=
{};if(d.Y7c(b,l)){if(this.OTc(a,d,c))return this.Vl(),d.RSc(this,l,a,b,c),!0;if(c&&c.DOb)return!0}}return!1};p.N6c=function(a){a.fc=this;this.aUa.push(a)};p.cjd=function(a){this.aUa.splice(this.aUa.indexOf(a),1);a.fc=null};p.iae=function(){for(var a,b=this.aUa;a=b[0];)a.Oa(null)};d.Sa(c.gjc,"PRIM_WEB","Router",{vC:"PRIM_CTRL",Aa:{Positioning:{a:p.a0},Position:{a:p.Sz},Border:{a:p.RK},Background:{a:p.on},CSSStyle:{a:p.kE},Overflow:{a:p.BN},Size:{a:p.SR},Padding:{a:p.sI},Margin:{a:p.eG},Text:{a:p.Jj},
Font:{a:p.eo},Elevation:{a:p.zja},Transform:{a:p.VR},FlexChild:{a:p.Aja},Aria:{a:p.dja}}});c.fjc=function(){t.K.call(this)};var t=c.u(c.fjc,c.Bd);t.fc=null;t.PSa="";t.ZTa="";t.Nea=a.Fma.pBb;t.R3=null;t.R=function(){this.Oa(null);this.R3&&(this.R3.Ba(),this.R3=null);t.k.R.call(this)};t.W=function(){return this.fc};t.Oa=function(b){this.fc!=b&&(this.fc&&this.fc.cjd(this),b&&b.N6c(this),this.m(a.g.j))};t.V_c=function(){return this.PSa};t.psd=function(b){this.PSa!=b&&(this.PSa=b,this.m(a.g.j))};t.B3b=
function(){return this.PSa.split("/").filter(function(a){return 0<a.length})};t.L2c=function(){return this.ZTa};t.Cud=function(b){this.ZTa!=b&&(this.R3&&(this.R3.Ba(),this.R3=null),this.ZTa=b,this.m(a.g.j))};t.WQd=function(){return this.Nea};t.god=function(b){this.Nea!=b&&(this.Nea=b,this.m(a.g.j))};t.O2c=function(a){if(this.R3)a(this.R3);else{var b=this;this.R3=d.hLc(this.ZTa,function(c){c.so=b.ZTa;c.TCa=b;c.Ba();b.R3=c;a(c)})}};t.Y7c=function(a,c){var d=!0;if(0<b.qB(this.PSa).length){var e=this.B3b();
if(0==e.length)d=0==a.length;else for(var g=0;g<e.length;g++){if(g>=a.length){d=!1;break}var f=a[g],l=e[g];if(/^{\w+}$/.test(l))c[l.substr(1,l.length-2)]=decodeURIComponent(f);else if(!1==b.fA(l,f)){d=!1;break}}}return d};t.RSc=function(a,c,d,e,g){var f=e.slice(this.B3b().length);a.Ba();this.O2c(function(e){if(e){for(var l in c)b.Mcd(l,decodeURIComponent(c[l]));e.Ib(a);a.iea(e);e.Lya(d,f,g)}a.vb()})};d.Sa(c.fjc,"PRIM_WEB","Route",{Aa:{Parent:{a:t.W,f:t.Oa},Path:{a:t.V_c,f:function(a){this.psd(d.ka(a))}},
View:{a:t.L2c,f:t.Cud},Access:{a:function(){return d.wa(this.Nea,a.Fma.G)},f:function(b){this.god(d.va(b,a.Fma.G))}}}});c.ajc=function(){};var l=c.u(c.ajc,c.Bd);l.QAb=function(){return!1};l.Dyb=function(a){var c=b.ba().Bn;return c&&c.sma(b.U4()+a,!0,!0)?!0:!1};d.Sa(c.ajc,"PRIM_WEB","Routing",{jc:{Replace:function(a){return this.QAb(d.ka(a))},Navigate:function(a){return this.Dyb(d.ka(a))}}})},{rp:["PRIM_MD","PRIM_WEB.URLParameter"]});
