﻿LANSA.addComponent({id:"XDEMOW_72",nm:"xDemoWebDragandDropTree",ot:"wp",tp:"Web Page",pt:"ap",de:"Drag and drop in to a tree",tl:15000003},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("153.94");var rc1=l.cB("ximagef_6.png");var Fd={F1:{nm:"XDEMOCAPT",an:"xDemoCaption",ft:"N",ln:256,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:l.SqlNull,ia:["LC","ASQN"]},F2:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],
h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{DeleteFromLeft:{ps:{"Payload":{pt:"i"}}},DoDrop:{ps:{"Source":{pt:"i"},"DropItem":{pt:"i"},"Payload":{pt:"i"}}},GetSelectedItems:{}},co:function()
{cO.aN.call(this);var f=this.aF("XDEMOW_72",Fd);var C0=this.cR("TABLELAYOUT_1","PRIM_TBLO");var C1=this.cR("ROW_1","PRIM_TBLO","Row");var C2=this.cR("ROW_2","PRIM_TBLO","Row");var C3=this.cR("ROW_3","PRIM_TBLO","Row");var C4=this.cR("ROW_4","PRIM_TBLO","Row");var C5=this.cR("COLUMN_1","PRIM_TBLO","Column");var C6=this.cR("COLUMN_2","PRIM_TBLO","Column");var C7=this.cR("COLUMN_3","PRIM_TBLO","Column");var C8=this.cR("COLUMN_4","PRIM_TBLO","Column");var C9=this.cR("COLUMNDIVIDER","PRIM_TBLO","ColumnDivider");
var C10=this.cR("LABEL","PRIM_LABL");var C11=this.cR("LAYOUTITEM_3","PRIM_TBLO","Item");var C12=this.cR("DRAGIMAGE","XDEMODRA");var C13=this.cR("LEFT","PRIM_LIST");var C14=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C15=this.cR("RIGHT","PRIM_LIST");var C16=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");var C17=this.cR("COLUMNXDEMOCAPT","PRIM_LIST","String");var C18=this.cR("COLUMNXDEMOCAPT_2","PRIM_LIST","String");C0.setDividerStyle("GAP");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setHeight(44);
C1.setUnits("PIXELS");C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.iC();C4.setDisplayPosition(4);C4.setParent(C0);C4.iC();C5.setDisplayPosition(1);C5.setParent(C0);C5.iC();C6.setDisplayPosition(2);C6.setParent(C0);C6.iC();C7.setDisplayPosition(4);C7.setParent(C0);C7.iC();C8.setDisplayPosition(5);C8.setParent(C0);C8.iC();C9.setDisplayPosition(3);C9.setParent(C0);C9.setWidth(4);C9.setStartRow(C2);C9.iC();C10.setCaption("Drag from left to right to construct a tree");
C10.setDisplayPosition(1);C10.setEllipses("WORD");C10.setLeft(4);C10.setParent(this);C10.setTabPosition(1);C10.setTabStop(false);C10.setTop(4);C10.setVerticalAlignment("CENTER");C10.setHeight(36);C10.setWidth(1192);C10.setMarginLeft(2);C10.setThemeDrawStyle("Heading1+DarkTitle");C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C5);C11.setFlow("DOWN");C11.setManage(C10);C11.setParent(C0);C11.setRow(C1);C11.setColumnSpan(5);C11.setMarginTop(4);C11.setMarginLeft(4);C11.setMarginRight(4);C11.setMarginBottom(4);
C11.iC();C12.iC();C13.setDisplayPosition(2);C13.setHeight(748);C13.setLeft(4);C13.setParent(this);C13.setTabPosition(2);C13.setTop(48);C13.setWidth(590);C13.setDragStyle("AUTOMATIC");C13.setSelectionStyle("ALL");C13.setColumnHeaderHeight(0);C13.setColumnLines(false);C13.setRowLines(false);C13.setRowHeight(25);C13.iC();C14.setColumn(C5);C14.setManage(C13);C14.setParent(C0);C14.setRow(C2);C14.setColumnSpan(2);C14.setRowSpan(3);C14.setMarginTop(4);C14.setMarginLeft(4);C14.setMarginRight(4);C14.setMarginBottom(4);
C14.iC();C15.setDisplayPosition(3);C15.setHeight(748);C15.setLeft(606);C15.setParent(this);C15.setTabPosition(3);C15.setTop(48);C15.setWidth(590);C15.setSelectionStyle("ALL");C15.setColumnHeaderHeight(0);C15.setColumnLines(false);C15.setRowLines(false);C15.setRowHeight(25);C15.iC();C16.setColumn(C7);C16.setManage(C15);C16.setParent(C0);C16.setRow(C2);C16.setColumnSpan(2);C16.setRowSpan(3);C16.setMarginTop(4);C16.setMarginLeft(4);C16.setMarginRight(4);C16.setMarginBottom(4);C16.iC();C17.setDisplayPosition(1);
C17.setParent(C13);C17.setSource(f.F1);C17.setColumnUnits("PROPORTION");C17.iC();C18.setDisplayPosition(1);C18.setParent(C15);C18.setSource(f.F1);C18.setColumnUnits("PROPORTION");C18.setColumnWidth(c1);C18.iC();C13.aH("STARTDRAG",this,e2);C15.aH("DRAGOVER",this,e3);C15.aH("DRAGDROP",this,e4);this.setLayoutManager(C0);this.setTheme(l.THEME().get("2015ORANGE"));this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var f=this.FLD.XDEMOW_72,m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",27);
r.ln=27;{r.ln=29;for(var i1=1,s1=1,t1=l.tI(20);(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=31;f.F1.set(l.s.Substitute("Item &1",l.n.AsString(l.add64(m.LEFT.getItems().getItemCount(),1))));r.ln=32;m.LEFT.addEntry();}}r.ln=36;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Left.StartDrag",38);var P0=Ps.r("CONTINUE");var P1=Ps.r("PAYLOAD");var P2=Ps.r("DRAGLIST");r.ln=38;{r.ln=41;P1=r.sR("P1",cO.mthGETSELECTEDITEMS.call(this));r.ln=44;P0.set(l.n.gt(l.cast(P1,"PRIM_ACOL.PRIM_ACOL<PRIM_LIST.ListItem>").getItemCount(),0));
r.ln=47;P2.setDragListStyle("POPUP");r.ln=50;P2.setDragPopup(m.DRAGIMAGE);r.ln=53;m.DRAGIMAGE.setDRAGCAPTION(l.n.AsString(l.cast(P1,"PRIM_ACOL.PRIM_ACOL<PRIM_LIST.ListItem>").getItemCount()));r.ln=54;m.DRAGIMAGE.setDRAGIMAGE(rc1);Ps.sR("PAYLOAD",P1);Ps.sR("DRAGLIST",P2);}r.ln=56;r.e();};cO.mthDELETEFROMLEFT=function(p0){var m=this.REF,r=l.mR(this,cO,"DeleteFromLeft",59);var P0=r.cPD("PAYLOAD");P0=r.sR("PAYLOAD",p0);r.ln=59;{r.ln=62;{var l1=P0.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());
r.ln=64;m.LEFT.deleteEntry(ITEM.getEntry());r.ln=66;}l1.end();r.dR("ITEM");}}r.ln=68;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#Right.DragOver",70);var P0=Ps.r("ACCEPTDROP");var P1=Ps.r("PAYLOAD");var P2=Ps.r("SOURCE");var P3=Ps.r("SHOWDROPHILIGHT");r.ln=70;{r.ln=73;P3.set(true);r.ln=76;P0.set(l.n.gt(l.cast(P1,"PRIM_ACOL.PRIM_ACOL<PRIM_LIST.ListItem>").getItemCount(),0));}r.ln=78;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Right.DragDrop",81);var P0=Ps.r("PAYLOAD");var P1=Ps.r("DRAGRESULT");
var P2=Ps.r("SOURCE");r.ln=81;{r.ln=83;P1.set("ACCEPTED");r.ln=86;cO.mthDODROP.call(this,P2,m.RIGHT.getCurrentItem(),l.cast(P0,"PRIM_ACOL.PRIM_ACOL<PRIM_LIST.ListItem>"));}r.ln=88;r.e();};cO.mthDODROP=function(p0,p1,p2){var f=this.FLD.XDEMOW_72,m=this.REF,r=l.mR(this,cO,"DoDrop",90);var P0=r.cPD("SOURCE");var P1=r.cPD("DROPITEM");var P2=r.cPD("PAYLOAD");P0=r.sR("SOURCE",p0);P1=r.sR("DROPITEM",p1);P2=r.sR("PAYLOAD",p2);r.ln=90;{r.ln=96;{var l1=P2.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());
r.ln=99;f.F2.set(lIO=m.LEFT.getEntry(ITEM.getEntry()));r.ln=100;m.RIGHT.addEntry();r.ln=103;if((P1==null)){r.ln=106;m.RIGHT.getCurrentItem().setPosition(m.RIGHT.getItems().getItemCount());}else{r.ln=110;m.RIGHT.getCurrentItem().setParentItem(P1);}r.ln=114;}l1.end();r.dR("ITEM");}r.ln=117;cO.mthDELETEFROMLEFT.call(this,P2);}r.ln=119;r.e();};cO.mthGETSELECTEDITEMS=function(){var m=this.REF,r=l.mR(this,cO,"GetSelectedItems",121);var P0=r.cPD("RESULT");r.ln=121;{r.ln=124;P0=r.sR("P0",l.cC("PRIM_ACOL").tB([ti1]));
r.ln=126;{var l1=m.LEFT.getItems().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=128;if(l.not(ITEM.getSelected())){continue;}r.ln=130;P0.mthINSERT(ITEM);r.ln=132;}l1.end();r.dR("ITEM");}}r.ln=134;return r.rR(P0);};var ti1={p:"PRIM_LIST",t:"ListItem"};},{rc:["XDEMODRA"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.ColumnDivider","PRIM_LABL","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_FLD"]});