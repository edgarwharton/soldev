﻿LANSA.addComponent({id:"XMDLIST",nm:"xMdList",ot:"wv",tp:"View",pt:"ap",de:"Material Design Lists",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximage_12.png");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{nm:"LISTCOUNT",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Entries .......","FRA":"Entrées . . . .","JPN":"Entries .......","LLL":"Entries ......."}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"Number","LLL":"Number"}[cL],h2:{"ENG":"of Entrys","FRA":"d´Entrées","JPN":"of Entrys","LLL":"of Entrys"}[cL],h3:" ",de:{"ENG":"Number of entries in a browse list","FRA":"Liste, nombre d´entrées ds liste BROWSE","JPN":"Number of entries in a browse list","LLL":"Number of entries in a browse list"}[cL],
dv:0,ia:["FE","RB"]},F3:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],h1:{"ENG":"Employee","FRA":"Titre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Title","FRA":"Employé","JPN":"役職","LLL":"Title"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],
h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],
h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:{"ENG":"Date of Birth","FRA":"Date naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],h1:{"ENG":"Employee","FRA":"Date","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Birth Date","FRA":"Naissance","JPN":"誕生日","LLL":"Birth Date"}[cL],h3:{"ENG":" ","FRA":"Employé","JPN":" ","LLL":""}[cL],
de:{"ENG":"Date of Birth","FRA":"Date de naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F7:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],h1:{"ENG":"Employee","FRA":"Genre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Gender","FRA":"Employé","JPN":"性別","LLL":"Gender"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],dv:"Male",
ia:["FE","LC"]},F8:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],
h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F10:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],
dv:"",ia:["FE","LC"]},F11:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],dv:"",ia:["FE"]},F12:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],
h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],dv:"",ia:["FE","LC"]},F13:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話","LLL":"Home Phone"}[cL],h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅","LLL":"Home"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話","LLL":"Telephone"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話","LLL":"Home Telephone"}[cL],dv:"",ia:["FE"]},F14:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話","LLL":"Business Phone"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社","LLL":"Business"}[cL],h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話","LLL":"Business Telephone"}[cL],dv:"",ia:["FE"]},F15:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:{"ENG":"Mobile Phone","FRA":"Téléphone mob.","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h1:{"ENG":"Employee","FRA":"Téléphone","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Mobile Phone","FRA":"Mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Mobile Phone","FRA":"Téléphone mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],
dv:"",ia:["FE"]},F16:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収","LLL":"Annual"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" ","LLL":"Salary"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],dv:0,ia:["FE","RB"]},F17:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",
ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日","LLL":"Start Date"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日","LLL":"Start Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F18:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日","LLL":"Termination"}[cL],
h1:{"ENG":"Termination","FRA":"Date","JPN":"終了","LLL":"Termination"}[cL],h2:{"ENG":"Date","FRA":"Départ","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日","LLL":"Termination Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F19:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],
h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F20:{nm:"XEMPDEPT",an:"xEmployeeDepartment",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Department Desc","FRA":"Descript. dept","JPN":"部門記述","LLL":"Department Desc"}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門記述","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"記述","LLL":"Description"}[cL],
h3:{"ENG":"Description","FRA":"Employé","JPN":" ","LLL":"Description"}[cL],de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門記述","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"]},F21:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé","JPN":"社員サムネイル画像","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_VIEW",fd:Fd,rm:["dt"],mt:{LoadEmployeesFromServer:{}},co:function(){cO.aN.call(this);var f=this.aF("XMDLIST",Fd);var C0=this.cR("STYLEHAND","PRIM_VS","Style");var C1=this.cR("STYLE1","PRIM_VS","Style");var C2=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C3=this.cR("LAYOUTMAIN","PRIM_TBLO");
var C4=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C5=this.cR("LAYOUTMAINCOLUMN2","PRIM_TBLO","Column");var C6=this.cR("LAYOUTMAINCOLUMN3","PRIM_TBLO","Column");var C7=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C8=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTMAINITEM7","PRIM_TBLO","Item");var C10=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTPANELS","PRIM_TBLO");var C12=this.cR("LAYOUTPANELSROW1","PRIM_TBLO","Row");var C13=this.cR("LAYOUTPANELSCOLUMN1","PRIM_TBLO","Column");
var C14=this.cR("LAYOUTPANELSITEM2","PRIM_TBLO","Item");var C15=this.cR("LAYOUTPANELSITEM3","PRIM_TBLO","Item");var C16=this.cR("LAYOUTPANELSITEM4","PRIM_TBLO","Item");var C17=this.cR("LAYOUTPANELSITEM5","PRIM_TBLO","Item");var C18=this.cR("LAYOUTXEMPLOYEEITEM9","PRIM_TBLO","Item");var C19=this.cR("LAYOUTXEMPLOYEEITEM10","PRIM_TBLO","Item");var C20=this.cR("LABELTITLE","PRIM_MD","Label");var C21=this.cR("LABELSUBTITLE","PRIM_MD","Label");var C22=this.cR("PANELSIMPLE","PRIM_PANL");var C23=this.cR("LAYOUTPANELSIMPLE","PRIM_TBLO");
var C24=this.cR("LAYOUTPANELSIMPLEROW1","PRIM_TBLO","Column");var C25=this.cR("LAYOUTPANELSIMPLECOLUMN1","PRIM_TBLO","Row");var C26=this.cR("LAYOUTPANELSIMPLEITEM1","PRIM_TBLO","Item");var C27=this.cR("LAYOUTPANELSIMPLEITEM2","PRIM_TBLO","Item");var C28=this.cR("LAYOUTXEMPLOYEE","PRIM_TBLO");var C29=this.cR("LAYOUTXEMPLOYEEROW1","PRIM_TBLO","Row");var C30=this.cR("LAYOUTXEMPLOYEECOLUMN1","PRIM_TBLO","Column");var C31=this.cR("LAYOUTXEMPLOYEEITEM1","PRIM_TBLO","Item");var C32=this.cR("LAYOUTXEMPLOYEEITEM3","PRIM_TBLO","Item");
var C33=this.cR("LAYOUTXEMPLOYEEITEM4","PRIM_TBLO","Item");var C34=this.cR("LAYOUTXEMPLOYEEITEM5","PRIM_TBLO","Item");var C35=this.cR("LAYOUTXEMPLOYEEITEM6","PRIM_TBLO","Item");var C36=this.cR("LAYOUTXEMPLOYEEITEM7","PRIM_TBLO","Item");var C37=this.cR("LAYOUTXEMPLOYEEITEM8","PRIM_TBLO","Item");var C38=this.cR("LAYOUTLISTSINGLELINE","PRIM_TBLO");var C39=this.cR("LAYOUTLISTSINGLELINEROW1","PRIM_TBLO","Column");var C40=this.cR("LAYOUTLISTSINGLELINECOLUMN1","PRIM_TBLO","Row");var C41=this.cR("LAYOUTLISTSINGLELINEITEM1","PRIM_TBLO","Item");
var C42=this.cR("LAYOUTLISTSINGLELINEITEM2","PRIM_TBLO","Item");var C43=this.cR("LAYOUTLISTTWOLINE","PRIM_TBLO");var C44=this.cR("LAYOUTLISTTWOLINEROW1","PRIM_TBLO","Column");var C45=this.cR("LAYOUTLISTTWOLINECOLUMN1","PRIM_TBLO","Row");var C46=this.cR("LAYOUTLISTTWOLINEITEM1","PRIM_TBLO","Item");var C47=this.cR("LAYOUTLISTTWOLINEITEM2","PRIM_TBLO","Item");var C48=this.cR("LAYOUTLISTTWOLINEITEM3","PRIM_TBLO","Item");var C49=this.cR("LAYOUTLISTEMPLOYEES","PRIM_TBLO");var C50=this.cR("LAYOUTLISTEMPLOYEESROW1","PRIM_TBLO","Column");
var C51=this.cR("LAYOUTLISTEMPLOYEESCOLUMN1","PRIM_TBLO","Row");var C52=this.cR("LAYOUTLISTEMPLOYEESITEM1","PRIM_TBLO","Item");var C53=this.cR("LAYOUTLISTEMPLOYEESITEM2","PRIM_TBLO","Item");var C54=this.cR("LAYOUTLISTEMPLOYEESITEM3","PRIM_TBLO","Item");var C55=this.cR("LAYOUTLISTEMPLOYEESITEM4","PRIM_TBLO","Item");var C56=this.cR("LAYOUTLISTEMPLOYEESITEM5","PRIM_TBLO","Item");var C57=this.cR("LAYOUTLISTEMPLOYEESITEM6","PRIM_TBLO","Item");var C58=this.cR("PANELTWOLINE","PRIM_PANL");var C59=this.cR("LABELTWOLINE","PRIM_MD","Label");
var C60=this.cR("PANELSIMPLE1","PRIM_PANL");var C61=this.cR("PANELSINGLELINEAVATAR","PRIM_PANL");var C62=this.cR("LABELSINGLELINEAVATAR","PRIM_MD","Label");var C63=this.cR("PANELXEMPLOYEE","PRIM_PANL");var C64=this.cR("LABELXEMPLOYEE","PRIM_MD","Label");var C65=this.cR("LISTXEMPLOYEE","PRIM_MD","List");var C66=this.cR("LISTXEMPLOYEEIMAGE","PRIM_MD","ListLabel");var C67=this.cR("LISTXEMPLOYEENAME","PRIM_MD","ListLabel");var C68=this.cR("LISTXEMPLOYEEDESCRIPTION","PRIM_MD","ListLabel");var C69=this.cR("LISTXEMPLOYEESTARTDATE","PRIM_MD","ListLabel");
var C70=this.cR("LISTXEMPLOYEEIDENTIFICATION","PRIM_MD","ListLabel");var C71=this.cR("LISTXEMPLOYEEMORE","PRIM_MD","ListFlatButton");var C72=this.cR("LISTXEMPLOYEESEPARATOR","PRIM_MD","ListLabel");var C73=this.cR("LISTSIMPLE","PRIM_MD","List");var C74=this.cR("LISTSIMPLELABEL","PRIM_MD","ListLabel");var C75=this.cR("LISTSINGLELINEAVATAR","PRIM_MD","List");var C76=this.cR("LISTSINGLELINEAVATARIMAGE","PRIM_MD","ListLabel");var C77=this.cR("LISTSINGLELINEAVATARLABEL","PRIM_MD","ListLabel");var C78=this.cR("LISTTWOLINE","PRIM_MD","List");
var C79=this.cR("LISTIMAGE","PRIM_MD","ListLabel");var C80=this.cR("LISTTWOLINELABEL1","PRIM_MD","ListLabel");var C81=this.cR("LISTTWOLINELABEL2","PRIM_MD","ListLabel");var C82=this.cR("LABELXEMPLOYEE1","PRIM_MD","Label");var C83=this.cR("LABELXEMPLOYEE2","PRIM_MD","Label");var C84=this.cR("CHECKBOX","PRIM_MD","ListCheckBox");C0.setCursor("HAND");C0.iC();C1.setBackgroundBrush(C2);C1.iC();C2.setColor("156:156:156");C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(2);
C5.setParent(C3);C5.setWidth(12);C5.setMaxWidth(800);C5.iC();C6.setDisplayPosition(3);C6.setParent(C3);C6.iC();C7.setDisplayPosition(1);C7.setParent(C3);C7.iC();C8.setColumn(C5);C8.setManage(C20);C8.setParent(C3);C8.setRow(C7);C8.setSizing("FITTOWIDTH");C8.setFlow("DOWN");C8.setAlignment("TOPCENTER");C8.setMarginTop(32);C8.iC();C9.setColumn(C5);C9.setManage(C21);C9.setParent(C3);C9.setSizing("CONTENTHEIGHTFITTOWIDTH");C9.setRow(C7);C9.setAlignment("TOPCENTER");C9.setFlow("DOWN");C9.setMarginTop(16);
C9.setMarginBottom(32);C9.iC();C10.setAlignment("TOPCENTER");C10.setColumn(C5);C10.setManage(C22);C10.setParent(C3);C10.setRow(C7);C10.setSizing("CONTENTHEIGHTFITTOWIDTH");C10.setFlow("DOWN");C10.setMarginTop(50);C10.iC();C11.setMarginBottom(20);C11.iC();C12.setDisplayPosition(1);C12.setParent(C11);C12.iC();C13.setDisplayPosition(1);C13.setParent(C11);C13.iC();C14.setAlignment("TOPCENTER");C14.setColumn(C13);C14.setManage(C60);C14.setParent(C11);C14.setRow(C12);C14.setSizing("FITTOWIDTH");C14.setFlow("DOWN");
C14.iC();C15.setAlignment("TOPCENTER");C15.setColumn(C13);C15.setManage(C61);C15.setParent(C11);C15.setRow(C12);C15.setSizing("FITTOWIDTH");C15.setFlow("DOWN");C15.iC();C16.setAlignment("TOPCENTER");C16.setColumn(C13);C16.setManage(C58);C16.setParent(C11);C16.setRow(C12);C16.setSizing("FITTOWIDTH");C16.setFlow("DOWN");C16.iC();C17.setAlignment("TOPCENTER");C17.setColumn(C13);C17.setManage(C63);C17.setParent(C11);C17.setRow(C12);C17.setSizing("CONTENTHEIGHTFITTOWIDTH");C17.setFlow("DOWN");C17.iC();
C18.setAlignment("TOPCENTER");C18.setColumn(C30);C18.setManage(C82);C18.setParent(C28);C18.setRow(C29);C18.setSizing("CONTENTHEIGHTFITTOWIDTH");C18.setFlow("DOWN");C18.iC();C19.setAlignment("TOPCENTER");C19.setColumn(C30);C19.setManage(C83);C19.setParent(C28);C19.setRow(C29);C19.setSizing("CONTENTHEIGHTFITTOWIDTH");C19.setFlow("DOWN");C19.iC();C20.setCaption("Lists");C20.setDisplayPosition(1);C20.setParent(this);C20.setTabPosition(1);C20.setThemeDrawStyle("Heading1");C20.setTop(32);C20.setWidth(800);
C20.setHeight(44);C20.setCaptionAlignment("TOPLEFT");C20.setWordWrap(true);C20.setLeft(132);C20.setCaptionMarginLeft(16);C20.setCaptionMarginRight(16);C20.iC();C21.setDisplayPosition(2);C21.setParent(this);C21.setTabPosition(2);C21.setThemeDrawStyle("Heading3");C21.setTop(92);C21.setWidth(800);C21.setHeight(43);C21.setCaptionAlignment("TOPLEFT");C21.setWordWrap(true);C21.setLeft(132);C21.setCaptionMarginLeft(16);C21.setCaptionMarginRight(16);C21.setCaption("Lists present multiple line items vertically as a single continuous element. Sample usage can be found in the xMdList component.");
C21.iC();C22.setDisplayPosition(3);C22.setLeft(132);C22.setParent(this);C22.setTabPosition(3);C22.setTabStop(false);C22.setHeight(3364);C22.setWidth(800);C22.setImageAlignment("TOPLEFT");C22.setLayoutManager(C11);C22.setTop(217);C22.iC();C23.iC();C24.setDisplayPosition(1);C24.setParent(C23);C24.iC();C25.setDisplayPosition(1);C25.setParent(C23);C25.iC();C26.setAlignment("CENTERLEFT");C26.setColumn(C24);C26.setManage(C74);C26.setMarginLeft(72);C26.setMarginRight(16);C26.setParent(C23);C26.setRow(C25);
C26.iC();C27.setAlignment("CENTERLEFT");C27.setColumn(C24);C27.setManage(C84);C27.setParent(C23);C27.setRow(C25);C27.setSizing("NONE");C27.iC();C28.iC();C29.setDisplayPosition(1);C29.setParent(C28);C29.iC();C30.setDisplayPosition(1);C30.setParent(C28);C30.iC();C31.setAlignment("TOPCENTER");C31.setColumn(C30);C31.setManage(C59);C31.setParent(C28);C31.setRow(C29);C31.setSizing("FITTOWIDTH");C31.setFlow("DOWN");C31.iC();C32.setAlignment("TOPCENTER");C32.setColumn(C30);C32.setManage(C62);C32.setParent(C28);
C32.setRow(C29);C32.setSizing("FITTOWIDTH");C32.setFlow("DOWN");C32.iC();C33.setAlignment("TOPCENTER");C33.setColumn(C30);C33.setManage(C73);C33.setParent(C28);C33.setRow(C29);C33.setSizing("FITTOWIDTH");C33.setFlow("DOWN");C33.setMarginBottom(20);C33.setMarginLeft(20);C33.setMarginRight(20);C33.setMarginTop(5);C33.iC();C34.setAlignment("TOPCENTER");C34.setColumn(C30);C34.setManage(C75);C34.setParent(C28);C34.setRow(C29);C34.setSizing("FITTOWIDTH");C34.setFlow("DOWN");C34.setMarginBottom(20);C34.setMarginLeft(20);
C34.setMarginRight(20);C34.setMarginTop(5);C34.iC();C35.setAlignment("TOPCENTER");C35.setColumn(C30);C35.setManage(C78);C35.setParent(C28);C35.setRow(C29);C35.setSizing("FITTOWIDTH");C35.setFlow("DOWN");C35.setMarginBottom(20);C35.setMarginLeft(20);C35.setMarginRight(20);C35.setMarginTop(5);C35.iC();C36.setAlignment("TOPCENTER");C36.setColumn(C30);C36.setManage(C64);C36.setParent(C28);C36.setRow(C29);C36.setSizing("FITTOWIDTH");C36.setFlow("DOWN");C36.iC();C37.setAlignment("TOPCENTER");C37.setColumn(C30);
C37.setManage(C65);C37.setParent(C28);C37.setRow(C29);C37.setSizing("FITTOWIDTH");C37.setFlow("DOWN");C37.setMarginBottom(20);C37.setMarginLeft(20);C37.setMarginRight(20);C37.setMarginTop(5);C37.iC();C38.iC();C39.setDisplayPosition(1);C39.setParent(C38);C39.iC();C40.setDisplayPosition(1);C40.setParent(C38);C40.iC();C41.setAlignment("CENTERLEFT");C41.setColumn(C39);C41.setManage(C76);C41.setMarginLeft(8);C41.setParent(C38);C41.setRow(C40);C41.setSizing("NONE");C41.iC();C42.setAlignment("CENTERLEFT");
C42.setColumn(C39);C42.setManage(C77);C42.setMarginLeft(68);C42.setMarginRight(16);C42.setParent(C38);C42.setRow(C40);C42.iC();C43.iC();C44.setDisplayPosition(1);C44.setParent(C43);C44.iC();C45.setDisplayPosition(1);C45.setParent(C43);C45.iC();C46.setAlignment("CENTERLEFT");C46.setColumn(C44);C46.setManage(C79);C46.setMarginLeft(8);C46.setParent(C43);C46.setRow(C45);C46.setSizing("NONE");C46.iC();C47.setAlignment("CENTERLEFT");C47.setColumn(C44);C47.setFlow("CENTERVERTICAL");C47.setManage(C80);C47.setMarginLeft(68);
C47.setMarginRight(16);C47.setParent(C43);C47.setRow(C45);C47.setSizing("CONTENTHEIGHTFITTOWIDTH");C47.iC();C48.setAlignment("CENTERLEFT");C48.setColumn(C44);C48.setFlow("CENTERVERTICAL");C48.setManage(C81);C48.setMarginLeft(68);C48.setMarginRight(16);C48.setParent(C43);C48.setRow(C45);C48.setSizing("CONTENTHEIGHTFITTOWIDTH");C48.iC();C49.iC();C50.setDisplayPosition(1);C50.setParent(C49);C50.iC();C51.setDisplayPosition(1);C51.setParent(C49);C51.iC();C52.setAlignment("CENTERLEFT");C52.setColumn(C50);
C52.setManage(C66);C52.setMarginLeft(20);C52.setParent(C49);C52.setRow(C51);C52.setSizing("NONE");C52.iC();C53.setAlignment("CENTERLEFT");C53.setColumn(C50);C53.setFlow("CENTERVERTICAL");C53.setManage(C67);C53.setMarginLeft(100);C53.setMarginRight(16);C53.setParent(C49);C53.setRow(C51);C53.setSizing("FITTOWIDTH");C53.iC();C54.setAlignment("CENTERLEFT");C54.setColumn(C50);C54.setFlow("CENTERVERTICAL");C54.setManage(C68);C54.setMarginLeft(100);C54.setMarginRight(50);C54.setParent(C49);C54.setRow(C51);
C54.setSizing("FITTOWIDTH");C54.iC();C55.setAlignment("CENTERLEFT");C55.setColumn(C50);C55.setFlow("CENTERVERTICAL");C55.setManage(C69);C55.setMarginLeft(100);C55.setMarginRight(16);C55.setParent(C49);C55.setRow(C51);C55.setSizing("FITTOWIDTH");C55.iC();C56.setAlignment("CENTERRIGHT");C56.setColumn(C50);C56.setParent(C49);C56.setRow(C51);C56.setSizing("NONE");C56.setMarginRight(16);C56.setManage(C71);C56.iC();C57.setAlignment("BOTTOMLEFT");C57.setColumn(C50);C57.setFlow("CENTERVERTICAL");C57.setManage(C72);
C57.setMarginLeft(100);C57.setParent(C49);C57.setRow(C51);C57.setSizing("FITTOWIDTH");C57.iC();C58.setDisplayPosition(4);C58.setLeft(0);C58.setParent(C22);C58.setTabPosition(1);C58.setTabStop(false);C58.setHeight(800);C58.setWidth(800);C58.setImageAlignment("TOPLEFT");C58.setLayoutManager(C28);C58.setTop(2544);C58.iC();C59.setCaption("Here is a Two line item list with image");C59.setDisplayPosition(1);C59.setLeft(0);C59.setParent(C58);C59.setTabPosition(1);C59.setThemeDrawStyle("Heading3");C59.setTop(0);
C59.setWidth(800);C59.setCaptionMarginTop(20);C59.setHeight(60);C59.setCaptionAlignment("TOPLEFT");C59.setCaptionMarginLeft(20);C59.setCaptionMarginRight(20);C59.setPaddingBottom(20);C59.setWordWrap(true);C59.iC();C60.setDisplayPosition(2);C60.setLeft(0);C60.setParent(C22);C60.setTabPosition(2);C60.setTabStop(false);C60.setHeight(800);C60.setWidth(800);C60.setImageAlignment("TOPLEFT");C60.setLayoutManager(C28);C60.setTop(944);C60.iC();C61.setDisplayPosition(3);C61.setLeft(0);C61.setParent(C22);C61.setTabPosition(4);
C61.setTabStop(false);C61.setHeight(800);C61.setWidth(800);C61.setImageAlignment("TOPLEFT");C61.setLayoutManager(C28);C61.setTop(1744);C61.iC();C62.setCaption("Here is a simple Single line item list with avatar image");C62.setDisplayPosition(1);C62.setLeft(0);C62.setParent(C61);C62.setTabPosition(1);C62.setThemeDrawStyle("Heading3+TopDivider");C62.setTop(0);C62.setWidth(800);C62.setCaptionMarginTop(20);C62.setHeight(60);C62.setCaptionAlignment("TOPLEFT");C62.setCaptionMarginLeft(20);C62.setCaptionMarginRight(20);
C62.setPaddingBottom(20);C62.setWordWrap(true);C62.iC();C63.setDisplayPosition(1);C63.setLeft(0);C63.setParent(C22);C63.setTabPosition(3);C63.setTabStop(false);C63.setHeight(944);C63.setWidth(800);C63.setImageAlignment("TOPLEFT");C63.setLayoutManager(C28);C63.setTop(0);C63.iC();C64.setCaption("Sample Lists");C64.setDisplayPosition(1);C64.setLeft(0);C64.setParent(C63);C64.setTabPosition(4);C64.setThemeDrawStyle("Heading3+TopDivider");C64.setTop(0);C64.setWidth(800);C64.setCaptionMarginTop(20);C64.setHeight(60);
C64.setCaptionAlignment("TOPLEFT");C64.setCaptionMarginLeft(20);C64.setCaptionMarginRight(20);C64.setPaddingBottom(20);C64.setWordWrap(true);C64.iC();C65.setDisplayPosition(3);C65.setLayoutManager(C49);C65.setLeft(20);C65.setParent(C63);C65.setRowHeight(88);C65.setTabPosition(1);C65.setTop(146);C65.setHeight(715);C65.setWidth(760);C65.setThemeDrawStyle("Card");C65.iC();C66.setDisplayPosition(2);C66.setLeft(20);C66.setParent(C65);C66.setTabPosition(1);C66.setTop(14);C66.setIconHeight(60);C66.setHeight(60);
C66.setWidth(60);C66.setThemeDrawStyle("Rounded");C66.setIconAlignment("CENTER");C66.setIconImageSizing("CROPPED");C66.setIconThemeDrawStyle("Rounded");C66.setIconImage(rc1);C66.iC();C67.setCaption("Name");C67.setDisplayPosition(5);C67.setHeight(20);C67.setParent(C65);C67.setTabPosition(2);C67.setTop(14);C67.setWidth(642);C67.setLeft(100);C67.iC();C68.setCaption("Address");C68.setDisplayPosition(7);C68.setHeight(20);C68.setParent(C65);C68.setTabPosition(5);C68.setTop(34);C68.setWidth(608);C68.setThemeDrawStyle("ForegroundSecondary");
C68.setLeft(100);C68.iC();C69.setCaption("Start Date");C69.setDisplayPosition(8);C69.setHeight(20);C69.setParent(C65);C69.setTabPosition(7);C69.setTop(54);C69.setWidth(642);C69.setThemeDrawStyle("ForegroundSecondary+Heading3+Subheading");C69.setLeft(100);C69.iC();C70.setDisplayPosition(6);C70.setHeight(0);C70.setLeft(0);C70.setParent(C65);C70.setTabPosition(6);C70.setTop(0);C70.setWidth(0);C70.setSource(f.F1);C70.setVisible(false);C70.iC();C71.setDisplayPosition(1);C71.setDragStyle("NONE");C71.setHeight(32);
C71.setIcon("more_vert");C71.setIconOpacity(50);C71.setLeft(710);C71.setParent(C65);C71.setTabPosition(8);C71.setTop(28);C71.setWidth(32);C71.setIconAlignment("CENTER");C71.setStyle(C0);C71.iC();C72.setDisplayPosition(4);C72.setHeight(1);C72.setParent(C65);C72.setTabPosition(4);C72.setTop(87);C72.setWidth(658);C72.setThemeDrawStyle("BottomDivider");C72.setLeft(100);C72.iC();C73.setDisplayPosition(1);C73.setLayoutManager(C23);C73.setLeft(20);C73.setParent(C60);C73.setRowHeight(48);C73.setTabPosition(1);
C73.setThemeDrawStyle("Card");C73.setTop(5);C73.setWidth(760);C73.setHeight(715);C73.iC();C74.setCaption("Single line item");C74.setDisplayPosition(2);C74.setHeight(48);C74.setLeft(72);C74.setParent(C73);C74.setTabPosition(1);C74.setThemeDrawStyle("Heading3");C74.setTop(0);C74.setWidth(670);C74.iC();C75.setDisplayPosition(2);C75.setLayoutManager(C38);C75.setLeft(20);C75.setParent(C61);C75.setRowHeight(56);C75.setTabPosition(2);C75.setThemeDrawStyle("Card");C75.setTop(65);C75.setWidth(760);C75.setHeight(715);
C75.iC();C76.setDisplayPosition(1);C76.setHeight(40);C76.setIcon("image");C76.setIconImageSizing("CROPPED");C76.setLeft(8);C76.setParent(C75);C76.setTabPosition(1);C76.setThemeDrawStyle("MediumTitle+Rounded");C76.setTop(8);C76.setWidth(40);C76.setIconAlignment("CENTER");C76.iC();C77.setCaption("Single line item");C77.setDisplayPosition(3);C77.setHeight(56);C77.setLeft(68);C77.setParent(C75);C77.setTabPosition(3);C77.setThemeDrawStyle("Heading3");C77.setTop(0);C77.setWidth(674);C77.iC();C78.setDisplayPosition(2);
C78.setLayoutManager(C43);C78.setLeft(20);C78.setParent(C58);C78.setRowHeight(72);C78.setTabPosition(2);C78.setThemeDrawStyle("Card");C78.setTop(65);C78.setWidth(760);C78.setHeight(715);C78.iC();C79.setDisplayPosition(1);C79.setHeight(32);C79.setIcon("image");C79.setIconImageSizing("CROPPED");C79.setLeft(8);C79.setParent(C78);C79.setTabPosition(1);C79.setThemeDrawStyle("ForegroundMediumPrimary");C79.setTop(20);C79.setWidth(32);C79.setIconAlignment("CENTER");C79.iC();C80.setCaption("Two line item");
C80.setDisplayPosition(3);C80.setHeight(24);C80.setLeft(68);C80.setParent(C78);C80.setTabPosition(3);C80.setThemeDrawStyle("Heading3");C80.setTop(14);C80.setWidth(674);C80.iC();C81.setCaption("Secondary Text");C81.setDisplayPosition(4);C81.setHeight(21);C81.setLeft(68);C81.setParent(C78);C81.setTabPosition(4);C81.setThemeDrawStyle("ForegroundSecondary");C81.setTop(38);C81.setWidth(674);C81.iC();C82.setCaption("List controls provide information, indicate a state, or present actions for list items. List controls appear as icons to the left or right of list text. Here is a sample list of Employees with avatar image.");
C82.setDisplayPosition(2);C82.setLeft(0);C82.setParent(C63);C82.setTabPosition(3);C82.setThemeDrawStyle("Heading3");C82.setTop(60);C82.setWidth(800);C82.setCaptionMarginTop(20);C82.setHeight(81);C82.setCaptionAlignment("TOPLEFT");C82.setCaptionMarginLeft(20);C82.setCaptionMarginRight(20);C82.setPaddingBottom(20);C82.setWordWrap(true);C82.iC();C83.setCaption("Here is a sample list with checkbox to indicate primary action.");C83.setDisplayPosition(4);C83.setLeft(0);C83.setParent(C63);C83.setTabPosition(2);
C83.setThemeDrawStyle("Heading3+TopDivider");C83.setTop(881);C83.setWidth(800);C83.setCaptionMarginTop(20);C83.setHeight(63);C83.setCaptionAlignment("TOPLEFT");C83.setCaptionMarginLeft(20);C83.setCaptionMarginRight(20);C83.setPaddingBottom(20);C83.setWordWrap(true);C83.iC();C84.setCaptionAlignment("CENTER");C84.setCheckState("CHECKED");C84.setDisplayPosition(1);C84.setDragStyle("NONE");C84.setHeight(50);C84.setIconAlignment("CENTER");C84.setLeft(0);C84.setParent(C73);C84.setTabPosition(3);C84.setWidth(50);
C84.setTop(-1);C84.iC();l.WEB().aH("DEVICECHANGED",this,e3);this.setCaption("Lists");this.setHeight(1148);this.setWidth(1081);this.setDisplayPosition(1);this.setLayoutManager(C3);this.setVerticalScroll(true);this.setTabPosition(1);this.aH("PREPARE",this,e2);var li=this.aL("XMDLIST");li.XEMPLOYEELIST=l.cLT({"XEMPLOYID":f.F1,"XEMPTITLE":f.F3,"XSURNAME":f.F4,"XGIVENAME":f.F5,"XEMPDOB":f.F6,"XGENDER":f.F7,"XSTREET":f.F8,"XCITY":f.F9,"XSTATE":f.F10,"XPOSTCODE":f.F11,"XCOUNTRY":f.F12,"XPHONEHME":f.F13,"XPHONEBUS":f.F14,"XPHONEMOB":f.F15,"XSALARY":f.F16,"XSTARTDTE":f.F17,"XTERMDATE":f.F18,"XDEPTMENT":f.F19,"XEMPDEPT":f.F20,"XEMPTHM":f.F21},f.F2);
}});cO.mthLOADEMPLOYEESFROMSERVER=function(){var li=this.LIST.XMDLIST,f=this.FLD.XMDLIST,m=this.REF,r=l.mR(this,cO,"LoadEmployeesFromServer",124),mth=r;var C0=r.cDR("GETEMPLOYEESFROMSERVER","XMDSERVER","GETEMPLOYEES");var C1=r.cD("C1");C0.iC();C0.aH("COMPLETED",this,e1);r.ln=124;{r.ln=129;C0.mthEXECUTEASYNC({},{LIST:{"XEMPLOYEELIST":li.XEMPLOYEELIST}});}r.ln=159;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#GetEmployeesFromServer.Completed",131,mth);r.ln=131;{r.ln=133;{var l1=li.XEMPLOYEELIST.selectList();
while(l1.step()){r.ln=135;C1=r.sR("C1",l.APPL().mthCREATEBITMAP(f.F21.get()));r.ln=138;m.LISTSIMPLE.addEntry();r.ln=139;m.LISTSINGLELINEAVATAR.addEntry();r.ln=140;m.LISTTWOLINE.addEntry();r.ln=141;m.LISTXEMPLOYEE.addEntry();r.ln=143;m.LISTSIMPLELABEL.getCurrentItem().setCaption(l.cat(l.cat(f.F5.get()," "),f.F4.get()));r.ln=144;m.LISTSINGLELINEAVATARLABEL.getCurrentItem().setCaption(l.cat(l.cat(f.F5.get()," "),f.F4.get()));r.ln=146;m.LISTTWOLINELABEL1.getCurrentItem().setCaption(l.cat(l.cat(f.F5.get()," "),f.F4.get()));
r.ln=147;m.LISTTWOLINELABEL2.getCurrentItem().setCaption(l.cat(l.cat(f.F8.get(),f.F8.get()),f.F8.get()));r.ln=149;m.LISTXEMPLOYEEIMAGE.getCurrentItem().setIconImage(C1);r.ln=150;m.LISTXEMPLOYEENAME.getCurrentItem().setCaption(l.cat(l.cat(f.F5.get()," "),f.F4.get()));r.ln=151;m.LISTXEMPLOYEEDESCRIPTION.getCurrentItem().setCaption(l.cat(l.cat(f.F8.get()," "),f.F9.get()));r.ln=152;m.LISTXEMPLOYEESTARTDATE.getCurrentItem().setCaption(l.cat("Started ",l.d.AsString(f.F17.get())));r.ln=154;}l1.end();}}r.ln=156;
r.e();}};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",161);r.ln=161;{r.ln=163;if(l.n.eq(m.LISTXEMPLOYEE.getItems().getItemCount(),0)){r.ln=165;this.mthLOADEMPLOYEESFROMSERVER();}}r.ln=169;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Sys_Web.DeviceChanged",175);r.ln=175;{r.ln=177;{var v1=l.WEB().getDevice();if(r.ln=179,l.s.eq(v1,"MOBILE")){r.ln=181;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=182;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=184;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");
r.ln=185;m.LAYOUTMAINCOLUMN3.setWidth(0);}else if(r.ln=187,l.s.eq(v1,"TABLET")){r.ln=189;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=190;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=192;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=193;m.LAYOUTMAINCOLUMN3.setWidth(0);}else if(r.ln=195,l.s.eq(v1,"DESKTOP")){r.ln=197;m.LAYOUTMAINCOLUMN1.setUnits("PROPORTION");r.ln=198;m.LAYOUTMAINCOLUMN1.setWidth(1);r.ln=200;m.LAYOUTMAINCOLUMN3.setUnits("PROPORTION");r.ln=201;m.LAYOUTMAINCOLUMN3.setWidth(1);}r.ln=203;}}r.ln=205;
r.e();};{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F3.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");
C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F3.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F7.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");
C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F7.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_MD.List","PRIM_MD.ListLabel","PRIM_MD.ListFlatButton","PRIM_MD.ListCheckBox","PRIM_WEB.DataRequest","PRIM_FLD","PRIM_PKLT","PRIM_DTIM"],
dp:["PRIM_BMP"]});