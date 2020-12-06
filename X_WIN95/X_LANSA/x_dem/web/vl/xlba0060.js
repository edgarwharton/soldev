LANSA.addComponent({id:"XLBA0060",nm:"XWebUtil_AddScript",ot:"ww",tp:"Widget",de:"[pkg-common] Include Script in Webpg",tl:14000101,cl:14020401},function(l,oI,u){var fF=function(wP){wP.fireOnLoaded=function(){l.fE(this,"ONLOADED");};};var fW=
(function (PROTOTYPE, WIDGET) {
PROTOTYPE.onCreateInstance = function () {
this._loaded = false;
};
PROTOTYPE.LoadScript = function (id, url) {
var _this = this;
var scriptElementId = generateScriptElementId(id);
var scriptElement = document.getElementById(scriptElementId);
if (scriptElement) {
var loaded = !!scriptElement.dataset.loaded;
if (loaded) {
this.fireOnLoaded();
}
else {
scriptElement.addEventListener("load", function () { return _this.fireOnLoaded(); });
}
}
else {
var scriptElement_1 = document.createElement("script");
scriptElement_1.src = url;
scriptElement_1.id = scriptElementId;
scriptElement_1.addEventListener("load", function () {
scriptElement_1.dataset.loaded = "1";
_this.fireOnLoaded();
});
document.body.appendChild(scriptElement_1);
}
};
function generateScriptElementId(sourceId) {
return "lscript_" + sourceId;
}
return WIDGET.Completed;
});
;
l.rWg({nm:"XLBA0060",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);}});cO.mthLOADSCRIPT=function(P0,P1){this.invoke("LoadScript",[l.tS(P0),l.tS(P1)]);};},{rp:["PRIM_WDGT.Control"]});