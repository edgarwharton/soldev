﻿LANSA.addComponent({id:"XCARCARPA",nm:"xCarCarouselPanel",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Used Cars - Panel with Carousel",tl:15000300},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?"}[cL],h1:{"ENG":"Standard","FRA":"?"}[cL],h2:{"ENG":"Integer","FRA":"?"}[cL],h3:{"ENG":"Field","FRA":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?"}[cL],dv:0,ia:["FE","RB"]},F2:{ic:0,nm:"XCARVIN",an:"xCarVIN",
ft:"A",ln:17,dc:0,lb:"Vehicle Id",h1:"Vehicle Id",h2:" ",h3:" ",de:"Vehicle Identification Number",dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"U",vd:"N",rd:rl1,mt:"You must enter a VIN."}]},F3:{nm:"XCARIMAGE",an:"xCarImage",ft:"NV",ln:200,dc:0,lb:"Image Path",h1:"Image",h2:"Path",h3:" ",de:"Image Path",dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"U",vd:"N",rd:rl2,mt:"You must enter a value"}]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{SelectedImage:{da:"rw"},PageScroll:{da:"na"},PageSize:
{da:"na"}},mt:{GetCarouselImages:{ps:{"VIN":{pt:"i"}}}},ev:{ShowBigCarousel:{}},co:function(){cO.aN.call(this);var f=this.aF("XCARCARPA",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHLAYOUT1ITEM1","PRIM_ATLI");var C2=this.cR("CAROUSEL","PRIM_CARO");var C3=this.cR("IMAGES","PRIM_ACOL");C0.iC();C1.setAttachment("CENTER");C1.setManage(C2);C1.setParent(C0);C1.iC();C2.setCarouselStyle("PAGE");C2.setDisplayPosition(1);C2.setLeft(0);C2.setParent(this);C2.setTabPosition(1);C2.setTop(0);
C2.setWidth(497);C2.setHeight(401);C2.setPageSize(1);C2.iC();C3.setCollects("XCARIMG");C3.iC();C2.aH("ITEMCLICK",this,e3);C2.aDS("XCARCARO");C2.aLF({});C3.aLF({"XCARIMAGE":f.F3});this.setLeft(0);this.setHeight(401);this.setTop(0);this.setWidth(497);this.setLayoutManager(C0);this.setDisplayPosition(1);this.setTabPosition(1);}});cO.mthSETPAGESCROLL=function(p0){var m=this.REF,r=l.pR(this,cO,"SetPageScroll",18);var P0=r.cPF("SCROLL",Fd.F1.Dc);P0.set(p0);r.ln=18;{r.ln=22;m.CAROUSEL.setPageScroll(P0.get());
}r.ln=24;r.e();};cO.mthSETPAGESIZE=function(p0){var m=this.REF,r=l.pR(this,cO,"SetPageSize",26);var P0=r.cPF("SIZE",Fd.F1.Dc);P0.set(p0);r.ln=26;{r.ln=30;m.CAROUSEL.setPageSize(P0.get());}r.ln=32;r.e();};cO.mthGETCAROUSELIMAGES=function(p0){var m=this.REF,r=l.mR(this,cO,"GetCarouselImages",34),mth=r;var P0=r.cPF("VIN",Fd.F2.Dc);P0.set(p0);var C0=r.cDR("GETIMAGES","XCARDATAS","IMAGESFORCAROUSEL");C0.iC();C0.aH("COMPLETED",this,e1);C0.aH("FAILED",this,e2);r.ln=34;{r.ln=40;C0.mthEXECUTEASYNC({FLD:{"XCARVIN":P0.get()}},{LIST:{"CARIMAGES":m.IMAGES}});
}r.ln=59;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#GetImages.Completed",42,mth);r.ln=42;{r.ln=44;{var l1=m.IMAGES.cI();while(l1.step()){var IMG=r.sR("IMG",l1.item());r.ln=46;m.CAROUSEL.addEntry();r.ln=48;m.CAROUSEL.getCurrentItem().setRelatedReference(IMG);r.ln=50;}l1.end();r.dR("IMG");}}r.ln=52;r.e();}function e2(sender,Ps){var r=l.eR(this,cO,"#GetImages.Failed",54,mth);r.ln=54;{}r.ln=57;r.e();}};function e3(sender,Ps){var r=l.eR(this,cO,"#Carousel.ItemClick",61);r.ln=61;{r.ln=63;if(l.s.ne(l.WEB().getDevice(),"MOBILE"))
{r.ln=65;this.fE("SHOWBIGCAROUSEL");}}r.ln=69;r.e();};cO.getSELECTEDIMAGE=function(){var f=this.FLD.XCARCARPA;return f.F3.get();};cO.setSELECTEDIMAGE=function(v){var f=this.FLD.XCARCARPA;f.F3.set(v);};cO.setPAGESCROLL=function(v){this.mthSETPAGESCROLL(v);};cO.setPAGESIZE=function(v){this.mthSETPAGESIZE(v);};function rl1(F2){return (l.s.ne(F2.get(),""));};function rl2(F3){return (l.s.ne(F3.get(),""));};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});
}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XCARVIN"});}},{rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_CARO","PRIM_ACOL","PRIM_FLD","PRIM_WEB.DataRequest"],dc:["XCARCARO","XCARIMG"]});