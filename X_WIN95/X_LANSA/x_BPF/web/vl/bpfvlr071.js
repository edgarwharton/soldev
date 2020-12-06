﻿LANSA.addComponent({id:"BPFVLR071",nm:"BPFPortalLanguageEditViewStrings",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Portal Edit Language View Strings",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"BPFLNG000",mt:{BuildDefaults:{}},co:function(){cO.aN.call(this);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance",5);r.ln=5;{r.ln=7;this.mthSETSTRINGS(this.getComponentClassName());}r.ln=9;r.e();};cO.mthBUILDDEFAULTS=function(){var r=l.mR(this,cO,"BuildDefaults",12);
r.ln=12;{r.ln=14;this.REF.STRINGSCOLLECTION.get("PANELHEADING.CAPTION").set("Edit Language");r.ln=16;this.REF.STRINGSCOLLECTION.get("INSTRUCTIONTEXT.CAPTION").set("You can change the language description or edit the locale settings for this language so the portal controls display the correct values.");r.ln=17;this.REF.STRINGSCOLLECTION.get("INSTRUCTIONTEXT.CAPTION.DEFAULT").set("This language cannot be removed as it is currently the default portal language.");r.ln=18;this.REF.STRINGSCOLLECTION.get("INSTRUCTIONTEXT.CAPTION.INUSE").set("This language cannot be removed as it is currently being as a users preferred email language.");
r.ln=20;this.REF.STRINGSCOLLECTION.get("SETTINGSHEADING.CAPTION").set("Details for %%CODE%%");r.ln=22;this.REF.STRINGSCOLLECTION.get("LANGUAGEDESCRIPTIONEDIT.CAPTION").set("Description");r.ln=23;this.REF.STRINGSCOLLECTION.get("LANGUAGEDESCRIPTIONEDIT.HELPERTEXT").set("e.g. English");r.ln=24;this.REF.STRINGSCOLLECTION.get("LANGUAGEDESCRIPTIONEDIT.ERROR.BLANK").set("You need to enter a description");r.ln=26;this.REF.STRINGSCOLLECTION.get("DEFAULTLANGUAGECHECKBOX.CAPTION").set("Set as default");r.ln=28;
this.REF.STRINGSCOLLECTION.get("DEFAULTLANGUAGELABEL.CAPTION").set("Default Language");r.ln=30;this.REF.STRINGSCOLLECTION.get("SAVEACTION.CAPTION").set("SAVE");r.ln=32;this.REF.STRINGSCOLLECTION.get("LOCALESETTINGSCARD.HEADING").set("Locale Settings");r.ln=33;this.REF.STRINGSCOLLECTION.get("LOCALESETTINGSCARD.TEXT").set("Manage the locale settings used by the portal controls to display information such as the days of the week by downloading or uploading the settings.");r.ln=34;this.REF.STRINGSCOLLECTION.get("LOCALESETTINGSCARD.ACTION.1").set("Download settings");
r.ln=35;this.REF.STRINGSCOLLECTION.get("LOCALESETTINGSCARD.ACTION.2").set("Upload settings");r.ln=37;this.REF.STRINGSCOLLECTION.get("REMOVELANGUAGECARD.HEADING").set("Remove Language");r.ln=38;this.REF.STRINGSCOLLECTION.get("REMOVELANGUAGECARD.TEXT").set("Remove this language along with all the translations and resources generated for this language.");r.ln=39;this.REF.STRINGSCOLLECTION.get("REMOVELANGUAGECARD.ACTION").set("Remove");r.ln=41;this.REF.STRINGSCOLLECTION.get("RESOURCES.ONGETLANGUAGEOPTIONSFAILED").set("Failed to get the portal languages");
r.ln=43;this.REF.STRINGSCOLLECTION.get("CURRENTLANGUAGE.ONREMOVEFROMSERVERCOMPLETED.MESSAGE").set("Language removed");r.ln=44;this.REF.STRINGSCOLLECTION.get("CURRENTLANGUAGE.ONREMOVEFROMSERVERCOMPLETED.ACTION").set("Reload Portal Now");r.ln=45;this.REF.STRINGSCOLLECTION.get("CURRENTLANGUAGE.ONREMOVEFROMSERVERFAILED").set("Failed to remove language");r.ln=47;this.REF.STRINGSCOLLECTION.get("CURRENTLANGUAGE.ONUPDATEONSERVERCOMPLETED.MESSAGE").set("Language updated");r.ln=48;this.REF.STRINGSCOLLECTION.get("CURRENTLANGUAGE.ONUPDATEONSERVERCOMPLETED.ACTION").set("Reload Portal Now");
r.ln=49;this.REF.STRINGSCOLLECTION.get("CURRENTLANGUAGE.ONUPDATEONSERVERFAILED").set("Failed to update language");}r.ln=51;r.e();};},{rc:["BPFLNG000"]});