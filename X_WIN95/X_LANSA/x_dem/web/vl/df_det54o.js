﻿LANSA.addComponent({id:"DF_DET54O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Switch and Signal 2 - Example 1",tl:15000000},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC010O",mt:{uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("THISDEMOOBJECT","PRIM_LABL");var C1=this.cR("THISDEMOOBJECTSTYLE","PRIM_VS","Style");var C2=this.cR("LABEL1","PRIM_LABL");var C3=this.cR("SIMPLEENTRYFIELD","PRIM_EDIT");var C4=this.cR("STARTSIGNAL1","PRIM_PHBN");
C0.setParent(this);C0.setDisplayPosition(3);C0.setTabPosition(3);C0.setTabStop(false);C0.setHeight(23);C0.setWidth(381);C0.setCaption("DF_DET54O - Switch and Signal 2");C0.setStyle(C1);C0.setTop(4);C0.setLeft(4);C0.iC();C1.setTextColor("BLUE");C1.setFontSize(19);C1.setFontUnits("PIXEL");C1.iC();C2.setCaption("Make sure that DF_DET51O - Switch and Signal 1 is visible and type something into this field:");C2.setDisplayPosition(1);C2.setEllipses("WORD");C2.setHeight(57);C2.setLeft(24);C2.setParent(this);
C2.setTabPosition(1);C2.setTabStop(false);C2.setTop(40);C2.setVerticalAlignment("CENTER");C2.setWidth(329);C2.iC();C3.setDisplayPosition(2);C3.setLeft(24);C3.setParent(this);C3.setShowSelection(false);C3.setShowSelectionHilight(false);C3.setTabPosition(2);C3.setTop(98);C3.setWidth(334);C3.iC();C4.setCaption("Click to Start DF_DET51O - Switch and Signal 1");C4.setDisplayPosition(4);C4.setLeft(24);C4.setParent(this);C4.setTabPosition(4);C4.setTop(152);C4.setWidth(337);C4.iC();C3.aH("CHANGED",this,e1);
C4.aH("CLICK",this,e3);this.setHeight(425);this.setWidth(393);this.setLayoutManager(null);this.aH("AVEVENT",this,e2);}});var cA=cO.aN.prototype;cO.mthUEXECUTE=function(p0,p1){var r=l.mR(this,cO,"uExecute",31);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=r.sR("SWITCHCALLERREFERENCE",p1);r.ln=31;{p0.set(P0.get());}r.ln=33;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SimpleEntryField.Changed",36);r.ln=36;{r.ln=39;this.mthAVSIGNALEVENT("SIMPLEENTRYFIELD.CHANGED",u,"APPLICATION",u,m.SIMPLEENTRYFIELD.getValue(),u,u,u,u,u,u,u,u,u,u,u);
}r.ln=41;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.avEvent",44);var P0=Ps.r("WITHID");var P1=Ps.r("WITHAINFO1");r.ln=44;{r.ln=46;{var v1=P0.get();if(r.ln=48,l.s.eq(v1,"SIMPLEENTRYFIELD.CHANGED")){r.ln=49;m.SIMPLEENTRYFIELD.setValue(P1.get());}r.ln=52;}}r.ln=54;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#StartSignal1.Click",57);r.ln=57;{r.ln=59;this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH("EXAMPLE_SWITCH_SIGNAL_1",u,"COMMAND_EXAMPLE_1",u,this,u,u,u);}r.ln=61;r.e();
};cO.setrefAVFRAMEWORKMANAGER=function(rn){cA.setrefAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O"],rp:["PRIM_LABL","PRIM_VS.Style","PRIM_EDIT","PRIM_PHBN"]});