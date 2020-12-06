﻿LANSA.addComponent({id:"BPFPLR013",nm:"BPFPasswordResetFailedPanelStrings",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Password Reset Failed Panel Strings",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"BPFLNG000",mt:{BuildDefaults:{}},co:function(){cO.aN.call(this);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance",5);r.ln=5;{r.ln=7;this.mthSETSTRINGS(this.getComponentClassName());}r.ln=9;r.e();};cO.mthBUILDDEFAULTS=function(){var r=l.mR(this,cO,"BuildDefaults",12);
r.ln=12;{r.ln=14;this.REF.STRINGSCOLLECTION.get("MAININSTRUCTION.CAPTION").set("Sorry... something is a miss here");r.ln=16;this.REF.STRINGSCOLLECTION.get("SECONDARYINSTRUCTION.CAPTION").set("The details for the request are not valid");r.ln=17;this.REF.STRINGSCOLLECTION.get("PANELTEXT.CAPTION").set("The link you have used to try and reset your account is not a valid one. If you clicked the link in your reset password email and got this error, then let us know at accounts@myportal.com.au. Otherwise, I think you might be up to no good here. In which case, please stop.");
r.ln=18;this.REF.STRINGSCOLLECTION.get("DIALOGLOGO.CAPTION").set("All done");r.ln=19;this.REF.STRINGSCOLLECTION.get("DETAILSPANELNEXTBUTTON.CAPTION").set("Done");r.ln=21;this.REF.STRINGSCOLLECTION.get("SECONDARYINSTRUCTION.CAPTION.SECURITY").set("We cannot check your details");r.ln=22;this.REF.STRINGSCOLLECTION.get("PANELTEXT.CAPTION.SECURITY").set("We have tried to check your security credentials, but we are encountering an issue. You request might have expired, so please try going through the forget password again. Otherwise if you still have an issue, let us now at accounts@myportal.com.au.");
r.ln=23;this.REF.STRINGSCOLLECTION.get("DIALOGLOGO.CAPTION.SECURITY").set("Stay Calm. There is an issue with this request");r.ln=25;this.REF.STRINGSCOLLECTION.get("SECONDARYINSTRUCTION.CAPTION.PASSWORD").set("Your new password could not be saved");r.ln=26;this.REF.STRINGSCOLLECTION.get("PANELTEXT.CAPTION.PASSWORD").set("We have tried to save your new password, but we encountered an issue. You password reset request might have expired, so please try going through the forget password again. Otherwise if you still have an issue, let us now at accounts@myportal.com.au.");
r.ln=27;this.REF.STRINGSCOLLECTION.get("DIALOGLOGO.CAPTION.PASSWORD").set("Stay Calm. There was an issue saving your password.");}r.ln=29;r.e();};},{rc:["BPFLNG000"]});