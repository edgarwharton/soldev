﻿LANSA.addComponent({id:"BPFVLR016",nm:"BPFIntegrationLogControlViewStrings",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Integration Log Control View Strings",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"BPFLNG000",mt:{BuildDefaults:{}},co:function(){cO.aN.call(this);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance",5);r.ln=5;{r.ln=7;this.mthSETSTRINGS(this.getComponentClassName());}r.ln=9;r.e();};cO.mthBUILDDEFAULTS=function(){var r=l.mR(this,cO,"BuildDefaults",12);
r.ln=12;{r.ln=14;this.REF.STRINGSCOLLECTION.get("PANELHEADING.CAPTION").set("Integration Logging Control");r.ln=15;this.REF.STRINGSCOLLECTION.get("INSTRUCTIONTEXT.CAPTION").set("You are able to choose if the integration logging is off, on or only happens when an error is encountered. Its is recommend logging is left off unless required. You are also able to clear all integration logs if needed.");r.ln=17;this.REF.STRINGSCOLLECTION.get("ENABLEDPANELHEADING.CAPTION").set("Enable Logs");r.ln=19;this.REF.STRINGSCOLLECTION.get("ENABLEDOPTION1.CAPTION").set("Off");
r.ln=20;this.REF.STRINGSCOLLECTION.get("ENABLEDOPTION2.CAPTION").set("On");r.ln=21;this.REF.STRINGSCOLLECTION.get("ENABLEDOPTION3.CAPTION").set("Only on error");r.ln=23;this.REF.STRINGSCOLLECTION.get("CLEARLOGSPANELHEADING.CAPTION").set("Clear Logs");r.ln=24;this.REF.STRINGSCOLLECTION.get("CLEARLOGSACTION.CAPTION").set("Clear all Logs");r.ln=26;this.REF.STRINGSCOLLECTION.get("LOGGINGDATA.ONSETINTEGRATIONLOGGINGCONTROLSETTINGCOMPLETED").set("Settings saved");r.ln=27;this.REF.STRINGSCOLLECTION.get("LOGGINGDATA.ONSETINTEGRATIONLOGGINGCONTROLSETTINGFAILED").set("FAILED to save settings");
r.ln=28;this.REF.STRINGSCOLLECTION.get("LOGGINGDATA.ONINTEGRATIONLOGSREMOVECOMPLETED").set("Logs removed");r.ln=29;this.REF.STRINGSCOLLECTION.get("LOGGINGDATA.ONINTEGRATIONLOGSREMOVEFAILED").set("FAILED to save settings");}r.ln=31;r.e();};},{rc:["BPFLNG000"]});