﻿LANSA.addComponent({id:"XLXCRYTO",nm:"xLXCryptoHistory",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Currency Information",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"XLXDECIMA",an:"xLXDecimal",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]},F2:{ic:0,nm:"XLXDATETI",an:"xLXDateTime",ft:"DT",ln:26,dc:0,lb:"LANSA Exchange",h1:"LANSA",h2:"Exchange",h3:"Date",de:"LANSA Exchange Date Time",
dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]},F3:{ic:0,nm:"XLXSTRING",an:"xLXString",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]},F4:{nm:"XLXCRYPTOCURRENCYID",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]},F5:{nm:"XLXCRYPTOCURRENCYDATETIME",ft:"DT",ln:26,dc:0,lb:"LANSA Exchange",h1:"LANSA",h2:"Exchange",h3:"Date",de:"LANSA Exchange Date Time",dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]
},F6:{nm:"XLXCRYPTOCURRENCYVALUE",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]},F7:{nm:"XLXCRYPTOCURRENCYTIMEFRAME",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{CryptoCurrencyid:{da:"na"},CryptoCurrencyDateTime:{da:"na"},CryptoValue:{da:"na"},CryptoHistoryTimeFrame:{da:"na"}},co:function(){cO.aN.call(this);var f=this.aF("XLXCRYTO",Fd);
this.aLF({"XLXCRYPTOCURRENCYID":f.F4,"XLXCRYPTOCURRENCYDATETIME":f.F5,"XLXCRYPTOCURRENCYVALUE":f.F6,"XLXCRYPTOCURRENCYTIMEFRAME":f.F7});}});cO.mthGETCRYPTOCURRENCYID=function(){var f=this.FLD.XLXCRYTO,r=l.pR(this,cO,"GetCryptoCurrencyid",23);var P0=r.cPF("OCRYPTOID",Fd.F1.Dc);r.ln=23;{r.ln=26;P0.set(f.F4.get());}r.ln=28;return r.rV(P0.get());};cO.mthGETCRYPTOCURRENCYDATETIME=function(){var f=this.FLD.XLXCRYTO,r=l.pR(this,cO,"GetCryptoCurrencyDateTime",30);var P0=r.cPF("OCRYPTODATETIME",Fd.F2.Dc);
r.ln=30;{r.ln=33;P0.set(f.F5.get());}r.ln=35;return r.rV(P0.get());};cO.mthGETCRYPTOVALUE=function(){var f=this.FLD.XLXCRYTO,r=l.pR(this,cO,"GetCryptoValue",37);var P0=r.cPF("OCRYPTOVALUE",Fd.F1.Dc);r.ln=37;{r.ln=40;P0.set(f.F6.get());}r.ln=42;return r.rV(P0.get());};cO.mthGETCRYPTOHISTORYTIMEFRAME=function(){var f=this.FLD.XLXCRYTO,r=l.pR(this,cO,"GetCryptoHistoryTimeFrame",45);var P0=r.cPF("OCRYPTOTIMEFRAME",Fd.F3.Dc);r.ln=45;{r.ln=48;P0.set(f.F7.get());}r.ln=50;return r.rV(P0.get());};cO.getCRYPTOCURRENCYID=function()
{return this.mthGETCRYPTOCURRENCYID();};cO.getCRYPTOCURRENCYDATETIME=function(){return this.mthGETCRYPTOCURRENCYDATETIME();};cO.getCRYPTOVALUE=function(){return this.mthGETCRYPTOVALUE();};cO.getCRYPTOHISTORYTIMEFRAME=function(){return this.mthGETCRYPTOHISTORYTIMEFRAME();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XLXDECIMA"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XLXDATETI"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);
};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XLXSTRING"});}},{rp:["PRIM_OBJT","PRIM_FLD"]});