﻿LANSA.addComponent({id:"A02SETTIN",nm:"A02Settings",ot:"wv",tp:"View",pt:"ap",de:"Settings",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",co:function(){cO.aN.call(this);var C0=this.cR("LAYOUTMAIN","PRIM_TBLO");var C1=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C2=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C4=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C5=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C6=this.cR("FLOWLAYOUT1","PRIM_FWLM");
var C7=this.cR("LAYOUTITEM3","PRIM_FWLI");var C8=this.cR("LAYOUT2","PRIM_TBLO");var C9=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C10=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C11=this.cR("LAYOUTITEM4","PRIM_FWLI");var C12=this.cR("LAYOUTITEM5","PRIM_FWLI");var C13=this.cR("LAYOUTITEM6","PRIM_FWLI");var C14=this.cR("LAYOUTITEM7","PRIM_FWLI");var C15=this.cR("LAYOUTITEM8","PRIM_FWLI");var C16=this.cR("LAYOUTITEM9","PRIM_FWLI");var C17=this.cR("LAYOUTITEM10","PRIM_FWLI");var C18=this.cR("LAYOUTITEM11","PRIM_FWLI");
var C19=this.cR("LAYOUTITEM12","PRIM_FWLI");var C20=this.cR("LAYOUTITEM13","PRIM_FWLI");var C21=this.cR("LAYOUTITEM14","PRIM_FWLI");var C22=this.cR("LAYOUTITEM15","PRIM_FWLI");var C23=this.cR("LAYOUTITEM16","PRIM_FWLI");var C24=this.cR("LAYOUTITEM17","PRIM_FWLI");var C25=this.cR("LAYOUTITEM18","PRIM_FWLI");var C26=this.cR("PANELTHEMECOLORS","PRIM_PANL");var C27=this.cR("PANELRED","PRIM_PANL");var C28=this.cR("PANELPINK","PRIM_PANL");var C29=this.cR("PANELPURPLE","PRIM_PANL");var C30=this.cR("PANELDEEPPURPLE","PRIM_PANL");
var C31=this.cR("PANELINDIGO","PRIM_PANL");var C32=this.cR("PANELBLUE","PRIM_PANL");var C33=this.cR("PANELLIGHTBLUE","PRIM_PANL");var C34=this.cR("PANELCYAN","PRIM_PANL");var C35=this.cR("LABELTHEME","PRIM_MD","Label");var C36=this.cR("PANELTEAL","PRIM_PANL");var C37=this.cR("PANELGREEN","PRIM_PANL");var C38=this.cR("PANELLIGHTGREEN","PRIM_PANL");var C39=this.cR("PANELLIME","PRIM_PANL");var C40=this.cR("PANELYELLOW","PRIM_PANL");var C41=this.cR("PANELAMBER","PRIM_PANL");var C42=this.cR("PANELORANGE","PRIM_PANL");
var C43=this.cR("PANELDEEPORANGE","PRIM_PANL");var C44=this.cR("DARKBACKGROUNDSWITCH","PRIM_MD","Switch");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("TOPCENTER");C3.setColumn(C2);C3.setManage(C44);C3.setParent(C0);C3.setRow(C1);C3.setSizing("FITTOWIDTH");C3.setFlow("DOWN");C3.iC();C4.setAlignment("TOPCENTER");C4.setColumn(C2);C4.setManage(C26);C4.setParent(C0);C4.setRow(C1);C4.setSizing("CONTENTHEIGHTFITTOWIDTH");C4.setFlow("DOWN");
C4.setMarginLeft(25);C4.setMarginRight(25);C4.setMarginBottom(20);C4.iC();C5.setAlignment("TOPCENTER");C5.setColumn(C2);C5.setManage(C35);C5.setParent(C0);C5.setRow(C1);C5.setSizing("FITTOWIDTH");C5.setFlow("DOWN");C5.iC();C6.setSpacingItems(20);C6.iC();C7.setManage(C27);C7.setParent(C6);C7.iC();C8.iC();C9.setDisplayPosition(1);C9.setParent(C8);C9.iC();C10.setDisplayPosition(1);C10.setParent(C8);C10.iC();C11.setManage(C28);C11.setParent(C6);C11.iC();C12.setManage(C29);C12.setParent(C6);C12.iC();C13.setManage(C30);
C13.setParent(C6);C13.iC();C14.setManage(C31);C14.setParent(C6);C14.iC();C15.setManage(C32);C15.setParent(C6);C15.iC();C16.setManage(C33);C16.setParent(C6);C16.iC();C17.setManage(C34);C17.setParent(C6);C17.iC();C18.setManage(C36);C18.setParent(C6);C18.iC();C19.setManage(C37);C19.setParent(C6);C19.iC();C20.setManage(C38);C20.setParent(C6);C20.iC();C21.setManage(C39);C21.setParent(C6);C21.iC();C22.setManage(C40);C22.setParent(C6);C22.iC();C23.setManage(C41);C23.setParent(C6);C23.iC();C24.setManage(C42);
C24.setParent(C6);C24.iC();C25.setManage(C43);C25.setParent(C6);C25.iC();C26.setDisplayPosition(2);C26.setLeft(25);C26.setParent(this);C26.setTabPosition(1);C26.setTabStop(false);C26.setTop(50);C26.setWidth(935);C26.setLayoutManager(C6);C26.setHeight(110);C26.iC();C27.setDisplayPosition(1);C27.setParent(C26);C27.setTabPosition(16);C27.setTabStop(false);C27.setLayoutManager(C8);C27.setThemeDrawStyle("Back(244,67,54,1)");C27.setLeft(0);C27.setTop(0);C27.iC();C28.setDisplayPosition(2);C28.setLeft(70);
C28.setParent(C26);C28.setTabPosition(15);C28.setTabStop(false);C28.setLayoutManager(C8);C28.setThemeDrawStyle("Back(233,30,99,1)");C28.setTop(0);C28.iC();C29.setDisplayPosition(3);C29.setLeft(140);C29.setParent(C26);C29.setTabPosition(14);C29.setTabStop(false);C29.setLayoutManager(C8);C29.setThemeDrawStyle("Back(156,39,176,1)");C29.setTop(0);C29.iC();C30.setDisplayPosition(4);C30.setLeft(210);C30.setParent(C26);C30.setTabPosition(13);C30.setTabStop(false);C30.setLayoutManager(C8);C30.setThemeDrawStyle("Back(103,58,183,1)");
C30.setTop(0);C30.iC();C31.setDisplayPosition(5);C31.setLeft(280);C31.setParent(C26);C31.setTabPosition(12);C31.setTabStop(false);C31.setLayoutManager(C8);C31.setThemeDrawStyle("Back(63,81,181,1)");C31.setTop(0);C31.iC();C32.setDisplayPosition(6);C32.setLeft(350);C32.setParent(C26);C32.setTabPosition(11);C32.setTabStop(false);C32.setLayoutManager(C8);C32.setThemeDrawStyle("Back(33,150,243,1)");C32.setTop(0);C32.iC();C33.setDisplayPosition(7);C33.setLeft(420);C33.setParent(C26);C33.setTabPosition(10);
C33.setTabStop(false);C33.setLayoutManager(C8);C33.setThemeDrawStyle("Back(3,169,244,1)");C33.setTop(0);C33.iC();C34.setDisplayPosition(8);C34.setLeft(490);C34.setParent(C26);C34.setTabPosition(9);C34.setTabStop(false);C34.setLayoutManager(C8);C34.setThemeDrawStyle("Back(0,188,212,1)");C34.setTop(0);C34.iC();C35.setCaption("Theme");C35.setDisplayPosition(1);C35.setLeft(0);C35.setParent(this);C35.setTabPosition(3);C35.setTabStop(false);C35.setTop(0);C35.setHeight(50);C35.setPaddingLeft(25);C35.setWidth(985);
C35.iC();C36.setDisplayPosition(9);C36.setLeft(560);C36.setParent(C26);C36.setTabPosition(8);C36.setTabStop(false);C36.setLayoutManager(C8);C36.setThemeDrawStyle("Back(0,150,136,1)");C36.setTop(0);C36.iC();C37.setDisplayPosition(10);C37.setLeft(630);C37.setParent(C26);C37.setTabPosition(7);C37.setTabStop(false);C37.setLayoutManager(C8);C37.setThemeDrawStyle("Back(76,175,80,1)");C37.setTop(0);C37.iC();C38.setDisplayPosition(11);C38.setLeft(700);C38.setParent(C26);C38.setTabPosition(6);C38.setTabStop(false);
C38.setLayoutManager(C8);C38.setThemeDrawStyle("Back(139,195,74,1)");C38.setTop(0);C38.iC();C39.setDisplayPosition(12);C39.setLeft(770);C39.setParent(C26);C39.setTabPosition(5);C39.setTabStop(false);C39.setLayoutManager(C8);C39.setThemeDrawStyle("Back(205,220,57,1)");C39.setTop(0);C39.iC();C40.setDisplayPosition(13);C40.setLeft(840);C40.setParent(C26);C40.setTabPosition(4);C40.setTabStop(false);C40.setLayoutManager(C8);C40.setThemeDrawStyle("Back(255,235,59,1)");C40.setTop(0);C40.iC();C41.setDisplayPosition(14);
C41.setLeft(0);C41.setParent(C26);C41.setTabPosition(3);C41.setTabStop(false);C41.setLayoutManager(C8);C41.setThemeDrawStyle("Back(255,193,7,1)");C41.setTop(60);C41.iC();C42.setDisplayPosition(15);C42.setLeft(70);C42.setParent(C26);C42.setTabPosition(2);C42.setTabStop(false);C42.setLayoutManager(C8);C42.setThemeDrawStyle("Back(255,152,0,1)");C42.setTop(60);C42.iC();C43.setDisplayPosition(16);C43.setLeft(140);C43.setParent(C26);C43.setTabPosition(1);C43.setTabStop(false);C43.setLayoutManager(C8);C43.setThemeDrawStyle("Back(255,87,34,1)");
C43.setTop(60);C43.iC();C44.setCaption("Dark background");C44.setDisplayPosition(3);C44.setHeight(50);C44.setLeft(0);C44.setParent(this);C44.setTabPosition(2);C44.setTabStop(false);C44.setIconAlignment("CENTERRIGHT");C44.setWidth(985);C44.setTop(180);C44.setThemeDrawStyle("BottomDivider+TopDivider");C44.setPaddingLeft(25);C44.setPaddingRight(25);C44.setIconColor("THEME500");C44.iC();C27.aH("CLICK",this,e1);C28.aH("CLICK",this,e2);C29.aH("CLICK",this,e3);C30.aH("CLICK",this,e4);C31.aH("CLICK",this,e5);
C32.aH("CLICK",this,e6);C33.aH("CLICK",this,e7);C34.aH("CLICK",this,e8);C36.aH("CLICK",this,e9);C37.aH("CLICK",this,e10);C38.aH("CLICK",this,e11);C39.aH("CLICK",this,e12);C40.aH("CLICK",this,e13);C41.aH("CLICK",this,e14);C42.aH("CLICK",this,e15);C43.aH("CLICK",this,e16);C44.aH("CHANGED",this,e17);this.setDisplayPosition(1);this.setHeight(497);this.setWidth(985);this.setVerticalScroll(true);this.setLayoutManager(C0);this.setTabPosition(1);this.setComponentTag("");}});function e1(sender,Ps){var r=l.eR(this,cO,"#PanelRed.Click",53);
r.ln=53;{r.ln=55;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNRED"));}r.ln=57;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#PanelPink.Click",59);r.ln=59;{r.ln=61;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNPINK"));}r.ln=63;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#PanelPurple.Click",65);r.ln=65;{r.ln=67;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNPURPLE"));}r.ln=69;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#PanelDeepPurple.Click",71);
r.ln=71;{r.ln=73;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNDEEPPURPLE"));}r.ln=75;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#PanelIndigo.Click",77);r.ln=77;{r.ln=79;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNINDIGO"));}r.ln=81;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#PanelBlue.Click",83);r.ln=83;{r.ln=85;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNBLUE"));}r.ln=87;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#PanelLightBlue.Click",89);
r.ln=89;{r.ln=91;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNLIGHTBLUE"));}r.ln=93;r.e();};function e8(sender,Ps){var r=l.eR(this,cO,"#PanelCyan.Click",95);r.ln=95;{r.ln=97;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNCYAN"));}r.ln=99;r.e();};function e9(sender,Ps){var r=l.eR(this,cO,"#PanelTeal.Click",101);r.ln=101;{r.ln=103;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNTEAL"));}r.ln=105;r.e();};function e10(sender,Ps){var r=l.eR(this,cO,"#PanelGreen.Click",107);
r.ln=107;{r.ln=109;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNGREEN"));}r.ln=111;r.e();};function e11(sender,Ps){var r=l.eR(this,cO,"#PanelLightGreen.Click",113);r.ln=113;{r.ln=115;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNLIGHTGREEN"));}r.ln=117;r.e();};function e12(sender,Ps){var r=l.eR(this,cO,"#PanelLime.Click",119);r.ln=119;{r.ln=121;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNLIME"));}r.ln=123;r.e();};function e13(sender,Ps){var r=l.eR(this,cO,"#PanelYellow.Click",125);
r.ln=125;{r.ln=127;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNYELLOW"));}r.ln=129;r.e();};function e14(sender,Ps){var r=l.eR(this,cO,"#PanelAmber.Click",130);r.ln=130;{r.ln=132;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNAMBER"));}r.ln=134;r.e();};function e15(sender,Ps){var r=l.eR(this,cO,"#PanelOrange.Click",136);r.ln=136;{r.ln=138;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNORANGE"));}r.ln=140;r.e();};function e16(sender,Ps){var r=l.eR(this,cO,"#PanelDeepOrange.Click",142);
r.ln=142;{r.ln=144;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNDEEPORANGE"));}r.ln=146;r.e();};function e17(sender,Ps){var r=l.eR(this,cO,"#DarkBackgroundSwitch.Changed",148);r.ln=148;{r.ln=150;if(l.s.eq(l.WEB().getWebPage().getThemeBackground(),"LIGHT")){r.ln=152;l.WEB().getWebPage().setThemeBackground("DARK");}else{r.ln=156;l.WEB().getWebPage().setThemeBackground("LIGHT");}}r.ln=160;r.e();};},{rp:["PRIM_VIEW","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_FWLM","PRIM_FWLI","PRIM_PANL","PRIM_MD.Label","PRIM_MD.Switch"]
});