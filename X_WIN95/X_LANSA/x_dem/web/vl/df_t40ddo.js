﻿LANSA.addComponent({id:"DF_T40DDO",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Reusable Drop Down",tl:15000000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",mt:{SetLabel:{ps:{"Value":{pt:"i"}}},Add:{ps:{"Caption":{pt:"i"},"Value":{pt:"i"}}},Clear:{},SelectItem:{ps:{"WithValue":{pt:"i"}}}},ev:{ItemChanged:{ps:{"Caption":{pt:"i"},"Value":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUTMANAGER","PRIM_ATLM");var C1=this.cR("PRIM_ATLI","PRIM_ATLI");var C2=this.cA("USYSTEM","VF_SY001O");
var C3=this.cR("DROPDOWN","PRIM_MD","Dropdown");C0.iC();C1.setParent(C0);C1.setManage(C3);C1.setAttachment("CENTER");C1.iC();if((C2!=null)&&(C2.iI()==false)){C2.iC();}C3.setParent(this);C3.setDisplayPosition(1);C3.setTabPosition(1);C3.setHeight(48);C3.setLeft(0);C3.setTop(0);C3.setWidth(177);C3.setHelperPosition("NONE");C3.setCaption("zzzzzzzz");C3.iC();C3.aH("CHANGED",this,e1);this.setDisplayPosition(1);this.setHeight(48);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(177);this.setTabStop(false);
this.setLayoutManager(C0);}});cO.mthSETLABEL=function(p0){var m=this.REF,r=l.mR(this,cO,"SetLabel",32);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");P0.set(p0);r.ln=32;{r.ln=35;m.DROPDOWN.setCaption(P0.get());}r.ln=37;r.e();};cO.mthADD=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"Add",41);var P0=r.cP("CAPTION","PRIM_DC","UnicodeString");var P1=r.cP("VALUE","PRIM_DC","UnicodeString");P0.set(p0);P1.set(p1);r.ln=41;{r.ln=45;m.DROPDOWN.getItems().mthADD(P1.get(),P0.get());}r.ln=47;r.e();};cO.mthCLEAR=function()
{var m=this.REF,r=l.mR(this,cO,"Clear",50);r.ln=50;{r.ln=52;m.DROPDOWN.getItems().mthREMOVEALL();}r.ln=54;r.e();};cO.mthSELECTITEM=function(p0){var m=this.REF,r=l.mR(this,cO,"SelectItem",57);var P0=r.cP("WITHVALUE","PRIM_DC","UnicodeString");P0.set(p0);r.ln=57;{r.ln=60;{var l1=m.DROPDOWN.getItems().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=61;if(l.tB(l.eq(ITEM.getValue(),P0.get()))){r.ln=62;ITEM.setFocus(true);r.ln=63;break;}r.ln=65;}l1.end();r.dR("ITEM");}}r.ln=67;r.e();};function e1(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#DropDown.Changed",70);r.ln=70;{r.ln=72;if((m.DROPDOWN.getFocusItem()!=null)){r.ln=73;{var eP=l.ePs();eP.cR("CAPTION","PRIM_DC","UnicodeString");eP.cR("VALUE","PRIM_DC","UnicodeString");eP.r("CAPTION").set(m.DROPDOWN.getFocusItem().getCaption());eP.r("VALUE").set(m.DROPDOWN.getFocusItem().getValue());this.fE("ITEMCHANGED",eP);eP.e();}}}r.ln=76;r.e();};},{rc:["VF_SY001O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_MD.Dropdown"]});