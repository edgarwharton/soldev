window.LANSA.addSrc("scur",function(d){var c=d.k4a={};c.rSc=function(a,b){if(""==b)return a;for(var d="",t=Array(2),l=Array(4),q=c.GTb(b),s=c.yyc(a);0!=s.length%8;)s.push(0);l[0]=c.o2(q,0);l[1]=c.o2(q,4);l[2]=c.o2(q,8);l[3]=c.o2(q,12);for(q=0;q<s.length;q+=8)t[0]=c.o2(s,q),t[1]=c.o2(s,q+4),c.BFd(t,l),d+=c.flc(t[0])+c.flc(t[1]);return d};c.XLc=function(a,b){if(""==b)return a;var d=Array(2),t=Array(4),l=c.GTb(b);t[0]=c.o2(l,0);t[1]=c.o2(l,4);t[2]=c.o2(l,8);t[3]=c.o2(l,12);for(var l=[],q=0;q<a.length;q+=
16)d[0]=c.glc(a.substr(q,8)),d[1]=c.glc(a.substr(q+8,8)),c.CFd(d,t),c.zyc(d[0],l),c.zyc(d[1],l);return c.AFd(l)};c.BFd=function(a,b){for(var c=a[0],d=a[1],l=0,q=32;0<q--;)c+=(d<<4^d>>>5)+d^l+b[l&3],l+=2654435769,d+=(c<<4^c>>>5)+c^l+b[l>>>11&3];a[0]=c;a[1]=d};c.CFd=function(a,b){for(var c=a[0],d=a[1],l=3337565984,q=32;0<q--;)d-=(c<<4^c>>>5)+c^l+b[l>>>11&3],l-=2654435769,c-=(d<<4^d>>>5)+d^l+b[l&3];a[0]=c;a[1]=d};c.o2=function(a,b){var c=new Number(0),c=c+a[b],c=c+(a[b+1]<<8),c=c+(a[b+2]<<16);return c+=
a[b+3]<<24};c.glc=function(a){for(var b=0,c=0,d=0;4>d;d++){var l=parseInt(a.charAt(c++)+a.charAt(c++),16);switch(d){case 0:break;case 1:l<<=8;break;case 2:l<<=16;break;default:l<<=24}b+=l}return b};c.uie=function(a){return String.fromCharCode(a&255,a>>>8&255,a>>>16&255,a>>24&255)};c.zyc=function(a,b){b.push(a&255);b.push(a>>>8&255);b.push(a>>>16&255);b.push(a>>>24&255)};c.flc=function(a){for(var b="",c=0,d=0;4>d;d++){switch(d){case 0:c=a&255;break;case 1:c=a>>>8&255;break;case 2:c=a>>>16&255;break;
default:c=a>>>24&255}var l=c&15,b=b+"0123456789ABCDEF".charAt((c&240)>>>4),b=b+"0123456789ABCDEF".charAt(l)}return b};c.GTb=function(a){a=c.yyc(a);for(var b=0,d=[];16>d.length;)d.push(a[b++]),b>=a.length&&(b=0);return d};c.yyc=function(a){var b=[];try{a=unescape(encodeURIComponent(a))}catch(c){}for(var d=0;d<a.length;d++)b.push(a.charCodeAt(d)&255);return b};c.AFd=function(a){for(var b=[],c=0;c<a.length&&0!=a[c];c++)b.push(String.fromCharCode(a[c]));b=b.join("");try{b=decodeURIComponent(escape(b))}catch(d){}return b}});