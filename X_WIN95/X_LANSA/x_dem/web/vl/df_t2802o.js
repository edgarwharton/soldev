﻿LANSA.addComponent({id:"DF_T2802O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=SubType Example Handler",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_TEXTL",ft:"A",ln:75,dc:0,lb:{"ENG":"Text","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Text","FRA":"?","JPN":"?"}[cL],h2:"",h3:"",de:{"ENG":"Standard TEXT, LONG","FRA":"?","JPN":"?"}[cL],dv:"",ia:["LC"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"Text must be specified","FRA":"? must be specified","JPN":"? must be specified"}[cL]
}]},F2:{ic:0,nm:"STD_OBJ",ft:"A",ln:10,dc:0,lb:{"ENG":"Object Name","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Object","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Name","FRA":"?","JPN":"?"}[cL],h3:"",de:{"ENG":"Standard OBJECT NAME (S/38 or AS/400)","FRA":"?","JPN":"?"}[cL],dv:"",ia:["VN"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl2,mt:{"ENG":"Object Name must be specified","FRA":"? must be specified","JPN":"? must be specified"}[cL]}]},F3:{ic:0,nm:"STD_TEXTS",ft:"A",ln:30,dc:0,lb:{"ENG":"Text","FRA":"?","JPN":"?"}[cL],
h1:{"ENG":"Text","FRA":"?","JPN":"?"}[cL],h2:"",h3:"",de:{"ENG":"Standard TEXT, SHORT","FRA":"?","JPN":"?"}[cL],dv:"",ia:["LC"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl3,mt:{"ENG":"Text must be specified","FRA":"? must be specified","JPN":"? must be specified"}[cL]}]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},AddPrefixBullet:{ps:{"To":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("DF_T2802O",Fd);var C0=this.cR("ATTACHITEM1","PRIM_ATLI");
var C1=this.cR("LAYOUTITEM1","PRIM_ATLI");var C2=this.cR("LAYOUTITEM2","PRIM_ATLI");var C3=this.cR("ATTACHITEM2","PRIM_ATLI");var C4=this.cR("ATTACHITEM3","PRIM_ATLI");var C5=this.cR("ATTACHITEM4","PRIM_ATLI");var C6=this.cR("ATTACHITEM5","PRIM_ATLI");var C7=this.cR("ATTACHITEM6","PRIM_ATLI");var C8=this.cR("THISDEMOOBJECT","PRIM_LABL");var C9=this.cR("THISDEMOOBJECTSTYLE","PRIM_VS","Style");var C10=this.cF("STD_TEXTL",Fd.F1.VISUAL);var C11=this.cF("STD_OBJ",Fd.F2.VISUAL);var C12=this.cF("STD_TEXTS",Fd.F3.VISUAL);
var C13=this.cR("LABL_1","PRIM_LABL");var C14=this.cR("LABL_2","PRIM_LABL");var C15=this.cR("LABL_3","PRIM_LABL");var C16=this.cR("LABL_4","PRIM_LABL");var C17=this.cR("STYLEBLUE","PRIM_VS","Style");C0.setManage(C13);C0.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C0.setAttachment("TOP");C0.iC();C1.setAttachment("TOP");C1.setManage(C8);C1.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C1.setSizing("CONTENTWIDTH");C1.iC();C2.setAttachment("TOP");C2.setManage(C14);C2.setParent(this.REF.MAINPANELATTACHMENTMANAGER);
C2.iC();C3.setManage(C15);C3.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C3.setAttachment("TOP");C3.iC();C4.setManage(C16);C4.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C4.setAttachment("TOP");C4.iC();C5.setManage(C11);C5.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C5.setAttachment("TOP");C5.iC();C6.setManage(C10);C6.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C6.setAttachment("TOP");C6.iC();C7.setManage(C12);C7.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C7.setAttachment("TOP");C7.iC();
C8.setParent(this);C8.setDisplayPosition(1);C8.setTabPosition(3);C8.setTabStop(false);C8.setWidth(567);C8.setCaption("DF_T2802O - Title");C8.setStyle(C9);C8.setTop(0);C8.setLeft(5);C8.setVerticalAlignment("CENTER");C8.setAlignment("CENTER");C8.iC();C9.setTextColor("BLUE");C9.setFontSize(19);C9.setFontUnits("PIXEL");C9.iC();C10.setCaption("Account Holder");C10.setDisplayPosition(6);C10.setHeight(19);C10.setLabelType("CAPTION");C10.setParent(this);C10.setReadOnly(true);C10.setTabPosition(1);C10.setUsePicklist(false);
C10.setWidth(567);C10.setStyle(C17);C10.setMarginLeft(170);C10.setTop(240);C10.setLeft(5);C10.aD();C10.iC();C11.setCaption("Account Number");C11.setDisplayPosition(7);C11.setHeight(19);C11.setLabelType("CAPTION");C11.setParent(this);C11.setReadOnly(true);C11.setTabPosition(2);C11.setUsePicklist(false);C11.setWidth(567);C11.setStyle(C17);C11.setMarginLeft(170);C11.setTop(259);C11.setLeft(5);C11.aD();C11.iC();C12.setCaption("Business Object SubType");C12.setDisplayPosition(8);C12.setHeight(19);C12.setLabelType("CAPTION");
C12.setParent(this);C12.setReadOnly(true);C12.setTabPosition(4);C12.setTop(278);C12.setUsePicklist(false);C12.setWidth(567);C12.setStyle(C17);C12.setMarginLeft(170);C12.setLeft(5);C12.aD();C12.iC();C13.setCaption("This example uses an ACCOUNT business object. An ACCOUNT has 3 SubTypes identified as SAV (Savings), CHK (Check) and INV (Investment) :");C13.setDisplayPosition(2);C13.setLeft(5);C13.setParent(this);C13.setTabPosition(8);C13.setTabStop(false);C13.setWidth(567);C13.setTop(50);C13.iC();C14.setCaption("SAV (Saving) subtype instances should only enable tabs Details, Charges and History.");
C14.setDisplayPosition(5);C14.setLeft(5);C14.setParent(this);C14.setTabPosition(7);C14.setTabStop(false);C14.setTop(200);C14.setWidth(567);C14.setHeight(40);C14.iC();C15.setCaption("CHK (Check) subtype instances should only enable tabs Details, Approve, Dates, History, Transactions, References and Statistics.");C15.setDisplayPosition(4);C15.setLeft(5);C15.setParent(this);C15.setTabPosition(6);C15.setTabStop(false);C15.setTop(150);C15.setWidth(567);C15.iC();C16.setCaption("INV (Investment) subtype instances should only enable tabs Details, History, Schedule and Transactions.");
C16.setDisplayPosition(3);C16.setLeft(5);C16.setParent(this);C16.setTabPosition(5);C16.setTabStop(false);C16.setTop(100);C16.setWidth(567);C16.iC();C17.setTextColor("BLUE");C17.iC();this.REF.MAINPANELATTACHMENTMANAGER.setMarginLeft(5);this.REF.MAINPANELATTACHMENTMANAGER.setMarginRight(5);this.setHeight(313);this.setWidth(577);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",46);r.ln=46;{r.ln=48;m.LABL_2.setCaption(cO.mthADDPREFIXBULLET.call(this,m.LABL_2.getCaption()));
r.ln=49;m.LABL_3.setCaption(cO.mthADDPREFIXBULLET.call(this,m.LABL_3.getCaption()));r.ln=50;m.LABL_4.setCaption(cO.mthADDPREFIXBULLET.call(this,m.LABL_4.getCaption()));}r.ln=53;r.e();};cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",56);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=r.sR("SWITCHCALLERREFERENCE",p1);var C0=r.cD("C0");r.ln=56;{r.ln=60;cA.mthUEXECUTE.call(this,P0,P1);r.ln=62;C0=r.sR("C0",this.getAVASSOCIATEDINSTANCE());
r.ln=64;m.THISDEMOOBJECT.setCaption(l.add("DF_T2802O - ",this.getAVCOMMANDCAPTION()));r.ln=66;if((C0==null)){r.ln=68;m.THISDEMOOBJECT.setCaption(l.add(m.THISDEMOOBJECT.getCaption(),l.cat(l.cat(l.add(" - ",C0.getAVVISUALID2().get())," - "),C0.getAVAKEY1().get())));r.ln=71;m.STD_OBJ.set("Not Available");r.ln=72;m.STD_TEXTL.set("Not Available");r.ln=73;m.STD_TEXTS.set("Not Available");}else{r.ln=77;m.STD_OBJ.set(C0.getAVAKEY1().get());r.ln=78;m.STD_TEXTL.set(l.s.AsNativeString(C0.getAVVISUALID2().get()));
r.ln=79;m.STD_TEXTS.set(C0.getAVSUBTYPE().get());}p0.set(P0.get());}r.ln=83;r.e();};cO.mthADDPREFIXBULLET=function(p0){var r=l.mR(this,cO,"AddPrefixBullet",86);var P0=r.cP("TO","PRIM_DC","UnicodeString");var P1=r.cP("RESULT","PRIM_DC","UnicodeString");P0.set(p0);r.ln=86;{r.ln=89;P1.set(l.add(l.cat(l.n.AsUnicodeString(8226)," "),P0.get()));}r.ln=90;return r.rV(P1.get());};function rl1(F1){var v=F1.get();return(l.s.eq(v,""));};function rl2(F2){var v=F2.get();return(l.s.eq(v,""));};function rl3(F3){
var v=F3.get();return(l.s.eq(v,""));};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_TEXTL"});Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.VISUAL,an:"PRIM_EVEF",fn:"STD_TEXTL",cn:"Visual"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_OBJ"});Fd.F2.VISUAL=function(){this.aN.call(this,new Fd.F2.Dc());};l.cFC({co:Fd.F2.VISUAL,an:"PRIM_EVEF",fn:"STD_OBJ",cn:"Visual"});}{Fd.F3.Dc=function()
{this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"STD_TEXTS"});Fd.F3.VISUAL=function(){this.aN.call(this,new Fd.F3.Dc());};l.cFC({co:Fd.F3.VISUAL,an:"PRIM_EVEF",fn:"STD_TEXTS",cn:"Visual"});}},{rc:["VF_AC010O"],rp:["PRIM_ATLI","PRIM_LABL","PRIM_VS.Style","PRIM_FLD","PRIM_EVEF"],dc:["VF_LM003O"]});