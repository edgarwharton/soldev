LANSA.addComponent({id:"VF_SY017O",ot:"ww",tp:"Widget",pt:"ap",de:"\\OC=VLF-ONE System Services Widget",tl:14000101,cl:15000000},function(l,oI,u){var fF=function(wP){wP.fireVisibilityChanged=function(){l.fE(this,"VISIBILITYCHANGED");};wP.fireKerberosCompleted=function(pStatus,pResponseString){var eP=l.ePs();eP.aS("STATUS",pStatus);eP.aS("RESPONSESTRING",pResponseString);l.fE(this,"KERBEROSCOMPLETED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.zInt_Initialize = function ()
{
var pThis = this;
var visibilityChangeEvent;
this.hiddenProperty = "UNKNOWN";
if (typeof document.hidden !== "undefined")
{ // Opera 12.10 and Firefox 18 and later support
this.hiddenProperty = "hidden";
visibilityChangeEvent = "visibilitychange";
} else if (typeof document.msHidden !== "undefined")
{
this.hiddenProperty = "msHidden";
visibilityChangeEvent = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined")
{
this.hiddenProperty = "webkitHidden";
visibilityChangeEvent = "webkitvisibilitychange";
}
this.handleVisibilityChange = function (e) { pThis.fireVisibilityChanged(); };
document.addEventListener(visibilityChangeEvent, this.handleVisibilityChange, false);
}
PROTOTYPE.zInt_Terminate = function ()
{
}
PROTOTYPE.getBrowserHidden = function ()
{
var bResult = false;
if ( document[this.hiddenProperty] ) bResult = true;
return bResult;
}
PROTOTYPE.setBrowserHidden = function (bValue)
{
}
PROTOTYPE.getHistoryLength = function()
{
return window.history.length;
}
PROTOTYPE.setHistoryLength = function( iValue )
{
this.m_HistoryLength = iValue;
}
PROTOTYPE.zInt_SendtoClipboard = function (strFrom)
{
try
{
if ( (typeof(navigator.clipboard) == "object") && (typeof(navigator.clipboard.writeText) == "function") )
{
navigator.clipboard.writeText(strFrom);
}
else
{
const el = document.createElement('textarea');
el.value = strFrom;
el.style.position = 'absolute';
el.style.left = '-1000px';
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);
}
}
catch (e) { alert("Copy to clipboard failed - " + e.description); }
}
PROTOTYPE.zInt_BinarytoHex = function( argstrBINValue )
{
var arrayHEXValues = "0123456789ABCDEF";
var numLoopLimit   = argstrBINValue.length;
var numLoopIndex   = 0;
var numHexWork     = 0;
var strResult      = "";
for (numLoopIndex = 0; numLoopIndex < numLoopLimit; numLoopIndex++)
{
numHexWork = ( argstrBINValue.charCodeAt(numLoopIndex) >> 4 );
if ((numHexWork < 0) || (numHexWork > 255)) window.alert("Conversion error 1 in VF_SY017O.zInt_BinarytoHex with " + numHexWork.toString());
else strResult += arrayHEXValues.charAt(numHexWork);
numHexWork = ( argstrBINValue.charCodeAt(numLoopIndex) & 0x000F);
if ((numHexWork < 0) || (numHexWork > 255)) window.alert("Conversion error 2 in VF_SY017O.zInt_BinarytoHex with " + numHexWork.toString());
else strResult += arrayHEXValues.charAt(numHexWork);
}
return(strResult);
}
PROTOTYPE.zInt_CallKerberos = function( strURL )
{
var xhr = new XMLHttpRequest();
var pThis = this;
xhr.withCredentials = true ;
xhr.onload = function()
{
console.log ( "Load", xhr.response ) ;
pThis.fireKerberosCompleted(  "OK" , xhr.responseText );
}
xhr.onerror = function()
{
console.log ( "Error", xhr.responseText ) ;
pThis.fireKerberosCompleted( "ER" , xhr.responseText );
}
xhr.open ( "GET", strURL , true ) ;
xhr.send();
return true;
}
return WIDGET.Completed;
}
;
l.rWg({nm:"VF_SY017O",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setBROWSERHIDDEN(false);this.setHISTORYLENGTH(0);}});cO.getBROWSERHIDDEN=function(){return l.tB(this.get("BrowserHidden"));};cO.setBROWSERHIDDEN=function(v){this.set("BrowserHidden",l.tB(v));};cO.getHISTORYLENGTH=function(){return l.tI(this.get("HistoryLength"));};cO.setHISTORYLENGTH=function(v){this.set("HistoryLength",l.tI(v));};cO.mthZINT_INITIALIZE=function(){this.invoke("zInt_Initialize");
};cO.mthZINT_TERMINATE=function(){this.invoke("zInt_Terminate");};cO.mthZINT_BINARYTOHEX=function(P0){return l.tS(this.invoke("zInt_BinarytoHex",[l.tS(P0)]));};cO.mthZINT_SENDTOCLIPBOARD=function(P0){this.invoke("zInt_SendtoClipboard",[l.tS(P0)]);};cO.mthZINT_CALLKERBEROS=function(P0){return l.tB(this.invoke("zInt_CallKerberos",[l.tS(P0)]));};},{rp:["PRIM_WDGT.Object"]});