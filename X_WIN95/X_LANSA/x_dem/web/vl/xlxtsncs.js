﻿LANSA.addComponent({id:"XLXTSNCS",nm:"xLXTermsAndCondition",ot:"wv",tp:"Dialog",pt:"ap",de:"Terms & Conditions",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_DLG",mt:{GetLayout:{}},ev:{TermsAccepted:{},TermsDeclined:{}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUTMAIN","PRIM_TBLO");var C1=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C2=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTMAINROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTMAINROW3","PRIM_TBLO","Row");
var C5=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C6=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C7=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");var C8=this.cR("LAYOUTMAINITEM4","PRIM_TBLO","Item");var C9=this.cR("LAYOUTMAINITEM5","PRIM_TBLO","Item");var C10=this.cR("LAYOUTAPPBAR","PRIM_TBLO");var C11=this.cR("LAYOUTAPPBARROW1","PRIM_TBLO","Row");var C12=this.cR("LAYOUTAPPBARCOLUMN1","PRIM_TBLO","Column");var C13=this.cR("LAYOUTPANELTEXT","PRIM_TBLO");var C14=this.cR("LAYOUTPANELTEXTROW1","PRIM_TBLO","Row");
var C15=this.cR("LAYOUTPANELTEXTCOLUMN1","PRIM_TBLO","Column");var C16=this.cR("LAYOUTPANELTEXTITEM1","PRIM_TBLO","Item");var C17=this.cR("APPBAR","PRIM_MD","AppBar");var C18=this.cR("PANELTEXT","PRIM_PANL");var C19=this.cR("TERMSANDCONDITIONS","PRIM_MD","Label");var C20=this.cR("BUTTONACCEPT","PRIM_MD","RaisedButton");var C21=this.cR("BUTTONDECLINE","PRIM_MD","RaisedButton");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(56);C2.setUnits("CONTENT");
C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.iC();C4.setDisplayPosition(3);C4.setParent(C0);C4.setHeight(50);C4.setUnits("PIXELS");C4.iC();C5.setAlignment("TOPCENTER");C5.setColumn(C1);C5.setManage(C17);C5.setParent(C0);C5.setRow(C2);C5.setSizing("FITTOWIDTH");C5.iC();C6.setAlignment("TOPCENTER");C6.setColumn(C1);C6.setManage(C19);C6.setParent(C0);C6.setRow(C3);C6.iC();C7.setManage(C18);C7.setParent(C0);C7.setRow(C3);C7.setColumn(C1);C7.setMarginBottom(8);C7.setMarginLeft(8);C7.setMarginRight(8);
C7.setMarginTop(8);C7.iC();C8.setManage(C20);C8.setParent(C0);C8.setRow(C4);C8.setSizing("FITTOHEIGHT");C8.setAlignment("CENTERLEFT");C8.setColumn(C1);C8.setMarginBottom(8);C8.setMarginLeft(8);C8.iC();C9.setManage(C21);C9.setParent(C0);C9.setRow(C4);C9.setSizing("FITTOHEIGHT");C9.setColumn(C1);C9.setAlignment("CENTERRIGHT");C9.setMarginBottom(8);C9.setMarginRight(8);C9.iC();C10.iC();C11.setDisplayPosition(1);C11.setParent(C10);C11.iC();C12.setDisplayPosition(1);C12.setParent(C10);C12.iC();C13.iC();
C14.setDisplayPosition(1);C14.setParent(C13);C14.iC();C15.setDisplayPosition(1);C15.setParent(C13);C15.iC();C16.setAlignment("TOPCENTER");C16.setColumn(C15);C16.setManage(C19);C16.setParent(C13);C16.setRow(C14);C16.setSizing("CONTENTHEIGHTFITTOWIDTH");C16.setFlow("DOWN");C16.setMarginBottom(4);C16.setMarginLeft(4);C16.setMarginRight(4);C16.setMarginTop(4);C16.iC();C17.setDisplayPosition(2);C17.setParent(this);C17.setTabPosition(2);C17.setThemeDrawStyle("Heading2");C17.setWidth(470);C17.setLayoutManager(C10);
C17.setCaption("Terms & Conditions");C17.setCaptionAlignment("CENTER");C17.iC();C18.setDisplayPosition(4);C18.setParent(this);C18.setTabPosition(4);C18.setLayoutManager(C13);C18.setHeight(389);C18.setLeft(8);C18.setTop(64);C18.setWidth(454);C18.setVerticalScroll(true);C18.setThemeDrawStyle("Card");C18.iC();C19.setCaption("Lorem ipsum dolor sit amet, gravida ultrices, neque id, leo nonummy. Tellus imperdiet, vivamus mi ultricies, proin varius lorem. Lorem ultricies, ut wisi. Turpis dolore. A nonummy.");
C19.setCaptionAlignment("TOPLEFT");C19.setDisplayPosition(1);C19.setHeight(55);C19.setLeft(4);C19.setParent(C18);C19.setTabPosition(1);C19.setTop(4);C19.setWidth(444);C19.setWordWrap(true);C19.setThemeDrawStyle("ForegroundSecondary+Emphasis");C19.iC();C20.setCaption("Accept");C20.setDisplayPosition(1);C20.setLeft(8);C20.setParent(this);C20.setTabPosition(1);C20.setThemeDrawStyle("MediumTitle");C20.setTop(461);C20.setIcon("check");C20.setHeight(42);C20.setEnabled(false);C20.setIconOpacity(20);C20.iC();
C21.setCaption("Decline");C21.setDisplayPosition(3);C21.setLeft(362);C21.setParent(this);C21.setTabPosition(3);C21.setThemeDrawStyle("DarkAccent");C21.setTop(461);C21.setIcon("close");C21.setHeight(42);C21.iC();l.WEB().aH("DEVICECHANGED",this,e2);C18.aH("SCROLLCHANGED",this,e5);C20.aH("CLICK",this,e4);C21.aH("CLICK",this,e3);this.setHeight(513);this.setWidth(472);this.setLayoutManager(C0);this.setThemeDrawStyle("Shadow2");this.aH("INITIALIZE",this,e1);this.aH("PREPARE",this,e2);}});function e1(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",34);r.ln=34;{r.ln=36;m.TERMSANDCONDITIONS.set(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat("Terms and Conditions for LANSA Exchange",l.n.AsUnicodeString(10)),"Introduction"),l.n.AsUnicodeString(10)),"These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, http://lansaexchange.com accessible at https://lansaexchange.com."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions. These Terms and Conditions have been generated with the help of the Terms And Conditions Template and the Privacy Policy Generator."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Minors or people below 18 years old are not allowed to use this Website."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Intellectual Property Rights"),l.n.AsUnicodeString(10)),"Other than the content you own, under these Terms, LANSA Exchange and/or its licensors own all the intellectual property rights and materials contained in this Website."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"You are granted limited license only for purposes of viewing the material contained on this Website."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Restrictions"),l.n.AsUnicodeString(10)),"You are specifically restricted from all of the following:"),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"publishing any Website material in any other media;"),l.n.AsUnicodeString(10)),"selling, sublicensing and/or otherwise commercializing any Website material;"),l.n.AsUnicodeString(10)),"publicly performing and/or showing any Website material;"),l.n.AsUnicodeString(10)),"using this Website in any way that is or may be damaging to this Website;"),l.n.AsUnicodeString(10)),"using this Website in any way that impacts user access to this Website;"),l.n.AsUnicodeString(10)),"using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;"),l.n.AsUnicodeString(10)),"engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;"),l.n.AsUnicodeString(10)),"using this Website to engage in any advertising or marketing."),l.n.AsUnicodeString(10)),"Certain areas of this Website are restricted from being access by you and LANSA Exchange may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Your Content"),l.n.AsUnicodeString(10)),"In these Website Standard Terms and Conditions, 'Your Content' shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant LANSA Exchange a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Your Content must be your own and must not be invading any third-party’s rights. LANSA Exchange reserves the right to remove any of Your Content from this Website at any time without notice."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Your Privacy"),l.n.AsUnicodeString(10)),"Please read Privacy Policy."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)));
r.ln=38;m.TERMSANDCONDITIONS.set(l.cat(m.TERMSANDCONDITIONS.get(),l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat("No warranties",l.n.AsUnicodeString(10)),"This Website is provided 'as is,' with all faults, and LANSA Exchange express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Limitation of liability"),l.n.AsUnicodeString(10)),"In no event shall LANSA Exchange, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  LANSA Exchange, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Indemnification"),l.n.AsUnicodeString(10)),"You hereby indemnify to the fullest extent LANSA Exchange from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Severability"),l.n.AsUnicodeString(10)),"If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Variation of Terms"),l.n.AsUnicodeString(10)),"LANSA Exchange is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Assignment"),l.n.AsUnicodeString(10)),"The LANSA Exchange is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Entire Agreement"),l.n.AsUnicodeString(10)),"These Terms constitute the entire agreement between LANSA Exchange and you in relation to your use of this Website, and supersede all prior agreements and understandings."),l.n.AsUnicodeString(10)),l.n.AsUnicodeString(10)),"Governing Law & Jurisdiction"),l.n.AsUnicodeString(10)),"These Terms will be governed by and interpreted in accordance with the laws of the State of us, and you submit to the non-exclusive jurisdiction of the state and federal courts located in us for the resolution of any disputes.")));
}r.ln=41;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.Prepare #SYS_WEB.DeviceChanged",43);r.ln=43;{r.ln=45;this.mthGETLAYOUT();}r.ln=47;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#buttonDecline.Click",49);r.ln=49;{r.ln=51;this.fE("TERMSDECLINED");r.ln=52;this.mthCLOSE();}r.ln=54;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#ButtonAccept.Click",56);r.ln=56;{r.ln=58;this.fE("TERMSACCEPTED");r.ln=59;this.mthCLOSE();}r.ln=61;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PanelText.ScrollChanged",63);
r.ln=63;{r.ln=65;if(l.n.eq(m.PANELTEXT.getVerticalScrollRemainder(),0)){r.ln=67;m.BUTTONACCEPT.setEnabled(true);r.ln=68;m.BUTTONACCEPT.setIconOpacity(100);}}r.ln=72;r.e();};cO.mthGETLAYOUT=function(){var r=l.mR(this,cO,"GetLayout",75);r.ln=75;{r.ln=77;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=79;this.setPlacement("FULLSCREEN");}else{r.ln=83;this.setPlacement("CENTER");r.ln=84;this.setHeight(l.zap(l.mul(l.zap(l.zap(l.div(l.WEB().getWebPage().getHeight(),10),19,9),20,9),8),20,9));r.ln=85;this.setWidth(l.zap(l.mul(l.zap(l.zap(l.div(l.WEB().getWebPage().getWidth(),10),19,9),20,9),8),20,9));
}}r.ln=89;r.e();};},{rp:["PRIM_DLG","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.AppBar","PRIM_PANL","PRIM_MD.Label","PRIM_MD.RaisedButton"]});