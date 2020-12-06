﻿LANSA.addComponent({id:"XAADLG07",nm:"xAAEditDialog",ot:"wv",tp:"Dialog",pt:"ap",de:"Accident Assessment Edit Dialog",tl:15000300},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var c1=l.cDec("1.82"),c2=l.cDec("1.7");var Fd={F1:{nm:"XACCDRVSN",an:"xAccidentDriverSurname",ft:"N",ln:50,dc:0,lb:"Driver Surname",h1:"Driver",h2:"Surname",h3:" ",de:"Driver Surname",dv:"",ia:["FE","LC"]},F2:{nm:"XACCDRVGN",an:"xAccidentDriverGivenName",ft:"N",ln:50,dc:0,lb:"Driver Given Na",h1:"Driver",h2:"Given",
h3:"Name",de:"Driver Given Name",dv:"",ia:["FE","LC"]},F3:{nm:"XACCVMM",an:"xAccidentVehicleMakeModel",ft:"N",ln:50,dc:0,lb:"Vehicle Make &",h1:"Vehicle",h2:"Make",h3:"&",de:"Vehicle Make & Model",dv:"",ia:["FE","LC"]},F4:{nm:"XACCVREG",an:"xAccidentVehicleRegistration",ft:"N",ln:10,dc:0,lb:"Vehicle Registr",h1:"Vehicle",h2:"Registration",h3:" ",de:"Vehicle Registration",dv:"",ia:["FE","LC"]},F5:{nm:"XACCVIN",an:"xAccidentVehicleIdentification",ft:"N",ln:17,dc:0,lb:{"ENG":"Vehicle Identi","FRA":"Vechicle Identi"}[cL],
h1:{"ENG":"Vehicle","FRA":"Vechicle"}[cL],h2:"Identification",h3:"Number",de:{"ENG":"Vehicle Identification Number","FRA":"Vechicle Identification Number"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"XACCDATE",an:"xAccidentDate",ft:"DT",ln:26,dc:0,lb:"Accident Date a",h1:"Accident",h2:"Date",h3:"and",de:"Accident Date and Time",dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]},F7:{ic:0,nm:"XACCCRDNT",an:"xAccidentCoordinates",ft:"N",ln:48,dc:0,lb:"Coordinates",h1:"Coordinates",h2:" ",h3:" ",de:{"ENG":"Accident Assessment Coordinates","FRA":"Accident Assesment Coordinates"}[cL],
dv:"",ia:["FE","LC"]},F8:{nm:"XACCNOTES",an:"xAccidentNotes",ft:"N",ln:4096,dc:0,lb:"Notes",h1:"Notes",h2:" ",h3:" ",de:"Notes",dv:"",ia:["FE","LC"]},F9:{nm:"XACCASSNO",an:"xAccidentAssessmentNumber",ft:"P",ln:12,dc:0,lb:"Assessment Numn",h1:"Assessment",h2:"Numner",h3:" ",de:"Assessment Numner",dv:0,ia:["FE","RB"]},F10:{nm:"XACCSTAT",an:"xAccidentAssessmentStatus",ft:"A",ln:1,dc:0,lb:"Assessment Stat",h1:"Assessment",h2:"Status",h3:" ",de:"Assessment Status",dv:"",ia:["FE"]},F11:{nm:"XACCLATIT",
an:"xAccidentLatitude",ft:"P",ln:15,dc:9,lb:"Latitude",h1:"Latitude",h2:" ",h3:" ",de:"Latitude",dv:0,ia:["FE","RB"]},F12:{nm:"XACCLONGI",an:"xAccidentLongitude",ft:"P",ln:15,dc:9,lb:"Longitude",h1:"Longitude",h2:" ",h3:" ",de:"Longitude",dv:0,ia:["FE","RB"]},F13:{nm:"XACCAUDIO",an:"xAccidentAudioRecording",ft:"BL",ln:0,dc:0,lb:"Audio Recording",h1:"Audio",h2:"Recording",h3:" ",de:"Audio Recording",dv:l.SqlNull,ia:["ASQN","FE","LC"]},F14:{nm:"XACCIMAGE",an:"xAccidentImage",ft:"BL",ln:0,dc:0,lb:"Accident Image",
h1:"Accident",h2:"Image",h3:" ",de:"Accident Image",dv:l.SqlNull,ia:["ASQN","FE","LC"]},F15:{nm:"XACCAUDF",an:"xAccidentAudioFileName",ft:"N",ln:256,dc:0,lb:"Audio File Name",h1:"Audio",h2:"File",h3:"Name",de:"Accident Assessment Audio File Name",dv:"",ia:["FE","LC"]},F16:{nm:"XACCIMGF",an:"xAccidentImageFileName",ft:"N",ln:256,dc:0,lb:"Image File Name",h1:"Image",h2:"File",h3:"Name",de:"Accident Assessment Image File Name",dv:"",ia:["FE","LC"]},F17:{ic:0,nm:"STD_BLOB",ft:"BL",ln:0,dc:0,lb:{"ENG":"Standard BLOB","FRA":"?"}[cL],
h1:{"ENG":"Standard","FRA":"?"}[cL],h2:{"ENG":"BLOB","FRA":"?"}[cL],h3:" ",de:{"ENG":"Standard BLOB","FRA":"?"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_DLG",fd:Fd,pt:{AssessmentNumber:{da:"rw"},AssessmentStatus:{da:"rw"},DriverSurname:{da:"rw"},DriverGivenName:{da:"rw"},VehicleMakeModel:{da:"rw"},VehicleRegistration:{da:"rw"},VehicleIdentification:{da:"rw"},AccidentDate:{da:"rw"},Latitude:{da:"rw"},Longitude:{da:"rw"},AccidentNotes:{da:"rw"},AccidentImage:{da:"rw"},AccidentImageFile:
{da:"rw"},AccidentAudio:{da:"rw"},AccidentAudioFile:{da:"rw"}},mt:{ShowError:{ps:{"ErrorMessage":{pt:"i"}}},LoadAssessment:{ps:{"AssessmentNumber":{pt:"i"},"AssessmentStatus":{pt:"i"},"Surname":{pt:"i"},"GivenName":{pt:"i"},"Registration":{pt:"i"},"MakeModel":{pt:"i"},"VIN":{pt:"i"},"Date":{pt:"i"},"Longitude":{pt:"i"},"Latitude":{pt:"i"},"Audio":{pt:"i"},"Notes":{pt:"i"},"AccidentImage":{pt:"i"},"AudioFile":{pt:"i"},"ImageFile":{pt:"i"}}},LoadImage:{ps:{"File":{pt:"i"},"Base64Data":{pt:"i"},"MimeType":
{pt:"i"}}},LoadAudio:{ps:{"File":{pt:"i"},"Base64Data":{pt:"i"},"MimeType":{pt:"i"}}},CoordinatesChanged:{ps:{"Latitude":{pt:"i"},"Longitude":{pt:"i"}}},CreateBlob:{ps:{"Base64":{pt:"i"},"MimeType":{pt:"i"}}},SetModifiedValues:{}},ev:{ShowMap:{},ShowCamera:{},ShowRecorder:{},CloseAndSave:{},CloseDiscard:{},Delete:{}},co:function(){cO.aN.call(this);this.aF("XAADLG07",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("LAYOUTHEADER","PRIM_TBLO");
var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("ROW2","PRIM_TBLO","Row");var C6=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C7=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C8=this.cR("LAYOUTCONTENT","PRIM_TBLO");var C9=this.cR("COLUMN2","PRIM_TBLO","Column");var C10=this.cR("COLUMN3","PRIM_TBLO","Column");var C11=this.cR("ROW3","PRIM_TBLO","Row");var C12=this.cR("LAYOUT2ITEM1","PRIM_TBLO","Item");var C13=this.cR("LAYOUT2ITEM2","PRIM_TBLO","Item");
var C14=this.cR("LAYOUTASSESSEMENT1","PRIM_TBLO");var C15=this.cR("LAYOUTASSESSEMENT1ROW","PRIM_TBLO","Row");var C16=this.cR("LAYOUTASSESSEMENT1COLUMN","PRIM_TBLO","Column");var C17=this.cR("VIEWLAYOUTITEM2","PRIM_TBLO","Item");var C18=this.cR("VIEWLAYOUTITEM3","PRIM_TBLO","Item");var C19=this.cR("VIEWLAYOUTITEM4","PRIM_TBLO","Item");var C20=this.cR("VIEWLAYOUTITEM6","PRIM_TBLO","Item");var C21=this.cR("VIEWLAYOUTITEM7","PRIM_TBLO","Item");var C22=this.cR("VIEWLAYOUTITEM10","PRIM_TBLO","Item");var C23=this.cR("VIEWLAYOUTITEM11","PRIM_TBLO","Item");
var C24=this.cR("VIEWLAYOUTITEM12","PRIM_TBLO","Item");var C25=this.cR("VIEWLAYOUTITEM13","PRIM_TBLO","Item");var C26=this.cR("VIEWLAYOUTITEM1","PRIM_TBLO","Item");var C27=this.cR("VIEWLAYOUTITEM16","PRIM_TBLO","Item");var C28=this.cR("VIEWLAYOUTITEM19","PRIM_TBLO","Item");var C29=this.cR("LAYOUTASSESSEMENT2","PRIM_TBLO");var C30=this.cR("LAYOUTASSESSEMENT2ROW1","PRIM_TBLO","Row");var C31=this.cR("LAYOUTASSESSEMENT2COLUMN1","PRIM_TBLO","Column");var C32=this.cR("LAYOUTASSESSEMENT2ITEM1","PRIM_TBLO","Item");
var C33=this.cR("LAYOUTASSESSEMENT2ITEM2","PRIM_TBLO","Item");var C34=this.cR("LAYOUTASSESSEMENT2ITEM7","PRIM_TBLO","Item");var C35=this.cR("LAYOUTASSESSEMENT2ITEM8","PRIM_TBLO","Item");var C36=this.cR("LAYOUTASSESSEMENT2ITEM9","PRIM_TBLO","Item");var C37=this.cR("LAYOUTASSESSEMENT2ITEM10","PRIM_TBLO","Item");var C38=this.cR("LAYOUTASSESSEMENT2ITEM11","PRIM_TBLO","Item");var C39=this.cR("LAYOUTASSESSEMENT2ITEM12","PRIM_TBLO","Item");var C40=this.cR("LAYOUTASSESSEMENT2ITEM13","PRIM_TBLO","Item");var C41=this.cR("LAYOUTASSESSEMENT2ITEM14","PRIM_TBLO","Item");
var C42=this.cR("LAYOUTASSESSEMENT2ITEM3","PRIM_TBLO","Item");var C43=this.cR("LAYOUT1","PRIM_TBLO");var C44=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C45=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C46=this.cR("LAYOUT1ITEM3","PRIM_TBLO","Item");var C47=this.cR("LAYOUTHEADERITEM1","PRIM_TBLO","Item");var C48=this.cR("LAYOUT2ITEM3","PRIM_TBLO","Item");var C49=this.cR("LAYOUT2ITEM4","PRIM_TBLO","Item");var C50=this.cR("CONTENTPANEL","PRIM_PANL");var C51=this.cR("HEADER","PRIM_PANL");var C52=this.cR("CLOSE","PRIM_MD","Icon");
var C53=this.cR("HEADING","PRIM_MD","Label");var C54=this.cR("MAINPANEL","PRIM_PANL");var C55=this.cF("DRIVERSURNAME",Fd.F1.EDITFIELD);var C56=this.cF("DRIVERGIVENNAME",Fd.F2.EDITFIELD);var C57=this.cF("VEHICLEMAKEMODEL",Fd.F3.EDITFIELD);var C58=this.cF("VEHICLEREG",Fd.F4.EDITFIELD);var C59=this.cF("VEHICLEVIN",Fd.F5.EDITFIELD);var C60=this.cF("ACCIDENTDATE",Fd.F6.DATETIMEFIELD);var C61=this.cF("COORDINATES",Fd.F7.EDITFIELD);var C62=this.cR("AUDIONOTES","PRIM_MD","Edit");var C63=this.cF("ACCIDENTNOTES",Fd.F8.EDITFIELD);
var C64=this.cR("CAMERAPROMPT","PRIM_MD","Edit");var C65=this.cR("ALERT","PRIM_MD","Alert");var C66=this.cR("DELETE","PRIM_MD","Icon");var C67=this.cR("SAVE","PRIM_MD","Icon");var C68=this.cR("LOCATION","PRIM_MD","Edit");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("255:255:255");C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(1);C4.setParent(C2);C4.setHeight(48);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(2);C5.setParent(C2);C5.setHeight(c1);C5.iC();
C6.setAlignment("TOPLEFT");C6.setColumn(C3);C6.setManage(C51);C6.setParent(C2);C6.setRow(C4);C6.iC();C7.setManage(C50);C7.setParent(C2);C7.setRow(C5);C7.setColumn(C3);C7.iC();C8.iC();C9.setDisplayPosition(1);C9.setParent(C8);C9.setWidth(40);C9.setUnits("PIXELS");C9.iC();C10.setDisplayPosition(2);C10.setParent(C8);C10.setWidth(c2);C10.iC();C11.setDisplayPosition(1);C11.setParent(C8);C11.iC();C12.setColumn(C9);C12.setManage(C52);C12.setParent(C8);C12.setRow(C11);C12.setSizing("FITTOWIDTH");C12.iC();
C13.setColumn(C10);C13.setManage(C53);C13.setParent(C8);C13.setRow(C11);C13.setMarginRight(80);C13.setMarginLeft(40);C13.iC();C14.iC();C15.setDisplayPosition(1);C15.setParent(C14);C15.iC();C16.setDisplayPosition(1);C16.setParent(C14);C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C16);C17.setManage(C60);C17.setParent(C14);C17.setRow(C15);C17.setSizing("FITTOWIDTH");C17.setFlow("DOWN");C17.setMarginLeft(4);C17.setMarginRight(4);C17.setMarginTop(4);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C16);
C18.setManage(C58);C18.setParent(C14);C18.setRow(C15);C18.setSizing("FITTOWIDTH");C18.setFlow("DOWN");C18.setMarginLeft(4);C18.setMarginRight(4);C18.setMarginTop(4);C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C16);C19.setManage(C57);C19.setParent(C14);C19.setRow(C15);C19.setSizing("FITTOWIDTH");C19.setFlow("DOWN");C19.setMarginLeft(4);C19.setMarginRight(4);C19.setMarginTop(4);C19.iC();C20.setAlignment("TOPLEFT");C20.setColumn(C16);C20.setManage(C56);C20.setParent(C14);C20.setRow(C15);C20.setSizing("FITTOWIDTH");
C20.setFlow("DOWN");C20.setMarginLeft(4);C20.setMarginRight(4);C20.setMarginTop(4);C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C16);C21.setManage(C55);C21.setParent(C14);C21.setRow(C15);C21.setSizing("FITTOWIDTH");C21.setFlow("DOWN");C21.setMarginLeft(4);C21.setMarginRight(4);C21.setMarginTop(4);C21.iC();C22.setAlignment("TOPLEFT");C22.setColumn(C16);C22.setManage(C62);C22.setParent(C14);C22.setRow(C15);C22.setSizing("FITTOWIDTH");C22.setFlow("DOWN");C22.setMarginLeft(4);C22.setMarginRight(4);
C22.setMarginTop(4);C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C16);C23.setManage(C63);C23.setParent(C14);C23.setRow(C15);C23.setSizing("CONTENTHEIGHTFITTOWIDTH");C23.setFlow("DOWN");C23.setMarginLeft(4);C23.setMarginRight(4);C23.setMarginTop(4);C23.iC();C24.setAlignment("TOPLEFT");C24.setColumn(C16);C24.setManage(C59);C24.setParent(C14);C24.setRow(C15);C24.setSizing("FITTOWIDTH");C24.setFlow("DOWN");C24.setMarginLeft(4);C24.setMarginRight(4);C24.setMarginTop(4);C24.iC();C25.setAlignment("TOPLEFT");
C25.setColumn(C16);C25.setManage(C61);C25.setParent(C14);C25.setRow(C15);C25.setSizing("FITTOWIDTH");C25.setFlow("DOWN");C25.setMarginLeft(4);C25.setMarginRight(4);C25.setMarginTop(4);C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C16);C26.setManage(C64);C26.setParent(C14);C26.setRow(C15);C26.setSizing("FITTOWIDTH");C26.setFlow("DOWN");C26.setMarginLeft(4);C26.setMarginRight(4);C26.setMarginTop(4);C26.iC();C27.setAlignment("TOPLEFT");C27.setColumn(C16);C27.setParent(C14);C27.setRow(C15);C27.setSizing("FITTOWIDTH");
C27.setFlow("DOWN");C27.setMarginLeft(4);C27.setMarginRight(4);C27.setMarginTop(4);C27.iC();C28.setColumn(C16);C28.setManage(C54);C28.setParent(C14);C28.setRow(C15);C28.setAlignment("TOPLEFT");C28.iC();C29.iC();C30.setDisplayPosition(1);C30.setParent(C29);C30.iC();C31.setDisplayPosition(1);C31.setParent(C29);C31.iC();C32.setAlignment("TOPLEFT");C32.setColumn(C31);C32.setManage(C63);C32.setParent(C29);C32.setRow(C30);C32.setSizing("FITTOWIDTH");C32.setFlow("DOWN");C32.setMarginLeft(16);C32.setMarginRight(16);
C32.iC();C33.setAlignment("TOPLEFT");C33.setColumn(C31);C33.setManage(C62);C33.setParent(C29);C33.setRow(C30);C33.setSizing("FITTOWIDTH");C33.setFlow("DOWN");C33.setMarginLeft(16);C33.setMarginRight(16);C33.iC();C34.setAlignment("TOPLEFT");C34.setColumn(C31);C34.setManage(C64);C34.setParent(C29);C34.setRow(C30);C34.setSizing("FITTOWIDTH");C34.setFlow("DOWN");C34.setMarginLeft(16);C34.setMarginRight(16);C34.iC();C35.setAlignment("TOPLEFT");C35.setColumn(C31);C35.setManage(C61);C35.setParent(C29);C35.setRow(C30);
C35.setSizing("FITTOWIDTH");C35.setFlow("DOWN");C35.setMarginLeft(16);C35.setMarginRight(16);C35.iC();C36.setAlignment("TOPLEFT");C36.setColumn(C31);C36.setManage(C60);C36.setParent(C29);C36.setRow(C30);C36.setSizing("FITTOWIDTH");C36.setFlow("DOWN");C36.setMarginLeft(16);C36.setMarginRight(16);C36.iC();C37.setAlignment("TOPLEFT");C37.setColumn(C31);C37.setManage(C59);C37.setParent(C29);C37.setRow(C30);C37.setSizing("FITTOWIDTH");C37.setFlow("DOWN");C37.setMarginLeft(16);C37.setMarginRight(16);C37.iC();
C38.setAlignment("TOPLEFT");C38.setColumn(C31);C38.setManage(C58);C38.setParent(C29);C38.setRow(C30);C38.setSizing("FITTOWIDTH");C38.setFlow("DOWN");C38.setMarginLeft(16);C38.setMarginRight(16);C38.iC();C39.setAlignment("TOPLEFT");C39.setColumn(C31);C39.setManage(C57);C39.setParent(C29);C39.setRow(C30);C39.setSizing("FITTOWIDTH");C39.setFlow("DOWN");C39.setMarginLeft(16);C39.setMarginRight(16);C39.iC();C40.setAlignment("TOPLEFT");C40.setColumn(C31);C40.setManage(C56);C40.setParent(C29);C40.setRow(C30);
C40.setSizing("FITTOWIDTH");C40.setFlow("DOWN");C40.setMarginLeft(16);C40.setMarginRight(16);C40.iC();C41.setAlignment("TOPLEFT");C41.setColumn(C31);C41.setManage(C55);C41.setParent(C29);C41.setRow(C30);C41.setSizing("FITTOWIDTH");C41.setFlow("DOWN");C41.setMarginLeft(16);C41.setMarginRight(16);C41.setMarginTop(16);C41.iC();C42.setAlignment("TOPLEFT");C42.setColumn(C31);C42.setManage(C68);C42.setParent(C29);C42.setRow(C30);C42.setSizing("FITTOWIDTH");C42.setFlow("DOWN");C42.setMarginLeft(16);C42.setMarginRight(16);
C42.setMarginTop(16);C42.iC();C43.iC();C44.setDisplayPosition(1);C44.setParent(C43);C44.iC();C45.setDisplayPosition(1);C45.setParent(C43);C45.iC();C46.setColumn(C45);C46.setManage(C54);C46.setParent(C43);C46.setRow(C44);C46.iC();C47.setManage(C65);C47.setParent(C2);C47.setRow(C5);C47.setSizing("CONTENTHEIGHTFITTOWIDTH");C47.setColumn(C3);C47.setAlignment("BOTTOMCENTER");C47.iC();C48.setAlignment("CENTERRIGHT");C48.setColumn(C10);C48.setManage(C66);C48.setParent(C8);C48.setRow(C11);C48.setSizing("NONE");
C48.setFlow("LEFT");C48.iC();C49.setColumn(C10);C49.setManage(C67);C49.setParent(C8);C49.setRow(C11);C49.setAlignment("CENTERRIGHT");C49.setFlow("LEFT");C49.setSizing("NONE");C49.iC();C50.setParent(this);C50.setDisplayPosition(3);C50.setTabPosition(2);C50.setHeight(527);C50.setLeft(0);C50.setTop(48);C50.setWidth(382);C50.setVerticalScroll(true);C50.setLayoutManager(C43);C50.iC();C51.setParent(this);C51.setDisplayPosition(2);C51.setTabPosition(1);C51.setThemeDrawStyle("DarkTitle");C51.setHeight(48);
C51.setLeft(0);C51.setTop(0);C51.setWidth(382);C51.setLayoutManager(C8);C51.iC();C52.setDisplayPosition(1);C52.setIcon("arrow_back");C52.setLeft(0);C52.setParent(C51);C52.setTabPosition(3);C52.setTop(4);C52.setHeight(40);C52.setWidth(40);C52.iC();C53.setDisplayPosition(2);C53.setLeft(80);C53.setParent(C51);C53.setTabPosition(4);C53.setThemeDrawStyle("Heading2");C53.setTop(0);C53.setHeight(48);C53.setWidth(222);C53.setWordWrap(true);C53.setCaptionAlignment("CENTER");C53.iC();C54.setParent(C50);C54.setDisplayPosition(1);
C54.setTabPosition(1);C54.setHeight(527);C54.setLeft(0);C54.setTop(0);C54.setWidth(382);C54.setLayoutManager(C29);C54.setVerticalScroll(true);C54.iC();C55.setDisplayPosition(1);C55.setLeft(16);C55.setParent(C54);C55.setTabPosition(1);C55.setTop(16);C55.setWidth(332);C55.setThemeDrawStyle("Heading3");C55.aD();C55.iC();C56.setDisplayPosition(2);C56.setLeft(16);C56.setParent(C54);C56.setTabPosition(2);C56.setTop(91);C56.setWidth(332);C56.setThemeDrawStyle("Heading3");C56.aD();C56.iC();C57.setDisplayPosition(3);
C57.setLeft(16);C57.setParent(C54);C57.setTabPosition(3);C57.setTop(166);C57.setWidth(332);C57.setThemeDrawStyle("Heading3");C57.aD();C57.iC();C58.setDisplayPosition(5);C58.setLeft(16);C58.setParent(C54);C58.setTabPosition(5);C58.setTop(316);C58.setWidth(332);C58.setThemeDrawStyle("Heading3");C58.aD();C58.iC();C59.setParent(C54);C59.setDisplayPosition(4);C59.setTabPosition(4);C59.setLeft(16);C59.setTop(241);C59.setWidth(332);C59.setCaption("Vehicle Idenitifaction Number");C59.setThemeDrawStyle("Heading3");
C59.aD();C59.iC();C60.setDisplayPosition(6);C60.setLeft(16);C60.setParent(C54);C60.setTabPosition(6);C60.setTop(391);C60.setWidth(332);C60.setThemeDrawStyle("Heading3");C60.setCaption("Accident Date");C60.setCaptionType("CAPTION");C60.aD();C60.iC();C61.setDisplayPosition(9);C61.setParent(C54);C61.setTabPosition(8);C61.setTop(632);C61.setWidth(332);C61.setCaption("Accident Location");C61.setPromptIcon("fa-map-marker");C61.setPromptIconColor("252:77:1");C61.setPromptIconHeight(34);C61.setIconImageSizing("NONE");
C61.setIconHeight(36);C61.setCaptionType("LABEL");C61.setCaptionPosition("NONE");C61.setPromptOnly(true);C61.setThemeDrawStyle("Heading3");C61.setLeft(16);C61.aD();C61.iC();C62.setCaption("Audio Notes");C62.setDisplayPosition(10);C62.setParent(C54);C62.setTabPosition(9);C62.setTop(707);C62.setWidth(332);C62.setPromptIcon("fa-microphone");C62.setPromptIconImageSizing("NONE");C62.setPromptIconColor("NAVY");C62.setPromptIconHeight(32);C62.setPlaceholder("Add Audio Notes");C62.setCaptionPosition("NONE");
C62.setIconHeight(36);C62.setPromptOnly(true);C62.setThemeDrawStyle("Heading3");C62.setLeft(16);C62.iC();C63.setDisplayPosition(11);C63.setParent(C54);C63.setTabPosition(10);C63.setTop(782);C63.setWidth(332);C63.setMultiLine(true);C63.setHeight(300);C63.setThemeDrawStyle("Heading3");C63.setLeft(16);C63.setAppearance("TEXTFIELDAREA");C63.aD();C63.iC();C64.setDisplayPosition(7);C64.setParent(C54);C64.setTabPosition(7);C64.setTop(466);C64.setWidth(332);C64.setCaption("Add Image of Damage");C64.setPromptOnly(true);
C64.setPromptIcon("photo_camera");C64.setCaptionPosition("NONE");C64.setPlaceholder("Add Image of Damage");C64.setPromptIconColor("128:0:64");C64.setPromptIconHeight(34);C64.setThemeDrawStyle("Heading3");C64.setLeft(16);C64.iC();C65.setParent(this);C65.setDisplayPosition(1);C65.setTabPosition(3);C65.setTop(523);C65.setWidth(382);C65.setThemeDrawStyle("LightError");C65.setDuration(3000);C65.setWordWrap(true);C65.setHeight(52);C65.iC();C66.setDisplayPosition(4);C66.setLeft(302);C66.setParent(C51);C66.setTabPosition(1);
C66.setTop(4);C66.setIcon("delete_forever");C66.setHeight(40);C66.setWidth(40);C66.iC();C67.setDisplayPosition(3);C67.setIcon("check");C67.setLeft(342);C67.setParent(C51);C67.setTabPosition(2);C67.setTop(4);C67.setWidth(40);C67.setHeight(40);C67.iC();C68.setCaption("Location");C68.setDisplayPosition(8);C68.setLeft(16);C68.setParent(C54);C68.setTop(557);C68.setWidth(332);C68.setPromptIcon("fa-map-marker");C68.setPromptIconColor("252:77:1");C68.setPromptIconHeight(32);C68.setCaptionPosition("NONE");
C68.setTabPosition(11);C68.iC();l.WEB().aH("DEVICECHANGED",this,e8);C52.aH("CLICK",this,e5);C60.aH("CHANGED",this,e7);C61.aH("PROMPTING",this,e1);C62.aH("PROMPTING",this,e3);C64.aH("PROMPTING",this,e2);C66.aH("CLICK",this,e6);C67.aH("CLICK",this,e4);C68.aH("PROMPTING",this,e1);this.setHeight(577);this.setWidth(384);this.setLayoutManager(C2);this.setPlacement("FULLSCREEN");this.setStyle(C0);this.setAutoClose(true);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Coordinates.Prompting #Location.Prompting",108);
r.ln=108;{r.ln=110;this.fE("SHOWMAP");}r.ln=112;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#CameraPrompt.Prompting",114);r.ln=114;{r.ln=116;this.fE("SHOWCAMERA");}r.ln=118;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#AudioNotes.Prompting",120);r.ln=120;{r.ln=122;this.fE("SHOWRECORDER");}r.ln=124;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Save.Click",126);r.ln=126;{r.ln=128;this.fE("CLOSEANDSAVE");}r.ln=130;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#Close.Click",132);
r.ln=132;{r.ln=134;this.fE("CLOSEDISCARD");}r.ln=136;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#Delete.Click",138);r.ln=138;{r.ln=140;this.fE("DELETE");}r.ln=142;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#AccidentDate.Changed",144);r.ln=144;{r.ln=146;this.setModified(true);}r.ln=148;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",150);r.ln=150;{r.ln=152;{var v1=l.WEB().getDevice();if(r.ln=154,l.or(l.s.eq(v1,"MOBILE"),l.s.eq(v1,"TABLET"))){r.ln=156;
m.ACCIDENTDATE.setPromptOnly(true);r.ln=157;m.ACCIDENTDATE.setPromptPosition("SCREENCENTER");}else if(r.ln=159,l.s.eq(v1,"DESKTOP")){r.ln=161;m.ACCIDENTDATE.setPromptOnly(false);r.ln=162;m.ACCIDENTDATE.setPromptPosition("BOTTOM");}r.ln=164;}}r.ln=166;r.e();};cO.mthSHOWERROR=function(p0){var m=this.REF,r=l.mR(this,cO,"ShowError",172);var P0=r.cP("ERRORMESSAGE","PRIM_STR");P0.set(p0);r.ln=172;{r.ln=175;m.ALERT.setCaption(P0.get());r.ln=177;m.ALERT.setDisplayPosition(1);r.ln=179;m.ALERT.mthSHOWALERT();
}r.ln=181;r.e();};cO.mthLOADASSESSMENT=function(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14){var f=this.FLD.XAADLG07,m=this.REF,r=l.mR(this,cO,"LoadAssessment",183),mth=r;var P0=r.cPF("ASSESSMENTNUMBER",Fd.F9.Dc);var P1=r.cPF("ASSESSMENTSTATUS",Fd.F10.Dc);var P2=r.cPF("SURNAME",Fd.F1.Dc);var P3=r.cPF("GIVENNAME",Fd.F2.Dc);var P4=r.cPF("REGISTRATION",Fd.F4.Dc);var P5=r.cPF("MAKEMODEL",Fd.F3.Dc);var P6=r.cPF("VIN",Fd.F5.Dc);var P7=r.cPF("DATE",Fd.F6.Dc);var P8=r.cPF("LONGITUDE",Fd.F11.Dc);var P9=r.cPF("LATITUDE",Fd.F12.Dc);
var P10=r.cPF("AUDIO",Fd.F13.Dc);var P11=r.cPF("NOTES",Fd.F8.Dc);var P12=r.cPF("ACCIDENTIMAGE",Fd.F14.Dc);var P13=r.cPF("AUDIOFILE",Fd.F15.Dc);var P14=r.cPF("IMAGEFILE",Fd.F16.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4.set(p4);P5.set(p5);P6.set(p6);P7.set(p7);P8.set(p8);P9.set(p9);P10.set(p10);P11.set(p11);P12.set(p12);P13.set(p13);P14.set(p14);var C0=r.cDR("GETADDRESS","XAASRVM","GETADDRESS");C0.iC();C0.aH("COMPLETED",this,e9);r.ln=183;{r.ln=202;m.HEADING.set(l.s.Substitute("Assessment: &1",l.n.AsDisplayString(P0.get(),12,0,"EDITCODE_D")));
r.ln=204;this.setASSESSMENTNUMBER(P0.get());r.ln=206;m.DRIVERSURNAME.set(P2.get());r.ln=208;m.DRIVERGIVENNAME.set(P3.get());r.ln=210;m.VEHICLEMAKEMODEL.set(P5.get());r.ln=212;m.VEHICLEREG.set(P4.get());r.ln=214;m.VEHICLEVIN.set(P6.get());r.ln=216;m.ACCIDENTDATE.set(P7.get());r.ln=218;f.F12.set(P8.get());r.ln=220;f.F11.set(P9.get());r.ln=222;m.COORDINATES.set(l.s.Substitute("&1N &2W",l.n.AsString(this.getLATITUDE()),l.n.AsString(this.getLONGITUDE())));r.ln=224;m.CAMERAPROMPT.set(P14.get());r.ln=226;
m.AUDIONOTES.set(P13.get());f.F15.set(P13.get());r.ln=228;m.ACCIDENTNOTES.set(P11.get());r.ln=230;this.setACCIDENTIMAGE(P12.get());r.ln=232;this.setACCIDENTAUDIO(P10.get());r.ln=234;this.setModified(false);r.ln=236;C0.mthEXECUTE({FLD:{"XACCLATIT":this.getLATITUDE(),"XACCLONGI":this.getLONGITUDE()}},{FLD:{"XADDRESS":m.LOCATION}});}r.ln=247;r.e();function e9(sender,Ps){var r=l.eR(this,cO,"#GetAddress.Completed",238,mth);r.ln=238;{r.ln=240;m.LOCATION.setVisible(l.n.gt(l.s.CurChars(m.LOCATION.getValue()),0));
r.ln=242;m.COORDINATES.setVisible(l.n.eq(l.s.CurChars(m.LOCATION.getValue()),0));r.ln=244;this.mthSHOW();}r.ln=246;r.e();}};cO.mthLOADIMAGE=function(p0,p1,p2){var f=this.FLD.XAADLG07,m=this.REF,r=l.mR(this,cO,"LoadImage",249);var P0=r.cP("FILE","PRIM_STR");var P1=r.cP("BASE64DATA","PRIM_STR");var P2=r.cP("MIMETYPE","PRIM_STR");P0.set(p0);P1.set(p1);P2.set(p2);r.ln=249;{r.ln=255;m.CAMERAPROMPT.set(l.s.Substring(P0.get(),l.add(l.s.LastPositionOf(P0.get(),"/"),1)));r.ln=257;f.F14.set(cO.mthCREATEBLOB.call(this,P1.get(),P2.get()));
r.ln=259;this.setModified(true);}r.ln=261;r.e();};cO.mthLOADAUDIO=function(p0,p1,p2){var f=this.FLD.XAADLG07,m=this.REF,r=l.mR(this,cO,"LoadAudio",263);var P0=r.cP("FILE","PRIM_STR");var P1=r.cP("BASE64DATA","PRIM_STR");var P2=r.cP("MIMETYPE","PRIM_STR");P0.set(p0);P1.set(p1);P2.set(p2);r.ln=263;{r.ln=268;m.AUDIONOTES.set(P0.get());f.F15.set(P0.get());r.ln=270;f.F13.set(cO.mthCREATEBLOB.call(this,P1.get(),P2.get()));r.ln=272;this.setModified(true);}r.ln=274;r.e();};cO.mthCOORDINATESCHANGED=function(p0,p1)
{var m=this.REF,r=l.mR(this,cO,"CoordinatesChanged",276),mth=r;var P0=r.cPF("LATITUDE",Fd.F11.Dc);var P1=r.cPF("LONGITUDE",Fd.F12.Dc);P0.set(p0);P1.set(p1);var C0=r.cDR("GETADDRESS","XAASRVM","GETADDRESS");C0.iC();C0.aH("COMPLETED",this,e10);r.ln=276;{r.ln=282;this.setLONGITUDE(P1.get());r.ln=284;this.setLATITUDE(P0.get());r.ln=286;m.COORDINATES.set(l.s.Substitute("&1N &2W",l.n.AsString(this.getLATITUDE()),l.n.AsString(this.getLONGITUDE())));r.ln=288;C0.mthEXECUTE({FLD:{"XACCLATIT":this.getLATITUDE(),"XACCLONGI":this.getLONGITUDE()}},{FLD:{"XADDRESS":m.LOCATION}});
}r.ln=300;r.e();function e10(sender,Ps){var r=l.eR(this,cO,"#GetAddress.Completed",290,mth);r.ln=290;{r.ln=292;m.LOCATION.setVisible(l.n.gt(l.s.CurChars(m.LOCATION.getValue()),0));r.ln=294;m.COORDINATES.setVisible(l.n.eq(l.s.CurChars(m.LOCATION.getValue()),0));r.ln=296;this.setModified(true);}r.ln=298;r.e();}};cO.mthCREATEBLOB=function(p0,p1){var r=l.mR(this,cO,"CreateBlob",302);var P0=r.cP("BASE64","PRIM_STR");var P1=r.cP("MIMETYPE","PRIM_STR");var P2=r.cPF("RESULT",Fd.F17.Dc);P0.set(p0);P1.set(p1);
r.ln=302;{r.ln=307;P2.set(l.WEB().mthCREATEBLOB(P0.get(),P1.get()));}r.ln=309;return r.rV(P2.get());};cO.mthSETMODIFIEDVALUES=function(){var f=this.FLD.XAADLG07,m=this.REF,r=l.mR(this,cO,"SetModifiedValues",311);r.ln=311;{r.ln=313;f.F1.set(m.DRIVERSURNAME.get());r.ln=315;f.F2.set(m.DRIVERGIVENNAME.get());r.ln=317;f.F1.set(m.DRIVERSURNAME.get());r.ln=319;f.F3.set(m.VEHICLEMAKEMODEL.get());r.ln=321;f.F4.set(m.VEHICLEREG.get());r.ln=323;f.F5.set(m.VEHICLEVIN.get());r.ln=325;f.F6.set(m.ACCIDENTDATE.get());
r.ln=327;f.F16.set(m.CAMERAPROMPT.get());r.ln=329;f.F15.set(m.AUDIONOTES.get());r.ln=331;f.F8.set(m.ACCIDENTNOTES.get());}r.ln=333;r.e();};cO.getASSESSMENTNUMBER=function(){var f=this.FLD.XAADLG07;return f.F9.get();};cO.setASSESSMENTNUMBER=function(v){var f=this.FLD.XAADLG07;f.F9.set(v);};cO.getASSESSMENTSTATUS=function(){var f=this.FLD.XAADLG07;return f.F10.get();};cO.setASSESSMENTSTATUS=function(v){var f=this.FLD.XAADLG07;f.F10.set(v);};cO.getDRIVERSURNAME=function(){var f=this.FLD.XAADLG07;return f.F1.get();
};cO.setDRIVERSURNAME=function(v){var f=this.FLD.XAADLG07;f.F1.set(v);};cO.getDRIVERGIVENNAME=function(){var f=this.FLD.XAADLG07;return f.F2.get();};cO.setDRIVERGIVENNAME=function(v){var f=this.FLD.XAADLG07;f.F2.set(v);};cO.getVEHICLEMAKEMODEL=function(){var f=this.FLD.XAADLG07;return f.F3.get();};cO.setVEHICLEMAKEMODEL=function(v){var f=this.FLD.XAADLG07;f.F3.set(v);};cO.getVEHICLEREGISTRATION=function(){var f=this.FLD.XAADLG07;return f.F4.get();};cO.setVEHICLEREGISTRATION=function(v){var f=this.FLD.XAADLG07;
f.F4.set(v);};cO.getVEHICLEIDENTIFICATION=function(){var f=this.FLD.XAADLG07;return f.F5.get();};cO.setVEHICLEIDENTIFICATION=function(v){var f=this.FLD.XAADLG07;f.F5.set(v);};cO.getACCIDENTDATE=function(){var f=this.FLD.XAADLG07;return f.F6.get();};cO.setACCIDENTDATE=function(v){var f=this.FLD.XAADLG07;f.F6.set(v);};cO.getLATITUDE=function(){var f=this.FLD.XAADLG07;return f.F11.get();};cO.setLATITUDE=function(v){var f=this.FLD.XAADLG07;f.F11.set(v);};cO.getLONGITUDE=function(){var f=this.FLD.XAADLG07;
return f.F12.get();};cO.setLONGITUDE=function(v){var f=this.FLD.XAADLG07;f.F12.set(v);};cO.getACCIDENTNOTES=function(){var f=this.FLD.XAADLG07;return f.F8.get();};cO.setACCIDENTNOTES=function(v){var f=this.FLD.XAADLG07;f.F8.set(v);};cO.getACCIDENTIMAGE=function(){var f=this.FLD.XAADLG07;return f.F14.get();};cO.setACCIDENTIMAGE=function(v){var f=this.FLD.XAADLG07;f.F14.set(v);};cO.getACCIDENTIMAGEFILE=function(){var f=this.FLD.XAADLG07;return f.F16.get();};cO.setACCIDENTIMAGEFILE=function(v){var f=this.FLD.XAADLG07;
f.F16.set(v);};cO.getACCIDENTAUDIO=function(){var f=this.FLD.XAADLG07;return f.F13.get();};cO.setACCIDENTAUDIO=function(v){var f=this.FLD.XAADLG07;f.F13.set(v);};cO.getACCIDENTAUDIOFILE=function(){var f=this.FLD.XAADLG07;return f.F15.get();};cO.setACCIDENTAUDIOFILE=function(v){var f=this.FLD.XAADLG07;f.F15.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XACCDRVSN"});Fd.F1.EDITFIELD=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XACCDRVSN",cn:"EditField"});
}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XACCDRVGN"});Fd.F2.EDITFIELD=function(){this.aN.call(this,new Fd.F2.Dc());};l.cFC({co:Fd.F2.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XACCDRVGN",cn:"EditField"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XACCVMM"});Fd.F3.EDITFIELD=function(){this.aN.call(this,new Fd.F3.Dc());};l.cFC({co:Fd.F3.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XACCVMM",cn:"EditField"});}{Fd.F4.Dc=function()
{this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XACCVREG"});Fd.F4.EDITFIELD=function(){this.aN.call(this,new Fd.F4.Dc());};l.cFC({co:Fd.F4.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XACCVREG",cn:"EditField"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XACCVIN"});Fd.F5.EDITFIELD=function(){this.aN.call(this,new Fd.F5.Dc());};l.cFC({co:Fd.F5.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XACCVIN",cn:"EditField"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);
};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XACCDATE"});Fd.F6.DATETIMEFIELD=function(){this.aN.call(this,new Fd.F6.Dc());};l.cFC({co:Fd.F6.DATETIMEFIELD,an:"PRIM_MD",at:"DateTimeField",fn:"XACCDATE",cn:"DateTimeField"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XACCCRDNT"});Fd.F7.EDITFIELD=function(){this.aN.call(this,new Fd.F7.Dc());};l.cFC({co:Fd.F7.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XACCCRDNT",cn:"EditField"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);
};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XACCNOTES"});Fd.F8.EDITFIELD=function(){this.aN.call(this,new Fd.F8.Dc());};l.cFC({co:Fd.F8.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XACCNOTES",cn:"EditField"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XACCASSNO"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"XACCSTAT"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"XACCLATIT"});
}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"XACCLONGI"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"XACCAUDIO"});}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"XACCIMAGE"});}{Fd.F15.Dc=function(){this.aN.call(this,Fd.F15);};l.cFC({co:Fd.F15.Dc,an:"PRIM_FLD",fn:"XACCAUDF"});}{Fd.F16.Dc=function(){this.aN.call(this,Fd.F16);};l.cFC({co:Fd.F16.Dc,an:"PRIM_FLD",fn:"XACCIMGF"});
}{Fd.F17.Dc=function(){this.aN.call(this,Fd.F17);};l.cFC({co:Fd.F17.Dc,an:"PRIM_FLD",fn:"STD_BLOB"});}},{rp:["PRIM_DLG","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_MD.Icon","PRIM_MD.Label","PRIM_FLD","PRIM_MD.EditField","PRIM_MD.DateTimeField","PRIM_MD.Edit","PRIM_MD.Alert","PRIM_WEB.DataRequest"]});