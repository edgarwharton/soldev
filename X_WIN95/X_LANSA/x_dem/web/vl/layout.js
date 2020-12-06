LANSA.addComponent({id:"LAYOUT",nm:"layout",ot:"ww",tp:"Widget",pt:"ap",de:"test",tl:14000101,cl:15000300},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
this.Caption = 'My Widget';
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
parentDiv.appendChild( document.createTextNode( this.Caption ) );
}
PROTOTYPE.onSizeChanged = function()
{
}
return WIDGET.Completed;
}
;l.rWg({nm:"LAYOUT",js:[l.cRc("ButtonPanel.js").get(),l.cRc("Button.js").get()],
st:[l.cRc("Button.css").get(),l.cRc("ButtonPanel.css").get()],fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);}});},{rp:["PRIM_WDGT.Control"]});