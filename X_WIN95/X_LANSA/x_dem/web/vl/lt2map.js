﻿LANSA.addComponent({id:"LT2MAP",nm:"LT2FindAStore",ot:"wv",tp:"View",pt:"ap",de:"LANSA Tools Find Store",tl:15000300},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{nm:"LT2LOCATIONID",ft:"NV",ln:256,dc:0,lb:"LT2LocationID",h1:"LT2LocationID",h2:"",h3:"",de:"LT2LocationID",dv:""},F2:{nm:"LT2LOCATIONLATITUDE",ft:"P",ln:15,dc:9,lb:"LT2LocationLatitude",h1:"LT2LocationLatitude",h2:"",h3:"",de:"LT2LocationLatitude",dv:0},F3:{nm:"LT2LOCATIONLONGITUDE",ft:"P",ln:15,dc:9,lb:"LT2LocationLongitude",
h1:"LT2LocationLongitude",h2:"",h3:"",de:"LT2LocationLongitude",dv:0},F4:{nm:"LT2LOCATIONADDRESS",ft:"NV",ln:256,dc:0,lb:"LT2LocationAddress",h1:"LT2LocationAddress",h2:"",h3:"",de:"LT2LocationAddress",dv:""}};var cO=l.rC(oI,{an:"PRIM_VIEW",fd:Fd,mt:{ShowDetails:{ps:{"StoreID":{pt:"i"},"Store":{pt:"i"}}},SetMarkers:{},InitializeMaps:{}},co:function(){cO.aN.call(this);var f=this.aF("LT2MAP",Fd);var C0=this.cR("LAYOUT","PRIM_TBLO");var C1=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C2=this.cR("LAYOUTROW1","PRIM_TBLO","Row");
var C3=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C7=this.cR("LAYOUTPOPUP","PRIM_TBLO");var C8=this.cR("LAYOUTPOPUPROW1","PRIM_TBLO","Row");var C9=this.cR("LAYOUTPOPUPCOLUMN1","PRIM_TBLO","Column");var C10=this.cR("LAYOUTPOPUPITEM1","PRIM_TBLO","Item");var C11=this.cR("LAYOUTPOPUPITEM2","PRIM_TBLO","Item");var C12=this.cR("MAP","XGOOGLE07");var C13=this.cR("DROPDOWNLOCATION","PRIM_MD","Dropdown");
var C14=this.cR("MAPDETAILS","PRIM_PPNL");var C15=this.cR("TEXTSTORE","PRIM_MD","Label");var C16=this.cR("TEXTADDRESS","PRIM_MD","Label");var C17=this.cR("GEOLOCATION","PRIM_WEB","Geolocation");var C18=this.cR("MAPLOADED","PRIM_BOLN");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.iC();C3.setDisplayPosition(1);C3.setParent(C0);C3.setHeight(72);C3.setUnits("CONTENT");C3.iC();C4.setColumn(C1);C4.setParent(C0);C4.setRow(C2);C4.iC();C5.setAlignment("TOPLEFT");
C5.setColumn(C1);C5.setManage(C13);C5.setMarginLeft(16);C5.setMarginTop(16);C5.setParent(C0);C5.setRow(C3);C5.setSizing("NONE");C5.iC();C6.setManage(C12);C6.setParent(C0);C6.setRow(C2);C6.setColumn(C1);C6.setMarginTop(16);C6.setMarginLeft(16);C6.setMarginRight(16);C6.setMarginBottom(16);C6.iC();C7.setSizing("CONTENTHEIGHT");C7.iC();C8.setDisplayPosition(1);C8.setParent(C7);C8.iC();C9.setDisplayPosition(1);C9.setParent(C7);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C9);C10.setManage(C16);C10.setParent(C7);
C10.setRow(C8);C10.setSizing("CONTENTHEIGHTFITTOWIDTH");C10.setFlow("DOWN");C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C9);C11.setManage(C15);C11.setParent(C7);C11.setRow(C8);C11.setSizing("CONTENTHEIGHTFITTOWIDTH");C11.setFlow("DOWN");C11.iC();C12.setParent(this);C12.setTabStop(false);C12.setHeight(296);C12.setWidth(568);C12.setDisplayPosition(1);C12.setTabPosition(2);C12.setLeft(16);C12.setTop(88);C12.iC();C13.setCaption("StoreLocation");C13.setDisplayPosition(2);C13.setLeft(16);C13.setParent(this);
C13.setTabPosition(1);C13.setTop(16);C13.setHelperPosition("NONE");C13.setHeight(56);C13.setWidth(272);C13.iC();C14.setLeft(0);C14.setTop(0);C14.setHeight(52);C14.setWidth(273);C14.setLayoutManager(C7);C14.iC();C15.setCaption("Heading 2");C15.setDisplayPosition(1);C15.setLeft(0);C15.setParent(C14);C15.setTabPosition(1);C15.setThemeDrawStyle("Heading2");C15.setTop(0);C15.setWidth(271);C15.setHeight(43);C15.setPaddingBottom(8);C15.setPaddingLeft(8);C15.setPaddingRight(8);C15.setPaddingTop(8);C15.setCaptionMarginLeft(16);
C15.iC();C16.setCaption("Text");C16.setDisplayPosition(2);C16.setLeft(0);C16.setParent(C14);C16.setTabPosition(2);C16.setTop(43);C16.setWidth(271);C16.setHeight(40);C16.setWordWrap(true);C16.setIcon("location_on");C16.setPaddingBottom(8);C16.setPaddingLeft(8);C16.setPaddingRight(8);C16.setPaddingTop(8);C16.setIconColor("255:87:34");C16.setCaptionAlignment("TOPLEFT");C16.iC();C17.iC();C18.iC();C12.aH("GOOGLEMAPSLOADED",this,e4);C12.aH("MARKERCLICKED",this,e5);C13.aH("CHANGED",this,e3);C17.aH("REFRESHED",this,e2);
this.setDisplayPosition(1);this.setTabPosition(1);this.setHeight(400);this.setWidth(600);this.setLayoutManager(C0);this.aH("PREPARE",this,e1);var li=this.aL("LT2MAP");li.LOCATIONS=l.cLT({"LT2LOCATIONID":f.F1,"LT2LOCATIONLATITUDE":f.F2,"LT2LOCATIONLONGITUDE":f.F3,"LT2LOCATIONADDRESS":f.F4},null);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",39);r.ln=39;{r.ln=41;if(l.tB(l.not(m.MAPLOADED.get()))){r.ln=43;this.mthINITIALIZEMAPS();}}r.ln=47;r.e();};function e2(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#Geolocation.Refreshed",49);r.ln=49;{r.ln=51;if(l.s.eq(m.GEOLOCATION.getErrorCode(),"NONE")){r.ln=53;m.MAP.mthDISPLAYMAP(m.GEOLOCATION.getLatitude(),m.GEOLOCATION.getLongitude());}}r.ln=57;r.e();};function e3(sender,Ps){var li=this.LIST.LT2MAP,f=this.FLD.LT2MAP,m=this.REF,r=l.eR(this,cO,"#DropDownLocation.Changed",59);r.ln=59;{r.ln=61;{var l1=li.LOCATIONS.selectList();while(l1.step()){if(!(l.s.eq(f.F1.get(),m.DROPDOWNLOCATION.get()))){continue;}r.ln=63;m.MAP.mthDISPLAYMAP(f.F2.get(),f.F3.get());
r.ln=65;m.MAP.setZOOM(15);r.ln=67;}l1.end();}}r.ln=69;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Map.GoogleMapsLoaded",71);r.ln=71;{r.ln=73;m.MAPLOADED.set(true);r.ln=74;m.MAP.setMAPTYPE("HYBRID");r.ln=75;m.MAP.setZOOM(10);r.ln=77;this.mthSETMARKERS();r.ln=79;m.GEOLOCATION.mthREFRESH();}r.ln=81;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#Map.MarkerClicked",83);var P0=Ps.r("ELABORATION");var P1=Ps.r("IDENTIFIER");r.ln=83;{r.ln=85;cO.mthSHOWDETAILS.call(this,P1.get(),P0.get());
}r.ln=87;r.e();};cO.mthSHOWDETAILS=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"ShowDetails",89);var P0=r.cP("STOREID","PRIM_STR");var P1=r.cP("STORE","PRIM_STR");P0.set(p0);P1.set((p1===u)?("DETAILS"):(p1));r.ln=89;{r.ln=93;m.TEXTSTORE.set(l.cat("LANSA Tools ",P0.get()));r.ln=95;m.TEXTADDRESS.set(P1.get());r.ln=97;m.MAPDETAILS.mthSHOWPOPUP(u,u,"CENTER",u,u);}r.ln=99;r.e();};cO.mthSETMARKERS=function(){var li=this.LIST.LT2MAP,f=this.FLD.LT2MAP,m=this.REF,r=l.mR(this,cO,"SetMarkers",102),mth=r;var C0=r.cDR("GETLOCATIONS","LT2SRVM","GETLOCATIONS");
var C1=r.cR("ADDRESSDETAILS","PRIM_STR");C0.iC();C1.iC();C0.aH("COMPLETED",this,e6);r.ln=102;{r.ln=106;C0.mthEXECUTEASYNC({},{LIST:{"LOCATIONS":li.LOCATIONS}});}r.ln=122;r.e();function e6(sender,Ps){var r=l.eR(this,cO,"#GetLocations.Completed",108,mth);r.ln=108;{r.ln=110;{var l1=li.LOCATIONS.selectList();while(l1.step()){r.ln=112;m.DROPDOWNLOCATION.getItems().mthADD(f.F1.get(),f.F1.get());r.ln=114;C1.set(l.cat(f.F4.get(),l.n.AsUnicodeString(10)));r.ln=116;m.MAP.mthADDMARKER(f.F2.get(),f.F3.get(),f.F1.get(),C1.get(),f.F1.get(),false);
r.ln=118;}l1.end();}}r.ln=120;r.e();}};cO.mthINITIALIZEMAPS=function(){var m=this.REF,r=l.mR(this,cO,"InitializeMaps",125),mth=r;var C0=r.cDR("GETAPIKEY","LT2SRVM","GETGOOGLEMAPSAPIKEY");var C1=r.cR("APIKEY","PRIM_STR");C0.iC();C1.iC();C0.aH("COMPLETED",this,e7);r.ln=125;{r.ln=130;C0.mthEXECUTEASYNC({},{FLD:{"LT2APIKEY":C1}});}r.ln=139;r.e();function e7(sender,Ps){var r=l.eR(this,cO,"#GetAPIKey.Completed",132,mth);r.ln=132;{r.ln=134;m.MAP.setAPIKEY(C1.get());r.ln=135;m.MAP.mthLOADGOOGLEMAPS();}r.ln=137;
r.e();}};},{rc:["XGOOGLE07"],rp:["PRIM_VIEW","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Dropdown","PRIM_PPNL","PRIM_MD.Label","PRIM_WEB.Geolocation","PRIM_BOLN","PRIM_WEB.DataRequest","PRIM_FLD"],dp:["PRIM_STR"]});