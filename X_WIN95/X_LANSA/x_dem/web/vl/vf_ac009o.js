﻿LANSA.addComponent({id:"VF_AC009O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=VLF-ONE *** Not for customer use ***",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]},F2:{ic:0,nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC001O",fd:Fd,pt:{VF_FP010OHandlers:{da:"r"},RealDefaultVF_FP010OHandler:{da:"rw"},CurrentDefaultVF_FP010OHandler:{da:"rw"},VF_FP017OProperties:{da:"r"},OwnerVF_FP002Object:{da:"rw"},AutoTilingRootSequence:{da:"na"},uCurrentThemeColor:{da:"na"},uUserReorderTabs:{da:"na"}},mt:{zInt_InitializeInstanceLevel:{},zInt_ShowCommandExecutor:
{ps:{"ForExecutionEnironment":{pt:"i"},"WithInstanceKey":{pt:"i"},"CurrentOpenInstanceLimit":{pt:"i"},"ExecuteDefaultCommand":{pt:"i"},"HadToBeCreated":{pt:"i"}}},zInt_QueryCommandExecutorExistence:{ps:{"ForExecutionEnironment":{pt:"i"},"WithInstanceKey":{pt:"i"},"CurrentOpenInstanceLimit":{pt:"i"}}},zInt_IsInstanceCommandExecutorOpen:{ps:{"ForItem":{pt:"i"},"ShowifOpen":{pt:"i"},"Executor":{pt:"o"},"ForCompositeKeyString":{pt:"i"}}},zInt_LocateAppropriateInstanceCommandExecutor:{ps:{"WithInstanceKey":
{pt:"i"},"CurrentOpenInstanceLimit":{pt:"i"},"actuallyCreate":{pt:"i"},"HadToBeCreated":{pt:"i"}}},zInt_GetAppropriateCommandExecutor:{ps:{"ForExecutionEnironment":{pt:"i"},"WithInstanceKey":{pt:"i"},"CurrentOpenInstanceLimit":{pt:"i"},"HadToBeCreated":{pt:"i"}}},zInt_SetVF_FP010OHandlerEnablements:{ps:{"Enabled":{pt:"i"},"AtReferenceLevel":{pt:"i"},"AtAnyReferenceLevel":{pt:"i"}}},zInt_SetSpecificVF_FP010OHandlerEnablement:{ps:{"Enabled":{pt:"i"},"Handler":{pt:"i"}}},zInt_ResetDefaultCommand:{},
zInt_OverrideDefaultCommand:{ps:{"ToVF_FP010OHandler":{pt:"i"}}},zInt_ExecuteDefaultCommand:{ps:{"AtReferenceLevel":{pt:"i"},"AtAnyReferenceLevel":{pt:"i"},"HandlerWasExecuted":{pt:"o"},"UseBusyPanel":{pt:"i"},"WithInstanceReferenceKey":{pt:"i"},"IgnoreEnablement":{pt:"i"}}},zInt_EnrollChild:{ps:{"uReference":{pt:"i"}}},zInt_SetProperty:{ps:{"P":{pt:"i"}}},zInt_ShowCommandHandlerChoiceMenu:{ps:{"UseBusyPanel":{pt:"i"},"WithInstanceReferenceKey":{pt:"i"},"IgnoreEnablement":{pt:"i"}}},zInt_GoBusy:{
ps:{"OverPanel":{pt:"i"},"ShowBusyText":{pt:"i"},"Animated":{pt:"i"},"WaitFor":{pt:"i"}}},zInt_GoFree:{}},co:function(){cO.aN.call(this);this.aF("VF_AC009O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");var C2=this.cR("VF_FP010OHANDLERS","PRIM_ACOL");this.cD("REALDEFAULTVF_FP010OHANDLER");this.cD("CURRENTDEFAULTVF_FP010OHANDLER");var C5=this.cR("VF_FP017OPROPERTIES","PRIM_ACOL");this.cD("OWNERVF_FP002OBJECT");this.cD("BUSYSTATECHAIN");var C8=this.cF("AUTOTILINGROOTSEQUENCE",Fd.F1.Dc);
this.cD("OBJECTLEVELCOMMANDEXECUTOR");this.cD("HIDDENLEVELCOMMANDEXECUTOR");var C11=this.cR("INSTANCELEVELCOMMANDEXECUTORS","PRIM_ACOL");var C12=this.cR("INSTANCELEVELCOMMANDEXECUTORSKEY","PRIM_ACOL");var C13=this.cF("COMMANDEXECUTORLASTRETURNEDINDEX",Fd.F1.Dc);var C14=this.cR("ULIGHTTHEMECOLOR","PRIM_ALPH");var C15=this.cR("UDARKTHEMECOLOR","PRIM_ALPH");var C16=this.cR("PTY_UUSERREORDERTABS","PRIM_BOLN");this.cD("TEMPCOMMANDHANDLERCHOICEMENU");this.cD("TEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL");var C19=this.cR("TEMPCOMMANDHANDLERINSTANCEREFERENCEKEY","PRIM_ALPH");
if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.setCollects("VF_FP010O");C2.iC();C5.setCollects("VF_FP017O");C5.iC();C8.aD();C8.iC();C11.setCollects("VF_UM012O");C11.iC();C12.setCollects("PRIM_ALPH");C12.iC();C13.aD();C13.iC();C14.iC();C15.iC();C16.iC();C19.iC();C11.aH("UTERMINATED",this,e3);this.aH("CREATEINSTANCE",this,e1);}});var cA=cO.aN.prototype;cO.mthGET_AUTOTILINGROOTSEQUENCE=function(){var m=this.REF,r=l.pR(this,cO,"Get_AutoTilingRootSequence",71);var P0=r.cPF("VALUE",Fd.F1.Dc);
r.ln=71;{r.ln=74;if(l.n.eq(m.AUTOTILINGROOTSEQUENCE.get(),0)){r.ln=75;m.AUTOTILINGROOTSEQUENCE.set(m.USYSTEM.ref.getNEXTAUTOTILINGROOTSEQUENCE());r.ln=76;m.USYSTEM.ref.setNEXTAUTOTILINGROOTSEQUENCE(l.add(m.USYSTEM.ref.getNEXTAUTOTILINGROOTSEQUENCE(),100));}r.ln=79;P0.set(m.AUTOTILINGROOTSEQUENCE.get());}r.ln=81;return r.rV(P0.get());};cO.mthGET_UCURRENTTHEMECOLOR=function(){var m=this.REF,r=l.pR(this,cO,"Get_uCurrentThemeColor",84);var P0=r.cP("RETURNCOLOR","PRIM_ALPH");r.ln=84;{r.ln=87;if(m.USYSTEM.ref.getCURRENTTHEME().getISDARKTHEME())
{r.ln=88;P0.set(m.UDARKTHEMECOLOR.get());}else{r.ln=90;P0.set(m.ULIGHTTHEMECOLOR.get());}r.ln=93;if(l.tB(l.s.eq(P0.get(),""))){r.ln=94;P0.set(m.USYSTEM.ref.getCURRENTTHEME().getBASETITLESTYLE().getNormBackColor());}}r.ln=97;return r.rV(P0.get());};cO.mthGET_UUSERREORDERTABS=function(){var m=this.REF,r=l.pR(this,cO,"Get_uUserReorderTabs",100);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=100;{r.ln=105;P0.set(m.PTY_UUSERREORDERTABS.get());}r.ln=110;return r.rV(P0.get());};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",113);
r.ln=113;{r.ln=116;m.PTY_UUSERREORDERTABS.set(false);}r.ln=117;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#HiddenLevelCommandExecutor.uTerminated",120);r.ln=120;{r.ln=121;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add("Terminated reference to ",m.HIDDENLEVELCOMMANDEXECUTOR.getTRACEDESCRIPTION().get()),u,u,false,u);r.ln=122;this.setrefHIDDENLEVELCOMMANDEXECUTOR(null);}r.ln=123;r.e();};function e3(FROMEXECUTOR,Ps){var m=this.REF,r=l.eR(this,cO,"#InstanceLevelCommandExecutors<>.uTerminated",125);
r.ln=125;{r.ln=127;{var l1=m.INSTANCELEVELCOMMANDEXECUTORS.cI();while(l1.step()){var EXECUTOR=r.sR("EXECUTOR",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=128;if((EXECUTOR===FROMEXECUTOR)){r.ln=129;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add("Terminated reference to ",FROMEXECUTOR.getTRACEDESCRIPTION().get()),u,u,false,u);r.ln=130;m.INSTANCELEVELCOMMANDEXECUTORS.set(INDEX.get(),null);r.ln=131;m.INSTANCELEVELCOMMANDEXECUTORSKEY.get(INDEX.get()).set("");l1.end();r.e();return;}r.ln=134;}l1.end();
r.dR("EXECUTOR");r.dR("INDEX");}}r.ln=136;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ObjectLevelCommandExecutor.uTerminated",138);r.ln=138;{r.ln=139;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add("Terminated reference to ",m.OBJECTLEVELCOMMANDEXECUTOR.getTRACEDESCRIPTION().get()),u,u,false,u);r.ln=140;this.setrefOBJECTLEVELCOMMANDEXECUTOR(null);}r.ln=141;r.e();};cO.mthZINT_INITIALIZEINSTANCELEVEL=function(){var m=this.REF,r=l.mR(this,cO,"zInt_InitializeInstanceLevel",144);var C0=r.cD("C0");
var C1=r.cD("C1");var C2=r.cF("MAXIMUMINSTANCESALLOWED",Fd.F1.Dc);C2.iC();r.ln=144;{r.ln=150;if(l.Io(this,"VF_FR003O")){r.ln=151;if(l.n.eq(m.INSTANCELEVELCOMMANDEXECUTORS.getItemCount(),0)){r.ln=153;C2.set(l.cast(this,"VF_FR003O").getUDESIGNERMAXINSTANCESOPEN());r.ln=155;for(var i1=1,s1=1,t1=l.tI(C2.get());(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=156;m.INSTANCELEVELCOMMANDEXECUTORS.mthINSERT(C0);r.ln=157;C1=r.sR("C1",l.cC("PRIM_ALPH"));r.ln=158;m.INSTANCELEVELCOMMANDEXECUTORSKEY.mthINSERT(C1);
}}}}r.ln=164;r.e();};cO.mthZINT_SHOWCOMMANDEXECUTOR=function(p0,p1,p2,p3,p4){var m=this.REF,r=l.mR(this,cO,"zInt_ShowCommandExecutor",167);var P0=r.cPD("FOREXECUTIONENIRONMENT");var P1=r.cPD("WITHINSTANCEKEY");var P2=r.cPD("CURRENTOPENINSTANCELIMIT");var P3=r.cPD("EXECUTEDEFAULTCOMMAND");var P4=r.cPD("HADTOBECREATED");P0=r.sR("FOREXECUTIONENIRONMENT",p0);P1=r.sR("WITHINSTANCEKEY",p1);P2=r.sR("CURRENTOPENINSTANCELIMIT",p2);P3=r.sR("EXECUTEDEFAULTCOMMAND",p3);P4=r.sR("HADTOBECREATED",p4);var C0=r.cD("C0");
r.ln=167;{r.ln=176;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"ShowCommandExecutor executed.",u,u,false,u);r.ln=178;C0=r.sR("C0",this.mthZINT_GETAPPROPRIATECOMMANDEXECUTOR(P0,P1,P2,P4));r.ln=180;if((C0!=null)){r.ln=182;C0.getVF_AC005CONTAINER().mthZINT_RESTORE(C0.getVF_AC005CONTAINER().getDEFAULTTABLETMODETRANSITION(),true,u);}r.ln=187;if(l.tB(P3.get())){r.ln=189;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"ShowCommandExecutor is executing default command.",u,u,false,u);r.ln=191;this.mthZINT_EXECUTEDEFAULTCOMMAND(u,true,u,C0.getBUSYPANEL(),P1.get(),false);
}}r.ln=196;r.e();};cO.mthZINT_QUERYCOMMANDEXECUTOREXISTENCE=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_QueryCommandExecutorExistence",199);var P0=r.cPD("FOREXECUTIONENIRONMENT");var P1=r.cPD("WITHINSTANCEKEY");var P2=r.cPD("CURRENTOPENINSTANCELIMIT");var P3=r.cP("CURRENTLYEXISTS","PRIM_BOLN");P0=r.sR("FOREXECUTIONENIRONMENT",p0);P1=r.sR("WITHINSTANCEKEY",p1);P2=r.sR("CURRENTOPENINSTANCELIMIT",p2);var C0=r.cR("HADTOBECREATED","PRIM_BOLN");C0.iC();r.ln=199;{r.ln=207;P3.set(true);r.ln=209;
{var v1=P0.get();if(r.ln=211,l.s.eq(v1,"H")){r.ln=212;if((m.HIDDENLEVELCOMMANDEXECUTOR==null)){r.ln=213;P3.set(false);}}else if(r.ln=216,l.s.eq(v1,"I")){r.ln=218;this.mthZINT_LOCATEAPPROPRIATEINSTANCECOMMANDEXECUTOR(P1,P2,false,C0);}else{r.ln=223;if((m.OBJECTLEVELCOMMANDEXECUTOR==null)){r.ln=224;P3.set(false);}}r.ln=227;}}r.ln=229;return r.rV(P3.get());};cO.mthZINT_ISINSTANCECOMMANDEXECUTOROPEN=function(p0,p1,p3,p4){var m=this.REF,r=l.mR(this,cO,"zInt_IsInstanceCommandExecutorOpen",232);var P0=r.cPD("FORITEM");
var P1=r.cP("SHOWIFOPEN","PRIM_BOLN");var P2=r.cP("RESULT","PRIM_BOLN");var P3=r.cPD("EXECUTOR");var P4=r.cP("FORCOMPOSITEKEYSTRING","PRIM_ALPH");P0=r.sR("FORITEM",p0);P1.set(p1);P3=null;P4.set((p4===u)?(""):(p4));r.ln=232;{r.ln=239;if((P0!=null)){r.ln=240;P4.set(P0.mthAVGETCOMPOSITEKEYSTRING());}r.ln=243;{var l1=m.INSTANCELEVELCOMMANDEXECUTORSKEY.cI();while(l1.step()){var KEY=r.sR("KEY",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=244;if(l.tB(l.s.eq(KEY.get(),P4.get()))){r.ln=246;P2.set(true);
r.ln=248;P3=r.sR("P3",m.INSTANCELEVELCOMMANDEXECUTORS.get(INDEX.get()));r.ln=250;if(l.tB(P1.get())){r.ln=252;P3.getVF_AC005CONTAINER().mthZINT_RESTORE(P3.getVF_AC005CONTAINER().getDEFAULTTABLETMODETRANSITION(),true,u);}if(p3!==u){p3.set(P3);}l1.end();return r.rV(P2.get());}r.ln=259;}l1.end();r.dR("KEY");r.dR("INDEX");}if(p3!==u){p3.set(P3);}}r.ln=262;return r.rV(P2.get());};cO.mthZINT_LOCATEAPPROPRIATEINSTANCECOMMANDEXECUTOR=function(p0,p1,p3,p4){var m=this.REF,r=l.mR(this,cO,"zInt_LocateAppropriateInstanceCommandExecutor",265);
var P0=r.cPD("WITHINSTANCEKEY");var P1=r.cPD("CURRENTOPENINSTANCELIMIT");var P2=r.cPD("RETURNREFERENCE");var P3=r.cP("ACTUALLYCREATE","PRIM_BOLN");var P4=r.cPD("HADTOBECREATED");P0=r.sR("WITHINSTANCEKEY",p0);P1=r.sR("CURRENTOPENINSTANCELIMIT",p1);P2=null;P3.set(p3);P4=r.sR("HADTOBECREATED",p4);var C0=r.cD("C0");var C1=r.cF("SIEZEINDEX",Fd.F1.Dc);C1.iC();r.ln=265;{r.ln=277;this.mthZINT_INITIALIZEINSTANCELEVEL();r.ln=280;P2=r.sR("P2",null);r.ln=283;if(l.and(l.n.eq(m.INSTANCELEVELCOMMANDEXECUTORS.getItemCount(),1),(m.INSTANCELEVELCOMMANDEXECUTORS.get(1)!=null)))
{r.ln=284;P2=r.sR("P2",m.INSTANCELEVELCOMMANDEXECUTORS.get(1));r.ln=285;m.INSTANCELEVELCOMMANDEXECUTORSKEY.get(1).set(P0.get());r.ln=286;m.COMMANDEXECUTORLASTRETURNEDINDEX.set(1);r.ln=287;P4.set(false);r.ln=288;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=289;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("Located command container by method 1. IK=",P0.get()),u,u,false,u);}return r.rR(P2);}r.ln=295;{var l1=m.INSTANCELEVELCOMMANDEXECUTORSKEY.cI();while(l1.step()){var KEY=r.sR("KEY",l1.item());
var INDEX=r.sR("INDEX",l1.key());r.ln=296;if(l.tB(l.and(l.s.eq(KEY.getValue(),P0.getValue()),(m.INSTANCELEVELCOMMANDEXECUTORS.get(INDEX.get())!=null)))){r.ln=297;P2=r.sR("P2",m.INSTANCELEVELCOMMANDEXECUTORS.get(INDEX.get()));r.ln=298;m.COMMANDEXECUTORLASTRETURNEDINDEX.set(INDEX.get());r.ln=299;P4.set(false);r.ln=300;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=301;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("Located command container by method 2. IK=",P0.get()),u,u,false,u);}l1.end();return r.rR(P2);
}r.ln=305;}l1.end();r.dR("KEY");r.dR("INDEX");}r.ln=308;{var l1=m.INSTANCELEVELCOMMANDEXECUTORS.cI();while(l1.step()){var EXECUTOR=r.sR("EXECUTOR",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=309;if(l.and((EXECUTOR==null),l.n.le(INDEX.get(),P1.get()))){r.ln=311;if(l.tB(P3.get())){r.ln=313;C0=r.sR("C0",l.cAs("VF_UM012O"));r.ln=314;C0.mthZINT_CREATEINSTANCE(this,"I",INDEX.get());r.ln=315;m.INSTANCELEVELCOMMANDEXECUTORS.set(INDEX.get(),C0);r.ln=316;m.INSTANCELEVELCOMMANDEXECUTORSKEY.get(INDEX.get()).set(P0.get());
r.ln=317;P2=r.sR("P2",C0);r.ln=318;m.COMMANDEXECUTORLASTRETURNEDINDEX.set(INDEX.get());r.ln=320;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=321;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("Located command container by method 3. IK=",P0.get()),u,u,false,u);}}r.ln=326;P4.set(true);l1.end();return r.rR(P2);}r.ln=330;}l1.end();r.dR("EXECUTOR");r.dR("INDEX");}r.ln=334;C1.set(l.add(m.COMMANDEXECUTORLASTRETURNEDINDEX.get(),1));r.ln=336;if(l.or(l.n.lt(C1.get(),1),l.n.gt(C1.get(),P1.get()))){r.ln=337;
C1.set(1);}r.ln=340;if(l.tB(P3.get())){r.ln=341;P2=r.sR("P2",m.INSTANCELEVELCOMMANDEXECUTORS.get(C1.get()));r.ln=342;m.INSTANCELEVELCOMMANDEXECUTORSKEY.get(C1.get()).set(P0.get());r.ln=343;m.COMMANDEXECUTORLASTRETURNEDINDEX.set(C1.get());r.ln=345;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=346;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("Located command container by method 4. IK=",P0.get()),u,u,false,u);}}r.ln=351;P4.set(false);return r.rR(P2);}r.ln=354;};cO.mthZINT_GETAPPROPRIATECOMMANDEXECUTOR=function(p0,p1,p2,p3)
{var m=this.REF,r=l.mR(this,cO,"zInt_GetAppropriateCommandExecutor",357);var P0=r.cPD("FOREXECUTIONENIRONMENT");var P1=r.cPD("WITHINSTANCEKEY");var P2=r.cPD("CURRENTOPENINSTANCELIMIT");var P3=r.cPD("HADTOBECREATED");var P4=r.cPD("RETURNREFERENCE");P0=r.sR("FOREXECUTIONENIRONMENT",p0);P1=r.sR("WITHINSTANCEKEY",p1);P2=r.sR("CURRENTOPENINSTANCELIMIT",p2);P3=r.sR("HADTOBECREATED",p3);r.ln=357;{r.ln=364;P3.set(false);r.ln=366;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=367;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(l.cat("GetCommandExecutor started. Instance key is \"",P1.get()),"\""),u,u,false,u);
}r.ln=370;{var v1=P0.get();if(r.ln=372,l.s.eq(v1,"H")){r.ln=374;if((m.HIDDENLEVELCOMMANDEXECUTOR==null)){r.ln=375;P3.set(true);r.ln=376;this.setrefHIDDENLEVELCOMMANDEXECUTOR(l.cAs("VF_UM012O"));r.ln=377;m.HIDDENLEVELCOMMANDEXECUTOR.mthZINT_CREATEINSTANCE(this,"H",1);}r.ln=380;P4=r.sR("P4",m.HIDDENLEVELCOMMANDEXECUTOR);}else if(r.ln=382,l.s.eq(v1,"I")){r.ln=384;P4=r.sR("P4",this.mthZINT_LOCATEAPPROPRIATEINSTANCECOMMANDEXECUTOR(P1,P2,true,P3));}else{r.ln=390;if((m.OBJECTLEVELCOMMANDEXECUTOR==null))
{r.ln=391;P3.set(true);r.ln=392;this.setrefOBJECTLEVELCOMMANDEXECUTOR(l.cAs("VF_UM012O"));r.ln=393;m.OBJECTLEVELCOMMANDEXECUTOR.mthZINT_CREATEINSTANCE(this,"O",1);}r.ln=396;P4=r.sR("P4",m.OBJECTLEVELCOMMANDEXECUTOR);}r.ln=398;}r.ln=401;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=402;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"GetCommandExecutor ended",u,u,false,u);}}r.ln=405;return r.rR(P4);};cO.mthZINT_SETVF_FP010OHANDLERENABLEMENTS=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_SetVF_FP010OHandlerEnablements",409);
var P0=r.cP("ENABLED","PRIM_BOLN");var P1=r.cPF("ATREFERENCELEVEL",Fd.F1.Dc);var P2=r.cP("ATANYREFERENCELEVEL","PRIM_BOLN");P0.set(p0);P1.set((p1===u)?(-999):(p1));P2.set((p2===u)?(false):(p2));r.ln=409;{r.ln=414;{var l1=m.VF_FP010OHANDLERS.cI();while(l1.step()){var HANDLER=r.sR("HANDLER",l1.item());r.ln=415;if(l.tB(l.or(l.b.ne(HANDLER.getLOGICALLYENABLED(),P0.get()),HANDLER.getPARENTHASSUBTYPES()))){r.ln=416;if(l.tB(l.or(l.n.eq(HANDLER.getREFERENCELEVEL(),P1.get()),P2.get()))){r.ln=418;this.mthZINT_SETSPECIFICVF_FP010OHANDLERENABLEMENT(P0.get(),HANDLER);
}}r.ln=422;}l1.end();r.dR("HANDLER");}}r.ln=424;r.e();};cO.mthZINT_SETSPECIFICVF_FP010OHANDLERENABLEMENT=function(p0,p1){var r=l.mR(this,cO,"zInt_SetSpecificVF_FP010OHandlerEnablement",428);var P0=r.cP("ENABLED","PRIM_BOLN");var P1=r.cPD("HANDLER");P0.set(p0);P1=r.sR("HANDLER",p1);r.ln=428;{r.ln=432;if(l.tB(l.or(l.b.ne(P1.getLOGICALLYENABLED(),P0.get()),P1.getPARENTHASSUBTYPES()))){r.ln=436;P1.setLOGICALLYENABLED(P0.get());r.ln=439;if((P1.getVF_FP009REFERENCE()!=null)){r.ln=440;P1.getVF_FP009REFERENCE().mthZINT_VF_FP010OHANDLERENABLEMENTCHANGED(P1);
}}}r.ln=477;r.e();};cO.mthZINT_RESETDEFAULTCOMMAND=function(){var m=this.REF,r=l.mR(this,cO,"zInt_ResetDefaultCommand",482);r.ln=482;{r.ln=484;this.setrefCURRENTDEFAULTVF_FP010OHANDLER(m.REALDEFAULTVF_FP010OHANDLER);}r.ln=486;r.e();};cO.mthZINT_OVERRIDEDEFAULTCOMMAND=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_OverrideDefaultCommand",490);var P0=r.cPD("TOVF_FP010OHANDLER");P0=r.sR("TOVF_FP010OHANDLER",p0);r.ln=490;{r.ln=493;if(((l.n.eq(P0.getREFERENCELEVEL(),1)&&l.b.Not(P0.getISNEVERDEFAULT()))&&P0.getLOGICALLYENABLED()))
{r.ln=494;this.setrefCURRENTDEFAULTVF_FP010OHANDLER(P0);}else{r.ln=496;this.mthZINT_RESETDEFAULTCOMMAND();}}r.ln=499;r.e();};cO.mthZINT_EXECUTEDEFAULTCOMMAND=function(p0,p1,p2,p3,p4,p5){var m=this.REF,r=l.mR(this,cO,"zInt_ExecuteDefaultCommand",503);var P0=r.cPF("ATREFERENCELEVEL",Fd.F1.Dc);var P1=r.cP("ATANYREFERENCELEVEL","PRIM_BOLN");var P2=r.cP("HANDLERWASEXECUTED","PRIM_BOLN");var P3=r.cPD("USEBUSYPANEL");var P4=r.cP("WITHINSTANCEREFERENCEKEY","PRIM_ALPH");var P5=r.cP("IGNOREENABLEMENT","PRIM_BOLN");
P0.set((p0===u)?(-999):(p0));P1.set((p1===u)?(false):(p1));P2.set(false);P3=r.sR("USEBUSYPANEL",p3);P4.set(p4);P5.set(p5);r.ln=503;{r.ln=511;P2.set(false);r.ln=514;if((m.CURRENTDEFAULTVF_FP010OHANDLER!=null)){r.ln=515;if((l.b.Not(m.CURRENTDEFAULTVF_FP010OHANDLER.getLOGICALLYENABLED())&&l.b.Not(P5.get()))){r.ln=516;this.mthZINT_RESETDEFAULTCOMMAND();}}r.ln=521;if((m.CURRENTDEFAULTVF_FP010OHANDLER==null)){r.ln=522;this.mthZINT_RESETDEFAULTCOMMAND();}r.ln=526;if((m.CURRENTDEFAULTVF_FP010OHANDLER!=null))
{r.ln=528;if(l.tB(l.or(m.CURRENTDEFAULTVF_FP010OHANDLER.getLOGICALLYENABLED(),P5.get()))){r.ln=529;if(l.tB(l.or(l.n.eq(m.CURRENTDEFAULTVF_FP010OHANDLER.getREFERENCELEVEL(),P0.get()),P1.get()))){r.ln=531;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=532;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add("Executing as current default command - ",m.CURRENTDEFAULTVF_FP010OHANDLER.getVF_FP009REFERENCE().getUCAPTION()),u,u,false,u);}r.ln=535;m.CURRENTDEFAULTVF_FP010OHANDLER.mthZINT_EXECUTECOMMANDHANDLER(P3,null,P4);
r.ln=537;P2.set(true);}}}if(p2!==u){p2.set(P2.get());}}r.ln=544;r.e();};cO.mthZINT_ENROLLCHILD=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_EnrollChild",548);var P0=r.cPD("UREFERENCE");var P1=r.cP("LATEENROLLREJECTED","PRIM_BOLN");P0=r.sR("UREFERENCE",p0);var C0=r.cD("C0");r.ln=548;{r.ln=554;cA.mthZINT_ENROLLCHILD.call(this,P0);r.ln=558;if(l.Ko(P0,"VF_FP010O")){r.ln=559;m.VF_FP010OHANDLERS.mthINSERT(l.cast(P0,"VF_FP010O"));return r.rV(P1.get());}r.ln=563;if(l.Ko(P0,"VF_FP017O")){r.ln=564;m.VF_FP017OPROPERTIES.mthINSERT(l.cast(P0,"VF_FP017O"));
return r.rV(P1.get());}}r.ln=568;return r.rV(P1.get());};cO.mthZINT_SETPROPERTY=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetProperty",572);var P0=r.cPD("P");P0=r.sR("P",p0);r.ln=572;{r.ln=576;if(l.n.le(P0.getPROPERTYNUMBER(),100)){r.ln=578;cA.mthZINT_SETPROPERTY.call(this,P0);}else{r.ln=584;{var v1=P0.getPROPERTYNUMBER();if(r.ln=586,l.n.eq(v1,101)){r.ln=587;m.ULIGHTTHEMECOLOR.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=589,l.n.eq(v1,102)){r.ln=590;m.UDARKTHEMECOLOR.set(l.s.AsNativeString(P0.getVALUE()));
}else if(r.ln=592,l.n.eq(v1,103)){r.ln=593;this.setrefOWNERVF_FP002OBJECT(l.cast(m.USYSTEM.ref.mthZINT_GETVF_AC001OBJECT(l.s.AsNativeString(P0.getVALUE())),"VF_FP002O"));}else if(r.ln=595,l.n.eq(v1,104)){r.ln=596;m.PTY_UUSERREORDERTABS.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}r.ln=598;}}}r.ln=602;r.e();};cO.mthZINT_SHOWCOMMANDHANDLERCHOICEMENU=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_ShowCommandHandlerChoiceMenu",605);var P0=r.cPD("USEBUSYPANEL");var P1=r.cP("WITHINSTANCEREFERENCEKEY","PRIM_ALPH");
var P2=r.cP("IGNOREENABLEMENT","PRIM_BOLN");P0=r.sR("USEBUSYPANEL",p0);P1.set(p1);P2.set(p2);var C0=r.cF("COUNT",Fd.F1.Dc);var C1=r.cD("C1");var C2=r.cR("SHOWASENABLED","PRIM_BOLN");var C3=r.cD("C3");C0.iC();C2.iC();r.ln=605;{r.ln=617;if((m.TEMPCOMMANDHANDLERCHOICEMENU==null)){r.ln=619;this.setrefTEMPCOMMANDHANDLERCHOICEMENU(l.cC("VF_UI008O"));r.ln=621;m.TEMPCOMMANDHANDLERCHOICEMENU.mthZINT_INITIALIZE(true,false,"",true);r.ln=623;{var l1=m.VF_FP010OHANDLERS.cI();while(l1.step()){var HANDLER=r.sR("HANDLER",l1.item());
r.ln=624;C1=r.sR("C1",HANDLER.getVF_FP009REFERENCE());r.ln=625;if((C1!=null)){r.ln=626;m.TEMPCOMMANDHANDLERCHOICEMENU.mthZINT_PUTMENUITEM(C1.getUCAPTION(),"",C1.getUVLFONEIMAGE(),C1.getUIMAGESOURCE(),u,l.or(P2.get(),HANDLER.getLOGICALLYENABLED()),HANDLER,u,u,u,u,u);}r.ln=628;}l1.end();r.dR("HANDLER");}}r.ln=633;C0.set(0);r.ln=634;{var l1=m.VF_FP010OHANDLERS.cI();while(l1.step()){var HANDLER=r.sR("HANDLER",l1.item());r.ln=635;C0.set(l.add(C0.get(),1));r.ln=636;C3=r.sR("C3",m.TEMPCOMMANDHANDLERCHOICEMENU.getMENUITEMSPANELS().get(C0.get()));
r.ln=637;C2.set(l.or(P2.get(),HANDLER.getLOGICALLYENABLED()));r.ln=638;C3.setEnabled(C2.get());r.ln=639;m.USYSTEM.ref.mthZINT_SETENABLEMENT(C3,C2.get());r.ln=640;}l1.end();r.dR("HANDLER");}r.ln=643;if(l.n.gt(C0.get(),0)){r.ln=644;m.TEMPCOMMANDHANDLERINSTANCEREFERENCEKEY.set(P1.get());r.ln=645;this.setrefTEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL(P0);r.ln=646;m.TEMPCOMMANDHANDLERCHOICEMENU.mthZINT_SHOW(u);}}r.ln=649;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TempCommandHandlerChoiceMenu.Closing",652);
r.ln=652;{r.ln=654;this.setrefTEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL(null);}r.ln=656;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#TempCommandHandlerChoiceMenu.ItemSelected",659);var P0=Ps.r("ASSOCIATEDREFERENCE");var C0=r.cD("C0");r.ln=659;{r.ln=663;C0=r.sR("C0",P0);r.ln=665;C0.mthZINT_EXECUTECOMMANDHANDLER(m.TEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL,null,m.TEMPCOMMANDHANDLERINSTANCEREFERENCEKEY);r.ln=667;this.setrefTEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL(null);}r.ln=669;r.e();};cO.mthZINT_GOBUSY=function(p0,p1,p2,p3)
{var m=this.REF,r=l.mR(this,cO,"zInt_GoBusy",672);var P0=r.cPD("OVERPANEL");var P1=r.cPD("SHOWBUSYTEXT");var P2=r.cPD("ANIMATED");var P3=r.cPD("WAITFOR");P0=r.sR("OVERPANEL",p0);P1=r.sR("SHOWBUSYTEXT",p1);P2=r.sR("ANIMATED",p2);P3=r.sR("WAITFOR",p3);r.ln=672;{r.ln=679;if((m.BUSYSTATECHAIN==null)){r.ln=680;this.setrefBUSYSTATECHAIN(l.cC("VF_SY175O"));}r.ln=684;m.BUSYSTATECHAIN.mthZINT_GOBUSY(P0,P1,P2,P3);}r.ln=686;r.e();};cO.mthZINT_GOFREE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_GoFree",689);
r.ln=689;{r.ln=691;if((m.BUSYSTATECHAIN!=null)){r.ln=692;m.BUSYSTATECHAIN.mthZINT_GOFREE();}}r.ln=695;r.e();};cO.getVF_FP010OHANDLERS=function(){return this.REF.VF_FP010OHANDLERS;};cO.getREALDEFAULTVF_FP010OHANDLER=function(){return this.REF.REALDEFAULTVF_FP010OHANDLER;};cO.setREALDEFAULTVF_FP010OHANDLER=function(v){this.setrefREALDEFAULTVF_FP010OHANDLER(v);};cO.getCURRENTDEFAULTVF_FP010OHANDLER=function(){return this.REF.CURRENTDEFAULTVF_FP010OHANDLER;};cO.setCURRENTDEFAULTVF_FP010OHANDLER=function(v)
{this.setrefCURRENTDEFAULTVF_FP010OHANDLER(v);};cO.getVF_FP017OPROPERTIES=function(){return this.REF.VF_FP017OPROPERTIES;};cO.getOWNERVF_FP002OBJECT=function(){return this.REF.OWNERVF_FP002OBJECT;};cO.setOWNERVF_FP002OBJECT=function(v){this.setrefOWNERVF_FP002OBJECT(v);};cO.getAUTOTILINGROOTSEQUENCE=function(){return this.mthGET_AUTOTILINGROOTSEQUENCE();};cO.getUCURRENTTHEMECOLOR=function(){return this.mthGET_UCURRENTTHEMECOLOR();};cO.getUUSERREORDERTABS=function(){return this.mthGET_UUSERREORDERTABS();
};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});}cO.setrefREALDEFAULTVF_FP010OHANDLER=function(rn){this.sR("REALDEFAULTVF_FP010OHANDLER",rn);};cO.setrefCURRENTDEFAULTVF_FP010OHANDLER=function(rn){this.sR("CURRENTDEFAULTVF_FP010OHANDLER",rn);};cO.setrefOWNERVF_FP002OBJECT=function(rn){this.sR("OWNERVF_FP002OBJECT",rn);};cO.setrefBUSYSTATECHAIN=function(rn)
{this.sR("BUSYSTATECHAIN",rn);};cO.setrefOBJECTLEVELCOMMANDEXECUTOR=function(rn){if(this.REF.OBJECTLEVELCOMMANDEXECUTOR!=null){this.REF.OBJECTLEVELCOMMANDEXECUTOR.rH("UTERMINATED",this,e4);}this.sR("OBJECTLEVELCOMMANDEXECUTOR",rn);if(this.REF.OBJECTLEVELCOMMANDEXECUTOR!=null){this.REF.OBJECTLEVELCOMMANDEXECUTOR.aH("UTERMINATED",this,e4);}};cO.setrefHIDDENLEVELCOMMANDEXECUTOR=function(rn){if(this.REF.HIDDENLEVELCOMMANDEXECUTOR!=null){this.REF.HIDDENLEVELCOMMANDEXECUTOR.rH("UTERMINATED",this,e2);}this.sR("HIDDENLEVELCOMMANDEXECUTOR",rn);
if(this.REF.HIDDENLEVELCOMMANDEXECUTOR!=null){this.REF.HIDDENLEVELCOMMANDEXECUTOR.aH("UTERMINATED",this,e2);}};cO.setrefTEMPCOMMANDHANDLERCHOICEMENU=function(rn){if(this.REF.TEMPCOMMANDHANDLERCHOICEMENU!=null){this.REF.TEMPCOMMANDHANDLERCHOICEMENU.rH("CLOSING",this,e5);this.REF.TEMPCOMMANDHANDLERCHOICEMENU.rH("ITEMSELECTED",this,e6);}this.sR("TEMPCOMMANDHANDLERCHOICEMENU",rn);if(this.REF.TEMPCOMMANDHANDLERCHOICEMENU!=null){this.REF.TEMPCOMMANDHANDLERCHOICEMENU.aH("CLOSING",this,e5);this.REF.TEMPCOMMANDHANDLERCHOICEMENU.aH("ITEMSELECTED",this,e6);
}};cO.setrefTEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL=function(rn){this.sR("TEMPCOMMANDHANDLERCHOICEMENUBUSYPANEL",rn);};},{rc:["VF_AC001O","VF_SY001O","VF_SY001X"],rp:["PRIM_ACOL","PRIM_FLD","PRIM_ALPH","PRIM_BOLN"],dc:["VF_FP010O","VF_FP002O","VF_SY175O","VF_UM012O","VF_UI008O","VF_FP017O","VF_FP009O"],dp:["PRIM_PANL","PRIM_ALPH","PRIM_BOLN"]});