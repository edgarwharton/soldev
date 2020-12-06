window.LANSA.addSrc("json",function(d,c,a,b,p){function t(a,b,e){var f=null;if(null===e)f=d.Dw(new c.wLa(a,b));else switch(typeof e){case "object":f=Array.isArray(e)?d.Dw(new c.Exa(a,b)):d.Dw(new c.Fxa(a,b));f.JTb(e);break;case "number":f=d.Dw(new c.xLa(a,b,e));break;case "string":f=d.Dw(new c.yLa(a,b,e));break;case "boolean":f=d.Dw(new c.vLa(a,b,e))}return f}d.Ob("PRIM_PCOL");a.HI={Ckb:0,G_b:1,D_b:2,I_b:3,F_b:4,E_b:5};a.HI.v={NULL:a.HI.Ckb,OBJECT:a.HI.G_b,ARRAY:a.HI.D_b,STRING:a.HI.I_b,NUMBER:a.HI.F_b,
BOOLEAN:a.HI.E_b};c.Sic=function(){l.J.call(this);this.wh="";this.eTa=null;this.MQb=!1};var l=c.q(c.Sic,c.Ad);l.Q=function(){this.I5a(null);l.j.Q.call(this)};l.L0c=function(){return this.eTa};l.I5a=function(a){this.eTa=a};l.B2c=function(){return this.MQb};l.$5a=function(a){this.MQb=a};l.ye=function(){return this.MQb?JSON.stringify(this.eTa.DR()):this.wh};l.oe=function(a){this.wh=a;var b=null,c=null;try{b=JSON.parse(a)}catch(d){}b?(c=t(this,null,b),this.$5a(!0)):this.$5a(!1);this.I5a(c)};l.VKc=function(){this.I5a(d.Dw(new c.Exa(this,
null)));this.$5a(!0);return this.eTa};l.WKc=function(){this.I5a(d.Dw(new c.Fxa(this,null)));this.$5a(!0);return this.eTa};d.Ra(c.Sic,"PRIM_WEB","Json",{za:{Text:{a:l.ye,f:function(a){this.oe(d.ja(a))}},IsValid:{a:l.B2c},RootItem:{a:l.L0c}},hc:{CreateRootArray:l.VKc,CreateRootObject:l.WKc},cf:{af:"Text"}});c.Qca=function(a,b){q.J.call(this);this.KJ=a;this.qu=b};var q=c.q(c.Qca,c.Ad);q.vja=function(){return a.HI.Ckb};q.DR=function(){return null};q.Jc=function(){return 0};q.se=function(){return null};
q.Mz=function(){return null};q.sVd=function(){return this.KJ};q.xnb=function(){return this.qu};q.l5=function(){return this.qu?this.qu.N2b(this):""};q.N2b=function(){return""};q.Ck=function(){return this.qu?this.qu.Zmb(this):-1};q.Zmb=function(){return-1};q.rha=function(){throw d.kjd(JSON.stringify(this.DR()));};q.pfb=function(){throw d.QMa(JSON.stringify(this.DR()));};q.efb=function(){throw d.OAb(JSON.stringify(this.DR()));};q.Qu=function(){return null};q.Il=function(){};d.Ra(c.Qca,"PRIM_WEB","JsonElement",
{za:{Key:{a:q.l5},Index:{a:function(){return this.Ck()+1}},Type:{a:function(){return d.va(this.vja(),a.HI.v)}},Item:{a:function(a){return this.se(d.ja(a))}},ItemAt:{a:function(a){return this.Mz(d.L(a)-1)}},ItemCount:{a:function(){return this.Jc()}},ParentItem:{a:q.xnb}},hc:{AsString:function(){return this.rha()},AsNumber:function(){return d.wi(this.pfb())},AsBoolean:function(){return this.efb()},Remove:function(a){return this.Qu(d.ja(a))},RemoveAt:function(a){return this.vs(d.L(a)-1)},RemoveAll:function(){this.Il()}},
cf:{af:"Item"},ts:{Qr:function(a){return this.Mz(d.L(a)-1)},Qy:function(){return this.Jc()}}});c.Exa=function(a,b){s.J.call(this,a,b);this.mb=[]};var s=c.q(c.Exa,c.Qca);s.vja=function(){return a.HI.D_b};s.DR=function(){for(var a=[],b=0;b<this.mb.length;b++)a.push(this.mb[b].DR());return a};s.Mz=function(a){return 0<=a&&a<this.mb.length?this.mb[a]:null};s.Jc=function(){return this.mb.length};s.Zmb=function(a){for(var b=0;b<this.mb.length;b++)if(this.mb[b]===a)return b;return-1};s.JTb=function(a){for(var b=
0;b<a.length;b++){var c=t(this.KJ,this,a[b]);c&&this.mb.push(c)}};s.Fqb=function(){var a=d.Dw(new c.Exa(this.KJ,this));this.mb.push(a);return a};s.Mqb=function(){var a=d.Dw(new c.Fxa(this.KJ,this));this.mb.push(a);return a};s.Pqb=function(a){a=d.Dw(new c.yLa(this.KJ,this,a));this.mb.push(a);return a};s.Lqb=function(a){a=d.Dw(new c.xLa(this.KJ,this,a));this.mb.push(a);return a};s.Iqb=function(a){a=d.Dw(new c.vLa(this.KJ,this,a));this.mb.push(a);return a};s.Kqb=function(){var a=d.Dw(new c.wLa(this.KJ,
this));this.mb.push(a);return a};s.vs=function(a){var b=null;0<=a&&a<this.mb.length&&(b=this.mb[a],this.mb.splice(a,1));return b};s.Il=function(){this.mb=[]};d.Ra(c.Exa,"PRIM_WEB","JsonArray",{hc:{InsertArray:s.Fqb,InsertObject:s.Mqb,InsertNumber:function(a){return this.Lqb(d.jg(a))},InsertString:function(a){return this.Pqb(d.ja(a))},InsertBoolean:function(a){return this.Iqb(d.Ba(a))},InsertNull:s.Kqb}});c.Fxa=function(a,b){k.J.call(this,a,b);this.mb={}};var k=c.q(c.Fxa,c.Qca);k.vja=function(){return a.HI.G_b};
k.DR=function(){var a={},b;for(b in this.mb)a[b]=this.mb[b].DR();return a};k.se=function(a){a=this.mb[a];return a===p?null:a};k.Mz=function(a){var b=this.Fla();return 0<=a&&a<b.length?this.mb[b[a]]:null};k.Jc=function(){return this.Fla().length};k.N2b=function(a){for(var b in this.mb)if(this.mb[b]===a)return b};k.Zmb=function(a){var b=-1,c;for(c in this.mb)if(b++,this.mb[c]===a)break;return b};k.JTb=function(a){for(var b in a){var c=t(this.KJ,this,a[b]);c&&(this.mb[b]=c)}this.DL()};k.DL=function(){delete this.PJ};
k.Fla=function(){if(this.PJ===p){this.PJ=[];for(var a in this.mb)this.PJ.push(a)}return this.PJ};k.Fqb=function(a){var b=d.Dw(new c.Exa(this.KJ,this));this.mb[a]=b;this.DL();return b};k.Mqb=function(a){var b=d.Dw(new c.Fxa(this.KJ,this));this.mb[a]=b;this.DL();return b};k.Pqb=function(a,b){var e=d.Dw(new c.yLa(this.KJ,this,b));this.mb[a]=e;this.DL();return e};k.Iqb=function(a,b){var e=d.Dw(new c.vLa(this.KJ,this,b));this.mb[a]=e;this.DL();return e};k.Kqb=function(a){var b=d.Dw(new c.wLa(this.KJ,this));
this.mb[a]=b;this.DL();return b};k.Lqb=function(a,b){var e=d.Dw(new c.xLa(this.KJ,this,b));this.mb[a]=e;this.DL();return e};k.Qu=function(a){var b=null;this.mb[a]!==p&&(b=this.mb[a],delete this.mb[a],this.DL());return b};k.vs=function(a){var b=this.Fla();return 0<=a&&a<b.length?this.Qu(b[a]):null};k.Il=function(){this.mb={};this.DL()};d.Ra(c.Fxa,"PRIM_WEB","JsonObject",{hc:{InsertArray:function(a){return this.Fqb(d.ja(a))},InsertObject:function(a){return this.Mqb(d.ja(a))},InsertNumber:function(a,
b){return this.Lqb(d.ja(a),d.jg(b))},InsertString:function(a,b){return this.Pqb(d.ja(a),d.ja(b))},InsertBoolean:function(a,b){return this.Iqb(d.ja(a),d.Ba(b))},InsertNull:function(a){return this.Kqb(d.ja(a))}}});c.xLa=function(a,b,c){e.J.call(this,a,b);this.bb=c};var e=c.q(c.xLa,c.Qca);e.vja=function(){return a.HI.F_b};e.DR=function(){return this.bb};e.pfb=function(){return this.bb};e.rha=function(){return this.bb.toString()};d.Ra(c.xLa,"PRIM_WEB","JsonNumber",{});c.yLa=function(a,b,c){g.J.call(this,
a,b);this.bb=c};var g=c.q(c.yLa,c.Qca);g.vja=function(){return a.HI.I_b};g.DR=function(){return this.bb};g.rha=function(){return this.bb};g.pfb=function(){if(isNaN(Number(this.bb)))throw d.QMa(this.bb);return new c.mk(this.bb)};g.efb=function(){if("TRUE"==this.bb.toUpperCase())return!0;if("FALSE"==this.bb.toUpperCase())return!1;throw d.OAb(this.bb);};d.Ra(c.yLa,"PRIM_WEB","JsonString",{});c.vLa=function(a,b,c){f.J.call(this,a,b);this.bb=c};var f=c.q(c.vLa,c.Qca);f.vja=function(){return a.HI.E_b};
f.DR=function(){return this.bb};f.efb=function(){return this.bb};f.rha=function(){return this.bb?"true":"false"};d.Ra(c.vLa,"PRIM_WEB","JsonBoolean",{});c.wLa=function(a,b){v.J.call(this,a,b)};var v=c.q(c.wLa,c.Qca);v.vja=function(){return a.HI.Ckb};v.DR=function(){return null};d.Ra(c.wLa,"PRIM_WEB","JsonNull",{})},{rp:["PRIM_PCOL"]});
