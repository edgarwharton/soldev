﻿LANSA.addComponent({id:"BPFAVW032",nm:"BPFAnalyticsSettingsView",ot:"wv",tp:"View",pt:"ap",de:"Portal Analytics Settings View",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{SetStrings:{},BuildOptions:{}},co:function(){cO.aN.call(this);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("DATA","BPFAPP000");var C2=this.cR("STRINGS","BPFVLR032");this.cD("TRACKINGSETTINGS");var C4=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");var C5=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");
var C6=this.cR("MAINLAYOUT","PRIM_TBLO");var C7=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C8=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C9=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C10=this.cR("LAYOUTCOLUMN4","PRIM_TBLO","Column");var C11=this.cR("LAYOUTCOLUMN5","PRIM_TBLO","Column");var C12=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C13=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C14=this.cR("MAINLAYOUTITEM1","PRIM_TBLO","Item");var C15=this.cR("MAINLAYOUTITEM2","PRIM_TBLO","Item");
var C16=this.cR("MAINLAYOUTITEM3","PRIM_TBLO","Item");var C17=this.cR("CONTROLLAYOUT","PRIM_TBLO");var C18=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C19=this.cR("LAYOUT1ROW2","PRIM_TBLO","Row");var C20=this.cR("CONTROLCOLUMN1","PRIM_TBLO","Column");var C21=this.cR("CONTROLCOLUMN2","PRIM_TBLO","Column");var C22=this.cR("CONTROLCOLUMN3","PRIM_TBLO","Column");var C23=this.cR("CONTROLLAYOUTITEM1","PRIM_TBLO","Item");var C24=this.cR("CONTROLLAYOUTITEM3","PRIM_TBLO","Item");var C25=this.cR("CONTROLLAYOUTITEM4","PRIM_TBLO","Item");
var C26=this.cR("CONTROLLAYOUTITEM5","PRIM_TBLO","Item");var C27=this.cR("PANELHEADING","PRIM_MD","Label");var C28=this.cR("INSTRUCTIONTEXT","PRIM_MD","Label");var C29=this.cR("CONTROLPANEL","PRIM_PANL");var C30=this.cR("PANELACTION","PRIM_MD","FlatButton");var C31=this.cR("ENABLEANALYTICS","PRIM_MD","Switch");var C32=this.cR("CONTROLPANELHEADING","PRIM_MD","Label");var C33=this.cR("ANALYTICSTRACKINGCODEEDIT","PRIM_MD","Edit");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false))
{C1.iC();}C2.iC();C4.setCornerBottomLeft(8);C4.setCornerBottomRight(8);C4.setCornerTopLeft(8);C4.setCornerTopRight(8);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setBorderRight(1);C4.setBorderBottom(1);C4.iC();C5.setCursor("HAND");C5.iC();C6.setMarginTop(24);C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);C7.setMinWidth(8);C7.iC();C8.setDisplayPosition(2);C8.setParent(C6);C8.setMaxWidth(60);C8.iC();C9.setDisplayPosition(3);C9.setParent(C6);C9.setWidth(96);C9.setMinWidth(280);C9.setMaxWidth(880);C9.iC();
C10.setDisplayPosition(4);C10.setParent(C6);C10.setMaxWidth(60);C10.iC();C11.setDisplayPosition(5);C11.setParent(C6);C11.setMinWidth(8);C11.iC();C12.setDisplayPosition(1);C12.setParent(C6);C12.setHeight(93);C12.setUnits("CONTENT");C12.iC();C13.setDisplayPosition(2);C13.setParent(C6);C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C8);C14.setManage(C27);C14.setParent(C6);C14.setRow(C12);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.setFlow("DOWN");C14.setColumnSpan(3);C14.iC();C15.setAlignment("TOPLEFT");
C15.setColumn(C8);C15.setManage(C28);C15.setParent(C6);C15.setRow(C12);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setFlow("DOWN");C15.setMarginTop(24);C15.setColumnSpan(3);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C9);C16.setManage(C29);C16.setParent(C6);C16.setRow(C13);C16.setSizing("FITTOWIDTH");C16.setFlow("DOWN");C16.setMarginTop(24);C16.iC();C17.setSizing("CONTENTHEIGHT");C17.iC();C18.setDisplayPosition(1);C18.setParent(C17);C18.setUnits("CONTENT");C18.setHeight(199);C18.iC();C19.setDisplayPosition(2);
C19.setParent(C17);C19.setUnits("PIXELS");C19.setHeight(62);C19.iC();C20.setDisplayPosition(1);C20.setParent(C17);C20.setMinWidth(44);C20.iC();C21.setDisplayPosition(2);C21.setParent(C17);C21.setWidth(98);C21.iC();C22.setDisplayPosition(3);C22.setParent(C17);C22.setMinWidth(44);C22.iC();C23.setAlignment("CENTERRIGHT");C23.setColumn(C21);C23.setManage(C30);C23.setParent(C17);C23.setRow(C19);C23.setSizing("NONE");C23.iC();C24.setAlignment("TOPLEFT");C24.setColumn(C21);C24.setManage(C31);C24.setParent(C17);
C24.setRow(C18);C24.setSizing("FITTOWIDTH");C24.setFlow("DOWN");C24.setMarginTop(16);C24.iC();C25.setAlignment("TOPLEFT");C25.setColumn(C21);C25.setManage(C32);C25.setParent(C17);C25.setRow(C18);C25.setSizing("CONTENTHEIGHTFITTOWIDTH");C25.setFlow("DOWN");C25.setMarginTop(24);C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C21);C26.setManage(C33);C26.setParent(C17);C26.setRow(C18);C26.setSizing("FITTOWIDTH");C26.setFlow("DOWN");C26.setMarginTop(16);C26.iC();C27.setCaption("Configure Analytics");
C27.setDisplayPosition(1);C27.setLeft(350);C27.setParent(this);C27.setTabPosition(1);C27.setThemeDrawStyle("Heading1");C27.setTop(24);C27.setWidth(1000);C27.setIcon("arrow_back");C27.setCaptionMarginLeft(24);C27.setHeight(31);C27.setWordWrap(true);C27.setStyle(C5);C27.iC();C28.setCaptionAlignment("TOPLEFT");C28.setDisplayPosition(2);C28.setHeight(38);C28.setLeft(350);C28.setParent(this);C28.setTabPosition(2);C28.setTop(79);C28.setWidth(1000);C28.setWordWrap(true);C28.setCaption("Enable the tracking of end user behaviour and usage trends of the portal via Google Analytics. Once enabled enter the tracking code for property you created in Google Analytics for this portal instance. Ensure you do not reuse a tracking code to avoid issues with the data that has already been collected.");
C28.iC();C29.setDisplayPosition(3);C29.setHeight(263);C29.setLeft(410);C29.setParent(this);C29.setTabPosition(3);C29.setTabStop(false);C29.setTop(141);C29.setWidth(880);C29.setThemeDrawStyle("Card");C29.setStyle(C4);C29.setLayoutManager(C17);C29.iC();C30.setCaption("Save");C30.setDisplayPosition(4);C30.setLeft(734);C30.setParent(C29);C30.setTabPosition(3);C30.setThemeDrawStyle("ForegroundMediumPrimary");C30.setTop(212);C30.setStyle(C5);C30.iC();C31.setCaption("Enabled");C31.setChecked(true);C31.setDisplayPosition(2);
C31.setIconAlignment("CENTERRIGHT");C31.setIconColor("THEME500");C31.setLeft(44);C31.setParent(C29);C31.setTabPosition(1);C31.setTop(64);C31.setWidth(790);C31.setHeight(44);C31.setStyle(C5);C31.iC();C32.setDisplayPosition(1);C32.setLeft(44);C32.setParent(C29);C32.setTabPosition(4);C32.setThemeDrawStyle("Heading3");C32.setTop(24);C32.setWidth(790);C32.setCaption("Analytics Settings");C32.setHeight(24);C32.setWordWrap(true);C32.iC();C33.setCaption("Tracking Code");C33.setDisplayPosition(3);C33.setLeft(44);
C33.setParent(C29);C33.setTabPosition(2);C33.setTop(124);C33.setWidth(790);C33.setHelperText("e.g. UA-123456789-1");C33.iC();C27.aH("CLICK",this,e3);C30.aH("CLICK",this,e4);C31.aH("CHANGED",this,e5);C33.aH("CHANGED",this,e6);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1700);this.setHeight(800);this.setLayoutManager(C6);this.setComponentTag("BPFAPP006");this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",70);
r.ln=70;{r.ln=73;this.setrefTRACKINGSETTINGS(l.cast(m.DATA.ref.mthGETDATACLIENT(this),"BPFAPP006"));}r.ln=75;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",77);r.ln=77;{r.ln=79;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=80;this.mthSETSTRINGS();r.ln=82;m.TRACKINGSETTINGS.mthGETANALYTICSSETTINGS();}r.ln=84;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#PanelHeading.Click",87);r.ln=87;{r.ln=89;l.WEB().getHistory().mthGOBACK(u);}r.ln=91;
r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PanelAction.Click",94);r.ln=94;{r.ln=96;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=97;m.TRACKINGSETTINGS.mthSAVEANALYTICSSETTINGS();}r.ln=99;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EnableAnalytics.Changed",102);r.ln=102;{r.ln=104;m.TRACKINGSETTINGS.setANALYTICSENABLED(m.ENABLEANALYTICS.getChecked());r.ln=105;m.ANALYTICSTRACKINGCODEEDIT.setEnabled(m.TRACKINGSETTINGS.getANALYTICSENABLED());}r.ln=107;
r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AnalyticsTrackingCodeEdit.Changed",109);r.ln=109;{r.ln=111;m.TRACKINGSETTINGS.setANALYTICSID(m.ANALYTICSTRACKINGCODEEDIT.get());}r.ln=113;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#TrackingSettings.OnGetAnalyticsSettingsCompleted",115);r.ln=115;{r.ln=117;this.mthBUILDOPTIONS();r.ln=118;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=120;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TrackingSettings.OnGetAnalyticsSettingsFailed",122);
r.ln=122;{r.ln=124;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=125;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("TRACKINGSETTINGS.ONGETANALYTICSSETTINGSFAILED"),7500);}r.ln=127;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TrackingSettings.OnSaveAnalyticsSettingsCompleted",129);r.ln=129;{r.ln=131;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("TRACKINGSETTINGS.ONSAVEANALYTICSSETTINGSCOMPLETED"));r.ln=132;l.WEB().getHistory().mthGOBACK(u);}r.ln=134;r.e();
};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TrackingSettings.OnSaveAnalyticsSettingsFailed",136);r.ln=136;{r.ln=138;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=139;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("TRACKINGSETTINGS.ONSAVEANALYTICSSETTINGSFAILED"),7500);}r.ln=141;r.e();};cO.mthSETSTRINGS=function(){var m=this.REF,r=l.mR(this,cO,"SetStrings",145);r.ln=145;{r.ln=147;m.PANELHEADING.setCaption(m.STRINGS.getTEXT("PANELHEADING.CAPTION"));r.ln=148;m.INSTRUCTIONTEXT.setCaption(m.STRINGS.getTEXT("INSTRUCTIONTEXT.CAPTION"));
r.ln=149;m.CONTROLPANELHEADING.setCaption(m.STRINGS.getTEXT("CONTROLPANELHEADING.CAPTION"));r.ln=150;m.ENABLEANALYTICS.setCaption(m.STRINGS.getTEXT("ENABLEANALYTICS.CAPTION"));r.ln=151;m.ANALYTICSTRACKINGCODEEDIT.setCaption(m.STRINGS.getTEXT("ANALYTICSTRACKINGCODEEDIT.CAPTION"));r.ln=152;m.ANALYTICSTRACKINGCODEEDIT.setHelperText(m.STRINGS.getTEXT("ANALYTICSTRACKINGCODEEDIT.HELPERTEXT"));r.ln=153;m.PANELACTION.setCaption(m.STRINGS.getTEXT("PANELACTION.CAPTION"));}r.ln=155;r.e();};cO.mthBUILDOPTIONS=function()
{var m=this.REF,r=l.mR(this,cO,"BuildOptions",157);r.ln=157;{r.ln=160;m.ENABLEANALYTICS.setChecked(m.TRACKINGSETTINGS.getANALYTICSENABLED());r.ln=161;m.ANALYTICSTRACKINGCODEEDIT.set(m.TRACKINGSETTINGS.getANALYTICSID());r.ln=164;m.ANALYTICSTRACKINGCODEEDIT.setEnabled(m.TRACKINGSETTINGS.getANALYTICSENABLED());}r.ln=166;r.e();};cO.setrefTRACKINGSETTINGS=function(rn){if(this.REF.TRACKINGSETTINGS!=null){this.REF.TRACKINGSETTINGS.rH("ONGETANALYTICSSETTINGSCOMPLETED",this,e7);this.REF.TRACKINGSETTINGS.rH("ONGETANALYTICSSETTINGSFAILED",this,e8);
this.REF.TRACKINGSETTINGS.rH("ONSAVEANALYTICSSETTINGSCOMPLETED",this,e9);this.REF.TRACKINGSETTINGS.rH("ONSAVEANALYTICSSETTINGSFAILED",this,e10);}this.sR("TRACKINGSETTINGS",rn);if(this.REF.TRACKINGSETTINGS!=null){this.REF.TRACKINGSETTINGS.aH("ONGETANALYTICSSETTINGSCOMPLETED",this,e7);this.REF.TRACKINGSETTINGS.aH("ONGETANALYTICSSETTINGSFAILED",this,e8);this.REF.TRACKINGSETTINGS.aH("ONSAVEANALYTICSSETTINGSCOMPLETED",this,e9);this.REF.TRACKINGSETTINGS.aH("ONSAVEANALYTICSSETTINGSFAILED",this,e10);}};},
{rc:["BPFAPP001","BPFAPP000","BPFVLR032"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_MD.FlatButton","PRIM_MD.Switch","PRIM_MD.Edit"],dc:["BPFAPP006"]});