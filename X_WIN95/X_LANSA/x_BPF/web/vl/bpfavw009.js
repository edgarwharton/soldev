﻿LANSA.addComponent({id:"BPFAVW009",nm:"BPFAdministrationView",ot:"wv",tp:"View",pt:"ap",de:"Portal Administration View",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{HandleCardSetup:{},HandleDeviceChanged:{},SetMobile:{},SetDesktop:{}},co:function(){cO.aN.call(this);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("DATA","BPFAPP000");var C2=this.cR("STRINGS","BPFVLR009");var C3=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");var C4=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");
var C5=this.cR("MAINDESKTOPLAYOUT","PRIM_TBLO");var C6=this.cR("MAINDESKTOPLAYOUTCOLUMN1","PRIM_TBLO","Column");var C7=this.cR("MAINDESKTOPLAYOUTCOLUMN2","PRIM_TBLO","Column");var C8=this.cR("MAINDESKTOPLAYOUTCOLUMN4","PRIM_TBLO","Column");var C9=this.cR("MAINDESKTOPLAYOUTCOLUMN5","PRIM_TBLO","Column");var C10=this.cR("MAINDESKTOPLAYOUTROW1","PRIM_TBLO","Row");var C11=this.cR("MAINDESKTOPLAYOUTROW3","PRIM_TBLO","Row");var C12=this.cR("MAINDESKTOPLAYOUTROW6","PRIM_TBLO","Row");var C13=this.cR("MAINDESKTOPLAYOUTITEM1","PRIM_TBLO","Item");
var C14=this.cR("MAINDESKTOPLAYOUTITEM2","PRIM_TBLO","Item");var C15=this.cR("MAINDESKTOPLAYOUTITEM3","PRIM_TBLO","Item");var C16=this.cR("MAINDESKTOPLAYOUTITEM4","PRIM_TBLO","Item");var C17=this.cR("MAINDESKTOPLAYOUTITEM5","PRIM_TBLO","Item");var C18=this.cR("MAINDESKTOPLAYOUTITEM6","PRIM_TBLO","Item");var C19=this.cR("MAINDESKTOPLAYOUTITEM7","PRIM_TBLO","Item");var C20=this.cR("MAINDESKTOPLAYOUTITEM8","PRIM_TBLO","Item");var C21=this.cR("MAINDESKTOPLAYOUTITEM9","PRIM_TBLO","Item");var C22=this.cR("MAINDESKTOPLAYOUTITEM10","PRIM_TBLO","Item");
var C23=this.cR("MAINDESKTOPLAYOUTITEM11","PRIM_TBLO","Item");var C24=this.cR("MAINDESKTOPLAYOUTITEM12","PRIM_TBLO","Item");var C25=this.cR("MAINMOBILELAYOUT","PRIM_TBLO");var C26=this.cR("MAINMOBILELAYOUTCOLUMN1","PRIM_TBLO","Column");var C27=this.cR("MAINMOBILELAYOUTCOLUMN2","PRIM_TBLO","Column");var C28=this.cR("MAINMOBILELAYOUTCOLUMN3","PRIM_TBLO","Column");var C29=this.cR("MAINMOBILELAYOUTROW1","PRIM_TBLO","Row");var C30=this.cR("MAINMOBILELAYOUTITEM1","PRIM_TBLO","Item");var C31=this.cR("MAINMOBILELAYOUTITEM2","PRIM_TBLO","Item");
var C32=this.cR("MAINMOBILELAYOUTITEM3","PRIM_TBLO","Item");var C33=this.cR("MAINMOBILELAYOUTITEM4","PRIM_TBLO","Item");var C34=this.cR("MAINMOBILELAYOUTITEM5","PRIM_TBLO","Item");var C35=this.cR("MAINMOBILELAYOUTITEM6","PRIM_TBLO","Item");var C36=this.cR("MAINMOBILELAYOUTITEM7","PRIM_TBLO","Item");var C37=this.cR("MAINMOBILELAYOUTITEM8","PRIM_TBLO","Item");var C38=this.cR("MAINMOBILELAYOUTITEM9","PRIM_TBLO","Item");var C39=this.cR("MAINMOBILELAYOUTITEM10","PRIM_TBLO","Item");var C40=this.cR("MAINMOBILELAYOUTITEM11","PRIM_TBLO","Item");
var C41=this.cR("MAINMOBILELAYOUTITEM12","PRIM_TBLO","Item");var C42=this.cR("AVATAR","PRIM_MD","Icon");var C43=this.cR("PANELTITLE","PRIM_MD","Label");var C44=this.cR("PANELEXPLANATION","PRIM_MD","Label");var C45=this.cR("USERACCOUNTCARD","BPFUDC001");var C46=this.cR("EMAILSETTINGSCARD","BPFUDC001");var C47=this.cR("USERTRACKINGCARD","BPFUDC001");var C48=this.cR("LANGUAGECARD","BPFUDC001");var C49=this.cR("LOGGINGCARD","BPFUDC001");var C50=this.cR("PORTALSYSTEMCARD","BPFUDC001");var C51=this.cR("FOOTERTEXT","PRIM_MD","Label");
var C52=this.cR("PANELNAVIGATIONICON","PRIM_MD","Icon");var C53=this.cR("SECURITYCARD","BPFUDC001");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setCornerBottomLeft(8);C3.setCornerBottomRight(8);C3.setCornerTopLeft(8);C3.setCornerTopRight(8);C3.setBorderLeft(1);C3.setBorderTop(1);C3.setBorderRight(1);C3.setBorderBottom(1);C3.iC();C4.setCursor("HAND");C4.iC();C5.setMarginTop(24);C5.setSizing("CONTENTHEIGHT");C5.iC();C6.setDisplayPosition(1);C6.setParent(C5);
C6.setMinWidth(8);C6.iC();C7.setDisplayPosition(2);C7.setParent(C5);C7.setWidth(44);C7.setMinWidth(140);C7.setMaxWidth(420);C7.iC();C8.setDisplayPosition(3);C8.setParent(C5);C8.setWidth(44);C8.setMinWidth(140);C8.setMaxWidth(420);C8.iC();C9.setDisplayPosition(4);C9.setParent(C5);C9.setMinWidth(8);C9.iC();C10.setDisplayPosition(1);C10.setParent(C5);C10.setHeight(220);C10.setUnits("CONTENT");C10.iC();C11.setDisplayPosition(2);C11.setParent(C5);C11.setHeight(976);C11.setUnits("CONTENT");C11.iC();C12.setDisplayPosition(3);
C12.setParent(C5);C12.setUnits("PIXELS");C12.setHeight(120);C12.iC();C13.setAlignment("TOPCENTER");C13.setColumn(C7);C13.setManage(C42);C13.setParent(C5);C13.setRow(C10);C13.setSizing("CONTENTWIDTHANDHEIGHT");C13.setColumnSpan(2);C13.setFlow("DOWN");C13.iC();C14.setColumn(C7);C14.setManage(C43);C14.setParent(C5);C14.setRow(C10);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.setColumnSpan(2);C14.setFlow("DOWN");C14.setAlignment("TOPCENTER");C14.setMarginTop(17);C14.setMarginLeft(24);C14.setMarginRight(24);
C14.iC();C15.setAlignment("TOPCENTER");C15.setColumn(C7);C15.setManage(C44);C15.setParent(C5);C15.setRow(C10);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setColumnSpan(2);C15.setMarginLeft(24);C15.setMarginRight(24);C15.setFlow("DOWN");C15.setMarginTop(29);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C7);C16.setManage(C45);C16.setParent(C5);C16.setRow(C11);C16.setFlow("DOWN");C16.setSizing("FITTOWIDTH");C16.setMarginRight(12);C16.setMarginTop(24);C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C8);
C17.setManage(C46);C17.setParent(C5);C17.setRow(C11);C17.setFlow("DOWN");C17.setSizing("FITTOWIDTH");C17.setMarginTop(24);C17.setMarginLeft(12);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C7);C18.setManage(C53);C18.setParent(C5);C18.setRow(C11);C18.setFlow("DOWN");C18.setSizing("FITTOWIDTH");C18.setMarginRight(12);C18.setMarginTop(24);C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C8);C19.setManage(C47);C19.setParent(C5);C19.setRow(C11);C19.setFlow("DOWN");C19.setSizing("FITTOWIDTH");C19.setMarginTop(24);
C19.setMarginLeft(12);C19.iC();C20.setAlignment("TOPLEFT");C20.setColumn(C8);C20.setManage(C48);C20.setParent(C5);C20.setRow(C11);C20.setFlow("DOWN");C20.setSizing("FITTOWIDTH");C20.setMarginTop(24);C20.setMarginLeft(12);C20.iC();C21.setManage(C49);C21.setParent(C5);C21.setRow(C11);C21.setSizing("FITTOWIDTH");C21.setColumn(C7);C21.setAlignment("TOPLEFT");C21.setFlow("DOWN");C21.setMarginTop(24);C21.setMarginRight(12);C21.iC();C22.setManage(C50);C22.setParent(C5);C22.setRow(C11);C22.setSizing("FITTOWIDTH");
C22.setColumn(C7);C22.setAlignment("TOPLEFT");C22.setFlow("DOWN");C22.setMarginTop(24);C22.setColumnSpan(2);C22.iC();C23.setColumn(C7);C23.setManage(C51);C23.setParent(C5);C23.setSizing("CONTENTHEIGHTFITTOWIDTH");C23.setColumnSpan(2);C23.setAlignment("TOPCENTER");C23.setRow(C12);C23.setMarginLeft(24);C23.setMarginRight(24);C23.setMarginTop(24);C23.iC();C24.setAlignment("TOPLEFT");C24.setColumn(C7);C24.setManage(C52);C24.setParent(C5);C24.setRow(C10);C24.setSizing("NONE");C24.iC();C25.setMarginTop(24);
C25.setSizing("CONTENTHEIGHT");C25.iC();C26.setDisplayPosition(1);C26.setParent(C25);C26.setMinWidth(8);C26.iC();C27.setDisplayPosition(2);C27.setParent(C25);C27.setWidth(98);C27.iC();C28.setDisplayPosition(3);C28.setParent(C25);C28.setMinWidth(8);C28.iC();C29.setDisplayPosition(1);C29.setParent(C25);C29.setHeight(1265);C29.setUnits("CONTENT");C29.iC();C30.setAlignment("TOPCENTER");C30.setColumn(C27);C30.setManage(C42);C30.setParent(C25);C30.setRow(C29);C30.setSizing("CONTENTWIDTHANDHEIGHT");C30.setFlow("DOWN");
C30.iC();C31.setAlignment("TOPCENTER");C31.setColumn(C27);C31.setManage(C43);C31.setParent(C25);C31.setRow(C29);C31.setSizing("CONTENTHEIGHTFITTOWIDTH");C31.setFlow("DOWN");C31.setMarginTop(17);C31.setMarginLeft(16);C31.setMarginRight(16);C31.iC();C32.setAlignment("TOPCENTER");C32.setColumn(C27);C32.setManage(C44);C32.setParent(C25);C32.setRow(C29);C32.setSizing("CONTENTHEIGHTFITTOWIDTH");C32.setMarginLeft(16);C32.setMarginRight(16);C32.setFlow("DOWN");C32.setMarginTop(29);C32.iC();C33.setManage(C45);
C33.setParent(C25);C33.setRow(C29);C33.setAlignment("TOPCENTER");C33.setColumn(C27);C33.setSizing("FITTOWIDTH");C33.setFlow("DOWN");C33.setMarginTop(24);C33.iC();C34.setManage(C46);C34.setParent(C25);C34.setRow(C29);C34.setColumn(C27);C34.setAlignment("TOPCENTER");C34.setSizing("FITTOWIDTH");C34.setFlow("DOWN");C34.setMarginTop(24);C34.iC();C35.setManage(C47);C35.setParent(C25);C35.setRow(C29);C35.setColumn(C27);C35.setAlignment("TOPCENTER");C35.setSizing("FITTOWIDTH");C35.setFlow("DOWN");C35.setMarginTop(24);
C35.iC();C36.setManage(C53);C36.setParent(C25);C36.setRow(C29);C36.setColumn(C27);C36.setAlignment("TOPCENTER");C36.setSizing("FITTOWIDTH");C36.setFlow("DOWN");C36.setMarginTop(24);C36.iC();C37.setManage(C48);C37.setParent(C25);C37.setRow(C29);C37.setColumn(C27);C37.setAlignment("TOPCENTER");C37.setSizing("FITTOWIDTH");C37.setFlow("DOWN");C37.setMarginTop(24);C37.iC();C38.setManage(C49);C38.setParent(C25);C38.setRow(C29);C38.setSizing("FITTOWIDTH");C38.setColumn(C27);C38.setAlignment("TOPCENTER");
C38.setFlow("DOWN");C38.setMarginTop(24);C38.iC();C39.setManage(C50);C39.setParent(C25);C39.setRow(C29);C39.setSizing("FITTOWIDTH");C39.setColumn(C27);C39.setAlignment("TOPCENTER");C39.setFlow("DOWN");C39.setMarginTop(24);C39.iC();C40.setAlignment("TOPCENTER");C40.setColumn(C27);C40.setManage(C51);C40.setParent(C25);C40.setRow(C29);C40.setSizing("CONTENTHEIGHTFITTOWIDTH");C40.setFlow("DOWN");C40.setMarginTop(24);C40.setMarginLeft(24);C40.setMarginRight(24);C40.iC();C41.setAlignment("TOPLEFT");C41.setColumn(C27);
C41.setManage(C52);C41.setParent(C25);C41.setRow(C29);C41.setSizing("NONE");C41.iC();C42.setDisplayPosition(2);C42.setHeight(100);C42.setIcon("build");C42.setLeft(800);C42.setParent(this);C42.setTabPosition(8);C42.setThemeDrawStyle("MediumTitle+Rounded");C42.setTop(24);C42.setWidth(100);C42.setIconHeight(80);C42.setIconPadding(10);C42.iC();C43.setCaption("Portal Administration Panel");C43.setDisplayPosition(3);C43.setLeft(454);C43.setParent(this);C43.setTabPosition(9);C43.setThemeDrawStyle("Title");
C43.setTop(141);C43.setWidth(792);C43.setCaptionAlignment("CENTER");C43.setHeight(47);C43.setWordWrap(true);C43.iC();C44.setDisplayPosition(4);C44.setLeft(454);C44.setParent(this);C44.setTabPosition(10);C44.setThemeDrawStyle("Heading2+ForegroundTheme");C44.setTop(217);C44.setHeight(27);C44.setWidth(792);C44.setCaption("As a administrator you can change settings, view logs and control user accounts");C44.setWordWrap(true);C44.setCaptionAlignment("CENTER");C44.iC();C45.setParent(this);C45.setLeft(430);
C45.setTop(268);C45.setTabPosition(7);C45.setDisplayPosition(5);C45.iC();C46.setParent(this);C46.setLeft(862);C46.setTop(268);C46.setDisplayPosition(6);C46.setTabPosition(6);C46.iC();C47.setParent(this);C47.setLeft(862);C47.setTop(756);C47.setDisplayPosition(10);C47.setTabPosition(5);C47.iC();C48.setParent(this);C48.setLeft(862);C48.setTop(512);C48.setDisplayPosition(8);C48.setTabPosition(3);C48.iC();C49.setParent(this);C49.setLeft(430);C49.setTop(756);C49.setDisplayPosition(9);C49.setTabPosition(2);
C49.iC();C50.setParent(this);C50.setLeft(430);C50.setTop(1000);C50.setDisplayPosition(11);C50.setWidth(840);C50.iC();C51.setCaptionAlignment("TOPCENTER");C51.setDisplayPosition(12);C51.setHeight(45);C51.setParent(this);C51.setTabPosition(12);C51.setTop(1244);C51.setWidth(792);C51.setWordWrap(true);C51.setCaption("Only users can change your their details. myPortal is committed to their privacy and security");C51.setPaddingBottom(24);C51.setLeft(454);C51.iC();C52.setDisplayPosition(1);C52.setIcon("arrow_back");
C52.setLeft(430);C52.setParent(this);C52.setTabPosition(11);C52.setTop(24);C52.setStyle(C4);C52.iC();C53.setParent(this);C53.setLeft(430);C53.setTop(512);C53.setDisplayPosition(7);C53.setTabPosition(4);C53.iC();l.WEB().aH("DEVICECHANGED",this,e4);C52.aH("CLICK",this,e3);this.setDisplayPosition(1);this.setTabPosition(1);this.setHeight(1340);this.setWidth(1700);this.setVerticalScroll(true);this.setLayoutManager(C5);this.aH("INITIALIZE",this,e1);this.aH("PREPARE",this,e2);}});function e1(sender,Ps){
var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",98);r.ln=98;{r.ln=101;m.DATA.ref.mthCLEARALLDATACLIENTS();r.ln=104;this.mthHANDLECARDSETUP();r.ln=107;this.mthHANDLEDEVICECHANGED();r.ln=109;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=111;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",113);r.ln=113;{r.ln=116;m.NAVIGATE.ref.getEVENT("ADMINUSERACCOUNTSLISTVIEW").setPERSISTVIEW(false);}r.ln=118;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#PanelNavigationIcon.Click",121);
r.ln=121;{r.ln=124;l.WEB().getHistory().mthGOBACK(u);}r.ln=126;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",129);r.ln=129;{r.ln=131;this.mthHANDLEDEVICECHANGED();}r.ln=133;r.e();};cO.mthHANDLECARDSETUP=function(){var m=this.REF,r=l.mR(this,cO,"HandleCardSetup",136);r.ln=136;{r.ln=138;m.PANELTITLE.setCaption(m.STRINGS.getTEXT("PANELTITLE.CAPTION"));r.ln=139;m.PANELEXPLANATION.setCaption(m.STRINGS.getTEXT("PANELEXPLANATION.CAPTION"));r.ln=141;m.USERACCOUNTCARD.mthSETDISPLAY(m.STRINGS.getTEXT("USERACCOUNTCARD.HEADING"),"supervisor_account",m.STRINGS.getTEXT("USERACCOUNTCARD.TEXT"),m.STRINGS.getTEXT("USERACCOUNTCARD.ACTION"),"ADMINUSERACCOUNTSLISTVIEW",true);
r.ln=142;m.EMAILSETTINGSCARD.mthSETDISPLAY(m.STRINGS.getTEXT("EMAILSETTINGSCARD.HEADING"),"mail",m.STRINGS.getTEXT("EMAILSETTINGSCARD.TEXT"),m.STRINGS.getTEXT("EMAILSETTINGSCARD.ACTION"),"ADMINEMAILSETTINGSVIEW",true);r.ln=143;m.SECURITYCARD.mthSETDISPLAY(m.STRINGS.getTEXT("SECURITYCARD.HEADING"),"lock_open",m.STRINGS.getTEXT("SECURITYCARD.TEXT"),m.STRINGS.getTEXT("SECURITYCARD.ACTION"),"ADMINCONFIGURESECURITYVIEW",true);r.ln=144;m.LANGUAGECARD.mthSETDISPLAY(m.STRINGS.getTEXT("LANGUAGECARD.HEADING"),"language",m.STRINGS.getTEXT("LANGUAGECARD.TEXT"),m.STRINGS.getTEXT("LANGUAGECARD.ACTION"),"ADMINLANGUAGEVIEW",true);
r.ln=145;m.LOGGINGCARD.mthSETDISPLAY(m.STRINGS.getTEXT("LOGGINGCARD.HEADING"),"assignment",m.STRINGS.getTEXT("LOGGINGCARD.TEXT"),m.STRINGS.getTEXT("LOGGINGCARD.ACTION"),"ADMINLOGGINGVIEW",true);r.ln=146;m.USERTRACKINGCARD.mthSETDISPLAY(m.STRINGS.getTEXT("USERTRACKINGCARD.HEADING"),"insert_chart",m.STRINGS.getTEXT("USERTRACKINGCARD.TEXT"),m.STRINGS.getTEXT("USERTRACKINGCARD.ACTION"),"ADMINANALYTICSSESSIONSVIEW",true);r.ln=147;m.PORTALSYSTEMCARD.mthSETDISPLAY(m.STRINGS.getTEXT("PORTALSYSTEMCARD.HEADING"),"settings_system_daydream",m.STRINGS.getTEXT("PORTALSYSTEMCARD.TEXT"),m.STRINGS.getTEXT("PORTALSYSTEMCARD.ACTION"),"ADMINSYSTEMSETTINGSVIEW",true);
r.ln=149;m.FOOTERTEXT.setCaption(m.STRINGS.getTEXT("FOOTERTEXT.CAPTION"));}r.ln=151;r.e();};cO.mthHANDLEDEVICECHANGED=function(){var r=l.mR(this,cO,"HandleDeviceChanged",153);r.ln=153;{r.ln=155;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=157;this.mthSETMOBILE();}else{r.ln=161;this.mthSETDESKTOP();}}r.ln=165;r.e();};cO.mthSETMOBILE=function(){var m=this.REF,r=l.mR(this,cO,"SetMobile",167);r.ln=167;{r.ln=169;this.setLayoutManager(m.MAINMOBILELAYOUT);}r.ln=171;r.e();};cO.mthSETDESKTOP=function(){var m=this.REF,r=l.mR(this,cO,"SetDesktop",173);
r.ln=173;{r.ln=175;this.setLayoutManager(m.MAINDESKTOPLAYOUT);r.ln=178;if(l.n.gt(m.USERACCOUNTCARD.getTEXTAREAHEIGHT(),m.EMAILSETTINGSCARD.getTEXTAREAHEIGHT())){r.ln=180;m.EMAILSETTINGSCARD.setTEXTAREAHEIGHT(m.USERACCOUNTCARD.getTEXTAREAHEIGHT());}r.ln=184;if(l.n.gt(m.EMAILSETTINGSCARD.getTEXTAREAHEIGHT(),m.USERACCOUNTCARD.getTEXTAREAHEIGHT())){r.ln=186;m.USERACCOUNTCARD.setTEXTAREAHEIGHT(m.EMAILSETTINGSCARD.getTEXTAREAHEIGHT());}r.ln=192;if(l.n.gt(m.SECURITYCARD.getTEXTAREAHEIGHT(),m.LANGUAGECARD.getTEXTAREAHEIGHT()))
{r.ln=194;m.LANGUAGECARD.setTEXTAREAHEIGHT(m.SECURITYCARD.getTEXTAREAHEIGHT());}r.ln=198;if(l.n.gt(m.LANGUAGECARD.getTEXTAREAHEIGHT(),m.SECURITYCARD.getTEXTAREAHEIGHT())){r.ln=200;m.SECURITYCARD.setTEXTAREAHEIGHT(m.LANGUAGECARD.getTEXTAREAHEIGHT());}r.ln=206;if(l.n.gt(m.LOGGINGCARD.getTEXTAREAHEIGHT(),m.USERTRACKINGCARD.getTEXTAREAHEIGHT())){r.ln=208;m.USERTRACKINGCARD.setTEXTAREAHEIGHT(m.LOGGINGCARD.getTEXTAREAHEIGHT());}r.ln=212;if(l.n.gt(m.USERTRACKINGCARD.getTEXTAREAHEIGHT(),m.LOGGINGCARD.getTEXTAREAHEIGHT()))
{r.ln=214;m.LOGGINGCARD.setTEXTAREAHEIGHT(m.USERTRACKINGCARD.getTEXTAREAHEIGHT());}}r.ln=218;r.e();};},{rc:["BPFAPP001","BPFAPP000","BPFVLR009","BPFUDC001"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Icon","PRIM_MD.Label"]});