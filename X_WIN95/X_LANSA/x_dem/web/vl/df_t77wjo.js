LANSA.addComponent({id:"DF_T77WJO",ot:"ww",tp:"Widget",pt:"ap",de:"Kerberos Test Widget",tl:14000101,cl:15000000},function(l,oI,u){var fF=function(wP){wP.fireVisibilityChanged=function(){l.fE(this,"VISIBILITYCHANGED");};wP.fireKerberosCompleted=function(pStatus,pResponseString){var eP=l.ePs();eP.aS("STATUS",pStatus);eP.aS("RESPONSESTRING",pResponseString);l.fE(this,"KERBEROSCOMPLETED",eP);};};var fW=
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
l.rWg({nm:"DF_T77WJO",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setBROWSERHIDDEN(false);}});cO.getBROWSERHIDDEN=function(){return l.tB(this.get("BrowserHidden"));};cO.setBROWSERHIDDEN=function(v){this.set("BrowserHidden",l.tB(v));};cO.mthZINT_INITIALIZE=function(){this.invoke("zInt_Initialize");};cO.mthZINT_TERMINATE=function(){this.invoke("zInt_Terminate");};cO.mthZINT_CALLKERBEROS=function(P0){return l.tB(this.invoke("zInt_CallKerberos",[l.tS(P0)]));
};},{rp:["PRIM_WDGT.Object"]});