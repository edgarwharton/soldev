﻿LANSA.addComponent({id:"VF_UI042O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Sidebar menu flipper",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{zInt_SetLayout:{ps:{"Vertically":{pt:"i"}}},zInt_Initialize:{ps:{"ReverseLightandDark":{pt:"i"}}},zInt_Terminate:{}},co:function(){cO.aN.call(this);this.aF("VF_UI042O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("UFRAMEWORK","VF_FP001O");var C2=this.cR("FLIPTOLEFT","VF_UI005O");var C3=this.cR("FLIPTORIGHT","VF_UI005O");var C4=this.cR("FLIPTOTOP","VF_UI005O");var C5=this.cR("FLIPTOBOTTOM","VF_UI005O");var C6=this.cR("FLIPTOCLOSE","VF_UI005O");
var C7=this.cR("FLIPPERS","PRIM_ACOL");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.setParent(this);C2.setDisplayPosition(5);C2.setTabPosition(5);C2.setTop(64);C2.setWidth(50);C2.iC();C3.setParent(this);C3.setDisplayPosition(4);C3.setTabPosition(4);C3.setTop(48);C3.setWidth(50);C3.iC();C4.setParent(this);C4.setDisplayPosition(3);C4.setTabPosition(3);C4.setTop(32);C4.setWidth(50);C4.iC();C5.setParent(this);C5.setDisplayPosition(2);C5.setTabPosition(2);C5.setTop(16);
C5.setWidth(50);C5.iC();C6.setParent(this);C6.setWidth(50);C6.iC();C7.setCollects("VF_UI005O");C7.iC();C7.aH("WASCLICKED",this,e1);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);}});cO.mthZINT_SETLAYOUT=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetLayout",19);var P0=r.cP("VERTICALLY","PRIM_BOLN");P0.set(p0);var C0=r.cF("TOP",Fd.F1.Dc);var C1=r.cF("LEFT",Fd.F1.Dc);C0.iC();C1.iC();r.ln=19;{r.ln=25;if(l.tB(P0.get())){r.ln=27;{var l1=m.FLIPPERS.cI();while(l1.step())
{var FLIP=r.sR("FLIP",l1.item());r.ln=28;FLIP.setHeight(16);FLIP.setWidth(16);FLIP.setLeft(0);FLIP.setTop(C0.get());r.ln=29;C0.set(l.add(C0.get(),16));r.ln=30;}l1.end();r.dR("FLIP");}r.ln=32;this.setHeight(l.mul(m.FLIPPERS.getItemCount(),16));this.setWidth(16);}else{r.ln=36;{var l1=m.FLIPPERS.cI();while(l1.step()){var FLIP=r.sR("FLIP",l1.item());r.ln=37;FLIP.setHeight(16);FLIP.setWidth(16);FLIP.setLeft(C1.get());FLIP.setTop(0);r.ln=38;C1.set(l.add(C1.get(),16));r.ln=39;}l1.end();r.dR("FLIP");}r.ln=41;
this.setWidth(l.mul(m.FLIPPERS.getItemCount(),16));this.setHeight(16);}}r.ln=45;r.e();};cO.mthZINT_INITIALIZE=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",48);var P0=r.cP("REVERSELIGHTANDDARK","PRIM_BOLN");P0.set(p0);r.ln=48;{r.ln=51;m.FLIPTOCLOSE.mthZINT_INTIALIZEIMAGE("SYM=CLOSE",u,m.USYSTEM.ref.getUMTXTVALUES("CLOSE"),"SMALL",P0.get(),u,u,u,u);r.ln=53;m.FLIPTOTOP.mthZINT_INTIALIZEIMAGE("COLLAPSE_UP_OUTLINE.PNG","T","","SMALL",P0.get(),u,u,u,u);r.ln=55;m.FLIPTOBOTTOM.mthZINT_INTIALIZEIMAGE("EXPAND_DOWN_OUTLINE.PNG","T","","SMALL",P0.get(),u,u,u,u);
r.ln=57;m.FLIPTOLEFT.mthZINT_INTIALIZEIMAGE("COLLAPSE_OUTLINE.PNG","T","","SMALL",P0.get(),u,u,u,u);r.ln=59;m.FLIPTORIGHT.mthZINT_INTIALIZEIMAGE("EXPAND_OUTLINE.PNG","T","","SMALL",P0.get(),u,u,u,u);r.ln=61;m.FLIPTOLEFT.setComponentTag("LEFT");r.ln=62;m.FLIPTORIGHT.setComponentTag("RIGHT");r.ln=63;m.FLIPTOTOP.setComponentTag("TOP");r.ln=64;m.FLIPTOBOTTOM.setComponentTag("BOTTOM");r.ln=65;m.FLIPTOCLOSE.setComponentTag("CLOSE");r.ln=67;m.FLIPPERS.mthINSERT(m.FLIPTOLEFT);r.ln=68;m.FLIPPERS.mthINSERT(m.FLIPTORIGHT);
r.ln=69;m.FLIPPERS.mthINSERT(m.FLIPTOTOP);r.ln=70;m.FLIPPERS.mthINSERT(m.FLIPTOBOTTOM);r.ln=71;m.FLIPPERS.mthINSERT(m.FLIPTOCLOSE);}r.ln=73;r.e();};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",76);r.ln=76;{r.ln=78;m.FLIPPERS.mthREMOVEALL();}r.ln=80;r.e();};function e1(FLIPPER,Ps){var m=this.REF,r=l.eR(this,cO,"#Flippers<>.WasClicked",83);r.ln=83;{r.ln=85;m.USYSTEM.ref.mthZINT_SIGNALCHANGESIDEBAR(FLIPPER.getComponentTag());}r.ln=87;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_SY001O","VF_FP001O","VF_UI005O"],rp:["PRIM_PANL","PRIM_ACOL","PRIM_FLD"],dc:["VF_UI005O"]});