﻿LANSA.addComponent({id:"EM_DSKAPP",nm:"EM_Desktop",ot:"wv",tp:"View",pt:"ap",de:"Expenses Desktop View",tl:15000300},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{nm:"EM_EXPENS",an:"EM_ExpenseMerchant",ft:"A",ln:256,dc:0,lb:"Merchant",h1:"Expenses",h2:"Merchant",h3:"Field",de:"Expenses Merchant Field",dv:"",ia:["FE","LC"]},F2:{nm:"EM_EXPE_2",an:"EM_ExpenseComment",ft:"A",ln:256,dc:0,lb:"Comment",h1:"Expenses",h2:"Comment",h3:"Field",de:"Expenses Comment Field",dv:"",ia:["FE","LC"]
},F3:{nm:"STD_TEXTS",ft:"A",ln:30,dc:0,lb:{"ENG":"Text","FRA":"Texte"}[cL],h1:{"ENG":"Text","FRA":"Texte"}[cL],h2:" ",h3:" ",de:{"ENG":"Standard TEXT, SHORT","FRA":"Texte Court Standard"}[cL],dv:"",ia:["LC"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"Text must be specified","FRA":"Texte must be specified"}[cL]}]},F4:{nm:"EM_EXPE_3",an:"EM_ExpenseDate",ft:"D",ln:10,dc:0,lb:"Date",h1:"Expenses",h2:"Date",h3:"Field",de:"Expenses Date Field",dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F5:{nm:"EM_EXPE_1",
an:"EM_ExpenseStatus",ft:"A",ln:10,dc:0,lb:"Status",h1:"Expenses",h2:"Status",h3:"Field",de:"Expenses Status Field",dv:"",ia:["FE","LC"]},F6:{nm:"EM_EXPE_4",an:"EM_ExpenseAmount",ft:"P",ln:9,dc:2,lb:"Amount",h1:"Expenses",h2:"Amount",h3:"Field",de:"Expenses Amount Field",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_VIEW",fd:Fd,mt:{Refresh:{}},co:function(){cO.aN.call(this);var f=this.aF("EM_DSKAPP",Fd);var C0=this.cR("STYLECOLUMNHEADER","PRIM_VS","Style");var C1=this.cR("LAYOUTMAIN","PRIM_TBLO");
var C2=this.cR("COLUMN1MAIN","PRIM_TBLO","Column");var C3=this.cR("COLUMN2MAIN","PRIM_TBLO","Column");var C4=this.cR("ROW2MAIN","PRIM_TBLO","Row");var C5=this.cR("ITEM1MAIN","PRIM_TBLO","Item");var C6=this.cR("ITEM2MAIN","PRIM_TBLO","Item");var C7=this.cR("SUMMARYPANEL","EM_SUMPNL");var C8=this.cR("LIST","PRIM_LIST");var C9=this.cR("COLUMNMERCHANT","PRIM_LIST","String");var C10=this.cR("COLUMNCOMMENT","PRIM_LIST","String");var C11=this.cR("COLUMNAMOUNT","PRIM_LIST","String");var C12=this.cR("COLUMNDATE","PRIM_LIST","DateTime");
var C13=this.cR("COLUMNSTATUS","PRIM_LIST","String");var C14=this.cA("APPLICATION","EM_APP");C0.setBorderBottom(1);C0.setBorderLeft(0);C0.setBorderRight(0);C0.setBorderTop(0);C0.setFontSize(14);C0.setFontUnits("PIXEL");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.setUnits("PIXELS");C3.setWidth(300);C3.iC();C4.setDisplayPosition(1);C4.setParent(C1);C4.iC();C5.setColumn(C3);C5.setManage(C7);C5.setParent(C1);C5.setRow(C4);C5.iC();C6.setColumn(C2);
C6.setManage(C8);C6.setParent(C1);C6.setRow(C4);C6.iC();C7.setLeft(804);C7.setParent(this);C7.setTabStop(false);C7.setHeight(616);C7.iC();C8.setDisplayPosition(2);C8.setLeft(0);C8.setParent(this);C8.setTabPosition(2);C8.setTop(0);C8.setHeight(616);C8.setWidth(804);C8.setRowHeight(50);C8.setColumnHeaderHeight(60);C8.setColumnLines(false);C8.iC();C9.setColumnWidth(160);C9.setDisplayPosition(2);C9.setParent(C8);C9.setSource(f.F1);C9.setSortOnClick(true);C9.setColumnCaption("      Merchant");C9.setColumnCaptionType("CAPTION");
C9.setCellMarginLeft(18);C9.setCellAlignment("CENTERLEFT");C9.setColumnCaptionAlign("LEFT");C9.setColumnStyle(C0);C9.iC();C10.setColumnWidth(493);C10.setDisplayPosition(5);C10.setParent(C8);C10.setSource(f.F2);C10.setColumnStyle(C0);C10.setSortOnClick(true);C10.setColumnCaptionType("CAPTION");C10.setColumnCaption("      Comment");C10.setCellMarginLeft(18);C10.setColumnCaptionAlign("LEFT");C10.setColumnUnits("PROPORTION");C10.setColumnMinWidth(200);C10.iC();C11.setColumnWidth(90);C11.setDisplayPosition(3);
C11.setParent(C8);C11.setSource(f.F3);C11.setColumnStyle(C0);C11.setSortOnClick(true);C11.setColumnCaption("      Total");C11.setColumnCaptionType("CAPTION");C11.setCellMarginRight(15);C11.setCellMarginLeft(18);C11.setColumnCaptionAlign("LEFT");C11.iC();C12.setColumnWidth(118);C12.setDisplayPosition(1);C12.setParent(C8);C12.setShowTime(false);C12.setSource(f.F4);C12.setColumnCaptionType("CAPTION");C12.setColumnCaption("      Date");C12.setColumnStyle(C0);C12.setSortOnClick(true);C12.setCellMarginLeft(18);
C12.setColumnCaptionAlign("LEFT");C12.iC();C13.setColumnWidth(120);C13.setDisplayPosition(4);C13.setParent(C8);C13.setSource(f.F5);C13.setColumnStyle(C0);C13.setColumnCaption("     Status");C13.setColumnCaptionAlign("LEFT");C13.setColumnCaptionType("CAPTION");C13.setSortOnClick(true);C13.setCellMarginLeft(18);C13.iC();if((C14!=null)&&(C14.iI()==false)){C14.iC();}l.WEB().aH("DEVICECHANGED",this,e2);C14.aH("LOGINCOMPLETED",this,e1);this.setDisplayPosition(1);this.setHeight(616);this.setWidth(1104);
this.setLayoutManager(C1);this.setVerticalScroll(true);this.setTabPosition(1);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance #Application.LoginCompleted",30);r.ln=30;{r.ln=32;this.mthREFRESH();}r.ln=34;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",36);r.ln=36;{r.ln=38;if(l.s.eq(l.WEB().getDevice(),"DESKTOP")){r.ln=40;m.SUMMARYPANEL.setVisible(true);r.ln=42;m.COLUMN2MAIN.setWidth(300);}else{r.ln=46;
m.SUMMARYPANEL.setVisible(false);r.ln=48;m.COLUMN2MAIN.setWidth(0);}}r.ln=52;r.e();};cO.mthREFRESH=function(){var f=this.FLD.EM_DSKAPP,m=this.REF,r=l.mR(this,cO,"Refresh",58);var C0=r.cR("EXPENSES","PRIM_LCOL");C0.setCollects("EM_EXPOBJ");C0.iC();C0.aLF({"EM_EXPE_3":f.F4,"EM_EXPENS":f.F1,"EM_EXPE_4":f.F6,"EM_EXPE_2":f.F2,"EM_EXPE_1":f.F5});r.ln=58;{r.ln=61;m.APPLICATION.ref.mthFINDALL(C0);r.ln=63;m.LIST.clearList();r.ln=65;{var l1=C0.selectList();while(l1.step()){r.ln=67;m.LIST.addEntry();r.ln=69;
m.COLUMNAMOUNT.getCurrentItem().setValue(l.cat("$",l.n.AsString(f.F6.get())));r.ln=71;}l1.end();}}r.ln=73;r.e();};function rl1(F3){var v=F3.get();return(l.s.eq(v,""));};},{rc:["EM_SUMPNL","EM_APP"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.DateTime","PRIM_FLD"],dc:["EM_EXPOBJ"],dp:["PRIM_LCOL"]});