﻿LANSA.addComponent({id:"A02CONT_4",nm:"A02Contact_Us",ot:"wv",tp:"View",pt:"ap",de:"Contact Us",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{ValidateContactDetails:{}},co:function(){cO.aN.call(this);var C0=this.cR("STYLEHAND","PRIM_VS","Style");var C1=this.cR("STYLEUNDERLINE","PRIM_VS","Style");var C2=this.cR("STYLE1","PRIM_VS","Style");var C3=this.cR("STYLE2","PRIM_VS","Style");var C4=this.cR("STYLE3","PRIM_VS","Style");var C5=this.cR("STYLE4","PRIM_VS","Style");var C6=this.cR("STYLE5","PRIM_VS","Style");
var C7=this.cR("STYLE6","PRIM_VS","Style");var C8=this.cR("STYLE7","PRIM_VS","Style");var C9=this.cR("LAYOUTDESKTOP","PRIM_TBLO");var C10=this.cR("LAYOUTDESKTOPCOLUMN1","PRIM_TBLO","Column");var C11=this.cR("LAYOUTDESKTOPCOLUMN2","PRIM_TBLO","Column");var C12=this.cR("LAYOUTDESKTOPROW","PRIM_TBLO","Row");var C13=this.cR("LAYOUTDESKTOPROW1","PRIM_TBLO","Row");var C14=this.cR("LAYOUTDESKTOPCONTACTDETAILS","PRIM_TBLO","Item");var C15=this.cR("LAYOUTDESKTOPCONTACTUS","PRIM_TBLO","Item");var C16=this.cR("LAYOUTDESKTOPITEM1","PRIM_TBLO","Item");
var C17=this.cR("LAYOUTDESKTOPITEM2","PRIM_TBLO","Item");var C18=this.cR("LAYOUTMOBILE","PRIM_TBLO");var C19=this.cR("LAYOUTMOBILECOLUMN","PRIM_TBLO","Column");var C20=this.cR("LAYOUTMOBILEROW","PRIM_TBLO","Row");var C21=this.cR("LAYOUTMOBILECONTACTDETAILS","PRIM_TBLO","Item");var C22=this.cR("LAYOUTMOBILECONTACTUS","PRIM_TBLO","Item");var C23=this.cR("LAYOUTMOBILEITEM1","PRIM_TBLO","Item");var C24=this.cR("LAYOUTCONTACTDETAILS","PRIM_TBLO");var C25=this.cR("LAYOUTCONTACTDETAILSCOLUMN1","PRIM_TBLO","Column");
var C26=this.cR("LAYOUTCONTACTDETAILSROW1","PRIM_TBLO","Row");var C27=this.cR("LAYOUTCONTACTDETAILSROW2","PRIM_TBLO","Row");var C28=this.cR("LAYOUTCONTACTDETAILSROW3","PRIM_TBLO","Row");var C29=this.cR("LAYOUTCONTACTDETAILSROW4","PRIM_TBLO","Row");var C30=this.cR("LAYOUTCONTACTDETAILSROW5","PRIM_TBLO","Row");var C31=this.cR("LAYOUTCONTACTDETAILSROW6","PRIM_TBLO","Row");var C32=this.cR("LAYOUTCONTACTDETAILSROW7","PRIM_TBLO","Row");var C33=this.cR("LAYOUTCONTACTDETAILSITEM2","PRIM_TBLO","Item");var C34=this.cR("LAYOUTCONTACTDETAILSITEM3","PRIM_TBLO","Item");
var C35=this.cR("LAYOUTCONTACTDETAILSITEM7","PRIM_TBLO","Item");var C36=this.cR("LAYOUTCONTACTDETAILSITEM8","PRIM_TBLO","Item");var C37=this.cR("LAYOUTCONTACTDETAILSITEM9","PRIM_TBLO","Item");var C38=this.cR("LAYOUTCONTACTDETAILSITEM4","PRIM_TBLO","Item");var C39=this.cR("LAYOUTCONTACTDETAILSITEM1","PRIM_TBLO","Item");var C40=this.cR("LAYOUTCONTACTUS","PRIM_TBLO");var C41=this.cR("LAYOUTCONTACTUSCOLUMN1","PRIM_TBLO","Column");var C42=this.cR("LAYOUTCONTACTUSROW1","PRIM_TBLO","Row");var C43=this.cR("LAYOUTCONTACTUSROW2","PRIM_TBLO","Row");
var C44=this.cR("LAYOUTCONTACTUSROW3","PRIM_TBLO","Row");var C45=this.cR("LAYOUTCONTACTUSROW4","PRIM_TBLO","Row");var C46=this.cR("LAYOUTCONTACTUSROW5","PRIM_TBLO","Row");var C47=this.cR("LAYOUTCONTACTUSROW6","PRIM_TBLO","Row");var C48=this.cR("LAYOUTCONTACTUSROW7","PRIM_TBLO","Row");var C49=this.cR("LAYOUTCONTACTUSROW8","PRIM_TBLO","Row");var C50=this.cR("LAYOUTCONTACTUSITEM1","PRIM_TBLO","Item");var C51=this.cR("LAYOUTCONTACTUSITEM2","PRIM_TBLO","Item");var C52=this.cR("LAYOUTCONTACTUSITEM3","PRIM_TBLO","Item");
var C53=this.cR("LAYOUTCONTACTUSITEM4","PRIM_TBLO","Item");var C54=this.cR("LAYOUTCONTACTUSITEM5","PRIM_TBLO","Item");var C55=this.cR("LAYOUTCONTACTUSITEM6","PRIM_TBLO","Item");var C56=this.cR("LAYOUTCONTACTUSITEM7","PRIM_TBLO","Item");var C57=this.cR("LAYOUTMAPS","PRIM_TBLO");var C58=this.cR("LAYOUTMAPSROW1","PRIM_TBLO","Row");var C59=this.cR("LAYOUTMAPSCOLUMN1","PRIM_TBLO","Column");var C60=this.cR("LAYOUTMAPSITEM1","PRIM_TBLO","Item");var C61=this.cR("LAYOUTCONTACTDETAILSITEM5","PRIM_TBLO","Item");
var C62=this.cR("PANELCONTACTDETAILS","PRIM_PANL");var C63=this.cR("PANELCONTACTUS","PRIM_PANL");var C64=this.cR("PANELMAP","PRIM_PANL");var C65=this.cR("TEXTCONTACTUS","PRIM_MD","Label");var C66=this.cR("TEXTCONTACTDETAILS","PRIM_MD","Label");var C67=this.cR("A02COMPANYNAME","PRIM_MD","Label");var C68=this.cR("WEBSITE","PRIM_MD","Label");var C69=this.cR("A02ADDRESS","PRIM_MD","Label");var C70=this.cR("A02EMAIL","PRIM_MD","Label");var C71=this.cR("A02PHONE","PRIM_MD","Label");var C72=this.cR("A02FAX","PRIM_MD","Label");
var C73=this.cR("A02CONTACTNAME","PRIM_MD","Edit");var C74=this.cR("A02CONTACTEMAIL","PRIM_MD","Edit");var C75=this.cR("A02CONTACTSUBJECT","PRIM_MD","Edit");var C76=this.cR("A02CONTACTMESSAGE","PRIM_MD","Edit");var C77=this.cR("A02CONTACTPHONE","PRIM_MD","Edit");var C78=this.cR("BUTTONCONTACTUS","PRIM_MD","FlatButton");var C79=this.cR("MAP","PRIM_WEB","HtmlContainer");C0.setCursor("HAND");C0.iC();C1.setUnderline(true);C1.iC();C2.setBorderBottom(0);C2.setBorderLeft(0);C2.setBorderRight(0);C2.setBorderTop(0);
C2.setShape("RECTANGLE");C2.setCornerBottomRight(50);C2.setCornerBottomLeft(50);C2.setCornerTopLeft(50);C2.setCornerTopRight(50);C2.iC();C3.setCornerTopLeft(50);C3.setBorderLeft(1);C3.setBorderTop(1);C3.setBorderRight(1);C3.setBorderBottom(1);C3.setCornerTopRight(50);C3.iC();C4.setCornerTopRight(50);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setBorderRight(1);C4.setBorderBottom(1);C4.setCornerTopLeft(50);C4.iC();C5.setCornerTopLeft(50);C5.setBorderLeft(1);C5.setBorderTop(1);C5.setBorderRight(1);C5.setBorderBottom(1);
C5.setCornerTopRight(50);C5.setCornerBottomLeft(50);C5.setCornerBottomRight(50);C5.iC();C6.setCornerBottomRight(50);C6.setBorderLeft(1);C6.setBorderTop(1);C6.setBorderRight(1);C6.setBorderBottom(1);C6.setCornerTopLeft(50);C6.setCornerTopRight(50);C6.setCornerBottomLeft(50);C6.iC();C7.setCornerTopLeft(50);C7.setBorderLeft(1);C7.setBorderTop(1);C7.setBorderRight(1);C7.setBorderBottom(1);C7.setCornerBottomLeft(50);C7.setCornerBottomRight(50);C7.setCornerTopRight(50);C7.iC();C8.setCornerTopLeft(50);C8.setBorderLeft(1);
C8.setBorderTop(1);C8.setBorderRight(1);C8.setBorderBottom(1);C8.setCornerTopRight(50);C8.setCornerBottomLeft(50);C8.setCornerBottomRight(50);C8.iC();C9.iC();C10.setDisplayPosition(1);C10.setParent(C9);C10.setWidth(8);C10.iC();C11.setDisplayPosition(2);C11.setParent(C9);C11.setWidth(8);C11.iC();C12.setDisplayPosition(1);C12.setParent(C9);C12.setHeight(362);C12.setUnits("CONTENT");C12.iC();C13.setDisplayPosition(2);C13.setParent(C9);C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C10);C14.setManage(C62);
C14.setParent(C9);C14.setRow(C12);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.setMarginRight(8);C14.setMarginLeft(16);C14.setMarginTop(16);C14.iC();C15.setAlignment("TOPCENTER");C15.setColumn(C11);C15.setManage(C63);C15.setParent(C9);C15.setRow(C12);C15.setRowSpan(2);C15.setMarginLeft(8);C15.setMarginBottom(16);C15.setMarginRight(16);C15.setMarginTop(16);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.iC();C16.setAlignment("TOPCENTER");C16.setColumn(C10);C16.setManage(this);C16.setParent(C9);C16.setRow(C13);
C16.setMarginBottom(6);C16.setMarginLeft(12);C16.setMarginRight(6);C16.setMarginTop(6);C16.iC();C17.setAlignment("TOPCENTER");C17.setColumn(C10);C17.setManage(C64);C17.setParent(C9);C17.setRow(C13);C17.setMarginTop(16);C17.setMarginBottom(16);C17.setMarginLeft(16);C17.setMarginRight(8);C17.iC();C18.setSizing("CONTENTHEIGHT");C18.iC();C19.setParent(C18);C19.setDisplayPosition(1);C19.iC();C20.setParent(C18);C20.setDisplayPosition(1);C20.iC();C21.setParent(C18);C21.setRow(C20);C21.setColumn(C19);C21.setSizing("CONTENTHEIGHTFITTOWIDTH");
C21.setFlow("DOWN");C21.setManage(C62);C21.setAlignment("TOPCENTER");C21.setMarginTop(4);C21.iC();C22.setParent(C18);C22.setRow(C20);C22.setColumn(C19);C22.setSizing("CONTENTHEIGHTFITTOWIDTH");C22.setManage(C63);C22.setFlow("DOWN");C22.setAlignment("TOPCENTER");C22.setMarginTop(4);C22.iC();C23.setAlignment("TOPCENTER");C23.setColumn(C19);C23.setManage(C64);C23.setParent(C18);C23.setRow(C20);C23.setSizing("FITTOWIDTH");C23.setFlow("DOWN");C23.setMarginTop(4);C23.iC();C24.iC();C25.setDisplayPosition(1);
C25.setParent(C24);C25.iC();C26.setDisplayPosition(1);C26.setParent(C24);C26.setUnits("PIXELS");C26.setHeight(84);C26.iC();C27.setDisplayPosition(2);C27.setParent(C24);C27.setHeight(51);C27.setUnits("CONTENT");C27.iC();C28.setDisplayPosition(4);C28.setParent(C24);C28.setHeight(33);C28.setUnits("CONTENT");C28.iC();C29.setDisplayPosition(5);C29.setParent(C24);C29.setHeight(40);C29.setUnits("CONTENT");C29.iC();C30.setDisplayPosition(6);C30.setParent(C24);C30.setHeight(40);C30.setUnits("CONTENT");C30.iC();
C31.setDisplayPosition(7);C31.setParent(C24);C31.setHeight(56);C31.setUnits("CONTENT");C31.iC();C32.setDisplayPosition(3);C32.setParent(C24);C32.setHeight(40);C32.setUnits("CONTENT");C32.iC();C33.setAlignment("CENTERLEFT");C33.setColumn(C25);C33.setManage(C67);C33.setParent(C24);C33.setRow(C27);C33.setSizing("CONTENTHEIGHTFITTOWIDTH");C33.setFlow("DOWN");C33.setMarginLeft(58);C33.setMarginRight(10);C33.setColumnSpan(2);C33.iC();C34.setAlignment("TOPLEFT");C34.setColumn(C25);C34.setManage(C69);C34.setParent(C24);
C34.setRow(C28);C34.setSizing("CONTENTHEIGHTFITTOWIDTH");C34.setFlow("DOWN");C34.setMarginLeft(58);C34.setMarginRight(10);C34.iC();C35.setAlignment("TOPLEFT");C35.setColumn(C25);C35.setManage(C70);C35.setParent(C24);C35.setRow(C31);C35.setSizing("CONTENTHEIGHTFITTOWIDTH");C35.setFlow("DOWN");C35.setMarginRight(10);C35.iC();C36.setAlignment("TOPLEFT");C36.setColumn(C25);C36.setManage(C72);C36.setParent(C24);C36.setRow(C30);C36.setSizing("CONTENTHEIGHTFITTOWIDTH");C36.setFlow("DOWN");C36.setMarginRight(10);
C36.iC();C37.setAlignment("TOPLEFT");C37.setColumn(C25);C37.setManage(C71);C37.setParent(C24);C37.setRow(C29);C37.setSizing("CONTENTHEIGHTFITTOWIDTH");C37.setFlow("DOWN");C37.setMarginRight(10);C37.iC();C38.setColumn(C25);C38.setParent(C24);C38.setRow(C26);C38.setMarginTop(6);C38.setSizing("FITTOWIDTH");C38.iC();C39.setColumn(C25);C39.setManage(C66);C39.setParent(C24);C39.setRow(C26);C39.iC();C40.iC();C41.setDisplayPosition(1);C41.setParent(C40);C41.iC();C42.setDisplayPosition(1);C42.setParent(C40);
C42.setUnits("PIXELS");C42.setHeight(84);C42.iC();C43.setDisplayPosition(2);C43.setParent(C40);C43.setHeight(15);C43.setUnits("PIXELS");C43.iC();C44.setDisplayPosition(3);C44.setParent(C40);C44.setHeight(75);C44.setUnits("PIXELS");C44.iC();C45.setDisplayPosition(4);C45.setParent(C40);C45.setHeight(75);C45.setUnits("PIXELS");C45.iC();C46.setDisplayPosition(5);C46.setParent(C40);C46.setHeight(75);C46.setUnits("PIXELS");C46.iC();C47.setDisplayPosition(6);C47.setParent(C40);C47.setHeight(75);C47.setUnits("PIXELS");
C47.iC();C48.setDisplayPosition(7);C48.setParent(C40);C48.setMinHeight(160);C48.iC();C49.setDisplayPosition(8);C49.setParent(C40);C49.setHeight(60);C49.setUnits("PIXELS");C49.iC();C50.setColumn(C41);C50.setManage(C65);C50.setParent(C40);C50.setRow(C42);C50.iC();C51.setAlignment("TOPLEFT");C51.setColumn(C41);C51.setManage(C73);C51.setParent(C40);C51.setRow(C44);C51.setFlow("DOWN");C51.setMarginLeft(16);C51.setMarginRight(10);C51.setMarginBottom(8);C51.iC();C52.setAlignment("TOPLEFT");C52.setColumn(C41);
C52.setManage(C77);C52.setParent(C40);C52.setRow(C45);C52.setFlow("DOWN");C52.setMarginLeft(16);C52.setMarginRight(10);C52.setMarginBottom(8);C52.iC();C53.setAlignment("TOPLEFT");C53.setColumn(C41);C53.setManage(C74);C53.setParent(C40);C53.setRow(C46);C53.setFlow("DOWN");C53.setMarginLeft(16);C53.setMarginRight(10);C53.setMarginBottom(8);C53.iC();C54.setAlignment("TOPLEFT");C54.setColumn(C41);C54.setManage(C75);C54.setParent(C40);C54.setRow(C46);C54.setFlow("DOWN");C54.setMarginLeft(16);C54.setMarginRight(10);
C54.setMarginBottom(8);C54.iC();C55.setAlignment("TOPLEFT");C55.setColumn(C41);C55.setManage(C76);C55.setParent(C40);C55.setRow(C48);C55.setFlow("DOWN");C55.setMarginLeft(16);C55.setMarginRight(10);C55.iC();C56.setColumn(C41);C56.setManage(C78);C56.setParent(C40);C56.setRow(C49);C56.setSizing("CONTENTWIDTHANDHEIGHT");C56.setFlow("CENTERHORIZONTAL");C56.setMarginLeft(18);C56.setMarginRight(10);C56.iC();C57.iC();C58.setDisplayPosition(1);C58.setParent(C57);C58.iC();C59.setDisplayPosition(1);C59.setParent(C57);
C59.iC();C60.setAlignment("TOPCENTER");C60.setColumn(C59);C60.setManage(C79);C60.setParent(C57);C60.setRow(C58);C60.setSizing("CONTENTWIDTHFITTOHEIGHT");C60.iC();C61.setAlignment("TOPLEFT");C61.setColumn(C25);C61.setManage(C68);C61.setParent(C24);C61.setRow(C32);C61.setSizing("CONTENTHEIGHTFITTOWIDTH");C61.setFlow("DOWN");C61.setMarginRight(10);C61.iC();C62.setDisplayPosition(1);C62.setHeight(344);C62.setParent(this);C62.setTabPosition(1);C62.setTabStop(false);C62.setWidth(405);C62.setLayoutManager(C24);
C62.setThemeDrawStyle("Card+Shadow2");C62.setTop(16);C62.setLeft(16);C62.setStyle(C2);C62.iC();C63.setDisplayPosition(3);C63.setHeight(621);C63.setLeft(437);C63.setParent(this);C63.setTabPosition(3);C63.setTabStop(false);C63.setTop(0);C63.setWidth(404);C63.setLayoutManager(C40);C63.setThemeDrawStyle("Shadow2+Card");C63.setStyle(C5);C63.iC();C64.setDisplayPosition(2);C64.setLeft(16);C64.setParent(this);C64.setTabPosition(2);C64.setTabStop(false);C64.setTop(376);C64.setHeight(241);C64.setWidth(405);
C64.setThemeDrawStyle("Card+Shadow2");C64.setLayoutManager(C57);C64.setStyle(C8);C64.iC();C65.setCaption("Contact Us");C65.setDisplayPosition(7);C65.setParent(C63);C65.setTabPosition(6);C65.setThemeDrawStyle("ForegroundTheme700+Heading2+MediumTitle");C65.setWidth(402);C65.setIcon("send");C65.setIconAlignment("ABOVECAPTION");C65.setIconHeight(48);C65.setHeight(84);C65.setCaptionAlignment("CENTER");C65.setCaptionMarginTop(0);C65.setCaptionMarginBottom(8);C65.setStyle(C4);C65.setLeft(0);C65.setTop(0);
C65.iC();C66.setCaption("Contact Details");C66.setDisplayPosition(6);C66.setLeft(0);C66.setParent(C62);C66.setTabPosition(7);C66.setThemeDrawStyle("ForegroundTheme700+Heading2+MediumTitle");C66.setTop(0);C66.setWidth(405);C66.setCaptionAlignment("CENTER");C66.setIcon("contact_phone");C66.setIconAlignment("ABOVECAPTION");C66.setHeight(84);C66.setIconHeight(48);C66.setCaptionMarginBottom(8);C66.setCaptionMarginTop(0);C66.setStyle(C3);C66.iC();C67.setCaption("LANSA");C67.setDisplayPosition(1);C67.setParent(C62);
C67.setTabPosition(6);C67.setWidth(337);C67.setHeight(51);C67.setThemeDrawStyle("ForegroundDarkPrimary+Heading1");C67.setIconThemeDrawStyle("ForegroundSecondary");C67.setLeft(58);C67.setTop(84);C67.setCaptionMarginBottom(8);C67.setCaptionMarginTop(16);C67.setCaptionMarginLeft(0);C67.iC();C68.setCaption("https://developer.lansa.com");C68.setDisplayPosition(7);C68.setParent(C62);C68.setTabPosition(3);C68.setTop(135);C68.setWidth(395);C68.setHeight(40);C68.setLeft(0);C68.setIconThemeDrawStyle("ForegroundSecondary");
C68.setIcon("link");C68.setIconMarginRight(16);C68.setIconColor("THEME700");C68.setIconOpacity(70);C68.setCaptionMarginBottom(0);C68.setCaptionMarginLeft(0);C68.setCaptionMarginRight(0);C68.setPaddingBottom(8);C68.setPaddingLeft(2);C68.setPaddingRight(2);C68.setPaddingTop(8);C68.setStyle(C0);C68.setMouseOverStyle(C1);C68.setCaptionMarginTop(0);C68.setIconMarginLeft(16);C68.iC();C69.setCaption("My Address");C69.setDisplayPosition(2);C69.setParent(C62);C69.setTabPosition(5);C69.setTop(175);C69.setWidth(337);
C69.setIconThemeDrawStyle("ForegroundSecondary");C69.setLeft(58);C69.setIconMarginRight(16);C69.setIconColor("THEME700");C69.setIconOpacity(60);C69.setCaptionMarginBottom(0);C69.setCaptionMarginTop(0);C69.setCaptionAlignment("TOPLEFT");C69.setCaptionMarginRight(0);C69.setCaptionMarginLeft(0);C69.setPaddingBottom(8);C69.setPaddingLeft(2);C69.setPaddingRight(2);C69.setPaddingTop(8);C69.setHeight(33);C69.iC();C70.setCaption("MyEmail@MyDomain.com");C70.setDisplayPosition(3);C70.setParent(C62);C70.setTabPosition(1);
C70.setTop(288);C70.setWidth(395);C70.setHeight(56);C70.setLeft(0);C70.setIconThemeDrawStyle("ForegroundSecondary");C70.setIcon("email");C70.setIconMarginRight(16);C70.setIconColor("THEME700");C70.setIconOpacity(70);C70.setCaptionMarginBottom(0);C70.setCaptionMarginLeft(0);C70.setCaptionMarginRight(0);C70.setPaddingBottom(24);C70.setPaddingLeft(2);C70.setPaddingRight(2);C70.setPaddingTop(8);C70.setStyle(C0);C70.setMouseOverStyle(C1);C70.setCaptionMarginTop(0);C70.setIconMarginLeft(16);C70.iC();C71.setCaption("+1 630 874 7000");
C71.setDisplayPosition(5);C71.setParent(C62);C71.setTabPosition(4);C71.setTop(208);C71.setWidth(395);C71.setHeight(40);C71.setLeft(0);C71.setIconThemeDrawStyle("ForegroundSecondary");C71.setIcon("phone");C71.setIconMarginRight(16);C71.setIconColor("THEME700");C71.setIconOpacity(70);C71.setCaptionMarginBottom(0);C71.setCaptionMarginLeft(0);C71.setCaptionMarginRight(0);C71.setPaddingBottom(8);C71.setPaddingLeft(2);C71.setPaddingRight(2);C71.setPaddingTop(8);C71.setStyle(C0);C71.setMouseOverStyle(C1);
C71.setCaptionMarginTop(0);C71.setIconMarginLeft(16);C71.iC();C72.setCaption("+1 630 874 7000");C72.setDisplayPosition(4);C72.setParent(C62);C72.setTabPosition(2);C72.setTop(248);C72.setWidth(395);C72.setHeight(40);C72.setLeft(0);C72.setIconThemeDrawStyle("ForegroundSecondary");C72.setIcon("fa-fax");C72.setIconMarginRight(16);C72.setIconColor("THEME700");C72.setIconOpacity(70);C72.setCaptionMarginBottom(0);C72.setCaptionMarginLeft(0);C72.setCaptionMarginRight(0);C72.setPaddingBottom(8);C72.setPaddingLeft(2);
C72.setPaddingRight(2);C72.setPaddingTop(8);C72.setCaptionMarginTop(0);C72.setIconMarginLeft(16);C72.iC();C73.setCaption("Your Name");C73.setDisplayPosition(1);C73.setParent(C63);C73.setTabPosition(1);C73.setTop(99);C73.setWidth(376);C73.setIconThemeDrawStyle("ForegroundSecondary");C73.setLeft(16);C73.setIconHeight(16);C73.setCaptionColor("THEME700");C73.setHeight(67);C73.iC();C74.setCaption("Your Email");C74.setDisplayPosition(3);C74.setParent(C63);C74.setTabPosition(3);C74.setTop(249);C74.setWidth(376);
C74.setIconThemeDrawStyle("ForegroundSecondary");C74.setLeft(16);C74.setIconHeight(16);C74.setCaptionColor("THEME700");C74.setHeight(67);C74.iC();C75.setCaption("Subject");C75.setDisplayPosition(5);C75.setParent(C63);C75.setTabPosition(4);C75.setTop(324);C75.setWidth(376);C75.setIconThemeDrawStyle("ForegroundSecondary");C75.setLeft(16);C75.setIconHeight(16);C75.setCaptionColor("THEME700");C75.setHeight(67);C75.iC();C76.setAppearance("TEXTFIELDAREABOX");C76.setCaption("Message");C76.setDisplayPosition(6);
C76.setHeight(160);C76.setMultiLine(true);C76.setParent(C63);C76.setTabPosition(5);C76.setTop(399);C76.setWidth(376);C76.setIconThemeDrawStyle("ForegroundSecondary");C76.setLeft(16);C76.setIconHeight(16);C76.iC();C77.setCaption("Your Phone");C77.setDisplayPosition(2);C77.setParent(C63);C77.setTabPosition(2);C77.setTop(174);C77.setWidth(376);C77.setIconThemeDrawStyle("ForegroundSecondary");C77.setLeft(16);C77.setIconHeight(16);C77.setCaptionColor("THEME700");C77.setHeight(67);C77.iC();C78.setCaption("Send");
C78.setDisplayPosition(4);C78.setParent(C63);C78.setTabPosition(7);C78.setThemeDrawStyle("Borders1+BorderTheme500+ForegroundMediumPrimary");C78.setTop(578);C78.setWidth(38);C78.setStyle(C6);C78.setHeight(23);C78.setLeft(186);C78.iC();C79.setParent(C64);C79.setDisplayPosition(1);C79.setTabPosition(1);C79.setTabStop(false);C79.setHeight(239);C79.setWidth(403);C79.setStyle(C7);C79.iC();l.WEB().aH("DEVICECHANGED",this,e2);C68.aH("CLICK",this,e6);C70.aH("CLICK",this,e4);C71.aH("CLICK",this,e5);C73.aH("CHANGED",this,e7);
C74.aH("CHANGED",this,e7);C75.aH("CHANGED",this,e7);C76.aH("CHANGED",this,e7);C78.aH("CLICK",this,e3);this.setLayoutManager(C9);this.setVerticalScroll(true);this.setDisplayPosition(1);this.setHeight(633);this.setTabPosition(1);this.setWidth(857);this.aH("PREPARE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",115);r.ln=115;{r.ln=117;m.A02ADDRESS.set(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat("2001 Butterfield Road",","),l.n.AsUnicodeString(10)),"Downers Grove"),","),l.n.AsUnicodeString(10)),"IL, 60515"),","),l.n.AsUnicodeString(10)),"USA"));
r.ln=119;m.MAP.setHtml("<html><iframe width='100%' height='100%' id='mapcanvas' src='https://maps.google.com/maps?q=2001%20Butterfield%20Road,%20Downers%20Grove,%20IL,%2060515,%20,%20USA&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe></html>");}r.ln=121;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",123);r.ln=123;{r.ln=125;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=127;this.setLayoutManager(m.LAYOUTMOBILE);
r.ln=128;m.LAYOUTCONTACTUSROW7.setHeight(200);m.LAYOUTCONTACTUSROW7.setUnits("PIXELS");}else{r.ln=132;this.setLayoutManager(m.LAYOUTDESKTOP);r.ln=133;m.LAYOUTCONTACTUSITEM6.setAlignment("TOPLEFT");m.LAYOUTCONTACTUSITEM6.setColumn(m.LAYOUTCONTACTUSCOLUMN1);m.LAYOUTCONTACTUSITEM6.setManage(m.A02CONTACTMESSAGE);m.LAYOUTCONTACTUSITEM6.setParent(m.LAYOUTCONTACTUS);m.LAYOUTCONTACTUSITEM6.setRow(m.LAYOUTCONTACTUSROW7);m.LAYOUTCONTACTUSITEM6.setFlow("DOWN");m.LAYOUTCONTACTUSITEM6.setMarginLeft(16);m.LAYOUTCONTACTUSITEM6.setMarginRight(10);
r.ln=134;m.LAYOUTCONTACTUSROW7.setHeight(1);m.LAYOUTCONTACTUSROW7.setUnits("PROPORTION");}}r.ln=138;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ButtonContactUs.Click",140);var C0=r.cDR("SUBMIT","A02CONT_5","SUMBITFORM");var C1=r.cR("RESULT","PRIM_BOLN");C0.iC();C1.iC();r.ln=140;{r.ln=145;if(cO.mthVALIDATECONTACTDETAILS.call(this)){r.ln=147;C0.mthEXECUTE({FLD:{"A02EMAIL":m.A02CONTACTEMAIL.get(),"A02NAME":m.A02CONTACTNAME.get(),"A02PHONE":m.A02CONTACTPHONE.get(),"A02SUBJECT":m.A02CONTACTSUBJECT.get(),"A02MESSAGE":m.A02CONTACTMESSAGE.get()}},{FLD:{"A02RESULT":C1}});
r.ln=149;if(l.tB(l.b.eq(C1.get(),true))){r.ln=151;m.A02CONTACTNAME.set("");m.A02CONTACTMESSAGE.set("");m.A02CONTACTEMAIL.set("");m.A02CONTACTSUBJECT.set("");m.A02CONTACTPHONE.set("");m.A02CONTACTMESSAGE.set("");r.ln=153;l.WEB().mthALERT("Message has been submitted");}else{r.ln=157;l.WEB().mthALERT("Message could not be submitted at this time please try again later.");}}}r.ln=163;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#A02Email.Click",165);var C0=r.cR("QUICKEMAIL","PRIM_STR");
C0.iC();r.ln=165;{r.ln=169;C0.set(l.s.Substitute("mailto:&1",m.A02EMAIL.get()));r.ln=171;l.WEB().mthNAVIGATE(C0.get(),"CURRENT");}r.ln=173;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#A02Phone.Click",175);var C0=r.cR("CALL","PRIM_STR");C0.iC();r.ln=175;{r.ln=178;C0.set(l.s.Substitute("tel:&1",m.A02PHONE.get()));r.ln=180;l.WEB().mthNAVIGATE(C0.get(),"CURRENT");}r.ln=182;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Website.Click",184);r.ln=184;{r.ln=186;l.WEB().mthNAVIGATE(m.WEBSITE.get(),"NEW");
}r.ln=188;r.e();};cO.mthVALIDATECONTACTDETAILS=function(){var m=this.REF,r=l.mR(this,cO,"ValidateContactDetails",194);var P0=r.cP("CONTINUE","PRIM_BOLN");r.ln=194;{r.ln=197;P0.set(true);r.ln=199;if(l.s.eq(m.A02CONTACTEMAIL.get(),"")){r.ln=201;m.A02CONTACTEMAIL.mthSHOWERROR("Email Address must be specified.");r.ln=202;P0.set(false);}else{r.ln=206;if(l.not(l.s.IsValidEmail(m.A02CONTACTEMAIL.getValue()))){r.ln=208;m.A02CONTACTEMAIL.mthSHOWERROR("Email Address Supplied is not valid");r.ln=209;P0.set(false);
}}r.ln=215;if(l.s.eq(m.A02CONTACTNAME.get(),"")){r.ln=217;m.A02CONTACTNAME.mthSHOWERROR("Name must be specified.");r.ln=218;P0.set(false);}r.ln=222;if(l.s.eq(m.A02CONTACTMESSAGE.get(),"")){r.ln=224;m.A02CONTACTMESSAGE.mthSHOWERROR("Message must be specified.");r.ln=225;P0.set(false);}r.ln=229;if(l.s.eq(m.A02CONTACTSUBJECT.get(),"")){r.ln=231;m.A02CONTACTSUBJECT.mthSHOWERROR("Subject must be specified.");r.ln=232;P0.set(false);}}r.ln=236;return r.rV(P0.get());};function e7(SENDER,Ps){var r=l.eR(this,cO,"#A02ContactName.Changed #A02ContactMessage.Changed #A02ContactEmail.Changed #A02ContactSubject.Changed",238);
r.ln=238;{r.ln=240;SENDER.mthCLEARERROR();}r.ln=242;r.e();};},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_MD.Label","PRIM_MD.Edit","PRIM_MD.FlatButton","PRIM_WEB.HtmlContainer","PRIM_WEB.DataRequest"],dp:["PRIM_BOLN","PRIM_STR"]});