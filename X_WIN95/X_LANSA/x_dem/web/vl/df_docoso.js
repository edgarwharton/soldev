LANSA.addComponent({id:"DF_DOCOSO",nm:"DF_DOC_ISIOS",ot:"ww",tp:"Widget",pt:"ap",de:"\\OC=Detect iPhone iPad iPod Widget",tl:14000101,cl:15000000},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.zInt_Initialize = function ()
{
var pThis = this;
}
PROTOTYPE.zInt_Terminate = function ()
{
}
PROTOTYPE.isIOS = function()
{
if(/iPhone|iPad|iPod/i.test(navigator.userAgent) )
{
return true;
}
else
{
return false;
}
}
return WIDGET.Completed;
}
;l.rWg({nm:"DF_DOCOSO",fn:fW});var cO=l.rC(oI,
{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);}});cO.mthZINT_INITIALIZE=function(){this.invoke("zInt_Initialize");};cO.mthZINT_TERMINATE=function(){this.invoke("zInt_Terminate");};cO.mthISIOS=function(){return l.tB(this.invoke("isIOS"));};},{rp:["PRIM_WDGT.Object"]});