﻿LANSA.addComponent({id:"EM_ABOUT",nm:"EM_About",ot:"wv",tp:"View",pt:"ap",de:"Expenses About",tl:15000300},function(l,oI,u){var rc1=l.cB("em_img02.jpg");var rc2=l.cB("em_img03.jpg");var rc3=l.cB("em_img04.jpg");var rc4=l.cB("em_img05.jpg");var cO=l.rC(oI,{an:"PRIM_VIEW",co:function(){cO.aN.call(this);var C0=this.cR("STYLEIMAGES","PRIM_VS","Style");var C1=this.cR("STYLEIMAGESSHADOW","PRIM_VS","DropShadow");var C2=this.cR("STYLEIMAGESBRUSH","PRIM_VS","SolidBrush");var C3=this.cR("LAYOUTMAIN","PRIM_TBLO");
var C4=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C5=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C6=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C7=this.cR("LAYOUTPANELDESKTOP","PRIM_TBLO");var C8=this.cR("LAYOUTPANELDESKTOPCOLUMN1","PRIM_TBLO","Column");var C9=this.cR("LAYOUTPANELDESKTOPCOLUMN2","PRIM_TBLO","Column");var C10=this.cR("LAYOUTPANELDESKTOPCOLUMN3","PRIM_TBLO","Column");var C11=this.cR("LAYOUTPANELDESKTOPCOLUMN4","PRIM_TBLO","Column");var C12=this.cR("LAYOUTPANELDESKTOPROW2","PRIM_TBLO","Row");
var C13=this.cR("LAYOUTPANELDESKTOPROW3","PRIM_TBLO","Row");var C14=this.cR("LAYOUTPANELDESKTOPROW4","PRIM_TBLO","Row");var C15=this.cR("LAYOUTPANELDESKTOPROW5","PRIM_TBLO","Row");var C16=this.cR("LAYOUTPANELDESKTOPROW6","PRIM_TBLO","Row");var C17=this.cR("LAYOUTPANELDESKTOPROW7","PRIM_TBLO","Row");var C18=this.cR("LAYOUTPANELDESKTOPROW8","PRIM_TBLO","Row");var C19=this.cR("LAYOUTPANELDESKTOPROW9","PRIM_TBLO","Row");var C20=this.cR("LAYOUTPANELDESKTOPROW10","PRIM_TBLO","Row");var C21=this.cR("LAYOUTPANELDESKTOPITEM1","PRIM_TBLO","Item");
var C22=this.cR("LAYOUTPANELDESKTOPITEM2","PRIM_TBLO","Item");var C23=this.cR("LAYOUTPANELDESKTOPITEM3","PRIM_TBLO","Item");var C24=this.cR("LAYOUTPANELDESKTOPITEM5","PRIM_TBLO","Item");var C25=this.cR("LAYOUTPANELDESKTOPITEM6","PRIM_TBLO","Item");var C26=this.cR("LAYOUTPANELDESKTOPITEM7","PRIM_TBLO","Item");var C27=this.cR("LAYOUTPANELDESKTOPITEM8","PRIM_TBLO","Item");var C28=this.cR("LAYOUTPANELDESKTOPITEM9","PRIM_TBLO","Item");var C29=this.cR("LAYOUTPANELDESKTOPITEM10","PRIM_TBLO","Item");var C30=this.cR("LAYOUTPANELDESKTOPITEM11","PRIM_TBLO","Item");
var C31=this.cR("LAYOUTPANELDESKTOPITEM12","PRIM_TBLO","Item");var C32=this.cR("LAYOUTPANELDESKTOPITEM13","PRIM_TBLO","Item");var C33=this.cR("LAYOUTPANELDESKTOPITEM14","PRIM_TBLO","Item");var C34=this.cR("LAYOUTPANELMOBILE","PRIM_TBLO");var C35=this.cR("LAYOUTPANELMOBILECOLUMN2","PRIM_TBLO","Column");var C36=this.cR("LAYOUTPANELMOBILEROW1","PRIM_TBLO","Row");var C37=this.cR("LAYOUTPANELMOBILEROW2","PRIM_TBLO","Row");var C38=this.cR("LAYOUTPANELMOBILEITEM1","PRIM_TBLO","Item");var C39=this.cR("LAYOUTPANELMOBILEITEM2","PRIM_TBLO","Item");
var C40=this.cR("LAYOUTPANELMOBILEITEM3","PRIM_TBLO","Item");var C41=this.cR("LAYOUTPANELMOBILEITEM5","PRIM_TBLO","Item");var C42=this.cR("LAYOUTPANELMOBILEITEM6","PRIM_TBLO","Item");var C43=this.cR("LAYOUTPANELMOBILEITEM7","PRIM_TBLO","Item");var C44=this.cR("LAYOUTPANELMOBILEITEM8","PRIM_TBLO","Item");var C45=this.cR("LAYOUTPANELMOBILEITEM9","PRIM_TBLO","Item");var C46=this.cR("LAYOUTPANELMOBILEITEM10","PRIM_TBLO","Item");var C47=this.cR("LAYOUTPANELMOBILEITEM11","PRIM_TBLO","Item");var C48=this.cR("LAYOUTPANELMOBILEITEM12","PRIM_TBLO","Item");
var C49=this.cR("LAYOUTPANELMOBILEITEM13","PRIM_TBLO","Item");var C50=this.cR("LAYOUTPANELMOBILEITEM14","PRIM_TBLO","Item");var C51=this.cR("ABOUTPANEL","PRIM_PANL");var C52=this.cR("TEXT","PRIM_MD","Label");var C53=this.cR("TEXT1","PRIM_MD","Label");var C54=this.cR("TEXT2","PRIM_MD","Label");var C55=this.cR("TEXT3","PRIM_MD","Label");var C56=this.cR("TEXT4","PRIM_MD","Label");var C57=this.cR("TEXT5","PRIM_MD","Label");var C58=this.cR("TEXT6","PRIM_MD","Label");var C59=this.cR("TEXT8","PRIM_MD","Label");
var C60=this.cR("TEXT9","PRIM_MD","Label");var C61=this.cR("IMAGECALCULATOR","PRIM_IMAG");var C62=this.cR("IMAGECASH","PRIM_IMAG");var C63=this.cR("IMAGEBOARDINGPASS","PRIM_IMAG");var C64=this.cR("IMAGETAXI","PRIM_IMAG");C0.setBorderBottom(16);C0.setBorderBrush(C2);C0.setBorderLeft(16);C0.setBorderRight(16);C0.setBorderTop(16);C0.setEffect(C1);C0.iC();C1.setColor("0:0:0");C1.setShadowDepth(11);C1.setBlurRadius(13);C1.setDirection(306);C1.setOpacity(25);C1.iC();C2.setColor("255:255:255");C2.iC();C3.iC();
C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(1);C5.setParent(C3);C5.iC();C6.setAlignment("TOPCENTER");C6.setColumn(C5);C6.setManage(C51);C6.setParent(C3);C6.setRow(C4);C6.setSizing("CONTENTHEIGHTFITTOWIDTH");C6.iC();C7.iC();C8.setDisplayPosition(1);C8.setParent(C7);C8.iC();C9.setDisplayPosition(2);C9.setParent(C7);C9.setMaxWidth(500);C9.setWidth(16);C9.iC();C10.setDisplayPosition(3);C10.setParent(C7);C10.setMaxWidth(500);C10.setWidth(16);C10.iC();C11.setDisplayPosition(4);
C11.setParent(C7);C11.iC();C12.setDisplayPosition(2);C12.setParent(C7);C12.setHeight(249);C12.setUnits("CONTENT");C12.iC();C13.setDisplayPosition(4);C13.setParent(C7);C13.setHeight(283);C13.setUnits("CONTENT");C13.iC();C14.setDisplayPosition(6);C14.setParent(C7);C14.setHeight(484);C14.setUnits("CONTENT");C14.iC();C15.setDisplayPosition(8);C15.setParent(C7);C15.setHeight(270);C15.setUnits("CONTENT");C15.iC();C16.setDisplayPosition(1);C16.setParent(C7);C16.setUnits("CONTENT");C16.setHeight(43);C16.iC();
C17.setDisplayPosition(3);C17.setParent(C7);C17.setUnits("CONTENT");C17.setHeight(43);C17.iC();C18.setDisplayPosition(7);C18.setParent(C7);C18.setUnits("CONTENT");C18.setHeight(47);C18.iC();C19.setDisplayPosition(5);C19.setParent(C7);C19.setUnits("CONTENT");C19.setHeight(43);C19.iC();C20.setDisplayPosition(9);C20.setParent(C7);C20.setUnits("PIXELS");C20.setHeight(16);C20.iC();C21.setColumn(C10);C21.setManage(C61);C21.setParent(C7);C21.setRow(C12);C21.setSizing("CONTENTHEIGHTFITTOWIDTH");C21.setFlow("DOWN");
C21.setMarginLeft(16);C21.setMarginRight(16);C21.iC();C22.setColumn(C9);C22.setManage(C53);C22.setParent(C7);C22.setRow(C12);C22.setSizing("CONTENTHEIGHTFITTOWIDTH");C22.setFlow("DOWN");C22.setAlignment("TOPCENTER");C22.iC();C23.setColumn(C9);C23.setManage(C52);C23.setParent(C7);C23.setRow(C16);C23.setSizing("CONTENTHEIGHTFITTOWIDTH");C23.setFlow("DOWN");C23.setAlignment("TOPCENTER");C23.iC();C24.setColumn(C10);C24.setManage(C54);C24.setParent(C7);C24.setRow(C17);C24.setSizing("CONTENTHEIGHTFITTOWIDTH");
C24.setFlow("DOWN");C24.setAlignment("TOPCENTER");C24.iC();C25.setColumn(C10);C25.setManage(C55);C25.setParent(C7);C25.setRow(C13);C25.setSizing("CONTENTHEIGHTFITTOWIDTH");C25.setFlow("DOWN");C25.setAlignment("TOPCENTER");C25.iC();C26.setColumn(C9);C26.setManage(C62);C26.setParent(C7);C26.setRow(C13);C26.setSizing("CONTENTHEIGHTFITTOWIDTH");C26.setFlow("CENTERVERTICAL");C26.setMarginLeft(16);C26.setMarginRight(16);C26.iC();C27.setManage(C63);C27.setParent(C7);C27.setRow(C14);C27.setSizing("CONTENTHEIGHTFITTOWIDTH");
C27.setColumn(C10);C27.setFlow("CENTERVERTICAL");C27.setMarginLeft(16);C27.setMarginRight(16);C27.iC();C28.setManage(C58);C28.setParent(C7);C28.setRow(C14);C28.setSizing("CONTENTHEIGHTFITTOWIDTH");C28.setColumn(C9);C28.setFlow("DOWN");C28.setAlignment("TOPCENTER");C28.iC();C29.setManage(C57);C29.setParent(C7);C29.setRow(C14);C29.setSizing("CONTENTHEIGHTFITTOWIDTH");C29.setColumn(C9);C29.setFlow("DOWN");C29.setAlignment("TOPCENTER");C29.iC();C30.setManage(C56);C30.setParent(C7);C30.setRow(C19);C30.setSizing("CONTENTHEIGHTFITTOWIDTH");
C30.setColumn(C9);C30.setFlow("DOWN");C30.setAlignment("TOPCENTER");C30.iC();C31.setManage(C60);C31.setParent(C7);C31.setRow(C15);C31.setSizing("CONTENTHEIGHTFITTOWIDTH");C31.setColumn(C10);C31.setFlow("DOWN");C31.setAlignment("TOPCENTER");C31.iC();C32.setManage(C59);C32.setParent(C7);C32.setRow(C18);C32.setSizing("CONTENTHEIGHTFITTOWIDTH");C32.setColumn(C10);C32.setFlow("DOWN");C32.setAlignment("TOPCENTER");C32.iC();C33.setManage(C64);C33.setParent(C7);C33.setRow(C15);C33.setSizing("CONTENTHEIGHTFITTOWIDTH");
C33.setColumn(C9);C33.setMarginLeft(16);C33.setMarginRight(16);C33.iC();C34.iC();C35.setDisplayPosition(1);C35.setParent(C34);C35.iC();C36.setDisplayPosition(1);C36.setParent(C34);C36.setHeight(1843);C36.setUnits("CONTENT");C36.iC();C37.setDisplayPosition(2);C37.setParent(C34);C37.setUnits("PIXELS");C37.setHeight(16);C37.iC();C38.setAlignment("TOPCENTER");C38.setColumn(C35);C38.setManage(C52);C38.setParent(C34);C38.setRow(C36);C38.setSizing("FITTOWIDTH");C38.setFlow("DOWN");C38.iC();C39.setAlignment("TOPCENTER");
C39.setColumn(C35);C39.setManage(C53);C39.setParent(C34);C39.setRow(C36);C39.setSizing("CONTENTHEIGHTFITTOWIDTH");C39.setFlow("DOWN");C39.iC();C40.setAlignment("TOPCENTER");C40.setColumn(C35);C40.setManage(C61);C40.setParent(C34);C40.setRow(C36);C40.setSizing("CONTENTHEIGHT");C40.setFlow("DOWN");C40.setMarginLeft(16);C40.setMarginRight(16);C40.iC();C41.setAlignment("TOPCENTER");C41.setColumn(C35);C41.setManage(C62);C41.setParent(C34);C41.setRow(C36);C41.setSizing("NONE");C41.setFlow("DOWN");C41.setMarginLeft(16);
C41.setMarginRight(16);C41.iC();C42.setAlignment("TOPCENTER");C42.setColumn(C35);C42.setManage(C55);C42.setParent(C34);C42.setRow(C36);C42.setSizing("CONTENTHEIGHTFITTOWIDTH");C42.setFlow("DOWN");C42.iC();C43.setAlignment("TOPCENTER");C43.setColumn(C35);C43.setManage(C54);C43.setParent(C34);C43.setRow(C36);C43.setSizing("NONE");C43.setFlow("DOWN");C43.iC();C44.setAlignment("TOPCENTER");C44.setColumn(C35);C44.setManage(C56);C44.setParent(C34);C44.setRow(C36);C44.setSizing("NONE");C44.setFlow("DOWN");
C44.iC();C45.setAlignment("TOPCENTER");C45.setColumn(C35);C45.setManage(C57);C45.setParent(C34);C45.setRow(C36);C45.setSizing("CONTENTHEIGHTFITTOWIDTH");C45.setFlow("DOWN");C45.iC();C46.setAlignment("TOPCENTER");C46.setColumn(C35);C46.setManage(C58);C46.setParent(C34);C46.setRow(C36);C46.setSizing("CONTENTHEIGHTFITTOWIDTH");C46.setFlow("DOWN");C46.iC();C47.setAlignment("TOPCENTER");C47.setColumn(C35);C47.setManage(C63);C47.setParent(C34);C47.setRow(C36);C47.setSizing("NONE");C47.setFlow("DOWN");C47.setMarginLeft(16);
C47.setMarginRight(16);C47.iC();C48.setAlignment("TOPCENTER");C48.setColumn(C35);C48.setManage(C64);C48.setParent(C34);C48.setRow(C36);C48.setSizing("NONE");C48.setFlow("DOWN");C48.setMarginLeft(16);C48.setMarginRight(16);C48.iC();C49.setAlignment("TOPCENTER");C49.setColumn(C35);C49.setManage(C60);C49.setParent(C34);C49.setRow(C36);C49.setSizing("CONTENTHEIGHTFITTOWIDTH");C49.setFlow("DOWN");C49.iC();C50.setAlignment("TOPCENTER");C50.setColumn(C35);C50.setManage(C59);C50.setParent(C34);C50.setRow(C36);
C50.setSizing("NONE");C50.setFlow("DOWN");C50.iC();C51.setParent(this);C51.setDisplayPosition(1);C51.setTabPosition(1);C51.setHeight(1478);C51.setLeft(0);C51.setTop(0);C51.setWidth(1079);C51.setVerticalScroll(true);C51.setLayoutManager(C7);C51.iC();C52.setCaption("Who are we?");C52.setDisplayPosition(1);C52.setHeight(43);C52.setLeft(40);C52.setParent(C51);C52.setTabPosition(13);C52.setThemeDrawStyle("Heading1");C52.setCaptionMarginBottom(0);C52.setCaptionMarginLeft(0);C52.setCaptionMarginRight(0);
C52.setCaptionMarginTop(0);C52.setPaddingTop(16);C52.setWidth(500);C52.setTop(0);C52.setCaptionAlignment("CENTER");C52.iC();C53.setCaption("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum nisi eu euismod eleifend. Suspendisse nec risus eu sapien lacinia rhoncus. In quis felis pretium, imperdiet mi sit amet, vehicula nisl. Donec bibendum vel lectus ut lacinia. Quisque arcu dui, tempor id eros ut, elementum aliquam arcu. Nulla facilisi. Etiam bibendum mauris sed arcu malesuada elementum. Nulla ornare leo vel dui blandit posuere. Maecenas congue magna eget ipsum congue viverra. In leo augue, malesuada eu arcu non, rhoncus tincidunt nisi. Donec sit amet ultrices nisl. Quisque efficitur ullamcorper purus non convallis. Maecenas nec sodales est. Etiam et est ullamcorper, suscipit eros blandit, bibendum magna. Phasellus lacinia varius consequat.");
C53.setDisplayPosition(2);C53.setLeft(40);C53.setParent(C51);C53.setTabPosition(7);C53.setTop(43);C53.setWidth(500);C53.setHeight(249);C53.setWordWrap(true);C53.setCaptionMarginBottom(0);C53.setCaptionMarginLeft(0);C53.setCaptionMarginRight(0);C53.setCaptionMarginTop(0);C53.setPaddingBottom(32);C53.setPaddingLeft(16);C53.setPaddingRight(16);C53.setPaddingTop(32);C53.iC();C54.setCaption("What do we do?");C54.setDisplayPosition(4);C54.setLeft(540);C54.setParent(C51);C54.setTabPosition(9);C54.setThemeDrawStyle("Text(255,255,255,1)+Heading1");
C54.setHeight(43);C54.setCaptionMarginBottom(0);C54.setCaptionMarginLeft(0);C54.setCaptionMarginRight(0);C54.setCaptionMarginTop(0);C54.setWidth(500);C54.setTop(292);C54.setPaddingTop(16);C54.setCaptionAlignment("CENTER");C54.iC();C55.setCaption("Nulla dignissim lacus sit amet faucibus pulvinar. Aliquam erat volutpat. Phasellus at tellus tortor. Quisque ut metus non nisi scelerisque pellentesque ut eu massa. Maecenas luctus commodo nisl, non imperdiet sem dapibus vitae. Morbi ac turpis vel nunc feugiat volutpat. Quisque tincidunt ipsum justo, vel lacinia nisi egestas egestas. Vestibulum justo risus, tempor vitae mauris non, iaculis convallis lacus. Morbi vel est eget tortor consequat suscipit. Ut accumsan, purus eget dapibus vestibulum, diam lacus pretium nunc, sit amet vehicula dui ipsum et leo. Vestibulum quis dictum ligula. Nulla mattis diam eget massa pharetra iaculis. Sed ornare, dui aliquam molestie consequat, enim urna elementum lacus, eu gravida magna turpis eget lectus. Phasellus et varius mi. Maecenas viverra justo eget magna tristique, ut consectetur libero tempor. Morbi at odio ac velit elementum.");
C55.setDisplayPosition(5);C55.setLeft(540);C55.setParent(C51);C55.setTabPosition(4);C55.setTop(335);C55.setWidth(500);C55.setHeight(283);C55.setWordWrap(true);C55.setCaptionMarginBottom(0);C55.setCaptionMarginTop(0);C55.setCaptionMarginLeft(0);C55.setCaptionMarginRight(0);C55.setPaddingBottom(32);C55.setThemeDrawStyle("Text(255,255,255,1)");C55.setPaddingLeft(16);C55.setPaddingRight(16);C55.setPaddingTop(32);C55.iC();C56.setCaption("Our Mission");C56.setDisplayPosition(7);C56.setLeft(40);C56.setParent(C51);
C56.setTabPosition(6);C56.setThemeDrawStyle("Heading1");C56.setTop(618);C56.setHeight(43);C56.setCaptionMarginLeft(0);C56.setCaptionMarginRight(0);C56.setCaptionMarginBottom(0);C56.setCaptionMarginTop(0);C56.setPaddingTop(16);C56.setCaptionAlignment("CENTER");C56.setWidth(500);C56.iC();C57.setCaption("Phasellus aliquet at nulla et condimentum. Integer eget nisi in est varius consequat. Praesent felis risus, blandit in risus quis, imperdiet pharetra urna. Morbi justo felis, ultricies a neque sit amet, ultrices consequat tortor. Integer non erat dignissim, posuere urna eget, ullamcorper sapien. Nam venenatis odio non nulla facilisis pretium. Aenean purus purus, suscipit at posuere ut, feugiat a dolor. Aliquam eu purus a est tempor pulvinar et sodales diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum porta, hendrerit libero ornare, aliquam nulla. Suspendisse suscipit, eros vel rutrum sagittis, risus orci suscipit lectus, a feugiat turpis diam suscipit quam. Praesent tellus augue, fermentum non justo nec, volutpat sagittis eros. Vestibulum luctus, nibh at varius volutpat, lorem risus feugiat enim, ut volutpat purus dui ac enim. Integer iaculis imperdiet orci vitae ultrices.");
C57.setDisplayPosition(8);C57.setLeft(40);C57.setParent(C51);C57.setTabPosition(8);C57.setTop(661);C57.setWidth(500);C57.setHeight(267);C57.setCaptionMarginLeft(0);C57.setCaptionMarginRight(0);C57.setCaptionMarginTop(0);C57.setCaptionMarginBottom(0);C57.setWordWrap(true);C57.setPaddingBottom(16);C57.setPaddingLeft(16);C57.setPaddingRight(16);C57.setPaddingTop(32);C57.iC();C58.setCaption("Praesent dolor velit, tincidunt sit amet urna sed, faucibus bibendum elit. Mauris eget dolor dolor. Nullam aliquet lectus ac quam scelerisque ultricies. Maecenas fermentum dapibus semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ac mi mollis elit blandit ullamcorper. Suspendisse pharetra, ligula sit amet fringilla semper, neque urna cursus tortor, ac convallis nunc lectus dictum enim. Morbi a orci venenatis, pellentesque nibh vitae, ultrices risus. Sed tincidunt ligula eget iaculis hendrerit. In hac habitasse platea dictumst. Nam a nulla sit amet risus tempor sollicitudin vel at libero. Nam vel volutpat odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis ut sapien ac metus lobortis varius.");
C58.setDisplayPosition(9);C58.setLeft(40);C58.setParent(C51);C58.setTabPosition(2);C58.setTop(928);C58.setWidth(500);C58.setHeight(217);C58.setCaptionMarginBottom(0);C58.setCaptionMarginLeft(0);C58.setCaptionMarginRight(0);C58.setCaptionMarginTop(0);C58.setWordWrap(true);C58.setPaddingBottom(32);C58.setPaddingLeft(16);C58.setPaddingRight(16);C58.iC();C59.setCaption("How can we help?");C59.setDisplayPosition(11);C59.setHeight(47);C59.setLeft(540);C59.setParent(C51);C59.setTabPosition(1);C59.setPaddingTop(16);
C59.setCaptionAlignment("CENTER");C59.setThemeDrawStyle("Heading1");C59.setWidth(500);C59.setTop(1145);C59.iC();C60.setCaption("Suspendisse orci tellus, pulvinar at suscipit non, dapibus quis diam. Nulla facilisi. Vestibulum elementum accumsan posuere. Vivamus pulvinar porta neque, ac efficitur ex vehicula non. Sed enim odio, mattis quis ornare nec, egestas id odio. Proin elementum pharetra ipsum vel iaculis. Aenean ultrices purus nec tellus dictum, vitae pharetra mi dictum. Donec eu nibh risus. Quisque elementum eget tellus et lacinia. Cras cursus viverra leo, id luctus magna dignissim et. Phasellus sagittis blandit lorem, ac scelerisque lectus ornare vitae. Aliquam varius, augue in sollicitudin malesuada, dui nulla facilisis justo, ut volutpat felis dolor vel orci. Fusce et suscipit nibh, et aliquet sem. Maecenas iaculis, sapien a placerat lacinia, nisl sapien aliquam leo, quis aliquet ipsum odio vel leo. Sed et feugiat tellus, vel sagittis est. Aliquam ut turpis diam.");
C60.setDisplayPosition(12);C60.setLeft(540);C60.setParent(C51);C60.setTabPosition(3);C60.setWidth(500);C60.setHeight(270);C60.setPaddingBottom(32);C60.setWordWrap(true);C60.setPaddingLeft(16);C60.setPaddingRight(16);C60.setTop(1192);C60.setPaddingTop(32);C60.iC();C61.setDisplayPosition(3);C61.setHeight(245);C61.setImage(rc1);C61.setLeft(556);C61.setParent(C51);C61.setTabPosition(12);C61.setTabStop(false);C61.setTop(45);C61.setWidth(468);C61.setStyle(C0);C61.setImageSizing("CROPPED");C61.iC();C62.setDisplayPosition(6);
C62.setHeight(250);C62.setImage(rc2);C62.setLeft(56);C62.setParent(C51);C62.setTabPosition(11);C62.setTabStop(false);C62.setTop(351);C62.setWidth(468);C62.setStyle(C0);C62.setImageSizing("CROPPED");C62.iC();C63.setDisplayPosition(10);C63.setHeight(245);C63.setImage(rc3);C63.setLeft(556);C63.setParent(C51);C63.setTabPosition(10);C63.setTabStop(false);C63.setTop(781);C63.setWidth(468);C63.setStyle(C0);C63.setImageSizing("CROPPED");C63.iC();C64.setDisplayPosition(13);C64.setHeight(250);C64.setImage(rc4);
C64.setLeft(56);C64.setParent(C51);C64.setTabPosition(5);C64.setTabStop(false);C64.setWidth(468);C64.setStyle(C0);C64.setImageSizing("CROPPED");C64.setTop(1202);C64.iC();l.WEB().aH("DEVICECHANGED",this,e1);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1097);this.setHeight(1041);this.setThemeDrawStyle("DarkTitle");this.setVerticalScroll(true);this.setLayoutManager(C3);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_web.DeviceChanged",75);r.ln=75;{r.ln=77;if(l.s.eq(l.WEB().getDevice(),"MOBILE"))
{r.ln=79;m.ABOUTPANEL.setLayoutManager(m.LAYOUTPANELMOBILE);}else{r.ln=83;m.ABOUTPANEL.setLayoutManager(m.LAYOUTPANELDESKTOP);}}r.ln=86;r.e();};},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_VS.DropShadow","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_PANL","PRIM_MD.Label","PRIM_IMAG"]});