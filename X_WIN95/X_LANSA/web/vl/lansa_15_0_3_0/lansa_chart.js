window.LANSA.addSrc("chart",function(d,c,a,b,p){function t(a,b){var c=a.split("(");if(2<=c.length){c=c[1].split(")")[0].split(",");if("rgba"==a.substr(0,4)&&4==c.length)return c[3]=b*parseFloat(c[3]),"rgba("+c.join(",")+")";if("rgb"==a.substr(0,3)&&3==c.length)return c.push(b),"rgba("+c.join(",")+")"}return a}d.Ob("PRIM_WDGT");var m=d.ed,q=!1;a.NF={xGa:0,yGa:1};a.NF.v={PRIMARY:a.NF.xGa,SECONDARY:a.NF.yGa};a.Mn={RSb:0,nVa:1,Wfb:2,lVa:4,mVa:8,Yfb:12,Xfb:3,NGc:0,OGc:5,PGc:9,JGc:6,KGc:10,LGc:6};a.Mn.v=
{NONE:a.Mn.NGc,TOP:a.Mn.nVa,BOTTOM:a.Mn.Wfb,LEFT:a.Mn.lVa,RIGHT:a.Mn.mVa,"TOP/LEFT":a.Mn.OGc,"TOP/RIGHT":a.Mn.PGc,"BOTTOM/LEFT":a.Mn.JGc,"BOTTOM/RIGHT":a.Mn.KGc};a.oL={T4c:3,U4c:0,F6b:1,E6b:2,S4c:3};a.oL.v={NONE:a.oL.U4c,VERTICAL:a.oL.F6b,HORIZONTAL:a.oL.E6b,BOTH:a.oL.S4c};a.gA={awb:0,Gxa:0,Ela:1,pla:2,Sca:3,Cla:4};a.gA.v={NONE:a.gA.Gxa,TOP:a.gA.Ela,BOTTOM:a.gA.pla,LEFT:a.gA.Sca,RIGHT:a.gA.Cla};a.JG={Ogd:0,xX:0,Pgd:1};a.JG.v={VERTICAL:a.JG.xX,HORIZONTAL:a.JG.Pgd};a.yaa={eKc:0,fKc:0,jhb:1};a.yaa.v=
{GROUPED:a.yaa.fKc,STACKED:a.yaa.jhb};a.N6={Eyb:0,Ved:0,pmc:1,qmc:2};a.N6.v={CURVED:a.N6.Ved,STEPPED:a.N6.pmc,STRAIGHT:a.N6.qmc};a.q7={Qma:2,Pjd:0,dqc:1,aqc:2};a.q7.v={NONE:a.q7.Pjd,RECT:a.q7.dqc,CIRCLE:a.q7.aqc};c.hkc=function(){s.K.call(this)};var s=c.u(c.hkc,c.Bvb);s.Gy=null;s.Oi=function(){return this.Gy.Oi()};s.yG=function(){return this.Gy};c.gkc=function(){h.K.call(this)};var h=c.u(c.gkc,c.Dvb);h.Gy=null;h.Oi=function(){return this.Gy.Oi()};h.pq=function(){return this.Gy.pq()};h.N8b=function(){this.Oi().VS()};
h.Hqc=function(){this.Oi().VS()};h.Tzc=function(){this.Oi().VS()};h.HAb=function(){null!=this.Oi()&&this.Oi().VS()};h.IAb=function(){this.Oi().VS()};h.Woc=function(){this.pq().Uk()};h.FAb=function(){this.Oi().VS()};h.Xoc=function(){this.pq().Uk()};h.GAb=function(){this.Oi().VS()};h.cNa=function(){this.Oi().VS()};h.Bhb=function(){this.pq().Uk()};c.t2a=function(){e.K.call(this)};var e=c.u(c.t2a,c.Evb);e.zfa=null;e.R=function(){if(null!=this.zfa){for(var a in this.zfa)this.zfa[a].KWa();this.zfa=null}e.k.R.call(this)};
e.Oi=function(){return this.pq().Oi()};e.pq=function(){return this.Gg};e.yG=function(){return this.Oi().yG()};e.og=function(){return null!=this.Gg};e.s6b=function(a){var b=this.jq;return b?b.Qx(a):null};e.Zuc=function(a,b){var c=this.jq;c&&c.OOa(a,b)};e.QXa=function(a){return a&&this.zfa&&(a=a.lK,0<=a)?this.zfa[a]:null};e.wza=function(a){var b=a.lK;if(0<=b){var c=this.zfa||(this.zfa=[]);return c[b]||(c[b]=a.Iaa(this))}return null};e.HX=function(a,b,c){var d=this.QXa(a);return d?d.HX(b,c):a.HX(b,c)};
e.GX=function(a,b,c){var d=this.QXa(a);return d?d.GX(b,c):a.GX(b,c)};e.Rs=function(){};d.Sa(c.t2a,"PRIM_CHRT","Item",{});c.s2a=function(a,b){k.K.call(this);this.ua=a;this.Wc=b};var k=c.u(c.s2a,c.qd);k.Fl="";k.Oi=function(){return this.og()?this.ua.Oi():null};k.og=function(){return null!=this.ua&&null!=this.Wc};k.Ig=function(){return this.Fl};k.Qb=function(a){this.og()&&this.Fl!=a&&(this.Fl=a,this.ua.zp())};k.KWa=function(){this.Wc=this.ua=null};k.GX=function(a){var d=this.Oi();return d&&(d=d.Aza(this.Ig()))&&
(d=d.Rq())&&d instanceof c.Yf?b.dz(a,d.ya(),1):"rgba(0,0,0,0)"};k.HX=function(a,d){var e=this.Oi();return e&&(e=e.Aza(this.Ig()))&&(e=e.qs())&&e instanceof c.Yf?b.dz(a,e.ya(),1):t(d.color,0.8)};c.fkc=function(a,b,c){f.K.call(this,b,c);this.Gy=a};var f=c.u(c.fkc,c.Cvb);f.R=function(){this.Uk();this.Gy=null;f.k.R.call(this)};f.yG=function(){return this.Gy};f.Oi=function(){return this.Gy.Oi()};c.kkc=function(a){u.K.call(this);this.j4=a;this.Eq=null};var u=c.u(c.kkc,c.F1a);u.pq=function(){return this.Oi().pq()};
u.Lu=function(){return this.Oi().Lu()};u.yG=function(){return this.Oi().yG()};u.Oi=function(){return this.j4};u.od=function(a){(this.Eq=a)&&this.yG().e7(a)};u.nd=function(){return this.Eq};u.Sj=function(){this.pq().Uk();this.Eq=null};u.Ag=function(a){if(a===p)this.yG().NK();else{var b=this.pq();if(0<=a&&a<=b.Il())this.yG().NK(a);else throw d.Tu(a-1,b.Il());}};u.Fh=function(a,b){var c=this.Eq;if(!a){var d=this.pq();0<=b&&b<d.Il()&&(c=d.Ln(b))}this.od(c);return c};u.Om=function(a,b){var c=this.pq();
a&&(b=c.HHa(this.Eq));0<=b&&b<c.Il()&&(c.ys(b),b<c.Il()?this.Eq=c.Ln(b):this.Eq=null)};u.zl=function(){this.Eq&&this.yG().rya(this.Eq)};u.rn=function(a,b,c){for(var d=this.pq(),e=this.Lu(),f=0;f<d.Il();f++){var l=d.Ln(f);if(l){var k={};if(l=l.jq)for(var h,m=e.oI(),r=0;r<m.length&&null!=(h=m[r]);r++){var F=h.Ye,p=h.lK;F&&0<=p&&(F=F.zw())&&(k[F.wh()]=l.Qx(h))}if(a(k))return null!=b&&b.set(f+1),c&&this.Fh(!1,f),this.Eq=d.Ln(f),"OK"}}return"NR"};c.a7=function(){A.K.call(this);this.xz=new c.kkc(this);
var a=new c.hkc,a=new c.jkc(a);this.wUc(a);this.TFa={}};var A=c.u(c.a7,c.p2a);A.Nb=b.Nf(0,0,100,100);A.Gy=null;A.HLb=!1;A.Pdb=!1;A.yfa=null;A.UT=a.Mn.LGc;A.Lqa=a.oL.T4c;A.QD=a.JG.Ogd;A.Gga=a.gA.awb;A.gfa=1E3;A.c3=null;A.LA=null;A.OA=null;A.R=function(){this.Gy&&(this.Gy.j4=null,b.ga(this.Gy),this.Gy=null);var a=this.TFa;this.TFa={};for(var c in a)b.ga(a[c]);this.yfa&&(b.ga(this.yfa),this.yfa=null);this.c3&&(this.c3.zAa(null),this.c3.ub());this.LA&&(this.LA.zAa(null),this.LA.ub());this.OA&&(this.OA.zAa(null),
this.OA.ub());A.k.R.call(this)};A.Be=function(){return c.lya};A.pq=function(){return this.Gy.pq()};A.Lu=function(){return this.Gy.Lu()};A.yG=function(){return this.Gy};A.Jo=function(){return this.QD};A.oT=function(a){this.QD!=a&&(this.QD=a,this.ci(),this.zp())};A.UTd=function(){return this.UT};A.dDb=function(a){this.UT!=a&&(this.UT=a,this.zp())};A.WYd=function(){return this.Lqa};A.dEb=function(a){this.Lqa!=a&&(this.Lqa=a,this.zp())};A.UZd=function(){return this.Gga};A.b6a=function(a){this.Gga!=a&&
(this.Gga=a,this.zp())};A.BTd=function(){return this.gfa};A.l5a=function(a){a=Math.max(a,0);this.gfa!=a&&(this.gfa=a,this.zp())};A.nd=function(){return this.xz.nd()};A.A6b=function(){for(var a,b=this.Lu().oI(),c=0;c<b.length&&null!=(a=b[c]);c++){var d=a.kTb();if(d)return d}return null};A.lXc=function(){for(var a,b=this.Lu().oI(),c=0;c<b.length&&null!=(a=b[c]);c++){var d=a.hgb();if(d)return d}return null};A.Smb=function(){this.c3||(this.c3=new c.Oxb,this.c3.zAa(this),this.c3.Ba());return this.c3};
A.vXc=function(){return this.Jo()==a.JG.xX?this.UT&a.Mn.Xfb:this.UT&a.Mn.Yfb};A.wXc=function(){return this.c3?this.c3.HI():""};A.Lob=function(){this.LA||(this.LA=new c.u2a,this.LA.zAa(this),this.LA.Ba());return this.LA};A.Mob=function(){return this.Jo()==a.JG.xX?this.UT&a.Mn.Yfb:this.UT&a.Mn.Xfb};A.W1c=function(){return this.LA?this.LA.XQa:!0};A.Y1c=function(){return this.LA?this.LA.jTa:m};A.X1c=function(){return this.LA?this.LA.aTa:m};A.$1c=function(){return this.LA?this.LA.nUa:m};A.Z1c=function(){return this.LA?
this.LA.mUa:m};A.a2c=function(){return this.LA?this.LA.HI():""};A.fpb=function(){this.OA||(this.OA=new c.u2a,this.OA.zAa(this),this.OA.Ba());return this.OA};A.v5b=function(){if(this.wtb())switch(this.Mob()){case a.Mn.nVa:return a.Mn.Wfb;case a.Mn.Wfb:return a.Mn.nVa;case a.Mn.lVa:return a.Mn.mVa;case a.Mn.mVa:return a.Mn.lVa}return a.Mn.RSb};A.S2c=function(){return this.OA?this.OA.XQa:!0};A.U2c=function(){return this.OA?this.OA.jTa:m};A.T2c=function(){return this.OA?this.OA.aTa:m};A.W2c=function(){return this.OA?
this.OA.nUa:m};A.V2c=function(){return this.OA?this.OA.mUa:m};A.X2c=function(){return this.OA?this.OA.HI():""};A.wtb=function(){for(var b=this.Lu().yw(),c=null,d=0;d<b.length&&null!=(c=b[d]);d++){var e=c.Psa();if(e&&e.lfa==a.NF.yGa)return!0}return!1};A.H_=function(){return new c.t2a};A.VS=function(){this.HLb=!0;this.zp()};A.zp=function(){!1==this.Pdb&&(this.Pdb=!0,this.Iu())};A.Zx=function(a,c){if(this.Pdb){var d=this.$a();0<d&&b.pe[d].AGd(this.HLb);this.Pdb=this.HLb=!1}A.k.Zx.call(this,a,c)};A.wUc=
function(a){this.Gy=a;a.j4=this};A.hg=function(b){null==this.yfa&&(this.yfa=new c.s1(this.ha,a.OF.w_));this.RG(this.yfa);for(var d in this.TFa){var e=this.TFa[d],f=new c.s1(e,a.OF.w_,this.yfa,this);e.RG(f)}this.zp();A.k.hg.call(this,b)};A.s9=function(a){this.xz.od(a)};A.Aza=function(d){if(""!=d){var e=this.TFa[d];e||(e=b.Ned(this,d),this.TFa[d]=e,d=new c.s1(e,a.OF.w_,this.yfa,this),e.RG(d));return e}return null};A.Ag=function(a){return this.xz.Ag(a)};A.Fh=function(a){return this.xz.Fh(!1,a)?"OK":
"NR"};A.mp=function(){return this.pq().Il()};A.Sj=function(){this.xz.Sj()};A.Om=function(a){this.xz.Om(a==p?!0:!1,a)};A.zl=function(){this.xz.zl()};A.rn=function(a,b,c){return this.xz.rn(a,b,c)};A.Xq=function(a){this.Sj();for(var b=0;b<a;b++)this.Ag()};A.Bs=function(){return new c.E1a(this)};A.zza=function(){return this.xz};A.U1b=function(b,c){var e=d.cc();e.Fha("VALUE",b);e.zC("LABEL",d.ka(b));e.fN("AXIS",c,a.NF.v);this.Ga(a.Q.eWc,e);return e.jB("LABEL")};d.Md(c.a7,"PRIM_CHRT",{Aa:{},hA:{Ag:A.Ag,
Fh:function(a){return this.Fh(d.O(a)-1)},Xq:A.Xq,Sj:A.Sj,mp:A.mp,Om:function(a){this.Om(a?d.O(a)-1:p)},zl:A.zl,rn:A.rn,Bs:A.Bs}});c.jkc=function(a){l.K.call(this);this.vfb=a;this.j4=null;a.Gy=this;var b=new c.gkc;b.Gy=this;this.ufb=new c.fkc(this,a,b)};var l=c.u(c.jkc,c.Cm);l.R=function(){this.Lu().L4a();this.j4&&(this.j4.E2(),this.j4.Gy=null,b.ga(this.j4),this.j4=null);b.ga(this.ufb);this.vfb.Gy=null;b.ga(this.vfb);this.vfb=null;l.k.R.call(this)};l.Lu=function(){return this.vfb};l.Oi=function(){return this.j4};
l.pq=function(){return this.ufb};l.NK=function(a){var b=this.Oi().H_();this.Lu().tTb(b);this.rya(b);this.Nsa(b);a===p?this.pq().us(b):this.pq().xKa(a,b);this.Oi().s9(b);return b};l.U1=function(a){this.ufb.ys(a.Fk())};l.ENa=function(){this.ufb.Uk()};l.uke=function(){};l.p8c=function(){};l.rya=function(d){if(d=d.jq)for(var e,f=this.Lu().oI(),l=this.Oi().bq,k=0;k<f.length&&null!=(e=f[k]);k++)if(0<=e.lK){var h=e.Sz(),m=e.Ye;if(m&&(h=m.get(),l&&(m=m.zw()))){var r=m.wh();if(l[r]!==p&&(h=l[r],"string"===
typeof h))switch(m.qI()){case a.Gd.j5:h=b.MGa(h);break;case a.Gd.k5:h=b.PGa(h);break;case a.Gd.oba:h=b.NGa(h);break;case a.Gd.iW:case a.Gd.hW:h=new c.qk(h)}}d.OOa(e,h)}};l.e7=function(a){if(a=a.jq)for(var b,c=this.Lu().oI(),d=this.Oi().bq,e=0;e<c.length&&null!=(b=c[e]);++e){var f=b.Ye;0<=b.lK&&(f?d?(f=f.zw())&&(d[f.wh()]=a.Qx(b)):f.set(a.Qx(b)):b.m9a(a.Qx(b)))}};l.Nsa=function(a){for(var b,c=this.Lu().oI(),d=0;d<c.length&&null!=(b=c[d]);d++)b.Nsa(a)};c.r2a=function(){r.K.call(this)};var r=c.u(c.r2a,
c.Avb);r.R=function(){this.Oa(null);r.k.R.call(this)};r.Fl="";r.Oi=function(){var a=this.Lu();return a?a.Oi():null};r.Lu=function(){return this.Xc};r.yG=function(){var a=this.Lu();return a?a.yG():null};r.W=function(){var a=null;this.Xc&&(a=this.Lu().Oi());return a};r.Oa=function(b){var c=this.W();b!=c&&(c&&(c=c.yG(),c.Lu().rNa(this)),b&&(c=b.yG(),c.Lu().b0a(this)),this.Tw(a.Ke.Obc))};r.Ig=function(){return this.Fl};r.Qb=function(b){this.Fl!=b&&(this.Fl=b,this.Oi().zp(),this.m(a.g.j))};r.nd=function(){var a=
this.Oi();return a&&(a=a.nd())?a.wza(this):null};r.Xb=function(){var a=this.Oi();return a?a.Xb():!1};r.nO=function(){return!0};r.Psa=function(){return null};r.kTb=function(){return null};r.hgb=function(){return null};r.Iaa=function(){return null};r.Nsa=function(){};r.VS=function(){var a=this.Oi();a&&a.VS()};r.zp=function(){var a=this.Oi();a&&a.zp()};r.GX=function(a){var d=this.Oi();return d&&(d=d.Aza(this.Ig()))&&(d=d.Rq())&&d instanceof c.Yf?b.dz(a,d.ya(),1):"rgba(0,0,0,0)"};r.HX=function(a,d){var e=
this.Oi();return e&&(e=e.Aza(this.Ig()))&&(e=e.qs())&&e instanceof c.Yf?b.dz(a,e.ya(),1):t(d.color,0.8)};r.m9a=function(){};c.dMa=function(){E.K.call(this)};var E=c.u(c.dMa,c.r2a);E.fb="";E.Sz=function(){return this.fb};E.ab=function(){return this.fb};E.tb=function(b){this.fb!=b&&(this.fb=b,this.m(a.g.j))};E.kTb=function(){return this};E.m9a=function(a){this.fb=a};d.Sa(c.dMa,"PRIM_CHRT","Caption",{Aa:{Source:{a:E.iB,f:E.yl},Caption:{a:E.ab,f:function(a){this.tb(d.ka(a))}}},Ue:{Re:"Caption"}});c.eMa=
function(a,b){D.K.call(this,a,b)};var D=c.u(c.eMa,c.s2a);D.Fl="";D.ab=function(){return this.og()?d.ka(this.Wc.s6b(this.ua)):""};D.tb=function(a){this.og()&&(this.Wc.Zuc(this.ua,a),this.ua.VS())};d.Sa(c.eMa,"PRIM_CHRT","CaptionItem",{Aa:{Caption:{a:function(){return this.ab()},f:function(a){this.tb(d.ka(a))}}}});c.fya=function(){x.K.call(this)};var x=c.u(c.fya,c.r2a);x.lfa=a.NF.xGa;x.cb=0;x.f$="";x.Sz=function(){return this.cb};x.kb=function(){return this.cb};x.ob=function(b){this.cb!=b&&(this.cb=
b,this.m(a.g.j))};x.LC=function(){return this.f$};x.nna=function(b){this.f$!=b&&(this.f$=b,this.m(a.g.j))};x.VTd=function(){return this.lfa};x.usc=function(a){this.lfa!=a&&(this.lfa=a,this.zp())};x.Psa=function(){return this};x.hf=function(b){var c=this.Oi();c&&(b=c.pq().Ln(b))&&c.s9(b);this.Ga(a.Q.tc)};x.m9a=function(a){this.cb=a};d.Sa(c.fya,"PRIM_CHRT","Value",{Aa:{Value:{a:function(){return d.zi(this.kb())},f:function(a){this.ob(d.lg(a))}},Source:{a:x.iB,f:x.yl},Visible:{a:x.zb,f:function(a){this.Ab(d.Ca(a))}},
DisplayPosition:{a:x.dh,f:function(a){this.Vd(d.O(a))}}},Ue:{Re:"Value"}});c.fMa=function(a,b){K.K.call(this,a,b)};var K=c.u(c.fMa,c.s2a);K.z$=!1;K.bs="";K.Oqa="";K.Pqa="";K.Qqa="";K.kb=function(){return this.og()?this.Wc.s6b(this.ua):0};K.ob=function(a){this.og()&&(this.Wc.Zuc(this.ua,a),this.ua.VS())};K.cL=function(){return this.bs};K.F_c=function(){return this.Oqa};K.G_c=function(){return this.Pqa};K.H_c=function(){return this.Qqa};K.U5c=function(){return this.z$};K.bIa=function(a,b,c,d){this.bs=
a;this.Oqa=b;this.Pqa=c;this.Qqa=d;this.z$=!0};d.Sa(c.fMa,"PRIM_CHRT","ValueItem",{Aa:{Value:{a:function(){return d.zi(this.kb())},f:function(a){this.ob(d.lg(a))}}}});c.q2a=function(){};var J=c.u(c.q2a,c.qd);J.WFa=null;J.qha="";J.Y3d=function(){return this.WFa};J.zAa=function(a){this.WFa=a};J.HI=function(){return this.qha};J.Lna=function(a){this.qha!=a&&(this.qha=a,this.zp())};J.zp=function(){var a=this.WFa;a&&a.zp()};d.Sa(c.q2a,"PRIM_CHRT","Axis",{Aa:{Title:{a:J.HI,f:function(a){this.Lna(d.ka(a))}}}});
c.Oxb=function(){};c.u(c.Oxb,c.q2a);d.Sa(c.Oxb,"PRIM_CHRT","CaptionAxis",{});c.u2a=function(){};J=c.u(c.u2a,c.q2a);J.XQa=!0;J.jTa=m;J.aTa=m;J.nUa=m;J.mUa=m;J.eXc=function(){return this.XQa};J.Pqd=function(a){this.XQa!=a&&(this.XQa=a,this.zp())};J.o1c=function(){return this.jTa};J.Ztd=function(a){this.jTa!==a&&(this.jTa=a,this.zp())};J.d1c=function(){return this.aTa};J.Rtd=function(a){this.aTa!==a&&(this.aTa=a,this.zp())};J.L3c=function(){return this.nUa};J.Dvd=function(a){this.nUa!==a&&(this.nUa=
a,this.zp())};J.K3c=function(){return this.mUa};J.Cvd=function(a){this.mUa!==a&&(this.mUa=a,this.zp())};d.Sa(c.u2a,"PRIM_CHRT","ValueAxis",{Aa:{BeginAtZero:{a:J.eXc,f:function(a){this.Pqd(d.Ca(a))}},Min:{a:J.o1c,f:function(a){this.Ztd(d.T8a(a))}},Max:{a:J.d1c,f:function(a){this.Rtd(d.T8a(a))}},SuggestedMin:{a:J.L3c,f:function(a){this.Dvd(d.T8a(a))}},SuggestedMax:{a:J.K3c,f:function(a){this.Cvd(d.T8a(a))}}}});c.ikc=function(a,b){C.K.call(this,a);this.WFa=a;this.Fl=b};var C=c.u(c.ikc,c.T6);C.nb=function(){C.k.nb.call(this)};
C.Zd=function(){return this.WFa.Zd()};C.kO=function(){return this.WFa.kO()};b.Ned=function(a,d){var e=new c.ikc(a,d);return b.Uca(e)};C.Oe=function(a){a[0]=this.Fl};c.Kxb=function(){M.K.call(this)};var M=c.u(c.Kxb,c.a7);M.Nb=b.Nf(0,0,400,260);M.v$a=90;M.V$a=80;M.ZCa=a.yaa.eKc;M.Be=function(){return c.$kc};M.cXc=function(){return this.v$a};M.Lqd=function(a){a=b.Mf(a,0,100);this.v$a!=a&&(this.v$a=a,this.zp())};M.BXc=function(){return this.V$a};M.erd=function(a){a=b.Mf(a,0,100);this.V$a!=a&&(this.V$a=
a,this.zp())};M.$Td=function(){return this.ZCa};M.Mqd=function(a){this.ZCa!=a&&(this.ZCa=a,this.zp())};d.Sa(c.Kxb,"PRIM_CHRT","BarChart",{Aa:{BarPercentage:{a:M.cXc,f:function(a){this.Lqd(d.O(a))}},CategoryPercentage:{a:M.BXc,f:function(a){this.erd(d.O(a))}},Axes:{a:function(){return d.va(this.UT,a.Mn.v)},f:function(b){this.dDb(d.wa(b,a.Mn.v))}},GridLines:{a:function(){return d.va(this.Lqa,a.oL.v)},f:function(b){this.dEb(d.wa(b,a.oL.v))}},BarType:{a:function(){return d.va(this.ZCa,a.yaa.v)},f:function(b){this.Mqd(d.wa(b,
a.yaa.v))}},Orientation:{a:function(){return d.va(this.Jo(),a.JG.v)},f:function(b){this.oT(d.wa(b,a.JG.v))}},LegendPosition:{a:function(){return d.va(this.Gga,a.gA.v)},f:function(b){this.b6a(d.wa(b,a.gA.v))}},AnimationDuration:{a:function(){return this.gfa},f:function(a){this.l5a(d.O(a))}},CaptionAxis:{a:A.Smb},PrimaryAxis:{a:A.Lob},SecondaryAxis:{a:A.fpb}}});c.Yjc=function(){ca.K.call(this)};var ca=c.u(c.Yjc,c.dMa);ca.Iaa=function(a){return new c.Lxb(this,a)};d.Sa(c.Yjc,"PRIM_CHRT","BarChartCaption",
{Aa:{Parent:{a:r.W,f:r.Oa},CurrentItem:{a:r.nd}}});c.Lxb=function(a,b){G.K.call(this,a,b)};var G=c.u(c.Lxb,c.eMa);d.Sa(c.Lxb,"PRIM_CHRT","BarChartCaptionItem",{});c.Zjc=function(){z.K.call(this)};var z=c.u(c.Zjc,c.fya);z.PB=1;z.Bja=function(){return this.PB};z.gna=function(a){a=Math.max(a,0);this.PB!=a&&(this.PB=a,this.zp())};z.Iaa=function(a){return new c.Mxb(this,a)};z.Nsa=function(a){a.wza(this).Qb(this.Ig())};d.Sa(c.Zjc,"PRIM_CHRT","BarChartValue",{Aa:{Parent:{a:r.W,f:r.Oa},Axis:{a:function(){return d.va(this.lfa,
a.NF.v)},f:function(b){this.usc(d.wa(b,a.NF.v))}},BorderWidth:{a:z.Bja,f:function(a){this.gna(d.O(a))}},CurrentItem:{a:r.nd},ThemeDrawStyle:{a:r.Ig,f:function(a){this.Qb(d.ka(a))}},Description:{a:x.LC,f:function(a){this.nna(d.ka(a))}}}});c.Mxb=function(a,b){V.K.call(this,a,b)};var V=c.u(c.Mxb,c.fMa);d.Sa(c.Mxb,"PRIM_CHRT","BarChartValueItem",{Aa:{ThemeDrawStyle:{a:k.Ig,f:function(a){this.Qb(d.ka(a))}}},jc:{FormatHint:function(a,b,c,e){this.bIa(a!==p?d.ka(a):"",b!==p?d.ka(b):"",c!==p?d.ka(c):"",e!==
p?d.ka(e):"")}}});c.Qxb=function(){y.K.call(this)};var y=c.u(c.Qxb,c.a7);y.Nb=b.Nf(0,0,400,260);y.Be=function(){return c.tlc};d.Sa(c.Qxb,"PRIM_CHRT","LineChart",{Aa:{Axes:{a:function(){return d.va(this.UT,a.Mn.v)},f:function(b){this.dDb(d.wa(b,a.Mn.v))}},GridLines:{a:function(){return d.va(this.Lqa,a.oL.v)},f:function(b){this.dEb(d.wa(b,a.oL.v))}},LegendPosition:{a:function(){return d.va(this.Gga,a.gA.v)},f:function(b){this.b6a(d.wa(b,a.gA.v))}},AnimationDuration:{a:function(){return this.gfa},f:function(a){this.l5a(d.O(a))}},
CaptionAxis:{a:A.Smb},PrimaryAxis:{a:A.Lob},SecondaryAxis:{a:A.fpb}}});c.tkc=function(){da.K.call(this)};var da=c.u(c.tkc,c.dMa);da.Iaa=function(a){return new c.Rxb(this,a)};d.Sa(c.tkc,"PRIM_CHRT","LineChartCaption",{Aa:{Parent:{a:r.W,f:r.Oa},CurrentItem:{a:r.nd}}});c.Rxb=function(a,b){$.K.call(this,a,b)};var $=c.u(c.Rxb,c.eMa);d.Sa(c.Rxb,"PRIM_CHRT","LineChartCaptionItem",{});c.ukc=function(){L.K.call(this)};var L=c.u(c.ukc,c.fya);L.PB=1;L.PSa=a.N6.Eyb;L.ETa=a.q7.Qma;L.Bja=function(){return this.PB};
L.gna=function(a){a=Math.max(a,1);this.PB!=a&&(this.PB=a,this.zp())};L.WZd=function(){return this.PSa};L.Jtd=function(a){this.PSa!=a&&(this.PSa=a,this.zp())};L.Z0d=function(){return this.ETa};L.Cud=function(a){this.ETa!=a&&(this.ETa=a,this.zp())};L.Iaa=function(a){return new c.Sxb(this,a)};d.Sa(c.ukc,"PRIM_CHRT","LineChartValue",{Aa:{Parent:{a:r.W,f:r.Oa},BorderWidth:{a:L.Bja,f:function(a){this.gna(d.O(a))}},CurrentItem:{a:r.nd},ThemeDrawStyle:{a:r.Ig,f:function(a){this.Qb(d.ka(a))}},Description:{a:x.LC,
f:function(a){this.nna(d.ka(a))}},Axis:{a:function(){return d.va(this.lfa,a.NF.v)},f:function(b){this.usc(d.wa(b,a.NF.v))}},LineStyle:{a:function(){return d.va(this.PSa,a.N6.v)},f:function(b){this.Jtd(d.wa(b,a.N6.v))}},PointStyle:{a:function(){return d.va(this.ETa,a.q7.v)},f:function(b){this.Cud(d.wa(b,a.q7.v))}}}});c.Sxb=function(a,b){T.K.call(this,a,b)};var T=c.u(c.Sxb,c.fMa);d.Sa(c.Sxb,"PRIM_CHRT","LineChartValueItem",{Aa:{},jc:{FormatHint:function(a,b,c,e){this.bIa(a!==p?d.ka(a):"",b!==p?d.ka(b):
"",c!==p?d.ka(c):"",e!==p?d.ka(e):"")}}});c.eyb=function(){H.K.call(this)};var H=c.u(c.eyb,c.a7);H.Nb=b.Nf(0,0,200,200);H.PB=2;H.Gab=0;H.Be=function(){return c.Nlc};H.Bja=function(){return this.PB};H.gna=function(a){a=Math.max(a,0);this.PB!=a&&(this.PB=a,this.zp())};H.yYc=function(){return this.Gab};H.$rd=function(a){a=b.Mf(a,0,100);this.Gab!=a&&(this.Gab=a,this.zp())};d.Sa(c.eyb,"PRIM_CHRT","PieChart",{Aa:{BorderWidth:{a:H.Bja,f:function(a){this.gna(d.O(a))}},CutoutPercentage:{a:H.yYc,f:function(a){this.$rd(d.O(a))}},
LegendPosition:{a:function(){return d.va(this.Gga,a.gA.v)},f:function(b){this.b6a(d.wa(b,a.gA.v))}},AnimationDuration:{a:function(){return this.gfa},f:function(a){this.l5a(d.O(a))}}}});c.Bkc=function(){I.K.call(this)};var I=c.u(c.Bkc,c.dMa);I.Iaa=function(a){return new c.fyb(this,a)};d.Sa(c.Bkc,"PRIM_CHRT","PieChartCaption",{Aa:{Parent:{a:r.W,f:r.Oa},CurrentItem:{a:r.nd}}});c.fyb=function(a,b){W.K.call(this,a,b)};var W=c.u(c.fyb,c.eMa);d.Sa(c.fyb,"PRIM_CHRT","PieChartCaptionItem",{});c.Ckc=function(){na.K.call(this)};
var na=c.u(c.Ckc,c.fya);na.Iaa=function(a){return new c.gyb(this,a)};na.Nsa=function(a){a.wza(this).Qb(this.Ig())};d.Sa(c.Ckc,"PRIM_CHRT","PieChartValue",{Aa:{Parent:{a:r.W,f:r.Oa},CurrentItem:{a:r.nd},ThemeDrawStyle:{a:r.Ig,f:function(a){this.Qb(d.ka(a))}}}});c.gyb=function(a,b){qa.K.call(this,a,b)};var qa=c.u(c.gyb,c.fMa);d.Sa(c.gyb,"PRIM_CHRT","PieChartValueItem",{Aa:{ThemeDrawStyle:{a:k.Ig,f:function(a){this.Qb(d.ka(a))}}},jc:{FormatHint:function(a,b,c,e){this.bIa(a!==p?d.ka(a):"",b!==p?d.ka(b):
"",c!==p?d.ka(c):"",e!==p?d.ka(e):"")}}});c.akc=function(){fa.K.call(this)};var fa=c.u(c.akc,c.a7);fa.Nb=b.Nf(0,0,400,260);fa.PB=2;fa.idb=10;fa.cdb=40;fa.Be=function(){return c.blc};fa.Bja=function(){return this.PB};fa.gna=function(a){a=Math.max(a,0);this.PB!=a&&(this.PB=a,this.zp())};fa.p1c=function(){return this.idb};fa.bud=function(a){a=Math.max(a,0);this.idb!=a&&(this.idb=a,this.zp())};fa.e1c=function(){return this.cdb};fa.Std=function(a){a=Math.max(a,0);this.cdb!=a&&(this.cdb=a,this.zp())};fa.Mob=
function(){return this.UT&a.Mn.Xfb};fa.v5b=function(){return this.UT&a.Mn.Yfb};fa.H_=function(){return new c.Nxb};d.Sa(c.akc,"PRIM_CHRT","BubbleChart",{Aa:{Axes:{a:function(){return d.va(this.UT,a.Mn.v)},f:function(b){this.dDb(d.wa(b,a.Mn.v))}},GridLines:{a:function(){return d.va(this.Lqa,a.oL.v)},f:function(b){this.dEb(d.wa(b,a.oL.v))}},BorderWidth:{a:fa.Bja,f:function(a){this.gna(d.O(a))}},MinSize:{a:fa.p1c,f:function(a){this.bud(d.O(a))}},MaxSize:{a:fa.e1c,f:function(a){this.Std(d.O(a))}},LegendPosition:{a:function(){return d.va(this.Gga,
a.gA.v)},f:function(b){this.b6a(d.wa(b,a.gA.v))}},AnimationDuration:{a:function(){return this.gfa},f:function(a){this.l5a(d.O(a))}},CurrentItem:{a:A.nd},CaptionAxis:{a:A.Smb},PrimaryAxis:{a:A.Lob},SecondaryAxis:{a:A.fpb}}});c.bkc=function(){ta.K.call(this)};var ta=c.u(c.bkc,c.r2a);ta.fb="";ta.Sz=function(){return this.fb};ta.ab=function(){return this.fb};ta.tb=function(b){this.fb!=b&&(this.fb=b,this.m(a.g.j))};ta.hgb=function(){return this};ta.Nsa=function(a){a.wza(this).Qb(this.Ig())};ta.Iaa=function(a){return new c.ckc(this,
a)};ta.m9a=function(a){this.fb=a};d.Sa(c.bkc,"PRIM_CHRT","BubbleChartCategory",{Aa:{Source:{a:ta.iB,f:ta.yl},Caption:{a:ta.ab,f:function(a){this.tb(d.ka(a))}},Parent:{a:r.W,f:r.Oa},ThemeDrawStyle:{a:r.Ig,f:function(a){this.Qb(d.ka(a))}}},Ue:{Re:"Caption"}});c.ckc=function(a,b){ra.K.call(this,a,b)};var ra=c.u(c.ckc,c.s2a);ra.Fl="";ra.Ig=function(){return this.Fl};ra.Qb=function(a){this.Fl=a};c.Nxb=function(){R.K.call(this)};var R=c.u(c.Nxb,c.t2a);R.Fl="";R.z$=!1;R.bs="";R.Oqa="";R.Pqa="";R.Qqa="";
R.Ig=function(){return this.Fl};R.Qb=function(a){this.og()&&this.Fl!=a&&(this.Fl=a,this.Oi().zp())};R.cL=function(){return this.bs};R.F_c=function(){return this.Oqa};R.G_c=function(){return this.Pqa};R.H_c=function(){return this.Qqa};R.U5c=function(){return this.z$};R.HX=function(a,d,e){var f=this.Oi();return f&&(f=f.Aza(this.Ig()))&&(f=f.qs())&&f instanceof c.Yf?b.dz(d,f.ya(),1):(a=this.QXa(a))?a.HX(d,e):t(e.color,0.8)};R.GX=function(a,d,e){var f=this.Oi();return f&&(f=f.Aza(this.Ig()))&&(f=f.Rq())&&
f instanceof c.Yf?b.dz(d,f.ya(),1):(a=this.QXa(a))?a.GX(d,e):"rgba(0,0,0,0)"};R.bIa=function(a,b,c,d){this.bs=a;this.Oqa=b;this.Pqa=c;this.Qqa=d;this.z$=!0};d.Sa(c.Nxb,"PRIM_CHRT","BubbleChartItem",{Aa:{ThemeDrawStyle:{a:R.Qb,f:function(a){this.Qb(d.ka(a))}}},jc:{FormatHint:function(a,b,c,e){this.bIa(a!==p?d.ka(a):"",b!==p?d.ka(b):"",c!==p?d.ka(c):"",e!==p?d.ka(e):"")}}});c.dkc=function(){aa.K.call(this)};var aa=c.u(c.dkc,c.fya);d.Sa(c.dkc,"PRIM_CHRT","BubbleChartValue",{Aa:{Parent:{a:r.W,f:r.Oa},
Description:{a:x.LC,f:function(a){this.nna(d.ka(a))}}}});c.lya=function(a){Y.K.call(this,a);this.Cfa=this.kv=this.xfa=null};var Y=c.u(c.lya,c.D2a);Y.Oi=function(){return this.L};Y.pq=function(){return this.Oi().pq()};Y.Lu=function(){return this.Oi().Lu()};Y.yG=function(){return this.Oi().yG()};Y.O3b=function(){return this.L.ye().Jv()};Y.Wnb=function(){var a="",b=this.L.ye(),a=b.Mv()?"italic":"normal";b.Iv()&&(a+=" bold");return a};Y.KYd=function(){var b=this.L.ye(),c=b.Kv();b.wj()==a.Pm.fJ&&(c=Math.round(c/
53*72));return c};Y.IYd=function(d){var e=a.o.lM,f=this.L.Sp();f&&f instanceof c.Yf&&(e=f.ya());return b.dz(d,e,1)};Y.qCb=function(){return null};Y.S4a=function(){return null};Y.T4a=function(){return null};Y.U4a=function(a){for(var b,c=this.Lu().yw(),d=0;d<c.length&&null!=(b=c[d]);d++)if(b.Psa()&&0==a--)return b;return null};Y.kYb=function(a,b){var c=this.U4a(b);c&&c.hf(a)};Y.FUb=function(a,b){var c="",e=this.pq(),f=this.U4a(b);if(f){var l=e.Ln(a);l&&((l=l.wza(f))&&l.z$?c=l.cL():(f=this.Oi().A6b())&&
(l=e.Ln(a))&&(c=d.ka(l.jq.Qx(f))))}return c};Y.EUb=function(a,b){var c=this.pq(),e=this.U4a(b);if(e){var f=c.Ln(a);if(f){if((c=f.wza(e))&&c.z$)return e=[],e.push(c.Oqa),f=c.Pqa,c=c.Qqa,0<f.length&&e.push(f),0<c.length&&e.push(c),e;c=e.LC();0<c.length&&(c+=": ");return c+=d.ka(f.jq.Qx(e))}}return""};Y.Iz=function(){Y.k.Iz.call(this);this.G.style.whiteSpace="normal"};Y.Hd=function(a,b){this.Cfa=this.H4();this.G=document.createElement("div");this.G.setAttribute("id",a+this.hc);this.G.setAttribute("LANSAHandle",
this.hc);this.kv=document.createElement("canvas");this.G.appendChild(this.kv);return Y.k.Hd.call(this,a,b)};Y.Zea=function(){Y.k.Zea.call(this);this.xfa&&(this.xfa.destroy(),this.xfa=null)};Y.AGd=function(a){var c=window.getComputedStyle(this.G),d=this.L.DC(b.ES(),null);this.t9(this.Cfa.options,d,c);this.Cfa.data=this.$Ub(d,c);this.xfa?a?this.xfa.update():this.xfa.update(0):(q||(window.Chart===p&&b.xHa("chart/chart.min.js"),a=document.createElement("link"),a.href=b.K4("chart/chart.min.css"),a.rel=
"stylesheet",a.type="text/css",document.body.appendChild(a),q=window.Chart.platform.disableCSSInjection=!0),this.xfa=new window.Chart(this.kv,this.Cfa));b.ga(d)};Y.$Ub=function(a,b){for(var c={},e=c.labels=[],f=c.datasets=[],l,k=this.Oi(),h=this.pq(),m=this.Lu().yw(),r=0;r<m.length&&null!=(l=m[r]);r++){var F=l.Psa();F&&f.push(this.hia(F,a,b))}f=k.A6b();for(r=0;r<h.Il();r++)l="",f&&(k=h.Ln(r))&&(l=d.ka(k.jq.Qx(f))),e.push(l);return c};Y.H4=function(){var a=this;return{options:{animation:{duration:1E3,
easing:"easeOutQuart"},onClick:function(b){if(b=a.xfa.getElementAtEvent(b)){var c=b[0];c&&(b=c._index,c=c._datasetIndex,b!==p&&c!==p&&a.kYb(b,c))}},tooltips:{mode:"point",intersect:!1,enabled:!0,caretSize:0,backgroundColor:"rgba(114, 114, 114, 1)",cornerRadius:2,xPadding:8,yPadding:8,titleFontStyle:"normal",titleFontSize:14,titleMarginBottom:8,bodyFontSize:13,bodySpacing:6,displayColors:!1,callbacks:{title:function(b){var c="";0<b.length&&(b=b[0])&&(c=a.FUb(b.index,b.datasetIndex));return c},label:function(b){var c=
"";b&&(c=a.EUb(b.index,b.datasetIndex));return c}}},legend:{display:!1,labels:{}},responsive:!0,maintainAspectRatio:!1}}};Y.vke=function(){return this.Cfa};Y.hia=function(a){for(var b={data:[]},c=this.pq(),e=0;e<c.Il();e++){var f=c.Ln(e);f&&(f=f.jq.Qx(a),b.data.push(d.lg(f)))}return b};Y.t9=function(){};Y.y9a=function(b,c){var d=b.legend;switch(this.L.Gga){case a.gA.Gxa:d.display=!1;break;case a.gA.Ela:d.display=!0;d.position="top";break;case a.gA.pla:d.display=!0;d.position="bottom";break;case a.gA.Sca:d.display=
!0;d.position="left";break;case a.gA.Cla:d.display=!0,d.position="right"}d=d.labels;d.fontFamily=c.fontFamily;d.fontSize=parseFloat(c.fontSize);d.fontStyle=c.fontStyle;d.fontColor=c.color};Y.i9a=function(a){a.animation.duration=this.L.gfa};Y.I9a=function(a){a=a.tooltips;a.titleFontFamily=this.O3b();a.enabled=this.L.Nsb()};Y.lKb=function(b,c){for(var d=this.L.Lqa,e=0!=(d&a.oL.F6b),d=0!=(d&a.oL.E6b),f=t(c.color,0.3),l=t(c.color,0.6),k=b.scales,h=k.xAxes,m=0;m<h.length;m++){var r=h[m].gridLines;r.display=
e;r.color=f;r.zeroLineColor=l;this.L.wtb()||(e=!1)}e=k.yAxes;for(m=0;m<e.length;m++)r=e[m].gridLines,r.display=d,r.color=f,r.zeroLineColor=l,this.L.wtb()||(d=!1)};Y.PJb=function(b,c){var d=this.L,e=b.scales;this.QJb(this.qCb(e),d.vXc(),!1,m,m,m,m,d.wXc(),c,null);this.QJb(this.S4a(e),d.Mob(),d.W1c(),d.Y1c(),d.X1c(),d.$1c(),d.Z1c(),d.a2c(),c,function(b){return d.U1b(b,a.NF.xGa)});this.QJb(this.T4a(e),d.v5b(),d.S2c(),d.U2c(),d.T2c(),d.W2c(),d.V2c(),d.X2c(),c,function(b){return d.U1b(b,a.NF.yGa)})};Y.QJb=
function(b,c,d,e,f,l,k,h,r,F){if(b){var u=parseFloat(r.fontSize),q=r.fontFamily,s=r.fontStyle;r=r.color;var t=b.ticks,n=b.gridLines,g=b.scaleLabel,A=c!=a.Mn.RSb;A&&(b.position=c==a.Mn.lVa?"left":c==a.Mn.mVa?"right":c==a.Mn.nVa?"top":"bottom");t.display=A;t.fontSize=u;t.fontFamily=q;t.fontStyle=s;t.fontColor=r;t.beginAtZero=d;t.min=e===m?p:e;t.max=f===m?p:f;t.suggestedMin=l===m?p:l;t.suggestedMax=k===m?p:k;t.major={};t.minor={};F&&(t.callback=F);n.drawTicks=A;n.drawBorder=A;g.display=A&&0<h.length;
g.labelString=h;g.fontSize=u;g.fontFamily=q;g.fontStyle=s;g.fontColor=r}};Y.Wzc=function(a){var b=a[0],c=a[2],d=this.kv.style.width;a[1]&&!b&&(this.kv.style.width=c.ja()+"px");a[3]=this.kv.clientWidth;a[4]=this.kv.clientHeight;this.kv.style.width=d};c.$kc=function(a){ja.K.call(this,a)};var ja=c.u(c.$kc,c.lya);ja.H4=function(){var b={id:"caption",type:"category",categoryPercentage:0.8,barPercentage:0.9,offset:!0,ticks:{},gridLines:{offsetGridLines:!0},scaleLabel:{}},c={id:"primary",type:"linear",ticks:{},
gridLines:{},scaleLabel:{}},d={id:"secondary",type:"linear",ticks:{},gridLines:{},scaleLabel:{}},e=ja.k.H4.call(this),f=e.options;this.L.Jo()==a.JG.xX?(e.type="bar",f.scales={xAxes:[b],yAxes:[c,d]}):(e.type="horizontalBar",f.scales={xAxes:[c,d],yAxes:[b]});return e};ja.qCb=function(b){return this.L.Jo()==a.JG.xX?b.xAxes[0]:b.yAxes[0]};ja.S4a=function(b){return this.L.Jo()==a.JG.xX?b.yAxes[0]:b.xAxes[0]};ja.T4a=function(b){return this.L.Jo()==a.JG.xX?b.yAxes[1]:b.xAxes[1]};ja.t9=function(a,b,c){this.tGd(a);
this.sGd(a);this.zGd(a);this.y9a(a,c);this.i9a(a);this.I9a(a);this.lKb(a,c);this.PJb(a,c);ja.k.t9.call(this,a,b,c)};ja.tGd=function(b){var c=this.L;b=b.scales;var d=b.xAxes[0];b.yAxes[0].stacked=c.ZCa==a.yaa.jhb;d.stacked=c.ZCa==a.yaa.jhb};ja.sGd=function(b){var c=this.L;b=b.scales;(c.Jo()==a.JG.xX?b.xAxes[0]:b.yAxes[0]).barPercentage=c.v$a/100};ja.zGd=function(b){var c=this.L;b=b.scales;(c.Jo()==a.JG.xX?b.xAxes[0]:b.yAxes[0]).categoryPercentage=c.V$a/100};ja.hia=function(b,c,d){var e=this.L,f=ja.k.hia.call(this,
b,c,d);f.label=b.LC();f.borderWidth=b.PB;switch(b.lfa){case a.NF.xGa:f[e.Jo()==a.JG.xX?"yAxisID":"xAxisID"]="primary";break;case a.NF.yGa:f[e.Jo()==a.JG.xX?"yAxisID":"xAxisID"]="secondary"}e=this.pq();if(0==e.Il())f.backgroundColor=b.GX(c,d),f.borderColor=b.HX(c,d);else for(var l=f.borderColor=[],k=f.backgroundColor=[],h=0;h<e.Il();h++){var m=e.Ln(h);m&&(l.push(m.HX(b,c,d)),k.push(m.GX(b,c,d)))}return f};c.tlc=function(a){sa.K.call(this,a)};var sa=c.u(c.tlc,c.lya);sa.H4=function(){var a=sa.k.H4.call(this);
a.type="line";a.options.scales={xAxes:[{type:"category",id:"caption",ticks:{},gridLines:{},scaleLabel:{}}],yAxes:[{id:"primary",type:"linear",ticks:{},gridLines:{},scaleLabel:{}},{id:"secondary",type:"linear",ticks:{},gridLines:{},scaleLabel:{}}]};return a};sa.qCb=function(a){return a.xAxes[0]};sa.S4a=function(a){return a.yAxes[0]};sa.T4a=function(a){return a.yAxes[1]};sa.t9=function(a,b,c){this.y9a(a,c);this.i9a(a);this.I9a(a);this.lKb(a,c);this.PJb(a,c);sa.k.t9.call(this,a,b,c)};sa.hia=function(b,
c,d){var e=sa.k.hia.call(this,b,c,d);e.label=b.LC();switch(b.PSa){case a.N6.pmc:e.steppedLine="before";break;case a.N6.qmc:e.lineTension=0}switch(b.ETa){case a.q7.aqc:e.pointStyle="circle";e.pointRadius=3;break;case a.q7.dqc:e.pointStyle="rect";e.pointRadius=3;break;default:e.pointStyle="",e.pointRadius=0}switch(b.lfa){case a.NF.xGa:e.yAxisID="primary";break;case a.NF.yGa:e.yAxisID="secondary"}e.borderWidth=b.PB;e.backgroundColor=b.GX(c,d);e.pointBackgroundColor=e.borderColor=b.HX(c,d);return e};
c.Nlc=function(a){ga.K.call(this,a)};var ga=c.u(c.Nlc,c.lya);ga.H4=function(){var a=ga.k.H4.call(this);a.type="pie";return a};ga.t9=function(a,b,c){a.cutoutPercentage=this.L.Gab;this.y9a(a,c);this.i9a(a);this.I9a(a);ga.k.t9.call(this,a,b,c)};ga.hia=function(a,b,c){var d=ja.k.hia.call(this,a,b,c);d.borderWidth=this.L.PB;for(var e=d.borderColor=[],f=d.backgroundColor=[],l=this.pq(),k=0;k<l.Il();k++){var h=l.Ln(k);h&&(e.push(h.HX(a,b,c)),f.push(h.GX(a,b,c)))}return d};c.blc=function(a){F.K.call(this,
a)};var F=c.u(c.blc,c.lya);F.H4=function(){var a=F.k.H4.call(this);a.type="bubble";a.options.scales={xAxes:[{id:"xAxes",type:"linear",ticks:{},gridLines:{},scaleLabel:{}}],yAxes:[{id:"yAxes",type:"linear",ticks:{},gridLines:{},scaleLabel:{}}]};return a};F.S4a=function(a){return a.xAxes[0]};F.T4a=function(a){return a.yAxes[0]};F.t9=function(a,b,c){this.y9a(a,c);this.i9a(a);this.I9a(a);this.lKb(a,c);this.PJb(a,c);F.k.t9.call(this,a,b,c)};F.$Ub=function(a,b){for(var c=[],e=[],f={},l={datasets:c},k=0,
h=0,m=this.L,r=this.pq(),F=0;F<r.Il();F++){for(var u="",q=null,s={},n=r.Ln(F),g,t=this.Lu().yw(),A=0;A<t.length&&null!=(g=t[A]);A++)if(g.Psa()){var E=d.lg(n.jq.Qx(g));s.x===p?s.x=E:s.y===p?s.y=E:s.r===p&&(s.r=E,E<k&&(k=E),E>h&&(h=E))}else g.hgb()&&null==q&&(q=g,u=d.ka(n.jq.Qx(g)));s.x===p&&(s.x=0);s.y===p&&(s.y=0);s.r===p&&(s.r=10);s.i=F;t=f[u];t===p&&(t=f[u]={label:u,backgroundColor:[],borderColor:[],borderWidth:m.PB,data:[]},c.push(t));t.backgroundColor.push(n.GX(q,a,b));t.borderColor.push(n.HX(q,
a,b));t.data.push(s);e.push(s)}c=m.idb;h=(m.cdb-c)/(h-k);for(F=0;F<e.length;F++)s=e[F],s.r=Math.round(((s.r-k)*h+c)/2);return l};F.kYb=function(a,b){var c=this.Cfa.data,d=this.U4a(0);c&&d&&d.hf(c.datasets[b].data[a].i)};F.FUb=function(a,b){var c="",e=this.Cfa.data,f=this.Oi().lXc();e&&f&&(e=this.pq().Ln(e.datasets[b].data[a].i))&&(c=e.z$?e.cL():d.ka(e.jq.Qx(f)));return c};F.EUb=function(a,b){var c=this.Cfa.data;if(c){var e=this.pq().Ln(c.datasets[b].data[a].i);if(e){c=[];if(e.z$){c.push(e.Oqa);var f=
e.Pqa,e=e.Qqa;0<f.length&&c.push(f);0<e.length&&c.push(e)}else for(var l=this.Lu().yw(),k=0;k<l.length&&null!=(f=l[k]);k++)if(f.Psa()){var h=f.LC();0<h.length&&(h+=": ");h+=d.ka(e.jq.Qx(f));c.push(h);if(3==c.length)break}return c}}return""}},{rp:["PRIM_WDGT"],rs:["chart/chart.min.js"]});
