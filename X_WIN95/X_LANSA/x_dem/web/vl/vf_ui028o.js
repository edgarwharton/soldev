﻿LANSA.addComponent({id:"VF_UI028O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=VF_FPnnnnO visual item for VLF_ONE",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],
dv:"",ia:["FE"]},F2:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F3:{ic:0,nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]},F4:{ic:0,nm:"VF_ELSYMN",an:"VF_ELSYMNAME",
ft:"A",ln:50,dc:0,lb:"Image Name",h1:"Image",h2:"Name",h3:"",de:"Image Name",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{AssociatedReference1:{da:"rw"},AssociatedReference2:{da:"rw"},AssociatedOverFlowMenuItem:{da:"rw"},LogicalEventName:{da:"rw"},UsingCaption:{da:"r"},UsingImageName:{da:"na"},UsingImageSource:{da:"na"},LogicallyEnabled:{da:"r"},LogicallySelected:{da:"r"},uDisplayPosition:{da:"r"}},mt:{zInt_AlignMaterialStyleTabs:{},zInt_ResetBadgeContentandLocation:{},zInt_Initialize:
{ps:{"WithCaption":{pt:"i"},"WithHint":{pt:"i"},"UseImageName":{pt:"i"},"UseImageSource":{pt:"i"},"UseAssociatedReference1":{pt:"i"},"UseAssociatedReference2":{pt:"i"},"UseLogicalEventName":{pt:"i"},"Orientation":{pt:"i"},"Selected":{pt:"i"},"Enabled":{pt:"i"},"UseTabFolderStyle":{pt:"i"},"ListenToVF_AC005O":{pt:"i"},"UseReflectEnabledinVisibility":{pt:"i"},"MaterialStyleTabs":{pt:"i"},"BadgeAC001":{pt:"i"}}},zInt_SetEnabled:{ps:{"To":{pt:"i"}}},zInt_ResetBasicStyleDetails:{},zInt_SetSelected:{ps:
{"To":{pt:"i"}}},zInt_Terminate:{}},ev:{WasClicked:{},uDisplayPositionChanged:{}},co:function(){cO.aN.call(this);this.aF("VF_UI028O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C3=this.cR("ATTACHITEMIMAGE","PRIM_ATLI");var C4=this.cR("ATTACHITEMCAPTION","PRIM_ATLI");var C5=this.cR("IMAGE","VF_UI005O");var C6=this.cR("CAPTION","PRIM_LABL");this.cD("ASSOCIATEDREFERENCE1");this.cD("ASSOCIATEDREFERENCE2");this.cD("ASSOCIATEDOVERFLOWMENUITEM");
var C10=this.cF("LOGICALEVENTNAME",Fd.F1.Dc);var C11=this.cR("USINGCAPTION","PRIM_DC","UnicodeString");this.cD("BADGE");var C13=this.cR("BORDERBOTTOM","PRIM_VS","Style");var C14=this.cR("BORDERRIGHT","PRIM_VS","Style");var C15=this.cR("ROUNDEDTOP","PRIM_VS","Style");var C16=this.cR("LOGICALLYENABLED","PRIM_BOLN");var C17=this.cR("LOGICALLYSELECTED","PRIM_BOLN");var C18=this.cF("PTY_UDISPLAYPOSITION",Fd.F2.Dc);var C19=this.cR("STYLEASTABFOLDER","PRIM_BOLN");var C20=this.cR("STYLEASVERTICAL","PRIM_BOLN");
var C21=this.cR("STYLEASMATERIALTABS","PRIM_BOLN");var C22=this.cR("ATFRONTMATERIALSTYLE","PRIM_VS","Style");var C23=this.cR("ATREARMATERIALSTYLE","PRIM_VS","Style");var C24=this.cR("THEME100","PRIM_VS","SolidBrush");var C25=this.cR("THEME200","PRIM_VS","SolidBrush");var C26=this.cR("MOUSEOVERSTYLE","PRIM_VS","Style");var C27=this.cR("SELECTEDSTYLE","PRIM_VS","Style");this.cD("LISTENINGTOVF_AC005O");var C29=this.cR("REFLECTENABLEDINVISIBLITY","PRIM_BOLN");var C30=this.cR("USEMATERIALSTYLETABS","PRIM_BOLN");
if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setManage(C5);C3.setParent(C2);C3.setAttachment("LEFT");C3.setMarginLeft(4);C3.setMarginRight(4);C3.setMarginTop(8);C3.setMarginBottom(4);C3.iC();C4.setManage(C6);C4.setParent(C2);C4.setAttachment("CENTER");C4.setMarginLeft(4);C4.setMarginRight(4);C4.setMarginTop(4);C4.setMarginBottom(4);C4.iC();C5.setParent(this);C5.setLeft(4);C5.setTop(8);C5.setHeight(20);C5.iC();C6.setParent(this);C6.setDisplayPosition(2);
C6.setTabPosition(2);C6.setTabStop(false);C6.setHeight(24);C6.setLeft(28);C6.setTop(4);C6.setWidth(113);C6.setVerticalAlignment("CENTER");C6.setVisible(false);C6.setEllipses("END");C6.setWordWrap(false);C6.iC();C10.aD();C10.iC();C11.iC();C13.setBorderBottom(1);C13.iC();C14.setBorderRight(1);C14.iC();C15.setCornerTopLeft(5);C15.setCornerTopRight(5);C15.iC();C16.iC();C17.iC();C18.aD();C18.iC();C19.iC();C20.iC();C21.iC();C22.iC();C23.iC();C24.setColor("THEME100");C24.iC();C25.setColor("THEME200");C25.iC();
C26.setBackgroundBrush(C25);C26.iC();C27.setBackgroundBrush(C24);C27.setBold(true);C27.iC();C29.iC();C30.iC();C0.aH("CURRENTTHEMEALTERED",this,e2);C5.aH("WASCLICKED",this,e4);C6.aH("CLICK",this,e3);this.setDisplayPosition(1);this.setHeight(32);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(145);this.setLayoutManager(C2);this.setMouseOverStyle(C26);this.aH("CLICK",this,e3);}});cO.mthGET_IMAGEREFERENCENAME=function(){var m=this.REF,r=l.pR(this,cO,"Get_ImageReferenceName",84);var P0=r.cP("VALUE","PRIM_ALPH");
r.ln=84;{r.ln=86;P0.set(m.IMAGE.getIMAGEREFERENCENAME());}r.ln=87;return r.rV(P0.get());};cO.mthSET_IMAGEREFERENCENAME=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_ImageReferenceName",90);var P0=r.cP("VALUE","PRIM_ALPH");P0.set(p0);r.ln=90;{r.ln=92;m.IMAGE.setIMAGEREFERENCENAME(P0.get());}r.ln=93;r.e();};cO.mthGET_IMAGEREFERENCESOURCE=function(){var m=this.REF,r=l.pR(this,cO,"Get_ImageReferenceSource",96);var P0=r.cPF("VALUE",Fd.F3.Dc);r.ln=96;{r.ln=98;P0.set(m.IMAGE.getIMAGEREFERENCESOURCE());
}r.ln=99;return r.rV(P0.get());};cO.mthSET_IMAGEREFERENCESOURCE=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_ImageReferenceSource",103);var P0=r.cPF("VALUE",Fd.F3.Dc);P0.set(p0);r.ln=103;{r.ln=105;m.IMAGE.setIMAGEREFERENCESOURCE(P0.get());}r.ln=106;r.e();};cO.mthSET_UDISPLAYPOSITION=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_uDisplayPosition",109);var P0=r.cPF("VALUE",Fd.F2.Dc);P0.set(p0);r.ln=109;{r.ln=111;m.PTY_UDISPLAYPOSITION.set(P0.get());r.ln=112;this.fE("UDISPLAYPOSITIONCHANGED");}
r.ln=113;r.e();};cO.mthZINT_ALIGNMATERIALSTYLETABS=function(){var m=this.REF,r=l.mR(this,cO,"zInt_AlignMaterialStyleTabs",116);var C0=r.cF("IMAGESIZE",Fd.F2.Dc);var C1=r.cF("AVAILABLEWIDTH",Fd.F2.Dc);var C2=r.cF("TOP",Fd.F2.Dc);C0.iC();C1.iC();C2.iC();r.ln=116;{r.ln=122;if(l.tB(m.USEMATERIALSTYLETABS.get())){r.ln=124;C1.set(this.getWidth());r.ln=126;C0.set(m.IMAGE.getIMAGEDIMENSION());r.ln=128;C2.set(l.sub(l.sub(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_HEIGHT(),m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_CAPTIONHEIGHT()),m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_MATERIALSELECTEDBOTTOMBORDER().getBorderBottom()));
r.ln=130;m.CAPTION.setLeft(2);m.CAPTION.setWidth(l.sub(C1.get(),4));m.CAPTION.setTop(C2.get());m.CAPTION.setHeight(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_CAPTIONHEIGHT());m.CAPTION.setVerticalAlignment("CENTER");m.CAPTION.setAlignment("CENTER");r.ln=132;C2.set(l.sub(l.sub(m.CAPTION.getTop(),C0.get()),1));r.ln=134;m.IMAGE.setTop(C2.get());m.IMAGE.setLeft(l.add(l.div(l.sub(C1.get(),C0.get()),2),1));m.IMAGE.setHeight(C0.get());m.IMAGE.setWidth(C0.get());}}r.ln=139;r.e();};cO.mthZINT_RESETBADGECONTENTANDLOCATION=function()
{var m=this.REF,r=l.mR(this,cO,"zInt_ResetBadgeContentandLocation",142);r.ln=142;{r.ln=144;if((m.BADGE!=null)){r.ln=145;m.BADGE.mthZINT_RESETCONTENTANDLOCATION(10,u);}}r.ln=148;r.e();};cO.mthZINT_INITIALIZE=function(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",151);var P0=r.cP("WITHCAPTION","PRIM_DC","UnicodeString");var P1=r.cP("WITHHINT","PRIM_DC","UnicodeString");var P2=r.cPF("USEIMAGENAME",Fd.F4.Dc);var P3=r.cPF("USEIMAGESOURCE",Fd.F3.Dc);
var P4=r.cPD("USEASSOCIATEDREFERENCE1");var P5=r.cPD("USEASSOCIATEDREFERENCE2");var P6=r.cPF("USELOGICALEVENTNAME",Fd.F1.Dc);var P7=r.cPF("ORIENTATION",Fd.F3.Dc);var P8=r.cP("SELECTED","PRIM_BOLN");var P9=r.cP("ENABLED","PRIM_BOLN");var P10=r.cP("USETABFOLDERSTYLE","PRIM_BOLN");var P11=r.cPD("LISTENTOVF_AC005O");var P12=r.cP("USEREFLECTENABLEDINVISIBILITY","PRIM_BOLN");var P13=r.cP("MATERIALSTYLETABS","PRIM_BOLN");var P14=r.cPD("BADGEAC001");P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4=r.sR("USEASSOCIATEDREFERENCE1",(p4===u)?(null):(p4));
P5=r.sR("USEASSOCIATEDREFERENCE2",(p5===u)?(null):(p5));P6.set((p6===u)?(""):(p6));P7.set((p7===u)?("V"):(p7));P8.set(p8);P9.set(p9);P10.set(p10);P11=r.sR("LISTENTOVF_AC005O",p11);P12.set((p12===u)?(false):(p12));P13.set((p13===u)?(false):(p13));P14=r.sR("BADGEAC001",(p14===u)?(null):(p14));var C0=r.cF("USEMARGIN",Fd.F2.Dc);C0.iC();r.ln=151;{r.ln=176;m.REFLECTENABLEDINVISIBLITY.set(P12.get());r.ln=178;m.USEMATERIALSTYLETABS.set((m.USYSTEM.ref.getUIMATERIALDESIGN()&&P10.get()));r.ln=180;this.setrefLISTENINGTOVF_AC005O(P11);
r.ln=183;m.STYLEASTABFOLDER.set(P10.get());r.ln=184;m.STYLEASVERTICAL.set(l.s.eq(P7.get(),"V"));r.ln=185;m.STYLEASMATERIALTABS.set(P13.get());r.ln=188;if(l.tB(m.USEMATERIALSTYLETABS.get())){r.ln=189;this.setLayoutManager(null);r.ln=190;m.ATTACHITEMIMAGE.setManage(null);m.ATTACHITEMCAPTION.setManage(null);r.ln=191;this.setHeight(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_HEIGHT());r.ln=192;P12.set(false);}r.ln=196;if((m.LISTENINGTOVF_AC005O!=null)){r.ln=197;m.LISTENINGTOVF_AC005O.setSIGNALATFRONTSTATUSCHANGE(true);
}r.ln=200;if((m.USYSTEM.ref.getUSINGBADGES()&&(P14!=null))){r.ln=201;this.setrefBADGE(l.cC("VF_UI050O"));r.ln=202;m.BADGE.mthZINT_INITIALIZE(this,P14,"C",u,u,u,u,200);}r.ln=205;m.USINGCAPTION.set(P0.get());r.ln=207;if(l.tB(m.USEMATERIALSTYLETABS.get())){r.ln=208;m.CAPTION.setCaption(l.s.UpperCase(m.USINGCAPTION.get()));m.CAPTION.setVisible(true);}else{r.ln=210;m.CAPTION.setCaption(m.USINGCAPTION.get());m.CAPTION.setVisible(true);}r.ln=213;m.IMAGE.mthZINT_INTIALIZEIMAGE(P2.get(),P3.get(),P1.get(),m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_IMAGESIZE(),m.USEMATERIALSTYLETABS.get(),u,u,u,u);
r.ln=215;if(l.tB(m.USEMATERIALSTYLETABS.get())){r.ln=217;this.mthZINT_ALIGNMATERIALSTYLETABS();}else{r.ln=221;if(l.s.ne(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_IMAGESIZE(),"SMALL")){r.ln=223;C0.set(l.div(l.sub(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_HEIGHT(),m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_IMAGEHEIGHT()),2));r.ln=225;m.ATTACHITEMIMAGE.setMarginTop(C0.get());m.ATTACHITEMIMAGE.setMarginBottom(C0.get());m.ATTACHITEMCAPTION.setMarginTop(C0.get());m.ATTACHITEMCAPTION.setMarginBottom(C0.get());
}}r.ln=232;this.setrefASSOCIATEDREFERENCE1(P4);r.ln=233;this.setrefASSOCIATEDREFERENCE2(P5);r.ln=234;m.LOGICALEVENTNAME.set(l.s.UpperCase(P6.get()));r.ln=238;if(l.b.Not(m.USEMATERIALSTYLETABS.get())){r.ln=240;this.setWidth(l.add(m.USYSTEM.ref.getCURRENTTHEME().mthESTIMATEPIXELWIDTH(P0.get()),4));r.ln=241;this.setWidth(l.add(this.getWidth(),l.add(m.IMAGE.getIMAGEDIMENSION(),m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_ITEMSEPARATION())));r.ln=243;if((m.BADGE!=null)){r.ln=244;this.setWidth(l.add(this.getWidth(),22));
}}r.ln=249;this.mthZINT_RESETBASICSTYLEDETAILS();r.ln=251;this.mthZINT_SETENABLED(P9.get());r.ln=253;this.mthZINT_SETSELECTED(P8.get());}r.ln=255;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ListeningToVF_AC005O.AtFrontStatusChange",258);var P0=Ps.r("TO");r.ln=258;{r.ln=260;this.mthZINT_SETSELECTED(m.LOGICALLYSELECTED.get());}r.ln=262;r.e();};cO.mthZINT_SETENABLED=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetEnabled",265);var P0=r.cP("TO","PRIM_BOLN");P0.set(p0);r.ln=265;
{r.ln=268;m.LOGICALLYENABLED.set(P0.get());r.ln=270;this.setEnabled(m.LOGICALLYENABLED.get());r.ln=272;if(l.tB(l.b.eq(m.LOGICALLYENABLED.get(),true))){r.ln=273;m.CAPTION.setOpacity(100);m.IMAGE.setOpacity(100);}else{r.ln=275;m.CAPTION.setOpacity(40);m.IMAGE.setOpacity(40);}r.ln=278;if(l.tB(m.REFLECTENABLEDINVISIBLITY.get())){r.ln=279;this.setVisible(m.LOGICALLYENABLED.get());}r.ln=282;m.USYSTEM.ref.mthZINT_SETENABLEMENT(m.ASSOCIATEDOVERFLOWMENUITEM,P0.get());}r.ln=284;r.e();};function e2(sender,Ps)
{var r=l.eR(this,cO,"#USystem.CurrentThemeAltered",288);r.ln=288;{r.ln=290;this.mthZINT_RESETBASICSTYLEDETAILS();r.ln=292;this.mthZINT_SETENABLED(this.getLOGICALLYENABLED().get());r.ln=294;this.mthZINT_SETSELECTED(this.getLOGICALLYSELECTED().get());}r.ln=296;r.e();};cO.mthZINT_RESETBASICSTYLEDETAILS=function(){var m=this.REF,r=l.mR(this,cO,"zInt_ResetBasicStyleDetails",299);r.ln=299;{r.ln=301;this.getStyles().mthREMOVEALL();r.ln=303;if(l.tB((m.STYLEASTABFOLDER.get()&&l.b.Not(m.USEMATERIALSTYLETABS.get()))))
{r.ln=304;this.getStyles().mthADD(m.ROUNDEDTOP);}r.ln=307;m.CAPTION.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_TEXTSTYLE());r.ln=309;if(l.tB(m.USEMATERIALSTYLETABS.get())){r.ln=311;m.USYSTEM.ref.getFRAMEWORKTABFOLDERTMANAGER().getMAINWINDOWTITLEBAR().mthZINT_GETAPPROPRIATECOMMANDBARCOLORS({set:function(v){m.ATFRONTMATERIALSTYLE.setNormBackColor(v)}},{set:function(v){m.ATREARMATERIALSTYLE.setNormBackColor(v)}},{set:function(v){m.ATFRONTMATERIALSTYLE.setTextColor(v)}},{set:function(v){m.ATREARMATERIALSTYLE.setTextColor(v)}});
}else{r.ln=315;m.BORDERBOTTOM.setBorderBrush(m.USYSTEM.ref.getCURRENTTHEME().getLIGHTBORDERBRUSH());r.ln=317;m.BORDERRIGHT.setBorderBrush(m.USYSTEM.ref.getCURRENTTHEME().getLIGHTBORDERBRUSH());r.ln=319;if(l.tB(m.STYLEASVERTICAL.get())){r.ln=320;this.getStyles().mthADD(m.BORDERBOTTOM);}else{r.ln=322;this.getStyles().mthADD(m.BORDERRIGHT);}}}r.ln=327;r.e();};cO.mthZINT_SETSELECTED=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetSelected",330);var P0=r.cP("TO","PRIM_BOLN");P0.set(p0);var C0=r.cD("C0");
var C1=r.cR("ISATFRONT","PRIM_BOLN");var C2=r.cD("C2");C1.iC();r.ln=330;{r.ln=337;m.LOGICALLYSELECTED.set(P0.get());r.ln=339;if(l.tB(m.USEMATERIALSTYLETABS.get())){r.ln=341;if((m.LISTENINGTOVF_AC005O!=null)){r.ln=342;C1.set(m.LISTENINGTOVF_AC005O.getISATFRONT());}else{r.ln=344;C1.set(true);}r.ln=347;if(l.tB(C1.get())){r.ln=348;C2=r.sR("C2",m.ATFRONTMATERIALSTYLE);r.ln=349;m.IMAGE.setUSEREVERSELIGHTANDDARK(true);}else{r.ln=351;C2=r.sR("C2",m.ATREARMATERIALSTYLE);r.ln=352;m.IMAGE.setUSEREVERSELIGHTANDDARK(false);
}r.ln=355;m.CAPTION.setStyle(null);r.ln=357;this.getStyles().mthREMOVE(m.ATFRONTMATERIALSTYLE);r.ln=358;this.getStyles().mthREMOVE(m.ATREARMATERIALSTYLE);r.ln=359;this.getStyles().mthREMOVE(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_MATERIALSELECTEDBOTTOMBORDER());r.ln=361;this.getStyles().mthADD(C2);r.ln=363;if(l.tB(m.LOGICALLYSELECTED.get())){r.ln=365;this.getStyles().mthADD(C2);r.ln=366;this.getStyles().mthADD(m.USYSTEM.ref.getCURRENTTHEME().getCOMMANDBAR_MATERIALSELECTEDBOTTOMBORDER());}r.e();
return;}r.ln=373;if((m.LISTENINGTOVF_AC005O==null)){r.ln=375;if(l.tB(m.LOGICALLYSELECTED.get())){r.ln=376;this.getStyles().mthADD(m.SELECTEDSTYLE);}else{r.ln=378;this.getStyles().mthREMOVE(m.SELECTEDSTYLE);}r.e();return;}r.ln=384;if(l.tB(m.LOGICALLYSELECTED.get())){r.ln=386;C0=r.sR("C0",m.USYSTEM.ref.getCURRENTTHEME());r.ln=387;m.CAPTION.setStyle(null);r.ln=389;if(m.LISTENINGTOVF_AC005O.getISATFRONT()){r.ln=391;this.getStyles().mthADD(C0.getFLOATINGPANEL_ATFRONTTITLESTYLE());r.ln=392;m.IMAGE.setUSEREVERSELIGHTANDDARK(C0.getFLOATINGPANEL_USEDARKICONS());
}else{r.ln=396;this.getStyles().mthADD(m.USYSTEM.ref.getCURRENTTHEME().getFLOATINGPANEL_TITLESTYLE());r.ln=397;m.IMAGE.setUSEREVERSELIGHTANDDARK(false);}}else{r.ln=403;this.getStyles().mthREMOVE(m.USYSTEM.ref.getCURRENTTHEME().getFLOATINGPANEL_ATFRONTTITLESTYLE());r.ln=404;this.getStyles().mthREMOVE(m.USYSTEM.ref.getCURRENTTHEME().getFLOATINGPANEL_TITLESTYLE());r.ln=405;m.CAPTION.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getDEFAULTTEXTSTYLE());r.ln=406;m.IMAGE.setUSEREVERSELIGHTANDDARK(false);}r.e();
return;}r.ln=413;};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",416);r.ln=416;{r.ln=418;if((m.BADGE!=null)){r.ln=419;m.BADGE.mthZINT_TERMINATE();}r.ln=422;this.setrefBADGE(null);this.setrefASSOCIATEDREFERENCE1(null);this.setrefASSOCIATEDREFERENCE2(null);this.setrefLISTENINGTOVF_AC005O(null);this.setrefASSOCIATEDOVERFLOWMENUITEM(null);}r.ln=424;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_Owner.Click #Caption.Click",427);var P0=Ps.r("HANDLED");
r.ln=427;{r.ln=429;if(l.tB(m.LOGICALLYENABLED.get())){r.ln=430;this.fE("WASCLICKED");}r.ln=433;P0.set(true);}r.ln=435;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Image.WasClicked",438);r.ln=438;{r.ln=440;if(l.tB(m.LOGICALLYENABLED.get())){r.ln=441;this.fE("WASCLICKED");}}r.ln=444;r.e();};cO.getASSOCIATEDREFERENCE1=function(){return this.REF.ASSOCIATEDREFERENCE1;};cO.setASSOCIATEDREFERENCE1=function(v){this.setrefASSOCIATEDREFERENCE1(v);};cO.getASSOCIATEDREFERENCE2=function(){return this.REF.ASSOCIATEDREFERENCE2;
};cO.setASSOCIATEDREFERENCE2=function(v){this.setrefASSOCIATEDREFERENCE2(v);};cO.getASSOCIATEDOVERFLOWMENUITEM=function(){return this.REF.ASSOCIATEDOVERFLOWMENUITEM;};cO.setASSOCIATEDOVERFLOWMENUITEM=function(v){this.setrefASSOCIATEDOVERFLOWMENUITEM(v);};cO.getLOGICALEVENTNAME=function(){return this.REF.LOGICALEVENTNAME.get();};cO.setLOGICALEVENTNAME=function(v){this.REF.LOGICALEVENTNAME.set(v);};cO.getUSINGCAPTION=function(){return this.REF.USINGCAPTION.get();};cO.getUSINGIMAGENAME=function(){return this.mthGET_IMAGEREFERENCENAME();
};cO.setUSINGIMAGENAME=function(v){this.mthSET_IMAGEREFERENCENAME(v);};cO.getUSINGIMAGESOURCE=function(){return this.mthGET_IMAGEREFERENCESOURCE();};cO.setUSINGIMAGESOURCE=function(v){this.mthSET_IMAGEREFERENCESOURCE(v);};cO.getLOGICALLYENABLED=function(){return this.REF.LOGICALLYENABLED;};cO.getLOGICALLYSELECTED=function(){return this.REF.LOGICALLYSELECTED;};cO.getUDISPLAYPOSITION=function(){return this.REF.PTY_UDISPLAYPOSITION.get();};cO.setUDISPLAYPOSITION=function(v){this.mthSET_UDISPLAYPOSITION(v);
};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELSYMN"});}cO.setrefASSOCIATEDREFERENCE1=function(rn){this.sR("ASSOCIATEDREFERENCE1",rn);};cO.setrefASSOCIATEDREFERENCE2=function(rn)
{this.sR("ASSOCIATEDREFERENCE2",rn);};cO.setrefASSOCIATEDOVERFLOWMENUITEM=function(rn){this.sR("ASSOCIATEDOVERFLOWMENUITEM",rn);};cO.setrefBADGE=function(rn){this.sR("BADGE",rn);};cO.setrefLISTENINGTOVF_AC005O=function(rn){if(this.REF.LISTENINGTOVF_AC005O!=null){this.REF.LISTENINGTOVF_AC005O.rH("ATFRONTSTATUSCHANGE",this,e1);}this.sR("LISTENINGTOVF_AC005O",rn);if(this.REF.LISTENINGTOVF_AC005O!=null){this.REF.LISTENINGTOVF_AC005O.aH("ATFRONTSTATUSCHANGE",this,e1);}};},{rc:["VF_SY001O","VF_SY001X","VF_UI005O"],
rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_FLD","PRIM_DC.UnicodeString","PRIM_VS.Style","PRIM_BOLN","PRIM_VS.SolidBrush"],dc:["VF_UI050O","VF_AC005O","VF_SY170O"],dp:["PRIM_OBJT","PRIM_PANL","PRIM_BOLN","PRIM_VS.Style"]});