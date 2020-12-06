LANSA.addComponent({id:"XLBA0040",nm:"XWebUtil_CurrentURL",ot:"ww",tp:"Widget",de:"[pkg-common] Current URL",tl:14000101,cl:14020401},function(l,oI,u){var fW=
(
function (PROTOTYPE, WIDGET)
{
PROTOTYPE.getHost = function ()
{
return document.location.host;
}
PROTOTYPE.setHost = function()
{
}
PROTOTYPE.getPath = function ()
{
return document.location.pathname;
}
PROTOTYPE.setPath = function()
{
}
PROTOTYPE.getOrigin = function ()
{
return document.location.origin;
}
PROTOTYPE.setOrigin = function()
{
}
PROTOTYPE.onCreateInstance = function ()
{
};
return WIDGET.Completed;
}
)
;
l.rWg({nm:"XLBA0040",fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setHOST("");this.setPATH("");this.setORIGIN("");}});cO.getHOST=function(){return l.tS(this.get("Host"));};cO.setHOST=function(v){this.set("Host",l.tS(v));};cO.getPATH=function(){return l.tS(this.get("Path"));};cO.setPATH=function(v){this.set("Path",l.tS(v));};cO.getORIGIN=function(){return l.tS(this.get("Origin"));};cO.setORIGIN=function(v){this.set("Origin",l.tS(v));};},{rp:["PRIM_WDGT.Object"]
});