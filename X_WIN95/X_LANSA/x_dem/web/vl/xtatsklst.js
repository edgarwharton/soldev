﻿LANSA.addComponent({id:"XTATSKLST",nm:"XTATaskList",ot:"wv",tp:"View",pt:"ap",de:"Tasks Task List",tl:15000300},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{nm:"XTASKID",an:"xTaskId",ft:"I",ln:4,dc:0,lb:"Task ID",h1:"Task",h2:"ID",h3:" ",de:"Task ID",dv:0,ia:["FE","RB"]},F2:{nm:"XTASKNAME",an:"xTaskName",ft:"A",ln:50,dc:0,lb:"Task Name",h1:"Task",h2:"Name",h3:" ",de:"Task Name",dv:"",ia:["FE","LC"]},F3:{nm:"XTASKDESC",an:"xTaskDescription",ft:"A",ln:256,dc:0,lb:"Description",
h1:"Description",h2:" ",h3:" ",de:"Description",dv:"",ia:["FE","LC"]},F4:{nm:"XTASKREAS",an:"xTaskReason",ft:"A",ln:256,dc:0,lb:"Task Reason",h1:"Task",h2:"Reason",h3:" ",de:"Task Reason",dv:"",ia:["FE","LC"]},F5:{nm:"XTASKPRIO",an:"xTaskPriority",ft:"S",ln:1,dc:0,ec:"4",lb:"Task Priority",h1:"Task",h2:"Priority",h3:" ",de:"Task Priority",dv:0,ia:["FE","RB"]},F6:{nm:"XTASKOWN",an:"xTaskOwner",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé"}[cL],h1:{"ENG":"Employee","FRA":"Identification"}[cL],
h2:{"ENG":"Identification","FRA":"Employé"}[cL],h3:" ",de:"Identification",dv:"",ia:["FE"]},F7:{nm:"XTASKCREA",an:"xTaskCreated",ft:"DT",ln:26,dc:0,lb:"Task Created",h1:"Task",h2:"Created",h3:" ",de:"Task Created",dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]},F8:{nm:"XTASKLAST",an:"xTaskLastModified",ft:"DT",ln:26,dc:0,lb:"Task Last Modif",h1:"Task",h2:"Last",h3:"Modified",de:"Task Last Modified",dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]},F9:{nm:"XTASKSTS",an:"xTaskStatus",ft:"A",ln:10,dc:0,lb:"Status",
h1:"Status",h2:" ",h3:" ",de:"Status",dv:"PENDING",ia:["FE","LC"]},F10:{nm:"XTASKSTDS",an:"xTaskStatusDescription",ft:"NV",ln:256,dc:0,lb:{"ENG":"Description","FRA":"Task Status Des"}[cL],h1:"Task",h2:"Status",h3:"Description",de:"Task Status Description",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_VIEW",fd:Fd,mt:{RefreshTasks:{}},co:function(){cO.aN.call(this);var f=this.aF("XTATSKLST",Fd);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");
var C3=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C4=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C6=this.cR("TASKLIST","PRIM_TREE");var C7=this.cR("ADDBUTTON","PRIM_MD","ActionButton");var C8=this.cA("TASKEDITDIALOG","XTATSKEDT");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setColumn(C1);C3.setManage(C6);C3.setParent(C0);C3.setRow(C2);C3.iC();C4.setColumn(C1);C4.setParent(C0);C4.setRow(C2);
C4.iC();C5.setAlignment("BOTTOMRIGHT");C5.setColumn(C1);C5.setManage(C7);C5.setParent(C0);C5.setRow(C2);C5.setSizing("NONE");C5.setMarginBottom(16);C5.setMarginRight(16);C5.iC();C6.setDisplayPosition(2);C6.setLeft(0);C6.setParent(this);C6.setTabPosition(1);C6.setTabStop(false);C6.setTop(0);C6.setHeight(505);C6.setWidth(457);C6.iC();C7.setDisplayPosition(1);C7.setLeft(385);C7.setParent(this);C7.setTabPosition(2);C7.setTabStop(false);C7.setTop(433);C7.setThemeDrawStyle("DarkTitle");C7.setIcon("add");
C7.iC();if((C8!=null)&&(C8.iI()==false)){C8.iC();}C7.aH("CLICK",this,e2);C6.aDS("XTATSKITM");C6.aLF({"XTASKID":f.F1,"XTASKNAME":f.F2,"XTASKDESC":f.F3,"XTASKREAS":f.F4,"XTASKPRIO":f.F5,"XTASKOWN":f.F6,"XTASKCREA":f.F7,"XTASKLAST":f.F8,"XTASKSTS":f.F9,"XTASKSTDS":f.F10});this.setDisplayPosition(1);this.setHeight(505);this.setWidth(457);this.setLayoutManager(C0);this.setTabPosition(1);this.aH("PREPARE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.Prepare",22);r.ln=22;{r.ln=24;this.mthREFRESHTASKS();
}r.ln=26;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AddButton.Click",28);r.ln=28;{r.ln=30;m.TASKEDITDIALOG.ref.mthCREATETASK();}r.ln=32;r.e();};cO.mthREFRESHTASKS=function(){var m=this.REF,r=l.mR(this,cO,"RefreshTasks",38),mth=r;var C0=r.cDR("LOADTASKS","XTASRVM","LOADTASKS");C0.iC();C0.aH("COMPLETED",this,e3);r.ln=38;{r.ln=41;m.TASKLIST.clearList();r.ln=43;this.setImage(l.WEB().getLoadingImage());r.ln=45;C0.mthEXECUTEASYNC({},{LIST:{"XTATASKLIST":m.TASKLIST}});}r.ln=53;r.e();
function e3(sender,Ps){var r=l.eR(this,cO,"#LoadTasks.Completed",47,mth);r.ln=47;{r.ln=49;this.setImage(null);}r.ln=51;r.e();}};{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XTASKPRIO"});Fd.F5.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT1","PRIM_PKIT");var C3=this.cR("PKIT2","PRIM_PKIT");var C4=this.cR("PKIT3","PRIM_PKIT");C0.setValue(1);C0.setCaption("1 - Must be done NOW!");
C0.setParent(this);C0.setDefault(true);C0.iC();C1.setValue(2);C1.setCaption("2 - Must be done ASAP!");C1.setParent(this);C1.iC();C2.setParent(this);C2.setCaption("3 - Must be done SOON!");C2.setValue(3);C2.iC();C3.setParent(this);C3.setCaption("4 - Must be done eventually");C3.setValue(4);C3.iC();C4.setParent(this);C4.setCaption("5 - Nice to have");C4.setValue(5);C4.iC();this.setNoMatchAction("BLANKS");};l.cFC({co:Fd.F5.pl,an:"PRIM_PKLT",fn:"XTASKPRIO",cn:"Picklist"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);
};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XTASKSTS"});Fd.F9.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");C0.setValue("PENDING");C0.setCaption("This task is still pending");C0.setParent(this);C0.setDefault(true);C0.iC();C1.setValue("STARTED");C1.setCaption("This task has been started");C1.setParent(this);C1.iC();C2.setValue("COMPLETED");C2.setCaption("This task is completed");C2.setParent(this);C2.iC();
this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F9.pl,an:"PRIM_PKLT",fn:"XTASKSTS",cn:"Picklist"});}},{rc:["XTATSKEDT"],rp:["PRIM_VIEW","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_TREE","PRIM_MD.ActionButton","PRIM_WEB.DataRequest","PRIM_FLD","PRIM_PKLT"],dc:["XTATSKITM"]});