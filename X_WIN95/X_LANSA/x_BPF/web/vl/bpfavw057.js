﻿LANSA.addComponent({id:"BPFAVW057",nm:"BPFAdminUserSetAdminRightsView",ot:"wv",tp:"View",pt:"ap",de:"Portal Admin User Set Admin rights",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{SetPanelDisplay:{}},co:function(){cO.aN.call(this);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("DATA","BPFAPP000");var C2=this.cR("STRINGS","BPFVLR057");this.cD("USERACCOUNTS");var C4=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");var C5=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");var C6=this.cR("MAINLAYOUT","PRIM_TBLO");
var C7=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C8=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C9=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C10=this.cR("LAYOUTCOLUMN4","PRIM_TBLO","Column");var C11=this.cR("LAYOUTCOLUMN5","PRIM_TBLO","Column");var C12=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C13=this.cR("MAINLAYOUTROW1","PRIM_TBLO","Row");var C14=this.cR("MAINLAYOUTITEM1","PRIM_TBLO","Item");var C15=this.cR("MAINLAYOUTITEM2","PRIM_TBLO","Item");var C16=this.cR("MAINLAYOUTITEM3","PRIM_TBLO","Item");
var C17=this.cR("CONFIRMATIONPANELLAYOUT","PRIM_TBLO");var C18=this.cR("CONFIRMATIONPANELLAYOUTROW1","PRIM_TBLO","Row");var C19=this.cR("CONFIRMATIONPANELLAYOUTROW2","PRIM_TBLO","Row");var C20=this.cR("CONFIRMATIONPANELLAYOUTCOLUMN1","PRIM_TBLO","Column");var C21=this.cR("CONFIRMATIONPANELLAYOUTCOLUMN2","PRIM_TBLO","Column");var C22=this.cR("CONFIRMATIONPANELLAYOUTCOLUMN3","PRIM_TBLO","Column");var C23=this.cR("CONFIRMATIONPANELLAYOUTITEM1","PRIM_TBLO","Item");var C24=this.cR("CONFIRMATIONPANELLAYOUTITEM3","PRIM_TBLO","Item");
var C25=this.cR("CONFIRMATIONPANELLAYOUTITEM4","PRIM_TBLO","Item");var C26=this.cR("CONFIRMATIONPANELLAYOUTITEM5","PRIM_TBLO","Item");var C27=this.cR("PANELHEADING","PRIM_MD","Label");var C28=this.cR("INSTRUCTIONTEXT","PRIM_MD","Label");var C29=this.cR("CONFIRMATIONPANEL","PRIM_PANL");var C30=this.cR("CONFIRMATIONPANELHEADING","PRIM_MD","Label");var C31=this.cR("DIVIDER","PRIM_PANL");var C32=this.cR("CONFIRMATIONACTION","PRIM_MD","FlatButton");var C33=this.cR("CONFIRMATIONPANELTEXT","PRIM_MD","Label");
this.cD("CURRENTACCOUNT");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C4.setCornerBottomLeft(8);C4.setCornerBottomRight(8);C4.setCornerTopLeft(8);C4.setCornerTopRight(8);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setBorderRight(1);C4.setBorderBottom(1);C4.iC();C5.setCursor("HAND");C5.iC();C6.setMarginTop(24);C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);C7.setMinWidth(8);C7.iC();C8.setDisplayPosition(2);C8.setParent(C6);C8.setMaxWidth(60);C8.iC();
C9.setDisplayPosition(3);C9.setParent(C6);C9.setWidth(96);C9.setMinWidth(280);C9.setMaxWidth(880);C9.iC();C10.setDisplayPosition(4);C10.setParent(C6);C10.setMaxWidth(60);C10.iC();C11.setDisplayPosition(5);C11.setParent(C6);C11.setMinWidth(8);C11.iC();C12.setDisplayPosition(1);C12.setParent(C6);C12.setHeight(76);C12.setUnits("CONTENT");C12.iC();C13.setDisplayPosition(2);C13.setParent(C6);C13.setHeight(170);C13.setUnits("CONTENT");C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C8);C14.setManage(C27);
C14.setParent(C6);C14.setRow(C12);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.setFlow("DOWN");C14.setColumnSpan(3);C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C8);C15.setManage(C28);C15.setParent(C6);C15.setRow(C12);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setFlow("DOWN");C15.setMarginTop(24);C15.setColumnSpan(3);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C9);C16.setManage(C29);C16.setParent(C6);C16.setRow(C13);C16.setSizing("FITTOWIDTH");C16.setFlow("DOWN");C16.setMarginTop(24);
C16.iC();C17.setSizing("CONTENTHEIGHT");C17.iC();C18.setDisplayPosition(1);C18.setParent(C17);C18.setUnits("CONTENT");C18.setHeight(88);C18.iC();C19.setDisplayPosition(2);C19.setParent(C17);C19.setUnits("PIXELS");C19.setHeight(56);C19.iC();C20.setDisplayPosition(1);C20.setParent(C17);C20.setMinWidth(24);C20.iC();C21.setDisplayPosition(2);C21.setParent(C17);C21.setWidth(98);C21.iC();C22.setDisplayPosition(3);C22.setParent(C17);C22.setMinWidth(24);C22.iC();C23.setManage(C30);C23.setParent(C17);C23.setRow(C18);
C23.setSizing("CONTENTHEIGHTFITTOWIDTH");C23.setColumn(C21);C23.setAlignment("TOPLEFT");C23.setFlow("DOWN");C23.setMarginTop(24);C23.setMarginBottom(16);C23.iC();C24.setColumn(C20);C24.setManage(C31);C24.setParent(C17);C24.setSizing("FITTOWIDTH");C24.setRow(C19);C24.setAlignment("TOPLEFT");C24.setColumnSpan(3);C24.iC();C25.setAlignment("CENTERRIGHT");C25.setColumn(C21);C25.setManage(C32);C25.setParent(C17);C25.setRow(C19);C25.setSizing("NONE");C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C21);
C26.setManage(C33);C26.setParent(C17);C26.setRow(C18);C26.setSizing("CONTENTHEIGHTFITTOWIDTH");C26.setFlow("DOWN");C26.iC();C27.setDisplayPosition(1);C27.setLeft(350);C27.setParent(this);C27.setTabPosition(1);C27.setThemeDrawStyle("Heading1");C27.setTop(24);C27.setWidth(1000);C27.setIcon("arrow_back");C27.setCaptionMarginLeft(24);C27.setHeight(31);C27.setWordWrap(true);C27.setCaption("&1 Administration Rights");C27.setStyle(C5);C27.iC();C28.setCaptionAlignment("TOPLEFT");C28.setDisplayPosition(2);
C28.setHeight(21);C28.setLeft(350);C28.setParent(this);C28.setTabPosition(2);C28.setTop(79);C28.setWidth(1000);C28.setWordWrap(true);C28.setCaption("Confirm that you are &1 administration rights. Read the text below before confirming this action.");C28.iC();C29.setDisplayPosition(3);C29.setHeight(146);C29.setLeft(410);C29.setParent(this);C29.setTabPosition(3);C29.setTabStop(false);C29.setTop(124);C29.setWidth(880);C29.setThemeDrawStyle("Card");C29.setStyle(C4);C29.setLayoutManager(C17);C29.iC();C30.setCaption("Confirmation");
C30.setDisplayPosition(1);C30.setLeft(24);C30.setParent(C29);C30.setTabPosition(1);C30.setThemeDrawStyle("Heading3");C30.setTop(24);C30.setWidth(830);C30.setWordWrap(true);C30.setHeight(24);C30.iC();C31.setDisplayPosition(3);C31.setHeight(8);C31.setLeft(0);C31.setParent(C29);C31.setTabPosition(2);C31.setTabStop(false);C31.setThemeDrawStyle("TopDivider");C31.setTop(88);C31.setWidth(878);C31.iC();C32.setCaption("&1");C32.setDisplayPosition(2);C32.setLeft(754);C32.setParent(C29);C32.setTabPosition(3);
C32.setThemeDrawStyle("ForegroundMediumPrimary");C32.setTop(98);C32.setStyle(C5);C32.iC();C33.setDisplayPosition(4);C33.setLeft(24);C33.setParent(C29);C33.setTabPosition(4);C33.setTop(64);C33.setHeight(24);C33.setWidth(830);C33.setWordWrap(true);C33.setPaddingBottom(24);C33.iC();C27.aH("CLICK",this,e4);C32.aH("CLICK",this,e9);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1700);this.setHeight(800);this.setLayoutManager(C6);this.setVerticalScroll(true);this.setComponentTag("BPFAPP008");
this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);this.aH("PREPARE",this,e3);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",69);r.ln=69;{r.ln=72;this.setrefUSERACCOUNTS(l.cast(m.DATA.ref.mthGETDATACLIENT(this),"BPFAPP008"));r.ln=75;if(m.USERACCOUNTS.getISADMINISTRATIONVERIFIED()){r.ln=78;m.USERACCOUNTS.setISADMINISTRATIONVERIFIED(false);}else{r.ln=83;l.WEB().getHistory().mthGOBACK(u);}}r.ln=87;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",89);
r.ln=89;{r.ln=92;this.setrefCURRENTACCOUNT(m.USERACCOUNTS.getUSERACCOUNT(l.WEB().getURLParameters().get("VALUE").getValue()));r.ln=94;if((m.CURRENTACCOUNT!=null)){r.ln=97;this.mthSETPANELDISPLAY();r.ln=98;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}else{r.ln=102;m.USERACCOUNTS.mthGETUSERACCOUNTSBYID(l.WEB().getURLParameters().get("VALUE").getValue());}}r.ln=106;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",108);r.ln=108;{r.ln=110;if((m.CURRENTACCOUNT!=null))
{r.ln=112;m.NAVIGATE.ref.mthTO("ADMINACCOUNTVERIFICATION","REPLACE",false,l.cat("adminusersetadminrightsview&id=",m.CURRENTACCOUNT.getIDENTIFIER()));}}r.ln=116;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#PanelHeading.Click",119);r.ln=119;{r.ln=121;l.WEB().getHistory().mthGOBACK(u);}r.ln=123;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#UserAccounts.OnGetUserAccountCompleted",127);r.ln=127;{r.ln=130;this.setrefCURRENTACCOUNT(m.USERACCOUNTS.getUSERACCOUNT(l.WEB().getURLParameters().get("VALUE").getValue()));
r.ln=132;m.NAVIGATE.ref.mthTO("ADMINACCOUNTVERIFICATION","REPLACE",false,l.cat("adminusersetadminrightsview&id=",m.CURRENTACCOUNT.getIDENTIFIER()));r.ln=135;this.mthSETPANELDISPLAY();r.ln=136;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=138;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#UserAccounts.OnGetUserAccountFailed",140);r.ln=140;{r.ln=143;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("USERACCOUNTS.ONGETUSERACCOUNTFAILED"),7500);r.ln=146;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");
}r.ln=148;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CurrentAccount.OnSetAdminRoleCompleted",150);r.ln=150;{r.ln=153;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("CURRENTACCOUNT.ONSETADMINROLECOMPLETED"));r.ln=154;l.WEB().getHistory().mthGOBACK(u);}r.ln=156;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CurrentAccount.OnSetAdminRoleFailed",158);r.ln=158;{r.ln=160;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=161;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("CURRENTACCOUNT.ONSETADMINROLEFAILED"),7500);
}r.ln=163;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ConfirmationAction.Click",166);r.ln=166;{r.ln=168;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=169;m.CURRENTACCOUNT.mthSETADMINROLE();}r.ln=171;r.e();};cO.mthSETPANELDISPLAY=function(){var m=this.REF,r=l.mR(this,cO,"SetPanelDisplay",174);r.ln=174;{r.ln=176;m.CONFIRMATIONPANELHEADING.setCaption(m.STRINGS.getTEXT("CONFIRMATIONPANELHEADING.CAPTION"));r.ln=179;if(l.tB(m.CURRENTACCOUNT.getISADMIN())){r.ln=181;m.PANELHEADING.setCaption(l.s.Replace(m.STRINGS.getTEXT("PANELHEADING.CAPTION"),"%%ACTIONTEXT%%",m.STRINGS.getTEXT("ADMINROLE.REVOKE")));
r.ln=182;m.INSTRUCTIONTEXT.setCaption(l.s.Replace(m.STRINGS.getTEXT("INSTRUCTIONTEXT.CAPTION"),"%%ACTIONTEXT%%",m.STRINGS.getTEXT("ADMINROLE.REVOKING")));r.ln=183;m.CONFIRMATIONPANELTEXT.setCaption(l.s.Replace(m.STRINGS.getTEXT("CONFIRMATIONPANELTEXT.CAPTION.REVOKE"),"%%EMAIL%%",m.CURRENTACCOUNT.getEMAILADRESS()));r.ln=184;m.CONFIRMATIONACTION.setCaption(l.s.UpperCase(m.STRINGS.getTEXT("ADMINROLE.REVOKE")));}else{r.ln=188;m.PANELHEADING.setCaption(l.s.Replace(m.STRINGS.getTEXT("PANELHEADING.CAPTION"),"%%ACTIONTEXT%%",m.STRINGS.getTEXT("ADMINROLE.GRANT")));
r.ln=189;m.INSTRUCTIONTEXT.setCaption(l.s.Replace(m.STRINGS.getTEXT("INSTRUCTIONTEXT.CAPTION"),"%%ACTIONTEXT%%",m.STRINGS.getTEXT("ADMINROLE.GRANTING")));r.ln=190;m.CONFIRMATIONPANELTEXT.setCaption(l.s.Replace(m.STRINGS.getTEXT("CONFIRMATIONPANELTEXT.CAPTION.GRANT"),"%%EMAIL%%",m.CURRENTACCOUNT.getEMAILADRESS()));r.ln=191;m.CONFIRMATIONACTION.setCaption(l.s.UpperCase(m.STRINGS.getTEXT("ADMINROLE.GRANT")));}}r.ln=195;r.e();};cO.setrefUSERACCOUNTS=function(rn){if(this.REF.USERACCOUNTS!=null){this.REF.USERACCOUNTS.rH("ONGETUSERACCOUNTCOMPLETED",this,e5);
this.REF.USERACCOUNTS.rH("ONGETUSERACCOUNTFAILED",this,e6);}this.sR("USERACCOUNTS",rn);if(this.REF.USERACCOUNTS!=null){this.REF.USERACCOUNTS.aH("ONGETUSERACCOUNTCOMPLETED",this,e5);this.REF.USERACCOUNTS.aH("ONGETUSERACCOUNTFAILED",this,e6);}};cO.setrefCURRENTACCOUNT=function(rn){if(this.REF.CURRENTACCOUNT!=null){this.REF.CURRENTACCOUNT.rH("ONSETADMINROLECOMPLETED",this,e7);this.REF.CURRENTACCOUNT.rH("ONSETADMINROLEFAILED",this,e8);}this.sR("CURRENTACCOUNT",rn);if(this.REF.CURRENTACCOUNT!=null){this.REF.CURRENTACCOUNT.aH("ONSETADMINROLECOMPLETED",this,e7);
this.REF.CURRENTACCOUNT.aH("ONSETADMINROLEFAILED",this,e8);}};},{rc:["BPFAPP001","BPFAPP000","BPFVLR057"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_MD.FlatButton"],dc:["BPFAPP008","BPFCLS013"]});