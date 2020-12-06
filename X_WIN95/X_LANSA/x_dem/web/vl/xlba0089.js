LANSA.addComponent({id:"XLBA0089",nm:"XInternal_Google_Recaptcha_Widget_V2",ot:"ww",tp:"Widget",de:"[pkg-integration-lib]",tl:14000101,cl:14020401},function(l,oI,u){var fF=function(wP){wP.fireOnError=function(pMessage){var eP=l.ePs();eP.aS("MESSAGE",pMessage);l.fE(this,"ONERROR",eP);};};var fW=
(function (PROTOTYPE, WIDGET) {
window["googleServices_onRecaptchaScriptLoaded"] = function () {
WIDGET.Finalize();
};
PROTOTYPE.onCreateInstance = function () {
this._siteKey = "";
};
PROTOTYPE.onRealizeControl = function (parentElement) {
this._parentElement = parentElement;
};
PROTOTYPE.setSiteKey = function (value) {
this._siteKey = value;
};
PROTOTYPE.getSiteKey = function () {
return this._siteKey;
};
PROTOTYPE.GetResponse = function () {
return this._recaptchaId !== undefined ?
grecaptcha.getResponse(this._recaptchaId) :
"";
};
PROTOTYPE.Setup = function () {
try {
this._recaptchaId = grecaptcha.render(this._parentElement, {
"sitekey": this._siteKey,
"theme": "light"
});
}
catch (e) {
var el = this._parentElement;
el.textContent = e.toString();
el.style.backgroundColor = "red";
el.style.color = "white";
el.style.verticalAlign = "middle";
el.style.padding = "10px";
this.fireOnError(e.toString());
}
};
return WIDGET.Loading;
});
;
l.rWg({nm:"XLBA0089",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setSITEKEY("");}});cO.getSITEKEY=function(){return l.tS(this.get("SiteKey"));};cO.setSITEKEY=function(v){this.set("SiteKey",l.tS(v));};cO.mthSETUP=function(){this.invoke("Setup");};cO.mthGETRESPONSE=function(){return l.tS(this.invoke("GetResponse"));};},{rp:["PRIM_WDGT.Control"]});