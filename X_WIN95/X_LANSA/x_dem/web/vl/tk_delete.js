﻿LANSA.addComponent({id:"TK_DELETE",nm:"TK_Delete",ot:"wv",tp:"Dialog",pt:"ap",de:"Tasks Delete Dialog",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_DLG",ev:{DeleteConfirmed:{}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUTMAIN","PRIM_TBLO");var C1=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C2=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C4=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C5=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");
var C6=this.cR("TEXT","PRIM_MD","Label");var C7=this.cR("BUTTONNO","PRIM_MD","RaisedButton");var C8=this.cR("BUTTONYES","PRIM_MD","RaisedButton");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setColumn(C2);C3.setManage(C6);C3.setParent(C0);C3.setRow(C1);C3.setSizing("CONTENTHEIGHTFITTOWIDTH");C3.setMarginLeft(16);C3.setMarginRight(16);C3.setAlignment("TOPCENTER");C3.setMarginTop(32);C3.iC();C4.setColumn(C2);C4.setManage(C7);C4.setParent(C0);
C4.setRow(C1);C4.setSizing("NONE");C4.setFlow("CENTERHORIZONTAL");C4.setAlignment("BOTTOMCENTER");C4.setMarginBottom(24);C4.setMarginLeft(8);C4.setMarginRight(8);C4.iC();C5.setColumn(C2);C5.setManage(C8);C5.setParent(C0);C5.setRow(C1);C5.setSizing("NONE");C5.setFlow("CENTERHORIZONTAL");C5.setAlignment("BOTTOMCENTER");C5.setMarginBottom(24);C5.setMarginLeft(8);C5.setMarginRight(8);C5.iC();C6.setCaption("Are you sure you want to delete this task?");C6.setDisplayPosition(1);C6.setParent(this);C6.setTabPosition(1);
C6.setThemeDrawStyle("Heading2");C6.setTop(32);C6.setHeight(50);C6.setWidth(266);C6.setCaptionAlignment("CENTER");C6.setWordWrap(true);C6.setEllipses(false);C6.setLeft(16);C6.iC();C7.setCaption("NO");C7.setDisplayPosition(2);C7.setLeft(41);C7.setParent(this);C7.setTabPosition(2);C7.setTop(114);C7.setHeight(50);C7.iC();C8.setCaption("YES");C8.setDisplayPosition(3);C8.setLeft(157);C8.setParent(this);C8.setTabPosition(3);C8.setTop(114);C8.setHeight(50);C8.iC();C7.aH("CLICK",this,e2);C8.aH("CLICK",this,e1);
this.setHeight(190);this.setLayoutManager(C0);this.setWidth(300);this.setAutoClose(true);}});function e1(sender,Ps){var r=l.eR(this,cO,"#ButtonYes.Click",23);r.ln=23;{r.ln=25;this.fE("DELETECONFIRMED");r.ln=27;this.mthCLOSE();}r.ln=29;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ButtonNo.Click",31);r.ln=31;{r.ln=33;this.mthCLOSE();}r.ln=35;r.e();};},{rp:["PRIM_DLG","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.RaisedButton"]});