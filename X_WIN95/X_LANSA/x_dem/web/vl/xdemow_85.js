﻿LANSA.addComponent({id:"XDEMOW_85",nm:"xDemoWebArrays",ot:"wp",tp:"Web Page",pt:"ap",de:"Arrays",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"XDEMONUMB",an:"xDemoNumber",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Number","FRA":"Nombre","JPN":"??","LLL":"Number"}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"番号","LLL":"Number"}[cL],h2:"",h3:"",de:{"ENG":"Number","FRA":"Nombre","JPN":"番号","LLL":"Number"}[cL],dv:0,ia:["ASQN"]
}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{LoadArray:{},GetArrayItem:{ps:{"Row":{pt:"i"},"Column":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XDEMOW_85",Fd);var C0=this.cR("ARRAY","PRIM_ACOL");var C1=this.cF("GROW",Fd.F1.SPINEDIT);var C2=this.cF("GCOLUMN",Fd.F1.SPINEDIT);var C3=this.cR("GVALUE","PRIM_LABL");C0.setCollects("PRIM_ACOL");C0.iC();C1.setDisplayPosition(2);C1.setLeft(10);C1.setParent(this);C1.setTabPosition(2);C1.setTop(8);C1.setHeight(25);C1.setWidth(225);C1.setMarginLeft(100);
C1.setCaption("Row");C1.setLabelType("CAPTION");C1.aD();C1.iC();C2.setDisplayPosition(1);C2.setLeft(10);C2.setParent(this);C2.setTabPosition(1);C2.setTop(40);C2.setHeight(25);C2.setWidth(225);C2.setMarginLeft(100);C2.setCaption("Column");C2.setLabelType("CAPTION");C2.aD();C2.iC();C3.setDisplayPosition(3);C3.setEllipses("WORD");C3.setHeight(59);C3.setLeft(248);C3.setParent(this);C3.setTabPosition(3);C3.setTabStop(false);C3.setTop(6);C3.setVerticalAlignment("CENTER");C3.setWidth(120);C3.setAlignment("CENTER");
C3.setThemeDrawStyle("Title+MediumTitle");C3.iC();C1.aH("CHANGED",this,e2);C2.aH("CHANGED",this,e2);this.setHeight(360);this.setWidth(520);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",10);r.ln=10;{r.ln=12;this.mthLOADARRAY();r.ln=14;m.GROW.set(1);m.GCOLUMN.set(1);r.ln=16;cO.mthGETARRAYITEM.call(this,m.GROW.get(),m.GCOLUMN.get());}r.ln=18;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gRow.Changed #gColumn.Changed",20);
r.ln=20;{r.ln=22;m.GROW.set(l.n.Bound(m.GROW.get(),1,10));r.ln=23;m.GCOLUMN.set(l.n.Bound(m.GCOLUMN.get(),1,10));r.ln=25;cO.mthGETARRAYITEM.call(this,m.GROW.get(),m.GCOLUMN.get());}r.ln=27;r.e();};cO.mthLOADARRAY=function(){var m=this.REF,r=l.mR(this,cO,"LoadArray",29);var C0=r.cR("VALUE","PRIM_NMBR");C0.iC();r.ln=29;{r.ln=33;for(var i1=1,s1=1,t1=l.tI(10);(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=35;m.ARRAY.mthINSERT(l.cC("PRIM_ACOL").tB([ti1]));r.ln=37;for(var i2=1,s2=1,t2=l.tI(10);(((s2>=0)&&(i2<=t2))||((s2<0)&&(i2>=t2)));i2+=s2)
{r.ln=39;C0.set(l.add(C0.get(),1));r.ln=41;m.ARRAY.getLast().mthINSERT(l.cC("PRIM_NMBR"));r.ln=42;m.ARRAY.getLast().getLast().set(C0.get());}}}r.ln=48;r.e();};cO.mthGETARRAYITEM=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"GetArrayItem",50);var P0=r.cP("ROW","PRIM_NMBR");var P1=r.cP("COLUMN","PRIM_NMBR");P0.set(p0);P1.set(p1);r.ln=50;{r.ln=54;m.GVALUE.set(l.n.AsString(m.ARRAY.get(P0.get()).getItem(P1.get()).get()));}r.ln=56;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMONUMB"});
Fd.F1.SPINEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);this.setHeight(20);this.setUsePicklist(false);this.setWidth(261);};l.cFC({co:Fd.F1.SPINEDIT,an:"PRIM_EVSE",fn:"XDEMONUMB",cn:"SpinEdit"});}var ti1={p:"PRIM_NMBR"};},{rp:["PRIM_WEB","PRIM_ACOL","PRIM_FLD","PRIM_EVSE","PRIM_LABL"],dp:["PRIM_NMBR"]});