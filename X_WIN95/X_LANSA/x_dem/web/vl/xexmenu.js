﻿LANSA.addComponent({id:"XEXMENU",nm:"XEXMenu",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Expenses Menu",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PPNL",co:function(){cO.aN.call(this);var C0=this.cR("STYLE_NOBORDER","PRIM_VS","Style");var C1=this.cR("LAYOUT","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("ROW1","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");
var C7=this.cR("SORTBYSTATUS","PRIM_MD","FlatButton");var C8=this.cR("SORTBYDATE","PRIM_MD","FlatButton");var C9=this.cR("SORTBYMERCHANT","PRIM_MD","FlatButton");var C10=this.cA("APPLICATION","XEXAPP");C0.setBorderBottom(0);C0.setBorderLeft(0);C0.setBorderRight(0);C0.setBorderTop(0);C0.setFontSize(16);C0.setFontUnits("PIXEL");C0.iC();C1.setSizing("CONTENTHEIGHT");C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setAlignment("TOPCENTER");
C4.setColumn(C2);C4.setManage(C7);C4.setParent(C1);C4.setRow(C3);C4.setSizing("FITTOWIDTH");C4.setFlow("DOWN");C4.iC();C5.setAlignment("TOPCENTER");C5.setColumn(C2);C5.setManage(C8);C5.setParent(C1);C5.setRow(C3);C5.setSizing("FITTOWIDTH");C5.setFlow("DOWN");C5.setMarginTop(3);C5.iC();C6.setAlignment("TOPCENTER");C6.setColumn(C2);C6.setManage(C9);C6.setParent(C1);C6.setRow(C3);C6.setSizing("FITTOWIDTH");C6.setFlow("DOWN");C6.setMarginBottom(3);C6.iC();C7.setCaption("Sort by status");C7.setDisplayPosition(2);
C7.setLeft(0);C7.setParent(this);C7.setTabPosition(3);C7.setTabStop(false);C7.setTop(45);C7.setWidth(178);C7.setIcon("check");C7.setIconMarginLeft(8);C7.setIconMarginRight(12);C7.setHeight(42);C7.setIconOpacity(0);C7.setCaptionAlignment("CENTERLEFT");C7.iC();C8.setCaption("Sort by date");C8.setDisplayPosition(1);C8.setLeft(0);C8.setParent(this);C8.setTabPosition(2);C8.setTabStop(false);C8.setTop(3);C8.setWidth(178);C8.setIcon("check");C8.setIconMarginLeft(8);C8.setIconMarginRight(12);C8.setIconOpacity(70);
C8.setHeight(42);C8.setCaptionAlignment("CENTERLEFT");C8.iC();C9.setCaption("Sort by merchant");C9.setDisplayPosition(3);C9.setLeft(0);C9.setParent(this);C9.setTabPosition(1);C9.setTabStop(false);C9.setTop(87);C9.setWidth(178);C9.setIcon("check");C9.setIconMarginLeft(8);C9.setIconMarginRight(12);C9.setIconOpacity(0);C9.setHeight(42);C9.setCaptionAlignment("CENTERLEFT");C9.iC();if((C10!=null)&&(C10.iI()==false)){C10.iC();}C7.aH("CLICK",this,e2);C8.aH("CLICK",this,e1);C9.aH("CLICK",this,e3);C10.aH("SORTINGCHANGED",this,e4);
this.setLeft(0);this.setTop(0);this.setWidth(180);this.setLayoutManager(C1);this.setHeight(131);this.setCloseOnClick(true);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SortByDate.Click",22);r.ln=22;{r.ln=24;m.APPLICATION.ref.mthSORTBYDATE();}r.ln=26;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SortByStatus.Click",28);r.ln=28;{r.ln=30;m.APPLICATION.ref.mthSORTBYSTATUS();}r.ln=32;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SortByMerchant.Click",34);
r.ln=34;{r.ln=36;m.APPLICATION.ref.mthSORTBYMERCHANT();}r.ln=38;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.SortingChanged",40);r.ln=40;{r.ln=42;m.SORTBYDATE.setIconOpacity(0);m.SORTBYSTATUS.setIconOpacity(0);m.SORTBYMERCHANT.setIconOpacity(0);r.ln=44;{var v1=m.APPLICATION.ref.getSORTING();if(r.ln=46,l.s.eq(v1,"date")){r.ln=48;m.SORTBYDATE.setIconOpacity(70);}else if(r.ln=50,l.s.eq(v1,"status")){r.ln=52;m.SORTBYSTATUS.setIconOpacity(70);}else if(r.ln=54,l.s.eq(v1,"merchant"))
{r.ln=56;m.SORTBYMERCHANT.setIconOpacity(70);}r.ln=58;}}r.ln=60;r.e();};},{rc:["XEXAPP"],rp:["PRIM_PPNL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.FlatButton"]});