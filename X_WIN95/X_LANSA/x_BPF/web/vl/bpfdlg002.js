﻿LANSA.addComponent({id:"BPFDLG002",nm:"BPFCreateAccountDialog",ot:"wv",tp:"Dialog",pt:"ap",de:"Portal Create Account Dialog",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_DLG",pt:{NewAccount:{da:"r"}},mt:{ShowDialog:{},HandleClose:{},SetWaitingState:{ps:{"ToState":{pt:"i"}}},ChangetoPanel:{ps:{"ToPanel":{pt:"i"}}},HandleDeviceChanged:{},DestroyDialogObjects:{}},co:function(){cO.aN.call(this);this.cD("SESSION");this.cD("NAVIGATE");var C2=this.cR("STYLE1","PRIM_VS","Style");var C3=this.cR("BRUSH1","PRIM_VS","SolidBrush");
var C4=this.cR("DIALOGLAYOUT","PRIM_TBLO");var C5=this.cR("DIALOGLAYOUTCOLUMN1","PRIM_TBLO","Column");var C6=this.cR("DIALOGLAYOUTCOLUMN2","PRIM_TBLO","Column");var C7=this.cR("DIALOGLAYOUTCOLUMN3","PRIM_TBLO","Column");var C8=this.cR("DIALOGLAYOUTROW1","PRIM_TBLO","Row");var C9=this.cR("DIALOGLAYOUTROW2","PRIM_TBLO","Row");var C10=this.cR("DIALOGLAYOUTROW3","PRIM_TBLO","Row");var C11=this.cR("DIALOGLAYOUTROW4","PRIM_TBLO","Row");var C12=this.cR("DIALOGLAYOUTITEM3","PRIM_TBLO","Item");var C13=this.cR("DIALOGLAYOUTITEM4","PRIM_TBLO","Item");
var C14=this.cR("DIALOGLAYOUTITEM5","PRIM_TBLO","Item");var C15=this.cR("DIALOGLAYOUTITEM1","PRIM_TBLO","Item");var C16=this.cR("PROGRESSBAR","PRIM_MD","ProgressBar");var C17=this.cR("COVERPANEL","PRIM_PANL");var C18=this.cR("DIALOGTITLE","PRIM_MD","Label");var C19=this.cR("VIEWPANELS","PRIM_MD","ViewContainer");this.cD("CURRENTPANEL");this.cD("NEXTPANEL");this.cD("NEWACCOUNT");C2.setBackgroundBrush(C3);C2.iC();C3.setColor("255:255:255");C3.setOpacity(75);C3.iC();C4.iC();C5.setDisplayPosition(1);
C5.setParent(C4);C5.setUnits("PIXELS");C5.setWidth(40);C5.iC();C6.setDisplayPosition(2);C6.setParent(C4);C6.iC();C7.setDisplayPosition(3);C7.setParent(C4);C7.setUnits("PIXELS");C7.setWidth(40);C7.iC();C8.setDisplayPosition(1);C8.setParent(C4);C8.setHeight(48);C8.setUnits("PIXELS");C8.iC();C9.setDisplayPosition(3);C9.setParent(C4);C9.setMinHeight(426);C9.iC();C10.setDisplayPosition(4);C10.setParent(C4);C10.setHeight(36);C10.setUnits("PIXELS");C10.iC();C11.setDisplayPosition(2);C11.setParent(C4);C11.setHeight(26);
C11.setUnits("PIXELS");C11.iC();C12.setAlignment("TOPCENTER");C12.setColumn(C5);C12.setManage(C16);C12.setParent(C4);C12.setRow(C8);C12.setSizing("FITTOWIDTH");C12.setColumnSpan(3);C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C6);C13.setManage(C18);C13.setParent(C4);C13.setRow(C11);C13.setSizing("CONTENTWIDTHFITTOHEIGHT");C13.iC();C14.setAlignment("TOPCENTER");C14.setColumn(C5);C14.setManage(C17);C14.setParent(C4);C14.setRow(C8);C14.setRowSpan(4);C14.setColumnSpan(3);C14.setMarginTop(4);C14.setMarginBottom(1);
C14.iC();C15.setManage(C19);C15.setParent(C4);C15.setRow(C9);C15.setColumn(C6);C15.iC();C16.setDisplayPosition(2);C16.setMode("INDETERMINATE");C16.setParent(this);C16.setTabPosition(1);C16.setThemeDrawStyle("Theme100+ForegroundTheme500");C16.setWidth(748);C16.setVisible(false);C16.iC();C17.setDisplayPosition(1);C17.setHeight(533);C17.setLeft(0);C17.setParent(this);C17.setTabPosition(3);C17.setTabStop(false);C17.setTop(4);C17.setWidth(748);C17.setStyle(C2);C17.setVisible(false);C17.iC();C18.setDisplayPosition(3);
C18.setLeft(40);C18.setParent(this);C18.setTabPosition(2);C18.setThemeDrawStyle("Heading3+ForegroundMediumPrimary");C18.setTop(48);C18.setWidth(10);C18.setHeight(26);C18.iC();C19.setParent(this);C19.setDisplayPosition(4);C19.setTabPosition(4);C19.setTop(74);C19.setLeft(40);C19.setHeight(428);C19.setWidth(668);C19.iC();l.WEB().aH("DEVICECHANGED",this,e3);this.setThemeDrawStyle("Card");this.setHeight(538);this.setWidth(748);this.setLayoutManager(C4);this.setVerticalScroll(true);this.aH("CREATEINSTANCE",this,e1);
this.aH("PREPARE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",53);r.ln=53;{r.ln=55;this.setrefSESSION(l.gW("BPFPORTAL").getSESSION());r.ln=56;this.setrefNAVIGATE(l.gW("BPFPORTAL").getNAVIGATE());}r.ln=58;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",61);r.ln=61;{r.ln=64;this.setrefNEWACCOUNT(l.cC("BPFCLS002"));r.ln=67;m.DIALOGTITLE.setCaption(l.gW("BPFPORTAL").getAPPNAME());r.ln=70;this.mthCHANGETOPANEL(m.NAVIGATE.getCURRENTEVENT().getRELATEDVIEW());
r.ln=71;this.mthHANDLEDEVICECHANGED();}r.ln=73;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",76);r.ln=76;{r.ln=78;this.mthHANDLEDEVICECHANGED();}r.ln=80;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Navigate.LoginDialogRequested",83);r.ln=83;{r.ln=86;this.mthHANDLECLOSE();}r.ln=88;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Navigate.OnNavigationEvent",90);var P0=Ps.r("NAME");r.ln=90;{r.ln=95;if(l.tB((l.s.eq(P0.get(),"CREATEUSERSECURITY")&&l.b.IsFalse(m.NEWACCOUNT.getDETAILSSYNCED()))))
{r.ln=97;l.WEB().getHistory().mthGOBACK(u);r.e();return;}r.ln=103;if(l.tB((l.s.eq(P0.get(),"CREATEUSERTERMS")&&m.NEWACCOUNT.getACCOUNTCREATED()))){r.ln=105;m.NAVIGATE.mthBACKTOTARGET("INITIAL",u,u);r.e();return;}r.ln=110;this.setVerticalScrollPos(0);r.ln=111;this.mthCHANGETOPANEL(m.NAVIGATE.getCURRENTEVENT().getRELATEDVIEW());}r.ln=113;r.e();};cO.mthSHOWDIALOG=function(){var m=this.REF,r=l.mR(this,cO,"ShowDialog",118);r.ln=118;{r.ln=121;if(l.s.ne(l.s.UpperCase(m.NAVIGATE.getCURRENTEVENT().getEVENTNAME()),"CREATEUSERACCOUNT"))
{r.ln=123;m.NAVIGATE.mthTO("CREATEUSERACCOUNT","REPLACE",false,u);}r.ln=128;this.mthSHOW();}r.ln=130;r.e();};cO.mthHANDLECLOSE=function(){var r=l.mR(this,cO,"HandleClose",132);r.ln=132;{r.ln=134;this.mthDESTROYDIALOGOBJECTS();r.ln=135;this.mthCLOSE();}r.ln=137;r.e();};cO.mthSETWAITINGSTATE=function(p0){var m=this.REF,r=l.mR(this,cO,"SetWaitingState",140);var P0=r.cP("TOSTATE","PRIM_ALPH");P0.set(p0);r.ln=140;{r.ln=143;if(l.tB(l.s.eq(P0.get(),"ON"))){r.ln=145;m.COVERPANEL.setVisible(true);m.PROGRESSBAR.setVisible(true);
r.ln=146;m.COVERPANEL.setDisplayPosition(1);}else{r.ln=150;m.COVERPANEL.setVisible(false);m.PROGRESSBAR.setVisible(false);}}r.ln=154;r.e();};cO.mthCHANGETOPANEL=function(p0){var m=this.REF,r=l.mR(this,cO,"ChangetoPanel",157);var P0=r.cPD("TOPANEL");P0=r.sR("TOPANEL",p0);r.ln=157;{r.ln=160;if(m.NEWACCOUNT.getACCOUNTCREATED()){r.e();return;}r.ln=166;P0.setParent(m.VIEWPANELS);r.ln=169;if((m.CURRENTPANEL!=null)){r.ln=171;if((m.CURRENTPANEL!==P0)){r.ln=174;if(l.b.IsFalse(m.VIEWPANELS.getIsAnimating()))
{r.ln=176;if(l.and((m.CURRENTPANEL!=null),(P0!=null))){}r.ln=182;P0.mthSHOW();}}}else{r.ln=190;P0.mthSHOW();}r.ln=195;this.setrefCURRENTPANEL(P0);}r.ln=197;r.e();};cO.mthHANDLEDEVICECHANGED=function(){var m=this.REF,r=l.mR(this,cO,"HandleDeviceChanged",200);r.ln=200;{r.ln=204;{var v1=l.WEB().getDevice();if(r.ln=206,l.s.eq(v1,"MOBILE")){r.ln=208;this.setPlacement("FULLSCREEN");r.ln=209;m.DIALOGLAYOUTROW2.setMinHeight(536);}else if(r.ln=211,l.s.eq(v1,"TABLET")){r.ln=213;this.setPlacement("CENTER");
r.ln=214;m.DIALOGLAYOUTROW2.setMinHeight(426);}else{r.ln=218;this.setPlacement("CENTER");r.ln=219;m.DIALOGLAYOUTROW2.setMinHeight(426);}r.ln=221;}}r.ln=223;r.e();};cO.mthDESTROYDIALOGOBJECTS=function(){var m=this.REF,r=l.mR(this,cO,"DestroyDialogObjects",225);r.ln=225;{r.ln=228;this.setrefNEWACCOUNT(null);r.ln=233;m.NAVIGATE.getCURRENTEVENT().mthCLEANUPRELATEDVIEW();r.ln=236;this.setrefSESSION(null);r.ln=237;this.setrefNAVIGATE(null);}r.ln=239;r.e();};cO.getNEWACCOUNT=function(){return this.REF.NEWACCOUNT;
};cO.setrefSESSION=function(rn){this.sR("SESSION",rn);};cO.setrefNAVIGATE=function(rn){if(this.REF.NAVIGATE!=null){this.REF.NAVIGATE.rH("LOGINDIALOGREQUESTED",this,e4);this.REF.NAVIGATE.rH("ONNAVIGATIONEVENT",this,e5);}this.sR("NAVIGATE",rn);if(this.REF.NAVIGATE!=null){this.REF.NAVIGATE.aH("LOGINDIALOGREQUESTED",this,e4);this.REF.NAVIGATE.aH("ONNAVIGATIONEVENT",this,e5);}};cO.setrefCURRENTPANEL=function(rn){this.sR("CURRENTPANEL",rn);};cO.setrefNEXTPANEL=function(rn){this.sR("NEXTPANEL",rn);};cO.setrefNEWACCOUNT=function(rn)
{this.sR("NEWACCOUNT",rn);};},{rp:["PRIM_DLG","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.ProgressBar","PRIM_PANL","PRIM_MD.Label","PRIM_MD.ViewContainer"],dc:["BPFAPP002","BPFAPP001","BPFCLS002"],dp:["PRIM_VIEW"]});