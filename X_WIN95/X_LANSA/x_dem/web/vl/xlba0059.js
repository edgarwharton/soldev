﻿LANSA.addComponent({id:"XLBA0059",nm:"XWS_PayPal_SimplePayButton",ot:"rp",tp:"Reusable Part",de:"[pkg-integration-lib]",tl:14020401},function(l,oI,u){var cL="ENG";var Fd={F1:{ic:0,nm:"XLB00051",an:"XLib_INT64",ft:"I",ln:8,dc:0,lb:"Int64",h1:"Int64",h2:" ",h3:" ",de:"Extended Library - Int64 Data Type",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{Payment:{da:"r"}},mt:{Visualize:{},ApplyPendingChanges:{},SetupButtonWidget:{}},ev:{OnPaymentAuthorized:{},OnPaymentExecuted:{}},co:function()
{cO.aN.call(this);this.aF("XLBA0059",Fd);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C2=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C4=this.cR("UTIL","XLBA0084");var C5=this.cR("CONFIG","XLBA0069");var C6=this.cR("SCRIPT","XLBA0062");var C7=this.cR("BUTTONWIDGET","XLBA0063");var C8=this.cF("READYCOUNTER",Fd.F1.Dc);var C9=this.cR("HASPENDINGCONFIGURE","PRIM_BOLN");var C10=this.cR("HASVISUALIZED","PRIM_BOLN");
var C11=this.cR("GPAYMENT","XLBA0070");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("TOPLEFT");C3.setColumn(C2);C3.setManage(C7);C3.setParent(C0);C3.setRow(C1);C3.iC();C4.iC();C5.iC();C6.iC();C7.setVisible(false);C7.setDisplayPosition(1);C7.setParent(this);C7.setTabPosition(1);C7.setLeft(0);C7.setTop(0);C7.setHeight(270);C7.setWidth(500);C7.iC();C8.aD();C8.iC();C9.iC();C10.iC();C11.iC();C5.aH("ONAVAILABLE",this,e2);C6.aH("ONREADY",this,e1);
C7.aH("ONPAYMENTAUTHORIZED",this,e3);C7.aH("ONPAYMENTEXECUTED",this,e4);this.setDisplayPosition(1);this.setHeight(270);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setLayoutManager(C0);}});cO.mthVISUALIZE=function(){var m=this.REF,r=l.mR(this,cO,"Visualize",23);r.ln=23;{r.ln=24;if(l.tB(m.HASVISUALIZED.get())){r.ln=25;m.UTIL.mthFATALERROR("PayPal button has been visualized");}r.ln=29;{var v1=m.GPAYMENT.getTRANSACTIONS().getItemCount();if(r.ln=30,l.n.eq(v1,0)){r.ln=31;
m.UTIL.mthFATALERROR("No transaction is specified");}else if(r.ln=33,l.n.gt(v1,1)){r.ln=34;m.UTIL.mthFATALERROR("Defining multiple transactions is not currently supported by PayPal");}r.ln=35;}r.ln=38;m.HASVISUALIZED.set(true);r.ln=39;m.HASPENDINGCONFIGURE.set(true);r.ln=41;this.mthAPPLYPENDINGCHANGES();}r.ln=42;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Script.OnReady",44);r.ln=44;{r.ln=45;m.READYCOUNTER.set(l.add(m.READYCOUNTER.get(),1));r.ln=47;this.mthAPPLYPENDINGCHANGES();
}r.ln=48;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Config.OnAvailable",50);r.ln=50;{r.ln=51;m.READYCOUNTER.set(l.add(m.READYCOUNTER.get(),1));r.ln=53;this.mthAPPLYPENDINGCHANGES();}r.ln=54;r.e();};cO.mthAPPLYPENDINGCHANGES=function(){var m=this.REF,r=l.mR(this,cO,"ApplyPendingChanges",56);r.ln=56;{r.ln=57;if(l.n.eq(m.READYCOUNTER.get(),2)){r.ln=58;m.BUTTONWIDGET.setVisible(true);r.ln=60;if(l.tB(m.HASPENDINGCONFIGURE.get())){r.ln=61;m.HASPENDINGCONFIGURE.set(false);r.ln=63;this.mthSETUPBUTTONWIDGET();
}}}r.ln=66;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#ButtonWidget.OnPaymentAuthorized",68);r.ln=68;{r.ln=69;this.fE("ONPAYMENTAUTHORIZED");}r.ln=70;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#ButtonWidget.OnPaymentExecuted",72);r.ln=72;{r.ln=73;this.fE("ONPAYMENTEXECUTED");}r.ln=74;r.e();};cO.mthSETUPBUTTONWIDGET=function(){var m=this.REF,r=l.mR(this,cO,"SetupButtonWidget",76);var C0=r.cR("JSONWRITER","XLBA0080");var C1=r.cR("JSONGENERATOR","XLBA0079");C0.iC();C1.iC();r.ln=76;{r.ln=80;
m.BUTTONWIDGET.setCLIENTID_PRODUCTION(m.CONFIG.getCLIENTID_PRODUCTION());r.ln=81;m.BUTTONWIDGET.setCLIENTID_SANDBOX(m.CONFIG.getCLIENTID_SANDBOX());r.ln=83;C1.mthGENERATEPAYMENT(C0,u,m.GPAYMENT);r.ln=84;m.BUTTONWIDGET.mthSETUP(C0.mthASSTRING());}r.ln=85;r.e();};cO.getPAYMENT=function(){return this.REF.GPAYMENT;};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XLB00051"});}},{rc:["XLBA0084","XLBA0069","XLBA0062","XLBA0063","XLBA0070"],rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_FLD","PRIM_BOLN"],
dc:["XLBA0080","XLBA0079"]});