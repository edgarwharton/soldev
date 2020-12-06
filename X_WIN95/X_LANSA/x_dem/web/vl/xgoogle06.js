// ---------------------------
// -- Web Widget: XGOOGLE06 --
// ---------------------------
LANSA.addComponent(
{
   id: "XGOOGLE06", 
   nm: "xGoogleBasicChart", 
   ot: "ww", 
   tp: "Widget", 
   pt: "ap", 
   de: "Basic Google Pie or Bar Chart", 
   tl: 14000101, 
   cl: 15000300
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // -------------------------------------
   // -- Helper functions to fire events --
   // -------------------------------------
   var fnEvents = function( PROTOTYPE )
   {
      PROTOTYPE.fireItemGotSelection = function( parm_Index, parm_Caption, parm_Value )
      {
         var evtParms = Lansa.evtParms();

         evtParms.addIntegerParm( "INDEX", parm_Index );
         evtParms.addStringParm( "CAPTION", parm_Caption );
         evtParms.addDecimalParm( "VALUE", parm_Value );

         Lansa.fireEvent( this, "ITEMGOTSELECTION", evtParms );
      };
   };

   // -----------------------------------
   // -- Define Methods and Properties --
   // -----------------------------------
   var fnWidget = 

      function( PROTOTYPE, WIDGET )
      {
          //--------------------------------------------------------------------------
          // LOAD GOOGLE PIECHART ONLY WHEN THAT IS COMPLETED CAN WE FINALIZE THE WIDGET 
          //--------------------------------------------------------------------------
          google.load( 'visualization', '1', { packages:["corechart","bar"], callback: WIDGET.Finalize } );
      
          //--------------------------------------------------------
          // WIDGET-INTERFACE FUNCTIONS (CALLED FROM THE VL-RUNTIME)
          //--------------------------------------------------------
      
          //
          // 'onCreateInstance' - gets called when LANSA creates an instance of this class.
          //
          PROTOTYPE.onCreateInstance = function()
          {
              // Create the datatable
              this.m_DataTable = new google.visualization.DataTable();
              this.m_DataTable.addColumn( 'string', 'Caption' );
              this.m_DataTable.addColumn( 'number', 'Value' );
              this.m_DrawCounter = 0;  
              this.m_ChartType = "PIE"; 
              this.m_Bars = "vertical";
              this.m_PieChart = null;
              this.m_BarChar  = null;    
              this.m_BarColor = "#ffa726";
              this.parentDiv = null;
          } 
         
          //
          // 'onRealizeControl' - gets called when LANSA creates a visual representation of an instance of this class.
          //
          // Parameters:
          //
          // - parentDiv : the div that's been created as a container for this control. Its size and style are controlled by 
          //               RDMLX, its content by the JavaScript below.
          //
          PROTOTYPE.onRealizeControl = function( parentDiv )
          {
              this.parentDiv = parentDiv;
       
              this.BarCharDiv = document.createElement('div');
              this.BarCharDiv.style.height = "100%";
              this.BarCharDiv.style.width = "100%";
              this.BarCharDiv.style.display = "none";
              this.parentDiv.appendChild(this.BarCharDiv); 
      
              this.PieCharDiv = document.createElement('div');
              this.PieCharDiv.style.height = "100%";
              this.PieCharDiv.style.width = "100%";
              this.PieCharDiv.style.display = "none";
              this.parentDiv.appendChild(this.PieCharDiv); 
          
          }
      
          //
          // 'onSizeChanged - gets called when the widget changes size.
          //
          PROTOTYPE.onSizeChanged = function()
          {
              if (this.m_DrawCounter > 0) this.DrawChart();
          }
      
          //////////////// 
          // Properties //
          //////////////// 
          //
          // ChartType - P = Pie Chart, B = Bar Chart
          //
          // Type: String
          //
          PROTOTYPE.getChartType = function()
          {
              return this.m_ChartType;
          }
      
          PROTOTYPE.setChartType = function( strValue )
          {
              if (strValue.toUpperCase() == "PIE") this.m_ChartType = "PIE";
              else this.m_ChartType = "BAR";
              if (this.m_DrawCounter > 0) this.DrawChart(); 
          }
      
          //
          // Bars - Orientation of bar chart bars. Specify as horizontal or vertical.
          //
          // Type: String
          //
          PROTOTYPE.getBars = function()
          {
              return this.m_Bars;
          }
      
          PROTOTYPE.setBars = function( strValue )
          {
              this.m_Bars = strValue;
          }
          //
          // BarColor - Barchart color in standard #NNNNNN web format
          //
          PROTOTYPE.getBarColor = function()
          {
            return this.m_BarColor;
          }
      
          PROTOTYPE.setBarColor = function( strValue )
          {
            this.m_BarColor = strValue;
          }
      
          ///////////// 
          // Methods //
          ///////////// 
      
          //
          // Add - Add a slice to the chart
          //
          PROTOTYPE.Add = function( decValue, strCaption )
          {    
              this.m_DataTable.addRow( [ strCaption, decValue, ] );
          }
      
          //
          // Clear - Clear the chart
          //
          PROTOTYPE.Clear = function()
          {
              this.m_DataTable.removeRows( 0, this.m_DataTable.getNumberOfRows() );
          }
      
          //
          // DrawChart - Draw the current charts content
          //
          PROTOTYPE.DrawChart = function()
          {
              this.DrawChart();
          }
      
          ////////////////////// 
          // Helper functions //
          ////////////////////// 
      
          //
          // DrawChart
          //
          PROTOTYPE.DrawChart = function()
          {
              this.m_DrawCounter += 1;
      
              this.BarCharDiv.style.display = "none";
              this.PieCharDiv.style.display = "none";
      
              if (this.m_ChartType == "PIE")
              {
                  this.PieCharDiv.style.display = "block";
      
                  if (this.m_PieChart == null)
                  {
                      this.m_PieChart = new google.visualization.PieChart( this.PieCharDiv );
                      this.AttachPieChartEvents(); 
                  }   
      
                  // Draw it using our data.
                  this.m_PieChart.draw( this.m_DataTable, 
                      {
                          title          : '',
                          legend         : 'none',
                          pieSliceText   : 'label',
                          backgroundColor: 'transparent',
                          colors:['#009688','#F44336','#03A9F4','#FFEB3B','#673AB7','#8BC34A','#FF9800','#E91E63','#3F51B5','#FFC107','#4CAF50','#9C27B0','#FF5722','#00BCD4','#CDDC39'], 
                      }); 
       
              }
              else
              {
                  this.BarCharDiv.style.display = "block";
      
                  if (this.m_BarChart == null)
                  {
                      this.m_BarChart = new google.charts.Bar( this.BarCharDiv );
                      this.AttachBarChartEvents(); 
                  }   
      
                  this.m_BarChart.draw( this.m_DataTable, google.charts.Bar.convertOptions(
                      {
                          colors: [ this.m_BarColor ],
                          legend: { position: "none" },
                          bars: this.m_Bars,
                          backgroundColor: 'transparent', chartArea:{ backgroundColor: 'transparent' }
                      })); 
      
              }
          }
      
          //
          // AttachEvents
          //
          PROTOTYPE.AttachPieChartEvents = function()
          {
              var pThis = this;
              // EVENT: select
              google.visualization.events.addListener( this.m_PieChart, 'select', function()
              {
                  var item = pThis.m_PieChart.getSelection()[0];
      
                  if ( item ) 
                  {
                      pThis.fireItemGotSelection( ( item.row + 1 ), pThis.m_DataTable.getValue( item.row, 0 ), pThis.m_DataTable.getValue( item.row, 1 ) );
                  }
              });  
          }
           
          PROTOTYPE.AttachBarChartEvents = function()
          {
              var pThis = this;
              // EVENT: select
              google.visualization.events.addListener( this.m_BarChart, 'select', function()
              {
                  var item = pThis.m_BarChart.getSelection()[0];
      
                  if ( item ) 
                  {
                      pThis.fireItemGotSelection( ( item.row + 1 ), pThis.m_DataTable.getValue( item.row, 0 ), pThis.m_DataTable.getValue( item.row, 1 ) );
                  }
              });  
          }
      
      
          // We're still loading (waiting for a callback)
          return WIDGET.Loading;
      }
   ;

   // ---------------------
   // -- Register Widget --
   // ---------------------
   Lansa.registerWidget(
   {
      nm: "XGOOGLE06", 
      js: [ "https://www.google.com/jsapi" ], 
      fe: fnEvents, 
      fn: fnWidget
   });

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WDGT", 
      at: "Control", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setCHARTTYPE( "P" );
         this.setBARS( "vertical" );
         this.setBARCOLOR( "#ffa726" );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   COM_OWNER.getCHARTTYPE = function()
   {
      return Lansa.toString( this.get( "ChartType" ) );
   };

   COM_OWNER.setCHARTTYPE = function( value )
   {
      this.set( "ChartType", Lansa.toString( value ) );
   };

   COM_OWNER.getBARS = function()
   {
      return Lansa.toString( this.get( "Bars" ) );
   };

   COM_OWNER.setBARS = function( value )
   {
      this.set( "Bars", Lansa.toString( value ) );
   };

   COM_OWNER.getBARCOLOR = function()
   {
      return Lansa.toString( this.get( "BarColor" ) );
   };

   COM_OWNER.setBARCOLOR = function( value )
   {
      this.set( "BarColor", Lansa.toString( value ) );
   };

   COM_OWNER.mthADD = function( Value, Caption )
   {
      this.invoke( "Add", [ Lansa.toNumber( Value ), Lansa.toString( Caption ) ] );
   };

   COM_OWNER.mthCLEAR = function()
   {
      this.invoke( "Clear" );
   };

   COM_OWNER.mthDRAWCHART = function()
   {
      this.invoke( "DrawChart" );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WDGT.Control" ]
});

//# sourceURL=xgoogle06.js
