﻿LANSA.addComponent({id:"BPFAVW001",nm:"BPFPortalHomeView",ot:"wv",tp:"View",pt:"ap",de:"Portal Home View",tl:15000300},function(l,oI,u){var cL="ENG";var c1=l.cDT("1900-01-01T00:00:00Z");var Fd={F1:{nm:"BPFFLD025",an:"BPFSessionID",ft:"NV",ln:32,dc:0,lb:"Session ID",h1:"Session",h2:"ID",h3:"",de:"Session ID",dv:"",ia:["LC"]},F2:{nm:"BPFFLD026",an:"BPFSessionStarted",ft:"DT",ln:26,dc:0,lb:"Session Started",h1:"Session",h2:"Started",h3:"Date",de:"Session Started Date & Time",dv:l.SqlNull,ia:["ASQN","ISO","SUTC"]
},F3:{nm:"BPFFLD027",an:"BPFSessionEnded",ft:"DT",ln:26,dc:0,lb:"Session Ended D",h1:"Session",h2:"Ended",h3:"Date",de:"Session Ended Date & Time",dv:l.SqlNull,ia:["ASQN","ISO","SUTC"]},F4:{nm:"BPFFLD029",an:"BPFSessionEventCount",ft:"P",ln:7,dc:0,lb:"Count of Events",h1:"Count",h2:"of",h3:"Events",de:"Count of Events Tracked for a Session",dv:0,ia:["FE","RB"]},F5:{nm:"BPFFLD030",an:"BPFSessionEventDateTime",ft:"DT",ln:26,dc:0,lb:"Session Event D",h1:"Session",h2:"Event",h3:"Date",de:"Session Event Date & Time Logged",
dv:c1,ia:["ISO","SUTC"]},F6:{nm:"BPFFLD031",an:"BPFSessionEventUserInteraction",ft:"B",ln:1,dc:0,lb:"User Actived Ev",h1:"User",h2:"Actived",h3:"Event",de:"User Actived Event Flag",dv:false,ia:["ASQN"]},F7:{nm:"BPFFLD086",an:"BPFGenericNVarChar2048",ft:"NV",ln:2048,dc:0,lb:"Generic 256 NVa",h1:"Generic",h2:"256",h3:"NVarchar",de:"Generic 2048 NVarchar",dv:"",ia:["ASQN","LC"]},F8:{nm:"BPFFLD061",an:"BPFGenericDateTime",ft:"DT",ln:26,dc:0,lb:"Generic Date Ti",h1:"Generic",h2:"Date",h3:"Time",de:"Generic Date Time",
dv:l.SqlNull,ia:["ASQN","ISO","SUTC"]}};var cO=l.rC(oI,{an:"PRIM_VIEW",fd:Fd,rm:["dt"],mt:{SetPanelText:{},HandleLastSessionCardSetup:{},AddLastSessionCardItem:{ps:{"Label":{pt:"i"},"Value":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("BPFAVW001",Fd);var C0=this.cA("SESSION","BPFAPP002");var C1=this.cA("NAVIGATE","BPFAPP001");var C2=this.cR("STRINGS","BPFVLR001");var C3=this.cR("ROUNDEDCORNERSTYLE","PRIM_VS","Style");var C4=this.cR("NAVIGATIONLINKSTYLE","PRIM_VS","Style");var C5=this.cR("NOTACARD","PRIM_VS","Style");
var C6=this.cR("PANELLAYOUT","PRIM_TBLO");var C7=this.cR("PANELLAYOUTCOLUMN1","PRIM_TBLO","Column");var C8=this.cR("PANELLAYOUTCOLUMN2","PRIM_TBLO","Column");var C9=this.cR("PANELLAYOUTCOLUMN3","PRIM_TBLO","Column");var C10=this.cR("PANELLAYOUTCOLUMN4","PRIM_TBLO","Column");var C11=this.cR("PANELLAYOUTROW1","PRIM_TBLO","Row");var C12=this.cR("PANELLAYOUTROW2","PRIM_TBLO","Row");var C13=this.cR("PANELLAYOUTROW3","PRIM_TBLO","Row");var C14=this.cR("PANELLAYOUTITEM1","PRIM_TBLO","Item");var C15=this.cR("PANELLAYOUTITEM2","PRIM_TBLO","Item");
var C16=this.cR("PANELLAYOUTITEM3","PRIM_TBLO","Item");var C17=this.cR("LASTSESSIONCARDLAYOUT","PRIM_TBLO");var C18=this.cR("LASTSESSIONCARDLAYOUTCOLUMNLEFT","PRIM_TBLO","Column");var C19=this.cR("PROFILECARDLAYOUTCOLUMN2","PRIM_TBLO","Column");var C20=this.cR("PROFILECARDLAYOUTCOLUMNRIGHT","PRIM_TBLO","Column");var C21=this.cR("LASTSESSIONCARDLAYOUTLAYOUTROW1","PRIM_TBLO","Row");var C22=this.cR("LASTSESSIONCARDLAYOUTLAYOUTROW2","PRIM_TBLO","Row");var C23=this.cR("LASTSESSIONCARDLAYOUTLAYOUTROW3","PRIM_TBLO","Row");
var C24=this.cR("LASTSESSIONCARDLAYOUTITEM1","PRIM_TBLO","Item");var C25=this.cR("LASTSESSIONCARDLAYOUTITEM2","PRIM_TBLO","Item");var C26=this.cR("LASTSESSIONCARDLAYOUTITEM4","PRIM_TBLO","Item");var C27=this.cR("LASTSESSIONCARDLAYOUTITEM3","PRIM_TBLO","Item");var C28=this.cR("LASTSESSIONCARDDESKTOPLAYOUTLIST","PRIM_TBLO");var C29=this.cR("LASTSESSIONCARDDESKTOPLAYOUTLISTCOLUMN1","PRIM_TBLO","Column");var C30=this.cR("LASTSESSIONECARDDESKTOPLAYOUTLISTCOLUMN2","PRIM_TBLO","Column");var C31=this.cR("LASTSESSIONCARDDESKTOPLAYOUTLISTROW1","PRIM_TBLO","Row");
var C32=this.cR("LASTSESSIONCARDDESKTOPLAYOUTLISTITEM1","PRIM_TBLO","Item");var C33=this.cR("LASTSESSIONCARDDESKTOPLAYOUTLISTITEM2","PRIM_TBLO","Item");var C34=this.cR("LASTSESSIONCARDDESKTOPLAYOUTLISTITEM3","PRIM_TBLO","Item");var C35=this.cR("LASTSESSIONCARDMOBILELAYOUTLIST","PRIM_TBLO");var C36=this.cR("LASTSESSIONCARDMOBILELAYOUTLISTCOLUMN1","PRIM_TBLO","Column");var C37=this.cR("LASTSESSIONCARDMOBILELAYOUTLISTROW1","PRIM_TBLO","Row");var C38=this.cR("LASTSESSIONCARDMOBILELAYOUTLISTITEM1","PRIM_TBLO","Item");
var C39=this.cR("LASTSESSIONCARDMOBILELAYOUTLISTITEM2","PRIM_TBLO","Item");var C40=this.cR("LASTSESSIONCARDMOBILESETTINGSLISTITEM3","PRIM_TBLO","Item");var C41=this.cR("PANELHEADING","PRIM_MD","Label");var C42=this.cR("PANELWELCOMEHEADING","PRIM_MD","Label");var C43=this.cR("LASTSESSIONCARD","PRIM_PANL");var C44=this.cR("LASTSESSIONCARDHEADING","PRIM_MD","Label");var C45=this.cR("LASTSESSIONCARDTEXT","PRIM_MD","Label");var C46=this.cR("LASTSESSIONCARDACTION","PRIM_MD","FlatButton");var C47=this.cR("LASTSESSIONCARDLIST","PRIM_MD","List");
var C48=this.cR("LASTSESSIONCARDBACKGROUNDLABEL","PRIM_MD","ListLabel");var C49=this.cR("LASTSESSIONCARDLISTLABEL","PRIM_MD","ListLabel");var C50=this.cR("LASTSESSIONCARDLISTVALUE","PRIM_MD","ListLabel");this.cD("CURRENTUSER");this.cD("SESSIONDATA");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setCornerBottomLeft(8);C3.setCornerBottomRight(8);C3.setCornerTopLeft(8);C3.setCornerTopRight(8);C3.setBorderLeft(1);C3.setBorderTop(1);C3.setBorderRight(1);
C3.setBorderBottom(1);C3.iC();C4.setCursor("HAND");C4.iC();C5.setBorderBottom(0);C5.setBorderLeft(0);C5.setBorderRight(0);C5.setBorderTop(0);C5.iC();C6.setSizing("CONTENTHEIGHT");C6.setMarginTop(44);C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);C7.setMinWidth(8);C7.iC();C8.setDisplayPosition(2);C8.setParent(C6);C8.setWidth(44);C8.setMinWidth(140);C8.setMaxWidth(440);C8.iC();C9.setDisplayPosition(3);C9.setParent(C6);C9.setWidth(44);C9.setMinWidth(140);C9.setMaxWidth(440);C9.iC();C10.setDisplayPosition(4);
C10.setParent(C6);C10.setMinWidth(8);C10.iC();C11.setDisplayPosition(1);C11.setParent(C6);C11.setHeight(69);C11.setUnits("CONTENT");C11.iC();C12.setDisplayPosition(2);C12.setParent(C6);C12.setHeight(399);C12.setUnits("CONTENT");C12.iC();C13.setDisplayPosition(3);C13.setParent(C6);C13.setHeight(24);C13.setUnits("PIXELS");C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C8);C14.setManage(C41);C14.setParent(C6);C14.setRow(C11);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.setColumnSpan(2);C14.setFlow("DOWN");
C14.setMarginBottom(12);C14.setMarginLeft(16);C14.setMarginRight(16);C14.iC();C15.setManage(C42);C15.setParent(C6);C15.setRow(C11);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.setColumn(C8);C15.setAlignment("TOPLEFT");C15.setFlow("DOWN");C15.setColumnSpan(2);C15.setMarginLeft(16);C15.setMarginRight(16);C15.iC();C16.setManage(C43);C16.setParent(C6);C16.setRow(C12);C16.setSizing("FITTOWIDTH");C16.setColumn(C8);C16.setAlignment("TOPLEFT");C16.setFlow("DOWN");C16.setColumnSpan(2);C16.setMarginTop(32);
C16.iC();C17.setSizing("CONTENTHEIGHT");C17.iC();C18.setDisplayPosition(1);C18.setParent(C17);C18.setMinWidth(24);C18.iC();C19.setDisplayPosition(2);C19.setParent(C17);C19.setWidth(98);C19.iC();C20.setDisplayPosition(3);C20.setParent(C17);C20.setMinWidth(24);C20.iC();C21.setDisplayPosition(1);C21.setParent(C17);C21.setHeight(297);C21.setUnits("CONTENT");C21.iC();C22.setDisplayPosition(2);C22.setParent(C17);C22.setUnits("PIXELS");C22.setHeight(12);C22.iC();C23.setDisplayPosition(3);C23.setParent(C17);
C23.setUnits("PIXELS");C23.setHeight(56);C23.iC();C24.setAlignment("TOPLEFT");C24.setColumn(C19);C24.setManage(C44);C24.setParent(C17);C24.setRow(C21);C24.setSizing("CONTENTHEIGHTFITTOWIDTH");C24.setFlow("DOWN");C24.setMarginTop(24);C24.iC();C25.setAlignment("TOPLEFT");C25.setColumn(C19);C25.setManage(C45);C25.setParent(C17);C25.setRow(C21);C25.setSizing("CONTENTHEIGHTFITTOWIDTH");C25.setFlow("DOWN");C25.setMarginTop(4);C25.setMarginBottom(4);C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C19);
C26.setManage(C47);C26.setParent(C17);C26.setRow(C21);C26.setSizing("CONTENTHEIGHTFITTOWIDTH");C26.setFlow("DOWN");C26.setMarginBottom(16);C26.iC();C27.setManage(C46);C27.setParent(C17);C27.setRow(C23);C27.setColumn(C18);C27.setAlignment("TOPLEFT");C27.setFlow("DOWN");C27.setColumnSpan(3);C27.iC();C28.iC();C29.setDisplayPosition(1);C29.setParent(C28);C29.setUnits("PIXELS");C29.setWidth(180);C29.iC();C30.setDisplayPosition(2);C30.setParent(C28);C30.iC();C31.setDisplayPosition(1);C31.setParent(C28);
C31.iC();C32.setAlignment("CENTERLEFT");C32.setColumn(C29);C32.setManage(C48);C32.setParent(C28);C32.setRow(C31);C32.setColumnSpan(2);C32.iC();C33.setAlignment("CENTERLEFT");C33.setColumn(C29);C33.setManage(C49);C33.setParent(C28);C33.setRow(C31);C33.setSizing("CONTENTHEIGHTFITTOWIDTH");C33.setMarginRight(24);C33.iC();C34.setAlignment("CENTERLEFT");C34.setColumn(C30);C34.setManage(C50);C34.setParent(C28);C34.setRow(C31);C34.setSizing("CONTENTHEIGHTFITTOWIDTH");C34.iC();C35.iC();C36.setDisplayPosition(1);
C36.setParent(C35);C36.iC();C37.setDisplayPosition(1);C37.setParent(C35);C37.iC();C38.setAlignment("TOPLEFT");C38.setColumn(C36);C38.setManage(C48);C38.setParent(C35);C38.setRow(C37);C38.iC();C39.setAlignment("CENTERLEFT");C39.setColumn(C36);C39.setManage(C49);C39.setParent(C35);C39.setRow(C37);C39.setSizing("CONTENTWIDTHANDHEIGHT");C39.setFlow("CENTERVERTICAL");C39.iC();C40.setAlignment("CENTERLEFT");C40.setColumn(C36);C40.setManage(C50);C40.setParent(C35);C40.setRow(C37);C40.setSizing("CONTENTWIDTHANDHEIGHT");
C40.setFlow("CENTERVERTICAL");C40.iC();C41.setCaption("Welcome,");C41.setDisplayPosition(1);C41.setHeight(47);C41.setLeft(416);C41.setParent(this);C41.setTabPosition(1);C41.setThemeDrawStyle("Title+ForegroundMediumPrimary");C41.setTop(44);C41.setWidth(848);C41.iC();C42.setDisplayPosition(2);C42.setLeft(416);C42.setParent(this);C42.setTabPosition(2);C42.setThemeDrawStyle("Heading1");C42.setTop(103);C42.setWidth(848);C42.setHeight(10);C42.setWordWrap(true);C42.iC();C43.setDisplayPosition(3);C43.setLeft(400);
C43.setParent(this);C43.setTabPosition(3);C43.setTabStop(false);C43.setTop(145);C43.setWidth(880);C43.setHeight(367);C43.setThemeDrawStyle("Card");C43.setStyle(C3);C43.setLayoutManager(C17);C43.iC();C44.setCaption("Your last session");C44.setDisplayPosition(1);C44.setLeft(24);C44.setParent(C43);C44.setTabPosition(1);C44.setThemeDrawStyle("Heading2");C44.setTop(24);C44.setWidth(830);C44.setHeight(27);C44.setWordWrap(true);C44.setIconAlignment("CENTERRIGHT");C44.setStyle(C4);C44.setIconColor("THEME500");
C44.iC();C45.setCaptionAlignment("TOPLEFT");C45.setDisplayPosition(2);C45.setHeight(10);C45.setLeft(24);C45.setParent(C43);C45.setTabPosition(2);C45.setTop(55);C45.setWidth(830);C45.setWordWrap(true);C45.iC();C46.setCaption("Manage your activity");C46.setDisplayPosition(4);C46.setLeft(0);C46.setParent(C43);C46.setTabPosition(4);C46.setThemeDrawStyle("ForegroundMediumPrimary+TopDivider");C46.setTop(309);C46.setHeight(56);C46.setWidth(878);C46.setIconAlignment("CENTERRIGHT");C46.setIcon("keyboard_arrow_right");
C46.setIconMarginRight(24);C46.setCaptionAlignment("CENTERLEFT");C46.setCaptionMarginLeft(24);C46.setStyle(C4);C46.iC();C47.setDisplayPosition(3);C47.setLayoutManager(C28);C47.setLeft(24);C47.setParent(C43);C47.setRowHeight(56);C47.setTabPosition(3);C47.setTop(69);C47.setHeight(228);C47.setWidth(830);C47.iC();C48.setDisplayPosition(4);C48.setDragStyle("NONE");C48.setLeft(0);C48.setParent(C47);C48.setTabPosition(1);C48.setThemeDrawStyle("card");C48.setHeight(56);C48.setTop(0);C48.setWidth(830);C48.setStyle(C5);
C48.iC();C49.setCaption("LABEL");C49.setDisplayPosition(1);C49.setDragStyle("NONE");C49.setLeft(0);C49.setParent(C47);C49.setTabPosition(2);C49.setThemeDrawStyle("Subheading+ForegroundSecondary");C49.setHeight(19);C49.setTop(19);C49.setWidth(156);C49.iC();C50.setCaption("Settings Value");C50.setDisplayPosition(2);C50.setDragStyle("NONE");C50.setLeft(180);C50.setParent(C47);C50.setTabPosition(4);C50.setHeight(26);C50.setTop(15);C50.setWidth(650);C50.setThemeDrawStyle("Heading3");C50.setCaptionMarginBottom(3);
C50.setCaptionMarginTop(3);C50.iC();l.WEB().aH("DEVICECHANGED",this,e2);C46.aH("CLICK",this,e3);this.setDisplayPosition(1);this.setTabPosition(1);this.setLayoutManager(C6);this.setHeight(536);this.setWidth(1680);this.setVerticalScroll(true);this.aH("INITIALIZE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",91);r.ln=91;{r.ln=94;this.setrefCURRENTUSER(m.SESSION.ref.getCURRENTUSER());r.ln=96;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("ON");r.ln=99;
m.PANELHEADING.setCaption(m.STRINGS.getTEXT("PANELHEADING.CAPTION"));r.ln=100;m.LASTSESSIONCARDHEADING.setCaption(m.STRINGS.getTEXT("LASTSESSIONCARDHEADING.CAPTION"));r.ln=101;m.LASTSESSIONCARDACTION.setCaption(m.STRINGS.getTEXT("LASTSESSIONCARDACTION.CAPTION"));r.ln=104;m.CURRENTUSER.mthGETLASTSESSION();r.ln=107;this.mthSETPANELTEXT();}r.ln=110;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",113);r.ln=113;{r.ln=115;if((m.SESSIONDATA!=null)){r.ln=117;this.mthHANDLELASTSESSIONCARDSETUP();
}}r.ln=121;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LastSessionCardAction.Click",124);r.ln=124;{r.ln=126;m.NAVIGATE.ref.mthTO("USERACTIVITYSETTINGS",u,u,u);}r.ln=128;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#CurrentUser.OnSetAccountDetailsCompleted",131);r.ln=131;{r.ln=134;this.mthSETPANELTEXT();}r.ln=136;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CurrentUser.OnGetLastSessionCompleted",138);var P0=Ps.r("SESSIONDATA");r.ln=138;{r.ln=141;this.setrefSESSIONDATA(P0);
r.ln=142;this.mthHANDLELASTSESSIONCARDSETUP();r.ln=145;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=147;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#CurrentUser.OnGetLastSessionFailed",149);r.ln=149;{r.ln=152;l.gW("BPFPORTAL").getVIEWSPANEL().mthSETWAITINGSTATE("OFF");}r.ln=154;r.e();};cO.mthSETPANELTEXT=function(){var f=this.FLD.BPFAVW001,m=this.REF,r=l.mR(this,cO,"SetPanelText",157);r.ln=157;{r.ln=162;if(l.and(l.n.ge(l.t.Hour(l.dt.Time(l.dt.AsLocalizedDateTime(l.dt.Now(f.F8.get())))),0),l.n.le(l.t.Hour(l.dt.Time(l.dt.AsLocalizedDateTime(l.dt.Now(f.F8.get())))),5)))
{r.ln=164;m.PANELWELCOMEHEADING.set(m.STRINGS.getTEXT("PANELWELCOMEHEADING.CAPTION.EARLY"));}r.ln=169;if(l.and(l.n.ge(l.t.Hour(l.dt.Time(l.dt.AsLocalizedDateTime(l.dt.Now(f.F8.get())))),6),l.n.le(l.t.Hour(l.dt.Time(l.dt.AsLocalizedDateTime(l.dt.Now(f.F8.get())))),11))){r.ln=171;m.PANELWELCOMEHEADING.set(m.STRINGS.getTEXT("PANELWELCOMEHEADING.CAPTION.MORNING"));}r.ln=176;if(l.and(l.n.ge(l.t.Hour(l.dt.Time(l.dt.AsLocalizedDateTime(l.dt.Now(f.F8.get())))),12),l.n.le(l.t.Hour(l.dt.Time(l.dt.AsLocalizedDateTime(l.dt.Now(f.F8.get())))),17)))
{r.ln=178;m.PANELWELCOMEHEADING.set(m.STRINGS.getTEXT("PANELWELCOMEHEADING.CAPTION.AFTERNOON"));}r.ln=183;if(l.and(l.n.ge(l.t.Hour(l.dt.Time(l.dt.AsLocalizedDateTime(l.dt.Now(f.F8.get())))),18),l.n.le(l.t.Hour(l.dt.Time(l.dt.AsLocalizedDateTime(l.dt.Now(f.F8.get())))),23))){r.ln=185;m.PANELWELCOMEHEADING.set(m.STRINGS.getTEXT("PANELWELCOMEHEADING.CAPTION.EVENING"));}}r.ln=189;r.e();};cO.mthHANDLELASTSESSIONCARDSETUP=function(){var m=this.REF,r=l.mR(this,cO,"HandleLastSessionCardSetup",191);var C0=r.cR("DATESTRING","PRIM_DC","UnicodeString");
C0.iC();r.ln=191;{r.ln=197;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=199;m.LASTSESSIONCARDLIST.setLayoutManager(m.LASTSESSIONCARDMOBILELAYOUTLIST);}else{r.ln=203;m.LASTSESSIONCARDLIST.setLayoutManager(m.LASTSESSIONCARDDESKTOPLAYOUTLIST);}r.ln=208;m.LASTSESSIONCARDLIST.clearList();r.ln=210;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=212;m.LASTSESSIONCARDLIST.setRowHeight(56);}else{r.ln=216;m.LASTSESSIONCARDLIST.setRowHeight(32);}r.ln=221;if(l.n.gt(m.SESSIONDATA.getItemCount(),0)){r.ln=225;C0.set(l.s.Replace(l.s.Replace(l.s.Replace(l.s.Replace(l.gW("BPFPORTAL").getAPPSTRINGS().getTEXT("APP.FORMAT.DAYANDDATE"),"%%DAYLONG%%",l.d.AsDisplayString(l.dt.Date(m.SESSIONDATA.get(1).getEVENTDATETIME()),"ML_DDDDDDDDD")),"%%DAYSHORT%%",l.n.AsString(l.d.Day(l.dt.Date(m.SESSIONDATA.get(1).getEVENTDATETIME())))),"%%MONTHLONG%%",l.d.AsDisplayString(l.dt.Date(m.SESSIONDATA.get(1).getEVENTDATETIME()),"MMMMMMMMMM")),"%%YEAR%%",l.n.AsString(l.d.Year(l.dt.Date(m.SESSIONDATA.get(1).getEVENTDATETIME())))));
r.ln=226;m.LASTSESSIONCARDTEXT.set(l.s.Replace(l.s.Replace(m.STRINGS.getTEXT("LASTSESSIONCARDTEXT.CAPTION"),"%%DATE%%",C0.get()),"%%TIME%%",l.s.Substring(l.t.AsDisplayString(l.dt.Time(m.SESSIONDATA.get(1).getEVENTDATETIME()),"HHSMMSSS"),1,5)));r.ln=230;{var l1=m.SESSIONDATA.cI();while(l1.step()){var EVENT=r.sR("EVENT",l1.item());r.ln=232;this.mthADDLASTSESSIONCARDITEM(l.t.AsDisplayString(l.dt.Time(EVENT.getEVENTDATETIME()),"HHSMMSSS"),EVENT.getEVENT());r.ln=234;}l1.end();r.dR("EVENT");}}else{r.ln=238;
m.LASTSESSIONCARDTEXT.set(m.STRINGS.getTEXT("LASTSESSIONCARDTEXT.CAPTION.NOSESSIONS"));}}r.ln=242;r.e();};cO.mthADDLASTSESSIONCARDITEM=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"AddLastSessionCardItem",244);var P0=r.cP("LABEL","PRIM_ALPH");var P1=r.cP("VALUE","PRIM_ALPH");P0.set(p0);P1.set(p1);r.ln=244;{r.ln=249;if(l.s.IsNull(P1.get())){r.e();return;}r.ln=254;if(l.b.IsFalse(l.s.IsNull(P0.get()))){r.ln=257;m.LASTSESSIONCARDLIST.addEntry();r.ln=260;m.LASTSESSIONCARDLISTLABEL.getCurrentItem().setCaption(P0.get());
r.ln=261;m.LASTSESSIONCARDLISTVALUE.getCurrentItem().setCaption(P1.get());}else{r.ln=266;m.LASTSESSIONCARDLISTVALUE.getCurrentItem().setCaption(l.cat(m.LASTSESSIONCARDLISTVALUE.getCurrentItem().getCaption(),l.cat(l.n.AsUnicodeString(10),P1.get())));}}r.ln=270;r.e();};{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"BPFFLD031"});Fd.F6.pl=function(){this.aN.call(this);var C0=this.cR("FALSE","PRIM_PKIT");var C1=this.cR("TRUE","PRIM_PKIT");C0.setCaption("False");C0.setDefault(true);
C0.setParent(this);C0.setValue("False");C0.iC();C1.setCaption("True");C1.setParent(this);C1.setValue("True");C1.iC();};l.cFC({co:Fd.F6.pl,an:"PRIM_PKLT",fn:"BPFFLD031",cn:"Picklist"});}cO.setrefCURRENTUSER=function(rn){if(this.REF.CURRENTUSER!=null){this.REF.CURRENTUSER.rH("ONSETACCOUNTDETAILSCOMPLETED",this,e4);this.REF.CURRENTUSER.rH("ONGETLASTSESSIONCOMPLETED",this,e5);this.REF.CURRENTUSER.rH("ONGETLASTSESSIONFAILED",this,e6);}this.sR("CURRENTUSER",rn);if(this.REF.CURRENTUSER!=null){this.REF.CURRENTUSER.aH("ONSETACCOUNTDETAILSCOMPLETED",this,e4);
this.REF.CURRENTUSER.aH("ONGETLASTSESSIONCOMPLETED",this,e5);this.REF.CURRENTUSER.aH("ONGETLASTSESSIONFAILED",this,e6);}};cO.setrefSESSIONDATA=function(rn){var f=this.FLD.BPFAVW001;this.sR("SESSIONDATA",rn);if(this.REF.SESSIONDATA!=null){this.REF.SESSIONDATA.setCollects("BPFCLS014");this.REF.SESSIONDATA.aLF({"BPFFLD025":f.F1,"BPFFLD026":f.F2,"BPFFLD027":f.F3,"BPFFLD029":f.F4,"BPFFLD030":f.F5,"BPFFLD031":f.F6,"BPFFLD086":f.F7});}};},{rc:["BPFAPP002","BPFAPP001","BPFVLR001"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_MD.FlatButton","PRIM_MD.List","PRIM_MD.ListLabel","PRIM_FLD","PRIM_PKLT","PRIM_DTIM"],
dc:["BPFCLS002","BPFCLS014"],dp:["PRIM_LCOL","PRIM_DC.UnicodeString"]});