﻿LANSA.addComponent({id:"TK2MAIN",nm:"TK2Main",ot:"wp",tp:"Web Page",pt:"ap",de:"Tasks",tl:15000300},function(l,oI,u){var rc1=l.cB("tk2img01.png");var rc2=l.cB("ximage_12.png");var cO=l.rC(oI,{an:"PRIM_WEB",mt:{UpdateDrawer:{}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C2=this.cR("LAYOUT1COLUMN2","PRIM_TBLO","Column");var C3=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C4=this.cR("LAYOUT1ROW2","PRIM_TBLO","Row");var C5=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");
var C6=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C7=this.cR("LAYOUT1ITEM3","PRIM_TBLO","Item");var C8=this.cR("LAYOUTDRAWER","PRIM_TBLO");var C9=this.cR("LAYOUTDRAWERROW1","PRIM_TBLO","Row");var C10=this.cR("LAYOUTDRAWERCOLUMN1","PRIM_TBLO","Column");var C11=this.cR("LAYOUTDRAWERITEM1","PRIM_TBLO","Item");var C12=this.cR("LAYOUTDRAWERITEM2","PRIM_TBLO","Item");var C13=this.cR("APPBAR","PRIM_MD","AppBar");var C14=this.cR("APPDRAWER","PRIM_MD","AppDrawer");var C15=this.cR("VIEWCONTAINER","PRIM_MD","ViewContainer");
var C16=this.cR("TASKSVIEW","TK2TSKLST");var C17=this.cR("PEOPLEVIEW","TK2PRSLST");var C18=this.cR("SETTINGSVIEW","TK2SETNG");var C19=this.cR("ABOUTVIEW","TK2ABOUT");var C20=this.cR("CONTACTUSVIEW","TK2CONTCT");var C21=this.cR("USERITEM","PRIM_MD","Label");var C22=this.cR("TASKSMENU","PRIM_MD","Menu");var C23=this.cR("TASKSITEM","PRIM_MD","MenuItem");var C24=this.cR("PEOPLEITEM","PRIM_MD","MenuItem");var C25=this.cR("SETTINGSITEM","PRIM_MD","MenuItem");var C26=this.cR("SIGNOUTITEM","PRIM_MD","MenuItem");
var C27=this.cR("MINIDRAWER","PRIM_BOLN");var C28=this.cR("LOGINDIALOG","TK2LOGIN");var C29=this.cA("TASKEDITDIALOG","TK2TSKEDT");var C30=this.cA("TASKDETAILDIALOG","TK2TSKDTL");var C31=this.cR("ABOUTITEM","PRIM_MD","MenuItem");var C32=this.cR("CONTACTUSITEM","PRIM_MD","MenuItem");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setUnits("CONTENT");C1.setWidth(220);C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.iC();C3.setDisplayPosition(1);C3.setParent(C0);C3.setHeight(56);C3.setUnits("CONTENT");
C3.iC();C4.setDisplayPosition(2);C4.setParent(C0);C4.iC();C5.setAlignment("TOPCENTER");C5.setColumn(C1);C5.setManage(C13);C5.setParent(C0);C5.setRow(C3);C5.setSizing("FITTOWIDTH");C5.setColumnSpan(2);C5.iC();C6.setColumn(C1);C6.setManage(C14);C6.setParent(C0);C6.setSizing("FITTOHEIGHT");C6.setRow(C4);C6.setAlignment("TOPLEFT");C6.iC();C7.setManage(C15);C7.setParent(C0);C7.setRow(C4);C7.setColumn(C2);C7.iC();C8.iC();C9.setDisplayPosition(1);C9.setParent(C8);C9.iC();C10.setDisplayPosition(1);C10.setParent(C8);
C10.iC();C11.setAlignment("TOPCENTER");C11.setColumn(C10);C11.setManage(C21);C11.setParent(C8);C11.setRow(C9);C11.setSizing("FITTOWIDTH");C11.setFlow("DOWN");C11.iC();C12.setAlignment("TOPCENTER");C12.setColumn(C10);C12.setManage(C22);C12.setParent(C8);C12.setRow(C9);C12.setSizing("CONTENTHEIGHTFITTOWIDTH");C12.setFlow("DOWN");C12.iC();C13.setDisplayPosition(2);C13.setParent(this);C13.setVisible(false);C13.setTabPosition(3);C13.setWidth(1200);C13.setThemeDrawStyle("Heading1");C13.setIcon("menu");
C13.iC();C14.setDisplayPosition(3);C14.setParent(this);C14.setLayoutManager(C8);C14.setWidth(220);C14.setTabPosition(2);C14.setHeight(744);C14.setTop(56);C14.setVisible(false);C14.setThemeDrawStyle("RightDivider");C14.iC();C15.setDisplayPosition(1);C15.setParent(this);C15.setWidth(980);C15.setVisible(false);C15.setTabPosition(1);C15.setHeight(744);C15.setLeft(220);C15.setTop(56);C15.iC();C16.setParent(C15);C16.setCaption("Tasks");C16.setHeight(744);C16.setWidth(980);C16.setLeft(326);C16.iC();C17.setParent(C15);
C17.setCaption("People");C17.setHeight(744);C17.setWidth(980);C17.setDisplayPosition(3);C17.setTabPosition(2);C17.setTop(244);C17.iC();C18.setDisplayPosition(4);C18.setParent(C15);C18.setCaption("Settings");C18.setHeight(744);C18.setWidth(980);C18.setTabPosition(3);C18.setTop(244);C18.setLeft(326);C18.iC();C19.setDisplayPosition(2);C19.setHeight(744);C19.setLeft(652);C19.setParent(C15);C19.setTabPosition(4);C19.setWidth(980);C19.iC();C20.setDisplayPosition(5);C20.setHeight(744);C20.setLeft(652);C20.setParent(C15);
C20.setTabPosition(5);C20.setTop(244);C20.setWidth(980);C20.iC();C21.setDisplayPosition(1);C21.setParent(C14);C21.setHeight(144);C21.setWidth(219);C21.setCaptionAlignment("BOTTOMCENTER");C21.setCaptionMarginBottom(20);C21.setIconThemeDrawStyle("Rounded");C21.setIconHeight(70);C21.setIconImageSizing("CROPPED");C21.setIconMarginTop(20);C21.setIconAlignment("TOPCENTER");C21.setTabPosition(1);C21.setCaption("Julie Donaldson");C21.setIconImage(rc2);C21.setThemeDrawStyle("BottomDivider");C21.setLeft(0);
C21.setTop(0);C21.iC();C22.setDisplayPosition(2);C22.setParent(C14);C22.setHeight(285);C22.setWidth(219);C22.setTabPosition(2);C22.setTop(144);C22.iC();C23.setDisplayPosition(1);C23.setParent(C22);C23.setHeight(48);C23.setWidth(219);C23.setCaption("Tasks");C23.setIcon("assignment");C23.setTabPosition(1);C23.setLeft(0);C23.setTop(0);C23.setIconOpacity(50);C23.setView(C16);C23.iC();C24.setDisplayPosition(2);C24.setParent(C22);C24.setHeight(48);C24.setWidth(219);C24.setCaption("People");C24.setIcon("people");
C24.setTabPosition(2);C24.setLeft(0);C24.setTop(48);C24.setIconOpacity(50);C24.setView(C17);C24.setThemeDrawStyle("BottomDivider");C24.iC();C25.setDisplayPosition(5);C25.setParent(C22);C25.setHeight(47);C25.setWidth(219);C25.setCaption("Settings");C25.setIcon("settings");C25.setTabPosition(5);C25.setLeft(0);C25.setTop(190);C25.setIconOpacity(50);C25.setView(C18);C25.iC();C26.setDisplayPosition(6);C26.setParent(C22);C26.setHeight(48);C26.setWidth(219);C26.setCaption("Sign out");C26.setIcon("fa-sign-out");
C26.setTabPosition(6);C26.setLeft(0);C26.setTop(237);C26.setIconOpacity(50);C26.iC();C27.iC();C28.setPlacement("FULLSCREEN");C28.iC();if((C29!=null)&&(C29.iI()==false)){C29.iC();}if((C30!=null)&&(C30.iI()==false)){C30.iC();}C31.setDisplayPosition(3);C31.setParent(C22);C31.setHeight(47);C31.setWidth(219);C31.setCaption("About");C31.setIcon("info");C31.setTabPosition(4);C31.setLeft(0);C31.setTop(96);C31.setIconOpacity(50);C31.setView(C19);C31.iC();C32.setDisplayPosition(4);C32.setParent(C22);C32.setHeight(47);
C32.setWidth(219);C32.setCaption("Contact Us");C32.setIcon("phone");C32.setTabPosition(3);C32.setLeft(0);C32.setTop(143);C32.setIconOpacity(50);C32.setView(C20);C32.iC();l.WEB().aH("DEVICECHANGED",this,e4);l.WEB().aH("REQUESTFAILED",this,e8);C13.aH("ICONCLICK",this,e6);C15.aH("ACTIVEVIEWCHANGED",this,e7);C18.aH("MINIDRAWER",this,e5);C26.aH("CLICK",this,e2);C28.aH("SIGNINCOMPLETED",this,e3);C29.aH("TASKCHANGED",this,e9);C30.aH("TASKDELETED",this,e9);this.setTheme(l.THEME().get("MATERIALDESIGNCYAN"));
this.setCaption("Tasks");this.setIcon(rc1);this.setLayoutManager(C0);this.aH("INITIALIZE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",53);r.ln=53;{r.ln=55;m.LOGINDIALOG.mthSHOW();}r.ln=57;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SignoutItem.Click",59);r.ln=59;{r.ln=61;m.VIEWCONTAINER.mthCLEAR();r.ln=63;m.APPBAR.setVisible(false);m.APPDRAWER.setVisible(false);r.ln=65;m.LOGINDIALOG.mthLOGOUT();}r.ln=67;r.e();};function e3(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#LoginDialog.SignInCompleted",69);r.ln=69;{r.ln=71;m.LOGINDIALOG.mthCLOSE();r.ln=73;m.APPBAR.mthFADEIN(u,u);r.ln=74;m.APPDRAWER.mthFADEIN(u,u);r.ln=75;m.VIEWCONTAINER.mthFADEIN(u,u);r.ln=77;m.TASKSVIEW.mthSHOW();r.ln=78;m.TASKEDITDIALOG.ref.mthLOADPEOPLE();}r.ln=80;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Sys_Web.DeviceChanged",82);r.ln=82;{r.ln=84;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=86;m.APPDRAWER.setDrawerStyle("SLIDEINLEFT");}else
{r.ln=90;m.APPDRAWER.setDrawerStyle("PERMANENT");}r.ln=94;this.mthUPDATEDRAWER();}r.ln=96;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SettingsView.MiniDrawer",98);var P0=Ps.r("VALUE");r.ln=98;{r.ln=100;m.MINIDRAWER.set(P0.get());r.ln=102;this.mthUPDATEDRAWER();}r.ln=104;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AppBar.IconClick",106);r.ln=106;{r.ln=108;m.APPDRAWER.mthTOGGLEDRAWER();}r.ln=110;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ViewContainer.ActiveViewChanged",112);
r.ln=112;{r.ln=114;if((m.VIEWCONTAINER.getActiveView()!=null)){r.ln=116;m.APPBAR.setCaption(m.VIEWCONTAINER.getActiveView().getCaption());}}r.ln=120;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.RequestFailed",122);var P0=Ps.r("REASON");var P1=Ps.r("HANDLED");r.ln=122;{r.ln=124;if(l.s.eq(P0.get(),"SESSIONINVALID")){r.ln=126;m.VIEWCONTAINER.mthCLEAR();r.ln=128;l.APPL().mthCLOSEALLDIALOGS();r.ln=130;m.APPBAR.setVisible(false);m.APPDRAWER.setVisible(false);r.ln=132;m.LOGINDIALOG.mthHANDLEINVALIDSESSION();
r.ln=134;P1.set(true);}}r.ln=138;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TaskEditDialog.TaskChanged #TaskDetailDialog.TaskDeleted",140);r.ln=140;{r.ln=142;if((m.VIEWCONTAINER.getActiveView()===m.TASKSVIEW)){r.ln=144;m.TASKSVIEW.mthREFRESHTASKS();}r.ln=148;if((m.VIEWCONTAINER.getActiveView()===m.PEOPLEVIEW)){r.ln=150;m.PEOPLEVIEW.mthREFRESHPEOPLE();}}r.ln=154;r.e();};cO.mthUPDATEDRAWER=function(){var m=this.REF,r=l.mR(this,cO,"UpdateDrawer",160);r.ln=160;{r.ln=163;if(l.tB(l.and(m.MINIDRAWER.get(),l.s.ne(l.WEB().getDevice(),"MOBILE"))))
{r.ln=165;m.APPDRAWER.setWidth(56);r.ln=166;m.USERITEM.setHeight(70);r.ln=167;m.USERITEM.setIconHeight(40);r.ln=168;m.USERITEM.setCaption("");}else{r.ln=172;m.APPDRAWER.setWidth(220);r.ln=173;m.USERITEM.setHeight(144);r.ln=174;m.USERITEM.setIconHeight(70);r.ln=175;m.USERITEM.set("Julie Donaldson");}}r.ln=179;r.e();};},{rc:["TK2TSKLST","TK2PRSLST","TK2SETNG","TK2ABOUT","TK2CONTCT","TK2LOGIN","TK2TSKEDT","TK2TSKDTL"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.AppBar","PRIM_MD.AppDrawer","PRIM_MD.ViewContainer","PRIM_MD.Label","PRIM_MD.Menu","PRIM_MD.MenuItem","PRIM_BOLN"],
dp:["PRIM_ANIM"]});