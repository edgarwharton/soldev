﻿LANSA.addComponent({id:"DF_T2801O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Filter for SubType Example (VLF-ONE)",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var m1={"ENG":"See component DF_FILT5 (or function DWFILT5 (web)) for how it works","FRA":"Voir le composant DF_FILT5 / la fonction web DWFILT5 pour plus d´infos","JPN":"使用方法については DF_FILT5 を参照して下さい"}[cL];var c1=l.cDec("465.12"),c2=l.cDec("34567.78"),c3=l.cDec("12354.56"),c4=l.cDec("1465.12"),
c5=l.cDec("354.56"),c6=l.cDec("347.78"),c7=l.cDec("5162.45"),c8=l.cDec("167.89"),c9=l.cDec("65363.67");var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F2:{nm:"PARAMETER_ACCOUNT",ft:"A",ln:10,dc:0,lb:"Parameter_Account",h1:"Parameter_Account",
h2:"",h3:"",de:"Account Number",dv:""},F3:{nm:"PARAMETER_NAME",ft:"A",ln:50,dc:0,lb:"Parameter_Name",h1:"Parameter_Name",h2:"",h3:"",de:"Account Holder",dv:""},F4:{nm:"PARAMETER_BALANCE",ft:"P",ln:11,dc:2,lb:"Parameter_Balance",h1:"Parameter_Balance",h2:"",h3:"",de:"Account Balance",dv:0},F5:{nm:"PARAMETER_ACCOUNTTYPE",ft:"A",ln:20,dc:0,lb:"Parameter_AccountType",h1:"Parameter_AccountType",h2:"",h3:"",de:"Account Type",dv:""}};var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,mt:{uInitialize:{}},co:function()
{cO.aN.call(this);this.aF("DF_T2801O",Fd);this.REF.AVLOCALTIMER.aH("TICK",this,e2);this.setHeight(148);this.setHint(m1);this.setWidth(291);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",22);r.ln=22;{r.ln=25;cA.mthUINITIALIZE.call(this);r.ln=28;this.setAVFILTERLOCATION("NONE");r.ln=31;this.mthAVCHANGECLEARLISTBUTTONCAPTION("Refresh List");r.ln=34;this.REF.AVLOCALTIMER.setInterval(2);}r.ln=36;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#AVLISTMANAGER.ListCleared",40);
var P0=Ps.r("FROMCLEARLISTBUTTON");r.ln=40;{r.ln=42;if(l.tB(l.and(P0.get(),l.n.eq(this.REF.AVLOCALTIMER.getInterval(),0)))){r.ln=44;this.REF.AVLOCALTIMER.setInterval(2);}}r.ln=47;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#AVLOCALTIMER.Tick",50);var C0=r.cF("I",Fd.F1.Dc);var C1=r.cR("IC","PRIM_ALPH");var C2=r.cF("FACTOR",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();r.ln=50;{r.ln=57;this.REF.AVLOCALTIMER.setInterval(0);r.ln=59;C2.set(l.eSV("*TIME"));r.ln=61;for(var i1=1,s1=1,t1=l.tI(2);C0.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1)
{r.ln=63;C1.set(l.n.AsString(C0.get()));r.ln=66;sr1.call(this,l.cat("67383940",C1.get()),"Fred Bloggs",l.add(C2.get(),c1),"SAVINGS");r.ln=67;sr1.call(this,l.cat("73839915",C1.get()),"Fred Bloggs",l.add(C2.get(),c2),"INVESTMENT");r.ln=68;sr1.call(this,l.cat("74849192",C1.get()),"Fred Bloggs",l.add(C2.get(),c3),"CHECK");r.ln=70;sr1.call(this,l.cat("74848949",C1.get()),"Mary Smith",l.add(C2.get(),c4),"SAVINGS");r.ln=71;sr1.call(this,l.cat("51617283",C1.get()),"Mary Smith",l.add(C2.get(),c5),"CHECK");
r.ln=72;sr1.call(this,l.cat("71828234",C1.get()),"Mary Smith",l.add(C2.get(),c6),"INVESTMENT");r.ln=74;sr1.call(this,l.cat("91828373",C1.get()),"Mary Jones",l.add(C2.get(),c7),"SAVINGS");r.ln=75;sr1.call(this,l.cat("71726364",C1.get()),"Mary Jones",l.add(C2.get(),c8),"CHECK");r.ln=76;sr1.call(this,l.cat("84849596",C1.get()),"Mary Jones",l.add(C2.get(),c9),"INVESTMENT");}}r.ln=81;r.e();};function sr1(p0,p1,p2,p3){var f=this.FLD.DF_T2801O,r=l.sR(this,cO,"ADD",84);f.F2.set(p0);f.F3.set(p1);f.F4.set(p2);
f.F5.set(p3);r.ln=84;{r.ln=91;{var v1=f.F5.get();if(r.ln=93,l.s.eq(v1,"SAVINGS")){r.ln=94;this.REF.AVLISTMANAGER.mthADDTOLIST(f.F2.get(),f.F3.get(),f.F2.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,"SAV",u,u,u,"SAV",u,u,u,u,u,u,u,u,u,f.F4.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);}else if(r.ln=96,l.s.eq(v1,"CHECK")){r.ln=97;this.REF.AVLISTMANAGER.mthADDTOLIST(f.F2.get(),f.F3.get(),f.F2.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,"CHK",u,u,u,"CHK",u,u,u,u,u,u,u,u,u,f.F4.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);}else if(r.ln=99,l.s.eq(v1,"INVESTMENT"))
{r.ln=100;this.REF.AVLISTMANAGER.mthADDTOLIST(f.F2.get(),f.F3.get(),f.F2.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,"INV",u,u,u,"INV",u,u,u,u,u,u,u,u,u,f.F4.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);}r.ln=102;}}r.ln=104;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.setrefAVLISTMANAGER=function(rn){if(this.REF.AVLISTMANAGER!=null){this.REF.AVLISTMANAGER.rH("LISTCLEARED",this,e1);}cA.setrefAVLISTMANAGER.call(this,rn);if(this.REF.AVLISTMANAGER!=null)
{this.REF.AVLISTMANAGER.aH("LISTCLEARED",this,e1);}};},{rc:["VF_AC007O"],rp:["PRIM_FLD","PRIM_HINT"],dp:["PRIM_ALPH"]});