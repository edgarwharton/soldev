﻿LANSA.addComponent({id:"EM_EXPOBJ",nm:"EM_Expense",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Expenses Expense Object",tl:15000300},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{nm:"EM_EXPE_3",an:"EM_ExpenseDate",ft:"D",ln:10,dc:0,lb:"Date",h1:"Expenses",h2:"Date",h3:"Field",de:"Expenses Date Field",dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F2:{nm:"EM_EXPENS",an:"EM_ExpenseMerchant",ft:"A",ln:256,dc:0,lb:"Merchant",h1:"Expenses",h2:"Merchant",h3:"Field",de:"Expenses Merchant Field",
dv:"",ia:["FE","LC"]},F3:{nm:"EM_EXPE_4",an:"EM_ExpenseAmount",ft:"P",ln:9,dc:2,lb:"Amount",h1:"Expenses",h2:"Amount",h3:"Field",de:"Expenses Amount Field",dv:0,ia:["FE","RB"]},F4:{nm:"EM_EXPE_2",an:"EM_ExpenseComment",ft:"A",ln:256,dc:0,lb:"Comment",h1:"Expenses",h2:"Comment",h3:"Field",de:"Expenses Comment Field",dv:"",ia:["FE","LC"]},F5:{nm:"EM_EXPE_1",an:"EM_ExpenseStatus",ft:"A",ln:10,dc:0,lb:"Status",h1:"Expenses",h2:"Status",h3:"Field",de:"Expenses Status Field",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,
{an:"PRIM_OBJT",fd:Fd,pt:{Date:{da:"r"},Merchant:{da:"r"},Amount:{da:"r"},Comment:{da:"r"},Status:{da:"r"},DisplayAmount:{da:"na"}},mt:{ContainsText:{ps:{"Text":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("EM_EXPOBJ",Fd);this.aLF({"EM_EXPE_3":f.F1,"EM_EXPENS":f.F2,"EM_EXPE_4":f.F3,"EM_EXPE_2":f.F4,"EM_EXPE_1":f.F5});}});cO.mthGETDISPLAYAMOUNT=function(){var f=this.FLD.EM_EXPOBJ,r=l.pR(this,cO,"GetDisplayAmount",18);var P0=r.cP("RESULT","PRIM_ALPH");r.ln=18;{r.ln=21;P0.set(l.cat("$",l.n.AsDisplayString(f.F3.get(),9,2)));
}r.ln=23;return r.rV(P0.get());};cO.mthCONTAINSTEXT=function(p0){var f=this.FLD.EM_EXPOBJ,r=l.mR(this,cO,"ContainsText",29);var P0=r.cP("TEXT","PRIM_STR");var P1=r.cP("RESULT","PRIM_BOLN");P0.set(p0);r.ln=29;{r.ln=33;P1.set(true);r.ln=35;if(l.s.Contains(f.F2.get(),P0.get())){return r.rV(P1.get());}r.ln=41;if(l.s.Contains(f.F4.get(),P0.get())){return r.rV(P1.get());}r.ln=47;if(l.s.Contains(this.getDISPLAYAMOUNT(),P0.get())){return r.rV(P1.get());}r.ln=53;P1.set(false);}r.ln=55;return r.rV(P1.get());
};cO.getDATE=function(){var f=this.FLD.EM_EXPOBJ;return f.F1.get();};cO.getMERCHANT=function(){var f=this.FLD.EM_EXPOBJ;return f.F2.get();};cO.getAMOUNT=function(){var f=this.FLD.EM_EXPOBJ;return f.F3.get();};cO.getCOMMENT=function(){var f=this.FLD.EM_EXPOBJ;return f.F4.get();};cO.getSTATUS=function(){var f=this.FLD.EM_EXPOBJ;return f.F5.get();};cO.getDISPLAYAMOUNT=function(){return this.mthGETDISPLAYAMOUNT();};},{rp:["PRIM_OBJT","PRIM_FLD"]});