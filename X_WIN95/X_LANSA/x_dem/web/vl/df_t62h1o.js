﻿LANSA.addComponent({id:"DF_T62H1O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Persistent application string",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"VF_ELURLU",ft:"N",ln:256,dc:0,lb:"URL (Unicode)",h1:"URL",h2:"(Unicode)",h3:"",de:"URL (Unicode)",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);
this.aF("DF_T62H1O",Fd);var C0=this.cR("ATTACHITEMABOUT","PRIM_ATLI");var C1=this.cR("ATTACHITEMAS1","PRIM_ATLI");var C2=this.cR("ATTACHITEMAS2","PRIM_ATLI");var C3=this.cR("ATTACHITEMAS3","PRIM_ATLI");var C4=this.cR("ATTACHITEMAS4","PRIM_ATLI");var C5=this.cR("ATTACHITEMAS5","PRIM_ATLI");var C6=this.cR("ATTACHITEMYS1","PRIM_ATLI");var C7=this.cR("ATTACHITEMYS2","PRIM_ATLI");var C8=this.cR("ATTACHITEMBUTTONPANEL","PRIM_ATLI");var C9=this.cR("ATTACHITEM1","PRIM_ATLI");var C10=this.cR("ATTACHLAYOUT1","PRIM_ATLM");
var C11=this.cR("ATTACHITEM2","PRIM_ATLI");var C12=this.cR("ABOUT","PRIM_LABL");var C13=this.cF("APPLICATIONSTRING1",Fd.F1.VISUAL);var C14=this.cF("APPLICATIONSTRING2",Fd.F1.VISUAL);var C15=this.cF("APPLICATIONSTRING3",Fd.F1.VISUAL);var C16=this.cF("APPLICATIONSTRING4",Fd.F1.VISUAL);var C17=this.cF("APPLICATIONSTRING5",Fd.F1.VISUAL);var C18=this.cF("MYADDITIONALSTRING1",Fd.F1.VISUAL);var C19=this.cF("MYADDITIONALSTRING2",Fd.F1.VISUAL);var C20=this.cR("BUTTON_PANEL","PRIM_PANL");var C21=this.cR("SET_BUTTON","PRIM_PHBN");
var C22=this.cR("GET_BUTTON","PRIM_PHBN");var C23=this.cR("ATTACHBUTTONPANEL","PRIM_ATLM");var C24=this.cR("ATTACHGETBUTTON","PRIM_ATLI");var C25=this.cR("ATTACHPUTBUTTON","PRIM_ATLI");var C26=this.cR("PANEL1","PRIM_PANL");C0.setManage(C12);C0.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C0.setAttachment("TOP");C0.setMarginBottom(4);C0.setMarginLeft(4);C0.setMarginTop(4);C0.setMarginRight(4);C0.iC();C1.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C1.setAttachment("TOP");C1.setMarginBottom(4);
C1.setMarginLeft(4);C1.setMarginTop(4);C1.setMarginRight(4);C1.setManage(C13);C1.iC();C2.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C2.setAttachment("TOP");C2.setMarginBottom(4);C2.setMarginLeft(4);C2.setMarginTop(4);C2.setMarginRight(4);C2.setManage(C14);C2.iC();C3.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C3.setAttachment("TOP");C3.setMarginBottom(4);C3.setMarginLeft(4);C3.setMarginTop(4);C3.setMarginRight(4);C3.setManage(C15);C3.iC();C4.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C4.setAttachment("TOP");
C4.setMarginBottom(4);C4.setMarginLeft(4);C4.setMarginTop(4);C4.setMarginRight(4);C4.setManage(C16);C4.iC();C5.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C5.setAttachment("TOP");C5.setMarginBottom(4);C5.setMarginLeft(4);C5.setMarginTop(4);C5.setMarginRight(4);C5.setManage(C17);C5.iC();C6.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C6.setAttachment("TOP");C6.setMarginBottom(4);C6.setMarginLeft(4);C6.setMarginTop(4);C6.setMarginRight(4);C6.setManage(C18);C6.iC();C7.setParent(this.REF.MAINPANELATTACHMENTMANAGER);
C7.setAttachment("TOP");C7.setMarginBottom(4);C7.setMarginLeft(4);C7.setMarginTop(4);C7.setMarginRight(4);C7.setManage(C19);C7.iC();C8.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C8.setAttachment("BOTTOM");C8.setMarginBottom(4);C8.setMarginLeft(4);C8.setMarginTop(4);C8.setMarginRight(4);C8.setManage(C20);C8.iC();C9.setManage(C26);C9.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C9.setAttachment("TOP");C9.iC();C10.iC();C11.setManage(C12);C11.setParent(C10);C11.setAttachment("TOP");C11.setSizing("CONTENTHEIGHT");
C11.setMarginBottom(5);C11.setMarginLeft(5);C11.setMarginRight(5);C11.setMarginTop(5);C11.iC();C12.setParent(C26);C12.setDisplayPosition(1);C12.setTabPosition(1);C12.setTabStop(false);C12.setLeft(5);C12.setTop(5);C12.setWidth(711);C12.setHeight(10);C12.iC();C13.setDisplayPosition(2);C13.setHeight(19);C13.setParent(this);C13.setTabPosition(1);C13.setWidth(713);C13.setLeft(4);C13.setTop(221);C13.setCaption("Persistent Application String 1");C13.setLabelType("CAPTION");C13.setMarginLeft(200);C13.aD();
C13.iC();C14.setDisplayPosition(3);C14.setHeight(19);C14.setParent(this);C14.setTabPosition(2);C14.setWidth(713);C14.setLeft(4);C14.setTop(248);C14.setCaption("Persistent Application String 2");C14.setLabelType("CAPTION");C14.setMarginLeft(200);C14.aD();C14.iC();C15.setDisplayPosition(4);C15.setHeight(19);C15.setParent(this);C15.setTabPosition(3);C15.setWidth(713);C15.setLeft(4);C15.setTop(275);C15.setCaption("Persistent Application String 3");C15.setLabelType("CAPTION");C15.setMarginLeft(200);C15.aD();
C15.iC();C16.setDisplayPosition(5);C16.setHeight(19);C16.setParent(this);C16.setTabPosition(4);C16.setWidth(713);C16.setLeft(4);C16.setTop(302);C16.setCaption("Persistent Application String 4");C16.setLabelType("CAPTION");C16.setMarginLeft(200);C16.aD();C16.iC();C17.setDisplayPosition(6);C17.setHeight(19);C17.setParent(this);C17.setTabPosition(5);C17.setWidth(713);C17.setLeft(4);C17.setTop(329);C17.setCaption("Persistent Application String 5");C17.setLabelType("CAPTION");C17.setMarginLeft(200);C17.aD();
C17.iC();C18.setDisplayPosition(7);C18.setHeight(19);C18.setParent(this);C18.setTabPosition(6);C18.setWidth(713);C18.setLeft(4);C18.setTop(356);C18.setCaption("Your Additional String 1");C18.setLabelType("CAPTION");C18.setMarginLeft(200);C18.aD();C18.iC();C19.setDisplayPosition(8);C19.setHeight(19);C19.setParent(this);C19.setTabPosition(7);C19.setWidth(713);C19.setLeft(4);C19.setTop(383);C19.setCaption("Your Additional String 2");C19.setLabelType("CAPTION");C19.setMarginLeft(200);C19.aD();C19.iC();
C20.setParent(this);C20.setHeight(30);C20.setDisplayPosition(9);C20.setTabPosition(8);C20.setLeft(4);C20.setTop(410);C20.setWidth(713);C20.setLayoutManager(C23);C20.iC();C21.setParent(C20);C21.setCaption("Save Strings");C21.setDisplayPosition(2);C21.setTabPosition(2);C21.setLeft(616);C21.setTop(4);C21.setWidth(93);C21.setHeight(22);C21.iC();C22.setParent(C20);C22.setCaption("Get Strings");C22.setDisplayPosition(1);C22.setTabPosition(1);C22.setTop(4);C22.setLeft(512);C22.setWidth(96);C22.setHeight(22);
C22.iC();C23.iC();C24.setManage(C22);C24.setParent(C23);C24.setAttachment("RIGHT");C24.setMarginLeft(4);C24.setMarginTop(4);C24.setMarginRight(4);C24.setMarginBottom(4);C24.iC();C25.setManage(C21);C25.setParent(C23);C25.setAttachment("RIGHT");C25.setMarginLeft(4);C25.setMarginTop(4);C25.setMarginRight(4);C25.setMarginBottom(4);C25.iC();C26.setDisplayPosition(1);C26.setLeft(0);C26.setParent(this);C26.setTabPosition(9);C26.setTabStop(false);C26.setTop(0);C26.setWidth(721);C26.setHeight(217);C26.setVerticalScroll(true);
C26.setLayoutManager(C10);C26.iC();C21.aH("CLICK",this,e2);C22.aH("CLICK",this,e1);this.setHeight(441);this.setWidth(721);this.setVerticalScroll(true);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",75);var C0=r.cR("DOUBLECR","PRIM_ALPH");C0.iC();r.ln=75;{r.ln=79;C0.set(l.cat(l.n.AsUnicodeString(10),l.n.AsUnicodeString(10)));r.ln=82;cA.mthUINITIALIZE.call(this);r.ln=86;m.ABOUT.set("This is example VL reusable part DF_T62H1O.");r.ln=88;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"DF_T62H1O demonstrates how up to 5 application strings can be set at logon time, and then made accessible to other server modules running in the same session. For example, the logon validator might put the logged on user name into #Persistent_ApplicationString1. This makes that value accessible to all other server modules running within that session.  Similarly, server modules can alter the values as a means of passing basic information amongst themselves.")));
r.ln=90;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"In the shipped demonstration system, the logon validator used is UF_OLOGON. UF_OLOGON initializes the 5 persistent applications strings to say ‘Example string 1’ through ‘Example string 5’. So the first time you run this example that is typically what you should see when you first retrieve them. If you alter the values and save them then you should be able to see your changes if you rerun this command handler sometime later in this session.")));
r.ln=92;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"You can of course persist and share other things between your server modules. In this example two additional strings are also persisted to demonstrate doing this. Beware of persisting too many things on the server. It may be simpler to persist things in the client and then pass them to your server modules as parameters. See the advanced Custom Manager examples for more information about how you can persist and share values in the client.")));
r.ln=94;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"Refer to the code and comments in this command handler DF_T62H1O, and in the server module DF_T62SMO that it invokes.")));}r.ln=97;r.e();};cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",102);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=r.sR("SWITCHCALLERREFERENCE",p1);r.ln=102;{r.ln=104;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.cat("Use the ",m.GET_BUTTON.getCaption())," button to retrieve the values stored in the server session."),u,u,this,true,u,true);
r.ln=106;P0.set(true);p0.set(P0.get());}r.ln=108;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Get_Button.Click",113);var C0=r.cDR("GETCURRENTVALUES","DF_T62SMO","GETCURRENTVALUES");C0.iC();r.ln=113;{r.ln=117;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u,u);r.ln=119;C0.mthEXECUTE({},{FLD:{"APPLICATIONSTRING1":m.APPLICATIONSTRING1,"APPLICATIONSTRING2":m.APPLICATIONSTRING2,"APPLICATIONSTRING3":m.APPLICATIONSTRING3,"APPLICATIONSTRING4":m.APPLICATIONSTRING4,"APPLICATIONSTRING5":m.APPLICATIONSTRING5,"MYSTRING1":m.MYADDITIONALSTRING1,"MYSTRING2":m.MYADDITIONALSTRING2}});
r.ln=121;this.REF.AVFRAMEWORKMANAGER.mthAVRECEIVESYSTEMMESSAGEQUEUE(this,u);}r.ln=123;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Set_Button.Click",128);var C0=r.cDR("SETCURRENTVALUES","DF_T62SMO","SETCURRENTVALUES");C0.iC();r.ln=128;{r.ln=132;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u,u);r.ln=134;C0.mthEXECUTE({FLD:{"APPLICATIONSTRING1":m.APPLICATIONSTRING1.get(),"APPLICATIONSTRING2":m.APPLICATIONSTRING2.get(),"APPLICATIONSTRING3":m.APPLICATIONSTRING3.get(),"APPLICATIONSTRING4":m.APPLICATIONSTRING4.get(),"APPLICATIONSTRING5":m.APPLICATIONSTRING5.get(),"MYSTRING1":m.MYADDITIONALSTRING1.get(),"MYSTRING2":m.MYADDITIONALSTRING2.get()}},{});
r.ln=136;this.REF.AVFRAMEWORKMANAGER.mthAVRECEIVESYSTEMMESSAGEQUEUE(this,u);}r.ln=138;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELURLU"});Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.VISUAL,an:"PRIM_EVEF",fn:"VF_ELURLU",cn:"Visual"});}cO.setrefAVFRAMEWORKMANAGER=function(rn){cA.setrefAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O"],rp:["PRIM_ATLI","PRIM_ATLM","PRIM_LABL","PRIM_FLD","PRIM_EVEF","PRIM_PANL","PRIM_PHBN","PRIM_WEB.DataRequest"],
dp:["PRIM_ALPH"]});