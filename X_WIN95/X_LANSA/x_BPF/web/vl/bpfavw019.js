﻿LANSA.addComponent({id:"BPFAVW019",nm:"BPFUserSecuritySetPasswordView",ot:"wv",tp:"View",pt:"ap",de:"Portal User Security Set Password",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{SetStrings:{},IsPasswordValid:{}},co:function(){cO.aN.call(this);var C0=this.cA("SESSION","BPFAPP002");var C1=this.cA("NAVIGATE","BPFAPP001");var C2=this.cR("STRINGS","BPFVLR019");var C3=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");var C4=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");var C5=this.cR("MAINLAYOUT","PRIM_TBLO");
var C6=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C7=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C8=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C9=this.cR("LAYOUTCOLUMN4","PRIM_TBLO","Column");var C10=this.cR("LAYOUTCOLUMN5","PRIM_TBLO","Column");var C11=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C12=this.cR("MAINLAYOUTROW1","PRIM_TBLO","Row");var C13=this.cR("MAINLAYOUTITEM1","PRIM_TBLO","Item");var C14=this.cR("MAINLAYOUTITEM2","PRIM_TBLO","Item");var C15=this.cR("MAINLAYOUTITEM3","PRIM_TBLO","Item");
var C16=this.cR("NEWPASSWORDENTRYPANELLAYOUT","PRIM_TBLO");var C17=this.cR("NEWPASSWORDENTRYPANELLAYOUTROW1","PRIM_TBLO","Row");var C18=this.cR("NEWPASSWORDENTRYPANELLAYOUTROW2","PRIM_TBLO","Row");var C19=this.cR("NEWPASSWORDENTRYPANELLAYOUTCOLUMN1","PRIM_TBLO","Column");var C20=this.cR("NEWPASSWORDENTRYPANELLAYOUTCOLUMN2","PRIM_TBLO","Column");var C21=this.cR("PASSWORDENTRYPANELLAYOUTCOLUMN3","PRIM_TBLO","Column");var C22=this.cR("PASSWORDENTRYPANELLAYOUTITEM1","PRIM_TBLO","Item");var C23=this.cR("PASSWORDENTRYPANELLAYOUTITEM2","PRIM_TBLO","Item");
var C24=this.cR("PASSWORDENTRYPANELLAYOUTITEM3","PRIM_TBLO","Item");var C25=this.cR("PASSWORDENTRYPANELLAYOUTITEM4","PRIM_TBLO","Item");var C26=this.cR("PASSWORDENTRYPANELLAYOUTITEM5","PRIM_TBLO","Item");var C27=this.cR("PANELHEADING","PRIM_MD","Label");var C28=this.cR("INSTRUCTIONTEXT","PRIM_MD","Label");var C29=this.cR("NEWPASSWORDENTRYPANEL","PRIM_PANL");var C30=this.cR("PASSWORDENTRYPANELHEADING","PRIM_MD","Label");var C31=this.cR("PASSWORDENTRY","PRIM_MD","Edit");var C32=this.cR("DIVIDER","PRIM_PANL");
var C33=this.cR("NEWPASSWORDENTRYACTION","PRIM_MD","FlatButton");this.cD("CURRENTUSER");var C35=this.cR("CONFIRMPASSWORD","PRIM_MD","Edit");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setCornerBottomLeft(8);C3.setCornerBottomRight(8);C3.setCornerTopLeft(8);C3.setCornerTopRight(8);C3.setBorderLeft(1);C3.setBorderTop(1);C3.setBorderRight(1);C3.setBorderBottom(1);C3.iC();C4.setCursor("HAND");C4.iC();C5.setMarginTop(24);C5.iC();C6.setDisplayPosition(1);
C6.setParent(C5);C6.setMinWidth(8);C6.iC();C7.setDisplayPosition(2);C7.setParent(C5);C7.setMaxWidth(60);C7.iC();C8.setDisplayPosition(3);C8.setParent(C5);C8.setWidth(96);C8.setMinWidth(280);C8.setMaxWidth(880);C8.iC();C9.setDisplayPosition(4);C9.setParent(C5);C9.setMaxWidth(60);C9.iC();C10.setDisplayPosition(5);C10.setParent(C5);C10.setMinWidth(8);C10.iC();C11.setDisplayPosition(1);C11.setParent(C5);C11.setHeight(76);C11.setUnits("CONTENT");C11.iC();C12.setDisplayPosition(2);C12.setParent(C5);C12.setHeight(304);
C12.setUnits("CONTENT");C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C7);C13.setManage(C27);C13.setParent(C5);C13.setRow(C11);C13.setSizing("CONTENTHEIGHTFITTOWIDTH");C13.setFlow("DOWN");C13.setColumnSpan(3);C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C7);C14.setManage(C28);C14.setParent(C5);C14.setRow(C11);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.setFlow("DOWN");C14.setMarginTop(24);C14.setColumnSpan(3);C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C8);C15.setManage(C29);C15.setParent(C5);
C15.setRow(C12);C15.setSizing("FITTOWIDTH");C15.setFlow("DOWN");C15.setMarginTop(24);C15.iC();C16.setSizing("CONTENTHEIGHT");C16.iC();C17.setDisplayPosition(1);C17.setParent(C16);C17.setUnits("CONTENT");C17.setHeight(222);C17.iC();C18.setDisplayPosition(2);C18.setParent(C16);C18.setUnits("PIXELS");C18.setHeight(56);C18.iC();C19.setDisplayPosition(1);C19.setParent(C16);C19.setMinWidth(24);C19.iC();C20.setDisplayPosition(2);C20.setParent(C16);C20.setWidth(98);C20.iC();C21.setDisplayPosition(3);C21.setParent(C16);
C21.setMinWidth(24);C21.iC();C22.setManage(C30);C22.setParent(C16);C22.setRow(C17);C22.setSizing("CONTENTHEIGHTFITTOWIDTH");C22.setColumn(C20);C22.setAlignment("TOPLEFT");C22.setFlow("DOWN");C22.setMarginTop(24);C22.setMarginBottom(16);C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C20);C23.setManage(C31);C23.setParent(C16);C23.setRow(C17);C23.setSizing("FITTOWIDTH");C23.setFlow("DOWN");C23.iC();C24.setColumn(C19);C24.setManage(C32);C24.setParent(C16);C24.setSizing("FITTOWIDTH");C24.setRow(C18);
C24.setAlignment("TOPLEFT");C24.setColumnSpan(3);C24.iC();C25.setAlignment("CENTERRIGHT");C25.setColumn(C20);C25.setManage(C33);C25.setParent(C16);C25.setRow(C18);C25.setSizing("NONE");C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C20);C26.setManage(C35);C26.setParent(C16);C26.setRow(C17);C26.setSizing("FITTOWIDTH");C26.setFlow("DOWN");C26.setMarginTop(8);C26.iC();C27.setDisplayPosition(1);C27.setLeft(350);C27.setParent(this);C27.setTabPosition(1);C27.setThemeDrawStyle("Heading1");C27.setTop(24);
C27.setWidth(1000);C27.setIcon("arrow_back");C27.setCaptionMarginLeft(24);C27.setHeight(31);C27.setWordWrap(true);C27.setCaption("Change Account Password");C27.setStyle(C4);C27.iC();C28.setCaptionAlignment("TOPLEFT");C28.setDisplayPosition(2);C28.setHeight(21);C28.setLeft(350);C28.setParent(this);C28.setTabPosition(2);C28.setTop(79);C28.setWidth(1000);C28.setWordWrap(true);C28.setCaption("Enter and then confirm your new account password for myPortal. Be sure to keep it in a safe place and please do not tell anyone what it is.");
C28.iC();C29.setDisplayPosition(3);C29.setHeight(280);C29.setLeft(410);C29.setParent(this);C29.setTabPosition(3);C29.setTabStop(false);C29.setTop(124);C29.setWidth(880);C29.setThemeDrawStyle("Card");C29.setStyle(C3);C29.setLayoutManager(C16);C29.iC();C30.setCaption("Account Password");C30.setDisplayPosition(1);C30.setLeft(24);C30.setParent(C29);C30.setTabPosition(1);C30.setThemeDrawStyle("Heading3");C30.setTop(24);C30.setWidth(830);C30.setWordWrap(true);C30.setHeight(24);C30.iC();C31.setCaption("Enter your password");
C31.setDisplayPosition(2);C31.setLeft(24);C31.setParent(C29);C31.setPasswordChar("*");C31.setTabPosition(2);C31.setTop(64);C31.setWidth(830);C31.iC();C32.setDisplayPosition(5);C32.setHeight(8);C32.setLeft(0);C32.setParent(C29);C32.setTabPosition(5);C32.setTabStop(false);C32.setThemeDrawStyle("TopDivider");C32.setTop(222);C32.setWidth(878);C32.iC();C33.setCaption("CHANGE");C33.setDisplayPosition(4);C33.setLeft(754);C33.setParent(C29);C33.setTabPosition(4);C33.setThemeDrawStyle("ForegroundMediumPrimary");
C33.setTop(232);C33.setStyle(C4);C33.iC();C35.setCaption("Confirm your password");C35.setDisplayPosition(3);C35.setLeft(24);C35.setParent(C29);C35.setPasswordChar("*");C35.setTabPosition(3);C35.setTop(147);C35.setWidth(830);C35.iC();C0.aH("ONRESETUSERPASSWORDCOMPLETED",this,e5);C0.aH("ONRESETUSERPASSWORDFAILED",this,e6);C27.aH("CLICK",this,e4);C31.aH("ENTER",this,e7);C31.aH("CHANGED",this,e8);C33.aH("CLICK",this,e7);C35.aH("ENTER",this,e7);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1700);
this.setHeight(800);this.setLayoutManager(C5);this.setVerticalScroll(true);this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);this.aH("PREPARE",this,e3);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",70);r.ln=70;{r.ln=73;this.setrefCURRENTUSER(m.SESSION.ref.getCURRENTUSER());r.ln=75;this.mthSETSTRINGS();r.ln=78;if(m.CURRENTUSER.getACCOUNTVERIFIED()){r.ln=81;m.CURRENTUSER.setACCOUNTVERIFIED(false);}else{r.ln=86;l.WEB().getHistory().mthGOBACK(u);}}
r.ln=90;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.Initialize",92);r.ln=92;{r.ln=94;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=96;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",98);r.ln=98;{r.ln=100;m.NAVIGATE.ref.mthTO("VERIFYUSERACCOUNT","REPLACE",false,"USERSECURITYCHANGEPASSWORD");}r.ln=102;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#PanelHeading.Click",105);r.ln=105;{r.ln=107;l.WEB().getHistory().mthGOBACK(u);
}r.ln=109;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Session.OnResetUserPasswordCompleted",112);r.ln=112;{r.ln=114;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");r.ln=117;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("SESSION.ONRESETUSERPASSWORDCOMPLETED"));r.ln=118;l.WEB().getHistory().mthGOBACK(u);}r.ln=120;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Session.OnResetUserPasswordFailed",122);r.ln=122;{r.ln=124;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");
r.ln=126;l.gW("BPFPORTAL").mthSHOWTOASTER(m.STRINGS.getTEXT("SESSION.ONRESETUSERPASSWORDFAILED"),7500);}r.ln=128;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#NewPasswordEntryAction.Click #PasswordEntry.Enter #ConfirmPassword.Enter",131);r.ln=131;{r.ln=133;if(this.mthISPASSWORDVALID()){r.ln=135;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=136;m.SESSION.ref.mthRESETUSERPASSWORD(m.PASSWORDENTRY.get());}}r.ln=140;r.e();};function e8(SENDER,Ps){var r=l.eR(this,cO,"#PasswordEntry.Changed",143);
r.ln=143;{r.ln=145;if(SENDER.getHasError()){r.ln=147;SENDER.mthCLEARERROR();}}r.ln=151;r.e();};cO.mthSETSTRINGS=function(){var m=this.REF,r=l.mR(this,cO,"SetStrings",154);r.ln=154;{r.ln=156;m.PANELHEADING.setCaption(m.STRINGS.getTEXT("PANELHEADING.CAPTION"));r.ln=157;m.INSTRUCTIONTEXT.setCaption(m.STRINGS.getTEXT("INSTRUCTIONTEXT.CAPTION"));r.ln=158;m.PASSWORDENTRYPANELHEADING.setCaption(m.STRINGS.getTEXT("PASSWORDENTRYPANELHEADING.CAPTION"));r.ln=159;m.PASSWORDENTRY.setCaption(m.STRINGS.getTEXT("PASSWORDENTRY.CAPTION"));
r.ln=160;m.CONFIRMPASSWORD.setCaption(m.STRINGS.getTEXT("CONFIRMPASSWORD.CAPTION"));r.ln=161;m.NEWPASSWORDENTRYACTION.setCaption(m.STRINGS.getTEXT("NEWPASSWORDENTRYACTION.CAPTION"));}r.ln=163;r.e();};cO.mthISPASSWORDVALID=function(){var m=this.REF,r=l.mR(this,cO,"IsPasswordValid",165);var P0=r.cP("RESULT","PRIM_BOLN");r.ln=165;{r.ln=169;P0.set(true);r.ln=170;m.PASSWORDENTRY.mthCLEARERROR();r.ln=171;m.CONFIRMPASSWORD.mthCLEARERROR();r.ln=174;if(l.s.IsNull(m.PASSWORDENTRY.getValue())){r.ln=176;m.PASSWORDENTRY.mthSHOWERROR(m.STRINGS.getTEXT("PASSWORDENTRY.BLANK"));
}else{r.ln=180;if(l.b.IsFalse(l.s.IsValidPassword(m.PASSWORDENTRY.getValue(),"MEDIUM"))){r.ln=182;m.PASSWORDENTRY.mthSHOWERROR(m.STRINGS.getTEXT("PASSWORDENTRY.WEAK"));}}r.ln=188;if((l.b.IsFalse(m.PASSWORDENTRY.getHasError())&&l.s.IsNull(m.CONFIRMPASSWORD.getValue()))){r.ln=190;m.CONFIRMPASSWORD.mthSHOWERROR(m.STRINGS.getTEXT("CONFIRMPASSWORD.BLANK"));}else{r.ln=194;if(l.s.ne(m.PASSWORDENTRY.getValue(),m.CONFIRMPASSWORD.getValue())){r.ln=196;m.CONFIRMPASSWORD.mthSHOWERROR(m.STRINGS.getTEXT("CONFIRMPASSWORD.NOMATCH"));
}}r.ln=202;P0.set(l.and(l.b.IsFalse(m.PASSWORDENTRY.getHasError()),l.b.IsFalse(m.CONFIRMPASSWORD.getHasError())));}r.ln=204;return r.rV(P0.get());};cO.setrefCURRENTUSER=function(rn){this.sR("CURRENTUSER",rn);};},{rc:["BPFAPP002","BPFAPP001","BPFVLR019"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_MD.Edit","PRIM_MD.FlatButton"],dc:["BPFCLS002"]});