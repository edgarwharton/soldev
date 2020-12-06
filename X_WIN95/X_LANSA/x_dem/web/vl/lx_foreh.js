﻿LANSA.addComponent({id:"LX_FOREH",nm:"LX_ForExRateHistory",ot:"rp",tp:"Reusable Part",pt:"ap",de:"LANSA Exchange - Exchange History",tl:15000300},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{ic:0,nm:"LX_STRING",an:"LX_String",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]},F2:{ic:0,nm:"LX_DECIMA",an:"LX_Decimal",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]
},F3:{ic:0,nm:"LX_DATE",an:"LX_Date",ft:"D",ln:10,dc:0,lb:"Date",h1:"Date",h2:"",h3:"",de:"Date",dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F4:{nm:"LX_CURRENCYFROM",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]},F5:{nm:"LX_CURRENCYTO",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]},F6:{nm:"LX_FOREXDATE",ft:"D",ln:10,dc:0,lb:"Date",h1:"Date",h2:"",h3:"",de:"Date",dv:l.SqlNull,ia:["ASQN","FE","ISO"]
},F7:{nm:"LX_FOREXRATE",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{CurrencyFrom:{da:"na"},CurrencyTo:{da:"na"},ExchangeRate:{da:"na"},ExchangeDate:{da:"na"}},co:function(){cO.aN.call(this);var f=this.aF("LX_FOREH",Fd);this.aLF({"LX_CURRENCYFROM":f.F4,"LX_CURRENCYTO":f.F5,"LX_FOREXDATE":f.F6,"LX_FOREXRATE":f.F7});}});cO.mthGETCURRENCYFROM=function(){var f=this.FLD.LX_FOREH,r=l.pR(this,cO,"GetCurrencyFrom",23);
var P0=r.cPF("OFROM",Fd.F1.Dc);r.ln=23;{r.ln=26;P0.set(f.F4.get());}r.ln=28;return r.rV(P0.get());};cO.mthGETCURRENCYTO=function(){var f=this.FLD.LX_FOREH,r=l.pR(this,cO,"GetCurrencyTo",30);var P0=r.cPF("OTO",Fd.F1.Dc);r.ln=30;{r.ln=33;P0.set(f.F5.get());}r.ln=35;return r.rV(P0.get());};cO.mthGETFOREIGNEXCHANGERATE=function(){var f=this.FLD.LX_FOREH,r=l.pR(this,cO,"GetForeignExchangeRate",37);var P0=r.cPF("OEXCHANGERATE",Fd.F2.Dc);r.ln=37;{r.ln=40;P0.set(f.F7.get());}r.ln=42;return r.rV(P0.get());
};cO.mthGETFOREIGNEXCHANGEDATE=function(){var f=this.FLD.LX_FOREH,r=l.pR(this,cO,"GetForeignExchangeDate",44);var P0=r.cPF("OEXCHANGEDATE",Fd.F3.Dc);r.ln=44;{r.ln=47;P0.set(f.F6.get());}r.ln=49;return r.rV(P0.get());};cO.getCURRENCYFROM=function(){return this.mthGETCURRENCYFROM();};cO.getCURRENCYTO=function(){return this.mthGETCURRENCYTO();};cO.getEXCHANGERATE=function(){return this.mthGETFOREIGNEXCHANGERATE();};cO.getEXCHANGEDATE=function(){return this.mthGETFOREIGNEXCHANGEDATE();};{Fd.F1.Dc=function()
{this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"LX_STRING"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"LX_DECIMA"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"LX_DATE"});}},{rp:["PRIM_OBJT","PRIM_FLD"]});