﻿LANSA.addComponent({id:"VF_CH200O",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=Server Handler Command Handler",tl:15000000},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC010O",mt:{uInitialize:{},uTerminate:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cA("SERVERHANDLERMANAGER","VF_SY200O");if((C0!=null)&&(C0.iI()==false)){C0.iC();}}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",9);
r.ln=9;{r.ln=12;cA.mthUINITIALIZE.call(this);r.ln=15;m.SERVERHANDLERMANAGER.ref.mthZINT_INITIALIZECOMMANDHANDLER(this);}r.ln=17;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",20);r.ln=20;{r.ln=23;m.SERVERHANDLERMANAGER.ref.mthZINT_TERMINATECOMMANDHANDLER(this);r.ln=26;cA.mthUTERMINATE.call(this);}r.ln=28;r.e();};cO.mthUEXECUTE=function(p0,p1){var r=l.mR(this,cO,"uExecute",31);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());
P1=r.sR("SWITCHCALLERREFERENCE",p1);r.ln=31;{r.ln=33;cA.mthUEXECUTE.call(this,P0,P1);p0.set(P0.get());}r.ln=35;r.e();};},{rc:["VF_AC010O","VF_SY200O"]});