﻿LANSA.addComponent({id:"BPFSLR003",nm:"BPFSessionEventDescriptionStrings",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Session Event Description Strings",tl:15000300},function(l,oI,u){var cO=l.rC(oI,{an:"BPFSLR000",mt:{BuildDefaults:{}},co:function(){cO.aN.call(this);}});cO.mthLOAD=function(p0){var r=l.cR(this,cO,"Load");var P0=r.cP("FORISOCODE","PRIM_DC","UnicodeString");P0.set(p0);{r.ln=8;this.mthSETSTRINGS(this.getComponentClassName(),P0.get());}r.ln=10;return r.rN(this);};cO.mthBUILDDEFAULTS=function()
{var r=l.mR(this,cO,"BuildDefaults",13);r.ln=13;{r.ln=15;this.REF.STRINGSCOLLECTION.get("LABEL.ACCOUNT").set("Account");r.ln=16;this.REF.STRINGSCOLLECTION.get("LABEL.ACCESS").set("Access");r.ln=17;this.REF.STRINGSCOLLECTION.get("LABEL.ACTIVITY").set("Activity");r.ln=18;this.REF.STRINGSCOLLECTION.get("LABEL.ADMINISTRATION").set("Administration");r.ln=19;this.REF.STRINGSCOLLECTION.get("LABEL.REQUEST").set("Request");r.ln=20;this.REF.STRINGSCOLLECTION.get("LABEL.SECURITY").set("Security");r.ln=22;this.REF.STRINGSCOLLECTION.get("EVENTS.TEXT").set("Events");
r.ln=24;this.REF.STRINGSCOLLECTION.get("LOGIN.SUCCESS").set("Login successful");r.ln=25;this.REF.STRINGSCOLLECTION.get("LOGIN.FAILED.PASSWORD").set("Login failed due to invalid password attempt %%1%%");r.ln=26;this.REF.STRINGSCOLLECTION.get("LOGIN.FAILED.DISABLED").set("Login failed due to disabled account");r.ln=27;this.REF.STRINGSCOLLECTION.get("LOGIN.FAILED.NOACCOUNT").set("Login failed due to no accounting existing for %%1%%");r.ln=28;this.REF.STRINGSCOLLECTION.get("LOGOUT.SUCCESS").set("Logout successful");
r.ln=30;this.REF.STRINGSCOLLECTION.get("USER.DEVICE").set("User device information : %%1%%");r.ln=32;this.REF.STRINGSCOLLECTION.get("PASSWORD.REQUEST.ACCOUNTOK").set("Password reset request made and account is valid for request");r.ln=33;this.REF.STRINGSCOLLECTION.get("PASSWORD.REQUEST.TOKENSET").set("Password reset request token generated and set");r.ln=34;this.REF.STRINGSCOLLECTION.get("PASSWORD.REQUEST.SUCCESS").set("Password reset request processed sucessfully");r.ln=35;this.REF.STRINGSCOLLECTION.get("PASSWORD.REQUEST.FAILED.EMAIL").set("Password reset request fail. Email could not be sent");
r.ln=36;this.REF.STRINGSCOLLECTION.get("PASSWORD.REQUEST.FAILED.TOKEN").set("Password reset request fail. Account was not updated with request token");r.ln=37;this.REF.STRINGSCOLLECTION.get("PASSWORD.REQUEST.FAILED.SECURITY").set("Password reset request fail. Account has no security credentials");r.ln=38;this.REF.STRINGSCOLLECTION.get("PASSWORD.REQUEST.FAILED.DISABLED").set("Password reset request fail. Account is disabled");r.ln=39;this.REF.STRINGSCOLLECTION.get("PASSWORD.REQUEST.FAILED.NOACCOUNT").set("Password reset request fail. The account %%1%% does not exist");
r.ln=41;this.REF.STRINGSCOLLECTION.get("TOKEN.VALIDATION.SUCCESS").set("User token validation successful");r.ln=42;this.REF.STRINGSCOLLECTION.get("TOKEN.VALIDATION.FAILED.ACCOUNT").set("Validation failed. User token could not be removed from user account");r.ln=43;this.REF.STRINGSCOLLECTION.get("TOKEN.VALIDATION.FAILED.MISSING").set("Validation failed. User token could be found for an account");r.ln=44;this.REF.STRINGSCOLLECTION.get("TOKEN.VALIDATION.FAILED.NOTSENT").set("Validation failed. User token was not provided on request");
r.ln=46;this.REF.STRINGSCOLLECTION.get("SECURITY.CHECK.SUCCESS").set("Security details check was successful");r.ln=47;this.REF.STRINGSCOLLECTION.get("SECURITY.CHECK.FAILED.NOMATCH").set("Security details check failed as answer does not match");r.ln=48;this.REF.STRINGSCOLLECTION.get("SECURITY.CHECK.FAILED.DISABLED").set("Security details check failed as account is disabled");r.ln=49;this.REF.STRINGSCOLLECTION.get("SECURITY.CHECK.FAILED.NOACCOUNT").set("Security details check failed as account does not exist");
r.ln=51;this.REF.STRINGSCOLLECTION.get("SECURITY.CHANGED.SUCCESS").set("Security details changed and notification sent");r.ln=52;this.REF.STRINGSCOLLECTION.get("SECURITY.CHANGED.SUCCESS.NOTSENT").set("Security details changed and notification not sent");r.ln=53;this.REF.STRINGSCOLLECTION.get("SECURITY.CHANGE.FAILED").set("Security details change update failed");r.ln=55;this.REF.STRINGSCOLLECTION.get("PASSWORD.RESET.SUCCESS").set("Password reset was successful");r.ln=56;this.REF.STRINGSCOLLECTION.get("PASSWORD.RESET.SUCCESS.NOTSENT").set("Password reset was successful but notification not sent");
r.ln=57;this.REF.STRINGSCOLLECTION.get("PASSWORD.RESET.FAILED.ACCOUNT").set("Password reset failed as account could not be updated");r.ln=58;this.REF.STRINGSCOLLECTION.get("PASSWORD.RESET.FAILED.DISABLED").set("Password reset failed as account is disabled");r.ln=59;this.REF.STRINGSCOLLECTION.get("PASSWORD.RESET.FAILED.NOACCOUNT").set("Password reset failed as account does not exist");r.ln=60;this.REF.STRINGSCOLLECTION.get("PASSWORD.RESET.FAILED.SECURITY").set("Password reset failed as security check was not passed");
r.ln=62;this.REF.STRINGSCOLLECTION.get("TRACKING.ACCOUNTCHANGED").set("Tracking stopped as user account changed to %%1%%");r.ln=63;this.REF.STRINGSCOLLECTION.get("TRACKING.NEWACCOUNT").set("Tracking stopped as user started to create an account");r.ln=64;this.REF.STRINGSCOLLECTION.get("TRACKING.DOWNLOAD.SUCCESS").set("Session activity downloaded successfully");r.ln=65;this.REF.STRINGSCOLLECTION.get("TRACKING.DOWNLOAD.FAILED").set("Session activity download failed");r.ln=67;this.REF.STRINGSCOLLECTION.get("TRACKING.DELETE.RANGE").set("User choose to delete activity back to %%1%%");
r.ln=68;this.REF.STRINGSCOLLECTION.get("TRACKING.DELETE.SUCCESS").set("Session activity removed successfully");r.ln=69;this.REF.STRINGSCOLLECTION.get("TRACKING.DELETE.FAILED").set("Session activity removal failed");r.ln=71;this.REF.STRINGSCOLLECTION.get("NEWACCOUNT.DETAILS.SUCCESS").set("Details for new account %%1%% stored successfully");r.ln=72;this.REF.STRINGSCOLLECTION.get("NEWACCOUNT.DETAILS.FAILED.EXISTS").set("Details for new account %%1%% not stored as account exists");r.ln=74;this.REF.STRINGSCOLLECTION.get("NEWACCOUNT.SECURITY.SUCCESS").set("Security credentials for new account stored successfully");
r.ln=76;this.REF.STRINGSCOLLECTION.get("NEWACCOUNT.CREATE.SUCCESS").set("New account created successfully");r.ln=77;this.REF.STRINGSCOLLECTION.get("NEWACCOUNT.CREATE.SUCCESS.NOTSENT").set("New account created successfully but notification not sent");r.ln=78;this.REF.STRINGSCOLLECTION.get("NEWACCOUNT.CREATE.FAILED").set("Failed to create new account");r.ln=79;this.REF.STRINGSCOLLECTION.get("NEWACCOUNT.CREATE.FAILED.EXISTED").set("Failed to create new account as an account already exists");r.ln=81;
this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHECK.SUCCESS").set("Account verification successful");r.ln=82;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHECK.FAILED.LIMIT").set("Account verification failed and account is now disabled");r.ln=83;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHECK.FAILED.PASSWORD").set("Account verification failed as password was incorrect");r.ln=84;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHECK.FAILED.DISABLED").set("Account verification failed as account is disabled");r.ln=85;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHANGE.BACKGROUND.SUCCESS").set("User changed preferred background");
r.ln=86;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHANGE.BACKGROUND.FAILED").set("User change of preferred background failed");r.ln=87;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHANGE.THEME.SUCCESS").set("User changed preferred theme");r.ln=88;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHANGE.BACKGROUND.FAILED").set("User change of preferred theme failed");r.ln=89;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHANGE.EMAIL").set("Account email address was changed from %%1%% to %%2%%");r.ln=90;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHANGE.EMAIL.SENT").set("Account email address change notification sent");
r.ln=91;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHANGE.EMAIL.NOTSENT").set("Account email address change notification send failed");r.ln=92;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHANGE.EMAIL.SUCCESS").set("Account email address was changed successfully");r.ln=93;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHANGE.EMAIL.FAILED").set("Account email address change failed");r.ln=94;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHANGE.EMAILLANG.SUCCESS").set("User email language change successfully");r.ln=95;this.REF.STRINGSCOLLECTION.get("ACCOUNT.CHANGE.EMAILLANG.FAILED").set("User email language change failed");
r.ln=97;this.REF.STRINGSCOLLECTION.get("ADMIN.ADMINRIGHTS.GRANTED").set("Account %%1%% was granted administration rights");r.ln=98;this.REF.STRINGSCOLLECTION.get("ADMIN.ADMINRIGHTS.REVOKED").set("Account %%1%% had administration rights revoked");r.ln=99;this.REF.STRINGSCOLLECTION.get("ADMIN.ACCOUNTACTION.DISABLED").set("Account %%1%% was disabled by the system administrator");r.ln=100;this.REF.STRINGSCOLLECTION.get("ADMIN.ACCOUNTACTION.ENABLE").set("Account %%1%% was enabled by the system administrator");
r.ln=101;this.REF.STRINGSCOLLECTION.get("ADMIN.ACCOUNTACTION.RESET").set("Account %%1%% was sent a password reset by the system administrator");r.ln=102;this.REF.STRINGSCOLLECTION.get("ADMIN.ACCOUNTACTION.CONFIRM").set("Account %%1%% was sent a new account confirmation by the system administrator");r.ln=103;this.REF.STRINGSCOLLECTION.get("ADMIN.ACCOUNTACTION.SECURITY").set("Account %%1%% had security credentials reset by the system administrator");r.ln=104;this.REF.STRINGSCOLLECTION.get("ADMIN.ACCOUNTACTION.SECURITY.SENT").set("Account %%1%% security credentials reset email sent");
}r.ln=106;r.e();};},{rc:["BPFSLR000"]});