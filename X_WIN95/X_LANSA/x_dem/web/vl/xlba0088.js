﻿LANSA.addComponent({id:"XLBA0088",nm:"XWS_Google_RecaptchaV2Visual",ot:"rp",tp:"Reusable Part",de:"[pkg-integration-lib]",tl:14020401},function(l,oI,u){var cL="ENG";var Fd={F1:{ic:0,nm:"XLB00051",an:"XLib_INT64",ft:"I",ln:8,dc:0,lb:"Int64",h1:"Int64",h2:" ",h3:" ",de:"Extended Library - Int64 Data Type",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{IsReady:{da:"na"},Response:{da:"na"}},mt:{Visualize:{},ApplyPendingChanges:{},SetupWidget:{}},ev:{OnError:{ps:{"Message":{pt:"i"}}}},
co:function(){cO.aN.call(this);this.aF("XLBA0088",Fd);var C0=this.cR("LOADINGMESSAGE","PRIM_MD","Alert");var C1=this.cR("LAYOUT1","PRIM_TBLO");var C2=this.cR("LAYOUT1ITEM3","PRIM_TBLO","Item");var C3=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C4=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C5=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C6=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C7=this.cR("UTIL","XLBA0084");var C8=this.cR("CONFIG","XLBA0087");var C9=this.cR("SCRIPT","XLBA0090");
var C10=this.cR("WIDGET","XLBA0089");var C11=this.cF("READYCOUNTER",Fd.F1.Dc);var C12=this.cR("HASPENDINGCONFIGURE","PRIM_BOLN");var C13=this.cR("HASVISUALIZED","PRIM_BOLN");var C14=this.cR("GRECAPTCHATHEME","PRIM_DC","UnicodeString");C0.setVisible(true);C0.setCaption("Loading reCAPTCHA...");C0.setDisplayPosition(1);C0.setDuration(3000);C0.setLeft(-122);C0.setParent(this);C0.setTabPosition(2);C0.setThemeDrawStyle("LightTitle");C0.setTop(11);C0.setWidth(548);C0.iC();C1.iC();C2.setManage(C10);C2.setParent(C1);
C2.setRow(C4);C2.setColumn(C5);C2.iC();C3.setManage(C0);C3.setParent(C1);C3.setRow(C4);C3.setSizing("NONE");C3.setColumn(C5);C3.iC();C4.setDisplayPosition(1);C4.setParent(C1);C4.iC();C5.setDisplayPosition(1);C5.setParent(C1);C5.iC();C6.setAlignment("TOPLEFT");C6.setColumn(C5);C6.setParent(C1);C6.setRow(C4);C6.iC();C7.iC();C8.iC();C9.iC();C10.setDisplayPosition(2);C10.setParent(this);C10.setTabPosition(1);C10.setLeft(0);C10.setTop(0);C10.setHeight(78);C10.setWidth(304);C10.iC();C11.aD();C11.iC();C12.iC();
C13.iC();C14.iC();C8.aH("ONAVAILABLE",this,e4);C9.aH("ONREADY",this,e1);C10.aH("INITIALIZE",this,e2);C10.aH("ONERROR",this,e3);this.setHeight(78);this.setWidth(304);this.setLayoutManager(C1);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);}});cO.mthVISUALIZE=function(){var m=this.REF,r=l.mR(this,cO,"Visualize",29);r.ln=29;{r.ln=30;if(l.tB(m.HASVISUALIZED.get())){r.ln=31;m.UTIL.mthFATALERROR("reCAPTCHA has been visualized");}r.ln=34;m.HASVISUALIZED.set(true);r.ln=35;
m.HASPENDINGCONFIGURE.set(true);r.ln=37;this.mthAPPLYPENDINGCHANGES();}r.ln=38;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Script.OnReady",40);r.ln=40;{r.ln=41;m.READYCOUNTER.set(l.add(m.READYCOUNTER.get(),1));r.ln=43;this.mthAPPLYPENDINGCHANGES();}r.ln=44;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Widget.Initialize",46);r.ln=46;{r.ln=47;m.READYCOUNTER.set(l.add(m.READYCOUNTER.get(),1));r.ln=49;this.mthAPPLYPENDINGCHANGES();}r.ln=50;r.e();};function e3(sender,Ps)
{var r=l.eR(this,cO,"#Widget.OnError",52);var P0=Ps.r("MESSAGE");r.ln=52;{r.ln=54;{var eP=l.ePs();eP.cR("MESSAGE","PRIM_DC","UnicodeString");eP.r("MESSAGE").set(P0.get());this.fE("ONERROR",eP);eP.e();}}r.ln=56;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Config.OnAvailable",58);r.ln=58;{r.ln=59;m.READYCOUNTER.set(l.add(m.READYCOUNTER.get(),1));r.ln=61;this.mthAPPLYPENDINGCHANGES();}r.ln=62;r.e();};cO.mthAPPLYPENDINGCHANGES=function(){var m=this.REF,r=l.mR(this,cO,"ApplyPendingChanges",64);
r.ln=64;{r.ln=65;if(this.getISREADY()){r.ln=66;m.WIDGET.setVisible(true);r.ln=67;m.LOADINGMESSAGE.setVisible(false);r.ln=69;if(l.tB(m.HASPENDINGCONFIGURE.get())){r.ln=70;m.HASPENDINGCONFIGURE.set(false);r.ln=72;this.mthSETUPWIDGET();}}}r.ln=75;r.e();};cO.mthSETUPWIDGET=function(){var m=this.REF,r=l.mR(this,cO,"SetupWidget",77);r.ln=77;{r.ln=78;m.WIDGET.setSITEKEY(m.CONFIG.getRECAPTCHA_V2_SITEKEY());r.ln=80;m.WIDGET.mthSETUP();}r.ln=81;r.e();};cO.mthGETISREADY=function(){var m=this.REF,r=l.pR(this,cO,"GetIsReady",83);
var P0=r.cP("RESULT","PRIM_BOLN");r.ln=83;{r.ln=86;P0.set(l.n.eq(m.READYCOUNTER.get(),3));}r.ln=87;return r.rV(P0.get());};cO.mthGETRESPONSE=function(){var m=this.REF,r=l.pR(this,cO,"GetResponse",89);var P0=r.cP("RESULT","PRIM_DC","UnicodeString");r.ln=89;{r.ln=92;P0.set(m.WIDGET.mthGETRESPONSE());}r.ln=93;return r.rV(P0.get());};cO.getISREADY=function(){return this.mthGETISREADY();};cO.getRESPONSE=function(){return this.mthGETRESPONSE();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XLB00051"});
}},{rc:["XLBA0084","XLBA0087","XLBA0090","XLBA0089"],rp:["PRIM_PANL","PRIM_MD.Alert","PRIM_TBLO","PRIM_TBLO.Item","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_FLD","PRIM_BOLN","PRIM_DC.UnicodeString"]});