﻿LANSA.addComponent({id:"XDEMOCAR",nm:"xDemoCarouselDesign",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Sample Carousel Design",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximagei_2.png");var Fd={F1:{nm:"STD_TEXT",ft:"A",ln:50,dc:0,lb:{"ENG":"Text","FRA":"Texte","JPN":"Text","LLL":"Text"}[cL],h1:{"ENG":"Text","FRA":"Texte","JPN":"Text","LLL":"Text"}[cL],h2:" ",h3:" ",de:{"ENG":"Standard TEXT","FRA":"Texte Standard","JPN":"Standard TEXT","LLL":"Standard TEXT"}[cL],
dv:"",ia:["LC"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"Text must be specified","FRA":"Texte must be specified","JPN":"Text must be specified","LLL":"Text must be specified"}[cL]}]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_CARO.ICarouselDesign"],fd:Fd,mt:{OnAdd:{ps:{"CarouselItem":{pt:"i"}}},OnDelete:{ps:{"CarouselItem":{pt:"i"}}},OnFind:{ps:{"CarouselItem":{pt:"i"},"Key":{pt:"i"}}},OnItemGotFocus:{ps:{"CarouselItem":{pt:"i"}}},OnItemGotReference:{ps:{"CarouselItem":{pt:"i"}}},
OnItemImageChanged:{ps:{"CarouselItem":{pt:"i"}}},OnItemLostFocus:{ps:{"CarouselItem":{pt:"i"}}},OnItemRealizing:{ps:{"CarouselItem":{pt:"i"}}},OnSort:{ps:{"CarouselItem":{pt:"i"},"CompareTo":{pt:"i"},"Key":{pt:"i"}}},OnUpdate:{ps:{"CarouselItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOCAR",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("LAYOUT","PRIM_ATLM");var C2=this.cR("TEXT","PRIM_PANL");var C3=this.cR("ATLI_1","PRIM_ATLI");var C4=this.cR("IMAGE","PRIM_PANL");
var C5=this.cR("ATLI_2","PRIM_ATLI");var C6=this.cR("TITLE","PRIM_LABL");var C7=this.cR("ATLI_3","PRIM_ATLI");var C8=this.cR("CAPTION","PRIM_LABL");var C9=this.cR("ATLI_4","PRIM_ATLI");C0.setCursor("HAND");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setHeight(64);C2.setLayoutManager(C1);C2.setLeft(0);C2.setParent(this);C2.setTabPosition(1);C2.setTabStop(false);C2.setTop(296);C2.setWidth(410);C2.iC();C3.setAttachment("BOTTOM");C3.setManage(C2);C3.setParent(C1);C3.iC();C4.setDisplayPosition(2);C4.setHeight(296);
C4.setImage(rc1);C4.setLeft(0);C4.setParent(this);C4.setTabPosition(2);C4.setTabStop(false);C4.setTop(0);C4.setWidth(410);C4.iC();C5.setAttachment("CENTER");C5.setManage(C4);C5.setParent(C1);C5.iC();C6.setAlignment("CENTER");C6.setCaption("Title");C6.setDisplayPosition(1);C6.setEllipses("WORD");C6.setHeight(36);C6.setLeft(0);C6.setParent(C2);C6.setTabPosition(1);C6.setTabStop(false);C6.setTop(0);C6.setVerticalAlignment("CENTER");C6.setWidth(410);C6.setThemeDrawStyle("Heading2");C6.iC();C7.setAttachment("TOP");
C7.setManage(C6);C7.setParent(C1);C7.iC();C8.setAlignment("CENTER");C8.setCaption("Caption");C8.setDisplayPosition(2);C8.setEllipses("WORD");C8.setHeight(28);C8.setLeft(0);C8.setParent(C2);C8.setTabPosition(2);C8.setTabStop(false);C8.setTop(36);C8.setWidth(410);C8.iC();C9.setAttachment("CENTER");C9.setManage(C8);C9.setParent(C1);C9.iC();this.setDisplayPosition(1);this.setHeight(360);this.setLayoutManager(C1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(410);this.setStyle(C0);
this.aLF({"STD_TEXT":f.F1});}});cO.mthONADD=function(p0){var r=l.mR(this,cO,"OnAdd",24);var P0=r.cPD("CAROUSELITEM");P0=r.sR("CAROUSELITEM",p0);r.ln=24;{}r.ln=26;r.e();};cO.mthONDELETE=function(p0){var r=l.mR(this,cO,"OnDelete",28);var P0=r.cPD("CAROUSELITEM");P0=r.sR("CAROUSELITEM",p0);r.ln=28;{}r.ln=30;r.e();};cO.mthONFIND=function(p1,p2){var r=l.mR(this,cO,"OnFind",32);var P0=r.cPb("RESULT");var P1=r.cPD("CAROUSELITEM");var P2=r.cPD("KEY");P1=r.sR("CAROUSELITEM",p1);P2=r.sR("KEY",p2);r.ln=32;{
}r.ln=34;return r.rV(P0.get());};cO.mthONITEMGOTFOCUS=function(p0){var r=l.mR(this,cO,"OnItemGotFocus",36);var P0=r.cPD("CAROUSELITEM");P0=r.sR("CAROUSELITEM",p0);r.ln=36;{}r.ln=38;r.e();};cO.mthONITEMGOTREFERENCE=function(p0){var r=l.mR(this,cO,"OnItemGotReference",40);var P0=r.cPD("CAROUSELITEM");P0=r.sR("CAROUSELITEM",p0);r.ln=40;{}r.ln=42;r.e();};cO.mthONITEMIMAGECHANGED=function(p0){var r=l.mR(this,cO,"OnItemImageChanged",44);var P0=r.cPD("CAROUSELITEM");P0=r.sR("CAROUSELITEM",p0);r.ln=44;{}
r.ln=46;r.e();};cO.mthONITEMLOSTFOCUS=function(p0){var r=l.mR(this,cO,"OnItemLostFocus",48);var P0=r.cPD("CAROUSELITEM");P0=r.sR("CAROUSELITEM",p0);r.ln=48;{}r.ln=50;r.e();};cO.mthONITEMREALIZING=function(p0){var r=l.mR(this,cO,"OnItemRealizing",52);var P0=r.cPD("CAROUSELITEM");P0=r.sR("CAROUSELITEM",p0);r.ln=52;{}r.ln=54;r.e();};cO.mthONSORT=function(p1,p2,p3){var r=l.mR(this,cO,"OnSort",56);var P0=r.cPe("RESULT","EQUAL");var P1=r.cPD("CAROUSELITEM");var P2=r.cPD("COMPARETO");var P3=r.cPD("KEY");
P1=r.sR("CAROUSELITEM",p1);P2=r.sR("COMPARETO",p2);P3=r.sR("KEY",p3);r.ln=56;{}r.ln=58;return r.rV(P0.get());};cO.mthONUPDATE=function(p0){var r=l.mR(this,cO,"OnUpdate",60);var P0=r.cPD("CAROUSELITEM");P0=r.sR("CAROUSELITEM",p0);r.ln=60;{}r.ln=62;r.e();};function rl1(F1){var v=F1.get();return(l.s.eq(v,""));};},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_FLD"]});