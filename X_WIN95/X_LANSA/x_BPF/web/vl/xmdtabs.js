﻿LANSA.addComponent({id:"XMDTABS",nm:"xMdTabs",ot:"wv",tp:"View",pt:"ap",de:"Material Design Tabs",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",co:function(){cO.aN.call(this);var C0=this.cR("LAYOUTMAIN","PRIM_TBLO");var C1=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C2=this.cR("LAYOUTMAINCOLUMN2","PRIM_TBLO","Column");var C3=this.cR("LAYOUTMAINCOLUMN3","PRIM_TBLO","Column");var C4=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C5=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");
var C6=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C7=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");var C8=this.cR("LAYOUTPANELS","PRIM_TBLO");var C9=this.cR("LAYOUTPANELSROW1","PRIM_TBLO","Row");var C10=this.cR("LAYOUTPANELSCOLUMN1","PRIM_TBLO","Column");var C11=this.cR("LAYOUTPANELSITEM1","PRIM_TBLO","Item");var C12=this.cR("LAYOUTPANELSITEM11","PRIM_TBLO","Item");var C13=this.cR("LAYOUTPANELSITEM2","PRIM_TBLO","Item");var C14=this.cR("LAYOUTPANELSITEM3","PRIM_TBLO","Item");var C15=this.cR("LABELTITLE","PRIM_MD","Label");
var C16=this.cR("PANELSIMPLE","PRIM_PANL");var C17=this.cR("LABEL8","PRIM_MD","Label");var C18=this.cR("LABEL2","PRIM_MD","Label");var C19=this.cR("NAVIGATIONPANELLAYOUT","PRIM_TBLO");var C20=this.cR("NAVIGATIONPANELLAYOUTCOLUMN1","PRIM_TBLO","Column");var C21=this.cR("NAVIGATIONPANELLAYOUTROW1","PRIM_TBLO","Row");var C22=this.cR("NAVIGATIONPANELLAYOUTITEM1","PRIM_TBLO","Item");var C23=this.cR("NAVIGATIONPANELLAYOUTITEM2","PRIM_TBLO","Item");var C24=this.cR("NAVIGATIONPANELLAYOUTITEM3","PRIM_TBLO","Item");
var C25=this.cR("LAYOUTSHEET","PRIM_TBLO");var C26=this.cR("LAYOUTSHEETROW1","PRIM_TBLO","Row");var C27=this.cR("LAYOUTSHEETCOLUMN1","PRIM_TBLO","Column");var C28=this.cR("LAYOUTSHEETITEM1","PRIM_TBLO","Item");var C29=this.cR("LAYOUTSHEETITEM2","PRIM_TBLO","Item");var C30=this.cR("LAYOUTSHEETITEM3","PRIM_TBLO","Item");var C31=this.cR("APPBAR","PRIM_MD","AppBar");var C32=this.cR("TAB","PRIM_TAB");var C33=this.cR("SHEET1","PRIM_TBSH");var C34=this.cR("SHEET2","PRIM_TBSH");var C35=this.cR("SHEET3","PRIM_TBSH");
var C36=this.cR("TEXTRECENT","PRIM_MD","Label");var C37=this.cR("TEXTFAVORITE","PRIM_MD","Label");var C38=this.cR("TEXTNEARBY","PRIM_MD","Label");var C39=this.cR("NAVIGATIONPANEL","PRIM_PANL");var C40=this.cR("MENU","PRIM_MD","Tab");var C41=this.cR("MENUITEM","PRIM_MD","TabItem");var C42=this.cR("MENUITEM1","PRIM_MD","TabItem");var C43=this.cR("MENUITEM2","PRIM_MD","TabItem");var C44=this.cR("MENU1","PRIM_MD","Tab");var C45=this.cR("MENUITEM3","PRIM_MD","TabItem");var C46=this.cR("MENUITEM4","PRIM_MD","TabItem");
var C47=this.cR("MENUITEM5","PRIM_MD","TabItem");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.setWidth(12);C2.setMaxWidth(1500);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.iC();C4.setDisplayPosition(1);C4.setParent(C0);C4.iC();C5.setColumn(C2);C5.setManage(C15);C5.setParent(C0);C5.setRow(C4);C5.setSizing("FITTOWIDTH");C5.setFlow("DOWN");C5.setAlignment("TOPCENTER");C5.setMarginTop(32);C5.iC();C6.setAlignment("TOPCENTER");C6.setColumn(C2);
C6.setManage(C16);C6.setParent(C0);C6.setRow(C4);C6.setSizing("CONTENTHEIGHTFITTOWIDTH");C6.setFlow("DOWN");C6.setMarginTop(50);C6.iC();C7.setColumn(C2);C7.setManage(C18);C7.setParent(C0);C7.setRow(C4);C7.setSizing("CONTENTHEIGHTFITTOWIDTH");C7.setAlignment("TOPCENTER");C7.setFlow("DOWN");C7.iC();C8.iC();C9.setDisplayPosition(1);C9.setParent(C8);C9.iC();C10.setDisplayPosition(1);C10.setParent(C8);C10.iC();C11.setColumn(C10);C11.setManage(C17);C11.setParent(C8);C11.setRow(C9);C11.setSizing("CONTENTHEIGHTFITTOWIDTH");
C11.setAlignment("TOPCENTER");C11.setFlow("DOWN");C11.iC();C12.setColumn(C10);C12.setManage(C18);C12.setParent(C8);C12.setRow(C9);C12.setSizing("CONTENTHEIGHTFITTOWIDTH");C12.setAlignment("TOPCENTER");C12.setFlow("DOWN");C12.iC();C13.setAlignment("TOPCENTER");C13.setColumn(C10);C13.setManage(C44);C13.setParent(C8);C13.setRow(C9);C13.setSizing("NONE");C13.setFlow("DOWN");C13.iC();C14.setAlignment("TOPCENTER");C14.setColumn(C10);C14.setManage(C39);C14.setParent(C8);C14.setRow(C9);C14.setSizing("NONE");
C14.setFlow("DOWN");C14.setMarginTop(32);C14.iC();C15.setCaption("Tabs");C15.setDisplayPosition(1);C15.setParent(this);C15.setTabPosition(1);C15.setThemeDrawStyle("Heading1");C15.setTop(32);C15.setWidth(926);C15.setHeight(44);C15.setCaptionAlignment("TOPLEFT");C15.setWordWrap(true);C15.setLeft(78);C15.setCaptionMarginLeft(16);C15.setCaptionMarginRight(16);C15.iC();C16.setDisplayPosition(3);C16.setLeft(78);C16.setParent(this);C16.setTabPosition(3);C16.setTabStop(false);C16.setWidth(926);C16.setImageAlignment("TOPLEFT");
C16.setLayoutManager(C8);C16.setTop(188);C16.setHeight(730);C16.iC();C17.setDisplayPosition(1);C17.setLeft(0);C17.setParent(C16);C17.setTabPosition(1);C17.setThemeDrawStyle("TopDivider+Heading3");C17.setTop(0);C17.setWidth(926);C17.setWordWrap(true);C17.setCaptionMarginTop(20);C17.setHeight(92);C17.setCaptionAlignment("TOPLEFT");C17.setPaddingBottom(30);C17.setCaption("Tabs enable content organization at a high level, such as switching between views, data sets, or functional aspects of an app. Present tabs as a single row above their associated content. Tab labels should succinctly describe the content within.");
C17.setCaptionMarginLeft(16);C17.setCaptionMarginRight(16);C17.iC();C18.setCaption("Tabs make it easy to explore and switch between different views. Sample usage can be found in the xMdTabs component.");C18.setDisplayPosition(2);C18.setLeft(78);C18.setParent(this);C18.setTabPosition(2);C18.setThemeDrawStyle("Heading3");C18.setTop(76);C18.setWidth(926);C18.setWordWrap(true);C18.setCaptionMarginTop(20);C18.setHeight(62);C18.setCaptionAlignment("TOPLEFT");C18.setCaptionMarginLeft(20);C18.setCaptionMarginRight(20);
C18.setPaddingBottom(20);C18.iC();C19.iC();C20.setDisplayPosition(1);C20.setParent(C19);C20.iC();C21.setDisplayPosition(1);C21.setParent(C19);C21.iC();C22.setAlignment("TOPCENTER");C22.setColumn(C20);C22.setFlow("DOWN");C22.setManage(C40);C22.setParent(C19);C22.setRow(C21);C22.setSizing("FITTOWIDTH");C22.iC();C23.setColumn(C20);C23.setFlow("DOWN");C23.setManage(C32);C23.setMarginBottom(50);C23.setParent(C19);C23.setRow(C21);C23.setMarginTop(112);C23.iC();C24.setColumn(C20);C24.setManage(C31);C24.setParent(C19);
C24.setRow(C21);C24.setSizing("FITTOWIDTH");C24.setAlignment("TOPCENTER");C24.setFlow("DOWN");C24.iC();C25.iC();C26.setDisplayPosition(1);C26.setParent(C25);C26.iC();C27.setDisplayPosition(1);C27.setParent(C25);C27.iC();C28.setColumn(C27);C28.setManage(C36);C28.setParent(C25);C28.setRow(C26);C28.setSizing("NONE");C28.iC();C29.setColumn(C27);C29.setManage(C37);C29.setParent(C25);C29.setRow(C26);C29.setSizing("NONE");C29.iC();C30.setColumn(C27);C30.setManage(C38);C30.setParent(C25);C30.setRow(C26);
C30.setSizing("NONE");C30.iC();C31.setDisplayPosition(1);C31.setParent(C39);C31.setTabPosition(1);C31.setWidth(398);C31.setThemeDrawStyle("Heading2");C31.setIcon("menu");C31.setCaption("Places");C31.iC();C32.setBottomLayoutPriority(4);C32.setComponentVersion(2);C32.setDisplayPosition(3);C32.setHeight(386);C32.setLeft(0);C32.setLeftLayoutPriority(1);C32.setParent(C39);C32.setRightLayoutPriority(2);C32.setShowPageTabs(false);C32.setTabPosition(3);C32.setTop(112);C32.setTopLayoutPriority(3);C32.setWidth(398);
C32.iC();C33.setDisplayPosition(1);C33.setHeight(386);C33.setLeft(0);C33.setParent(C32);C33.setTabPosition(1);C33.setTabStop(false);C33.setTop(0);C33.setWidth(398);C33.setLayoutManager(C25);C33.iC();C34.setDisplayPosition(2);C34.setHeight(386);C34.setLeft(0);C34.setParent(C32);C34.setTabPosition(2);C34.setTabStop(false);C34.setTop(0);C34.setWidth(398);C34.setLayoutManager(C25);C34.iC();C35.setDisplayPosition(3);C35.setHeight(386);C35.setLeft(0);C35.setParent(C32);C35.setTabPosition(3);C35.setTabStop(false);
C35.setTop(0);C35.setWidth(398);C35.setLayoutManager(C25);C35.iC();C36.setCaption("Recent Content");C36.setDisplayPosition(1);C36.setLeft(41);C36.setParent(C33);C36.setTabPosition(1);C36.setThemeDrawStyle("Title+ForegroundMediumPrimary");C36.setTop(145);C36.setHeight(97);C36.setWidth(317);C36.setCaptionAlignment("CENTER");C36.iC();C37.setCaption("Favorite Content");C37.setDisplayPosition(1);C37.setLeft(41);C37.setParent(C34);C37.setTabPosition(1);C37.setThemeDrawStyle("Title+ForegroundMediumPrimary+ForegroundMediumAccent");
C37.setTop(145);C37.setHeight(97);C37.setWidth(317);C37.setCaptionAlignment("CENTER");C37.iC();C38.setCaption("Nearby Content");C38.setDisplayPosition(1);C38.setLeft(41);C38.setParent(C35);C38.setTabPosition(1);C38.setThemeDrawStyle("Title+ForegroundMediumPrimary+ForegroundMediumSuccess");C38.setTop(145);C38.setHeight(97);C38.setWidth(317);C38.setCaptionAlignment("CENTER");C38.iC();C39.setDisplayPosition(3);C39.setHeight(550);C39.setLayoutManager(C19);C39.setLeft(263);C39.setParent(C16);C39.setTabPosition(3);
C39.setTabStop(false);C39.setTop(180);C39.setWidth(400);C39.setThemeDrawStyle("Card");C39.iC();C40.setDisplayPosition(2);C40.setParent(C39);C40.setTabPosition(2);C40.setThemeDrawStyle("DarkTitle");C40.setTop(56);C40.setWidth(398);C40.setSelectionColor("THEMEACCENTMEDIUM");C40.iC();C41.setCaption("Recent");C41.setDisplayPosition(1);C41.setHeight(56);C41.setIcon("history");C41.setIconAlignment("ABOVECAPTION");C41.setLeft(0);C41.setParent(C40);C41.setTabPosition(1);C41.setTabSheet(C33);C41.setTop(0);
C41.setWidth(133);C41.iC();C42.setCaption("Favorites");C42.setDisplayPosition(2);C42.setHeight(56);C42.setIcon("favorite");C42.setIconAlignment("ABOVECAPTION");C42.setLeft(133);C42.setParent(C40);C42.setTabPosition(2);C42.setTabSheet(C34);C42.setTop(0);C42.setWidth(133);C42.iC();C43.setCaption("Nearby");C43.setDisplayPosition(3);C43.setHeight(56);C43.setIcon("location_on");C43.setIconAlignment("ABOVECAPTION");C43.setLeft(266);C43.setParent(C40);C43.setTabPosition(3);C43.setTabSheet(C35);C43.setTop(0);
C43.setWidth(133);C43.iC();C44.setDisplayPosition(2);C44.setParent(C16);C44.setTabPosition(2);C44.setThemeDrawStyle("DarkTitle");C44.setWidth(400);C44.setLeft(263);C44.setTop(92);C44.setSelectionColor("THEMEACCENTMEDIUM");C44.iC();C45.setDisplayPosition(1);C45.setHeight(56);C45.setIconAlignment("ABOVECAPTION");C45.setLeft(0);C45.setParent(C44);C45.setTabPosition(1);C45.setTabSheet(C33);C45.setTop(0);C45.setWidth(133);C45.setCaption("Recent");C45.iC();C46.setDisplayPosition(2);C46.setHeight(56);C46.setIconAlignment("ABOVECAPTION");
C46.setLeft(133);C46.setParent(C44);C46.setTabPosition(2);C46.setTabSheet(C34);C46.setTop(0);C46.setWidth(133);C46.setCaption("Favorites");C46.iC();C47.setDisplayPosition(3);C47.setHeight(56);C47.setIconAlignment("ABOVECAPTION");C47.setLeft(266);C47.setParent(C44);C47.setTabPosition(3);C47.setTabSheet(C35);C47.setTop(0);C47.setWidth(133);C47.setCaption("Nearby");C47.iC();l.WEB().aH("DEVICECHANGED",this,e1);this.setCaption("Tabs");this.setHeight(1148);this.setWidth(1081);this.setDisplayPosition(1);
this.setLayoutManager(C0);this.setVerticalScroll(true);this.setTabPosition(1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Sys_Web.DeviceChanged",70);r.ln=70;{r.ln=72;{var v1=l.WEB().getDevice();if(r.ln=74,l.s.eq(v1,"MOBILE")){r.ln=76;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=77;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=79;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=80;m.LAYOUTMAINCOLUMN3.setWidth(0);}else if(r.ln=82,l.s.eq(v1,"TABLET")){r.ln=84;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=85;
m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=87;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=88;m.LAYOUTMAINCOLUMN3.setWidth(0);}else if(r.ln=90,l.s.eq(v1,"DESKTOP")){r.ln=92;m.LAYOUTMAINCOLUMN1.setUnits("PROPORTION");r.ln=93;m.LAYOUTMAINCOLUMN1.setWidth(1);r.ln=95;m.LAYOUTMAINCOLUMN3.setUnits("PROPORTION");r.ln=96;m.LAYOUTMAINCOLUMN3.setWidth(1);}r.ln=98;}}r.ln=100;r.e();};},{rp:["PRIM_VIEW","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_MD.AppBar","PRIM_TAB","PRIM_TBSH","PRIM_MD.Tab","PRIM_MD.TabItem"]
});