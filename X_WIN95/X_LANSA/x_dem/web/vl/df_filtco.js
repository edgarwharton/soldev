﻿LANSA.addComponent({id:"DF_FILTCO",ot:"rp",tp:"Reusable Part",pt:"ap",de:"\\OC=VLF-ONE Customer Filter",tl:15000000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"DEMO_CUSTNAME",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F3:{nm:"DEMO_ADDRESS",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F4:{nm:"DEMO_CITY",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F5:{nm:"DEMO_ZIP",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F6:{nm:"DEMO_COUNTRY",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]
},F7:{nm:"DEMO_LOCATION",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F8:{nm:"DEMO_CONTACTNAME",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F9:{nm:"DEMO_PHONE",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F10:{nm:"DEMO_MAIL",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F11:{nm:"DEMO_BANK",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]
}};var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,mt:{uInitialize:{}},co:function(){cO.aN.call(this);this.aF("DF_FILTCO",Fd);var C0=this.cF("NEXTCUSTOMERNUMBER",Fd.F1.Dc);var C1=this.cR("GENERATEDCUSTOMERNUMBER","PRIM_ALPH");var C2=this.cF("CUSTOMERCOUNT",Fd.F1.Dc);C0.aD();C0.iC();C1.iC();C2.aD();C2.iC();this.REF.AVLOCALTIMER.aH("TICK",this,e1);this.setHeight(270);this.setWidth(500);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",26);r.ln=26;{r.ln=28;this.setAVFILTERLOCATION("NONE");
r.ln=30;this.setAVALLOWLOCATIONCHANGE(false);r.ln=32;this.mthAVGOTOBUSYSTATE("Loading",false,u);r.ln=34;this.REF.AVLOCALTIMER.setInterval(5);}r.ln=36;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#AVLOCALTIMER.Tick",39);r.ln=39;{r.ln=41;this.REF.AVLOCALTIMER.setInterval(0);r.ln=43;sr2.call(this);r.ln=45;this.mthAVGOTOFREESTATE();}r.ln=47;r.e();};function sr1(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9){var f=this.FLD.DF_FILTCO,m=this.REF,r=l.sR(this,cO,"Add",51);f.F2.set(p0);f.F3.set(p1);f.F4.set(p2);f.F5.set(p3);
f.F6.set(p4);f.F7.set(p5);f.F8.set(p6);f.F9.set(p7);f.F10.set(p8);f.F11.set(p9);r.ln=51;{r.ln=64;m.CUSTOMERCOUNT.set(l.add(m.CUSTOMERCOUNT.get(),1));r.ln=66;m.NEXTCUSTOMERNUMBER.set(l.add(m.NEXTCUSTOMERNUMBER.get(),1));r.ln=68;m.GENERATEDCUSTOMERNUMBER.set(l.cat(l.cat("CN",l.n.AsString(m.NEXTCUSTOMERNUMBER.get())),"EU7"));r.ln=70;this.REF.AVLISTMANAGER.mthADDTOLIST(f.F2.get(),f.F3.get(),m.GENERATEDCUSTOMERNUMBER.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,f.F4.get(),f.F5.get(),f.F6.get(),f.F7.get(),f.F8.get(),f.F9.get(),f.F10.get(),f.F11.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);
}r.ln=72;r.e();};function sr2(){var m=this.REF,r=l.sR(this,cO,"CreateDemoData",76);r.ln=76;{r.ln=78;m.CUSTOMERCOUNT.set(0);r.ln=80;m.NEXTCUSTOMERNUMBER.set(8529);r.ln=82;this.REF.AVLISTMANAGER.mthCLEARLIST(u,u);r.ln=84;sr1.call(this,"Laoreet Consulting","P.O. Box 989, 1488 Tincidunt. Rd.","Saint-L?onard","79061","Haiti","53.37053, -33.0735","Inez","1-375-537-7563","a@eteros.ca","LB59782154987172828438553666");r.ln=85;sr1.call(this,"Egestas Ligula Associates","465-8118 A, Av.","Nellore","78669","Equatorial Guinea","15.97159, 179.15227","Fiona","1-932-116-7405","Nullam.lobortis@scelerisquescelerisque.ca","AL84496686761447543791065673");
r.ln=86;sr1.call(this,"Metus Ltd","Ap #370-354 Imperdiet Av.","Las Vegas","PY61 8DM","Switzerland","47.624, 161.01772","MacKenzie","1-127-298-0358","ac@dignissimpharetraNam.edu","PT11323520025023493379704");r.ln=87;sr1.call(this,"Morbi Associates","9416 Neque St.","Williams Lake","516715","Svalbard and Jan Mayen Islands","85.77335, -54.72736","Melinda","1-358-701-0330","dignissim.pharetra@laciniavitae.org","KZ835376625198405419");r.ln=88;sr1.call(this,"Phasellus In PC","Ap #852-6168 Ligula. Rd.","Vadodara","8067","Argentina","-68.59207, 22.52008","Nora","1-108-986-7999","rutrum@gravidasitamet.co.uk","MR7877933855865334315604516");
r.ln=89;sr1.call(this,"Pede Nunc Inc.","3065 Rutrum. Ave","Mödling","74874","Lebanon","88.87724, 71.98515","Octavia","1-753-882-5722","dui.nec@ac.ca","AD4676077097833180229131");r.ln=90;sr1.call(this,"Dolor Quisque LLP","5531 Tempus Av.","Kapolei","57719","Netherlands","-73.55934, 62.56363","Olivia","1-532-643-6806","Nullam.velit@consectetuercursuset.edu","BE21477449944872");r.ln=91;sr1.call(this,"Mauris Sit Amet Foundation","P.O. Box 203, 7834 Nunc St.","San Juan (San Juan de Tibás)","5850OV","Comoros","46.7873, 43.48225","Grace","1-730-870-3238","ligula@Aliquam.org","GT86408058258854662413401457");
r.ln=92;sr1.call(this,"Tincidunt Aliquam Arcu Ltd","145-8049 Sit Rd.","Ashoknagar-Kalyangarh","47055","Netherlands","23.70304, -166.53039","Levi","1-103-279-9808","elementum@nisi.co.uk","GB62NAKT75138094300363");r.ln=93;sr1.call(this,"Dui Lectus Rutrum Industries","728-6345 Ligula St.","Eckville","9214","El Salvador","-18.4323, 124.79402","Noah","1-490-860-0697","pharetra@risusNuncac.co.uk","AD1087083846608337616926");r.ln=94;sr1.call(this,"Vitae Erat PC","2021 Natoque Street","Bourlers","84582","Sweden","-25.98463, 1.8915","Petra","1-681-968-0453","Nunc@Duis.com","IS766020985172296069478535");
r.ln=95;sr1.call(this,"Natoque Associates","Ap #581-6466 Id Rd.","Brentwood","P9X 5SB","Palestine, State of","-27.00854, 93.68293","Celeste","1-959-582-7859","ultrices.posuere.cubilia@Quisqueporttitoreros.co.uk","TR604609670121822578871691");r.ln=96;sr1.call(this,"Sed Nulla Ante Industries","156-1749 Amet Rd.","Ramsey","8328","Colombia","-63.79996, -101.75614","Kellie","1-900-856-6000","arcu.et.pede@tinciduntorciquis.net","GR5281233443905447038262496");r.ln=97;sr1.call(this,"Sem Semper Associates","5679 Luctus Av.","Sh?diac","W6Z 6GC","Antarctica","45.03759, -162.55721","Jared","1-937-536-0930","Proin@faucibus.ca","GL3909048161401411");
r.ln=98;sr1.call(this,"Sit Institute","698-9401 Mauris. St.","Tuscaloosa","61101","Sierra Leone","-28.16661, -34.99009","Charlotte","1-975-503-2246","mi@quis.org","GT43434617292311819475248221");r.ln=99;sr1.call(this,"Sed Tortor Associates","1496 Sagittis Street","Shipshaw","V88 2AP","Ethiopia","15.60544, 143.04635","Kenneth","1-955-752-9560","non@Curabitur.co.uk","DO18407541676405496516661108");r.ln=100;sr1.call(this,"Est Limited","Ap #488-6249 Aliquam Road","Castiglione di Sicilia","8847DR","Mozambique","-28.44206, -46.11585","Rooney","1-370-964-3763","eros.Nam@elementumategestas.net","SM6302741472717679976689798");
r.ln=101;sr1.call(this,"In Cursus Consulting","Ap #784-5429 Dapibus St.","Hall in Tirol","50958","Bangladesh","32.95416, -18.80493","Eric","1-251-467-0482","accumsan.laoreet@ac.com","BH38258410842999368412");r.ln=102;sr1.call(this,"Orci Consulting","982-7761 Massa Road","Iskenderun","17142-832","Holy See (Vatican City State)","53.41861, -34.6865","Galena","1-508-437-7884","felis@risusodioauctor.edu","DO22606136233010162502839425");r.ln=103;sr1.call(this,"Integer Eu Lacus Inc.","Ap #985-204 Netus Street","Saint-Nazaire","75315","Haiti","11.46378, 57.85966","Blair","1-744-360-0205","Aenean.euismod.mauris@ridiculus.net","IS728827424066504772326202");
r.ln=104;sr1.call(this,"Massa Foundation","P.O. Box 552, 3944 Dictum Avenue","Tillet","29015","Congo (Brazzaville)","28.57777, -145.45119","Bell","1-850-257-3211","In.lorem@purusactellus.co.uk","GL1234264997228238");r.ln=105;sr1.call(this,"Metus Corporation","P.O. Box 898, 4414 Viverra. Rd.","Girona","32366","Grenada","89.15366, -25.70988","Hayley","1-336-188-1294","sagittis.placerat.Cras@Phasellus.com","LT262368657967684924");r.ln=106;sr1.call(this,"Arcu Aliquam Ltd","P.O. Box 723, 6997 At Rd.","North Cowichan","9878AF","South Sudan","-19.92334, 150.74357","Martha","1-197-873-3095","Cum@condimentum.co.uk","BA249955446971653658");
r.ln=107;sr1.call(this,"Justo Sit Amet LLC","8412 Est. Rd.","Lethbridge","572911","Oman","73.95251, 52.49455","Warren","1-372-764-5399","rutrum@dictumsapienAenean.com","CZ3379330624879080096024");r.ln=108;sr1.call(this,"Scelerisque LLP","682-3922 Aenean Street","Fort McPherson","6612","Montserrat","-52.14374, -79.71609","Ethan","1-966-752-5950","adipiscing.elit@gravida.org","PT65137723690098833637409");r.ln=109;sr1.call(this,"Morbi Neque Tellus Industries","P.O. Box 510, 8766 Euismod Ave","Fredericton","84982-271","Nauru","69.77597, 76.67907","Ulric","1-378-110-9781","est.tempor@PhasellusnullaInteger.edu","MU5288282747338917635528712888");
r.ln=110;sr1.call(this,"Lacus Vestibulum Incorporated","P.O. Box 841, 2465 Adipiscing Street","Victoria","20012","Belarus","-64.58941, -28.12102","Robert","1-804-484-8940","a.arcu.Sed@facilisiSed.net","BA621126429574047742");r.ln=111;sr1.call(this,"Hendrerit A Arcu Industries","Ap #693-3169 Donec Rd.","Bundaberg","32-458","Romania","26.2218, 56.30175","Hector","1-976-558-0149","non.lacinia.at@interdum.org","LB91753386065600168243902204");r.ln=112;sr1.call(this,"Gravida Associates","3005 Vitae St.","Berloz","60219","Kuwait","84.05317, 43.69361","Malik","1-817-323-0377","et.netus.et@ac.ca","PL19091950542972591944868667");
r.ln=113;sr1.call(this,"Eu Consulting","6410 Ultrices St.","Langley","28731","El Salvador","47.80523, -178.30062","Myles","1-390-907-2848","Maecenas.ornare.egestas@etlibero.com","CH6889561158472882199");r.ln=114;sr1.call(this,"Suscipit Nonummy Fusce Incorporated","P.O. Box 720, 1808 Vel, Rd.","Ujjain","53971","French Southern Territories","9.39665, 116.23309","Melissa","1-973-907-4357","Donec.elementum@dolorDonec.net","AE925296282836854382045");r.ln=115;sr1.call(this,"Turpis Corporation","Ap #680-3596 Aenean St.","Sitapur","9713","Tuvalu","41.06163, 83.73652","Miriam","1-913-340-6049","fermentum.risus@elit.net","SM4762113487987882405919133");
r.ln=116;sr1.call(this,"Faucibus Institute","Ap #443-4379 Risus. St.","Chicago","30966","Spain","63.92979, -73.79444","Priscilla","1-497-916-5473","vitae@ametdiam.com","LB86400252668647678334793119");r.ln=117;sr1.call(this,"Interdum Inc.","P.O. Box 422, 7812 Vulputate St.","Irricana","1814IK","Micronesia","-57.04594, -82.77223","Hermione","1-500-786-7803","eu@enimgravida.com","TN5478681050117560728933");r.ln=118;sr1.call(this,"Mauris Rhoncus Ltd","P.O. Box 852, 3341 Ridiculus St.","Essex","0617SL","Brazil","89.3057, 14.01705","Christine","1-486-550-1869","a.facilisis.non@mieleifendegestas.net","MU4383796227346085143117930499");
r.ln=119;sr1.call(this,"Ornare Libero PC","8499 Tincidunt, Av.","Ruthin","6660","Trinidad and Tobago","-76.46541, -90.66104","Simone","1-920-527-5052","venenatis.a.magna@sodaleselit.edu","FO1036290834019843");r.ln=120;sr1.call(this,"Aliquam PC","8550 Neque Street","Bundaberg","14-530","Tonga","-24.70635, 113.06707","Alma","1-493-918-7312","luctus.ut@ligulaAeneaneuismod.edu","DE97625984000864453768");r.ln=121;sr1.call(this,"Magna Company","334-197 Non, St.","Kirkintilloch","75496","Djibouti","66.85367, -132.38129","Dorothy","1-302-147-7859","fermentum@sit.net","GT82809450710437800401655254");
r.ln=122;sr1.call(this,"Cursus Non Egestas Inc.","Ap #682-9566 Velit Road","Imphal","70152","India","53.94727, -112.06324","Zoe","1-640-126-6253","sem.consequat.nec@facilisis.edu","NO3047869274945");r.ln=123;sr1.call(this,"Velit Justo Nec Limited","Ap #402-7664 Non Rd.","Jaboatão dos Guararapes","Y8W 1Y3","Luxembourg","4.64372, -161.57177","Lilah","1-871-513-6310","orci@miloremvehicula.edu","SA4177568779521945679959");r.ln=124;sr1.call(this,"Rutrum Eu Ultrices Corp.","4835 Arcu. Rd.","Llandovery","65-687","Kenya","-30.96274, -21.97641","Colby","1-494-846-7735","Quisque@Nuncuterat.org","RS65361434255475826795");
r.ln=125;sr1.call(this,"Fusce Mi PC","Ap #233-9927 Non, Avenue","Gresham","55363-151","Gabon","-13.41212, 25.57901","Robin","1-169-296-2838","viverra@massa.co.uk","PS600686532462886959138340792");r.ln=126;sr1.call(this,"Duis Elementum Dui Industries","Ap #165-7446 Nam Avenue","Recogne","27939","Comoros","-82.42641, -49.66678","Zachery","1-849-391-1531","orci@semperpretium.ca","RS49788931353912732482");r.ln=127;sr1.call(this,"Lacus Cras Interdum LLC","Ap #343-2213 Lacus. St.","Avignon","81807-349","Malaysia","-80.18594, 71.07481","Yoshi","1-277-420-5452","leo.in.lobortis@lobortis.com","MR9542765749242382868185471");
r.ln=128;sr1.call(this,"Tincidunt Pede LLP","3279 Lobortis Road","Mansfield-et-Pontefract","JT53 8MZ","American Samoa","5.65244, -24.31949","Kimberly","1-192-427-1073","Suspendisse.eleifend.Cras@blanditmattis.org","CZ6070269144076934847747");r.ln=129;sr1.call(this,"Ipsum Donec LLC","Ap #653-4711 Ut St.","San Demetrio Corone","7814","Wallis and Futuna","-33.95976, 44.24476","Mikayla","1-304-315-2188","dolor@dictummagnaUt.org","IS877370141456089094020991");r.ln=130;sr1.call(this,"Lobortis Quis Pede Company","530-104 Quam St.","Harrisburg","51099","Cayman Islands","-12.81073, 51.66781","Channing","1-453-453-0630","vel.quam@Inornaresagittis.ca","AZ37046373604765759186873035");
r.ln=131;sr1.call(this,"Phasellus Foundation","Ap #526-5659 Lacus Av.","Cognelee","6927","Virgin Islands, British","15.10632, 32.37575","Martin","1-648-871-2812","libero@vehiculaPellentesquetincidunt.org","CY40706732533656075376429187");r.ln=132;sr1.call(this,"Non Enim Associates","P.O. Box 828, 490 Feugiat Rd.","Vigo","50472","Virgin Islands, British","83.66365, 73.10651","Mufutau","1-926-313-0396","ipsum.nunc.id@Sed.net","GE65402427354774173580");r.ln=133;sr1.call(this,"Faucibus Inc.","3034 Ac Road","Hines Creek","271286","Mali","-54.0458, 12.88262","Felicia","1-893-781-9247","odio.Aliquam.vulputate@malesuada.edu","EE330694083039116808");
r.ln=134;sr1.call(this,"Sed Eu Nibh LLP","882-3579 Natoque Rd.","Artena","803803","Argentina","4.46276, 50.86324","Summer","1-617-614-7001","sem@maurisutmi.org","LI8330807757403448749");r.ln=135;sr1.call(this,"Leo Associates","Ap #139-8691 Posuere Road","Beigem","389188","Qatar","59.58067, 53.08167","Marvin","1-308-981-0003","luctus@ipsumSuspendisse.net","RO88SOBT1891370533519697");r.ln=136;sr1.call(this,"Ipsum Limited","Ap #433-4202 Dolor St.","Bhopal","3668","Dominican Republic","-43.34783, 16.81655","Nyssa","1-334-306-7588","pharetra.felis.eget@Cras.com","GR3228859392777037572011161");
r.ln=137;sr1.call(this,"Feugiat Tellus Lorem Industries","P.O. Box 609, 4119 Quis Rd.","Teralfene","236023","Burkina Faso","8.48593, 29.41408","Ima","1-564-184-6595","at@sollicitudinamalesuada.ca","CH6251573148068025642");r.ln=138;sr1.call(this,"Ante Vivamus Associates","252-3472 Nec Rd.","Comox","848770","Thailand","-3.07351, -52.61538","Lee","1-488-865-6175","purus.ac@Nunc.com","DE63571396302064750227");r.ln=139;sr1.call(this,"Vulputate Dui Nec LLP","227-7879 Feugiat Av.","Sint-Andries","53-361","Canada","-55.35507, 125.09092","Logan","1-249-558-9816","nec@tinciduntcongueturpis.edu","AE212172591002311878457");
r.ln=140;sr1.call(this,"Molestie Sed Corp.","P.O. Box 866, 1534 Augue. Street","Gisborne","7632","Malawi","83.89771, -53.38332","Clarke","1-886-484-5483","velit@MaurisnullaInteger.ca","BG42QDIA09352581872991");r.ln=141;sr1.call(this,"Lobortis Quis Pede Inc.","923-6873 In, Rd.","Fredericton","6209YF","Mauritius","45.31276, 164.341","Kendall","1-537-341-0088","lobortis.ultrices.Vivamus@natoquepenatibus.com","SI77051095110516225");r.ln=142;sr1.call(this,"Integer Aliquam Adipiscing LLP","701-5467 Id, Avenue","Te Awamutu","51772","Yemen","23.69169, -178.19254","Rahim","1-557-908-9150","tortor.nibh@lobortis.org","BG68KLYP41197720290513");
r.ln=143;sr1.call(this,"Fermentum Risus At Limited","P.O. Box 213, 9948 Sociis Av.","Landelies","19824","Madagascar","-56.30172, 178.7203","Kendall","1-803-875-3630","ridiculus@inconsectetueripsum.net","MD1793433617630976794654");r.ln=186;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.n.AsString(m.CUSTOMERCOUNT.get())," customers found."),u,u,this,true,u,u);}r.ln=189;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.setrefAVLISTMANAGER=function(rn)
{cA.setrefAVLISTMANAGER.call(this,rn);};cO.setrefAVFRAMEWORKMANAGER=function(rn){cA.setrefAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC007O"],rp:["PRIM_FLD","PRIM_ALPH"]});