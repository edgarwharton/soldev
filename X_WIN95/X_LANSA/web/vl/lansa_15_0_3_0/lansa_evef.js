window.LANSA.addSrc("evef",function(d,c,a,b){d.Ob("PRIM_EVP");d.Ob("PRIM_EDIT");c.gdc=function(b){p.K.call(this,b);this.to|=a.slb.vKb;this.fg|=268435456;this.Qa=new c.fdc(this);this.Qa.Oa(this);this.Qa.za(this,a.Q.Bh,this.lE)};var p=c.u(c.gdc,c.Hca);p.nb=function(){b.ga(this.Qa);this.Qa=null;p.k.nb.call(this)};p.hka=function(){return this.Qa};p.WE=function(b){this.Qa.Uy()!=b&&(this.Qa.WE(b),this.pa(a.g.j))};p.Uy=function(){return this.Qa.Uy()};p.Gx=function(){return this.pp()!=this.Sr()};p.Sr=function(){return this.Qa.Sr()};
p.it=function(a){this.Qa.it(a)};p.pp=function(){return this.Qa.pp()};p.ht=function(a){this.Qa.ht(a)};p.nc=function(){return this.Qa.nc()};p.Fx=function(){return this.Qa.ha};p.aT=function(a){1==a?this.ir(268435456):this.ir(0)};p.zN=function(){var a=0;268435456==this.ll()&&(a=1);return a};p.ir=function(b){this.ll()!=b&&(this.fg=this.fg&~a.sj.Tta|b,this.ai(),this.m(a.g.j))};p.ll=function(){return this.fg&a.sj.Tta};p.j0a=function(){return this.aO()?!0:!1};p.aO=function(){return 0<this.ll()};p.sQa=function(){this.hf()&&
this.hf().Qb(this.hEa);this.Qa&&this.Qa.Qb(this.QDa)};p.rKa=function(){this.Qa.Hh(this.rb());this.Qa.oA(!0);this.Qa.ay(!0);this.Qa.Vda(this.$_());this.Qa.bi(this.zf());this.Qa.jP(this.Dk());this.Qa.hea(this.xQ);this.Qa.oo(this.pm());this.Qa.Xm(this.Wj());this.Qa.Xu(this.Lx());this.Qa.al(this.dj());this.Qa.Oj(this.Tg());this.Qa.po(this.tm());this.rb().DKa()&&this.Qa.Vu("*")};p.m6=function(a){this.rKa();p.k.m6.call(this,a)};p.Uk=function(){this.rKa();p.k.Uk.call(this)};p.kf=function(a){if(this.Qa){var c=
this.vf(),d,h,e;this.Yd()?(h=this.lh,e=this.mh,d=c.ja()-(this.lh+this.nj),c=c.la()-(this.mh+this.mj)):(h=this.Rf(),e=this.If(),d=c.ja()-(this.Rf()+this.Ug()),c=c.la()-(this.If()+this.Yg()));this.Qa.sb(b.Ui(h,e,d,c))}p.k.kf.call(this,a)};p.xua=function(){var a;this.Qa&&(a=this.Qa.Wl());return a};p.zJ=function(a,b){a&&a.Ha(this,this.Pp);b&&b.Ia(this,this.Pp);this.Qa.Hh(b)};p.Zs=function(){this.Qa.Sf()};p.gg=function(a){null!=this.Qa&&this.Qa.jP(this.Dk());p.k.gg.call(this,a);this.Qa&&(this.Qa.ju(null),
this.Qa.oA(!0),this.Qa.ay(!0),this.vC&&this.Qa.ju(this.vC))};p.fKb=function(){this.Qa&&this.Qa.wzc()};p.E7=function(a,b){this.Qa&&this.Qa.E7(a,b)};p.w4=function(){this.Qa&&this.Qa.w4()};p.VQ=function(a){this.Qa&&this.Qa.VQ(a)};p.SS=function(a){this.Qa&&this.Qa.SS(a)};p.lE=function(){this.De()};p.Pp=function(){};p.YWa=p[a.ea.cla]=function(){this.Qa&&this.qea(this.R5())};p.uR=p[a.ea.Zy]=function(){this.Qa.Sf()};p.vR=p[a.ea.sO]=function(){this.Qa.Sf()};d.Ld(c.gdc,"PRIM_EVEF",{VS:a.Ly.Qaa,Aa:{ComponentVersion:{a:p.zN,
f:function(a){this.aT(d.O(a))}},AutoTab:{a:p.$_,f:function(a){this.Vda(d.Ba(a))}},AutoSelect:{a:p.pm,f:function(a){this.oo(d.Ba(a))}},WordWrap:{a:p.sd,f:function(a){this.Ef(d.Ba(a))}},ShowSelection:{a:p.Wj,f:function(a){this.Xm(d.Ba(a))}},ShowSelectionHilight:{a:p.Lx,f:function(a){this.Xu(d.Ba(a))}},ShowPrompter:{a:p.Zba,f:function(a){this.pAa(d.Ba(a))}},PrompterImage:{a:p.CZa,f:p.mea},PrompterTabStop:{a:p.hJa,f:function(a){this.CEb(d.Ba(a))}},UsePicklist:{a:p.k_a,f:function(a){this.e8(d.Ba(a))}},
EditAlignment:{a:function(){return d.wa(this.dj(),a.Pn.v)},f:function(b){this.al(d.va(b,a.Pn.v))}},DisplayAlignment:{a:function(){return d.wa(this.Tg(),a.bg.v)},f:function(b){this.Oj(d.va(b,a.bg.v))}},Text:{a:p.wua},SelectionEnd:{a:p.pp,f:function(a){this.ht(d.O(a))}},SelectionStart:{a:p.Sr,f:function(a){this.it(d.O(a))}},VisualStyleEdit:{a:p.ypb,f:p.MOa},NumericEditStyle:{a:function(){return d.wa(this.tm(),a.xp.v)},f:function(b){this.po(d.va(b,a.xp.v))}},HasSelection:{a:p.Gx},EditStyle:{a:p.uba,
f:p.nna},EditStyles:{a:p.Eua},EditMouseOverStyle:{a:p.LYa,f:p.D5a},EditMouseOverStyles:{a:p.MYa},EditFocusedStyle:{a:p.JYa,f:p.C5a},EditFocusedStyles:{a:p.KYa},LabelStyle:{a:p.Gba,f:p.rna},LabelStyles:{a:p.$Ya},LabelMouseOverStyle:{a:p.YYa,f:p.V5a},LabelMouseOverStyles:{a:p.ZYa},SpellCheck:{a:p.Uy,f:function(a){this.WE(d.Ba(a))}},Value:{a:function(){return this.kb()},f:function(a){this.ob(a)}}},jc:{SelectText:function(a,b){this.E7(d.O(a)-1,d.O(b))}},Te:{Qe:"Value"}});c.fdc=function(a){t.K.call(this);
this.gCc=a};var t=c.u(c.fdc,c.YI);t.UN=function(){return this.gCc.zw()||this.gCc.IZ?!1:t.k.UN.call(this)}},{rp:["PRIM_EVP","PRIM_EDIT"]});