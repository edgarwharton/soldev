﻿LANSA.addComponent({id:"VF_UI024O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Application or Framework About",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var m1={"ENG":"VLF Build/EPC  Number :","FRA":"No version/EPC du VLF :","JPN":"VLF ビルド/EPC 番号 :"}[cL],m2={"ENG":"VLF Build Date :","FRA":"Date de version du VLF","JPN":"VLF ﾋﾞﾙﾄﾞ日付："}[cL];var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],
h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{zInt_Initialize:{},zInt_Terminate:{},zInt_PrepareContent:{ps:{"ForFrameworkorApplication":{pt:"i"},"MaximumWidth":{pt:"i"},"MaximumHeight":{pt:"i"}}},zInt_PrepareFrameworkContent:{ps:{"ForFramework":{pt:"i"},"MaximumWidth":{pt:"i"},"MaximumHeight":{pt:"i"}}},zInt_PrepareApplicationContent:
{ps:{"ForApplication":{pt:"i"},"MaximumWidth":{pt:"i"},"MaximumHeight":{pt:"i"}}},zInt_InsertBuildDetails:{ps:{"LineFeed":{pt:"i"}}},zInt_InsertVersionDetails:{ps:{"LineFeed":{pt:"i"}}},zInt_LoadThemedImage:{}},ev:{ClosePopoverRequested:{}},co:function(){cO.aN.call(this);this.aF("VF_UI024O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("UFRAMEWORK","VF_FP001O");var C2=this.cR("ABOUTIMAGE","PRIM_IMAG");var C3=this.cR("PANEL_BODY","PRIM_PANL");var C4=this.cR("ABOUTTEXT","PRIM_LABL");var C5=this.cR("PANEL_BUTTONS","PRIM_PANL");
var C6=this.cR("BTN_CLOSE","VF_UI048O");var C7=this.cR("BTN_TECHSUPPORT","VF_UI048O");var C8=this.cR("UTECHSUPPORTLOCALURL","PRIM_DC","UnicodeString");var C9=this.cR("MANAGEPANELBUTTONS","PRIM_ATLM");var C10=this.cR("MANAGEPANELBUTTONS_1","PRIM_ATLI");var C11=this.cR("MANAGEPANELBUTTONS_2","PRIM_ATLI");var C12=this.cR("MANAGEPANELBODY","PRIM_ATLM");var C13=this.cR("MANAGEPANELBODY_1","PRIM_ATLI");var C14=this.cR("MANAGEPANELBODY_2","PRIM_ATLI");var C15=this.cR("MAINMANAGER","PRIM_ATLM");var C16=this.cR("MAINMANAGER_1","PRIM_ATLI");
var C17=this.cR("MAINMANAGER_2","PRIM_ATLI");this.cD("LOADBITMAP");var C19=this.cR("DARKTHEMEURL","PRIM_DC","UnicodeString");var C20=this.cR("LIGHTTHEMEURL","PRIM_DC","UnicodeString");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.setDisplayPosition(2);C2.setParent(this);C2.setTabPosition(2);C2.setLeft(0);C2.setTop(0);C2.setWidth(850);C2.iC();C3.setDisplayPosition(1);C3.setHeight(250);C3.setLeft(0);C3.setParent(this);C3.setTabPosition(1);C3.setTabStop(false);
C3.setTop(50);C3.setWidth(850);C3.setLayoutManager(C12);C3.setVerticalScroll(true);C3.setHorizontalScroll(true);C3.iC();C4.setCaption("Content to be completed");C4.setTabStop(false);C4.setParent(C3);C4.setDisplayPosition(2);C4.setTabPosition(2);C4.setHeight(210);C4.setWidth(834);C4.setTop(8);C4.setLeft(8);C4.setMarginTop(5);C4.iC();C5.setDisplayPosition(1);C5.setLeft(0);C5.setParent(C3);C5.setTabPosition(1);C5.setTabStop(false);C5.setTop(226);C5.setWidth(850);C5.setHeight(24);C5.setLayoutManager(C9);
C5.iC();C6.setLeft(562);C6.setParent(C5);C6.setWidth(100);C6.setHeight(20);C6.iC();C7.setLeft(666);C7.setParent(C5);C7.setWidth(180);C7.setHeight(20);C7.setDisplayPosition(2);C7.setTabPosition(2);C7.iC();C8.iC();C9.iC();C10.setParent(C9);C10.setAttachment("RIGHT");C10.setMarginRight(4);C10.setMarginBottom(4);C10.setManage(C7);C10.iC();C11.setParent(C9);C11.setAttachment("RIGHT");C11.setMarginRight(4);C11.setMarginBottom(4);C11.setManage(C6);C11.iC();C12.iC();C13.setParent(C12);C13.setManage(C4);C13.setAttachment("CENTER");
C13.setMarginLeft(8);C13.setMarginRight(8);C13.setMarginTop(8);C13.setMarginBottom(8);C13.iC();C14.setParent(C12);C14.setManage(C5);C14.setAttachment("BOTTOM");C14.iC();C15.iC();C16.setParent(C15);C16.setManage(C2);C16.setAttachment("TOP");C16.iC();C17.setParent(C15);C17.setManage(C3);C17.setAttachment("CENTER");C17.iC();C19.iC();C20.iC();C0.aH("CURRENTTHEMEALTERED",this,e2);C6.aH("WASCLICKED",this,e4);C7.aH("WASCLICKED",this,e3);this.setDisplayPosition(1);this.setHeight(300);this.setLeft(0);this.setTabPosition(1);
this.setTop(0);this.setWidth(850);this.setLayoutManager(C15);}});cO.mthZINT_INITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",41);r.ln=41;{r.ln=43;m.USYSTEM.ref.mthZINT_SETBUTTONBARHEIGHT(m.PANEL_BUTTONS);r.ln=45;m.BTN_CLOSE.mthZINT_INITIALIZE(m.USYSTEM.ref.getUMTXTVALUES("CLOSE"),false,true,true,true);r.ln=46;m.BTN_TECHSUPPORT.mthZINT_INITIALIZE(m.USYSTEM.ref.getUMTXTVALUES("TECHSUP"),false,true,true,false);}r.ln=48;r.e();};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",51);
r.ln=51;{r.ln=53;m.BTN_CLOSE.mthZINT_TERMINATE();r.ln=54;m.BTN_TECHSUPPORT.mthZINT_TERMINATE();}r.ln=56;r.e();};cO.mthZINT_PREPARECONTENT=function(p0,p1,p2){var r=l.mR(this,cO,"zInt_PrepareContent",59);var P0=r.cPD("FORFRAMEWORKORAPPLICATION");var P1=r.cPF("MAXIMUMWIDTH",Fd.F1.Dc);var P2=r.cPF("MAXIMUMHEIGHT",Fd.F1.Dc);P0=r.sR("FORFRAMEWORKORAPPLICATION",p0);P1.set(p1);P2.set(p2);r.ln=59;{r.ln=66;if(l.n.lt(P2.get(),80)){r.ln=67;P2.set(80);}r.ln=70;if(l.n.lt(P1.get(),80)){r.ln=71;P1.set(80);}r.ln=74;
this.setHeight(P2.get());this.setWidth(P1.get());r.ln=76;if(l.Io(P0,"VF_FP001O")){r.ln=77;this.mthZINT_PREPAREFRAMEWORKCONTENT(l.cast(P0,"VF_FP001O"),P1.get(),P2.get());}else{r.ln=79;if(l.Io(P0,"VF_FP002O")){r.ln=80;this.mthZINT_PREPAREAPPLICATIONCONTENT(l.cast(P0,"VF_FP002O"),P1.get(),P2.get());}}}r.ln=84;r.e();};cO.mthZINT_PREPAREFRAMEWORKCONTENT=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_PrepareFrameworkContent",87);var P0=r.cPD("FORFRAMEWORK");var P1=r.cPF("MAXIMUMWIDTH",Fd.F1.Dc);
var P2=r.cPF("MAXIMUMHEIGHT",Fd.F1.Dc);P0=r.sR("FORFRAMEWORK",p0);P1.set(p1);P2.set(p2);var C0=r.cR("TEXTLINE","PRIM_DC","UnicodeString");var C1=r.cR("LINEFEED","PRIM_DC","UnicodeString");var C2=r.cR("LEADINGBLANK","PRIM_BOLN");var C3=r.cF("ABOUTLINECOUNTER",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();C3.iC();r.ln=87;{r.ln=97;m.UTECHSUPPORTLOCALURL.set(P0.getUTECHSUPPORT());r.ln=98;m.BTN_TECHSUPPORT.setVisible(l.s.ne(m.UTECHSUPPORTLOCALURL.get(),""));r.ln=100;C1.set(l.n.AsUnicodeString(10));r.ln=101;m.ABOUTTEXT.setCaption("");
r.ln=102;C2.set(false);r.ln=104;this.mthZINT_INSERTVERSIONDETAILS(C1);r.ln=106;for(var i1=1,s1=1,t1=l.tI(P0.getUABOUTLINEMAX());C3.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=108;C0.set(l.s.Trim(P0.getUABOUTLINE(C3.get()).get()));r.ln=110;if(l.tB(l.s.eq(C0.get(),""))){r.ln=112;m.ABOUTTEXT.setCaption(l.add(m.ABOUTTEXT.getCaption(),l.add(C1.get(),C1.get())));r.ln=113;C2.set(false);}else{r.ln=116;if(l.tB(C2.get())){r.ln=117;m.ABOUTTEXT.setCaption(l.cat(m.ABOUTTEXT.getCaption()," "));
}r.ln=119;m.ABOUTTEXT.setCaption(l.add(m.ABOUTTEXT.getCaption(),C0.get()));r.ln=120;C2.set(true);}}r.ln=126;this.mthZINT_INSERTBUILDDETAILS(C1);r.ln=128;m.DARKTHEMEURL.set(P0.getUABOUTIMAGEURL_DARK());r.ln=129;m.LIGHTTHEMEURL.set(P0.getUABOUTIMAGEURL_LIGHT());r.ln=130;this.mthZINT_LOADTHEMEDIMAGE();}r.ln=132;r.e();};cO.mthZINT_PREPAREAPPLICATIONCONTENT=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_PrepareApplicationContent",135);var P0=r.cPD("FORAPPLICATION");var P1=r.cPF("MAXIMUMWIDTH",Fd.F1.Dc);
var P2=r.cPF("MAXIMUMHEIGHT",Fd.F1.Dc);P0=r.sR("FORAPPLICATION",p0);P1.set(p1);P2.set(p2);var C0=r.cR("TEXTLINE","PRIM_DC","UnicodeString");var C1=r.cR("LINEFEED","PRIM_DC","UnicodeString");var C2=r.cR("LEADINGBLANK","PRIM_BOLN");var C3=r.cF("ABOUTLINECOUNTER",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();C3.iC();r.ln=135;{r.ln=145;m.UTECHSUPPORTLOCALURL.set(l.s.Trim(P0.getUTECHSUPPORT()));r.ln=146;m.BTN_TECHSUPPORT.setVisible(l.s.ne(m.UTECHSUPPORTLOCALURL.get(),""));r.ln=148;C1.set(l.n.AsUnicodeString(10));
r.ln=149;m.ABOUTTEXT.setCaption("");r.ln=150;C2.set(false);r.ln=152;this.mthZINT_INSERTVERSIONDETAILS(C1);r.ln=154;for(var i1=1,s1=1,t1=l.tI(P0.getUABOUTLINEMAX());C3.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=156;C0.set(l.s.Trim(P0.getUABOUTLINE(C3.get()).get()));r.ln=158;if(l.tB(l.s.eq(C0.get(),""))){r.ln=160;m.ABOUTTEXT.setCaption(l.add(m.ABOUTTEXT.getCaption(),l.add(C1.get(),C1.get())));r.ln=161;C2.set(false);}else{r.ln=164;if(l.tB(C2.get())){r.ln=165;m.ABOUTTEXT.setCaption(l.cat(m.ABOUTTEXT.getCaption()," "));
}r.ln=167;m.ABOUTTEXT.setCaption(l.add(m.ABOUTTEXT.getCaption(),C0.get()));r.ln=168;C2.set(true);}}r.ln=174;this.mthZINT_INSERTBUILDDETAILS(C1);r.ln=176;m.DARKTHEMEURL.set(P0.getUABOUTIMAGEURL_DARK());r.ln=177;m.LIGHTTHEMEURL.set(P0.getUABOUTIMAGEURL_LIGHT());r.ln=178;this.mthZINT_LOADTHEMEDIMAGE();}r.ln=180;r.e();};cO.mthZINT_INSERTBUILDDETAILS=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_InsertBuildDetails",183);var P0=r.cPD("LINEFEED");P0=r.sR("LINEFEED",p0);r.ln=183;{r.ln=190;if(m.USYSTEM.ref.getDEVELOPERMODE())
{r.ln=191;m.ABOUTTEXT.setCaption(l.add(m.ABOUTTEXT.getCaption(),l.add(P0.get(),P0.get())));r.ln=192;m.ABOUTTEXT.setCaption(l.cat(m.ABOUTTEXT.getCaption(),l.cat(l.cat(m1," EPC"),m.USYSTEM.ref.getVLFBUILDNUMBER())));r.ln=193;m.ABOUTTEXT.setCaption(l.add(m.ABOUTTEXT.getCaption(),P0.get()));r.ln=194;m.ABOUTTEXT.setCaption(l.cat(m.ABOUTTEXT.getCaption(),l.cat(l.cat(m2," "),m.USYSTEM.ref.getVLFBUILDDATE())));}}r.ln=197;r.e();};cO.mthZINT_INSERTVERSIONDETAILS=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_InsertVersionDetails",200);
var P0=r.cPD("LINEFEED");P0=r.sR("LINEFEED",p0);r.ln=200;{r.ln=203;if(m.UFRAMEWORK.ref.getVERSIONABOUT()){r.ln=204;m.ABOUTTEXT.setCaption(l.add(m.ABOUTTEXT.getCaption(),l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(m.UFRAMEWORK.ref.getUCAPTION()," - "),l.n.AsString(m.UFRAMEWORK.ref.getVERSIONP1())),"."),l.n.AsString(m.UFRAMEWORK.ref.getVERSIONP2())),"."),l.n.AsString(m.UFRAMEWORK.ref.getVERSIONP3())),"."),l.n.AsString(m.UFRAMEWORK.ref.getVERSIONP4()))));r.ln=205;m.ABOUTTEXT.setCaption(l.add(m.ABOUTTEXT.getCaption(),l.add(P0.get(),P0.get())));
}}r.ln=208;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LoadBitMap.Loaded",213);r.ln=213;{r.ln=215;l.WEB().mthALERT("Image loaded");r.ln=217;m.ABOUTIMAGE.setImage(m.LOADBITMAP);r.ln=219;if(l.n.le(m.USYSTEM.ref.getUIFORMFACTOR(),m.USYSTEM.ref.getUIFORMFACTOR_SMALL())){r.ln=220;m.MAINMANAGER_1.setAttachment("TOP");r.ln=221;m.ABOUTIMAGE.setHeight(m.LOADBITMAP.getHeight());}else{r.ln=223;m.MAINMANAGER_1.setAttachment("LEFT");r.ln=224;m.ABOUTIMAGE.setWidth(m.LOADBITMAP.getWidth());}}
r.ln=228;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Usystem.CurrentThemeAltered",231);r.ln=231;{r.ln=233;this.mthZINT_LOADTHEMEDIMAGE();}r.ln=235;r.e();};cO.mthZINT_LOADTHEMEDIMAGE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_LoadThemedImage",239);r.ln=239;{r.ln=241;if(l.tB(l.s.eq(m.LIGHTTHEMEURL.get(),""))){r.ln=242;m.LIGHTTHEMEURL.set(m.DARKTHEMEURL.get());}r.ln=245;if(l.tB(l.s.eq(m.DARKTHEMEURL.get(),""))){r.ln=246;m.DARKTHEMEURL.set(m.LIGHTTHEMEURL.get());}r.ln=249;if(m.USYSTEM.ref.getCURRENTTHEME().getISDARKTHEME())
{r.ln=251;if(l.tB(l.s.eq(m.DARKTHEMEURL.get(),""))){r.ln=252;m.ABOUTIMAGE.setVisible(false);}else{r.ln=254;this.setrefLOADBITMAP(l.APPL().mthCREATEBITMAP(l.s.AsNativeString(m.DARKTHEMEURL.get())));}}else{r.ln=259;if(l.tB(l.s.eq(m.LIGHTTHEMEURL.get(),""))){r.ln=260;m.ABOUTIMAGE.setVisible(false);}else{r.ln=262;this.setrefLOADBITMAP(l.APPL().mthCREATEBITMAP(l.s.AsNativeString(m.LIGHTTHEMEURL.get())));}}}r.ln=267;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#BTN_TechSupport.WasClicked",270);
r.ln=270;{r.ln=272;l.WEB().mthNAVIGATE(m.UTECHSUPPORTLOCALURL.get(),"NEW");}r.ln=274;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#BTN_Close.WasClicked",277);r.ln=277;{r.ln=279;this.fE("CLOSEPOPOVERREQUESTED");}r.ln=281;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.setrefLOADBITMAP=function(rn){if(this.REF.LOADBITMAP!=null){this.REF.LOADBITMAP.rH("LOADED",this,e1);}this.sR("LOADBITMAP",rn);if(this.REF.LOADBITMAP!=null){this.REF.LOADBITMAP.aH("LOADED",this,e1);
}};},{rc:["VF_SY001O","VF_FP001O","VF_UI048O"],rp:["PRIM_PANL","PRIM_IMAG","PRIM_LABL","PRIM_DC.UnicodeString","PRIM_ATLM","PRIM_ATLI","PRIM_FLD"],dp:["PRIM_BMP","PRIM_DC.UnicodeString","PRIM_BOLN"]});