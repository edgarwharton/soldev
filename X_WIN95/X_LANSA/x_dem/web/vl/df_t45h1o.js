﻿LANSA.addComponent({id:"DF_T45H1O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Interacting with Search box",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"DF_ELTX",ft:"A",ln:255,dc:0,lb:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h1:{"ENG":"Enter","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h2:{"ENG":"Text","FRA":"Text","JPN":""}[cL],h3:"",de:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ入力"}[cL],dv:"",ia:["LC","FE"]}};var cO=l.rC(oI,{an:"VF_AC010O",
fd:Fd,mt:{uInitialize:{},uHandleSearchorCommand:{ps:{"Details":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("DF_T45H1O",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEM1","PRIM_ATLI");var C2=this.cR("ATTACHITEM2","PRIM_ATLI");var C3=this.cR("ATTACHITEM3","PRIM_ATLI");var C4=this.cR("ATTACHITEM4","PRIM_ATLI");var C5=this.cR("ATTACHITEM5","PRIM_ATLI");var C6=this.cR("ATTACHITEM6","PRIM_ATLI");var C7=this.cR("LABEL_HOW_IT_WORKS","PRIM_LABL");var C8=this.cR("LABEL_INSTRUCTION","PRIM_LABL");
var C9=this.cR("LABEL_INSTRUCTION2","PRIM_LABL");var C10=this.cR("LABEL1","PRIM_LABL");var C11=this.cR("LIST1","PRIM_LIST");var C12=this.cR("COLUMNDF_ELTX1","PRIM_LIST","String");var C13=this.cR("BUTTON_CLEARLIST","PRIM_PHBN");C0.setMarginBottom(5);C0.setMarginLeft(5);C0.setMarginRight(5);C0.setMarginTop(5);C0.iC();C1.setManage(C7);C1.setParent(C0);C1.setAttachment("TOP");C1.iC();C2.setManage(C10);C2.setParent(C0);C2.setAttachment("TOP");C2.iC();C3.setManage(C8);C3.setParent(C0);C3.setAttachment("TOP");
C3.iC();C4.setManage(C11);C4.setParent(C0);C4.setAttachment("CENTER");C4.iC();C5.setAttachment("BOTTOM");C5.setManage(C13);C5.setParent(C0);C5.iC();C6.setManage(C9);C6.setParent(C0);C6.setAttachment("TOP");C6.iC();C7.setCaption("See component DF_T45H1O for details of this command handler");C7.setDisplayPosition(1);C7.setEllipses("WORD");C7.setHeight(25);C7.setLeft(5);C7.setParent(this);C7.setTabPosition(3);C7.setTabStop(false);C7.setTop(5);C7.setVerticalAlignment("CENTER");C7.setWidth(567);C7.iC();
C8.setDisplayPosition(3);C8.setHeight(48);C8.setLeft(5);C8.setParent(this);C8.setTabPosition(2);C8.setTabStop(false);C8.setTop(89);C8.setWidth(567);C8.setVerticalAlignment("CENTER");C8.setCaption("Use the Quick Find menu option at the top right of the screen");C8.iC();C9.setCaption("Enter some words in the framework's search box at the TOP RIGHT of the window and press Enter");C9.setDisplayPosition(4);C9.setHeight(56);C9.setLeft(5);C9.setParent(this);C9.setTabPosition(1);C9.setTabStop(false);C9.setTop(137);
C9.setWidth(567);C9.setVerticalAlignment("CENTER");C9.iC();C10.setCaption("This command handler shows how a filter or command handler can interact  with the framework's search box at the top right of the window");C10.setDisplayPosition(2);C10.setEllipses("WORD");C10.setHeight(59);C10.setLeft(5);C10.setParent(this);C10.setTabPosition(4);C10.setTabStop(false);C10.setTop(30);C10.setVerticalAlignment("CENTER");C10.setWidth(567);C10.iC();C11.setDisplayPosition(5);C11.setLeft(5);C11.setParent(this);C11.setTabPosition(5);
C11.setTop(193);C11.setWidth(567);C11.setHeight(66);C11.iC();C12.setDisplayPosition(1);C12.setParent(C11);C12.setSource(f.F1);C12.setColumnUnits("PROPORTION");C12.setColumnCaptionType("CAPTION");C12.setColumnCaption("Data received from the Search Box");C12.iC();C13.setCaption("Clear List");C13.setDisplayPosition(6);C13.setLeft(5);C13.setParent(this);C13.setTabPosition(6);C13.setTop(259);C13.setWidth(567);C13.iC();C13.aH("CLICK",this,e1);this.setHeight(289);this.setWidth(577);this.setLayoutManager(C0);
}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",47);r.ln=47;{r.ln=49;cA.mthUINITIALIZE.call(this);r.ln=51;if(this.REF.AVFRAMEWORKMANAGER.getAVSMALLSCREEN()){r.ln=52;m.LABEL_INSTRUCTION.setVisible(true);}else{r.ln=54;m.LABEL_INSTRUCTION.setVisible(false);}}r.ln=57;r.e();};cO.mthUHANDLESEARCHORCOMMAND=function(p0){var f=this.FLD.DF_T45H1O,m=this.REF,r=l.mR(this,cO,"uHandleSearchorCommand",62);var P0=r.cPD("DETAILS");var P1=r.cP("HANDLED","PRIM_BOLN");
P0=r.sR("DETAILS",p0);r.ln=62;{r.ln=73;f.F1.set(l.cat("User Object Type: ",P0.getUUSEROBJECTTYPE()));r.ln=75;if(P0.getUVF_AC001OREFERENCE()!=null){r.ln=76;f.F1.set(l.add(f.F1.get(),l.add("Object Caption: ",P0.getUVF_AC001OREFERENCE().getUCAPTION())));}r.ln=79;if(l.n.gt(P0.getUSEARCHWORDSORCOMMANDS().getItemCount(),0)){r.ln=80;f.F1.set(l.cat(f.F1.get()," Search Words: "));r.ln=81;{var l1=P0.getUSEARCHWORDSORCOMMANDS().cI();while(l1.step()){var WORD=r.sR("WORD",l1.item());r.ln=82;f.F1.set(l.add(f.F1.get(),l.add(" - ",WORD.get())));
r.ln=83;}l1.end();r.dR("WORD");}}r.ln=86;m.LIST1.addEntry();r.ln=90;if(l.s.eq(P0.getUUSEROBJECTTYPE(),"INTERACT_WITH_SEARCH_BOX")){}r.ln=95;P1.set(true);}r.ln=97;return r.rV(P1.get());};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button_ClearList.Click",100);r.ln=100;{r.ln=101;m.LIST1.clearList();}r.ln=102;r.e();};cO.setrefAVFRAMEWORKMANAGER=function(rn){cA.setrefAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_LIST","PRIM_LIST.String","PRIM_PHBN","PRIM_FLD"]
});