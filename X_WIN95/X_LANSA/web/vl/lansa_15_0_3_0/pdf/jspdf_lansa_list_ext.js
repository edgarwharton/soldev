(function(d){d.jsPDF=d.jsPDF||{instance:null};var c=c||{},a="Page ",b="",p=d.jsPDF;c.Ic={QO:4112,OS:4096,x3a:4097,ZC:16,hA:0,PO:1,v3a:272,OO:256,w3a:257,cAb:65536};c.li={QS:0,r7:1,q7:2,LL:3};p.imageDataUrl={};p.jsPDF_fontList=[];p.ovrFont=null;p.vfsFontQueue=[];p.vfsNode=document.createElement("div");p.vfsNode.setAttribute("id","jsPDF-VFSFiles");document.body.appendChild(p.vfsNode);p.fontAlias={FontAwesome:"FontAwesome","font-awesome":"FontAwesome","Noto Sans":"Noto Sans","noto sans":"Noto Sans",
NotoSans:"Noto Sans",notosans:"Noto Sans","Noto Sans CJK jp":"Noto Sans CJK jp","noto sans cjk jp":"Noto Sans CJK jp","NotoSans CJK jp":"Noto Sans CJK jp","notosans cjk jp":"Noto Sans CJK jp",Roboto:"Roboto",roboto:"Roboto",Verdana:"Verdana",verdana:"Verdana"};p.fontFiles={FontAwesome:{fontFamily:"FontAwesome",vfs:"fontawesome-webfont-vfs.js",fonts:[{ttf:"fontawesome-webfont.ttf",style:"normal"}]},"Material Icons":{fontFamily:"Material Icons",vfs:"MaterialIcons-Regular-vfs.js",fonts:[{ttf:"MaterialIcons-Regular.ttf",
style:"normal"}]},"Noto Sans":{fontFamily:"Noto Sans",vfs:"NotoSans-vfs.js",fonts:[{ttf:"NotoSans-Regular.ttf",style:"normal"},{ttf:"NotoSans-Italic.ttf",style:"italic"},{ttf:"NotoSans-Bold.ttf",style:"bold"},{ttf:"NotoSans-BoldItalic.ttf",style:"bolditalic"}]},"Noto Sans CJK jp":{fontFamily:"Noto Sans CJK jp",vfs:"NotoSansCJKjp-vfs.js",fonts:[{ttf:"NotoSansCJKjp-Regular.min.ttf",style:"normal"},{ttf:"NotoSansCJKjp-Bold.min.ttf",style:"bold"}]},Verdana:{fontFamily:"Verdana",vfs:"verdana-vfs.js",fonts:[{ttf:"verdana.ttf",
style:"normal"},{ttf:"verdanai.ttf",style:"italic"},{ttf:"verdanab.ttf",style:"bold"},{ttf:"verdanabi.ttf",style:"bolditalic"}]},Roboto:{fontFamily:"Roboto",uniqueId:"Roboto",vfs:"Roboto-vfs.js",fonts:[{ttf:"Roboto-Bold-webfont.ttf",style:"bold"},{ttf:"Roboto-BoldItalic-webfont.ttf",style:"bolditalic"},{ttf:"Roboto-Italic-webfont.ttf",style:"italic"},{ttf:"Roboto-Regular-webfont.ttf",style:"normal"}]}};p.createDocument=function(a,b,c){this.instance=a=new jsPDF({orientation:a,unit:b,format:c});this.jsPDF_fontList=
Object.keys(a.getFontList());return a};p.reset=function(){for(var a=this.vfsNode;a.firstChild;)a.removeChild(a.firstChild);delete this.imageDataUrl;this.imageDataUrl={};delete this.jsPDF_fontList;this.jsPDF_fontList=[];delete p.instance;this.instance=null};p.UId=function(a){var b=p.fontFiles,c=b[a];c||(a=p.fontAlias[a])&&(c=b[a]);return c?c.fontFamily:null};p.addFont=function(a){if(a){var b=p.instance,c=a.fontFamily;a=a.fonts;for(var d=0;d<a.length;d++){var h=a[d];b.addFont(h.ttf,c,h.style)}}};p.textEx=
function(a,b,c,d,h){var e=/\r\n|\r|\n/g,k=this.internal.getFontSize()/this.internal.scaleFactor,f=null,p=1;if("middle"===h||"bottom"===h||"center"===d||"right"===d)f="string"===typeof a?a.split(e):a,p=f.length||1;c+=k*(2-1.15);"middle"===h?c-=p/2*k:"bottom"===h&&(c-=p*k);if("center"===d||"right"===d){h=k;"center"===d&&(h*=0.5);if(1<p){for(a=0;a<f.length;a++)this.text(f[a],b-this.getStringUnitWidth(f[a])*h,c),c+=k;return this}b-=this.getStringUnitWidth(a)*h}this.text(a,b,c);return this};p.NId=function(a){if("head"===
a.section){var b=a.cell.styles,c=b[a.column.dataKey];Object.keys(c||{}).forEach(function(a){b[a]=c[a]})}};p.LId=function(a){function b(a,c,d,e,f){var l=0;switch(f){case "left":l=a+e;break;case "right":l=a+c-d-e;break;default:l=a+0.5*(c-d)}return l}function d(a,b,c,e,f){var l=0;switch(f){case "top":l=a+e;break;case "bottom":l=a+b-c-e;break;default:l=a+0.5*(b-c)}return l}var p=a.doc,h=a.section,e=a.cell,k=e.styles,f=e.raw,u=f?f._widget:null;if(u&&"body"===h){var A=a.settings.userData.images;a=e.width;
var l=e.height,h=e.x,r=e.y;switch(u.type){case "image":var E=u.url,C=A[E];if(A=C?C.base64:null){var C=u.format||C.ext,f=u.height||e.contentHeight-0.2,x=u.width||f,e=u.height?k.cellPadding:0.1;p.addImage(A,C,b(h,a,x,e,k.halign||"center"),d(r,l,f,e,k.valign||"middle"),x,f,E,u.compression||"NONE",u.rotation||0)}break;case "button":var f=u.caption,k=f.content,f=f.align,x=u.image,K=u.borders,C=K?K.width:null,J=K?K.color:null,E=u.radius,D=u.fillColor||(K?[247,247,247]:[238,238,238]),M=e.styles,ca=M?M.cellPadding?
M.cellPadding:0:0,u=h+0.05*a,r=r+0.1*l,G=0.9*a,e=0.5*G,z=0.8*l,l=0.5*z,W=u+G,y=r+z,ea=K?"FD":"F",aa=K=0,L=p.getTextDimensions(k),S=L.w,H=0.5*S,L=L.h,I=0.5*L,V=null;50<G&&(G=50,e=0.5*G,u=h+(a-G)/2,W=u+G);p.setFillColor(D[0],D[1],D[2]);C&&(a=J?J:M.textColor)&&p.setDrawColor(a[0],a[1],a[2]);E?p.roundedRect(u,r,G,z,l,l,ea):p.rect(u,r,G,z,ea);if(x){if(E=x.url,A=(C=A[E])?C.base64:null){C=C.ext;a=0.35*z;h=0.5*a;J=z=0;switch(x.align){case c.li.QS:switch(f){case c.Ic.ZC:K=u+1;z=K+H-h;J=r+1;aa=J+a+1+I;V=["left",
"middle"];break;case c.Ic.PO:K=W-1;aa=r+l;V=["right","middle"];z=K-H-h;J=aa-I-a-1;J<r&&(J=r+1,aa=J+a+I+1);break;case c.Ic.OO:K=u+e;aa=y-1;V=["center","bottom"];z=K-h;J=aa-L-a-1;break;default:K=u+e,z=K-h,J=r+1,aa=J+a+I+2,V=["center","middle"]}break;case c.li.r7:switch(f){case c.Ic.OS:K=u+e;aa=r+1;V=["center","top"];z=K-h;J=aa+L+1;break;case c.Ic.ZC:J=y-a-1;aa=J-I-1;K=u+1;z=K+H-h;V=["left","middle"];break;case c.Ic.PO:K=W-1;aa=r+l;V=["right","middle"];z=K-H-h;J=aa+I+1;J+a>y&&(J=y-a-1,aa=J-I-1);break;
case c.Ic.OO:K=u+e;z=K-h;J=y-a-1;aa=J-I-1;V=["center","middle"];break;default:K=u+e,aa=r+l,V=["center","middle"],z=K-h,J=aa+I+1,J+a>y&&(J=y-a-1,aa=J-I-1)}break;case c.li.q7:switch(f){case c.Ic.OS:K=u+e;aa=r+1;V=["center","top"];z=K+H+1;J=aa;break;case c.Ic.ZC:K=u+1;aa=r+l;V=["left","middle"];z=K+S+1;J=aa-h;break;case c.Ic.PO:z=W-a-1;K=z-1;aa=r+l;J=aa-h;V=["right","middle"];break;case c.Ic.OO:K=u+e;aa=y-1;V=["center","bottom"];z=K+H+1;J=y-a-1;break;default:K=u+e,aa=r+l,V=["center","middle"],z=K+H+
1,J=aa-h}break;default:switch(f){case c.Ic.OS:K=u+e;aa=r+1;J=r+1;z=K-H-a-1;V=["center","top"];break;case c.Ic.ZC:z=u+1;K=z+a+1;aa=r+l;V=["left","middle"];J=aa-h;break;case c.Ic.PO:K=W-1;aa=r+l;z=K-S-a-1;J=aa-h;V=["right","middle"];break;case c.Ic.OO:K=u+e;aa=y-1;V=["center","bottom"];z=K-H-a-1;J=y-a-1;break;default:K=u+e,aa=r+l,V=["center","middle"],z=K-H-a-1,J=aa-h}}p.addImage(A,C,z,J,a,a,E)}}else switch(f){case c.Ic.OS:K=u+e;aa=r+1;V=["center","top"];break;case c.Ic.ZC:K=u+ca;aa=r+l;V=["left","middle"];
break;case c.Ic.PO:K=u+(G-1);aa=r+l;V=["right","middle"];break;case c.Ic.OO:K=u+e;aa=y-1;V=["center","bottom"];break;default:K=u+e,aa=r+l,V=["center","middle"]}p.textEx(k,K,aa,V[0],V[1])}}};p.MId=function(c){var d=c.doc,p=d.internal,s=c.settings;c=a+p.getNumberOfPages().toString();p=p.pageSize;p=p.height?p.height:p.getHeight();s=s.margin.left;b&&d.setFont(b,"normal");d.setFontSize(9);d.setTextColor(76,76,76);d.text(c,s,p-9)};p.EId=function(a,b){for(var c=0;c<b.length;c++){var d=b[c],h=this[d];h&&
(a[d]=h)}};p.EKd=function(c){a=c.pageFooter;this.ovrFont=b=c.ovrFont};window.jsPDF.API.textEx=p.textEx;window.LANSA.jsPDF.createDocument=p.createDocument;window.LANSA.jsPDF.reset=p.reset;window.LANSA.jsPDF.getFontFamily=p.UId;window.LANSA.jsPDF.addFont=p.addFont;window.LANSA.jsPDF.didParseCell=p.NId;window.LANSA.jsPDF.didDrawCell=p.LId;window.LANSA.jsPDF.didDrawPage=p.MId;window.LANSA.jsPDF.addHooks=p.EId;window.LANSA.jsPDF.setLanguageInfo=p.EKd})(window.LANSA);
