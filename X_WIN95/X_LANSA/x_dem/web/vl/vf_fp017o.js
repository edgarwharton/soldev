﻿LANSA.addComponent({id:"VF_FP017O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=User Property (VLF-ONE)",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"VF_ELINDX",ft:"I",ln:4,dc:0,ec:"3",lb:"Standard Binary",h1:"Standard",h2:"Binary",h3:"Index",de:"Standard Binary Index Field",dv:0,ia:["FE","RB"]},F2:{ic:0,nm:"VF_ELPTYN",ft:"A",ln:32,dc:0,lb:"Property Name",h1:"Property",h2:"Name",h3:"",de:"Property Name",dv:"",ia:["FE"]},F3:{ic:0,
nm:"VF_ELPTYT",ft:"A",ln:1,dc:0,lb:"Property Type",h1:"Property",h2:"Type",h3:"",de:"Property Type",dv:"",ia:["FE"]},F4:{ic:0,nm:"VF_ELOBJ",ft:"A",ln:10,dc:0,lb:{"ENG":"Identifier","FRA":"LANSA Object Na","JPN":"LANSA Object Na"}[cL],h1:"LANSA",h2:"Object",h3:{"ENG":"Identifier","FRA":"Name","JPN":"Name"}[cL],de:{"ENG":"LANSA Object Identifier","FRA":"LANSA Object Name","JPN":"LANSA Object Name"}[cL],dv:"",ia:["FE"]},F5:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],
h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F6:{ic:0,nm:"VF_ELNUMX",ft:"S",ln:30,dc:9,ec:"4",lb:"Maximum Number",h1:"Maximum",h2:"Number",h3:"",de:"Maximum Number",dv:0,ia:["RB","FE"]},F7:{ic:0,nm:"VF_ELCA_1",an:"VF_ELCAPNU",ft:"N",ln:40,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:"",ia:["FE","LC","ASQN"],oa:["ASQN"]
},F8:{ic:0,nm:"VF_ELTXTS",ft:"A",ln:20,dc:0,lb:"Standard Short",h1:"Standard",h2:"Short",h3:"Text",de:"Standard Short Text",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC001O",fd:Fd,pt:{uExecMaxInstance:{da:"rw"},uFIXEDMaxInstance:{da:"rw"},uExecAlphaInstance:{da:"na"},uExecNumericInstance:{da:"na"},uExecBooleanInstance:{da:"na"},uCaptionInstance:{da:"na"},uName:{da:"na"},uNameInternal:{da:"r"},uType:{da:"r"},uMethod:{da:"r"},uMaxLength:{da:"r"},uMaxDecimal:{da:"r"},uuppercase:{da:"r"},uMultipleSelect:
{da:"r"},uAdminChange:{da:"r"},zInt_Count:{da:"na"}},mt:{zInt_SetProperty:{ps:{"P":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_FP017O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cF("EXECMAXINSTANCE",Fd.F1.Dc);var C2=this.cF("FIXEDMAXINSTANCE",Fd.F1.Dc);var C3=this.cR("EXECALPHAINSTANCE","PRIM_KCOL");var C4=this.cR("EXECNUMERICINSTANCE","PRIM_KCOL");var C5=this.cR("EXECBOOLEANINSTANCE","PRIM_KCOL");var C6=this.cR("CAPTIONINSTANCE","PRIM_KCOL");var C7=this.cF("UNAME",Fd.F2.Dc);
var C8=this.cF("UNAMEINTERNAL",Fd.F2.Dc);var C9=this.cF("UTYPE",Fd.F3.Dc);var C10=this.cF("UMETHOD",Fd.F4.Dc);var C11=this.cF("UMAXLENGTH",Fd.F1.Dc);var C12=this.cF("UMAXDECIMAL",Fd.F1.Dc);var C13=this.cR("UUPPERCASE","PRIM_BOLN");var C14=this.cR("UMULTIPLESELECT","PRIM_ALPH");var C15=this.cR("UADMINCHANGE","PRIM_BOLN");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.aD();C1.iC();C2.aD();C2.iC();C3.setStyle("COLLECTION");C3.setCollects("PRIM_DC.UnicodeString");C3.setKeyedBy(Fd.F1.Dc);C3.iC();C4.setStyle("COLLECTION");
C4.setCollects("VF_ELNUMX",Fd.F6.Dc);C4.setKeyedBy(Fd.F1.Dc);C4.iC();C5.setStyle("COLLECTION");C5.setCollects("PRIM_BOLN");C5.setKeyedBy(Fd.F1.Dc);C5.iC();C6.setStyle("COLLECTION");C6.setCollects("VF_ELCA_1",Fd.F7.Dc);C6.setKeyedBy(Fd.F1.Dc);C6.iC();C7.aD();C7.iC();C8.aD();C8.iC();C9.aD();C9.iC();C10.aD();C10.iC();C11.aD();C11.iC();C12.aD();C12.iC();C13.iC();C14.iC();C15.iC();this.aH("CREATEINSTANCE",this,e1);}});var cA=cO.aN.prototype;function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",70);
r.ln=70;{r.ln=72;m.UMULTIPLESELECT.set("SINGLE");r.ln=73;m.UUPPERCASE.set(false);r.ln=74;m.UMETHOD.set("SINGLE");r.ln=75;m.UADMINCHANGE.set(true);r.ln=76;m.UMAXLENGTH.set(1);r.ln=77;m.UMAXDECIMAL.set(0);r.ln=78;m.EXECMAXINSTANCE.set(1);r.ln=79;m.FIXEDMAXINSTANCE.set(1);}r.ln=81;r.e();};cO.mthZINT_GETCOUNT=function(){var m=this.REF,r=l.pR(this,cO,"zInt_GetCount",84);var P0=r.cPF("COUNT",Fd.F5.Dc);r.ln=84;{r.ln=87;if(l.and(l.s.eq(m.UMETHOD.get(),"FIXED"),l.s.ne(m.UTYPE.get(),"B"))){r.ln=88;P0.set(m.FIXEDMAXINSTANCE.get());
}else{r.ln=90;P0.set(m.EXECMAXINSTANCE.get());}}r.ln=93;return r.rV(P0.get());};cO.mthGET_UEXECNUMERICINSTANCE=function(p1){var m=this.REF,r=l.pR(this,cO,"Get_uExecNumericInstance",96);var P0=r.cPD("VALUE");var P1=r.cPF("INSTANCENUMBER",Fd.F1.Dc);P1.set(p1);r.ln=96;{r.ln=101;P0=r.sR("P0",m.EXECNUMERICINSTANCE.get(P1.get()));}r.ln=103;return r.rR(P0);};cO.mthGET_UEXECALPHAINSTANCE=function(p1){var m=this.REF,r=l.pR(this,cO,"Get_uExecAlphaInstance",106);var P0=r.cPD("VALUE");var P1=r.cPF("INSTANCENUMBER",Fd.F1.Dc);
P1.set(p1);r.ln=106;{r.ln=111;P0=r.sR("P0",m.EXECALPHAINSTANCE.get(P1.get()));}r.ln=112;return r.rR(P0);};cO.mthGET_UEXECBOOLEANINSTANCE=function(p1){var m=this.REF,r=l.pR(this,cO,"Get_uExecBooleanInstance",115);var P0=r.cPD("VALUE");var P1=r.cPF("INSTANCENUMBER",Fd.F1.Dc);P1.set(p1);r.ln=115;{r.ln=120;P0=r.sR("P0",m.EXECBOOLEANINSTANCE.get(P1.get()));}r.ln=121;return r.rR(P0);};cO.mthGET_UCAPTIONINSTANCE=function(p1){var m=this.REF,r=l.pR(this,cO,"Get_uCaptionInstance",124);var P0=r.cPD("VALUE");
var P1=r.cPF("INSTANCENUMBER",Fd.F1.Dc);P1.set(p1);r.ln=124;{r.ln=129;P0=r.sR("P0",m.CAPTIONINSTANCE.get(P1.get()));}r.ln=130;return r.rR(P0);};cO.mthSET_UCAPTIONINSTANCE=function(p0,p1){var m=this.REF,r=l.pR(this,cO,"Set_uCaptionInstance",133);var P0=r.cPD("VALUE");var P1=r.cPF("INSTANCENUMBER",Fd.F1.Dc);P0=r.sR("VALUE",p0);P1.set(p1);r.ln=133;{r.ln=138;P0=r.sR("P0",m.CAPTIONINSTANCE.get(P1.get()));}r.ln=139;r.e();};cO.mthGET_UNAME=function(){var m=this.REF,r=l.pR(this,cO,"Get_uname",143);var P0=r.cPF("PTY_UNAME",Fd.F8.Dc);
r.ln=143;{r.ln=146;P0.set(m.UNAME.get());}r.ln=148;return r.rV(P0.get());};cO.mthZINT_SETPROPERTY=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetProperty",152);var P0=r.cPD("P");P0=r.sR("P",p0);var C0=r.cD("C0");r.ln=152;{r.ln=158;if(l.n.le(P0.getPROPERTYNUMBER(),200)){r.ln=159;cA.mthZINT_SETPROPERTY.call(this,P0);r.e();return;}r.ln=163;{var v1=P0.getPROPERTYNUMBER();if(r.ln=165,l.n.eq(v1,201)){r.ln=166;m.EXECMAXINSTANCE.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=168,l.n.eq(v1,202)){r.ln=169;
m.EXECALPHAINSTANCE.set(P0.getINSTANCE(),l.cAs("PRIM_DC","UnicodeString"));r.ln=170;m.EXECALPHAINSTANCE.get(P0.getINSTANCE()).set(P0.getVALUE());r.ln=171;m.UTYPE.set("A");}else if(r.ln=173,l.n.eq(v1,203)){r.ln=174;m.EXECNUMERICINSTANCE.set(P0.getINSTANCE(),new Fd.F6.Dc());r.ln=175;m.EXECNUMERICINSTANCE.get(P0.getINSTANCE()).set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.getVALUE()));r.ln=176;m.UTYPE.set("N");}else if(r.ln=178,l.n.eq(v1,204)){r.ln=179;m.EXECBOOLEANINSTANCE.set(P0.getINSTANCE(),l.cAs("PRIM_BOLN"));
r.ln=180;m.EXECBOOLEANINSTANCE.get(P0.getINSTANCE()).set(P0.getVALUE());r.ln=181;m.UTYPE.set("B");}else if(r.ln=183,l.n.eq(v1,205)){r.ln=184;m.CAPTIONINSTANCE.set(P0.getINSTANCE(),new Fd.F7.Dc());r.ln=185;m.CAPTIONINSTANCE.get(P0.getINSTANCE()).set(P0.getVALUE());}else if(r.ln=187,l.n.eq(v1,206)){r.ln=188;m.UNAME.set(l.s.UpperCase(P0.getVALUE()));}else if(r.ln=190,l.n.eq(v1,207)){r.ln=191;m.UUPPERCASE.set(l.s.eq(P0.getVALUE(),"TRUE"));}else if(r.ln=193,l.n.eq(v1,208)){r.ln=194;m.UMAXDECIMAL.set(l.s.AsNumber(P0.getVALUE()));
}else if(r.ln=196,l.n.eq(v1,209)){r.ln=197;m.UMULTIPLESELECT.set(P0.getVALUE());}else if(r.ln=199,l.n.eq(v1,210)){r.ln=200;m.UMAXLENGTH.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=202,l.n.eq(v1,211)){r.ln=203;m.UMETHOD.set(P0.getVALUE());}else if(r.ln=205,l.n.eq(v1,212)){r.ln=206;m.UADMINCHANGE.set(l.s.eq(P0.getVALUE(),"TRUE"));}else if(r.ln=208,l.n.eq(v1,213)){r.ln=209;m.UNAMEINTERNAL.set(P0.getVALUE());}else if(r.ln=211,l.n.eq(v1,214)){r.ln=212;m.FIXEDMAXINSTANCE.set(l.s.AsNumber(P0.getVALUE()));
}r.ln=215;}}r.ln=217;r.e();};cO.getUEXECMAXINSTANCE=function(){return this.REF.EXECMAXINSTANCE.get();};cO.setUEXECMAXINSTANCE=function(v){this.REF.EXECMAXINSTANCE.set(v);};cO.getUFIXEDMAXINSTANCE=function(){return this.REF.EXECMAXINSTANCE.get();};cO.setUFIXEDMAXINSTANCE=function(v){this.REF.EXECMAXINSTANCE.set(v);};cO.getUEXECALPHAINSTANCE=function(KEY_1){return this.mthGET_UEXECALPHAINSTANCE(KEY_1);};cO.getUEXECNUMERICINSTANCE=function(KEY_1){return this.mthGET_UEXECNUMERICINSTANCE(KEY_1);};cO.getUEXECBOOLEANINSTANCE=function(KEY_1)
{return this.mthGET_UEXECBOOLEANINSTANCE(KEY_1);};cO.getUCAPTIONINSTANCE=function(KEY_1){return this.mthGET_UCAPTIONINSTANCE(KEY_1);};cO.setUCAPTIONINSTANCE=function(KEY_1,v){this.mthSET_UCAPTIONINSTANCE(v,KEY_1);};cO.getUNAME=function(){return this.mthGET_UNAME();};cO.getUNAMEINTERNAL=function(){return this.REF.UNAMEINTERNAL.get();};cO.getUTYPE=function(){return this.REF.UTYPE.get();};cO.getUMETHOD=function(){return this.REF.UMETHOD.get();};cO.getUMAXLENGTH=function(){return this.REF.UMAXLENGTH.get();
};cO.getUMAXDECIMAL=function(){return this.REF.UMAXDECIMAL.get();};cO.getUUPPERCASE=function(){return this.REF.UUPPERCASE.get();};cO.getUMULTIPLESELECT=function(){return this.REF.UMULTIPLESELECT.get();};cO.getUADMINCHANGE=function(){return this.REF.UADMINCHANGE.get();};cO.getZINT_COUNT=function(){return this.mthZINT_GETCOUNT();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELINDX"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELPTYN"});
}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELPTYT"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELOBJ"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"VF_ELNUMX"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"VF_ELCA_1"});}{Fd.F8.Dc=function()
{this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"VF_ELTXTS"});}},{rc:["VF_AC001O","VF_SY001O"],rp:["PRIM_FLD","PRIM_KCOL","PRIM_BOLN","PRIM_ALPH"],dc:["VF_AC001O"]});