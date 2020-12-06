﻿LANSA.addComponent({id:"A01QUICKL",nm:"A01QuickLinks",ot:"wv",tp:"View",pt:"ap",de:"QuickLinks",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{AddAssistanceItem:{ps:{"Caption":{pt:"i"},"URL":{pt:"i"},"Icon":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("MAINLAYOUTMANAGER","PRIM_ATLM");var C1=this.cR("MAINLAYOUTITEM_2","PRIM_ATLI");var C2=this.cR("MAINLAYOUTITEM_3","PRIM_ATLI");var C3=this.cR("INTRODUCTION","PRIM_MD","Label");var C4=this.cR("LAYOUTLIST","PRIM_TBLO");var C5=this.cR("LAYOUTLISTCOLUMN1","PRIM_TBLO","Column");
var C6=this.cR("LAYOUTLISTROW1","PRIM_TBLO","Row");var C7=this.cR("LAYOUTLISTITEM1","PRIM_TBLO","Item");var C8=this.cR("LAYOUTLISTITEM2","PRIM_TBLO","Item");var C9=this.cR("URL_LIST","PRIM_MD","List");var C10=this.cR("LISTICON","PRIM_MD","ListIcon");var C11=this.cR("LISTPRIMARYTEXT","PRIM_MD","ListLabel");var C12=this.cR("ASSOCIATEDURL","PRIM_MD","ListLabel");var C13=this.cR("LIKEURLOVERSTYLE","PRIM_VS","Style");var C14=this.cR("NOBORDERS","PRIM_VS","Style");C0.iC();C1.setManage(C3);C1.setParent(C0);
C1.setAttachment("TOP");C1.setMarginBottom(8);C1.setMarginLeft(8);C1.setMarginRight(8);C1.setMarginTop(8);C1.setSizing("CONTENTWIDTHANDHEIGHT");C1.iC();C2.setManage(C9);C2.setParent(C0);C2.setAttachment("CENTER");C2.iC();C3.setCaptionAlignment("TOPLEFT");C3.setDisplayPosition(1);C3.setHeight(62);C3.setLeft(8);C3.setParent(this);C3.setTabPosition(2);C3.setTop(8);C3.setWidth(284);C3.setWordWrap(true);C3.setCaption("Quick Links. Please select the topic or area you need assistance with ... ");C3.setThemeDrawStyle("Heading3+ForegroundMediumPrimary");
C3.iC();C4.iC();C5.setDisplayPosition(1);C5.setParent(C4);C5.iC();C6.setDisplayPosition(1);C6.setParent(C4);C6.iC();C7.setAlignment("CENTERLEFT");C7.setColumn(C5);C7.setManage(C10);C7.setMarginLeft(8);C7.setParent(C4);C7.setRow(C6);C7.setSizing("NONE");C7.iC();C8.setAlignment("CENTERLEFT");C8.setColumn(C5);C8.setManage(C11);C8.setMarginLeft(68);C8.setMarginRight(16);C8.setParent(C4);C8.setRow(C6);C8.setSizing("CONTENTWIDTHANDHEIGHT");C8.iC();C9.setDisplayPosition(2);C9.setLayoutManager(C4);C9.setLeft(0);
C9.setParent(this);C9.setRowHeight(56);C9.setTabPosition(1);C9.setThemeDrawStyle("Card");C9.setTop(78);C9.setHeight(372);C9.setWidth(300);C9.setStyle(C14);C9.iC();C10.setDisplayPosition(1);C10.setHeight(40);C10.setIcon("image");C10.setIconImageSizing("CROPPED");C10.setLeft(8);C10.setParent(C9);C10.setTabPosition(1);C10.setThemeDrawStyle("MediumTitle+Rounded");C10.setTop(8);C10.setWidth(40);C10.iC();C11.setCaption("Single line item");C11.setDisplayPosition(3);C11.setHeight(24);C11.setLeft(52);C11.setParent(C9);
C11.setTabPosition(3);C11.setThemeDrawStyle("Heading3+ForegroundMediumPrimary");C11.setTop(16);C11.setWidth(113);C11.setMouseOverStyle(C13);C11.iC();C12.setParent(C9);C12.setVisible(false);C12.setDisplayPosition(4);C12.setTabPosition(4);C12.iC();C13.setUnderline(true);C13.setCursor("HAND");C13.iC();C14.setBorderBottom(0);C14.setBorderLeft(0);C14.setBorderRight(0);C14.setBorderTop(0);C14.iC();C9.aH("ITEMCLICK",this,e3);this.setDisplayPosition(1);this.setTabPosition(1);this.setCaption("Assitance");
this.setLayoutManager(C0);this.aH("PREPARE",this,e1);this.aH("CLOSED",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_Owner.Prepare",28);r.ln=28;{r.ln=30;if(l.n.eq(m.URL_LIST.getItems().getItemCount(),0)){r.ln=34;this.mthADDASSISTANCEITEM("IBM Products and Services","https://www.ibm.com/","computer");r.ln=35;this.mthADDASSISTANCEITEM("Apple Products and Services","https://www.apple.com/","desktop_mac");r.ln=36;this.mthADDASSISTANCEITEM("Microsoft Products and Services","https://www.microsoft.com/","desktop_windows");
r.ln=37;this.mthADDASSISTANCEITEM("LANSA Developer home","https://developer.lansa.com/","fa-heart");r.ln=38;this.mthADDASSISTANCEITEM("LANSA Documentation","https://docs.lansa.com/14/en/","folder_shared");r.ln=39;this.mthADDASSISTANCEITEM("Google Maps API Documentation","https://developers.google.com/maps/documentation/","map");r.ln=40;this.mthADDASSISTANCEITEM("Google Translate API Documentation","https://cloud.google.com/translate/docs/","g_translate");r.ln=41;this.mthADDASSISTANCEITEM("User Forum","https://forum.developer.lansa.com/","forum");
}}r.ln=49;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Closed",51);r.ln=51;{r.ln=53;m.URL_LIST.clearList();}r.ln=55;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#URL_List.ItemClick",57);r.ln=57;{r.ln=59;if((m.URL_LIST.getCurrentItem()!=null)){r.ln=61;l.WEB().mthNAVIGATE(m.ASSOCIATEDURL.getCurrentItem().getCaption(),"NEW");}}r.ln=65;r.e();};cO.mthADDASSISTANCEITEM=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"AddAssistanceItem",71);var P0=r.cP("CAPTION","PRIM_DC","UnicodeString");
var P1=r.cP("URL","PRIM_ALPH");var P2=r.cP("ICON","PRIM_ALPH");P0.set(p0);P1.set(p1);P2.set(p2);r.ln=71;{r.ln=76;m.URL_LIST.addEntry();r.ln=77;m.LISTICON.getCurrentItem().setIcon(P2.get());r.ln=78;m.LISTPRIMARYTEXT.getCurrentItem().setCaption(P0.get());r.ln=79;m.ASSOCIATEDURL.getCurrentItem().setCaption(P1.get());}r.ln=81;r.e();};},{rp:["PRIM_VIEW","PRIM_ATLM","PRIM_ATLI","PRIM_MD.Label","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.List","PRIM_MD.ListIcon","PRIM_MD.ListLabel","PRIM_VS.Style"]
});