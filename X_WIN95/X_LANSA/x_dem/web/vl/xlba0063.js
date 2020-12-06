LANSA.addComponent({id:"XLBA0063",nm:"XInternal_PayPal_PayButtonWidget",ot:"ww",tp:"Widget",de:"[pkg-integration-lib]",tl:14000101,cl:14020401},function(l,oI,u){var fF=function(wP){wP.fireOnPaymentAuthorized=function(){l.fE(this,"ONPAYMENTAUTHORIZED");};wP.fireOnPaymentExecuted=function(){l.fE(this,"ONPAYMENTEXECUTED");};};var fW=
(function (PROTOTYPE, WIDGET) {
PROTOTYPE.onCreateInstance = function () {
this._clientId = {
sandbox: "",
production: "",
};
};
PROTOTYPE.onRealizeControl = function (parentElement) {
this._parentElement = parentElement;
};
PROTOTYPE.getClientId_Sandbox = function () {
return this._clientId.sandbox;
};
PROTOTYPE.setClientId_Sandbox = function (value) {
this._clientId.sandbox = value;
};
PROTOTYPE.getClientId_Production = function () {
return this._clientId.production;
};
PROTOTYPE.setClientId_Production = function (value) {
this._clientId.production = value;
};
PROTOTYPE.Setup = function (jsonPayment) {
var _this = this;
var payment = JSON.parse(jsonPayment);
paypal.Button.render({
env: 'sandbox',
client: {
sandbox: this._clientId.sandbox,
production: this._clientId.production,
},
locale: 'en_US',
style: {
size: 'small',
color: 'gold',
shape: 'pill',
},
commit: true,
payment: function (data, actions) {
return actions.payment.create(payment);
},
onAuthorize: function (data, actions) {
_this.fireOnPaymentAuthorized();
return actions.payment.execute()
.then(function () {
_this.fireOnPaymentExecuted();
});
}
}, this._parentElement);
};
return WIDGET.Completed;
});
;
l.rWg({nm:"XLBA0063",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setCLIENTID_PRODUCTION("");this.setCLIENTID_SANDBOX("");}});cO.getCLIENTID_PRODUCTION=function(){return l.tS(this.get("ClientId_Production"));};cO.setCLIENTID_PRODUCTION=function(v){this.set("ClientId_Production",l.tS(v));};cO.getCLIENTID_SANDBOX=function(){return l.tS(this.get("ClientId_Sandbox"));};cO.setCLIENTID_SANDBOX=function(v){this.set("ClientId_Sandbox",l.tS(v));};cO.mthSETUP=function(P0)
{this.invoke("Setup",[l.tS(P0)]);};},{rp:["PRIM_WDGT.Control"]});