window.LANSA.addSrc("sound",function(d,c,a,b,p){var t,m;t={ALL:0,METADATA:1,NONE:2};m={auto:0,metadata:1,none:2};c.A1a=function(a){q.K.call(this);this.v$=this.xr="";this.Epa=a};var q=c.u(c.A1a,c.qd);q.R=function(){q.k.R.call(this)};q.Ng=function(){return this.xr};q.Uu=function(a){this.xr=a};q.y5=function(){return this.v$==p?"":this.v$};q.Q7=function(a){this.v$=a};q.Rs=function(){for(var a=0;a<this.Epa.Cc();a++)this.Epa.Tt(a)===this&&this.Epa.ys(a)};d.Sa(c.A1a,"PRIM_SOND","File",{Aa:{FileName:{a:q.Ng,
f:function(a){this.Uu(d.ka(a))}},FileExtension:{a:q.y5,f:function(a){this.Q7(d.ka(a))}}},jc:{Delete:q.Rs},Ue:{Re:"FileExtension"}});c.Awb=function(a){s.K.call(this);this.FDc=a;this.jb=[]};var s=c.u(c.Awb,c.qd);s.Cc=function(){return this.jb.length};s.he=function(a){return this.Tt(a)};s.Tt=function(a){if(0>a||a>=this.jb.length)throw d.Tu(a,this.jb.length);return this.jb[a]};s.Zh=function(a,b){var d=new c.A1a(this);d.Uu(a);d.Q7(b);this.jb.push(d);(d=this.FDc.Ta())&&d.ou()};s.JIa=function(){0==this.Cc()&&
this.jb.push(new c.A1a(this));return this.Tt(0)};s.Ml=function(){this.jb=[];var a=this.FDc.Ta();a&&a.ou()};s.ys=function(a){if(null==this.Tt(a))throw d.Tu(a,this.jb.length);this.jb.splice(a,1)};s.Mkd=function(a){for(var b=!1,c=0;c<this.Cc()&&!(b=this.Tt(c).Ng()==a);c++);b&&this.ys(c)};d.Sa(c.Awb,"PRIM_SOND","Files",{Aa:{Item:{a:function(a){return this.Tt(d.O(a)-1)}}},jc:{Add:s.Zh,RemoveAll:s.Ml,Remove:function(a){return this.ys(d.O(a)-1)}},Yq:{rq:function(a){return this.Tt(d.O(a)-1)},Kw:function(){return this.Cc()}},
Ue:{Re:"Item"}});c.Uic=function(){h.K.call(this);this.Y9=0;this.K9=this.daa=!0;this.NZ=1;this.vz=new c.Awb(this);this.$i=-1;this.Yqa=this.$qa=this.lZ=!1;this.JF=50};var h=c.u(c.Uic,c.Tx);h.Be=function(){return c.Wlc};h.R=function(){h.k.R.call(this)};h.Ng=function(){return 0<this.vz.Cc()?this.vz.Tt(0).Ng():""};h.Uu=function(b){this.vz.Ml();var c=this.vz.JIa();c.Ng()!=b&&(c.Uu(b),(b=this.Ta())&&b.ou(),this.m(a.g.j))};h.y5=function(){return 0<this.vz.Cc()?this.vz.Tt(0).y5():""};h.Q7=function(b){var c=
this.vz.JIa();c.y5()!=b&&(c.Q7(b),(b=this.Ta())&&b.ou(),this.m(a.g.j))};h.e_c=function(){return this.vz};h.snb=function(){return this.Y9};h.DDb=function(b){this.Y9!=b&&(this.Y9=b,(b=this.Ta())&&b.ou(),this.m(a.g.j))};h.fob=function(){return this.lZ};h.ipb=function(){return this.daa};h.XEb=function(b){this.daa!=b&&(this.daa=b,(b=this.Ta())&&b.ou(),this.m(a.g.j))};h.Imb=function(){return this.K9};h.cDb=function(b){this.K9!=b&&(this.K9=b,(b=this.Ta())&&b.ou(),this.m(a.g.j))};h.zba=function(){return this.$i};
h.gob=function(){return this.$qa};h.eob=function(){return this.Yqa};h.Mpb=function(){return this.JF};h.SOa=function(c){c=b.Mf(c,0,100);this.JF!=c&&(this.JF=c,this.lZ=0==this.JF,(c=this.Ta())&&c.ou(),this.m(a.g.j))};h.V1c=function(){return this.NZ};h.NEb=function(b){this.NZ!=b&&(this.NZ=b,(b=this.Ta())&&b.ou(),this.m(a.g.j))};h.Play=function(){this.Ta()&&this.Ta().Play()};h.qi=function(){this.Ta()&&this.Ta().qi()};h.Lzb=function(){this.SOa(0)};d.Md(c.Uic,"PRIM_SOND",{Aa:{FileName:{a:h.Ng,f:function(a){this.Uu(d.ka(a))}},
CycleToStart:{a:h.snb,f:function(a){this.DDb(d.Ca(a))}},ShowControls:{a:h.ipb,f:function(a){this.XEb(d.Ca(a))}},Autoplay:{a:h.Imb,f:function(a){this.cDb(d.Ca(a))}},Preload:{a:function(){return d.va(this.NZ,t)},f:function(a){this.NEb(d.wa(a,t))}},Duration:{a:h.zba},IsMuted:{a:h.fob},IsPlaying:{a:h.gob},IsEnded:{a:h.eob},Volume:{a:h.Mpb,f:function(a){this.SOa(d.O(a))}}},jc:{Play:h.Play,Stop:h.qi,Mute:h.Lzb}});c.Wlc=function(a){e.K.call(this,a)};var e=c.u(c.Wlc,c.mo);e.Hd=function(b,c){this.G=document.createElement("audio");
this.G.setAttribute("LANSAHandle",this.hc);this.G.style.position="absolute";this.G.style.overflow="hidden";this.G.style.whiteSpace="nowrap";this.ou();var d=this.G,h=this;d.addEventListener("loadedmetadata",function(){h.L&&(h.L.$i=d.duration,h.L.Ga(a.Q.acc))},!1);d.addEventListener("loadeddata",function(){h.L&&h.L.Ga(a.Q.$bc)},!1);d.addEventListener("play",function(){h.L&&(h.L.$qa=!0,h.L.Yqa=!1,h.L.Ga(a.Q.woc))},!1);d.addEventListener("pause",function(){h.L&&(h.L.$qa=!1,h.L.Ga(a.Q.uvc))},!1);d.addEventListener("ended",
function(){h.L&&(h.G.pause(),h.G.paused=!0,h.L.Yqa=!0,h.L.Ga(a.Q.Ry))},!1);d.addEventListener("volumechange",function(){h.L&&(d.muted||0==d.volume?(h.G.muted=!0,h.L.lZ=!0,h.L.JF=0,h.L.Ga(a.Q.inc)):(h.L.lZ=!1,h.L.JF=Math.round(100*d.volume)))},!1);return e.k.Hd.call(this,b,c)};e.ou=function(){this.Xza("controls",this.L.daa);this.Xza("autoplay",this.L.K9);this.Xza("loop",this.L.Y9);this.G.setAttribute("preload",d.va(this.L.NZ,m));this.G.volume=0<this.L.JF?this.L.JF/100:0;this.G.muted=this.L.lZ;this.kKb()};
e.kKb=function(){this.YBb();var a=this.L.vz.Cc();if(0!=a)for(var b=0;b<a;b++){var c=this.L.vz.Tt(b);this.eGc(this.G,c.xr,c.v$)}};e.eGc=function(a,b,c){var d=document.createElement("source");d.src=b;c&&(d.type="audio/"+c);a.appendChild(d)};e.YBb=function(){var a=this.G;if(a&&(a=a.childNodes)){var b,c,d=[];for(c=0;c<a.length;c++)b=a[c],"SOURCE"==b.nodeName&&d.push(b);for(c=0;c<d.length;c++)b=d[c],b.parentNode.removeChild(b)}};e.PS=function(){return!1};e.T2a=function(){};e.Play=function(){this.G.play!==
p&&this.G.play()};e.qi=function(){this.G.pause!==p&&this.G.pause()}});
