﻿LANSA.addComponent({id:"XLBA0070",nm:"XWS_PayPal_Payment",ot:"rp",tp:"Reusable Part",de:"[pkg-integration-lib]",tl:14020401},function(l,oI,u){var cO=l.rC(oI,{an:"XLBA0072",pt:{Intent:{da:"rw"},Payer:{da:"r"},Transactions:{da:"r"}},mt:{AddTransaction:{ps:{"Transaction":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("GINTENT","PRIM_DC","UnicodeString");var C1=this.cR("GPAYER","XLBA0073");var C2=this.cR("GTRANSACTIONS","PRIM_LCOL");C0.iC();C1.iC();C2.setCollects("XLBA0077");C2.iC();this.aH("CREATEINSTANCE",this,e1);
}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",12);r.ln=12;{r.ln=13;m.GINTENT.set("sale");}r.ln=14;r.e();};cO.mthADDTRANSACTION=function(p0){var m=this.REF,r=l.mR(this,cO,"AddTransaction",16);var P0=r.cPD("TRANSACTION");P0=p0;r.ln=16;{r.ln=19;m.GTRANSACTIONS.mthINSERT(P0);}r.ln=20;r.e();};cO.getINTENT=function(){return this.REF.GINTENT.get();};cO.setINTENT=function(v){this.REF.GINTENT.set(v);};cO.getPAYER=function(){return this.REF.GPAYER;};cO.getTRANSACTIONS=function()
{return this.REF.GTRANSACTIONS;};},{rc:["XLBA0072","XLBA0073"],rp:["PRIM_DC.UnicodeString","PRIM_LCOL"],dc:["XLBA0077"]});