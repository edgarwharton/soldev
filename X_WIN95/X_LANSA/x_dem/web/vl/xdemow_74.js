﻿LANSA.addComponent({id:"XDEMOW_74",nm:"xDemoWebSPA",ot:"wp",tp:"Web Page",pt:"ap",de:"Single Page Application",tl:15000003},function(l,oI,u){var c1=l.cDec("1.51"),c2=l.cDec("2.44");var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cA("GAPPLICATION","XDEMO_48");var C1=this.cR("LAYOUT1","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("COLUMN2","PRIM_TBLO","Column");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");
var C6=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C8=this.cR("COLUMNDIVIDER1","PRIM_TBLO","ColumnDivider");var C9=this.cR("ROW1","PRIM_TBLO","Row");var C10=this.cR("ROW2","PRIM_TBLO","Row");var C11=this.cR("ROW3","PRIM_TBLO","Row");var C12=this.cR("XDEMOWEBSPAHEADER","XDEMO_53");var C13=this.cR("XDEMOWEBSPATOOLBAR","XDEMO_54");var C14=this.cR("XDEMOWEBSPAMENU","XDEMO_50");var C15=this.cR("XDEMOWEBSPABODY","XDEMO_52");if((C0!=null)&&(C0.iI()==false))
{C0.iC();}C1.setDividerStyle("GAP");C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setWidth(241);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(3);C3.setParent(C1);C3.setWidth(c1);C3.iC();C4.setColumn(C2);C4.setManage(C12);C4.setParent(C1);C4.setRow(C9);C4.setColumnSpan(3);C4.iC();C5.setColumn(C2);C5.setManage(C13);C5.setParent(C1);C5.setRow(C10);C5.setColumnSpan(3);C5.iC();C6.setColumn(C2);C6.setManage(C14);C6.setParent(C1);C6.setRow(C11);C6.iC();C7.setColumn(C3);C7.setManage(C15);C7.setParent(C1);
C7.setRow(C11);C7.iC();C8.setDisplayPosition(2);C8.setParent(C1);C8.setWidth(4);C8.setStartRow(C11);C8.iC();C9.setDisplayPosition(1);C9.setParent(C1);C9.setHeight(76);C9.setUnits("PIXELS");C9.iC();C10.setDisplayPosition(2);C10.setParent(C1);C10.setHeight(57);C10.setUnits("PIXELS");C10.iC();C11.setDisplayPosition(3);C11.setParent(C1);C11.setHeight(c2);C11.iC();C12.setParent(this);C12.setTabStop(false);C12.setHeight(76);C12.setWidth(984);C12.iC();C13.setDisplayPosition(2);C13.setParent(this);C13.setTabPosition(2);
C13.setTabStop(false);C13.setHeight(57);C13.setWidth(984);C13.setTop(76);C13.iC();C14.setDisplayPosition(3);C14.setParent(this);C14.setTabPosition(3);C14.setTabStop(false);C14.setTop(133);C14.setHeight(571);C14.setWidth(241);C14.iC();C15.setDisplayPosition(4);C15.setLeft(245);C15.setParent(this);C15.setTabPosition(4);C15.setTabStop(false);C15.setTop(133);C15.setHeight(571);C15.setWidth(739);C15.iC();this.setHeight(704);this.setWidth(984);this.setLayoutManager(C1);this.setTheme(l.THEME().get("2015BLUE"));
this.aH("INITIALIZE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.Initialize",22);r.ln=22;{r.ln=24;for(var i1=1,s1=1,t1=l.tI(3);(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=26;m.GAPPLICATION.ref.mthADD();}}r.ln=30;r.e();};},{rc:["XDEMO_48","XDEMO_53","XDEMO_54","XDEMO_50","XDEMO_52"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_TBLO.ColumnDivider","PRIM_TBLO.Row"]});