﻿LANSA.addComponent({id:"BPFPLR026",nm:"BPFConfirmAccountActiveFailurePanelStrings",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Confirm Account Active Failed Strings",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"BPFLNG000",mt:{BuildDefaults:{}},co:function(){cO.aN.call(this);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance",5);r.ln=5;{r.ln=7;this.mthSETSTRINGS(this.getComponentClassName());}r.ln=9;r.e();};cO.mthBUILDDEFAULTS=function(){var r=l.mR(this,cO,"BuildDefaults",12);
r.ln=12;{r.ln=14;this.REF.STRINGSCOLLECTION.get("MAININSTRUCTION.CAPTION").set("Sorry... something is a miss here");r.ln=15;this.REF.STRINGSCOLLECTION.get("SECONDARYINSTRUCTION.CAPTION").set("You currently have a active session");r.ln=17;this.REF.STRINGSCOLLECTION.get("PANELTEXT.CAPTION").set("The link you have used cannot be used while you have another session active in this browser. Sign out of any other sessions and then try clicking the link again. If you still get this error, then let us know at accounts@myportal.com.au. Otherwise, I think you might be up to no good here. In which case, please stop.");
r.ln=19;this.REF.STRINGSCOLLECTION.get("DIALOGLOGO.CAPTION").set("All done");r.ln=21;this.REF.STRINGSCOLLECTION.get("DETAILSPANELNEXTBUTTON.CAPTION").set("Done");}r.ln=23;r.e();};},{rc:["BPFLNG000"]});