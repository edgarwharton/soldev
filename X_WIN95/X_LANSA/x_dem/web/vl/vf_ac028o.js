﻿LANSA.addComponent({id:"VF_AC028O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=VLF-ONE Ancestor for Slider Pane",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var m1={"ENG":"Not Available","FRA":"Non disponible","JPN":"なし"}[cL];var Fd={F1:{ic:0,nm:"STD_OBJ",ft:"A",ln:10,dc:0,lb:{"ENG":"Object Name","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Object","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Name","FRA":"?","JPN":"?"}[cL],h3:"",de:{"ENG":"Standard OBJECT NAME (S/38 or AS/400)","FRA":"?","JPN":"?"}[cL],
dv:"",ia:["VN"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"Object Name must be specified","FRA":"? must be specified","JPN":"? must be specified"}[cL]}]},F2:{ic:0,nm:"VF_ELSYMN",an:"VF_ELSYMNAME",ft:"A",ln:50,dc:0,lb:"Image Name",h1:"Image",h2:"Name",h3:"",de:"Image Name",dv:"",ia:["FE"]},F3:{ic:0,nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]},F4:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],
h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"VF_AC034O",fd:Fd,pt:{uCaption:{da:"na"},uHint:{da:"na"},uCloseIconName:{da:"na"},uDockIconName:{da:"na"},uInitialHeight:{da:"na"},uInitialWidth:{da:"na"},uImageName:{da:"na"},uImageSource:{da:"na"},uCloseonMouseLeave:{da:"na"},uStyle:{da:"na"},uBorderStyle:{da:"na"
},AttachedtoEdge:{da:"rw"},uMinimizedHeight:{da:"na"},uMinimizedWidth:{da:"na"},uTransitionType:{da:"na"}},mt:{zInt_InitalizeImages:{},uNowMinimumized:{},uNowDocked:{},uNowFloating:{},uCloseifFloating:{},uFloatifClosed:{}},ev:{DockImageClicked:{},CloseImageClicked:{},CloseIfFloating:{},FloatifClosed:{}},co:function(){cO.aN.call(this);this.aF("VF_AC028O",Fd);var C0=this.cR("HEADERPANELLAYOUTMANAGER","PRIM_ATLM");var C1=this.cR("DOCKIMAGEATTACHITEM","PRIM_ATLI");var C2=this.cR("CLOSEIMAGEATTACHITEM","PRIM_ATLI");
var C3=this.cR("CUSTOMPANELBODYLAYOUTMANAGER","PRIM_ATLM");var C4=this.cR("HEADERPANEL","PRIM_PANL");var C5=this.cR("DOCKIMAGE","VF_UI005O");var C6=this.cR("CLOSEIMAGE","VF_UI005O");var C7=this.cR("CUSTOMPANELBODY","PRIM_PANL");var C8=this.cR("HEADERATTACHITEM","PRIM_ATLI");var C9=this.cR("BODYATTACHITEM","PRIM_ATLI");var C10=this.cF("ATTACHEDTOEDGE",Fd.F1.Dc);var C11=this.cR("BORDERLEFT","PRIM_VS","Style");var C12=this.cR("BORDERRIGHT","PRIM_VS","Style");var C13=this.cR("BORDERTOP","PRIM_VS","Style");
var C14=this.cR("BORDERBOTTOM","PRIM_VS","Style");var C15=this.cR("INITALIZEDIMAGES","PRIM_BOLN");C0.iC();C1.setManage(C5);C1.setParent(C0);C1.setAttachment("RIGHT");C1.setMarginTop(1);C1.iC();C2.setManage(C6);C2.setParent(C0);C2.setAttachment("RIGHT");C2.setMarginTop(1);C2.iC();C3.iC();C4.setDisplayPosition(2);C4.setParent(this);C4.setTabPosition(1);C4.setLayoutManager(C0);C4.setLeft(0);C4.setTop(0);C4.setHeight(18);C4.setWidth(300);C4.iC();C5.setParent(C4);C5.setDisplayPosition(2);C5.setTabPosition(2);
C5.setHeight(17);C5.setLeft(284);C5.setTop(1);C5.iC();C6.setParent(C4);C6.setHeight(17);C6.setLeft(268);C6.setTop(1);C6.iC();C7.setDisplayPosition(1);C7.setParent(this);C7.setTabPosition(2);C7.setLeft(0);C7.setTop(18);C7.setHeight(82);C7.setWidth(300);C7.setLayoutManager(C3);C7.iC();C8.setManage(C7);C8.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C8.setAttachment("CENTER");C8.iC();C9.setManage(C4);C9.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C9.setAttachment("TOP");C9.iC();C10.aD();C10.iC();
C11.setBorderRight(1);C11.setBorderTop(1);C11.setBorderBottom(1);C11.iC();C12.setBorderLeft(1);C12.setBorderTop(1);C12.setBorderBottom(1);C12.iC();C13.setBorderBottom(1);C13.iC();C14.setBorderTop(1);C14.iC();C15.iC();C5.aH("WASCLICKED",this,e1);C6.aH("WASCLICKED",this,e2);this.setWidth(300);this.setHeight(100);}});cO.mthGET_UCAPTION=function(){var r=l.pR(this,cO,"Get_uCaption",61);var P0=r.cP("RETURNCAPTION","PRIM_DC","UnicodeString");r.ln=61;{r.ln=63;P0.set(m1);}r.ln=64;return r.rV(P0.get());};cO.mthGET_UHINT=function()
{var r=l.pR(this,cO,"Get_uHint",67);var P0=r.cP("RETURNHINT","PRIM_DC","UnicodeString");r.ln=67;{r.ln=69;P0.set("");}r.ln=70;return r.rV(P0.get());};cO.mthGET_UCLOSEICONNAME=function(){var m=this.REF,r=l.pR(this,cO,"Get_uCloseIconName",73);var P0=r.cPF("RETURNICONNAME",Fd.F2.Dc);r.ln=73;{r.ln=75;{var v1=m.ATTACHEDTOEDGE.get();if(r.ln=76,l.s.eq(v1,"TOP")){r.ln=77;P0.set("UP_ARROW_OUTLINE.PNG");}else if(r.ln=78,l.s.eq(v1,"BOTTOM")){r.ln=79;P0.set("DOWN-ARROW_OUTLINE.PNG");}else if(r.ln=80,l.s.eq(v1,"LEFT"))
{r.ln=81;P0.set("LEFT_OUTLINE.PNG");}else if(r.ln=82,l.s.eq(v1,"RIGHT")){r.ln=83;P0.set("RIGHT_OUTLINE.PNG");}else{r.ln=85;P0.set("UNKNOWN");}r.ln=86;}}r.ln=88;return r.rV(P0.get());};cO.mthGET_UDOCKICONNAME=function(){var r=l.pR(this,cO,"Get_uDockIconName",91);var P0=r.cPF("RETURNICONNAME",Fd.F2.Dc);r.ln=91;{r.ln=94;P0.set("PIN_OUTLINE.PNG");}r.ln=96;return r.rV(P0.get());};cO.mthGET_UIMAGENAME=function(){var m=this.REF,r=l.pR(this,cO,"Get_uImageName",100);var P0=r.cPF("RETURNIMAGENAME",Fd.F2.Dc);
r.ln=100;{r.ln=103;{var v1=m.ATTACHEDTOEDGE.get();if(r.ln=104,l.s.eq(v1,"TOP")){r.ln=105;P0.set("EXPAND_DOWN_OUTLINE.PNG");}else if(r.ln=106,l.s.eq(v1,"BOTTOM")){r.ln=107;P0.set("COLLAPSE_UP_OUTLINE.PNG");}else if(r.ln=108,l.s.eq(v1,"LEFT")){r.ln=109;P0.set("EXPAND_OUTLINE.PNG");}else if(r.ln=110,l.s.eq(v1,"RIGHT")){r.ln=111;P0.set("COLLAPSE_OUTLINE.PNG");}else{r.ln=113;P0.set("UNKNOWN");}r.ln=114;}}r.ln=116;return r.rV(P0.get());};cO.mthGET_UIMAGESOURCE=function(){var r=l.pR(this,cO,"Get_uImageSource",119);
var P0=r.cPF("RETURNIMAGESOURCE",Fd.F3.Dc);r.ln=119;{r.ln=122;P0.set("T");}r.ln=124;return r.rV(P0.get());};cO.mthGET_UCLOSEONMOUSELEAVE=function(){var r=l.pR(this,cO,"Get_uCloseonMouseLeave",127);var P0=r.cP("RETURNCLOSEONMOUSELEAVE","PRIM_BOLN");r.ln=127;{r.ln=130;P0.set(false);}r.ln=132;return r.rV(P0.get());};cO.mthGET_UINITIALHEIGHT=function(){var r=l.pR(this,cO,"Get_uInitialHeight",135);var P0=r.cPF("RETURNHEIGHT",Fd.F4.Dc);r.ln=135;{r.ln=137;P0.set(this.getHeight());}r.ln=138;return r.rV(P0.get());
};cO.mthGET_UINITIALWIDTH=function(){var r=l.pR(this,cO,"Get_uInitialWidth",141);var P0=r.cPF("RETURNWIDTH",Fd.F4.Dc);r.ln=141;{r.ln=143;P0.set(this.getWidth());}r.ln=144;return r.rV(P0.get());};cO.mthGET_UMINIMIZEDHEIGHT=function(){var r=l.pR(this,cO,"Get_uMinimizedHeight",147);var P0=r.cPF("RETURNHEIGHT",Fd.F4.Dc);r.ln=147;{r.ln=149;P0.set(16);}r.ln=150;return r.rV(P0.get());};cO.mthGET_UMINIMIZEDWIDTH=function(){var r=l.pR(this,cO,"Get_uMinimizedWidth",153);var P0=r.cPF("RETURNWIDTH",Fd.F4.Dc);
r.ln=153;{r.ln=155;P0.set(16);}r.ln=156;return r.rV(P0.get());};cO.mthGET_USTYLE=function(){var r=l.pR(this,cO,"Get_uStyle",159);var P0=r.cPD("RETURNSTYLE");r.ln=159;{r.ln=161;P0=r.sR("P0",this.REF.USYSTEM.ref.getCURRENTTHEME().getBASEPANELBODYSTYLE());}r.ln=162;return r.rR(P0);};cO.mthGET_UBORDERSTYLE=function(){var m=this.REF,r=l.pR(this,cO,"Get_uBorderStyle",165);var P0=r.cPD("RETURNBORDERSTYLE");r.ln=165;{r.ln=168;{var v1=m.ATTACHEDTOEDGE.get();if(r.ln=169,l.s.eq(v1,"TOP")){r.ln=170;P0=r.sR("P0",m.BORDERTOP);
}else if(r.ln=171,l.s.eq(v1,"BOTTOM")){r.ln=172;P0=r.sR("P0",m.BORDERBOTTOM);}else if(r.ln=173,l.s.eq(v1,"LEFT")){r.ln=174;P0=r.sR("P0",m.BORDERLEFT);}else{r.ln=176;P0=r.sR("P0",m.BORDERRIGHT);}r.ln=177;}r.ln=179;P0.setBorderBrush(this.REF.USYSTEM.ref.getCURRENTTHEME().getLIGHTBORDERBRUSH());}r.ln=181;return r.rR(P0);};cO.mthGET_UTRANSITIONTYPE=function(){var m=this.REF,r=l.pR(this,cO,"Get_uTransitionType",184);var P0=r.cP("RETURNTRANSITIONTYPE","PRIM_ALPH");var C0=r.cR("TEST","PRIM_PANL");C0.iC();
r.ln=184;{r.ln=189;{var v1=m.ATTACHEDTOEDGE.get();if(r.ln=190,l.s.eq(v1,"TOP")){r.ln=191;P0.set("SLIDEINTOP");}else if(r.ln=192,l.s.eq(v1,"BOTTOM")){r.ln=193;P0.set("SLIDEINBOTTOM");}else if(r.ln=194,l.s.eq(v1,"LEFT")){r.ln=195;P0.set("SLIDEINLEFT");}else if(r.ln=196,l.s.eq(v1,"RIGHT")){r.ln=197;P0.set("SLIDEINRIGHT");}else{r.ln=199;P0.set("NONE");}r.ln=200;}}r.ln=202;return r.rV(P0.get());};cO.mthZINT_INITALIZEIMAGES=function(){var m=this.REF,r=l.mR(this,cO,"zInt_InitalizeImages",205);r.ln=205;{
r.ln=208;if(l.tB(l.b.eq(m.INITALIZEDIMAGES.get(),false))){r.ln=210;m.INITALIZEDIMAGES.set(true);r.ln=212;m.DOCKIMAGE.mthZINT_INTIALIZEIMAGE(this.getUDOCKICONNAME(),this.getUIMAGESOURCE(),"","SMALL",false,u,u,u,u);r.ln=214;m.CLOSEIMAGE.mthZINT_INTIALIZEIMAGE(this.getUCLOSEICONNAME(),this.getUIMAGESOURCE(),"","SMALL",false,u,u,u,u);r.ln=216;if(l.s.eq(m.ATTACHEDTOEDGE.get(),"RIGHT")){r.ln=217;m.DOCKIMAGEATTACHITEM.setAttachment("LEFT");m.CLOSEIMAGEATTACHITEM.setAttachment("LEFT");}}}r.ln=223;r.e();};
cO.mthUNOWMINIMUMIZED=function(){var r=l.mR(this,cO,"uNowMinimumized",226);r.ln=226;{r.ln=228;this.mthZINT_INITALIZEIMAGES();}r.ln=230;r.e();};cO.mthUNOWDOCKED=function(){var m=this.REF,r=l.mR(this,cO,"uNowDocked",233);r.ln=233;{r.ln=235;this.mthZINT_INITALIZEIMAGES();r.ln=237;m.CLOSEIMAGE.setVisible(true);r.ln=239;m.DOCKIMAGE.setVisible(false);}r.ln=241;r.e();};cO.mthUNOWFLOATING=function(){var m=this.REF,r=l.mR(this,cO,"uNowFloating",244);r.ln=244;{r.ln=246;this.mthZINT_INITALIZEIMAGES();r.ln=248;
m.CLOSEIMAGE.setVisible(false);r.ln=250;m.DOCKIMAGE.setVisible(true);}r.ln=252;r.e();};cO.mthUCLOSEIFFLOATING=function(){var r=l.mR(this,cO,"uCloseifFloating",255);r.ln=255;{r.ln=257;this.fE("CLOSEIFFLOATING");}r.ln=259;r.e();};cO.mthUFLOATIFCLOSED=function(){var r=l.mR(this,cO,"uFloatifClosed",262);r.ln=262;{r.ln=264;this.fE("FLOATIFCLOSED");}r.ln=266;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#DockImage.WasClicked",269);r.ln=269;{r.ln=271;this.fE("DOCKIMAGECLICKED");}r.ln=273;r.e();};function e2(sender,Ps)
{var r=l.eR(this,cO,"#CloseImage.WasClicked",277);r.ln=277;{r.ln=279;this.fE("CLOSEIMAGECLICKED");}r.ln=281;r.e();};cO.getUCAPTION=function(){return this.mthGET_UCAPTION();};cO.getUHINT=function(){return this.mthGET_UHINT();};cO.getUCLOSEICONNAME=function(){return this.mthGET_UCLOSEICONNAME();};cO.getUDOCKICONNAME=function(){return this.mthGET_UDOCKICONNAME();};cO.getUINITIALHEIGHT=function(){return this.mthGET_UINITIALHEIGHT();};cO.getUINITIALWIDTH=function(){return this.mthGET_UINITIALWIDTH();};
cO.getUIMAGENAME=function(){return this.mthGET_UIMAGENAME();};cO.getUIMAGESOURCE=function(){return this.mthGET_UIMAGESOURCE();};cO.getUCLOSEONMOUSELEAVE=function(){return this.mthGET_UCLOSEONMOUSELEAVE();};cO.getUSTYLE=function(){return this.mthGET_USTYLE();};cO.getUBORDERSTYLE=function(){return this.mthGET_UBORDERSTYLE();};cO.getATTACHEDTOEDGE=function(){return this.REF.ATTACHEDTOEDGE.get();};cO.setATTACHEDTOEDGE=function(v){this.REF.ATTACHEDTOEDGE.set(v);};cO.getUMINIMIZEDHEIGHT=function(){return this.mthGET_UMINIMIZEDHEIGHT();
};cO.getUMINIMIZEDWIDTH=function(){return this.mthGET_UMINIMIZEDWIDTH();};cO.getUTRANSITIONTYPE=function(){return this.mthGET_UTRANSITIONTYPE();};function rl1(F1){var v=F1.get();return(l.s.eq(v,""));};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_OBJ"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELSYMN"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});}{Fd.F4.Dc=function()
{this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC034O","VF_UI005O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_PANL","PRIM_FLD","PRIM_VS.Style","PRIM_BOLN"],dp:["PRIM_PANL"]});