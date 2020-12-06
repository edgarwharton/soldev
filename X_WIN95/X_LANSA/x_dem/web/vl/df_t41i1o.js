﻿LANSA.addComponent({id:"DF_T41I1O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Simple snap in Instance list",tl:15000000},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID"}[cL],h3:" ",de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明"}[cL],
dv:"",ia:["FE"]},F2:{nm:"VF_ELTXTM",ft:"A",ln:50,dc:0,lb:"Standard medium",h1:"Standard",h2:"Medium",h3:"Text",de:"Standard medium Text",dv:"",ia:["FE"]},F3:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Code retour E/S","JPN":"I/O戻りコード"}[cL],h1:{"ENG":"I/O","FRA":"Code","JPN":" I/O"}[cL],h2:{"ENG":"Status","FRA":"retour E/S","JPN":"コード"}[cL],h3:"",de:{"ENG":"Data base I/O operation status code","FRA":"Code retour opérations E/S B. de données","JPN":" DB入出力戻りコード"}[cL],dv:"",ia:["FE"]
}};var cO=l.rC(oI,{an:"VF_AC012O",fd:Fd,mt:{uInitialize:{},uClearInstanceList:{ps:{"IsBeingDestroyed":{pt:"i"}}},uPutListEntryData:{ps:{"DataItem":{pt:"i"}}},uDeleteListEntryData:{ps:{"DataItem":{pt:"i"}}},uSendtoXL:{}},co:function(){cO.aN.call(this);var f=this.aF("DF_T41I1O",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEM1","PRIM_ATLI");var C2=this.cR("ATTACHITEM2","PRIM_ATLI");var C3=this.cR("XEMPLOYEELIST","PRIM_LIST");var C4=this.cR("COL_IMAGE","PRIM_LIST","Image");
var C5=this.cR("COL_EMPLOYEEIDENT","PRIM_LIST","String");var C6=this.cR("COL_FULLNAME","PRIM_LIST","String");var C7=this.cR("LABEL1","PRIM_LABL");C0.iC();C1.setAttachment("TOP");C1.setManage(C7);C1.setParent(C0);C1.iC();C2.setManage(C3);C2.setParent(C0);C2.setAttachment("CENTER");C2.iC();C3.setParent(this);C3.setDisplayPosition(1);C3.setTabPosition(1);C3.setHeight(184);C3.setWidth(825);C3.setLeft(0);C3.setTop(25);C3.setColumnLines(false);C3.setRowLines(false);C3.setRowHeight(50);C3.iC();C4.setDisplayPosition(1);
C4.setParent(C3);C4.setColumnCaption("Image");C4.setColumnWidth(90);C4.setImageSizing("BESTFIT");C4.setCellMarginBottom(1);C4.setCellMarginTop(1);C4.iC();C5.setDisplayPosition(3);C5.setParent(C3);C5.setSource(f.F1);C5.setSortOnClick(true);C5.setColumnCaptionType("CAPTION");C5.setColumnCaption("Identification");C5.setColumnWidth(169);C5.iC();C6.setDisplayPosition(2);C6.setParent(C3);C6.setSource(f.F2);C6.setSortOnClick(true);C6.setColumnCaptionType("CAPTION");C6.setColumnCaption("Name");C6.setColumnWidth(147);
C6.iC();C7.setCaption("This is a snap in Instance List - see DF_T41I1O for details");C7.setDisplayPosition(2);C7.setEllipses("WORD");C7.setHeight(25);C7.setLeft(0);C7.setParent(this);C7.setTabPosition(2);C7.setTabStop(false);C7.setTop(0);C7.setVerticalAlignment("CENTER");C7.setWidth(825);C7.iC();C3.aH("ITEMGOTFOCUS",this,e1);C3.aH("ITEMCLICK",this,e1);C3.aH("ITEMGOTSELECTION",this,e2);C3.aH("ITEMLOSTSELECTION",this,e3);this.setHeight(209);this.setWidth(825);this.setLayoutManager(C0);this.aH("CLICK",this,e4);
}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",76);r.ln=76;{r.ln=79;cA.mthUINITIALIZE.call(this);r.ln=82;this.REF.USYSTEM.ref.getCURRENTTHEME().mthAVSTYLEPRIM_LISTFORFORMFACTOR(m.XEMPLOYEELIST,this);}r.ln=84;r.e();};cO.mthUCLEARINSTANCELIST=function(p0){var m=this.REF,r=l.mR(this,cO,"uClearInstanceList",90);var P0=r.cP("ISBEINGDESTROYED","PRIM_BOLN");P0.set(p0);r.ln=90;{r.ln=93;m.XEMPLOYEELIST.clearList();}r.ln=95;r.e();};cO.mthUPUTLISTENTRYDATA=function(p0)
{var f=this.FLD.DF_T41I1O,m=this.REF,r=l.mR(this,cO,"uPutListEntryData",101);var P0=r.cPD("DATAITEM");P0=r.sR("DATAITEM",p0);var C0=r.cD("C0");r.ln=101;{r.ln=111;C0=r.sR("C0",m.XEMPLOYEELIST.mthFINDREFERENCE(P0));r.ln=113;if(C0!=null){r.ln=114;f.F3.set(lIO=m.XEMPLOYEELIST.getEntry(C0.getEntry()));}r.ln=117;f.F1.set(P0.getAVAKEY1().get());r.ln=118;f.F2.set(P0.getAVVISUALID1().get());r.ln=121;if(C0!=null){r.ln=122;m.XEMPLOYEELIST.updateEntry();}else{r.ln=124;m.XEMPLOYEELIST.addEntry();r.ln=125;C0=r.sR("C0",m.XEMPLOYEELIST.getCurrentItem());
}r.ln=129;C0.setRelatedReference(P0);r.ln=130;C0.setSelected(P0.getAVISSELECTED());r.ln=133;m.COL_IMAGE.getCurrentItem().setImage(P0.getAVICOLUMN1());}r.ln=135;r.e();};cO.mthUDELETELISTENTRYDATA=function(p0){var m=this.REF,r=l.mR(this,cO,"uDeleteListEntryData",141);var P0=r.cPD("DATAITEM");P0=r.sR("DATAITEM",p0);var C0=r.cD("C0");r.ln=141;{r.ln=144;C0=r.sR("C0",m.XEMPLOYEELIST.mthFINDREFERENCE(P0));r.ln=145;if(C0!=null){r.ln=146;m.XEMPLOYEELIST.deleteEntry(C0.getEntry());}}r.ln=148;r.e();};cO.mthUSENDTOXL=function()
{var r=l.mR(this,cO,"uSendtoXL",154);r.ln=154;{r.ln=159;this.REF.AVLISTMANAGER.mthAVOUTPUTINSTANCELISTASCSV(u);}r.ln=165;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#xEmployeeList.ItemGotFocus #xEmployeeList.ItemClick",172);var C0=r.cD("C0");r.ln=172;{r.ln=176;C0=r.sR("C0",l.cast(m.XEMPLOYEELIST.getCurrentItem().getRelatedReference(),"VF_LM003O"));r.ln=180;C0.setAVISCURRENT(true);r.ln=183;C0.mthAVEXECUTEDEFAULTCOMMAND(u);}r.ln=186;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#xEmployeeList.ItemGotSelection",188);
r.ln=188;{r.ln=190;l.cast(m.XEMPLOYEELIST.getCurrentItem().getRelatedReference(),"VF_LM003O").setAVISSELECTED(true);}r.ln=192;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#xEmployeeList.ItemLostSelection",194);r.ln=194;{r.ln=196;l.cast(m.XEMPLOYEELIST.getCurrentItem().getRelatedReference(),"VF_LM003O").setAVISSELECTED(false);}r.ln=198;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Com_owner.Click",202);var P0=Ps.r("HANDLED");r.ln=202;{r.ln=206;P0.set(true);}r.ln=208;r.e();};
cO.setrefAVLISTMANAGER=function(rn){cA.setrefAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC012O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_LIST","PRIM_LIST.Image","PRIM_LIST.String","PRIM_LABL","PRIM_FLD"],dc:["VF_LM003O"],dp:["PRIM_LIST.ListItem"]});