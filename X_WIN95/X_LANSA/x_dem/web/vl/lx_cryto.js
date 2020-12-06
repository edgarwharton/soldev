﻿LANSA.addComponent({id:"LX_CRYTO",nm:"LX_CryptoHistory",ot:"rp",tp:"Reusable Part",pt:"ap",de:"LANSA Exchange - Crypto History",tl:15000300},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{ic:0,nm:"LX_DECIMA",an:"LX_Decimal",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]},F2:{ic:0,nm:"LX_DATETI",an:"LX_DateTime",ft:"DT",ln:26,dc:0,lb:"LANSA Exchange",h1:"LANSA",h2:"Exchange",h3:"Date",de:"LANSA Exchange Date Time",
dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]},F3:{ic:0,nm:"LX_STRING",an:"LX_String",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]},F4:{nm:"LX_CRYPTOCURRENCYID",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]},F5:{nm:"LX_CRYPTOCURRENCYDATETIME",ft:"DT",ln:26,dc:0,lb:"LANSA Exchange",h1:"LANSA",h2:"Exchange",h3:"Date",de:"LANSA Exchange Date Time",dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]
},F6:{nm:"LX_CRYPTOCURRENCYVALUE",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]},F7:{nm:"LX_CRYPTOCURRENCYTIMEFRAME",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{CryptoCurrencyid:{da:"na"},CryptoCurrencyDateTime:{da:"na"},CryptoValue:{da:"na"},CryptoHistoryTimeFrame:{da:"na"}},co:function(){cO.aN.call(this);var f=this.aF("LX_CRYTO",Fd);
this.aLF({"LX_CRYPTOCURRENCYID":f.F4,"LX_CRYPTOCURRENCYDATETIME":f.F5,"LX_CRYPTOCURRENCYVALUE":f.F6,"LX_CRYPTOCURRENCYTIMEFRAME":f.F7});}});cO.mthGETCRYPTOCURRENCYID=function(){var f=this.FLD.LX_CRYTO,r=l.pR(this,cO,"GetCryptoCurrencyid",23);var P0=r.cPF("OCRYPTOID",Fd.F1.Dc);r.ln=23;{r.ln=26;P0.set(f.F4.get());}r.ln=28;return r.rV(P0.get());};cO.mthGETCRYPTOCURRENCYDATETIME=function(){var f=this.FLD.LX_CRYTO,r=l.pR(this,cO,"GetCryptoCurrencyDateTime",30);var P0=r.cPF("OCRYPTODATETIME",Fd.F2.Dc);
r.ln=30;{r.ln=33;P0.set(f.F5.get());}r.ln=35;return r.rV(P0.get());};cO.mthGETCRYPTOVALUE=function(){var f=this.FLD.LX_CRYTO,r=l.pR(this,cO,"GetCryptoValue",37);var P0=r.cPF("OCRYPTOVALUE",Fd.F1.Dc);r.ln=37;{r.ln=40;P0.set(f.F6.get());}r.ln=42;return r.rV(P0.get());};cO.mthGETCRYPTOHISTORYTIMEFRAME=function(){var f=this.FLD.LX_CRYTO,r=l.pR(this,cO,"GetCryptoHistoryTimeFrame",45);var P0=r.cPF("OCRYPTOTIMEFRAME",Fd.F3.Dc);r.ln=45;{r.ln=48;P0.set(f.F7.get());}r.ln=50;return r.rV(P0.get());};cO.getCRYPTOCURRENCYID=function()
{return this.mthGETCRYPTOCURRENCYID();};cO.getCRYPTOCURRENCYDATETIME=function(){return this.mthGETCRYPTOCURRENCYDATETIME();};cO.getCRYPTOVALUE=function(){return this.mthGETCRYPTOVALUE();};cO.getCRYPTOHISTORYTIMEFRAME=function(){return this.mthGETCRYPTOHISTORYTIMEFRAME();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"LX_DECIMA"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"LX_DATETI"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);
};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"LX_STRING"});}},{rp:["PRIM_OBJT","PRIM_FLD"]});