﻿LANSA.addComponent({id:"VF_FR003O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Execution Time VF_FP003 (VLF-ONE)",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var c1=l.cDec("42.56"),c2=l.cDec("516.272"),c3=l.cDec("456.67"),c4=l.cDec("2517.44"),c5=l.cDec("12.5676"),c6=l.cDec("26.77278"),c7=l.cDec("56.87"),c8=l.cDec("56.78"),c9=l.cDec("666666.666666"),c10=l.cDec("777777.777777"),c11=l.cDec("888888.888888"),c12=l.cDec("999999.999999"),c13=l.cDec("101010.101010");
var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F2:{ic:0,nm:"STD_NUM",ft:"P",ln:7,dc:0,ec:"A",lb:{"ENG":"Number","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Number","FRA":"?","JPN":"?"}[cL],h3:"",
de:{"ENG":"Standard Number","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F3:{ic:0,nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]},F4:{nm:"NEXTACOLUMN1",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",
dv:516272,ia:["FE","RB"]},F5:{nm:"NEXTACOLUMN2",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",dv:2517,ia:["FE","RB"]},F6:{nm:"NEXTACOLUMN3",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",dv:2677278,ia:["FE","RB"]},F7:{nm:"NEXTACOLUMN4",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",dv:7262,ia:["FE","RB"]},F8:{nm:"NEXTACOLUMN5",
ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",dv:7862372,ia:["FE","RB"]},F9:{nm:"NEXTNCOLUMN1",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:c2,ia:["RB","FE"]},F10:{nm:"NEXTNCOLUMN2",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:c4,ia:["RB","FE"]},F11:{nm:"NEXTNCOLUMN3",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",
h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:c6,ia:["RB","FE"]},F12:{nm:"NEXTNCOLUMN4",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:7262,ia:["RB","FE"]},F13:{nm:"NEXTNCOLUMN5",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:234,ia:["RB","FE"]}};var cO=l.rC(oI,{an:"VF_AC009O",fd:Fd,pt:{ParentVF_FR003O:{da:"rw"},RootVF_FR003O:{da:"na"},
InstanceListManager:{da:"na"},SnapInInstanceListBrowserName:{da:"na"},SnapInInstanceItemPaneName:{da:"r"},SnapInInstanceListToolBar:{da:"r"},Filters:{da:"r"},uFilterCount:{da:"na"},InstanceListColumns:{da:"r"},uAllowClearButton:{da:"na"},uDblClickInstList:{da:"na"},uMenuSelect:{da:"na"},uOrdColInstList:{da:"na"},uShowSelectColumnsImage:{da:"na"},uMultipleSelect:{da:"na"},uEnablePopupPanels:{da:"na"},UserHasDisabledPopUps:{da:"na"},uVLFONEPopUpPanel:{da:"na"},uMiniBarLoc:{da:"r"},uQuickSearchWord:
{da:"na"},uSEFieldWidth:{da:"na"},uInitialInstanceListWidthONE:{da:"na"},uInitialInstanceListHeightONE:{da:"na"},uInitialInstanceListRowHeightONE:{da:"na"},uDesignerMaxInstancesOpen:{da:"na"},uUserMaxInstancesOpen:{da:"rw"},uRelationShipType:{da:"r"},uRelationShipHandlerId:{da:"r"},uRelationshipHandler:{da:"r"},uSendtoCSV:{da:"na"},uSendtoCSVPrefix:{da:"na"},HitServerinDemoPrograms:{da:"rw"},HasSubtypes:{da:"rw"},uVLFONEServerHandler:{da:"r"},RelatedBusinessObjects:{da:"r"},CanHaveChildren:{da:"r"
},CanHavePeers:{da:"r"},TreeLevel:{da:"r"},RelatedBusinessObjectsbyUserType:{da:"r"},CurrentVF_UM010O:{da:"na"}},mt:{zInt_EnrollChild:{ps:{"uReference":{pt:"i"}}},zInt_SetProperty:{ps:{"P":{pt:"i"}}},zInt_ShowPopupPanel:{ps:{"InstanceListEntry":{pt:"i"}}},zInt_TerminatePopupPanel:{},zInt_HidePopupPanel:{},zInt_SignalSentToCSVRequested:{},zInt_CreateSampleInstance:{ps:{"UseAKey":{pt:"i"},"UseNKey":{pt:"i"},"uParentKeyLevel":{pt:"i"},"UseParentDataItem":{pt:"i"},"ListManager":{pt:"i"},"OverrideCaption":
{pt:"i"}}},zInt_ExecuteRelationshipHandler:{ps:{"ForParentDataItem":{pt:"i"}}},zInt_TerminateRelationshipHandlers:{},zInt_LoadSavedColumnDetails:{},zInt_SaveColumnDetails:{}},ev:{SentToCSVRequested:{}},co:function(){cO.aN.call(this);this.aF("VF_FR003O",Fd);this.cD("PARENTVF_FR003O");var C1=this.cR("SNAPININSTANCELISTBROWSERNAME","PRIM_ALPH");var C2=this.cR("SNAPININSTANCEITEMPANENAME","PRIM_ALPH");var C3=this.cR("SNAPININSTANCELISTTOOLBAR","PRIM_ALPH");var C4=this.cR("FILTERS","PRIM_ACOL");var C5=this.cR("INSTANCELISTCOLUMNS","PRIM_SACO");
var C6=this.cR("PTY_UALLOWCLEARBUTTON","PRIM_BOLN");var C7=this.cR("PTY_UDBLCLICKINSTLIST","PRIM_BOLN");var C8=this.cR("PTY_UMENUSELECT","PRIM_BOLN");var C9=this.cR("PTY_UORDCOLINSTLIST","PRIM_BOLN");var C10=this.cR("PTY_USHOWSELECTCOLUMNSIMAGE","PRIM_BOLN");var C11=this.cR("PTY_UMULTIPLESELECT","PRIM_BOLN");var C12=this.cR("PTY_UENABLEPOPUPPANELS","PRIM_BOLN");var C13=this.cR("USERHASDISABLEDPOPUPS","PRIM_BOLN");var C14=this.cR("PTY_UVLFONEPOPUPPANEL","PRIM_ALPH");var C15=this.cR("PTY_UMINIBARLOC","PRIM_ALPH");
var C16=this.cR("PTY_UQUICKSEARCHWORD","PRIM_DC","UnicodeString");var C17=this.cR("PTY_USEFIELDWIDTH","PRIM_NMBR");var C18=this.cR("PTY_UINITIALINSTANCELISTWIDTHONE","PRIM_NMBR");var C19=this.cR("PTY_UINITIALINSTANCELISTHEIGHTONE","PRIM_NMBR");var C20=this.cF("PTY_UINITIALINSTANCELISTROWHEIGHTONE",Fd.F1.Dc);var C21=this.cF("PTY_UDESIGNERMAXINSTANCESOPEN",Fd.F1.Dc);var C22=this.cF("PTY_UUSERMAXINSTANCESOPEN",Fd.F1.Dc);this.cD("POPUPPANEL");var C24=this.cR("PTY_URELATIONSHIPTYPE","PRIM_ALPH");var C25=this.cR("PTY_URELATIONSHIPHANDLERID","PRIM_ALPH");
var C26=this.cR("RELATIONSHIPHANDLERLOADATTEMPTED","PRIM_BOLN");this.cD("URELATIONSHIPHANDLER");var C28=this.cR("PTY_USENDTOCSV","PRIM_BOLN");var C29=this.cR("PTY_USENDTOCSVPREFIX","PRIM_ALPH");var C30=this.cR("SAMPLEDATAGENERATIONINPROGRESS","PRIM_BOLN");var C31=this.cR("PTY_HITSERVERINDEMOPROGRAMS","PRIM_BOLN");var C32=this.cR("PTY_HASSUBTYPES","PRIM_BOLN");var C33=this.cR("UVLFONESERVERHANDLER","PRIM_ALPH");var C34=this.cR("RELATEDBUSINESSOBJECTS","PRIM_ACOL");var C35=this.cR("PTY_CANHAVECHILDREN","PRIM_BOLN");
var C36=this.cR("PTY_CANHAVEPEERS","PRIM_BOLN");var C37=this.cF("PTY_TREELEVEL",Fd.F1.Dc);var C38=this.cR("RELATEDBUSINESSOBJECTSBYUSERTYPE","PRIM_KCOL");var C39=this.cR("LOADEDSAVEDCOLUMNDETAILS","PRIM_BOLN");this.cD("CURRENTVF_UM010O");C1.iC();C2.iC();C3.iC();C4.setCollects("VF_FP014O");C4.iC();C5.setCollects("VF_FP200O");C5.iC();C6.iC();C7.iC();C8.iC();C9.iC();C10.iC();C11.iC();C12.iC();C13.iC();C14.iC();C15.iC();C16.iC();C17.iC();C18.iC();C19.iC();C20.aD();C20.iC();C21.aD();C21.iC();C22.aD();
C22.iC();C24.iC();C25.iC();C26.iC();C28.iC();C29.iC();C30.iC();C31.iC();C32.iC();C33.iC();C34.setCollects("VF_FR003O");C34.iC();C35.iC();C36.iC();C37.aD();C37.iC();C38.setStyle("COLLECTION");C38.setCollects("VF_FR003O");C38.setKeyedBy(Fd.F3.Dc);C38.iC();C39.iC();C5.aH("DISPLAYPOSITIONCHANGED",this,e2);C5.aH("COMPARE",this,e3);this.aH("CREATEINSTANCE",this,e1);}});var cA=cO.aN.prototype;cO.mthGET_UFILTERCOUNT=function(){var m=this.REF,r=l.pR(this,cO,"Get_uFilterCount",177);var P0=r.cPF("COUNT",Fd.F1.Dc);
r.ln=177;{r.ln=179;P0.set(m.FILTERS.getItemCount());}r.ln=180;return r.rV(P0.get());};cO.mthGET_UDESIGNERMAXINSTANCESOPEN=function(){var m=this.REF,r=l.pR(this,cO,"Get_uDesignerMaxInstancesOpen",184);var P0=r.cPF("COUNT",Fd.F1.Dc);r.ln=184;{r.ln=187;P0.set(m.PTY_UDESIGNERMAXINSTANCESOPEN.get());r.ln=192;if((l.n.gt(P0.get(),1)&&l.n.gt(this.REF.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVUSERCAPABILITY().getOVERRIDEOPENBUSINESSOBJECTINSTANCES(),0))){r.ln=194;P0.set(this.REF.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVUSERCAPABILITY().getOVERRIDEOPENBUSINESSOBJECTINSTANCES());
}}r.ln=198;return r.rV(P0.get());};cO.mthGET_ROOTVF_FR003O=function(){var m=this.REF,r=l.pR(this,cO,"Get_RootVF_FR003O",201);var P0=r.cPD("REFERENCE");r.ln=201;{r.ln=204;if((m.PARENTVF_FR003O==null)){r.ln=205;P0=r.sR("P0",this);}else{r.ln=207;P0=r.sR("P0",m.PARENTVF_FR003O.getROOTVF_FR003O());}}r.ln=210;return r.rR(P0);};cO.mthGET_CURRENTVF_UM010O=function(){var m=this.REF,r=l.pR(this,cO,"Get_CurrentVF_UM010O",213);var P0=r.cPD("REFERENCE");r.ln=213;{r.ln=216;if((m.PARENTVF_FR003O==null)){r.ln=217;
P0=r.sR("P0",m.CURRENTVF_UM010O);}else{r.ln=219;P0=r.sR("P0",m.PARENTVF_FR003O.getCURRENTVF_UM010O());}}r.ln=222;return r.rR(P0);};cO.mthSET_CURRENTVF_UM010O=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_CurrentVF_UM010O",225);var P0=r.cPD("REFERENCE");P0=r.sR("REFERENCE",p0);r.ln=225;{r.ln=228;if((m.PARENTVF_FR003O==null)){r.ln=229;this.setrefCURRENTVF_UM010O(P0);}else{r.ln=231;m.PARENTVF_FR003O.setCURRENTVF_UM010O(P0);}}r.ln=234;r.e();};cO.mthGET_USENDTOCSV=function(){var m=this.REF,r=l.pR(this,cO,"Get_uSendtoCSV",237);
var P0=r.cP("VALUE","PRIM_BOLN");r.ln=237;{r.ln=240;if((m.PARENTVF_FR003O==null)){r.ln=241;P0.set(m.PTY_USENDTOCSV.get());}else{r.ln=243;P0.set(m.PARENTVF_FR003O.getUSENDTOCSV());}}r.ln=246;return r.rV(P0.get());};cO.mthGET_USENDTOCSVPREFIX=function(){var m=this.REF,r=l.pR(this,cO,"Get_uSendtoCSVPrefix",249);var P0=r.cP("VALUE","PRIM_ALPH");r.ln=249;{r.ln=252;if((m.PARENTVF_FR003O==null)){r.ln=253;P0.set(m.PTY_USENDTOCSVPREFIX.get());}else{r.ln=255;P0.set(m.PARENTVF_FR003O.getUSENDTOCSVPREFIX());
}}r.ln=258;return r.rV(P0.get());};cO.mthGET_INSTANCELISTMANAGER=function(){var r=l.pR(this,cO,"Get_InstanceListManager",261);var P0=r.cPD("REFERENCE");r.ln=261;{r.ln=264;P0=r.sR("P0",this.REF.USYSTEM.ref.getINSTANCELISTCONTROLLER().mthGETINSTANCELISTREFERENCE(this,this));}r.ln=266;return r.rR(P0);};cO.mthGET_SNAPININSTANCELISTBROWSERNAME=function(){var m=this.REF,r=l.pR(this,cO,"Get_SnapInInstanceListBrowserName",269);var P0=r.cP("VALUE","PRIM_ALPH");r.ln=269;{r.ln=272;if((m.PARENTVF_FR003O==null))
{r.ln=273;P0.set(m.SNAPININSTANCELISTBROWSERNAME.get());}else{r.ln=275;P0.set(m.PARENTVF_FR003O.getSNAPININSTANCELISTBROWSERNAME());}}r.ln=278;return r.rV(P0.get());};cO.mthGET_UALLOWCLEARBUTTON=function(){var m=this.REF,r=l.pR(this,cO,"Get_uAllowClearButton",281);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=281;{r.ln=284;if((m.PARENTVF_FR003O==null)){r.ln=285;P0.set(m.PTY_UALLOWCLEARBUTTON.get());}else{r.ln=287;P0.set(m.PARENTVF_FR003O.getUALLOWCLEARBUTTON());}}r.ln=290;return r.rV(P0.get());};cO.mthGET_UMENUSELECT=function()
{var m=this.REF,r=l.pR(this,cO,"Get_uMenuSelect",293);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=293;{r.ln=296;if((m.PARENTVF_FR003O==null)){r.ln=297;P0.set(m.PTY_UMENUSELECT.get());}else{r.ln=299;P0.set(m.PARENTVF_FR003O.getUMENUSELECT());}}r.ln=302;return r.rV(P0.get());};cO.mthGET_UDBLCLICKINSTLIST=function(){var m=this.REF,r=l.pR(this,cO,"Get_uDblClickInstList",305);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=305;{r.ln=308;if((m.PARENTVF_FR003O==null)){r.ln=309;P0.set(m.PTY_UDBLCLICKINSTLIST.get());}else
{r.ln=311;P0.set(m.PARENTVF_FR003O.getUDBLCLICKINSTLIST());}}r.ln=315;return r.rV(P0.get());};cO.mthGET_UORDCOLINSTLIST=function(){var m=this.REF,r=l.pR(this,cO,"Get_uOrdColInstList",318);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=318;{r.ln=321;if((m.PARENTVF_FR003O==null)){r.ln=322;P0.set(m.PTY_UORDCOLINSTLIST.get());}else{r.ln=324;P0.set(m.PARENTVF_FR003O.getUORDCOLINSTLIST());}}r.ln=328;return r.rV(P0.get());};cO.mthGET_USHOWSELECTCOLUMNSIMAGE=function(){var m=this.REF,r=l.pR(this,cO,"Get_uShowSelectColumnsImage",331);
var P0=r.cP("VALUE","PRIM_BOLN");r.ln=331;{r.ln=334;if((m.PARENTVF_FR003O==null)){r.ln=335;P0.set(m.PTY_USHOWSELECTCOLUMNSIMAGE.get());}else{r.ln=337;P0.set(m.PARENTVF_FR003O.getUSHOWSELECTCOLUMNSIMAGE());}}r.ln=340;return r.rV(P0.get());};cO.mthGET_UMULTIPLESELECT=function(){var m=this.REF,r=l.pR(this,cO,"Get_uMultipleSelect",343);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=343;{r.ln=346;if((m.PARENTVF_FR003O==null)){r.ln=347;P0.set(m.PTY_UMULTIPLESELECT.get());}else{r.ln=349;P0.set(m.PARENTVF_FR003O.getUMULTIPLESELECT());
}}r.ln=353;return r.rV(P0.get());};cO.mthGET_UENABLEPOPUPPANELS=function(){var m=this.REF,r=l.pR(this,cO,"Get_uEnablePopupPanels",355);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=355;{r.ln=358;if((m.PARENTVF_FR003O==null)){r.ln=359;P0.set(m.PTY_UENABLEPOPUPPANELS.get());}else{r.ln=361;P0.set(m.PARENTVF_FR003O.getUENABLEPOPUPPANELS());}}r.ln=364;return r.rV(P0.get());};cO.mthGET_USERHASDISABLEDPOPUPS=function(){var m=this.REF,r=l.pR(this,cO,"Get_UserHasDisabledPopUps",366);var P0=r.cP("VALUE","PRIM_BOLN");
r.ln=366;{r.ln=369;if((m.PARENTVF_FR003O==null)){r.ln=370;P0.set(m.USERHASDISABLEDPOPUPS.get());}else{r.ln=372;P0.set(m.PARENTVF_FR003O.getUSERHASDISABLEDPOPUPS());}}r.ln=375;return r.rV(P0.get());};cO.mthSET_USERHASDISABLEDPOPUPS=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_UserHasDisabledPopUps",377);var P0=r.cP("VALUE","PRIM_BOLN");P0.set(p0);r.ln=377;{r.ln=380;if((m.PARENTVF_FR003O==null)){r.ln=381;m.USERHASDISABLEDPOPUPS.set(P0.get());}else{r.ln=383;m.PARENTVF_FR003O.setUSERHASDISABLEDPOPUPS(P0.get());
}}r.ln=386;r.e();};cO.mthGET_UVLFONEPOPUPPANEL=function(){var m=this.REF,r=l.pR(this,cO,"Get_uVLFONEPopUpPanel",389);var P0=r.cP("VALUE","PRIM_ALPH");r.ln=389;{r.ln=392;if((m.PARENTVF_FR003O==null)){r.ln=393;P0.set(m.PTY_UVLFONEPOPUPPANEL.get());}else{r.ln=395;P0.set(m.PARENTVF_FR003O.getUVLFONEPOPUPPANEL());}}r.ln=398;return r.rV(P0.get());};cO.mthGET_UQUICKSEARCHWORD=function(){var m=this.REF,r=l.pR(this,cO,"Get_uQuickSearchWord",401);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");r.ln=401;{r.ln=404;
if((m.PARENTVF_FR003O==null)){r.ln=405;P0.set(m.PTY_UQUICKSEARCHWORD.get());}else{r.ln=407;P0.set(m.PARENTVF_FR003O.getUQUICKSEARCHWORD());}}r.ln=410;return r.rV(P0.get());};cO.mthGET_USEFIELDWIDTH=function(){var m=this.REF,r=l.pR(this,cO,"Get_uSEFieldWidth",413);var P0=r.cP("VALUE","PRIM_NMBR");r.ln=413;{r.ln=416;if((m.PARENTVF_FR003O==null)){r.ln=417;P0.set(m.PTY_USEFIELDWIDTH.get());}else{r.ln=419;P0.set(m.PARENTVF_FR003O.getUSEFIELDWIDTH());}}r.ln=422;return r.rV(P0.get());};cO.mthGET_UINITIALINSTANCELISTWIDTHONE=function()
{var m=this.REF,r=l.pR(this,cO,"Get_uInitialInstanceListWidthONE",425);var P0=r.cP("VALUE","PRIM_NMBR");r.ln=425;{r.ln=428;if((m.PARENTVF_FR003O==null)){r.ln=429;P0.set(m.PTY_UINITIALINSTANCELISTWIDTHONE.get());}else{r.ln=431;P0.set(m.PARENTVF_FR003O.getUINITIALINSTANCELISTWIDTHONE());}}r.ln=434;return r.rV(P0.get());};cO.mthGET_UINITIALINSTANCELISTHEIGHTONE=function(){var m=this.REF,r=l.pR(this,cO,"Get_uInitialInstanceListHeightONE",437);var P0=r.cP("VALUE","PRIM_NMBR");r.ln=437;{r.ln=440;if((m.PARENTVF_FR003O==null))
{r.ln=441;P0.set(m.PTY_UINITIALINSTANCELISTHEIGHTONE.get());}else{r.ln=443;P0.set(m.PARENTVF_FR003O.getUINITIALINSTANCELISTHEIGHTONE());}}r.ln=446;return r.rV(P0.get());};cO.mthGET_UINITIALINSTANCELISTROWHEIGHTONE=function(){var m=this.REF,r=l.pR(this,cO,"Get_uInitialInstanceListRowHeightONE",449);var P0=r.cPF("VALUE",Fd.F1.Dc);r.ln=449;{r.ln=452;if((m.PARENTVF_FR003O==null)){r.ln=453;P0.set(m.PTY_UINITIALINSTANCELISTROWHEIGHTONE.get());}else{r.ln=455;P0.set(m.PARENTVF_FR003O.getUINITIALINSTANCELISTROWHEIGHTONE());
}}r.ln=458;return r.rV(P0.get());};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",461);r.ln=461;{r.ln=464;m.PTY_UALLOWCLEARBUTTON.set(true);r.ln=465;m.PTY_URELATIONSHIPTYPE.set("ROOT");r.ln=466;m.PTY_UQUICKSEARCHWORD.set(this.REF.USYSTEM.ref.getUMTXTVALUES("QUICKSEARCH"));r.ln=467;m.PTY_UINITIALINSTANCELISTWIDTHONE.set(400);r.ln=468;m.PTY_UINITIALINSTANCELISTHEIGHTONE.set(200);r.ln=470;m.PTY_UDESIGNERMAXINSTANCESOPEN.set(1);r.ln=471;m.PTY_UUSERMAXINSTANCESOPEN.set(1);
r.ln=472;m.PTY_UORDCOLINSTLIST.set(true);r.ln=473;m.PTY_USHOWSELECTCOLUMNSIMAGE.set(true);r.ln=474;m.PTY_UMENUSELECT.set(true);r.ln=475;m.PTY_UMINIBARLOC.set("TOP");r.ln=476;m.UVLFONESERVERHANDLER.set("VF_SH200O");}r.ln=478;r.e();};cO.mthZINT_ENROLLCHILD=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_EnrollChild",481);var P0=r.cPD("UREFERENCE");var P1=r.cP("LATEENROLLREJECTED","PRIM_BOLN");P0=r.sR("UREFERENCE",p0);var C0=r.cD("C0");r.ln=481;{r.ln=487;cA.mthZINT_ENROLLCHILD.call(this,P0);r.ln=490;
if(l.Io(P0,"VF_FP014O")){r.ln=491;m.FILTERS.mthINSERT(l.cast(P0,"VF_FP014O"));return r.rV(P1.get());}r.ln=496;if(l.Io(P0,"VF_FP200O")){r.ln=498;C0=r.sR("C0",l.cast(P0,"VF_FP200O"));r.ln=512;if(l.s.eq(l.s.Substring(C0.getUIFORMFACTOR(),this.REF.USYSTEM.ref.getUIFORMFACTOR_ASINDEX(),1),"Y")){r.ln=514;C0.setDISPLAYPOSITION(l.add(m.INSTANCELISTCOLUMNS.getItemCount(),1));r.ln=515;m.INSTANCELISTCOLUMNS.mthINSERT(C0);}else{r.ln=526;P1.set(true);}return r.rV(P1.get());}r.ln=533;if(l.Io(P0,"VF_FR003O")){r.ln=534;
l.cast(P0,"VF_FR003O").setPARENTVF_FR003O(this);r.ln=535;m.RELATEDBUSINESSOBJECTS.mthINSERT(l.cast(P0,"VF_FR003O"));return r.rV(P1.get());}return r.rV(P1.get());}r.ln=542;};cO.mthZINT_SETPROPERTY=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetProperty",545);var P0=r.cPD("P");P0=r.sR("P",p0);var C0=r.cD("C0");r.ln=545;{r.ln=550;if(l.n.le(P0.getPROPERTYNUMBER(),200)){r.ln=552;cA.mthZINT_SETPROPERTY.call(this,P0);r.ln=555;if(l.n.eq(P0.getPROPERTYNUMBER(),4)){r.ln=556;this.getROOTVF_FR003O().getRELATEDBUSINESSOBJECTSBYUSERTYPE().set(P0.getVALUE(),this);
}r.e();return;}r.ln=563;{var v1=P0.getPROPERTYNUMBER();if(r.ln=565,l.n.eq(v1,201)){r.ln=566;m.PTY_UALLOWCLEARBUTTON.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=568,l.n.eq(v1,202)){r.ln=569;m.PTY_UDBLCLICKINSTLIST.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=571,l.n.eq(v1,203)){r.ln=572;m.PTY_UMULTIPLESELECT.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=574,l.n.eq(v1,204)){r.ln=576;m.PTY_UENABLEPOPUPPANELS.set((l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE")&&l.n.gt(this.REF.USYSTEM.ref.getUIFORMFACTOR(),this.REF.USYSTEM.ref.getUIFORMFACTOR_MEDIUM())));
}else if(r.ln=578,l.n.eq(v1,205)){r.ln=579;m.PTY_UVLFONEPOPUPPANEL.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=581,l.n.eq(v1,207)){r.ln=582;m.PTY_URELATIONSHIPTYPE.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=584,l.n.eq(v1,208)){r.ln=585;m.PTY_UQUICKSEARCHWORD.set(P0.getVALUE());}else if(r.ln=587,l.n.eq(v1,209)){r.ln=588;m.PTY_USEFIELDWIDTH.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=590,l.n.eq(v1,210)){r.ln=591;m.PTY_USENDTOCSV.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));
}else if(r.ln=593,l.n.eq(v1,211)){r.ln=594;m.PTY_USENDTOCSVPREFIX.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=596,l.n.eq(v1,212)){r.ln=597;m.SNAPININSTANCELISTBROWSERNAME.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=599,l.n.eq(v1,214)){r.ln=600;m.SNAPININSTANCEITEMPANENAME.set(l.s.AsNativeString(P0.getVALUE()));r.ln=601;m.SNAPININSTANCELISTBROWSERNAME.set("VF_UM041O");}else if(r.ln=603,l.n.eq(v1,215)){r.ln=604;m.PTY_CANHAVECHILDREN.set(true);}else if(r.ln=606,l.n.eq(v1,216)){r.ln=607;
m.PTY_CANHAVEPEERS.set(true);}else if(r.ln=609,l.n.eq(v1,217)){r.ln=610;m.PTY_TREELEVEL.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=612,l.n.eq(v1,218)){r.ln=613;m.PTY_URELATIONSHIPHANDLERID.set(P0.getVALUE());}else if(r.ln=615,l.n.eq(v1,219)){r.ln=616;m.PTY_UINITIALINSTANCELISTWIDTHONE.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=618,l.n.eq(v1,220)){r.ln=619;m.PTY_UINITIALINSTANCELISTHEIGHTONE.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=621,l.n.eq(v1,221)){r.ln=622;m.PTY_UDESIGNERMAXINSTANCESOPEN.set(l.s.AsNumber(P0.getVALUE()));
}else if(r.ln=624,l.n.eq(v1,222)){r.ln=625;m.PTY_UORDCOLINSTLIST.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=627,l.n.eq(v1,223)){r.ln=628;m.PTY_UMINIBARLOC.set(P0.getVALUE());}else if(r.ln=630,l.n.eq(v1,224)){r.ln=631;m.PTY_UINITIALINSTANCELISTROWHEIGHTONE.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=633,l.n.eq(v1,225)){r.ln=634;m.PTY_UMENUSELECT.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=636,l.n.eq(v1,226)){r.ln=637;m.UVLFONESERVERHANDLER.set(P0.getVALUE());
}else if(r.ln=639,l.n.eq(v1,227)){r.ln=640;m.PTY_USHOWSELECTCOLUMNSIMAGE.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=642,l.n.eq(v1,228)){r.ln=643;m.SNAPININSTANCELISTTOOLBAR.set(P0.getVALUE());}r.ln=645;}}r.ln=647;r.e();};cO.mthZINT_SHOWPOPUPPANEL=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_ShowPopupPanel",650);var P0=r.cPD("INSTANCELISTENTRY");P0=r.sR("INSTANCELISTENTRY",p0);r.ln=650;{r.ln=653;if(l.tB(l.and(l.and(m.PTY_UENABLEPOPUPPANELS.get(),(P0!=null)),l.b.Not(m.USERHASDISABLEDPOPUPS.get()))))
{r.ln=655;if((m.POPUPPANEL==null)){r.ln=657;this.setrefPOPUPPANEL(l.cFrN(m.PTY_UVLFONEPOPUPPANEL.get(),"VF_AC021O"));r.ln=659;if((m.POPUPPANEL==null)){r.ln=660;l.WEB().mthALERT(l.cat(l.cat("VF_FR003O: Attempt to create a popup panel handler with Id ",m.PTY_UVLFONEPOPUPPANEL.get())," failed. Note that this is the Id which may not be the same as the name."));r.ln=661;m.PTY_UENABLEPOPUPPANELS.set(false);r.e();return;}r.ln=665;m.POPUPPANEL.setAVFRAMEWORKMANAGER(this.REF.USYSTEM.ref.getUFRAMEWORKMANAGER());
r.ln=667;m.POPUPPANEL.mthUINITIALIZE();r.ln=669;m.POPUPPANEL.getAVPOPUPPANELMANAGER().mthZINT_INITIALIZE(m.POPUPPANEL);}r.ln=675;m.POPUPPANEL.mthUPREPARETOSHOW(P0);r.ln=677;m.POPUPPANEL.getAVPOPUPPANELMANAGER().mthZINT_SHOWPOPOVER(u,u,u,u,"",false,u,u,u,u,true);}}r.ln=681;r.e();};cO.mthZINT_TERMINATEPOPUPPANEL=function(){var m=this.REF,r=l.mR(this,cO,"zInt_TerminatePopupPanel",684);r.ln=684;{r.ln=686;if((m.POPUPPANEL!=null)){r.ln=688;this.mthZINT_HIDEPOPUPPANEL();r.ln=690;m.POPUPPANEL.mthUTERMINATE();
r.ln=692;m.POPUPPANEL.getAVPOPUPPANELMANAGER().mthZINT_TERMINATE();r.ln=694;m.POPUPPANEL.setAVFRAMEWORKMANAGER(null);r.ln=697;this.setrefPOPUPPANEL(null);}}r.ln=701;r.e();};cO.mthZINT_HIDEPOPUPPANEL=function(){var m=this.REF,r=l.mR(this,cO,"zInt_HidePopupPanel",705);r.ln=705;{r.ln=707;if((m.POPUPPANEL!=null)){r.ln=708;if(m.POPUPPANEL.getAVPOPUPPANELMANAGER().getISOPEN()){r.ln=710;m.POPUPPANEL.mthUPREPARETOHIDE();r.ln=712;m.POPUPPANEL.getAVPOPUPPANELMANAGER().mthZINT_CLOSEPOPOVER();}}}r.ln=717;r.e();
};cO.mthZINT_SIGNALSENTTOCSVREQUESTED=function(){var r=l.mR(this,cO,"zInt_SignalSentToCSVRequested",721);r.ln=721;{r.ln=723;this.fE("SENTTOCSVREQUESTED");}r.ln=725;r.e();};cO.mthZINT_CREATESAMPLEINSTANCE=function(p0,p1,p2,p3,p4,p5){var f=this.FLD.VF_FR003O,m=this.REF,r=l.mR(this,cO,"zInt_CreateSampleInstance",730);var P0=r.cPD("USEAKEY");var P1=r.cPD("USENKEY");var P2=r.cPF("UPARENTKEYLEVEL",Fd.F1.Dc);var P3=r.cPD("USEPARENTDATAITEM");var P4=r.cPD("LISTMANAGER");var P5=r.cP("OVERRIDECAPTION","PRIM_ALPH");
P0=r.sR("USEAKEY",p0);P1=r.sR("USENKEY",p1);P2.set(p2);P3=r.sR("USEPARENTDATAITEM",p3);P4=r.sR("LISTMANAGER",p4);P5.set(p5);var C0=r.cD("C0");var C1=r.cF("LOOP",Fd.F2.Dc);var C2=r.cF("I",Fd.F2.Dc);var C3=r.cF("USEKEYLEVEL",Fd.F2.Dc);var C4=r.cR("VISUALID1","PRIM_DC","UnicodeString");var C5=r.cR("VISUALID2","PRIM_DC","UnicodeString");var C6=r.cR("USECAPTION","PRIM_DC","UnicodeString");var C7=r.cR("USECAPTIONUPPERCASE","PRIM_DC","UnicodeString");var C8=r.cR("T_ZONE04","PRIM_ALPH");C1.iC();C2.iC();C3.iC();
C4.iC();C5.iC();C6.iC();C7.iC();C8.iC();r.ln=730;{r.ln=763;if(l.tB(m.SAMPLEDATAGENERATIONINPROGRESS.get())){r.e();return;}r.ln=768;m.SAMPLEDATAGENERATIONINPROGRESS.set(true);r.ln=771;{var v1=m.PTY_URELATIONSHIPTYPE.get();if(r.ln=773,l.s.eq(v1,"PEER")){r.ln=774;C1.set(1);r.ln=775;C3.set(l.add(P2.get(),1));}else if(r.ln=777,l.s.eq(v1,"CHILD")){r.ln=778;C1.set(2);r.ln=779;C3.set(l.add(P2.get(),1));}else{r.ln=782;C1.set(1);r.ln=783;C3.set(P2.get());}r.ln=785;}r.ln=789;if(l.tB(l.s.eq(P5.get(),""))){r.ln=790;
C6.set(this.REF.UCAPTIONSINGULAR.get());}else{r.ln=792;C6.set(P5.get());}r.ln=795;C7.set(l.s.UpperCase(C6.get()));r.ln=798;for(var i1=1,s1=1,t1=l.tI(C1.get());(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=800;f.F4.set(l.add(f.F4.get(),42));r.ln=801;f.F5.set(l.add(f.F5.get(),456));r.ln=802;f.F6.set(l.sub(f.F6.get(),12));r.ln=803;f.F7.set(l.add(f.F7.get(),56));r.ln=804;f.F8.set(l.sub(f.F8.get(),56));r.ln=806;f.F9.set(l.add(f.F9.get(),c1));r.ln=807;f.F10.set(l.add(f.F10.get(),c3));r.ln=808;
f.F11.set(l.sub(f.F11.get(),c5));r.ln=809;f.F12.set(l.add(f.F12.get(),c7));r.ln=810;f.F13.set(l.sub(f.F13.get(),c8));r.ln=812;P1.get(C3.get()).set(l.add(P1.get(C3.get()).get(),1));r.ln=814;C8.set(l.n.AsString(P1.get(C3.get()).get()));r.ln=815;while ( l.n.lt(l.s.CurChars(C8.get()),4)){r.ln=816;C8.set(l.cat("0",C8.get()));}r.ln=819;C4.set(l.cat(C7.get(),C8.get()));r.ln=821;P0.get(C3.get()).set(l.s.AsNativeString(C4.get()));r.ln=823;for(var i2=l.tI(l.add(C3.get(),1)),s2=1,t2=l.tI(5);C2.set(i2),(((s2>=0)&&(i2<=t2))||((s2<0)&&(i2>=t2)));i2+=s2)
{r.ln=824;P1.get(C2.get()).set(0);r.ln=825;P0.get(C2.get()).set(" ");}r.ln=828;C5.set(l.cat(l.cat(C6.get()," number "),C8.get()));r.ln=830;P4.mthADDTOLIST(C4.get(),C5.get(),P0.get(1).get(),P0.get(2).get(),P0.get(3).get(),P0.get(4).get(),P0.get(5).get(),P1.get(1).get(),P1.get(2).get(),P1.get(3).get(),P1.get(4).get(),P1.get(5).get(),u,u,u,this.getUUSEROBJECTTYPE()," ",P3,u,u,l.cat("AA",l.n.AsString(f.F4.get())),l.cat("QQ",l.n.AsString(f.F5.get())),l.cat("GG",l.n.AsString(f.F6.get())),l.cat("DDD",l.n.AsString(f.F7.get())),l.cat("EEE",l.n.AsString(f.F8.get())),"FFFFFFFFFF","GGGGGGGGGG","HHHHHHHHHH","IIIIIIIIII","JJJJJJJJJJ",f.F9.get(),f.F10.get(),f.F11.get(),f.F12.get(),f.F13.get(),c9,c10,c11,c12,c13,u,"1959-12-05 08:00:00","1965-06-15 08:00:00","1959-12-05 08:00:00","1965-06-15 08:00:00","1959-12-05 08:00:00",u,u,u,{set:function(rn){C0=r.sR("C0",rn)}});
r.ln=832;{var l1=m.RELATEDBUSINESSOBJECTS.cI();while(l1.step()){var CHILDORPEER=r.sR("CHILDORPEER",l1.item());r.ln=834;CHILDORPEER.mthZINT_CREATESAMPLEINSTANCE(P0,P1,P2.get(),C0,P4,"");r.ln=836;}l1.end();r.dR("CHILDORPEER");}}r.ln=842;m.SAMPLEDATAGENERATIONINPROGRESS.set(false);}r.ln=844;r.e();};cO.mthZINT_EXECUTERELATIONSHIPHANDLER=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_ExecuteRelationshipHandler",847);var P0=r.cPD("FORPARENTDATAITEM");P0=r.sR("FORPARENTDATAITEM",p0);r.ln=847;{r.ln=850;
if(l.tB(l.and((m.URELATIONSHIPHANDLER==null),l.b.eq(m.RELATIONSHIPHANDLERLOADATTEMPTED.get(),false)))){r.ln=852;m.RELATIONSHIPHANDLERLOADATTEMPTED.set(true);r.ln=854;if(l.tB(l.and(l.s.ne(m.PTY_URELATIONSHIPHANDLERID.get(),""),l.s.eq(m.PTY_URELATIONSHIPTYPE.get(),"CHILD")))){r.ln=856;this.setrefURELATIONSHIPHANDLER(l.cFrN(m.PTY_URELATIONSHIPHANDLERID.get(),"VF_AC023O"));r.ln=858;if((m.URELATIONSHIPHANDLER==null)){r.ln=859;l.WEB().mthALERT(l.cat(l.cat("VF_FR003O: Attempt to create a relationship handler with Id ",m.PTY_URELATIONSHIPHANDLERID.get())," failed. Note that this is the Id which may not be the same as the name."));
r.e();return;}r.ln=863;m.URELATIONSHIPHANDLER.setAVFRAMEWORKMANAGER(this.REF.USYSTEM.ref.getUFRAMEWORKMANAGER());m.URELATIONSHIPHANDLER.setASSOCIATEDVF_FR003O(this);m.URELATIONSHIPHANDLER.setAVLISTMANAGER(this.getINSTANCELISTMANAGER());r.ln=865;m.URELATIONSHIPHANDLER.mthUINITIALIZE();}}r.ln=873;if((m.URELATIONSHIPHANDLER!=null)){r.ln=874;m.URELATIONSHIPHANDLER.mthUADDENTRIESFOR(P0,this.getUUSEROBJECTTYPE());}}r.ln=877;r.e();};cO.mthZINT_TERMINATERELATIONSHIPHANDLERS=function(){var m=this.REF,r=l.mR(this,cO,"zInt_TerminateRelationshipHandlers",880);
r.ln=880;{r.ln=883;{var l1=m.RELATEDBUSINESSOBJECTS.cI();while(l1.step()){var RELATEDBUSINESSOBJECT=r.sR("RELATEDBUSINESSOBJECT",l1.item());r.ln=884;RELATEDBUSINESSOBJECT.mthZINT_TERMINATERELATIONSHIPHANDLERS();r.ln=885;}l1.end();r.dR("RELATEDBUSINESSOBJECT");}r.ln=888;if((m.URELATIONSHIPHANDLER!=null)){r.ln=890;m.URELATIONSHIPHANDLER.mthUTERMINATE();r.ln=892;m.URELATIONSHIPHANDLER.setAVFRAMEWORKMANAGER(null);m.URELATIONSHIPHANDLER.setASSOCIATEDVF_FR003O(null);m.URELATIONSHIPHANDLER.setAVLISTMANAGER(null);
r.ln=894;this.setrefURELATIONSHIPHANDLER(null);r.ln=896;m.RELATIONSHIPHANDLERLOADATTEMPTED.set(false);}}r.ln=900;r.e();};cO.mthZINT_LOADSAVEDCOLUMNDETAILS=function(){var m=this.REF,r=l.mR(this,cO,"zInt_LoadSavedColumnDetails",903);var C0=r.cD("C0");var C1=r.cR("CLIPBOARDVALUE","PRIM_ALPH");var C2=r.cR("GUID","PRIM_ALPH");var C3=r.cF("DISPLAYPOS",Fd.F1.Dc);var C4=r.cF("COLUMNWIDTH",Fd.F1.Dc);C1.iC();C2.iC();C3.iC();C4.iC();r.ln=903;{r.ln=911;if(l.b.Not(m.LOADEDSAVEDCOLUMNDETAILS.get())){r.ln=913;m.LOADEDSAVEDCOLUMNDETAILS.set(true);
r.ln=914;C0=r.sR("C0",this.getROOTVF_FR003O());r.ln=915;C2.set(C0.getUIDENTIFIER());r.ln=917;{var l1=C0.getINSTANCELISTCOLUMNS().cI();while(l1.step()){var COLUMN=r.sR("COLUMN",l1.item());r.ln=919;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUGET("ILCOLUMN",C2.get(),COLUMN.getTYPEINSTANCE(),u,u,u,u,C1,u,"TRUE",u);r.ln=921;COLUMN.setUSERMADEVISIBLE(l.s.eq(C1.get(),"TRUE"));r.ln=923;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUGET("ILCOLUMN",C2.get(),COLUMN.getTYPEINSTANCE(),"DISPLAYPOS",u,u,u,u,C3,u,-9999);
r.ln=926;if(l.n.ne(C3.get(),-9999)){r.ln=927;COLUMN.setDISPLAYPOSITION(C3.get());}r.ln=930;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUGET("ILCOLUMN",C2.get(),COLUMN.getTYPEINSTANCE(),"COLUMNWIDTH",u,u,u,u,C4,u,-9999);r.ln=933;if(l.n.ne(C4.get(),-9999)){r.ln=934;COLUMN.setCOLUMNWIDTH(C4.get());}r.ln=938;if(this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=940;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.add(l.cat(l.cat("Restored column ",COLUMN.getTYPEINSTANCE())," - "),COLUMN.getUCAPTION())," - ")," with UserMadeVisible="),l.b.AsString(COLUMN.getUSERMADEVISIBLE()))," Display Position="),l.n.AsString(COLUMN.getDISPLAYPOSITION())),"Width="),l.n.AsString(COLUMN.getCOLUMNWIDTH())),u,u,true,u);
}r.ln=944;}l1.end();r.dR("COLUMN");}}}r.ln=948;r.e();};cO.mthZINT_SAVECOLUMNDETAILS=function(){var r=l.mR(this,cO,"zInt_SaveColumnDetails",951);var C0=r.cD("C0");var C1=r.cR("GUID","PRIM_ALPH");C1.iC();r.ln=951;{r.ln=956;C0=r.sR("C0",this.getROOTVF_FR003O());r.ln=957;C1.set(C0.getUIDENTIFIER());r.ln=959;{var l1=C0.getINSTANCELISTCOLUMNS().cI();while(l1.step()){var COLUMN=r.sR("COLUMN",l1.item());r.ln=961;if(COLUMN.getUSERMADEVISIBLE()){r.ln=962;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUSET("ILCOLUMN",C1.get(),COLUMN.getTYPEINSTANCE(),u,u,u,u,"TRUE",u,u);
}else{r.ln=964;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUSET("ILCOLUMN",C1.get(),COLUMN.getTYPEINSTANCE(),u,u,u,u,"FALSE",u,u);}r.ln=967;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUSET("ILCOLUMN",C1.get(),COLUMN.getTYPEINSTANCE(),"DISPLAYPOS",u,u,u,u,COLUMN.getDISPLAYPOSITION(),u);r.ln=969;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUSET("ILCOLUMN",C1.get(),COLUMN.getTYPEINSTANCE(),"COLUMNWIDTH",u,u,u,u,COLUMN.getCOLUMNWIDTH(),u);r.ln=972;if(this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE())
{r.ln=974;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.add(l.cat(l.cat("Saved column ",COLUMN.getTYPEINSTANCE())," - "),COLUMN.getUCAPTION())," - ")," with UserMadeVisible="),l.b.AsString(COLUMN.getUSERMADEVISIBLE()))," Display Position="),l.n.AsString(COLUMN.getDISPLAYPOSITION())),"Width="),l.n.AsString(COLUMN.getCOLUMNWIDTH())),u,u,true,u);}r.ln=978;}l1.end();r.dR("COLUMN");}}r.ln=980;r.e();};function e2(UCOLUMN,Ps){var m=this.REF,r=l.eR(this,cO,"#InstanceListColumns<>.DisplayPositionChanged",985);
r.ln=985;{r.ln=987;m.INSTANCELISTCOLUMNS.mthREMOVE(UCOLUMN);r.ln=988;m.INSTANCELISTCOLUMNS.mthINSERT(UCOLUMN);}r.ln=990;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#InstanceListColumns.Compare",994);var P0=Ps.r("OBJECT");var P1=Ps.r("SUBJECT");var P2=Ps.r("RESULT");r.ln=994;{r.ln=996;if(l.n.lt(P1.getDISPLAYPOSITION(),P0.getDISPLAYPOSITION())){r.ln=997;P2.set("LESS");}else{r.ln=999;if(l.n.gt(P1.getDISPLAYPOSITION(),P0.getDISPLAYPOSITION())){r.ln=1000;P2.set("GREATER");}else{r.ln=1002;P2.set("EQUAL");
}}}r.ln=1006;r.e();};cO.getPARENTVF_FR003O=function(){return this.REF.PARENTVF_FR003O;};cO.setPARENTVF_FR003O=function(v){this.setrefPARENTVF_FR003O(v);};cO.getROOTVF_FR003O=function(){return this.mthGET_ROOTVF_FR003O();};cO.getINSTANCELISTMANAGER=function(){return this.mthGET_INSTANCELISTMANAGER();};cO.getSNAPININSTANCELISTBROWSERNAME=function(){return this.mthGET_SNAPININSTANCELISTBROWSERNAME();};cO.getSNAPININSTANCEITEMPANENAME=function(){return this.REF.SNAPININSTANCEITEMPANENAME.get();};cO.getSNAPININSTANCELISTTOOLBAR=function()
{return this.REF.SNAPININSTANCELISTTOOLBAR.get();};cO.getFILTERS=function(){return this.REF.FILTERS;};cO.getUFILTERCOUNT=function(){return this.mthGET_UFILTERCOUNT();};cO.getINSTANCELISTCOLUMNS=function(){return this.REF.INSTANCELISTCOLUMNS;};cO.getUALLOWCLEARBUTTON=function(){return this.mthGET_UALLOWCLEARBUTTON();};cO.getUDBLCLICKINSTLIST=function(){return this.mthGET_UDBLCLICKINSTLIST();};cO.getUMENUSELECT=function(){return this.mthGET_UMENUSELECT();};cO.getUORDCOLINSTLIST=function(){return this.mthGET_UORDCOLINSTLIST();
};cO.getUSHOWSELECTCOLUMNSIMAGE=function(){return this.mthGET_USHOWSELECTCOLUMNSIMAGE();};cO.getUMULTIPLESELECT=function(){return this.mthGET_UMULTIPLESELECT();};cO.getUENABLEPOPUPPANELS=function(){return this.mthGET_UENABLEPOPUPPANELS();};cO.getUSERHASDISABLEDPOPUPS=function(){return this.mthGET_USERHASDISABLEDPOPUPS();};cO.setUSERHASDISABLEDPOPUPS=function(v){this.mthSET_USERHASDISABLEDPOPUPS(v);};cO.getUVLFONEPOPUPPANEL=function(){return this.mthGET_UVLFONEPOPUPPANEL();};cO.getUMINIBARLOC=function()
{return this.REF.PTY_UMINIBARLOC.get();};cO.getUQUICKSEARCHWORD=function(){return this.mthGET_UQUICKSEARCHWORD();};cO.getUSEFIELDWIDTH=function(){return this.mthGET_USEFIELDWIDTH();};cO.getUINITIALINSTANCELISTWIDTHONE=function(){return this.mthGET_UINITIALINSTANCELISTWIDTHONE();};cO.getUINITIALINSTANCELISTHEIGHTONE=function(){return this.mthGET_UINITIALINSTANCELISTHEIGHTONE();};cO.getUINITIALINSTANCELISTROWHEIGHTONE=function(){return this.mthGET_UINITIALINSTANCELISTROWHEIGHTONE();};cO.getUDESIGNERMAXINSTANCESOPEN=function()
{return this.mthGET_UDESIGNERMAXINSTANCESOPEN();};cO.getUUSERMAXINSTANCESOPEN=function(){return this.REF.PTY_UUSERMAXINSTANCESOPEN.get();};cO.setUUSERMAXINSTANCESOPEN=function(v){this.REF.PTY_UUSERMAXINSTANCESOPEN.set(v);};cO.getURELATIONSHIPTYPE=function(){return this.REF.PTY_URELATIONSHIPTYPE.get();};cO.getURELATIONSHIPHANDLERID=function(){return this.REF.PTY_URELATIONSHIPHANDLERID.get();};cO.getURELATIONSHIPHANDLER=function(){return this.REF.URELATIONSHIPHANDLER;};cO.getUSENDTOCSV=function(){return this.mthGET_USENDTOCSV();
};cO.getUSENDTOCSVPREFIX=function(){return this.mthGET_USENDTOCSVPREFIX();};cO.getHITSERVERINDEMOPROGRAMS=function(){return this.REF.PTY_HITSERVERINDEMOPROGRAMS.get();};cO.setHITSERVERINDEMOPROGRAMS=function(v){this.REF.PTY_HITSERVERINDEMOPROGRAMS.set(v);};cO.getHASSUBTYPES=function(){return this.REF.PTY_HASSUBTYPES.get();};cO.setHASSUBTYPES=function(v){this.REF.PTY_HASSUBTYPES.set(v);};cO.getUVLFONESERVERHANDLER=function(){return this.REF.UVLFONESERVERHANDLER.get();};cO.getRELATEDBUSINESSOBJECTS=function()
{return this.REF.RELATEDBUSINESSOBJECTS;};cO.getCANHAVECHILDREN=function(){return this.REF.PTY_CANHAVECHILDREN.get();};cO.getCANHAVEPEERS=function(){return this.REF.PTY_CANHAVEPEERS.get();};cO.getTREELEVEL=function(){return this.REF.PTY_TREELEVEL.get();};cO.getRELATEDBUSINESSOBJECTSBYUSERTYPE=function(){return this.REF.RELATEDBUSINESSOBJECTSBYUSERTYPE;};cO.getCURRENTVF_UM010O=function(){return this.mthGET_CURRENTVF_UM010O();};cO.setCURRENTVF_UM010O=function(v){this.mthSET_CURRENTVF_UM010O(v);};{Fd.F1.Dc=function()
{this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_NUM"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.setrefPARENTVF_FR003O=function(rn){this.sR("PARENTVF_FR003O",rn);};cO.setrefPOPUPPANEL=function(rn){this.sR("POPUPPANEL",rn);};cO.setrefURELATIONSHIPHANDLER=function(rn){this.sR("URELATIONSHIPHANDLER",rn);};cO.setrefCURRENTVF_UM010O=function(rn)
{this.sR("CURRENTVF_UM010O",rn);};},{rc:["VF_AC009O"],rp:["PRIM_ALPH","PRIM_ACOL","PRIM_SACO","PRIM_BOLN","PRIM_DC.UnicodeString","PRIM_NMBR","PRIM_FLD","PRIM_KCOL"],dc:["VF_FR003O","VF_AC021O","VF_AC023O","VF_UM010O","VF_FP200O","VF_AC001O","VF_LM003O","VF_FP014O"],dp:["PRIM_DC.UnicodeString","PRIM_ALPH"]});