﻿LANSA.addComponent({id:"XDEMOW_50",nm:"xDemoWebDesignBasics",ot:"wp",tp:"Web Page",pt:"ap",de:"Design Basics",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("DESIGNS","PRIM_DESN");var C1=this.cR("MEDIUM","PRIM_DESN","Design");var C2=this.cR("SMALL","PRIM_DESN","Design");var C3=this.cR("LAYOUTLARGE","PRIM_TBLO");var C4=this.cR("COLUMN1","PRIM_TBLO","Column");var C5=this.cR("COLUMN2","PRIM_TBLO","Column");var C6=this.cR("ROW1","PRIM_TBLO","Row");
var C7=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTSMALL","PRIM_TBLO");var C12=this.cR("COLUMN3","PRIM_TBLO","Column");var C13=this.cR("ROW2","PRIM_TBLO","Row");var C14=this.cR("ROW3","PRIM_TBLO","Row");var C15=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C17=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");
var C18=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C19=this.cR("LABEL","PRIM_LABL");var C20=this.cR("XDEMOWEBDESIGNBASICSPART1","XDEMO_55");var C21=this.cR("XDEMOWEBDESIGNBASICSPART2","XDEMO_56");var C22=this.cR("ACTIVEDESIGN","PRIM_LABL");C0.iC();C1.setDesignManager(C0);C1.setWidth(1200);C1.iC();C2.setDesignManager(C0);C2.setWidth(600);C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(2);C5.setParent(C3);C5.iC();C6.setDisplayPosition(1);C6.setParent(C3);C6.iC();
C7.setAlignment("TOPRIGHT");C7.setColumn(C5);C7.setManage(C19);C7.setParent(C3);C7.setRow(C6);C7.setSizing("NONE");C7.setMarginTop(4);C7.setMarginRight(4);C7.setFlow("DOWN");C7.iC();C8.setColumn(C4);C8.setManage(C20);C8.setParent(C3);C8.setRow(C6);C8.iC();C9.setAlignment("TOPRIGHT");C9.setColumn(C5);C9.setManage(C22);C9.setParent(C3);C9.setRow(C6);C9.setSizing("CONTENTWIDTHANDHEIGHT");C9.setFlow("DOWN");C9.setMarginRight(4);C9.setMarginTop(4);C9.iC();C10.setColumn(C5);C10.setManage(C21);C10.setParent(C3);
C10.setRow(C6);C10.iC();C11.iC();C12.setDisplayPosition(1);C12.setParent(C11);C12.iC();C13.setDisplayPosition(1);C13.setParent(C11);C13.iC();C14.setDisplayPosition(2);C14.setParent(C11);C14.iC();C15.setColumn(C12);C15.setManage(C19);C15.setParent(C11);C15.setRow(C13);C15.setSizing("NONE");C15.setAlignment("TOPLEFT");C15.setMarginTop(4);C15.setMarginLeft(4);C15.setFlow("DOWN");C15.iC();C16.setColumn(C12);C16.setManage(C20);C16.setParent(C11);C16.setRow(C13);C16.iC();C17.setColumn(C12);C17.setManage(C21);
C17.setParent(C11);C17.setRow(C14);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C12);C18.setManage(C22);C18.setParent(C11);C18.setRow(C13);C18.setSizing("NONE");C18.setFlow("DOWN");C18.setMarginLeft(4);C18.setMarginTop(4);C18.iC();C19.setCaption("Resize the browser to see different designs applied");C19.setDisplayPosition(1);C19.setEllipses("WORD");C19.setHeight(53);C19.setLeft(440);C19.setParent(this);C19.setTabPosition(1);C19.setTabStop(false);C19.setTop(4);C19.setVerticalAlignment("CENTER");
C19.setWidth(293);C19.setThemeDrawStyle("Heading1+MediumTitle");C19.setMarginLeft(2);C19.setAlignment("CENTER");C19.iC();C20.setDisplayPosition(3);C20.setParent(this);C20.setTabPosition(3);C20.setTabStop(false);C20.setHeight(360);C20.setWidth(369);C20.iC();C21.setDisplayPosition(4);C21.setParent(this);C21.setTabPosition(4);C21.setTabStop(false);C21.setHeight(360);C21.setWidth(368);C21.setLeft(369);C21.iC();C22.setCaption("Showing the default design");C22.setDisplayPosition(2);C22.setEllipses("WORD");
C22.setHeight(25);C22.setLeft(544);C22.setParent(this);C22.setTabPosition(2);C22.setTabStop(false);C22.setTop(61);C22.setVerticalAlignment("CENTER");C22.setWidth(189);C22.setThemeDrawStyle("MediumTitle");C22.setMarginLeft(4);C22.setMarginRight(4);C22.setMarginTop(4);C22.setMarginBottom(4);C22.iC();this.setHeight(360);this.setWidth(737);this.setLayoutManager(C3);this.setDesignManager(C0);this.setTheme(l.THEME().get("2015BLUEGRAY"));this.setThemeDrawStyle("Heading3+AlternateItem");this.aH("DESIGNCHANGED",this,e1);
}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.DesignChanged",30);var P0=Ps.r("DESIGN");r.ln=30;{r.ln=35;if((P0==null)){r.ln=37;this.setLayoutManager(m.LAYOUTLARGE);r.ln=39;m.ACTIVEDESIGN.set("Showing the default design");}else{r.ln=43;if((P0===m.MEDIUM)){r.ln=45;this.setLayoutManager(m.LAYOUTLARGE);r.ln=47;m.ACTIVEDESIGN.set("Showing the \"medium\" design");}r.ln=51;if((P0===m.SMALL)){r.ln=53;this.setLayoutManager(m.LAYOUTSMALL);r.ln=55;m.ACTIVEDESIGN.set("Showing the \"small\" design");
}}}r.ln=61;r.e();};},{rc:["XDEMO_55","XDEMO_56"],rp:["PRIM_WEB","PRIM_DESN","PRIM_DESN.Design","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL"]});