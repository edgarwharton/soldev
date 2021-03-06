﻿LANSA.addComponent({id:"XGOOGLE05",nm:"xGoogleMaterialBarChart",ot:"ww",tp:"Widget",pt:"ap",de:"Google Bar Chart",tl:14000101,cl:15000003},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
google.load( 'visualization', '1', { packages:["bar"], callback: WIDGET.Finalize } );
PROTOTYPE.onCreateInstance = function()
{
this.m_DataTable = new google.visualization.DataTable();
this.m_DataTable.addColumn( 'string', '' );
this.m_DataTable.addColumn( 'number', '' );
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
this.m_ParentDiv = parentDiv;
this.m_Chart = new google.charts.Bar( parentDiv );
}
PROTOTYPE.onSizeChanged = function()
{
if ( ( this.m_ParentDiv.clientHeight > 0 ) && ( this.m_ParentDiv.clientWidth > 0 ) )
{
this.DrawChart();
}
}
PROTOTYPE.Add = function( decValue, strCaption )
{
this.m_DataTable.addRow( [ strCaption, decValue  ] );
}
PROTOTYPE.DrawChart = function()
{
if ( this.m_Chart )
{
this.m_Chart.draw( this.m_DataTable, google.charts.Bar.convertOptions(
{
colors: [ '#ffa726' ],
legend: { position: "none" },
bars: 'horizontal',
backgroundColor: 'transparent', chartArea:{ backgroundColor: 'transparent' }
}));
}
}
return WIDGET.Loading;
}
;
l.rWg({nm:"XGOOGLE05",js:["https://www.google.com/jsapi"],fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);}});cO.mthADD=function(P0,P1){this.invoke("Add",[l.tN(P0),l.tS(P1)]);};},{rp:["PRIM_WDGT.Control"]});