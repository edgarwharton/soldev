﻿LANSA.addComponent({id:"XCARPOPUP",nm:"xCarFilterSortPopup",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Filter, Sort PopUp Panel",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PPNL",co:function(){cO.aN.call(this);var C0=this.cR("LAYOUTPOPUP","PRIM_TBLO");var C1=this.cR("LAYOUTPOPUPCOLUMN1","PRIM_TBLO","Column");var C2=this.cR("LAYOUTPOPUPROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTPOPUPROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTPOPUPROW3","PRIM_TBLO","Row");var C5=this.cR("LAYOUTPOPUPITEM1","PRIM_TBLO","Item");
var C6=this.cR("LAYOUTPOPUPITEM5","PRIM_TBLO","Item");var C7=this.cR("LAYOUTPOPUPITEM9","PRIM_TBLO","Item");var C8=this.cR("LAYOUTPOPUPITEM10","PRIM_TBLO","Item");var C9=this.cR("LAYOUTPOPUPITEM3","PRIM_TBLO","Item");var C10=this.cR("LAYOUTPOPUPITEM4","PRIM_TBLO","Item");var C11=this.cR("LAYOUTPOPUPITEM8","PRIM_TBLO","Item");var C12=this.cR("LAYOUTPOPUPITEM2","PRIM_TBLO","Item");var C13=this.cR("APPBARLAYOUT","PRIM_TBLO");var C14=this.cR("APPBARLAYOUTCOLUMN1","PRIM_TBLO","Column");var C15=this.cR("APPBARLAYOUTROW1","PRIM_TBLO","Row");
var C16=this.cR("APPBARLAYOUTITEM1","PRIM_TBLO","Item");var C17=this.cR("LABELFILTER","PRIM_MD","Label");var C18=this.cR("LABELSORT","PRIM_MD","Label");var C19=this.cR("RADIOFILTERALL","PRIM_MD","RadioButton");var C20=this.cR("RADIOFILTERFORSALE","PRIM_MD","RadioButton");var C21=this.cR("RADIOFILTERLESS15K","PRIM_MD","RadioButton");var C22=this.cR("RADIOBUTTONSORTPRICE","PRIM_MD","RadioButton");var C23=this.cR("RADIOBUTTONSORTRECENT","PRIM_MD","RadioButton");var C24=this.cR("APPBAR","PRIM_MD","AppBar");
var C25=this.cR("APPLYOPTIONS","PRIM_MD","FlatButton");var C26=this.cA("SHAREDOBJECT","XCARAPPL");C0.setSizing("CONTENTHEIGHT");C0.setMarginBottom(8);C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setWidth(161);C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.setHeight(140);C2.setUnits("CONTENT");C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.setHeight(107);C3.setUnits("CONTENT");C3.iC();C4.setDisplayPosition(1);C4.setParent(C0);C4.setHeight(36);C4.setUnits("PIXELS");C4.iC();C5.setManage(C17);
C5.setParent(C0);C5.setRow(C2);C5.setSizing("FITTOWIDTH");C5.setColumn(C1);C5.setAlignment("TOPLEFT");C5.setFlow("DOWN");C5.setMarginBottom(4);C5.setMarginTop(4);C5.setMarginLeft(2);C5.setMarginRight(2);C5.iC();C6.setManage(C18);C6.setParent(C0);C6.setRow(C3);C6.setSizing("FITTOWIDTH");C6.setColumn(C1);C6.setAlignment("TOPLEFT");C6.setFlow("DOWN");C6.setMarginTop(7);C6.setMarginBottom(4);C6.setMarginLeft(2);C6.setMarginRight(2);C6.iC();C7.setAlignment("TOPLEFT");C7.setColumn(C1);C7.setManage(C19);
C7.setParent(C0);C7.setRow(C2);C7.setSizing("FITTOWIDTH");C7.setFlow("DOWN");C7.setMarginTop(4);C7.setMarginLeft(4);C7.iC();C8.setAlignment("TOPLEFT");C8.setColumn(C1);C8.setManage(C20);C8.setParent(C0);C8.setRow(C2);C8.setSizing("FITTOWIDTH");C8.setFlow("DOWN");C8.setMarginLeft(4);C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C1);C9.setManage(C22);C9.setParent(C0);C9.setRow(C3);C9.setSizing("FITTOWIDTH");C9.setFlow("DOWN");C9.setMarginLeft(4);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C1);
C10.setManage(C23);C10.setParent(C0);C10.setRow(C3);C10.setSizing("FITTOWIDTH");C10.setFlow("DOWN");C10.setMarginLeft(4);C10.iC();C11.setManage(C24);C11.setParent(C0);C11.setRow(C4);C11.setColumn(C1);C11.setAlignment("TOPLEFT");C11.setFlow("DOWN");C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C1);C12.setManage(C21);C12.setParent(C0);C12.setRow(C2);C12.setSizing("FITTOWIDTH");C12.setFlow("DOWN");C12.setMarginLeft(4);C12.iC();C13.iC();C14.setDisplayPosition(1);C14.setParent(C13);C14.iC();C15.setDisplayPosition(1);
C15.setParent(C13);C15.iC();C16.setAlignment("CENTERRIGHT");C16.setColumn(C14);C16.setFlow("LEFT");C16.setManage(C25);C16.setParent(C13);C16.setRow(C15);C16.setSizing("FITTOHEIGHT");C16.iC();C17.setCaption("Filter");C17.setParent(this);C17.setDisplayPosition(1);C17.setTabPosition(1);C17.setLeft(2);C17.setTop(40);C17.setWidth(174);C17.setIcon("filter_list");C17.setCaptionAlignment("CENTER");C17.setIconAlignment("CENTERLEFT");C17.setThemeDrawStyle("Background3+Theme50");C17.setHeight(32);C17.setIconMarginLeft(8);
C17.iC();C18.setParent(this);C18.setDisplayPosition(5);C18.setTabPosition(2);C18.setLeft(2);C18.setTop(183);C18.setCaption("Sort");C18.setWidth(174);C18.setIcon("sort");C18.setIconAlignment("CENTERLEFT");C18.setCaptionAlignment("CENTER");C18.setThemeDrawStyle("Background3+Theme50");C18.setHeight(32);C18.setIconMarginLeft(8);C18.iC();C19.setCaption("All Cars");C19.setDisplayPosition(2);C19.setLeft(4);C19.setParent(this);C19.setTabPosition(3);C19.setTop(80);C19.setHeight(32);C19.setWidth(174);C19.iC();
C20.setCaption("On Sale");C20.setDisplayPosition(3);C20.setLeft(4);C20.setParent(this);C20.setTabPosition(5);C20.setTop(112);C20.setHeight(32);C20.setWidth(174);C20.iC();C21.setCaption("Less than 15K");C21.setDisplayPosition(4);C21.setLeft(4);C21.setParent(this);C21.setTabPosition(4);C21.setTop(144);C21.setHeight(32);C21.setWidth(174);C21.iC();C22.setCaption("By Price");C22.setDisplayPosition(7);C22.setLeft(4);C22.setParent(this);C22.setTabPosition(6);C22.setTop(251);C22.setHeight(32);C22.setWidth(174);
C22.setGroupIndex(1);C22.iC();C23.setCaption("Most Recent ");C23.setDisplayPosition(6);C23.setLeft(4);C23.setParent(this);C23.setTabPosition(7);C23.setTop(219);C23.setHeight(32);C23.setWidth(174);C23.setGroupIndex(1);C23.setChecked(true);C23.iC();C24.setDisplayPosition(8);C24.setLayoutManager(C13);C24.setParent(this);C24.setTabPosition(8);C24.setWidth(178);C24.setHeight(36);C24.setCaptionMarginLeft(0);C24.setIcon("close");C24.setIconMarginLeft(0);C24.setCaptionAlignment("CENTER");C24.setCaption("Options");
C24.setIconAlignment("CENTERLEFT");C24.setThemeDrawStyle("Heading2");C24.setCaptionMarginBottom(0);C24.setCaptionMarginRight(0);C24.setCaptionMarginTop(0);C24.iC();C25.setDisplayPosition(1);C25.setLeft(140);C25.setParent(C24);C25.setTabPosition(1);C25.setWidth(38);C25.setTop(0);C25.setCaptionMarginRight(6);C25.setIcon("done");C25.setThemeDrawStyle("Heading2");C25.iC();if((C26!=null)&&(C26.iI()==false)){C26.iC();}C24.aH("ICONCLICK",this,e3);C25.aH("CLICK",this,e2);this.setLeft(0);this.setTop(0);this.setWidth(180);
this.setLayoutManager(C0);this.setHeight(293);this.aH("PREPARE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",37);r.ln=37;{r.ln=40;{var v1=m.SHAREDOBJECT.ref.getCURRENTSORTORDER();if(r.ln=43,l.s.eq(v1,"D")){r.ln=45;m.RADIOBUTTONSORTRECENT.setChecked(true);}else{r.ln=50;m.RADIOBUTTONSORTPRICE.setChecked(true);}r.ln=52;}r.ln=54;{var v1=m.SHAREDOBJECT.ref.getCURRENTFILTER();if(r.ln=56,l.s.eq(v1,"S")){r.ln=58;m.RADIOFILTERFORSALE.setChecked(true);}else if(r.ln=60,l.s.eq(v1,"A"))
{r.ln=62;m.RADIOFILTERALL.setChecked(true);}else{r.ln=66;m.RADIOFILTERLESS15K.setChecked(true);}r.ln=68;}}r.ln=70;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ApplyOptions.Click",72);r.ln=72;{r.ln=76;if(l.b.eq(m.RADIOBUTTONSORTPRICE.getChecked(),true)){r.ln=79;m.SHAREDOBJECT.ref.setCURRENTSORTORDER("P");}else{r.ln=84;m.SHAREDOBJECT.ref.setCURRENTSORTORDER("D");}r.ln=89;if(l.b.eq(m.RADIOFILTERFORSALE.getChecked(),true)){r.ln=92;m.SHAREDOBJECT.ref.setCURRENTFILTER("S");}else{r.ln=96;
if(l.b.eq(m.RADIOFILTERALL.getChecked(),true)){r.ln=99;m.SHAREDOBJECT.ref.setCURRENTFILTER("A");}else{r.ln=104;m.SHAREDOBJECT.ref.setCURRENTFILTER("K");}}r.ln=110;this.mthCLOSEPOPUP();}r.ln=112;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#Appbar.IconClick",115);r.ln=115;{r.ln=117;this.mthCLOSEPOPUP();}r.ln=119;r.e();};},{rc:["XCARAPPL"],rp:["PRIM_PPNL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.RadioButton","PRIM_MD.AppBar","PRIM_MD.FlatButton"]
});