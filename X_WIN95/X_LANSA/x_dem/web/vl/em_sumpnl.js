﻿LANSA.addComponent({id:"EM_SUMPNL",nm:"EM_SummaryPanel",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Expenses Summary Panel",tl:15000300},function(l,oI,u){var c1=l.cDec("2293.87"),c2=l.cDec("1301.69"),c3=l.cDec("3860.44"),c4=l.cDec("3769.12"),c5=l.cDec("6674.44"),c6=l.cDec("1064.34"),c7=l.cDec("4809.05"),c8=l.cDec("3905.65"),c9=l.cDec("3937.12"),c10=l.cDec("6442.76"),c11=l.cDec("6022.10"),c12=l.cDec("3180.82");var cO=l.rC(oI,{an:"PRIM_PANL",co:function(){cO.aN.call(this);var C0=this.cR("STYLE1","PRIM_VS","Style");
var C1=this.cR("STYLE2","PRIM_VS","Style");var C2=this.cR("STYLE3","PRIM_VS","Style");var C3=this.cR("STYLE5","PRIM_VS","Style");var C4=this.cR("LAYOUT","PRIM_TBLO");var C5=this.cR("COLUMN1","PRIM_TBLO","Column");var C6=this.cR("ROW1","PRIM_TBLO","Row");var C7=this.cR("ROW2","PRIM_TBLO","Row");var C8=this.cR("ROW4","PRIM_TBLO","Row");var C9=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C12=this.cR("LAYOUTHEADERPANEL","PRIM_TBLO");
var C13=this.cR("COLUMN1HEADERPANEL","PRIM_TBLO","Column");var C14=this.cR("ROW1HEADERPANEL","PRIM_TBLO","Row");var C15=this.cR("ITEM1HEADERPANEL","PRIM_TBLO","Item");var C16=this.cR("ITEM2HEADERPANEL","PRIM_TBLO","Item");var C17=this.cR("PANELHEADER","PRIM_PANL");var C18=this.cR("LABELTOTAL","PRIM_MD","Label");var C19=this.cR("LABELTOTALAMOUNT","PRIM_MD","Label");var C20=this.cR("CHART","XGOOGLE05");var C21=this.cR("LABELCAPTION","PRIM_MD","Label");C0.setBorderBottom(1);C0.iC();C1.setFontSize(32);
C1.setFontUnits("PIXEL");C1.iC();C2.setFontSize(18);C2.setFontUnits("PIXEL");C2.iC();C3.setFontSize(16);C3.setFontUnits("PIXEL");C3.iC();C4.iC();C5.setDisplayPosition(1);C5.setParent(C4);C5.iC();C6.setDisplayPosition(1);C6.setParent(C4);C6.setUnits("PIXELS");C6.setHeight(140);C6.iC();C7.setDisplayPosition(2);C7.setParent(C4);C7.setHeight(60);C7.setUnits("PIXELS");C7.iC();C8.setDisplayPosition(3);C8.setParent(C4);C8.setHeight(400);C8.setUnits("PIXELS");C8.iC();C9.setColumn(C5);C9.setManage(C17);C9.setParent(C4);
C9.setRow(C6);C9.iC();C10.setColumn(C5);C10.setManage(C20);C10.setParent(C4);C10.setRow(C8);C10.setFlow("DOWN");C10.setMarginLeft(10);C10.setMarginRight(10);C10.setMarginTop(10);C10.setAlignment("TOPCENTER");C10.setMarginBottom(10);C10.setSizing("FITTOHEIGHT");C10.iC();C11.setAlignment("TOPCENTER");C11.setColumn(C5);C11.setManage(C21);C11.setParent(C4);C11.setRow(C7);C11.setFlow("DOWN");C11.iC();C12.iC();C13.setDisplayPosition(1);C13.setParent(C12);C13.iC();C14.setDisplayPosition(1);C14.setParent(C12);
C14.iC();C15.setColumn(C13);C15.setManage(C18);C15.setParent(C12);C15.setRow(C14);C15.setSizing("FITTOWIDTH");C15.setFlow("CENTERVERTICAL");C15.iC();C16.setColumn(C13);C16.setManage(C19);C16.setParent(C12);C16.setRow(C14);C16.setSizing("FITTOWIDTH");C16.setFlow("CENTERVERTICAL");C16.iC();C17.setDisplayPosition(1);C17.setLeft(0);C17.setParent(this);C17.setTabPosition(1);C17.setTabStop(false);C17.setTop(0);C17.setHeight(140);C17.setWidth(300);C17.setStyle(C0);C17.setLayoutManager(C12);C17.iC();C18.setCaption("Total");
C18.setDisplayPosition(1);C18.setHeight(40);C18.setLeft(0);C18.setParent(C17);C18.setTabPosition(2);C18.setWidth(300);C18.setCaptionAlignment("CENTER");C18.setStyle(C2);C18.setTop(29);C18.iC();C19.setCaption("$48,434.53");C19.setDisplayPosition(2);C19.setHeight(40);C19.setLeft(0);C19.setParent(C17);C19.setTabPosition(1);C19.setTop(69);C19.setWidth(300);C19.setCaptionAlignment("CENTER");C19.setStyle(C1);C19.iC();C20.setDisplayPosition(3);C20.setHeight(380);C20.setParent(this);C20.setTabPosition(2);
C20.setTabStop(false);C20.setTop(210);C20.setWidth(280);C20.iC();C21.setCaption("Last 12 months");C21.setDisplayPosition(2);C21.setHeight(60);C21.setLeft(0);C21.setParent(this);C21.setTabPosition(3);C21.setWidth(300);C21.setCaptionAlignment("CENTER");C21.setStyle(C3);C21.setTop(140);C21.iC();C20.aH("INITIALIZE",this,e1);this.setDisplayPosition(1);this.setHeight(830);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(300);this.setLayoutManager(C4);this.setVerticalScroll(true);}});
function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Chart.Initialize",37);r.ln=37;{r.ln=39;m.CHART.mthADD(0,"2018 Jun");r.ln=40;m.CHART.mthADD(c1,"May");r.ln=41;m.CHART.mthADD(c2,"Apr");r.ln=42;m.CHART.mthADD(c3,"Mar");r.ln=43;m.CHART.mthADD(c4,"Feb");r.ln=44;m.CHART.mthADD(c5,"Jan");r.ln=45;m.CHART.mthADD(c6,"2016 Dec");r.ln=46;m.CHART.mthADD(c7,"Nov");r.ln=47;m.CHART.mthADD(c8,"Oct");r.ln=48;m.CHART.mthADD(c9,"Sep");r.ln=49;m.CHART.mthADD(c10,"Aug");r.ln=50;m.CHART.mthADD(c11,"Jul");r.ln=51;
m.CHART.mthADD(c12,"Jun");}r.ln=53;r.e();};},{rc:["XGOOGLE05"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label"]});