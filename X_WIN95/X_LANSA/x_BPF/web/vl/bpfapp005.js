﻿LANSA.addComponent({id:"BPFAPP005",nm:"BPFSecurityDataClient",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Data Model Client for Security Settings",tl:15000300},function(l,oI,u){var cL="ENG";var Fd={F1:{nm:"BPFFLD017",an:"BPFCodeNumericValue",ft:"S",ln:15,dc:0,lb:"Codes Numeric V",h1:"Codes",h2:"Numeric",h3:"Value",de:"Codes Numeric Value",dv:0,ia:["FE","RB"]},F2:{nm:"BPFFLD013",an:"BPFCodeGroup",ft:"NV",ln:128,dc:0,lb:"Codes Group Nam",h1:"Codes",h2:"Group",h3:"Name",de:"Codes Group Name",dv:"",ia:["FE","LC"]
},F3:{nm:"BPFFLD014",an:"BPFCodeName",ft:"NV",ln:256,dc:0,lb:"Code Table Name",h1:"Code",h2:"Table",h3:"Name",de:"Code Table Name",dv:"",ia:["FE","LC"]},F4:{nm:"BPFFLD015",an:"BPFCodeSequence",ft:"P",ln:7,dc:0,lb:"Code Sequence",h1:"Code",h2:"Sequence",h3:"",de:"Code Sequence",dv:0,ia:["FE","RB"]},F5:{nm:"BPFFLD016",an:"BPFCodeAlphaValue",ft:"NV",ln:2048,dc:0,lb:"Codes Alpha Val",h1:"Codes",h2:"Alpha",h3:"Value",de:"Codes Alpha Value",dv:"",ia:["ASQN","LC"]},F6:{nm:"BPFFLD018",an:"BPFCodeDescription",
ft:"NV",ln:4096,dc:0,lb:"Code Descriptio",h1:"Code",h2:"Description",h3:"",de:"Code Description",dv:"",ia:["ASQN","LC"]},F7:{nm:"BPFFLD071",an:"BPFRecordedIPAddress",ft:"A",ln:45,dc:0,lb:"Recorded IP Add",h1:"Recorded",h2:"IP",h3:"Address",de:"Recorded IP Address",dv:"",ia:["FE","LC"]},F8:{nm:"BPFFLD075",an:"BPFGenericShortNumeric01",ft:"P",ln:7,dc:0,lb:"Generic Numeric",h1:"Generic",h2:"Numeric",h3:"(7,0)",de:"Generic Numeric (7,0)",dv:0,ia:["FE","RB"]},F9:{nm:"BPFFLD076",an:"BPFGenericShortNumeric02",
ft:"P",ln:7,dc:0,lb:"Generic Numeric",h1:"Generic",h2:"Numeric",h3:"(7,0)",de:"Generic Numeric (7,0)",dv:0,ia:["FE","RB"]},F10:{nm:"BPFFLD074",an:"BPFIPAddressAttemptRecorded",ft:"DT",ln:26,dc:0,lb:"IP Address Last",h1:"IP",h2:"Address",h3:"Last",de:"IP Address Last Invalid Attempt Recorded",dv:l.SqlNull,ia:["ASQN","ISO","SUTC"]},F11:{nm:"STATUS",an:"Status",ft:"A",ln:256,dc:0,lb:"Generic Status",h1:"Generic",h2:"Status",h3:"Field",de:"Generic Status Field",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{
an:"PRIM_OBJT",fd:Fd,pt:{RequestValidationEnabled:{da:"r"},RequestValidationCleanupProcessStatus:{da:"r"},AllowedAttempts:{da:"rw"},SecurityQuestions:{da:"r"},IPMonitoringEnabled:{da:"r"},IPMonitoringAttemptLimit:{da:"r"},IPMonitoringClearProcessStatus:{da:"r"},IPMonitoringBanDuration:{da:"r"},IPMonitoringBanCheckInterval:{da:"r"},IPMonitoringChangesPending:{da:"r"},NumberOfIPsBanned:{da:"r"},BannedAddresses:{da:"r"}},mt:{GetRequestValidationStatus:{},SetRequestValidationEnabled:{ps:{"To":{pt:"i"
}}},SetRequestCleanupTask:{ps:{"To":{pt:"i"}}},GetIPMonitoringStatus:{},SetIPMonitoringValues:{ps:{"To":{pt:"i"},"Limit":{pt:"i"}}},SetIPMonitoringCheckInterval:{ps:{"Value":{pt:"i"}}},SetIPMonitoringCheckBanDuration:{ps:{"Value":{pt:"i"}}},SetIPBanClearTask:{ps:{"To":{pt:"i"}}},GetBannedAddresses:{},ClearIPAddressBan:{ps:{"Victim":{pt:"i"}}},GetAllowedAttempts:{},SaveAllowedAttempts:{},GetActiveQuestions:{ps:{"ForIsoCode":{pt:"i"}}},SaveActiveQuestions:{ps:{"ForIsoCode":{pt:"i"}}}},ev:{OnSetRequestCleanupTaskCompleted:
{},OnSetRequestCleanupTaskFailed:{},OnSetRequestValidationEnabledCompleted:{},OnSetRequestValidationEnabledFailed:{},OnGetRequestValidationStatusCompleted:{},OnGetRequestValidationStatusFailed:{},OnGetIPMonitoringStatusCompleted:{},OnGetIPMonitoringStatusFailed:{},OnSetIPMonitoringValuesCompleted:{},OnSetIPMonitoringValuesFailed:{},OnSetIPMonitoringCheckIntervalCompleted:{},OnSetIPMonitoringCheckIntervalFailed:{},OnSetIPMonitoringCheckBanDurationCompleted:{},OnSetIPMonitoringCheckBanDurationFailed:
{},OnSetIPMonitoringCheckBanTaskCompleted:{},OnSetIPMonitoringCheckBanTaskFailed:{},OnGetAllowedAttemptsCompleted:{},OnGetAllowedAttemptsFailed:{},OnSaveAllowedAttemptsCompleted:{},OnSaveAllowedAttemptsFailed:{},OnGetActiveQuestionsCompleted:{},OnGetActiveQuestionsFailed:{},OnSaveActiveQuestionsCompleted:{},OnSaveActiveQuestionsFailed:{},OnGetBannedAddressesCompleted:{},OnGetBannedAddressesFailed:{},OnClearIPAddressBanCompleted:{ps:{"Victim":{pt:"i"}}},OnClearIPAddressBanFailed:{}},co:function(){
cO.aN.call(this);var f=this.aF("BPFAPP005",Fd);var C0=this.cA("BROWSER","BPFWGT001");var C1=this.cR("REQUESTVALIDATIONENABLED","PRIM_BOLN");var C2=this.cR("REQUESTVALIDATIONCLEANUPPROCESSSTATUS","PRIM_ALPH");var C3=this.cR("IPMONITORINGENABLED","PRIM_BOLN");var C4=this.cR("IPMONITORINGATTEMPTLIMIT","PRIM_NMBR");var C5=this.cR("IPMONITORINGCLEARPROCESSSTATUS","PRIM_ALPH");var C6=this.cR("IPMONITORINGBANDURATION","PRIM_NMBR");var C7=this.cR("IPMONITORINGBANCHECKINTERVAL","PRIM_NMBR");var C8=this.cR("IPMONITORINGCHANGESPENDING","PRIM_BOLN");
var C9=this.cR("NUMBEROFIPSBANNED","PRIM_NMBR");var C10=this.cF("ALLOWEDATTEMPTS",Fd.F1.Dc);var C11=this.cR("QUESTIONSETTINGS","PRIM_LCOL");var C12=this.cR("BANNEDADDRESSES","PRIM_LCOL");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.iC();C3.iC();C4.iC();C5.iC();C6.iC();C7.iC();C8.iC();C9.iC();C10.aD();C10.iC();C11.setCollects("BPFCLS009");C11.iC();C12.setCollects("BPFCLS016");C12.iC();C11.aLF({"BPFFLD013":f.F2,"BPFFLD014":f.F3,"BPFFLD015":f.F4,"BPFFLD016":f.F5,"BPFFLD017":f.F1,"BPFFLD018":f.F6});
C12.aLF({"BPFFLD071":f.F7,"BPFFLD075":f.F8,"BPFFLD076":f.F9,"BPFFLD074":f.F10});}});cO.mthGETREQUESTVALIDATIONSTATUS=function(){var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"GetRequestValidationStatus",101),mth=r;var C0=r.cDR("REQUEST","BPFSVR006","GETREQUSTCHKVALIDSTS");C0.iC();C0.aH("COMPLETED",this,e1);C0.aH("FAILED",this,e2);r.ln=101;{r.ln=107;C0.mthEXECUTEASYNC({},{FLD:{"BPFFLD017":m.REQUESTVALIDATIONENABLED,"ALPHAVALUE":m.REQUESTVALIDATIONCLEANUPPROCESSSTATUS,"BPFFLD007":f.F11}});}r.ln=130;
r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",109,mth);r.ln=109;{r.ln=111;if(l.s.eq(f.F11.get(),"OK")){r.ln=113;this.fE("ONGETREQUESTVALIDATIONSTATUSCOMPLETED");}else{r.ln=117;this.fE("ONGETREQUESTVALIDATIONSTATUSFAILED");}}r.ln=121;r.e();}function e2(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",123,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=123;{r.ln=125;P0.set(true);r.ln=126;this.fE("ONGETREQUESTVALIDATIONSTATUSFAILED");}r.ln=128;r.e();}};cO.mthSETREQUESTVALIDATIONENABLED=function(p0)
{var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"SetRequestValidationEnabled",132),mth=r;var P0=r.cP("TO","PRIM_BOLN");P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR006","SETREQUESTVALIDON");C0.iC();C0.aH("COMPLETED",this,e3);C0.aH("FAILED",this,e4);r.ln=132;{r.ln=139;C0.mthEXECUTEASYNC({FLD:{"BOOLEANVALUE":P0.get()}},{FLD:{"BPFFLD007":f.F11}});}r.ln=175;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",141,mth);r.ln=141;{r.ln=143;if(l.s.eq(f.F11.get(),"OK")){r.ln=145;if(l.tB(P0.get()))
{r.ln=147;m.REQUESTVALIDATIONENABLED.set(true);r.ln=148;m.REQUESTVALIDATIONCLEANUPPROCESSSTATUS.set("Running");}else{r.ln=152;m.REQUESTVALIDATIONENABLED.set(false);r.ln=153;m.REQUESTVALIDATIONCLEANUPPROCESSSTATUS.set("Ending");}r.ln=158;this.fE("ONSETREQUESTVALIDATIONENABLEDCOMPLETED");}else{r.ln=162;this.fE("ONSETREQUESTVALIDATIONENABLEDFAILED");}}r.ln=166;r.e();}function e4(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",168,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=168;{r.ln=170;P1.set(true);
r.ln=171;this.fE("ONSETREQUESTVALIDATIONENABLEDFAILED");}r.ln=173;r.e();}};cO.mthSETREQUESTCLEANUPTASK=function(p0){var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"SetRequestCleanupTask",177),mth=r;var P0=r.cP("TO","PRIM_ALPH");P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR006","SETREQUESTCLEANTASK");C0.iC();C0.aH("COMPLETED",this,e5);C0.aH("FAILED",this,e6);r.ln=177;{r.ln=184;C0.mthEXECUTEASYNC({FLD:{"ALPHAVALUE":l.s.UpperCase(P0.get())}},{FLD:{"BPFFLD007":f.F11}});}r.ln=223;r.e();function e5(sender,Ps)
{var r=l.eR(this,cO,"#Request.Completed",186,mth);r.ln=186;{r.ln=188;if(l.s.eq(f.F11.get(),"OK")){r.ln=190;{var v1=l.s.UpperCase(P0.get());if(r.ln=192,l.s.eq(v1,"START")){r.ln=194;m.REQUESTVALIDATIONCLEANUPPROCESSSTATUS.set("Running");}else if(r.ln=196,l.s.eq(v1,"STOP")){r.ln=198;m.REQUESTVALIDATIONCLEANUPPROCESSSTATUS.set("Ending");}else if(r.ln=200,l.s.eq(v1,"RESTART")){r.ln=202;m.REQUESTVALIDATIONCLEANUPPROCESSSTATUS.set("Running");}r.ln=204;}r.ln=206;this.fE("ONSETREQUESTCLEANUPTASKCOMPLETED");
}else{r.ln=210;this.fE("ONSETREQUESTCLEANUPTASKFAILED");}}r.ln=214;r.e();}function e6(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",216,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=216;{r.ln=218;P1.set(true);r.ln=219;this.fE("ONSETREQUESTCLEANUPTASKFAILED");}r.ln=221;r.e();}};cO.mthGETIPMONITORINGSTATUS=function(){var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"GetIPMonitoringStatus",226),mth=r;var C0=r.cDR("REQUEST","BPFSVR006","GETIPBANSTATUS");C0.iC();C0.aH("COMPLETED",this,e7);
C0.aH("FAILED",this,e8);r.ln=226;{r.ln=232;C0.mthEXECUTEASYNC({},{FLD:{"NUMERICVALUE1":m.IPMONITORINGENABLED,"NUMERICVALUE2":m.IPMONITORINGATTEMPTLIMIT,"ALPHAVALUE":m.IPMONITORINGCLEARPROCESSSTATUS,"NUMERICVALUE3":m.IPMONITORINGBANDURATION,"NUMERICVALUE4":m.IPMONITORINGBANCHECKINTERVAL,"NUMERICVALUE5":m.IPMONITORINGCHANGESPENDING,"STD_NUM":m.NUMBEROFIPSBANNED,"BPFFLD007":f.F11}});}r.ln=255;r.e();function e7(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",234,mth);r.ln=234;{r.ln=236;if(l.s.eq(f.F11.get(),"OK"))
{r.ln=238;this.fE("ONGETIPMONITORINGSTATUSCOMPLETED");}else{r.ln=242;this.fE("ONGETIPMONITORINGSTATUSFAILED");}}r.ln=246;r.e();}function e8(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",248,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=248;{r.ln=250;P0.set(true);r.ln=251;this.fE("ONGETIPMONITORINGSTATUSFAILED");}r.ln=253;r.e();}};cO.mthSETIPMONITORINGVALUES=function(p0,p1){var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"SetIPMonitoringValues",257),mth=r;var P0=r.cP("TO","PRIM_BOLN");
var P1=r.cP("LIMIT","PRIM_NMBR");P0.set(p0);P1.set(p1);var C0=r.cDR("REQUEST","BPFSVR006","SETIPMONITORVALUES");C0.iC();C0.aH("COMPLETED",this,e9);C0.aH("FAILED",this,e10);r.ln=257;{r.ln=265;C0.mthEXECUTEASYNC({FLD:{"BOOLEANVALUE":P0.get(),"NUMERICVALUE2":P1.get()}},{FLD:{"BPFFLD007":f.F11}});}r.ln=302;r.e();function e9(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",267,mth);r.ln=267;{r.ln=269;if(l.s.eq(f.F11.get(),"OK")){r.ln=271;if(l.tB(P0.get())){r.ln=273;m.IPMONITORINGENABLED.set(true);r.ln=274;
m.IPMONITORINGCLEARPROCESSSTATUS.set("Running");}else{r.ln=278;m.IPMONITORINGENABLED.set(false);r.ln=279;m.IPMONITORINGCLEARPROCESSSTATUS.set("Ending");}r.ln=283;m.IPMONITORINGATTEMPTLIMIT.set(P1.get());r.ln=285;this.fE("ONSETIPMONITORINGVALUESCOMPLETED");}else{r.ln=289;this.fE("ONSETIPMONITORINGVALUESFAILED");}}r.ln=293;r.e();}function e10(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",295,mth);var P2=Ps.r("HANDLED");var P3=Ps.r("REASON");r.ln=295;{r.ln=297;P2.set(true);r.ln=298;this.fE("ONSETIPMONITORINGVALUESFAILED");
}r.ln=300;r.e();}};cO.mthSETIPMONITORINGCHECKINTERVAL=function(p0){var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"SetIPMonitoringCheckInterval",304),mth=r;var P0=r.cP("VALUE","PRIM_NMBR");P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR006","SETIPCLEARCHECKTIME");C0.iC();C0.aH("COMPLETED",this,e11);C0.aH("FAILED",this,e12);r.ln=304;{r.ln=311;C0.mthEXECUTEASYNC({FLD:{"NUMERICVALUE1":P0.get()}},{FLD:{"NUMERICVALUE5":m.IPMONITORINGCHANGESPENDING,"BPFFLD007":f.F11}});}r.ln=336;r.e();function e11(sender,Ps)
{var r=l.eR(this,cO,"#Request.Completed",313,mth);r.ln=313;{r.ln=315;if(l.s.eq(f.F11.get(),"OK")){r.ln=317;m.IPMONITORINGBANCHECKINTERVAL.set(P0.get());r.ln=319;this.fE("ONSETIPMONITORINGCHECKINTERVALCOMPLETED");}else{r.ln=323;this.fE("ONSETIPMONITORINGCHECKINTERVALFAILED");}}r.ln=327;r.e();}function e12(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",329,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=329;{r.ln=331;P1.set(true);r.ln=332;this.fE("ONSETIPMONITORINGCHECKINTERVALFAILED");}r.ln=334;
r.e();}};cO.mthSETIPMONITORINGCHECKBANDURATION=function(p0){var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"SetIPMonitoringCheckBanDuration",338),mth=r;var P0=r.cP("VALUE","PRIM_NMBR");P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR006","SETIPCLEARBANNEDTIME");C0.iC();C0.aH("COMPLETED",this,e13);C0.aH("FAILED",this,e14);r.ln=338;{r.ln=345;C0.mthEXECUTEASYNC({FLD:{"NUMERICVALUE1":P0.get()}},{FLD:{"NUMERICVALUE5":m.IPMONITORINGCHANGESPENDING,"BPFFLD007":f.F11}});}r.ln=370;r.e();function e13(sender,Ps)
{var r=l.eR(this,cO,"#Request.Completed",347,mth);r.ln=347;{r.ln=349;if(l.s.eq(f.F11.get(),"OK")){r.ln=351;m.IPMONITORINGBANDURATION.set(P0.get());r.ln=353;this.fE("ONSETIPMONITORINGCHECKBANDURATIONCOMPLETED");}else{r.ln=357;this.fE("ONSETIPMONITORINGCHECKBANDURATIONFAILED");}}r.ln=361;r.e();}function e14(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",363,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=363;{r.ln=365;P1.set(true);r.ln=366;this.fE("ONSETIPMONITORINGCHECKBANDURATIONFAILED");
}r.ln=368;r.e();}};cO.mthSETIPBANCLEARTASK=function(p0){var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"SetIPBanClearTask",372),mth=r;var P0=r.cP("TO","PRIM_ALPH");P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR006","SETIPCLEARTASK");C0.iC();C0.aH("COMPLETED",this,e15);C0.aH("FAILED",this,e16);r.ln=372;{r.ln=379;C0.mthEXECUTEASYNC({FLD:{"ALPHAVALUE":l.s.UpperCase(P0.get())}},{FLD:{"BPFFLD007":f.F11}});}r.ln=418;r.e();function e15(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",381,mth);r.ln=381;
{r.ln=383;if(l.s.eq(f.F11.get(),"OK")){r.ln=385;{var v1=l.s.UpperCase(P0.get());if(r.ln=387,l.s.eq(v1,"START")){r.ln=389;m.IPMONITORINGCLEARPROCESSSTATUS.set("Running");}else if(r.ln=391,l.s.eq(v1,"STOP")){r.ln=393;m.IPMONITORINGCLEARPROCESSSTATUS.set("Ending");}else if(r.ln=395,l.s.eq(v1,"RESTART")){r.ln=397;m.IPMONITORINGCLEARPROCESSSTATUS.set("Running");}r.ln=399;}r.ln=401;this.fE("ONSETIPMONITORINGCHECKBANTASKCOMPLETED");}else{r.ln=405;this.fE("ONSETIPMONITORINGCHECKBANTASKFAILED");}}r.ln=409;
r.e();}function e16(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",411,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=411;{r.ln=413;P1.set(true);r.ln=414;this.fE("ONSETIPMONITORINGCHECKBANTASKFAILED");}r.ln=416;r.e();}};cO.mthGETBANNEDADDRESSES=function(){var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"GetBannedAddresses",420),mth=r;var C0=r.cDR("REQUEST","BPFSVR006","GETCURRENTBANNEDIPS");C0.iC();C0.aH("COMPLETED",this,e17);C0.aH("FAILED",this,e18);r.ln=420;{r.ln=426;C0.mthEXECUTEASYNC({},{FLD:{"BPFFLD007":f.F11},LIST:{"CURRENTBANNEDIPS":m.BANNEDADDRESSES}});
}r.ln=449;r.e();function e17(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",428,mth);r.ln=428;{r.ln=430;if(l.s.eq(f.F11.get(),"OK")){r.ln=432;this.fE("ONGETBANNEDADDRESSESCOMPLETED");}else{r.ln=436;this.fE("ONGETBANNEDADDRESSESFAILED");}}r.ln=440;r.e();}function e18(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",442,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=442;{r.ln=444;P0.set(true);r.ln=445;this.fE("ONGETBANNEDADDRESSESFAILED");}r.ln=447;r.e();}};cO.mthCLEARIPADDRESSBAN=function(p0)
{var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"ClearIPAddressBan",451),mth=r;var P0=r.cPD("VICTIM");P0=r.sR("VICTIM",(p0===u)?(null):(p0));var C0=r.cDR("REQUEST","BPFSVR006","CLEARIPADDRESSBAN");C0.iC();C0.aH("COMPLETED",this,e19);C0.aH("FAILED",this,e20);r.ln=451;{r.ln=458;if((P0==null)){r.ln=460;C0.mthEXECUTEASYNC({},{FLD:{"BPFFLD007":f.F11}});}else{r.ln=464;C0.mthEXECUTEASYNC({FLD:{"BPFFLD071":P0.getIPADDRESS()}},{FLD:{"BPFFLD007":f.F11}});}}r.ln=501;r.e();function e19(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",468,mth);
r.ln=468;{r.ln=470;if(l.s.eq(f.F11.get(),"OK")){r.ln=474;if((P0==null)){r.ln=476;m.BANNEDADDRESSES.mthREMOVEALL();}else{r.ln=480;m.BANNEDADDRESSES.mthREMOVE(P0);}r.ln=484;{var eP=l.ePs();eP.cD("VICTIM");eP.sR("VICTIM",P0);this.fE("ONCLEARIPADDRESSBANCOMPLETED",eP);eP.e();}}else{r.ln=488;this.fE("ONCLEARIPADDRESSBANFAILED");}}r.ln=492;r.e();}function e20(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",494,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=494;{r.ln=496;P1.set(true);r.ln=497;this.fE("ONGETBANNEDADDRESSESFAILED");
}r.ln=499;r.e();}};cO.mthGETALLOWEDATTEMPTS=function(){var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"GetAllowedAttempts",504),mth=r;var C0=r.cDR("REQUEST","BPFSVR006","GETALLOWEDATTEMPTS");C0.iC();C0.aH("COMPLETED",this,e21);C0.aH("FAILED",this,e22);r.ln=504;{r.ln=510;C0.mthEXECUTEASYNC({},{FLD:{"BPFFLD017":m.ALLOWEDATTEMPTS,"BPFFLD007":f.F11}});}r.ln=533;r.e();function e21(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",512,mth);r.ln=512;{r.ln=514;if(l.s.eq(f.F11.get(),"OK")){r.ln=516;this.fE("ONGETALLOWEDATTEMPTSCOMPLETED");
}else{r.ln=520;this.fE("ONGETALLOWEDATTEMPTSFAILED");}}r.ln=524;r.e();}function e22(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",526,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=526;{r.ln=528;P0.set(true);r.ln=529;this.fE("ONGETALLOWEDATTEMPTSFAILED");}r.ln=531;r.e();}};cO.mthSAVEALLOWEDATTEMPTS=function(){var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"SaveAllowedAttempts",535),mth=r;var C0=r.cDR("REQUEST","BPFSVR005","SAVENUMERICCODE");C0.iC();C0.aH("COMPLETED",this,e23);C0.aH("FAILED",this,e24);
r.ln=535;{r.ln=541;C0.mthEXECUTEASYNC({FLD:{"BPFFLD013":"SECURITY","BPFFLD014":"LOGIN_ATTEMPT_LIMIT","BPFFLD015":1,"BPFFLD017":m.ALLOWEDATTEMPTS.get()}},{FLD:{"BPFFLD007":f.F11}});}r.ln=564;r.e();function e23(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",543,mth);r.ln=543;{r.ln=545;if(l.s.eq(f.F11.get(),"OK")){r.ln=547;this.fE("ONSAVEALLOWEDATTEMPTSCOMPLETED");}else{r.ln=551;this.fE("ONSAVEALLOWEDATTEMPTSFAILED");}}r.ln=555;r.e();}function e24(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",557,mth);
var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=557;{r.ln=559;P0.set(true);r.ln=560;this.fE("ONSAVEALLOWEDATTEMPTSFAILED");}r.ln=562;r.e();}};cO.mthGETACTIVEQUESTIONS=function(p0){var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"GetActiveQuestions",567),mth=r;var P0=r.cP("FORISOCODE","PRIM_DC","UnicodeString");P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR006","GETACTIVEQUESTIONS");C0.iC();C0.aH("COMPLETED",this,e25);C0.aH("FAILED",this,e26);r.ln=567;{r.ln=574;C0.mthEXECUTEASYNC({FLD:{"BPFFLD081":P0.get()}},{FLD:{"BPFFLD007":f.F11},LIST:{"CODESGROUP":m.QUESTIONSETTINGS}});
}r.ln=597;r.e();function e25(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",576,mth);r.ln=576;{r.ln=578;if(l.s.eq(f.F11.get(),"OK")){r.ln=580;this.fE("ONGETACTIVEQUESTIONSCOMPLETED");}else{r.ln=584;this.fE("ONGETACTIVEQUESTIONSFAILED");}}r.ln=588;r.e();}function e26(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",590,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=590;{r.ln=592;P1.set(true);r.ln=593;this.fE("ONGETACTIVEQUESTIONSFAILED");}r.ln=595;r.e();}};cO.mthSAVEACTIVEQUESTIONS=function(p0)
{var f=this.FLD.BPFAPP005,m=this.REF,r=l.mR(this,cO,"SaveActiveQuestions",599),mth=r;var P0=r.cP("FORISOCODE","PRIM_DC","UnicodeString");P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR006","SETACTIVEQUESTIONS");C0.iC();C0.aH("COMPLETED",this,e27);C0.aH("FAILED",this,e28);r.ln=599;{r.ln=606;C0.mthEXECUTEASYNC({FLD:{"BPFFLD081":P0.get()},LIST:{"CODESGROUP":m.QUESTIONSETTINGS}},{FLD:{"BPFFLD007":f.F11}});}r.ln=629;r.e();function e27(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",608,mth);r.ln=608;{r.ln=610;
if(l.s.eq(f.F11.get(),"OK")){r.ln=612;this.fE("ONSAVEACTIVEQUESTIONSCOMPLETED");}else{r.ln=616;this.fE("ONSAVEACTIVEQUESTIONSFAILED");}}r.ln=620;r.e();}function e28(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",622,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=622;{r.ln=624;P1.set(true);r.ln=625;this.fE("ONSAVEACTIVEQUESTIONSFAILED");}r.ln=627;r.e();}};cO.getREQUESTVALIDATIONENABLED=function(){return this.REF.REQUESTVALIDATIONENABLED.get();};cO.getREQUESTVALIDATIONCLEANUPPROCESSSTATUS=function()
{return this.REF.REQUESTVALIDATIONCLEANUPPROCESSSTATUS.get();};cO.getALLOWEDATTEMPTS=function(){return this.REF.ALLOWEDATTEMPTS.get();};cO.setALLOWEDATTEMPTS=function(v){this.REF.ALLOWEDATTEMPTS.set(v);};cO.getSECURITYQUESTIONS=function(){return this.REF.QUESTIONSETTINGS;};cO.getIPMONITORINGENABLED=function(){return this.REF.IPMONITORINGENABLED.get();};cO.getIPMONITORINGATTEMPTLIMIT=function(){return this.REF.IPMONITORINGATTEMPTLIMIT.get();};cO.getIPMONITORINGCLEARPROCESSSTATUS=function(){return this.REF.IPMONITORINGCLEARPROCESSSTATUS.get();
};cO.getIPMONITORINGBANDURATION=function(){return this.REF.IPMONITORINGBANDURATION.get();};cO.getIPMONITORINGBANCHECKINTERVAL=function(){return this.REF.IPMONITORINGBANCHECKINTERVAL.get();};cO.getIPMONITORINGCHANGESPENDING=function(){return this.REF.IPMONITORINGCHANGESPENDING.get();};cO.getNUMBEROFIPSBANNED=function(){return this.REF.NUMBEROFIPSBANNED.get();};cO.getBANNEDADDRESSES=function(){return this.REF.BANNEDADDRESSES;};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"BPFFLD017"});
}},{rc:["BPFWGT001"],rp:["PRIM_OBJT","PRIM_BOLN","PRIM_ALPH","PRIM_NMBR","PRIM_FLD","PRIM_LCOL","PRIM_WEB.DataRequest"],dc:["BPFCLS009","BPFCLS016"]});