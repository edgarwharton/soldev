﻿LANSA.addComponent({id:"BPFAVW010",nm:"BPFAdminPortalLoggingView",ot:"wv",tp:"View",pt:"ap",de:"Portal Admin of Portal Logging View",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{HandleCardSetup:{},HandleDeviceChanged:{},SetMobile:{},SetDesktop:{}},co:function(){cO.aN.call(this);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("DATA","BPFAPP000");var C2=this.cR("STRINGS","BPFVLR010");this.cD("LOGGINGDATA");var C4=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");var C5=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");
var C6=this.cR("MAINDESKTOPLAYOUT","PRIM_TBLO");var C7=this.cR("MAINDESKTOPLAYOUTCOLUMN1","PRIM_TBLO","Column");var C8=this.cR("MAINDESKTOPLAYOUTCOLUMN2","PRIM_TBLO","Column");var C9=this.cR("MAINDESKTOPLAYOUTCOLUMN4","PRIM_TBLO","Column");var C10=this.cR("MAINDESKTOPLAYOUTCOLUMN5","PRIM_TBLO","Column");var C11=this.cR("MAINDESKTOPLAYOUTROW1","PRIM_TBLO","Row");var C12=this.cR("MAINDESKTOPLAYOUTROW3","PRIM_TBLO","Row");var C13=this.cR("MAINDESKTOPLAYOUTROW6","PRIM_TBLO","Row");var C14=this.cR("MAINDESKTOPLAYOUTITEM1","PRIM_TBLO","Item");
var C15=this.cR("MAINDESKTOPLAYOUTITEM2","PRIM_TBLO","Item");var C16=this.cR("MAINDESKTOPLAYOUTITEM3","PRIM_TBLO","Item");var C17=this.cR("MAINDESKTOPLAYOUTITEM4","PRIM_TBLO","Item");var C18=this.cR("MAINDESKTOPLAYOUTITEM6","PRIM_TBLO","Item");var C19=this.cR("MAINDESKTOPLAYOUTITEM7","PRIM_TBLO","Item");var C20=this.cR("MAINDESKTOPLAYOUTITEM8","PRIM_TBLO","Item");var C21=this.cR("MAINDESKTOPLAYOUTITEM5","PRIM_TBLO","Item");var C22=this.cR("MAINMOBILELAYOUT","PRIM_TBLO");var C23=this.cR("MAINMOBILELAYOUTCOLUMN1","PRIM_TBLO","Column");
var C24=this.cR("MAINMOBILELAYOUTCOLUMN2","PRIM_TBLO","Column");var C25=this.cR("MAINMOBILELAYOUTCOLUMN3","PRIM_TBLO","Column");var C26=this.cR("MAINMOBILELAYOUTROW1","PRIM_TBLO","Row");var C27=this.cR("MAINMOBILELAYOUTROW2","PRIM_TBLO","Row");var C28=this.cR("MAINMOBILELAYOUTITEM1","PRIM_TBLO","Item");var C29=this.cR("MAINMOBILELAYOUTITEM2","PRIM_TBLO","Item");var C30=this.cR("MAINMOBILELAYOUTITEM3","PRIM_TBLO","Item");var C31=this.cR("MAINMOBILELAYOUTITEM4","PRIM_TBLO","Item");var C32=this.cR("MAINMOBILELAYOUTITEM6","PRIM_TBLO","Item");
var C33=this.cR("MAINMOBILELAYOUTITEM7","PRIM_TBLO","Item");var C34=this.cR("MAINMOBILELAYOUTITEM8","PRIM_TBLO","Item");var C35=this.cR("MAINMOBILELAYOUTITEM5","PRIM_TBLO","Item");var C36=this.cR("PANELNAVIGATIONICON","PRIM_MD","Icon");var C37=this.cR("AVATAR","PRIM_MD","Icon");var C38=this.cR("PANELTITLE","PRIM_MD","Label");var C39=this.cR("PANELEXPLANATION","PRIM_MD","Label");var C40=this.cR("PORTALLOGGINGCARD","BPFUDC002");var C41=this.cR("RUNTIMELOGGINGCARD","BPFUDC002");var C42=this.cR("INTEGRATIONLOGGINGCARD","BPFUDC002");
var C43=this.cR("FOOTERTEXT","PRIM_MD","Label");var C44=this.cR("PORTALLOGGINGACTIONINDEX","PRIM_NMBR");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C4.setCornerBottomLeft(8);C4.setCornerBottomRight(8);C4.setCornerTopLeft(8);C4.setCornerTopRight(8);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setBorderRight(1);C4.setBorderBottom(1);C4.iC();C5.setCursor("HAND");C5.iC();C6.setMarginTop(24);C6.setSizing("CONTENTHEIGHT");C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);
C7.setMinWidth(8);C7.iC();C8.setDisplayPosition(2);C8.setParent(C6);C8.setWidth(44);C8.setMinWidth(140);C8.setMaxWidth(420);C8.iC();C9.setDisplayPosition(3);C9.setParent(C6);C9.setWidth(44);C9.setMinWidth(140);C9.setMaxWidth(420);C9.iC();C10.setDisplayPosition(4);C10.setParent(C6);C10.setMinWidth(8);C10.iC();C11.setDisplayPosition(1);C11.setParent(C6);C11.setHeight(220);C11.setUnits("CONTENT");C11.iC();C12.setDisplayPosition(2);C12.setParent(C6);C12.setHeight(396);C12.setUnits("CONTENT");C12.iC();
C13.setDisplayPosition(3);C13.setParent(C6);C13.setUnits("PIXELS");C13.setHeight(120);C13.iC();C14.setAlignment("TOPCENTER");C14.setColumn(C8);C14.setManage(C37);C14.setParent(C6);C14.setRow(C11);C14.setSizing("CONTENTWIDTHANDHEIGHT");C14.setColumnSpan(2);C14.setFlow("DOWN");C14.iC();C15.setColumn(C8);C15.setManage(C38);C15.setParent(C6);C15.setRow(C11);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setColumnSpan(2);C15.setFlow("DOWN");C15.setAlignment("TOPCENTER");C15.setMarginTop(17);C15.setMarginLeft(24);
C15.setMarginRight(24);C15.iC();C16.setAlignment("TOPCENTER");C16.setColumn(C8);C16.setManage(C39);C16.setParent(C6);C16.setRow(C11);C16.setSizing("CONTENTHEIGHTFITTOWIDTH");C16.setColumnSpan(2);C16.setMarginLeft(24);C16.setMarginRight(24);C16.setFlow("DOWN");C16.setMarginTop(29);C16.iC();C17.setAlignment("TOPCENTER");C17.setColumn(C8);C17.setManage(C40);C17.setParent(C6);C17.setRow(C12);C17.setColumnSpan(2);C17.setSizing("FITTOWIDTH");C17.setFlow("DOWN");C17.setMarginTop(24);C17.iC();C18.setAlignment("TOPCENTER");
C18.setColumn(C8);C18.setManage(C41);C18.setParent(C6);C18.setRow(C12);C18.setSizing("FITTOWIDTH");C18.setFlow("DOWN");C18.setMarginRight(12);C18.setMarginTop(24);C18.iC();C19.setAlignment("BOTTOMCENTER");C19.setColumn(C9);C19.setManage(C42);C19.setParent(C6);C19.setRow(C12);C19.setSizing("FITTOWIDTH");C19.setFlow("DOWN");C19.setMarginLeft(12);C19.iC();C20.setColumn(C8);C20.setManage(C43);C20.setParent(C6);C20.setSizing("CONTENTHEIGHTFITTOWIDTH");C20.setColumnSpan(2);C20.setAlignment("TOPCENTER");
C20.setRow(C13);C20.setMarginLeft(24);C20.setMarginRight(24);C20.setMarginTop(24);C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C8);C21.setManage(C36);C21.setParent(C6);C21.setRow(C11);C21.setSizing("NONE");C21.iC();C22.setMarginTop(24);C22.setSizing("CONTENTHEIGHT");C22.iC();C23.setDisplayPosition(1);C23.setParent(C22);C23.setMinWidth(8);C23.iC();C24.setDisplayPosition(2);C24.setParent(C22);C24.setWidth(98);C24.iC();C25.setDisplayPosition(3);C25.setParent(C22);C25.setMinWidth(8);C25.iC();C26.setDisplayPosition(1);
C26.setParent(C22);C26.setHeight(814);C26.setUnits("CONTENT");C26.iC();C27.setDisplayPosition(2);C27.setParent(C22);C27.setHeight(120);C27.setUnits("PIXELS");C27.iC();C28.setAlignment("TOPCENTER");C28.setColumn(C24);C28.setManage(C37);C28.setParent(C22);C28.setRow(C26);C28.setSizing("CONTENTWIDTHANDHEIGHT");C28.setFlow("DOWN");C28.iC();C29.setAlignment("TOPCENTER");C29.setColumn(C24);C29.setManage(C38);C29.setParent(C22);C29.setRow(C26);C29.setSizing("CONTENTHEIGHTFITTOWIDTH");C29.setFlow("DOWN");
C29.setMarginTop(17);C29.setMarginLeft(16);C29.setMarginRight(16);C29.iC();C30.setAlignment("TOPCENTER");C30.setColumn(C24);C30.setManage(C39);C30.setParent(C22);C30.setRow(C26);C30.setSizing("CONTENTHEIGHTFITTOWIDTH");C30.setMarginLeft(16);C30.setMarginRight(16);C30.setFlow("DOWN");C30.setMarginTop(29);C30.iC();C31.setManage(C40);C31.setParent(C22);C31.setRow(C26);C31.setAlignment("TOPCENTER");C31.setColumn(C24);C31.setSizing("FITTOWIDTH");C31.setFlow("DOWN");C31.setMarginTop(24);C31.iC();C32.setManage(C41);
C32.setParent(C22);C32.setRow(C26);C32.setColumn(C24);C32.setAlignment("TOPCENTER");C32.setSizing("FITTOWIDTH");C32.setFlow("DOWN");C32.setMarginTop(24);C32.iC();C33.setManage(C42);C33.setParent(C22);C33.setRow(C26);C33.setColumn(C24);C33.setAlignment("TOPCENTER");C33.setSizing("FITTOWIDTH");C33.setFlow("DOWN");C33.setMarginTop(24);C33.iC();C34.setAlignment("TOPCENTER");C34.setColumn(C24);C34.setManage(C43);C34.setParent(C22);C34.setRow(C27);C34.setSizing("CONTENTHEIGHTFITTOWIDTH");C34.setFlow("DOWN");
C34.setMarginTop(24);C34.setMarginLeft(24);C34.setMarginRight(24);C34.iC();C35.setManage(C36);C35.setParent(C22);C35.setRow(C26);C35.setSizing("NONE");C35.setColumn(C24);C35.setAlignment("TOPLEFT");C35.iC();C36.setDisplayPosition(1);C36.setIcon("arrow_back");C36.setLeft(430);C36.setParent(this);C36.setTabPosition(6);C36.setTop(24);C36.setStyle(C5);C36.iC();C37.setDisplayPosition(2);C37.setHeight(100);C37.setIcon("assignment");C37.setLeft(800);C37.setParent(this);C37.setTabPosition(1);C37.setThemeDrawStyle("MediumTitle+Rounded");
C37.setTop(24);C37.setWidth(100);C37.setIconHeight(90);C37.setIconPadding(5);C37.iC();C38.setCaption("Portal Logging");C38.setDisplayPosition(3);C38.setLeft(454);C38.setParent(this);C38.setTabPosition(2);C38.setThemeDrawStyle("Title");C38.setTop(141);C38.setWidth(792);C38.setCaptionAlignment("CENTER");C38.setHeight(47);C38.setWordWrap(true);C38.iC();C39.setDisplayPosition(4);C39.setLeft(454);C39.setParent(this);C39.setTabPosition(3);C39.setThemeDrawStyle("Heading2+ForegroundTheme");C39.setTop(217);
C39.setHeight(27);C39.setWidth(792);C39.setWordWrap(true);C39.setCaptionAlignment("CENTER");C39.setCaption("Control, clear and view portal and system runtime logs");C39.iC();C40.setParent(this);C40.setLeft(430);C40.setTop(268);C40.setTabPosition(5);C40.setDisplayPosition(6);C40.setWidth(840);C40.iC();C41.setParent(this);C41.setLeft(430);C41.setTop(466);C41.setTabPosition(7);C41.setDisplayPosition(8);C41.iC();C42.setParent(this);C42.setLeft(862);C42.setTop(466);C42.setTabPosition(8);C42.setDisplayPosition(7);
C42.iC();C43.setCaptionAlignment("TOPCENTER");C43.setDisplayPosition(5);C43.setHeight(45);C43.setParent(this);C43.setTabPosition(4);C43.setTop(664);C43.setWidth(792);C43.setWordWrap(true);C43.setCaption("The settings here can result in a loss of portal performance and server storage space");C43.setPaddingBottom(24);C43.setLeft(454);C43.iC();C44.iC();l.WEB().aH("DEVICECHANGED",this,e5);C36.aH("CLICK",this,e4);C40.aH("ONACTIONCLICKED",this,e6);C41.aH("ONACTIONCLICKED",this,e7);this.setDisplayPosition(1);
this.setTabPosition(1);this.setHeight(760);this.setWidth(1700);this.setVerticalScroll(true);this.setLayoutManager(C6);this.setComponentTag("BPFAPP003");this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);this.aH("PREPARE",this,e3);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",87);r.ln=87;{r.ln=90;this.setrefLOGGINGDATA(l.cast(m.DATA.ref.mthGETDATACLIENT(this),"BPFAPP003"));}r.ln=92;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.Initialize",94);
r.ln=94;{r.ln=97;this.mthHANDLEDEVICECHANGED();r.ln=100;this.mthHANDLECARDSETUP();r.ln=102;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=104;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",106);r.ln=106;{r.ln=109;m.NAVIGATE.ref.getEVENT("PORTALLOGSLISTVIEW").setPERSISTVIEW(false);}r.ln=111;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#PanelNavigationIcon.Click",114);r.ln=114;{r.ln=117;l.WEB().getHistory().mthGOBACK(u);}r.ln=119;r.e();};function e5(sender,Ps)
{var r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",122);r.ln=122;{r.ln=124;this.mthHANDLEDEVICECHANGED();}r.ln=126;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PortalLoggingCard.OnActionClicked",129);var P0=Ps.r("ACTIONINDEX");r.ln=129;{r.ln=131;m.PORTALLOGGINGACTIONINDEX.set(P0.get());r.ln=133;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=135;{var v1=P0.get();if(r.ln=137,l.n.eq(v1,3)){r.ln=139;m.LOGGINGDATA.mthREMOVEPORTALLOGS();}r.ln=141;}}r.ln=143;r.e();};function e7(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#RuntimeLoggingCard.OnActionClicked",145);var P0=Ps.r("ACTIONINDEX");r.ln=145;{r.ln=147;m.PORTALLOGGINGACTIONINDEX.set(P0.get());r.ln=149;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=151;{var v1=P0.get();if(r.ln=153,l.n.eq(v1,2)){r.ln=155;m.LOGGINGDATA.mthCLEARRUNTIMELOG();}r.ln=157;}}r.ln=159;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LoggingData.OnPortalLogsRemoveCompleted",163);r.ln=163;{r.ln=165;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");
r.ln=166;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("LOGGINGDATA.ONPORTALLOGSREMOVECOMPLETED"));}r.ln=168;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LoggingData.OnPortalLogsRemoveFailed",170);r.ln=170;{r.ln=172;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=173;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("LOGGINGDATA.ONPORTALLOGSREMOVEFAILED"),7500);}r.ln=175;r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LoggingData.OnRuntimeLogClearCompleted",177);
r.ln=177;{r.ln=179;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=180;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("LOGGINGDATA.ONRUNTIMELOGCLEARCOMPLETED"));}r.ln=182;r.e();};function e11(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LoggingData.OnRuntimeLogClearFailed",184);r.ln=184;{r.ln=186;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=187;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("LOGGINGDATA.ONRUNTIMELOGCLEARFAILED"),7500);}r.ln=189;r.e();};cO.mthHANDLECARDSETUP=function()
{var m=this.REF,r=l.mR(this,cO,"HandleCardSetup",192);r.ln=192;{r.ln=194;m.PANELTITLE.setCaption(m.STRINGS.getTEXT("PANELTITLE.CAPTION"));r.ln=195;m.PANELEXPLANATION.setCaption(m.STRINGS.getTEXT("PANELEXPLANATION.CAPTION"));r.ln=204;m.PORTALLOGGINGCARD.mthADDACTION(m.STRINGS.getTEXT("PORTALLOGGINGCARD.ACTION.1"),"PORTALLOGSLISTVIEW",true);r.ln=205;m.PORTALLOGGINGCARD.mthADDACTION(m.STRINGS.getTEXT("PORTALLOGGINGCARD.ACTION.2"),"PORTALLOGCONTROLVIEW",true,"tune");r.ln=206;m.PORTALLOGGINGCARD.mthADDACTION(m.STRINGS.getTEXT("PORTALLOGGINGCARD.ACTION.3"),"",false,"delete_forever");
r.ln=209;m.RUNTIMELOGGINGCARD.mthADDACTION(m.STRINGS.getTEXT("RUNTIMELOGGINGCARD.ACTION.1"),"PORTALLOGCONTENTVIEW",true);r.ln=210;m.RUNTIMELOGGINGCARD.mthADDACTION(m.STRINGS.getTEXT("RUNTIMELOGGINGCARD.ACTION.2"),"",false,"delete_forever");r.ln=213;m.INTEGRATIONLOGGINGCARD.mthADDACTION(m.STRINGS.getTEXT("INTEGRATIONLOGGINGCARD.ACTION.1"),"PORTALFOLDERCONTENTVIEW",true);r.ln=214;m.INTEGRATIONLOGGINGCARD.mthADDACTION(m.STRINGS.getTEXT("INTEGRATIONLOGGINGCARD.ACTION.2"),"portalintergationlogview",true,"tune");
r.ln=217;m.PORTALLOGGINGCARD.mthSETDISPLAY(m.STRINGS.getTEXT("PORTALLOGGINGCARD.HEADING"),"bug_report",m.STRINGS.getTEXT("PORTALLOGGINGCARD.TEXT"));r.ln=218;m.RUNTIMELOGGINGCARD.mthSETDISPLAY(m.STRINGS.getTEXT("RUNTIMELOGGINGCARD.HEADING"),"directions_run",m.STRINGS.getTEXT("RUNTIMELOGGINGCARD.TEXT"));r.ln=219;m.INTEGRATIONLOGGINGCARD.mthSETDISPLAY(m.STRINGS.getTEXT("INTEGRATIONLOGGINGCARD.HEADING"),"description",m.STRINGS.getTEXT("INTEGRATIONLOGGINGCARD.TEXT"));r.ln=221;m.FOOTERTEXT.setCaption(m.STRINGS.getTEXT("FOOTERTEXT.CAPTION"));
}r.ln=223;r.e();};cO.mthHANDLEDEVICECHANGED=function(){var r=l.mR(this,cO,"HandleDeviceChanged",225);r.ln=225;{r.ln=227;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=229;this.mthSETMOBILE();}else{r.ln=233;this.mthSETDESKTOP();}}r.ln=237;r.e();};cO.mthSETMOBILE=function(){var m=this.REF,r=l.mR(this,cO,"SetMobile",239);r.ln=239;{r.ln=241;this.setLayoutManager(m.MAINMOBILELAYOUT);}r.ln=243;r.e();};cO.mthSETDESKTOP=function(){var m=this.REF,r=l.mR(this,cO,"SetDesktop",245);r.ln=245;{r.ln=247;this.setLayoutManager(m.MAINDESKTOPLAYOUT);
}r.ln=249;r.e();};cO.setrefLOGGINGDATA=function(rn){if(this.REF.LOGGINGDATA!=null){this.REF.LOGGINGDATA.rH("ONPORTALLOGSREMOVECOMPLETED",this,e8);this.REF.LOGGINGDATA.rH("ONPORTALLOGSREMOVEFAILED",this,e9);this.REF.LOGGINGDATA.rH("ONRUNTIMELOGCLEARCOMPLETED",this,e10);this.REF.LOGGINGDATA.rH("ONRUNTIMELOGCLEARFAILED",this,e11);}this.sR("LOGGINGDATA",rn);if(this.REF.LOGGINGDATA!=null){this.REF.LOGGINGDATA.aH("ONPORTALLOGSREMOVECOMPLETED",this,e8);this.REF.LOGGINGDATA.aH("ONPORTALLOGSREMOVEFAILED",this,e9);
this.REF.LOGGINGDATA.aH("ONRUNTIMELOGCLEARCOMPLETED",this,e10);this.REF.LOGGINGDATA.aH("ONRUNTIMELOGCLEARFAILED",this,e11);}};},{rc:["BPFAPP001","BPFAPP000","BPFVLR010","BPFUDC002"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Icon","PRIM_MD.Label","PRIM_NMBR"],dc:["BPFAPP003"]});