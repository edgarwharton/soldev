﻿LANSA.addComponent({id:"XCARIMG",nm:"xCarImageItem",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Carousel Panel",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XCARIMAGE",an:"xCarImage",ft:"NV",ln:200,dc:0,lb:"Image Path",h1:"Image",h2:"Path",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Image Path",dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"U",vd:"N",rd:rl1,mt:"You must enter a value"}]}};var cO=l.rC(oI,{an:"PRIM_OBJT",
fd:Fd,pt:{CarImage:{da:"r"}},co:function(){cO.aN.call(this);var f=this.aF("XCARIMG",Fd);this.aLF({"XCARIMAGE":f.F1});}});cO.getCARIMAGE=function(){var f=this.FLD.XCARIMG;return f.F1.get();};function rl1(F1){return (l.s.ne(F1.get(),""));};},{rp:["PRIM_OBJT","PRIM_FLD"]});