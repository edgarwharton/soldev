﻿LANSA.addComponent({id:"XLBA0099",nm:"XDevice_FeatureBase",ot:"rp",tp:"Reusable Part",de:"[pkg-lansa-mobile]",tl:14020401},function(l,oI,u){var cO=l.rC(oI,{an:"XLBA0092",pt:{IsReady:{da:"r"}},mt:{SignalReady:{},AssertIsReady:{}},ev:{Ready:{}},co:function(){cO.aN.call(this);var C0=this.cR("GISREADY","PRIM_BOLN");C0.iC();}});cO.mthSIGNALREADY=function(){var m=this.REF,r=l.mR(this,cO,"SignalReady",9);r.ln=9;{r.ln=10;if(l.tB(m.GISREADY.get())){r.ln=11;this.mthFATALERROR("Feature was ready, you can't make it ready AGAIN");
}r.ln=14;m.GISREADY.set(true);r.ln=16;this.fE("READY");}r.ln=17;r.e();};cO.mthASSERTISREADY=function(){var m=this.REF,r=l.mR(this,cO,"AssertIsReady",19);r.ln=19;{r.ln=20;if(l.tB(l.not(m.GISREADY.get()))){r.ln=21;this.mthFATALERROR("Feature is not ready yet. Wait for the 'OnReady' event before you start using this feature.");}}r.ln=24;r.e();};cO.getISREADY=function(){return this.REF.GISREADY.get();};},{rc:["XLBA0092"],rp:["PRIM_BOLN"]});