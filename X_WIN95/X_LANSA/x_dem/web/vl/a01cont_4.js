﻿LANSA.addComponent({id:"A01CONT_4",nm:"A01Contact_Us",ot:"wv",tp:"View",pt:"ap",de:"Contact Us",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{ValidateContactDetails:{}},co:function(){cO.aN.call(this);var C0=this.cR("STYLEHAND","PRIM_VS","Style");var C1=this.cR("STYLEUNDERLINE","PRIM_VS","Style");var C2=this.cR("LAYOUTDESKTOP","PRIM_TBLO");var C3=this.cR("LAYOUTDESKTOPCOLUMN1","PRIM_TBLO","Column");var C4=this.cR("LAYOUTDESKTOPCOLUMN2","PRIM_TBLO","Column");var C5=this.cR("LAYOUTDESKTOPROW","PRIM_TBLO","Row");
var C6=this.cR("LAYOUTDESKTOPROW1","PRIM_TBLO","Row");var C7=this.cR("LAYOUTDESKTOPCONTACTDETAILS","PRIM_TBLO","Item");var C8=this.cR("LAYOUTDESKTOPCONTACTUS","PRIM_TBLO","Item");var C9=this.cR("LAYOUTDESKTOPITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTDESKTOPITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTMOBILE","PRIM_TBLO");var C12=this.cR("LAYOUTMOBILECOLUMN","PRIM_TBLO","Column");var C13=this.cR("LAYOUTMOBILEROW","PRIM_TBLO","Row");var C14=this.cR("LAYOUTMOBILECONTACTDETAILS","PRIM_TBLO","Item");
var C15=this.cR("LAYOUTMOBILECONTACTUS","PRIM_TBLO","Item");var C16=this.cR("LAYOUTMOBILEITEM1","PRIM_TBLO","Item");var C17=this.cR("LAYOUTCONTACTDETAILS","PRIM_TBLO");var C18=this.cR("LAYOUTCONTACTDETAILSCOLUMN1","PRIM_TBLO","Column");var C19=this.cR("LAYOUTCONTACTDETAILSROW1","PRIM_TBLO","Row");var C20=this.cR("LAYOUTCONTACTDETAILSROW2","PRIM_TBLO","Row");var C21=this.cR("LAYOUTCONTACTDETAILSROW3","PRIM_TBLO","Row");var C22=this.cR("LAYOUTCONTACTDETAILSROW4","PRIM_TBLO","Row");var C23=this.cR("LAYOUTCONTACTDETAILSROW5","PRIM_TBLO","Row");
var C24=this.cR("LAYOUTCONTACTDETAILSROW6","PRIM_TBLO","Row");var C25=this.cR("LAYOUTCONTACTDETAILSROW7","PRIM_TBLO","Row");var C26=this.cR("LAYOUTCONTACTDETAILSITEM2","PRIM_TBLO","Item");var C27=this.cR("LAYOUTCONTACTDETAILSITEM3","PRIM_TBLO","Item");var C28=this.cR("LAYOUTCONTACTDETAILSITEM7","PRIM_TBLO","Item");var C29=this.cR("LAYOUTCONTACTDETAILSITEM8","PRIM_TBLO","Item");var C30=this.cR("LAYOUTCONTACTDETAILSITEM9","PRIM_TBLO","Item");var C31=this.cR("LAYOUTCONTACTDETAILSITEM4","PRIM_TBLO","Item");
var C32=this.cR("LAYOUTCONTACTDETAILSITEM1","PRIM_TBLO","Item");var C33=this.cR("LAYOUTCONTACTUS","PRIM_TBLO");var C34=this.cR("LAYOUTCONTACTUSCOLUMN1","PRIM_TBLO","Column");var C35=this.cR("LAYOUTCONTACTUSROW1","PRIM_TBLO","Row");var C36=this.cR("LAYOUTCONTACTUSROW2","PRIM_TBLO","Row");var C37=this.cR("LAYOUTCONTACTUSROW3","PRIM_TBLO","Row");var C38=this.cR("LAYOUTCONTACTUSROW4","PRIM_TBLO","Row");var C39=this.cR("LAYOUTCONTACTUSROW5","PRIM_TBLO","Row");var C40=this.cR("LAYOUTCONTACTUSROW6","PRIM_TBLO","Row");
var C41=this.cR("LAYOUTCONTACTUSROW7","PRIM_TBLO","Row");var C42=this.cR("LAYOUTCONTACTUSROW8","PRIM_TBLO","Row");var C43=this.cR("LAYOUTCONTACTUSITEM1","PRIM_TBLO","Item");var C44=this.cR("LAYOUTCONTACTUSITEM2","PRIM_TBLO","Item");var C45=this.cR("LAYOUTCONTACTUSITEM3","PRIM_TBLO","Item");var C46=this.cR("LAYOUTCONTACTUSITEM4","PRIM_TBLO","Item");var C47=this.cR("LAYOUTCONTACTUSITEM5","PRIM_TBLO","Item");var C48=this.cR("LAYOUTCONTACTUSITEM6","PRIM_TBLO","Item");var C49=this.cR("LAYOUTCONTACTUSITEM7","PRIM_TBLO","Item");
var C50=this.cR("LAYOUTMAPS","PRIM_TBLO");var C51=this.cR("LAYOUTMAPSROW1","PRIM_TBLO","Row");var C52=this.cR("LAYOUTMAPSCOLUMN1","PRIM_TBLO","Column");var C53=this.cR("LAYOUTMAPSITEM1","PRIM_TBLO","Item");var C54=this.cR("LAYOUTCONTACTDETAILSITEM5","PRIM_TBLO","Item");var C55=this.cR("PANELCONTACTDETAILS","PRIM_PANL");var C56=this.cR("PANELCONTACTUS","PRIM_PANL");var C57=this.cR("PANELMAP","PRIM_PANL");var C58=this.cR("TEXTCONTACTUS","PRIM_MD","Label");var C59=this.cR("TEXTCONTACTDETAILS","PRIM_MD","Label");
var C60=this.cR("A01COMPANYNAME","PRIM_MD","Label");var C61=this.cR("WEBSITE","PRIM_MD","Label");var C62=this.cR("A01ADDRESS","PRIM_MD","Label");var C63=this.cR("A01EMAIL","PRIM_MD","Label");var C64=this.cR("A01PHONE","PRIM_MD","Label");var C65=this.cR("A01FAX","PRIM_MD","Label");var C66=this.cR("A01CONTACTNAME","PRIM_MD","Edit");var C67=this.cR("A01CONTACTEMAIL","PRIM_MD","Edit");var C68=this.cR("A01CONTACTSUBJECT","PRIM_MD","Edit");var C69=this.cR("A01CONTACTMESSAGE","PRIM_MD","Edit");var C70=this.cR("A01CONTACTPHONE","PRIM_MD","Edit");
var C71=this.cR("BUTTONCONTACTUS","PRIM_MD","FlatButton");var C72=this.cR("MAP","PRIM_WEB","HtmlContainer");C0.setCursor("HAND");C0.iC();C1.setUnderline(true);C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.setWidth(8);C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.setWidth(8);C4.iC();C5.setDisplayPosition(1);C5.setParent(C2);C5.setHeight(358);C5.setUnits("CONTENT");C5.iC();C6.setDisplayPosition(2);C6.setParent(C2);C6.iC();C7.setAlignment("TOPLEFT");C7.setColumn(C3);C7.setManage(C55);
C7.setParent(C2);C7.setRow(C5);C7.setSizing("CONTENTHEIGHTFITTOWIDTH");C7.setMarginRight(8);C7.setMarginLeft(16);C7.setMarginTop(16);C7.iC();C8.setAlignment("TOPCENTER");C8.setColumn(C4);C8.setManage(C56);C8.setParent(C2);C8.setRow(C5);C8.setRowSpan(2);C8.setMarginLeft(8);C8.setMarginBottom(16);C8.setMarginRight(16);C8.setMarginTop(16);C8.iC();C9.setAlignment("TOPCENTER");C9.setColumn(C3);C9.setManage(this);C9.setParent(C2);C9.setRow(C6);C9.setMarginBottom(6);C9.setMarginLeft(12);C9.setMarginRight(6);
C9.setMarginTop(6);C9.iC();C10.setAlignment("TOPCENTER");C10.setColumn(C3);C10.setManage(C57);C10.setParent(C2);C10.setRow(C6);C10.setMarginTop(16);C10.setMarginBottom(16);C10.setMarginLeft(16);C10.setMarginRight(8);C10.iC();C11.setSizing("CONTENTHEIGHT");C11.iC();C12.setParent(C11);C12.setDisplayPosition(1);C12.iC();C13.setParent(C11);C13.setDisplayPosition(1);C13.iC();C14.setParent(C11);C14.setRow(C13);C14.setColumn(C12);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.setFlow("DOWN");C14.setManage(C55);
C14.setAlignment("TOPCENTER");C14.setMarginTop(4);C14.iC();C15.setParent(C11);C15.setRow(C13);C15.setColumn(C12);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setManage(C56);C15.setFlow("DOWN");C15.setAlignment("TOPCENTER");C15.setMarginTop(4);C15.iC();C16.setAlignment("TOPCENTER");C16.setColumn(C12);C16.setManage(C57);C16.setParent(C11);C16.setRow(C13);C16.setSizing("FITTOWIDTH");C16.setFlow("DOWN");C16.setMarginTop(4);C16.iC();C17.iC();C18.setDisplayPosition(1);C18.setParent(C17);C18.iC();C19.setDisplayPosition(1);
C19.setParent(C17);C19.setUnits("PIXELS");C19.setHeight(84);C19.iC();C20.setDisplayPosition(2);C20.setParent(C17);C20.setHeight(51);C20.setUnits("CONTENT");C20.iC();C21.setDisplayPosition(4);C21.setParent(C17);C21.setHeight(33);C21.setUnits("CONTENT");C21.iC();C22.setDisplayPosition(5);C22.setParent(C17);C22.setHeight(40);C22.setUnits("CONTENT");C22.iC();C23.setDisplayPosition(6);C23.setParent(C17);C23.setHeight(40);C23.setUnits("CONTENT");C23.iC();C24.setDisplayPosition(7);C24.setParent(C17);C24.setHeight(56);
C24.setUnits("CONTENT");C24.iC();C25.setDisplayPosition(3);C25.setParent(C17);C25.setHeight(40);C25.setUnits("CONTENT");C25.iC();C26.setAlignment("CENTERLEFT");C26.setColumn(C18);C26.setManage(C60);C26.setParent(C17);C26.setRow(C20);C26.setSizing("CONTENTHEIGHTFITTOWIDTH");C26.setFlow("DOWN");C26.setMarginLeft(58);C26.setMarginRight(10);C26.setColumnSpan(2);C26.iC();C27.setAlignment("TOPLEFT");C27.setColumn(C18);C27.setManage(C62);C27.setParent(C17);C27.setRow(C21);C27.setSizing("CONTENTHEIGHTFITTOWIDTH");
C27.setFlow("DOWN");C27.setMarginLeft(58);C27.setMarginRight(10);C27.iC();C28.setAlignment("TOPLEFT");C28.setColumn(C18);C28.setManage(C63);C28.setParent(C17);C28.setRow(C24);C28.setSizing("CONTENTHEIGHTFITTOWIDTH");C28.setFlow("DOWN");C28.setMarginRight(10);C28.iC();C29.setAlignment("TOPLEFT");C29.setColumn(C18);C29.setManage(C65);C29.setParent(C17);C29.setRow(C23);C29.setSizing("CONTENTHEIGHTFITTOWIDTH");C29.setFlow("DOWN");C29.setMarginRight(10);C29.iC();C30.setAlignment("TOPLEFT");C30.setColumn(C18);
C30.setManage(C64);C30.setParent(C17);C30.setRow(C22);C30.setSizing("CONTENTHEIGHTFITTOWIDTH");C30.setFlow("DOWN");C30.setMarginRight(10);C30.iC();C31.setColumn(C18);C31.setParent(C17);C31.setRow(C19);C31.setMarginTop(6);C31.setSizing("FITTOWIDTH");C31.iC();C32.setColumn(C18);C32.setManage(C59);C32.setParent(C17);C32.setRow(C19);C32.iC();C33.setMarginBottom(12);C33.iC();C34.setDisplayPosition(1);C34.setParent(C33);C34.iC();C35.setDisplayPosition(1);C35.setParent(C33);C35.setUnits("PIXELS");C35.setHeight(84);
C35.iC();C36.setDisplayPosition(2);C36.setParent(C33);C36.setHeight(15);C36.setUnits("PIXELS");C36.iC();C37.setDisplayPosition(3);C37.setParent(C33);C37.setHeight(75);C37.setUnits("PIXELS");C37.iC();C38.setDisplayPosition(4);C38.setParent(C33);C38.setHeight(75);C38.setUnits("PIXELS");C38.iC();C39.setDisplayPosition(5);C39.setParent(C33);C39.setHeight(75);C39.setUnits("PIXELS");C39.iC();C40.setDisplayPosition(6);C40.setParent(C33);C40.setHeight(75);C40.setUnits("PIXELS");C40.iC();C41.setDisplayPosition(7);
C41.setParent(C33);C41.setMinHeight(160);C41.iC();C42.setDisplayPosition(8);C42.setParent(C33);C42.setHeight(60);C42.setUnits("PIXELS");C42.iC();C43.setColumn(C34);C43.setManage(C58);C43.setParent(C33);C43.setRow(C35);C43.iC();C44.setAlignment("TOPLEFT");C44.setColumn(C34);C44.setManage(C66);C44.setParent(C33);C44.setRow(C37);C44.setFlow("DOWN");C44.setMarginLeft(16);C44.setMarginRight(10);C44.setMarginBottom(8);C44.iC();C45.setAlignment("TOPLEFT");C45.setColumn(C34);C45.setManage(C70);C45.setParent(C33);
C45.setRow(C38);C45.setFlow("DOWN");C45.setMarginLeft(16);C45.setMarginRight(10);C45.setMarginBottom(8);C45.iC();C46.setAlignment("TOPLEFT");C46.setColumn(C34);C46.setManage(C67);C46.setParent(C33);C46.setRow(C39);C46.setFlow("DOWN");C46.setMarginLeft(16);C46.setMarginRight(10);C46.setMarginBottom(8);C46.iC();C47.setAlignment("TOPLEFT");C47.setColumn(C34);C47.setManage(C68);C47.setParent(C33);C47.setRow(C39);C47.setFlow("DOWN");C47.setMarginLeft(16);C47.setMarginRight(10);C47.setMarginBottom(8);C47.iC();
C48.setAlignment("TOPLEFT");C48.setColumn(C34);C48.setManage(C69);C48.setParent(C33);C48.setRow(C41);C48.setFlow("DOWN");C48.setMarginLeft(16);C48.setMarginRight(10);C48.iC();C49.setColumn(C34);C49.setManage(C71);C49.setParent(C33);C49.setRow(C42);C49.setSizing("FITTOWIDTH");C49.setFlow("DOWN");C49.setMarginLeft(18);C49.setMarginRight(10);C49.iC();C50.iC();C51.setDisplayPosition(1);C51.setParent(C50);C51.iC();C52.setDisplayPosition(1);C52.setParent(C50);C52.iC();C53.setAlignment("TOPCENTER");C53.setColumn(C52);
C53.setManage(C72);C53.setParent(C50);C53.setRow(C51);C53.iC();C54.setAlignment("TOPLEFT");C54.setColumn(C18);C54.setManage(C61);C54.setParent(C17);C54.setRow(C25);C54.setSizing("CONTENTHEIGHTFITTOWIDTH");C54.setFlow("DOWN");C54.setMarginRight(10);C54.iC();C55.setDisplayPosition(1);C55.setHeight(346);C55.setParent(this);C55.setTabPosition(1);C55.setTabStop(false);C55.setWidth(405);C55.setLayoutManager(C17);C55.setThemeDrawStyle("Card+Shadow2");C55.setTop(16);C55.setLeft(16);C55.iC();C56.setDisplayPosition(3);
C56.setHeight(601);C56.setLeft(437);C56.setParent(this);C56.setTabPosition(3);C56.setTabStop(false);C56.setTop(16);C56.setWidth(404);C56.setLayoutManager(C33);C56.setThemeDrawStyle("Shadow2+Card");C56.iC();C57.setDisplayPosition(2);C57.setLeft(16);C57.setParent(this);C57.setTabPosition(2);C57.setTabStop(false);C57.setTop(378);C57.setHeight(239);C57.setWidth(405);C57.setThemeDrawStyle("Card+Shadow2");C57.setLayoutManager(C50);C57.iC();C58.setCaption("Contact Us");C58.setDisplayPosition(7);C58.setLeft(0);
C58.setParent(C56);C58.setTabPosition(6);C58.setThemeDrawStyle("ForegroundTheme700+Heading2+MediumTitle");C58.setTop(0);C58.setWidth(402);C58.setIcon("send");C58.setIconAlignment("ABOVECAPTION");C58.setIconHeight(48);C58.setHeight(84);C58.setCaptionAlignment("CENTER");C58.setCaptionMarginTop(0);C58.setCaptionMarginBottom(8);C58.iC();C59.setCaption("Contact Details");C59.setDisplayPosition(6);C59.setLeft(0);C59.setParent(C55);C59.setTabPosition(7);C59.setThemeDrawStyle("ForegroundTheme700+Heading2+MediumTitle");
C59.setTop(0);C59.setWidth(403);C59.setCaptionAlignment("CENTER");C59.setIcon("contact_phone");C59.setIconAlignment("ABOVECAPTION");C59.setHeight(84);C59.setIconHeight(48);C59.setCaptionMarginBottom(8);C59.setCaptionMarginTop(0);C59.iC();C60.setCaption("LANSA");C60.setDisplayPosition(1);C60.setParent(C55);C60.setTabPosition(6);C60.setWidth(335);C60.setHeight(51);C60.setThemeDrawStyle("ForegroundDarkPrimary+Heading1");C60.setIconThemeDrawStyle("ForegroundSecondary");C60.setLeft(58);C60.setTop(84);
C60.setCaptionMarginBottom(8);C60.setCaptionMarginTop(16);C60.setCaptionMarginLeft(0);C60.iC();C61.setCaption("https://developer.lansa.com");C61.setDisplayPosition(7);C61.setParent(C55);C61.setTabPosition(3);C61.setTop(135);C61.setWidth(393);C61.setHeight(40);C61.setLeft(0);C61.setIconThemeDrawStyle("ForegroundSecondary");C61.setIcon("link");C61.setIconMarginRight(16);C61.setIconColor("THEME700");C61.setIconOpacity(70);C61.setCaptionMarginBottom(0);C61.setCaptionMarginLeft(0);C61.setCaptionMarginRight(0);
C61.setPaddingBottom(8);C61.setPaddingLeft(2);C61.setPaddingRight(2);C61.setPaddingTop(8);C61.setStyle(C0);C61.setMouseOverStyle(C1);C61.setCaptionMarginTop(0);C61.setIconMarginLeft(16);C61.iC();C62.setCaption("My Address");C62.setDisplayPosition(2);C62.setParent(C55);C62.setTabPosition(5);C62.setTop(175);C62.setWidth(335);C62.setIconThemeDrawStyle("ForegroundSecondary");C62.setLeft(58);C62.setIconMarginRight(16);C62.setIconColor("THEME700");C62.setIconOpacity(60);C62.setCaptionMarginBottom(0);C62.setCaptionMarginTop(0);
C62.setCaptionAlignment("TOPLEFT");C62.setCaptionMarginRight(0);C62.setCaptionMarginLeft(0);C62.setPaddingBottom(8);C62.setPaddingLeft(2);C62.setPaddingRight(2);C62.setPaddingTop(8);C62.setHeight(33);C62.iC();C63.setCaption("MyEmail@MyDomain.com");C63.setDisplayPosition(3);C63.setParent(C55);C63.setTabPosition(1);C63.setTop(288);C63.setWidth(393);C63.setHeight(56);C63.setLeft(0);C63.setIconThemeDrawStyle("ForegroundSecondary");C63.setIcon("email");C63.setIconMarginRight(16);C63.setIconColor("THEME700");
C63.setIconOpacity(70);C63.setCaptionMarginBottom(0);C63.setCaptionMarginLeft(0);C63.setCaptionMarginRight(0);C63.setPaddingBottom(24);C63.setPaddingLeft(2);C63.setPaddingRight(2);C63.setPaddingTop(8);C63.setStyle(C0);C63.setMouseOverStyle(C1);C63.setCaptionMarginTop(0);C63.setIconMarginLeft(16);C63.iC();C64.setCaption("+1 630 874 7000");C64.setDisplayPosition(5);C64.setParent(C55);C64.setTabPosition(4);C64.setTop(208);C64.setWidth(393);C64.setHeight(40);C64.setLeft(0);C64.setIconThemeDrawStyle("ForegroundSecondary");
C64.setIcon("phone");C64.setIconMarginRight(16);C64.setIconColor("THEME700");C64.setIconOpacity(70);C64.setCaptionMarginBottom(0);C64.setCaptionMarginLeft(0);C64.setCaptionMarginRight(0);C64.setPaddingBottom(8);C64.setPaddingLeft(2);C64.setPaddingRight(2);C64.setPaddingTop(8);C64.setStyle(C0);C64.setMouseOverStyle(C1);C64.setCaptionMarginTop(0);C64.setIconMarginLeft(16);C64.iC();C65.setCaption("+1 630 874 7000");C65.setDisplayPosition(4);C65.setParent(C55);C65.setTabPosition(2);C65.setTop(248);C65.setWidth(393);
C65.setHeight(40);C65.setLeft(0);C65.setIconThemeDrawStyle("ForegroundSecondary");C65.setIcon("fa-fax");C65.setIconMarginRight(16);C65.setIconColor("THEME700");C65.setIconOpacity(70);C65.setCaptionMarginBottom(0);C65.setCaptionMarginLeft(0);C65.setCaptionMarginRight(0);C65.setPaddingBottom(8);C65.setPaddingLeft(2);C65.setPaddingRight(2);C65.setPaddingTop(8);C65.setCaptionMarginTop(0);C65.setIconMarginLeft(16);C65.iC();C66.setCaption("Your Name");C66.setDisplayPosition(1);C66.setParent(C56);C66.setTabPosition(1);
C66.setTop(84);C66.setWidth(376);C66.setIconThemeDrawStyle("ForegroundSecondary");C66.setLeft(16);C66.setIconHeight(16);C66.setCaptionColor("THEME700");C66.setHeight(67);C66.iC();C67.setCaption("Your Email");C67.setDisplayPosition(3);C67.setParent(C56);C67.setTabPosition(3);C67.setTop(234);C67.setWidth(376);C67.setIconThemeDrawStyle("ForegroundSecondary");C67.setLeft(16);C67.setIconHeight(16);C67.setCaptionColor("THEME700");C67.setHeight(67);C67.iC();C68.setCaption("Subject");C68.setDisplayPosition(4);
C68.setParent(C56);C68.setTabPosition(4);C68.setTop(309);C68.setWidth(376);C68.setIconThemeDrawStyle("ForegroundSecondary");C68.setLeft(16);C68.setIconHeight(16);C68.setCaptionColor("THEME700");C68.setHeight(67);C68.iC();C69.setAppearance("TEXTFIELDAREABOX");C69.setCaption("Message");C69.setDisplayPosition(5);C69.setHeight(160);C69.setMultiLine(true);C69.setParent(C56);C69.setTabPosition(5);C69.setTop(384);C69.setWidth(376);C69.setIconThemeDrawStyle("ForegroundSecondary");C69.setLeft(16);C69.setIconHeight(16);
C69.iC();C70.setCaption("Your Phone");C70.setDisplayPosition(2);C70.setParent(C56);C70.setTabPosition(2);C70.setTop(159);C70.setWidth(376);C70.setIconThemeDrawStyle("ForegroundSecondary");C70.setLeft(16);C70.setIconHeight(16);C70.setCaptionColor("THEME700");C70.setHeight(67);C70.iC();C71.setCaption("Send");C71.setDisplayPosition(6);C71.setParent(C56);C71.setTabPosition(7);C71.setThemeDrawStyle("Borders1+BorderTheme500+ForegroundMediumPrimary");C71.setTop(556);C71.setWidth(374);C71.setLeft(18);C71.iC();
C72.setParent(C57);C72.setDisplayPosition(1);C72.setTabPosition(1);C72.setTabStop(false);C72.setHeight(237);C72.setWidth(403);C72.iC();l.WEB().aH("DEVICECHANGED",this,e2);C61.aH("CLICK",this,e6);C63.aH("CLICK",this,e4);C64.aH("CLICK",this,e5);C66.aH("CHANGED",this,e7);C67.aH("CHANGED",this,e7);C68.aH("CHANGED",this,e7);C69.aH("CHANGED",this,e7);C71.aH("CLICK",this,e3);this.setLayoutManager(C2);this.setVerticalScroll(true);this.setDisplayPosition(1);this.setHeight(633);this.setTabPosition(1);this.setWidth(857);
this.aH("PREPARE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",101);r.ln=101;{r.ln=103;m.A01ADDRESS.set(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat("2001 Butterfield Road",","),l.n.AsUnicodeString(10)),"Downers Grove"),","),l.n.AsUnicodeString(10)),"IL, 60515"),","),l.n.AsUnicodeString(10)),"USA"));r.ln=105;m.MAP.setHtml("<html><iframe width='100%' height='100%' id='mapcanvas' src='https://maps.google.com/maps?q=2001%20Butterfield%20Road,%20Downers%20Grove,%20IL,%2060515,%20,%20USA&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe></html>");
}r.ln=107;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",109);r.ln=109;{r.ln=111;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=113;this.setLayoutManager(m.LAYOUTMOBILE);r.ln=114;m.LAYOUTCONTACTUSROW7.setHeight(200);m.LAYOUTCONTACTUSROW7.setUnits("PIXELS");}else{r.ln=118;this.setLayoutManager(m.LAYOUTDESKTOP);r.ln=119;m.LAYOUTCONTACTUSITEM6.setAlignment("TOPLEFT");m.LAYOUTCONTACTUSITEM6.setColumn(m.LAYOUTCONTACTUSCOLUMN1);m.LAYOUTCONTACTUSITEM6.setManage(m.A01CONTACTMESSAGE);
m.LAYOUTCONTACTUSITEM6.setParent(m.LAYOUTCONTACTUS);m.LAYOUTCONTACTUSITEM6.setRow(m.LAYOUTCONTACTUSROW7);m.LAYOUTCONTACTUSITEM6.setFlow("DOWN");m.LAYOUTCONTACTUSITEM6.setMarginLeft(16);m.LAYOUTCONTACTUSITEM6.setMarginRight(10);r.ln=120;m.LAYOUTCONTACTUSROW7.setHeight(1);m.LAYOUTCONTACTUSROW7.setUnits("PROPORTION");}}r.ln=124;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ButtonContactUs.Click",126);var C0=r.cDR("SUBMIT","A01CONT_5","SUMBITFORM");var C1=r.cR("RESULT","PRIM_BOLN");C0.iC();
C1.iC();r.ln=126;{r.ln=131;if(cO.mthVALIDATECONTACTDETAILS.call(this)){r.ln=133;C0.mthEXECUTE({FLD:{"A01EMAIL":m.A01CONTACTEMAIL.get(),"A01NAME":m.A01CONTACTNAME.get(),"A01PHONE":m.A01CONTACTPHONE.get(),"A01SUBJECT":m.A01CONTACTSUBJECT.get(),"A01MESSAGE":m.A01CONTACTMESSAGE.get()}},{FLD:{"A01RESULT":C1}});r.ln=135;if(l.tB(l.b.eq(C1.get(),true))){r.ln=137;m.A01CONTACTNAME.set("");m.A01CONTACTMESSAGE.set("");m.A01CONTACTEMAIL.set("");m.A01CONTACTSUBJECT.set("");m.A01CONTACTPHONE.set("");m.A01CONTACTMESSAGE.set("");
r.ln=139;l.WEB().mthALERT("Message has been submitted");}else{r.ln=143;l.WEB().mthALERT("Message could not be submitted at this time please try again later.");}}}r.ln=149;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#A01Email.Click",151);var C0=r.cR("QUICKEMAIL","PRIM_STR");C0.iC();r.ln=151;{r.ln=155;C0.set(l.s.Substitute("mailto:&1",m.A01EMAIL.get()));r.ln=157;l.WEB().mthNAVIGATE(C0.get(),"CURRENT");}r.ln=159;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#A01Phone.Click",161);
var C0=r.cR("CALL","PRIM_STR");C0.iC();r.ln=161;{r.ln=164;C0.set(l.s.Substitute("tel:&1",m.A01PHONE.get()));r.ln=166;l.WEB().mthNAVIGATE(C0.get(),"CURRENT");}r.ln=168;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Website.Click",170);r.ln=170;{r.ln=172;l.WEB().mthNAVIGATE(m.WEBSITE.get(),"NEW");}r.ln=174;r.e();};cO.mthVALIDATECONTACTDETAILS=function(){var m=this.REF,r=l.mR(this,cO,"ValidateContactDetails",180);var P0=r.cP("CONTINUE","PRIM_BOLN");r.ln=180;{r.ln=183;P0.set(true);r.ln=185;
if(l.s.eq(m.A01CONTACTEMAIL.get(),"")){r.ln=187;m.A01CONTACTEMAIL.mthSHOWERROR("Email Address must be specified.");r.ln=188;P0.set(false);}else{r.ln=192;if(l.not(l.s.IsValidEmail(m.A01CONTACTEMAIL.getValue()))){r.ln=194;m.A01CONTACTEMAIL.mthSHOWERROR("Email Address Supplied is not valid");r.ln=195;P0.set(false);}}r.ln=201;if(l.s.eq(m.A01CONTACTNAME.get(),"")){r.ln=203;m.A01CONTACTNAME.mthSHOWERROR("Name must be specified.");r.ln=204;P0.set(false);}r.ln=208;if(l.s.eq(m.A01CONTACTMESSAGE.get(),""))
{r.ln=210;m.A01CONTACTMESSAGE.mthSHOWERROR("Message must be specified.");r.ln=211;P0.set(false);}r.ln=215;if(l.s.eq(m.A01CONTACTSUBJECT.get(),"")){r.ln=217;m.A01CONTACTSUBJECT.mthSHOWERROR("Subject must be specified.");r.ln=218;P0.set(false);}}r.ln=222;return r.rV(P0.get());};function e7(SENDER,Ps){var r=l.eR(this,cO,"#A01ContactName.Changed #A01ContactMessage.Changed #A01ContactEmail.Changed #A01ContactSubject.Changed",224);r.ln=224;{r.ln=226;SENDER.mthCLEARERROR();}r.ln=228;r.e();};},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_MD.Label","PRIM_MD.Edit","PRIM_MD.FlatButton","PRIM_WEB.HtmlContainer","PRIM_WEB.DataRequest"],
dp:["PRIM_BOLN","PRIM_STR"]});