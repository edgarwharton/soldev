﻿LANSA.addComponent({id:"VF_SY101O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Signal Object for VLF-ONE",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],
dv:"",ia:["FE"]},F2:{ic:0,nm:"VF_ELNUMX",ft:"S",ln:30,dc:9,ec:"4",lb:"Maximum Number",h1:"Maximum",h2:"Number",h3:"",de:"Maximum Number",dv:0,ia:["RB","FE"]}};var cO=l.rC(oI,{an:"VF_SY174O",fd:Fd,pt:{WithId:{da:"rw"},Sender:{da:"rw"},NotifySender:{da:"rw"},SendReference:{da:"rw"},To:{da:"rw"},WindowScope:{da:"rw"},SendAInfo1:{da:"rw"},SendAInfo2:{da:"rw"},SendAInfo3:{da:"rw"},SendAInfo4:{da:"rw"},SendAInfo5:{da:"rw"},SendNInfo1:{da:"rw"},SendNInfo2:{da:"rw"},SendNInfo3:{da:"rw"},SendNInfo4:{da:"rw"
},SendNInfo5:{da:"rw"},RAMP:{da:"rw"}},mt:{zInt_Terminate:{}},co:function(){cO.aN.call(this);this.aF("VF_SY101O",Fd);var C0=this.cR("WITHID","PRIM_ALPH");this.cD("SENDER");var C2=this.cR("NOTIFYSENDER","PRIM_BOLN");this.cD("SENDREFERENCE");var C4=this.cF("TO",Fd.F1.Dc);var C5=this.cF("WINDOWSCOPE",Fd.F1.Dc);var C6=this.cR("SENDAINFO1","PRIM_DC","UnicodeString");var C7=this.cR("SENDAINFO2","PRIM_DC","UnicodeString");var C8=this.cR("SENDAINFO3","PRIM_DC","UnicodeString");var C9=this.cR("SENDAINFO4","PRIM_DC","UnicodeString");
var C10=this.cR("SENDAINFO5","PRIM_DC","UnicodeString");var C11=this.cF("SENDNINFO1",Fd.F2.Dc);var C12=this.cF("SENDNINFO2",Fd.F2.Dc);var C13=this.cF("SENDNINFO3",Fd.F2.Dc);var C14=this.cF("SENDNINFO4",Fd.F2.Dc);var C15=this.cF("SENDNINFO5",Fd.F2.Dc);var C16=this.cR("RAMP","PRIM_BOLN");C0.iC();C2.iC();C4.aD();C4.iC();C5.aD();C5.iC();C6.iC();C7.iC();C8.iC();C9.iC();C10.iC();C11.aD();C11.iC();C12.aD();C12.iC();C13.aD();C13.iC();C14.aD();C14.iC();C15.aD();C15.iC();C16.iC();}});var cA=cO.aN.prototype;
cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",65);r.ln=65;{r.ln=67;cA.mthZINT_TERMINATE.call(this);r.ln=69;this.setrefSENDER(null);this.setrefSENDREFERENCE(null);}r.ln=71;r.e();};cO.getWITHID=function(){return this.REF.WITHID.get();};cO.setWITHID=function(v){this.REF.WITHID.set(v);};cO.getSENDER=function(){return this.REF.SENDER;};cO.setSENDER=function(v){this.setrefSENDER(v);};cO.getNOTIFYSENDER=function(){return this.REF.NOTIFYSENDER.get();};cO.setNOTIFYSENDER=function(v)
{this.REF.NOTIFYSENDER.set(v);};cO.getSENDREFERENCE=function(){return this.REF.SENDREFERENCE;};cO.setSENDREFERENCE=function(v){this.setrefSENDREFERENCE(v);};cO.getTO=function(){return this.REF.TO.get();};cO.setTO=function(v){this.REF.TO.set(v);};cO.getWINDOWSCOPE=function(){return this.REF.WINDOWSCOPE.get();};cO.setWINDOWSCOPE=function(v){this.REF.WINDOWSCOPE.set(v);};cO.getSENDAINFO1=function(){return this.REF.SENDAINFO1.get();};cO.setSENDAINFO1=function(v){this.REF.SENDAINFO1.set(v);};cO.getSENDAINFO2=function()
{return this.REF.SENDAINFO2.get();};cO.setSENDAINFO2=function(v){this.REF.SENDAINFO2.set(v);};cO.getSENDAINFO3=function(){return this.REF.SENDAINFO3.get();};cO.setSENDAINFO3=function(v){this.REF.SENDAINFO3.set(v);};cO.getSENDAINFO4=function(){return this.REF.SENDAINFO4.get();};cO.setSENDAINFO4=function(v){this.REF.SENDAINFO4.set(v);};cO.getSENDAINFO5=function(){return this.REF.SENDAINFO5.get();};cO.setSENDAINFO5=function(v){this.REF.SENDAINFO5.set(v);};cO.getSENDNINFO1=function(){return this.REF.SENDNINFO1.get();
};cO.setSENDNINFO1=function(v){this.REF.SENDNINFO1.set(v);};cO.getSENDNINFO2=function(){return this.REF.SENDNINFO2.get();};cO.setSENDNINFO2=function(v){this.REF.SENDNINFO2.set(v);};cO.getSENDNINFO3=function(){return this.REF.SENDNINFO3.get();};cO.setSENDNINFO3=function(v){this.REF.SENDNINFO3.set(v);};cO.getSENDNINFO4=function(){return this.REF.SENDNINFO4.get();};cO.setSENDNINFO4=function(v){this.REF.SENDNINFO4.set(v);};cO.getSENDNINFO5=function(){return this.REF.SENDNINFO5.get();};cO.setSENDNINFO5=function(v)
{this.REF.SENDNINFO5.set(v);};cO.getRAMP=function(){return this.REF.RAMP.get();};cO.setRAMP=function(v){this.REF.RAMP.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELNUMX"});}cO.setrefSENDER=function(rn){this.sR("SENDER",rn);};cO.setrefSENDREFERENCE=function(rn){this.sR("SENDREFERENCE",rn);};},{rc:["VF_SY174O"],rp:["PRIM_ALPH","PRIM_BOLN","PRIM_FLD","PRIM_DC.UnicodeString"],
dc:["VF_AC034O"],dp:["PRIM_OBJT"]});