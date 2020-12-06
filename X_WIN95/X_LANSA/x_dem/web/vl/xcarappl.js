﻿LANSA.addComponent({id:"XCARAPPL",nm:"xCarShared",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Used Cars - Shared Object",tl:15000300},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_TEXT",ft:"A",ln:50,dc:0,lb:{"ENG":"Text","FRA":"Texte"}[cL],h1:{"ENG":"Text","FRA":"Texte"}[cL],h2:" ",h3:" ",de:{"ENG":"Standard TEXT","FRA":"Texte Standard"}[cL],dv:"",ia:["LC"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"Text must be specified","FRA":"Texte must be specified"}[cL]
}]},F2:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?"}[cL],h1:{"ENG":"Standard","FRA":"?"}[cL],h2:{"ENG":"Integer","FRA":"?"}[cL],h3:{"ENG":"Field","FRA":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?"}[cL],dv:0,ia:["FE","RB"]},F3:{ic:0,nm:"STD_FLAG",ft:"A",ln:1,dc:0,lb:{"ENG":"Flag","FRA":"Indicateur"}[cL],h1:{"ENG":"Flag","FRA":"Indicateur"}[cL],h2:" ",h3:" ",de:{"ENG":"Standard FLAG","FRA":"Indicateur Standard"}[cL],dv:"",ia:["FE"],vr:[{wt:"N",wf:"E",vi:"Y",
vu:"Y",vd:"N",rd:rl2,mt:{"ENG":"Flag must be Y or N","FRA":"Indicateur must be Y or N"}[cL]}]},F4:{ic:0,nm:"STD_STRNG",ft:"VC",ln:512,dc:0,lb:{"ENG":"Std string fld","FRA":"?"}[cL],h1:{"ENG":"Standard","FRA":"?"}[cL],h2:{"ENG":"String","FRA":"?"}[cL],h3:{"ENG":"Field","FRA":"?"}[cL],de:{"ENG":"Standard string field","FRA":"?"}[cL],dv:"",ia:["FE"]},F5:{nm:"THEMESTORAGEKEY",ft:"A",ln:50,dc:0,lb:"Text",h1:"Text",h2:" ",h3:" ",de:"Standard TEXT",dv:"THEME",ia:["LC"]},F6:{nm:"BACKGROUNDSTORAGEKEY",ft:"A",
ln:50,dc:0,lb:"Text",h1:"Text",h2:" ",h3:" ",de:"Standard TEXT",dv:"BACKGR",ia:["LC"]},F7:{nm:"NUMBEROFCARSSTORAGEKEY",ft:"A",ln:50,dc:0,lb:"Text",h1:"Text",h2:" ",h3:" ",de:"Standard TEXT",dv:"NUMBEROFCARS",ia:["LC"]},F8:{nm:"FILTERSTORAGEKEY",ft:"A",ln:50,dc:0,lb:"Text",h1:"Text",h2:" ",h3:" ",de:"Standard TEXT",dv:"FILTER",ia:["LC"]},F9:{nm:"SORTSTORAGEKEY",ft:"A",ln:50,dc:0,lb:"Text",h1:"Text",h2:" ",h3:" ",de:"Standard TEXT",dv:"SORT",ia:["LC"]},F10:{nm:"CARSEARCHSTORAGEKEY",ft:"A",ln:50,dc:0,
lb:"Text",h1:"Text",h2:" ",h3:" ",de:"Standard TEXT",dv:"CARSEARCH",ia:["LC"]},F11:{nm:"MAKESEARCHSTORAGEKEY",ft:"A",ln:50,dc:0,lb:"Text",h1:"Text",h2:" ",h3:" ",de:"Standard TEXT",dv:"MAKESEARCH",ia:["LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{CurrentFilter:{da:"na"},CurrentSortOrder:{da:"na"},CurrentCarSearch:{da:"na"},CurrentMakeSearch:{da:"na"},NumberOfCarsInList:{da:"na"},Theme:{da:"na"},Background:{da:"na"}},ev:{ThemeChanged:{},BackgroundChanged:{},FilterChanged:{ps:{"FilterOption":{pt:"i"
}}},SortOrderChanged:{ps:{"SortOrderOption":{pt:"i"}}},SearchStringChanged:{ps:{"SearchFilter":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XCARAPPL",Fd);this.aH("CREATEINSTANCE",this,e1);}});cO.mthGETTHEME=function(){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"GetTheme",64);var P0=r.cP("THEME","PRIM_STR");r.ln=64;{r.ln=68;P0.set(l.WEB().getLocalStorage().get(f.F5.get()).getValue());}r.ln=70;return r.rV(P0.get());};cO.mthSETTHEME=function(p0){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"SetTheme",72);
var P0=r.cP("THEME","PRIM_STR");P0.set(p0);r.ln=72;{r.ln=76;if(l.tB(l.s.ne(this.getTHEME(),P0.get()))){r.ln=78;l.WEB().getLocalStorage().getItem(f.F5.get()).set(P0.get());r.ln=80;this.fE("THEMECHANGED");}}r.ln=84;r.e();};cO.mthGETBACKGROUND=function(){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"GetBackground",89);var P0=r.cPF("BACKGR",Fd.F1.Dc);r.ln=89;{r.ln=93;P0.set(l.WEB().getLocalStorage().get(f.F6.get()).getValue());}r.ln=95;return r.rV(P0.get());};cO.mthSETBACKGROUND=function(p0){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"SetBackground",97);
var P0=r.cPF("BACKGR",Fd.F1.Dc);P0.set(p0);r.ln=97;{r.ln=101;if(l.s.ne(this.getBACKGROUND(),P0.get())){r.ln=103;l.WEB().getLocalStorage().getItem(f.F6.get()).set(P0.get());r.ln=105;this.fE("BACKGROUNDCHANGED");}}r.ln=109;r.e();};cO.mthGETNUMBEROFCARS=function(){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"GetNumberOfCars",114);var P0=r.cPF("NUMBEROFCARS",Fd.F2.Dc);r.ln=114;{r.ln=118;P0.set(l.s.AsNumber(l.WEB().getLocalStorage().get(f.F7.get()).getValue()));}r.ln=120;return r.rV(P0.get());};cO.mthSETNUMBEROFCARS=function(p0)
{var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"SetNumberOfCars",122);var P0=r.cPF("NUMBEROFCARS",Fd.F2.Dc);P0.set(p0);r.ln=122;{r.ln=126;if(l.n.ne(this.getNUMBEROFCARSINLIST(),P0.get())){r.ln=128;l.WEB().getLocalStorage().getItem(f.F7.get()).set(l.n.AsString(P0.get()));}}r.ln=132;r.e();};cO.mthGETFILTERFROMSTORAGE=function(){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"GetFilterFromStorage",137);var P0=r.cPF("FILTEROPTION",Fd.F3.Dc);r.ln=137;{r.ln=141;P0.set(l.WEB().getLocalStorage().get(f.F8.get()).get());
}r.ln=143;return r.rV(P0.get());};cO.mthSETFILTERINSTORAGE=function(p0){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"SetFilterInStorage",145);var P0=r.cPF("FILTEROPTION",Fd.F3.Dc);P0.set(p0);r.ln=145;{r.ln=149;if(l.s.ne(this.getCURRENTFILTER(),P0.get())){r.ln=151;l.WEB().getLocalStorage().getItem(f.F8.get()).set(P0.get());r.ln=153;{var eP=l.ePs();eP.cF("FILTEROPTION",Fd.F3.Dc);eP.r("FILTEROPTION").set(P0.get());this.fE("FILTERCHANGED",eP);eP.e();}}}r.ln=157;r.e();};cO.mthSETSORTORDERINSTORAGE=function(p0)
{var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"SetSortOrderInStorage",162);var P0=r.cPF("SORTOPTION",Fd.F3.Dc);P0.set(p0);r.ln=162;{r.ln=165;if(l.s.ne(this.getCURRENTSORTORDER(),P0.get())){r.ln=167;l.WEB().getLocalStorage().getItem(f.F9.get()).set(P0.get());r.ln=169;{var eP=l.ePs();eP.cF("SORTORDEROPTION",Fd.F3.Dc);eP.r("SORTORDEROPTION").set(P0.get());this.fE("SORTORDERCHANGED",eP);eP.e();}}}r.ln=173;r.e();};cO.mthGETSORTORDERFROMSTORAGE=function(){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"GetSortOrderFromStorage",175);
var P0=r.cPF("SORTOPTION",Fd.F3.Dc);r.ln=175;{r.ln=179;P0.set(l.WEB().getLocalStorage().get(f.F9.get()).get());}r.ln=181;return r.rV(P0.get());};cO.mthSETCARSEARCHINSTORAGE=function(p0){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"SetCarSearchInStorage",186);var P0=r.cPF("SEARCH",Fd.F4.Dc);P0.set(p0);r.ln=186;{r.ln=190;if(l.s.ne(this.getCURRENTCARSEARCH(),P0.get())){r.ln=192;l.WEB().getLocalStorage().getItem(f.F10.get()).set(P0.get());}}r.ln=196;r.e();};cO.mthGETCARSEARCHFROMSTORAGE=function(){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"GetCarSearchFromStorage",198);
var P0=r.cPF("CARSEARCH",Fd.F4.Dc);r.ln=198;{r.ln=202;P0.set(l.WEB().getLocalStorage().get(f.F10.get()).get());}r.ln=204;return r.rV(P0.get());};cO.mthSETMAKESEARCHINSTORAGE=function(p0){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"SetMakeSearchInStorage",209);var P0=r.cPF("SEARCH",Fd.F4.Dc);P0.set(p0);r.ln=209;{r.ln=213;if(l.s.ne(this.getCURRENTMAKESEARCH(),P0.get())){r.ln=215;l.WEB().getLocalStorage().getItem(f.F11.get()).set(P0.get());}}r.ln=219;r.e();};cO.mthGETMAKESEARCHFROMSTORAGE=function(){var f=this.FLD.XCARAPPL,r=l.pR(this,cO,"GetMakeSearchFromStorage",221);
var P0=r.cPF("MAKESEARCH",Fd.F4.Dc);r.ln=221;{r.ln=225;P0.set(l.WEB().getLocalStorage().get(f.F11.get()).get());}r.ln=227;return r.rV(P0.get());};function e1(sender,Ps){var f=this.FLD.XCARAPPL,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",237);r.ln=237;{r.ln=240;if((l.WEB().getLocalStorage().get(f.F7.get())==null)){r.ln=242;l.WEB().getLocalStorage().mthADD(f.F7.get(),"20");}r.ln=247;if((l.WEB().getLocalStorage().get(f.F5.get())==null)){r.ln=249;l.WEB().getLocalStorage().mthADD(f.F5.get(),"MaterialDesignRed");
}r.ln=254;if((l.WEB().getLocalStorage().get(f.F6.get())==null)){r.ln=256;l.WEB().getLocalStorage().mthADD(f.F6.get(),"Light");}r.ln=261;if((l.WEB().getLocalStorage().get(f.F8.get())==null)){r.ln=263;l.WEB().getLocalStorage().mthADD(f.F8.get(),"A");}r.ln=268;if((l.WEB().getLocalStorage().get(f.F9.get())==null)){r.ln=270;l.WEB().getLocalStorage().mthADD(f.F9.get(),"D");}r.ln=275;if((l.WEB().getLocalStorage().get(f.F10.get())==null)){r.ln=277;l.WEB().getLocalStorage().mthADD(f.F10.get(),"");}r.ln=282;
if((l.WEB().getLocalStorage().get(f.F11.get())==null)){r.ln=284;l.WEB().getLocalStorage().mthADD(f.F11.get(),"");}}r.ln=288;r.e();};cO.getCURRENTFILTER=function(){return this.mthGETFILTERFROMSTORAGE();};cO.setCURRENTFILTER=function(v){this.mthSETFILTERINSTORAGE(v);};cO.getCURRENTSORTORDER=function(){return this.mthGETSORTORDERFROMSTORAGE();};cO.setCURRENTSORTORDER=function(v){this.mthSETSORTORDERINSTORAGE(v);};cO.getCURRENTCARSEARCH=function(){return this.mthGETCARSEARCHFROMSTORAGE();};cO.setCURRENTCARSEARCH=function(v)
{this.mthSETCARSEARCHINSTORAGE(v);};cO.getCURRENTMAKESEARCH=function(){return this.mthGETMAKESEARCHFROMSTORAGE();};cO.setCURRENTMAKESEARCH=function(v){this.mthSETMAKESEARCHINSTORAGE(v);};cO.getNUMBEROFCARSINLIST=function(){return this.mthGETNUMBEROFCARS();};cO.setNUMBEROFCARSINLIST=function(v){this.mthSETNUMBEROFCARS(v);};cO.getTHEME=function(){return this.mthGETTHEME();};cO.setTHEME=function(v){this.mthSETTHEME(v);};cO.getBACKGROUND=function(){return this.mthGETBACKGROUND();};cO.setBACKGROUND=function(v)
{this.mthSETBACKGROUND(v);};function rl1(F1){var v=F1.get();return(l.s.eq(v,""));};function rl2(F3){var v=F3.get();return(l.s.eq(v,"Y")||l.s.eq(v,"N"));};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_TEXT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"STD_FLAG"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"STD_STRNG"});
}},{rp:["PRIM_OBJT","PRIM_FLD"]});