﻿LANSA.addComponent({id:"CT_TAG",ot:"rp",tp:"Reusable Part",pt:"ap",de:"TAG",tl:15000300},function(l,oI,u){var rc1=l.cB("ct_imgtag.png");var cO=l.rC(oI,{an:"PRIM_PANL",mt:{ShowMessage:{ps:{"Message":{pt:"i"},"MessageType":{pt:"i"},"FadeIn":{pt:"i"},"Delay":{pt:"i"}}},HideMessage:{ps:{"FadeOut":{pt:"i"},"Delay":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C2=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");
var C4=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C5=this.cR("TAG","PRIM_IMAG");var C6=this.cR("LABELMESSAGE","PRIM_MD","Label");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("TOPCENTER");C3.setColumn(C2);C3.setParent(C0);C3.setRow(C1);C3.setManage(C5);C3.iC();C4.setAlignment("TOPCENTER");C4.setColumn(C2);C4.setManage(C6);C4.setParent(C0);C4.setRow(C1);C4.setMarginBottom(8);C4.setMarginLeft(8);C4.setMarginRight(15);
C4.setMarginTop(8);C4.iC();C5.setDisplayPosition(2);C5.setImage(rc1);C5.setParent(this);C5.setTabPosition(1);C5.setWidth(150);C5.setLeft(0);C5.setHeight(70);C5.setTop(0);C5.setImageSizing("FITBOTH");C5.iC();C6.setParent(this);C6.setDisplayPosition(1);C6.setTabPosition(2);C6.setHeight(54);C6.setLeft(8);C6.setTop(8);C6.setWidth(127);C6.setThemeDrawStyle("ForegroundMediumSuccess");C6.setWordWrap(true);C6.setCaptionAlignment("CENTER");C6.iC();this.setDisplayPosition(1);this.setHeight(70);this.setLeft(0);
this.setTabPosition(1);this.setTop(0);this.setWidth(150);this.setLayoutManager(C0);this.setVisible(false);}});cO.mthSHOWMESSAGE=function(p0,p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"ShowMessage",14);var P0=r.cP("MESSAGE","PRIM_STR");var P1=r.cP("MESSAGETYPE","PRIM_STR");var P2=r.cP("FADEIN","PRIM_NMBR");var P3=r.cP("DELAY","PRIM_NMBR");P0.set(p0);P1.set((p1===u)?("ERROR"):(p1));P2.set((p2===u)?(300):(p2));P3.set((p3===u)?(0):(p3));r.ln=14;{r.ln=19;m.LABELMESSAGE.set(P0.get());r.ln=21;{var v1=l.s.UpperCase(P1.get());
if(r.ln=23,l.or(l.s.eq(v1,"ERROR"),l.s.eq(v1,"ER"))){r.ln=25;m.LABELMESSAGE.setThemeDrawStyle("ForegroundMediumError+Subheading");}else if(r.ln=27,l.or(l.s.eq(v1,"WARNING"),l.s.eq(v1,"WN"))){r.ln=29;m.LABELMESSAGE.setThemeDrawStyle("ForegroundMediumAccent+Subheading");}else if(r.ln=31,l.s.eq(v1,"OK")){r.ln=33;m.LABELMESSAGE.setThemeDrawStyle("ForegroundMediumSuccess+Subheading");}else{r.ln=37;m.LABELMESSAGE.setThemeDrawStyle("ForegroundTheme+Subheading");}r.ln=39;}r.ln=42;cO.mthFADEIN.call(this,P2.get(),P3.get());
}r.ln=44;r.e();};cO.mthHIDEMESSAGE=function(p0,p1){var r=l.mR(this,cO,"HideMessage",47);var P0=r.cP("FADEOUT","PRIM_NMBR");var P1=r.cP("DELAY","PRIM_NMBR");P0.set((p0===u)?(300):(p0));P1.set((p1===u)?(0):(p1));r.ln=47;{r.ln=51;cO.mthFADEOUT.call(this,P0.get(),P1.get(),false);}r.ln=53;r.e();};},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_IMAG","PRIM_MD.Label"],dp:["PRIM_ANIM"]});