﻿LANSA.addComponent({id:"VF_UI009O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Generic Busy Panel",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{CurrentlyOverPanel:{da:"r"},BusyText:{da:"na"}},mt:{zInt_ShoworHideBusyPanel:{},zInt_GoBusy:{ps:{"OverPanel":{pt:"i"},"ShowBusyText":{pt:"i"},"Animated":{pt:"i"},"WaitFor":{pt:"i"}}},zInt_GoFree:{}},co:function(){cO.aN.call(this);this.aF("VF_UI009O",Fd);var C0=this.cR("BUSYANIMATEDIMAGE","PRIM_IMAG");var C1=this.cR("BUSYSTATICIMAGE","PRIM_IMAG");var C2=this.cR("BUSYTEXT","PRIM_LABL");var C3=this.cA("USYSTEM","VF_SY001O");this.cD("CURRENTLYOVERPANEL");var C5=this.cR("CURRENTLYANIMATED","PRIM_BOLN");
var C6=this.cR("BACKGROUNDSTYLE","PRIM_VS","Style");var C7=this.cR("INITIALIZED","PRIM_BOLN");var C8=this.cF("IMAGESIZE",Fd.F1.Dc);var C9=this.cR("WAITFORBUSYTIMER","PRIM_TIMR");C0.setDisplayPosition(3);C0.setHeight(32);C0.setLeft(0);C0.setParent(this);C0.setTabPosition(3);C0.setTabStop(false);C0.setTop(0);C0.setWidth(32);C0.setImageSizing("BESTFIT");C0.iC();C1.setDisplayPosition(2);C1.setHeight(32);C1.setLeft(0);C1.setParent(this);C1.setTabPosition(2);C1.setTabStop(false);C1.setTop(0);C1.setWidth(32);
C1.setImageSizing("BESTFIT");C1.iC();C2.setDisplayPosition(1);C2.setHeight(20);C2.setLeft(0);C2.setParent(this);C2.setTabPosition(1);C2.setTabStop(false);C2.setAlignment("CENTER");C2.setVerticalAlignment("CENTER");C2.iC();if((C3!=null)&&(C3.iI()==false)){C3.iC();}C5.iC();C6.iC();C7.iC();C8.aD();C8.iC();C9.setInterval(0);C9.iC();C9.aH("TICK",this,e2);this.setDisplayPosition(1);this.setHeight(293);this.setLeft(0);this.setTabPosition(1);this.setTabStop(false);this.setTop(0);this.setWidth(579);this.setOpacity(80);
this.setVisible(false);this.setStyle(C6);}});function sr1(){var m=this.REF,r=l.sR(this,cO,"Initialize",29);r.ln=29;{r.ln=31;if(l.b.Not(m.INITIALIZED.get())){r.ln=33;m.INITIALIZED.set(true);r.ln=35;m.BACKGROUNDSTYLE.setNormBackColor(m.USYSTEM.ref.getCURRENTTHEME().getFLOATINGPANEL_TITLESTYLE().getNormBackColor());r.ln=37;this.setOpacity(m.USYSTEM.ref.getCURRENTTHEME().getBUSYOVERLAY_OPACITY());r.ln=39;m.IMAGESIZE.set(16);r.ln=41;m.BUSYANIMATEDIMAGE.setHeight(m.IMAGESIZE.get());m.BUSYANIMATEDIMAGE.setWidth(m.IMAGESIZE.get());
m.BUSYSTATICIMAGE.setHeight(m.IMAGESIZE.get());m.BUSYSTATICIMAGE.setWidth(m.IMAGESIZE.get());r.ln=43;m.BUSYANIMATEDIMAGE.setImage(m.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE("LOADINGWAIT.GIF","LARGE","O",false));r.ln=45;m.BUSYSTATICIMAGE.setImage(m.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE("HOURGLASS_GRAY.PNG","LARGE","O",false));}}r.ln=49;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#CurrentlyOverPanel.SizeChanged",53);r.ln=53;{r.ln=55;this.mthZINT_SHOWORHIDEBUSYPANEL();}r.ln=57;r.e();};cO.mthZINT_SHOWORHIDEBUSYPANEL=function()
{var m=this.REF,r=l.mR(this,cO,"zInt_ShoworHideBusyPanel",60);r.ln=60;{r.ln=62;if((m.CURRENTLYOVERPANEL==null)){r.ln=64;this.setParent(null);this.setVisible(false);}else{r.ln=68;if((this.getParent()!==m.CURRENTLYOVERPANEL)){r.ln=69;this.setParent(m.CURRENTLYOVERPANEL);this.setVisible(true);this.setDisplayPosition(1);}r.ln=72;this.setWidth(m.CURRENTLYOVERPANEL.getWidth());this.setHeight(m.CURRENTLYOVERPANEL.getHeight());r.ln=74;if(l.tB(m.CURRENTLYANIMATED.get())){r.ln=75;m.BUSYSTATICIMAGE.setVisible(false);
r.ln=76;m.BUSYANIMATEDIMAGE.setTop(l.div(l.sub(this.getHeight(),m.IMAGESIZE.get()),2));m.BUSYANIMATEDIMAGE.setLeft(l.div(l.sub(this.getWidth(),m.IMAGESIZE.get()),2));m.BUSYANIMATEDIMAGE.setVisible(true);}else{r.ln=78;m.BUSYANIMATEDIMAGE.setVisible(false);r.ln=79;m.BUSYSTATICIMAGE.setTop(l.div(l.sub(this.getHeight(),m.IMAGESIZE.get()),2));m.BUSYSTATICIMAGE.setLeft(l.div(l.sub(this.getWidth(),m.IMAGESIZE.get()),2));m.BUSYSTATICIMAGE.setVisible(true);}r.ln=82;m.BUSYTEXT.setLeft(0);m.BUSYTEXT.setTop(l.add(l.div(l.sub(this.getHeight(),m.IMAGESIZE.get()),2),22));
m.BUSYTEXT.setWidth(this.getWidth());m.BUSYTEXT.setVisible(true);}}r.ln=86;r.e();};cO.mthZINT_GOBUSY=function(p0,p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"zInt_GoBusy",89);var P0=r.cPD("OVERPANEL");var P1=r.cPD("SHOWBUSYTEXT");var P2=r.cPD("ANIMATED");var P3=r.cPD("WAITFOR");P0=r.sR("OVERPANEL",p0);P1=r.sR("SHOWBUSYTEXT",p1);P2=r.sR("ANIMATED",p2);P3=r.sR("WAITFOR",p3);r.ln=89;{r.ln=95;sr1.call(this);r.ln=97;if(l.tB(l.s.eq(P1.get(),"*NONE"))){r.ln=98;m.BUSYTEXT.setCaption("");}else{r.ln=100;m.BUSYTEXT.setCaption(P1.get());
}r.ln=103;m.CURRENTLYANIMATED.set(P2.get());r.ln=105;this.setrefCURRENTLYOVERPANEL(P0);r.ln=107;if(l.n.eq(P3.get(),0)){r.ln=108;this.mthZINT_SHOWORHIDEBUSYPANEL();r.ln=109;m.WAITFORBUSYTIMER.setInterval(0);}else{r.ln=111;m.WAITFORBUSYTIMER.setInterval(P3.get());}}r.ln=114;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#WaitForBusyTimer.Tick",118);r.ln=118;{r.ln=120;m.WAITFORBUSYTIMER.setInterval(0);r.ln=122;this.mthZINT_SHOWORHIDEBUSYPANEL();}r.ln=124;r.e();};cO.mthZINT_GOFREE=function()
{var m=this.REF,r=l.mR(this,cO,"zInt_GoFree",128);r.ln=128;{r.ln=130;if((m.CURRENTLYOVERPANEL!=null)){r.ln=132;if(l.n.ne(m.WAITFORBUSYTIMER.getInterval(),0)){r.ln=133;m.WAITFORBUSYTIMER.setInterval(0);}r.ln=136;sr1.call(this);r.ln=138;this.setrefCURRENTLYOVERPANEL(null);r.ln=140;this.mthZINT_SHOWORHIDEBUSYPANEL();}}r.ln=144;r.e();};cO.getCURRENTLYOVERPANEL=function(){return this.REF.CURRENTLYOVERPANEL;};cO.setBUSYTEXT=function(v){this.REF.BUSYTEXT.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.setrefCURRENTLYOVERPANEL=function(rn){if(this.REF.CURRENTLYOVERPANEL!=null){this.REF.CURRENTLYOVERPANEL.rH("SIZECHANGED",this,e1);}this.sR("CURRENTLYOVERPANEL",rn);if(this.REF.CURRENTLYOVERPANEL!=null){this.REF.CURRENTLYOVERPANEL.aH("SIZECHANGED",this,e1);}};},{rc:["VF_SY001O"],rp:["PRIM_PANL","PRIM_IMAG","PRIM_LABL","PRIM_BOLN","PRIM_VS.Style","PRIM_FLD","PRIM_TIMR"],dp:["PRIM_PANL"]});