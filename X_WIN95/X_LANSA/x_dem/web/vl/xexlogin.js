﻿LANSA.addComponent({id:"XEXLOGIN",nm:"XEXLogin",ot:"wv",tp:"Dialog",pt:"ap",de:"Expenses Login Dialog",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_DLG",co:function(){cO.aN.call(this);var C0=this.cR("STYLELOGIN","PRIM_VS","Style");var C1=this.cR("STYLE2","PRIM_VS","Style");var C2=this.cR("LAYOUT1","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("COLUMN2","PRIM_TBLO","Column");var C5=this.cR("COLUMN3","PRIM_TBLO","Column");var C6=this.cR("ROW1","PRIM_TBLO","Row");
var C7=this.cR("ROW2","PRIM_TBLO","Row");var C8=this.cR("ROW3","PRIM_TBLO","Row");var C9=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C13=this.cR("LABELCAPTION","PRIM_MD","Label");var C14=this.cR("USERNAME","PRIM_MD","Edit");var C15=this.cR("PASSWORD","PRIM_MD","Edit");var C16=this.cR("BUTTONLOGIN","PRIM_MD","FlatButton");var C17=this.cA("APPLICATION","XEXAPP");
C0.setNormBackColor("THEME900");C0.iC();C1.setFontSize(20);C1.setFontUnits("PIXEL");C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.setWidth(260);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(3);C5.setParent(C2);C5.iC();C6.setDisplayPosition(1);C6.setParent(C2);C6.setMinHeight(100);C6.iC();C7.setDisplayPosition(2);C7.setParent(C2);C7.setHeight(220);C7.setUnits("PIXELS");C7.iC();C8.setDisplayPosition(3);C8.setParent(C2);C8.setMinHeight(100);
C8.iC();C9.setColumn(C4);C9.setManage(C13);C9.setParent(C2);C9.setRow(C6);C9.setSizing("CONTENTWIDTH");C9.setAlignment("BOTTOMCENTER");C9.iC();C10.setColumn(C4);C10.setParent(C2);C10.setRow(C7);C10.setSizing("FITTOWIDTH");C10.setFlow("CENTERVERTICAL");C10.setManage(C14);C10.iC();C11.setColumn(C4);C11.setManage(C15);C11.setParent(C2);C11.setRow(C7);C11.setSizing("FITTOWIDTH");C11.setFlow("CENTERVERTICAL");C11.iC();C12.setAlignment("TOPCENTER");C12.setColumn(C4);C12.setManage(C16);C12.setParent(C2);
C12.setRow(C8);C12.setSizing("NONE");C12.setMarginLeft(10);C12.setMarginRight(10);C12.iC();C13.setCaption("Expenses");C13.setDisplayPosition(1);C13.setHeight(32);C13.setParent(this);C13.setTabPosition(4);C13.setTop(191);C13.setWidth(90);C13.setStyle(C1);C13.setLeft(142);C13.iC();C14.setParent(this);C14.setTop(263);C14.setWidth(260);C14.setLeft(57);C14.setDisplayPosition(2);C14.setTabPosition(1);C14.setHeight(70);C14.setCaption("Username");C14.iC();C15.setParent(this);C15.setTop(333);C15.setWidth(260);
C15.setLeft(57);C15.setDisplayPosition(3);C15.setTabPosition(2);C15.setHeight(70);C15.setCaption("Password");C15.setPasswordChar("*");C15.iC();C16.setCaption("LOGIN");C16.setDisplayPosition(4);C16.setLeft(107);C16.setParent(this);C16.setTabPosition(3);C16.setTop(443);C16.setWidth(160);C16.setThemeDrawStyle("Primary");C16.iC();if((C17!=null)&&(C17.iI()==false)){C17.iC();}C14.aH("ENTER",this,e1);C15.aH("ENTER",this,e1);C16.aH("CLICK",this,e1);this.setHeight(667);this.setWidth(375);this.setLayoutManager(C2);
this.setVerticalScroll(true);this.setThemeBackground("DARK");this.setPlacement("FULLSCREEN");this.setStyle(C0);this.aH("PREPARE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#UserName.Enter #Password.Enter #ButtonLogIn.Click",34);r.ln=34;{r.ln=36;m.USERNAME.setVisible(false);r.ln=37;m.PASSWORD.setVisible(false);r.ln=38;m.BUTTONLOGIN.setVisible(false);r.ln=40;m.LABELCAPTION.setCaption("Signing in...");r.ln=41;this.setImage(l.WEB().getLoadingImage());r.ln=43;m.APPLICATION.ref.mthLOGIN();
}r.ln=45;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",47);r.ln=47;{r.ln=49;m.USERNAME.set("");m.PASSWORD.set("");r.ln=51;m.USERNAME.setVisible(true);r.ln=52;m.PASSWORD.setVisible(true);r.ln=53;m.BUTTONLOGIN.setVisible(true);r.ln=55;m.LABELCAPTION.setCaption("Expenses");r.ln=56;this.setImage(null);}r.ln=58;r.e();};},{rc:["XEXAPP"],rp:["PRIM_DLG","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.Edit","PRIM_MD.FlatButton"]
});