﻿LANSA.addComponent({id:"BPFAVW038",nm:"BPFSystemIntegrationServerView",ot:"wv",tp:"View",pt:"ap",de:"Portal System Integration Server View",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{SetStrings:{},BuildSettingsForPanel:{},BuildMobileList:{},BuildDesktopList:{}},co:function(){cO.aN.call(this);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("DATA","BPFAPP000");var C2=this.cR("STRINGS","BPFVLR038");this.cD("PORTALSETTINGS");var C4=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");
var C5=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");var C6=this.cR("NOTACARD","PRIM_VS","Style");var C7=this.cR("MAINLAYOUT","PRIM_TBLO");var C8=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C9=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C10=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C11=this.cR("LAYOUTCOLUMN4","PRIM_TBLO","Column");var C12=this.cR("LAYOUTCOLUMN5","PRIM_TBLO","Column");var C13=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C14=this.cR("MAINLAYOUTROW1","PRIM_TBLO","Row");
var C15=this.cR("MAINLAYOUTITEM1","PRIM_TBLO","Item");var C16=this.cR("MAINLAYOUTITEM2","PRIM_TBLO","Item");var C17=this.cR("MAINLAYOUTITEM3","PRIM_TBLO","Item");var C18=this.cR("SETTINGSPANELLAYOUT","PRIM_TBLO");var C19=this.cR("SETTINGSPANELLAYOUTROW1","PRIM_TBLO","Row");var C20=this.cR("SETTINGSPANELLAYOUTROW2","PRIM_TBLO","Row");var C21=this.cR("SETTINGSPANELLAYOUTCOLUMN1","PRIM_TBLO","Column");var C22=this.cR("SETTINGSPANELLAYOUTCOLUMN2","PRIM_TBLO","Column");var C23=this.cR("SETTINGSPANELLAYOUTCOLUMN3","PRIM_TBLO","Column");
var C24=this.cR("SETTINGSPANELLAYOUTITEM1","PRIM_TBLO","Item");var C25=this.cR("SETTINGSPANELLAYOUTITEM2","PRIM_TBLO","Item");var C26=this.cR("SETTINGSPANELLAYOUTITEM3","PRIM_TBLO","Item");var C27=this.cR("DESKTOPSETTINGSLAYOUTLIST","PRIM_TBLO");var C28=this.cR("DESKTOPSETTINGSLAYOUTLISTCOLUMN1","PRIM_TBLO","Column");var C29=this.cR("DESKTOPSETTINGSLAYOUTLISTCOLUMN2","PRIM_TBLO","Column");var C30=this.cR("DESKTOPSETTINGSLAYOUTLISTROW1","PRIM_TBLO","Row");var C31=this.cR("DESKTOPSETTINGSLAYOUTLISTITEM1","PRIM_TBLO","Item");
var C32=this.cR("DESKTOPSETTINGSLAYOUTLISTITEM2","PRIM_TBLO","Item");var C33=this.cR("DESKTOPSETTINGSLAYOUTLISTITEM3","PRIM_TBLO","Item");var C34=this.cR("MOBILESETTINGSLAYOUTLIST","PRIM_TBLO");var C35=this.cR("MOBILESETTINGSLAYOUTLISTCOLUMN1","PRIM_TBLO","Column");var C36=this.cR("MOBILESETTINGSLAYOUTLISTROW1","PRIM_TBLO","Row");var C37=this.cR("MOBILESETTINGSLAYOUTLISTITEM1","PRIM_TBLO","Item");var C38=this.cR("MOBILESETTINGSLAYOUTLISTITEM2","PRIM_TBLO","Item");var C39=this.cR("PANELHEADING","PRIM_MD","Label");
var C40=this.cR("INSTRUCTIONTEXT","PRIM_MD","Label");var C41=this.cR("SETTINGSPANEL","PRIM_PANL");var C42=this.cR("SETTINGSHEADING","PRIM_MD","Label");var C43=this.cR("MOBILESETTINGSLIST","PRIM_MD","List");var C44=this.cR("MOBILESETTINGSLISTLABEL","PRIM_MD","ListLabel");var C45=this.cR("MOBILESETTINGSLISTVALUE","PRIM_MD","ListLabel");var C46=this.cR("DESKTOPSETTINGSLIST","PRIM_MD","List");var C47=this.cR("DESKTOPSETTINGSLISTBACKGROUNDLABEL","PRIM_MD","ListLabel");var C48=this.cR("DESKTOPSETTINGSLISTLABEL","PRIM_MD","ListLabel");
var C49=this.cR("DESKTOPSETTINGSLISTVALUE","PRIM_MD","ListLabel");this.cD("CURRENTSETTING");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C4.setCornerBottomLeft(8);C4.setCornerBottomRight(8);C4.setCornerTopLeft(8);C4.setCornerTopRight(8);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setBorderRight(1);C4.setBorderBottom(1);C4.iC();C5.setCursor("HAND");C5.iC();C6.setBorderBottom(0);C6.setBorderLeft(0);C6.setBorderRight(0);C6.setBorderTop(0);C6.iC();C7.setMarginTop(24);
C7.setMarginBottom(24);C7.iC();C8.setDisplayPosition(1);C8.setParent(C7);C8.setMinWidth(8);C8.iC();C9.setDisplayPosition(2);C9.setParent(C7);C9.setMaxWidth(60);C9.iC();C10.setDisplayPosition(3);C10.setParent(C7);C10.setWidth(96);C10.setMinWidth(280);C10.setMaxWidth(880);C10.iC();C11.setDisplayPosition(4);C11.setParent(C7);C11.setMaxWidth(60);C11.iC();C12.setDisplayPosition(5);C12.setParent(C7);C12.setMinWidth(8);C12.iC();C13.setDisplayPosition(1);C13.setParent(C7);C13.setHeight(93);C13.setUnits("CONTENT");
C13.iC();C14.setDisplayPosition(2);C14.setParent(C7);C14.setHeight(682);C14.setUnits("CONTENT");C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C9);C15.setManage(C39);C15.setParent(C7);C15.setRow(C13);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setFlow("DOWN");C15.setColumnSpan(3);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C9);C16.setManage(C40);C16.setParent(C7);C16.setRow(C13);C16.setSizing("CONTENTHEIGHTFITTOWIDTH");C16.setFlow("DOWN");C16.setMarginTop(24);C16.setColumnSpan(3);C16.iC();
C17.setAlignment("TOPLEFT");C17.setColumn(C10);C17.setManage(C41);C17.setParent(C7);C17.setRow(C14);C17.setSizing("FITTOWIDTH");C17.setFlow("DOWN");C17.setMarginTop(24);C17.iC();C18.setSizing("CONTENTHEIGHT");C18.iC();C19.setDisplayPosition(1);C19.setParent(C18);C19.setUnits("CONTENT");C19.setHeight(632);C19.iC();C20.setDisplayPosition(2);C20.setParent(C18);C20.setUnits("PIXELS");C20.setHeight(24);C20.iC();C21.setDisplayPosition(1);C21.setParent(C18);C21.setMinWidth(24);C21.iC();C22.setDisplayPosition(2);
C22.setParent(C18);C22.setWidth(98);C22.iC();C23.setDisplayPosition(3);C23.setParent(C18);C23.setMinWidth(24);C23.iC();C24.setManage(C42);C24.setParent(C18);C24.setRow(C19);C24.setSizing("CONTENTHEIGHTFITTOWIDTH");C24.setColumn(C22);C24.setAlignment("TOPLEFT");C24.setFlow("DOWN");C24.setMarginTop(24);C24.iC();C25.setAlignment("TOPLEFT");C25.setColumn(C22);C25.setManage(C43);C25.setParent(C18);C25.setRow(C19);C25.setSizing("CONTENTHEIGHTFITTOWIDTH");C25.setMarginTop(16);C25.setFlow("DOWN");C25.iC();
C26.setAlignment("TOPLEFT");C26.setColumn(C22);C26.setManage(C46);C26.setParent(C18);C26.setRow(C19);C26.setSizing("CONTENTHEIGHTFITTOWIDTH");C26.setMarginTop(16);C26.setFlow("DOWN");C26.iC();C27.iC();C28.setDisplayPosition(1);C28.setParent(C27);C28.setUnits("PIXELS");C28.setWidth(180);C28.iC();C29.setDisplayPosition(2);C29.setParent(C27);C29.iC();C30.setDisplayPosition(1);C30.setParent(C27);C30.iC();C31.setAlignment("CENTERLEFT");C31.setColumn(C28);C31.setManage(C48);C31.setParent(C27);C31.setRow(C30);
C31.setSizing("CONTENTHEIGHTFITTOWIDTH");C31.setMarginRight(24);C31.iC();C32.setAlignment("CENTERLEFT");C32.setColumn(C29);C32.setManage(C49);C32.setParent(C27);C32.setRow(C30);C32.setSizing("CONTENTHEIGHTFITTOWIDTH");C32.iC();C33.setAlignment("TOPLEFT");C33.setColumn(C28);C33.setManage(C47);C33.setParent(C27);C33.setRow(C30);C33.setColumnSpan(2);C33.iC();C34.iC();C35.setDisplayPosition(1);C35.setParent(C34);C35.iC();C36.setDisplayPosition(1);C36.setParent(C34);C36.iC();C37.setAlignment("CENTERLEFT");
C37.setColumn(C35);C37.setManage(C44);C37.setParent(C34);C37.setRow(C36);C37.setSizing("CONTENTWIDTHANDHEIGHT");C37.setFlow("CENTERVERTICAL");C37.iC();C38.setAlignment("CENTERLEFT");C38.setColumn(C35);C38.setManage(C45);C38.setParent(C34);C38.setRow(C36);C38.setSizing("CONTENTWIDTHANDHEIGHT");C38.setFlow("CENTERVERTICAL");C38.iC();C39.setDisplayPosition(1);C39.setLeft(350);C39.setParent(this);C39.setTabPosition(1);C39.setThemeDrawStyle("Heading1");C39.setTop(24);C39.setWidth(1000);C39.setIcon("arrow_back");
C39.setCaptionMarginLeft(24);C39.setHeight(31);C39.setWordWrap(true);C39.setStyle(C5);C39.setCaption("Integration Server");C39.iC();C40.setCaptionAlignment("TOPLEFT");C40.setDisplayPosition(2);C40.setHeight(38);C40.setLeft(350);C40.setParent(this);C40.setTabPosition(2);C40.setTop(79);C40.setWidth(1000);C40.setWordWrap(true);C40.setCaption("View or edit the current settings used by portal when connecting to the integration server or displaying its logs. Ensure the values here are correct to prevent the portal functions such as emailing fail to function.");
C40.iC();C41.setDisplayPosition(3);C41.setHeight(658);C41.setLeft(410);C41.setParent(this);C41.setTabPosition(3);C41.setTabStop(false);C41.setTop(141);C41.setWidth(880);C41.setThemeDrawStyle("Card");C41.setStyle(C4);C41.setLayoutManager(C18);C41.iC();C42.setCaption("Settings");C42.setDisplayPosition(1);C42.setLeft(24);C42.setParent(C41);C42.setTabPosition(1);C42.setThemeDrawStyle("Heading3");C42.setTop(24);C42.setWidth(830);C42.setWordWrap(true);C42.setHeight(24);C42.setIconAlignment("CENTERRIGHT");
C42.setIcon("edit");C42.setStyle(C5);C42.setIconColor("THEME500");C42.iC();C43.setDisplayPosition(2);C43.setLayoutManager(C34);C43.setLeft(24);C43.setParent(C41);C43.setRowHeight(80);C43.setTabPosition(2);C43.setTop(64);C43.setHeight(324);C43.setWidth(830);C43.setVisible(false);C43.iC();C44.setCaption("LABEL");C44.setDisplayPosition(1);C44.setDragStyle("NONE");C44.setLeft(0);C44.setParent(C43);C44.setTabPosition(1);C44.setThemeDrawStyle("Subheading+ForegroundSecondary");C44.setTop(19);C44.setHeight(16);
C44.setWidth(40);C44.setCaptionMarginBottom(1);C44.setCaptionMarginTop(0);C44.iC();C45.setCaption("Settings Value");C45.setDisplayPosition(2);C45.setDragStyle("NONE");C45.setLeft(0);C45.setParent(C43);C45.setTabPosition(3);C45.setTop(35);C45.setHeight(26);C45.setWidth(107);C45.setCaptionMarginBottom(3);C45.setThemeDrawStyle("Heading3");C45.setCaptionMarginTop(3);C45.iC();C46.setDisplayPosition(3);C46.setLayoutManager(C27);C46.setLeft(24);C46.setParent(C41);C46.setRowHeight(56);C46.setTabPosition(3);
C46.setTop(404);C46.setHeight(228);C46.setWidth(830);C46.iC();C47.setDisplayPosition(4);C47.setDragStyle("NONE");C47.setLeft(0);C47.setParent(C46);C47.setTabPosition(1);C47.setThemeDrawStyle("card");C47.setHeight(56);C47.setTop(0);C47.setWidth(830);C47.setStyle(C6);C47.iC();C48.setCaption("LABEL");C48.setDisplayPosition(2);C48.setDragStyle("NONE");C48.setLeft(0);C48.setParent(C46);C48.setTabPosition(2);C48.setThemeDrawStyle("Subheading+ForegroundSecondary");C48.setHeight(19);C48.setTop(19);C48.setWidth(156);
C48.iC();C49.setCaption("Settings Value");C49.setDisplayPosition(1);C49.setDragStyle("NONE");C49.setLeft(180);C49.setParent(C46);C49.setTabPosition(4);C49.setHeight(26);C49.setTop(15);C49.setWidth(650);C49.setThemeDrawStyle("Heading3");C49.setCaptionMarginBottom(3);C49.setCaptionMarginTop(3);C49.iC();l.WEB().aH("DEVICECHANGED",this,e3);C39.aH("CLICK",this,e4);C42.aH("CLICK",this,e5);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1700);this.setHeight(800);this.setLayoutManager(C7);
this.setVerticalScroll(true);this.setComponentTag("BPFAPP007");this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",102);r.ln=102;{r.ln=105;this.setrefPORTALSETTINGS(l.cast(m.DATA.ref.mthGETDATACLIENT(this),"BPFAPP007"));}r.ln=107;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",109);r.ln=109;{r.ln=112;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=113;
this.mthSETSTRINGS();r.ln=114;m.PORTALSETTINGS.mthGETJSMSETTINGS();}r.ln=116;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",119);r.ln=119;{r.ln=122;this.mthBUILDSETTINGSFORPANEL();}r.ln=124;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#PanelHeading.Click",127);r.ln=127;{r.ln=129;l.WEB().getHistory().mthGOBACK(u);}r.ln=131;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SettingsHeading.Click",133);r.ln=133;{r.ln=135;m.NAVIGATE.ref.mthTO("SYSTEMJSMSETTINGSEDITVIEW");
}r.ln=137;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#PortalSettings.OnGetJSMSettingsCompleted",140);r.ln=140;{r.ln=142;this.mthBUILDSETTINGSFORPANEL();r.ln=143;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=145;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PortalSettings.OnGetJSMSettingsFailed",147);r.ln=147;{r.ln=149;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=150;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("PORTALSETTINGS.ONGETJSMSETTINGSFAILED"),7500);
}r.ln=152;r.e();};cO.mthSETSTRINGS=function(){var m=this.REF,r=l.mR(this,cO,"SetStrings",156);r.ln=156;{r.ln=158;m.PANELHEADING.setCaption(m.STRINGS.getTEXT("PANELHEADING.CAPTION"));r.ln=159;m.INSTRUCTIONTEXT.setCaption(m.STRINGS.getTEXT("INSTRUCTIONTEXT.CAPTION"));r.ln=160;m.SETTINGSHEADING.setCaption(m.STRINGS.getTEXT("SETTINGSHEADING.CAPTION"));}r.ln=162;r.e();};cO.mthBUILDSETTINGSFORPANEL=function(){var m=this.REF,r=l.mR(this,cO,"BuildSettingsForPanel",164);r.ln=164;{r.ln=167;m.DESKTOPSETTINGSLIST.clearList();
r.ln=168;m.MOBILESETTINGSLIST.clearList();r.ln=171;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=173;this.mthBUILDMOBILELIST();}else{r.ln=177;this.mthBUILDDESKTOPLIST();}}r.ln=181;r.e();};cO.mthBUILDMOBILELIST=function(){var m=this.REF,r=l.mR(this,cO,"BuildMobileList",183);r.ln=183;{r.ln=186;m.DESKTOPSETTINGSLIST.setVisible(false);r.ln=189;m.MOBILESETTINGSLIST.setVisible(true);r.ln=192;{var l1=m.PORTALSETTINGS.getJSMSETTINGS().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=195;m.MOBILESETTINGSLIST.addEntry();
r.ln=200;m.MOBILESETTINGSLIST.getCurrentItem().setRelatedReference(ITEM);r.ln=203;m.MOBILESETTINGSLISTLABEL.getCurrentItem().setCaption(m.STRINGS.getTEXT(l.cat("LISTLABEL.CAPTION.",l.s.UpperCase(ITEM.getTEXT()))));r.ln=204;m.MOBILESETTINGSLISTVALUE.getCurrentItem().setCaption(ITEM.getVALUE());r.ln=206;}l1.end();r.dR("ITEM");}}r.ln=208;r.e();};cO.mthBUILDDESKTOPLIST=function(){var m=this.REF,r=l.mR(this,cO,"BuildDesktopList",210);r.ln=210;{r.ln=213;m.MOBILESETTINGSLIST.setVisible(false);r.ln=216;m.DESKTOPSETTINGSLIST.setVisible(true);
r.ln=219;{var l1=m.PORTALSETTINGS.getJSMSETTINGS().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=222;m.DESKTOPSETTINGSLIST.addEntry();r.ln=227;m.DESKTOPSETTINGSLIST.getCurrentItem().setRelatedReference(ITEM);r.ln=230;m.DESKTOPSETTINGSLISTLABEL.getCurrentItem().setCaption(m.STRINGS.getTEXT(l.cat("LISTLABEL.CAPTION.",l.s.UpperCase(ITEM.getTEXT()))));r.ln=231;m.DESKTOPSETTINGSLISTVALUE.getCurrentItem().setCaption(ITEM.getVALUE());r.ln=233;}l1.end();r.dR("ITEM");}}r.ln=235;r.e();};cO.setrefPORTALSETTINGS=function(rn)
{if(this.REF.PORTALSETTINGS!=null){this.REF.PORTALSETTINGS.rH("ONGETJSMSETTINGSCOMPLETED",this,e6);this.REF.PORTALSETTINGS.rH("ONGETJSMSETTINGSFAILED",this,e7);}this.sR("PORTALSETTINGS",rn);if(this.REF.PORTALSETTINGS!=null){this.REF.PORTALSETTINGS.aH("ONGETJSMSETTINGSCOMPLETED",this,e6);this.REF.PORTALSETTINGS.aH("ONGETJSMSETTINGSFAILED",this,e7);}};cO.setrefCURRENTSETTING=function(rn){this.sR("CURRENTSETTING",rn);};},{rc:["BPFAPP001","BPFAPP000","BPFVLR038"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_MD.List","PRIM_MD.ListLabel"],
dc:["BPFAPP007","BPFCLS008"]});