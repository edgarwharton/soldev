﻿LANSA.addComponent({id:"DF_DET57O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=VLF-ONE VF_UM056O Pane Item",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"XEMPGUID",an:"xEmployeeNoteGUID",ft:"A",ln:32,dc:0,lb:{"ENG":"Note GUID","FRA":"GUID Note","JPN":"GUID 注記"}[cL],h1:{"ENG":"Note","FRA":"GUID","JPN":"注記"}[cL],h2:{"ENG":"GUID","FRA":"Note","JPN":"GUID"}[cL],h3:" ",de:{"ENG":"Note GUID","FRA":"GUID Note","JPN":"GUID 注記"}[cL],dv:"",
ia:["FE"]},F2:{ic:0,nm:"XEMPNTCRU",an:"xEmployeeNoteCreateUpdate",ft:"DT",ln:19,dc:0,lb:{"ENG":"Creation/Update","FRA":"Création/Màj","JPN":"作成/更新"}[cL],h1:{"ENG":"Creation/Update","FRA":"Date Heure","JPN":"作成/更新"}[cL],h2:{"ENG":"DateTime","FRA":"Création","JPN":"日時"}[cL],h3:{"ENG":"stamp","FRA":"Mise à jour","JPN":"スタンプ"}[cL],de:{"ENG":"Creation/Update DateTime stamp","FRA":"Date/heure création mise à jour","JPN":"日時スタンプの作成/更新"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"],oa:["TCYX"]},F3:{ic:0,
nm:"XEMPNOTE",an:"xEmployeeNote",ft:"NV",ln:4096,dc:0,lb:{"ENG":"Employee Note","FRA":"Note employé","JPN":"社員注記"}[cL],h1:{"ENG":"Employee","FRA":"Note","JPN":"社員"}[cL],h2:{"ENG":"Note","FRA":"Employé","JPN":"注記"}[cL],h3:" ",de:{"ENG":"Employee Note","FRA":"Note de l'employé","JPN":"社員注記"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_TREE.ITreeDesign"],fd:Fd,rm:["dt"],pt:{AssignedEmployeeNoteGUID:{da:"r"}},mt:{CreateUpdateItem:{ps:{"NoteCreateUpdate":{pt:"i"},"Note":{pt:"i"
},"NoteGUID":{pt:"i"},"AttachmentSuffix":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("DF_DET57O",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEM1","PRIM_ATLI");var C2=this.cR("ATTACHITEM2","PRIM_ATLI");var C3=this.cR("ATTACHLAYOUT2","PRIM_ATLM");var C4=this.cR("ATTACHITEM3","PRIM_ATLI");var C5=this.cR("ATTACHITEM4","PRIM_ATLI");var C6=this.cR("ATTACHLAYOUT3","PRIM_ATLM");var C7=this.cR("ATTACHITEM5","PRIM_ATLI");var C8=this.cR("ATTACHITEM6","PRIM_ATLI");var C9=this.cF("ASSIGNEDEMPLOYEENOTEGUID",Fd.F1.Dc);
var C10=this.cA("USYSTEM","VF_SY001O");var C11=this.cR("TITLETEXT","PRIM_VS","Style");var C12=this.cR("SMALLDATE","PRIM_VS","Style");var C13=this.cR("BORDERBOTTOM","PRIM_VS","Style");var C14=this.cR("LEFTPANEL","PRIM_PANL");var C15=this.cR("RIGHTPANEL","PRIM_PANL");var C16=this.cR("IMAGE","PRIM_IMAG");var C17=this.cR("VISIBLEDATE","PRIM_LABL");var C18=this.cR("TEXTTITLE","PRIM_LABL");var C19=this.cR("TEXTBODY","PRIM_LABL");C0.iC();C1.setManage(C14);C1.setParent(C0);C1.setAttachment("LEFT");C1.iC();
C2.setManage(C15);C2.setParent(C0);C2.setAttachment("CENTER");C2.iC();C3.iC();C4.setManage(C19);C4.setParent(C3);C4.setAttachment("CENTER");C4.setMarginLeft(4);C4.setMarginTop(4);C4.setMarginBottom(4);C4.setMarginRight(4);C4.iC();C5.setManage(C18);C5.setParent(C3);C5.setAttachment("TOP");C5.setMarginLeft(4);C5.setMarginTop(4);C5.setMarginBottom(4);C5.setMarginRight(4);C5.iC();C6.iC();C7.setManage(C16);C7.setParent(C6);C7.setAttachment("TOP");C7.setMarginLeft(4);C7.setMarginTop(4);C7.setMarginRight(4);
C7.iC();C8.setManage(C17);C8.setParent(C6);C8.setAttachment("TOP");C8.iC();C9.aD();C9.iC();if((C10!=null)&&(C10.iI()==false)){C10.iC();}C11.setBold(true);C11.setFontSize(19);C11.setFontUnits("PIXEL");C11.iC();C12.setFontSize(8);C12.setFontUnits("PIXEL");C12.iC();C13.setBorderBottom(1);C13.iC();C14.setParent(this);C14.setDisplayPosition(2);C14.setTabPosition(2);C14.setHeight(113);C14.setLeft(0);C14.setTop(0);C14.setLayoutManager(C6);C14.setStyle(C13);C14.iC();C15.setParent(this);C15.setDisplayPosition(1);
C15.setTabPosition(1);C15.setHeight(113);C15.setLeft(50);C15.setTop(0);C15.setWidth(407);C15.setLayoutManager(C3);C15.setStyle(C13);C15.iC();C16.setParent(C14);C16.setDisplayPosition(1);C16.setTabPosition(1);C16.setTabStop(false);C16.setLeft(4);C16.setTop(4);C16.setHeight(24);C16.setImageSizing("BESTFIT");C16.setWidth(42);C16.iC();C17.setParent(C14);C17.setDisplayPosition(2);C17.setTabPosition(2);C17.setTabStop(false);C17.setStyle(C12);C17.setLeft(0);C17.setTop(28);C17.setHeight(49);C17.iC();C18.setParent(C15);
C18.setDisplayPosition(1);C18.setTabPosition(1);C18.setTabStop(false);C18.setLeft(4);C18.setTop(4);C18.setWidth(399);C18.setHeight(23);C18.setEllipses("END");C18.setStyle(C11);C18.setWordWrap(false);C18.iC();C19.setParent(C15);C19.setDisplayPosition(2);C19.setTabPosition(2);C19.setTabStop(false);C19.setLeft(4);C19.setTop(35);C19.setWidth(399);C19.setHeight(73);C19.setEllipses("END");C19.iC();this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(457);this.setLeft(0);this.setTop(0);this.setHeight(113);
this.setLayoutManager(C0);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",44);r.ln=44;{r.ln=46;this.getStyles().mthADD(m.BORDERBOTTOM);r.ln=48;this.setThemeDrawStyle("LISTITEM");}r.ln=50;r.e();};cO.mthCREATEUPDATEITEM=function(p0,p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"CreateUpdateItem",53);var P0=r.cPF("NOTECREATEUPDATE",Fd.F2.Dc);var P1=r.cPF("NOTE",Fd.F3.Dc);var P2=r.cPF("NOTEGUID",Fd.F1.Dc);var P3=r.cP("ATTACHMENTSUFFIX","PRIM_ALPH");
P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);var C0=r.cR("DATEWORK","PRIM_ALPH");var C1=r.cR("DATEPART1","PRIM_ALPH");var C2=r.cR("DATEPART2","PRIM_ALPH");C0.iC();C1.iC();C2.iC();r.ln=53;{r.ln=63;m.ASSIGNEDEMPLOYEENOTEGUID.set(P2.get());r.ln=65;m.TEXTTITLE.setCaption(P1.get());r.ln=67;m.TEXTBODY.setCaption(P1.get());r.ln=69;C0.set(l.s.Substring(l.dt.AsDisplayString(P0.get(),"LOCALIZED_SQL"),1,19));r.ln=70;C1.set(l.s.Substring(C0.get(),1,10));r.ln=71;C2.set(l.s.Substring(C0.get(),12,8));r.ln=73;m.VISIBLEDATE.set(l.cat(l.cat(l.cat(C1.get(),l.n.AsUnicodeString(10))," "),C2.get()));
r.ln=75;{var v1=P3.get();if(r.ln=77,l.or(l.s.eq(v1,"DOC"),l.s.eq(v1,"DOCX"))){r.ln=78;m.IMAGE.setImage(m.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("DOCUMENTS_OUTLINE.PNG","MEDIUM","T",false));}else if(r.ln=80,l.s.eq(v1,"TXT")){r.ln=81;m.IMAGE.setImage(m.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("NOTE-OR-NOTEBOOK_OUTLINE.PNG","MEDIUM","T",false));}else if(r.ln=83,l.or(l.s.eq(v1,"XLS"),l.s.eq(v1,"XLSX"))){r.ln=84;m.IMAGE.setImage(m.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("SPREADSHEET_OUTLINE.PNG","MEDIUM","T",false));
}else if(r.ln=86,l.or(l.or(l.s.eq(v1,"JPG"),l.s.eq(v1,"PNG")),l.s.eq(v1,"BMP"))){r.ln=87;m.IMAGE.setImage(m.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("CAMERA_OUTLINE.PNG","MEDIUM","T",false));}else if(r.ln=89,l.or(l.s.eq(v1,"PPT"),l.s.eq(v1,"PPTX"))){r.ln=90;m.IMAGE.setImage(m.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("ABOUT_OUTLINE.PNG","MEDIUM","T",false));}else if(r.ln=92,l.s.eq(v1,"PDF")){r.ln=93;m.IMAGE.setImage(m.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("PRINT_OUTLINE.PNG","MEDIUM","T",false));}else{r.ln=96;
m.IMAGE.setImage(m.USYSTEM.ref.mthGETVLFIMAGEREFERENCE("DENY_OUTLINE.PNG","MEDIUM","T",false));}r.ln=98;}}r.ln=101;r.e();};cO.getASSIGNEDEMPLOYEENOTEGUID=function(){return this.REF.ASSIGNEDEMPLOYEENOTEGUID.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPGUID"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPNTCRU"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XEMPNOTE"});
}},{rc:["VF_SY001O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_FLD","PRIM_VS.Style","PRIM_IMAG","PRIM_LABL","PRIM_DTIM"],dp:["PRIM_ALPH"]});