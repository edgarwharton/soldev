window.LANSA.addSrc("evef",function(d,c,a,b){d.Ob("PRIM_EVP");d.Ob("PRIM_EDIT");c.ydc=function(b){p.K.call(this,b);this.uo|=a.Flb.IKb;this.gg|=268435456;this.Qa=new c.xdc(this);this.Qa.Oa(this);this.Qa.za(this,a.Q.Dh,this.nE)};var p=c.u(c.ydc,c.Nca);p.nb=function(){b.ga(this.Qa);this.Qa=null;p.k.nb.call(this)};p.nka=function(){return this.Qa};p.YE=function(b){this.Qa.Wy()!=b&&(this.Qa.YE(b),this.pa(a.g.j))};p.Wy=function(){return this.Qa.Wy()};p.Ix=function(){return this.qp()!=this.Tr()};p.Tr=function(){return this.Qa.Tr()};
p.jt=function(a){this.Qa.jt(a)};p.qp=function(){return this.Qa.qp()};p.it=function(a){this.Qa.it(a)};p.nc=function(){return this.Qa.nc()};p.Hx=function(){return this.Qa.ha};p.eT=function(a){1==a?this.jr(268435456):this.jr(0)};p.CN=function(){var a=0;268435456==this.ml()&&(a=1);return a};p.jr=function(b){this.ml()!=b&&(this.gg=this.gg&~a.tj.Yta|b,this.ci(),this.m(a.g.j))};p.ml=function(){return this.gg&a.tj.Yta};p.n0a=function(){return this.dO()?!0:!1};p.dO=function(){return 0<this.ml()};p.xQa=function(){this.jf()&&
this.jf().Qb(this.mEa);this.Qa&&this.Qa.Qb(this.VDa)};p.wKa=function(){this.Qa.Jh(this.rb());this.Qa.qA(!0);this.Qa.cy(!0);this.Qa.aea(this.d0());this.Qa.di(this.Af());this.Qa.mP(this.Ek());this.Qa.nea(this.AQ);this.Qa.po(this.qm());this.Qa.Ym(this.Xj());this.Qa.Yu(this.Nx());this.Qa.bl(this.ej());this.Qa.Pj(this.Vg());this.Qa.qo(this.um());this.rb().IKa()&&this.Qa.Wu("*")};p.s6=function(a){this.wKa();p.k.s6.call(this,a)};p.Vk=function(){this.wKa();p.k.Vk.call(this)};p.lf=function(a){if(this.Qa){var c=
this.xf(),d,h,e;this.Zd()?(h=this.nh,e=this.oh,d=c.ja()-(this.nh+this.oj),c=c.la()-(this.oh+this.nj)):(h=this.Sf(),e=this.Jf(),d=c.ja()-(this.Sf()+this.Wg()),c=c.la()-(this.Jf()+this.$g()));this.Qa.sb(b.Vi(h,e,d,c))}p.k.lf.call(this,a)};p.Cua=function(){var a;this.Qa&&(a=this.Qa.Xl());return a};p.BJ=function(a,b){a&&a.Ha(this,this.Qp);b&&b.Ia(this,this.Qp);this.Qa.Jh(b)};p.$s=function(){this.Qa.Tf()};p.hg=function(a){null!=this.Qa&&this.Qa.mP(this.Ek());p.k.hg.call(this,a);this.Qa&&(this.Qa.ku(null),
this.Qa.qA(!0),this.Qa.cy(!0),this.xC&&this.Qa.ku(this.xC))};p.sKb=function(){this.Qa&&this.Qa.Rzc()};p.L7=function(a,b){this.Qa&&this.Qa.L7(a,b)};p.D4=function(){this.Qa&&this.Qa.D4()};p.ZQ=function(a){this.Qa&&this.Qa.ZQ(a)};p.WS=function(a){this.Qa&&this.Qa.WS(a)};p.nE=function(){this.Ee()};p.Qp=function(){};p.cXa=p[a.ea.ila]=function(){this.Qa&&this.wea(this.X5())};p.yR=p[a.ea.az]=function(){this.Qa.Tf()};p.zR=p[a.ea.vO]=function(){this.Qa.Tf()};d.Md(c.ydc,"PRIM_EVEF",{$S:a.Ny.Xaa,Aa:{ComponentVersion:{a:p.CN,
f:function(a){this.eT(d.O(a))}},AutoTab:{a:p.d0,f:function(a){this.aea(d.Ca(a))}},AutoSelect:{a:p.qm,f:function(a){this.po(d.Ca(a))}},WordWrap:{a:p.ud,f:function(a){this.Ff(d.Ca(a))}},ShowSelection:{a:p.Xj,f:function(a){this.Ym(d.Ca(a))}},ShowSelectionHilight:{a:p.Nx,f:function(a){this.Yu(d.Ca(a))}},ShowPrompter:{a:p.eca,f:function(a){this.uAa(d.Ca(a))}},PrompterImage:{a:p.GZa,f:p.sea},PrompterTabStop:{a:p.mJa,f:function(a){this.PEb(d.Ca(a))}},UsePicklist:{a:p.o_a,f:function(a){this.l8(d.Ca(a))}},
EditAlignment:{a:function(){return d.va(this.ej(),a.Qn.v)},f:function(b){this.bl(d.wa(b,a.Qn.v))}},DisplayAlignment:{a:function(){return d.va(this.Vg(),a.cg.v)},f:function(b){this.Pj(d.wa(b,a.cg.v))}},Text:{a:p.Bua},SelectionEnd:{a:p.qp,f:function(a){this.it(d.O(a))}},SelectionStart:{a:p.Tr,f:function(a){this.jt(d.O(a))}},VisualStyleEdit:{a:p.Lpb,f:p.ROa},NumericEditStyle:{a:function(){return d.va(this.um(),a.yp.v)},f:function(b){this.qo(d.wa(b,a.yp.v))}},HasSelection:{a:p.Ix},EditStyle:{a:p.Aba,
f:p.tna},EditStyles:{a:p.Jua},EditMouseOverStyle:{a:p.QYa,f:p.J5a},EditMouseOverStyles:{a:p.RYa},EditFocusedStyle:{a:p.OYa,f:p.I5a},EditFocusedStyles:{a:p.PYa},LabelStyle:{a:p.Mba,f:p.xna},LabelStyles:{a:p.eZa},LabelMouseOverStyle:{a:p.cZa,f:p.a6a},LabelMouseOverStyles:{a:p.dZa},SpellCheck:{a:p.Wy,f:function(a){this.YE(d.Ca(a))}},Value:{a:function(){return this.kb()},f:function(a){this.ob(a)}}},jc:{SelectText:function(a,b){this.L7(d.O(a)-1,d.O(b))}},Ue:{Re:"Value"}});c.xdc=function(a){t.K.call(this);
this.BCc=a};var t=c.u(c.xdc,c.$I);t.XN=function(){return this.BCc.Aw()||this.BCc.MZ?!1:t.k.XN.call(this)}},{rp:["PRIM_EVP","PRIM_EDIT"]});
