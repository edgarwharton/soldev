LANSA.addComponent({id:"BPFWGT001",nm:"BPFBrowserEvents",ot:"ww",tp:"Widget",pt:"ap",de:"Portal Browser Events",tl:14000101,cl:15000300},function(l,oI,u){var fF=function(wP){wP.fireOnline=function(){l.fE(this,"ONLINE");};wP.fireOffline=function(){l.fE(this,"OFFLINE");};wP.firePageShow=function(pisSafari){var eP=l.ePs();eP.aB("ISSAFARI",pisSafari);l.fE(this,"PAGESHOW",eP);};wP.fireOnMobileBrowserVisbilityChange=function(pVisible){var eP=l.ePs();eP.aB("VISIBLE",pVisible);l.fE(this,"ONMOBILEBROWSERVISBILITYCHANGE",eP);
};wP.fireOnPageHide=function(){l.fE(this,"ONPAGEHIDE");};};var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
this.AttachEvents();
this.m_isMicrosoftBrowser = (window.navigator.msSaveOrOpenBlob);
var pThis = this;
var rh = ['96C03B44B98B8FD7D398D594D685542F','0110C808C26670F426252B45D081BE0C','0110C808C26670F40F71792A8CE6BF2C'];
XMLHttpRequest.prototype.origOpen=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function () {
this.origOpen.apply(this,arguments);
as=arguments;
if (as[0]===mt[0]) {
if (pThis.m_utID) {
this.setRequestHeader(ld(rh[0],mt[1]),pThis.m_sV);
}
if ((as[1].search('w=')>0)&&(as[1].search('r=')>0)) {
pm=as[1].split("&");i=pm.length-1;r2=pm[1].substring(2);s1=pm[i].substring(3);
this.setRequestHeader(ld(rh[1],mt[1]),le(r2,s1));this.setRequestHeader(ld(rh[2],mt[1]),s1);
}
};
}
}
PROTOTYPE.getPageHidden = function()
{
return document.hidden;
}
PROTOTYPE.setPageHidden = function( strValue )
{
this.m_PageVisible = strValue;
}
PROTOTYPE.getUseTransactionID = function()
{
return this.m_utID;
}
PROTOTYPE.setUseTransactionID = function( bValue )
{
this.m_utID = bValue;
}
PROTOTYPE.GetRandomValue = function()
{
var bf = new Uint32Array(1);
var cy = window.crypto || window.msCrypto;
this.m_sV = cy.getRandomValues(bf)[0];
return this.m_sV;
}
PROTOTYPE.getIsInternetExplorer = function()
{
this.m_IsInternetExplorer = (navigator.userAgent.toLowerCase().indexOf("trident") >= 0);
return this.m_IsInternetExplorer;
}
PROTOTYPE.setIsInternetExplorer = function( bValue )
{
this.m_IsInternetExplorer = bValue;
}
PROTOTYPE.getIsFireFox = function()
{
this.m_IsFireFox = (navigator.userAgent.toLowerCase().indexOf("firefox/") >= 0);
return this.m_IsFireFox;
}
PROTOTYPE.setIsFireFox = function( bValue )
{
this.m_IsFireFox = bValue;
}
PROTOTYPE.getIsAppleSafari = function()
{
this.m_IsAppleSafari = ((navigator.userAgent.toLowerCase().indexOf("chrome/") == -1) && (navigator.userAgent.toLowerCase().indexOf("safari/") >= 0));
return this.m_IsAppleSafari
}
PROTOTYPE.setIsAppleSafari = function( bValue )
{
this.m_IsAppleSafari = bValue;
}
PROTOTYPE.getIsOldEdge = function()
{
this.m_IsOldEdge = (navigator.userAgent.toLowerCase().indexOf("edge/") >= 0)
return this.m_IsOldEdge;
}
PROTOTYPE.setIsOldEdge = function( bValue )
{
this.m_IsOldEdge = bValue;
}
PROTOTYPE.getNavigationType = function()
{
if ((navigator.userAgent.toLowerCase().indexOf("trident") >= 0) || (navigator.userAgent.toLowerCase().indexOf("edge/") >= 0) || (performance.getEntriesByType("navigation").length < 1)) {
return 'unknown';
} else {
return performance.getEntriesByType("navigation")[0].type;
}
}
PROTOTYPE.setNavigationType = function( strValue )
{
this.m_NavigationType = strValue;
}
PROTOTYPE.getLanguage = function()
{
return navigator.language;
}
PROTOTYPE.setLanguage = function( strValue )
{
}
PROTOTYPE.getUserLanguage = function()
{
return localStorage['BPF.LANGUAGE.OVERRIDE'];
}
PROTOTYPE.setUserLanguage = function( strValue )
{
if (strValue != '') {
localStorage['BPF.LANGUAGE.OVERRIDE'] = strValue;
}
}
PROTOTYPE.getLanguageVersion = function()
{
return this.m_LanguageVersion;
}
PROTOTYPE.setLanguageVersion = function( strValue )
{
if (strValue != '') {
this.m_LanguageVersion = strValue;
} else {
this.m_LanguageVersion = PORTALIZE.languageVersion;
}
}
PROTOTYPE.AttachEvents = function()
{
var pThis = this;
window.addEventListener("offline", function(e)
{
pThis.fireOffline();
});
window.addEventListener("online", function(e)
{
pThis.fireOnline();
});
if (navigator.userAgent.toLowerCase().indexOf("mobile") >= 0) {
var visibilityChange;
if (typeof document.hidden !== "undefined") {
visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") { // Firefox up to v17
visibilityChange = "mozvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
visibilityChange = "webkitvisibilitychange";
}
document.addEventListener(visibilityChange, function(e) {
if (navigator.userAgent.toLowerCase().includes('mobile')) {
pThis.fireOnMobileBrowserVisbilityChange(!document.hidden);
}
}, {capture: true});
}
if ((navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) != null)){
window.addEventListener("pageshow", function(e) {
if (e.persisted) { window.location.reload(); }
}, false);
}
if ((navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) != null)){
window.addEventListener("pagehide", function(e) {
pThis.fireOnPageHide();
}, {capture: true});
}
}
PROTOTYPE.Download = function(strReturnedFilename, strDownloadFilename)
{
if (this.m_isMicrosoftBrowser)  // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
{
this.GetBlobFromUrlObject(strReturnedFilename, strDownloadFilename);
}
else
{
var a = window.document.createElement("a");
a.href = strReturnedFilename;
a.download = strDownloadFilename;
document.body.appendChild(a);
a.click();  // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
document.body.removeChild(a);
}
}
PROTOTYPE.GetBlobFromUrlObject = function(strReturnedFilename, strDownloadFilename)
{
var xhr = new XMLHttpRequest();
xhr.open('GET', strReturnedFilename, false);
xhr.responseType = 'blob';
xhr.onload = function(e) {
if (this.status == 200) {
window.navigator.msSaveBlob(this.response, strDownloadFilename);
}
};
xhr.send();
}
PROTOTYPE.Reload = function()
{
window.location.reload();
}
return WIDGET.Completed;
}
;
l.rWg({nm:"BPFWGT001",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setPAGEHIDDEN(false);this.setUSETRANSACTIONID(false);this.setISINTERNETEXPLORER(false);this.setISFIREFOX(false);this.setISAPPLESAFARI(false);this.setISOLDEDGE(false);this.setNAVIGATIONTYPE("");this.setLANGUAGE("");this.setUSERLANGUAGE("");this.setLANGUAGEVERSION("");}});cO.getPAGEHIDDEN=function(){return l.tB(this.get("PageHidden"));};cO.setPAGEHIDDEN=function(v){this.set("PageHidden",l.tB(v));
};cO.getUSETRANSACTIONID=function(){return l.tB(this.get("UseTransactionID"));};cO.setUSETRANSACTIONID=function(v){this.set("UseTransactionID",l.tB(v));};cO.getISINTERNETEXPLORER=function(){return l.tB(this.get("IsInternetExplorer"));};cO.setISINTERNETEXPLORER=function(v){this.set("IsInternetExplorer",l.tB(v));};cO.getISFIREFOX=function(){return l.tB(this.get("IsFireFox"));};cO.setISFIREFOX=function(v){this.set("IsFireFox",l.tB(v));};cO.getISAPPLESAFARI=function(){return l.tB(this.get("IsAppleSafari"));
};cO.setISAPPLESAFARI=function(v){this.set("IsAppleSafari",l.tB(v));};cO.getISOLDEDGE=function(){return l.tB(this.get("IsOldEdge"));};cO.setISOLDEDGE=function(v){this.set("IsOldEdge",l.tB(v));};cO.getNAVIGATIONTYPE=function(){return l.tS(this.get("NavigationType"));};cO.setNAVIGATIONTYPE=function(v){this.set("NavigationType",l.tS(v));};cO.getLANGUAGE=function(){return l.tS(this.get("Language"));};cO.setLANGUAGE=function(v){this.set("Language",l.tS(v));};cO.getUSERLANGUAGE=function(){return l.tS(this.get("UserLanguage"));
};cO.setUSERLANGUAGE=function(v){this.set("UserLanguage",l.tS(v));};cO.getLANGUAGEVERSION=function(){return l.tS(this.get("LanguageVersion"));};cO.setLANGUAGEVERSION=function(v){this.set("LanguageVersion",l.tS(v));};cO.mthGETRANDOMVALUE=function(){return l.tI(this.invoke("GetRandomValue"));};cO.mthDOWNLOAD=function(P0,P1){this.invoke("Download",[l.tS(P0),l.tS(P1)]);};cO.mthRELOAD=function(){this.invoke("Reload");};},{rp:["PRIM_WDGT.Control"]});