﻿LANSA.addComponent({id:"BPFPLR017",nm:"BPFPasswordResetCompletedPanelStrimgs",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Password Reset Completed Panel Strings",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"BPFLNG000",mt:{BuildDefaults:{}},co:function(){cO.aN.call(this);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance",5);r.ln=5;{r.ln=7;this.mthSETSTRINGS(this.getComponentClassName());}r.ln=9;r.e();};cO.mthBUILDDEFAULTS=function(){var r=l.mR(this,cO,"BuildDefaults",12);
r.ln=12;{r.ln=14;this.REF.STRINGSCOLLECTION.get("MAININSTRUCTION.CAPTION").set("Your password has been reset");r.ln=16;this.REF.STRINGSCOLLECTION.get("SECONDARYINSTRUCTION.CAPTION").set("You can now login using your new password");r.ln=17;this.REF.STRINGSCOLLECTION.get("PANELTEXT.CAPTION").set("We have updated your %%APP%% account password, so you can now login using your new password. Make sure you keep it safe and sound. If you have any issues please let us know at accounts@myPortal.com.au");r.ln=18;
this.REF.STRINGSCOLLECTION.get("DIALOGLOGO.CAPTION").set("Keep it safe. Make sure you keep your new %%APP%% password somewhere safe");r.ln=20;this.REF.STRINGSCOLLECTION.get("DETAILSPANELNEXTBUTTON.CAPTION").set("Done");}r.ln=22;r.e();};},{rc:["BPFLNG000"]});