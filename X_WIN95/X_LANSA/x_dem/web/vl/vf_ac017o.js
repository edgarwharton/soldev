﻿LANSA.addComponent({id:"VF_AC017O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=VLF-ONE Ancestor for 5250 Prompters",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]},F2:{nm:"VF_ELURLX",ft:"VC",ln:2048,dc:0,lb:{"ENG":"URL","FRA":"Extended URL","JPN":"Extended URL"}[cL],h1:{"ENG":"URL","FRA":"Extended","JPN":"Extended"}[cL],h2:{"ENG":"","FRA":"URL","JPN":"URL"}[cL],h3:"",de:{"ENG":"URL","FRA":"Extended URL","JPN":"Extended URL"}[cL],dv:"",ia:["FE","LC"]},F3:{ic:0,nm:"STD_NUM",ft:"P",ln:7,dc:0,ec:"A",lb:{"ENG":"Number","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Number","FRA":"?","JPN":"?"}[cL],h3:"",de:{"ENG":"Standard Number","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PPNL",fd:Fd,pt:{avFrameworkManager:{da:"rw"},avListManager:{da:"na"},ipVF_AC009Owner:{da:"na"},uPrompt5250Field:{da:"rw"},uPrompt5250Index:{da:"rw"},uPrompt5250Key:{da:"rw"},uPrompt5250FormName:{da:"rw"},uHandlerInfo1:{da:"rw"},uHandlerInfo2:{da:"rw"},uHandlerInfo3:{da:"rw"},avCommandHandler:{da:"rw"},AssociatedVF_SY185OTrackingItem:{da:"r"}},mt:{uInitialize:{},uTerminate:{},uShow:{ps:{"Top":{pt:"i"},"Left":{pt:"i"},"Height":{pt:"i"},"Width":{pt:"i"}
}},uHide:{},uDeactivate:{},uClear5250Fields:{},uSet5250Field:{ps:{"Name":{pt:"i"},"Value":{pt:"i"},"SendSignal":{pt:"i"},"Index":{pt:"i"}}},uGet5250Field:{ps:{"Name":{pt:"i"},"Index":{pt:"i"},"Value":{pt:"io"},"Found":{pt:"o"}}},uShowError:{ps:{"Text":{pt:"i"}}},uEnumerate5250Fields:{},uMatch:{ps:{"String1":{pt:"i"},"String2":{pt:"i"},"CompareLength":{pt:"i"},"CompareUpperCase":{pt:"i"}}}},ev:{e5250FieldSet:{ps:{"Name":{pt:"i"},"UpperCaseName":{pt:"i"},"Value":{pt:"i"},"Index":{pt:"i"}}},e5250FieldFound:
{ps:{"UpperCaseName":{pt:"i"},"Value":{pt:"i"},"Index":{pt:"i"}}},uPromptWentHiding:{},zInt_PrompterClosed:{}},co:function(){cO.aN.call(this);this.aF("VF_AC017O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");var C2=this.cA("UFRAMEWORK","VF_FP001O");this.cD("AVFRAMEWORKMANAGER");this.cD("PUVF_AC009OWNER");this.cD("FIELDNAMEVALUEPAIR");var C6=this.cR("UPROMPT5250FIELD","PRIM_ALPH");var C7=this.cR("UPROMPT5250KEY","PRIM_ALPH");var C8=this.cR("UPROMPT5250FORMNAME","PRIM_ALPH");
var C9=this.cF("UPROMPT5250INDEX",Fd.F1.Dc);var C10=this.cR("UHANDLERINFO1","PRIM_ALPH");var C11=this.cR("UHANDLERINFO2","PRIM_ALPH");var C12=this.cR("UHANDLERINFO3","PRIM_ALPH");this.cD("AVCOMMANDHANDLER");this.cD("ASSOCIATEDVF_SY185OTRACKINGITEM");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}if((C2!=null)&&(C2.iI()==false)){C2.iC();}C6.iC();C7.iC();C8.iC();C9.aD();C9.iC();C10.iC();C11.iC();C12.iC();this.setHeight(439);this.setWidth(543);this.setLeft(0);this.setTop(0);
this.aH("CREATEINSTANCE",this,e1);this.aH("DESTROYINSTANCE",this,e2);this.aH("CLOSED",this,e3);}});cO.mthSET_UVF_AC009OWNER=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_uVF_AC009Owner",79);var P0=r.cPD("PROPERTY_AC009");P0=r.sR("PROPERTY_AC009",p0);r.ln=79;{r.ln=82;this.setrefPUVF_AC009OWNER(P0);}r.ln=84;r.e();};cO.mthGET_AVLISTMANAGER=function(){var m=this.REF,r=l.pR(this,cO,"Get_avListManager",87);var P0=r.cPD("REFERENCE");r.ln=87;{r.ln=90;P0=r.sR("P0",m.USYSTEM.ref.getINSTANCELISTCONTROLLER().mthGETINSTANCELISTREFERENCE(l.cast(m.PUVF_AC009OWNER,"VF_FR003O"),this));
}r.ln=92;return r.rR(P0);};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_Owner.CreateInstance",103);r.ln=103;{r.ln=105;this.setrefASSOCIATEDVF_SY185OTRACKINGITEM(m.USYSTEM.ref.mthZINT_TRACKMAJOROBJECTCREATION(this));r.ln=107;if(m.USYSTEM.ref!=null){r.ln=109;this.setrefAVFRAMEWORKMANAGER(m.USYSTEM.ref.getUFRAMEWORKMANAGER());}}r.ln=113;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.DestroyInstance",119);r.ln=119;{r.ln=121;if((m.ASSOCIATEDVF_SY185OTRACKINGITEM!=null))
{r.ln=122;m.ASSOCIATEDVF_SY185OTRACKINGITEM.mthZINT_TRACKDESTRUCTION(this);r.ln=123;this.setrefASSOCIATEDVF_SY185OTRACKINGITEM(null);}}r.ln=126;r.e();};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",132);r.ln=132;{r.ln=136;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"uInitialize",u,u,false,true);}r.ln=138;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",144);r.ln=144;{r.ln=148;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"uTerminate",u,u,false,true);
r.ln=152;this.mthUCLEAR5250FIELDS();r.ln=156;this.setrefFIELDNAMEVALUEPAIR(null);r.ln=160;this.setrefAVCOMMANDHANDLER(null);r.ln=164;m.USYSTEM.ref.mthZINT_CHECKSUBSEQUENTMAJOROBJECTDESTRUCTION(m.ASSOCIATEDVF_SY185OTRACKINGITEM,this);}r.ln=166;r.e();};cO.mthUSHOW=function(p0,p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"uShow",172);var P0=r.cPF("TOP",Fd.F1.Dc);var P1=r.cPF("LEFT",Fd.F1.Dc);var P2=r.cPF("HEIGHT",Fd.F1.Dc);var P3=r.cPF("WIDTH",Fd.F1.Dc);P0.set((p0===u)?(-999999):(p0));P1.set((p1===u)?(-999999):(p1));
P2.set((p2===u)?(-999999):(p2));P3.set((p3===u)?(-999999):(p3));var C0=r.cF("USETOP",Fd.F1.Dc);var C1=r.cF("USELEFT",Fd.F1.Dc);var C2=r.cF("USEHEIGHT",Fd.F1.Dc);var C3=r.cF("USEWIDTH",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();C3.iC();r.ln=172;{r.ln=185;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"uShow",u,u,false,true);r.ln=189;if(l.n.eq(P0.getValue(),-999999)){r.ln=190;C0.setValue(this.getTop());}else{r.ln=192;C0.setValue(P0.getValue());}r.ln=195;if(l.n.eq(P1.getValue(),-999999)){r.ln=196;C1.setValue(this.getLeft());
}else{r.ln=198;C1.setValue(P1.getValue());}r.ln=201;if(l.n.eq(P2.getValue(),-999999)){r.ln=202;C2.setValue(this.getHeight());}else{r.ln=204;C2.setValue(P2.getValue());}r.ln=207;if(l.n.eq(P3.getValue(),-999999)){r.ln=208;C3.setValue(this.getWidth());}else{r.ln=210;C3.setValue(P3.getValue());}r.ln=215;this.setWidth(C3.get());this.setHeight(C2.get());this.setVisible(true);r.ln=219;this.mthSHOWPOPUP(C1.get(),C0.get(),"ABSOLUTE",u,u);}r.ln=222;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.Closed",228);
r.ln=228;{r.ln=230;this.fE("ZINT_PROMPTERCLOSED");}r.ln=232;r.e();};cO.mthUHIDE=function(){var m=this.REF,r=l.mR(this,cO,"uHide",234);r.ln=234;{r.ln=236;if(l.b.eq(this.getVisible(),true)){r.ln=240;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"uHide",u,u,false,true);r.ln=244;this.mthCLOSEPOPUP();r.ln=246;this.fE("UPROMPTWENTHIDING");}r.ln=252;this.setrefAVCOMMANDHANDLER(null);}r.ln=254;r.e();};cO.mthUDEACTIVATE=function(){var m=this.REF,r=l.mR(this,cO,"uDeactivate",260);r.ln=260;{r.ln=264;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"uDeactivate",u,u,false,true);
r.ln=268;this.mthUHIDE();}r.ln=271;r.e();};cO.mthUCLEAR5250FIELDS=function(){var m=this.REF,r=l.mR(this,cO,"uClear5250Fields",278);r.ln=278;{r.ln=282;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"uClear5250Fields",u,u,false,true);r.ln=286;if(m.FIELDNAMEVALUEPAIR!=null){r.ln=287;m.FIELDNAMEVALUEPAIR.mthREMOVEALL();}}r.ln=290;r.e();};cO.mthUSET5250FIELD=function(p0,p1,p2,p3){var f=this.FLD.VF_AC017O,m=this.REF,r=l.mR(this,cO,"uSet5250Field",296);var P0=r.cP("NAME","PRIM_ALPH");var P1=r.cP("VALUE","PRIM_ALPH");
var P2=r.cP("SENDSIGNAL","PRIM_BOLN");var P3=r.cPF("INDEX",Fd.F1.Dc);P0.set(p0);P1.set(p1);P2.set((p2===u)?(true):(p2));P3.set((p3===u)?(0):(p3));var C0=r.cR("COLLECTIONKEY","PRIM_ALPH");C0.iC();r.ln=296;{r.ln=306;if(m.USYSTEMCOMMON.ref.getINAPPTRACEMODE()){r.ln=307;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(l.cat(l.cat(l.cat(l.cat("uSet5250 Field in prompter, Name=",P0.get()),",Value="),P1.get()),"Index= "),l.n.AsString(P3.get())),u,u,false,true);}r.ln=312;if(m.FIELDNAMEVALUEPAIR==null){r.ln=313;
this.setrefFIELDNAMEVALUEPAIR(l.cAs("PRIM_KCOL").tB([ti1,ti2]));}r.ln=318;f.F2.set(l.s.UpperCase(P0.get()));r.ln=319;C0.set(l.cat(l.cat(f.F2.get(),"="),l.n.AsString(P3.get())));r.ln=323;if(m.FIELDNAMEVALUEPAIR.get(C0.get())==null){r.ln=324;m.FIELDNAMEVALUEPAIR.set(C0.get(),l.cAs("PRIM_ALPH"));}r.ln=329;m.FIELDNAMEVALUEPAIR.get(C0.get()).setValue(P1.getValue());r.ln=333;if(l.tB(P2.get())){r.ln=335;{var eP=l.ePs();eP.cR("NAME","PRIM_ALPH");eP.cR("UPPERCASENAME","PRIM_ALPH");eP.cR("VALUE","PRIM_ALPH");
eP.cF("INDEX",Fd.F1.Dc);eP.r("NAME").set(P0.getValue());eP.r("UPPERCASENAME").set(f.F2.get());eP.r("VALUE").set(P1.getValue());eP.r("INDEX").set(P3.get());this.fE("E5250FIELDSET",eP);eP.e();}}}r.ln=341;r.e();};cO.mthUGET5250FIELD=function(p0,p1,p2,p3){var f=this.FLD.VF_AC017O,m=this.REF,r=l.mR(this,cO,"uGet5250Field",347);var P0=r.cP("NAME","PRIM_ALPH");var P1=r.cPF("INDEX",Fd.F1.Dc);var P2=r.cP("VALUE","PRIM_ALPH");var P3=r.cP("FOUND","PRIM_BOLN");P0.set(p0);P1.set((p1===u)?(0):(p1));P2.set(p2.get());
P3.set(false);var C0=r.cF("COLLECTIONKEY",Fd.F2.Dc);C0.iC();r.ln=347;{r.ln=357;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"uGet5250Field",u,u,false,true);r.ln=361;if(m.FIELDNAMEVALUEPAIR==null){r.ln=362;P3.setValue(false);p2.set(P2.get());if(p3!==u){p3.set(P3.get());}r.e();return;}r.ln=368;f.F2.set(l.s.UpperCase(P0.get()));r.ln=369;C0.set(l.cat(l.cat(f.F2.get(),"="),l.n.AsString(P1.get())));r.ln=373;if(m.FIELDNAMEVALUEPAIR.get(C0.get())==null){r.ln=374;P3.setValue(false);p2.set(P2.get());if(p3!==u)
{p3.set(P3.get());}r.e();return;}r.ln=380;P2.setValue(m.FIELDNAMEVALUEPAIR.get(C0.get()).getValue());r.ln=381;P3.setValue(true);p2.set(P2.get());if(p3!==u){p3.set(P3.get());}}r.ln=383;r.e();};cO.mthUSHOWERROR=function(p0){var m=this.REF,r=l.mR(this,cO,"uShowError",389);var P0=r.cP("TEXT","PRIM_ALPH");P0.set(p0);r.ln=389;{r.ln=393;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("uShowError ",P0.get()),u,u,false,true);}r.ln=395;r.e();};cO.mthUENUMERATE5250FIELDS=function(){var m=this.REF,r=l.mR(this,cO,"uEnumerate5250Fields",401);
var C0=r.cR("FIELDNAME","PRIM_ALPH");var C1=r.cR("FIELDINDEXSTRING","PRIM_ALPH");var C2=r.cF("FIELDINDEXNUMBER",Fd.F1.Dc);var C3=r.cF("INDEXPOSITION",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();C3.iC();r.ln=401;{r.ln=410;if(m.FIELDNAMEVALUEPAIR==null){r.e();return;}r.ln=416;{var l1=m.FIELDNAMEVALUEPAIR.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());var KEY=r.sR("KEY",l1.key());r.ln=418;C3.set(l.s.LastPositionOf(KEY.get(),"="));r.ln=420;C0.set(l.s.Substring(KEY.get(),1,l.sub(C3.get(),1)));r.ln=421;C1.set(l.s.Substring(KEY.get(),l.add(C3.get(),1),20," "));
r.ln=422;C2.set(l.s.AsNumber(C1.get()));r.ln=424;{var eP=l.ePs();eP.cR("UPPERCASENAME","PRIM_ALPH");eP.cR("VALUE","PRIM_ALPH");eP.cF("INDEX",Fd.F1.Dc);eP.r("UPPERCASENAME").set(C0.get());eP.r("VALUE").set(ITEM.getValue());eP.r("INDEX").set(C2.get());this.fE("E5250FIELDFOUND",eP);eP.e();}r.ln=426;}l1.end();r.dR("ITEM");r.dR("KEY");}}r.ln=428;r.e();};cO.mthUMATCH=function(p0,p1,p2,p3){var r=l.mR(this,cO,"uMatch",435);var P0=r.cP("STRING1","PRIM_ALPH");var P1=r.cP("STRING2","PRIM_ALPH");var P2=r.cPF("COMPARELENGTH",Fd.F1.Dc);
var P3=r.cP("COMPAREUPPERCASE","PRIM_BOLN");var P4=r.cPF("MATCHES",Fd.F3.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3.set((p3===u)?(true):(p3));var C0=r.cF("UCOUNT",Fd.F1.Dc);C0.iC();r.ln=435;{r.ln=446;C0.set(0);r.ln=447;do{r.ln=448;C0.set(l.add(C0.get(),1));r.ln=449;if(l.s.eq(l.s.Compare(l.s.Substring(P0.get(),1,C0.get()),l.s.Substring(P1.get(),1,C0.get()),"CULTURAL",P3.get()),"EQUAL")){r.ln=450;P4.set(C0.get());}else{r.ln=452;break;}r.ln=454;}while(!(l.or(l.or(l.n.gt(C0.get(),l.s.CurChars(P0.get())),l.n.gt(C0.get(),l.s.CurChars(P1.get()))),l.n.gt(C0.get(),P2.get()))))
}r.ln=456;return r.rV(P4.get());};cO.getAVFRAMEWORKMANAGER=function(){return this.REF.AVFRAMEWORKMANAGER;};cO.setAVFRAMEWORKMANAGER=function(v){this.setrefAVFRAMEWORKMANAGER(v);};cO.getAVLISTMANAGER=function(){return this.mthGET_AVLISTMANAGER();};cO.setIPVF_AC009OWNER=function(v){this.mthSET_UVF_AC009OWNER(v);};cO.getUPROMPT5250FIELD=function(){return this.REF.UPROMPT5250FIELD.get();};cO.setUPROMPT5250FIELD=function(v){this.REF.UPROMPT5250FIELD.set(v);};cO.getUPROMPT5250INDEX=function(){return this.REF.UPROMPT5250INDEX.get();
};cO.setUPROMPT5250INDEX=function(v){this.REF.UPROMPT5250INDEX.set(v);};cO.getUPROMPT5250KEY=function(){return this.REF.UPROMPT5250KEY.get();};cO.setUPROMPT5250KEY=function(v){this.REF.UPROMPT5250KEY.set(v);};cO.getUPROMPT5250FORMNAME=function(){return this.REF.UPROMPT5250FORMNAME.get();};cO.setUPROMPT5250FORMNAME=function(v){this.REF.UPROMPT5250FORMNAME.set(v);};cO.getUHANDLERINFO1=function(){return this.REF.UHANDLERINFO1.get();};cO.setUHANDLERINFO1=function(v){this.REF.UHANDLERINFO1.set(v);};cO.getUHANDLERINFO2=function()
{return this.REF.UHANDLERINFO2.get();};cO.setUHANDLERINFO2=function(v){this.REF.UHANDLERINFO2.set(v);};cO.getUHANDLERINFO3=function(){return this.REF.UHANDLERINFO3.get();};cO.setUHANDLERINFO3=function(v){this.REF.UHANDLERINFO3.set(v);};cO.getAVCOMMANDHANDLER=function(){return this.REF.AVCOMMANDHANDLER;};cO.setAVCOMMANDHANDLER=function(v){this.setrefAVCOMMANDHANDLER(v);};cO.getASSOCIATEDVF_SY185OTRACKINGITEM=function(){return this.REF.ASSOCIATEDVF_SY185OTRACKINGITEM;};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELURLX"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"STD_NUM"});}var ti1={p:"PRIM_ALPH"},ti2={p:"VF_ELURLX",c:Fd.F2.Dc};cO.setrefAVFRAMEWORKMANAGER=function(rn){this.sR("AVFRAMEWORKMANAGER",rn);};cO.setrefPUVF_AC009OWNER=function(rn){this.sR("PUVF_AC009OWNER",rn);};cO.setrefFIELDNAMEVALUEPAIR=function(rn){this.sR("FIELDNAMEVALUEPAIR",rn);
if(this.REF.FIELDNAMEVALUEPAIR!=null){this.REF.FIELDNAMEVALUEPAIR.setStyle("COLLECTION");this.REF.FIELDNAMEVALUEPAIR.setCollects("PRIM_ALPH");this.REF.FIELDNAMEVALUEPAIR.setKeyedBy(Fd.F2.Dc);}};cO.setrefAVCOMMANDHANDLER=function(rn){this.sR("AVCOMMANDHANDLER",rn);};cO.setrefASSOCIATEDVF_SY185OTRACKINGITEM=function(rn){this.sR("ASSOCIATEDVF_SY185OTRACKINGITEM",rn);};},{rc:["VF_SY001O","VF_SY001X","VF_FP001O"],rp:["PRIM_PPNL","PRIM_ALPH","PRIM_FLD"],dc:["VF_SY100O","VF_AC009O","VF_AC010O","VF_SY185O"],
dp:["PRIM_KCOL","PRIM_ALPH"]});