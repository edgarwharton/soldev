window.LANSA.addSrc("video",function(d,c,a,b,p){var t,m;t={ALL:0,METADATA:1,NONE:2};m={auto:0,metadata:1,none:2};c.B1a=function(a){q.K.call(this);this.o$=this.wr="";this.ypa=a};var q=c.u(c.B1a,c.td);q.R=function(){q.k.R.call(this)};q.Lg=function(){return this.wr};q.Tu=function(a){this.wr=a};q.s5=function(){return this.o$==p?"":this.o$};q.K7=function(a){this.o$=a};q.Qs=function(){for(var a=0;a<this.ypa.Ac();a++)this.ypa.St(a)===this&&this.ypa.xs(a)};d.Sa(c.B1a,"PRIM_VDEO","File",{Aa:{FileName:{a:q.Lg,
f:function(a){this.Tu(d.ka(a))}},FileExtension:{a:q.s5,f:function(a){this.K7(d.ka(a))}}},jc:{Delete:q.Qs},Te:{Qe:"FileExtension"}});c.swb=function(a){s.K.call(this);this.rEc=a;this.jb=[]};var s=c.u(c.swb,c.td);s.Ac=function(){return this.jb.length};s.ee=function(a){return this.St(a)};s.St=function(a){if(0>a||a>=this.jb.length)throw d.Su(a,this.jb.length);return this.jb[a]};s.Xh=function(a,b){var d=new c.B1a(this);d.Tu(a);d.K7(b);this.jb.push(d);(d=this.rEc.Ta())&&d.nu()};s.EIa=function(){0==this.Ac()&&
this.jb.push(new c.B1a(this));return this.St(0)};s.Ll=function(){this.jb=[];var a=this.rEc.Ta();a&&a.nu()};s.xs=function(a){if(null==this.St(a))throw d.Su(a,this.jb.length);this.jb.splice(a,1)};s.kkd=function(a){for(var b=!1,c=0;c<this.Ac()&&!(b=this.St(c).Lg()==a);c++);b&&this.xs(c)};d.Sa(c.swb,"PRIM_VDEO","Files",{Aa:{Item:{a:function(a){return this.St(d.O(a)-1)}}},jc:{Add:s.Xh,RemoveAll:s.Ll,Remove:function(a){return this.xs(d.O(a)-1)}},Xq:{qq:function(a){return this.St(d.O(a)-1)},Jw:function(){return this.Ac()}},
Te:{Qe:"Item"}});c.Gjc=function(){h.K.call(this);this.R9=0;this.z9=this.X$=!0;this.JZ=1;this.tz=new c.swb(this);this.Zi=-1;this.hZ=this.Sqa=this.Uqa=!1;this.HF=50};var h=c.u(c.Gjc,c.Rx);h.Ae=function(){return c.Nlc};h.R=function(){h.k.R.call(this)};h.Lg=function(){return 0<this.tz.Ac()?this.tz.St(0).Lg():""};h.Tu=function(b){this.tz.Ll();var c=this.tz.EIa();c.Lg()!=b&&(c.Tu(b),(b=this.Ta())&&b.nu(),this.m(a.g.j))};h.s5=function(){return 0<this.tz.Ac()?this.tz.St(0).s5():""};h.K7=function(b){var c=
this.tz.EIa();c.s5()!=b&&(c.K7(b),(b=this.Ta())&&b.nu(),this.m(a.g.j))};h.IZc=function(){return this.tz};h.fnb=function(){return this.R9};h.qDb=function(b){this.R9!=b&&(this.R9=b,(b=this.Ta())&&b.nu(),this.m(a.g.j))};h.Tnb=function(){return this.hZ};h.Wob=function(){return this.X$};h.KEb=function(b){this.X$!=b&&(this.X$=b,(b=this.Ta())&&b.nu(),this.m(a.g.j))};h.vmb=function(){return this.z9};h.QCb=function(b){this.z9!=b&&(this.z9=b,(b=this.Ta())&&b.nu(),this.m(a.g.j))};h.tba=function(){return this.Zi};
h.Unb=function(){return this.Uqa};h.Snb=function(){return this.Sqa};h.zpb=function(){return this.HF};h.NOa=function(c){c=b.Lf(c,0,100);this.HF!=c&&(this.HF=c,this.hZ=0==this.HF,(c=this.Ta())&&c.nu(),this.m(a.g.j))};h.y1c=function(){return this.JZ};h.AEb=function(b){this.JZ!=b&&(this.JZ=b,(b=this.Ta())&&b.nu(),this.m(a.g.j))};h.Play=function(){this.Ta()&&this.Ta().Play()};h.oi=function(){this.Ta()&&this.Ta().oi()};h.yzb=function(){this.NOa(0)};h.KVc=function(){if(this.Ta()){var a=this.Ta().G;a.currentTime=
Math.min(a.duration,a.currentTime+5)}};h.JVc=function(){if(this.Ta()){var a=this.Ta().G;0<a.currentTime&&(a.currentTime-=5)}};d.Ld(c.Gjc,"PRIM_VDEO",{Aa:{FileName:{a:h.Lg,f:function(a){this.Tu(d.ka(a))}},CycleToStart:{a:h.fnb,f:function(a){this.qDb(d.Ba(a))}},ShowControls:{a:h.Wob,f:function(a){this.KEb(d.Ba(a))}},Autoplay:{a:h.vmb,f:function(a){this.QCb(d.Ba(a))}},Preload:{a:function(){return d.wa(this.JZ,t)},f:function(a){this.AEb(d.va(a,t))}},Duration:{a:h.tba},IsMuted:{a:h.Tnb},IsPlaying:{a:h.Unb},
IsEnded:{a:h.Snb},Volume:{a:h.zpb,f:function(a){this.NOa(d.O(a))}}},jc:{Play:h.Play,Stop:h.oi,Mute:h.yzb,FrameForward:h.KVc,FrameBackward:h.JVc}});c.Nlc=function(a){e.K.call(this,a)};var e=c.u(c.Nlc,c.lo);e.Gd=function(b,c){this.G=document.createElement("video");this.G.setAttribute("LANSAHandle",this.hc);this.G.style.position="absolute";this.G.style.overflow="hidden";this.G.style.whiteSpace="nowrap";this.nu();var d=this.G,h=this;d.addEventListener("loadedmetadata",function(){h.L&&(h.L.Zi=d.duration,
h.L.Ga(a.Q.Lbc))},!1);d.addEventListener("loadeddata",function(){h.L&&h.L.Ga(a.Q.Kbc)},!1);d.addEventListener("play",function(){h.L&&(h.L.Uqa=!0,h.L.Sqa=!1,h.L.Ga(a.Q.foc))},!1);d.addEventListener("pause",function(){h.L&&(h.L.Uqa=!1,h.L.Ga(a.Q.bvc))},!1);d.addEventListener("ended",function(){h.L&&(h.G.pause(),h.G.paused=!0,h.L.Sqa=!0,h.L.Ga(a.Q.Py))},!1);d.addEventListener("volumechange",function(){h.L&&(d.muted||0==d.volume?(h.G.muted=!0,h.L.hZ=!0,h.L.HF=0,h.L.Ga(a.Q.Smc)):(h.L.hZ=!1,h.L.HF=Math.round(100*
d.volume)))},!1);return e.k.Gd.call(this,b,c)};e.nu=function(){this.Sza("controls",this.L.X$);this.Sza("autoplay",this.L.z9);this.Sza("loop",this.L.R9);this.G.setAttribute("preload",d.wa(this.L.JZ,m));this.G.volume=0<this.L.HF?this.L.HF/100:0;this.G.muted=this.L.hZ;this.YJb()};e.YJb=function(){this.LBb();var a=this.L.tz.Ac();if(0!=a)for(var b=0;b<a;b++){var c=this.L.tz.St(b);this.KFc(this.G,c.wr,c.o$)}};e.KFc=function(a,b,c){var d=document.createElement("source");d.src=b;c&&(d.type="video/"+c);a.appendChild(d)};
e.LBb=function(){var a=this.G;if(a&&(a=a.childNodes)){var b,c,d=[];for(c=0;c<a.length;c++)b=a[c],"SOURCE"==b.nodeName&&d.push(b);for(c=0;c<d.length;c++)b=d[c],b.parentNode.removeChild(b)}};e.LS=function(){return!1};e.O2a=function(){};e.Play=function(){this.G.play!==p&&this.G.play()};e.oi=function(){this.G.pause!==p&&this.G.pause()}});
