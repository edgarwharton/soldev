﻿LANSA.addComponent({id:"DF_PRM08O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=5250 Prompter for RAMP",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"STD_TEXT",ft:"A",ln:50,dc:0,lb:{"ENG":"Text","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Text","FRA":"?","JPN":"?"}[cL],h2:"",h3:"",de:{"ENG":"Standard TEXT","FRA":"?","JPN":"?"}[cL],dv:"",ia:["LC"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"Text must be specified","FRA":"? must be specified","JPN":"? must be specified"}[cL]}]},F3:{nm:"STD_TEXTL",ft:"A",ln:75,dc:0,lb:{"ENG":"Text","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Text","FRA":"?","JPN":"?"}[cL],h2:"",h3:"",de:{"ENG":"Standard TEXT, LONG","FRA":"?","JPN":"?"}[cL],
dv:"",ia:["LC"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl2,mt:{"ENG":"Text must be specified","FRA":"? must be specified","JPN":"? must be specified"}[cL]}]}};var cO=l.rC(oI,{an:"VF_AC017O",fd:Fd,mt:{uInitialize:{},uShow:{ps:{"Top":{pt:"i"},"Left":{pt:"i"},"Height":{pt:"i"},"Width":{pt:"i"}}},FillListValues:{}},co:function(){cO.aN.call(this);var f=this.aF("DF_PRM08O",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEM1","PRIM_ATLI");var C2=this.cR("ATTACHITEM2","PRIM_ATLI");
var C3=this.cR("LAYOUTLIST","PRIM_TBLO");var C4=this.cR("LAYOUTLISTCOLUMN1","PRIM_TBLO","Column");var C5=this.cR("LAYOUTLISTROW1","PRIM_TBLO","Row");var C6=this.cR("LAYOUTLISTITEM1","PRIM_TBLO","Item");var C7=this.cR("LAYOUTLISTITEM2","PRIM_TBLO","Item");var C8=this.cR("LAYOUTLISTITEM3","PRIM_TBLO","Item");var C9=this.cR("SEARCHTEXT","PRIM_MD","Edit");var C10=this.cR("LIST","PRIM_MD","List");var C11=this.cR("LISTICON","PRIM_MD","ListIcon");var C12=this.cR("LISTPRIMARYTEXT","PRIM_MD","ListLabel");
var C13=this.cR("LISTSECONDARYTEXT","PRIM_MD","ListLabel");var C14=this.cR("CURRENTFIELDVALUE","PRIM_DC","UnicodeString");var C15=this.cR("USEICON","PRIM_ALPH");C0.iC();C1.setManage(C9);C1.setParent(C0);C1.setAttachment("TOP");C1.iC();C2.setManage(C10);C2.setParent(C0);C2.setAttachment("CENTER");C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(1);C5.setParent(C3);C5.iC();C6.setAlignment("CENTERLEFT");C6.setColumn(C4);C6.setMarginLeft(20);C6.setParent(C3);C6.setRow(C5);
C6.setSizing("NONE");C6.iC();C7.setAlignment("CENTERLEFT");C7.setColumn(C4);C7.setFlow("CENTERVERTICAL");C7.setManage(C12);C7.setMarginLeft(100);C7.setMarginRight(32);C7.setParent(C3);C7.setRow(C5);C7.setSizing("CONTENTHEIGHTFITTOWIDTH");C7.iC();C8.setAlignment("CENTERLEFT");C8.setColumn(C4);C8.setFlow("CENTERVERTICAL");C8.setManage(C13);C8.setMarginLeft(100);C8.setMarginRight(32);C8.setParent(C3);C8.setRow(C5);C8.setSizing("CONTENTHEIGHTFITTOWIDTH");C8.iC();C9.setAppearance("EDITBOX");C9.setCaptionPosition("NONE");
C9.setDisplayPosition(1);C9.setHeight(40);C9.setHelperPosition("NONE");C9.setIcon("search");C9.setLeft(0);C9.setParent(this);C9.setPlaceholder("Enter a search value");C9.setTabPosition(1);C9.setTop(30);C9.setWidth(271);C9.iC();C10.setDisplayPosition(2);C10.setLayoutManager(C3);C10.setLeft(0);C10.setParent(this);C10.setRowHeight(100);C10.setTabPosition(2);C10.setThemeDrawStyle("Card");C10.setTop(70);C10.setHeight(377);C10.setWidth(271);C10.iC();C11.setDisplayPosition(1);C11.setHeight(60);C11.setLeft(20);
C11.setParent(C10);C11.setTabPosition(1);C11.setThemeDrawStyle("MediumTitle+Rounded");C11.setTop(20);C11.setWidth(60);C11.setIconImageSizing("CROPPED");C11.iC();C12.setCaption("Name");C12.setDisplayPosition(2);C12.setHeight(21);C12.setLeft(100);C12.setParent(C10);C12.setTabPosition(2);C12.setTop(29);C12.setWidth(137);C12.setSource(f.F2);C12.iC();C13.setCaption("Description");C13.setDisplayPosition(4);C13.setHeight(21);C13.setLeft(100);C13.setParent(C10);C13.setTabPosition(4);C13.setTop(50);C13.setWidth(137);
C13.setSource(f.F3);C13.iC();C14.iC();C15.iC();C9.aH("CHANGED",this,e1);C9.aH("ICONCLICK",this,e1);C9.aH("ENTER",this,e1);C10.aH("ITEMCLICK",this,e2);this.setHeight(449);this.setWidth(273);this.setLayoutManager(C0);this.setTouchMove("BOTH");this.setTouchSize("ALL");this.setCloseButton(true);this.setTitleBar(true);}});cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",49);r.ln=49;{r.ln=55;m.USEICON.set("label_outline");}r.ln=56;r.e();};cO.mthUSHOW=function(p0,p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"uShow",63);
var P0=r.cPF("TOP",Fd.F1.Dc);var P1=r.cPF("LEFT",Fd.F1.Dc);var P2=r.cPF("HEIGHT",Fd.F1.Dc);var P3=r.cPF("WIDTH",Fd.F1.Dc);P0.set((p0===u)?(-999999):(p0));P1.set((p1===u)?(-999999):(p1));P2.set((p2===u)?(-999999):(p2));P3.set((p3===u)?(-999999):(p3));r.ln=63;{r.ln=66;this.mthUGET5250FIELD(this.getUPROMPT5250FIELD(),this.getUPROMPT5250INDEX(),m.CURRENTFIELDVALUE,u);r.ln=68;this.mthFILLLISTVALUES();r.ln=70;this.setVisible(true);r.ln=72;this.mthSHOWPOPUP(P1.get(),P0.get(),"ABSOLUTE",u,u);}r.ln=74;r.e();
};cO.mthFILLLISTVALUES=function(){var m=this.REF,r=l.mR(this,cO,"FillListValues",80);r.ln=80;{r.ln=82;m.LIST.clearList();r.ln=84;m.SEARCHTEXT.setValue("");m.SEARCHTEXT.setVisible(false);r.ln=86;{var v1=this.getUPROMPT5250FIELD();if(r.ln=88,l.s.eq(v1,"PRO_CLASS")){r.ln=89;this.setCaption("Product Classes");r.ln=92;m.USEICON.set("label_outline");r.ln=94;sr1.call(this,"TOOLS","Tools and Equipment");r.ln=95;sr1.call(this,"CLEANER","Cleaner (non-solvent)");r.ln=96;sr1.call(this,"CREAMS","Creams and Lubricants");
r.ln=97;sr1.call(this,"SOLVENTS","Solvents, including cleaners");r.ln=98;sr1.call(this,"GLUES","Glues and Adhesives");r.ln=99;sr1.call(this,"BUTTONS","Buttons & Switches");r.ln=100;sr1.call(this,"ELECTRIC","Electrical Items");}else if(r.ln=102,l.s.eq(v1,"PRO_GROUP")){r.ln=103;this.setCaption("Product Groups");r.ln=106;m.USEICON.set("view_comfy");r.ln=108;sr1.call(this,"LIGHTUSE","Light usage only");r.ln=109;sr1.call(this,"HEAVYUSE","Heavy industrial use");r.ln=110;sr1.call(this,"TBA","Unknown. To be advised.");
r.ln=111;sr1.call(this,"MEDUSE","Medium use");}else if(r.ln=113,l.s.eq(v1,"PRO_BUYER")){r.ln=114;this.setCaption("Buyer Types");r.ln=117;m.USEICON.set("person");r.ln=119;sr1.call(this,"HOUSE2","In house, code 2");r.ln=120;sr1.call(this,"HOUSEIN3","In house, code 3");r.ln=121;sr1.call(this,"EXTERNAL","Outsourced");r.ln=122;sr1.call(this,"FLC-TEMP","Contract, temporary");r.ln=123;sr1.call(this,"FLC-PERM","Contract, permanent");}else if(r.ln=125,l.s.eq(v1,"PRO_UNIT")){r.ln=126;this.setCaption("Sales Units");
r.ln=129;m.USEICON.set("border_all");r.ln=131;sr1.call(this,"BAG","Bag");r.ln=132;sr1.call(this,"FLATPACK","Flatpack");r.ln=133;sr1.call(this,"PACKAGE","Standard package 1");r.ln=134;sr1.call(this,"PACKAG2","Standard package 2");r.ln=135;sr1.call(this,"PACKAG3","Standard package 3");r.ln=136;sr1.call(this,"PACKAG4","Standard package 4");r.ln=137;sr1.call(this,"PACKAG5","Standard package 5");r.ln=138;sr1.call(this,"PACKAG6","Standard package 6");r.ln=139;sr1.call(this,"SPECIAL","Contact special orders");
r.ln=140;sr1.call(this,"BOX","Small box");r.ln=141;sr1.call(this,"BOX2","Medium box");r.ln=142;sr1.call(this,"BOX3","Large box");r.ln=143;sr1.call(this,"BOX4","X-Large box");}else if(r.ln=146,l.s.eq(v1,"PRO_HAXMC")){r.ln=147;this.setCaption("Hazardous Material Codes");r.ln=148;m.SEARCHTEXT.setVisible(true);r.ln=151;m.USEICON.set("report_problem");r.ln=153;sr1.call(this,"Q4253","Internal Code High");r.ln=154;sr1.call(this,"P6578","Internal Code Low");r.ln=155;sr1.call(this,"NA","Not Applicable");r.ln=156;
sr1.call(this,"SPECIAL","Contact managment");r.ln=157;sr1.call(this,"L3274","Internal code medium");r.ln=158;sr1.call(this,"UN1001","Acetylene, dissolved");r.ln=159;sr1.call(this,"UN1002","Air, compressed");r.ln=160;sr1.call(this,"UN1003","Air, refrigerated liquid, (cryogenic liquid)");r.ln=161;sr1.call(this,"UN1005","Ammonia, anhydrous");r.ln=162;sr1.call(this,"UN1006","Argon, compressed");r.ln=163;sr1.call(this,"UN1008","Boron trifluoride, compressed");r.ln=164;sr1.call(this,"UN1009","Bromotrifluoromethane or Refrigerant gas");
r.ln=165;sr1.call(this,"UN1010","Butadienes, inhibited");r.ln=166;sr1.call(this,"UN1011","Butane see also Petroleum gases, liquefied");r.ln=167;sr1.call(this,"UN1012","Butylene see also Petroleum gases, liquefied");r.ln=168;sr1.call(this,"UN1013","Carbon dioxide");r.ln=169;sr1.call(this,"UN1016","Carbon monoxide, compressed");r.ln=170;sr1.call(this,"UN1017","Chlorine");r.ln=171;sr1.call(this,"UN1018","Chlorodifluoromethane or Refrigerant gas");r.ln=172;sr1.call(this,"UN1020","Chloropentafluoroethane or Refrigerant gas");
r.ln=173;sr1.call(this,"UN1021","1-Chloro-1,2,2,2-tetrafluoroethane or Refrigerant");r.ln=174;sr1.call(this,"UN1022","Chlorotrifluoromethane or Refrigerant gas R 13");r.ln=175;sr1.call(this,"UN1023","Coal gas, compressed");r.ln=176;sr1.call(this,"UN1026","Cyanogen");r.ln=177;sr1.call(this,"UN1027","Cyclopropane");r.ln=178;sr1.call(this,"UN1028","Dichlorodifluoromethane or Refrigerant gas R 12");r.ln=179;sr1.call(this,"UN1029","Dichlorofluoromethane or Refrigerant gas R 21");r.ln=180;sr1.call(this,"UN1030","1,1-Difluoroethane or Refrigerant gas R 152a");
r.ln=181;sr1.call(this,"UN1032","Dimethylamine, anhydrous");r.ln=182;sr1.call(this,"UN1033","Dimethyl ether");r.ln=183;sr1.call(this,"UN1035","Ethane");r.ln=184;sr1.call(this,"UN1036","Ethylamine");r.ln=185;sr1.call(this,"UN1037","Ethyl chloride");r.ln=186;sr1.call(this,"UN1038","Ethylene, refrigerated liquid (cryogenic liquid)");r.ln=187;sr1.call(this,"UN1039","Ethyl methyl ether");r.ln=188;sr1.call(this,"UN1040","Ethylene oxide or Ethylene oxide with nitrogen");r.ln=189;sr1.call(this,"UN1041","Ethylene oxide and carbon dioxide mixtures");
r.ln=190;sr1.call(this,"UN1043","Fertilizer ammoniating solution with free ammonia");r.ln=191;sr1.call(this,"UN1044","Fire extinguishers containing compressed or liquefied gas");r.ln=192;sr1.call(this,"UN1045","Fluorine, compressed");r.ln=193;sr1.call(this,"UN1046","Helium, compressed");r.ln=194;sr1.call(this,"UN1048","Hydrogen bromide, anhydrous");r.ln=195;sr1.call(this,"UN1049","Hydrogen, compressed");r.ln=196;sr1.call(this,"UN1050","Hydrogen chloride, anhydrous");r.ln=197;sr1.call(this,"UN1051","Hydrogen cyanide, stabilized with less than 3 percent water");
r.ln=198;sr1.call(this,"UN1052","Hydrogen fluoride, anhydrous");r.ln=199;sr1.call(this,"UN1053","Hydrogen sulfide");r.ln=200;sr1.call(this,"UN1055","Isobutylene see also Petroleum gases, liquefied");r.ln=201;sr1.call(this,"UN1056","Krypton, compressed");r.ln=202;sr1.call(this,"UN1057","Lighters or Lighter refills cigarettes, containing flammable gas");r.ln=203;sr1.call(this,"UN1058","Liquified gases, nonflammable charged with nitrogen, carbon dioxide, or air");r.ln=204;sr1.call(this,"UN1060","Methyl acetylene and propadiene mixtures, stabilized");
r.ln=205;sr1.call(this,"UN1061","Methylamine, anhydrous");r.ln=206;sr1.call(this,"UN1062","Methyl bromide");r.ln=207;sr1.call(this,"UN1063","Methyl chloride, or Refrigerant gas R 40");r.ln=208;sr1.call(this,"UN1064","Methyl mercaptan");r.ln=209;sr1.call(this,"UN1065","Neon, compressed");r.ln=210;sr1.call(this,"UN1066","Nitrogen, compressed");r.ln=211;sr1.call(this,"UN1067","Dinitrogen tetroxide");r.ln=212;sr1.call(this,"UN1069","Nitrosyl chloride");r.ln=213;sr1.call(this,"UN1070","Nitrous oxide");
r.ln=214;sr1.call(this,"UN1071","Oil gas, compressed");r.ln=215;sr1.call(this,"UN1072","Oxygen, compressed");r.ln=216;sr1.call(this,"UN1073","Oxygen, refrigerated liquid (cryogenic liquid)");r.ln=217;sr1.call(this,"UN1075","Petroleum gases, liquefied or Liquefied petroleum gas");r.ln=218;sr1.call(this,"UN1076","Phosgene");r.ln=219;sr1.call(this,"UN1077","Propylene see also Petroleum gases, liquefied");r.ln=220;sr1.call(this,"UN1078","Refrigerant gases, n.o.s.");r.ln=221;sr1.call(this,"UN1079","Sulfur dioxide");
r.ln=222;sr1.call(this,"UN1080","Sulfur hexafluoride");r.ln=223;sr1.call(this,"UN1081","Tetrafluoroethylene, inhibited");r.ln=224;sr1.call(this,"UN1082","Trifluorochloroethylene, inhibited");r.ln=225;sr1.call(this,"UN1083","Trimethylamine, anhydrous");r.ln=226;sr1.call(this,"UN1085","Vinyl bromide, inhibited");r.ln=227;sr1.call(this,"UN1086","Vinyl chloride, inhibited or Vinyl chloride, stabilized");r.ln=228;sr1.call(this,"UN1087","Vinyl methyl ether, inhibited");r.ln=229;sr1.call(this,"UN1088","Acetal");
r.ln=230;sr1.call(this,"UN1089","Acetaldehyde");r.ln=231;sr1.call(this,"UN1090","Acetone");r.ln=232;sr1.call(this,"UN1091","Acetone oils");r.ln=233;sr1.call(this,"UN1092","Acrolein, inhibited");r.ln=234;sr1.call(this,"UN1093","Acrylonitrile, inhibited");r.ln=235;sr1.call(this,"UN1098","Allyl alcohol");r.ln=236;sr1.call(this,"UN1099","bromide");r.ln=237;sr1.call(this,"UN1100","Allyl chloride");}else if(r.ln=239,l.s.eq(v1,"PRO_SHIPP")){r.ln=240;this.setCaption("Shipment Packages");r.ln=243;m.USEICON.set("border_all");
r.ln=245;sr1.call(this,"SKIP","3 cubic/m Skip");r.ln=246;sr1.call(this,"SKIP5","5 cubic/m Skip");r.ln=247;sr1.call(this,"SKIP7","7 cubic/m Skip");r.ln=248;sr1.call(this,"BIN","Large bin");r.ln=249;sr1.call(this,"CONTAINER","20 foot container");r.ln=250;sr1.call(this,"CONTAINER2","40 foot container");r.ln=251;sr1.call(this,"DRUM","44G Drum");r.ln=252;sr1.call(this,"DRUM2","88G Drum");r.ln=253;sr1.call(this,"DRUM3","120G Drum");r.ln=254;sr1.call(this,"BOTTLE","Bottle");r.ln=255;sr1.call(this,"WAGON","Rail wagon only");
r.ln=256;sr1.call(this,"PALLET","Small pallet");r.ln=257;sr1.call(this,"PALLET2","Medium pallet");r.ln=258;sr1.call(this,"PALLET3","Large pallet");r.ln=259;sr1.call(this,"PALLET4","X-Large pallet");}r.ln=262;}}r.ln=266;r.e();};function sr1(p0,p1){var f=this.FLD.DF_PRM08O,m=this.REF,r=l.sR(this,cO,"AddItem",270);f.F2.set(p0);f.F3.set(p1);r.ln=270;{r.ln=272;m.LIST.addEntry();r.ln=273;m.LISTICON.getCurrentItem().setIcon(m.USEICON.get());r.ln=275;if(l.tB(l.eq(f.F2.get(),m.CURRENTFIELDVALUE.get()))){r.ln=276;
m.LIST.getCurrentItem().setSelected(true);}}r.ln=279;r.e();};function e1(sender,Ps){var f=this.FLD.DF_PRM08O,m=this.REF,r=l.eR(this,cO,"#SearchText.Changed #SearchText.IconClick #SearchText.Enter",283);var C0=r.cR("SEARCHTEXTUPPER","PRIM_DC","UnicodeString");C0.iC();r.ln=283;{r.ln=287;m.SEARCHTEXT.setValue(l.s.Trim(m.SEARCHTEXT.getValue()));r.ln=290;if(l.s.eq(m.SEARCHTEXT.getValue(),"")){r.ln=292;for(var l1=m.LIST.getItems().cI();l1.step();){l1.item().setVisible(true)};}else{r.ln=296;C0.set(l.s.UpperCase(m.SEARCHTEXT.getValue()));
r.ln=298;{var l1=m.LIST.selectList();while(l1.step()){r.ln=300;m.LIST.getCurrentItem().setVisible(l.or(l.s.Contains(l.s.UpperCase(f.F2.get()),C0.get()),l.s.Contains(l.s.UpperCase(f.F3.get()),C0.get())));r.ln=302;}l1.end();}}}r.ln=307;r.e();};function e2(sender,Ps){var f=this.FLD.DF_PRM08O,r=l.eR(this,cO,"#List.ItemClick",313);r.ln=313;{r.ln=315;this.mthUSET5250FIELD(this.getUPROMPT5250FIELD(),f.F2.get(),u,this.getUPROMPT5250INDEX());r.ln=317;this.mthUHIDE();}r.ln=319;r.e();};function rl1(F2){var v=F2.get();
return(l.s.eq(v,""));};function rl2(F3){var v=F3.get();return(l.s.eq(v,""));};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC017O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Edit","PRIM_MD.List","PRIM_MD.ListIcon","PRIM_MD.ListLabel","PRIM_DC.UnicodeString","PRIM_ALPH","PRIM_FLD"],dp:["PRIM_DC.UnicodeString"]});