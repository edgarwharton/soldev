﻿LANSA.addComponent({id:"VF_UI004O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Application Tab Sheet Manager",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]},F2:{ic:0,nm:"VF_ELURL",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{MainWindowTitleBar:{da:"r"},CurrentlyDisplayedVF_UI002O:{da:"r"},VF_UI002OChildren:{da:"r"}},mt:{zInt_Initialize:{},zInt_GetTotalPaneCount:{ps:{"ForApplication":{pt:"i"}}},zInt_FullyTerminateNow:{},zInt_InitiateTermination:{},zInt_AddTab:{ps:{"Caption":{pt:"i"},"ImageReferenceName":{pt:"i"},"VF_AC001OReference":{pt:"i"}}},zInt_DisplayTab:
{ps:{"VF_UI020Reference":{pt:"i"}}}},ev:{HasBeenTerminatedDuringShutdown:{}},co:function(){cO.aN.call(this);this.aF("VF_UI004O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("UFRAMEWORK","VF_FP001O");var C2=this.cR("MAIN_PANEL_LAYOUTMANAGER","PRIM_ATLM");var C3=this.cR("ATTACHITEM1","PRIM_ATLI");var C4=this.cR("ATTACHITEM2","PRIM_ATLI");var C5=this.cR("ATTACHTOOLBAR","PRIM_ATLI");var C6=this.cR("ATTACHSTATUSBAR","PRIM_ATLI");var C7=this.cR("APPLICATIONPANEL","VF_UI022O");var C8=this.cR("VIRTUALTABCONTAINER","VF_UI030O");
this.cD("TOOLBAR");this.cD("STATUSMANAGER");this.cD("MESSAGEPRESENTER");this.cD("CURRENTLYDISPLAYEDVF_UI002O");var C13=this.cR("VF_UI002OCHILDREN","PRIM_ACOL");this.cD("APPLICATIONABOUTPANELCONTENT");var C15=this.cR("APPLICATIONABOUTPANELPOPOVER","VF_UI021O");this.cD("FRAMEWORKABOUTPANELCONTENT");var C17=this.cR("FRAMEWORKABOUTPANELPOPOVER","VF_UI021O");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setParent(C2);C3.setAttachment("TOP");C3.setManage(C7);
C3.iC();C4.setManage(C8);C4.setParent(C2);C4.setAttachment("CENTER");C4.iC();C5.setParent(C2);C5.setAttachment("TOP");C5.iC();C6.setParent(C2);C6.setAttachment("BOTTOM");C6.iC();C7.setParent(this);C7.setWidth(500);C7.iC();C8.setParent(this);C8.setDisplayPosition(2);C8.setTabPosition(2);C8.setHeight(238);C8.setTop(32);C8.setWidth(500);C8.iC();C13.setCollects("VF_UI002O");C13.iC();C15.iC();C17.iC();C0.aH("REQUESTAPPLICATIONTABDISPLAY",this,e2);C0.aH("REQUESTFRAMEWORKTABDISPLAY",this,e3);C0.aH("REQUESTAPPLICATIONABOUT",this,e4);
C0.aH("REQUESTFRAMEWORKABOUT",this,e5);C0.aH("REQUESTSHORTCUT",this,e8);C0.aH("MAINFORMSIZECHANGED",this,e10);C13.aH("HASBEENTERMINATEDDURINGSHUTDOWN",this,e1);this.setDisplayPosition(1);this.setHeight(270);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setLayoutManager(C2);}});cO.mthZINT_INITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",49);var C0=r.cF("MONITORINSTANCES",Fd.F1.Dc);var C1=r.cF("LOCALTIMER",Fd.F1.Dc);var C2=r.cF("LOCALTIMERAPP",Fd.F1.Dc);
C0.iC();C1.iC();C2.iC();r.ln=49;{r.ln=56;m.USYSTEM.ref.mthZINT_STARTTIMING(C1);r.ln=58;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=60;this.setrefMESSAGEPRESENTER(l.cC("VF_UI029O"));r.ln=62;m.USYSTEM.ref.mthZINT_ENDTIMING(C1,"Message presenter created",false,this);r.ln=64;m.MESSAGEPRESENTER.setParent(this);r.ln=66;m.MESSAGEPRESENTER.mthZINT_INITIALIZE(false,1,false);r.ln=68;m.USYSTEM.ref.mthZINT_ENDTIMING(C1,"Message presenter initialized",false,this);}else{r.ln=83;if(l.n.gt(m.UFRAMEWORK.ref.getUCHILDTOOLBARITEMS().getItemCount(),0))
{r.ln=85;this.setrefTOOLBAR(l.cC("VF_UM004O"));r.ln=87;m.TOOLBAR.setParent(this);m.TOOLBAR.setDisplayPosition(2);r.ln=89;m.ATTACHTOOLBAR.setManage(m.TOOLBAR);r.ln=91;m.TOOLBAR.mthZINT_INITIALIZE();r.ln=93;m.USYSTEM.ref.mthZINT_ENDTIMING(C1,"Tool Bar initialized",false,this);}r.ln=97;this.setrefSTATUSMANAGER(l.cC("VF_UM007O"));r.ln=99;m.STATUSMANAGER.setParent(this);r.ln=101;m.ATTACHSTATUSBAR.setManage(m.STATUSMANAGER);r.ln=103;m.STATUSMANAGER.mthZINT_INITIALIZE();r.ln=105;m.USYSTEM.ref.mthZINT_ENDTIMING(C1,"Status bar initialized",false,this);
}r.ln=112;m.USYSTEM.ref.mthZINT_STARTTIMING(C1);r.ln=114;m.VIRTUALTABCONTAINER.mthZINT_INITIALIZE();r.ln=116;m.USYSTEM.ref.mthZINT_ENDTIMING(C1,"Virtual tab container initialized",false,this);r.ln=120;this.mthZINT_ADDTAB(m.UFRAMEWORK.ref.getUCAPTION(),m.UFRAMEWORK.ref.getUVLFONEIMAGE(),m.UFRAMEWORK.ref);r.ln=121;m.USYSTEM.ref.mthZINT_ENDTIMING(C1,"Framework tab created",false,this);r.ln=125;m.APPLICATIONPANEL.mthZINT_INITIALIZE();r.ln=126;m.USYSTEM.ref.mthZINT_ENDTIMING(C1,"Application panel initialized",false,this);
r.ln=129;{var l1=m.UFRAMEWORK.ref.getUCHILDAPPLICATIONS().cI();while(l1.step()){var APPLICATION=r.sR("APPLICATION",l1.item());r.ln=131;m.USYSTEM.ref.mthZINT_STARTTIMING(C2);r.ln=133;this.mthZINT_ADDTAB(APPLICATION.getUCAPTION(),APPLICATION.getUVLFONEIMAGE(),APPLICATION);r.ln=135;m.USYSTEM.ref.mthZINT_ENDTIMING(C2,l.cat(l.add("Application ",APPLICATION.getUCAPTION())," tab added"),false,this);r.ln=137;}l1.end();r.dR("APPLICATION");}r.ln=139;m.USYSTEM.ref.mthZINT_ENDTIMING(C1,"All Application tabs created",false,this);
r.ln=142;if((m.STATUSMANAGER!=null)){r.ln=143;m.STATUSMANAGER.setUUSER(m.USYSTEM.ref.getFRAMEWORKLOGGEDONVISIBLEUSERPROFILE());}}r.ln=146;r.e();};cO.mthZINT_GETTOTALPANECOUNT=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_GetTotalPaneCount",149);var P0=r.cPD("FORAPPLICATION");var P1=r.cPF("COUNT",Fd.F1.Dc);P0=r.sR("FORAPPLICATION",p0);r.ln=149;{r.ln=155;{var l1=m.VF_UI002OCHILDREN.cI();while(l1.step()){var VF_UI002OCHILD=r.sR("VF_UI002OCHILD",l1.item());r.ln=156;if((VF_UI002OCHILD.getCURRENTMANAGINGVF_FP002OREFERENCE()===P0))
{r.ln=157;P1.set(VF_UI002OCHILD.getVF_AC005OTOTALPANECOUNT());l1.end();return r.rV(P1.get());}r.ln=160;}l1.end();r.dR("VF_UI002OCHILD");}}r.ln=162;return r.rV(P1.get());};cO.mthZINT_FULLYTERMINATENOW=function(){var m=this.REF,r=l.mR(this,cO,"zInt_FullyTerminateNow",165);r.ln=165;{r.ln=167;m.VF_UI002OCHILDREN.mthREMOVEALL();r.ln=169;this.setrefCURRENTLYDISPLAYEDVF_UI002O(null);r.ln=171;if((m.APPLICATIONABOUTPANELCONTENT!=null)){r.ln=172;m.APPLICATIONABOUTPANELCONTENT.mthZINT_TERMINATE();r.ln=173;this.setrefAPPLICATIONABOUTPANELCONTENT(null);
}r.ln=176;if((m.FRAMEWORKABOUTPANELCONTENT!=null)){r.ln=177;m.FRAMEWORKABOUTPANELCONTENT.mthZINT_TERMINATE();r.ln=178;this.setrefFRAMEWORKABOUTPANELCONTENT(null);}r.ln=181;if((m.TOOLBAR!=null)){r.ln=182;m.TOOLBAR.mthZINT_TERMINATE();r.ln=183;this.setrefTOOLBAR(null);}r.ln=186;if((m.STATUSMANAGER!=null)){r.ln=187;m.STATUSMANAGER.mthZINT_TERMINATE();r.ln=188;this.setrefSTATUSMANAGER(null);}r.ln=191;if((m.MESSAGEPRESENTER!=null)){r.ln=192;m.MESSAGEPRESENTER.mthZINT_TERMINATE();r.ln=193;this.setrefMESSAGEPRESENTER(null);
}r.ln=201;m.APPLICATIONPANEL.mthZINT_TERMINATE();r.ln=203;m.VIRTUALTABCONTAINER.mthZINT_TERMINATE();r.ln=205;m.USYSTEM.ref.setFRAMEWORKTABSHEETMANAGER(null);r.ln=207;m.USYSTEM.ref.setFRAMEWORKTABFOLDERTMANAGER(null);r.ln=209;this.fE("HASBEENTERMINATEDDURINGSHUTDOWN");}r.ln=211;r.e();};function e1(VFUI002OCHILD,Ps){var m=this.REF,r=l.eR(this,cO,"#VF_UI002OChildren<>.HasBeenTerminatedDuringShutdown",215);r.ln=215;{r.ln=217;m.VF_UI002OCHILDREN.mthREMOVE(VFUI002OCHILD);r.ln=219;if(l.n.le(m.VF_UI002OCHILDREN.getItemCount(),0))
{r.ln=220;this.mthZINT_FULLYTERMINATENOW();}}r.ln=223;r.e();};cO.mthZINT_INITIATETERMINATION=function(){var m=this.REF,r=l.mR(this,cO,"zInt_InitiateTermination",228);r.ln=228;{r.ln=230;if(l.n.gt(m.VF_UI002OCHILDREN.getItemCount(),0)){r.ln=231;for(var l1=m.VF_UI002OCHILDREN.cI();l1.step();){l1.item().mthZINT_INITIATETERMINATION()};}else{r.ln=233;this.mthZINT_FULLYTERMINATENOW();}}r.ln=236;r.e();};cO.mthZINT_ADDTAB=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_AddTab",239);var P0=r.cP("CAPTION","PRIM_DC","UnicodeString");
var P1=r.cPF("IMAGEREFERENCENAME",Fd.F2.Dc);var P2=r.cPD("VF_AC001OREFERENCE");P0.set(p0);P1.set(p1);P2=r.sR("VF_AC001OREFERENCE",p2);var C0=r.cD("C0");r.ln=239;{r.ln=249;C0=r.sR("C0",l.cC("VF_UI002O"));r.ln=250;m.VF_UI002OCHILDREN.mthINSERT(C0);r.ln=253;if((P2===m.UFRAMEWORK.ref)){r.ln=254;m.USYSTEM.ref.setFRAMEWORKTABSHEETMANAGER(C0);}r.ln=258;C0.setVisible(false);r.ln=260;if((P2===m.UFRAMEWORK.ref)){r.ln=261;C0.mthZINT_INITIALIZELIGHT(null);}else{r.ln=263;C0.mthZINT_INITIALIZELIGHT(l.cast(P2,"VF_FP002O"));
}r.ln=267;if((m.CURRENTLYDISPLAYEDVF_UI002O==null)){r.ln=268;this.mthZINT_DISPLAYTAB(C0);}}r.ln=271;r.e();};cO.mthZINT_DISPLAYTAB=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_DisplayTab",274);var P0=r.cPD("VF_UI020REFERENCE");P0=r.sR("VF_UI020REFERENCE",p0);var C0=r.cD("C0");var C1=r.cR("UANYCONSTANTPARENTREQUIRED","PRIM_BOLN");C1.iC();r.ln=274;{r.ln=282;if((P0!==m.CURRENTLYDISPLAYEDVF_UI002O)){r.ln=284;if((m.USYSTEM.ref.getMAINWINDOWSLIDERBAR()!=null)){r.ln=285;m.USYSTEM.ref.getMAINWINDOWSLIDERBAR().mthZINT_DETACHFROM(null);
}r.ln=288;C0=r.sR("C0",m.CURRENTLYDISPLAYEDVF_UI002O);r.ln=290;this.setrefCURRENTLYDISPLAYEDVF_UI002O(P0);r.ln=294;m.CURRENTLYDISPLAYEDVF_UI002O.mthZINT_INITIALIZEHEAVY();r.ln=296;m.CURRENTLYDISPLAYEDVF_UI002O.setParent(m.VIRTUALTABCONTAINER.getMAINCENTERPANE());r.ln=298;m.VIRTUALTABCONTAINER.getMAINCENTERPANEATTACHMENTITEM().setManage(m.CURRENTLYDISPLAYEDVF_UI002O);r.ln=302;if((C0!=null)){r.ln=304;C0.mthZINT_DETTACHZOOMCONTROL();r.ln=306;m.USYSTEM.ref.mthZINT_DEACTIVATEVF_AC034OOBJECTS(C0,null,false,C1,true);
r.ln=309;if(l.b.Not(C1.get())){r.ln=310;C0.setParent(null);}r.ln=313;C0.setVisible(false);r.ln=315;C0.mthZINT_BECOMEBACKPANE();}r.ln=321;m.CURRENTLYDISPLAYEDVF_UI002O.mthZINT_ATTACHZOOMCONTROL();r.ln=322;m.CURRENTLYDISPLAYEDVF_UI002O.mthZINT_BECOMEFRONTPANE();r.ln=323;m.CURRENTLYDISPLAYEDVF_UI002O.setDisplayPosition(1);r.ln=326;m.USYSTEM.ref.mthZINT_ACTIVATEVF_AC034OOBJECTS(m.CURRENTLYDISPLAYEDVF_UI002O,null,false,true);r.ln=331;m.CURRENTLYDISPLAYEDVF_UI002O.mthZINT_TAKEALLCONTENTSHIELDSOFF();}r.ln=337;
m.CURRENTLYDISPLAYEDVF_UI002O.mthZINT_EXECUTEDEFAULTCOMMAND();}r.ln=339;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Usystem.RequestApplicationTabDisplay",342);var P0=Ps.r("VF_FP002OREFERENCE");r.ln=342;{r.ln=346;{var l1=m.VF_UI002OCHILDREN.cI();while(l1.step()){var VF_UI002OCHILD=r.sR("VF_UI002OCHILD",l1.item());r.ln=347;if((VF_UI002OCHILD.getCURRENTMANAGINGVF_FP002OREFERENCE()===P0)){r.ln=349;this.mthZINT_DISPLAYTAB(VF_UI002OCHILD);l1.end();r.e();return;}r.ln=354;}l1.end();r.dR("VF_UI002OCHILD");
}}r.ln=356;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Usystem.RequestFrameworkTabDisplay",359);r.ln=359;{r.ln=363;{var l1=m.VF_UI002OCHILDREN.cI();while(l1.step()){var VF_UI002OCHILD=r.sR("VF_UI002OCHILD",l1.item());r.ln=364;if((VF_UI002OCHILD.getCURRENTMANAGINGVF_FP002OREFERENCE()==null)){r.ln=365;this.mthZINT_DISPLAYTAB(VF_UI002OCHILD);l1.end();r.e();return;}r.ln=368;}l1.end();r.dR("VF_UI002OCHILD");}}r.ln=370;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Usystem.RequestApplicationAbout",374);
var C0=r.cF("MARGIN",Fd.F1.Dc);C0.iC();r.ln=374;{r.ln=378;if(l.and((m.CURRENTLYDISPLAYEDVF_UI002O!=null),(m.CURRENTLYDISPLAYEDVF_UI002O.getCURRENTMANAGINGVF_FP002OREFERENCE()!=null))){r.ln=380;if((m.APPLICATIONABOUTPANELCONTENT==null)){r.ln=381;this.setrefAPPLICATIONABOUTPANELCONTENT(l.cAs("VF_UI024O"));r.ln=382;m.APPLICATIONABOUTPANELCONTENT.getStyles().mthADD(m.USYSTEM.ref.getCURRENTTHEME().getBASEFORMBACKGROUNDANDFONT());r.ln=383;m.APPLICATIONABOUTPANELCONTENT.mthZINT_INITIALIZE();r.ln=384;m.APPLICATIONABOUTPANELPOPOVER.mthZINT_INITIALIZE(m.APPLICATIONABOUTPANELCONTENT);
}r.ln=387;if(l.n.le(m.USYSTEM.ref.getUIFORMFACTOR(),m.USYSTEM.ref.getUIFORMFACTOR_SMALL())){r.ln=388;C0.set(5);}else{r.ln=390;C0.set(100);}r.ln=393;m.APPLICATIONABOUTPANELCONTENT.mthZINT_PREPARECONTENT(m.CURRENTLYDISPLAYEDVF_UI002O.getCURRENTMANAGINGVF_FP002OREFERENCE(),l.sub(m.CURRENTLYDISPLAYEDVF_UI002O.getWidth(),C0.get()),l.sub(m.CURRENTLYDISPLAYEDVF_UI002O.getHeight(),C0.get()));r.ln=395;m.APPLICATIONABOUTPANELPOPOVER.mthZINT_SHOWPOPOVER(u,u,u,m.CURRENTLYDISPLAYEDVF_UI002O,"FADEINANDSCALE",false,u,u,u,u,u);
}}r.ln=399;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Usystem.RequestFrameworkAbout",403);var C0=r.cF("MARGIN",Fd.F1.Dc);C0.iC();r.ln=403;{r.ln=407;if((m.FRAMEWORKABOUTPANELCONTENT==null)){r.ln=408;this.setrefFRAMEWORKABOUTPANELCONTENT(l.cAs("VF_UI024O"));r.ln=409;m.FRAMEWORKABOUTPANELCONTENT.getStyles().mthADD(m.USYSTEM.ref.getCURRENTTHEME().getBASEFORMBACKGROUNDANDFONT());r.ln=410;m.FRAMEWORKABOUTPANELCONTENT.mthZINT_INITIALIZE();r.ln=411;m.FRAMEWORKABOUTPANELPOPOVER.mthZINT_INITIALIZE(m.FRAMEWORKABOUTPANELCONTENT);
}r.ln=414;if(l.n.le(m.USYSTEM.ref.getUIFORMFACTOR(),m.USYSTEM.ref.getUIFORMFACTOR_SMALL())){r.ln=415;C0.set(5);}else{r.ln=417;C0.set(100);}r.ln=420;m.FRAMEWORKABOUTPANELCONTENT.mthZINT_PREPARECONTENT(m.UFRAMEWORK.ref,l.sub(m.CURRENTLYDISPLAYEDVF_UI002O.getWidth(),C0.get()),l.sub(m.CURRENTLYDISPLAYEDVF_UI002O.getHeight(),C0.get()));r.ln=422;m.FRAMEWORKABOUTPANELPOPOVER.mthZINT_SHOWPOPOVER(u,u,u,m.CURRENTLYDISPLAYEDVF_UI002O,"FADEINANDSCALE",false,u,u,u,u,u);}r.ln=424;r.e();};function e6(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#ApplicationAboutPanelContent.ClosePopoverRequested",428);r.ln=428;{r.ln=430;m.APPLICATIONABOUTPANELPOPOVER.mthZINT_CLOSEPOPOVER();}r.ln=432;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#FrameworkAboutPanelContent.ClosePopoverRequested",436);r.ln=436;{r.ln=438;m.FRAMEWORKABOUTPANELPOPOVER.mthZINT_CLOSEPOPOVER();}r.ln=440;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Usystem.RequestShortCut",444);var P0=Ps.r("LOGICALOPERATION");r.ln=444;
{r.ln=446;if((m.CURRENTLYDISPLAYEDVF_UI002O!=null)){r.ln=448;m.CURRENTLYDISPLAYEDVF_UI002O.mthZINT_HANDLESHORTCUT(P0.get());}}r.ln=452;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ToolBar.UnHandledClick",455);r.ln=455;{r.ln=457;if(l.and(l.b.Not(m.USYSTEM.ref.getUIMATERIALDESIGN()),(m.CURRENTLYDISPLAYEDVF_UI002O!=null))){r.ln=459;if((m.CURRENTLYDISPLAYEDVF_UI002O.getCURRENTMANAGINGVF_FP002OREFERENCE()!=null)){r.ln=461;m.USYSTEM.ref.mthZINT_SIGNALDISPLAYBUSINESSOBJECTSELECTIONMENU(m.CURRENTLYDISPLAYEDVF_UI002O.getCURRENTMANAGINGVF_FP002OREFERENCE(),null,this);
}else{r.ln=465;m.USYSTEM.ref.mthZINT_SIGNALDISPLAYAPPLICATIONSELECTIONMENU(this);}}}r.ln=471;r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Usystem.MainFormSizeChanged",474);r.ln=474;{r.ln=476;if((m.CURRENTLYDISPLAYEDVF_UI002O!=null)){r.ln=477;m.CURRENTLYDISPLAYEDVF_UI002O.mthZINT_SCHEDULEAUTOTILING();}}r.ln=480;r.e();};cO.getMAINWINDOWTITLEBAR=function(){return this.REF.APPLICATIONPANEL;};cO.getCURRENTLYDISPLAYEDVF_UI002O=function(){return this.REF.CURRENTLYDISPLAYEDVF_UI002O;};
cO.getVF_UI002OCHILDREN=function(){return this.REF.VF_UI002OCHILDREN;};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELURL"});}cO.setrefTOOLBAR=function(rn){if(this.REF.TOOLBAR!=null){this.REF.TOOLBAR.rH("UNHANDLEDCLICK",this,e9);}this.sR("TOOLBAR",rn);if(this.REF.TOOLBAR!=null){this.REF.TOOLBAR.aH("UNHANDLEDCLICK",this,e9);}};cO.setrefSTATUSMANAGER=function(rn)
{this.sR("STATUSMANAGER",rn);};cO.setrefMESSAGEPRESENTER=function(rn){this.sR("MESSAGEPRESENTER",rn);};cO.setrefCURRENTLYDISPLAYEDVF_UI002O=function(rn){this.sR("CURRENTLYDISPLAYEDVF_UI002O",rn);};cO.setrefAPPLICATIONABOUTPANELCONTENT=function(rn){if(this.REF.APPLICATIONABOUTPANELCONTENT!=null){this.REF.APPLICATIONABOUTPANELCONTENT.rH("CLOSEPOPOVERREQUESTED",this,e6);}this.sR("APPLICATIONABOUTPANELCONTENT",rn);if(this.REF.APPLICATIONABOUTPANELCONTENT!=null){this.REF.APPLICATIONABOUTPANELCONTENT.aH("CLOSEPOPOVERREQUESTED",this,e6);
}};cO.setrefFRAMEWORKABOUTPANELCONTENT=function(rn){if(this.REF.FRAMEWORKABOUTPANELCONTENT!=null){this.REF.FRAMEWORKABOUTPANELCONTENT.rH("CLOSEPOPOVERREQUESTED",this,e7);}this.sR("FRAMEWORKABOUTPANELCONTENT",rn);if(this.REF.FRAMEWORKABOUTPANELCONTENT!=null){this.REF.FRAMEWORKABOUTPANELCONTENT.aH("CLOSEPOPOVERREQUESTED",this,e7);}};},{rc:["VF_SY001O","VF_FP001O","VF_UI022O","VF_UI030O","VF_UI021O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_ACOL","PRIM_FLD"],dc:["VF_UM004O","VF_UM007O","VF_UI029O","VF_UI002O","VF_UI024O"],
dp:["PRIM_BOLN"]});