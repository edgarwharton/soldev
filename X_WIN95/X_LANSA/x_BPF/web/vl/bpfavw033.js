﻿LANSA.addComponent({id:"BPFAVW033",nm:"BPFSessionEventsSettingsView",ot:"wv",tp:"View",pt:"ap",de:"Portal Session Eevnts Settings View",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{SetStrings:{},BuildOptions:{}},co:function(){cO.aN.call(this);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("DATA","BPFAPP000");var C2=this.cR("STRINGS","BPFVLR033");this.cD("TRACKINGSETTINGS");var C4=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");var C5=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");
var C6=this.cR("MAINLAYOUT","PRIM_TBLO");var C7=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C8=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C9=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C10=this.cR("LAYOUTCOLUMN4","PRIM_TBLO","Column");var C11=this.cR("LAYOUTCOLUMN5","PRIM_TBLO","Column");var C12=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C13=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C14=this.cR("MAINLAYOUTITEM1","PRIM_TBLO","Item");var C15=this.cR("MAINLAYOUTITEM2","PRIM_TBLO","Item");
var C16=this.cR("MAINLAYOUTITEM3","PRIM_TBLO","Item");var C17=this.cR("CONTROLLAYOUT","PRIM_TBLO");var C18=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C19=this.cR("LAYOUT1ROW2","PRIM_TBLO","Row");var C20=this.cR("CONTROLCOLUMN1","PRIM_TBLO","Column");var C21=this.cR("CONTROLCOLUMN2","PRIM_TBLO","Column");var C22=this.cR("CONTROLCOLUMN3","PRIM_TBLO","Column");var C23=this.cR("CONTROLLAYOUTITEM3","PRIM_TBLO","Item");var C24=this.cR("CONTROLLAYOUTITEM4","PRIM_TBLO","Item");var C25=this.cR("PANELHEADING","PRIM_MD","Label");
var C26=this.cR("INSTRUCTIONTEXT","PRIM_MD","Label");var C27=this.cR("CONTROLPANEL","PRIM_PANL");var C28=this.cR("ENABLESESSION","PRIM_MD","Switch");var C29=this.cR("CONTROLPANELHEADING","PRIM_MD","Label");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C4.setCornerBottomLeft(8);C4.setCornerBottomRight(8);C4.setCornerTopLeft(8);C4.setCornerTopRight(8);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setBorderRight(1);C4.setBorderBottom(1);C4.iC();C5.setCursor("HAND");
C5.iC();C6.setMarginTop(24);C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);C7.setMinWidth(8);C7.iC();C8.setDisplayPosition(2);C8.setParent(C6);C8.setMaxWidth(60);C8.iC();C9.setDisplayPosition(3);C9.setParent(C6);C9.setWidth(96);C9.setMinWidth(280);C9.setMaxWidth(880);C9.iC();C10.setDisplayPosition(4);C10.setParent(C6);C10.setMaxWidth(60);C10.iC();C11.setDisplayPosition(5);C11.setParent(C6);C11.setMinWidth(8);C11.iC();C12.setDisplayPosition(1);C12.setParent(C6);C12.setHeight(93);C12.setUnits("CONTENT");
C12.iC();C13.setDisplayPosition(2);C13.setParent(C6);C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C8);C14.setManage(C25);C14.setParent(C6);C14.setRow(C12);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.setFlow("DOWN");C14.setColumnSpan(3);C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C8);C15.setManage(C26);C15.setParent(C6);C15.setRow(C12);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setFlow("DOWN");C15.setMarginTop(24);C15.setColumnSpan(3);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C9);
C16.setManage(C27);C16.setParent(C6);C16.setRow(C13);C16.setSizing("FITTOWIDTH");C16.setFlow("DOWN");C16.setMarginTop(24);C16.iC();C17.setSizing("CONTENTHEIGHT");C17.iC();C18.setDisplayPosition(1);C18.setParent(C17);C18.setUnits("CONTENT");C18.setHeight(108);C18.iC();C19.setDisplayPosition(2);C19.setParent(C17);C19.setUnits("PIXELS");C19.setHeight(24);C19.iC();C20.setDisplayPosition(1);C20.setParent(C17);C20.setMinWidth(44);C20.iC();C21.setDisplayPosition(2);C21.setParent(C17);C21.setWidth(98);C21.iC();
C22.setDisplayPosition(3);C22.setParent(C17);C22.setMinWidth(44);C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C21);C23.setManage(C28);C23.setParent(C17);C23.setRow(C18);C23.setSizing("FITTOWIDTH");C23.setFlow("DOWN");C23.setMarginTop(16);C23.iC();C24.setAlignment("TOPLEFT");C24.setColumn(C21);C24.setManage(C29);C24.setParent(C17);C24.setRow(C18);C24.setSizing("CONTENTHEIGHTFITTOWIDTH");C24.setFlow("DOWN");C24.setMarginTop(24);C24.iC();C25.setCaption("Enable Tracking");C25.setDisplayPosition(1);
C25.setLeft(350);C25.setParent(this);C25.setTabPosition(1);C25.setThemeDrawStyle("Heading1");C25.setTop(24);C25.setWidth(1000);C25.setIcon("arrow_back");C25.setCaptionMarginLeft(24);C25.setHeight(31);C25.setWordWrap(true);C25.setStyle(C5);C25.iC();C26.setCaptionAlignment("TOPLEFT");C26.setDisplayPosition(2);C26.setHeight(38);C26.setLeft(350);C26.setParent(this);C26.setTabPosition(2);C26.setTop(79);C26.setWidth(1000);C26.setWordWrap(true);C26.setCaption("Enable the tracking of events during user sessions in the portal. When enabled the users and administrators can view events to see what has been done during a visit. Administrators will be able to view additionial event information for a user.");
C26.iC();C27.setDisplayPosition(3);C27.setHeight(134);C27.setLeft(410);C27.setParent(this);C27.setTabPosition(3);C27.setTabStop(false);C27.setTop(141);C27.setWidth(880);C27.setThemeDrawStyle("Card");C27.setStyle(C4);C27.setLayoutManager(C17);C27.iC();C28.setCaption("Enabled");C28.setChecked(true);C28.setDisplayPosition(2);C28.setIconAlignment("CENTERRIGHT");C28.setIconColor("THEME500");C28.setLeft(44);C28.setParent(C27);C28.setTabPosition(1);C28.setTop(64);C28.setWidth(790);C28.setHeight(44);C28.setStyle(C5);
C28.iC();C29.setDisplayPosition(1);C29.setLeft(44);C29.setParent(C27);C29.setTabPosition(2);C29.setThemeDrawStyle("Heading3");C29.setTop(24);C29.setWidth(790);C29.setCaption("Session Events");C29.setHeight(24);C29.setWordWrap(true);C29.iC();C25.aH("CLICK",this,e3);C28.aH("CHANGED",this,e4);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1700);this.setHeight(800);this.setLayoutManager(C6);this.setComponentTag("BPFAPP006");this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);
}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",65);r.ln=65;{r.ln=68;this.setrefTRACKINGSETTINGS(l.cast(m.DATA.ref.mthGETDATACLIENT(this),"BPFAPP006"));}r.ln=70;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",72);r.ln=72;{r.ln=74;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=75;this.mthSETSTRINGS();r.ln=77;m.TRACKINGSETTINGS.mthGETSESSIONSETTINGS();}r.ln=79;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#PanelHeading.Click",82);
r.ln=82;{r.ln=84;l.WEB().getHistory().mthGOBACK(u);}r.ln=86;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EnableSession.Changed",91);r.ln=91;{r.ln=93;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=95;m.TRACKINGSETTINGS.setSESSIONENABLED(m.ENABLESESSION.getChecked());r.ln=96;m.TRACKINGSETTINGS.mthSAVESESSIONSETTINGS();}r.ln=98;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#TrackingSettings.OnGetSessionSettingsCompleted",100);r.ln=100;{r.ln=102;this.mthBUILDOPTIONS();
r.ln=103;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=105;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TrackingSettings.OnGetSessionSettingsFailed",107);r.ln=107;{r.ln=109;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=110;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("TRACKINGSETTINGS.ONGETSESSIONSETTINGSFAILED"),7500);}r.ln=112;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TrackingSettings.OnSaveSessionSettingsCompleted",114);
r.ln=114;{r.ln=116;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("TRACKINGSETTINGS.ONSAVESESSIONSETTINGSCOMPLETED"));r.ln=117;l.WEB().getHistory().mthGOBACK(u);}r.ln=119;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TrackingSettings.OnSaveSessionSettingsFailed",121);r.ln=121;{r.ln=123;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=124;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("TRACKINGSETTINGS.ONSAVESESSIONSETTINGSFAILED"),7500);}r.ln=126;r.e();};cO.mthSETSTRINGS=function()
{var m=this.REF,r=l.mR(this,cO,"SetStrings",130);r.ln=130;{r.ln=132;m.PANELHEADING.setCaption(m.STRINGS.getTEXT("PANELHEADING.CAPTION"));r.ln=133;m.INSTRUCTIONTEXT.setCaption(m.STRINGS.getTEXT("INSTRUCTIONTEXT.CAPTION"));r.ln=134;m.CONTROLPANELHEADING.setCaption(m.STRINGS.getTEXT("CONTROLPANELHEADING.CAPTION"));r.ln=135;m.ENABLESESSION.setCaption(m.STRINGS.getTEXT("ENABLESESSION.CAPTION"));}r.ln=137;r.e();};cO.mthBUILDOPTIONS=function(){var m=this.REF,r=l.mR(this,cO,"BuildOptions",139);r.ln=139;{
r.ln=142;m.ENABLESESSION.setChecked(m.TRACKINGSETTINGS.getSESSIONENABLED());}r.ln=144;r.e();};cO.setrefTRACKINGSETTINGS=function(rn){if(this.REF.TRACKINGSETTINGS!=null){this.REF.TRACKINGSETTINGS.rH("ONGETSESSIONSETTINGSCOMPLETED",this,e5);this.REF.TRACKINGSETTINGS.rH("ONGETSESSIONSETTINGSFAILED",this,e6);this.REF.TRACKINGSETTINGS.rH("ONSAVESESSIONSETTINGSCOMPLETED",this,e7);this.REF.TRACKINGSETTINGS.rH("ONSAVESESSIONSETTINGSFAILED",this,e8);}this.sR("TRACKINGSETTINGS",rn);if(this.REF.TRACKINGSETTINGS!=null)
{this.REF.TRACKINGSETTINGS.aH("ONGETSESSIONSETTINGSCOMPLETED",this,e5);this.REF.TRACKINGSETTINGS.aH("ONGETSESSIONSETTINGSFAILED",this,e6);this.REF.TRACKINGSETTINGS.aH("ONSAVESESSIONSETTINGSCOMPLETED",this,e7);this.REF.TRACKINGSETTINGS.aH("ONSAVESESSIONSETTINGSFAILED",this,e8);}};},{rc:["BPFAPP001","BPFAPP000","BPFVLR033"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_MD.Switch"],dc:["BPFAPP006"]});