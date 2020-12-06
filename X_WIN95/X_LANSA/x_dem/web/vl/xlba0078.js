LANSA.addComponent({id:"XLBA0078",nm:"XInternal_JsonWriter_Widget",ot:"ww",tp:"Widget",de:"[pkg-common] JsonWriter Widget",tl:14000101,cl:14020401},function(l,oI,u){var fW=
(function (PROTOTYPE, WIDGET) {
PROTOTYPE.onCreateInstance = function () {
this._stack = [];
this._json = undefined;
};
PROTOTYPE.ToString = function () {
return JSON.stringify(this._json);
};
PROTOTYPE.BeginObject = function (key) {
this.newEntry({}, key);
};
PROTOTYPE.EndObject = function () {
this.closeEntry();
};
PROTOTYPE.BeginArray = function (key) {
this.newEntry([], key);
};
PROTOTYPE.EndArray = function () {
this.closeEntry();
};
PROTOTYPE.String = function (value, key) {
this.newEntry(value, key);
};
PROTOTYPE.Decimal = PROTOTYPE.Integer = function (value, key) {
this.newEntry(value, key);
};
PROTOTYPE.Boolean = function (value, key) {
this.newEntry(value, key);
};
PROTOTYPE.Null = function (key) {
this.newEntry(null, key);
};
PROTOTYPE.topOfStack = function () {
return this._stack[this._stack.length - 1];
};
PROTOTYPE.newEntry = function (entry, key) {
var topOfStack = this.topOfStack();
if (typeof topOfStack === "object" && topOfStack) {
if (topOfStack instanceof Array) {
topOfStack.push(entry);
}
else {
topOfStack[key] = entry;
}
}
if (this._stack.length === 0) {
this._json = entry;
}
if (entry !== null && typeof entry === "object") {
this._stack.push(entry);
}
};
PROTOTYPE.closeEntry = function () {
this._stack.pop();
};
return WIDGET.Completed;
});
;
l.rWg({nm:"XLBA0078",fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);}});cO.mthBEGINOBJECT=function(P0){this.invoke("BeginObject",[l.tS(P0)]);};cO.mthENDOBJECT=function(){this.invoke("EndObject");};cO.mthBEGINARRAY=function(P0){this.invoke("BeginArray",[l.tS(P0)]);};cO.mthENDARRAY=function(){this.invoke("EndArray");};cO.mthSTRING=function(P0,P1){this.invoke("String",[l.tS(P0),l.tS(P1)]);};cO.mthDECIMAL=function(P0,P1){this.invoke("Decimal",[l.tN(P0),l.tS(P1)]);};
cO.mthINTEGER=function(P0,P1){this.invoke("Integer",[l.tI(P0),l.tS(P1)]);};cO.mthBOOLEAN=function(P0,P1){this.invoke("Boolean",[l.tB(P0),l.tS(P1)]);};cO.mthNULL=function(P0){this.invoke("Null",[l.tS(P0)]);};cO.mthTOSTRING=function(){return l.tS(this.invoke("ToString"));};},{rp:["PRIM_WDGT.Object"]});