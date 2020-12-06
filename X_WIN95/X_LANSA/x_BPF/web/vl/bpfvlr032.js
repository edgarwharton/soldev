﻿LANSA.addComponent({id:"BPFVLR032",nm:"BPFAnalyticsSettingsViewStrings",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Analytics Settings View Strings",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"BPFLNG000",mt:{BuildDefaults:{}},co:function(){cO.aN.call(this);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance",5);r.ln=5;{r.ln=7;this.mthSETSTRINGS(this.getComponentClassName());}r.ln=9;r.e();};cO.mthBUILDDEFAULTS=function(){var r=l.mR(this,cO,"BuildDefaults",12);
r.ln=12;{r.ln=14;this.REF.STRINGSCOLLECTION.get("PANELHEADING.CAPTION").set("Configure Analytics");r.ln=15;this.REF.STRINGSCOLLECTION.get("INSTRUCTIONTEXT.CAPTION").set("Enable the tracking of end user behaviour and usage trends of the portal via Google Analytics. Once enabled enter the tracking code for property you created in Google Analytics for this portal instance. Ensure you do not reuse a tracking code to avoid issues with the data that has already been collected.");r.ln=17;this.REF.STRINGSCOLLECTION.get("CONTROLPANELHEADING.CAPTION").set("Analytics Settings");
r.ln=19;this.REF.STRINGSCOLLECTION.get("ENABLEANALYTICS.CAPTION").set("Enabled");r.ln=20;this.REF.STRINGSCOLLECTION.get("ANALYTICSTRACKINGCODEEDIT.CAPTION").set("Tracking Code");r.ln=21;this.REF.STRINGSCOLLECTION.get("ANALYTICSTRACKINGCODEEDIT.HELPERTEXT").set("e.g. UA-123456789-1");r.ln=23;this.REF.STRINGSCOLLECTION.get("PANELACTION.CAPTION").set("SAVE");r.ln=25;this.REF.STRINGSCOLLECTION.get("TRACKINGSETTINGS.ONGETANALYTICSSETTINGSFAILED").set("FAILED to get settings");r.ln=26;this.REF.STRINGSCOLLECTION.get("TRACKINGSETTINGS.ONSAVEANALYTICSSETTINGSCOMPLETED").set("Settings saved");
r.ln=27;this.REF.STRINGSCOLLECTION.get("TRACKINGSETTINGS.ONSAVEANALYTICSSETTINGSFAILED").set("FAILED to save settings");}r.ln=29;r.e();};},{rc:["BPFLNG000"]});