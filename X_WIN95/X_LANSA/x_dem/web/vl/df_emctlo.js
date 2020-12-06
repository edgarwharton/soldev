﻿LANSA.addComponent({id:"DF_EMCTLO",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Employee Client Side Controller",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]},F2:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID"}[cL],h3:" ",de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明"}[cL],dv:"",ia:["FE"]},F3:{ic:0,nm:"VF_ELRETC",ft:"A",ln:2,dc:0,lb:"Return Code",h1:"Return",h2:"Code",h3:"",de:"Return Code",dv:"",ia:["FE"]},F4:{nm:"XDEPTMENT",an:"xDepartmentCode",
ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門"}[cL],h1:{"ENG":"Department","FRA":"Code","JPN":"部門"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード"}[cL],h3:" ",de:{"ENG":"Department","FRA":"Département","JPN":"部門"}[cL],dv:"",ia:["FE"]},F5:{nm:"XDEPTDESC",an:"xDepartmentDescription",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"説明...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"説明"}[cL],
h3:" ",de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門説明"}[cL],dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"A description is required for department","FRA":"A description is required for department","JPN":"A description is required for department"}[cL]}]},F6:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓"}[cL],
h3:" ",de:{"ENG":"Surname","FRA":"Nom","JPN":"姓"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム"}[cL],dv:"",ia:["FE","LC"]},F8:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地"}[cL],
h1:{"ENG":"Street","FRA":"Rue","JPN":"番地"}[cL],h2:" ",h3:" ",de:{"ENG":"Street","FRA":"Rue","JPN":"番地"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村"}[cL],h2:" ",h3:" ",de:{"ENG":"City","FRA":"Commune","JPN":"市区町村"}[cL],dv:"",ia:["FE","LC"]},F10:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州"}[cL],
h2:" ",h3:" ",de:{"ENG":"State","FRA":"Etat","JPN":"州"}[cL],dv:"",ia:["FE","LC"]},F11:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号"}[cL],h3:" ",de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号"}[cL],dv:"",ia:["FE"]},F12:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話"}[cL],
h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話"}[cL],h3:" ",de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話"}[cL],dv:"",ia:["FE"]},F13:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社"}[cL],h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話"}[cL],h3:" ",de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話"}[cL],
dv:"",ia:["FE"]},F14:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" "}[cL],h3:" ",de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収"}[cL],dv:0,ia:["FE","RB"]},F15:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始"}[cL],
h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付"}[cL],h3:" ",de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F16:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日"}[cL],h1:{"ENG":"Termination","FRA":"Date","JPN":"終了"}[cL],h2:{"ENG":"Date","FRA":"Départ","JPN":"日付"}[cL],h3:" ",de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F17:{nm:"XEMPIMG",
an:"xEmployeeImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像"}[cL],h3:" ",de:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{ShouldShowContact:{da:"r"},ShouldShowSalary:{da:"r"},ShouldShowTravel:{da:"r"}},mt:{EnumerateDepartments:{ps:{"Requester":{pt:"i"}}},LoadSystemTables:
{},FindEmployees:{ps:{"SearchType":{pt:"i"},"ReturnImages":{pt:"i"},"SearchString":{pt:"i"},"UsingListmanager":{pt:"i"},"ClearList":{pt:"i"},"TotalFound":{pt:"o"}}},LoadEmployee:{ps:{"xEmployeeIdentification":{pt:"i"}}},LoadExampleDepartmentInstanceList:{ps:{"UsingListManager":{pt:"i"}}}},ev:{InstanceListShowOptionChanged:{},FoundDepartmentTableItem:{ps:{"DepartmentCode":{pt:"i"},"DepartmentDescription":{pt:"i"},"Requester":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("DF_EMCTLO",Fd);
var C0=this.cR("SHOULDSHOWCONTACT","PRIM_BOLN");var C1=this.cR("SHOULDSHOWSALARY","PRIM_BOLN");var C2=this.cR("SHOULDSHOWTRAVEL","PRIM_BOLN");var C3=this.cR("SYSTEMTABLESLOADED","PRIM_BOLN");var C4=this.cR("OPENEMPLOYEES","PRIM_KCOL");C0.iC();C1.iC();C2.iC();C3.iC();C4.setCollects("DF_EMCTEO");C4.setKeyedBy(Fd.F2.Dc);C4.iC();var li=this.aL("DF_EMCTLO");li.SYSTEM_DEPARTMENTS=l.cLT({"XDEPTMENT":f.F4,"XDEPTDESC":f.F5},null);li.FINDEMPLOYEES1_RESULTLIST=l.cLT({"XEMPLOYID":f.F2,"XSURNAME":f.F6,"XGIVENAME":f.F7,"XSTREET":f.F8,"XCITY":f.F9,"XSTATE":f.F10,"XPOSTCODE":f.F11,"XPHONEHME":f.F12,"XPHONEBUS":f.F13,"XDEPTMENT":f.F4,"XSALARY":f.F14,"XSTARTDTE":f.F15,"XTERMDATE":f.F16,"XEMPIMG":f.F17},null);
}});cO.mthSET_SHOULDSHOWCONTACT=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_ShouldShowContact",55);var P0=r.cP("VALUE","PRIM_BOLN");P0.set(p0);r.ln=55;{r.ln=57;if(l.tB(l.b.ne(P0.get(),m.SHOULDSHOWCONTACT.get()))){r.ln=58;m.SHOULDSHOWCONTACT.set(P0.get());r.ln=59;this.fE("INSTANCELISTSHOWOPTIONCHANGED");}}r.ln=61;r.e();};cO.mthSET_SHOULDSHOWSALARY=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_ShouldShowSalary",64);var P0=r.cP("VALUE","PRIM_BOLN");P0.set(p0);r.ln=64;{r.ln=66;if(l.tB(l.b.ne(P0.get(),m.SHOULDSHOWSALARY.get())))
{r.ln=67;m.SHOULDSHOWSALARY.set(P0.get());r.ln=68;this.fE("INSTANCELISTSHOWOPTIONCHANGED");}}r.ln=70;r.e();};cO.mthSET_SHOULDSHOWTRAVEL=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_ShouldShowTravel",73);var P0=r.cP("VALUE","PRIM_BOLN");P0.set(p0);r.ln=73;{r.ln=75;if(l.tB(l.b.ne(P0.get(),m.SHOULDSHOWTRAVEL.get()))){r.ln=76;m.SHOULDSHOWTRAVEL.set(P0.get());r.ln=77;this.fE("INSTANCELISTSHOWOPTIONCHANGED");}}r.ln=79;r.e();};cO.mthENUMERATEDEPARTMENTS=function(p0){var li=this.LIST.DF_EMCTLO,f=this.FLD.DF_EMCTLO,r=l.mR(this,cO,"EnumerateDepartments",82);
var P0=r.cPD("REQUESTER");P0=r.sR("REQUESTER",p0);r.ln=82;{r.ln=85;this.mthLOADSYSTEMTABLES();r.ln=87;{var l1=li.SYSTEM_DEPARTMENTS.selectList();while(l1.step()){r.ln=88;{var eP=l.ePs();eP.cF("DEPARTMENTCODE",Fd.F4.Dc);eP.cF("DEPARTMENTDESCRIPTION",Fd.F5.Dc);eP.cD("REQUESTER");eP.r("DEPARTMENTCODE").set(f.F4.get());eP.r("DEPARTMENTDESCRIPTION").set(f.F5.get());eP.sR("REQUESTER",P0);this.fE("FOUNDDEPARTMENTTABLEITEM",eP);eP.e();}r.ln=89;}l1.end();}}r.ln=91;r.e();};cO.mthLOADSYSTEMTABLES=function()
{var li=this.LIST.DF_EMCTLO,m=this.REF,r=l.mR(this,cO,"LoadSystemTables",94);var C0=r.cDR("LOADSYSTEMTABLES","DF_EMDSO","LOADSYSTEMTABLES");C0.iC();r.ln=94;{r.ln=98;if(l.tB(l.b.eq(m.SYSTEMTABLESLOADED.get(),false))){r.ln=100;C0.mthEXECUTE({},{LIST:{"SYSTEM_DEPARTMENTS":li.SYSTEM_DEPARTMENTS}});r.ln=102;m.SYSTEMTABLESLOADED.set(true);}}r.ln=106;r.e();};cO.mthFINDEMPLOYEES=function(p0,p1,p2,p3,p4,p5){var li=this.LIST.DF_EMCTLO,f=this.FLD.DF_EMCTLO,r=l.mR(this,cO,"FindEmployees",109);var P0=r.cPF("SEARCHTYPE",Fd.F1.Dc);
var P1=r.cP("RETURNIMAGES","PRIM_BOLN");var P2=r.cP("SEARCHSTRING","PRIM_ALPH");var P3=r.cPD("USINGLISTMANAGER");var P4=r.cP("CLEARLIST","PRIM_BOLN");var P5=r.cPF("TOTALFOUND",Fd.F1.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3=r.sR("USINGLISTMANAGER",p3);P4.set(p4);var C0=r.cDR("FINDEMPLOYEES","DF_EMDSO","FINDEMPLOYEES");var C1=r.cD("C1");C0.iC();r.ln=109;{r.ln=124;if(l.tB(P4.get())){r.ln=125;P3.mthCLEARLIST(u,u);}r.ln=129;C0.mthEXECUTE({FLD:{"FINDEMPLOYEES_SEARCHSTRING":P2.get(),"FINDEMPLOYEES_SEARCHTYPE":P0.get(),"FINDEMPLOYEES_RETURNIMAGE":P1.get()}},{LIST:{"FINDEMPLOYEES_RESULTLIST":li.FINDEMPLOYEES1_RESULTLIST}});
r.ln=132;{var l1=li.FINDEMPLOYEES1_RESULTLIST.selectList();while(l1.step()){r.ln=134;P5.set(l.add(P5.get(),1));r.ln=137;if(l.s.IsNotSqlNull(f.F17.get())){r.ln=138;C1=r.sR("C1",l.APPL().mthCREATEBITMAP(f.F17.get(),u));}else{r.ln=140;C1=r.sR("C1",null);}r.ln=144;P3.mthADDTOLIST(f.F2.get(),l.add(l.cat(f.F7.get()," "),f.F6.get()),f.F2.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C1,u,f.F8.get(),f.F9.get(),f.F10.get(),f.F6.get(),f.F7.get(),f.F12.get(),f.F13.get(),f.F11.get(),u,u,u,f.F14.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);
r.ln=146;}l1.end();}r.ln=149;li.FINDEMPLOYEES1_RESULTLIST.clearList();p5.set(P5.get());}r.ln=151;r.e();};cO.mthLOADEMPLOYEE=function(p0){var m=this.REF,r=l.mR(this,cO,"LoadEmployee",154);var P0=r.cPF("XEMPLOYEEIDENTIFICATION",Fd.F2.Dc);var P1=r.cPD("EMPLOYEEACCESSOR");P0.set(p0);r.ln=154;{r.ln=158;P1=r.sR("P1",m.OPENEMPLOYEES.get(P0.get()));r.ln=160;P1.mthLOADEMPLOYEE(P0.get());}r.ln=162;return r.rR(P1);};cO.mthLOADEXAMPLEDEPARTMENTINSTANCELIST=function(p0){var li=this.LIST.DF_EMCTLO,f=this.FLD.DF_EMCTLO,r=l.mR(this,cO,"LoadExampleDepartmentInstanceList",166);
var P0=r.cPD("USINGLISTMANAGER");P0=r.sR("USINGLISTMANAGER",p0);var C0=r.cF("VF_WK1",Fd.F3.Dc);var C1=r.cF("VF_WK2",Fd.F3.Dc);var C2=r.cF("VF_WK3",Fd.F3.Dc);var C3=r.cF("VF_WK4",Fd.F3.Dc);var C4=r.cF("VF_WK5",Fd.F3.Dc);C0.iC();C1.iC();C2.iC();C3.iC();C4.iC();r.ln=166;{r.ln=176;this.mthLOADSYSTEMTABLES();r.ln=179;P0.mthCLEARLIST(u,u);r.ln=182;{var l1=li.SYSTEM_DEPARTMENTS.selectList();while(l1.step()){r.ln=185;C0.set(l.s.Substring(f.F5.get(),2,2));r.ln=186;C1.set(l.s.Substring(f.F5.get(),3,2));r.ln=187;
C2.set(l.s.Substring(f.F5.get(),4,2));r.ln=188;C3.set(l.s.Substring(f.F5.get(),5,2));r.ln=189;C4.set(l.s.Substring(f.F5.get(),6,2));r.ln=192;P0.mthADDTOLIST(f.F4.get(),f.F5.get(),f.F4.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C0.get(),C1.get(),C2.get(),C3.get(),C4.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);r.ln=194;}l1.end();}}r.ln=196;r.e();};cO.getSHOULDSHOWCONTACT=function(){return this.REF.SHOULDSHOWCONTACT.get();};cO.setSHOULDSHOWCONTACT=function(v){this.mthSET_SHOULDSHOWCONTACT(v);
};cO.getSHOULDSHOWSALARY=function(){return this.REF.SHOULDSHOWSALARY.get();};cO.setSHOULDSHOWSALARY=function(v){this.mthSET_SHOULDSHOWSALARY(v);};cO.getSHOULDSHOWTRAVEL=function(){return this.REF.SHOULDSHOWTRAVEL.get();};cO.setSHOULDSHOWTRAVEL=function(v){this.mthSET_SHOULDSHOWTRAVEL(v);};function rl1(F5){return (l.s.ne(F5.get(),""));};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});
}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELRETC"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XDEPTMENT"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XDEPTDESC"});}},{rp:["PRIM_OBJT","PRIM_BOLN","PRIM_KCOL","PRIM_WEB.DataRequest","PRIM_FLD"],dc:["DF_EMCTEO"],dp:["PRIM_BMP"]});