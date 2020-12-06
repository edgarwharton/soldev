﻿LANSA.addComponent({id:"BPFCLS018",nm:"BPFLanguageOptionItemClass",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Language Option Item Class",tl:15000300},function(l,oI,u){var cL="ENG";var Fd={F1:{nm:"BPFFLD014",an:"BPFCodeName",ft:"NV",ln:256,dc:0,lb:"Code Table Name",h1:"Code",h2:"Table",h3:"Name",de:"Code Table Name",dv:"",ia:["FE","LC"]},F2:{nm:"BPFFLD017",an:"BPFCodeNumericValue",ft:"S",ln:15,dc:0,lb:"Codes Numeric V",h1:"Codes",h2:"Numeric",h3:"Value",de:"Codes Numeric Value",dv:0,ia:["FE","RB"]},F3:
{nm:"BPFFLD016",an:"BPFCodeAlphaValue",ft:"NV",ln:2048,dc:0,lb:"Codes Alpha Val",h1:"Codes",h2:"Alpha",h3:"Value",de:"Codes Alpha Value",dv:"",ia:["ASQN","LC"]},F4:{nm:"BPFFLD080",an:"BPFGenericBoolean",ft:"B",ln:1,dc:0,lb:"Generic Boolean",h1:"Generic",h2:"Boolean",h3:"",de:"Generic Boolean",dv:false,ia:["ASQN"]},F5:{nm:"BPFFLD044",an:"BPFGenericBlob",ft:"BL",ln:0,dc:0,lb:"Portals Generic",h1:"Portals",h2:"Generic",h3:"Blob",de:"Portals Generic Blob",dv:l.SqlNull,ia:["ASQN","LC"]},F6:{nm:"STATUS",
an:"Status",ft:"A",ln:256,dc:0,lb:"Generic Status",h1:"Generic",h2:"Status",h3:"Field",de:"Generic Status Field",dv:"",ia:["FE","LC"]},F7:{nm:"BPFFLD045",an:"BPFGenericCLOB",ft:"CL",ln:0,dc:0,lb:"Portal Generic",h1:"Portal",h2:"Generic",h3:"CLOB",de:"Portal Generic CLOB",dv:l.SqlNull,ia:["ASQN","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{IsoCode:{da:"rw"},IsDefault:{da:"na"},Description:{da:"rw"},InUse:{da:"r"},ImportFile:{da:"na"}},mt:{CreateOnServer:{ps:{"FromIsoCode":{pt:"i"}}},RemoveFromServer:
{},UpdateOnServer:{ps:{"SetAsDefault":{pt:"i"}}},DownloadLocaleFile:{},UploadLocaleFile:{}},ev:{OnCreateOnServerCompleted:{},OnCreateOnServerFailed:{},OnRemoveFromServerCompleted:{},OnRemoveFromServerFailed:{},OnUpdateOnServerCompleted:{},OnUpdateOnServerFailed:{},OnDownloadLocaleSettingsCompleted:{},OnDownloadLocaleSettingsFailed:{},OnUploadLocaleSettingsCompleted:{},OnUploadLocaleSettingsFailed:{}},co:function(){cO.aN.call(this);var f=this.aF("BPFCLS018",Fd);var C0=this.cA("BROWSER","BPFWGT001");
if((C0!=null)&&(C0.iI()==false)){C0.iC();}this.aLF({"BPFFLD014":f.F1,"BPFFLD017":f.F2,"BPFFLD016":f.F3,"BPFFLD080":f.F4});}});cO.mthGETISDEFAULT=function(){var f=this.FLD.BPFCLS018,r=l.pR(this,cO,"GetIsDefault",40);var P0=r.cP("PROPERTY","PRIM_BOLN");r.ln=40;{r.ln=43;P0.set(l.n.eq(f.F2.get(),1));}r.ln=45;return r.rV(P0.get());};cO.mthCREATEONSERVER=function(p0){var f=this.FLD.BPFCLS018,r=l.mR(this,cO,"CreateOnServer",48),mth=r;var P0=r.cP("FROMISOCODE","PRIM_DC","UnicodeString");P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR010","CREATELANGUAGE");
C0.iC();C0.aH("COMPLETED",this,e1);C0.aH("FAILED",this,e2);r.ln=48;{r.ln=55;C0.mthEXECUTEASYNC({FLD:{"ALPHAVALUE":P0.get(),"BPFFLD014":f.F1.get(),"BPFFLD016":f.F3.get()}},{FLD:{"BPFFLD007":f.F6}});}r.ln=78;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",57,mth);r.ln=57;{r.ln=59;if(l.s.eq(f.F6.get(),"OK")){r.ln=61;this.fE("ONCREATEONSERVERCOMPLETED");}else{r.ln=65;this.fE("ONCREATEONSERVERFAILED");}}r.ln=69;r.e();}function e2(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",71,mth);
var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=71;{r.ln=73;P1.set(true);r.ln=74;this.fE("ONCREATEONSERVERFAILED");}r.ln=76;r.e();}};cO.mthREMOVEFROMSERVER=function(){var f=this.FLD.BPFCLS018,r=l.mR(this,cO,"RemoveFromServer",80),mth=r;var C0=r.cDR("REQUEST","BPFSVR010","DELETELANGUAGE");C0.iC();C0.aH("COMPLETED",this,e3);C0.aH("FAILED",this,e4);r.ln=80;{r.ln=86;C0.mthEXECUTEASYNC({FLD:{"ALPHAVALUE":f.F1.get()}},{FLD:{"BPFFLD007":f.F6}});}r.ln=109;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",88,mth);
r.ln=88;{r.ln=90;if(l.s.eq(f.F6.get(),"OK")){r.ln=92;this.fE("ONREMOVEFROMSERVERCOMPLETED");}else{r.ln=96;this.fE("ONREMOVEFROMSERVERFAILED");}}r.ln=100;r.e();}function e4(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",102,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=102;{r.ln=104;P0.set(true);r.ln=105;this.fE("ONREMOVEFROMSERVERFAILED");}r.ln=107;r.e();}};cO.mthUPDATEONSERVER=function(p0){var f=this.FLD.BPFCLS018,r=l.mR(this,cO,"UpdateOnServer",111),mth=r;var P0=r.cP("SETASDEFAULT","PRIM_BOLN");
P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR010","UPDATELANGUAGE");C0.iC();C0.aH("COMPLETED",this,e5);C0.aH("FAILED",this,e6);r.ln=111;{r.ln=118;C0.mthEXECUTEASYNC({FLD:{"BPFFLD014":f.F1.get(),"BPFFLD016":f.F3.get(),"BPFFLD080":P0.get()}},{FLD:{"BPFFLD007":f.F6}});}r.ln=141;r.e();function e5(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",120,mth);r.ln=120;{r.ln=122;if(l.s.eq(f.F6.get(),"OK")){r.ln=124;this.fE("ONUPDATEONSERVERCOMPLETED");}else{r.ln=128;this.fE("ONUPDATEONSERVERFAILED");}}r.ln=132;
r.e();}function e6(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",134,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=134;{r.ln=136;P1.set(true);r.ln=137;this.fE("ONUPDATEONSERVERFAILED");}r.ln=139;r.e();}};cO.mthDOWNLOADLOCALEFILE=function(){var f=this.FLD.BPFCLS018,m=this.REF,r=l.mR(this,cO,"DownloadLocaleFile",143),mth=r;var C0=r.cDR("REQUEST","BPFSVR010","DOWNLOADLOCALEFILE");C0.iC();C0.aH("COMPLETED",this,e7);C0.aH("FAILED",this,e8);r.ln=143;{r.ln=149;C0.mthEXECUTEASYNC({FLD:{"ALPHAVALUE":f.F1.get()}},{FLD:{"BPFFLD045":f.F7,"BPFFLD007":f.F6}});
}r.ln=175;r.e();function e7(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",151,mth);r.ln=151;{r.ln=153;if(l.s.eq(f.F6.get(),"OK")){r.ln=155;this.fE("ONDOWNLOADLOCALESETTINGSCOMPLETED");r.ln=158;m.BROWSER.ref.mthDOWNLOAD(f.F7.get(),l.cat(l.cat("locale-",f.F1.get()),".json"));}else{r.ln=162;this.fE("ONDOWNLOADLOCALESETTINGSFAILED");}}r.ln=166;r.e();}function e8(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",168,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=168;{r.ln=170;P0.set(true);r.ln=171;
this.fE("ONDOWNLOADLOCALESETTINGSFAILED");}r.ln=173;r.e();}};cO.mthUPLOADLOCALEFILE=function(){var f=this.FLD.BPFCLS018,r=l.mR(this,cO,"UploadLocaleFile",177),mth=r;var C0=r.cDR("REQUEST","BPFSVR010","UPLOADLOCALEFILE");C0.iC();C0.aH("COMPLETED",this,e9);C0.aH("FAILED",this,e10);r.ln=177;{r.ln=183;C0.mthEXECUTEASYNC({FLD:{"ALPHAVALUE":f.F1.get(),"BPFFLD044":f.F5.get()},sm:"M"},{FLD:{"BPFFLD007":f.F6}});}r.ln=206;r.e();function e9(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",185,mth);r.ln=185;
{r.ln=187;if(l.s.eq(f.F6.get(),"OK")){r.ln=189;this.fE("ONUPLOADLOCALESETTINGSCOMPLETED");}else{r.ln=193;this.fE("ONUPLOADLOCALESETTINGSFAILED");}}r.ln=197;r.e();}function e10(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",199,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=199;{r.ln=201;P0.set(true);r.ln=202;this.fE("ONUPLOADLOCALESETTINGSFAILED");}r.ln=204;r.e();}};cO.getISOCODE=function(){var f=this.FLD.BPFCLS018;return f.F1.get();};cO.setISOCODE=function(v){var f=this.FLD.BPFCLS018;f.F1.set(v);
};cO.getISDEFAULT=function(){return this.mthGETISDEFAULT();};cO.getDESCRIPTION=function(){var f=this.FLD.BPFCLS018;return f.F3.get();};cO.setDESCRIPTION=function(v){var f=this.FLD.BPFCLS018;f.F3.set(v);};cO.getINUSE=function(){var f=this.FLD.BPFCLS018;return f.F4.get();};cO.setIMPORTFILE=function(v){var f=this.FLD.BPFCLS018;f.F5.set(v);};{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"BPFFLD080"});Fd.F4.pl=function(){this.aN.call(this);var C0=this.cR("FALSE","PRIM_PKIT");
var C1=this.cR("TRUE","PRIM_PKIT");C0.setCaption("False");C0.setDefault(true);C0.setParent(this);C0.setValue("False");C0.iC();C1.setCaption("True");C1.setParent(this);C1.setValue("True");C1.iC();};l.cFC({co:Fd.F4.pl,an:"PRIM_PKLT",fn:"BPFFLD080",cn:"Picklist"});}},{rc:["BPFWGT001"],rp:["PRIM_OBJT","PRIM_WEB.DataRequest","PRIM_FLD","PRIM_PKLT"]});