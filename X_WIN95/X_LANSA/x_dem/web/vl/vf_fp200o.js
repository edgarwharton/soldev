﻿LANSA.addComponent({id:"VF_FP200O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Instance List Column details",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]},F2:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],
h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"VF_AC001O",fd:Fd,pt:{Type:{da:"r"},InstanceofType:{da:"r"},TypeInstance:{da:"r"},ColumnWidth:{da:"rw"},ColumnDecimals:{da:"r"},EditCode:{da:"r"},DateTimeFormat:{da:"r"},UTCConversion:{da:"r"},ColumnFiltering:{da:"r"},UIFormFactor:{da:"r"},UserMadeVisible:{da:"rw"},DisplayPosition:{da:"r"}},mt:{zint_SetProperty:{ps:{"P":{pt:"i"}}}},ev:{DisplayPositionChanged:
{}},co:function(){cO.aN.call(this);this.aF("VF_FP200O",Fd);var C0=this.cF("TYPE",Fd.F1.Dc);var C1=this.cF("INSTANCEOFTYPE",Fd.F2.Dc);var C2=this.cR("TYPEINSTANCE","PRIM_ALPH");var C3=this.cF("COLUMNWIDTH",Fd.F2.Dc);var C4=this.cF("COLUMNDECIMALS",Fd.F2.Dc);var C5=this.cR("EDITCODE","PRIM_ALPH");var C6=this.cR("DATETIMEFORMAT","PRIM_ALPH");var C7=this.cR("UTCCONVERSION","PRIM_ALPH");var C8=this.cR("COLUMNFILTERING","PRIM_BOLN");var C9=this.cR("UIFORMFACTOR","PRIM_ALPH");var C10=this.cR("USERMADEVISIBLE","PRIM_BOLN");
var C11=this.cF("DISPLAYPOSITION",Fd.F2.Dc);C0.aD();C0.iC();C1.aD();C1.iC();C2.iC();C3.aD();C3.iC();C4.aD();C4.iC();C5.iC();C6.iC();C7.iC();C8.iC();C9.iC();C10.setValue(true);C10.iC();C11.aD();C11.iC();this.aH("CREATEINSTANCE",this,e1);}});var cA=cO.aN.prototype;cO.mthSET_DISPLAYPOSITION=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_DisplayPosition",65);var P0=r.cPF("VALUE",Fd.F2.Dc);P0.set(p0);r.ln=65;{r.ln=68;if(l.n.ne(m.DISPLAYPOSITION.get(),P0.get())){r.ln=69;m.DISPLAYPOSITION.set(P0.get());
r.ln=73;this.fE("DISPLAYPOSITIONCHANGED");}}r.ln=77;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",80);r.ln=80;{r.ln=82;m.UIFORMFACTOR.set("YYY");r.ln=83;this.REF.UENROLCHILDLATE.set(true);}r.ln=84;r.e();};cO.mthZINT_SETPROPERTY=function(p0){var m=this.REF,r=l.mR(this,cO,"zint_SetProperty",88);var P0=r.cPD("P");P0=r.sR("P",p0);r.ln=88;{r.ln=92;if(l.n.le(P0.getPROPERTYNUMBER(),200)){r.ln=94;cA.mthZINT_SETPROPERTY.call(this,P0);r.e();return;}r.ln=101;{var v1=P0.getPROPERTYNUMBER();
if(r.ln=103,l.n.eq(v1,201)){r.ln=104;m.TYPE.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=106,l.n.eq(v1,202)){r.ln=107;m.INSTANCEOFTYPE.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=109,l.n.eq(v1,203)){r.ln=110;m.TYPEINSTANCE.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=112,l.n.eq(v1,204)){r.ln=113;m.COLUMNWIDTH.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=115,l.n.eq(v1,205)){r.ln=116;m.COLUMNDECIMALS.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=118,l.n.eq(v1,206)){r.ln=119;if(l.s.eq(l.s.AsNativeString(P0.getVALUE()),"NONE"))
{r.ln=120;m.EDITCODE.set("EDITCODE_NONE");}else{r.ln=122;m.EDITCODE.set(l.s.AsNativeString(P0.getVALUE()));}}else if(r.ln=125,l.n.eq(v1,207)){r.ln=126;m.DATETIMEFORMAT.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=128,l.n.eq(v1,208)){r.ln=129;m.UTCCONVERSION.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=131,l.n.eq(v1,209)){r.ln=132;m.COLUMNFILTERING.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=134,l.n.eq(v1,210)){r.ln=135;m.UIFORMFACTOR.set(l.s.AsNativeString(P0.getVALUE()));
}r.ln=137;}}r.ln=139;r.e();};cO.getTYPE=function(){return this.REF.TYPE.get();};cO.getINSTANCEOFTYPE=function(){return this.REF.INSTANCEOFTYPE.get();};cO.getTYPEINSTANCE=function(){return this.REF.TYPEINSTANCE.get();};cO.getCOLUMNWIDTH=function(){return this.REF.COLUMNWIDTH.get();};cO.setCOLUMNWIDTH=function(v){this.REF.COLUMNWIDTH.set(v);};cO.getCOLUMNDECIMALS=function(){return this.REF.COLUMNDECIMALS.get();};cO.getEDITCODE=function(){return this.REF.EDITCODE.get();};cO.getDATETIMEFORMAT=function()
{return this.REF.DATETIMEFORMAT.get();};cO.getUTCCONVERSION=function(){return this.REF.UTCCONVERSION.get();};cO.getCOLUMNFILTERING=function(){return this.REF.COLUMNFILTERING.get();};cO.getUIFORMFACTOR=function(){return this.REF.UIFORMFACTOR.get();};cO.getUSERMADEVISIBLE=function(){return this.REF.USERMADEVISIBLE.get();};cO.setUSERMADEVISIBLE=function(v){this.REF.USERMADEVISIBLE.set(v);};cO.getDISPLAYPOSITION=function(){return this.REF.DISPLAYPOSITION.get();};cO.setDISPLAYPOSITION=function(v){this.mthSET_DISPLAYPOSITION(v);
};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC001O"],rp:["PRIM_FLD","PRIM_ALPH","PRIM_BOLN"]});