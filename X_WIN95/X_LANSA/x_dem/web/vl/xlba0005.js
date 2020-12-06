LANSA.addComponent({id:"XLBA0005",nm:"XWebUtil_SetTimeout",ot:"ww",tp:"Widget",de:"[pkg-common] Set Timeout",tl:14000101,cl:14020401},function(l,oI,u){var fF=function(wP){wP.fireOnExecute=function(){l.fE(this,"ONEXECUTE");};};var fW=
(
function (PROTOTYPE, WIDGET)
{
PROTOTYPE.SetTimeout = function (value)
{
var self = this;
setTimeout(function ()
{
self.fireOnExecute();
}, value);
};
PROTOTYPE.onCreateInstance = function ()
{
};
return WIDGET.Completed;
}
)
;l.rWg({nm:"XLBA0005",fe:fF,fn:fW});var cO=l.rC(oI,
{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);}});cO.mthSETTIMEOUT=function(P0){this.invoke("SetTimeout",[l.tI(P0)]);};},{rp:["PRIM_WDGT.Object"]});