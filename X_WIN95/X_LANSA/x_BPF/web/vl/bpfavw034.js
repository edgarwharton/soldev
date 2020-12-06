﻿LANSA.addComponent({id:"BPFAVW034",nm:"BPFAdminSystemSettingsView",ot:"wv",tp:"View",pt:"ap",de:"Portal Admin of System Settings View",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{HandleCardSetup:{},HandleDeviceChanged:{},SetMobile:{},SetDesktop:{}},co:function(){cO.aN.call(this);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("DATA","BPFAPP000");var C2=this.cR("STRINGS","BPFVLR034");this.cD("PORTALSETTINGS");var C4=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");var C5=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");
var C6=this.cR("MAINDESKTOPLAYOUT","PRIM_TBLO");var C7=this.cR("MAINDESKTOPLAYOUTCOLUMN1","PRIM_TBLO","Column");var C8=this.cR("MAINDESKTOPLAYOUTCOLUMN2","PRIM_TBLO","Column");var C9=this.cR("MAINDESKTOPLAYOUTCOLUMN4","PRIM_TBLO","Column");var C10=this.cR("MAINDESKTOPLAYOUTCOLUMN5","PRIM_TBLO","Column");var C11=this.cR("MAINDESKTOPLAYOUTROW1","PRIM_TBLO","Row");var C12=this.cR("MAINDESKTOPLAYOUTROW3","PRIM_TBLO","Row");var C13=this.cR("MAINDESKTOPLAYOUTROW6","PRIM_TBLO","Row");var C14=this.cR("MAINDESKTOPLAYOUTITEM1","PRIM_TBLO","Item");
var C15=this.cR("MAINDESKTOPLAYOUTITEM2","PRIM_TBLO","Item");var C16=this.cR("MAINDESKTOPLAYOUTITEM3","PRIM_TBLO","Item");var C17=this.cR("MAINDESKTOPLAYOUTITEM4","PRIM_TBLO","Item");var C18=this.cR("MAINDESKTOPLAYOUTITEM5","PRIM_TBLO","Item");var C19=this.cR("MAINDESKTOPLAYOUTITEM6","PRIM_TBLO","Item");var C20=this.cR("MAINDESKTOPLAYOUTITEM7","PRIM_TBLO","Item");var C21=this.cR("MAINDESKTOPLAYOUTITEM10","PRIM_TBLO","Item");var C22=this.cR("MAINDESKTOPLAYOUTITEM11","PRIM_TBLO","Item");var C23=this.cR("MAINDESKTOPLAYOUTITEM8","PRIM_TBLO","Item");
var C24=this.cR("MAINDESKTOPLAYOUTITEM9","PRIM_TBLO","Item");var C25=this.cR("MAINMOBILELAYOUT","PRIM_TBLO");var C26=this.cR("MAINMOBILELAYOUTCOLUMN1","PRIM_TBLO","Column");var C27=this.cR("MAINMOBILELAYOUTCOLUMN2","PRIM_TBLO","Column");var C28=this.cR("MAINMOBILELAYOUTCOLUMN3","PRIM_TBLO","Column");var C29=this.cR("MAINMOBILELAYOUTROW1","PRIM_TBLO","Row");var C30=this.cR("MAINMOBILELAYOUTITEM1","PRIM_TBLO","Item");var C31=this.cR("MAINMOBILELAYOUTITEM2","PRIM_TBLO","Item");var C32=this.cR("MAINMOBILELAYOUTITEM3","PRIM_TBLO","Item");
var C33=this.cR("MAINMOBILELAYOUTITEM4","PRIM_TBLO","Item");var C34=this.cR("MAINMOBILELAYOUTITEM5","PRIM_TBLO","Item");var C35=this.cR("MAINMOBILELAYOUTITEM6","PRIM_TBLO","Item");var C36=this.cR("MAINMOBILELAYOUTITEM7","PRIM_TBLO","Item");var C37=this.cR("MAINMOBILELAYOUTITEM8","PRIM_TBLO","Item");var C38=this.cR("MAINMOBILELAYOUTITEM9","PRIM_TBLO","Item");var C39=this.cR("MAINMOBILELAYOUTITEM10","PRIM_TBLO","Item");var C40=this.cR("MAINMOBILELAYOUTITEM11","PRIM_TBLO","Item");var C41=this.cR("AVATAR","PRIM_MD","Icon");
var C42=this.cR("PANELTITLE","PRIM_MD","Label");var C43=this.cR("PANELEXPLANATION","PRIM_MD","Label");var C44=this.cR("PORTALROLECARD","BPFUDC001");var C45=this.cR("WEBPATHSCARD","BPFUDC001");var C46=this.cR("INTEGRATIONCARD","BPFUDC001");var C47=this.cR("FOLDERNAMESCARD","BPFUDC001");var C48=this.cR("RESOURCESCARD","BPFUDC001");var C49=this.cR("IMPORTEXPORTCARD","BPFUDC001");var C50=this.cR("FOOTERTEXT","PRIM_MD","Label");var C51=this.cR("PANELNAVIGATIONICON","PRIM_MD","Icon");if((C0!=null)&&(C0.iI()==false))
{C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C4.setCornerBottomLeft(8);C4.setCornerBottomRight(8);C4.setCornerTopLeft(8);C4.setCornerTopRight(8);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setBorderRight(1);C4.setBorderBottom(1);C4.iC();C5.setCursor("HAND");C5.iC();C6.setMarginTop(24);C6.setSizing("CONTENTHEIGHT");C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);C7.setMinWidth(8);C7.iC();C8.setDisplayPosition(2);C8.setParent(C6);C8.setWidth(44);C8.setMinWidth(140);C8.setMaxWidth(420);
C8.iC();C9.setDisplayPosition(3);C9.setParent(C6);C9.setWidth(44);C9.setMinWidth(140);C9.setMaxWidth(420);C9.iC();C10.setDisplayPosition(4);C10.setParent(C6);C10.setMinWidth(8);C10.iC();C11.setDisplayPosition(1);C11.setParent(C6);C11.setHeight(220);C11.setUnits("CONTENT");C11.iC();C12.setDisplayPosition(2);C12.setParent(C6);C12.setHeight(732);C12.setUnits("CONTENT");C12.iC();C13.setDisplayPosition(3);C13.setParent(C6);C13.setUnits("PIXELS");C13.setHeight(120);C13.iC();C14.setAlignment("TOPCENTER");
C14.setColumn(C8);C14.setManage(C41);C14.setParent(C6);C14.setRow(C11);C14.setSizing("CONTENTWIDTHANDHEIGHT");C14.setColumnSpan(2);C14.setFlow("DOWN");C14.iC();C15.setColumn(C8);C15.setManage(C42);C15.setParent(C6);C15.setRow(C11);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setColumnSpan(2);C15.setFlow("DOWN");C15.setAlignment("TOPCENTER");C15.setMarginTop(17);C15.setMarginLeft(24);C15.setMarginRight(24);C15.iC();C16.setAlignment("TOPCENTER");C16.setColumn(C8);C16.setManage(C43);C16.setParent(C6);
C16.setRow(C11);C16.setSizing("CONTENTHEIGHTFITTOWIDTH");C16.setColumnSpan(2);C16.setMarginLeft(24);C16.setMarginRight(24);C16.setFlow("DOWN");C16.setMarginTop(29);C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C8);C17.setManage(C44);C17.setParent(C6);C17.setRow(C12);C17.setFlow("DOWN");C17.setSizing("FITTOWIDTH");C17.setMarginRight(12);C17.setMarginTop(24);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C9);C18.setManage(C45);C18.setParent(C6);C18.setRow(C12);C18.setFlow("DOWN");C18.setSizing("FITTOWIDTH");
C18.setMarginTop(24);C18.setMarginLeft(12);C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C8);C19.setManage(C46);C19.setParent(C6);C19.setRow(C12);C19.setFlow("DOWN");C19.setSizing("FITTOWIDTH");C19.setMarginTop(24);C19.setMarginRight(12);C19.iC();C20.setAlignment("TOPLEFT");C20.setColumn(C9);C20.setManage(C47);C20.setParent(C6);C20.setRow(C12);C20.setFlow("DOWN");C20.setSizing("FITTOWIDTH");C20.setMarginTop(24);C20.setMarginLeft(12);C20.iC();C21.setManage(C48);C21.setParent(C6);C21.setRow(C12);
C21.setSizing("FITTOWIDTH");C21.setColumn(C8);C21.setAlignment("TOPLEFT");C21.setFlow("DOWN");C21.setMarginTop(24);C21.setMarginRight(12);C21.iC();C22.setManage(C49);C22.setParent(C6);C22.setRow(C12);C22.setSizing("FITTOWIDTH");C22.setColumn(C9);C22.setAlignment("TOPLEFT");C22.setFlow("DOWN");C22.setMarginTop(24);C22.setMarginLeft(12);C22.iC();C23.setColumn(C8);C23.setManage(C50);C23.setParent(C6);C23.setSizing("CONTENTHEIGHTFITTOWIDTH");C23.setColumnSpan(2);C23.setAlignment("TOPCENTER");C23.setRow(C13);
C23.setMarginLeft(24);C23.setMarginRight(24);C23.setMarginTop(24);C23.iC();C24.setAlignment("TOPLEFT");C24.setColumn(C8);C24.setManage(C51);C24.setParent(C6);C24.setRow(C11);C24.setSizing("NONE");C24.iC();C25.setMarginTop(24);C25.setSizing("CONTENTHEIGHT");C25.iC();C26.setDisplayPosition(1);C26.setParent(C25);C26.setMinWidth(8);C26.iC();C27.setDisplayPosition(2);C27.setParent(C25);C27.setWidth(98);C27.iC();C28.setDisplayPosition(3);C28.setParent(C25);C28.setMinWidth(8);C28.iC();C29.setDisplayPosition(1);
C29.setParent(C25);C29.setHeight(1265);C29.setUnits("CONTENT");C29.iC();C30.setAlignment("TOPCENTER");C30.setColumn(C27);C30.setManage(C41);C30.setParent(C25);C30.setRow(C29);C30.setSizing("CONTENTWIDTHANDHEIGHT");C30.setFlow("DOWN");C30.iC();C31.setAlignment("TOPCENTER");C31.setColumn(C27);C31.setManage(C42);C31.setParent(C25);C31.setRow(C29);C31.setSizing("CONTENTHEIGHTFITTOWIDTH");C31.setFlow("DOWN");C31.setMarginTop(17);C31.setMarginLeft(16);C31.setMarginRight(16);C31.iC();C32.setAlignment("TOPCENTER");
C32.setColumn(C27);C32.setManage(C43);C32.setParent(C25);C32.setRow(C29);C32.setSizing("CONTENTHEIGHTFITTOWIDTH");C32.setMarginLeft(16);C32.setMarginRight(16);C32.setFlow("DOWN");C32.setMarginTop(29);C32.iC();C33.setManage(C44);C33.setParent(C25);C33.setRow(C29);C33.setAlignment("TOPCENTER");C33.setColumn(C27);C33.setSizing("FITTOWIDTH");C33.setFlow("DOWN");C33.setMarginTop(24);C33.iC();C34.setManage(C45);C34.setParent(C25);C34.setRow(C29);C34.setColumn(C27);C34.setAlignment("TOPCENTER");C34.setSizing("FITTOWIDTH");
C34.setFlow("DOWN");C34.setMarginTop(24);C34.iC();C35.setManage(C46);C35.setParent(C25);C35.setRow(C29);C35.setColumn(C27);C35.setAlignment("TOPCENTER");C35.setSizing("FITTOWIDTH");C35.setFlow("DOWN");C35.setMarginTop(24);C35.iC();C36.setManage(C47);C36.setParent(C25);C36.setRow(C29);C36.setColumn(C27);C36.setAlignment("TOPCENTER");C36.setSizing("FITTOWIDTH");C36.setFlow("DOWN");C36.setMarginTop(24);C36.iC();C37.setAlignment("TOPCENTER");C37.setColumn(C27);C37.setManage(C50);C37.setParent(C25);C37.setRow(C29);
C37.setSizing("CONTENTHEIGHTFITTOWIDTH");C37.setFlow("DOWN");C37.setMarginTop(24);C37.setMarginLeft(24);C37.setMarginRight(24);C37.iC();C38.setAlignment("TOPLEFT");C38.setColumn(C27);C38.setManage(C51);C38.setParent(C25);C38.setRow(C29);C38.setSizing("NONE");C38.iC();C39.setManage(C48);C39.setParent(C25);C39.setRow(C29);C39.setSizing("FITTOWIDTH");C39.setColumn(C27);C39.setAlignment("TOPCENTER");C39.setFlow("DOWN");C39.setMarginTop(24);C39.iC();C40.setManage(C49);C40.setParent(C25);C40.setRow(C29);
C40.setSizing("FITTOWIDTH");C40.setColumn(C27);C40.setAlignment("TOPCENTER");C40.setFlow("DOWN");C40.setMarginTop(24);C40.iC();C41.setDisplayPosition(2);C41.setHeight(100);C41.setIcon("settings_system_daydream");C41.setLeft(800);C41.setParent(this);C41.setTabPosition(7);C41.setThemeDrawStyle("MediumTitle+Rounded");C41.setTop(24);C41.setWidth(100);C41.setIconHeight(80);C41.setIconPadding(10);C41.iC();C42.setCaption("System Settings");C42.setDisplayPosition(3);C42.setLeft(454);C42.setParent(this);C42.setTabPosition(8);
C42.setThemeDrawStyle("Title");C42.setTop(141);C42.setWidth(792);C42.setCaptionAlignment("CENTER");C42.setHeight(47);C42.setWordWrap(true);C42.iC();C43.setDisplayPosition(4);C43.setLeft(454);C43.setParent(this);C43.setTabPosition(9);C43.setThemeDrawStyle("Heading2+ForegroundTheme");C43.setTop(217);C43.setHeight(27);C43.setWidth(792);C43.setCaption("Configure the portal wide settings and functions");C43.setWordWrap(true);C43.setCaptionAlignment("CENTER");C43.iC();C44.setParent(this);C44.setLeft(430);
C44.setTop(268);C44.setTabPosition(6);C44.setDisplayPosition(5);C44.iC();C45.setParent(this);C45.setLeft(862);C45.setTop(268);C45.setDisplayPosition(6);C45.setTabPosition(5);C45.iC();C46.setParent(this);C46.setLeft(430);C46.setTop(512);C46.setDisplayPosition(7);C46.setTabPosition(4);C46.iC();C47.setParent(this);C47.setLeft(862);C47.setTop(512);C47.setDisplayPosition(8);C47.setTabPosition(3);C47.iC();C48.setParent(this);C48.setLeft(430);C48.setTop(756);C48.setDisplayPosition(9);C48.setTabPosition(2);
C48.iC();C49.setParent(this);C49.setLeft(862);C49.setTop(756);C49.setDisplayPosition(10);C49.iC();C50.setCaptionAlignment("TOPCENTER");C50.setDisplayPosition(11);C50.setHeight(45);C50.setParent(this);C50.setTabPosition(11);C50.setTop(1000);C50.setWidth(792);C50.setWordWrap(true);C50.setCaption("These settings can affect the portals operation. So be sure you understand the impact of the change.");C50.setPaddingBottom(24);C50.setLeft(454);C50.iC();C51.setDisplayPosition(1);C51.setIcon("arrow_back");
C51.setLeft(430);C51.setParent(this);C51.setTabPosition(10);C51.setTop(24);C51.setStyle(C5);C51.iC();l.WEB().aH("DEVICECHANGED",this,e4);C51.aH("CLICK",this,e3);this.setDisplayPosition(1);this.setTabPosition(1);this.setHeight(1096);this.setWidth(1700);this.setVerticalScroll(true);this.setLayoutManager(C6);this.setComponentTag("BPFAPP007");this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",96);r.ln=96;
{r.ln=99;this.setrefPORTALSETTINGS(l.cast(m.DATA.ref.mthGETDATACLIENT(this),"BPFAPP007"));}r.ln=101;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.Initialize",103);r.ln=103;{r.ln=106;this.mthHANDLEDEVICECHANGED();r.ln=109;this.mthHANDLECARDSETUP();r.ln=111;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=113;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#PanelNavigationIcon.Click",116);r.ln=116;{r.ln=119;l.WEB().getHistory().mthGOBACK(u);}r.ln=121;r.e();};function e4(sender,Ps)
{var r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",124);r.ln=124;{r.ln=126;this.mthHANDLEDEVICECHANGED();}r.ln=128;r.e();};cO.mthHANDLECARDSETUP=function(){var m=this.REF,r=l.mR(this,cO,"HandleCardSetup",131);r.ln=131;{r.ln=133;m.PANELTITLE.setCaption(m.STRINGS.getTEXT("PANELTITLE.CAPTION"));r.ln=134;m.PANELEXPLANATION.setCaption(m.STRINGS.getTEXT("PANELEXPLANATION.CAPTION"));r.ln=136;m.PORTALROLECARD.mthSETDISPLAY(m.STRINGS.getTEXT("PORTALROLECARD.HEADING"),"work",m.STRINGS.getTEXT("PORTALROLECARD.TEXT"),m.STRINGS.getTEXT("PORTALROLECARD.ACTION"),"SYSTEMSETTINGSROLEVIEW",true);
r.ln=137;m.WEBPATHSCARD.mthSETDISPLAY(m.STRINGS.getTEXT("WEBPATHSCARD.HEADING"),"insert_link",m.STRINGS.getTEXT("WEBPATHSCARD.TEXT"),m.STRINGS.getTEXT("WEBPATHSCARD.ACTION"),"SYSTEMWEBPATHSVIEW",true);r.ln=138;m.INTEGRATIONCARD.mthSETDISPLAY(m.STRINGS.getTEXT("INTEGRATIONCARD.HEADING"),"description",m.STRINGS.getTEXT("INTEGRATIONCARD.TEXT"),m.STRINGS.getTEXT("INTEGRATIONCARD.ACTION"),"SYSTEMJSMSETTINGSVIEW",true);r.ln=139;m.FOLDERNAMESCARD.mthSETDISPLAY(m.STRINGS.getTEXT("FOLDERNAMESCARD.HEADING"),"folder",m.STRINGS.getTEXT("FOLDERNAMESCARD.TEXT"),m.STRINGS.getTEXT("FOLDERNAMESCARD.ACTION"),"SYSTEMFOLDERNAMESVIEW",true);
r.ln=140;m.RESOURCESCARD.mthSETDISPLAY(m.STRINGS.getTEXT("RESOURCESCARD.HEADING"),"insert_photo",m.STRINGS.getTEXT("RESOURCESCARD.TEXT"),m.STRINGS.getTEXT("RESOURCESCARD.ACTION"),"SYSTEMSETTINGSRESOURCESVIEW",true);r.ln=141;m.IMPORTEXPORTCARD.mthSETDISPLAY(m.STRINGS.getTEXT("IMPORTEXPORTCARD.HEADING"),"swap_vert",m.STRINGS.getTEXT("IMPORTEXPORTCARD.TEXT"),m.STRINGS.getTEXT("IMPORTEXPORTCARD.ACTION"),"ADMINTRANSFERSETTINGSVIEW",true);r.ln=143;m.FOOTERTEXT.setCaption(m.STRINGS.getTEXT("FOOTERTEXT.CAPTION"));
}r.ln=145;r.e();};cO.mthHANDLEDEVICECHANGED=function(){var r=l.mR(this,cO,"HandleDeviceChanged",147);r.ln=147;{r.ln=149;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=151;this.mthSETMOBILE();}else{r.ln=155;this.mthSETDESKTOP();}}r.ln=159;r.e();};cO.mthSETMOBILE=function(){var m=this.REF,r=l.mR(this,cO,"SetMobile",161);r.ln=161;{r.ln=163;this.setLayoutManager(m.MAINMOBILELAYOUT);}r.ln=165;r.e();};cO.mthSETDESKTOP=function(){var m=this.REF,r=l.mR(this,cO,"SetDesktop",167);r.ln=167;{r.ln=169;this.setLayoutManager(m.MAINDESKTOPLAYOUT);
}r.ln=171;r.e();};cO.setrefPORTALSETTINGS=function(rn){this.sR("PORTALSETTINGS",rn);};},{rc:["BPFAPP001","BPFAPP000","BPFVLR034","BPFUDC001"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Icon","PRIM_MD.Label"],dc:["BPFAPP007"]});