﻿LANSA.addComponent({id:"BPFPNL018",nm:"BPFPortalApplicationBar",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Portal Main Application Bar",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",pt:{AppBar:{da:"r"}},mt:{Populate:{},HandleDeviceChanged:{},SetForMobile:{},SetForDesktop:{}},ev:{UserIconClicked:{}},co:function(){cO.aN.call(this);var C0=this.cA("SESSION","BPFAPP002");var C1=this.cA("NAVIGATE","BPFAPP001");var C2=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");var C3=this.cR("PANELLAYOUT","PRIM_TBLO");
var C4=this.cR("PANELLAYOUTCOLUMN1","PRIM_TBLO","Column");var C5=this.cR("PANELLAYOUTROW1","PRIM_TBLO","Row");var C6=this.cR("PANELLAYOUTITEM1","PRIM_TBLO","Item");var C7=this.cR("APPBARLAYOUT","PRIM_TBLO");var C8=this.cR("APPBARLAYOUTROW1","PRIM_TBLO","Row");var C9=this.cR("APPBARLAYOUTCOLUMN1","PRIM_TBLO","Column");var C10=this.cR("APPBARLAYOUTCOLUMN2","PRIM_TBLO","Column");var C11=this.cR("APPBARLAYOUTCOLUMN3","PRIM_TBLO","Column");var C12=this.cR("APPBARLAYOUTITEM1","PRIM_TBLO","Item");var C13=this.cR("APPBARLAYOUTITEM2","PRIM_TBLO","Item");
var C14=this.cR("CLEARBACKGROUDSTYLE","PRIM_VS","Style");var C15=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C16=this.cR("FONTWEIGHT500STYLE","PRIM_VS","Style");var C17=this.cR("APPBAR","PRIM_MD","AppBar");var C18=this.cR("APPBARUSERTEXTICON","PRIM_MD","Label");var C19=this.cR("APPBARPORTALNAME","PRIM_MD","Label");this.cD("PORTALNAVDRAWER");this.cD("PORTALVIEWS");this.cD("CURRENTUSER");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.setCursor("HAND");C2.iC();
C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(1);C5.setParent(C3);C5.iC();C6.setAlignment("TOPCENTER");C6.setColumn(C4);C6.setManage(C17);C6.setParent(C3);C6.setRow(C5);C6.iC();C7.iC();C8.setDisplayPosition(1);C8.setParent(C7);C8.iC();C9.setDisplayPosition(1);C9.setParent(C7);C9.setUnits("PIXELS");C9.setWidth(56);C9.iC();C10.setDisplayPosition(2);C10.setParent(C7);C10.setUnits("PIXELS");C10.setWidth(224);C10.iC();C11.setDisplayPosition(3);C11.setParent(C7);C11.iC();
C12.setParent(C7);C12.setManage(C18);C12.setAlignment("CENTERRIGHT");C12.setColumn(C11);C12.setRow(C8);C12.setSizing("CONTENTWIDTHANDHEIGHT");C12.setMarginRight(16);C12.setFlow("RIGHT");C12.iC();C13.setParent(C7);C13.setManage(C19);C13.setRow(C8);C13.setSizing("CONTENTHEIGHTFITTOWIDTH");C13.setColumn(C10);C13.setAlignment("CENTERLEFT");C13.setMarginRight(8);C13.iC();C14.setBackgroundBrush(C15);C14.setFontWeight("WEIGHT500");C14.iC();C15.setColor("TRANSPARENT");C15.setOpacity(0);C15.iC();C16.setFontWeight("WEIGHT500");
C16.iC();C17.setDisplayPosition(1);C17.setIcon("menu");C17.setParent(this);C17.setTabPosition(1);C17.setThemeDrawStyle("ForegroundSecondary+Heading3+BottomDivider");C17.setHeight(64);C17.setWidth(1920);C17.setLayoutManager(C7);C17.setStyle(C14);C17.iC();C18.setDisplayPosition(1);C18.setLeft(1738);C18.setParent(C17);C18.setTabPosition(1);C18.setThemeDrawStyle("ForegroundSecondary");C18.setTop(18);C18.setIcon("account_circle");C18.setHeight(28);C18.setWidth(166);C18.setCaptionMarginRight(16);C18.setCaption("user@lansa.com");
C18.setIconAlignment("AFTERCAPTION");C18.setPaddingLeft(12);C18.setPaddingRight(12);C18.setPaddingBottom(2);C18.setPaddingTop(2);C18.setStyle(C16);C18.setEllipses(false);C18.iC();C19.setCaption("myPortal");C19.setDisplayPosition(2);C19.setLeft(56);C19.setParent(C17);C19.setTabPosition(2);C19.setThemeDrawStyle("ForegroundMediumPrimary+Heading3");C19.setTop(12);C19.setHeight(40);C19.setWidth(216);C19.setIcon("cloud");C19.setIconHeight(40);C19.setCaptionMarginLeft(16);C19.setStyle(C16);C19.iC();l.WEB().aH("DEVICECHANGED",this,e3);
C0.aH("LOGOUTREQUESTED",this,e5);C18.aH("CLICK",this,e2);this.setDisplayPosition(1);this.setHeight(64);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(1920);this.setLayoutManager(C3);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",63);r.ln=63;{r.ln=66;this.setrefPORTALNAVDRAWER(l.gW("BPFPORTAL").getNAVDRAWER());r.ln=67;this.setrefPORTALVIEWS(l.gW("BPFPORTAL").getVIEWSPANEL());r.ln=69;m.APPBARPORTALNAME.setIcon(l.gW("BPFPORTAL").getAPPICON());
r.ln=70;m.APPBARPORTALNAME.setCaption(l.gW("BPFPORTAL").getAPPNAME());r.ln=73;this.setrefCURRENTUSER(m.SESSION.ref.getCURRENTUSER());r.ln=76;this.mthHANDLEDEVICECHANGED();r.ln=79;m.APPBARUSERTEXTICON.getStyles().mthADD(m.NAVIGATIONLINKSTYLE);r.ln=82;this.mthPOPULATE();}r.ln=84;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#AppBarUserTextIcon.Click",86);r.ln=86;{r.ln=88;this.fE("USERICONCLICKED");}r.ln=90;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",93);r.ln=93;{
r.ln=95;this.mthHANDLEDEVICECHANGED();}r.ln=97;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CurrentUser.OnSetAccountDetailsCompleted",101);r.ln=101;{r.ln=103;m.APPBARUSERTEXTICON.setCaption(m.SESSION.ref.getCURRENTUSER().getEMAILADRESS());}r.ln=105;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Session.LogoutRequested",108);r.ln=108;{r.ln=110;m.APPBARUSERTEXTICON.setCaption("");}r.ln=112;r.e();};cO.mthPOPULATE=function(){var m=this.REF,r=l.mR(this,cO,"Populate",117);
r.ln=117;{r.ln=120;if(l.s.eq(l.WEB().getDevice(),"DESKTOP")){r.ln=122;m.APPBARUSERTEXTICON.setCaption(m.SESSION.ref.getCURRENTUSER().getEMAILADRESS());}}r.ln=126;r.e();};cO.mthHANDLEDEVICECHANGED=function(){var r=l.mR(this,cO,"HandleDeviceChanged",129);r.ln=129;{r.ln=131;{var v1=l.WEB().getDevice();if(r.ln=133,l.s.eq(v1,"MOBILE")){r.ln=135;this.mthSETFORMOBILE();}else if(r.ln=137,l.s.eq(v1,"TABLET")){r.ln=139;this.mthSETFORDESKTOP();}else if(r.ln=141,l.s.eq(v1,"DESKTOP")){r.ln=143;this.mthSETFORDESKTOP();
}r.ln=145;}}r.ln=147;r.e();};cO.mthSETFORMOBILE=function(){var m=this.REF,r=l.mR(this,cO,"SetForMobile",150);r.ln=150;{r.ln=153;m.APPBARUSERTEXTICON.setCaption("");}r.ln=155;r.e();};cO.mthSETFORDESKTOP=function(){var m=this.REF,r=l.mR(this,cO,"SetForDesktop",158);r.ln=158;{r.ln=161;if((m.SESSION.ref.getCURRENTUSER()!=null)){r.ln=162;m.APPBARUSERTEXTICON.setCaption(m.SESSION.ref.getCURRENTUSER().getEMAILADRESS());}}r.ln=165;r.e();};cO.getAPPBAR=function(){return this.REF.APPBAR;};cO.setrefPORTALNAVDRAWER=function(rn)
{this.sR("PORTALNAVDRAWER",rn);};cO.setrefPORTALVIEWS=function(rn){this.sR("PORTALVIEWS",rn);};cO.setrefCURRENTUSER=function(rn){if(this.REF.CURRENTUSER!=null){this.REF.CURRENTUSER.rH("ONSETACCOUNTDETAILSCOMPLETED",this,e4);}this.sR("CURRENTUSER",rn);if(this.REF.CURRENTUSER!=null){this.REF.CURRENTUSER.aH("ONSETACCOUNTDETAILSCOMPLETED",this,e4);}};},{rc:["BPFAPP002","BPFAPP001"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_VS.SolidBrush","PRIM_MD.AppBar","PRIM_MD.Label"],
dc:["BPFPNL019","BPFPNL020","BPFCLS002"]});