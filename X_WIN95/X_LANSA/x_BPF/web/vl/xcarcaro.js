﻿LANSA.addComponent({id:"XCARCARO",nm:"xCarCarouselDesign",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Carousel Design",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XCARIMAGE",an:"xCarImage",ft:"NV",ln:200,dc:0,lb:"Image Path",h1:"Image",h2:"Path",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Image Path",dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"U",vd:"N",rd:rl1,mt:"You must enter a value"}]}};var cO=l.rC(oI,
{an:"PRIM_PANL",im:["PRIM_CARO.ICarouselDesign"],fd:Fd,pt:{FileName:{da:"rw"}},mt:{OnItemGotReference:{ps:{"CarouselItem":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XCARCARO",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHLAYOUT1ITEM1","PRIM_ATLI");var C2=this.cR("IMAGE","PRIM_IMAG");var C3=this.cR("IMAGEPATH","PRIM_STR");C0.iC();C1.setAttachment("CENTER");C1.setManage(C2);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setLeft(0);C2.setParent(this);C2.setTabPosition(1);
C2.setTabStop(false);C2.setHeight(369);C2.setWidth(433);C2.setImageSizing("BESTFIT");C2.setTop(0);C2.iC();C3.setValue("images//CarsForSale//");C3.iC();this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setLayoutManager(C0);this.setThemeDrawStyle("ListItem");this.setHeight(369);this.setWidth(433);}});cO.mthONITEMGOTREFERENCE=function(p0){var f=this.FLD.XCARCARO,m=this.REF,r=l.mR(this,cO,"OnItemGotReference",13);var P0=r.cPD("CAROUSELITEM");P0=r.sR("CAROUSELITEM",p0);
r.ln=13;{r.ln=15;m.IMAGE.setFileName(l.cat(m.IMAGEPATH.get(),l.cast(P0.getRelatedReference(),"XCARIMG").getCARIMAGE()));r.ln=17;f.F1.set(m.IMAGE.getFileName());}r.ln=19;r.e();};cO.getFILENAME=function(){var f=this.FLD.XCARCARO;return f.F1.get();};cO.setFILENAME=function(v){var f=this.FLD.XCARCARO;f.F1.set(v);};function rl1(F1){return (l.s.ne(F1.get(),""));};},{rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_IMAG","PRIM_STR","PRIM_FLD"]});