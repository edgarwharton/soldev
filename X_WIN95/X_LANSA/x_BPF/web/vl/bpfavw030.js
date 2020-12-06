﻿LANSA.addComponent({id:"BPFAVW030",nm:"BPFSecurityQuestionsEditView",ot:"wv",tp:"View",pt:"ap",de:"Portal Security Questions Edit View",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{SetStrings:{},BuildSettingsForPanel:{}},co:function(){cO.aN.call(this);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("DATA","BPFAPP000");var C2=this.cR("STRINGS","BPFVLR030");this.cD("SECURITYSETTINGS");var C4=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");var C5=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");
var C6=this.cR("NOTACARD","PRIM_VS","Style");var C7=this.cR("MAINLAYOUT","PRIM_TBLO");var C8=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C9=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C10=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C11=this.cR("LAYOUTCOLUMN4","PRIM_TBLO","Column");var C12=this.cR("LAYOUTCOLUMN5","PRIM_TBLO","Column");var C13=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C14=this.cR("MAINLAYOUTROW1","PRIM_TBLO","Row");var C15=this.cR("MAINLAYOUTITEM1","PRIM_TBLO","Item");
var C16=this.cR("MAINLAYOUTITEM2","PRIM_TBLO","Item");var C17=this.cR("MAINLAYOUTITEM3","PRIM_TBLO","Item");var C18=this.cR("SETTINGSPANELLAYOUT","PRIM_TBLO");var C19=this.cR("SETTINGSPANELLAYOUTROW1","PRIM_TBLO","Row");var C20=this.cR("SETTINGSPANELLAYOUTROW2","PRIM_TBLO","Row");var C21=this.cR("SETTINGSPANELLAYOUTCOLUMN1","PRIM_TBLO","Column");var C22=this.cR("SETTINGSPANELLAYOUTCOLUMN2","PRIM_TBLO","Column");var C23=this.cR("SETTINGSPANELLAYOUTCOLUMN3","PRIM_TBLO","Column");var C24=this.cR("SETTINGSPANELLAYOUTITEM1","PRIM_TBLO","Item");
var C25=this.cR("SETTINGSPANELLAYOUTITEM3","PRIM_TBLO","Item");var C26=this.cR("SETTINGSPANELLAYOUTITEM2","PRIM_TBLO","Item");var C27=this.cR("SETTINGSLAYOUTLIST","PRIM_TBLO");var C28=this.cR("SETTINGSLAYOUTLISTCOLUMN1","PRIM_TBLO","Column");var C29=this.cR("SETTINGSLAYOUTLISTROW1","PRIM_TBLO","Row");var C30=this.cR("SETTINGSLAYOUTLISTITEM1","PRIM_TBLO","Item");var C31=this.cR("PANELHEADING","PRIM_MD","Label");var C32=this.cR("INSTRUCTIONTEXT","PRIM_MD","Label");var C33=this.cR("SETTINGSPANEL","PRIM_PANL");
var C34=this.cR("SETTINGSHEADING","PRIM_MD","Label");var C35=this.cR("SETTINGSLIST","PRIM_MD","List");var C36=this.cR("SAVEACTION","PRIM_MD","FlatButton");var C37=this.cR("SETTINGSEDIT","PRIM_MD","ListEdit");this.cD("CURRENTSETTING");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C4.setCornerBottomLeft(8);C4.setCornerBottomRight(8);C4.setCornerTopLeft(8);C4.setCornerTopRight(8);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setBorderRight(1);C4.setBorderBottom(1);
C4.iC();C5.setCursor("HAND");C5.iC();C6.setBorderBottom(0);C6.setBorderLeft(0);C6.setBorderRight(0);C6.setBorderTop(0);C6.iC();C7.setMarginTop(24);C7.setMarginBottom(24);C7.iC();C8.setDisplayPosition(1);C8.setParent(C7);C8.setMinWidth(8);C8.iC();C9.setDisplayPosition(2);C9.setParent(C7);C9.setMaxWidth(60);C9.iC();C10.setDisplayPosition(3);C10.setParent(C7);C10.setWidth(96);C10.setMinWidth(280);C10.setMaxWidth(880);C10.iC();C11.setDisplayPosition(4);C11.setParent(C7);C11.setMaxWidth(60);C11.iC();C12.setDisplayPosition(5);
C12.setParent(C7);C12.setMinWidth(8);C12.iC();C13.setDisplayPosition(1);C13.setParent(C7);C13.setHeight(93);C13.setUnits("CONTENT");C13.iC();C14.setDisplayPosition(2);C14.setParent(C7);C14.setHeight(470);C14.setUnits("CONTENT");C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C9);C15.setManage(C31);C15.setParent(C7);C15.setRow(C13);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setFlow("DOWN");C15.setColumnSpan(3);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C9);C16.setManage(C32);C16.setParent(C7);
C16.setRow(C13);C16.setSizing("CONTENTHEIGHTFITTOWIDTH");C16.setFlow("DOWN");C16.setMarginTop(24);C16.setColumnSpan(3);C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C10);C17.setManage(C33);C17.setParent(C7);C17.setRow(C14);C17.setSizing("FITTOWIDTH");C17.setFlow("DOWN");C17.setMarginTop(24);C17.iC();C18.setSizing("CONTENTHEIGHT");C18.iC();C19.setDisplayPosition(1);C19.setParent(C18);C19.setUnits("CONTENT");C19.setHeight(388);C19.iC();C20.setDisplayPosition(2);C20.setParent(C18);C20.setUnits("PIXELS");
C20.setHeight(56);C20.iC();C21.setDisplayPosition(1);C21.setParent(C18);C21.setMinWidth(24);C21.iC();C22.setDisplayPosition(2);C22.setParent(C18);C22.setWidth(98);C22.iC();C23.setDisplayPosition(3);C23.setParent(C18);C23.setMinWidth(24);C23.iC();C24.setManage(C34);C24.setParent(C18);C24.setRow(C19);C24.setSizing("CONTENTHEIGHTFITTOWIDTH");C24.setColumn(C22);C24.setAlignment("TOPLEFT");C24.setFlow("DOWN");C24.setMarginTop(24);C24.iC();C25.setAlignment("TOPLEFT");C25.setColumn(C22);C25.setManage(C35);
C25.setParent(C18);C25.setRow(C19);C25.setSizing("CONTENTHEIGHTFITTOWIDTH");C25.setMarginTop(16);C25.setFlow("DOWN");C25.iC();C26.setAlignment("CENTERRIGHT");C26.setColumn(C22);C26.setManage(C36);C26.setParent(C18);C26.setRow(C20);C26.setSizing("NONE");C26.iC();C27.iC();C28.setDisplayPosition(1);C28.setParent(C27);C28.iC();C29.setDisplayPosition(1);C29.setParent(C27);C29.iC();C30.setAlignment("TOPLEFT");C30.setColumn(C28);C30.setManage(C37);C30.setParent(C27);C30.setRow(C29);C30.iC();C31.setDisplayPosition(1);
C31.setLeft(350);C31.setParent(this);C31.setTabPosition(1);C31.setThemeDrawStyle("Heading1");C31.setTop(24);C31.setWidth(1000);C31.setIcon("arrow_back");C31.setCaptionMarginLeft(24);C31.setHeight(31);C31.setWordWrap(true);C31.setCaption("Edit Validation Questions");C31.setStyle(C5);C31.iC();C32.setCaptionAlignment("TOPLEFT");C32.setDisplayPosition(2);C32.setHeight(38);C32.setLeft(350);C32.setParent(this);C32.setTabPosition(2);C32.setTop(79);C32.setWidth(1000);C32.setWordWrap(true);C32.setCaption("Edit the current security questions used to verify end users. Note that questions are replaced and not deleted in case there are in use. Any change to a question will result in it being replaced.");
C32.iC();C33.setDisplayPosition(3);C33.setHeight(446);C33.setLeft(410);C33.setParent(this);C33.setTabPosition(3);C33.setTabStop(false);C33.setTop(141);C33.setWidth(880);C33.setThemeDrawStyle("Card");C33.setStyle(C4);C33.setLayoutManager(C18);C33.iC();C34.setCaption("Questions");C34.setDisplayPosition(1);C34.setLeft(24);C34.setParent(C33);C34.setTabPosition(1);C34.setThemeDrawStyle("Heading3");C34.setTop(24);C34.setWidth(830);C34.setWordWrap(true);C34.setHeight(24);C34.setIconAlignment("CENTERRIGHT");
C34.iC();C35.setDisplayPosition(2);C35.setLayoutManager(C27);C35.setLeft(24);C35.setParent(C33);C35.setRowHeight(80);C35.setTabPosition(2);C35.setTop(64);C35.setHeight(324);C35.setWidth(830);C35.iC();C36.setCaption("SAVE");C36.setDisplayPosition(3);C36.setLeft(754);C36.setParent(C33);C36.setTabPosition(3);C36.setThemeDrawStyle("ForegroundMediumPrimary");C36.setTop(398);C36.setStyle(C5);C36.iC();C37.setCaption("Caption");C37.setDisplayPosition(1);C37.setDragStyle("NONE");C37.setLeft(0);C37.setParent(C35);
C37.setTabPosition(1);C37.setTop(0);C37.setHeight(80);C37.setWidth(830);C37.setStyle(C6);C37.setThemeDrawStyle("card");C37.iC();C31.aH("CLICK",this,e3);C36.aH("CLICK",this,e9);C37.aH("CHANGED",this,e6);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1700);this.setHeight(800);this.setLayoutManager(C7);this.setVerticalScroll(true);this.setComponentTag("BPFAPP005");this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",83);
r.ln=83;{r.ln=86;this.setrefSECURITYSETTINGS(l.cast(m.DATA.ref.mthGETDATACLIENT(this),"BPFAPP005"));}r.ln=88;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",90);r.ln=90;{r.ln=93;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=94;this.mthSETSTRINGS();r.ln=96;if(m.SECURITYSETTINGS.getSECURITYQUESTIONS().getIsEmpty()){r.ln=98;m.SECURITYSETTINGS.mthGETACTIVEQUESTIONS(l.WEB().getURLParameters().get("LANG").getValue());}else{r.ln=102;this.mthBUILDSETTINGSFORPANEL();
r.ln=103;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}}r.ln=107;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#PanelHeading.Click",110);r.ln=110;{r.ln=112;l.WEB().getHistory().mthGOBACK(u);}r.ln=114;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#SecuritySettings.OnGetActiveQuestionsCompleted",118);r.ln=118;{r.ln=120;this.mthBUILDSETTINGSFORPANEL();r.ln=121;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=123;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SecuritySettings.OnGetActiveQuestionsFailed",125);
r.ln=125;{r.ln=127;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=128;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("SECURITYSETTINGS.ONGETACTIVEQUESTIONSFAILED"),7500);}r.ln=130;r.e();};function e6(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#SettingsEdit.Changed",132);r.ln=132;{r.ln=135;this.setrefCURRENTSETTING(l.cast(m.SETTINGSLIST.getCurrentItem().getRelatedReference(),"BPFCLS009"));r.ln=136;m.CURRENTSETTING.setVALUE(m.SETTINGSEDIT.getCurrentItem().getValue());}r.ln=138;
r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SecuritySettings.OnSaveActiveQuestionsCompleted",140);r.ln=140;{r.ln=142;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("SECURITYSETTINGS.ONSAVEACTIVEQUESTIONSCOMPLETED"));r.ln=143;l.WEB().getHistory().mthGOBACK(u);}r.ln=145;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SecuritySettings.OnSaveActiveQuestionsFailed",147);r.ln=147;{r.ln=149;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=150;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("SECURITYSETTINGS.ONSAVEACTIVEQUESTIONSFAILED"),7500);
}r.ln=152;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SaveAction.Click",155);r.ln=155;{r.ln=157;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=158;m.SECURITYSETTINGS.mthSAVEACTIVEQUESTIONS(l.WEB().getURLParameters().get("LANG").getValue());}r.ln=160;r.e();};cO.mthSETSTRINGS=function(){var m=this.REF,r=l.mR(this,cO,"SetStrings",164);r.ln=164;{r.ln=166;m.PANELHEADING.setCaption(m.STRINGS.getTEXT("PANELHEADING.CAPTION"));r.ln=167;m.INSTRUCTIONTEXT.setCaption(m.STRINGS.getTEXT("INSTRUCTIONTEXT.CAPTION"));
r.ln=168;m.SETTINGSHEADING.setCaption(m.STRINGS.getTEXT("SETTINGSHEADING.CAPTION"));r.ln=169;m.SAVEACTION.setCaption(m.STRINGS.getTEXT("SAVEACTION.CAPTION"));}r.ln=171;r.e();};cO.mthBUILDSETTINGSFORPANEL=function(){var m=this.REF,r=l.mR(this,cO,"BuildSettingsForPanel",173);r.ln=173;{r.ln=176;{var l1=m.SECURITYSETTINGS.getSECURITYQUESTIONS().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=179;m.SETTINGSLIST.addEntry();r.ln=184;m.SETTINGSLIST.getCurrentItem().setRelatedReference(ITEM);r.ln=187;
m.SETTINGSEDIT.getCurrentItem().setCaption(l.cat(l.cat(m.STRINGS.getTEXT("QUESTIONLABEL.CAPTION")," "),l.n.AsString(ITEM.getINDEX())));r.ln=188;m.SETTINGSEDIT.getCurrentItem().setValue(ITEM.getVALUE());r.ln=190;}l1.end();r.dR("ITEM");}}r.ln=192;r.e();};cO.setrefSECURITYSETTINGS=function(rn){if(this.REF.SECURITYSETTINGS!=null){this.REF.SECURITYSETTINGS.rH("ONGETACTIVEQUESTIONSCOMPLETED",this,e4);this.REF.SECURITYSETTINGS.rH("ONGETACTIVEQUESTIONSFAILED",this,e5);this.REF.SECURITYSETTINGS.rH("ONSAVEACTIVEQUESTIONSCOMPLETED",this,e7);
this.REF.SECURITYSETTINGS.rH("ONSAVEACTIVEQUESTIONSFAILED",this,e8);}this.sR("SECURITYSETTINGS",rn);if(this.REF.SECURITYSETTINGS!=null){this.REF.SECURITYSETTINGS.aH("ONGETACTIVEQUESTIONSCOMPLETED",this,e4);this.REF.SECURITYSETTINGS.aH("ONGETACTIVEQUESTIONSFAILED",this,e5);this.REF.SECURITYSETTINGS.aH("ONSAVEACTIVEQUESTIONSCOMPLETED",this,e7);this.REF.SECURITYSETTINGS.aH("ONSAVEACTIVEQUESTIONSFAILED",this,e8);}};cO.setrefCURRENTSETTING=function(rn){this.sR("CURRENTSETTING",rn);};},{rc:["BPFAPP001","BPFAPP000","BPFVLR030"],
rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_MD.List","PRIM_MD.FlatButton","PRIM_MD.ListEdit"],dc:["BPFAPP005","BPFCLS009"]});