﻿LANSA.addComponent({id:"XDEMO_50",nm:"xDemoWebSPAMenu",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Menu",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMOCAPT",an:"xDemoCaption",ft:"N",ln:256,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:l.SqlNull,ia:["LC","ASQN"]}};var cO=l.rC(oI,{an:"XDEMO_51",fd:Fd,mt:{AddMenuItem:{ps:{"Page":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMO_50",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");
var C1=this.cR("LAYOUT1","PRIM_TBLO");var C2=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LIST","PRIM_LIST");var C6=this.cR("COLUMNXDEMOCAPT1","PRIM_LIST","String");C0.setBorderBottom(0);C0.setBorderLeft(0);C0.setBorderTop(0);C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setColumn(C3);C4.setManage(C5);C4.setParent(C1);
C4.setRow(C2);C4.iC();C5.setDisplayPosition(1);C5.setLeft(0);C5.setParent(this);C5.setTabPosition(1);C5.setTop(0);C5.setHeight(457);C5.setWidth(281);C5.setColumnLines(false);C5.setRowLines(false);C5.setColumnHeaderHeight(0);C5.setStyle(C0);C5.iC();C6.setDisplayPosition(1);C6.setParent(C5);C6.setSource(f.F1);C6.setColumnUnits("PROPORTION");C6.setColumnCaption("Page Number");C6.setColumnCaptionType("CAPTION");C6.iC();C5.aH("ITEMGOTFOCUS",this,e2);this.REF.GAPPLICATION.ref.aH("PAGECREATED",this,e1);
this.setHeight(457);this.setWidth(281);this.setLayoutManager(C1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#gApplication.PageCreated",14);var P0=Ps.r("PAGE");r.ln=14;{r.ln=16;cO.mthADDMENUITEM.call(this,P0);}r.ln=18;r.e();};cO.mthADDMENUITEM=function(p0){var f=this.FLD.XDEMO_50,m=this.REF,r=l.mR(this,cO,"AddMenuItem",20);var P0=r.cPD("PAGE");P0=r.sR("PAGE",p0);r.ln=20;{r.ln=23;f.F1.set(l.n.AsString(P0.getPAGENUMBER()));r.ln=25;m.LIST.addEntry();r.ln=27;m.LIST.getCurrentItem().setRelatedReference(P0);
r.ln=29;m.LIST.getCurrentItem().setFocus(true);}r.ln=31;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#List.ItemGotFocus",33);r.ln=33;{r.ln=35;this.REF.GAPPLICATION.ref.mthACTIVATE(l.cast(m.LIST.getFocusItem().getRelatedReference(),"XDEMO_49").getPAGENUMBER());}r.ln=37;r.e();};},{rc:["XDEMO_51"],rp:["PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_FLD"]});