﻿LANSA.addComponent({id:"LT_SIGNIN",nm:"LT_SignIn",ot:"rp",tp:"Reusable Part",pt:"ap",de:"LANSA Tools Create Account",tl:15000300},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_NUM",ft:"P",ln:7,dc:0,ec:"A",lb:{"ENG":"Number","FRA":"Nombre"}[cL],h1:{"ENG":"Standard","FRA":"Nombre"}[cL],h2:{"ENG":"Number","FRA":" "}[cL],h3:" ",de:{"ENG":"Standard Number","FRA":"Nombre Standard"}[cL],dv:0,ia:["FE","RB"]},F2:{nm:"XPASSWORD",an:"xPassword",ft:"NV",ln:256,dc:0,lb:"Password",
h1:"Password",h2:" ",h3:" ",de:"Password",dv:"",ia:["FE","LC"]},F3:{nm:"XEMAIL",an:"xEmail",ft:"NV",ln:256,dc:0,lb:"Email",h1:"Email",h2:" ",h3:" ",de:"Email",dv:"",ia:["FE","LC","URL"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{SetHeading:{da:"na"}},mt:{SetUp:{},SignIn:{},GetEmailAddress:{},ResetPassword:{}},ev:{SignInComplete:{}},co:function(){cO.aN.call(this);this.aF("LT_SIGNIN",Fd);var C0=this.cR("STYLEHEADER","PRIM_VS","Style");var C1=this.cR("BRUSHHEADER","PRIM_VS","SolidBrush");var C2=this.cR("STYLEUNDERLINE","PRIM_VS","Style");
var C3=this.cR("LAYOUT","PRIM_TBLO");var C4=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C5=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C6=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C7=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C8=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");
var C14=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C15=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C16=this.cR("LABEL1","PRIM_MD","Label");var C17=this.cR("LABEL2","PRIM_MD","Label");var C18=this.cR("EDITUSERNAME","PRIM_MD","Edit");var C19=this.cR("EDITPASSWORD","PRIM_MD","Edit");var C20=this.cR("SHOWHIDEPASSWORD","PRIM_MD","Icon");var C21=this.cR("TEXT","PRIM_MD","Label");var C22=this.cR("BUTTONSIGNIN","PRIM_MD","RaisedButton");var C23=this.cR("SNACKBAR1","PRIM_MD","Alert");var C24=this.cR("LT_RESULT","PRIM_BOLN");
var C25=this.cA("APPLICATION","LT_APPOBJ");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("245:245:245");C1.iC();C2.setUnderline(true);C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.setUnits("PIXELS");C4.setWidth(100);C4.iC();C5.setDisplayPosition(2);C5.setParent(C3);C5.iC();C6.setDisplayPosition(1);C6.setParent(C3);C6.setHeight(220);C6.setUnits("PIXELS");C6.iC();C7.setDisplayPosition(2);C7.setParent(C3);C7.setUnits("PIXELS");C7.setHeight(270);C7.iC();C8.setManage(C21);C8.setParent(C3);
C8.setRow(C7);C8.setSizing("FITTOWIDTH");C8.setColumn(C5);C8.setAlignment("TOPLEFT");C8.setFlow("DOWN");C8.setMarginLeft(8);C8.setMarginRight(8);C8.iC();C9.setManage(C22);C9.setParent(C3);C9.setRow(C7);C9.setSizing("NONE");C9.setColumn(C5);C9.setAlignment("BOTTOMRIGHT");C9.setFlow("UP");C9.setMarginRight(16);C9.setMarginBottom(16);C9.iC();C10.setManage(C19);C10.setParent(C3);C10.setRow(C6);C10.setSizing("FITTOWIDTH");C10.setColumn(C4);C10.setAlignment("TOPLEFT");C10.setFlow("DOWN");C10.setMarginLeft(8);
C10.setMarginRight(8);C10.setColumnSpan(2);C10.iC();C11.setManage(C18);C11.setParent(C3);C11.setRow(C6);C11.setSizing("FITTOWIDTH");C11.setColumn(C4);C11.setAlignment("TOPLEFT");C11.setFlow("DOWN");C11.setMarginLeft(8);C11.setMarginRight(8);C11.setColumnSpan(2);C11.iC();C12.setManage(C17);C12.setParent(C3);C12.setRow(C6);C12.setSizing("FITTOWIDTH");C12.setColumn(C4);C12.setAlignment("TOPLEFT");C12.setFlow("DOWN");C12.setColumnSpan(2);C12.iC();C13.setAlignment("BOTTOMRIGHT");C13.setColumn(C4);C13.setManage(C23);
C13.setParent(C3);C13.setRow(C7);C13.setSizing("FITTOWIDTH");C13.setFlow("UP");C13.setColumnSpan(2);C13.setMarginBottom(80);C13.setMarginRight(10);C13.setMarginLeft(10);C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C4);C14.setManage(C20);C14.setParent(C3);C14.setRow(C7);C14.setSizing("NONE");C14.setFlow("DOWN");C14.setMarginLeft(8);C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C4);C15.setManage(C16);C15.setParent(C3);C15.setRow(C6);C15.setSizing("FITTOWIDTH");C15.setFlow("DOWN");C15.setColumnSpan(2);
C15.setMarginLeft(16);C15.setMarginTop(8);C15.setMarginBottom(24);C15.iC();C16.setCaption("Sign in");C16.setDisplayPosition(1);C16.setLeft(16);C16.setParent(this);C16.setTabPosition(1);C16.setThemeDrawStyle("ForegroundMediumPrimary+Heading2");C16.setTop(8);C16.setCaptionMarginBottom(0);C16.setCaptionMarginLeft(0);C16.setCaptionMarginRight(0);C16.setCaptionMarginTop(0);C16.setWidth(482);C16.iC();C17.setCaption("Sign in");C17.setDisplayPosition(2);C17.setHeight(80);C17.setLeft(0);C17.setParent(this);
C17.setTabPosition(2);C17.setTop(68);C17.setWordWrap(true);C17.setCaptionMarginLeft(24);C17.setWidth(498);C17.setThemeDrawStyle("BottomDivider+Heading2");C17.setStyle(C0);C17.iC();C18.setDisplayPosition(3);C18.setLeft(8);C18.setParent(this);C18.setTabPosition(3);C18.setTop(148);C18.setWidth(482);C18.setCaption("Username");C18.iC();C19.setDisplayPosition(4);C19.setLeft(8);C19.setParent(this);C19.setTabPosition(4);C19.setTop(223);C19.setWidth(482);C19.setCaption("Password");C19.setPasswordChar("x");
C19.iC();C20.setDisplayPosition(5);C20.setIcon("remove_red_eye");C20.setLeft(8);C20.setParent(this);C20.setTabPosition(5);C20.setTop(220);C20.setWidth(20);C20.setHeight(20);C20.setIconHeight(20);C20.setIconKind("ACTIVE");C20.iC();C21.setCaption("Forgot your password");C21.setDisplayPosition(6);C21.setParent(this);C21.setTabPosition(6);C21.setTop(220);C21.setWidth(382);C21.setLeft(108);C21.setIcon("fa-question-circle-o");C21.setIconHeight(15);C21.setIconColor("THEME400");C21.setThemeDrawStyle("Subheading");
C21.setHeight(25);C21.setStyle(C2);C21.setCaptionAlignment("TOPRIGHT");C21.iC();C22.setCaption("Sign in");C22.setDisplayPosition(7);C22.setLeft(282);C22.setParent(this);C22.setTabPosition(7);C22.setTop(426);C22.setButtonDefault(true);C22.setThemeDrawStyle("MediumTitle");C22.setWidth(200);C22.setHeight(48);C22.setCaptionMarginLeft(0);C22.iC();C23.setParent(this);C23.setTop(362);C23.setHeight(48);C23.setWidth(478);C23.setThemeDrawStyle("Heading3");C23.setDuration(5000);C23.setDisplayPosition(8);C23.setTabPosition(8);
C23.setCloseIcon(false);C23.setLeft(10);C23.setThemeBackground("DARK");C23.iC();C24.iC();if((C25!=null)&&(C25.iI()==false)){C25.iC();}l.WEB().aH("DEVICECHANGED",this,e4);C20.aH("CLICK",this,e2);C21.aH("CLICK",this,e3);C22.aH("CLICK",this,e1);this.setDisplayPosition(1);this.setHeight(490);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setLayoutManager(C3);this.setThemeDrawStyle("Card+Shadow1");}});cO.mthASSIGNHEADING=function(p0){var m=this.REF,r=l.pR(this,cO,"AssignHeading",46);
var P0=r.cPF("VALUE",Fd.F1.Dc);P0.set(p0);r.ln=46;{r.ln=49;if(l.n.eq(P0.get(),1)){r.ln=51;m.LABEL1.setVisible(true);r.ln=52;m.LABEL2.setVisible(false);}else{r.ln=56;m.LABEL1.setVisible(false);r.ln=57;m.LABEL2.setVisible(true);}}r.ln=61;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#ButtonSignIn.Click",63);r.ln=63;{r.ln=65;this.mthSIGNIN();}r.ln=67;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ShowHidePassword.Click",69);r.ln=69;{r.ln=71;if(l.s.eq(m.EDITPASSWORD.getPasswordChar(),""))
{r.ln=74;m.EDITPASSWORD.setPasswordChar("x");}else{r.ln=78;m.EDITPASSWORD.setPasswordChar("");}}r.ln=82;r.e();};function e3(sender,Ps){var f=this.FLD.LT_SIGNIN,m=this.REF,r=l.eR(this,cO,"#Text.Click",84);r.ln=84;{r.ln=90;m.EDITUSERNAME.mthCLEARERROR();r.ln=92;f.F2.set(m.EDITPASSWORD.get());r.ln=94;if(cO.mthGETEMAILADDRESS.call(this)){r.ln=97;this.mthRESETPASSWORD();}else{r.ln=101;m.EDITUSERNAME.mthSHOWERROR("This username is not recognised");}}r.ln=105;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",107);
r.ln=107;{r.ln=109;{var v1=l.WEB().getDevice();if(r.ln=111,l.or(l.s.eq(v1,"DESKTOP"),l.s.eq(v1,"TABLET"))){r.ln=113;m.LAYOUTROW2.setHeight(270);}else if(r.ln=115,l.s.eq(v1,"MOBILE")){r.ln=117;m.LAYOUTROW2.setHeight(150);}r.ln=119;}}r.ln=121;r.e();};cO.mthSETUP=function(){var m=this.REF,r=l.mR(this,cO,"SetUp",125);r.ln=125;{r.ln=127;m.LAYOUTROW2.setHeight(150);}r.ln=129;r.e();};cO.mthSIGNIN=function(){var f=this.FLD.LT_SIGNIN,m=this.REF,r=l.mR(this,cO,"SignIn",131),mth=r;var C0=r.cDR("SIGNIN","LT_SRVM","SIGNIN");
C0.iC();C0.aH("COMPLETED",this,e5);r.ln=131;{r.ln=135;l.MSGQ().mthCLEARALL();r.ln=137;m.EDITUSERNAME.mthCLEARERROR();r.ln=139;f.F2.set(m.EDITPASSWORD.get());r.ln=140;f.F2.set(l.s.Encrypt(f.F2.get(),f.F2.get()));r.ln=142;C0.mthEXECUTEASYNC({FLD:{"XUSERNAME":m.EDITUSERNAME.get(),"XPASSWORD":f.F2.get()}},{FLD:{"LT_RESULT":m.LT_RESULT}});}r.ln=165;r.e();function e5(sender,Ps){var r=l.eR(this,cO,"#SignIn.Completed",144,mth);r.ln=144;{r.ln=146;if(l.tB(m.LT_RESULT.get())){r.ln=148;m.APPLICATION.ref.setCURRENTUSER(m.EDITUSERNAME.get());
r.ln=150;m.EDITUSERNAME.set("");r.ln=151;m.EDITPASSWORD.set("");r.ln=152;m.EDITPASSWORD.setPasswordChar("x");r.ln=154;this.fE("SIGNINCOMPLETE");}else{r.ln=158;m.SNACKBAR1.setCaption("Sign in failed");r.ln=159;m.SNACKBAR1.mthSHOWALERT();}}r.ln=163;r.e();}};cO.mthGETEMAILADDRESS=function(){var f=this.FLD.LT_SIGNIN,m=this.REF,r=l.mR(this,cO,"GetEmailAddress",167);var P0=r.cP("RESULT","PRIM_BOLN");var C0=r.cDR("GETEMAIL","LT_SRVM","GETEMAIL");C0.iC();r.ln=167;{r.ln=172;C0.mthEXECUTE({FLD:{"XUSERNAME":m.EDITUSERNAME.get()}},{FLD:{"XEMAIL":f.F3,"LT_RESULT":P0}});
}r.ln=174;return r.rV(P0.get());};cO.mthRESETPASSWORD=function(){var m=this.REF,r=l.mR(this,cO,"ResetPassword",176),mth=r;var C0=r.cDR("PASSWORDRESET","LT_SRVM","REQUESTPASSWORDRESET");var C1=r.cR("RESULT","PRIM_ALPH");C0.iC();C1.iC();C0.aH("COMPLETED",this,e6);r.ln=176;{r.ln=181;C0.mthEXECUTE({FLD:{"LT_URL":l.WEB().getURL(),"XUSERNAME":m.EDITUSERNAME.get()}},{FLD:{"LT_RETURNCODE":C1}});}r.ln=199;r.e();function e6(sender,Ps){var r=l.eR(this,cO,"#PasswordReset.Completed",183,mth);r.ln=183;{r.ln=185;
if(l.tB(l.s.eq(C1.get(),"OK"))){r.ln=187;m.SNACKBAR1.setCaption("Email has been sent to you");}else{r.ln=191;m.SNACKBAR1.setCaption("Email for forgotten password failed to send");}r.ln=195;m.SNACKBAR1.mthSHOWALERT();}r.ln=197;r.e();}};cO.setSETHEADING=function(v){this.mthASSIGNHEADING(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_NUM"});}},{rc:["LT_APPOBJ"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.Edit","PRIM_MD.Icon","PRIM_MD.RaisedButton","PRIM_MD.Alert","PRIM_BOLN","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_MSGQ"],
dp:["PRIM_ALPH"]});