﻿LANSA.addComponent({id:"XMDDLG04",nm:"xMdDialog4",ot:"wv",tp:"Dialog",pt:"ap",de:"Material Design Dialog",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_DLG",co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C2=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C4=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C5=this.cR("LAYOUT2","PRIM_TBLO");var C6=this.cR("LAYOUT2ROW1","PRIM_TBLO","Row");
var C7=this.cR("LAYOUT2COLUMN1","PRIM_TBLO","Column");var C8=this.cR("LAYOUT2ITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUT2ITEM2","PRIM_TBLO","Item");var C10=this.cR("LAYOUT2ITEM3","PRIM_TBLO","Item");var C11=this.cR("LAYOUT2ITEM4","PRIM_TBLO","Item");var C12=this.cR("LAYOUT2ITEM5","PRIM_TBLO","Item");var C13=this.cR("LAYOUT2ITEM6","PRIM_TBLO","Item");var C14=this.cR("LAYOUT2ITEM7","PRIM_TBLO","Item");var C15=this.cR("LABEL1","PRIM_MD","Label");var C16=this.cR("BUTTON","PRIM_MD","FlatButton");
var C17=this.cR("BUTTON1","PRIM_MD","FlatButton");var C18=this.cR("PANEL","PRIM_PANL");var C19=this.cR("RADIOBUTTON","PRIM_MD","RadioButton");var C20=this.cR("RADIOBUTTON1","PRIM_MD","RadioButton");var C21=this.cR("RADIOBUTTON2","PRIM_MD","RadioButton");var C22=this.cR("RADIOBUTTON3","PRIM_MD","RadioButton");var C23=this.cR("RADIOBUTTON4","PRIM_MD","RadioButton");var C24=this.cR("RADIOBUTTON5","PRIM_MD","RadioButton");var C25=this.cR("RADIOBUTTON6","PRIM_MD","RadioButton");C0.iC();C1.setDisplayPosition(1);
C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("TOPCENTER");C3.setColumn(C2);C3.setManage(C15);C3.setParent(C0);C3.setRow(C1);C3.setSizing("FITTOWIDTH");C3.setFlow("DOWN");C3.iC();C4.setColumn(C2);C4.setManage(C18);C4.setParent(C0);C4.setRow(C1);C4.setMarginTop(60);C4.setMarginBottom(50);C4.iC();C5.iC();C6.setDisplayPosition(1);C6.setParent(C5);C6.iC();C7.setDisplayPosition(1);C7.setParent(C5);C7.iC();C8.setAlignment("TOPCENTER");C8.setColumn(C7);C8.setManage(C19);
C8.setParent(C5);C8.setRow(C6);C8.setSizing("FITTOWIDTH");C8.setFlow("DOWN");C8.setMarginLeft(20);C8.setMarginRight(20);C8.iC();C9.setAlignment("TOPCENTER");C9.setColumn(C7);C9.setManage(C20);C9.setParent(C5);C9.setRow(C6);C9.setSizing("FITTOWIDTH");C9.setFlow("DOWN");C9.setMarginLeft(20);C9.setMarginRight(20);C9.iC();C10.setAlignment("TOPCENTER");C10.setColumn(C7);C10.setManage(C21);C10.setParent(C5);C10.setRow(C6);C10.setSizing("FITTOWIDTH");C10.setFlow("DOWN");C10.setMarginLeft(20);C10.setMarginRight(20);
C10.iC();C11.setAlignment("TOPCENTER");C11.setColumn(C7);C11.setManage(C22);C11.setParent(C5);C11.setRow(C6);C11.setSizing("FITTOWIDTH");C11.setFlow("DOWN");C11.setMarginLeft(20);C11.setMarginRight(20);C11.iC();C12.setAlignment("TOPCENTER");C12.setColumn(C7);C12.setManage(C23);C12.setParent(C5);C12.setRow(C6);C12.setSizing("FITTOWIDTH");C12.setFlow("DOWN");C12.setMarginLeft(20);C12.setMarginRight(20);C12.iC();C13.setAlignment("TOPCENTER");C13.setColumn(C7);C13.setManage(C24);C13.setParent(C5);C13.setRow(C6);
C13.setSizing("FITTOWIDTH");C13.setFlow("DOWN");C13.setMarginLeft(20);C13.setMarginRight(20);C13.iC();C14.setAlignment("TOPCENTER");C14.setColumn(C7);C14.setManage(C25);C14.setParent(C5);C14.setRow(C6);C14.setSizing("FITTOWIDTH");C14.setFlow("DOWN");C14.setMarginLeft(20);C14.setMarginRight(20);C14.iC();C15.setCaption("Phone Ringtone");C15.setDisplayPosition(1);C15.setLeft(0);C15.setParent(this);C15.setTabPosition(1);C15.setTabStop(false);C15.setThemeDrawStyle("Heading1+Strong+BottomDivider");C15.setTop(0);
C15.setWidth(287);C15.setWordWrap(true);C15.setCaptionMarginTop(20);C15.setHeight(60);C15.setCaptionAlignment("TOPLEFT");C15.setCaptionMarginLeft(20);C15.setCaptionMarginRight(20);C15.setPaddingBottom(10);C15.iC();C16.setCaption("CANCEL");C16.setDisplayPosition(2);C16.setLeft(80);C16.setParent(this);C16.setTabPosition(2);C16.setTabStop(false);C16.setThemeDrawStyle("ForegroundMediumPrimary");C16.setTop(260);C16.setButtonCancel(true);C16.iC();C17.setCaption("OK");C17.setDisplayPosition(3);C17.setLeft(184);
C17.setParent(this);C17.setTabPosition(3);C17.setTabStop(false);C17.setThemeDrawStyle("ForegroundMediumPrimary");C17.setTop(260);C17.setButtonDefault(true);C17.iC();C18.setDisplayPosition(4);C18.setLeft(0);C18.setParent(this);C18.setTabPosition(4);C18.setTabStop(false);C18.setTop(60);C18.setHeight(193);C18.setWidth(287);C18.setVerticalScroll(true);C18.setLayoutManager(C5);C18.setThemeDrawStyle("BottomDivider");C18.iC();C19.setCaption("Hangouts call");C19.setDisplayPosition(1);C19.setLeft(20);C19.setParent(C18);
C19.setTabPosition(7);C19.setTabStop(false);C19.setTop(0);C19.setWidth(229);C19.setHeight(50);C19.iC();C20.setCaption("Hangouts Message");C20.setDisplayPosition(2);C20.setLeft(20);C20.setParent(C18);C20.setTabPosition(6);C20.setTabStop(false);C20.setTop(50);C20.setWidth(229);C20.setHeight(50);C20.setChecked(true);C20.setIconColor("THEME500");C20.iC();C21.setCaption("Pinger");C21.setDisplayPosition(3);C21.setLeft(20);C21.setParent(C18);C21.setTabPosition(5);C21.setTabStop(false);C21.setTop(100);C21.setWidth(229);
C21.setHeight(50);C21.iC();C22.setCaption("Wasteland");C22.setDisplayPosition(4);C22.setLeft(20);C22.setParent(C18);C22.setTabPosition(4);C22.setTabStop(false);C22.setTop(150);C22.setWidth(229);C22.setHeight(50);C22.iC();C23.setCaption("Callisto");C23.setDisplayPosition(5);C23.setLeft(20);C23.setParent(C18);C23.setTabPosition(3);C23.setTabStop(false);C23.setTop(200);C23.setWidth(229);C23.setHeight(50);C23.iC();C24.setCaption("Dione");C24.setDisplayPosition(6);C24.setLeft(20);C24.setParent(C18);C24.setTabPosition(2);
C24.setTabStop(false);C24.setTop(250);C24.setWidth(229);C24.setHeight(50);C24.iC();C25.setCaption("Ganymede");C25.setDisplayPosition(7);C25.setLeft(20);C25.setParent(C18);C25.setTabPosition(1);C25.setTabStop(false);C25.setTop(300);C25.setWidth(229);C25.setHeight(50);C25.iC();C16.aH("CLICK",this,e2);C17.aH("CLICK",this,e1);this.setLayoutManager(C0);this.setHeight(305);this.setWidth(289);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Button1.Click",32);r.ln=32;{r.ln=34;this.mthCLOSE();}r.ln=36;r.e();
};function e2(sender,Ps){var r=l.eR(this,cO,"#Button.Click",38);r.ln=38;{r.ln=40;this.mthCLOSE();}r.ln=42;r.e();};},{rp:["PRIM_DLG","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.FlatButton","PRIM_PANL","PRIM_MD.RadioButton"]});