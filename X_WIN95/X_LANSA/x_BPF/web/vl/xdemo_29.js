﻿LANSA.addComponent({id:"XDEMO_29",nm:"xDemoWebUDCTreeEmployeeItem",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Tree Employee Design",tl:15000003},function(l,oI,u){var c1=l.cDec(".37"),c2=l.cDec("1.63");var cO=l.rC(oI,{an:"XDEMO_27",mt:{OnItemGotReference:{ps:{"TreeItem":{pt:"i"}}},Update:{},UpdateName:{ps:{"Sort":{pt:"i"}}},OnSort:{ps:{"TreeItem":{pt:"i"},"CompareTo":{pt:"i"},"Key":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("STYLEHANDCURSOR","PRIM_VS","Style");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");
var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("ROW2","PRIM_TBLO","Row");var C4=this.cR("ROW3","PRIM_TBLO","Row");var C5=this.cR("ROW4","PRIM_TBLO","Row");var C6=this.cR("ROW5","PRIM_TBLO","Row");var C7=this.cR("ROW6","PRIM_TBLO","Row");var C8=this.cR("ROW7","PRIM_TBLO","Row");var C9=this.cR("COL1","PRIM_TBLO","Column");var C10=this.cR("COL2","PRIM_TBLO","Column");var C11=this.cR("COL3","PRIM_TBLO","Column");var C12=this.cR("COL4","PRIM_TBLO","Column");var C13=this.cR("COL5","PRIM_TBLO","Column");
var C14=this.cR("ITEM3","PRIM_TBLO","Item");var C15=this.cR("ITEM4","PRIM_TBLO","Item");var C16=this.cR("ITEM5","PRIM_TBLO","Item");var C17=this.cR("ITEM6","PRIM_TBLO","Item");var C18=this.cR("TBLO_1","PRIM_TBLO","Item");var C19=this.cR("TBLO_2","PRIM_TBLO","Item");var C20=this.cR("TBLO_3","PRIM_TBLO","Item");var C21=this.cR("TBLO_4","PRIM_TBLO","Item");var C22=this.cR("TBLO_5","PRIM_TBLO","Item");var C23=this.cR("TBLO_7","PRIM_TBLO","Item");var C24=this.cR("TBLO_8","PRIM_TBLO","Item");var C25=this.cR("TBLO_9","PRIM_TBLO","Item");
var C26=this.cR("TBLO_10","PRIM_TBLO","Item");var C27=this.cR("TBLO_6","PRIM_TBLO","Item");this.cD("GEMPLOYEE");var C29=this.cR("LFULLNAME","PRIM_LABL");var C30=this.cR("LSTREET","PRIM_LABL");var C31=this.cR("LCITY","PRIM_LABL");var C32=this.cR("LSTATEANDPOSTCODE","PRIM_LABL");var C33=this.cR("LNAME","PRIM_LABL");var C34=this.cR("LADDRESS","PRIM_LABL");var C35=this.cR("LCONTACT","PRIM_LABL");var C36=this.cR("LWORK","PRIM_LABL");var C37=this.cR("LHOME","PRIM_LABL");var C38=this.cR("LEMAIL","PRIM_LABL");
var C39=this.cR("LPHONEWORK","PRIM_LABL");var C40=this.cR("LPHONEHOME","PRIM_LABL");var C41=this.cR("LEMAILADDRESS","PRIM_LABL");var C42=this.cR("EMPLOYEEIMAGE","PRIM_IMAG");var C43=this.cR("ACTIVESORT","PRIM_STR");C0.setCursor("HAND");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.iC();C5.setDisplayPosition(4);C5.setParent(C1);C5.iC();C6.setDisplayPosition(5);C6.setParent(C1);C6.iC();
C7.setDisplayPosition(6);C7.setParent(C1);C7.iC();C8.setDisplayPosition(7);C8.setParent(C1);C8.iC();C9.setDisplayPosition(2);C9.setParent(C1);C9.setUnits("PIXELS");C9.setWidth(56);C9.iC();C10.setDisplayPosition(3);C10.setParent(C1);C10.setUnits("PIXELS");C10.setWidth(86);C10.iC();C11.setDisplayPosition(4);C11.setParent(C1);C11.setWidth(c1);C11.iC();C12.setDisplayPosition(5);C12.setParent(C1);C12.setWidth(c2);C12.iC();C13.setDisplayPosition(1);C13.setParent(C1);C13.setWidth(70);C13.setUnits("PIXELS");
C13.iC();C14.setColumn(C11);C14.setManage(C29);C14.setParent(C1);C14.setRow(C2);C14.setColumnSpan(2);C14.iC();C15.setColumn(C11);C15.setManage(C30);C15.setParent(C1);C15.setRow(C6);C15.setColumnSpan(2);C15.iC();C16.setColumn(C11);C16.setManage(C31);C16.setParent(C1);C16.setRow(C7);C16.setColumnSpan(2);C16.iC();C17.setColumn(C11);C17.setManage(C32);C17.setParent(C1);C17.setRow(C8);C17.setColumnSpan(2);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C10);C18.setManage(C33);C18.setParent(C1);C18.setRow(C2);
C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C10);C19.setFlow("DOWN");C19.setManage(C34);C19.setParent(C1);C19.setRow(C6);C19.iC();C20.setAlignment("TOPLEFT");C20.setColumn(C10);C20.setFlow("DOWN");C20.setManage(C35);C20.setParent(C1);C20.setRow(C3);C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C11);C21.setFlow("DOWN");C21.setManage(C36);C21.setParent(C1);C21.setRow(C3);C21.iC();C22.setAlignment("TOPLEFT");C22.setColumn(C11);C22.setFlow("DOWN");C22.setManage(C37);C22.setParent(C1);C22.setRow(C4);
C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C12);C23.setFlow("DOWN");C23.setManage(C39);C23.setParent(C1);C23.setRow(C3);C23.iC();C24.setAlignment("TOPLEFT");C24.setColumn(C12);C24.setFlow("DOWN");C24.setManage(C40);C24.setParent(C1);C24.setRow(C4);C24.iC();C25.setAlignment("TOPLEFT");C25.setColumn(C12);C25.setFlow("DOWN");C25.setManage(C41);C25.setParent(C1);C25.setRow(C5);C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C9);C26.setFlow("DOWN");C26.setManage(C42);C26.setParent(C1);C26.setRow(C2);
C26.setSizing("FITTOWIDTH");C26.setMarginTop(2);C26.iC();C27.setAlignment("TOPLEFT");C27.setColumn(C11);C27.setFlow("DOWN");C27.setManage(C38);C27.setParent(C1);C27.setRow(C5);C27.iC();C29.setCaption("Firstname, Surname");C29.setDisplayPosition(1);C29.setEllipses("WORD");C29.setHeight(20);C29.setLeft(212);C29.setParent(this);C29.setTabPosition(4);C29.setTabStop(false);C29.setTop(0);C29.setVerticalAlignment("CENTER");C29.setWidth(390);C29.setDragStyle("AGGREGATED");C29.setThemeDrawStyle("Heading3");
C29.iC();C30.setCaption("Street");C30.setDisplayPosition(2);C30.setEllipses("WORD");C30.setHeight(20);C30.setLeft(212);C30.setParent(this);C30.setTabPosition(3);C30.setTabStop(false);C30.setTop(80);C30.setVerticalAlignment("CENTER");C30.setWidth(390);C30.setDragStyle("AGGREGATED");C30.iC();C31.setCaption("City");C31.setDisplayPosition(3);C31.setEllipses("WORD");C31.setHeight(20);C31.setLeft(212);C31.setParent(this);C31.setTabPosition(2);C31.setTabStop(false);C31.setTop(100);C31.setVerticalAlignment("CENTER");
C31.setWidth(390);C31.setDragStyle("AGGREGATED");C31.iC();C32.setCaption("State & PostCode");C32.setDisplayPosition(4);C32.setEllipses("WORD");C32.setHeight(20);C32.setLeft(212);C32.setParent(this);C32.setTabPosition(1);C32.setTabStop(false);C32.setTop(120);C32.setVerticalAlignment("CENTER");C32.setWidth(390);C32.setDragStyle("AGGREGATED");C32.iC();C33.setCaption("Name");C33.setDisplayPosition(5);C33.setEllipses("WORD");C33.setLeft(126);C33.setParent(this);C33.setTabPosition(5);C33.setTabStop(false);
C33.setTop(0);C33.setVerticalAlignment("CENTER");C33.setHeight(20);C33.setWidth(86);C33.setDragStyle("AGGREGATED");C33.setThemeDrawStyle("Heading3");C33.iC();C34.setCaption("Address");C34.setDisplayPosition(6);C34.setEllipses("WORD");C34.setLeft(126);C34.setParent(this);C34.setTabPosition(6);C34.setTabStop(false);C34.setTop(80);C34.setVerticalAlignment("CENTER");C34.setHeight(20);C34.setWidth(86);C34.setDragStyle("AGGREGATED");C34.iC();C35.setCaption("Contact");C35.setDisplayPosition(7);C35.setEllipses("WORD");
C35.setLeft(126);C35.setParent(this);C35.setTabPosition(7);C35.setTabStop(false);C35.setTop(20);C35.setVerticalAlignment("CENTER");C35.setHeight(20);C35.setWidth(86);C35.setDragStyle("AGGREGATED");C35.iC();C36.setCaption("Work");C36.setDisplayPosition(8);C36.setEllipses("WORD");C36.setLeft(212);C36.setParent(this);C36.setTabPosition(8);C36.setTabStop(false);C36.setTop(20);C36.setVerticalAlignment("CENTER");C36.setHeight(20);C36.setWidth(73);C36.setDragStyle("AGGREGATED");C36.iC();C37.setCaption("Home");
C37.setDisplayPosition(9);C37.setEllipses("WORD");C37.setLeft(212);C37.setParent(this);C37.setTabPosition(9);C37.setTabStop(false);C37.setTop(40);C37.setVerticalAlignment("CENTER");C37.setHeight(20);C37.setWidth(73);C37.setDragStyle("AGGREGATED");C37.iC();C38.setCaption("Email");C38.setDisplayPosition(10);C38.setEllipses("WORD");C38.setLeft(212);C38.setParent(this);C38.setTabPosition(10);C38.setTabStop(false);C38.setTop(60);C38.setVerticalAlignment("CENTER");C38.setHeight(20);C38.setWidth(73);C38.setDragStyle("AGGREGATED");
C38.iC();C39.setCaption("Work Phone");C39.setDisplayPosition(11);C39.setEllipses("WORD");C39.setLeft(285);C39.setParent(this);C39.setTabPosition(11);C39.setTabStop(false);C39.setTop(20);C39.setVerticalAlignment("CENTER");C39.setHeight(20);C39.setDragStyle("AGGREGATED");C39.setWidth(317);C39.iC();C40.setCaption("Home Phone");C40.setDisplayPosition(12);C40.setEllipses("WORD");C40.setLeft(285);C40.setParent(this);C40.setTabPosition(12);C40.setTabStop(false);C40.setTop(40);C40.setVerticalAlignment("CENTER");
C40.setHeight(20);C40.setDragStyle("AGGREGATED");C40.setWidth(317);C40.iC();C41.setCaption("Email");C41.setDisplayPosition(13);C41.setEllipses("WORD");C41.setLeft(285);C41.setParent(this);C41.setTabPosition(13);C41.setTabStop(false);C41.setTop(60);C41.setVerticalAlignment("CENTER");C41.setHeight(20);C41.setDragStyle("AGGREGATED");C41.setWidth(317);C41.iC();C42.setDisplayPosition(14);C42.setLeft(70);C42.setParent(this);C42.setTabPosition(14);C42.setTop(2);C42.setWidth(56);C42.setImageSizing("BESTFIT");
C42.iC();C43.iC();this.setHeight(140);this.setLayoutManager(C1);this.setWidth(602);this.setDragStyle("AGGREGATED");this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.CreateInstance",59);r.ln=59;{}r.ln=61;r.e();};cO.mthONITEMGOTREFERENCE=function(p0){var m=this.REF,r=l.mR(this,cO,"OnItemGotReference",63);var P0=r.cPD("TREEITEM");P0=r.sR("TREEITEM",p0);r.ln=63;{r.ln=65;this.setrefGEMPLOYEE(l.cast(P0.getRelatedReference(),"XDEMO_32"));r.ln=67;this.mthUPDATE();
}r.ln=69;r.e();};cO.mthUPDATE=function(){var m=this.REF,r=l.mR(this,cO,"Update",71);r.ln=71;{r.ln=73;this.mthUPDATENAME(u);r.ln=75;m.LSTREET.set(m.GEMPLOYEE.getSTREET());r.ln=76;m.LCITY.set(m.GEMPLOYEE.getCITY());r.ln=77;m.LSTATEANDPOSTCODE.set(l.s.Substitute("&1, &2",m.GEMPLOYEE.getSTATE(),m.GEMPLOYEE.getPOSTCODE()));r.ln=78;m.LPHONEHOME.set(m.GEMPLOYEE.getPHONEHOME());r.ln=79;m.LPHONEWORK.set(m.GEMPLOYEE.getPHONEWORK());r.ln=80;m.LEMAILADDRESS.set(l.s.LowerCase(l.s.Substitute("&1.&2@acompany.com",m.GEMPLOYEE.getGIVENNAME(),m.GEMPLOYEE.getSURNAME())));
r.ln=81;m.EMPLOYEEIMAGE.setImage(m.GEMPLOYEE.getTHUMBNAIL());}r.ln=83;r.e();};cO.mthUPDATENAME=function(p0){var m=this.REF,r=l.mR(this,cO,"UpdateName",85);var P0=r.cP("SORT","PRIM_STR");P0.set((p0===u)?("GIVENAME"):(p0));r.ln=85;{r.ln=87;{var v1=P0.get();if(r.ln=89,l.or(l.s.eq(v1,"GIVENNAME"),l.s.eq(v1,"ID"))){r.ln=91;m.LFULLNAME.set(l.s.Substitute("&1 &2 (&3)",m.GEMPLOYEE.getGIVENNAME(),m.GEMPLOYEE.getSURNAME(),m.GEMPLOYEE.getID()));}else if(r.ln=93,l.s.eq(v1,"SURNAME")){r.ln=95;m.LFULLNAME.set(l.s.Substitute("&1, &2 (&3)",m.GEMPLOYEE.getSURNAME(),m.GEMPLOYEE.getGIVENNAME(),m.GEMPLOYEE.getID()));
}else{r.ln=99;m.LFULLNAME.set("That didn't go well");}r.ln=101;}}r.ln=103;r.e();};cO.mthONSORT=function(p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"OnSort",105);var P0=r.cPe("RESULT","EQUAL");var P1=r.cPD("TREEITEM");var P2=r.cPD("COMPARETO");var P3=r.cPD("KEY");P1=r.sR("TREEITEM",p1);P2=r.sR("COMPARETO",p2);P3=r.sR("KEY",p3);r.ln=105;{r.ln=107;m.ACTIVESORT.set(P3.get());r.ln=109;{var v1=m.ACTIVESORT.get();if(r.ln=111,l.s.eq(v1,"GIVENNAME")){r.ln=113;P0.set(l.s.Compare(m.GEMPLOYEE.getGIVENNAME(),l.cast(P2.getRelatedReference(),"XDEMO_32").getGIVENNAME()));
}else if(r.ln=115,l.s.eq(v1,"SURNAME")){r.ln=117;P0.set(l.s.Compare(m.GEMPLOYEE.getSURNAME(),l.cast(P2.getRelatedReference(),"XDEMO_32").getSURNAME()));}else if(r.ln=119,l.s.eq(v1,"ID")){r.ln=121;P0.set(l.s.Compare(m.GEMPLOYEE.getID(),l.cast(P2.getRelatedReference(),"XDEMO_32").getID()));}r.ln=123;}}r.ln=125;return r.rV(P0.get());};cO.setrefGEMPLOYEE=function(rn){this.sR("GEMPLOYEE",rn);};},{rc:["XDEMO_27"],rp:["PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_LABL","PRIM_IMAG","PRIM_STR"],
dc:["XDEMO_32"]});