﻿LANSA.addComponent({id:"BPFVLR042",nm:"BPFSystemSettingsExportViewStrings",ot:"rp",tp:"Reusable Part",pt:"ap",de:"System Settings Export View Strings",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"BPFLNG000",mt:{BuildDefaults:{}},co:function(){cO.aN.call(this);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance",5);r.ln=5;{r.ln=7;this.mthSETSTRINGS(this.getComponentClassName());}r.ln=9;r.e();};cO.mthBUILDDEFAULTS=function(){var r=l.mR(this,cO,"BuildDefaults",12);
r.ln=12;{r.ln=14;this.REF.STRINGSCOLLECTION.get("PANELHEADING.CAPTION").set("Export Portal Settings");r.ln=15;this.REF.STRINGSCOLLECTION.get("INSTRUCTIONTEXT.CAPTION").set("Export the current portal settings so they used to populate another portal instance or as a back up.");r.ln=17;this.REF.STRINGSCOLLECTION.get("SETTINGSHEADING.CAPTION").set("Export");r.ln=19;this.REF.STRINGSCOLLECTION.get("PORTALSETTINGS.ONCREATEEXPORTCOMPLETED").set("Settings exported");r.ln=20;this.REF.STRINGSCOLLECTION.get("PORTALSETTINGS.ONCREATEEXPORTFAILED").set("Failed to export settings");
}r.ln=22;r.e();};},{rc:["BPFLNG000"]});