﻿LANSA.addComponent({id:"XMDSELECT",nm:"xMdSelection",ot:"wv",tp:"View",pt:"ap",de:"Material Design Selection",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"STD_DTIMX",ft:"DT",ln:26,dc:0,lb:{"ENG":"Std RDMLX Datim","FRA":"?","JPN":"?","LLL":"Std RDMLX Datim"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"RDMLX","FRA":"?","JPN":"?","LLL":"RDMLX"}[cL],h3:{"ENG":"Datetime","FRA":"?","JPN":"?","LLL":"Datetime"}[cL],
de:{"ENG":"Standard RDMLX Datetime","FRA":"?","JPN":"?","LLL":"Standard RDMLX Datetime"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]}};var cO=l.rC(oI,{an:"PRIM_VIEW",fd:Fd,rm:["dt"],co:function(){cO.aN.call(this);this.aF("XMDSELECT",Fd);var C0=this.cR("STYLEHAND","PRIM_VS","Style");var C1=this.cR("STYLEBORDER1","PRIM_VS","Style");var C2=this.cR("LAYOUTMAIN","PRIM_TBLO");var C3=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C4=this.cR("LAYOUTMAINCOLUMN2","PRIM_TBLO","Column");var C5=this.cR("LAYOUTMAINCOLUMN3","PRIM_TBLO","Column");
var C6=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C7=this.cR("LAYOUTMAINROW2","PRIM_TBLO","Row");var C8=this.cR("LAYOUTMAINROW3","PRIM_TBLO","Row");var C9=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");var C12=this.cR("LAYOUTMAINITEM4","PRIM_TBLO","Item");var C13=this.cR("LAYOUTMAINITEM5","PRIM_TBLO","Item");var C14=this.cR("LAYOUTMAINITEM6","PRIM_TBLO","Item");var C15=this.cR("LAYOUTPANELS","PRIM_TBLO");
var C16=this.cR("LAYOUTPANELSROW1","PRIM_TBLO","Row");var C17=this.cR("LAYOUTPANELSCOLUMN1","PRIM_TBLO","Column");var C18=this.cR("LAYOUTPANELSITEM1","PRIM_TBLO","Item");var C19=this.cR("LAYOUTPANELSITEM2","PRIM_TBLO","Item");var C20=this.cR("FLOWLAYOUT1","PRIM_FWLM");var C21=this.cR("FLOWLAYOUT1ITEM1","PRIM_FWLI");var C22=this.cR("FLOWLAYOUT1ITEM2","PRIM_FWLI");var C23=this.cR("LABELTITLE","PRIM_MD","Label");var C24=this.cR("LABELSUBTITLE","PRIM_MD","Label");var C25=this.cR("PANELSIMPLE","PRIM_PANL");
var C26=this.cR("LABEL8","PRIM_MD","Label");var C27=this.cR("PANEL","PRIM_PANL");var C28=this.cR("LAYOUT3","PRIM_TBLO");var C29=this.cR("LAYOUTROW3","PRIM_TBLO","Row");var C30=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C31=this.cR("LAYOUTITEM27","PRIM_FWLI");var C32=this.cR("LAYOUTITEM28","PRIM_TBLO","Item");var C33=this.cR("LAYOUTITEM15","PRIM_FWLI");var C34=this.cR("LAYOUTITEM31","PRIM_TBLO","Item");var C35=this.cR("LAYOUTITEM38","PRIM_FWLI");var C36=this.cR("LAYOUTITEM39","PRIM_TBLO","Item");
var C37=this.cR("LAYOUT3ITEM1","PRIM_TBLO","Item");var C38=this.cR("LAYOUT3ITEM2","PRIM_TBLO","Item");var C39=this.cR("LAYOUT3ITEM3","PRIM_TBLO","Item");var C40=this.cR("LAYOUT3ITEM4","PRIM_TBLO","Item");var C41=this.cR("LAYOUT3ITEM5","PRIM_TBLO","Item");var C42=this.cR("LAYOUT3ITEM6","PRIM_TBLO","Item");var C43=this.cR("LAYOUT3ITEM7","PRIM_TBLO","Item");var C44=this.cR("LAYOUT3ITEM8","PRIM_TBLO","Item");var C45=this.cR("LAYOUT3ITEM9","PRIM_TBLO","Item");var C46=this.cR("LAYOUT3ITEM10","PRIM_TBLO","Item");
var C47=this.cR("LAYOUT3ITEM11","PRIM_TBLO","Item");var C48=this.cR("LAYOUT3ITEM12","PRIM_TBLO","Item");var C49=this.cR("LAYOUT3ITEM13","PRIM_TBLO","Item");var C50=this.cR("LAYOUTITEM2","PRIM_FWLI");var C51=this.cR("LAYOUT3ITEM14","PRIM_TBLO","Item");var C52=this.cR("LAYOUT3ITEM15","PRIM_TBLO","Item");var C53=this.cR("LAYOUT3ITEM16","PRIM_TBLO","Item");var C54=this.cR("LAYOUT3ITEM17","PRIM_TBLO","Item");var C55=this.cR("LAYOUT3ITEM18","PRIM_TBLO","Item");var C56=this.cR("LAYOUT3ITEM19","PRIM_TBLO","Item");
var C57=this.cR("LAYOUTITEM4","PRIM_FWLI");var C58=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C59=this.cR("LAYOUT3ITEM20","PRIM_TBLO","Item");var C60=this.cR("LAYOUT3ITEM21","PRIM_TBLO","Item");var C61=this.cR("LAYOUT3ITEM22","PRIM_TBLO","Item");var C62=this.cR("LAYOUT3ITEM23","PRIM_TBLO","Item");var C63=this.cR("LAYOUT3ITEM24","PRIM_TBLO","Item");var C64=this.cR("PANEL5","PRIM_PANL");var C65=this.cR("PANEL1","PRIM_PANL");var C66=this.cR("LABEL88","PRIM_MD","Label");var C67=this.cR("PANEL2","PRIM_PANL");
var C68=this.cR("LABEL9","PRIM_MD","Label");var C69=this.cR("PANEL3","PRIM_PANL");var C70=this.cR("LABEL1","PRIM_MD","Label");var C71=this.cR("CHECKBOX","PRIM_MD","CheckBox");var C72=this.cR("CHECKBOX1","PRIM_MD","CheckBox");var C73=this.cR("RADIOBUTTON","PRIM_MD","RadioButton");var C74=this.cR("RADIOBUTTON1","PRIM_MD","RadioButton");var C75=this.cR("SWITCH","PRIM_MD","Switch");var C76=this.cR("SWITCH1","PRIM_MD","Switch");var C77=this.cR("LABEL","PRIM_MD","Label");var C78=this.cR("SWITCH2","PRIM_MD","Switch");
var C79=this.cR("SWITCH3","PRIM_MD","Switch");var C80=this.cR("TEXT","PRIM_MD","Label");var C81=this.cR("TEXT1","PRIM_MD","Label");var C82=this.cR("CHECKBOX2","PRIM_MD","CheckBox");var C83=this.cR("CHECKBOX3","PRIM_MD","CheckBox");var C84=this.cR("PANEL4","PRIM_PANL");var C85=this.cR("LABEL22","PRIM_MD","Label");var C86=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C87=this.cR("CHECKBOX4","PRIM_MD","CheckBox");var C88=this.cR("CHECKBOX5","PRIM_MD","CheckBox");var C89=this.cR("RADIOBUTTON2","PRIM_MD","RadioButton");
var C90=this.cR("RADIOBUTTON3","PRIM_MD","RadioButton");var C91=this.cR("SWITCH4","PRIM_MD","Switch");var C92=this.cR("SWITCH5","PRIM_MD","Switch");var C93=this.cR("PANEL6","PRIM_PANL");var C94=this.cR("LABEL3","PRIM_MD","Label");var C95=this.cR("CHECKBOX6","PRIM_MD","CheckBox");var C96=this.cR("CHECKBOX7","PRIM_MD","CheckBox");var C97=this.cR("CHECKBOX8","PRIM_MD","CheckBox");var C98=this.cR("CHECKBOX9","PRIM_MD","CheckBox");var C99=this.cR("CHECKBOX10","PRIM_MD","CheckBox");var C100=this.cR("PANELDATE","PRIM_PANL");
var C101=this.cR("LABEL58","PRIM_MD","Label");var C102=this.cR("CALENDAR","PRIM_MD","DateTimePicker");C0.setCursor("HAND");C0.iC();C1.setBorderBottom(1);C1.setBorderLeft(1);C1.setBorderRight(1);C1.setBorderTop(1);C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.setWidth(12);C4.setMaxWidth(1500);C4.iC();C5.setDisplayPosition(3);C5.setParent(C2);C5.iC();C6.setDisplayPosition(1);C6.setParent(C2);C6.setHeight(116);C6.setUnits("CONTENT");C6.iC();
C7.setDisplayPosition(3);C7.setParent(C2);C7.iC();C8.setDisplayPosition(2);C8.setParent(C2);C8.setHeight(270);C8.setUnits("PIXELS");C8.iC();C9.setColumn(C4);C9.setManage(C23);C9.setParent(C2);C9.setRow(C6);C9.setSizing("FITTOWIDTH");C9.setFlow("DOWN");C9.setAlignment("TOPCENTER");C9.setMarginTop(32);C9.iC();C10.setColumn(C4);C10.setManage(C24);C10.setParent(C2);C10.setSizing("CONTENTHEIGHTFITTOWIDTH");C10.setRow(C6);C10.setAlignment("TOPCENTER");C10.setFlow("DOWN");C10.setMarginTop(16);C10.setMarginBottom(32);
C10.iC();C11.setAlignment("TOPCENTER");C11.setColumn(C4);C11.setManage(C25);C11.setParent(C2);C11.setRow(C7);C11.setSizing("CONTENTHEIGHTFITTOWIDTH");C11.setFlow("DOWN");C11.setMarginTop(50);C11.iC();C12.setManage(C65);C12.setParent(C2);C12.setRow(C8);C12.setSizing("NONE");C12.setColumn(C4);C12.setFlow("CENTERHORIZONTAL");C12.setMarginLeft(16);C12.setMarginRight(16);C12.setMarginTop(32);C12.setAlignment("TOPCENTER");C12.iC();C13.setManage(C67);C13.setParent(C2);C13.setRow(C8);C13.setSizing("NONE");
C13.setColumn(C4);C13.setFlow("CENTERHORIZONTAL");C13.setMarginLeft(16);C13.setMarginRight(16);C13.setMarginTop(32);C13.setAlignment("TOPCENTER");C13.iC();C14.setManage(C69);C14.setParent(C2);C14.setRow(C8);C14.setSizing("NONE");C14.setColumn(C4);C14.setFlow("CENTERHORIZONTAL");C14.setMarginLeft(16);C14.setMarginRight(16);C14.setMarginTop(32);C14.setAlignment("TOPCENTER");C14.iC();C15.iC();C16.setDisplayPosition(1);C16.setParent(C15);C16.iC();C17.setDisplayPosition(1);C17.setParent(C15);C17.iC();
C18.setColumn(C17);C18.setManage(C26);C18.setParent(C15);C18.setRow(C16);C18.setSizing("FITTOWIDTH");C18.setAlignment("TOPCENTER");C18.setFlow("DOWN");C18.setMarginLeft(16);C18.setMarginRight(16);C18.iC();C19.setColumn(C17);C19.setManage(C27);C19.setParent(C15);C19.setRow(C16);C19.setSizing("CONTENTHEIGHTFITTOWIDTH");C19.setFlow("DOWN");C19.setAlignment("TOPCENTER");C19.iC();C20.setMarginBottom(16);C20.setMarginLeft(16);C20.setMarginRight(16);C20.setMarginTop(16);C20.setSpacingItems(30);C20.setFlowOperationHor("CENTER");
C20.setSpacing(30);C20.iC();C21.setManage(C64);C21.setParent(C20);C21.iC();C22.setManage(C100);C22.setParent(C20);C22.iC();C23.setCaption("Selection");C23.setDisplayPosition(1);C23.setParent(this);C23.setTabPosition(1);C23.setThemeDrawStyle("Heading1");C23.setTop(32);C23.setWidth(1034);C23.setHeight(44);C23.setCaptionAlignment("TOPLEFT");C23.setWordWrap(true);C23.setLeft(87);C23.setCaptionMarginLeft(16);C23.setCaptionMarginRight(16);C23.iC();C24.setDisplayPosition(2);C24.setParent(this);C24.setTabPosition(5);
C24.setThemeDrawStyle("Heading3");C24.setTop(92);C24.setWidth(1034);C24.setHeight(24);C24.setCaptionAlignment("TOPLEFT");C24.setWordWrap(true);C24.setLeft(87);C24.setCaptionMarginLeft(16);C24.setCaptionMarginRight(16);C24.setCaption("Selection controls allow the user to select options. Sample usage can be found in the xMdSelection component.");C24.iC();C25.setDisplayPosition(6);C25.setLeft(87);C25.setParent(this);C25.setTabPosition(6);C25.setTabStop(false);C25.setHeight(979);C25.setWidth(1034);C25.setImageAlignment("TOPLEFT");
C25.setLayoutManager(C15);C25.setTop(436);C25.iC();C26.setCaption("Examples");C26.setDisplayPosition(1);C26.setLeft(16);C26.setParent(C25);C26.setTabPosition(1);C26.setThemeDrawStyle("TopDivider+Heading3");C26.setTop(0);C26.setWidth(1002);C26.setWordWrap(true);C26.setCaptionMarginTop(20);C26.setHeight(62);C26.setCaptionAlignment("TOPLEFT");C26.setPaddingBottom(20);C26.iC();C27.setDisplayPosition(2);C27.setLeft(0);C27.setParent(C25);C27.setTabPosition(2);C27.setTabStop(false);C27.setTop(62);C27.setWidth(1034);
C27.setLayoutManager(C20);C27.setHeight(917);C27.iC();C28.iC();C29.setDisplayPosition(1);C29.setParent(C28);C29.iC();C30.setDisplayPosition(1);C30.setParent(C28);C30.iC();C31.setManage(C65);C31.setParent(C20);C31.iC();C32.setColumn(C30);C32.setManage(C66);C32.setParent(C28);C32.setRow(C29);C32.setSizing("CONTENTHEIGHTFITTOWIDTH");C32.setAlignment("TOPCENTER");C32.setFlow("DOWN");C32.iC();C33.setManage(C67);C33.setParent(C20);C33.iC();C34.setColumn(C30);C34.setManage(C68);C34.setParent(C28);C34.setRow(C29);
C34.setSizing("CONTENTHEIGHTFITTOWIDTH");C34.setAlignment("TOPCENTER");C34.setFlow("DOWN");C34.iC();C35.setManage(C69);C35.setParent(C20);C35.iC();C36.setColumn(C30);C36.setManage(C70);C36.setParent(C28);C36.setRow(C29);C36.setSizing("CONTENTHEIGHTFITTOWIDTH");C36.setAlignment("TOPCENTER");C36.setFlow("DOWN");C36.iC();C37.setAlignment("BOTTOMCENTER");C37.setColumn(C30);C37.setManage(C71);C37.setParent(C28);C37.setRow(C29);C37.setSizing("FITTOWIDTH");C37.setFlow("UP");C37.setMarginTop(8);C37.setMarginLeft(16);
C37.setMarginRight(16);C37.setMarginBottom(20);C37.iC();C38.setAlignment("BOTTOMCENTER");C38.setColumn(C30);C38.setManage(C72);C38.setParent(C28);C38.setRow(C29);C38.setSizing("FITTOWIDTH");C38.setFlow("UP");C38.setMarginTop(8);C38.setMarginLeft(16);C38.setMarginRight(16);C38.setMarginBottom(8);C38.iC();C39.setAlignment("BOTTOMCENTER");C39.setColumn(C30);C39.setManage(C73);C39.setParent(C28);C39.setRow(C29);C39.setSizing("FITTOWIDTH");C39.setFlow("UP");C39.setMarginLeft(16);C39.setMarginRight(16);
C39.setMarginTop(8);C39.setMarginBottom(20);C39.iC();C40.setAlignment("BOTTOMCENTER");C40.setColumn(C30);C40.setManage(C74);C40.setParent(C28);C40.setRow(C29);C40.setSizing("FITTOWIDTH");C40.setFlow("UP");C40.setMarginLeft(16);C40.setMarginRight(16);C40.setMarginBottom(8);C40.setMarginTop(8);C40.iC();C41.setAlignment("BOTTOMCENTER");C41.setColumn(C30);C41.setManage(C75);C41.setParent(C28);C41.setRow(C29);C41.setSizing("FITTOWIDTH");C41.setFlow("UP");C41.setMarginLeft(16);C41.setMarginRight(16);C41.setMarginTop(8);
C41.setMarginBottom(20);C41.iC();C42.setAlignment("BOTTOMCENTER");C42.setColumn(C30);C42.setManage(C76);C42.setParent(C28);C42.setRow(C29);C42.setSizing("FITTOWIDTH");C42.setFlow("UP");C42.setMarginLeft(16);C42.setMarginRight(16);C42.setMarginBottom(8);C42.setMarginTop(8);C42.iC();C43.setAlignment("TOPCENTER");C43.setColumn(C30);C43.setManage(C77);C43.setParent(C28);C43.setRow(C29);C43.setSizing("FITTOWIDTH");C43.setFlow("DOWN");C43.iC();C44.setAlignment("TOPCENTER");C44.setColumn(C30);C44.setManage(C78);
C44.setParent(C28);C44.setRow(C29);C44.setSizing("FITTOWIDTH");C44.setFlow("DOWN");C44.iC();C45.setAlignment("TOPCENTER");C45.setColumn(C30);C45.setManage(C79);C45.setParent(C28);C45.setRow(C29);C45.setSizing("FITTOWIDTH");C45.setFlow("DOWN");C45.iC();C46.setAlignment("TOPCENTER");C46.setColumn(C30);C46.setManage(C80);C46.setParent(C28);C46.setRow(C29);C46.setFlow("DOWN");C46.setSizing("FITTOWIDTH");C46.setMarginLeft(10);C46.setMarginRight(10);C46.iC();C47.setAlignment("TOPCENTER");C47.setColumn(C30);
C47.setManage(C81);C47.setParent(C28);C47.setRow(C29);C47.setFlow("DOWN");C47.setSizing("FITTOWIDTH");C47.setMarginLeft(10);C47.setMarginRight(10);C47.iC();C48.setAlignment("TOPCENTER");C48.setColumn(C30);C48.setManage(C82);C48.setParent(C28);C48.setRow(C29);C48.setSizing("FITTOWIDTH");C48.setFlow("DOWN");C48.iC();C49.setAlignment("TOPCENTER");C49.setColumn(C30);C49.setManage(C83);C49.setParent(C28);C49.setRow(C29);C49.setSizing("FITTOWIDTH");C49.setFlow("DOWN");C49.iC();C50.setManage(C84);C50.setParent(C20);
C50.iC();C51.setAlignment("TOPCENTER");C51.setColumn(C30);C51.setManage(C87);C51.setParent(C28);C51.setRow(C29);C51.setSizing("FITTOWIDTH");C51.setFlow("DOWN");C51.iC();C52.setAlignment("TOPCENTER");C52.setColumn(C30);C52.setManage(C88);C52.setParent(C28);C52.setRow(C29);C52.setSizing("FITTOWIDTH");C52.setFlow("DOWN");C52.iC();C53.setAlignment("TOPCENTER");C53.setColumn(C30);C53.setManage(C89);C53.setParent(C28);C53.setRow(C29);C53.setSizing("FITTOWIDTH");C53.setFlow("DOWN");C53.iC();C54.setAlignment("TOPCENTER");
C54.setColumn(C30);C54.setManage(C90);C54.setParent(C28);C54.setRow(C29);C54.setSizing("FITTOWIDTH");C54.setFlow("DOWN");C54.iC();C55.setAlignment("TOPCENTER");C55.setColumn(C30);C55.setManage(C91);C55.setParent(C28);C55.setRow(C29);C55.setSizing("FITTOWIDTH");C55.setFlow("DOWN");C55.iC();C56.setAlignment("TOPCENTER");C56.setColumn(C30);C56.setManage(C92);C56.setParent(C28);C56.setRow(C29);C56.setSizing("FITTOWIDTH");C56.setFlow("DOWN");C56.iC();C57.setManage(C93);C57.setParent(C20);C57.iC();C58.setColumn(C30);
C58.setManage(C94);C58.setParent(C28);C58.setRow(C29);C58.setSizing("CONTENTHEIGHTFITTOWIDTH");C58.setAlignment("TOPCENTER");C58.setFlow("DOWN");C58.iC();C59.setAlignment("TOPCENTER");C59.setColumn(C30);C59.setManage(C95);C59.setParent(C28);C59.setRow(C29);C59.setSizing("FITTOWIDTH");C59.setFlow("DOWN");C59.setMarginLeft(20);C59.setMarginRight(20);C59.iC();C60.setAlignment("TOPCENTER");C60.setColumn(C30);C60.setManage(C96);C60.setParent(C28);C60.setRow(C29);C60.setSizing("FITTOWIDTH");C60.setFlow("DOWN");
C60.setMarginLeft(20);C60.setMarginRight(20);C60.setMarginTop(40);C60.iC();C61.setAlignment("TOPCENTER");C61.setColumn(C30);C61.setManage(C97);C61.setParent(C28);C61.setRow(C29);C61.setSizing("FITTOWIDTH");C61.setFlow("DOWN");C61.setMarginLeft(20);C61.setMarginRight(20);C61.iC();C62.setAlignment("TOPCENTER");C62.setColumn(C30);C62.setManage(C98);C62.setParent(C28);C62.setRow(C29);C62.setSizing("FITTOWIDTH");C62.setFlow("DOWN");C62.setMarginLeft(20);C62.setMarginRight(20);C62.iC();C63.setAlignment("TOPCENTER");
C63.setColumn(C30);C63.setManage(C99);C63.setParent(C28);C63.setRow(C29);C63.setSizing("FITTOWIDTH");C63.setFlow("DOWN");C63.setMarginLeft(20);C63.setMarginRight(20);C63.setMarginTop(10);C63.iC();C64.setDisplayPosition(2);C64.setLeft(532);C64.setParent(C27);C64.setTabPosition(3);C64.setTabStop(false);C64.setHeight(380);C64.setWidth(330);C64.setImageAlignment("TOPLEFT");C64.setLayoutManager(C28);C64.setStyle(C1);C64.setTop(16);C64.iC();C65.setDisplayPosition(3);C65.setLeft(197);C65.setParent(this);
C65.setTabPosition(3);C65.setTabStop(false);C65.setHeight(220);C65.setWidth(250);C65.setImageAlignment("TOPLEFT");C65.setLayoutManager(C28);C65.setStyle(C1);C65.setTop(148);C65.iC();C66.setCaption("Checkboxes allow the selection of multiple options from a set");C66.setDisplayPosition(1);C66.setLeft(0);C66.setParent(C65);C66.setTabPosition(1);C66.setThemeDrawStyle("Heading3");C66.setTop(0);C66.setWidth(248);C66.setWordWrap(true);C66.setCaptionMarginTop(20);C66.setHeight(100);C66.setCaptionAlignment("TOPLEFT");
C66.setCaptionMarginLeft(20);C66.setCaptionMarginRight(20);C66.setPaddingBottom(20);C66.iC();C67.setDisplayPosition(5);C67.setLeft(761);C67.setParent(this);C67.setTabPosition(2);C67.setTabStop(false);C67.setHeight(220);C67.setWidth(250);C67.setImageAlignment("TOPLEFT");C67.setLayoutManager(C28);C67.setStyle(C1);C67.setTop(148);C67.iC();C68.setCaption("Radio buttons allow the selection of a single option from a set");C68.setDisplayPosition(1);C68.setLeft(0);C68.setParent(C67);C68.setTabPosition(1);
C68.setThemeDrawStyle("Heading3");C68.setTop(0);C68.setWidth(248);C68.setWordWrap(true);C68.setCaptionMarginTop(20);C68.setHeight(100);C68.setCaptionAlignment("TOPLEFT");C68.setCaptionMarginLeft(20);C68.setCaptionMarginRight(20);C68.setPaddingBottom(20);C68.iC();C69.setDisplayPosition(4);C69.setLeft(479);C69.setParent(this);C69.setTabPosition(4);C69.setTabStop(false);C69.setHeight(220);C69.setWidth(250);C69.setImageAlignment("TOPLEFT");C69.setLayoutManager(C28);C69.setStyle(C1);C69.setTop(148);C69.iC();
C70.setCaption("Switches allow a selection to be turned on or off");C70.setDisplayPosition(1);C70.setLeft(0);C70.setParent(C69);C70.setTabPosition(1);C70.setThemeDrawStyle("Heading3");C70.setTop(0);C70.setWidth(248);C70.setWordWrap(true);C70.setCaptionMarginTop(20);C70.setHeight(81);C70.setCaptionAlignment("TOPLEFT");C70.setCaptionMarginLeft(20);C70.setCaptionMarginRight(20);C70.setPaddingBottom(20);C70.iC();C71.setCaption("Standard checkbox");C71.setCheckState("CHECKED");C71.setDisplayPosition(2);
C71.setIconColor("THEMETEXT");C71.setLeft(16);C71.setParent(C65);C71.setTabPosition(2);C71.setTabStop(false);C71.setTop(163);C71.setWidth(216);C71.setHeight(35);C71.setIconAlignment("CENTERRIGHT");C71.iC();C72.setCaption("Primary color checkbox");C72.setCheckState("CHECKED");C72.setDisplayPosition(3);C72.setLeft(16);C72.setParent(C65);C72.setTabPosition(3);C72.setTabStop(false);C72.setTop(112);C72.setWidth(216);C72.setHeight(35);C72.setIconAlignment("CENTERRIGHT");C72.setIconColor("THEME500");C72.iC();
C73.setCaption("Standard radio button");C73.setDisplayPosition(2);C73.setIconColor("THEMETEXT");C73.setLeft(16);C73.setParent(C67);C73.setTabPosition(2);C73.setTabStop(false);C73.setTop(163);C73.setWidth(216);C73.setHeight(35);C73.setIconAlignment("CENTERRIGHT");C73.iC();C74.setCaption("Primary color radio button");C74.setChecked(true);C74.setDisplayPosition(3);C74.setLeft(16);C74.setParent(C67);C74.setTabPosition(3);C74.setTabStop(false);C74.setTop(112);C74.setWidth(216);C74.setHeight(35);C74.setIconAlignment("CENTERRIGHT");
C74.setIconColor("THEME500");C74.iC();C75.setChecked(true);C75.setDisplayPosition(2);C75.setLeft(16);C75.setParent(C69);C75.setTabPosition(2);C75.setTabStop(false);C75.setTop(163);C75.setWidth(216);C75.setHeight(35);C75.setIconAlignment("CENTERRIGHT");C75.setCaption("Standard switch");C75.iC();C76.setChecked(true);C76.setDisplayPosition(3);C76.setIconColor("THEMEACCENTMEDIUM");C76.setLeft(16);C76.setParent(C69);C76.setTabPosition(3);C76.setTabStop(false);C76.setTop(112);C76.setWidth(216);C76.setHeight(35);
C76.setIconAlignment("CENTERRIGHT");C76.setCaption("Accent color switch");C76.iC();C77.setCaption("Settings");C77.setDisplayPosition(1);C77.setIcon("menu");C77.setLeft(0);C77.setParent(C64);C77.setTabPosition(1);C77.setTop(0);C77.setWidth(328);C77.setHeight(56);C77.setThemeDrawStyle("DarkTitle+Heading2");C77.setIconMarginLeft(10);C77.setIconMarginRight(5);C77.iC();C78.setChecked(true);C78.setDisplayPosition(3);C78.setParent(C64);C78.setTabPosition(2);C78.setTabStop(false);C78.setTop(96);C78.setWidth(328);
C78.setHeight(50);C78.setIconAlignment("CENTERRIGHT");C78.setThemeDrawStyle("BottomDivider");C78.setCaption("Calls");C78.setLeft(0);C78.setPaddingLeft(10);C78.setPaddingRight(10);C78.setIconColor("THEME500");C78.iC();C79.setDisplayPosition(4);C79.setParent(C64);C79.setTabPosition(3);C79.setTabStop(false);C79.setTop(146);C79.setWidth(328);C79.setHeight(50);C79.setIconAlignment("CENTERRIGHT");C79.setThemeDrawStyle("BottomDivider");C79.setCaption("Messages");C79.setLeft(0);C79.setPaddingLeft(10);C79.setPaddingRight(10);
C79.setIconColor("THEME500");C79.iC();C80.setCaption("Interruptions");C80.setDisplayPosition(2);C80.setParent(C64);C80.setTabPosition(6);C80.setThemeDrawStyle("ForegroundSecondary");C80.setTop(56);C80.setHeight(40);C80.setWidth(308);C80.iC();C81.setCaption("Notifications");C81.setDisplayPosition(6);C81.setParent(C64);C81.setTabPosition(4);C81.setThemeDrawStyle("ForegroundSecondary");C81.setTop(246);C81.setHeight(45);C81.setWidth(308);C81.iC();C82.setCaption("Sounds");C82.setCheckState("CHECKED");
C82.setDisplayPosition(5);C82.setLeft(0);C82.setParent(C64);C82.setTabPosition(5);C82.setTabStop(false);C82.setTop(196);C82.setWidth(328);C82.setHeight(50);C82.setIconAlignment("CENTERRIGHT");C82.setPaddingLeft(10);C82.setPaddingRight(10);C82.setThemeDrawStyle("BottomDivider");C82.setIconColor("THEME500");C82.iC();C83.setCaption("Invites");C83.setCheckState("CHECKED");C83.setDisplayPosition(7);C83.setLeft(0);C83.setParent(C64);C83.setTabPosition(7);C83.setTabStop(false);C83.setTop(291);C83.setWidth(328);
C83.setHeight(50);C83.setIconAlignment("CENTERRIGHT");C83.setPaddingLeft(10);C83.setPaddingRight(10);C83.setThemeDrawStyle("BottomDivider");C83.setIconColor("THEME500");C83.iC();C84.setDisplayPosition(3);C84.setLeft(171);C84.setParent(C27);C84.setTabPosition(2);C84.setTabStop(false);C84.setHeight(380);C84.setWidth(330);C84.setImageAlignment("TOPLEFT");C84.setLayoutManager(C28);C84.setStyle(C1);C84.setTop(426);C84.iC();C85.setCaption("Colored selection controls");C85.setDisplayPosition(1);C85.setLeft(0);
C85.setParent(C84);C85.setTabPosition(1);C85.setThemeDrawStyle("Title");C85.setTop(0);C85.setWidth(328);C85.setWordWrap(true);C85.setCaptionMarginTop(20);C85.setHeight(117);C85.setCaptionAlignment("TOPLEFT");C85.setCaptionMarginLeft(20);C85.setCaptionMarginRight(20);C85.setPaddingBottom(10);C85.iC();C86.setColumn(C30);C86.setManage(C85);C86.setParent(C28);C86.setRow(C29);C86.setSizing("CONTENTHEIGHTFITTOWIDTH");C86.setAlignment("TOPCENTER");C86.setFlow("DOWN");C86.iC();C87.setCaption("Green checkbox");
C87.setCheckState("CHECKED");C87.setDisplayPosition(3);C87.setIconColor("GREEN");C87.setLeft(0);C87.setParent(C84);C87.setTabPosition(3);C87.setTabStop(false);C87.setTop(157);C87.setHeight(40);C87.setWidth(328);C87.setIconAlignment("CENTERRIGHT");C87.setPaddingLeft(20);C87.setPaddingRight(10);C87.iC();C88.setCaption("Red checkbox");C88.setCheckState("CHECKED");C88.setDisplayPosition(2);C88.setIconColor("RED");C88.setLeft(0);C88.setParent(C84);C88.setTabPosition(2);C88.setTabStop(false);C88.setHeight(40);
C88.setWidth(328);C88.setIconAlignment("CENTERRIGHT");C88.setPaddingLeft(20);C88.setPaddingRight(10);C88.setTop(117);C88.iC();C89.setCaption("Purple radio button");C89.setDisplayPosition(5);C89.setIconColor("128:0:255");C89.setLeft(0);C89.setParent(C84);C89.setTabPosition(5);C89.setTabStop(false);C89.setTop(237);C89.setHeight(40);C89.setWidth(328);C89.setIconAlignment("CENTERRIGHT");C89.setPaddingLeft(20);C89.setPaddingRight(10);C89.iC();C90.setCaption("Orange radio button");C90.setDisplayPosition(4);
C90.setIconColor("255:128:0");C90.setLeft(0);C90.setParent(C84);C90.setTabPosition(4);C90.setTabStop(false);C90.setTop(197);C90.setHeight(40);C90.setWidth(328);C90.setIconAlignment("CENTERRIGHT");C90.setPaddingLeft(20);C90.setPaddingRight(10);C90.setChecked(true);C90.iC();C91.setChecked(true);C91.setDisplayPosition(7);C91.setIconColor("BLUE");C91.setLeft(0);C91.setParent(C84);C91.setTabPosition(7);C91.setTabStop(false);C91.setTop(317);C91.setHeight(40);C91.setWidth(328);C91.setIconAlignment("CENTERRIGHT");
C91.setPaddingLeft(20);C91.setPaddingRight(10);C91.setCaption("Blue switch");C91.iC();C92.setChecked(true);C92.setDisplayPosition(6);C92.setIconColor("OLIVE");C92.setLeft(0);C92.setParent(C84);C92.setTabPosition(6);C92.setTabStop(false);C92.setTop(277);C92.setHeight(40);C92.setWidth(328);C92.setIconAlignment("CENTERRIGHT");C92.setPaddingLeft(20);C92.setPaddingRight(10);C92.setCaption("Olive switch");C92.iC();C93.setDisplayPosition(1);C93.setLeft(172);C93.setParent(C27);C93.setTabPosition(1);C93.setTabStop(false);
C93.setHeight(380);C93.setWidth(330);C93.setImageAlignment("TOPLEFT");C93.setLayoutManager(C28);C93.setStyle(C1);C93.setTop(16);C93.iC();C94.setCaption("Control alignment");C94.setDisplayPosition(1);C94.setLeft(0);C94.setParent(C93);C94.setTabPosition(1);C94.setThemeDrawStyle("Title");C94.setTop(0);C94.setWidth(328);C94.setWordWrap(true);C94.setCaptionMarginTop(20);C94.setHeight(75);C94.setCaptionAlignment("TOPLEFT");C94.setCaptionMarginLeft(20);C94.setCaptionMarginRight(20);C94.setPaddingBottom(10);
C94.iC();C95.setCaption("Right aligned check box");C95.setCheckState("CHECKED");C95.setDisplayPosition(3);C95.setIconColor("THEMETEXT");C95.setLeft(20);C95.setParent(C93);C95.setTabPosition(6);C95.setTabStop(false);C95.setTop(155);C95.setWidth(288);C95.setHeight(40);C95.setCaptionAlignment("CENTERRIGHT");C95.setIconAlignment("AFTERCAPTION");C95.iC();C96.setCaption("Left aligned check box");C96.setCheckState("CHECKED");C96.setDisplayPosition(2);C96.setIconColor("THEMETEXT");C96.setLeft(20);C96.setParent(C93);
C96.setTabPosition(2);C96.setTabStop(false);C96.setTop(115);C96.setWidth(288);C96.setHeight(40);C96.iC();C97.setCaption("Left aligned caption");C97.setCheckState("CHECKED");C97.setDisplayPosition(4);C97.setIconColor("THEMETEXT");C97.setLeft(20);C97.setParent(C93);C97.setTabPosition(5);C97.setTabStop(false);C97.setTop(195);C97.setWidth(288);C97.setHeight(40);C97.setIconAlignment("CENTERRIGHT");C97.iC();C98.setCaption("Right aligned caption");C98.setCheckState("CHECKED");C98.setDisplayPosition(5);C98.setIconColor("THEMETEXT");
C98.setLeft(20);C98.setParent(C93);C98.setTabPosition(4);C98.setTabStop(false);C98.setTop(235);C98.setWidth(288);C98.setHeight(40);C98.setCaptionAlignment("CENTERRIGHT");C98.iC();C99.setCaption("Top aligned Icon");C99.setCheckState("CHECKED");C99.setDisplayPosition(6);C99.setIconColor("THEMETEXT");C99.setLeft(20);C99.setParent(C93);C99.setTabPosition(3);C99.setTabStop(false);C99.setTop(285);C99.setWidth(288);C99.setHeight(72);C99.setCaptionAlignment("TOPCENTER");C99.setIconAlignment("ABOVECAPTION");
C99.setPaddingTop(5);C99.iC();C100.setDisplayPosition(4);C100.setLeft(531);C100.setParent(C27);C100.setTabPosition(4);C100.setTabStop(false);C100.setHeight(475);C100.setWidth(331);C100.setImageAlignment("TOPLEFT");C100.setLayoutManager(C28);C100.setStyle(C1);C100.setTop(426);C100.iC();C101.setCaption("Inline Date Picker");C101.setDisplayPosition(1);C101.setLeft(0);C101.setParent(C100);C101.setTabPosition(1);C101.setThemeDrawStyle("Heading3");C101.setTop(0);C101.setWidth(329);C101.setWordWrap(true);
C101.setCaptionMarginTop(20);C101.setHeight(62);C101.setCaptionAlignment("TOPLEFT");C101.setCaptionMarginLeft(20);C101.setCaptionMarginRight(20);C101.setPaddingBottom(20);C101.iC();C102.setDisplayPosition(2);C102.setLeft(16);C102.setParent(C100);C102.setTabPosition(2);C102.setTop(56);C102.iC();l.WEB().aH("DEVICECHANGED",this,e2);this.setCaption("Selection");this.setHeight(1148);this.setWidth(1225);this.setDisplayPosition(1);this.setLayoutManager(C2);this.setVerticalScroll(true);this.setTabPosition(1);
this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var f=this.FLD.XMDSELECT,m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",122);r.ln=122;{r.ln=124;m.CALENDAR.setValue(l.dt.Now(f.F1.get()));}r.ln=126;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Sys_Web.DeviceChanged",128);r.ln=128;{r.ln=130;{var v1=l.WEB().getDevice();if(r.ln=132,l.s.eq(v1,"MOBILE")){r.ln=134;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=135;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=137;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");
r.ln=138;m.LAYOUTMAINCOLUMN3.setWidth(0);r.ln=140;m.PANEL2.setVisible(false);r.ln=141;m.PANEL3.setVisible(false);}else if(r.ln=143,l.s.eq(v1,"TABLET")){r.ln=145;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=146;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=148;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=149;m.LAYOUTMAINCOLUMN3.setWidth(0);r.ln=151;m.PANEL2.setVisible(false);r.ln=152;m.PANEL3.setVisible(true);}else if(r.ln=154,l.s.eq(v1,"DESKTOP")){r.ln=156;m.LAYOUTMAINCOLUMN1.setUnits("PROPORTION");r.ln=157;
m.LAYOUTMAINCOLUMN1.setWidth(1);r.ln=159;m.LAYOUTMAINCOLUMN3.setUnits("PROPORTION");r.ln=160;m.LAYOUTMAINCOLUMN3.setWidth(1);r.ln=162;m.PANEL2.setVisible(true);r.ln=163;m.PANEL3.setVisible(true);}r.ln=165;}}r.ln=167;r.e();};},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_FWLM","PRIM_FWLI","PRIM_MD.Label","PRIM_PANL","PRIM_MD.CheckBox","PRIM_MD.RadioButton","PRIM_MD.Switch","PRIM_MD.DateTimePicker","PRIM_DTIM","PRIM_FLD"]});