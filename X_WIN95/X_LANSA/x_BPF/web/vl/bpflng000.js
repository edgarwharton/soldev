﻿LANSA.addComponent({id:"BPFLNG000",nm:"BPFBaseLanguageResource",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Base Language Resource Object Type",tl:15000300},function(l,oI,u){var cL="ENG";var Fd={F1:{ic:0,nm:"BPFFLD081",an:"BPFGenericNVarChar256",ft:"NV",ln:256,dc:0,lb:"Generic 256 NVa",h1:"Generic",h2:"256",h3:"NVarchar",de:"Generic 256 NVarchar",dv:"",ia:["ASQN","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{Strings:{da:"r"},Text:{da:"na"}},mt:{SetStrings:{ps:{"Object":{pt:"i"},"BlockDirectAccess":
{pt:"i"}}},GetStringData:{ps:{"Object":{pt:"i"},"Isocode":{pt:"i"}}},BuildCollection:{ps:{"StringsArray":{pt:"i"}}},BuildDefaults:{}},co:function(){cO.aN.call(this);this.aF("BPFLNG000",Fd);var C0=this.cA("NAVIGATE","BPFAPP001");var C1=this.cA("BROWSER","BPFWGT001");var C2=this.cR("MYCONTEXT","PRIM_DC","UnicodeString");var C3=this.cR("STRINGSCOLLECTION","PRIM_KCOL");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setCollects("PRIM_DC.UnicodeString");C3.setKeyedBy(Fd.F1.Dc);
C3.iC();if(l.gW("BPFPORTAL")!=null){l.gW("BPFPORTAL").aH("NAVIGATETOEDITSTRINGS",this,e1);}}});cO.mthGETTEXT=function(p1){var m=this.REF,r=l.pR(this,cO,"GetText",17);var P0=r.cP("PROPERTY","PRIM_DC","UnicodeString");var P1=r.cP("KEY","PRIM_ALPH");P1.set(p1);r.ln=17;{r.ln=22;if(l.s.IsNull(m.STRINGSCOLLECTION.get(P1.get()).get())){r.ln=25;P0.set("No matching string found.");}else{r.ln=30;P0.set(m.STRINGSCOLLECTION.get(P1.get()).get());r.ln=33;if((l.gW("BPFPORTAL").getSESSION().getCURRENTUSER()!=null))
{r.ln=35;P0.set(l.s.ReplaceAll(P0.get(),"%%USER%%",l.gW("BPFPORTAL").getSESSION().getCURRENTUSER().getFIRSTNAME()));}r.ln=40;if(l.b.IsFalse(l.s.IsNull(l.gW("BPFPORTAL").getAPPNAME()))){r.ln=42;P0.set(l.s.ReplaceAll(P0.get(),"%%APP%%",l.gW("BPFPORTAL").getAPPNAME()));}}}r.ln=48;return r.rV(P0.get());};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#BPFPortal.NavigateToEditStrings",51);r.ln=51;{r.ln=54;if(l.s.IsNull(m.MYCONTEXT.get())){r.e();return;}r.ln=59;if(l.tB(l.and(l.s.Contains(l.s.UpperCase(this.getComponentClassName()),"VLR"),l.s.eq(m.MYCONTEXT.get(),m.NAVIGATE.ref.getCURRENTEVENT().getEVENTNAME()))))
{r.ln=61;m.NAVIGATE.ref.mthTO("LANGUAGERESOURCESTRINGSVIEW",u,u,this.getComponentClassName());}}r.ln=65;r.e();};cO.mthSETSTRINGS=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"SetStrings",72);var P0=r.cP("OBJECT","PRIM_ALPH");var P1=r.cP("BLOCKDIRECTACCESS","PRIM_BOLN");P0.set(p0);P1.set((p1===u)?(false):(p1));var C0=r.cR("ISOCODE","PRIM_DC","UnicodeString");C0.iC();r.ln=72;{r.ln=80;if(l.b.IsFalse(P1.get())){r.ln=81;m.MYCONTEXT.set(m.NAVIGATE.ref.getCURRENTEVENT().getEVENTNAME());}r.ln=86;this.mthBUILDDEFAULTS();
r.ln=89;C0.set(m.BROWSER.ref.getUSERLANGUAGE());r.ln=92;if(l.b.IsFalse(l.s.IsNull(C0.get()))){r.ln=95;this.mthGETSTRINGDATA(P0.get(),C0.get());}}r.ln=99;r.e();};cO.mthGETSTRINGDATA=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"GetStringData",101),mth=r;var P0=r.cP("OBJECT","PRIM_ALPH");var P1=r.cP("ISOCODE","PRIM_ALPH");var P2=r.cP("RESULT","PRIM_BOLN");P0.set(p0);P1.set(p1);P2.set(false);var C0=r.cR("REQUEST","PRIM_WEB","HttpRequest");var C1=r.cR("JSON","PRIM_WEB","Json");C0.iC();C1.iC();C0.aH("COMPLETED",this,e2);
r.ln=101;{r.ln=112;C0.setUrl(l.cat(l.cat(l.cat(l.cat(l.cat("content/strings/",P1.get()),"/"),l.s.LowerCase(P0.get())),".json?plv="),m.BROWSER.ref.getLANGUAGEVERSION()));r.ln=115;C0.mthEXECUTE();}r.ln=131;return r.rV(P2.get());function e2(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",118,mth);r.ln=118;{r.ln=120;if(l.n.eq(C0.getResponse().getStatusCode(),200)){r.ln=123;C1.set(C0.getResponse().getContent().get());r.ln=124;this.mthBUILDCOLLECTION(l.cast(C1.getRootItem().get("ls"),"PRIM_WEB.JsonArray"));
r.ln=125;P2.set(true);}}r.ln=129;r.e();}};cO.mthBUILDCOLLECTION=function(p0){var m=this.REF,r=l.mR(this,cO,"BuildCollection",134);var P0=r.cPD("STRINGSARRAY");P0=r.sR("STRINGSARRAY",p0);r.ln=134;{r.ln=138;{var l1=P0.cI();while(l1.step()){var OBJECTELEMENT=r.sR("OBJECTELEMENT",l1.item());r.ln=144;if(l.b.eq(l.s.IsNull(OBJECTELEMENT.get("s").mthASSTRING()),false)){r.ln=146;m.STRINGSCOLLECTION.get(OBJECTELEMENT.get("op").mthASSTRING()).set(OBJECTELEMENT.get("s").mthASSTRING());}r.ln=150;}l1.end();r.dR("OBJECTELEMENT");
}}r.ln=152;r.e();};cO.mthBUILDDEFAULTS=function(){var r=l.mR(this,cO,"BuildDefaults",155);r.ln=155;{}r.ln=156;r.e();};cO.getSTRINGS=function(){return this.REF.STRINGSCOLLECTION;};cO.getTEXT=function(KEY_1){return this.mthGETTEXT(KEY_1);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"BPFFLD081"});}},{rc:["BPFAPP001","BPFWGT001"],rp:["PRIM_OBJT","PRIM_DC.UnicodeString","PRIM_KCOL","PRIM_FLD"],dp:["PRIM_DC.UnicodeString","PRIM_WEB.HttpRequest","PRIM_WEB.Json"]});
