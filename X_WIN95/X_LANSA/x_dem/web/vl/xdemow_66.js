﻿LANSA.addComponent({id:"XDEMOW_66",nm:"xDemoWebPopupDialog",ot:"wp",tp:"Web Page",pt:"ap",de:"Popup as a Dialog",tl:15000003},function(l,oI,u){var c1=l.cDec("1.25"),c2=l.cDec("1.46");var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("COLUMN2","PRIM_TBLO","Column");var C3=this.cR("COLUMN3","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("ROW2","PRIM_TBLO","Row");
var C6=this.cR("ROW3","PRIM_TBLO","Row");var C7=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C8=this.cR("LABEL1","PRIM_LABL");var C9=this.cR("DIALOGS","PRIM_ACOL");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.iC();C4.setDisplayPosition(1);C4.setParent(C0);C4.setHeight(60);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(2);C5.setParent(C0);C5.setHeight(c1);C5.iC();C6.setDisplayPosition(3);
C6.setParent(C0);C6.setHeight(c2);C6.iC();C7.setAlignment("TOPLEFT");C7.setColumn(C1);C7.setFlow("DOWN");C7.setManage(C8);C7.setParent(C0);C7.setRow(C4);C7.setColumnSpan(3);C7.iC();C8.setCaption("Popup Dialogs - Double Click To Create a Dialog");C8.setDisplayPosition(1);C8.setEllipses("WORD");C8.setHeight(60);C8.setLeft(0);C8.setParent(this);C8.setTabPosition(1);C8.setTabStop(false);C8.setTop(0);C8.setVerticalAlignment("CENTER");C8.setWidth(1001);C8.setMarginLeft(4);C8.setThemeDrawStyle("Title+DarkTitle");
C8.iC();C9.setCollects("PRIM_PPNL");C9.iC();C8.aH("DOUBLECLICK",this,e1);C9.aH("DOUBLECLICK",this,e2);this.setHeight(553);this.setWidth(1001);this.setLayoutManager(C0);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Label1.DoubleClick",17);r.ln=17;{r.ln=19;m.DIALOGS.mthINSERT(l.cC("PRIM_PPNL"));r.ln=21;m.DIALOGS.getLast().setCaption("Drag here to move the popup");r.ln=22;m.DIALOGS.getLast().setTitleBar(true);r.ln=23;m.DIALOGS.getLast().setAutoClose(false);r.ln=24;m.DIALOGS.getLast().setTouchSize("ALL");
r.ln=25;m.DIALOGS.getLast().setTouchMove("BOTH");r.ln=26;m.DIALOGS.getLast().setCloseButton(true);r.ln=28;m.DIALOGS.getLast().mthSHOWPOPUP(u,u,u,u,u);}r.ln=30;r.e();};function e2(SENDER,Ps){var r=l.eR(this,cO,"#Dialogs<>.DoubleClick",32);r.ln=32;{r.ln=34;l.cast(SENDER,"PRIM_CTRL").setDisplayPosition(0);}r.ln=36;r.e();};},{rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_ACOL"]});