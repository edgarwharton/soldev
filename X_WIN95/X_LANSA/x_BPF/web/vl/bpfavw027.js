﻿LANSA.addComponent({id:"BPFAVW027",nm:"BPFEmailTemplatePreview",ot:"wv",tp:"View",pt:"ap",de:"Portal Email Templates Preview",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{BuildPanel:{}},co:function(){cO.aN.call(this);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("DATA","BPFAPP000");var C2=this.cR("STRINGS","BPFVLR027");this.cD("EMAILSETTINGS");var C4=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");var C5=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");var C6=this.cR("EMAILBODYSTYLE","PRIM_VS","Style");
var C7=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C8=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C9=this.cR("MAINLAYOUT","PRIM_TBLO");var C10=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C11=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C12=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C13=this.cR("LAYOUTCOLUMN4","PRIM_TBLO","Column");var C14=this.cR("LAYOUTCOLUMN5","PRIM_TBLO","Column");var C15=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C16=this.cR("MAINLAYOUTROW1","PRIM_TBLO","Row");
var C17=this.cR("MAINLAYOUTITEM1","PRIM_TBLO","Item");var C18=this.cR("MAINLAYOUTITEM2","PRIM_TBLO","Item");var C19=this.cR("MAINLAYOUTITEM3","PRIM_TBLO","Item");var C20=this.cR("TEMPLATESPANELLAYOUT","PRIM_TBLO");var C21=this.cR("TEMPLATESPANELLAYOUTROW1","PRIM_TBLO","Row");var C22=this.cR("TEMPLATESPANELLAYOUTROW2","PRIM_TBLO","Row");var C23=this.cR("TEMPLATESPANELLAYOUTCOLUMN1","PRIM_TBLO","Column");var C24=this.cR("TEMPLATESPANELLAYOUTCOLUMN2","PRIM_TBLO","Column");var C25=this.cR("TEMPLATESPANELLAYOUTCOLUMN3","PRIM_TBLO","Column");
var C26=this.cR("TEMPLATESPANELLAYOUTITEM1","PRIM_TBLO","Item");var C27=this.cR("TEMPLATESPANELLAYOUTITEM2","PRIM_TBLO","Item");var C28=this.cR("TEMPLATESPANELLAYOUTITEM3","PRIM_TBLO","Item");var C29=this.cR("TEMPLATESPANELLAYOUTITEM4","PRIM_TBLO","Item");var C30=this.cR("TEMPLATESPANELLAYOUTITEM5","PRIM_TBLO","Item");var C31=this.cR("TEMPLATESPANELLAYOUTITEM6","PRIM_TBLO","Item");var C32=this.cR("TEMPLATESPANELLAYOUTITEM7","PRIM_TBLO","Item");var C33=this.cR("PANELHEADING","PRIM_MD","Label");var C34=this.cR("INSTRUCTIONTEXT","PRIM_MD","Label");
var C35=this.cR("TEMPLATESPANEL","PRIM_PANL");var C36=this.cR("TEMPLATESHEADING","PRIM_MD","Label");var C37=this.cR("TEMPLATESUBJECTLINE","PRIM_MD","Label");var C38=this.cR("TEMPLATEFROMADDRESSLINE","PRIM_MD","Label");var C39=this.cR("TEMPLATETOADDRESSLINE","PRIM_MD","Label");var C40=this.cR("TEMPLATEBODY","PRIM_WEB","HtmlContainer");var C41=this.cR("TEMPLATEDOWNLOAD","PRIM_MD","Label");this.cD("CURRENTTEMPLATE");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}
C2.iC();C4.setCornerBottomLeft(8);C4.setCornerBottomRight(8);C4.setCornerTopLeft(8);C4.setCornerTopRight(8);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setBorderRight(1);C4.setBorderBottom(1);C4.iC();C5.setCursor("HAND");C5.iC();C6.setBorderBottom(8);C6.setBorderLeft(8);C6.setBorderRight(8);C6.setBorderTop(8);C6.setBorderBrush(C8);C6.setForegroundBrush(C7);C6.iC();C7.setColor("0:0:0");C7.iC();C8.setColor("245:245:245");C8.iC();C9.setMarginTop(24);C9.setMarginBottom(24);C9.iC();C10.setDisplayPosition(1);
C10.setParent(C9);C10.setMinWidth(8);C10.iC();C11.setDisplayPosition(2);C11.setParent(C9);C11.setMaxWidth(60);C11.iC();C12.setDisplayPosition(3);C12.setParent(C9);C12.setWidth(96);C12.setMinWidth(280);C12.setMaxWidth(880);C12.iC();C13.setDisplayPosition(4);C13.setParent(C9);C13.setMaxWidth(60);C13.iC();C14.setDisplayPosition(5);C14.setParent(C9);C14.setMinWidth(8);C14.iC();C15.setDisplayPosition(1);C15.setParent(C9);C15.setHeight(93);C15.setUnits("CONTENT");C15.iC();C16.setDisplayPosition(2);C16.setParent(C9);
C16.setHeight(487);C16.setUnits("CONTENT");C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C11);C17.setManage(C33);C17.setParent(C9);C17.setRow(C15);C17.setSizing("CONTENTHEIGHTFITTOWIDTH");C17.setFlow("DOWN");C17.setColumnSpan(3);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C11);C18.setManage(C34);C18.setParent(C9);C18.setRow(C15);C18.setSizing("CONTENTHEIGHTFITTOWIDTH");C18.setFlow("DOWN");C18.setMarginTop(24);C18.setColumnSpan(3);C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C12);
C19.setManage(C35);C19.setParent(C9);C19.setRow(C16);C19.setSizing("CONTENTHEIGHTFITTOWIDTH");C19.setFlow("DOWN");C19.setMarginTop(24);C19.iC();C20.setSizing("CONTENTHEIGHT");C20.iC();C21.setDisplayPosition(1);C21.setParent(C20);C21.setUnits("CONTENT");C21.setHeight(437);C21.iC();C22.setDisplayPosition(2);C22.setParent(C20);C22.setUnits("PIXELS");C22.setHeight(24);C22.iC();C23.setDisplayPosition(1);C23.setParent(C20);C23.setMinWidth(24);C23.iC();C24.setDisplayPosition(2);C24.setParent(C20);C24.setWidth(98);
C24.iC();C25.setDisplayPosition(3);C25.setParent(C20);C25.setMinWidth(24);C25.iC();C26.setManage(C36);C26.setParent(C20);C26.setRow(C21);C26.setSizing("FITTOWIDTH");C26.setColumn(C24);C26.setAlignment("TOPLEFT");C26.setFlow("DOWN");C26.setMarginRight(36);C26.setMarginTop(12);C26.iC();C27.setManage(C37);C27.setParent(C20);C27.setRow(C21);C27.setSizing("CONTENTHEIGHTFITTOWIDTH");C27.setColumn(C24);C27.setAlignment("TOPLEFT");C27.setFlow("DOWN");C27.iC();C28.setManage(C38);C28.setParent(C20);C28.setRow(C21);
C28.setSizing("CONTENTHEIGHTFITTOWIDTH");C28.setColumn(C24);C28.setAlignment("TOPLEFT");C28.setFlow("DOWN");C28.setMarginTop(24);C28.iC();C29.setManage(C38);C29.setParent(C20);C29.setRow(C21);C29.setSizing("CONTENTHEIGHTFITTOWIDTH");C29.setColumn(C24);C29.setAlignment("TOPLEFT");C29.setFlow("DOWN");C29.setMarginTop(2);C29.iC();C30.setAlignment("TOPLEFT");C30.setColumn(C24);C30.setManage(C40);C30.setParent(C20);C30.setRow(C21);C30.setSizing("CONTENTHEIGHTFITTOWIDTH");C30.setFlow("DOWN");C30.iC();C31.setAlignment("TOPLEFT");
C31.setColumn(C24);C31.setManage(C39);C31.setParent(C20);C31.setRow(C21);C31.setSizing("CONTENTHEIGHTFITTOWIDTH");C31.setFlow("DOWN");C31.setMarginBottom(16);C31.iC();C32.setAlignment("TOPRIGHT");C32.setColumn(C24);C32.setManage(C41);C32.setParent(C20);C32.setRow(C21);C32.setSizing("NONE");C32.setMarginLeft(12);C32.setMarginTop(12);C32.iC();C33.setDisplayPosition(1);C33.setLeft(350);C33.setParent(this);C33.setTabPosition(1);C33.setThemeDrawStyle("Heading1");C33.setTop(24);C33.setWidth(1000);C33.setIcon("arrow_back");
C33.setCaptionMarginLeft(24);C33.setHeight(31);C33.setWordWrap(true);C33.setCaption("Preview Email");C33.setStyle(C5);C33.iC();C34.setDisplayPosition(2);C34.setHeight(38);C34.setLeft(350);C34.setParent(this);C34.setTabPosition(2);C34.setTop(79);C34.setWidth(1000);C34.setWordWrap(true);C34.setCaption("This is a preview of how email template might look to the end user as email clients can vary in how they display HTML emails. You can customise this email by clicking on the edit icon.");C34.iC();C35.setDisplayPosition(3);
C35.setHeight(463);C35.setLeft(410);C35.setParent(this);C35.setTabPosition(3);C35.setTabStop(false);C35.setTop(141);C35.setWidth(880);C35.setThemeDrawStyle("Card");C35.setStyle(C4);C35.setLayoutManager(C20);C35.iC();C36.setDisplayPosition(1);C36.setLeft(24);C36.setParent(C35);C36.setTabPosition(2);C36.setThemeDrawStyle("Heading3");C36.setTop(12);C36.setWidth(794);C36.setWordWrap(true);C36.setHeight(48);C36.setIcon("edit");C36.setIconAlignment("CENTERRIGHT");C36.setIconColor("THEME500");C36.setStyle(C5);
C36.setCaptionMarginBottom(0);C36.setCaptionMarginLeft(0);C36.setCaptionMarginRight(0);C36.setCaptionMarginTop(0);C36.setIconMarginRight(12);C36.iC();C37.setDisplayPosition(2);C37.setLeft(24);C37.setParent(C35);C37.setTabPosition(5);C37.setThemeDrawStyle("Heading3");C37.setTop(60);C37.setWidth(830);C37.setWordWrap(true);C37.setHeight(10);C37.iC();C38.setDisplayPosition(3);C38.setLeft(24);C38.setParent(C35);C38.setTabPosition(4);C38.setTop(94);C38.setWidth(830);C38.setWordWrap(true);C38.setHeight(10);
C38.iC();C39.setDisplayPosition(4);C39.setLeft(24);C39.setParent(C35);C39.setTabPosition(3);C39.setTop(104);C39.setWidth(830);C39.setWordWrap(true);C39.setHeight(19);C39.setCaption("to me");C39.setThemeDrawStyle("Subheading");C39.iC();C40.setDescription("Email body");C40.setDisplayPosition(5);C40.setHeight(298);C40.setParent(C35);C40.setTabPosition(1);C40.setTabStop(false);C40.setWidth(830);C40.setLeft(24);C40.setTop(139);C40.setStyle(C6);C40.iC();C41.setDisplayPosition(6);C41.setIcon("cloud_download");
C41.setLeft(818);C41.setParent(C35);C41.setTabPosition(6);C41.setTop(12);C41.setCaptionMarginBottom(0);C41.setCaptionMarginLeft(0);C41.setCaptionMarginRight(0);C41.setCaptionMarginTop(0);C41.setHeight(48);C41.setWidth(48);C41.setIconColor("THEME500");C41.setIconAlignment("CENTER");C41.setStyle(C5);C41.iC();C33.aH("CLICK",this,e3);C36.aH("CLICK",this,e4);C41.aH("CLICK",this,e5);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1700);this.setHeight(800);this.setLayoutManager(C9);this.setVerticalScroll(true);
this.setComponentTag("BPFAPP004");this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",84);r.ln=84;{r.ln=87;this.setrefEMAILSETTINGS(l.cast(m.DATA.ref.mthGETDATACLIENT(this),"BPFAPP004"));}r.ln=89;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",91);r.ln=91;{r.ln=94;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=96;m.INSTRUCTIONTEXT.setCaption(m.STRINGS.getTEXT("INSTRUCTIONTEXT.CAPTION"));
r.ln=99;this.setrefCURRENTTEMPLATE(m.EMAILSETTINGS.getTEMPLATE(l.WEB().getURLParameters().get("VALUE").getValue()));r.ln=101;if((m.CURRENTTEMPLATE!=null)){r.ln=103;m.PANELHEADING.set(l.cat(l.cat(m.STRINGS.getTEXT("PANELHEADING.CAPTION")," "),m.CURRENTTEMPLATE.getDISPLAYNAME()));r.ln=106;m.CURRENTTEMPLATE.mthLOAD(l.WEB().getURLParameters().get("LANG").getValue());}else{r.ln=110;m.EMAILSETTINGS.mthLOADEMAILTEMPLATE(l.WEB().getURLParameters().get("LANG").getValue(),l.WEB().getURLParameters().get("VALUE").getValue());
}}r.ln=114;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#PanelHeading.Click",117);r.ln=117;{r.ln=119;l.WEB().getHistory().mthGOBACK(u);}r.ln=121;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TemplatesHeading.Click",123);r.ln=123;{r.ln=125;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=129;l.WEB().getHistory().mthADD(l.cat(l.cat(l.cat("event=emailtemplateeditview&value=",m.CURRENTTEMPLATE.getTEMPLATEID()),"&lang="),l.WEB().getURLParameters().get("LANG").getValue()));
}r.ln=131;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TemplateDownload.Click",133);r.ln=133;{r.ln=135;m.CURRENTTEMPLATE.mthDOWNLOAD();}r.ln=137;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EmailSettings.OnLoadEmailTemplateCompleted",140);r.ln=140;{r.ln=143;this.setrefCURRENTTEMPLATE(m.EMAILSETTINGS.getTEMPLATE(l.WEB().getURLParameters().get("VALUE").getValue()));r.ln=145;if((m.CURRENTTEMPLATE!=null)){r.ln=147;m.PANELHEADING.set(l.cat(l.cat(m.STRINGS.getTEXT("PANELHEADING.CAPTION")," "),m.CURRENTTEMPLATE.getDISPLAYNAME()));
r.ln=150;m.CURRENTTEMPLATE.mthLOAD(l.WEB().getURLParameters().get("LANG").getValue());}}r.ln=154;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EmailSettings.OnLoadEmailTemplateFailed",156);r.ln=156;{r.ln=158;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=159;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("EMAILSETTINGS.ONLOADEMAILTEMPLATEFAILED"),7500);}r.ln=161;r.e();};function e8(sender,Ps){var r=l.eR(this,cO,"#CurrentTemplate.OnLoadCompleted",163);r.ln=163;
{r.ln=165;this.mthBUILDPANEL();r.ln=166;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=168;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CurrentTemplate.OnLoadFailed",170);r.ln=170;{r.ln=172;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=173;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("CURRENTTEMPLATE.ONLOADFAILED"),7500);}r.ln=175;r.e();};cO.mthBUILDPANEL=function(){var m=this.REF,r=l.mR(this,cO,"BuildPanel",178);r.ln=178;{r.ln=181;m.TEMPLATESUBJECTLINE.set(m.CURRENTTEMPLATE.getPROPERTYVALUE("SUBJECT"));
r.ln=182;m.TEMPLATEFROMADDRESSLINE.set(l.cat(l.cat(l.cat(m.CURRENTTEMPLATE.getPROPERTYVALUE("FROM_NAME")," <"),m.CURRENTTEMPLATE.getPROPERTYVALUE("FROM_ADDRESS")),">"));r.ln=185;m.TEMPLATEBODY.setHtml(m.CURRENTTEMPLATE.getBODY());}r.ln=187;r.e();};cO.setrefEMAILSETTINGS=function(rn){if(this.REF.EMAILSETTINGS!=null){this.REF.EMAILSETTINGS.rH("ONLOADEMAILTEMPLATECOMPLETED",this,e6);this.REF.EMAILSETTINGS.rH("ONLOADEMAILTEMPLATEFAILED",this,e7);}this.sR("EMAILSETTINGS",rn);if(this.REF.EMAILSETTINGS!=null)
{this.REF.EMAILSETTINGS.aH("ONLOADEMAILTEMPLATECOMPLETED",this,e6);this.REF.EMAILSETTINGS.aH("ONLOADEMAILTEMPLATEFAILED",this,e7);}};cO.setrefCURRENTTEMPLATE=function(rn){if(this.REF.CURRENTTEMPLATE!=null){this.REF.CURRENTTEMPLATE.rH("ONLOADCOMPLETED",this,e8);this.REF.CURRENTTEMPLATE.rH("ONLOADFAILED",this,e9);}this.sR("CURRENTTEMPLATE",rn);if(this.REF.CURRENTTEMPLATE!=null){this.REF.CURRENTTEMPLATE.aH("ONLOADCOMPLETED",this,e8);this.REF.CURRENTTEMPLATE.aH("ONLOADFAILED",this,e9);}};},{rc:["BPFAPP001","BPFAPP000","BPFVLR027"],
rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_WEB.HtmlContainer"],dc:["BPFAPP004","BPFCLS010"]});