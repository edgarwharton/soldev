﻿LANSA.addComponent({id:"BPFAVW046",nm:"BPFSystemSettingsResourcesView",ot:"wv",tp:"View",pt:"ap",de:"Portal System Settings View",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{SetStrings:{},BuildSwitchControlsForPanel:{}},co:function(){cO.aN.call(this);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("DATA","BPFAPP000");var C2=this.cA("BROWSER","BPFWGT001");var C3=this.cR("STRINGS","BPFVLR046");this.cD("PORTALSETTINGS");var C5=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");
var C6=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");var C7=this.cR("NOTACARD","PRIM_VS","Style");var C8=this.cR("MAINLAYOUT","PRIM_TBLO");var C9=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C10=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C11=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C12=this.cR("LAYOUTCOLUMN4","PRIM_TBLO","Column");var C13=this.cR("LAYOUTCOLUMN5","PRIM_TBLO","Column");var C14=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C15=this.cR("MAINLAYOUTROW1","PRIM_TBLO","Row");
var C16=this.cR("MAINLAYOUTITEM1","PRIM_TBLO","Item");var C17=this.cR("MAINLAYOUTITEM2","PRIM_TBLO","Item");var C18=this.cR("MAINLAYOUTITEM3","PRIM_TBLO","Item");var C19=this.cR("TEMPLATESPANELLAYOUT","PRIM_TBLO");var C20=this.cR("TEMPLATESPANELLAYOUTROW1","PRIM_TBLO","Row");var C21=this.cR("TEMPLATESPANELLAYOUTROW2","PRIM_TBLO","Row");var C22=this.cR("TEMPLATESPANELLAYOUTCOLUMN1","PRIM_TBLO","Column");var C23=this.cR("TEMPLATESPANELLAYOUTCOLUMN2","PRIM_TBLO","Column");var C24=this.cR("TEMPLATESPANELLAYOUTCOLUMN3","PRIM_TBLO","Column");
var C25=this.cR("TEMPLATESPANELLAYOUTITEM1","PRIM_TBLO","Item");var C26=this.cR("TEMPLATESPANELLAYOUTITEM2","PRIM_TBLO","Item");var C27=this.cR("TEMPLATESPANELLAYOUTITEM3","PRIM_TBLO","Item");var C28=this.cR("TEMPLATESLAYOUTLIST","PRIM_TBLO");var C29=this.cR("TEMPLATESLAYOUTLISTCOLUMN1","PRIM_TBLO","Column");var C30=this.cR("TEMPLATESLAYOUTLISTROW1","PRIM_TBLO","Row");var C31=this.cR("TEMPLATESLAYOUTLISTITEM2","PRIM_TBLO","Item");var C32=this.cR("PANELHEADING","PRIM_MD","Label");var C33=this.cR("INSTRUCTIONTEXT","PRIM_MD","Label");
var C34=this.cR("TEMPLATESPANEL","PRIM_PANL");var C35=this.cR("TEMPLATESHEADING","PRIM_MD","Label");var C36=this.cR("TEMPLATESLIST","PRIM_MD","List");var C37=this.cR("TEMPLATESLABEL","PRIM_MD","ListLabel");var C38=this.cR("LANGUAGESELECTION","BPFUDC007");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}if((C2!=null)&&(C2.iI()==false)){C2.iC();}C3.iC();C5.setCornerBottomLeft(8);C5.setCornerBottomRight(8);C5.setCornerTopLeft(8);C5.setCornerTopRight(8);C5.setBorderLeft(1);
C5.setBorderTop(1);C5.setBorderRight(1);C5.setBorderBottom(1);C5.iC();C6.setCursor("HAND");C6.iC();C7.setBorderBottom(0);C7.setBorderLeft(0);C7.setBorderRight(0);C7.setBorderTop(0);C7.iC();C8.setMarginTop(24);C8.setMarginBottom(24);C8.iC();C9.setDisplayPosition(1);C9.setParent(C8);C9.setMinWidth(8);C9.iC();C10.setDisplayPosition(2);C10.setParent(C8);C10.setMaxWidth(60);C10.iC();C11.setDisplayPosition(3);C11.setParent(C8);C11.setWidth(96);C11.setMinWidth(280);C11.setMaxWidth(880);C11.iC();C12.setDisplayPosition(4);
C12.setParent(C8);C12.setMaxWidth(60);C12.iC();C13.setDisplayPosition(5);C13.setParent(C8);C13.setMinWidth(8);C13.iC();C14.setDisplayPosition(1);C14.setParent(C8);C14.setHeight(93);C14.setUnits("CONTENT");C14.iC();C15.setDisplayPosition(2);C15.setParent(C8);C15.setHeight(294);C15.setUnits("CONTENT");C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C10);C16.setManage(C32);C16.setParent(C8);C16.setRow(C14);C16.setSizing("CONTENTHEIGHTFITTOWIDTH");C16.setFlow("DOWN");C16.setColumnSpan(3);C16.iC();
C17.setAlignment("TOPLEFT");C17.setColumn(C10);C17.setManage(C33);C17.setParent(C8);C17.setRow(C14);C17.setSizing("CONTENTHEIGHTFITTOWIDTH");C17.setFlow("DOWN");C17.setMarginTop(24);C17.setColumnSpan(3);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C11);C18.setManage(C34);C18.setParent(C8);C18.setRow(C15);C18.setSizing("FITTOWIDTH");C18.setFlow("DOWN");C18.setMarginTop(24);C18.iC();C19.setSizing("CONTENTHEIGHT");C19.iC();C20.setDisplayPosition(1);C20.setParent(C19);C20.setUnits("CONTENT");C20.setHeight(244);
C20.iC();C21.setDisplayPosition(2);C21.setParent(C19);C21.setUnits("PIXELS");C21.setHeight(24);C21.iC();C22.setDisplayPosition(1);C22.setParent(C19);C22.setMinWidth(24);C22.iC();C23.setDisplayPosition(2);C23.setParent(C19);C23.setWidth(98);C23.iC();C24.setDisplayPosition(3);C24.setParent(C19);C24.setMinWidth(24);C24.iC();C25.setManage(C35);C25.setParent(C19);C25.setRow(C20);C25.setSizing("CONTENTHEIGHTFITTOWIDTH");C25.setColumn(C23);C25.setAlignment("TOPLEFT");C25.setFlow("DOWN");C25.setMarginTop(24);
C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C23);C26.setManage(C36);C26.setParent(C19);C26.setRow(C20);C26.setSizing("CONTENTHEIGHTFITTOWIDTH");C26.setFlow("DOWN");C26.setMarginTop(16);C26.iC();C27.setAlignment("TOPRIGHT");C27.setColumn(C23);C27.setManage(C38);C27.setParent(C19);C27.setRow(C20);C27.setSizing("NONE");C27.setMarginTop(10);C27.iC();C28.iC();C29.setDisplayPosition(1);C29.setParent(C28);C29.iC();C30.setDisplayPosition(1);C30.setParent(C28);C30.iC();C31.setAlignment("TOPLEFT");C31.setColumn(C29);
C31.setManage(C37);C31.setParent(C28);C31.setRow(C30);C31.iC();C32.setDisplayPosition(1);C32.setLeft(350);C32.setParent(this);C32.setTabPosition(1);C32.setThemeDrawStyle("Heading1");C32.setTop(24);C32.setWidth(1000);C32.setIcon("arrow_back");C32.setCaptionMarginLeft(24);C32.setHeight(31);C32.setWordWrap(true);C32.setCaption("Portal Resources");C32.setStyle(C6);C32.iC();C33.setDisplayPosition(2);C33.setHeight(38);C33.setLeft(350);C33.setParent(this);C33.setTabPosition(2);C33.setTop(79);C33.setWidth(1000);
C33.setWordWrap(true);C33.setCaption("Manage the resources that are used by the portal to generate files or display content. You can upload a new portal resource file along setting the name of teh file to be used.");C33.iC();C34.setDisplayPosition(3);C34.setHeight(270);C34.setLeft(410);C34.setParent(this);C34.setTabPosition(3);C34.setTabStop(false);C34.setTop(141);C34.setWidth(880);C34.setThemeDrawStyle("Card");C34.setStyle(C5);C34.setLayoutManager(C19);C34.iC();C35.setCaption("Resources");C35.setDisplayPosition(2);
C35.setLeft(24);C35.setParent(C34);C35.setTabPosition(1);C35.setThemeDrawStyle("Heading3");C35.setTop(24);C35.setWidth(830);C35.setWordWrap(true);C35.setHeight(24);C35.iC();C36.setDisplayPosition(3);C36.setLayoutManager(C28);C36.setLeft(24);C36.setParent(C34);C36.setRowHeight(44);C36.setTabPosition(2);C36.setTop(64);C36.setHeight(180);C36.setWidth(830);C36.iC();C37.setCaption("Text");C37.setDisplayPosition(1);C37.setDragStyle("NONE");C37.setLeft(0);C37.setParent(C36);C37.setTabPosition(1);C37.setTop(0);
C37.setHeight(44);C37.setWidth(830);C37.setIconAlignment("CENTERRIGHT");C37.setIcon("keyboard_arrow_right");C37.setIconColor("THEME500");C37.setThemeDrawStyle("card");C37.setStyle(C7);C37.iC();C38.setLeft(690);C38.setParent(C34);C38.setTabPosition(3);C38.setTabStop(false);C38.setTop(10);C38.iC();C32.aH("CLICK",this,e3);C36.aH("ITEMCLICK",this,e4);C38.aH("CHANGED",this,e5);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1700);this.setHeight(800);this.setLayoutManager(C8);this.setVerticalScroll(true);
this.setStyle(C6);this.setComponentTag("BPFAPP007");this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",79);r.ln=79;{r.ln=82;this.setrefPORTALSETTINGS(l.cast(m.DATA.ref.mthGETDATACLIENT(this),"BPFAPP007"));}r.ln=84;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",86);r.ln=86;{r.ln=89;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=90;this.mthSETSTRINGS();
r.ln=92;m.LANGUAGESELECTION.getCONTROL().set(m.BROWSER.ref.getUSERLANGUAGE());r.ln=94;m.PORTALSETTINGS.mthGETRESOURCES(m.LANGUAGESELECTION.getCONTROL().get());}r.ln=96;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#PanelHeading.Click",99);r.ln=99;{r.ln=101;l.WEB().getHistory().mthGOBACK(u);}r.ln=103;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TemplatesList.ItemClick",105);r.ln=105;{r.ln=107;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=111;l.WEB().getHistory().mthADD(l.cat(l.cat(l.cat("event=systemsettingsresourceseditview&value=",l.s.LowerCase(l.cast(m.TEMPLATESLIST.getCurrentItem().getRelatedReference(),"BPFCLS011").getCODENAME())),"&lang="),m.LANGUAGESELECTION.getCONTROL().get()));
}r.ln=113;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LanguageSelection.Changed",115);r.ln=115;{r.ln=117;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=118;m.PORTALSETTINGS.mthGETRESOURCES(m.LANGUAGESELECTION.getCONTROL().get());}r.ln=120;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#PortalSettings.OnGetResourcesCompleted",123);r.ln=123;{r.ln=125;this.mthBUILDSWITCHCONTROLSFORPANEL();r.ln=126;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=128;
r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PortalSettings.OnGetResourcesFailed",130);r.ln=130;{r.ln=132;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=133;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("PORTALSETTINGS.ONGETRESOURCESFAILED"),7500);}r.ln=135;r.e();};cO.mthSETSTRINGS=function(){var m=this.REF,r=l.mR(this,cO,"SetStrings",139);r.ln=139;{r.ln=141;m.PANELHEADING.setCaption(m.STRINGS.getTEXT("PANELHEADING.CAPTION"));r.ln=142;m.INSTRUCTIONTEXT.setCaption(m.STRINGS.getTEXT("INSTRUCTIONTEXT.CAPTION"));
r.ln=143;m.TEMPLATESHEADING.setCaption(m.STRINGS.getTEXT("TEMPLATESHEADING.CAPTION"));}r.ln=145;r.e();};cO.mthBUILDSWITCHCONTROLSFORPANEL=function(){var m=this.REF,r=l.mR(this,cO,"BuildSwitchControlsForPanel",147);r.ln=147;{r.ln=150;m.TEMPLATESLIST.clearList();r.ln=153;{var l1=m.PORTALSETTINGS.getRESOURCES().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=156;m.TEMPLATESLIST.addEntry();r.ln=161;m.TEMPLATESLIST.getCurrentItem().setRelatedReference(ITEM);r.ln=164;m.TEMPLATESLABEL.getCurrentItem().setCaption(m.STRINGS.getTEXT(l.cat(ITEM.getTEXT(),"LABEL.CAPTION")));
r.ln=166;}l1.end();r.dR("ITEM");}}r.ln=168;r.e();};cO.setrefPORTALSETTINGS=function(rn){if(this.REF.PORTALSETTINGS!=null){this.REF.PORTALSETTINGS.rH("ONGETRESOURCESCOMPLETED",this,e6);this.REF.PORTALSETTINGS.rH("ONGETRESOURCESFAILED",this,e7);}this.sR("PORTALSETTINGS",rn);if(this.REF.PORTALSETTINGS!=null){this.REF.PORTALSETTINGS.aH("ONGETRESOURCESCOMPLETED",this,e6);this.REF.PORTALSETTINGS.aH("ONGETRESOURCESFAILED",this,e7);}};},{rc:["BPFAPP001","BPFAPP000","BPFWGT001","BPFVLR046","BPFUDC007"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_MD.List","PRIM_MD.ListLabel"],
dc:["BPFAPP007"]});