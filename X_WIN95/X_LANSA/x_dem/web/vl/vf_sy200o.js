﻿LANSA.addComponent({id:"VF_SY200O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Server Handler Interface",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"SERIES200OPERATION",ft:"A",ln:1,dc:0,lb:"Series200Operation",h1:"Series200Operation",h2:"",h3:"",de:"Series200Operation",dv:""},F2:{nm:"SERIES200PTYNUMBER",ft:"I",ln:4,dc:0,ec:"3",lb:"Standard Binary",h1:"Standard",h2:"Binary",h3:"Index",de:"Standard Binary Index Field",dv:0,ia:["FE","RB"]
},F3:{nm:"SERIES200INSTANCE",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",dv:0,ia:["FE","RB"]},F4:{nm:"SERIES200VALUE",ft:"NV",ln:4096,dc:0,lb:"Series200Value",h1:"Series200Value",h2:"",h3:"",de:"Series200Value",dv:""},F5:{nm:"VF_ELTRCS",ft:"A",ln:1,dc:0,lb:"Trace Source (C",h1:"Trace",h2:"Source",h3:"(Client",de:"Trace Source (Client / Server)",dv:"",ia:["FE"]},F6:{nm:"VF_ELTRCT",ft:"DT",ln:26,dc:0,lb:"Trace Time",h1:"Trace",h2:"Time",
h3:"",de:"Trace Time",dv:l.SqlNull,ia:["ASQN","FE","ISO","DUTC"]},F7:{nm:"VF_ELTRCN",ft:"VC",ln:256,dc:0,lb:"Trace Component",h1:"Trace",h2:"Component",h3:"Name",de:"Trace Component Name",dv:"",ia:["FE"]},F8:{nm:"VF_ELTRCE",ft:"NV",ln:2048,dc:0,lb:"Trace Event Tex",h1:"Trace",h2:"Event",h3:"Text",de:"Trace Event Text",dv:"",ia:["FE","LC"]},F9:{nm:"DATAISSYSTEMTRACE",ft:"A",ln:5,dc:0,lb:"Standard",h1:"Boolean",h2:"",h3:"",de:"Standard Boolean",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,
mt:{zInt_RouteServerTracetoLocalTrace:{},zInt_GetEncyptedHandlerName:{ps:{"FromBusinessObject":{pt:"i"}}},zInt_Deserialize200Stream:{},zInt_InitializeFilter:{ps:{"Filter":{pt:"i"},"ResponseObject":{pt:"o"}}},zInt_TerminateFilter:{ps:{"Filter":{pt:"i"}}},zInt_InitializeCommandHandler:{ps:{"Handler":{pt:"i"}}},zInt_TerminateCommandHandler:{ps:{"Handler":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("VF_SY200O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");
var C2=this.cA("UFRAMEWORK","VF_FP001O");var C3=this.cDR("INITIALIZEFILTER","VF_SW100O","INITIALIZEFILTER");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}if((C2!=null)&&(C2.iI()==false)){C2.iC();}C3.iC();var li=this.aL("VF_SY200O");li.SERIES200STREAMASLIST=l.cLT({"SERIES200OPERATION":f.F1,"SERIES200PTYNUMBER":f.F2,"SERIES200INSTANCE":f.F3,"SERIES200VALUE":f.F4},null);li.SERVERTRACEDETAILS=l.cLT({"VF_ELTRCS":f.F5,"VF_ELTRCT":f.F6,"VF_ELTRCN":f.F7,"VF_ELTRCE":f.F8,"DATAISSYSTEMTRACE":f.F9},null);
}});cO.mthZINT_ROUTESERVERTRACETOLOCALTRACE=function(){var li=this.LIST.VF_SY200O,f=this.FLD.VF_SY200O,m=this.REF,r=l.mR(this,cO,"zInt_RouteServerTracetoLocalTrace",29);r.ln=29;{r.ln=31;if(m.USYSTEMCOMMON.ref.getINAPPTRACEMODE()){r.ln=32;{var l1=li.SERVERTRACEDETAILS.selectList();while(l1.step()){r.ln=33;m.USYSTEMCOMMON.ref.mthTRACEEVENT(null,f.F7.get(),f.F8.get(),f.F5.get(),f.F6.get(),f.F9.get(),u);r.ln=34;}l1.end();}}r.ln=37;li.SERVERTRACEDETAILS.clearList();}r.ln=39;r.e();};cO.mthZINT_GETENCYPTEDHANDLERNAME=function(p0)
{var m=this.REF,r=l.mR(this,cO,"zInt_GetEncyptedHandlerName",42);var P0=r.cPD("FROMBUSINESSOBJECT");var P1=r.cP("ENCRYPTEDHANDLERNAME","PRIM_ALPH");P0=r.sR("FROMBUSINESSOBJECT",p0);r.ln=42;{r.ln=46;P1.set(m.USYSTEMCOMMON.ref.mthENCRYPT(P0.getUVLFONESERVERHANDLER()));}r.ln=48;return r.rV(P1.get());};cO.mthZINT_DESERIALIZE200STREAM=function(){var li=this.LIST.VF_SY200O,f=this.FLD.VF_SY200O,r=l.mR(this,cO,"zInt_Deserialize200Stream",52);var P0=r.cPD("INTO");var C0=r.cR("PARENTSTACK","PRIM_ACOL");var C1=r.cD("C1");
var C2=r.cD("C2");C0.setCollects("VF_AC201O");C0.iC();r.ln=52;{r.ln=59;{var l1=li.SERIES200STREAMASLIST.selectList();while(l1.step()){r.ln=61;{var v1=f.F1.get();if(r.ln=63,l.s.eq(v1,"B")){r.ln=65;if((C2!=null)){r.ln=66;C0.mthINSERTLAST(C2);r.ln=67;C1=r.sR("C1",C2);r.ln=68;if((P0==null)){r.ln=69;P0=r.sR("P0",l.cast(C2,"VF_SY202O"));}}else{r.ln=72;C1=r.sR("C1",null);}r.ln=75;C2=r.sR("C2",l.cFr(l.s.Trim(l.s.AsNativeString(f.F4.get())),"VF_AC201O"));r.ln=77;C2.mthZINT_INITIALIZE(C1,null);}else if(r.ln=79,l.s.eq(v1,"E"))
{r.ln=81;if(l.n.gt(C0.getItemCount(),0)){r.ln=82;C2=r.sR("C2",C0.getLast());r.ln=83;C0.mthREMOVELAST();}else{r.ln=85;C2=r.sR("C2",null);}}else if(r.ln=88,l.s.eq(v1,"P")){r.ln=90;C2.mthZINT_DESERIALIZEPROPERTY(f.F2.get(),f.F3.get(),f.F4.get());}r.ln=92;}r.ln=94;}l1.end();}r.ln=97;if((C2!=null)){r.ln=98;l.WEB().mthALERT("VF_SY200O:Deserialize200Stream encountered a malformed returned stream.");}}r.ln=102;return r.rR(P0);};cO.mthZINT_INITIALIZEFILTER=function(p0,p1){var li=this.LIST.VF_SY200O,m=this.REF,r=l.mR(this,cO,"zInt_InitializeFilter",105);
var P0=r.cPD("FILTER");var P1=r.cPD("RESPONSEOBJECT");P0=r.sR("FILTER",p0);var C0=r.cR("ENCRYPTEDHANDLERNAME","PRIM_ALPH");var C1=r.cR("MAJORRETURNCODE","PRIM_ALPH");C0.iC();C1.iC();r.ln=105;{r.ln=113;C0.set(m.USYSTEMCOMMON.ref.mthENCRYPT(P0.getASSOCIATEDVF_FR003O().getUVLFONESERVERHANDLER()));r.ln=116;C1.set("ER");r.ln=118;li.SERIES200STREAMASLIST.clearList();r.ln=121;m.INITIALIZEFILTER.mthEXECUTE({FLD:{"REQUESTSERVERSYSTRACEMODE":m.USYSTEMCOMMON.ref.getINSYSTRACEMODE(),"REQUESTSERVERAPPTRACEMODE":m.USYSTEMCOMMON.ref.getINAPPTRACEMODE(),"REQUESTSERVERHANDLERID":C0.get()}},{FLD:{"MAJORRETURNCODE":C1},LIST:{"SERVERTRACEDETAILS":li.SERVERTRACEDETAILS,"SERIES200STREAMASLIST":li.SERIES200STREAMASLIST}});
r.ln=124;C1.set(m.USYSTEMCOMMON.ref.mthDECRYPT(C1.get()));r.ln=125;m.USYSTEM.ref.mthZINT_RECEIVESYSTEMMESSAGEQUEUE(P0.getASSIGNEDMESSAGECOLLECTIONNUMBER());r.ln=126;this.mthZINT_ROUTESERVERTRACETOLOCALTRACE();r.ln=129;P1=r.sR("P1",cO.mthZINT_DESERIALIZE200STREAM.call(this));p1.set(P1);}r.ln=131;r.e();};cO.mthZINT_TERMINATEFILTER=function(p0){var r=l.mR(this,cO,"zInt_TerminateFilter",134);var P0=r.cPD("FILTER");P0=r.sR("FILTER",p0);r.ln=134;{}r.ln=142;r.e();};cO.mthZINT_INITIALIZECOMMANDHANDLER=function(p0)
{var r=l.mR(this,cO,"zInt_InitializeCommandHandler",145);var P0=r.cPD("HANDLER");P0=r.sR("HANDLER",p0);r.ln=145;{}r.ln=153;r.e();};cO.mthZINT_TERMINATECOMMANDHANDLER=function(p0){var r=l.mR(this,cO,"zInt_TerminateCommandHandler",156);var P0=r.cPD("HANDLER");P0=r.sR("HANDLER",p0);r.ln=156;{}r.ln=162;r.e();};},{rc:["VF_SY001O","VF_SY001X","VF_FP001O"],rp:["PRIM_OBJT","PRIM_WEB.DataRequest","PRIM_FLD"],dc:["VF_AC201O"],dp:["PRIM_ACOL","PRIM_ALPH"]});