﻿LANSA.addComponent({id:"BPFCLS017",nm:"BPFLanguageResourceItemClass",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Language Resource Item Class",tl:15000300},function(l,oI,u){var cL="ENG";var Fd={F1:{nm:"BPFFLD013",an:"BPFCodeGroup",ft:"NV",ln:128,dc:0,lb:"Codes Group Nam",h1:"Codes",h2:"Group",h3:"Name",de:"Codes Group Name",dv:"",ia:["FE","LC"]},F2:{nm:"BPFFLD014",an:"BPFCodeName",ft:"NV",ln:256,dc:0,lb:"Code Table Name",h1:"Code",h2:"Table",h3:"Name",de:"Code Table Name",dv:"",ia:["FE","LC"]},F3:{nm:"BPFFLD016",
an:"BPFCodeAlphaValue",ft:"NV",ln:2048,dc:0,lb:"Codes Alpha Val",h1:"Codes",h2:"Alpha",h3:"Value",de:"Codes Alpha Value",dv:"",ia:["ASQN","LC"]},F4:{nm:"BPFFLD041",an:"BPFFileServiceFileSize",ft:"P",ln:9,dc:0,lb:"Size of file",h1:"Size",h2:"of",h3:"file",de:"Size of file",dv:0,ia:["FE","RB"]},F5:{nm:"BPFFLD081",an:"BPFGenericNVarChar256",ft:"NV",ln:256,dc:0,lb:"Generic 256 NVa",h1:"Generic",h2:"256",h3:"NVarchar",de:"Generic 256 NVarchar",dv:"",ia:["ASQN","LC"]},F6:{nm:"BPFFLD087",an:"BPFGenericUnicodeString01",
ft:"NV",ln:8192,dc:0,lb:"Generic Unicode",h1:"Generic",h2:"Unicode",h3:"String",de:"Generic Unicode String",dv:"",ia:["ASQN","LC"]},F7:{nm:"BPFFLD088",an:"BPFGenericUnicodeString02",ft:"NV",ln:8192,dc:0,lb:"Generic Unicode",h1:"Generic",h2:"Unicode",h3:"String",de:"Generic Unicode String",dv:"",ia:["ASQN","LC"]},F8:{nm:"STATUS",an:"Status",ft:"A",ln:256,dc:0,lb:"Generic Status",h1:"Generic",h2:"Status",h3:"Field",de:"Generic Status Field",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,
pt:{Identifier:{da:"r"},ObjectName:{da:"r"},Description:{da:"r"},Type:{da:"na"},IconName:{da:"na"},TypeColour:{da:"na"},Strings:{da:"r"}},mt:{LoadStrings:{ps:{"ForIsoCode":{pt:"i"}}},SaveStrings:{ps:{"ForIsoCode":{pt:"i"}}}},ev:{OnLoadStringsCompleted:{},OnLoadStringsFailed:{},OnSaveStringsCompleted:{},OnSaveStringsFailed:{}},co:function(){cO.aN.call(this);var f=this.aF("BPFCLS017",Fd);var C0=this.cA("BROWSER","BPFWGT001");var C1=this.cR("STRINGS","PRIM_LCOL");if((C0!=null)&&(C0.iI()==false)){C0.iC();
}C1.setCollects("BPFCLS019");C1.iC();C1.aLF({"BPFFLD081":f.F5,"BPFFLD087":f.F6,"BPFFLD088":f.F7});this.aLF({"BPFFLD013":f.F1,"BPFFLD014":f.F2,"BPFFLD016":f.F3,"BPFFLD041":f.F4});}});cO.mthGETTYPE=function(){var f=this.FLD.BPFCLS017,r=l.pR(this,cO,"GetType",35);var P0=r.cP("PROPERTY","PRIM_DC","UnicodeString");r.ln=35;{r.ln=38;if(l.s.Contains(f.F1.get(),"VLR")){r.ln=40;P0.set("VIEW");}r.ln=44;if(l.s.Contains(f.F1.get(),"DLR")){r.ln=46;P0.set("DIALOG");}r.ln=50;if(l.s.Contains(f.F1.get(),"PLR")){r.ln=52;
P0.set("PANEL");}r.ln=56;if(l.s.Contains(f.F1.get(),"CLR")){r.ln=58;P0.set("CODES");}r.ln=62;if(l.s.Contains(f.F1.get(),"SLR")){r.ln=64;P0.set("EVENTS");}r.ln=68;if(l.s.Contains(f.F1.get(),"ALR")){r.ln=70;P0.set("APPLICATION");}}r.ln=74;return r.rV(P0.get());};cO.mthGETICONNAME=function(){var f=this.FLD.BPFCLS017,r=l.pR(this,cO,"GetIconName",76);var P0=r.cP("PROPERTY","PRIM_DC","UnicodeString");r.ln=76;{r.ln=79;if(l.s.Contains(f.F1.get(),"VLR")){r.ln=81;P0.set("panorama");}r.ln=85;if(l.s.Contains(f.F1.get(),"DLR"))
{r.ln=87;P0.set("tab");}r.ln=91;if(l.s.Contains(f.F1.get(),"PLR")){r.ln=93;P0.set("view_module");}r.ln=97;if(l.s.Contains(f.F1.get(),"CLR")){r.ln=99;P0.set("code");}r.ln=103;if(l.s.Contains(f.F1.get(),"SLR")){r.ln=105;P0.set("restore");}r.ln=110;if(l.s.Contains(f.F1.get(),"ALR")){r.ln=112;P0.set(l.gW("BPFPORTAL").getAPPICON());}}r.ln=116;return r.rV(P0.get());};cO.mthGETTYPECOLOUR=function(){var f=this.FLD.BPFCLS017,r=l.pR(this,cO,"GetTypeColour",118);var P0=r.cP("PROPERTY","PRIM_DC","UnicodeString");
r.ln=118;{r.ln=121;if(l.s.Contains(f.F1.get(),"VLR")){r.ln=123;P0.set("ForegroundTheme500");}r.ln=127;if(l.s.Contains(f.F1.get(),"DLR")){r.ln=129;P0.set("ForegroundMediumAccent");}r.ln=133;if(l.s.Contains(f.F1.get(),"PLR")){r.ln=135;P0.set("ForegroundMediumSuccess");}r.ln=139;if(l.s.Contains(f.F1.get(),"CLR")){r.ln=141;P0.set("ForegroundDarkError");}r.ln=145;if(l.s.Contains(f.F1.get(),"SLR")){r.ln=147;P0.set("Text(123,31,162,1)");}r.ln=152;if(l.s.Contains(f.F1.get(),"ALR")){r.ln=154;P0.set("ForegroundTheme900");
}}r.ln=158;return r.rV(P0.get());};cO.mthLOADSTRINGS=function(p0){var f=this.FLD.BPFCLS017,m=this.REF,r=l.mR(this,cO,"LoadStrings",163),mth=r;var P0=r.cP("FORISOCODE","PRIM_DC","UnicodeString");P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR010","GETRESOURCESTRINGS");var C1=r.cR("INDEX","PRIM_NMBR");C0.iC();C1.iC();C0.aH("COMPLETED",this,e1);C0.aH("FAILED",this,e2);r.ln=163;{r.ln=171;C0.mthEXECUTEASYNC({FLD:{"ALPHAVALUE":P0.get(),"FILEPREFIX":f.F1.get(),"BPFFLD041":f.F4.get()}},{FLD:{"BPFFLD007":f.F8},LIST:{"RESOURCESTRINGS":m.STRINGS}});
}r.ln=194;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",173,mth);r.ln=173;{r.ln=175;if(l.s.eq(f.F8.get(),"OK")){r.ln=177;this.fE("ONLOADSTRINGSCOMPLETED");}else{r.ln=181;this.fE("ONLOADSTRINGSFAILED");}}r.ln=185;r.e();}function e2(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",187,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=187;{r.ln=189;P1.set(true);r.ln=190;this.fE("ONLOADSTRINGSFAILED");}r.ln=192;r.e();}};cO.mthSAVESTRINGS=function(p0){var f=this.FLD.BPFCLS017,m=this.REF,r=l.mR(this,cO,"SaveStrings",196),mth=r;
var P0=r.cP("FORISOCODE","PRIM_DC","UnicodeString");P0.set(p0);var C0=r.cDR("REQUEST","BPFSVR010","SAVERESOURCESTRINGS");C0.iC();C0.aH("COMPLETED",this,e3);C0.aH("FAILED",this,e4);r.ln=196;{r.ln=203;C0.mthEXECUTEASYNC({FLD:{"ALPHAVALUE":P0.get(),"FILEPREFIX":f.F1.get()},LIST:{"RESOURCESTRINGS":m.STRINGS}},{FLD:{"ALPHAVALUE":{set:function(v){m.BROWSER.ref.setLANGUAGEVERSION(v)}},"BPFFLD007":f.F8}});}r.ln=227;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",205,mth);r.ln=205;{r.ln=207;
if(l.s.eq(f.F8.get(),"OK")){r.ln=209;this.fE("ONSAVESTRINGSCOMPLETED");}else{r.ln=213;this.fE("ONSAVESTRINGSFAILED");}}r.ln=217;r.e();}function e4(sender,Ps){var r=l.eR(this,cO,"#Request.Failed",219,mth);var P1=Ps.r("HANDLED");var P2=Ps.r("REASON");r.ln=219;{r.ln=221;P1.set(true);r.ln=222;this.fE("ONSAVESTRINGSFAILED");}r.ln=224;r.e();}};cO.getIDENTIFIER=function(){var f=this.FLD.BPFCLS017;return f.F1.get();};cO.getOBJECTNAME=function(){var f=this.FLD.BPFCLS017;return f.F2.get();};cO.getDESCRIPTION=function()
{var f=this.FLD.BPFCLS017;return f.F3.get();};cO.getTYPE=function(){return this.mthGETTYPE();};cO.getICONNAME=function(){return this.mthGETICONNAME();};cO.getTYPECOLOUR=function(){return this.mthGETTYPECOLOUR();};cO.getSTRINGS=function(){return this.REF.STRINGS;};},{rc:["BPFWGT001"],rp:["PRIM_OBJT","PRIM_LCOL","PRIM_WEB.DataRequest","PRIM_FLD"],dc:["BPFCLS019"],dp:["PRIM_NMBR"]});