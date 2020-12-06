﻿LANSA.addComponent({id:"BPFPNL023",nm:"BPFResetSecurityCompletedPanel",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Portal Reset Security Completed",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{SetStrings:{},HandleDeviceChanged:{},SetForMobile:{},SetForTablet:{},SetForDesktop:{}},co:function(){cO.aN.call(this);var C0=this.cA("SESSION","BPFAPP002");var C1=this.cA("NAVIGATE","BPFAPP001");var C2=this.cR("STRINGS","BPFPLR023");var C3=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");var C4=this.cR("LAYOUT","PRIM_TBLO");
var C5=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C6=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C7=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C8=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C9=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C10=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM10","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");
var C15=this.cR("MOBILELAYOUT","PRIM_TBLO");var C16=this.cR("MOBILELAYOUTCOLUMN1","PRIM_TBLO","Column");var C17=this.cR("MOBILELAYOUTROW1","PRIM_TBLO","Row");var C18=this.cR("MOBILELAYOUTITEM1","PRIM_TBLO","Item");var C19=this.cR("MOBILELAYOUTITEM2","PRIM_TBLO","Item");var C20=this.cR("MOBILELAYOUTITEM9","PRIM_TBLO","Item");var C21=this.cR("MOBILELAYOUTITEM3","PRIM_TBLO","Item");var C22=this.cR("DIALOGLOGO","PRIM_MD","Label");var C23=this.cR("MAININSTRUCTION","PRIM_MD","Label");var C24=this.cR("SECONDARYINSTRUCTION","PRIM_MD","Label");
var C25=this.cR("DETAILSPANELNEXTBUTTON","PRIM_MD","RaisedButton");var C26=this.cR("PANELTEXT","PRIM_MD","Label");this.cD("DIALOG");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setCursor("HAND");C3.iC();C4.iC();C5.setDisplayPosition(1);C5.setParent(C4);C5.iC();C6.setDisplayPosition(3);C6.setParent(C4);C6.setUnits("CONTENT");C6.setWidth(252);C6.iC();C7.setDisplayPosition(2);C7.setParent(C4);C7.iC();C8.setDisplayPosition(1);C8.setParent(C4);C8.iC();
C9.setDisplayPosition(2);C9.setParent(C4);C9.setHeight(48);C9.setUnits("PIXELS");C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C6);C10.setManage(C22);C10.setParent(C4);C10.setRow(C8);C10.setSizing("FITTOHEIGHT");C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C5);C11.setManage(C23);C11.setParent(C4);C11.setRow(C8);C11.setSizing("CONTENTHEIGHTFITTOWIDTH");C11.setFlow("DOWN");C11.setColumnSpan(2);C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C5);C12.setFlow("DOWN");C12.setManage(C24);C12.setParent(C4);
C12.setRow(C8);C12.setSizing("CONTENTHEIGHTFITTOWIDTH");C12.setMarginBottom(24);C12.setColumnSpan(2);C12.iC();C13.setAlignment("CENTERRIGHT");C13.setColumn(C7);C13.setManage(C25);C13.setParent(C4);C13.setRow(C9);C13.setSizing("NONE");C13.iC();C14.setManage(C26);C14.setParent(C4);C14.setRow(C8);C14.setColumn(C5);C14.setAlignment("TOPLEFT");C14.setFlow("DOWN");C14.setColumnSpan(2);C14.iC();C15.iC();C16.setDisplayPosition(1);C16.setParent(C15);C16.iC();C17.setDisplayPosition(1);C17.setParent(C15);C17.iC();
C18.setManage(C23);C18.setParent(C15);C18.setRow(C17);C18.setSizing("CONTENTHEIGHTFITTOWIDTH");C18.setColumn(C16);C18.setAlignment("TOPLEFT");C18.setFlow("DOWN");C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C16);C19.setFlow("DOWN");C19.setManage(C24);C19.setParent(C15);C19.setRow(C17);C19.setSizing("CONTENTHEIGHTFITTOWIDTH");C19.iC();C20.setAlignment("BOTTOMRIGHT");C20.setColumn(C16);C20.setManage(C25);C20.setParent(C15);C20.setRow(C17);C20.setSizing("NONE");C20.setMarginBottom(24);C20.iC();
C21.setAlignment("TOPLEFT");C21.setColumn(C16);C21.setFlow("DOWN");C21.setManage(C26);C21.setParent(C15);C21.setRow(C17);C21.setSizing("CONTENTHEIGHTFITTOWIDTH");C21.setMarginTop(16);C21.iC();C22.setDisplayPosition(1);C22.setLeft(414);C22.setParent(this);C22.setTabPosition(1);C22.setThemeDrawStyle("Heading3+ForegroundTheme");C22.setTop(0);C22.setHeight(378);C22.setWidth(252);C22.setCaptionAlignment("CENTER");C22.setWordWrap(true);C22.setIconAlignment("ABOVECAPTION");C22.setIcon("verified_user");C22.setIconHeight(118);
C22.setIconThemeDrawStyle("ForegroundMediumPrimary");C22.setCaptionMarginLeft(14);C22.setCaptionMarginRight(14);C22.setCaption("Keep your details safe, by not tell anyone what they are");C22.iC();C23.setCaption("Your account security has been reset");C23.setDisplayPosition(2);C23.setLeft(0);C23.setParent(this);C23.setTabPosition(2);C23.setThemeDrawStyle("Heading2");C23.setTop(0);C23.setHeight(19);C23.setWordWrap(true);C23.setWidth(414);C23.iC();C24.setDisplayPosition(3);C24.setLeft(0);C24.setParent(this);
C24.setTabPosition(3);C24.setTop(19);C24.setHeight(19);C24.setWordWrap(true);C24.setWidth(414);C24.setCaption("You can now login into myPortal");C24.iC();C25.setCaption("Login");C25.setDisplayPosition(4);C25.setLeft(334);C25.setParent(this);C25.setTabPosition(4);C25.setThemeDrawStyle("MediumTitle");C25.setTop(384);C25.setWidth(80);C25.setStyle(C3);C25.iC();C26.setCaption("We have updated your myPortal account security crenditials and password, so you can now login into my Portal. Make sure you keep these details safe and sound. If you have any issues please let us know at accounts@myPortal.com.au");
C26.setDisplayPosition(5);C26.setLeft(0);C26.setParent(this);C26.setTabPosition(5);C26.setTop(62);C26.setHeight(378);C26.setWidth(414);C26.setCaptionAlignment("TOPLEFT");C26.setWordWrap(true);C26.iC();l.WEB().aH("DEVICECHANGED",this,e3);C25.aH("CLICK",this,e4);this.setDisplayPosition(1);this.setHeight(426);this.setTabPosition(1);this.setWidth(666);this.setLayoutManager(C4);this.aH("INITIALIZE",this,e1);this.aH("PREPARE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",67);
r.ln=67;{r.ln=70;this.setrefDIALOG(l.gW("BPFPORTAL").getSECURITYRESETDIALOG());r.ln=71;this.mthSETSTRINGS();}r.ln=73;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",76);r.ln=76;{r.ln=82;m.DIALOG.setCOMPLETED(true);}r.ln=84;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",87);r.ln=87;{r.ln=89;this.mthHANDLEDEVICECHANGED();}r.ln=91;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DetailsPanelNextButton.Click",97);r.ln=97;{r.ln=99;
m.NAVIGATE.ref.mthBACKTOTARGET("INITIAL",u,u);}r.ln=101;r.e();};cO.mthSETSTRINGS=function(){var m=this.REF,r=l.mR(this,cO,"SetStrings",105);r.ln=105;{r.ln=107;m.MAININSTRUCTION.setCaption(m.STRINGS.getTEXT("MAININSTRUCTION.CAPTION"));r.ln=108;m.SECONDARYINSTRUCTION.setCaption(m.STRINGS.getTEXT("SECONDARYINSTRUCTION.CAPTION"));r.ln=109;m.PANELTEXT.setCaption(m.STRINGS.getTEXT("PANELTEXT.CAPTION"));r.ln=110;m.DIALOGLOGO.setCaption(m.STRINGS.getTEXT("DIALOGLOGO.CAPTION"));r.ln=111;m.DETAILSPANELNEXTBUTTON.setCaption(m.STRINGS.getTEXT("DETAILSPANELNEXTBUTTON.CAPTION"));
}r.ln=113;r.e();};cO.mthHANDLEDEVICECHANGED=function(){var r=l.mR(this,cO,"HandleDeviceChanged",116);r.ln=116;{r.ln=118;{var v1=l.WEB().getDevice();if(r.ln=120,l.s.eq(v1,"MOBILE")){r.ln=122;this.mthSETFORMOBILE();}else if(r.ln=124,l.s.eq(v1,"TABLET")){r.ln=126;this.mthSETFORTABLET();}else{r.ln=130;this.mthSETFORDESKTOP();}r.ln=132;}}r.ln=134;r.e();};cO.mthSETFORMOBILE=function(){var m=this.REF,r=l.mR(this,cO,"SetForMobile",136);r.ln=136;{r.ln=139;m.DIALOGLOGO.setVisible(false);r.ln=142;if((this.getLayoutManager()!==m.MOBILELAYOUT))
{r.ln=144;this.setLayoutManager(m.MOBILELAYOUT);}}r.ln=147;r.e();};cO.mthSETFORTABLET=function(){var m=this.REF,r=l.mR(this,cO,"SetForTablet",149);r.ln=149;{r.ln=152;m.DIALOGLOGO.setVisible(false);r.ln=155;if((this.getLayoutManager()!==m.LAYOUT)){r.ln=157;this.setLayoutManager(m.LAYOUT);}}r.ln=161;r.e();};cO.mthSETFORDESKTOP=function(){var m=this.REF,r=l.mR(this,cO,"SetForDesktop",163);r.ln=163;{r.ln=166;m.DIALOGLOGO.setVisible(true);r.ln=169;if((this.getLayoutManager()!==m.LAYOUT)){r.ln=171;this.setLayoutManager(m.LAYOUT);
}}r.ln=175;r.e();};cO.setrefDIALOG=function(rn){this.sR("DIALOG",rn);};},{rc:["BPFAPP002","BPFAPP001","BPFPLR023"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.RaisedButton"],dc:["BPFDLG006"]});