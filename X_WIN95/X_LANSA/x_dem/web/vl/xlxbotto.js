﻿LANSA.addComponent({id:"XLXBOTTO",nm:"xLXBottomDetailer",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Bottom Detailer",tl:15000003},function(l,oI,u){var rc1=l.cB("xlxbottom.png");var cO=l.rC(oI,{an:"PRIM_PANL",co:function(){cO.aN.call(this);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("LINEARBRUSH1","PRIM_VS","LinearBrush");var C2=this.cR("BRUSHCOLORS1","PRIM_VS","BrushColors");var C3=this.cR("BRUSHCOLOR1","PRIM_VS","BrushColor");var C4=this.cR("BRUSHCOLOR2","PRIM_VS","BrushColor");var C5=this.cR("STYLE2","PRIM_VS","Style");
var C6=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C7=this.cR("STYLE3","PRIM_VS","Style");var C8=this.cR("STYLE4","PRIM_VS","Style");var C9=this.cR("STYLE5","PRIM_VS","Style");var C10=this.cR("LAYOUTMAINDESKTOP","PRIM_TBLO");var C11=this.cR("LAYOUTMAINDESKTOPCOLUMN2","PRIM_TBLO","Column");var C12=this.cR("LAYOUTMAINDESKTOPCOLUMN3","PRIM_TBLO","Column");var C13=this.cR("LAYOUTMAINDESKTOPCOLUMN6","PRIM_TBLO","Column");var C14=this.cR("LAYOUTMAINDESKTOPROW1","PRIM_TBLO","Row");var C15=this.cR("LAYOUTMAINDESKTOPCOLUMN1","PRIM_TBLO","Column");
var C16=this.cR("LAYOUTMAINDESKTOPROW2","PRIM_TBLO","Row");var C17=this.cR("LAYOUTMAINDESKTOPROW3","PRIM_TBLO","Row");var C18=this.cR("LAYOUTMAINDESKTOPROW4","PRIM_TBLO","Row");var C19=this.cR("LAYOUTMAINDESKTOPROW5","PRIM_TBLO","Row");var C20=this.cR("LAYOUTMAINDESKTOPROW6","PRIM_TBLO","Row");var C21=this.cR("LAYOUTMAINDESKTOPROW7","PRIM_TBLO","Row");var C22=this.cR("LAYOUTMAINDESKTOPITEM1","PRIM_TBLO","Item");var C23=this.cR("LAYOUTMAINDESKTOPITEM4","PRIM_TBLO","Item");var C24=this.cR("LAYOUTMAINDESKTOPITEM5","PRIM_TBLO","Item");
var C25=this.cR("LAYOUTMAINDESKTOPITEM6","PRIM_TBLO","Item");var C26=this.cR("LAYOUTMAINDESKTOPITEM7","PRIM_TBLO","Item");var C27=this.cR("LAYOUTMAINDESKTOPITEM8","PRIM_TBLO","Item");var C28=this.cR("LAYOUTMAINDESKTOPITEM9","PRIM_TBLO","Item");var C29=this.cR("LAYOUTMAINDESKTOPITEM10","PRIM_TBLO","Item");var C30=this.cR("LAYOUTMAINDESKTOPITEM11","PRIM_TBLO","Item");var C31=this.cR("LAYOUTMAINDESKTOPITEM12","PRIM_TBLO","Item");var C32=this.cR("LAYOUTMAINDESKTOPITEM2","PRIM_TBLO","Item");var C33=this.cR("LAYOUTMAINDESKTOPITEM13","PRIM_TBLO","Item");
var C34=this.cR("LAYOUTMAINDESKTOPITEM14","PRIM_TBLO","Item");var C35=this.cR("BUTTONFACEBOOK","PRIM_MD","RaisedButton");var C36=this.cR("BUTTONTWITTER","PRIM_MD","RaisedButton");var C37=this.cR("BACKGROUND","PRIM_IMAG");var C38=this.cR("TEXTCOMEJOINUS","PRIM_MD","Label");var C39=this.cR("TEXTCOMPANYINFO","PRIM_MD","Label");var C40=this.cR("ABOUTUS","PRIM_MD","FlatButton");var C41=this.cR("CONTACTUS","PRIM_MD","FlatButton");var C42=this.cR("BUTTONUSERFORUM","PRIM_MD","FlatButton");var C43=this.cR("BUTTONDEVELOPERSITE","PRIM_MD","FlatButton");
var C44=this.cR("TEXTCONNECTWITHUS","PRIM_MD","Label");var C45=this.cR("BUTTONSIGNUP","PRIM_MD","RaisedButton");var C46=this.cR("TEXTFOOTER","PRIM_MD","Label");var C47=this.cR("BUTTONLINKEDIN","PRIM_MD","RaisedButton");C0.setBackgroundBrush(C1);C0.iC();C1.setColors(C2);C1.iC();C2.iC();C3.setColor("34:97:191");C3.setParent(C2);C3.iC();C4.setAt(88);C4.setColor("33:63:131");C4.setParent(C2);C4.iC();C5.setBorderBottom(1);C5.setBorderBrush(C6);C5.setBorderLeft(1);C5.setBorderRight(1);C5.setBorderTop(1);
C5.setCornerBottomLeft(32);C5.setCornerBottomRight(32);C5.setCornerTopLeft(32);C5.setCornerTopRight(32);C5.setCursor("HAND");C5.iC();C6.setColor("255:255:255");C6.iC();C7.setFontSize(18);C7.setFontUnits("PIXEL");C7.setBold(true);C7.iC();C8.setBold(false);C8.setFontSize(16);C8.setCursor("HAND");C8.iC();C9.setCornerBottomLeft(8);C9.setCornerBottomRight(8);C9.setCornerTopLeft(8);C9.setCornerTopRight(8);C9.setBorderLeft(0);C9.setBorderTop(0);C9.setBorderRight(0);C9.setBorderBottom(0);C9.setCursor("HAND");
C9.iC();C10.setSizing("CONTENTHEIGHT");C10.iC();C11.setDisplayPosition(2);C11.setParent(C10);C11.setMinWidth(160);C11.setMaxWidth(200);C11.setWidth(100);C11.iC();C12.setDisplayPosition(3);C12.setParent(C10);C12.setMinWidth(160);C12.setMaxWidth(200);C12.setWidth(100);C12.iC();C13.setDisplayPosition(4);C13.setParent(C10);C13.setWidth(5);C13.iC();C14.setDisplayPosition(1);C14.setParent(C10);C14.setHeight(48);C14.setUnits("PIXELS");C14.iC();C15.setDisplayPosition(1);C15.setParent(C10);C15.setWidth(5);
C15.iC();C16.setDisplayPosition(2);C16.setParent(C10);C16.setHeight(58);C16.setUnits("CONTENT");C16.iC();C17.setDisplayPosition(3);C17.setParent(C10);C17.setHeight(48);C17.setUnits("CONTENT");C17.iC();C18.setDisplayPosition(4);C18.setParent(C10);C18.setHeight(90);C18.setUnits("CONTENT");C18.iC();C19.setDisplayPosition(5);C19.setParent(C10);C19.setHeight(80);C19.setUnits("CONTENT");C19.iC();C20.setDisplayPosition(6);C20.setParent(C10);C20.setHeight(64);C20.setUnits("PIXELS");C20.iC();C21.setDisplayPosition(7);
C21.setParent(C10);C21.setHeight(24);C21.setUnits("PIXELS");C21.iC();C22.setAlignment("TOPCENTER");C22.setColumn(C15);C22.setManage(C37);C22.setParent(C10);C22.setRow(C14);C22.setRowSpan(7);C22.setColumnSpan(5);C22.iC();C23.setColumn(C11);C23.setManage(C36);C23.setParent(C10);C23.setRow(C17);C23.setSizing("NONE");C23.setFlow("CENTERHORIZONTAL");C23.setMarginLeft(10);C23.setMarginRight(10);C23.iC();C24.setAlignment("TOPCENTER");C24.setColumn(C12);C24.setManage(C38);C24.setParent(C10);C24.setRow(C16);
C24.setSizing("CONTENTHEIGHTFITTOWIDTH");C24.iC();C25.setAlignment("TOPCENTER");C25.setColumn(C11);C25.setManage(C39);C25.setParent(C10);C25.setRow(C18);C25.setSizing("CONTENTHEIGHTFITTOWIDTH");C25.setMarginTop(40);C25.iC();C26.setAlignment("TOPCENTER");C26.setColumn(C11);C26.setManage(C40);C26.setParent(C10);C26.setRow(C19);C26.setSizing("CONTENTHEIGHTFITTOWIDTH");C26.setFlow("DOWN");C26.iC();C27.setAlignment("TOPCENTER");C27.setColumn(C12);C27.setManage(C41);C27.setParent(C10);C27.setRow(C19);C27.setSizing("CONTENTHEIGHTFITTOWIDTH");
C27.setFlow("DOWN");C27.iC();C28.setAlignment("TOPCENTER");C28.setColumn(C11);C28.setManage(C42);C28.setParent(C10);C28.setRow(C19);C28.setSizing("CONTENTHEIGHTFITTOWIDTH");C28.setFlow("DOWN");C28.iC();C29.setAlignment("TOPCENTER");C29.setColumn(C12);C29.setManage(C43);C29.setParent(C10);C29.setRow(C19);C29.setSizing("CONTENTHEIGHTFITTOWIDTH");C29.setFlow("DOWN");C29.iC();C30.setAlignment("TOPCENTER");C30.setColumn(C11);C30.setManage(C44);C30.setParent(C10);C30.setRow(C16);C30.setSizing("CONTENTHEIGHTFITTOWIDTH");
C30.iC();C31.setColumn(C12);C31.setManage(C45);C31.setParent(C10);C31.setRow(C17);C31.setSizing("FITTOHEIGHT");C31.iC();C32.setAlignment("TOPCENTER");C32.setColumn(C11);C32.setManage(C46);C32.setParent(C10);C32.setRow(C21);C32.setColumnSpan(2);C32.setSizing("FITTOWIDTH");C32.iC();C33.setColumn(C11);C33.setManage(C47);C33.setParent(C10);C33.setRow(C17);C33.setSizing("NONE");C33.setFlow("CENTERHORIZONTAL");C33.iC();C34.setColumn(C11);C34.setManage(C35);C34.setParent(C10);C34.setRow(C17);C34.setSizing("NONE");
C34.setFlow("CENTERHORIZONTAL");C34.iC();C35.setDisplayPosition(1);C35.setIcon("fa-facebook");C35.setLeft(342);C35.setParent(this);C35.setTabPosition(10);C35.setTop(106);C35.setThemeBackground("DARK");C35.setStyle(C5);C35.setWidth(48);C35.setHeight(48);C35.iC();C36.setDisplayPosition(2);C36.setIcon("fa-twitter");C36.setLeft(400);C36.setParent(this);C36.setTabPosition(11);C36.setTop(106);C36.setThemeBackground("DARK");C36.setStyle(C5);C36.setHeight(48);C36.setWidth(48);C36.iC();C37.setImage(rc1);C37.setDisplayPosition(12);
C37.setParent(this);C37.setTabPosition(1);C37.setHeight(412);C37.setLeft(0);C37.setTop(0);C37.setWidth(1048);C37.setImageSizing("FITBOTH");C37.iC();C38.setCaption("Come join us");C38.setDisplayPosition(4);C38.setLeft(524);C38.setParent(this);C38.setTabPosition(3);C38.setThemeDrawStyle("Strong");C38.setTop(48);C38.setThemeBackground("DARK");C38.setHeight(58);C38.setWidth(200);C38.setStyle(C7);C38.setPaddingBottom(16);C38.setPaddingTop(16);C38.setPaddingLeft(8);C38.setPaddingRight(8);C38.iC();C39.setCaption("Company Info");
C39.setDisplayPosition(5);C39.setLeft(324);C39.setParent(this);C39.setTabPosition(4);C39.setThemeDrawStyle("Strong");C39.setTop(194);C39.setThemeBackground("DARK");C39.setHeight(50);C39.setWidth(200);C39.setStyle(C7);C39.setPaddingBottom(16);C39.setPaddingTop(8);C39.setPaddingLeft(8);C39.setPaddingRight(8);C39.iC();C40.setCaption("About Us");C40.setDisplayPosition(6);C40.setLeft(324);C40.setParent(this);C40.setTabPosition(6);C40.setThemeDrawStyle("Strong");C40.setTop(244);C40.setThemeBackground("DARK");
C40.setHeight(40);C40.setWidth(200);C40.setPaddingBottom(8);C40.setPaddingTop(8);C40.setStyle(C8);C40.setPaddingLeft(8);C40.setPaddingRight(8);C40.iC();C41.setCaption("Contact Us");C41.setDisplayPosition(7);C41.setLeft(524);C41.setParent(this);C41.setTabPosition(8);C41.setThemeDrawStyle("Strong");C41.setTop(244);C41.setThemeBackground("DARK");C41.setHeight(40);C41.setWidth(200);C41.setPaddingBottom(8);C41.setPaddingTop(8);C41.setStyle(C8);C41.setPaddingLeft(8);C41.setPaddingRight(8);C41.iC();C42.setCaption("Forum");
C42.setDisplayPosition(8);C42.setLeft(324);C42.setParent(this);C42.setTabPosition(5);C42.setThemeDrawStyle("Strong");C42.setTop(284);C42.setThemeBackground("DARK");C42.setHeight(40);C42.setWidth(200);C42.setPaddingBottom(8);C42.setPaddingTop(8);C42.setStyle(C8);C42.setPaddingLeft(8);C42.setPaddingRight(8);C42.iC();C43.setCaption("Developer Site");C43.setDisplayPosition(9);C43.setLeft(524);C43.setParent(this);C43.setTabPosition(7);C43.setThemeDrawStyle("Strong");C43.setTop(284);C43.setThemeBackground("DARK");
C43.setHeight(40);C43.setWidth(200);C43.setPaddingBottom(8);C43.setPaddingTop(8);C43.setStyle(C8);C43.setPaddingLeft(8);C43.setPaddingRight(8);C43.iC();C44.setCaption("Connect with us");C44.setDisplayPosition(10);C44.setLeft(324);C44.setParent(this);C44.setTabPosition(2);C44.setThemeDrawStyle("Strong");C44.setTop(48);C44.setThemeBackground("DARK");C44.setHeight(58);C44.setWidth(200);C44.setStyle(C7);C44.setPaddingBottom(16);C44.setPaddingTop(16);C44.setPaddingLeft(8);C44.setPaddingRight(8);C44.iC();
C45.setCaption("SIGN UP NOW");C45.setDisplayPosition(11);C45.setLeft(544);C45.setParent(this);C45.setTabPosition(12);C45.setThemeDrawStyle("MediumAccent");C45.setTop(106);C45.setWidth(160);C45.setStyle(C9);C45.setHeight(48);C45.iC();C46.setCaption("Powered by LANSA");C46.setDisplayPosition(13);C46.setLeft(324);C46.setParent(this);C46.setTabPosition(13);C46.setTop(388);C46.setHeight(24);C46.setWidth(400);C46.setCaptionAlignment("CENTER");C46.setThemeBackground("DARK");C46.iC();C47.setDisplayPosition(3);
C47.setIcon("fa-linkedin");C47.setLeft(458);C47.setParent(this);C47.setTabPosition(9);C47.setTop(106);C47.setThemeBackground("DARK");C47.setStyle(C5);C47.setWidth(48);C47.setHeight(48);C47.iC();C35.aH("CLICK",this,e5);C36.aH("CLICK",this,e6);C40.aH("CLICK",this,e1);C41.aH("CLICK",this,e2);C42.aH("CLICK",this,e3);C43.aH("CLICK",this,e4);C45.aH("CLICK",this,e8);C47.aH("CLICK",this,e7);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(1048);this.setLayoutManager(C10);
this.setStyle(C0);this.setHeight(412);}});function e1(sender,Ps){var r=l.eR(this,cO,"#AboutUs.Click",57);r.ln=57;{r.ln=59;l.WEB().getHistory().mthADD("view=about");}r.ln=61;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ContactUs.Click",63);r.ln=63;{r.ln=65;l.WEB().getHistory().mthADD("view=contactus");}r.ln=67;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#ButtonUserForum.Click",69);r.ln=69;{r.ln=71;l.WEB().mthNAVIGATE("https://forum.developer.lansa.com");}r.ln=73;r.e();};function e4(sender,Ps)
{var r=l.eR(this,cO,"#ButtonDeveloperSite.Click",75);r.ln=75;{r.ln=77;l.WEB().mthNAVIGATE("https://developer.lansa.com/");}r.ln=79;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#ButtonFaceBook.Click",81);r.ln=81;{r.ln=83;l.WEB().mthNAVIGATE("https://www.facebook.com/lansasoftware");}r.ln=85;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#ButtonTwitter.Click",87);r.ln=87;{r.ln=89;l.WEB().mthNAVIGATE("https://twitter.com/lansa");}r.ln=91;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#ButtonLinkedIN.Click",93);
r.ln=93;{r.ln=95;l.WEB().mthNAVIGATE("https://www.linkedin.com/company/lansa/");}r.ln=97;r.e();};function e8(sender,Ps){var r=l.eR(this,cO,"#ButtonSignUp.Click",99);r.ln=99;{r.ln=101;l.WEB().getHistory().mthADD("view=signup");}r.ln=103;r.e();};},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.LinearBrush","PRIM_VS.BrushColors","PRIM_VS.BrushColor","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.RaisedButton","PRIM_IMAG","PRIM_MD.Label","PRIM_MD.FlatButton"]
});