﻿LANSA.addComponent({id:"VF_FP027O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Ramp Destination",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
}};var cO=l.rC(oI,{an:"VF_AC001O",fd:Fd,pt:{uScreenName:{da:"r"},uLayoutStyle:{da:"r"},uHeight:{da:"r"},uWidth:{da:"r"},uTop:{da:"r"},uLeft:{da:"r"}},mt:{zInt_SetProperty:{ps:{"P":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_FP027O",Fd);var C0=this.cR("USCREENNAME","PRIM_ALPH");var C1=this.cR("ULAYOUTSTYLE","PRIM_ALPH");var C2=this.cF("UHEIGHT",Fd.F1.Dc);var C3=this.cF("UWIDTH",Fd.F1.Dc);var C4=this.cF("UTOP",Fd.F1.Dc);var C5=this.cF("ULEFT",Fd.F1.Dc);C0.iC();C1.iC();C2.aD();C2.iC();C3.aD();
C3.iC();C4.aD();C4.iC();C5.aD();C5.iC();}});var cA=cO.aN.prototype;cO.mthZINT_SETPROPERTY=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetProperty",31);var P0=r.cPD("P");P0=r.sR("P",p0);r.ln=31;{r.ln=35;if(l.n.le(P0.getPROPERTYNUMBER(),200)){r.ln=36;cA.mthZINT_SETPROPERTY.call(this,P0);r.e();return;}r.ln=42;{var v1=P0.getPROPERTYNUMBER();if(r.ln=44,l.n.eq(v1,201)){r.ln=45;m.USCREENNAME.set(P0.getVALUE());}else if(r.ln=47,l.n.eq(v1,202)){r.ln=48;m.ULAYOUTSTYLE.set(P0.getVALUE());}else if(r.ln=50,l.n.eq(v1,203))
{r.ln=51;m.UHEIGHT.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=53,l.n.eq(v1,204)){r.ln=54;m.UWIDTH.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=56,l.n.eq(v1,205)){r.ln=57;m.UTOP.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=59,l.n.eq(v1,206)){r.ln=60;m.ULEFT.set(l.s.AsNumber(P0.getVALUE()));}r.ln=62;}r.e();return;}r.ln=66;};cO.getUSCREENNAME=function(){return this.REF.USCREENNAME.get();};cO.getULAYOUTSTYLE=function(){return this.REF.ULAYOUTSTYLE.get();};cO.getUHEIGHT=function(){return this.REF.UHEIGHT.get();
};cO.getUWIDTH=function(){return this.REF.UWIDTH.get();};cO.getUTOP=function(){return this.REF.UTOP.get();};cO.getULEFT=function(){return this.REF.ULEFT.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC001O"],rp:["PRIM_ALPH","PRIM_FLD"]});