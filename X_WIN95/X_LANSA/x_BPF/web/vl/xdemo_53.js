﻿LANSA.addComponent({id:"XDEMO_53",nm:"xDemoWebSPAHeader",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Header",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"XDEMO_51",co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C2=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C4=this.cR("LABEL1","PRIM_LABL");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);
C2.setParent(C0);C2.iC();C3.setAlignment("CENTERLEFT");C3.setColumn(C2);C3.setManage(C4);C3.setParent(C0);C3.setRow(C1);C3.setSizing("NONE");C3.setMarginLeft(8);C3.iC();C4.setCaption("Header");C4.setDisplayPosition(1);C4.setEllipses("WORD");C4.setHeight(49);C4.setLeft(8);C4.setParent(this);C4.setTabPosition(1);C4.setTabStop(false);C4.setTop(12);C4.setVerticalAlignment("CENTER");C4.setWidth(249);C4.setThemeDrawStyle("Title");C4.iC();this.setHeight(73);this.setWidth(553);this.setLayoutManager(C0);this.setThemeDrawStyle("Title+DarkTitle");
}});},{rc:["XDEMO_51"],rp:["PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_LABL"]});