﻿LANSA.addComponent({id:"BPFPNL005",nm:"BPFNewAccountTermsPanel",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Portal New Account Terms Approval",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{SetStrings:{},GetTermsPage:{},ClearAllErrors:{},HandleDeviceChanged:{},SetForMobile:{},SetForTablet:{},SetForDesktop:{}},co:function(){cO.aN.call(this);var C0=this.cA("SESSION","BPFAPP002");var C1=this.cA("NAVIGATE","BPFAPP001");var C2=this.cA("BROWSER","BPFWGT001");var C3=this.cR("STRINGS","BPFPLR005");
var C4=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");var C5=this.cR("LAYOUT","PRIM_TBLO");var C6=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C7=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C8=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C9=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C10=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C11=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM9","PRIM_TBLO","Item");
var C15=this.cR("LAYOUTITEM10","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C17=this.cR("MOBILELAYOUT","PRIM_TBLO");var C18=this.cR("MOBILELAYOUTCOLUMN1","PRIM_TBLO","Column");var C19=this.cR("MOBILELAYOUTROW1","PRIM_TBLO","Row");var C20=this.cR("MOBILELAYOUTROW2","PRIM_TBLO","Row");var C21=this.cR("MOBILELAYOUTROW3","PRIM_TBLO","Row");var C22=this.cR("MOBILELAYOUTITEM1","PRIM_TBLO","Item");var C23=this.cR("MOBILELAYOUTITEM2","PRIM_TBLO","Item");var C24=this.cR("MOBILELAYOUTITEM8","PRIM_TBLO","Item");
var C25=this.cR("MOBILELAYOUTITEM9","PRIM_TBLO","Item");var C26=this.cR("MOBILELAYOUTITEM3","PRIM_TBLO","Item");var C27=this.cR("LAYOUT1","PRIM_TBLO");var C28=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C29=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C30=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C31=this.cR("DIALOGLOGO","PRIM_MD","Label");var C32=this.cR("MAININSTRUCTION","PRIM_MD","Label");var C33=this.cR("SECONDARYINSTRUCTION","PRIM_MD","Label");var C34=this.cR("DETAILSPANELACTIONBUTTON","PRIM_MD","FlatButton");
var C35=this.cR("DETAILSPANELNEXTBUTTON","PRIM_MD","RaisedButton");var C36=this.cR("TERMSPANEL","PRIM_PANL");var C37=this.cR("TERMSPAGE","PRIM_WEB","HtmlContainer");this.cD("DIALOG");this.cD("NEWACCOUNT");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}if((C2!=null)&&(C2.iI()==false)){C2.iC();}C3.iC();C4.setCursor("HAND");C4.iC();C5.iC();C6.setDisplayPosition(1);C6.setParent(C5);C6.iC();C7.setDisplayPosition(3);C7.setParent(C5);C7.setUnits("CONTENT");C7.setWidth(252);
C7.iC();C8.setDisplayPosition(2);C8.setParent(C5);C8.iC();C9.setDisplayPosition(1);C9.setParent(C5);C9.iC();C10.setDisplayPosition(2);C10.setParent(C5);C10.setHeight(48);C10.setUnits("PIXELS");C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C7);C11.setManage(C31);C11.setParent(C5);C11.setRow(C9);C11.setSizing("FITTOHEIGHT");C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C6);C12.setManage(C32);C12.setParent(C5);C12.setRow(C9);C12.setSizing("CONTENTHEIGHTFITTOWIDTH");C12.setFlow("DOWN");C12.setColumnSpan(2);
C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C6);C13.setFlow("DOWN");C13.setManage(C33);C13.setParent(C5);C13.setRow(C9);C13.setSizing("CONTENTHEIGHTFITTOWIDTH");C13.setMarginBottom(24);C13.setColumnSpan(2);C13.iC();C14.setAlignment("CENTERLEFT");C14.setColumn(C6);C14.setManage(C34);C14.setParent(C5);C14.setRow(C10);C14.setSizing("NONE");C14.iC();C15.setAlignment("CENTERRIGHT");C15.setColumn(C8);C15.setManage(C35);C15.setParent(C5);C15.setRow(C10);C15.setSizing("NONE");C15.iC();C16.setAlignment("TOPLEFT");
C16.setColumn(C6);C16.setManage(C36);C16.setParent(C5);C16.setRow(C9);C16.setColumnSpan(2);C16.setMarginTop(76);C16.iC();C17.iC();C18.setDisplayPosition(1);C18.setParent(C17);C18.iC();C19.setDisplayPosition(1);C19.setParent(C17);C19.setUnits("CONTENT");C19.setHeight(56);C19.iC();C20.setDisplayPosition(2);C20.setParent(C17);C20.iC();C21.setDisplayPosition(3);C21.setParent(C17);C21.setHeight(48);C21.setUnits("PIXELS");C21.iC();C22.setManage(C32);C22.setParent(C17);C22.setRow(C19);C22.setSizing("CONTENTHEIGHTFITTOWIDTH");
C22.setColumn(C18);C22.setAlignment("TOPLEFT");C22.setFlow("DOWN");C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C18);C23.setFlow("DOWN");C23.setManage(C33);C23.setParent(C17);C23.setRow(C19);C23.setSizing("CONTENTHEIGHTFITTOWIDTH");C23.iC();C24.setAlignment("CENTERLEFT");C24.setColumn(C18);C24.setManage(C34);C24.setParent(C17);C24.setRow(C21);C24.setSizing("NONE");C24.iC();C25.setAlignment("CENTERRIGHT");C25.setColumn(C18);C25.setManage(C35);C25.setParent(C17);C25.setRow(C21);C25.setSizing("NONE");
C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C18);C26.setManage(C36);C26.setParent(C17);C26.setRow(C20);C26.iC();C27.iC();C28.setDisplayPosition(1);C28.setParent(C27);C28.iC();C29.setDisplayPosition(1);C29.setParent(C27);C29.iC();C30.setAlignment("TOPLEFT");C30.setColumn(C29);C30.setManage(C37);C30.setParent(C27);C30.setRow(C28);C30.setSizing("CONTENTHEIGHTFITTOWIDTH");C30.iC();C31.setCaption("myPortal. So you know what we are both signed up to");C31.setDisplayPosition(1);C31.setLeft(414);C31.setParent(this);
C31.setTabPosition(1);C31.setThemeDrawStyle("Heading3+ForegroundTheme");C31.setTop(0);C31.setHeight(378);C31.setWidth(252);C31.setCaptionAlignment("CENTER");C31.setWordWrap(true);C31.setIconAlignment("ABOVECAPTION");C31.setIcon("assignment");C31.setIconHeight(118);C31.setIconThemeDrawStyle("ForegroundMediumPrimary");C31.setCaptionMarginLeft(14);C31.setCaptionMarginRight(14);C31.iC();C32.setCaption("myPortal terms and conditions");C32.setDisplayPosition(2);C32.setLeft(0);C32.setParent(this);C32.setTabPosition(2);
C32.setThemeDrawStyle("Heading2");C32.setTop(0);C32.setHeight(19);C32.setWordWrap(true);C32.setWidth(414);C32.iC();C33.setCaption("Please read and acknowledge your acceptance");C33.setDisplayPosition(3);C33.setLeft(0);C33.setParent(this);C33.setTabPosition(3);C33.setTop(19);C33.setHeight(27);C33.setWordWrap(true);C33.setWidth(414);C33.setPaddingBottom(8);C33.iC();C34.setDisplayPosition(4);C34.setLeft(0);C34.setParent(this);C34.setTabPosition(4);C34.setThemeDrawStyle("ForegroundMediumPrimary");C34.setTop(384);
C34.setCaption("Back");C34.setStyle(C4);C34.iC();C35.setCaption("Next");C35.setDisplayPosition(5);C35.setLeft(334);C35.setParent(this);C35.setTabPosition(5);C35.setThemeDrawStyle("MediumTitle");C35.setTop(384);C35.setWidth(80);C35.setEnabled(false);C35.setStyle(C4);C35.iC();C36.setDisplayPosition(6);C36.setLeft(0);C36.setParent(this);C36.setTabPosition(6);C36.setTabStop(false);C36.setTop(76);C36.setWidth(414);C36.setHeight(302);C36.setVerticalScroll(true);C36.setLayoutManager(C27);C36.iC();C37.setDescription("Web Page");
C37.setDisplayPosition(1);C37.setHeight(298);C37.setParent(C36);C37.setTabPosition(1);C37.setTabStop(false);C37.setWidth(414);C37.iC();l.WEB().aH("DEVICECHANGED",this,e2);C34.aH("CLICK",this,e5);C35.aH("CLICK",this,e6);C36.aH("SCROLLCHANGED",this,e7);this.setDisplayPosition(1);this.setHeight(426);this.setTabPosition(1);this.setWidth(666);this.setLayoutManager(C5);this.aH("INITIALIZE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",78);r.ln=78;{r.ln=81;this.setrefDIALOG(l.gW("BPFPORTAL").getCREATEDIALOG());
r.ln=82;this.setrefNEWACCOUNT(m.DIALOG.getNEWACCOUNT());r.ln=84;this.mthSETSTRINGS();r.ln=86;this.mthHANDLEDEVICECHANGED();r.ln=89;this.mthGETTERMSPAGE();}r.ln=91;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",94);r.ln=94;{r.ln=96;this.mthHANDLEDEVICECHANGED();}r.ln=98;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#NewAccount.OnStoredAccountCreated",101);r.ln=101;{r.ln=103;m.DIALOG.mthSETWAITINGSTATE("OFF");r.ln=104;m.NAVIGATE.ref.mthTO("NEWACCOUNTCREATED",u,u,u);
}r.ln=106;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#NewAccount.OnStoredAccountFailed",108);r.ln=108;{r.ln=110;m.DIALOG.mthSETWAITINGSTATE("OFF");r.ln=111;m.NAVIGATE.ref.mthTO("NEWACCOUNTFAILED",u,u,u);}r.ln=113;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DetailsPanelActionButton.Click",116);r.ln=116;{r.ln=118;m.TERMSPAGE.setHtml("");r.ln=119;l.WEB().getHistory().mthGOBACK(u);}r.ln=121;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DetailsPanelNextButton.Click",123);
r.ln=123;{r.ln=125;m.TERMSPAGE.setHtml("");r.ln=126;m.DIALOG.mthSETWAITINGSTATE("ON");r.ln=128;m.NEWACCOUNT.mthCREATESTOREDACCOUNT();}r.ln=130;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TermsPanel.ScrollChanged",132);r.ln=132;{r.ln=134;m.DETAILSPANELNEXTBUTTON.setEnabled(l.n.le(m.TERMSPANEL.getVerticalScrollRemainder(),10));}r.ln=136;r.e();};cO.mthSETSTRINGS=function(){var m=this.REF,r=l.mR(this,cO,"SetStrings",140);r.ln=140;{r.ln=142;m.MAININSTRUCTION.setCaption(m.STRINGS.getTEXT("MAININSTRUCTION.CAPTION"));
r.ln=143;m.SECONDARYINSTRUCTION.setCaption(m.STRINGS.getTEXT("SECONDARYINSTRUCTION.CAPTION"));r.ln=144;m.DIALOGLOGO.setCaption(m.STRINGS.getTEXT("DIALOGLOGO.CAPTION"));r.ln=145;m.DETAILSPANELACTIONBUTTON.setCaption(m.STRINGS.getTEXT("DETAILSPANELACTIONBUTTON.CAPTION"));r.ln=146;m.DETAILSPANELNEXTBUTTON.setCaption(m.STRINGS.getTEXT("DETAILSPANELNEXTBUTTON.CAPTION"));}r.ln=148;r.e();};cO.mthGETTERMSPAGE=function(){var m=this.REF,r=l.mR(this,cO,"GetTermsPage",151),mth=r;var C0=r.cR("REQUEST","PRIM_WEB","HttpRequest");
C0.iC();C0.aH("COMPLETED",this,e8);C0.aH("FAILED",this,e9);r.ln=151;{r.ln=157;C0.setUrl(l.cat(l.cat("content/",m.BROWSER.ref.getUSERLANGUAGE()),"/myPortalterms.html"));r.ln=160;C0.mthEXECUTEASYNC();}r.ln=174;r.e();function e8(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",162,mth);r.ln=162;{r.ln=164;m.TERMSPAGE.setHtml(C0.getResponse().getContent().get());}r.ln=166;r.e();}function e9(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",168,mth);r.ln=168;{r.ln=170;m.TERMSPAGE.setHtml(l.cat(l.cat("<h3>",m.STRINGS.getTEXT("MESSAGE.TERMSPAGE.FAILED")),"</h3>"));
}r.ln=172;r.e();}};cO.mthCLEARALLERRORS=function(){var r=l.mR(this,cO,"ClearAllErrors",179);r.ln=179;{r.ln=182;{var l1=this.getComponentControls().cI();while(l1.step()){var CONTROL=r.sR("CONTROL",l1.item());if(l.nIo(CONTROL,"PRIM_MD.Edit")){continue;}r.ln=184;if(CONTROL.getHasError()){r.ln=186;CONTROL.mthCLEARERROR();}r.ln=190;}l1.end();r.dR("CONTROL");}}r.ln=192;r.e();};cO.mthHANDLEDEVICECHANGED=function(){var r=l.mR(this,cO,"HandleDeviceChanged",196);r.ln=196;{r.ln=198;{var v1=l.WEB().getDevice();
if(r.ln=200,l.s.eq(v1,"MOBILE")){r.ln=202;this.mthSETFORMOBILE();}else if(r.ln=204,l.s.eq(v1,"TABLET")){r.ln=206;this.mthSETFORTABLET();}else{r.ln=210;this.mthSETFORDESKTOP();}r.ln=212;}}r.ln=214;r.e();};cO.mthSETFORMOBILE=function(){var m=this.REF,r=l.mR(this,cO,"SetForMobile",216);r.ln=216;{r.ln=219;m.DIALOGLOGO.setVisible(false);r.ln=222;if((this.getLayoutManager()!==m.MOBILELAYOUT)){r.ln=224;this.setLayoutManager(m.MOBILELAYOUT);}}r.ln=227;r.e();};cO.mthSETFORTABLET=function(){var m=this.REF,r=l.mR(this,cO,"SetForTablet",229);
r.ln=229;{r.ln=232;m.DIALOGLOGO.setVisible(false);r.ln=235;if((this.getLayoutManager()!==m.LAYOUT)){r.ln=237;this.setLayoutManager(m.LAYOUT);}}r.ln=241;r.e();};cO.mthSETFORDESKTOP=function(){var m=this.REF,r=l.mR(this,cO,"SetForDesktop",243);r.ln=243;{r.ln=246;m.DIALOGLOGO.setVisible(true);r.ln=249;if((this.getLayoutManager()!==m.LAYOUT)){r.ln=251;this.setLayoutManager(m.LAYOUT);}}r.ln=255;r.e();};cO.setrefDIALOG=function(rn){this.sR("DIALOG",rn);};cO.setrefNEWACCOUNT=function(rn){if(this.REF.NEWACCOUNT!=null)
{this.REF.NEWACCOUNT.rH("ONSTOREDACCOUNTCREATED",this,e3);this.REF.NEWACCOUNT.rH("ONSTOREDACCOUNTFAILED",this,e4);}this.sR("NEWACCOUNT",rn);if(this.REF.NEWACCOUNT!=null){this.REF.NEWACCOUNT.aH("ONSTOREDACCOUNTCREATED",this,e3);this.REF.NEWACCOUNT.aH("ONSTOREDACCOUNTFAILED",this,e4);}};},{rc:["BPFAPP002","BPFAPP001","BPFWGT001","BPFPLR005"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.FlatButton","PRIM_MD.RaisedButton","PRIM_PANL","PRIM_WEB.HtmlContainer"],
dc:["BPFDLG002","BPFCLS002"],dp:["PRIM_WEB.HttpRequest"]});