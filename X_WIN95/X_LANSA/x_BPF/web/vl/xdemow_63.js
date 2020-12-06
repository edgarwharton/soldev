﻿LANSA.addComponent({id:"XDEMOW_63",nm:"xDemoWebHelp",ot:"wp",tp:"Web Page",pt:"ap",de:"Using the F1 Key",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{ic:0,nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],
dv:"",ia:["FE","LC"]},F3:{ic:0,nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F4:{ic:0,nm:"XSTREET",an:"xEmployeeStreet",
ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],dv:"",ia:["FE","LC"]},F5:{ic:0,nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],
h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F6:{ic:0,nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],
dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);this.aF("XDEMOW_63",Fd);var C0=this.cR("OK","PRIM_PHBN");var C1=this.cF("XEMPLOYEEIDENTIFICATION",Fd.F1.VISUALEDIT);var C2=this.cF("XEMPLOYEESURNAME",Fd.F2.VISUALEDIT);var C3=this.cF("XEMPLOYEEGIVENNAMES",Fd.F3.VISUALEDIT);var C4=this.cF("XEMPLOYEESTREET",Fd.F4.VISUALEDIT);var C5=this.cF("XEMPLOYEECITY",Fd.F5.VISUALEDIT);var C6=this.cF("XEMPLOYEESTATE",Fd.F6.VISUALEDIT);var C7=this.cR("LABEL1","PRIM_LABL");var C8=this.cR("HELP","PRIM_STPG");
C0.setCaption("OK");C0.setDisplayPosition(8);C0.setLeft(4);C0.setParent(this);C0.setTabPosition(1);C0.setTop(179);C0.iC();C1.setDisplayPosition(2);C1.setHeight(21);C1.setParent(this);C1.setTabPosition(2);C1.setTop(33);C1.setWidth(251);C1.setLeft(4);C1.aD();C1.iC();C2.setDisplayPosition(3);C2.setParent(this);C2.setTabPosition(3);C2.setTop(58);C2.setLeft(4);C2.setWidth(541);C2.aD();C2.iC();C3.setDisplayPosition(4);C3.setParent(this);C3.setTabPosition(4);C3.setTop(81);C3.setLeft(4);C3.setWidth(541);
C3.aD();C3.iC();C4.setDisplayPosition(5);C4.setHeight(21);C4.setParent(this);C4.setTabPosition(5);C4.setTop(104);C4.setWidth(541);C4.setLeft(4);C4.aD();C4.iC();C5.setDisplayPosition(6);C5.setHeight(21);C5.setParent(this);C5.setTabPosition(6);C5.setTop(129);C5.setWidth(541);C5.setLeft(4);C5.aD();C5.iC();C6.setDisplayPosition(7);C6.setHeight(21);C6.setParent(this);C6.setTabPosition(7);C6.setTop(154);C6.setWidth(541);C6.setLeft(4);C6.aD();C6.iC();C7.setCaption("Press F1 for help");C7.setDisplayPosition(1);
C7.setEllipses("WORD");C7.setHeight(25);C7.setLeft(4);C7.setParent(this);C7.setTabPosition(8);C7.setTabStop(false);C7.setTop(4);C7.setVerticalAlignment("CENTER");C7.setWidth(557);C7.setThemeDrawStyle("DarkTitle");C7.setMarginLeft(3);C7.iC();C8.setShortCut("F1");C8.setParent(this);C8.iC();C8.aH("PRESSED",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Help.Pressed",14);r.ln=14;{r.ln=16;l.WEB().mthALERT(l.APPL().getFocusControl().getName());}r.ln=18;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(209);this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPLOYID",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSURNAME"});Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);
this.setComponentVersion(1);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F3.VISUALEDIT,an:"PRIM_EVEF",fn:"XGIVENAME",cn:"VisualEdit"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSTREET"});
Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTREET",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F5.VISUALEDIT=function(){this.aN.call(this,new Fd.F5.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F5.VISUALEDIT,an:"PRIM_EVEF",fn:"XCITY",cn:"VisualEdit"});
}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTATE"});Fd.F6.VISUALEDIT=function(){this.aN.call(this,new Fd.F6.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F6.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTATE",cn:"VisualEdit"});}},{rp:["PRIM_WEB","PRIM_PHBN","PRIM_FLD","PRIM_EVEF","PRIM_LABL","PRIM_STPG"]});