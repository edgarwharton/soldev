﻿LANSA.addComponent({id:"XEX00045",nm:"XDemoDeviceSqlDb",ot:"wp",tp:"Web Page",de:"[pkg-ex-lansa-mobile]",tl:14020401},function(l,oI,u){var cL="ENG";var Fd={F1:{ic:0,nm:"STD_BLOB",ft:"BL",ln:0,dc:0,lb:"Standard BLOB",h1:"Standard",h2:"BLOB",h3:" ",de:"Standard BLOB",dv:l.SqlNull,ia:["ASQN","FE","LC"]},F2:{nm:"XEX00050",an:"XDemoDeviceSqlDbPhoto",ft:"BL",ln:0,dc:0,lb:"Photo",h1:"Photo",h2:"",h3:"",de:"[pkg-ex-lansa-mobile]",dv:l.SqlNull,ia:["ASQN","FE","LC"]},F3:{nm:"XEX00051",an:"XDemoDeviceSqlDbEmpNo",
ft:"NV",ln:512,dc:0,lb:"Employee No",h1:"Employee No",h2:"",h3:"",de:"[pkg-ex-lansa-mobile]",dv:"",ia:["LC","ASQN"]},F4:{nm:"XEX00048",an:"XDemoDeviceSqlDbFirstName",ft:"NV",ln:512,dc:0,lb:"First Name",h1:"First",h2:"Name",h3:"",de:"[pkg-ex-lansa-mobile]",dv:"",ia:["LC","ASQN"]},F5:{nm:"XEX00049",an:"XDemoDeviceSqlDbSurname",ft:"NV",ln:512,dc:0,lb:"Surname",h1:"Surname",h2:"",h3:"",de:"[pkg-ex-lansa-mobile]",dv:"",ia:["LC","ASQN"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{FetchEmployees:{},OnFetchEmployeesCompleted:
{ps:{"Rows":{pt:"i"}}},InsertEmployee:{ps:{"EmpNo":{pt:"i"},"FirstName":{pt:"i"},"Surname":{pt:"i"},"Photo":{pt:"i"}}},ShowNewEmployeeDialog:{}},co:function(){cO.aN.call(this);var f=this.aF("XEX00045",Fd);var C0=this.cR("LAYOUTMAIN","PRIM_TBLO");var C1=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C2=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTMAINROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTMAINROW3","PRIM_TBLO","Row");var C5=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");
var C6=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C7=this.cR("LAYOUT","PRIM_TBLO");var C8=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C9=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C10=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C13=this.cR("PANEL1","PRIM_PANL");var C14=this.cR("EMPLOYEELIST","PRIM_LIST");var C15=this.cR("LISTCOLUMN1","PRIM_LIST","Image");var C16=this.cR("LISTCOLUMN2","PRIM_LIST","String");
var C17=this.cR("LISTCOLUMN3","PRIM_LIST","String");var C18=this.cR("LISTCOLUMN4","PRIM_LIST","String");var C19=this.cR("NEWEMPLOYEEBUTTON","PRIM_MD","RaisedButton");var C20=this.cR("DELETEALLBUTTON","PRIM_MD","RaisedButton");var C21=this.cR("SQLDB","XLBA0094");var C22=this.cR("DOWNLOADEMPLOYEESBUTTON","PRIM_MD","RaisedButton");var C23=this.cR("XDEMODEVICEUTIL","XEX00053");C0.setMarginBottom(10);C0.setMarginLeft(10);C0.setMarginRight(10);C0.setMarginTop(10);C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);
C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(50);C2.setUnits("CONTENT");C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.iC();C4.setDisplayPosition(2);C4.setParent(C0);C4.setUnits("PIXELS");C4.setHeight(10);C4.iC();C5.setManage(C13);C5.setParent(C0);C5.setRow(C2);C5.setColumn(C1);C5.setAlignment("TOPLEFT");C5.setSizing("CONTENTHEIGHTFITTOWIDTH");C5.iC();C6.setAlignment("TOPLEFT");C6.setColumn(C1);C6.setManage(C14);C6.setParent(C0);C6.setRow(C3);C6.iC();C7.iC();C8.setDisplayPosition(1);
C8.setParent(C7);C8.iC();C9.setDisplayPosition(1);C9.setParent(C7);C9.setHeight(44);C9.setUnits("CONTENT");C9.iC();C10.setAlignment("TOPLEFT");C10.setManage(C19);C10.setParent(C7);C10.setSizing("CONTENTWIDTHANDHEIGHT");C10.setFlow("RIGHT");C10.setRow(C9);C10.setColumn(C8);C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C8);C11.setManage(C20);C11.setParent(C7);C11.setRow(C9);C11.setSizing("CONTENTWIDTHANDHEIGHT");C11.setFlow("RIGHT");C11.setMarginLeft(7);C11.iC();C12.setAlignment("TOPRIGHT");C12.setColumn(C8);
C12.setManage(C22);C12.setParent(C7);C12.setRow(C9);C12.setSizing("CONTENTWIDTHANDHEIGHT");C12.setFlow("RIGHT");C12.setMarginLeft(7);C12.iC();C13.setDisplayPosition(1);C13.setParent(this);C13.setTabPosition(1);C13.setTabStop(false);C13.setWidth(1180);C13.setLayoutManager(C7);C13.iC();C14.setColumnHeaderHeight(48);C14.setColumnLines(false);C14.setDisplayPosition(2);C14.setHeight(720);C14.setParent(this);C14.setRowHeight(48);C14.setTabPosition(2);C14.setTop(70);C14.setWidth(1180);C14.iC();C15.setColumnWidth(116);
C15.setDisplayPosition(1);C15.setParent(C14);C15.setColumnCaption("Photo");C15.setSource(f.F2);C15.setImageSizing("BESTFIT");C15.iC();C16.setColumnUnits("PROPORTION");C16.setColumnWidth(1);C16.setParent(C14);C16.setSortOnClick(true);C16.setSource(f.F3);C16.setColumnCaption("Employee No");C16.setColumnCaptionType("LABEL");C16.setDisplayPosition(2);C16.iC();C17.setColumnUnits("PROPORTION");C17.setColumnWidth(1);C17.setParent(C14);C17.setSortOnClick(true);C17.setSource(f.F4);C17.setColumnCaption("First Name");
C17.setColumnCaptionType("LABEL");C17.setDisplayPosition(4);C17.iC();C18.setColumnUnits("PROPORTION");C18.setColumnWidth(1);C18.setDisplayPosition(3);C18.setParent(C14);C18.setSortOnClick(true);C18.setSource(f.F5);C18.setColumnCaption("Surname");C18.setColumnCaptionType("LABEL");C18.iC();C19.setCaption("NEW EMPLOYEE");C19.setDisplayPosition(1);C19.setLeft(0);C19.setParent(C13);C19.setTabPosition(3);C19.setTop(0);C19.setThemeDrawStyle("MediumTitle");C19.setHeight(44);C19.setWidth(212);C19.setPaddingBottom(10);
C19.setPaddingLeft(50);C19.setPaddingRight(50);C19.setPaddingTop(10);C19.iC();C20.setCaption("DELETE ALL EMPLOYEES");C20.setDisplayPosition(2);C20.setLeft(219);C20.setParent(C13);C20.setTabPosition(2);C20.setTop(0);C20.setThemeDrawStyle("MediumTitle");C20.setHeight(44);C20.setWidth(268);C20.setPaddingBottom(10);C20.setPaddingLeft(50);C20.setPaddingRight(50);C20.setPaddingTop(10);C20.iC();C21.iC();C22.setCaption("DOWNLOAD");C22.setDisplayPosition(3);C22.setLeft(996);C22.setParent(C13);C22.setTabPosition(1);
C22.setTop(0);C22.setThemeDrawStyle("MediumTitle");C22.setHeight(44);C22.setWidth(184);C22.setPaddingBottom(10);C22.setPaddingLeft(50);C22.setPaddingRight(50);C22.setPaddingTop(10);C22.iC();C23.setDisplayPosition(3);C23.iC();C19.aH("CLICK",this,e6);C20.aH("CLICK",this,e7);C21.aH("READY",this,e2);C21.aH("EXECQUERYCOMPLETED",this,e3);C21.aH("DOWNLOADDATACOMPLETED",this,e9);C22.aH("CLICK",this,e8);this.setTheme(l.THEME().get("MATERIALDESIGNBLUE"));this.setLayoutManager(C0);this.aH("INITIALIZE",this,e1);
}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.Initialize",35);r.ln=35;{r.ln=43;m.SQLDB.mthOPEN("demo-device-sql-db.1.dbschema");}r.ln=47;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#SqlDb.Ready",53);r.ln=53;{r.ln=55;this.mthFETCHEMPLOYEES();}r.ln=56;r.e();};cO.mthFETCHEMPLOYEES=function(){var m=this.REF,r=l.mR(this,cO,"FetchEmployees",61);r.ln=61;{r.ln=66;m.SQLDB.mthEXECUTEQUERYSTRING("SELECT EmpNo, FirstName, Surname, imagebase64enc(Photo, 50, 50) FROM Employee","FETCHEMPLOYEES");
}r.ln=67;r.e();};cO.mthONFETCHEMPLOYEESCOMPLETED=function(p0){var f=this.FLD.XEX00045,m=this.REF,r=l.mR(this,cO,"OnFetchEmployeesCompleted",72);var P0=r.cPD("ROWS");P0=p0;var C0=r.cR("I","PRIM_NMBR");var C1=r.cR("OK","PRIM_BOLN");var C2=r.cD("C2");C0.iC();C1.iC();r.ln=72;{r.ln=79;m.EMPLOYEELIST.clearList();r.ln=82;for(var i1=1,s1=1,t1=l.tI(P0.getROWCOUNT());C0.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=83;f.F3.set(P0.get(C0.get()).mthREADSTRING(1));r.ln=84;f.F4.set(P0.get(C0.get()).mthREADSTRING(2));
r.ln=85;f.F5.set(P0.get(C0.get()).mthREADSTRING(3));r.ln=86;C2=r.sR("C2",P0.get(C0.get()).mthREADBLOB(4,"image/jpg"));r.ln=89;if(l.tB((C2!=null))){r.ln=90;f.F2.set(C2.get());}else{r.ln=92;f.F2.set("");}r.ln=95;m.EMPLOYEELIST.addEntry();}}r.ln=98;r.e();};cO.mthINSERTEMPLOYEE=function(p0,p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"InsertEmployee",104);var P0=r.cP("EMPNO","PRIM_DC","UnicodeString");var P1=r.cP("FIRSTNAME","PRIM_DC","UnicodeString");var P2=r.cP("SURNAME","PRIM_DC","UnicodeString");var P3=r.cPF("PHOTO",Fd.F1.Dc);
P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);var C0=r.cD("C0");r.ln=104;{r.ln=112;C0=r.sR("C0",m.SQLDB.mthCREATEQUERY("INSERT INTO Employee(EmpNo, FirstName, Surname, Photo) VALUES(?1, ?2, ?3, base64dec(?4))","INSERTEMPLOYEE"));r.ln=113;C0.getARGUMENTS().mthADDSTRING(P0.get());r.ln=114;C0.getARGUMENTS().mthADDSTRING(P1.get());r.ln=115;C0.getARGUMENTS().mthADDSTRING(P2.get());r.ln=116;C0.getARGUMENTS().mthADDBLOB(P3.get());r.ln=118;m.SQLDB.mthEXECUTEQUERY(C0);}r.ln=119;r.e();};function e3(sender,Ps)
{var r=l.eR(this,cO,"#SqlDb.ExecQueryCompleted",124);var P0=Ps.r("RESULT");var P1=Ps.r("TAG");r.ln=124;{r.ln=126;if(l.s.ne(P0.getSTATUS(),"OK")){r.ln=127;l.WEB().mthALERT(l.add("An error has occurred while executing the database query: ",P0.getMESSAGE()));r.e();return;}r.ln=132;{var v1=P1.get();if(r.ln=133,l.s.eq(v1,"FETCHEMPLOYEES")){r.ln=134;this.mthONFETCHEMPLOYEESCOMPLETED(P0);}else if(r.ln=135,l.s.eq(v1,"INSERTEMPLOYEE")){r.ln=136;this.mthFETCHEMPLOYEES();}else if(r.ln=137,l.s.eq(v1,"DELETEEMPLOYEES"))
{r.ln=138;this.mthFETCHEMPLOYEES();}r.ln=139;}}r.ln=141;r.e();};cO.mthSHOWNEWEMPLOYEEDIALOG=function(){var r=l.mR(this,cO,"ShowNewEmployeeDialog",146),mth=r;var C0=r.cR("DIALOG","XEX00047");C0.iC();C0.aH("COMPLETED",this,e4);C0.aH("CANCELLED",this,e5);r.ln=146;{r.ln=149;C0.mthSHOW();}r.ln=160;r.e();function e4(sender,Ps){var r=l.eR(this,cO,"#Dialog.Completed",151,mth);var P0=Ps.r("EMPLOYEENO");var P1=Ps.r("FIRSTNAME");var P2=Ps.r("SURNAME");var P3=Ps.r("PHOTO");r.ln=151;{r.ln=152;C0.mthCLOSE();r.ln=154;
this.mthINSERTEMPLOYEE(P0.get(),P1.get(),P2.get(),P3.get());}r.ln=155;r.e();}function e5(sender,Ps){var r=l.eR(this,cO,"#Dialog.Cancelled",157,mth);r.ln=157;{r.ln=158;C0.mthCLOSE();}r.ln=159;r.e();}};function e6(sender,Ps){var r=l.eR(this,cO,"#NewEmployeeButton.Click",165);r.ln=165;{r.ln=166;this.mthSHOWNEWEMPLOYEEDIALOG();}r.ln=167;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DeleteAllButton.Click",172);r.ln=172;{r.ln=173;m.SQLDB.mthEXECUTEQUERYSTRING("DELETE FROM Employee","DELETEEMPLOYEES");
}r.ln=174;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DownloadEmployeesButton.Click",179);r.ln=179;{r.ln=180;m.SQLDB.mthDOWNLOADDATA("/demo-localsqldb/api/data","DOWNLOADEMPLOYEES");}r.ln=181;r.e();};function e9(sender,Ps){var r=l.eR(this,cO,"#SqlDb.DownloadDataCompleted",183);var P0=Ps.r("STATUS");var P1=Ps.r("MESSAGE");var P2=Ps.r("TAG");r.ln=183;{r.ln=184;if(l.tB(l.s.eq(P0.get(),"OK"))){r.ln=185;P1.set("Download completed successfully");r.ln=187;this.mthFETCHEMPLOYEES();}r.ln=190;
l.WEB().mthALERT(P1.get());}r.ln=191;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_BLOB"});}},{rc:["XLBA0094","XEX00053"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_LIST","PRIM_LIST.Image","PRIM_LIST.String","PRIM_MD.RaisedButton","PRIM_FLD"],dc:["XLBA0098","XEX00047"],dp:["PRIM_NMBR","PRIM_BOLN"]});