﻿LANSA.addComponent({id:"XATTCHDCT",nm:"xAttachmentContainer",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Associated Attachment Drop Container",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_BLOB",ft:"BL",ln:0,dc:0,lb:{"ENG":"Standard BLOB","FRA":"?","JPN":"?","LLL":"Standard BLOB"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"BLOB","FRA":"?","JPN":"?","LLL":"BLOB"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Standard BLOB","FRA":"?","JPN":"?","LLL":"Standard BLOB"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F2:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?","LLL":"Std Integer"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?","LLL":"Integer"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?","LLL":"Field"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?","LLL":"Standard Integer field"}[cL],dv:0,
ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{Terminate:{},SetPositionDropSpot:{},SetWaitingForWork:{},Init:{}},ev:{FileDropped:{ps:{"Name":{pt:"i"},"Type":{pt:"i"},"MimeType":{pt:"i"},"Size":{pt:"i"},"Blob":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XATTCHDCT",Fd);var C0=this.cR("LAYOUT","PRIM_TBLO");var C1=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C2=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTROW3","PRIM_TBLO","Row");
var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C6=this.cR("DROPSPOT","XATTCHDWI");var C7=this.cR("BORDERALLROUND","PRIM_VS","Style");var C8=this.cR("BORDEROVER","PRIM_VS","Style");var C9=this.cR("TRANSPARENT","PRIM_VS","Style");var C10=this.cR("LABELDROPINSTRUCTION","PRIM_MD","Label");var C11=this.cR("REVERSIONTIMER","PRIM_TIMR");var C12=this.cR("WAITINGFORWORKICON","PRIM_ALPH");var C13=this.cR("INPROGRESSICON","PRIM_ALPH");var C14=this.cR("COMPLETEDICON","PRIM_ALPH");C0.iC();C1.setDisplayPosition(1);
C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.setUnits("PIXELS");C3.setHeight(60);C3.iC();C4.setDisplayPosition(3);C4.setParent(C0);C4.iC();C5.setManage(C10);C5.setParent(C0);C5.setRow(C3);C5.setSizing("NONE");C5.setColumn(C1);C5.iC();C6.setParent(this);C6.setDisplayPosition(1);C6.setTabPosition(1);C6.setLeft(304);C6.setTop(112);C6.setStyle(C9);C6.iC();C7.setBorderBottom(1);C7.setBorderTop(1);C7.setBorderLeft(1);C7.setBorderRight(1);
C7.iC();C8.setBorderColor("BLUE");C8.iC();C9.setNormBackColor("TRANSPARENT");C9.iC();C10.setCaption("Drop file(s) to be attached onto the upload arrow above");C10.setDisplayPosition(1);C10.setHeight(88);C10.setLeft(17);C10.setParent(this);C10.setTabPosition(1);C10.setTop(44);C10.setWidth(420);C10.setIconAlignment("TOPCENTER");C10.setIcon("file_upload");C10.setCaptionAlignment("CENTER");C10.setIconColor("GRAY");C10.setIconHeight(36);C10.iC();C11.setInterval(0);C11.iC();C12.iC();C13.iC();C14.iC();C6.aH("UDRAGOVER",this,e3);
C6.aH("FILEDROPSTART",this,e4);C6.aH("FILEDROPPED",this,e5);C6.aH("UDRAGLEAVE",this,e6);C6.aH("UDRAGEND",this,e6);C11.aH("TICK",this,e2);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setHeight(177);this.setWidth(456);this.setStyle(C7);this.setLayoutManager(C0);this.aH("SIZECHANGED",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.SizeChanged",38);r.ln=38;{r.ln=40;this.mthSETPOSITIONDROPSPOT();}r.ln=42;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ReversionTimer.Tick",45);
r.ln=45;{r.ln=47;m.REVERSIONTIMER.setInterval(0);r.ln=49;this.mthSETWAITINGFORWORK();}r.ln=51;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DropSpot.uDragOver",53);r.ln=53;{r.ln=55;this.getStyles().mthADD(m.BORDEROVER);}r.ln=57;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#DropSpot.FileDropStart",59);var P0=Ps.r("NAME");r.ln=59;{r.ln=61;this.setEnabled(false);}r.ln=63;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DropSpot.FileDropped",65);var P0=Ps.r("NAME");
var P1=Ps.r("TYPE");var P2=Ps.r("SIZE");var P3=Ps.r("DATA");var C0=r.cF("LOCALBLOB",Fd.F1.Dc);var C1=r.cR("MIMETYPE","PRIM_DC","UnicodeString");var C2=r.cF("BASE64DATAPOS",Fd.F2.Dc);var C3=r.cF("SEMICOLONPOS",Fd.F2.Dc);C0.iC();C1.iC();C2.iC();C3.iC();r.ln=65;{r.ln=78;C3.set(l.s.PositionOf(P3.get(),";"));r.ln=79;C2.set(l.add(C3.get(),8));r.ln=80;C1.set(l.s.Substring(P3.get(),6,l.sub(C3.get(),6)));r.ln=82;C0.set(l.WEB().mthCREATEBLOB(l.s.Substring(P3.get(),C2.get()),C1.get()));r.ln=84;{var eP=l.ePs();
eP.cR("NAME","PRIM_ALPH");eP.cR("TYPE","PRIM_ALPH");eP.cR("MIMETYPE","PRIM_ALPH");eP.cF("SIZE",Fd.F2.Dc);eP.cD("BLOB");eP.r("NAME").set(P0.get());eP.r("TYPE").set(P1.get());eP.r("MIMETYPE").set(C1.get());eP.r("SIZE").set(l.s.AsNumber(P2.get()));eP.sR("BLOB",C0);this.fE("FILEDROPPED",eP);eP.e();}r.ln=86;m.REVERSIONTIMER.setInterval(1000);}r.ln=89;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#DropSpot.uDragLeave #DropSpot.uDragEnd",91);r.ln=91;{r.ln=93;this.mthSETWAITINGFORWORK();}r.ln=95;r.e();
};cO.mthTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"Terminate",101);r.ln=101;{r.ln=103;m.REVERSIONTIMER.setInterval(0);r.ln=105;m.DROPSPOT.mthUTERMINATE();}r.ln=107;r.e();};cO.mthSETPOSITIONDROPSPOT=function(){var m=this.REF,r=l.mR(this,cO,"SetPositionDropSpot",109);r.ln=109;{r.ln=111;m.DROPSPOT.setTop(0);m.DROPSPOT.setLeft(0);m.DROPSPOT.setWidth(this.getWidth());m.DROPSPOT.setHeight(this.getHeight());r.ln=113;m.DROPSPOT.setDisplayPosition(1);}r.ln=115;r.e();};cO.mthSETWAITINGFORWORK=function()
{var m=this.REF,r=l.mR(this,cO,"SetWaitingForWork",118);r.ln=118;{r.ln=120;this.getStyles().mthREMOVE(m.BORDEROVER);r.ln=122;this.setEnabled(true);}r.ln=124;r.e();};cO.mthINIT=function(){var m=this.REF,r=l.mR(this,cO,"Init",126);r.ln=126;{r.ln=128;m.WAITINGFORWORKICON.set("fa-dropbox");r.ln=130;m.INPROGRESSICON.set("fa-hourglass");r.ln=132;m.COMPLETEDICON.set("fa-check");r.ln=134;this.mthSETPOSITIONDROPSPOT();r.ln=136;this.mthSETWAITINGFORWORK();}r.ln=138;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_BLOB"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["XATTCHDWI"],rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_VS.Style","PRIM_MD.Label","PRIM_TIMR","PRIM_ALPH","PRIM_FLD"],dp:["PRIM_DC.UnicodeString"]});