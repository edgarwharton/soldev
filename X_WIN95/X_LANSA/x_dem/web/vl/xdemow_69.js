﻿LANSA.addComponent({id:"XDEMOW_69",nm:"xDemoWebLayoutAttachment",ot:"wp",tp:"Web Page",pt:"ap",de:"Attachment Layout Manager",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEM1","PRIM_ATLI");var C2=this.cR("ATTACHITEM2","PRIM_ATLI");var C3=this.cR("ATTACHITEM3","PRIM_ATLI");var C4=this.cR("ATTACHITEM4","PRIM_ATLI");var C5=this.cR("ATTACHITEM5","PRIM_ATLI");var C6=this.cR("PANEL1","XDEMO_62");
var C7=this.cR("PANEL2","XDEMO_62");var C8=this.cR("PANEL3","XDEMO_62");var C9=this.cR("PANEL4","XDEMO_62");var C10=this.cR("PANEL5","XDEMO_62");C0.iC();C1.setAttachment("TOP");C1.setManage(C6);C1.setParent(C0);C1.iC();C2.setAttachment("LEFT");C2.setManage(C7);C2.setParent(C0);C2.iC();C3.setAttachment("RIGHT");C3.setManage(C8);C3.setParent(C0);C3.iC();C4.setAttachment("BOTTOM");C4.setManage(C9);C4.setParent(C0);C4.iC();C5.setAttachment("CENTER");C5.setManage(C10);C5.setParent(C0);C5.iC();C6.setParent(this);
C6.setTabStop(false);C6.setWidth(1200);C6.iC();C7.setDisplayPosition(2);C7.setHeight(414);C7.setParent(this);C7.setTabPosition(2);C7.setTabStop(false);C7.setTop(193);C7.setWidth(250);C7.iC();C8.setDisplayPosition(3);C8.setHeight(414);C8.setLeft(950);C8.setParent(this);C8.setTabPosition(3);C8.setTabStop(false);C8.setTop(193);C8.setWidth(250);C8.iC();C9.setDisplayPosition(4);C9.setParent(this);C9.setTabPosition(4);C9.setTabStop(false);C9.setTop(607);C9.setWidth(1200);C9.iC();C10.setDisplayPosition(5);
C10.setHeight(414);C10.setLeft(250);C10.setParent(this);C10.setTabPosition(5);C10.setTabStop(false);C10.setTop(193);C10.setWidth(700);C10.iC();this.setLayoutManager(C0);this.setTheme(l.THEME().get("2015BLUE"));this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",15);r.ln=15;{r.ln=17;m.PANEL1.mthPREPARE(m.ATTACHITEM1);r.ln=18;m.PANEL2.mthPREPARE(m.ATTACHITEM2);r.ln=19;m.PANEL3.mthPREPARE(m.ATTACHITEM3);r.ln=20;m.PANEL4.mthPREPARE(m.ATTACHITEM4);
r.ln=21;m.PANEL5.mthPREPARE(m.ATTACHITEM5);}r.ln=23;r.e();};},{rc:["XDEMO_62"],rp:["PRIM_WEB","PRIM_ATLM","PRIM_ATLI"]});