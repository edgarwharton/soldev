LANSA.addComponent({id:"XEX00053",nm:"XDemoDeviceUtil",ot:"ww",tp:"Widget",de:"[pkg-ex-lansa-mobile]",tl:14000101,cl:14020401},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
setTimeout(function() {
if(typeof LONGRANGE === "undefined")
{
clearPage();
}
}, 2000);
}
return WIDGET.Completed;
function clearPage()
{
document.writeln('<html><head>');
document.writeln('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">');
document.writeln('</head><body style="margin: 20px">');
document.write('You need to run this web application using the <strong>LANSA Mobile app</strong>.<br><br>');
document.write('<a href="https://blogs.developer.lansa.com/docs/lansa-mobile/not-in-lansa-mobile">Click here for more information</a>');
document.writeln('</body></html>');
}
}
;
l.rWg({nm:"XEX00053",fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);}});},{rp:["PRIM_WDGT.Control"]});