﻿LANSA.addComponent({id:"XDEMOTIL",nm:"xDemoTileDesign",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Sample Tile Design",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximageima.png");var Fd={F1:{nm:"STD_TEXT",ft:"A",ln:50,dc:0,lb:{"ENG":"Text","FRA":"Texte","JPN":"Text","LLL":"Text"}[cL],h1:{"ENG":"Text","FRA":"Texte","JPN":"Text","LLL":"Text"}[cL],h2:" ",h3:" ",de:{"ENG":"Standard TEXT","FRA":"Texte Standard","JPN":"Standard TEXT","LLL":"Standard TEXT"}[cL],
dv:"",ia:["LC"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"Text must be specified","FRA":"Texte must be specified","JPN":"Text must be specified","LLL":"Text must be specified"}[cL]}]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_TILE.ITileDesign"],fd:Fd,mt:{OnAdd:{ps:{"TileItem":{pt:"i"}}},OnDelete:{ps:{"TileItem":{pt:"i"}}},OnFind:{ps:{"TileItem":{pt:"i"},"Key":{pt:"i"}}},OnItemGotFocus:{ps:{"TileItem":{pt:"i"}}},OnItemGotReference:{ps:{"TileItem":{pt:"i"}}},OnItemGotSelection:{ps:{
"TileItem":{pt:"i"}}},OnItemImageChanged:{ps:{"TileItem":{pt:"i"}}},OnItemLostFocus:{ps:{"TileItem":{pt:"i"}}},OnItemLostSelection:{ps:{"TileItem":{pt:"i"}}},OnItemRealizing:{ps:{"TileItem":{pt:"i"}}},OnSort:{ps:{"TileItem":{pt:"i"},"CompareTo":{pt:"i"},"Key":{pt:"i"}}},OnUpdate:{ps:{"TileItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOTIL",Fd);var C0=this.cR("IMAGEPANEL","PRIM_PANL");var C1=this.cR("TITLE","PRIM_LABL");var C2=this.cR("CAPTION1","PRIM_LABL");var C3=this.cR("CAPTION2","PRIM_LABL");
var C4=this.cR("CAPTION3","PRIM_LABL");var C5=this.cR("TABLE","PRIM_TBLO");var C6=this.cR("COLUMN1","PRIM_TBLO","Column");var C7=this.cR("COLUMN2","PRIM_TBLO","Column");var C8=this.cR("ROW1","PRIM_TBLO","Row");var C9=this.cR("ROW2","PRIM_TBLO","Row");var C10=this.cR("ROW3","PRIM_TBLO","Row");var C11=this.cR("ROW4","PRIM_TBLO","Row");var C12=this.cR("ITEM1","PRIM_TBLO","Item");var C13=this.cR("ITEM2","PRIM_TBLO","Item");var C14=this.cR("ITEM3","PRIM_TBLO","Item");var C15=this.cR("ITEM4","PRIM_TBLO","Item");
var C16=this.cR("ITEM5","PRIM_TBLO","Item");C0.setDisplayPosition(1);C0.setHeight(37);C0.setImage(rc1);C0.setLeft(0);C0.setParent(this);C0.setTabPosition(1);C0.setTabStop(false);C0.setTop(0);C0.setWidth(48);C0.iC();C1.setCaption("Title");C1.setDisplayPosition(2);C1.setEllipses("WORD");C1.setHeight(20);C1.setLeft(48);C1.setMarginLeft(2);C1.setParent(this);C1.setTabPosition(2);C1.setTabStop(false);C1.setTop(0);C1.setVerticalAlignment("CENTER");C1.setWidth(187);C1.setWordWrap(false);C1.setThemeDrawStyle("Strong+Heading2");
C1.iC();C2.setCaption("Caption");C2.setDisplayPosition(5);C2.setEllipses("WORD");C2.setHeight(17);C2.setLeft(48);C2.setMarginLeft(2);C2.setParent(this);C2.setTabPosition(5);C2.setTabStop(false);C2.setTop(20);C2.setVerticalAlignment("CENTER");C2.setWidth(187);C2.setWordWrap(false);C2.iC();C3.setCaption("Caption");C3.setDisplayPosition(4);C3.setEllipses("WORD");C3.setHeight(17);C3.setLeft(48);C3.setMarginLeft(2);C3.setParent(this);C3.setTabPosition(4);C3.setTabStop(false);C3.setTop(37);C3.setVerticalAlignment("CENTER");
C3.setWidth(187);C3.setWordWrap(false);C3.iC();C4.setCaption("Caption");C4.setDisplayPosition(3);C4.setEllipses("WORD");C4.setHeight(16);C4.setLeft(48);C4.setMarginLeft(2);C4.setParent(this);C4.setTabPosition(3);C4.setTabStop(false);C4.setTop(54);C4.setVerticalAlignment("CENTER");C4.setWidth(187);C4.setWordWrap(false);C4.iC();C5.iC();C6.setParent(C5);C6.setUnits("PIXELS");C6.setWidth(48);C6.setDisplayPosition(1);C6.iC();C7.setParent(C5);C7.setDisplayPosition(2);C7.iC();C8.setHeight(20);C8.setParent(C5);
C8.setUnits("PIXELS");C8.setDisplayPosition(1);C8.iC();C9.setParent(C5);C9.setDisplayPosition(2);C9.iC();C10.setParent(C5);C10.setDisplayPosition(3);C10.iC();C11.setParent(C5);C11.setDisplayPosition(4);C11.iC();C12.setColumn(C6);C12.setManage(C0);C12.setParent(C5);C12.setRow(C8);C12.setRowSpan(2);C12.iC();C13.setColumn(C7);C13.setManage(C1);C13.setParent(C5);C13.setRow(C8);C13.iC();C14.setColumn(C7);C14.setManage(C2);C14.setParent(C5);C14.setRow(C9);C14.iC();C15.setColumn(C7);C15.setManage(C3);C15.setParent(C5);
C15.setRow(C10);C15.iC();C16.setColumn(C7);C16.setManage(C4);C16.setParent(C5);C16.setRow(C11);C16.iC();this.setDisplayPosition(1);this.setHeight(70);this.setLayoutManager(C5);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(235);this.setThemeDrawStyle("ListItem");this.aLF({"STD_TEXT":f.F1});}});cO.mthONADD=function(p0){var r=l.mR(this,cO,"OnAdd",31);var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);r.ln=31;{}r.ln=34;r.e();};cO.mthONDELETE=function(p0){var r=l.mR(this,cO,"OnDelete",36);
var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);r.ln=36;{}r.ln=38;r.e();};cO.mthONFIND=function(p1,p2){var r=l.mR(this,cO,"OnFind",40);var P0=r.cPb("RESULT");var P1=r.cPD("TILEITEM");var P2=r.cPD("KEY");P1=r.sR("TILEITEM",p1);P2=r.sR("KEY",p2);r.ln=40;{}r.ln=42;return r.rV(P0.get());};cO.mthONITEMGOTFOCUS=function(p0){var r=l.mR(this,cO,"OnItemGotFocus",44);var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);r.ln=44;{}r.ln=46;r.e();};cO.mthONITEMGOTREFERENCE=function(p0){var r=l.mR(this,cO,"OnItemGotReference",48);
var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);r.ln=48;{}r.ln=50;r.e();};cO.mthONITEMGOTSELECTION=function(p0){var r=l.mR(this,cO,"OnItemGotSelection",52);var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);r.ln=52;{}r.ln=54;r.e();};cO.mthONITEMIMAGECHANGED=function(p0){var r=l.mR(this,cO,"OnItemImageChanged",56);var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);r.ln=56;{}r.ln=58;r.e();};cO.mthONITEMLOSTFOCUS=function(p0){var r=l.mR(this,cO,"OnItemLostFocus",60);var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);
r.ln=60;{}r.ln=62;r.e();};cO.mthONITEMLOSTSELECTION=function(p0){var r=l.mR(this,cO,"OnItemLostSelection",64);var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);r.ln=64;{}r.ln=66;r.e();};cO.mthONITEMREALIZING=function(p0){var r=l.mR(this,cO,"OnItemRealizing",68);var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);r.ln=68;{}r.ln=70;r.e();};cO.mthONSORT=function(p1,p2,p3){var r=l.mR(this,cO,"OnSort",72);var P0=r.cPe("RESULT","EQUAL");var P1=r.cPD("TILEITEM");var P2=r.cPD("COMPARETO");var P3=r.cPD("KEY");P1=r.sR("TILEITEM",p1);
P2=r.sR("COMPARETO",p2);P3=r.sR("KEY",p3);r.ln=72;{}r.ln=74;return r.rV(P0.get());};cO.mthONUPDATE=function(p0){var r=l.mR(this,cO,"OnUpdate",76);var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);r.ln=76;{}r.ln=78;r.e();};function rl1(F1){var v=F1.get();return(l.s.eq(v,""));};},{rp:["PRIM_PANL","PRIM_LABL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_FLD"]});