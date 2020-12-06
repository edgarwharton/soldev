﻿LANSA.addComponent({id:"DF_T70O_2",nm:"DF_T70O_CSV_Handler",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Create CSV on client and download",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uAddCells:{},uDownload:{},uTerminate:{}},co:function(){cO.aN.call(this);this.aF("DF_T70O_2",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("LAYOUTITEM1","PRIM_ATLI");var C2=this.cR("LAYOUTITEM2","PRIM_ATLI");var C3=this.cR("CSV_WIDGET","DF_T70O_1");var C4=this.cF("ROWS",Fd.F1.VISUALEDIT);var C5=this.cF("COLUMNS",Fd.F1.VISUALEDIT);var C6=this.cR("CREATECSV","PRIM_PHBN");var C7=this.cR("CSV_LABEL","PRIM_LABL");
var C8=this.cR("CSV_FILE","PRIM_ALPH");var C9=this.cR("ISINTERNETEXPLORER","PRIM_BOLN");C0.iC();C1.setAttachment("CENTER");C1.setManage(C7);C1.setParent(C0);C1.iC();C2.setAttachment("BOTTOM");C2.setManage(C3);C2.setParent(C0);C2.iC();C3.setParent(this);C3.setWidth(452);C3.setHeight(24);C3.setTop(136);C3.setDisplayPosition(3);C3.setTabPosition(3);C3.setLeft(8);C3.setVisible(false);C3.iC();C4.setComponentVersion(1);C4.setDisplayPosition(2);C4.setParent(this);C4.setTabPosition(2);C4.setCaption("Number of rows");
C4.setLabelType("CAPTION");C4.setWidth(201);C4.setMarginLeft(110);C4.setLeft(8);C4.setTop(40);C4.aD();C4.iC();C5.setComponentVersion(1);C5.setDisplayPosition(4);C5.setLeft(216);C5.setParent(this);C5.setTabPosition(4);C5.setCaption("Columns");C5.setLabelType("CAPTION");C5.setWidth(159);C5.setMarginLeft(60);C5.setTop(40);C5.aD();C5.iC();C6.setCaption("New CSV");C6.setDisplayPosition(5);C6.setLeft(380);C6.setParent(this);C6.setTabPosition(5);C6.setTop(40);C6.setHeight(19);C6.setWidth(85);C6.iC();C7.setCaption("Non IE browsers: click on the link to download a CSV file with the number of rows and columns specified on the screen.");
C7.setDisplayPosition(1);C7.setEllipses("WORD");C7.setHeight(44);C7.setLeft(8);C7.setParent(this);C7.setTabPosition(1);C7.setTabStop(false);C7.setTop(83);C7.setVerticalAlignment("CENTER");C7.setWidth(452);C7.iC();C8.setLength(50);C8.setValue("Test");C8.iC();C9.iC();C4.aH("CHANGED",this,e2);C5.aH("CHANGED",this,e2);C6.aH("CLICK",this,e1);this.setWidth(689);this.setHeight(273);}});cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",38);r.ln=38;{r.ln=40;m.ROWS.set(50);r.ln=41;m.COLUMNS.set(3);
r.ln=43;m.ISINTERNETEXPLORER.set(m.CSV_WIDGET.mthUTESTIE());r.ln=45;if(l.tB(m.ISINTERNETEXPLORER.get())){r.ln=46;m.CSV_LABEL.setCaption("The download should start automatically.");r.ln=47;m.CSV_WIDGET.setVisible(false);r.ln=48;m.CREATECSV.setVisible(false);}else{r.ln=50;m.CSV_LABEL.setCaption("Click on the link to download a CSV file with the number of rows and columns specified on the screen.");}r.ln=53;this.mthUADDCELLS();r.ln=55;m.CSV_WIDGET.setVisible(l.b.Not(m.ISINTERNETEXPLORER.get()));}r.ln=57;
r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#CreateCSV.Click",59);r.ln=59;{r.ln=60;this.mthUADDCELLS();r.ln=62;this.mthUDOWNLOAD();}r.ln=64;r.e();};cO.mthUADDCELLS=function(){var m=this.REF,r=l.mR(this,cO,"uAddCells",68);var C0=r.cR("NEWLINE","PRIM_BOLN");var C1=r.cF("ROWCOUNTER",Fd.F1.Dc);var C2=r.cF("COLCOUNTER",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();r.ln=68;{r.ln=74;m.CSV_WIDGET.mthUCLEARCELLS();r.ln=79;for(var i1=1,s1=1,t1=l.tI(m.ROWS.get());C1.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1)
{r.ln=81;C0.set(true);r.ln=83;for(var i2=1,s2=1,t2=l.tI(m.COLUMNS.get());C2.set(i2),(((s2>=0)&&(i2<=t2))||((s2<0)&&(i2>=t2)));i2+=s2){r.ln=85;m.CSV_WIDGET.mthUADDCELL(C0.get(),l.cat(l.cat(l.cat("Row_",l.n.AsString(C1.get())),"_Column_"),l.n.AsString(C2.get())));r.ln=87;C0.set(false);}}r.ln=95;m.CSV_WIDGET.mthUCONCATENATESTRING(m.CSV_FILE.get());}r.ln=97;r.e();};cO.mthUDOWNLOAD=function(){var m=this.REF,r=l.mR(this,cO,"uDownload",99);r.ln=99;{r.ln=101;m.CSV_WIDGET.mthUDOWNLOAD(m.CSV_FILE.get());}r.ln=103;
r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",105);r.ln=105;{r.ln=107;m.CSV_WIDGET.mthUTERMINATE();}r.ln=109;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Rows.Changed #Columns.Changed",111);r.ln=111;{r.ln=113;m.CREATECSV.setEnabled(l.and(l.n.gt(m.ROWS.get(),0),l.n.gt(m.COLUMNS.get(),0)));r.ln=115;if(l.tB(m.ISINTERNETEXPLORER.get())){r.ln=117;this.mthUADDCELLS();r.ln=118;this.mthUDOWNLOAD();}}r.ln=120;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(247);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"STD_INT",cn:"VisualEdit"});}},{rc:["VF_AC010O","DF_T70O_1"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_FLD","PRIM_EVEF","PRIM_PHBN","PRIM_LABL","PRIM_ALPH","PRIM_BOLN"],dp:["PRIM_BOLN"]});