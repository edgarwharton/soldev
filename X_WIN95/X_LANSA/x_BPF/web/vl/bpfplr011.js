﻿LANSA.addComponent({id:"BPFPLR011",nm:"BPFForgetPasswordRequestPanelStrings",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Forget Password Request Panel Strings",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"BPFLNG000",mt:{BuildDefaults:{}},co:function(){cO.aN.call(this);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance",5);r.ln=5;{r.ln=7;this.mthSETSTRINGS(this.getComponentClassName());}r.ln=9;r.e();};cO.mthBUILDDEFAULTS=function(){var r=l.mR(this,cO,"BuildDefaults",12);
r.ln=12;{r.ln=14;this.REF.STRINGSCOLLECTION.get("MAININSTRUCTION.CAPTION").set("Recover your %%APP%% account password");r.ln=15;this.REF.STRINGSCOLLECTION.get("SECONDARINSTRUCTION.CAPTION").set("Confirm the email address of your account");r.ln=17;this.REF.STRINGSCOLLECTION.get("BODYTEXT.CAPTION").set("Once you confirm your email address we will send you a message with the steps to follow to recover your password. If you have any issues just lets use now at accounts@myPortal.com.au");r.ln=18;this.REF.STRINGSCOLLECTION.get("DIALOGLOGO.CAPTION").set("%%APP%%. Email help is on it way, hold tight");
r.ln=20;this.REF.STRINGSCOLLECTION.get("CONFIRMEMAILEDIT.CAPTION").set("Your email");r.ln=21;this.REF.STRINGSCOLLECTION.get("CONFIRMEMAILEDIT.HELPERTEXT").set("If this isnt right just change it");r.ln=23;this.REF.STRINGSCOLLECTION.get("DETAILSPANELACTIONBUTTON.CAPTION").set("Back");r.ln=24;this.REF.STRINGSCOLLECTION.get("DETAILSPANELNEXTBUTTON.CAPTION").set("Confirm");r.ln=26;this.REF.STRINGSCOLLECTION.get("CONFIRMEMAILEDIT.CHANGED.INVALID").set("Error. This address is not valid");r.ln=28;this.REF.STRINGSCOLLECTION.get("SESSION.ONPASSWORDRESETREQUESTFAILED").set("Error. Your account cannot be verified.");
}r.ln=30;r.e();};},{rc:["BPFLNG000"]});