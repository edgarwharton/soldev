﻿LANSA.addComponent({id:"VF_UI037O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Drop Down of monitor descriptions",tl:15000000},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]},F2:{nm:"VF_ELMOND",ft:"A",ln:132,dc:0,ks:"O",lb:"Standard Long T",h1:"Standard",h2:"Long",h3:"Text",de:{"ENG":"Monitor description","FRA":"Standard Long Text","JPN":"Standard Long Text"}[cL],dv:"",ia:["FE","LC"]},F3:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Code retour E/S","JPN":"I/O戻りコード"}[cL],h1:{"ENG":"I/O","FRA":"Code","JPN":" I/O"}[cL],h2:{"ENG":"Status","FRA":"retour E/S","JPN":"コード"}[cL],h3:"",de:{"ENG":"Data base I/O operation status code","FRA":"Code retour opérations E/S B. de données","JPN":" DB入出力戻りコード"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{DropDown:{da:"r"}},mt:{zInt_Initialize:{ps:{"MonitorInstance":{pt:"o"}}},zInt_Terminate:{},zInt_SelectMonitorbyItemNumber:{ps:{"ItemNumber":{pt:"i"},"VisiblySelect":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("VF_UI037O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("UFRAMEWORK","VF_FP001O");var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C3=this.cR("ATTACHITEM1","PRIM_ATLI");var C4=this.cR("DROPDOWN","PRIM_LIST","DropDown");
var C5=this.cR("MONITORDESCRIPTION","PRIM_LIST","String");var C6=this.cR("NOBORDERS","PRIM_VS","Style");var C7=this.cR("LIGHTBORDER","PRIM_VS","Style");var C8=this.cR("UI_IS_DEAF","PRIM_BOLN");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setManage(C4);C3.setParent(C2);C3.setAttachment("CENTER");C3.iC();C4.setDisplayPosition(1);C4.setHeight(22);C4.setLeft(0);C4.setParent(this);C4.setShowSelection(false);C4.setTabPosition(1);C4.setTop(0);C4.setWidth(305);
C4.setColumnLines(false);C4.setRowLines(false);C4.setColumnHeaderHeight(0);C4.iC();C5.setDisplayPosition(1);C5.setParent(C4);C5.setSource(f.F2);C5.setColumnUnits("PROPORTION");C5.iC();C6.setBorderBottom(0);C6.setBorderLeft(0);C6.setBorderRight(0);C6.setBorderTop(0);C6.setNormBackColor("TRANSPARENT");C6.iC();C7.iC();C8.iC();C4.aH("CHANGED",this,e2);this.setDisplayPosition(1);this.setHeight(22);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(305);this.setLayoutManager(C2);this.aH("CLICK",this,e1);
}});cO.mthZINT_INITIALIZE=function(p0){var f=this.FLD.VF_UI037O,m=this.REF,r=l.mR(this,cO,"zInt_Initialize",27);var P0=r.cPF("MONITORINSTANCE",Fd.F1.Dc);r.ln=27;{r.ln=31;m.USYSTEM.ref.getCURRENTTHEME().mthAVSTYLEPRIM_LISTFORFORMFACTOR(m.DROPDOWN,this);r.ln=33;m.UI_IS_DEAF.set(true);r.ln=35;m.DROPDOWN.clearList();r.ln=37;P0.set(0);r.ln=39;if(m.USYSTEM.ref.getDEVELOPERMODE()){r.ln=41;for(var i1=1,s1=1,t1=l.tI(m.UFRAMEWORK.ref.getUMONITORDESCRIPTIONS().getItemCount());(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1)
{r.ln=43;P0.set(l.add(P0.get(),1));r.ln=44;f.F2.set(m.UFRAMEWORK.ref.getUMONITORDESCRIPTIONS().get(P0.get()).get());r.ln=45;m.DROPDOWN.addEntry();}r.ln=49;if(l.n.gt(P0.get(),0)){r.ln=51;f.F2.set(m.USYSTEM.ref.getUMTXTVALUES("NORMAL"));r.ln=52;m.DROPDOWN.addEntry();r.ln=54;m.DROPDOWN.getCurrentItem().setSelected(true);m.DROPDOWN.getCurrentItem().setFocus(true);r.ln=55;m.LIGHTBORDER.setBorderBrush(m.USYSTEM.ref.getCURRENTTHEME().getLIGHTBORDERBRUSH());r.ln=56;m.DROPDOWN.getStyles().mthADD(m.LIGHTBORDER);
}r.ln=60;if(l.n.gt(m.USYSTEM.ref.getEMULATESIZEPROFILE(),0)){r.ln=61;this.mthZINT_SELECTMONITORBYITEMNUMBER(m.USYSTEM.ref.getEMULATESIZEPROFILE(),true);}}r.ln=67;m.UI_IS_DEAF.set(false);p0.set(P0.get());}r.ln=69;r.e();};cO.mthZINT_TERMINATE=function(){var r=l.mR(this,cO,"zInt_Terminate",72);r.ln=72;{}r.ln=74;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.Click",77);var P0=Ps.r("HANDLED");r.ln=77;{r.ln=81;P0.set(true);}r.ln=83;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DropDown.Changed",86);
r.ln=86;{r.ln=88;if(l.b.Not(m.UI_IS_DEAF.get())){r.ln=92;this.mthZINT_SELECTMONITORBYITEMNUMBER(m.DROPDOWN.getCurrentItem().getEntry(),false);}}r.ln=96;r.e();};cO.mthZINT_SELECTMONITORBYITEMNUMBER=function(p0,p1){var f=this.FLD.VF_UI037O,m=this.REF,r=l.mR(this,cO,"zInt_SelectMonitorbyItemNumber",101);var P0=r.cPF("ITEMNUMBER",Fd.F1.Dc);var P1=r.cP("VISIBLYSELECT","PRIM_BOLN");P0.set(p0);P1.set(p1);r.ln=101;{r.ln=105;if((l.n.gt(P0.get(),0)&&l.n.le(P0.get(),m.UFRAMEWORK.ref.getUMONITORDESCRIPTIONS().getItemCount())))
{r.ln=107;m.USYSTEM.ref.getMAINVLFPANEL().mthZINT_EMULATESIZE(m.UFRAMEWORK.ref.getUMONITORHEIGHTS().get(P0.get()).get(),m.UFRAMEWORK.ref.getUMONITORWIDTHS().get(P0.get()).get());r.ln=109;if(l.tB(P1.get())){r.ln=111;f.F3.set(lIO=m.DROPDOWN.getEntry(P0.get()));r.ln=113;if(lIO=="OK"){r.ln=115;m.DROPDOWN.getCurrentItem().setSelected(true);m.DROPDOWN.getCurrentItem().setFocus(true);}}}else{r.ln=123;m.USYSTEM.ref.getMAINVLFPANEL().mthZINT_EMULATESIZE(0,0);}}r.ln=127;r.e();};cO.getDROPDOWN=function(){return this.REF.DROPDOWN;
};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_SY001O","VF_FP001O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LIST.DropDown","PRIM_LIST.String","PRIM_VS.Style","PRIM_BOLN","PRIM_FLD"]});