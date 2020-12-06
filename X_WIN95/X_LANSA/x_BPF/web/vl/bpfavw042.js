﻿LANSA.addComponent({id:"BPFAVW042",nm:"BPFSystemSettingsExportView",ot:"wv",tp:"View",pt:"ap",de:"Portal System Settings Export View",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{SetStrings:{}},co:function(){cO.aN.call(this);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("DATA","BPFAPP000");var C2=this.cR("STRINGS","BPFVLR042");this.cD("PORTALSETTINGS");var C4=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");var C5=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");var C6=this.cR("MAINLAYOUT","PRIM_TBLO");
var C7=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C8=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C9=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C10=this.cR("LAYOUTCOLUMN4","PRIM_TBLO","Column");var C11=this.cR("LAYOUTCOLUMN5","PRIM_TBLO","Column");var C12=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C13=this.cR("MAINLAYOUTROW1","PRIM_TBLO","Row");var C14=this.cR("MAINLAYOUTITEM1","PRIM_TBLO","Item");var C15=this.cR("MAINLAYOUTITEM2","PRIM_TBLO","Item");var C16=this.cR("MAINLAYOUTITEM3","PRIM_TBLO","Item");
var C17=this.cR("SETTINGSPANELLAYOUT","PRIM_TBLO");var C18=this.cR("SETTINGSPANELLAYOUTROW1","PRIM_TBLO","Row");var C19=this.cR("SETTINGSPANELLAYOUTROW2","PRIM_TBLO","Row");var C20=this.cR("SETTINGSPANELLAYOUTCOLUMN1","PRIM_TBLO","Column");var C21=this.cR("SETTINGSPANELLAYOUTCOLUMN2","PRIM_TBLO","Column");var C22=this.cR("SETTINGSPANELLAYOUTCOLUMN3","PRIM_TBLO","Column");var C23=this.cR("SETTINGSPANELLAYOUTITEM1","PRIM_TBLO","Item");var C24=this.cR("PANELHEADING","PRIM_MD","Label");var C25=this.cR("INSTRUCTIONTEXT","PRIM_MD","Label");
var C26=this.cR("SETTINGSPANEL","PRIM_PANL");var C27=this.cR("SETTINGSHEADING","PRIM_MD","Label");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C4.setCornerBottomLeft(8);C4.setCornerBottomRight(8);C4.setCornerTopLeft(8);C4.setCornerTopRight(8);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setBorderRight(1);C4.setBorderBottom(1);C4.iC();C5.setCursor("HAND");C5.iC();C6.setMarginTop(24);C6.setMarginBottom(24);C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);
C7.setMinWidth(8);C7.iC();C8.setDisplayPosition(2);C8.setParent(C6);C8.setMaxWidth(60);C8.iC();C9.setDisplayPosition(3);C9.setParent(C6);C9.setWidth(96);C9.setMinWidth(280);C9.setMaxWidth(880);C9.iC();C10.setDisplayPosition(4);C10.setParent(C6);C10.setMaxWidth(60);C10.iC();C11.setDisplayPosition(5);C11.setParent(C6);C11.setMinWidth(8);C11.iC();C12.setDisplayPosition(1);C12.setParent(C6);C12.setHeight(76);C12.setUnits("CONTENT");C12.iC();C13.setDisplayPosition(2);C13.setParent(C6);C13.setHeight(98);
C13.setUnits("CONTENT");C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C8);C14.setManage(C24);C14.setParent(C6);C14.setRow(C12);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.setFlow("DOWN");C14.setColumnSpan(3);C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C8);C15.setManage(C25);C15.setParent(C6);C15.setRow(C12);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setFlow("DOWN");C15.setMarginTop(24);C15.setColumnSpan(3);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C9);C16.setManage(C26);C16.setParent(C6);
C16.setRow(C13);C16.setSizing("FITTOWIDTH");C16.setFlow("DOWN");C16.setMarginTop(24);C16.iC();C17.setSizing("CONTENTHEIGHT");C17.iC();C18.setDisplayPosition(1);C18.setParent(C17);C18.setUnits("CONTENT");C18.setHeight(48);C18.iC();C19.setDisplayPosition(2);C19.setParent(C17);C19.setUnits("PIXELS");C19.setHeight(24);C19.iC();C20.setDisplayPosition(1);C20.setParent(C17);C20.setMinWidth(24);C20.iC();C21.setDisplayPosition(2);C21.setParent(C17);C21.setWidth(98);C21.iC();C22.setDisplayPosition(3);C22.setParent(C17);
C22.setMinWidth(24);C22.iC();C23.setManage(C27);C23.setParent(C17);C23.setRow(C18);C23.setSizing("CONTENTHEIGHTFITTOWIDTH");C23.setColumn(C21);C23.setAlignment("TOPLEFT");C23.setFlow("DOWN");C23.setMarginTop(24);C23.iC();C24.setDisplayPosition(1);C24.setLeft(350);C24.setParent(this);C24.setTabPosition(1);C24.setThemeDrawStyle("Heading1");C24.setTop(24);C24.setWidth(1000);C24.setIcon("arrow_back");C24.setCaptionMarginLeft(24);C24.setHeight(31);C24.setWordWrap(true);C24.setStyle(C5);C24.setCaption("Export Portal Settings");
C24.iC();C25.setCaptionAlignment("TOPLEFT");C25.setDisplayPosition(2);C25.setHeight(21);C25.setLeft(350);C25.setParent(this);C25.setTabPosition(2);C25.setTop(79);C25.setWidth(1000);C25.setWordWrap(true);C25.setCaption("Export the current portal settings so they used to populate another portal instance or as a back up.");C25.iC();C26.setDisplayPosition(3);C26.setHeight(74);C26.setLeft(410);C26.setParent(this);C26.setTabPosition(3);C26.setTabStop(false);C26.setTop(124);C26.setWidth(880);C26.setThemeDrawStyle("Card");
C26.setStyle(C4);C26.setLayoutManager(C17);C26.iC();C27.setCaption("Export");C27.setDisplayPosition(1);C27.setLeft(24);C27.setParent(C26);C27.setTabPosition(1);C27.setThemeDrawStyle("Heading3");C27.setTop(24);C27.setWidth(830);C27.setWordWrap(true);C27.setHeight(24);C27.setIconAlignment("CENTERRIGHT");C27.setIcon("cloud_download");C27.setStyle(C5);C27.setIconColor("THEME500");C27.iC();C24.aH("CLICK",this,e3);C27.aH("CLICK",this,e4);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1700);
this.setHeight(800);this.setLayoutManager(C6);this.setVerticalScroll(true);this.setComponentTag("BPFAPP007");this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",66);r.ln=66;{r.ln=69;this.setrefPORTALSETTINGS(l.cast(m.DATA.ref.mthGETDATACLIENT(this),"BPFAPP007"));}r.ln=71;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.Initialize",73);r.ln=73;{r.ln=76;this.mthSETSTRINGS();r.ln=77;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");
}r.ln=79;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#PanelHeading.Click",84);r.ln=84;{r.ln=86;l.WEB().getHistory().mthGOBACK(u);}r.ln=88;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SettingsHeading.Click",90);r.ln=90;{r.ln=92;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=93;m.PORTALSETTINGS.mthCREATEEXPORT();}r.ln=95;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PortalSettings.OnCreateExportCompleted",98);r.ln=98;{r.ln=100;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("PORTALSETTINGS.ONCREATEEXPORTCOMPLETED"));
r.ln=101;l.WEB().getHistory().mthGOBACK(u);}r.ln=103;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PortalSettings.OnCreateExportFailed",105);r.ln=105;{r.ln=107;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=108;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("PORTALSETTINGS.ONCREATEEXPORTFAILED"),7500);}r.ln=110;r.e();};cO.mthSETSTRINGS=function(){var m=this.REF,r=l.mR(this,cO,"SetStrings",114);r.ln=114;{r.ln=116;m.PANELHEADING.setCaption(m.STRINGS.getTEXT("PANELHEADING.CAPTION"));
r.ln=117;m.INSTRUCTIONTEXT.setCaption(m.STRINGS.getTEXT("INSTRUCTIONTEXT.CAPTION"));r.ln=118;m.SETTINGSHEADING.setCaption(m.STRINGS.getTEXT("SETTINGSHEADING.CAPTION"));}r.ln=120;r.e();};cO.setrefPORTALSETTINGS=function(rn){if(this.REF.PORTALSETTINGS!=null){this.REF.PORTALSETTINGS.rH("ONCREATEEXPORTCOMPLETED",this,e5);this.REF.PORTALSETTINGS.rH("ONCREATEEXPORTFAILED",this,e6);}this.sR("PORTALSETTINGS",rn);if(this.REF.PORTALSETTINGS!=null){this.REF.PORTALSETTINGS.aH("ONCREATEEXPORTCOMPLETED",this,e5);
this.REF.PORTALSETTINGS.aH("ONCREATEEXPORTFAILED",this,e6);}};},{rc:["BPFAPP001","BPFAPP000","BPFVLR042"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL"],dc:["BPFAPP007"]});