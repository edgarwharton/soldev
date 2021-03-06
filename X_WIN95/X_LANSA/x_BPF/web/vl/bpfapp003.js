﻿LANSA.addComponent({id:"BPFAPP003",nm:"BPFPortalLoggingDataClient",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Data Model Client for Portal Logging",tl:15000300},function(l,oI,u){var cL="ENG";var Fd={F1:{nm:"BPFFLD036",an:"BPFFileServiceFullName",ft:"A",ln:255,dc:0,lb:"Full name of fi",h1:"Full",h2:"name",h3:"of",de:"Full name of file",dv:"",ia:["FE","LC"]},F2:{nm:"BPFFLD037",an:"BPFFileServiceFilePrefix",ft:"A",ln:255,dc:0,lb:"Prefix of file",h1:"Prefix",h2:"of",h3:"file",de:"Prefix of file name",dv:"",
ia:["FE","LC"]},F3:{nm:"BPFFLD038",an:"BPFFileServiceFileSuffix",ft:"A",ln:4,dc:0,lb:"Suffix of file",h1:"Suffix",h2:"of",h3:"file",de:"Suffix of file name",dv:"",ia:["FE","LC"]},F4:{nm:"BPFFLD039",an:"BPFFileServiceFileDate",ft:"A",ln:8,dc:0,lb:"Date of file",h1:"Date",h2:"of",h3:"file",de:"Date of file",dv:"",ia:["FE","LC"]},F5:{nm:"BPFFLD040",an:"BPFFileServiceFileTime",ft:"A",ln:6,dc:0,lb:"Time of file",h1:"Time",h2:"of",h3:"file",de:"Time of file",dv:"",ia:["FE","LC"]},F6:{nm:"BPFFLD041",an:"BPFFileServiceFileSize",
ft:"P",ln:9,dc:0,lb:"Size of file",h1:"Size",h2:"of",h3:"file",de:"Size of file",dv:0,ia:["FE","RB"]},F7:{nm:"BPFFLD042",an:"BPFFileServiceFileDirectory",ft:"A",ln:1,dc:0,lb:"Directory Indic",h1:"Directory",h2:"Indicator",h3:"of",de:"Directory Indicator of File",dv:"",ia:["FE","LC"]},F8:{nm:"BPFFLD013",an:"BPFCodeGroup",ft:"NV",ln:128,dc:0,lb:"Codes Group Nam",h1:"Codes",h2:"Group",h3:"Name",de:"Codes Group Name",dv:"",ia:["FE","LC"]},F9:{nm:"BPFFLD014",an:"BPFCodeName",ft:"NV",ln:256,dc:0,lb:"Code Table Name",
h1:"Code",h2:"Table",h3:"Name",de:"Code Table Name",dv:"",ia:["FE","LC"]},F10:{nm:"BPFFLD015",an:"BPFCodeSequence",ft:"P",ln:7,dc:0,lb:"Code Sequence",h1:"Code",h2:"Sequence",h3:"",de:"Code Sequence",dv:0,ia:["FE","RB"]},F11:{nm:"BPFFLD016",an:"BPFCodeAlphaValue",ft:"NV",ln:2048,dc:0,lb:"Codes Alpha Val",h1:"Codes",h2:"Alpha",h3:"Value",de:"Codes Alpha Value",dv:"",ia:["ASQN","LC"]},F12:{nm:"BPFFLD017",an:"BPFCodeNumericValue",ft:"S",ln:15,dc:0,lb:"Codes Numeric V",h1:"Codes",h2:"Numeric",h3:"Value",
de:"Codes Numeric Value",dv:0,ia:["FE","RB"]},F13:{nm:"STATUS",an:"Status",ft:"A",ln:256,dc:0,lb:"Generic Status",h1:"Generic",h2:"Status",h3:"Field",de:"Generic Status Field",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{FolderListing:{da:"r"},FolderItem:{da:"na"},RuntimeLog:{da:"r"},PortalSettings:{da:"na"},Delimiter:{da:"r"}},mt:{LoadPortalLogs:{},GetPortalLoggingControlSettings:{},RemovePortalLogs:{},ClearRuntimeLog:{},LoadLIFolder:{ps:{"Path":{pt:"i"}}},GetIntegrationLoggingControlSetting:
{},SetIntegrationLoggingControlSetting:{ps:{"Value":{pt:"i"}}},RemoveLILogs:{}},ev:{OnLoadPortalLogsCompleted:{},OnLoadPortalLogsFailed:{},OnGetPortalLoggingControlSettingsCompleted:{},OnGetPortalLoggingControlSettingsFailed:{},OnSetPortalLoggingControlSettingCompleted:{},OnSetPortalLoggingControlSettingFailed:{},OnPortalLogsRemoveCompleted:{},OnPortalLogsRemoveFailed:{},OnRuntimeLogClearCompleted:{},OnRuntimeLogClearFailed:{},OnLoadFolderCompleted:{ps:{"Delimiter":{pt:"i"}}},OnLoadFolderFailed:{
},GetIntegrationLoggingControlSettingCompleted:{ps:{"Value":{pt:"i"}}},GetIntegrationLoggingControlSettingFailed:{},OnSetIntegrationLoggingControlSettingCompleted:{},OnSetIntegrationLoggingControlSettingFailed:{},OnIntegrationLogsRemoveCompleted:{},OnIntegrationLogsRemoveFailed:{}},co:function(){cO.aN.call(this);var f=this.aF("BPFAPP003",Fd);var C0=this.cR("FOLDERLISTING","PRIM_LCOL");var C1=this.cR("RUNTIMELOG","BPFCLS006");var C2=this.cR("PORTALLOGSETTINGS","PRIM_LCOL");var C3=this.cR("PATHDELIMITER","PRIM_ALPH");
C0.setCollects("BPFCLS006");C0.iC();C1.iC();C2.setCollects("BPFCLS008");C2.iC();C3.iC();C0.aLF({"BPFFLD036":f.F1,"BPFFLD037":f.F2,"BPFFLD038":f.F3,"BPFFLD039":f.F4,"BPFFLD040":f.F5,"BPFFLD041":f.F6,"BPFFLD042":f.F7});C2.aLF({"BPFFLD013":f.F8,"BPFFLD014":f.F9,"BPFFLD015":f.F10,"BPFFLD016":f.F11,"BPFFLD017":f.F12});}});cO.mthGETFOLDERITEM=function(p1){var m=this.REF,r=l.pR(this,cO,"GetFolderItem",57);var P0=r.cPD("PROPERTY");var P1=r.cP("KEY","PRIM_ALPH");P1.set((p1===u)?(null):(p1));r.ln=57;{r.ln=61;
if(l.s.IsNull(P1.get())){r.ln=63;P0=r.sR("P0",m.RUNTIMELOG);}else{r.ln=67;{var l1=m.FOLDERLISTING.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=69;if(l.s.ne(l.s.LowerCase(P1.get()),l.s.LowerCase(ITEM.getFULLNAME()))){continue;}r.ln=71;P0=r.sR("P0",ITEM);r.ln=73;break;r.ln=75;}l1.end();r.dR("ITEM");}}}r.ln=79;return r.rR(P0);};cO.mthGETLOGSETTINGS=function(p1){var m=this.REF,r=l.pR(this,cO,"GetLogSettings",81);var P0=r.cPD("PROPERTY");var P1=r.cP("KEY","PRIM_ALPH");P1.set(p1);r.ln=81;
{r.ln=85;P0=r.sR("P0",l.cC("PRIM_LCOL").tB([ti1]));r.ln=87;{var l1=m.PORTALLOGSETTINGS.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=89;if(l.tB(l.s.ne(ITEM.getCODEGROUP(),P1.get()))){continue;}r.ln=90;P0.mthINSERT(ITEM);r.ln=92;}l1.end();r.dR("ITEM");}}r.ln=94;return r.rR(P0);};cO.mthLOADPORTALLOGS=function(){var f=this.FLD.BPFAPP003,m=this.REF,r=l.mR(this,cO,"LoadPortalLogs",99),mth=r;var C0=r.cDR("REQUEST","BPFSVR003","GETPORTALLOGS");C0.iC();C0.aH("COMPLETED",this,e1);C0.aH("FAILED",this,e2);
r.ln=99;{r.ln=105;C0.mthEXECUTEASYNC({},{FLD:{"BPFFLD007":f.F13},LIST:{"DIRECTORYCONTENTS":m.FOLDERLISTING}});}r.ln=128;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",107,mth);r.ln=107;{r.ln=109;if(l.s.eq(f.F13.get(),"OK")){r.ln=111;this.fE("ONLOADPORTALLOGSCOMPLETED");}else{r.ln=115;this.fE("ONLOADPORTALLOGSFAILED");}}r.ln=119;r.e();}function e2(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",121,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=121;{r.ln=123;P0.set(true);
r.ln=124;this.fE("ONLOADPORTALLOGSFAILED");}r.ln=126;r.e();}};cO.mthGETPORTALLOGGINGCONTROLSETTINGS=function(){var f=this.FLD.BPFAPP003,m=this.REF,r=l.mR(this,cO,"GetPortalLoggingControlSettings",130),mth=r;var C0=r.cDR("REQUEST","BPFSVR003","GETPORTALLOGSETTINGS");C0.iC();C0.aH("COMPLETED",this,e3);C0.aH("FAILED",this,e4);r.ln=130;{r.ln=136;C0.mthEXECUTEASYNC({},{FLD:{"BPFFLD007":f.F13},LIST:{"CODESGROUP":m.PORTALLOGSETTINGS}});}r.ln=159;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",138,mth);
r.ln=138;{r.ln=140;if(l.s.eq(f.F13.get(),"OK")){r.ln=142;this.fE("ONGETPORTALLOGGINGCONTROLSETTINGSCOMPLETED");}else{r.ln=146;this.fE("ONGETPORTALLOGGINGCONTROLSETTINGSFAILED");}}r.ln=150;r.e();}function e4(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",152,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=152;{r.ln=154;P0.set(true);r.ln=155;this.fE("ONGETPORTALLOGGINGCONTROLSETTINGSFAILED");}r.ln=157;r.e();}};cO.mthREMOVEPORTALLOGS=function(){var f=this.FLD.BPFAPP003,r=l.mR(this,cO,"RemovePortalLogs",161),mth=r;
var C0=r.cDR("REQUEST","BPFSVR003","CLEARPORTALLOGS");C0.iC();C0.aH("COMPLETED",this,e5);C0.aH("FAILED",this,e6);r.ln=161;{r.ln=167;C0.mthEXECUTEASYNC({},{FLD:{"BPFFLD007":f.F13}});}r.ln=190;r.e();function e5(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",169,mth);r.ln=169;{r.ln=171;if(l.s.eq(f.F13.get(),"OK")){r.ln=173;this.fE("ONPORTALLOGSREMOVECOMPLETED");}else{r.ln=177;this.fE("ONPORTALLOGSREMOVEFAILED");}}r.ln=181;r.e();}function e6(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",183,mth);
var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=183;{r.ln=185;P0.set(true);r.ln=186;this.fE("ONPORTALLOGSREMOVEFAILED");}r.ln=188;r.e();}};cO.mthCLEARRUNTIMELOG=function(){var f=this.FLD.BPFAPP003,r=l.mR(this,cO,"ClearRuntimeLog",193),mth=r;var C0=r.cDR("REQUEST","BPFSVR003","CLEARRUNTIMELOG");C0.iC();C0.aH("COMPLETED",this,e7);C0.aH("FAILED",this,e8);r.ln=193;{r.ln=199;C0.mthEXECUTEASYNC({},{FLD:{"BPFFLD007":f.F13}});}r.ln=222;r.e();function e7(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",201,mth);
r.ln=201;{r.ln=203;if(l.s.eq(f.F13.get(),"OK")){r.ln=205;this.fE("ONRUNTIMELOGCLEARCOMPLETED");}else{r.ln=209;this.fE("ONRUNTIMELOGCLEARFAILED");}}r.ln=213;r.e();}function e8(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",215,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=215;{r.ln=217;P0.set(true);r.ln=218;this.fE("ONRUNTIMELOGCLEARFAILED");}r.ln=220;r.e();}};cO.mthLOADLIFOLDER=function(p0){var f=this.FLD.BPFAPP003,m=this.REF,r=l.mR(this,cO,"LoadLIFolder",225),mth=r;var P0=r.cP("PATH","PRIM_ALPH");
P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR003","GETDIRECTORYCONTENTS");C0.iC();C0.aH("COMPLETED",this,e9);C0.aH("FAILED",this,e10);r.ln=225;{r.ln=232;C0.mthEXECUTEASYNC({FLD:{"REQUESTEDPATH":P0.get()}},{FLD:{"ALPHAVALUE":m.PATHDELIMITER,"BPFFLD007":f.F13},LIST:{"DIRECTORYCONTENTS":m.FOLDERLISTING}});}r.ln=255;r.e();function e9(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",234,mth);r.ln=234;{r.ln=236;if(l.s.eq(f.F13.get(),"OK")){r.ln=238;{var eP=l.ePs();eP.cR("DELIMITER","PRIM_ALPH");eP.r("DELIMITER").set(m.PATHDELIMITER.get());
this.fE("ONLOADFOLDERCOMPLETED",eP);eP.e();}}else{r.ln=242;this.fE("ONLOADFOLDERFAILED");}}r.ln=246;r.e();}function e10(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",248,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=248;{r.ln=250;P1.set(true);r.ln=251;this.fE("ONLOADFOLDERFAILED");}r.ln=253;r.e();}};cO.mthGETINTEGRATIONLOGGINGCONTROLSETTING=function(){var f=this.FLD.BPFAPP003,r=l.mR(this,cO,"GetIntegrationLoggingControlSetting",257),mth=r;var C0=r.cDR("REQUEST","BPFSVR003","GETISLILOGGING");
var C1=r.cR("VALUE","PRIM_ALPH");C0.iC();C1.iC();C0.aH("COMPLETED",this,e11);C0.aH("FAILED",this,e12);r.ln=257;{r.ln=266;C0.mthEXECUTEASYNC({},{FLD:{"ALPHAVALUE":C1,"BPFFLD007":f.F13}});}r.ln=289;r.e();function e11(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",268,mth);r.ln=268;{r.ln=270;if(l.s.eq(f.F13.get(),"OK")){r.ln=272;{var eP=l.ePs();eP.cR("VALUE","PRIM_ALPH");eP.r("VALUE").set(C1.get());this.fE("GETINTEGRATIONLOGGINGCONTROLSETTINGCOMPLETED",eP);eP.e();}}else{r.ln=276;this.fE("GETINTEGRATIONLOGGINGCONTROLSETTINGFAILED");
}}r.ln=280;r.e();}function e12(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",282,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=282;{r.ln=284;P0.set(true);r.ln=285;this.fE("GETINTEGRATIONLOGGINGCONTROLSETTINGFAILED");}r.ln=287;r.e();}};cO.mthSETINTEGRATIONLOGGINGCONTROLSETTING=function(p0){var f=this.FLD.BPFAPP003,r=l.mR(this,cO,"SetIntegrationLoggingControlSetting",291),mth=r;var P0=r.cP("VALUE","PRIM_ALPH");P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR003","SETISLILOGGING");C0.iC();C0.aH("COMPLETED",this,e13);
C0.aH("FAILED",this,e14);r.ln=291;{r.ln=298;C0.mthEXECUTEASYNC({FLD:{"ALPHAVALUE":P0.get()}},{FLD:{"BPFFLD007":f.F13}});}r.ln=321;r.e();function e13(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",300,mth);r.ln=300;{r.ln=302;if(l.s.eq(f.F13.get(),"OK")){r.ln=304;this.fE("ONSETINTEGRATIONLOGGINGCONTROLSETTINGCOMPLETED");}else{r.ln=308;this.fE("ONSETINTEGRATIONLOGGINGCONTROLSETTINGFAILED");}}r.ln=312;r.e();}function e14(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",314,mth);var P1=Ps.r("HANDLED");
var P2=Ps.r("REASON");r.ln=314;{r.ln=316;P1.set(true);r.ln=317;this.fE("ONSETINTEGRATIONLOGGINGCONTROLSETTINGFAILED");}r.ln=319;r.e();}};cO.mthREMOVELILOGS=function(){var f=this.FLD.BPFAPP003,r=l.mR(this,cO,"RemoveLILogs",323),mth=r;var C0=r.cDR("REQUEST","BPFSVR003","CLEARLILOGS");C0.iC();C0.aH("COMPLETED",this,e15);C0.aH("FAILED",this,e16);r.ln=323;{r.ln=329;C0.mthEXECUTEASYNC({},{FLD:{"BPFFLD007":f.F13}});}r.ln=352;r.e();function e15(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",331,mth);
r.ln=331;{r.ln=333;if(l.s.eq(f.F13.get(),"OK")){r.ln=335;this.fE("ONINTEGRATIONLOGSREMOVECOMPLETED");}else{r.ln=339;this.fE("ONINTEGRATIONLOGSREMOVEFAILED");}}r.ln=343;r.e();}function e16(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",345,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=345;{r.ln=347;P0.set(true);r.ln=348;this.fE("ONINTEGRATIONLOGSREMOVEFAILED");}r.ln=350;r.e();}};cO.getFOLDERLISTING=function(){return this.REF.FOLDERLISTING;};cO.getFOLDERITEM=function(KEY_1){return this.mthGETFOLDERITEM(KEY_1);
};cO.getRUNTIMELOG=function(){return this.REF.RUNTIMELOG;};cO.getPORTALSETTINGS=function(KEY_1){return this.mthGETLOGSETTINGS(KEY_1);};cO.getDELIMITER=function(){return this.REF.PATHDELIMITER.get();};var ti1={p:"BPFCLS008"};},{rc:["BPFCLS006"],rp:["PRIM_OBJT","PRIM_LCOL","PRIM_ALPH","PRIM_WEB.DataRequest","PRIM_FLD"],dc:["BPFCLS006","BPFCLS008"],dp:["PRIM_ALPH"]});