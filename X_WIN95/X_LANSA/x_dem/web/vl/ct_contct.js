﻿LANSA.addComponent({id:"CT_CONTCT",nm:"CT_ContactUs",ot:"wv",tp:"View",pt:"ap",de:"Contact Us",tl:15000300},function(l,oI,u){var rc1=l.cB("ximagepeo.jpg");var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{ValidateContactDetails:{},AmIaRobot:{},SendMessage:{}},ev:{MessageStatus:{ps:{"Message":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("STYLELINK","PRIM_VS","Style");var C1=this.cR("STYLE1","PRIM_VS","Style");var C2=this.cR("HEADINGBACKGROUND","PRIM_VS","Style");var C3=this.cR("HEADINGBACKGROUNDBRUSH","PRIM_VS","ImageBrush");
var C4=this.cR("HEADINGBACKGROUND2","PRIM_VS","Style");var C5=this.cR("HEADINGBACKGROUNDBRUSH2","PRIM_VS","ImageBrush");var C6=this.cR("STYLE3","PRIM_VS","Style");var C7=this.cR("STYLE4","PRIM_VS","Style");var C8=this.cR("STYLE5","PRIM_VS","Style");var C9=this.cR("BRUSH3","PRIM_VS","SolidBrush");var C10=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C11=this.cR("STYLE6","PRIM_VS","Style");var C12=this.cR("BRUSH4","PRIM_VS","SolidBrush");var C13=this.cR("LAYOUTDESKTOP","PRIM_TBLO");var C14=this.cR("LAYOUTDESKTOPCOLUMN1","PRIM_TBLO","Column");
var C15=this.cR("LAYOUTDESKTOPROW","PRIM_TBLO","Row");var C16=this.cR("LAYOUTDESKTOPCONTACTDETAILS","PRIM_TBLO","Item");var C17=this.cR("LAYOUTDESKTOPCONTACTUS","PRIM_TBLO","Item");var C18=this.cR("LAYOUTDESKTOPITEM1","PRIM_TBLO","Item");var C19=this.cR("LAYOUTDESKTOPITEM2","PRIM_TBLO","Item");var C20=this.cR("LAYOUTMOBILE","PRIM_TBLO");var C21=this.cR("LAYOUTMOBILECOLUMN","PRIM_TBLO","Column");var C22=this.cR("LAYOUTMOBILEROW","PRIM_TBLO","Row");var C23=this.cR("LAYOUTMOBILECONTACTDETAILS","PRIM_TBLO","Item");
var C24=this.cR("LAYOUTMOBILECONTACTUS","PRIM_TBLO","Item");var C25=this.cR("LAYOUTMOBILEITEM1","PRIM_TBLO","Item");var C26=this.cR("LAYOUTMOBILEITEM2","PRIM_TBLO","Item");var C27=this.cR("LAYOUTCONTACTDETAILS","PRIM_TBLO");var C28=this.cR("LAYOUTCONTACTDETAILSCOLUMN1","PRIM_TBLO","Column");var C29=this.cR("LAYOUTCONTACTDETAILSROW1","PRIM_TBLO","Row");var C30=this.cR("LAYOUTCONTACTDETAILSROW2","PRIM_TBLO","Row");var C31=this.cR("LAYOUTCONTACTDETAILSROW7","PRIM_TBLO","Row");var C32=this.cR("LAYOUTCONTACTDETAILSROW3","PRIM_TBLO","Row");
var C33=this.cR("LAYOUTCONTACTDETAILSITEM2","PRIM_TBLO","Item");var C34=this.cR("LAYOUTCONTACTDETAILSITEM3","PRIM_TBLO","Item");var C35=this.cR("LAYOUTCONTACTDETAILSITEM7","PRIM_TBLO","Item");var C36=this.cR("LAYOUTCONTACTDETAILSITEM9","PRIM_TBLO","Item");var C37=this.cR("LAYOUTCONTACTDETAILSITEM4","PRIM_TBLO","Item");var C38=this.cR("LAYOUTCONTACTDETAILSITEM1","PRIM_TBLO","Item");var C39=this.cR("LAYOUTCONTACTDETAILSITEM6","PRIM_TBLO","Item");var C40=this.cR("LAYOUTCONTACTDETAILSITEM8","PRIM_TBLO","Item");
var C41=this.cR("LAYOUTCONTACTUS","PRIM_TBLO");var C42=this.cR("LAYOUTCONTACTUSROW1","PRIM_TBLO","Row");var C43=this.cR("LAYOUTCONTACTUSCOLUMN1","PRIM_TBLO","Column");var C44=this.cR("LAYOUTCONTACTUSROW2","PRIM_TBLO","Row");var C45=this.cR("LAYOUTCONTACTUSROW3","PRIM_TBLO","Row");var C46=this.cR("LAYOUTCONTACTUSROW4","PRIM_TBLO","Row");var C47=this.cR("LAYOUTCONTACTUSROW5","PRIM_TBLO","Row");var C48=this.cR("LAYOUTCONTACTUSITEM1","PRIM_TBLO","Item");var C49=this.cR("LAYOUTCONTACTUSITEM2","PRIM_TBLO","Item");
var C50=this.cR("LAYOUTCONTACTUSITEM3","PRIM_TBLO","Item");var C51=this.cR("LAYOUTCONTACTUSITEM5","PRIM_TBLO","Item");var C52=this.cR("LAYOUTCONTACTUSITEM7","PRIM_TBLO","Item");var C53=this.cR("LAYOUTCONTACTUSITEM4","PRIM_TBLO","Item");var C54=this.cR("LAYOUTCONTACTDETAILSITEM5","PRIM_TBLO","Item");var C55=this.cR("LAYOUTCONTACTUSITEM8","PRIM_TBLO","Item");var C56=this.cR("LAYOUTDESKTOPITEM3","PRIM_TBLO","Item");var C57=this.cR("LAYOUTCONTACTUSITEM6","PRIM_TBLO","Item");var C58=this.cR("LAYOUTPOPUPMAP","PRIM_TBLO");
var C59=this.cR("LAYOUTPOPUPMAPROW1","PRIM_TBLO","Row");var C60=this.cR("LAYOUTPOPUPMAPCOLUMN1","PRIM_TBLO","Column");var C61=this.cR("LAYOUTPOPUPMAPITEM1","PRIM_TBLO","Item");var C62=this.cR("PANELCONTACTDETAILS","PRIM_PANL");var C63=this.cR("PANELCONTACTUS","PRIM_PANL");var C64=this.cR("LABELCOMPANYNAME","PRIM_MD","Label");var C65=this.cR("LABELWEBSITE","PRIM_MD","Label");var C66=this.cR("LABELADDRESS","PRIM_MD","Label");var C67=this.cR("LABELEMAIL","PRIM_MD","Label");var C68=this.cR("LABELPHONE","PRIM_MD","Label");
var C69=this.cR("EDITCONTACTNAME","PRIM_MD","Edit");var C70=this.cR("EDITCONTACTEMAIL","PRIM_MD","Edit");var C71=this.cR("EDITCONTACTSUBJECT","PRIM_MD","Edit");var C72=this.cR("EDITCONTACTMESSAGE","PRIM_MD","Edit");var C73=this.cR("EDITCONTACTPHONE","PRIM_MD","Edit");var C74=this.cR("BUTTONCONTACTUS","PRIM_MD","FlatButton");var C75=this.cR("DROPDOWNINQUIRYTYPE","PRIM_MD","Dropdown");var C76=this.cR("PANEL","PRIM_PANL");var C77=this.cR("TEXT","PRIM_MD","Label");var C78=this.cR("TEXT1","PRIM_MD","Label");
var C79=this.cR("ICONTWITTER","PRIM_MD","Icon");var C80=this.cR("ICONFACEBOOK","PRIM_MD","Icon");var C81=this.cR("ICONLINKEDIN","PRIM_MD","Icon");var C82=this.cR("RECAPTCHA","XLBA0088");var C83=this.cR("POPUPMAP","PRIM_PPNL");var C84=this.cR("MAPHTML","PRIM_WEB","HtmlContainer");var C85=this.cR("RECAPTCHAVISUALIZED","PRIM_BOLN");C0.setCursor("HAND");C0.iC();C1.setUnderline(true);C1.iC();C2.setBackgroundBrush(C3);C2.iC();C3.setImage(rc1);C3.setSizing("CROPPED");C3.setAlignment("BOTTOMCENTER");C3.iC();
C4.setBackgroundBrush(C5);C4.iC();C5.setImage(rc1);C5.setSizing("CROPPED");C5.iC();C6.setCornerTopLeft(12);C6.setCornerTopRight(12);C6.setBorderLeft(0);C6.setBorderTop(0);C6.setBorderRight(0);C6.setBorderBottom(0);C6.iC();C7.setCornerTopLeft(0);C7.setCornerTopRight(0);C7.setBorderLeft(0);C7.setBorderTop(0);C7.setBorderRight(0);C7.setBorderBottom(0);C7.setCornerBottomLeft(0);C7.setCornerBottomRight(0);C7.iC();C8.setBackgroundBrush(C10);C8.setCornerBottomLeft(99);C8.setCornerBottomRight(99);C8.setCornerTopLeft(99);
C8.setCornerTopRight(99);C8.setForegroundBrush(C9);C8.setCursor("HAND");C8.iC();C9.setColor("255:255:255");C9.iC();C10.setColor("THEME500");C10.iC();C11.setCornerBottomLeft(99);C11.setCornerBottomRight(99);C11.setCornerTopLeft(99);C11.setCornerTopRight(99);C11.setBorderLeft(1);C11.setBorderTop(1);C11.setBorderRight(1);C11.setBorderBottom(1);C11.setBackgroundBrush(C12);C11.iC();C12.setColor("THEME700");C12.iC();C13.iC();C14.setDisplayPosition(1);C14.setParent(C13);C14.setWidth(80);C14.iC();C15.setDisplayPosition(1);
C15.setParent(C13);C15.setHeight(965);C15.setUnits("CONTENT");C15.iC();C16.setColumn(C14);C16.setManage(C62);C16.setParent(C13);C16.setRow(C15);C16.setSizing("CONTENTHEIGHTFITTOWIDTH");C16.setMarginRight(48);C16.setMarginLeft(48);C16.setAlignment("TOPLEFT");C16.setFlow("DOWN");C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C14);C17.setManage(C63);C17.setParent(C13);C17.setRow(C15);C17.setMarginLeft(48);C17.setMarginBottom(48);C17.setMarginRight(48);C17.setFlow("DOWN");C17.setSizing("CONTENTHEIGHTFITTOWIDTH");
C17.iC();C18.setAlignment("TOPCENTER");C18.setColumn(C14);C18.setManage(C76);C18.setParent(C13);C18.setRow(C15);C18.setSizing("FITTOWIDTH");C18.setFlow("DOWN");C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C14);C19.setManage(C77);C19.setParent(C13);C19.setRow(C15);C19.setSizing("CONTENTWIDTHANDHEIGHT");C19.setFlow("DOWN");C19.setMarginTop(24);C19.setMarginLeft(48);C19.iC();C20.setSizing("CONTENTHEIGHT");C20.iC();C21.setParent(C20);C21.setDisplayPosition(1);C21.iC();C22.setParent(C20);C22.setDisplayPosition(1);
C22.iC();C23.setParent(C20);C23.setRow(C22);C23.setColumn(C21);C23.setSizing("CONTENTHEIGHTFITTOWIDTH");C23.setFlow("DOWN");C23.setManage(C62);C23.setAlignment("TOPLEFT");C23.setMarginTop(4);C23.iC();C24.setParent(C20);C24.setRow(C22);C24.setColumn(C21);C24.setSizing("CONTENTHEIGHTFITTOWIDTH");C24.setManage(C63);C24.setFlow("DOWN");C24.setAlignment("TOPLEFT");C24.setMarginTop(4);C24.iC();C25.setAlignment("TOPLEFT");C25.setColumn(C21);C25.setManage(C77);C25.setParent(C20);C25.setRow(C22);C25.setSizing("NONE");
C25.setFlow("DOWN");C25.setMarginTop(22);C25.setMarginBottom(-5);C25.setMarginLeft(8);C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C21);C26.setManage(C78);C26.setParent(C20);C26.setRow(C22);C26.setSizing("NONE");C26.setFlow("DOWN");C26.setMarginBottom(-5);C26.setMarginTop(16);C26.setMarginLeft(8);C26.iC();C27.iC();C28.setDisplayPosition(1);C28.setParent(C27);C28.iC();C29.setDisplayPosition(1);C29.setParent(C27);C29.setUnits("PIXELS");C29.setHeight(16);C29.iC();C30.setDisplayPosition(2);C30.setParent(C27);
C30.setHeight(36);C30.setUnits("CONTENT");C30.iC();C31.setDisplayPosition(3);C31.setParent(C27);C31.setHeight(144);C31.setUnits("CONTENT");C31.iC();C32.setDisplayPosition(4);C32.setParent(C27);C32.setHeight(64);C32.setUnits("PIXELS");C32.iC();C33.setAlignment("CENTERLEFT");C33.setColumn(C28);C33.setManage(C64);C33.setParent(C27);C33.setRow(C30);C33.setSizing("CONTENTHEIGHTFITTOWIDTH");C33.setFlow("DOWN");C33.setColumnSpan(2);C33.iC();C34.setAlignment("TOPLEFT");C34.setColumn(C28);C34.setManage(C66);
C34.setParent(C27);C34.setRow(C31);C34.setSizing("CONTENTHEIGHTFITTOWIDTH");C34.setFlow("DOWN");C34.iC();C35.setAlignment("TOPLEFT");C35.setColumn(C28);C35.setManage(C67);C35.setParent(C27);C35.setRow(C31);C35.setSizing("CONTENTHEIGHTFITTOWIDTH");C35.setFlow("DOWN");C35.iC();C36.setAlignment("TOPLEFT");C36.setColumn(C28);C36.setManage(C68);C36.setParent(C27);C36.setRow(C31);C36.setSizing("CONTENTHEIGHTFITTOWIDTH");C36.setFlow("DOWN");C36.iC();C37.setColumn(C28);C37.setParent(C27);C37.setRow(C29);
C37.setMarginTop(6);C37.setSizing("FITTOWIDTH");C37.iC();C38.setAlignment("TOPCENTER");C38.setColumn(C28);C38.setManage(C81);C38.setParent(C27);C38.setRow(C32);C38.setSizing("NONE");C38.setFlow("CENTERHORIZONTAL");C38.setMarginLeft(12);C38.setMarginRight(12);C38.iC();C39.setAlignment("TOPCENTER");C39.setColumn(C28);C39.setManage(C80);C39.setParent(C27);C39.setRow(C32);C39.setSizing("NONE");C39.setFlow("CENTERHORIZONTAL");C39.setMarginLeft(12);C39.setMarginRight(12);C39.iC();C40.setAlignment("TOPCENTER");
C40.setColumn(C28);C40.setManage(C79);C40.setParent(C27);C40.setRow(C32);C40.setSizing("NONE");C40.setFlow("CENTERHORIZONTAL");C40.setMarginLeft(12);C40.setMarginRight(12);C40.iC();C41.iC();C42.setDisplayPosition(1);C42.setParent(C41);C42.setUnits("CONTENT");C42.setHeight(352);C42.iC();C43.setDisplayPosition(1);C43.setParent(C41);C43.iC();C44.setDisplayPosition(2);C44.setParent(C41);C44.setHeight(83);C44.setUnits("CONTENT");C44.iC();C45.setDisplayPosition(3);C45.setParent(C41);C45.setHeight(80);C45.setUnits("CONTENT");
C45.iC();C46.setDisplayPosition(4);C46.setParent(C41);C46.setUnits("CONTENT");C46.setHeight(48);C46.iC();C47.setDisplayPosition(5);C47.setParent(C41);C47.setHeight(8);C47.setUnits("PIXELS");C47.iC();C48.setAlignment("TOPCENTER");C48.setColumn(C43);C48.setManage(C72);C48.setParent(C41);C48.setRow(C44);C48.setFlow("DOWN");C48.setMarginLeft(16);C48.setMarginRight(8);C48.setSizing("CONTENTHEIGHTFITTOWIDTH");C48.iC();C49.setAlignment("TOPCENTER");C49.setColumn(C43);C49.setManage(C71);C49.setParent(C41);
C49.setRow(C42);C49.setFlow("DOWN");C49.setMarginLeft(16);C49.setMarginRight(8);C49.setMarginBottom(8);C49.setSizing("FITTOWIDTH");C49.setColumnSpan(2);C49.iC();C50.setAlignment("TOPCENTER");C50.setColumn(C43);C50.setManage(C70);C50.setParent(C41);C50.setRow(C42);C50.setFlow("DOWN");C50.setMarginLeft(16);C50.setMarginRight(8);C50.setMarginBottom(8);C50.setSizing("FITTOWIDTH");C50.setColumnSpan(2);C50.iC();C51.setAlignment("TOPCENTER");C51.setColumn(C43);C51.setManage(C69);C51.setParent(C41);C51.setRow(C42);
C51.setFlow("DOWN");C51.setMarginLeft(16);C51.setMarginRight(8);C51.setMarginBottom(8);C51.setSizing("FITTOWIDTH");C51.setColumnSpan(2);C51.iC();C52.setAlignment("TOPCENTER");C52.setColumn(C43);C52.setManage(C73);C52.setParent(C41);C52.setRow(C42);C52.setFlow("DOWN");C52.setMarginLeft(16);C52.setMarginRight(8);C52.setMarginBottom(8);C52.setSizing("FITTOWIDTH");C52.setColumnSpan(2);C52.iC();C53.setColumn(C43);C53.setManage(C74);C53.setParent(C41);C53.setRow(C46);C53.setSizing("FITTOWIDTH");C53.setFlow("DOWN");
C53.setMarginLeft(16);C53.setMarginRight(8);C53.setAlignment("TOPCENTER");C53.setMarginTop(8);C53.iC();C54.setAlignment("TOPLEFT");C54.setColumn(C28);C54.setManage(C65);C54.setParent(C27);C54.setRow(C31);C54.setSizing("CONTENTHEIGHTFITTOWIDTH");C54.setFlow("DOWN");C54.iC();C55.setAlignment("TOPCENTER");C55.setColumn(C43);C55.setManage(C75);C55.setParent(C41);C55.setRow(C42);C55.setMarginLeft(16);C55.setMarginRight(8);C55.setSizing("FITTOWIDTH");C55.setColumnSpan(2);C55.setFlow("DOWN");C55.setMarginTop(8);
C55.iC();C56.setAlignment("TOPLEFT");C56.setColumn(C14);C56.setManage(C78);C56.setParent(C13);C56.setRow(C15);C56.setSizing("CONTENTWIDTHANDHEIGHT");C56.setFlow("DOWN");C56.setMarginTop(24);C56.setMarginLeft(48);C56.iC();C57.setColumn(C43);C57.setManage(C82);C57.setParent(C41);C57.setRow(C45);C57.setSizing("FITTOWIDTH");C57.setAlignment("CENTERLEFT");C57.setFlow("DOWN");C57.setMarginLeft(16);C57.iC();C58.iC();C59.setDisplayPosition(1);C59.setParent(C58);C59.iC();C60.setDisplayPosition(1);C60.setParent(C58);
C60.iC();C61.setAlignment("TOPCENTER");C61.setColumn(C60);C61.setManage(C84);C61.setParent(C58);C61.setRow(C59);C61.iC();C62.setDisplayPosition(2);C62.setHeight(260);C62.setParent(this);C62.setTabPosition(1);C62.setTabStop(false);C62.setWidth(743);C62.setLayoutManager(C27);C62.setThemeDrawStyle("Card+Shadow3");C62.setTop(67);C62.setLeft(48);C62.setStyle(C7);C62.iC();C63.setDisplayPosition(4);C63.setHeight(571);C63.setLeft(48);C63.setParent(this);C63.setTabPosition(2);C63.setTabStop(false);C63.setTop(394);
C63.setWidth(743);C63.setLayoutManager(C41);C63.setThemeDrawStyle("Card+Shadow3");C63.setStyle(C7);C63.iC();C64.setCaption("Contacts");C64.setDisplayPosition(2);C64.setParent(C62);C64.setTabPosition(5);C64.setWidth(743);C64.setThemeDrawStyle("ForegroundDarkPrimary+Heading3");C64.setIconThemeDrawStyle("ForegroundSecondary");C64.setLeft(0);C64.setCaptionMarginBottom(0);C64.setCaptionMarginTop(0);C64.setPaddingBottom(8);C64.setPaddingLeft(16);C64.setPaddingRight(16);C64.setPaddingTop(8);C64.setCaptionMarginLeft(0);
C64.setCaptionMarginRight(0);C64.setTop(16);C64.iC();C65.setCaption("https://developer.lansa.com");C65.setDisplayPosition(1);C65.setParent(C62);C65.setTabPosition(2);C65.setTop(52);C65.setWidth(743);C65.setHeight(40);C65.setLeft(0);C65.setIconThemeDrawStyle("ForegroundSecondary");C65.setIcon("link");C65.setIconMarginRight(16);C65.setIconColor("THEME700");C65.setIconOpacity(60);C65.setCaptionMarginBottom(0);C65.setCaptionMarginLeft(0);C65.setCaptionMarginRight(0);C65.setPaddingBottom(8);C65.setPaddingLeft(16);
C65.setPaddingRight(16);C65.setThemeDrawStyle("ForegroundTheme");C65.setStyle(C0);C65.setMouseOverStyle(C1);C65.setCaptionMarginTop(0);C65.setPaddingTop(8);C65.iC();C66.setCaption("My Address");C66.setDisplayPosition(3);C66.setParent(C62);C66.setTabPosition(4);C66.setTop(92);C66.setWidth(743);C66.setThemeDrawStyle("ForegroundTheme");C66.setIconThemeDrawStyle("ForegroundSecondary");C66.setLeft(0);C66.setIconMarginRight(16);C66.setIconColor("THEME700");C66.setIconOpacity(60);C66.setCaptionMarginBottom(0);
C66.setCaptionMarginTop(0);C66.setCaptionMarginRight(0);C66.setCaptionMarginLeft(0);C66.setPaddingBottom(8);C66.setPaddingLeft(16);C66.setPaddingRight(16);C66.setHeight(32);C66.setIcon("business");C66.setStyle(C0);C66.setMouseOverStyle(C1);C66.iC();C67.setCaption("Info@ContactsApp.com");C67.setDisplayPosition(5);C67.setParent(C62);C67.setTabPosition(1);C67.setTop(124);C67.setWidth(743);C67.setHeight(32);C67.setLeft(0);C67.setThemeDrawStyle("ForegroundMediumPrimary+ForegroundTheme");C67.setIconThemeDrawStyle("ForegroundSecondary");
C67.setIcon("email");C67.setIconMarginRight(16);C67.setIconColor("THEME700");C67.setIconOpacity(60);C67.setCaptionMarginBottom(0);C67.setCaptionMarginLeft(0);C67.setCaptionMarginRight(0);C67.setPaddingBottom(8);C67.setPaddingLeft(16);C67.setPaddingRight(16);C67.setStyle(C0);C67.setMouseOverStyle(C1);C67.setCaptionMarginTop(0);C67.iC();C68.setCaption("+1 630 874 7000");C68.setDisplayPosition(6);C68.setParent(C62);C68.setTabPosition(3);C68.setTop(156);C68.setWidth(743);C68.setHeight(40);C68.setLeft(0);
C68.setIconThemeDrawStyle("ForegroundSecondary");C68.setIcon("phone");C68.setIconMarginRight(16);C68.setIconColor("THEME700");C68.setIconOpacity(60);C68.setCaptionMarginBottom(0);C68.setCaptionMarginLeft(0);C68.setCaptionMarginRight(0);C68.setPaddingLeft(16);C68.setPaddingRight(16);C68.setThemeDrawStyle("ForegroundTheme");C68.setStyle(C0);C68.setMouseOverStyle(C1);C68.setCaptionMarginTop(0);C68.setPaddingBottom(16);C68.iC();C69.setCaption("Your Name");C69.setDisplayPosition(2);C69.setParent(C63);
C69.setTabPosition(1);C69.setTop(72);C69.setWidth(719);C69.setIconThemeDrawStyle("ForegroundSecondary");C69.setLeft(16);C69.setIconHeight(16);C69.setCaptionColor("THEME700");C69.setHeight(64);C69.iC();C70.setCaption("Your Email");C70.setDisplayPosition(4);C70.setParent(C63);C70.setTabPosition(3);C70.setTop(216);C70.setWidth(719);C70.setIconThemeDrawStyle("ForegroundSecondary");C70.setLeft(16);C70.setIconHeight(16);C70.setCaptionColor("THEME700");C70.setHeight(64);C70.iC();C71.setCaption("Subject");
C71.setDisplayPosition(5);C71.setParent(C63);C71.setTabPosition(4);C71.setTop(288);C71.setWidth(719);C71.setIconThemeDrawStyle("ForegroundSecondary");C71.setLeft(16);C71.setIconHeight(16);C71.setCaptionColor("THEME700");C71.setHeight(64);C71.iC();C72.setCaption("Message");C72.setDisplayPosition(6);C72.setHeight(83);C72.setMultiLine(true);C72.setParent(C63);C72.setTabPosition(5);C72.setTop(352);C72.setWidth(719);C72.setIconThemeDrawStyle("ForegroundSecondary");C72.setLeft(16);C72.setIconHeight(16);
C72.setCaptionColor("THEME700");C72.iC();C73.setCaption("Your Phone");C73.setDisplayPosition(3);C73.setParent(C63);C73.setTabPosition(2);C73.setTop(144);C73.setWidth(719);C73.setIconThemeDrawStyle("ForegroundSecondary");C73.setLeft(16);C73.setIconHeight(16);C73.setCaptionColor("THEME700");C73.setHeight(64);C73.iC();C74.setCaption("Send");C74.setDisplayPosition(8);C74.setParent(C63);C74.setTabPosition(7);C74.setThemeDrawStyle("Borders1+BorderTheme500+ForegroundMediumPrimary");C74.setTop(523);C74.setWidth(719);
C74.setLeft(16);C74.setHeight(40);C74.setCaptionMarginBottom(0);C74.setCaptionMarginLeft(0);C74.setCaptionMarginTop(0);C74.setCaptionMarginRight(0);C74.iC();C75.setCaption("Inquiry Type");C75.setDisplayPosition(1);C75.setLeft(16);C75.setParent(C63);C75.setTabPosition(8);C75.setTop(8);C75.setWidth(719);C75.setHeight(64);C75.setCaptionColor("THEME700");C75.iC();C76.setDisplayPosition(5);C76.setHeight(4);C76.setLeft(0);C76.setParent(this);C76.setTabPosition(3);C76.setTabStop(false);C76.setTop(0);C76.setWidth(839);
C76.iC();C77.setCaption("Contact Us Direct");C77.setParent(this);C77.setThemeDrawStyle("Heading1+Text(255,255,255,1)+ForegroundMediumPrimary+Heading2+DarkTitle");C77.setTop(351);C77.setWidth(184);C77.setHeight(43);C77.setDisplayPosition(3);C77.setPaddingBottom(8);C77.setPaddingLeft(16);C77.setPaddingRight(16);C77.setPaddingTop(8);C77.setLeft(48);C77.setTabPosition(4);C77.iC();C78.setCaption("Find Us");C78.setLeft(48);C78.setParent(this);C78.setThemeDrawStyle("Heading1+Text(255,255,255,1)+ForegroundMediumPrimary+Heading2+DarkAccent");
C78.setHeight(43);C78.setDisplayPosition(1);C78.setPaddingBottom(8);C78.setPaddingLeft(16);C78.setPaddingRight(16);C78.setPaddingTop(8);C78.setTop(24);C78.setTabPosition(5);C78.iC();C79.setIcon("fa-twitter");C79.setLeft(343);C79.setParent(C62);C79.setTop(196);C79.setIconHeight(32);C79.setDisplayPosition(7);C79.setTabPosition(6);C79.setStyle(C8);C79.setHeight(56);C79.setWidth(56);C79.setMouseOverStyle(C11);C79.setThemeDrawStyle("Shadow2");C79.iC();C80.setIcon("fa-facebook");C80.setLeft(263);C80.setParent(C62);
C80.setTop(196);C80.setIconHeight(32);C80.setDisplayPosition(4);C80.setStyle(C8);C80.setTabPosition(7);C80.setHeight(56);C80.setWidth(56);C80.setMouseOverStyle(C11);C80.setThemeDrawStyle("Shadow2");C80.iC();C81.setIcon("fa-linkedin");C81.setLeft(423);C81.setParent(C62);C81.setTop(196);C81.setIconHeight(32);C81.setDisplayPosition(8);C81.setTabPosition(8);C81.setStyle(C8);C81.setHeight(56);C81.setWidth(56);C81.setMouseOverStyle(C11);C81.setThemeDrawStyle("Shadow2");C81.iC();C82.setDisplayPosition(7);
C82.setParent(C63);C82.setTabPosition(6);C82.setTabStop(false);C82.setTop(435);C82.setHeight(80);C82.setWidth(727);C82.setLeft(16);C82.iC();C83.setHeight(500);C83.setWidth(650);C83.setCloseOnClick(true);C83.setCloseButton(true);C83.setTitleBar(true);C83.setLayoutManager(C58);C83.iC();C84.setDisplayPosition(1);C84.setTabStop(false);C84.setParent(C83);C84.setTabPosition(1);C84.setHtml("<html><iframe width='100%' height='100%' id='mapcanvas' src='https://maps.google.com/maps?q=2001%20Butterfield%20Road,%20Downers%20Grove,%20IL,%2060515,%20,%20USA&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe></html>");
C84.setHeight(479);C84.setTop(30);C84.setWidth(597);C84.iC();C85.iC();l.WEB().aH("DEVICECHANGED",this,e2);C65.aH("CLICK",this,e6);C66.aH("CLICK",this,e10);C67.aH("CLICK",this,e4);C68.aH("CLICK",this,e5);C69.aH("CHANGED",this,e11);C70.aH("CHANGED",this,e11);C71.aH("CHANGED",this,e11);C72.aH("CHANGED",this,e11);C74.aH("CLICK",this,e3);C79.aH("CLICK",this,e8);C80.aH("CLICK",this,e7);C81.aH("CLICK",this,e9);C82.aH("ONERROR",this,e12);this.setLayoutManager(C13);this.setVerticalScroll(true);this.setDisplayPosition(1);
this.setHeight(857);this.setTabPosition(1);this.setWidth(857);this.setStyle(C2);this.aH("PREPARE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",128);r.ln=128;{r.ln=130;m.LABELADDRESS.set(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat("2001 Butterfield Road",","),l.n.AsUnicodeString(10)),"Downers Grove"),","),l.n.AsUnicodeString(10)),"IL, 60515"),","),l.n.AsUnicodeString(10)),"USA"));r.ln=133;m.DROPDOWNINQUIRYTYPE.getItems().mthADD("GENR","General");
r.ln=134;m.DROPDOWNINQUIRYTYPE.getItems().mthADD("HELP","Help");r.ln=135;m.DROPDOWNINQUIRYTYPE.getItems().mthADD("SALE","Sales & Marketing");r.ln=136;m.DROPDOWNINQUIRYTYPE.getItems().mthADD("SUPP","Support");r.ln=137;m.DROPDOWNINQUIRYTYPE.getItems().mthADD("FEAT","Feature Request");r.ln=139;m.DROPDOWNINQUIRYTYPE.set("GENR");r.ln=141;if(l.b.Not(m.RECAPTCHAVISUALIZED.get())){r.ln=143;m.RECAPTCHA.mthVISUALIZE();r.ln=145;m.RECAPTCHAVISUALIZED.set(true);}}r.ln=149;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",151);
r.ln=151;{r.ln=153;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=155;this.setLayoutManager(m.LAYOUTMOBILE);}else{r.ln=159;this.setLayoutManager(m.LAYOUTDESKTOP);}}r.ln=163;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#ButtonContactUs.Click",165);var C0=r.cDR("CONTACT","CT_SRVM","CONTACTUS");var C1=r.cR("RESULT","PRIM_BOLN");C0.iC();C1.iC();r.ln=165;{r.ln=173;if(cO.mthVALIDATECONTACTDETAILS.call(this)){r.ln=175;this.mthAMIAROBOT();}}r.ln=179;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LabelEmail.Click",181);
var C0=r.cR("QUICKEMAIL","PRIM_STR");C0.iC();r.ln=181;{r.ln=185;C0.set(l.s.Substitute("mailto:&1",m.LABELEMAIL.get()));r.ln=187;l.WEB().mthNAVIGATE(C0.get(),"CURRENT");}r.ln=189;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LabelPhone.Click",191);var C0=r.cR("CALL","PRIM_STR");C0.iC();r.ln=191;{r.ln=194;C0.set(l.s.Substitute("tel:&1",m.LABELPHONE.get()));r.ln=196;l.WEB().mthNAVIGATE(C0.get(),"CURRENT");}r.ln=198;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LabelWebsite.Click",200);
r.ln=200;{r.ln=202;l.WEB().mthNAVIGATE(m.LABELWEBSITE.get(),"NEW");}r.ln=204;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#IconFacebook.Click",206);r.ln=206;{r.ln=208;l.WEB().mthNAVIGATE("https://www.facebook.com/lansasoftware/","NEW");}r.ln=210;r.e();};function e8(sender,Ps){var r=l.eR(this,cO,"#IconTwitter.Click",212);r.ln=212;{r.ln=214;l.WEB().mthNAVIGATE("https://twitter.com/lansa?lang=en","NEW");}r.ln=216;r.e();};function e9(sender,Ps){var r=l.eR(this,cO,"#IconLinkedIn.Click",218);r.ln=218;
{r.ln=220;l.WEB().mthNAVIGATE("https://au.linkedin.com/company/lansa","NEW");}r.ln=222;r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LabelAddress.Click",224);r.ln=224;{r.ln=226;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=228;m.POPUPMAP.setHeight(l.WEB().getWebPage().getHeight());r.ln=229;m.POPUPMAP.setWidth(l.WEB().getWebPage().getWidth());r.ln=230;m.POPUPMAP.mthSHOWPOPUP(0,0,"ABSOLUTE","SLIDEINLEFT",u);}else{r.ln=234;m.POPUPMAP.setHeight(500);r.ln=235;m.POPUPMAP.setWidth(600);
r.ln=236;m.POPUPMAP.mthSHOWPOPUP(u,u,"CENTER","SLIDEINLEFT",u);}}r.ln=240;r.e();};function e11(SENDER,Ps){var r=l.eR(this,cO,"#EditContactName.Changed #EditContactMessage.Changed #EditContactEmail.Changed #EditContactSubject.Changed",243);r.ln=243;{r.ln=245;SENDER.mthCLEARERROR();}r.ln=247;r.e();};function e12(sender,Ps){var r=l.eR(this,cO,"#Recaptcha.OnError",249);var P0=Ps.r("MESSAGE");r.ln=249;{r.ln=251;l.WEB().mthALERT(P0.get());}r.ln=253;r.e();};cO.mthVALIDATECONTACTDETAILS=function(){var m=this.REF,r=l.mR(this,cO,"ValidateContactDetails",260);
var P0=r.cP("CONTINUE","PRIM_BOLN");r.ln=260;{r.ln=263;P0.set(true);r.ln=265;if(l.s.eq(m.EDITCONTACTEMAIL.get(),"")){r.ln=267;m.EDITCONTACTEMAIL.mthSHOWERROR("Email Address must be specified.");r.ln=268;P0.set(false);}else{r.ln=272;if(l.not(l.s.IsValidEmail(m.EDITCONTACTEMAIL.getValue()))){r.ln=274;m.EDITCONTACTEMAIL.mthSHOWERROR("Email Address Supplied is not valid");r.ln=275;P0.set(false);}}r.ln=281;if(l.s.eq(m.EDITCONTACTNAME.get(),"")){r.ln=283;m.EDITCONTACTNAME.mthSHOWERROR("Name must be specified.");
r.ln=284;P0.set(false);}r.ln=288;if(l.s.eq(m.EDITCONTACTMESSAGE.get(),"")){r.ln=290;m.EDITCONTACTMESSAGE.mthSHOWERROR("Message must be specified.");r.ln=291;P0.set(false);}r.ln=295;if(l.s.eq(m.EDITCONTACTSUBJECT.get(),"")){r.ln=297;m.EDITCONTACTSUBJECT.mthSHOWERROR("Subject must be specified.");r.ln=298;P0.set(false);}}r.ln=303;return r.rV(P0.get());};cO.mthAMIAROBOT=function(){var m=this.REF,r=l.mR(this,cO,"AmIaRobot",306),mth=r;var C0=r.cDR("SUBMITDATA","CT_SRVM","VALIDATERECAPTCHA");var C1=r.cR("OK","PRIM_BOLN");
C0.iC();C1.iC();C0.aH("COMPLETED",this,e13);r.ln=306;{r.ln=315;C0.mthEXECUTE({FLD:{"XRECAPTCHARESPONSE":m.RECAPTCHA.getRESPONSE()}},{FLD:{"STD_BOOL":C1}});}r.ln=327;r.e();function e13(sender,Ps){var r=l.eR(this,cO,"#SubmitData.Completed",317,mth);r.ln=317;{r.ln=319;if(l.tB(C1.get())){r.ln=321;this.mthSENDMESSAGE();}}r.ln=325;r.e();}};cO.mthSENDMESSAGE=function(){var m=this.REF,r=l.mR(this,cO,"SendMessage",330);var C0=r.cDR("CONTACT","CT_SRVM","CONTACTUS");var C1=r.cR("RESULT","PRIM_BOLN");C0.iC();
C1.iC();r.ln=330;{r.ln=334;C0.mthEXECUTE({FLD:{"CT_EMAIL":m.EDITCONTACTEMAIL.get(),"CT_NAME":m.EDITCONTACTNAME.get(),"CT_PHONE":m.EDITCONTACTPHONE.get(),"CT_SUBJECT":m.EDITCONTACTSUBJECT.get(),"CT_MESSAGE":m.EDITCONTACTMESSAGE.get(),"CT_INQUIRYTYPE":m.DROPDOWNINQUIRYTYPE.get()}},{FLD:{"CT_RESULT":C1}});r.ln=336;if(l.tB(l.b.eq(C1.get(),true))){r.ln=338;m.EDITCONTACTNAME.set("");m.EDITCONTACTMESSAGE.set("");m.EDITCONTACTEMAIL.set("");m.EDITCONTACTSUBJECT.set("");m.EDITCONTACTPHONE.set("");m.EDITCONTACTMESSAGE.set("");
r.ln=339;m.DROPDOWNINQUIRYTYPE.set("GENR");r.ln=340;{var eP=l.ePs();eP.cR("MESSAGE","PRIM_ALPH");eP.r("MESSAGE").set("Message has been sent");this.fE("MESSAGESTATUS",eP);eP.e();}}else{r.ln=344;{var eP=l.ePs();eP.cR("MESSAGE","PRIM_ALPH");eP.r("MESSAGE").set("Message could not be sent at this time. Please try again later.");this.fE("MESSAGESTATUS",eP);eP.e();}}}r.ln=348;r.e();};},{rc:["XLBA0088"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_VS.ImageBrush","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_MD.Label","PRIM_MD.Edit","PRIM_MD.FlatButton","PRIM_MD.Dropdown","PRIM_MD.Icon","PRIM_PPNL","PRIM_WEB.HtmlContainer","PRIM_BOLN","PRIM_WEB.DataRequest"],
dp:["PRIM_BOLN","PRIM_STR"]});