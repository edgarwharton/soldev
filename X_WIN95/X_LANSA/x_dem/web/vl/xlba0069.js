﻿LANSA.addComponent({id:"XLBA0069",nm:"XInternal_PayPal_ClientConfig",ot:"rp",tp:"Reusable Part",de:"[pkg-integration-lib]",tl:14020401},function(l,oI,u){var cO=l.rC(oI,{an:"XLBA0067",pt:{ClientId_Production:{da:"na"},ClientId_Sandbox:{da:"na"}},mt:{GetSingleton:{}},co:function(){cO.aN.call(this);var C0=this.cA("XINTERNAL_PAYPAL_CLIENTCONFIG_SINGLETON","XLBA0068");this.cD("SINGLETON");if((C0!=null)&&(C0.iI()==false)){C0.iC();}this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",10);
r.ln=10;{r.ln=11;this.setrefSINGLETON(m.XINTERNAL_PAYPAL_CLIENTCONFIG_SINGLETON.ref);}r.ln=12;r.e();};cO.mthGETSINGLETON=function(){var m=this.REF,r=l.mR(this,cO,"GetSingleton",14);var P0=r.cPD("RESULT");r.ln=14;{r.ln=16;P0=r.sR("P0",m.XINTERNAL_PAYPAL_CLIENTCONFIG_SINGLETON.ref);}r.ln=17;return r.rR(P0);};cO.mthGETCLIENTIDPROD=function(){var m=this.REF,r=l.pR(this,cO,"GetClientIdProd",19);var P0=r.cP("RESULT","PRIM_DC","UnicodeString");r.ln=19;{r.ln=22;this.mthASSERTAVAILABLE();r.ln=24;P0.set(m.SINGLETON.getCLIENTID_PRODUCTION());
}r.ln=25;return r.rV(P0.get());};cO.mthGETCLIENTIDSANDBOX=function(){var m=this.REF,r=l.pR(this,cO,"GetClientIdSandbox",27);var P0=r.cP("RESULT","PRIM_DC","UnicodeString");r.ln=27;{r.ln=30;this.mthASSERTAVAILABLE();r.ln=32;P0.set(m.SINGLETON.getCLIENTID_SANDBOX());}r.ln=33;return r.rV(P0.get());};cO.getCLIENTID_PRODUCTION=function(){return this.mthGETCLIENTIDPROD();};cO.getCLIENTID_SANDBOX=function(){return this.mthGETCLIENTIDSANDBOX();};cO.setrefSINGLETON=function(rn){this.sR("SINGLETON",rn);};},
{rc:["XLBA0067","XLBA0068"],dc:["XLBA0068"]});