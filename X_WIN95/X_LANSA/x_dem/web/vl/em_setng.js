﻿LANSA.addComponent({id:"EM_SETNG",nm:"EM_Settings",ot:"wv",tp:"View",pt:"ap",de:"Expenses Settings",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",co:function(){cO.aN.call(this);var C0=this.cR("STYLEGREY","PRIM_VS","Style");var C1=this.cR("STYLEINDIGO","PRIM_VS","Style");var C2=this.cR("STYLEBLUE","PRIM_VS","Style");var C3=this.cR("STYLELIGHTBLUE","PRIM_VS","Style");var C4=this.cR("STYLECYAN","PRIM_VS","Style");var C5=this.cR("STYLETEAL","PRIM_VS","Style");var C6=this.cR("STYLEGREEN","PRIM_VS","Style");
var C7=this.cR("STYLELIGHTGREEN","PRIM_VS","Style");var C8=this.cR("STYLELIME","PRIM_VS","Style");var C9=this.cR("STYLEYELLOW","PRIM_VS","Style");var C10=this.cR("STYLEAMBER","PRIM_VS","Style");var C11=this.cR("STYLEORANGE","PRIM_VS","Style");var C12=this.cR("STYLEDEEPORANGE","PRIM_VS","Style");var C13=this.cR("STYLERED","PRIM_VS","Style");var C14=this.cR("STYLEPINK","PRIM_VS","Style");var C15=this.cR("STYLEPURPLE","PRIM_VS","Style");var C16=this.cR("STYLEDEEPPURPLE","PRIM_VS","Style");var C17=this.cR("LAYOUTMAIN","PRIM_TBLO");
var C18=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C19=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C20=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C21=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C22=this.cR("LAYOUTTHEMECOLORS","PRIM_FWLM");var C23=this.cR("LAYOUTTHEMECOLORSITEM1","PRIM_FWLI");var C24=this.cR("LAYOUTTHEMECOLORSITEM2","PRIM_FWLI");var C25=this.cR("LAYOUTTHEMECOLORSITEM3","PRIM_FWLI");var C26=this.cR("LAYOUTTHEMECOLORSITEM4","PRIM_FWLI");var C27=this.cR("LAYOUTTHEMECOLORSITEM5","PRIM_FWLI");
var C28=this.cR("LAYOUTTHEMECOLORSITEM6","PRIM_FWLI");var C29=this.cR("LAYOUTTHEMECOLORSITEM7","PRIM_FWLI");var C30=this.cR("LAYOUTTHEMECOLORSITEM8","PRIM_FWLI");var C31=this.cR("LAYOUTTHEMECOLORSITEM9","PRIM_FWLI");var C32=this.cR("LAYOUTTHEMECOLORSITEM10","PRIM_FWLI");var C33=this.cR("LAYOUTTHEMECOLORSITEM11","PRIM_FWLI");var C34=this.cR("LAYOUTTHEMECOLORSITEM12","PRIM_FWLI");var C35=this.cR("LAYOUTTHEMECOLORSITEM13","PRIM_FWLI");var C36=this.cR("LAYOUTTHEMECOLORSITEM14","PRIM_FWLI");var C37=this.cR("LAYOUTTHEMECOLORSITEM15","PRIM_FWLI");
var C38=this.cR("LAYOUTTHEMECOLORSITEM16","PRIM_FWLI");var C39=this.cR("LAYOUTTHEMECOLORSITEM17","PRIM_FWLI");var C40=this.cR("PANELTHEMECOLORS","PRIM_PANL");var C41=this.cR("PANELGRAY","PRIM_PANL");var C42=this.cR("PANELINDIGO","PRIM_PANL");var C43=this.cR("PANELBLUE","PRIM_PANL");var C44=this.cR("PANELLIGHTBLUE","PRIM_PANL");var C45=this.cR("PANELCYAN","PRIM_PANL");var C46=this.cR("LABELTHEME","PRIM_MD","Label");var C47=this.cR("PANELTEAL","PRIM_PANL");var C48=this.cR("PANELGREEN","PRIM_PANL");
var C49=this.cR("PANELLIGHTGREEN","PRIM_PANL");var C50=this.cR("PANELLIME","PRIM_PANL");var C51=this.cR("PANELYELLOW","PRIM_PANL");var C52=this.cR("PANELAMBER","PRIM_PANL");var C53=this.cR("PANELORANGE","PRIM_PANL");var C54=this.cR("PANELRED","PRIM_PANL");var C55=this.cR("PANELDEEPORANGE","PRIM_PANL");var C56=this.cR("PANELPINK","PRIM_PANL");var C57=this.cR("PANELPURPLE","PRIM_PANL");var C58=this.cR("PANELDEEPPURPLE","PRIM_PANL");C0.setNormBackColor("80:80:80");C0.iC();C1.setNormBackColor("63:81:181");
C1.iC();C2.setNormBackColor("33:150:243");C2.iC();C3.setNormBackColor("3:169:244");C3.iC();C4.setNormBackColor("0:188:212");C4.iC();C5.setNormBackColor("0:150:136");C5.iC();C6.setNormBackColor("76:175:80");C6.iC();C7.setNormBackColor("139:195:74");C7.iC();C8.setNormBackColor("205:220:57");C8.iC();C9.setNormBackColor("255:235:59");C9.iC();C10.setNormBackColor("255:193:7");C10.iC();C11.setNormBackColor("255:152:0");C11.iC();C12.setNormBackColor("255:87:34");C12.iC();C13.setNormBackColor("244:67:54");
C13.iC();C14.setNormBackColor("233:30:99");C14.iC();C15.setNormBackColor("156:39:176");C15.iC();C16.setNormBackColor("103:58:183");C16.iC();C17.iC();C18.setDisplayPosition(1);C18.setParent(C17);C18.iC();C19.setDisplayPosition(1);C19.setParent(C17);C19.iC();C20.setAlignment("TOPCENTER");C20.setColumn(C19);C20.setManage(C40);C20.setParent(C17);C20.setRow(C18);C20.setSizing("CONTENTHEIGHTFITTOWIDTH");C20.setFlow("DOWN");C20.setMarginLeft(25);C20.setMarginRight(25);C20.setMarginBottom(20);C20.iC();C21.setAlignment("TOPCENTER");
C21.setColumn(C19);C21.setManage(C46);C21.setParent(C17);C21.setRow(C18);C21.setSizing("FITTOWIDTH");C21.setFlow("DOWN");C21.iC();C22.setSpacingItems(20);C22.iC();C23.setManage(C41);C23.setParent(C22);C23.iC();C24.setManage(C42);C24.setParent(C22);C24.iC();C25.setManage(C43);C25.setParent(C22);C25.iC();C26.setManage(C44);C26.setParent(C22);C26.iC();C27.setManage(C45);C27.setParent(C22);C27.iC();C28.setManage(C47);C28.setParent(C22);C28.iC();C29.setManage(C48);C29.setParent(C22);C29.iC();C30.setManage(C49);
C30.setParent(C22);C30.iC();C31.setManage(C50);C31.setParent(C22);C31.iC();C32.setManage(C51);C32.setParent(C22);C32.iC();C33.setManage(C52);C33.setParent(C22);C33.iC();C34.setManage(C53);C34.setParent(C22);C34.iC();C35.setManage(C55);C35.setParent(C22);C35.iC();C36.setManage(C54);C36.setParent(C22);C36.iC();C37.setManage(C56);C37.setParent(C22);C37.iC();C38.setManage(C57);C38.setParent(C22);C38.iC();C39.setManage(C58);C39.setParent(C22);C39.iC();C40.setDisplayPosition(2);C40.setLeft(25);C40.setParent(this);
C40.setTabPosition(1);C40.setTabStop(false);C40.setTop(50);C40.setWidth(935);C40.setLayoutManager(C22);C40.setHeight(110);C40.iC();C41.setDisplayPosition(1);C41.setParent(C40);C41.setTabPosition(17);C41.setTabStop(false);C41.setStyle(C0);C41.setLeft(0);C41.setTop(0);C41.iC();C42.setDisplayPosition(2);C42.setLeft(70);C42.setParent(C40);C42.setTabPosition(12);C42.setTabStop(false);C42.setStyle(C1);C42.setTop(0);C42.iC();C43.setDisplayPosition(3);C43.setLeft(140);C43.setParent(C40);C43.setTabPosition(11);
C43.setTabStop(false);C43.setStyle(C2);C43.setTop(0);C43.iC();C44.setDisplayPosition(4);C44.setLeft(210);C44.setParent(C40);C44.setTabPosition(10);C44.setTabStop(false);C44.setStyle(C3);C44.setTop(0);C44.iC();C45.setDisplayPosition(5);C45.setLeft(280);C45.setParent(C40);C45.setTabPosition(9);C45.setTabStop(false);C45.setStyle(C4);C45.setTop(0);C45.iC();C46.setCaption("Theme");C46.setDisplayPosition(1);C46.setLeft(0);C46.setParent(this);C46.setTabPosition(2);C46.setTop(0);C46.setHeight(50);C46.setPaddingLeft(25);
C46.setWidth(985);C46.iC();C47.setDisplayPosition(6);C47.setLeft(350);C47.setParent(C40);C47.setTabPosition(8);C47.setTabStop(false);C47.setStyle(C5);C47.setTop(0);C47.iC();C48.setDisplayPosition(7);C48.setLeft(420);C48.setParent(C40);C48.setTabPosition(7);C48.setTabStop(false);C48.setStyle(C6);C48.setTop(0);C48.iC();C49.setDisplayPosition(8);C49.setLeft(490);C49.setParent(C40);C49.setTabPosition(6);C49.setTabStop(false);C49.setStyle(C7);C49.setTop(0);C49.iC();C50.setDisplayPosition(9);C50.setLeft(560);
C50.setParent(C40);C50.setTabPosition(5);C50.setTabStop(false);C50.setStyle(C8);C50.setTop(0);C50.iC();C51.setDisplayPosition(10);C51.setLeft(630);C51.setParent(C40);C51.setTabPosition(4);C51.setTabStop(false);C51.setStyle(C9);C51.setTop(0);C51.iC();C52.setDisplayPosition(11);C52.setLeft(700);C52.setParent(C40);C52.setTabPosition(3);C52.setTabStop(false);C52.setStyle(C10);C52.setTop(0);C52.iC();C53.setDisplayPosition(12);C53.setLeft(770);C53.setParent(C40);C53.setTabPosition(2);C53.setTabStop(false);
C53.setStyle(C11);C53.setTop(0);C53.iC();C54.setDisplayPosition(14);C54.setParent(C40);C54.setTabPosition(16);C54.setTabStop(false);C54.setStyle(C13);C54.setLeft(0);C54.setTop(60);C54.iC();C55.setDisplayPosition(13);C55.setLeft(840);C55.setParent(C40);C55.setTabPosition(1);C55.setTabStop(false);C55.setStyle(C12);C55.setTop(0);C55.iC();C56.setDisplayPosition(15);C56.setLeft(70);C56.setParent(C40);C56.setTabPosition(15);C56.setTabStop(false);C56.setStyle(C14);C56.setTop(60);C56.iC();C57.setDisplayPosition(16);
C57.setLeft(140);C57.setParent(C40);C57.setTabPosition(14);C57.setTabStop(false);C57.setStyle(C15);C57.setTop(60);C57.iC();C58.setDisplayPosition(17);C58.setLeft(210);C58.setParent(C40);C58.setTabPosition(13);C58.setTabStop(false);C58.setStyle(C16);C58.setTop(60);C58.iC();C41.aH("CLICK",this,e17);C42.aH("CLICK",this,e5);C43.aH("CLICK",this,e6);C44.aH("CLICK",this,e7);C45.aH("CLICK",this,e8);C47.aH("CLICK",this,e9);C48.aH("CLICK",this,e10);C49.aH("CLICK",this,e11);C50.aH("CLICK",this,e12);C51.aH("CLICK",this,e13);
C52.aH("CLICK",this,e14);C53.aH("CLICK",this,e15);C54.aH("CLICK",this,e1);C55.aH("CLICK",this,e16);C56.aH("CLICK",this,e2);C57.aH("CLICK",this,e3);C58.aH("CLICK",this,e4);this.setDisplayPosition(1);this.setHeight(497);this.setWidth(985);this.setVerticalScroll(true);this.setLayoutManager(C17);this.setTabPosition(1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#PanelRed.Click",74);r.ln=74;{r.ln=76;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNRED"));}r.ln=78;r.e();};function e2(sender,Ps)
{var r=l.eR(this,cO,"#PanelPink.Click",80);r.ln=80;{r.ln=82;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNPINK"));}r.ln=84;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#PanelPurple.Click",86);r.ln=86;{r.ln=88;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNPURPLE"));}r.ln=90;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#PanelDeepPurple.Click",92);r.ln=92;{r.ln=94;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNDEEPPURPLE"));}r.ln=96;r.e();};function e5(sender,Ps)
{var r=l.eR(this,cO,"#PanelIndigo.Click",98);r.ln=98;{r.ln=100;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNINDIGO"));}r.ln=102;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#PanelBlue.Click",104);r.ln=104;{r.ln=106;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNBLUE"));}r.ln=108;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#PanelLightBlue.Click",110);r.ln=110;{r.ln=112;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNLIGHTBLUE"));}r.ln=114;r.e();};function e8(sender,Ps)
{var r=l.eR(this,cO,"#PanelCyan.Click",116);r.ln=116;{r.ln=118;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNCYAN"));}r.ln=120;r.e();};function e9(sender,Ps){var r=l.eR(this,cO,"#PanelTeal.Click",122);r.ln=122;{r.ln=124;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNTEAL"));}r.ln=126;r.e();};function e10(sender,Ps){var r=l.eR(this,cO,"#PanelGreen.Click",128);r.ln=128;{r.ln=130;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNGREEN"));}r.ln=132;r.e();};function e11(sender,Ps)
{var r=l.eR(this,cO,"#PanelLightGreen.Click",134);r.ln=134;{r.ln=136;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNLIGHTGREEN"));}r.ln=138;r.e();};function e12(sender,Ps){var r=l.eR(this,cO,"#PanelLime.Click",140);r.ln=140;{r.ln=142;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNLIME"));}r.ln=144;r.e();};function e13(sender,Ps){var r=l.eR(this,cO,"#PanelYellow.Click",146);r.ln=146;{r.ln=148;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNYELLOW"));}r.ln=150;r.e();
};function e14(sender,Ps){var r=l.eR(this,cO,"#PanelAmber.Click",152);r.ln=152;{r.ln=154;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNAMBER"));}r.ln=156;r.e();};function e15(sender,Ps){var r=l.eR(this,cO,"#PanelOrange.Click",158);r.ln=158;{r.ln=160;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNORANGE"));}r.ln=162;r.e();};function e16(sender,Ps){var r=l.eR(this,cO,"#PanelDeepOrange.Click",164);r.ln=164;{r.ln=166;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNDEEPORANGE"));
}r.ln=168;r.e();};function e17(sender,Ps){var r=l.eR(this,cO,"#PanelGray.Click",170);r.ln=170;{r.ln=172;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNGRAY"));}r.ln=174;r.e();};},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_FWLM","PRIM_FWLI","PRIM_PANL","PRIM_MD.Label"]});