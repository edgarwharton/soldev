﻿LANSA.addComponent({id:"A06CHA06",nm:"A06MemoryUsage",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Memory Usage",tl:15000300},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var c1=l.cDec("69.82");var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?"}[cL],h1:{"ENG":"Standard","FRA":"?"}[cL],h2:{"ENG":"Integer","FRA":"?"}[cL],h3:{"ENG":"Field","FRA":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PANL",
fd:Fd,mt:{CalculateCurrentUsage:{}},co:function(){cO.aN.call(this);this.aF("A06CHA06",Fd);var C0=this.cR("LAYOUTMAIN","PRIM_TBLO");var C1=this.cR("LAYOUTMAINCOLUMN2","PRIM_TBLO","Column");var C2=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTMAINROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTMAINROW3","PRIM_TBLO","Row");var C5=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C6=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C7=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");var C8=this.cR("LAYOUTMAINITEM4","PRIM_TBLO","Item");
var C9=this.cR("LAYOUTMAINITEM5","PRIM_TBLO","Item");var C10=this.cR("TEXT","PRIM_MD","Label");var C11=this.cR("TEXT1","PRIM_MD","Label");var C12=this.cR("TEXT2","PRIM_MD","Label");var C13=this.cR("STATUS","PRIM_MD","Label");var C14=this.cR("PIECHART","PRIM_CHRT","PieChart");var C15=this.cR("PIECHARTCAPTION","PRIM_CHRT","PieChartCaption");var C16=this.cR("PIECHARTVALUE","PRIM_CHRT","PieChartValue");var C17=this.cR("TIMER","PRIM_TIMR");var C18=this.cR("CURRENTUSAGE","PRIM_NMBR");var C19=this.cF("RANDOMNUMBER",Fd.F1.Dc);
C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(58);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.iC();C4.setDisplayPosition(3);C4.setParent(C0);C4.setHeight(32);C4.setUnits("PIXELS");C4.iC();C5.setAlignment("TOPCENTER");C5.setColumn(C1);C5.setManage(C14);C5.setParent(C0);C5.setRow(C3);C5.iC();C6.setColumn(C1);C6.setManage(C10);C6.setParent(C0);C6.setRow(C2);C6.setColumnSpan(2);C6.iC();C7.setColumn(C1);C7.setManage(C11);
C7.setParent(C0);C7.setRow(C3);C7.setSizing("CONTENTWIDTHANDHEIGHT");C7.setFlow("DOWN");C7.iC();C8.setColumn(C1);C8.setManage(C12);C8.setParent(C0);C8.setRow(C3);C8.setSizing("CONTENTWIDTHANDHEIGHT");C8.setFlow("DOWN");C8.iC();C9.setAlignment("CENTERRIGHT");C9.setColumn(C1);C9.setManage(C13);C9.setParent(C0);C9.setRow(C2);C9.setSizing("CONTENTWIDTHANDHEIGHT");C9.setMarginRight(8);C9.iC();C10.setCaption("Memory Usage");C10.setDisplayPosition(3);C10.setLeft(0);C10.setParent(this);C10.setTabPosition(1);
C10.setThemeDrawStyle("Heading3");C10.setTop(0);C10.setWidth(498);C10.setHeight(58);C10.setCaptionMarginLeft(16);C10.setCaptionMarginRight(16);C10.iC();C11.setDisplayPosition(2);C11.setLeft(223);C11.setParent(this);C11.setTabPosition(4);C11.setThemeDrawStyle("Heading2");C11.setTop(134);C11.setWidth(52);C11.setCaptionAlignment("CENTER");C11.setHeight(27);C11.setCaption("69.82");C11.iC();C12.setDisplayPosition(4);C12.setLeft(221);C12.setParent(this);C12.setTabPosition(3);C12.setThemeDrawStyle("Subheading");
C12.setTop(161);C12.setWidth(57);C12.setCaption("of 128 GB");C12.setCaptionAlignment("CENTER");C12.setHeight(19);C12.iC();C13.setCaption("30%");C13.setDisplayPosition(1);C13.setLeft(434);C13.setParent(this);C13.setTabPosition(2);C13.setThemeDrawStyle("Heading2");C13.setTop(8);C13.setWidth(56);C13.setHeight(43);C13.setCaptionAlignment("CENTER");C13.setPaddingLeft(8);C13.setPaddingRight(8);C13.setPaddingBottom(8);C13.setPaddingTop(8);C13.iC();C14.setCutoutPercentage(80);C14.setDisplayPosition(5);C14.setHeight(178);
C14.setLeft(0);C14.setParent(this);C14.setTabPosition(5);C14.setTabStop(false);C14.setTop(58);C14.setWidth(498);C14.setHintShow(false);C14.setAnimationDuration(0);C14.setHintShowOfParent(false);C14.iC();C15.setParent(C14);C15.iC();C16.setDisplayPosition(1);C16.setParent(C14);C16.setThemeDrawStyle("Border(55,55,64,1)+Back(30,185,128,.8)");C16.iC();C17.setStartup("MANUAL");C17.iC();C18.iC();C19.aD();C19.iC();C17.aH("TICK",this,e3);this.setDisplayPosition(1);this.setHeight(270);this.setLeft(0);this.setTabPosition(1);
this.setTop(0);this.setWidth(500);this.setLayoutManager(C0);this.setThemeDrawStyle("Shadow2+Card+LightDark");this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",33);r.ln=33;{r.ln=35;m.STATUS.set("");r.ln=37;m.CURRENTUSAGE.setDecimals(2);r.ln=38;m.CURRENTUSAGE.set(c1);}r.ln=40;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",42);r.ln=42;{r.ln=44;this.mthCALCULATECURRENTUSAGE();
r.ln=46;m.TIMER.mthSTART();}r.ln=48;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#Timer.Tick",50);r.ln=50;{r.ln=52;this.mthCALCULATECURRENTUSAGE();}r.ln=54;r.e();};cO.mthCALCULATECURRENTUSAGE=function(){var m=this.REF,r=l.mR(this,cO,"CalculateCurrentUsage",56);r.ln=56;{r.ln=58;m.RANDOMNUMBER.set(l.n.Mod(l.add64(l.mul64(13,m.RANDOMNUMBER.get()),7),3259));r.ln=60;m.CURRENTUSAGE.set(l.add(m.CURRENTUSAGE.get(),l.mul(l.zap(l.div(l.zap(l.sub(l.zap(l.n.Mod(m.RANDOMNUMBER.get(),13),21,0),6),21,0),7),31,9),3)));
r.ln=62;{var v1=m.CURRENTUSAGE.get();if(r.ln=64,l.n.gt(v1,124)){r.ln=66;m.CURRENTUSAGE.set(124);}else if(r.ln=68,l.n.gt(v1,100)){r.ln=70;m.CURRENTUSAGE.set(l.sub(m.CURRENTUSAGE.get(),1));}else if(r.ln=72,l.n.lt(v1,60)){r.ln=74;m.CURRENTUSAGE.set(l.add(m.CURRENTUSAGE.get(),1));}else if(r.ln=76,l.n.lt(v1,50)){r.ln=78;m.CURRENTUSAGE.set(50);}r.ln=80;}r.ln=83;m.PIECHART.clearList();r.ln=85;m.PIECHARTVALUE.setValue(m.CURRENTUSAGE.get());r.ln=86;m.PIECHART.addEntry();r.ln=88;m.PIECHARTVALUE.getCurrentItem().setThemeDrawStyle("Border(55,55,64,1)+Back(239,83,80,1)");
r.ln=90;m.PIECHARTVALUE.setValue(l.sub(128,m.CURRENTUSAGE.get()));r.ln=91;m.PIECHART.addEntry();r.ln=94;m.TEXT1.set(l.n.AsString(m.CURRENTUSAGE.get()));r.ln=96;m.STATUS.set(l.cat(l.n.AsString(l.n.Round(l.mul(l.div(m.CURRENTUSAGE.get(),128),100))),"%"));r.ln=98;{var v1=m.CURRENTUSAGE.get();if(r.ln=100,l.n.gt(v1,100)){r.ln=102;m.STATUS.setThemeDrawStyle("Heading2+Rounded+DarkError");}else if(r.ln=104,l.n.gt(v1,80)){r.ln=106;m.STATUS.setThemeDrawStyle("Heading2+Rounded+MediumError");}else{r.ln=110;m.STATUS.setThemeDrawStyle("Heading2");
}r.ln=112;}}r.ln=114;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_CHRT.PieChart","PRIM_CHRT.PieChartCaption","PRIM_CHRT.PieChartValue","PRIM_TIMR","PRIM_NMBR","PRIM_FLD"]});