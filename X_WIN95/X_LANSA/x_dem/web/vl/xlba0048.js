LANSA.addComponent({id:"XLBA0048",nm:"XWebUtil_DispatchEvent",ot:"ww",tp:"Widget",de:"[pkg-common] Event",tl:14000101,cl:14020401},function(l,oI,u){var fW=
(function (PROTOTYPE, WIDGET) {
PROTOTYPE.onCreateInstance = function () {
this._details = {};
};
PROTOTYPE.AddStringValue = PROTOTYPE.AddIntegerValue = function (key, value) {
this._details[key] = value;
};
PROTOTYPE.Dispatch = function (eventName) {
var ev = document.createEvent("CustomEvent");
ev.initCustomEvent(eventName, true, true, this._details);
return window.dispatchEvent(ev);
};
return WIDGET.Completed;
});
;
l.rWg({nm:"XLBA0048",fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);}});cO.mthADDSTRINGVALUE=function(P0,P1){this.invoke("AddStringValue",[l.tS(P0),l.tS(P1)]);};cO.mthADDINTEGERVALUE=function(P0,P1){this.invoke("AddIntegerValue",[l.tS(P0),l.tI(P1)]);};cO.mthDISPATCH=function(P0){this.invoke("Dispatch",[l.tS(P0)]);};},{rp:["PRIM_WDGT.Object"]});