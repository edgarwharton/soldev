﻿LANSA.addComponent({id:"BPFPNL003",nm:"BPFLoginUserAccountPanel",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Portal Login User Account Panel",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",pt:{Value:{da:"r"}},mt:{HandleNext:{},SetLanguageOptions:{},DisplayFieldErrors:{ps:{"EditField":{pt:"i"},"Message":{pt:"i"}}},SetStrings:{}},co:function(){cO.aN.call(this);var C0=this.cA("SESSION","BPFAPP002");var C1=this.cA("NAVIGATE","BPFAPP001");var C2=this.cA("BROWSER","BPFWGT001");var C3=this.cR("STRINGS","BPFPLR003");
var C4=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");var C5=this.cR("LAYOUT","PRIM_TBLO");var C6=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C7=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C8=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C9=this.cR("LAYOUTROW3","PRIM_TBLO","Row");var C10=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");
var C15=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C16=this.cR("PANELTEXT","PRIM_MD","Label");var C17=this.cR("USEREMAILEDIT","PRIM_MD","Edit");var C18=this.cR("PANELACTION","PRIM_MD","FlatButton");var C19=this.cR("NEXTBUTTON","PRIM_MD","RaisedButton");var C20=this.cR("USERLANGUAGE","BPFUDC007");this.cD("DIALOG");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}if((C2!=null)&&(C2.iI()==false)){C2.iC();}C3.iC();C4.setCursor("HAND");C4.iC();C5.iC();C6.setDisplayPosition(1);
C6.setParent(C5);C6.iC();C7.setDisplayPosition(1);C7.setParent(C5);C7.iC();C8.setDisplayPosition(2);C8.setParent(C5);C8.setHeight(64);C8.setUnits("PIXELS");C8.iC();C9.setDisplayPosition(3);C9.setParent(C5);C9.setHeight(48);C9.setUnits("PIXELS");C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C6);C10.setManage(C16);C10.setParent(C5);C10.setRow(C7);C10.setSizing("CONTENTHEIGHTFITTOWIDTH");C10.iC();C11.setAlignment("CENTERLEFT");C11.setColumn(C6);C11.setManage(C17);C11.setParent(C5);C11.setRow(C7);
C11.setSizing("FITTOWIDTH");C11.iC();C12.setManage(C18);C12.setParent(C5);C12.setRow(C8);C12.setSizing("CONTENTWIDTHANDHEIGHT");C12.setColumn(C6);C12.setAlignment("CENTERLEFT");C12.iC();C13.setManage(C19);C13.setParent(C5);C13.setRow(C8);C13.setSizing("CONTENTWIDTHANDHEIGHT");C13.setColumn(C6);C13.setAlignment("CENTERRIGHT");C13.iC();C14.setParent(C5);C14.setRow(C9);C14.setColumn(C6);C14.setAlignment("TOPLEFT");C14.setSizing("FITTOHEIGHT");C14.iC();C15.setManage(C20);C15.setParent(C5);C15.setRow(C9);
C15.setSizing("NONE");C15.setColumn(C6);C15.setAlignment("CENTERLEFT");C15.iC();C16.setCaption("with your myPortal Account");C16.setDisplayPosition(1);C16.setLeft(0);C16.setParent(this);C16.setTabPosition(2);C16.setThemeDrawStyle("Heading3");C16.setTop(0);C16.setWidth(352);C16.setHeight(24);C16.setCaptionAlignment("CENTER");C16.iC();C17.setCaption("Email address");C17.setDisplayPosition(2);C17.setLeft(0);C17.setParent(this);C17.setTabPosition(3);C17.setTop(44);C17.setWidth(352);C17.iC();C18.setCaption("Create Account");
C18.setDisplayPosition(3);C18.setLeft(0);C18.setParent(this);C18.setTabPosition(4);C18.setThemeDrawStyle("ForegroundMediumPrimary");C18.setTop(179);C18.setHeight(33);C18.setCaptionMarginBottom(8);C18.setCaptionMarginLeft(8);C18.setCaptionMarginRight(8);C18.setCaptionMarginTop(8);C18.setWidth(112);C18.setStyle(C4);C18.iC();C19.setCaption("Next");C19.setDisplayPosition(4);C19.setLeft(271);C19.setParent(this);C19.setTabPosition(5);C19.setThemeDrawStyle("MediumTitle");C19.setTop(177);C19.setHeight(37);
C19.setWidth(81);C19.setCaptionMarginBottom(10);C19.setCaptionMarginTop(10);C19.setCaptionMarginLeft(26);C19.setCaptionMarginRight(26);C19.setStyle(C4);C19.iC();C20.setParent(this);C20.setDisplayPosition(5);C20.setTop(227);C20.iC();C17.aH("ENTER",this,e3);C17.aH("CHANGED",this,e4);C18.aH("CLICK",this,e2);C19.aH("CLICK",this,e3);C20.aH("CHANGED",this,e5);this.setDisplayPosition(1);this.setHeight(275);this.setTabPosition(1);this.setWidth(352);this.setLayoutManager(C5);this.aH("INITIALIZE",this,e1);
}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",50);r.ln=50;{r.ln=52;this.setrefDIALOG(l.gW("BPFPORTAL").getLOGINDIALOG());r.ln=54;this.mthSETSTRINGS();r.ln=55;this.mthSETLANGUAGEOPTIONS();r.ln=57;m.USEREMAILEDIT.set(m.SESSION.ref.getREQUESTEDACCOUNT());}r.ln=59;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PanelAction.Click",62);r.ln=62;{r.ln=65;m.NAVIGATE.ref.mthTO("CREATEUSERACCOUNT",u,u,u);}r.ln=67;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#NextButton.Click #UserEmailEdit.Enter",70);
r.ln=70;{r.ln=72;this.mthHANDLENEXT();}r.ln=74;r.e();};function e4(SENDER,Ps){var r=l.eR(this,cO,"#UserEmailEdit.Changed",77);r.ln=77;{r.ln=79;if(SENDER.getHasError()){r.ln=81;SENDER.mthCLEARERROR();}}r.ln=85;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#UserLanguage.Changed",87);r.ln=87;{r.ln=90;if(l.b.IsFalse(l.s.IsNull(m.USERLANGUAGE.getCONTROL().getValue()))){r.ln=93;m.DIALOG.mthSETWAITINGSTATE("ON");r.ln=96;m.BROWSER.ref.setUSERLANGUAGE(m.USERLANGUAGE.getCONTROL().get());r.ln=97;
m.NAVIGATE.ref.mthRELOAD();}}r.ln=101;r.e();};cO.mthHANDLENEXT=function(){var m=this.REF,r=l.mR(this,cO,"HandleNext",106);r.ln=106;{r.ln=108;if(l.s.IsValidEmail(m.USEREMAILEDIT.getValue())){r.ln=110;m.SESSION.ref.setREQUESTEDACCOUNT(l.s.LowerCase(m.USEREMAILEDIT.getValue()));r.ln=111;m.NAVIGATE.ref.mthTO("ENTERACCOUNTPASSWORD",u,u,u);}else{r.ln=115;this.mthDISPLAYFIELDERRORS(m.USEREMAILEDIT,m.STRINGS.getTEXT("USEREMAILEDIT.INVALID"));}}r.ln=119;r.e();};cO.mthSETLANGUAGEOPTIONS=function(){var m=this.REF,r=l.mR(this,cO,"SetLanguageOptions",121);
r.ln=121;{r.ln=123;if(l.b.IsFalse(l.s.IsNull(m.BROWSER.ref.getUSERLANGUAGE()))){r.ln=125;m.USERLANGUAGE.getCONTROL().set(m.BROWSER.ref.getUSERLANGUAGE());}}r.ln=129;r.e();};cO.mthDISPLAYFIELDERRORS=function(p0,p1){var r=l.mR(this,cO,"DisplayFieldErrors",133);var P0=r.cPD("EDITFIELD");var P1=r.cP("MESSAGE","PRIM_DC","UnicodeString");P0=r.sR("EDITFIELD",p0);P1.set(p1);r.ln=133;{r.ln=137;P0.mthSHOWERROR(P1.get());}r.ln=139;r.e();};cO.mthSETSTRINGS=function(){var m=this.REF,r=l.mR(this,cO,"SetStrings",141);
r.ln=141;{r.ln=143;m.PANELTEXT.setCaption(m.STRINGS.getTEXT("PANELTEXT.CAPTION"));r.ln=144;m.USEREMAILEDIT.setCaption(m.STRINGS.getTEXT("USEREMAILEDIT.CAPTION"));r.ln=145;m.PANELACTION.setCaption(m.STRINGS.getTEXT("PANELACTION.CAPTION"));r.ln=146;m.NEXTBUTTON.setCaption(m.STRINGS.getTEXT("NEXTBUTTON.CAPTION"));}r.ln=148;r.e();};cO.getVALUE=function(){return this.REF.USEREMAILEDIT;};cO.setrefDIALOG=function(rn){this.sR("DIALOG",rn);};},{rc:["BPFAPP002","BPFAPP001","BPFWGT001","BPFPLR003","BPFUDC007"],
rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.Edit","PRIM_MD.FlatButton","PRIM_MD.RaisedButton"],dc:["BPFDLG001"]});