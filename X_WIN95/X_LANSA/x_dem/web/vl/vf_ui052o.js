﻿LANSA.addComponent({id:"VF_UI052O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Material Design Menu Imbed",tl:15000000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",mt:{uInitialize:{},uTerminate:{},uCheckBadgeLocations:{},uShow:{ps:{"ForApplication":{pt:"i"}}}},ev:{uShowRequested:{},uCloseRequested:{}},co:function(){cO.aN.call(this);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");var C2=this.cA("UFRAMEWORK","VF_FP001O");var C3=this.cR("MAINPANELATTACHMANAGER","PRIM_ATLM");
var C4=this.cR("MAINPANELATTACHITEM","PRIM_ATLI");var C5=this.cR("PANELBODYCONTENT","VF_UI051O");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}if((C2!=null)&&(C2.iI()==false)){C2.iC();}C3.iC();C4.setParent(C3);C4.setManage(C5);C4.setAttachment("CENTER");C4.iC();C5.setParent(this);C5.setWidth(257);C5.setHeight(393);C5.iC();C5.aH("CLOSEREQUESTED",this,e1);this.setLayoutManager(C3);this.setLeft(0);this.setTop(0);this.setHeight(393);this.setDisplayPosition(1);this.setTabPosition(1);
this.setWidth(257);}});cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",30);r.ln=30;{r.ln=32;m.USYSTEM.ref.setVF_UI052ONAVIGATIONMENU(this);r.ln=34;m.PANELBODYCONTENT.mthZINT_INITIALIZE();}r.ln=36;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#PanelBodyContent.CloseRequested",39);r.ln=39;{r.ln=41;this.fE("UCLOSEREQUESTED");}r.ln=43;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",46);r.ln=46;{r.ln=48;m.PANELBODYCONTENT.mthZINT_TERMINATE();
r.ln=50;m.USYSTEM.ref.setVF_UI052ONAVIGATIONMENU(null);}r.ln=52;r.e();};cO.mthUCHECKBADGELOCATIONS=function(){var m=this.REF,r=l.mR(this,cO,"uCheckBadgeLocations",55);r.ln=55;{r.ln=57;m.PANELBODYCONTENT.mthZINT_CHECKBADGELOCATIONS();}r.ln=59;r.e();};cO.mthUSHOW=function(p0){var m=this.REF,r=l.mR(this,cO,"uShow",62);var P0=r.cPD("FORAPPLICATION");P0=r.sR("FORAPPLICATION",p0);r.ln=62;{r.ln=65;if((P0==null)){r.ln=66;P0=r.sR("P0",m.USYSTEM.ref.getFRAMEWORKTABSHEETMANAGER().getCURRENTMANAGINGVF_FP002OREFERENCE());
}r.ln=69;m.PANELBODYCONTENT.mthZINT_SHOW(P0);r.ln=71;this.fE("USHOWREQUESTED");}r.ln=73;r.e();};},{rc:["VF_SY001O","VF_SY001X","VF_FP001O","VF_UI051O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI"]});