﻿LANSA.addComponent({id:"TK_CONTCT",nm:"TK_ContactUs",ot:"wv",tp:"View",pt:"ap",de:"Tasks Cpntact Us",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{ValidateFields:{},SendMessage:{}},ev:{MessageSent:{ps:{"Message":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("LAYOUTMAINDESKTOP","PRIM_TBLO");var C2=this.cR("LAYOUTMAINDESKTOPCOLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUTMAINDESKTOPCOLUMN2","PRIM_TBLO","Column");var C4=this.cR("LAYOUTMAINDESKTOPCOLUMN3","PRIM_TBLO","Column");
var C5=this.cR("LAYOUTMAINDESKTOPROW1","PRIM_TBLO","Row");var C6=this.cR("LAYOUTMAINDESKTOPROW2","PRIM_TBLO","Row");var C7=this.cR("LAYOUTMAINDESKTOPTROW3","PRIM_TBLO","Row");var C8=this.cR("LAYOUTMAINDESKTOPITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTMAINMOBILE","PRIM_TBLO");var C10=this.cR("LAYOUTMAINMOBILECOLUMN","PRIM_TBLO","Column");var C11=this.cR("LAYOUTMAINMOBILEROW","PRIM_TBLO","Row");var C12=this.cR("LAYOUTMAINMOBILEITEM1","PRIM_TBLO","Item");var C13=this.cR("LAYOUTPANELBASEDESKTOP","PRIM_TBLO");
var C14=this.cR("LAYOUTPANELBASEDESKTOPCOLUMN1","PRIM_TBLO","Column");var C15=this.cR("LAYOUTPANELBASEDESKTOPCOLUMN2","PRIM_TBLO","Column");var C16=this.cR("LAYOUTPANELBASEDESKTOPROW1","PRIM_TBLO","Row");var C17=this.cR("LAYOUTPANELBASEDESKTOPITEM1","PRIM_TBLO","Item");var C18=this.cR("LAYOUTPANELBASEDESKTOPITEM2","PRIM_TBLO","Item");var C19=this.cR("LAYOUTPANELBASEDESKTOPITEM3","PRIM_TBLO","Item");var C20=this.cR("LAYOUTPANELBASEDESKTOPITEM4","PRIM_TBLO","Item");var C21=this.cR("LAYOUTPANELBASEMOBILE","PRIM_TBLO");
var C22=this.cR("LAYOUTPANELBASEMOBILECOLUMN","PRIM_TBLO","Column");var C23=this.cR("LAYOUTPANELBASEMOBILEROW","PRIM_TBLO","Row");var C24=this.cR("LAYOUTPANELBASEMOBILEITEM1","PRIM_TBLO","Item");var C25=this.cR("LAYOUTPANELBASEMOBILEITEM2","PRIM_TBLO","Item");var C26=this.cR("LAYOUTPANELBASEMOBILEITEM3","PRIM_TBLO","Item");var C27=this.cR("LAYOUTPANELBASEMOBILEITEM4","PRIM_TBLO","Item");var C28=this.cR("LAYOUTACTIONBUTTONS","PRIM_TBLO");var C29=this.cR("LAYOUTACTIONBUTTONSCOLUMN1","PRIM_TBLO","Column");
var C30=this.cR("LAYOUTACTIONBUTTONSCOLUMN2","PRIM_TBLO","Column");var C31=this.cR("LAYOUTACTIONBUTTONSCOLUMN3","PRIM_TBLO","Column");var C32=this.cR("LAYOUTACTIONBUTTONSCOLUMN4","PRIM_TBLO","Column");var C33=this.cR("LAYOUTACTIONBUTTONSCOLUMN5","PRIM_TBLO","Column");var C34=this.cR("LAYOUTACTIONBUTTONSROW1","PRIM_TBLO","Row");var C35=this.cR("LAYOUTACTIONBUTTONSROW2","PRIM_TBLO","Row");var C36=this.cR("LAYOUTACTIONBUTTONSITEM1","PRIM_TBLO","Item");var C37=this.cR("LAYOUTACTIONBUTTONSITEM2","PRIM_TBLO","Item");
var C38=this.cR("LAYOUTACTIONBUTTONSITEM3","PRIM_TBLO","Item");var C39=this.cR("LAYOUTACTIONBUTTONSITEM4","PRIM_TBLO","Item");var C40=this.cR("LAYOUTACTIONBUTTONSITEM5","PRIM_TBLO","Item");var C41=this.cR("LAYOUTACTIONBUTTONSITEM6","PRIM_TBLO","Item");var C42=this.cR("LAYOUTCONTACTUSPANEL","PRIM_TBLO");var C43=this.cR("LAYOUTCONTACTUSPANELROW1","PRIM_TBLO","Row");var C44=this.cR("LAYOUTCONTACTUSPANELCOLUMN1","PRIM_TBLO","Column");var C45=this.cR("LAYOUTCONTACTUSPANELROW2","PRIM_TBLO","Row");var C46=this.cR("LAYOUTCONTACTUSPANELROW3","PRIM_TBLO","Row");
var C47=this.cR("LAYOUTCONTACTUSPANELITEM1","PRIM_TBLO","Item");var C48=this.cR("LAYOUTCONTACTUSPANELITEM2","PRIM_TBLO","Item");var C49=this.cR("LAYOUTCONTACTUSPANELITEM3","PRIM_TBLO","Item");var C50=this.cR("LAYOUTCONTACTUSPANELITEM4","PRIM_TBLO","Item");var C51=this.cR("LAYOUTCONTACTUSPANELITEM5","PRIM_TBLO","Item");var C52=this.cR("LAYOUTCONTACTUSPANELITEM6","PRIM_TBLO","Item");var C53=this.cR("PANELBASE","PRIM_PANL");var C54=this.cR("PANELCONTACTUS","PRIM_PANL");var C55=this.cR("MAP","PRIM_WEB","HtmlContainer");
var C56=this.cR("PANELACTIONBUTTONS","PRIM_PANL");var C57=this.cR("BUTTONWEBSITE","PRIM_MD","ActionButton");var C58=this.cR("BUTTONPHONE","PRIM_MD","ActionButton");var C59=this.cR("BUTTONEMAIL","PRIM_MD","ActionButton");var C60=this.cR("TEXTWEBSITE","PRIM_MD","Label");var C61=this.cR("TEXTPHONE","PRIM_MD","Label");var C62=this.cR("TEXTEMAIL","PRIM_MD","Label");var C63=this.cR("HEADING","PRIM_MD","Label");var C64=this.cR("EDITNAME","PRIM_MD","Edit");var C65=this.cR("EDITEMAIL","PRIM_MD","Edit");var C66=this.cR("EDITSUBJECT","PRIM_MD","Edit");
var C67=this.cR("EDITMESSAGE","PRIM_MD","Edit");var C68=this.cR("TEXTBLURB","PRIM_MD","Label");var C69=this.cR("BUTTONSEND","PRIM_MD","RaisedButton");C0.setCursor("HAND");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.setWidth(20);C3.setMaxWidth(1200);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.iC();C5.setDisplayPosition(1);C5.setParent(C1);C5.iC();C6.setDisplayPosition(2);C6.setParent(C1);C6.setHeight(629);C6.setMaxHeight(900);
C6.setUnits("CONTENT");C6.iC();C7.setDisplayPosition(3);C7.setParent(C1);C7.iC();C8.setAlignment("TOPCENTER");C8.setColumn(C3);C8.setManage(C53);C8.setParent(C1);C8.setRow(C6);C8.setSizing("CONTENTHEIGHTFITTOWIDTH");C8.setMarginBottom(3);C8.iC();C9.iC();C10.setParent(C9);C10.setDisplayPosition(1);C10.iC();C11.setParent(C9);C11.setDisplayPosition(1);C11.iC();C12.setAlignment("TOPCENTER");C12.setColumn(C10);C12.setManage(C53);C12.setParent(C9);C12.setRow(C11);C12.setMarginBottom(4);C12.setMarginLeft(4);
C12.setMarginRight(4);C12.setMarginTop(4);C12.iC();C13.iC();C14.setDisplayPosition(1);C14.setParent(C13);C14.setMaxWidth(496);C14.setMinWidth(320);C14.setWidth(15);C14.iC();C15.setDisplayPosition(2);C15.setParent(C13);C15.setWidth(10);C15.iC();C16.setDisplayPosition(1);C16.setParent(C13);C16.setHeight(611);C16.setUnits("CONTENT");C16.setMinHeight(632);C16.iC();C17.setManage(C55);C17.setParent(C13);C17.setRow(C16);C17.setColumn(C15);C17.setMarginLeft(16);C17.setMarginRight(16);C17.setAlignment("TOPCENTER");
C17.setFlow("DOWN");C17.setSizing("FITTOWIDTH");C17.setMarginTop(29);C17.iC();C18.setAlignment("TOPCENTER");C18.setColumn(C14);C18.setManage(C54);C18.setParent(C13);C18.setRow(C16);C18.setMarginBottom(16);C18.setMarginLeft(16);C18.setMarginRight(16);C18.setSizing("CONTENTHEIGHTFITTOWIDTH");C18.setFlow("DOWN");C18.setMarginTop(-49);C18.iC();C19.setAlignment("TOPCENTER");C19.setColumn(C15);C19.setManage(C56);C19.setParent(C13);C19.setRow(C16);C19.setSizing("CONTENTHEIGHTFITTOWIDTH");C19.setFlow("DOWN");
C19.setMarginTop(36);C19.iC();C20.setAlignment("TOPCENTER");C20.setColumn(C14);C20.setManage(C63);C20.setParent(C13);C20.setRow(C16);C20.setSizing("FITTOWIDTH");C20.setMarginLeft(40);C20.setMarginRight(40);C20.setMarginTop(4);C20.setFlow("DOWN");C20.iC();C21.iC();C22.setParent(C21);C22.setDisplayPosition(1);C22.iC();C23.setParent(C21);C23.setDisplayPosition(1);C23.iC();C24.setAlignment("TOPCENTER");C24.setColumn(C22);C24.setManage(C54);C24.setParent(C21);C24.setRow(C23);C24.setSizing("FITTOWIDTH");
C24.setFlow("DOWN");C24.setMarginTop(-49);C24.iC();C25.setAlignment("TOPCENTER");C25.setColumn(C22);C25.setManage(C63);C25.setParent(C21);C25.setRow(C23);C25.setSizing("FITTOWIDTH");C25.setFlow("DOWN");C25.setMarginTop(8);C25.setMarginLeft(32);C25.setMarginRight(32);C25.iC();C26.setAlignment("TOPCENTER");C26.setColumn(C22);C26.setManage(C55);C26.setParent(C21);C26.setRow(C23);C26.setSizing("FITTOWIDTH");C26.setFlow("DOWN");C26.setMarginTop(16);C26.iC();C27.setAlignment("TOPCENTER");C27.setColumn(C22);
C27.setManage(C56);C27.setParent(C21);C27.setRow(C23);C27.setSizing("FITTOWIDTH");C27.setFlow("DOWN");C27.setMarginTop(32);C27.iC();C28.iC();C29.setDisplayPosition(2);C29.setParent(C28);C29.setMinWidth(80);C29.setMaxWidth(160);C29.setWidth(2);C29.iC();C30.setDisplayPosition(3);C30.setParent(C28);C30.setMinWidth(80);C30.setMaxWidth(160);C30.setWidth(2);C30.iC();C31.setDisplayPosition(4);C31.setParent(C28);C31.setMinWidth(80);C31.setMaxWidth(160);C31.setWidth(2);C31.iC();C32.setDisplayPosition(1);C32.setParent(C28);
C32.iC();C33.setDisplayPosition(5);C33.setParent(C28);C33.iC();C34.setDisplayPosition(1);C34.setParent(C28);C34.setHeight(56);C34.setUnits("CONTENT");C34.setMinHeight(64);C34.iC();C35.setDisplayPosition(2);C35.setParent(C28);C35.setHeight(37);C35.setUnits("CONTENT");C35.iC();C36.setColumn(C31);C36.setManage(C59);C36.setParent(C28);C36.setRow(C34);C36.setSizing("NONE");C36.setFlow("DOWN");C36.setAlignment("TOPCENTER");C36.iC();C37.setColumn(C30);C37.setManage(C58);C37.setParent(C28);C37.setRow(C34);
C37.setSizing("NONE");C37.setFlow("DOWN");C37.setAlignment("TOPCENTER");C37.iC();C38.setColumn(C29);C38.setManage(C57);C38.setParent(C28);C38.setRow(C34);C38.setSizing("NONE");C38.setFlow("DOWN");C38.setAlignment("TOPCENTER");C38.iC();C39.setColumn(C31);C39.setManage(C62);C39.setParent(C28);C39.setRow(C35);C39.setFlow("DOWN");C39.setSizing("CONTENTHEIGHTFITTOWIDTH");C39.setAlignment("TOPCENTER");C39.iC();C40.setColumn(C30);C40.setManage(C61);C40.setParent(C28);C40.setRow(C35);C40.setFlow("DOWN");
C40.setSizing("CONTENTHEIGHTFITTOWIDTH");C40.setAlignment("TOPCENTER");C40.iC();C41.setColumn(C29);C41.setManage(C60);C41.setParent(C28);C41.setRow(C35);C41.setFlow("DOWN");C41.setAlignment("TOPCENTER");C41.setSizing("CONTENTHEIGHTFITTOWIDTH");C41.iC();C42.iC();C43.setDisplayPosition(2);C43.setParent(C42);C43.setHeight(513);C43.setUnits("CONTENT");C43.iC();C44.setDisplayPosition(1);C44.setParent(C42);C44.iC();C45.setDisplayPosition(1);C45.setParent(C42);C45.setHeight(48);C45.setUnits("PIXELS");C45.iC();
C46.setDisplayPosition(3);C46.setParent(C42);C46.setHeight(24);C46.setUnits("PIXELS");C46.iC();C47.setAlignment("TOPCENTER");C47.setColumn(C44);C47.setManage(C66);C47.setParent(C42);C47.setRow(C43);C47.setSizing("FITTOWIDTH");C47.setFlow("DOWN");C47.setMarginLeft(24);C47.setMarginRight(24);C47.setMarginTop(8);C47.iC();C48.setAlignment("TOPCENTER");C48.setColumn(C44);C48.setManage(C65);C48.setParent(C42);C48.setRow(C43);C48.setSizing("FITTOWIDTH");C48.setFlow("DOWN");C48.setMarginLeft(24);C48.setMarginRight(24);
C48.setMarginTop(8);C48.iC();C49.setAlignment("TOPCENTER");C49.setColumn(C44);C49.setManage(C64);C49.setParent(C42);C49.setRow(C43);C49.setSizing("FITTOWIDTH");C49.setFlow("DOWN");C49.setMarginLeft(24);C49.setMarginRight(24);C49.setMarginTop(8);C49.iC();C50.setAlignment("TOPCENTER");C50.setColumn(C44);C50.setManage(C69);C50.setParent(C42);C50.setRow(C43);C50.setSizing("NONE");C50.setFlow("DOWN");C50.iC();C51.setAlignment("TOPCENTER");C51.setColumn(C44);C51.setManage(C67);C51.setParent(C42);C51.setRow(C43);
C51.setSizing("FITTOWIDTH");C51.setFlow("DOWN");C51.setMarginLeft(24);C51.setMarginRight(24);C51.setMarginTop(8);C51.iC();C52.setAlignment("TOPCENTER");C52.setColumn(C44);C52.setManage(C68);C52.setParent(C42);C52.setRow(C43);C52.setSizing("CONTENTHEIGHTFITTOWIDTH");C52.setFlow("DOWN");C52.setMarginLeft(24);C52.setMarginRight(24);C52.iC();C53.setDisplayPosition(1);C53.setHeight(632);C53.setLeft(60);C53.setParent(this);C53.setTabPosition(1);C53.setTabStop(false);C53.setTop(15);C53.setWidth(1186);C53.setLayoutManager(C13);
C53.setVerticalScroll(true);C53.iC();C54.setDisplayPosition(2);C54.setHeight(587);C54.setLeft(16);C54.setParent(C53);C54.setTabPosition(1);C54.setTabStop(false);C54.setTop(24);C54.setWidth(464);C54.setLayoutManager(C42);C54.setThemeDrawStyle("Card+Shadow1");C54.iC();C55.setParent(C53);C55.setTabStop(false);C55.setHtml("<html><iframe width='100%' height='100%' id='mapcanvas' src='https://maps.google.com/maps?q=122%20Arthur%20Street,%20North%20Sydney,%20NSW,%202060,%20,%20Australia&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe></html>");
C55.setHeight(420);C55.setWidth(658);C55.setDisplayPosition(3);C55.setTabPosition(2);C55.setThemeDrawStyle("Card+Shadow1");C55.setTop(29);C55.setLeft(512);C55.iC();C56.setDisplayPosition(4);C56.setHeight(101);C56.setLeft(496);C56.setParent(C53);C56.setTabPosition(3);C56.setTabStop(false);C56.setTop(485);C56.setWidth(690);C56.setLayoutManager(C28);C56.iC();C57.setDisplayPosition(1);C57.setLeft(157);C57.setParent(C56);C57.setTabPosition(1);C57.setThemeDrawStyle("MediumTitle");C57.setIcon("fa-globe");
C57.setTop(0);C57.setStyle(C0);C57.iC();C58.setDisplayPosition(2);C58.setIcon("phone");C58.setLeft(317);C58.setParent(C56);C58.setTabPosition(2);C58.setThemeDrawStyle("MediumTitle");C58.setTop(0);C58.setCaptionMarginBottom(0);C58.setCaptionMarginLeft(0);C58.setCaptionMarginRight(0);C58.setStyle(C0);C58.iC();C59.setDisplayPosition(3);C59.setIcon("mail");C59.setLeft(477);C59.setParent(C56);C59.setTabPosition(3);C59.setThemeDrawStyle("MediumTitle");C59.setTop(0);C59.setCaptionMarginBottom(0);C59.setCaptionMarginLeft(0);
C59.setCaptionMarginRight(0);C59.setStyle(C0);C59.iC();C60.setDisplayPosition(4);C60.setLeft(105);C60.setParent(C56);C60.setTabPosition(4);C60.setThemeDrawStyle("ForegroundTheme");C60.setTop(64);C60.setHeight(37);C60.setCaptionAlignment("CENTER");C60.setCaption("Website");C60.setWordWrap(true);C60.setPaddingBottom(8);C60.setPaddingTop(8);C60.setWidth(160);C60.iC();C61.setCaption("Phone");C61.setDisplayPosition(5);C61.setLeft(265);C61.setParent(C56);C61.setTabPosition(5);C61.setThemeDrawStyle("ForegroundTheme");
C61.setTop(64);C61.setHeight(37);C61.setWidth(160);C61.setCaptionAlignment("CENTER");C61.setPaddingBottom(8);C61.setPaddingTop(8);C61.iC();C62.setDisplayPosition(6);C62.setLeft(425);C62.setParent(C56);C62.setTabPosition(6);C62.setThemeDrawStyle("ForegroundTheme");C62.setTop(64);C62.setHeight(37);C62.setWidth(160);C62.setCaptionAlignment("CENTER");C62.setPaddingBottom(8);C62.setPaddingTop(8);C62.setCaption("Email");C62.iC();C63.setCaption("Write to us:");C63.setDisplayPosition(1);C63.setHeight(69);
C63.setLeft(40);C63.setParent(C53);C63.setTabPosition(4);C63.setThemeDrawStyle("MediumTitle+Shadow2+Title");C63.setWidth(416);C63.setIcon("mail");C63.setIconHeight(32);C63.setCaptionAlignment("CENTER");C63.setTop(4);C63.setIconMarginRight(16);C63.iC();C64.setCaption("Your Name");C64.setDisplayPosition(2);C64.setLeft(24);C64.setParent(C54);C64.setTabPosition(1);C64.setTop(133);C64.setWidth(414);C64.setIcon("person");C64.setIconThemeDrawStyle("ForegroundSecondary");C64.setHeight(80);C64.iC();C65.setCaption("Your Email");
C65.setDisplayPosition(3);C65.setLeft(24);C65.setParent(C54);C65.setTabPosition(2);C65.setTop(221);C65.setWidth(414);C65.setIcon("mail");C65.setIconThemeDrawStyle("ForegroundSecondary");C65.setHeight(80);C65.iC();C66.setCaption("Caption");C66.setDisplayPosition(4);C66.setLeft(24);C66.setParent(C54);C66.setTabPosition(3);C66.setTop(309);C66.setWidth(414);C66.setIcon("fa-tag");C66.setIconThemeDrawStyle("ForegroundSecondary");C66.setHeight(80);C66.iC();C67.setCaption("Message");C67.setDisplayPosition(5);
C67.setHeight(120);C67.setLeft(24);C67.setMultiLine(true);C67.setParent(C54);C67.setTabPosition(4);C67.setTop(397);C67.setWidth(414);C67.setIcon("edit");C67.setIconThemeDrawStyle("ForegroundSecondary");C67.iC();C68.setCaption("Get in touch and we will get back to you as soon as we can.");C68.setDisplayPosition(1);C68.setLeft(24);C68.setParent(C54);C68.setTabPosition(6);C68.setTop(48);C68.setHeight(77);C68.setWidth(414);C68.setPaddingBottom(24);C68.setPaddingTop(32);C68.iC();C69.setCaption("Send");
C69.setDisplayPosition(6);C69.setLeft(169);C69.setParent(C54);C69.setTabPosition(5);C69.setThemeDrawStyle("MediumTitle+Shadow2");C69.setTop(517);C69.setHeight(44);C69.setWidth(124);C69.setStyle(C0);C69.iC();l.WEB().aH("DEVICECHANGED",this,e1);C57.aH("CLICK",this,e5);C58.aH("CLICK",this,e4);C59.aH("CLICK",this,e3);C69.aH("CLICK",this,e2);this.setDisplayPosition(1);this.setTabPosition(1);this.setLayoutManager(C1);this.setCaption("Contact Us");this.setWidth(1305);this.setHeight(665);}});function e1(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",88);r.ln=88;{r.ln=92;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=94;this.setLayoutManager(m.LAYOUTMAINMOBILE);r.ln=95;m.PANELBASE.setLayoutManager(m.LAYOUTPANELBASEMOBILE);}else{r.ln=99;this.setLayoutManager(m.LAYOUTMAINDESKTOP);r.ln=100;m.PANELBASE.setLayoutManager(m.LAYOUTPANELBASEDESKTOP);}}r.ln=104;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ButtonSend.Click",106);r.ln=106;{r.ln=108;if(cO.mthVALIDATEFIELDS.call(this)){r.ln=110;
this.mthSENDMESSAGE();}}r.ln=114;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#ButtonEmail.Click",116);var C0=r.cR("QUICKEMAIL","PRIM_STR");C0.iC();r.ln=116;{r.ln=120;C0.set("mailto:info@TasksApp.com");r.ln=122;l.WEB().mthNAVIGATE(C0.get(),"CURRENT");}r.ln=124;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#ButtonPhone.Click",126);var C0=r.cR("CALL","PRIM_STR");C0.iC();r.ln=126;{r.ln=129;C0.set("tel:+61 2 8907 0200");r.ln=131;l.WEB().mthNAVIGATE(C0.get(),"CURRENT");}r.ln=133;r.e();};function e5(sender,Ps)
{var r=l.eR(this,cO,"#ButtonWebSite.Click",135);var C0=r.cR("WEBSITE","PRIM_STR");C0.iC();r.ln=135;{r.ln=138;C0.set("https://developer.lansa.com/sample-apps/tasks/");r.ln=140;l.WEB().mthNAVIGATE(C0.get(),"NEW");}r.ln=142;r.e();};cO.mthVALIDATEFIELDS=function(){var m=this.REF,r=l.mR(this,cO,"ValidateFields",144);var P0=r.cP("CONTINUE","PRIM_BOLN");r.ln=144;{r.ln=147;P0.set(true);r.ln=149;if(l.s.eq(m.EDITEMAIL.getValue(),"")){r.ln=152;m.EDITEMAIL.mthSHOWERROR("Email must be specified");r.ln=154;P0.set(false);
}else{r.ln=158;if(l.not(l.s.IsValidEmail(m.EDITEMAIL.getValue()))){r.ln=160;m.EDITEMAIL.mthSHOWERROR("Email supplied is not valid");r.ln=162;P0.set(false);}}r.ln=168;if(l.s.eq(m.EDITMESSAGE.getValue(),"")){r.ln=170;m.EDITMESSAGE.mthSHOWERROR("Message must be specified");r.ln=172;P0.set(false);}r.ln=176;if(l.s.eq(m.EDITNAME.getValue(),"")){r.ln=178;m.EDITNAME.mthSHOWERROR("Name must be specified");r.ln=180;P0.set(false);}r.ln=184;if(l.s.eq(m.EDITSUBJECT.getValue(),"")){r.ln=186;m.EDITSUBJECT.mthSHOWERROR("Subject must be specified");
r.ln=188;P0.set(false);}}r.ln=192;return r.rV(P0.get());};cO.mthSENDMESSAGE=function(){var m=this.REF,r=l.mR(this,cO,"SendMessage",195),mth=r;var C0=r.cDR("SENDMESSAGE","TK_SRVM","SENDMESSAGE");var C1=r.cR("RESULT","PRIM_BOLN");C0.iC();C1.iC();C0.aH("COMPLETED",this,e6);r.ln=195;{r.ln=200;C0.mthEXECUTE({FLD:{"TK_NAME":m.EDITNAME.get(),"TK_EMAIL":m.EDITEMAIL.get(),"TK_SUBJECT":m.EDITSUBJECT.get(),"TK_MESSAGE":m.EDITMESSAGE.get(),"TK_RESULT":C1.get()}},{});}r.ln=218;r.e();function e6(sender,Ps){var r=l.eR(this,cO,"#SendMessage.Completed",202,mth);
r.ln=202;{r.ln=204;if(l.tB(C1.get())){r.ln=206;{var eP=l.ePs();eP.cR("MESSAGE","PRIM_ALPH");eP.r("MESSAGE").set("Message has been sent.");this.fE("MESSAGESENT",eP);eP.e();}r.ln=208;m.EDITNAME.set("");m.EDITEMAIL.set("");m.EDITSUBJECT.set("");m.EDITMESSAGE.set("");}else{r.ln=212;{var eP=l.ePs();eP.cR("MESSAGE","PRIM_ALPH");eP.r("MESSAGE").set("Sending message failed try again later");this.fE("MESSAGESENT",eP);eP.e();}}}r.ln=216;r.e();}};},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_WEB.HtmlContainer","PRIM_MD.ActionButton","PRIM_MD.Label","PRIM_MD.Edit","PRIM_MD.RaisedButton","PRIM_WEB.DataRequest"],
dp:["PRIM_STR","PRIM_BOLN"]});