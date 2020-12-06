﻿LANSA.addComponent({id:"DF_T44H1O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Display an Image from a file",tl:15000000},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC010O",mt:{uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("BORDERBLUE","PRIM_VS","Style");var C1=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C2=this.cR("ATTACHITEM1","PRIM_ATLI");var C3=this.cR("IMAGE1","PRIM_IMAG");var C4=this.cR("IMAGE2","PRIM_IMAG");var C5=this.cR("IMAGE3","PRIM_IMAG");
var C6=this.cR("LABEL1","PRIM_LABL");var C7=this.cR("LABEL2","PRIM_LABL");var C8=this.cR("LABEL3","PRIM_LABL");var C9=this.cR("LABEL4","PRIM_LABL");var C10=this.cR("LABEL5","PRIM_LABL");var C11=this.cR("POPUP1","PRIM_PPNL");var C12=this.cR("BUTTON_SHOWLARGE","PRIM_PHBN");var C13=this.cR("IMAGE4","PRIM_IMAG");C0.setBorderColor("BLUE");C0.setBorderBottom(2);C0.setBorderLeft(2);C0.setBorderRight(2);C0.setBorderTop(2);C0.iC();C1.iC();C2.setManage(C13);C2.setParent(C1);C2.setAttachment("CENTER");C2.iC();
C3.setDisplayPosition(1);C3.setLeft(216);C3.setParent(this);C3.setTabPosition(1);C3.setTabStop(false);C3.setTop(80);C3.setWidth(65);C3.setHeight(41);C3.setStyle(C0);C3.iC();C4.setDisplayPosition(2);C4.setHeight(73);C4.setLeft(216);C4.setParent(this);C4.setTabPosition(2);C4.setTabStop(false);C4.setTop(128);C4.setWidth(73);C4.setImageSizing("CROPPED");C4.setStyle(C0);C4.iC();C5.setDisplayPosition(5);C5.setLeft(216);C5.setParent(this);C5.setTabPosition(5);C5.setTabStop(false);C5.setTop(208);C5.setWidth(73);
C5.setHeight(85);C5.setImageSizing("BESTFIT");C5.setStyle(C0);C5.iC();C6.setCaption("Shrink to Fit image");C6.setDisplayPosition(3);C6.setEllipses("WORD");C6.setHeight(25);C6.setLeft(42);C6.setParent(this);C6.setTabPosition(3);C6.setTabStop(false);C6.setTop(88);C6.setVerticalAlignment("CENTER");C6.setWidth(120);C6.iC();C7.setCaption("Cropped Image");C7.setDisplayPosition(4);C7.setEllipses("WORD");C7.setHeight(25);C7.setLeft(42);C7.setParent(this);C7.setTabPosition(4);C7.setTabStop(false);C7.setTop(142);
C7.setVerticalAlignment("CENTER");C7.setWidth(120);C7.iC();C8.setCaption("Best Fit");C8.setDisplayPosition(6);C8.setEllipses("WORD");C8.setHeight(25);C8.setLeft(42);C8.setParent(this);C8.setTabPosition(6);C8.setTabStop(false);C8.setTop(238);C8.setVerticalAlignment("CENTER");C8.setWidth(120);C8.iC();C9.setCaption("See component DF_T44H1O for more details");C9.setDisplayPosition(7);C9.setEllipses("WORD");C9.setHeight(25);C9.setLeft(42);C9.setParent(this);C9.setTabPosition(7);C9.setTabStop(false);C9.setTop(11);
C9.setVerticalAlignment("CENTER");C9.setWidth(375);C9.iC();C10.setCaption("Shows how to load and display an image from a file");C10.setDisplayPosition(8);C10.setEllipses("WORD");C10.setHeight(33);C10.setLeft(43);C10.setParent(this);C10.setTabPosition(8);C10.setTabStop(false);C10.setTop(40);C10.setVerticalAlignment("CENTER");C10.setWidth(366);C10.iC();C11.setCloseButton(true);C11.setCloseOnClick(true);C11.setLeft(-16);C11.setParent(this);C11.setTop(8);C11.setHeight(273);C11.setLayoutManager(C1);C11.setWidth(361);
C11.iC();C12.setCaption("Show Large Image");C12.setDisplayPosition(10);C12.setLeft(16);C12.setParent(this);C12.setTabPosition(10);C12.setTop(296);C12.setWidth(201);C12.iC();C13.setDisplayPosition(1);C13.setLeft(0);C13.setParent(C11);C13.setTabPosition(1);C13.setTabStop(false);C13.setTop(0);C13.setHeight(271);C13.setWidth(359);C13.setImageSizing("BESTFIT");C13.iC();C12.aH("CLICK",this,e1);this.setWidth(441);this.setHeight(337);this.setLayoutManager(null);}});var cA=cO.aN.prototype;cO.mthUEXECUTE=function(p0,p1)
{var m=this.REF,r=l.mR(this,cO,"uExecute",64);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=r.sR("SWITCHCALLERREFERENCE",p1);var C0=r.cR("RET_CODE","PRIM_BOLN");C0.iC();r.ln=64;{r.ln=68;cA.mthUEXECUTE.call(this,P0,P1);r.ln=83;m.IMAGE1.setImage(this.REF.AVFRAMEWORKMANAGER.mthAVGETIMAGEREFERENCE("UF_IM001.PNG"));r.ln=86;m.IMAGE2.setImage(this.REF.AVFRAMEWORKMANAGER.mthAVGETIMAGEREFERENCE("UF_IM001.PNG"));r.ln=89;m.IMAGE3.setImage(this.REF.AVFRAMEWORKMANAGER.mthAVGETIMAGEREFERENCE("UF_IM001.PNG"));
p0.set(P0.get());}r.ln=91;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button_ShowLarge.Click",94);r.ln=94;{r.ln=95;m.IMAGE4.setImage(this.REF.AVFRAMEWORKMANAGER.mthAVGETIMAGEREFERENCE("UF_IM001.PNG"));r.ln=96;m.POPUP1.mthSHOWPOPUP(u,u,"CENTER",u,u);}r.ln=97;r.e();};cO.setrefAVFRAMEWORKMANAGER=function(rn){cA.setrefAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O"],rp:["PRIM_VS.Style","PRIM_ATLM","PRIM_ATLI","PRIM_IMAG","PRIM_LABL","PRIM_PPNL","PRIM_PHBN"],dp:["PRIM_BOLN"]});