﻿LANSA.addComponent({id:"DF_T3102O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=VLF-ONE spool file example handler",tl:15000000},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]},F2:{ic:0,nm:"STD_CODE",ft:"A",ln:3,dc:0,lb:{"ENG":"Code","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Code","FRA":"?","JPN":"?"}[cL],h2:"",h3:"",de:{"ENG":"Standard CODE","FRA":"?","JPN":"?"}[cL],dv:"",ia:["FE"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"Code must be specified","FRA":"? must be specified","JPN":"? must be specified"}[cL]}]},F3:{ic:0,nm:"STD_CODES",ft:"A",ln:1,dc:0,lb:{"ENG":"Code","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Code","FRA":"?","JPN":"?"}[cL],h2:"",
h3:"",de:{"ENG":"Standard CODE SHORT","FRA":"?","JPN":"?"}[cL],dv:"",ia:["FE"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl2,mt:{"ENG":"Code must be specified","FRA":"? must be specified","JPN":"? must be specified"}[cL]}]},F4:{nm:"OUTPUTLINEUTF8",ft:"NV",ln:512,dc:0,lb:"OutputLineUTF8",h1:"OutputLineUTF8",h2:"",h3:"",de:"OutputLineUTF8",dv:""},F5:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Code retour E/S","JPN":"I/O戻りコード"}[cL],h1:{"ENG":"I/O","FRA":"Code","JPN":" I/O"}[cL],
h2:{"ENG":"Status","FRA":"retour E/S","JPN":"コード"}[cL],h3:"",de:{"ENG":"Data base I/O operation status code","FRA":"Code retour opérations E/S B. de données","JPN":" DB入出力戻りコード"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uTerminate:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},ShowPage:{ps:{"FromPage":{pt:"i"},"ToPage":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("DF_T3102O",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");
var C1=this.cR("ATTACHITEM3","PRIM_ATLI");var C2=this.cR("ATTACHITEM4","PRIM_ATLI");var C3=this.cR("ATTACHITEM5","PRIM_ATLI");var C4=this.cR("ATTACHITEM6","PRIM_ATLI");var C5=this.cR("ATTACHITEM7","PRIM_ATLI");var C6=this.cR("ATTACHITEM8","PRIM_ATLI");var C7=this.cR("ATTACHITEM9","PRIM_ATLI");var C8=this.cR("SPOOLFILEPAGES","PRIM_ACOL");var C9=this.cR("VISIBLESPOOLFILELINES","PRIM_ACOL");var C10=this.cR("VISIBLESPOOLFILELINESPANEL","PRIM_PANL");var C11=this.cR("MAINCONTROLPANEL","PRIM_PANL");var C12=this.cR("MAINSPOOLFILEPANEL","PRIM_PANL");
var C13=this.cR("PREVIOUSPAGE","PRIM_PHBN");var C14=this.cR("NEXTPAGE","PRIM_PHBN");var C15=this.cR("ATTACHITEM1","PRIM_ATLI");var C16=this.cR("ATTACHITEM2","PRIM_ATLI");var C17=this.cR("FIRSTPAGE","PRIM_PHBN");var C18=this.cR("LASTPAGE","PRIM_PHBN");var C19=this.cR("PAGETITLE","PRIM_LABL");var C20=this.cR("ALLPAGES","PRIM_PHBN");var C21=this.cR("DOWNLOAD","PRIM_PHBN");var C22=this.cR("DOWNLOADMENU","PRIM_PPNL","Menu");var C23=this.cR("DOWNLOADTEXT","PRIM_PPNL","MenuItem");var C24=this.cR("DOWNLOADPDF","PRIM_PPNL","MenuItem");
var C25=this.cR("SPOOLDATASTYLE","PRIM_VS","Style");var C26=this.cR("REDBORDERALLAROUND","PRIM_VS","Style");var C27=this.cF("CURRENTLYDISPLAYEDFROMPAGE",Fd.F1.Dc);var C28=this.cF("CURRENTLYDISPLAYEDTOPAGE",Fd.F1.Dc);var C29=this.cF("USEWIDTH",Fd.F1.Dc);var C30=this.cF("USELINEHEIGHT",Fd.F1.Dc);C0.iC();C1.setManage(C14);C1.setParent(C0);C1.setAttachment("RIGHT");C1.setMarginRight(2);C1.iC();C2.setManage(C13);C2.setParent(C0);C2.setAttachment("LEFT");C2.setMarginLeft(2);C2.iC();C3.setManage(C17);C3.setParent(C0);
C3.setAttachment("LEFT");C3.iC();C4.setManage(C18);C4.setParent(C0);C4.setAttachment("RIGHT");C4.iC();C5.setManage(C19);C5.setParent(C0);C5.setAttachment("CENTER");C5.iC();C6.setManage(C20);C6.setParent(C0);C6.setAttachment("RIGHT");C6.setMarginRight(2);C6.iC();C7.setManage(C21);C7.setParent(C0);C7.setAttachment("RIGHT");C7.setMarginRight(2);C7.iC();C8.setCollects("DF_T3103O");C8.iC();C9.setCollects("PRIM_LABL");C9.iC();C10.setParent(C12);C10.setDisplayPosition(1);C10.setTabPosition(1);C10.setHeight(270);
C10.setLeft(0);C10.setTop(0);C10.setWidth(500);C10.setStyle(C25);C10.iC();C11.setParent(this);C11.setDisplayPosition(2);C11.setTabPosition(2);C11.setHeight(24);C11.setLeft(0);C11.setTop(0);C11.setWidth(761);C11.setLayoutManager(C0);C11.iC();C12.setParent(this);C12.setDisplayPosition(1);C12.setTabPosition(1);C12.setHeight(225);C12.setLeft(0);C12.setTop(24);C12.setWidth(761);C12.setVerticalScroll(true);C12.setHorizontalScroll(true);C12.iC();C13.setParent(C11);C13.setDisplayPosition(2);C13.setTabPosition(2);
C13.setCaption("<< Previous");C13.setLeft(102);C13.setHeight(24);C13.setTop(0);C13.setWidth(100);C13.iC();C14.setParent(C11);C14.setDisplayPosition(6);C14.setTabPosition(5);C14.setCaption("Next >>");C14.setLeft(559);C14.setHeight(24);C14.setTop(0);C14.setWidth(100);C14.iC();C15.setManage(C11);C15.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C15.setAttachment("TOP");C15.iC();C16.setManage(C12);C16.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C16.setAttachment("CENTER");C16.iC();C17.setParent(C11);
C17.setDisplayPosition(1);C17.setTabPosition(1);C17.setCaption("First Page");C17.setLeft(0);C17.setHeight(24);C17.setTop(0);C17.setWidth(100);C17.iC();C18.setParent(C11);C18.setDisplayPosition(7);C18.setTabPosition(4);C18.setCaption("Last Page");C18.setLeft(661);C18.setHeight(24);C18.setTop(0);C18.setWidth(100);C18.iC();C19.setParent(C11);C19.setDisplayPosition(3);C19.setTabPosition(7);C19.setTabStop(false);C19.setHeight(24);C19.setLeft(202);C19.setTop(0);C19.setWidth(169);C19.setAlignment("CENTER");
C19.setVerticalAlignment("CENTER");C19.iC();C20.setParent(C11);C20.setDisplayPosition(4);C20.setTabPosition(6);C20.setCaption("All Pages");C20.setLeft(371);C20.setHeight(24);C20.setTop(0);C20.setWidth(92);C20.iC();C21.setParent(C11);C21.setDisplayPosition(5);C21.setTabPosition(3);C21.setCaption("Download");C21.setLeft(465);C21.setHeight(24);C21.setTop(0);C21.setWidth(92);C21.setMenuPopup(C22);C21.iC();C22.setLeft(465);C22.setTop(24);C22.setMenuSizing("POPUP");C22.iC();C23.setCaption("As a Text File");
C23.setDisplayPosition(1);C23.setParent(C22);C23.setTabPosition(1);C23.setWidth(148);C23.iC();C24.setCaption("As a PDF File");C24.setDisplayPosition(2);C24.setParent(C22);C24.setTabPosition(2);C24.setTop(25);C24.setWidth(148);C24.iC();C25.setFaceName("Lucida Console");C25.setFontSize(14);C25.setFontUnits("PIXEL");C25.iC();C26.setBorderBottom(1);C26.setBorderLeft(1);C26.setBorderTop(1);C26.setBorderRight(1);C26.setBorderColor("RED");C26.iC();C27.aD();C27.iC();C28.aD();C28.iC();C29.aD();C29.iC();C30.aD();
C30.iC();C13.aH("CLICK",this,e2);C14.aH("CLICK",this,e3);C17.aH("CLICK",this,e4);C18.aH("CLICK",this,e5);C20.aH("CLICK",this,e6);C23.aH("CLICK",this,e9);C24.aH("CLICK",this,e8);this.REF.AVLOCALTIMER.aH("TICK",this,e7);this.setHeight(249);this.setWidth(761);var li=this.aL("DF_T3102O");li.OUTPUTSPOOLFILE=l.cLT({"OUTPUTLINEUTF8":f.F4},null);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",72);r.ln=72;{r.ln=74;m.USEWIDTH.set(1200);r.ln=75;m.USELINEHEIGHT.set(18);
r.ln=78;m.DOWNLOADPDF.setImage(this.REF.AVFRAMEWORKMANAGER.mthAVGETIMAGEREFERENCE("PRINT_OUTLINE.PNG","T","SMALL",false));r.ln=80;m.DOWNLOADTEXT.setImage(this.REF.AVFRAMEWORKMANAGER.mthAVGETIMAGEREFERENCE("PRINT_OUTLINE.PNG","T","SMALL",false));}r.ln=83;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",87);r.ln=87;{r.ln=89;m.VISIBLESPOOLFILELINESPANEL.setParent(null);r.ln=90;m.VISIBLESPOOLFILELINES.mthREMOVEALL();r.ln=91;m.SPOOLFILEPAGES.mthREMOVEALL();}r.ln=93;r.e();
};cO.mthUEXECUTE=function(p0,p1){var li=this.LIST.DF_T3102O,f=this.FLD.DF_T3102O,m=this.REF,r=l.mR(this,cO,"uExecute",96),mth=r;var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=r.sR("SWITCHCALLERREFERENCE",p1);var C0=r.cD("C0");var C1=r.cDR("GET_SPOOLFILE","DF_T31DSO","GET_SPOOLFILE");C1.iC();C1.aH("COMPLETED",this,e1);C1.aH("FAILED",this,e1);r.ln=96;{r.ln=104;m.SPOOLFILEPAGES.mthREMOVEALL();r.ln=105;m.CURRENTLYDISPLAYEDFROMPAGE.set(0);r.ln=106;m.CURRENTLYDISPLAYEDTOPAGE.set(0);
r.ln=108;C0=r.sR("C0",this.getAVASSOCIATEDINSTANCE());r.ln=110;if((C0!=null)){r.ln=112;P0.set(false);r.ln=114;li.OUTPUTSPOOLFILE.clearList();r.ln=116;C1.mthEXECUTEASYNC({FLD:{"SPOOLFILENAME":C0.getAVVISUALID1().get(),"SPOOLFILENUMBER":C0.getAVVISUALID2().get(),"SPOOLFILEJOBNAME":C0.getAVACOLUMN2().get(),"SPOOLFILEJOBUSER":C0.getAVACOLUMN1().get(),"SPOOLFILEJOBNUMBER":C0.getAVACOLUMN3().get()}},{LIST:{"OUTPUTSPOOLFILE":li.OUTPUTSPOOLFILE}});}else{r.ln=121;P0.set(true);}p0.set(P0.get());}r.ln=180;r.e();
function e1(sender,Ps){var r=l.eR(this,cO,"#Get_SpoolFile.Completed #Get_SpoolFile.Failed",127,mth);var C2=r.cF("SKIPBEFORESTRING",Fd.F2.Dc);var C3=r.cF("SKIPBEFORE",Fd.F1.Dc);var C4=r.cF("SPACEBEFORESTRING",Fd.F3.Dc);var C5=r.cD("C5");var C6=r.cF("BROWSELISTENTRYNUMBER",Fd.F1.Dc);var C7=r.cF("CURRENTLINENUMBER",Fd.F1.Dc);C2.iC();C3.iC();C4.iC();C6.iC();C7.iC();r.ln=127;{r.ln=138;{var l1=li.OUTPUTSPOOLFILE.selectList();while(l1.step()){r.ln=139;C6.set(l.add(C6.get(),1));r.ln=142;if((C5==null)){r.ln=143;
C5=r.sR("C5",l.cC("DF_T3103O"));r.ln=144;m.SPOOLFILEPAGES.mthINSERT(C5);r.ln=145;C5.setFIRSTLISTENTRY(C6.get());r.ln=146;C7.set(0);}r.ln=150;C2.set(l.s.Trim(l.s.Substring(f.F4.get(),1,3)));r.ln=151;if(l.s.ne(C2.get(),"")){r.ln=153;C3.set(l.s.AsNumber(C2.get()));r.ln=155;if(l.n.lt(C3.get(),C7.get())){r.ln=156;C5=r.sR("C5",l.cC("DF_T3103O"));r.ln=157;m.SPOOLFILEPAGES.mthINSERT(C5);r.ln=158;C5.setFIRSTLISTENTRY(C6.get());r.ln=159;C7.set(0);}r.ln=162;C7.set(C3.get());}r.ln=166;C4.set(l.s.Trim(l.s.Substring(f.F4.get(),4,1)));
r.ln=167;if(l.s.ne(C4.get(),"")){r.ln=168;C7.set(l.add(C7.get(),l.s.AsNumber(C4.get())));}r.ln=171;C5.setLASTLISTENTRY(C6.get());r.ln=172;}l1.end();}r.ln=174;this.mthSHOWPAGE(1,1);r.ln=176;this.mthAVGOTOFREESTATE();}r.ln=178;r.e();}};cO.mthSHOWPAGE=function(p0,p1){var li=this.LIST.DF_T3102O,f=this.FLD.DF_T3102O,m=this.REF,r=l.mR(this,cO,"ShowPage",183);var P0=r.cPF("FROMPAGE",Fd.F1.Dc);var P1=r.cPF("TOPAGE",Fd.F1.Dc);P0.set(p0);P1.set(p1);var C0=r.cD("C0");var C1=r.cF("BROWSELISTENTRYNUMBER",Fd.F1.Dc);
var C2=r.cF("SKIPBEFORESTRING",Fd.F2.Dc);var C3=r.cF("SPACEBEFORESTRING",Fd.F3.Dc);var C4=r.cF("THISPAGEHEIGHT",Fd.F1.Dc);var C5=r.cF("OVERALLPANELHEIGHT",Fd.F1.Dc);var C6=r.cF("THISPAGELINENUMBER",Fd.F1.Dc);var C7=r.cF("THISPAGE",Fd.F1.Dc);var C8=r.cF("REQUIREDBOTTOM",Fd.F1.Dc);var C9=r.cD("C9");C1.iC();C2.iC();C3.iC();C4.iC();C5.iC();C6.iC();C7.iC();C8.iC();r.ln=183;{r.ln=202;m.VISIBLESPOOLFILELINESPANEL.setParent(null);r.ln=203;m.VISIBLESPOOLFILELINES.mthREMOVEALL();r.ln=205;m.CURRENTLYDISPLAYEDFROMPAGE.set(P0.get());
r.ln=206;m.CURRENTLYDISPLAYEDTOPAGE.set(P1.get());r.ln=209;for(var i1=l.tI(m.CURRENTLYDISPLAYEDFROMPAGE.get()),s1=1,t1=l.tI(m.CURRENTLYDISPLAYEDTOPAGE.get());C7.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=211;if(l.and(l.n.ge(C7.get(),1),l.n.le(C7.get(),m.SPOOLFILEPAGES.getItemCount()))){r.ln=213;C0=r.sR("C0",m.SPOOLFILEPAGES.get(C7.get()));r.ln=215;C6.set(0);r.ln=216;C4.set(0);r.ln=218;for(var i2=l.tI(C0.getFIRSTLISTENTRY()),s2=1,t2=l.tI(C0.getLASTLISTENTRY());C1.set(i2),(((s2>=0)&&(i2<=t2))||((s2<0)&&(i2>=t2)));i2+=s2)
{r.ln=220;f.F5.set(lIO=li.OUTPUTSPOOLFILE.getEntry(C1.get()));r.ln=222;C2.set(l.s.Trim(l.s.Substring(f.F4.get(),1,3)));r.ln=223;if(l.s.ne(C2.get(),"")){r.ln=224;C6.set(l.s.AsNumber(C2.get()));}r.ln=227;C3.set(l.s.Trim(l.s.Substring(f.F4.get(),4,1)));r.ln=228;if(l.s.ne(C3.get(),"")){r.ln=229;C6.set(l.add(C6.get(),l.s.AsNumber(C3.get())));}r.ln=232;C9=r.sR("C9",l.cC("PRIM_LABL"));r.ln=234;m.VISIBLESPOOLFILELINES.mthINSERT(C9);r.ln=236;C9.setParent(m.VISIBLESPOOLFILELINESPANEL);C9.setLeft(0);C9.setTop(l.add(C5.get(),l.mul(l.sub(C6.get(),1),m.USELINEHEIGHT.get())));
C9.setCaption(l.s.Substring(f.F4.get(),5));C9.setAlignment("LEFT");C9.setVerticalAlignment("CENTER");C9.setWidth(m.USEWIDTH.get());C9.setWordWrap(false);r.ln=242;C8.set(l.add(l.add(C9.getTop(),m.USELINEHEIGHT.get()),10));r.ln=244;if(l.n.gt(C8.get(),C4.get())){r.ln=245;C4.set(C8.get());}}r.ln=251;C5.set(C4.get());}}r.ln=260;m.VISIBLESPOOLFILELINESPANEL.setWidth(m.USEWIDTH.get());m.VISIBLESPOOLFILELINESPANEL.setHeight(l.add(C5.get(),20));m.VISIBLESPOOLFILELINESPANEL.setLeft(4);m.VISIBLESPOOLFILELINESPANEL.setTop(4);
m.VISIBLESPOOLFILELINESPANEL.setVisible(true);m.VISIBLESPOOLFILELINESPANEL.setParent(m.MAINSPOOLFILEPANEL);r.ln=262;m.PREVIOUSPAGE.setVisible(l.n.gt(m.CURRENTLYDISPLAYEDFROMPAGE.get(),1));r.ln=264;m.NEXTPAGE.setVisible(l.n.lt(m.CURRENTLYDISPLAYEDTOPAGE.get(),m.SPOOLFILEPAGES.getItemCount()));r.ln=266;m.ALLPAGES.setVisible(l.and(l.n.le(m.SPOOLFILEPAGES.getItemCount(),50),l.n.ne(m.SPOOLFILEPAGES.getItemCount(),1)));r.ln=268;if(l.n.eq(P0.get(),P1.get())){r.ln=270;m.PAGETITLE.set(l.cat(l.cat(l.cat("Page ",l.n.AsString(P0.get()))," of "),l.n.AsString(m.SPOOLFILEPAGES.getItemCount())));
}else{r.ln=274;m.PAGETITLE.set(l.cat(l.cat(l.cat(l.cat(l.cat("Pages ",l.n.AsString(P0.get()))," to "),l.n.AsString(P1.get()))," of "),l.n.AsString(m.SPOOLFILEPAGES.getItemCount())));}}r.ln=278;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PreviousPage.Click",281);var C0=r.cF("REQUIREDPAGE",Fd.F1.Dc);C0.iC();r.ln=281;{r.ln=283;C0.set(l.sub(m.CURRENTLYDISPLAYEDFROMPAGE.get(),1));r.ln=284;this.mthSHOWPAGE(C0.get(),C0.get());}r.ln=285;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#NextPage.Click",288);
var C0=r.cF("REQUIREDPAGE",Fd.F1.Dc);C0.iC();r.ln=288;{r.ln=290;C0.set(l.add(m.CURRENTLYDISPLAYEDTOPAGE.get(),1));r.ln=291;this.mthSHOWPAGE(C0.get(),C0.get());}r.ln=292;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#FirstPage.Click",295);r.ln=295;{r.ln=296;this.mthSHOWPAGE(1,1);}r.ln=297;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LastPage.Click",300);var C0=r.cF("REQUIREDPAGE",Fd.F1.Dc);C0.iC();r.ln=300;{r.ln=302;C0.set(m.SPOOLFILEPAGES.getItemCount());r.ln=303;this.mthSHOWPAGE(C0.get(),C0.get());
}r.ln=304;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AllPages.Click",307);r.ln=307;{r.ln=309;if(l.n.le(m.SPOOLFILEPAGES.getItemCount(),5)){r.ln=310;this.mthSHOWPAGE(1,m.SPOOLFILEPAGES.getItemCount());}else{r.ln=312;this.mthAVGOTOBUSYSTATE("Please wait",false,u);r.ln=313;this.REF.AVLOCALTIMERREQUEST.set("ALLPAGES");r.ln=314;this.REF.AVLOCALTIMER.setInterval(1);}}r.ln=317;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AVLOCALTIMER.Tick",320);r.ln=320;{r.ln=321;this.REF.AVLOCALTIMER.setInterval(0);
r.ln=323;if(l.tB(l.s.eq(this.REF.AVLOCALTIMERREQUEST.get(),"ALLPAGES"))){r.ln=324;this.mthSHOWPAGE(1,m.SPOOLFILEPAGES.getItemCount());}r.ln=327;this.mthAVGOTOFREESTATE();}r.ln=329;r.e();};function e8(sender,Ps){var r=l.eR(this,cO,"#DownloadPDF.Click",332);var C0=r.cRR("GET_SPOOLASTXTORPDF","DF_T31DSO","GET_SPOOLASTXTORPDF");var C1=r.cD("C1");C0.iC();r.ln=332;{r.ln=337;C1=r.sR("C1",this.getAVASSOCIATEDINSTANCE());r.ln=339;if((C1!=null)){r.ln=340;C0.setTarget("NEW");r.ln=341;C0.mthEXECUTE({FLD:{"FILETYPE":"PDF","SPOOLFILENAME":C1.getAVVISUALID1().get(),"SPOOLFILENUMBER":C1.getAVVISUALID2().get(),"SPOOLFILEJOBNAME":C1.getAVACOLUMN2().get(),"SPOOLFILEJOBUSER":C1.getAVACOLUMN1().get(),"SPOOLFILEJOBNUMBER":C1.getAVACOLUMN3().get()}},{});
}}r.ln=344;r.e();};function e9(sender,Ps){var r=l.eR(this,cO,"#DownloadText.Click",347);var C0=r.cRR("GET_SPOOLASTXTORPDF","DF_T31DSO","GET_SPOOLASTXTORPDF");var C1=r.cD("C1");C0.iC();r.ln=347;{r.ln=352;C1=r.sR("C1",this.getAVASSOCIATEDINSTANCE());r.ln=354;if((C1!=null)){r.ln=355;C0.setTarget("NEW");r.ln=356;C0.mthEXECUTE({FLD:{"FILETYPE":"TXT","SPOOLFILENAME":C1.getAVVISUALID1().get(),"SPOOLFILENUMBER":C1.getAVVISUALID2().get(),"SPOOLFILEJOBNAME":C1.getAVACOLUMN2().get(),"SPOOLFILEJOBUSER":C1.getAVACOLUMN1().get(),"SPOOLFILEJOBNUMBER":C1.getAVACOLUMN3().get()}},{});
}}r.ln=359;r.e();};function rl1(F2){var v=F2.get();return(l.s.eq(v,""));};function rl2(F3){var v=F3.get();return(l.s.eq(v,""));};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_CODE"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"STD_CODES"});}cO.setrefAVFRAMEWORKMANAGER=function(rn){cA.setrefAVFRAMEWORKMANAGER.call(this,rn);
};},{rc:["VF_AC010O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_ACOL","PRIM_PANL","PRIM_PHBN","PRIM_LABL","PRIM_PPNL.Menu","PRIM_PPNL.MenuItem","PRIM_VS.Style","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_WEB.ResourceRequest"],dc:["VF_LM003O","DF_T3103O"],dp:["PRIM_LABL"]});