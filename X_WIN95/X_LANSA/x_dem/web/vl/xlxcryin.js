﻿LANSA.addComponent({id:"XLXCRYIN",nm:"xLXCryptoCurrencies",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Currency Information",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"XLXDECIMA",an:"xLXDecimal",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]},F2:{ic:0,nm:"XLXSTRING",an:"xLXString",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",
dv:"",ia:["FE","LC"]},F3:{nm:"XLXCRYPTOCURRENCYID",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]},F4:{nm:"XLXCRYPTOCURRENCYCODE",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]},F5:{nm:"XLXCRYPTOCURRENCYNAME",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]},F6:{nm:"XLXCRYPTOCURRENCYICON",ft:"NV",ln:512,dc:0,lb:"String Value",
h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]},F7:{nm:"XLXCRYPTOCURRENCYRANK",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]},F8:{nm:"XLXCRYPTOCURRENCYVALUE",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]},F9:{nm:"XLXCRYPTOCURRENCYCHANGE",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,
{an:"PRIM_OBJT",fd:Fd,pt:{CrytoCurrencyid:{da:"na"},CrytoCurrencyCode:{da:"na"},CrytoCurrencyName:{da:"na"},CrytoCurrencyIcon:{da:"na"},CrytoCurrencyRank:{da:"na"},CryptoCurrencyValueUSD:{da:"na"},CryptoMarketChange:{da:"na"}},co:function(){cO.aN.call(this);var f=this.aF("XLXCRYIN",Fd);this.aLF({"XLXCRYPTOCURRENCYID":f.F3,"XLXCRYPTOCURRENCYCODE":f.F4,"XLXCRYPTOCURRENCYNAME":f.F5,"XLXCRYPTOCURRENCYICON":f.F6,"XLXCRYPTOCURRENCYRANK":f.F7,"XLXCRYPTOCURRENCYVALUE":f.F8,"XLXCRYPTOCURRENCYCHANGE":f.F9});
}});cO.mthGETCRYTOCURRENCYID=function(){var f=this.FLD.XLXCRYIN,r=l.pR(this,cO,"GetCrytoCurrencyid",24);var P0=r.cPF("OCRYPTOID",Fd.F1.Dc);r.ln=24;{r.ln=27;P0.set(f.F3.get());}r.ln=29;return r.rV(P0.get());};cO.mthGETCRYPTOCODE=function(){var f=this.FLD.XLXCRYIN,r=l.pR(this,cO,"GetCryptoCode",31);var P0=r.cPF("OCRYPTOCODE",Fd.F2.Dc);r.ln=31;{r.ln=34;P0.set(f.F4.get());}r.ln=36;return r.rV(P0.get());};cO.mthGETCRYTOCURRENCYNAME=function(){var f=this.FLD.XLXCRYIN,r=l.pR(this,cO,"GetCrytoCurrencyName",38);
var P0=r.cPF("OCRYPTONAME",Fd.F2.Dc);r.ln=38;{r.ln=41;P0.set(f.F5.get());}r.ln=43;return r.rV(P0.get());};cO.mthGETCRYTOCURRENCYICON=function(){var f=this.FLD.XLXCRYIN,r=l.pR(this,cO,"GetCrytoCurrencyIcon",45);var P0=r.cPF("OCRYPTOICON",Fd.F2.Dc);r.ln=45;{r.ln=48;P0.set(f.F6.get());}r.ln=50;return r.rV(P0.get());};cO.mthGETCRYTOCURRENCYRANK=function(){var f=this.FLD.XLXCRYIN,r=l.pR(this,cO,"GetCrytoCurrencyRank",52);var P0=r.cPF("OCRYPTORANK",Fd.F1.Dc);r.ln=52;{r.ln=55;P0.set(f.F7.get());}r.ln=57;
return r.rV(P0.get());};cO.mthGETCRYPTOVALUE=function(){var f=this.FLD.XLXCRYIN,r=l.pR(this,cO,"GetCryptoValue",59);var P0=r.cPF("OCRYPTOVALUE",Fd.F1.Dc);r.ln=59;{r.ln=62;P0.set(f.F8.get());}r.ln=64;return r.rV(P0.get());};cO.mthGETCRYPTOMARKETCHANGE=function(){var f=this.FLD.XLXCRYIN,r=l.pR(this,cO,"GetCryptoMarketChange",66);var P0=r.cPF("OCRYPTOMARKETCHANGE",Fd.F1.Dc);r.ln=66;{r.ln=69;P0.set(f.F9.get());}r.ln=71;return r.rV(P0.get());};cO.getCRYTOCURRENCYID=function(){return this.mthGETCRYTOCURRENCYID();
};cO.getCRYTOCURRENCYCODE=function(){return this.mthGETCRYPTOCODE();};cO.getCRYTOCURRENCYNAME=function(){return this.mthGETCRYTOCURRENCYNAME();};cO.getCRYTOCURRENCYICON=function(){return this.mthGETCRYTOCURRENCYICON();};cO.getCRYTOCURRENCYRANK=function(){return this.mthGETCRYTOCURRENCYRANK();};cO.getCRYPTOCURRENCYVALUEUSD=function(){return this.mthGETCRYPTOVALUE();};cO.getCRYPTOMARKETCHANGE=function(){return this.mthGETCRYPTOMARKETCHANGE();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XLXDECIMA"});
}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XLXSTRING"});}},{rp:["PRIM_OBJT","PRIM_FLD"]});