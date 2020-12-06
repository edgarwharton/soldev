
function prepareCanvas ( canvas, report, page )
{
   var objDimension = GetHeightWidth(report, page);
   var canvasWidth = objDimension.canvasWidth;
   var canvasHeight = objDimension.canvasHeight;
   var dpm = objDimension.dpm;
   var canvasScale  = 2;

   canvas.width  = canvasWidth  * canvasScale ; // Size of backing store
   canvas.height = canvasHeight * canvasScale ; // Size of backing store

   canvas.style.width  = canvasWidth  + 'px' ;  // Actual width of canvas
   canvas.style.height = canvasHeight + 'px' ;  // Actual height of canvas
   canvas.style.border = "1px solid #d3d3d3" ;

   var context = canvas.getContext ( "2d" ) ;

   context.scale ( canvasScale, canvasScale ) ;

   /*
     Note: by default, the canvas is transparent black, change to transparent white
   */

   context.save () ; // Create a new drawing state

   context.globalAlpha = 0 ;
   context.fillStyle = '#FFFFFF' ;

   if ( page.background )
   {
     context.globalAlpha = 1 ;
     context.fillStyle = page.background ;
   }

   if ( page.backgroundAlpha )
   {
     context.globalAlpha = page.backgroundAlpha ;
   }

   context.fillRect ( 0, 0, canvasWidth, canvasHeight ) ;

   context.restore () ; // Discard drawing state

   /*
     Canvas metrics
   */

   return {dpm:dpm,width:canvasWidth,height:canvasHeight,landscape:page.landscape} ;

}

function GetHeightWidth ( report, page )
{
   var dpm    = getDPM ( report, page ) ;
   var width  = getCanvasWidth  ( report, page ) ;
   var height = getCanvasHeight ( report, page ) ;
   var canvaswidth = Math[( width  * dpm ) > 0 ? "floor" : "ceil"](width  * dpm );
   var canvasheight = Math[( height  * dpm ) > 0 ? "floor" : "ceil"](height  * dpm );

   return ( { canvasWidth : canvaswidth, canvasHeight : canvasheight, dpm:dpm } ) ;

   function getDPM ( report, page )
   {
      /*
         https://www.w3.org/Style/Examples/007/units.en.html

         https://www.w3.org/TR/css3-values/#absolute-lengths

         CSS requires that 1px must be exactly 1/96th of an inch in all printed output
      */

      var dpi = 96 ;

      if ( report.dpi )
      {
         dpi = report.dpi ;
      }

      if ( report.uom === 'mm' )
      {
         return dpi / 25.4 ;
      }

      return dpi ;
   }

   function getCanvasWidth ( report, page )
   {
     if ( page.canvasWidth )
     {
         return page.canvasWidth ;
     }

     if ( report.canvasWidth )
     {
         return report.canvasWidth ;
     }

     console.warn ( "drawPage: require canvas width" ) ;

     return 0 ;
   }

   function getCanvasHeight ( report, page )
   {
     if ( page.canvasHeight )
     {
         return page.canvasHeight ;
     }

     if ( report.canvasHeight )
     {
         return report.canvasHeight ;
     }

     console.warn ( "drawPage: require canvas height" ) ;

     return 0 ;
   }
}
    
function DrawPage (index) 
{
      try
        {
            var report = this.Report;

            var page = report.ReportPages[index] ;

            var canvas = document.getElementById ( 'page-' + index ) ;

            var canvasMetrics = prepareCanvas ( canvas, report, page ) ;

            /*
                Draw elements
            */

            var context = canvas.getContext ( "2d" ) ;
                    
            for ( var i=0; i < page.PageElements.length; i++ )
            {

                if ( page.PageElements[i].line )
                {
                    drawLine ( context, page.PageElements[i].line ) ;

                    continue ;
                }

                if ( page.PageElements[i].rect )
                {
                    drawRect ( context, page.PageElements[i].rect ) ;

                    continue ;
                }

                if ( page.PageElements[i].text )
                {
                    drawText ( context, page.PageElements[i].text ) ;

                    continue ;
                }

                if ( page.PageElements[i].image )
                {
                    /*
                        Note: image load and draw happens asynchronously
                    */

                    drawImage ( win, context, page.PageElements[i].image ) ;

                    continue ;
                }
            }

            /*
                ================
                HELPER FUNCTIONS
                ================
            */

            function drawLine ( context, element, underline )
            { 
                try
                {
                   context.save () ; // Create a new drawing state

                   var x1,x2,y1,y2;

                   if ( !underline )
                   {
                      x1 = getX ( canvasMetrics, element.xPosFrom ) ;
                      y1 = getY ( canvasMetrics, element.yPosFrom ) ;
                      x2 = ( element.xPosTo > 0 ) ? getX ( canvasMetrics, element.xPosTo ) : (canvasMetrics - element.xPosTo) ;
                      y2 = getY ( canvasMetrics, element.yPosTo) ;
                   }
                   else
                   {
                      x1 = element.xPosFrom;
                      x2 = element.xPosTo;
                      y1 = element.yPosFrom;
                      y2 = element.yPosFrom;
                   }

                   context.strokeStyle = element.color ;
                   context.lineWidth = element.thickness ; // pixels

                   var x = x1 ;
                   var y = y1 ;

                    if ( canvasMetrics.landscape )
                    {
                        x = y1 ;
                        y = canvasMetrics.height - x1 ;
                    }

                    context.beginPath () ;
                    context.moveTo( x1, y1 ) ;
                    context.lineTo( x2, y2 ) ; 
                    context.stroke() ;

                    context.restore () ; // Discard drawing state

                    return ;
                }
                catch ( e )
                {
                    context.restore () ; // Discard drawing state

                    console.log ( "drawLine:", e ) ;
                }
            }

            function drawRect ( context, element )
            {
                try
                {
                    context.save () ; // Create a new drawing state

                    var x = getX ( canvasMetrics, element.xPosFrom ) ;
                    var y = getY ( canvasMetrics, element.yPosFrom ) ;

                    var height, width;

                    width = ( element.width == 0 ) ? (canvasMetrics.width - x) : uMathTrunc ( element.width  * canvasMetrics.dpm ) ;
                    height = ( element.height == 0 ) ? (canvasMetrics.height - y) : uMathTrunc ( element.height  * canvasMetrics.dpm ) ;

                    context.lineWidth = element.thickness ; // pixels

                    var align = element.align.toLowerCase() ;

                    if ( align == 'right' )
                    {
                        x = canvasMetrics.width - width ;
                    }
                    else if ( align == 'center' || align == 'centre' )
                    {
                        x = ( canvasMetrics.width / 2 ) - ( width / 2 ) ;
                    }


                    if (element.backColor != "white")
                    {
                       context.fillStyle = element.backColor ;
                       context.fillRect ( x, y, width, height ) ;

                    }
                    else 
                    {
                       context.strokeStyle = element.color ;
                       context.strokeRect ( x, y, width, height ) ;
                    }

                    context.restore () ; // Discard drawing state

                    return ;
                }
                catch ( e )
                {
                    context.restore () ; // Discard drawing state

                    console.log ( "drawRect:", e ) ;
                }
            }

            function drawText ( context, element )
            {
                try
                {
                    context.save () ; // Create a new drawing state

                    var x = getX ( canvasMetrics, element.xPos ) ;
                    var y = getY ( canvasMetrics, element.yPos ) ;

                    var useBold = element.bold ? "Bold " : "";
                    var useItalic = element.italic ? "Italic normal " : "";

                    context.font = useItalic + useBold + element.FontSize + " " + element.FontName;

                    context.fillStyle = element.FontColor;

                    var textWidth = context.measureText ( element.value ).width;
                    var align = element.align.toLowerCase() ;

                    if ( align == 'right' )
                    {
                        x = canvasMetrics.width - textWidth ;
                    }
                    else if ( align == 'center' || align == 'centre' )
                    {
                        x = ( canvasMetrics.width / 2 ) - ( textWidth / 2 ) ;
                    }
 
                    if ( canvasMetrics.landscape )
                    {
                        x = element.yPos ;
                        y = canvasMetrics.height - x ;
                    }

                    if ( element.value.length > 0 )
                    {
                        context.fillText ( element.value, x, y ) ;
                    }

                    context.restore () ; // Discard drawing state

                    if ( element.underline )
                    {
                        drawLine ( context, { xPosFrom:x, xPosTo:x+textWidth, yPosFrom:y+4, thickness:2, color:element.FontColor }, true );
                    }

                    return ;
                }
                catch ( e )
                {
                    context.restore () ; // Discard drawing state

                    console.log ( "drawText:", e ) ;
                }
            }

            function drawImage ( win, context, element )
            {
                /*
                    Note: Microsoft Edge prints a thin line around some of the image edges
                */

                try
                {
                    var x = getX ( canvasMetrics, element.xPos ) ;
                    var y = getY ( canvasMetrics, element.yPos ) ;

                    var width = element.width ;
                    var height = element.height ;

                    if ( width > 0)
                    {
                        width = uMathTrunc( element.width * canvasMetrics.dpm ) ;
                    }

                    if ( height > 0)
                    {
                        height = uMathTrunc( element.height * canvasMetrics.dpm ) ;
                    }

                    if ( canvasMetrics.landscape )
                    {
                        x = y1 ;
                        y = canvasMetrics.height - x1 ;
                    }

                    /*
                        Note: Microsoft Edge requires img created from win.document

                        https://connect.microsoft.com/IE/feedback/details/2157307/image-object-type-lost-when-accessing-other-pages-element-causing-canvas-drawimage-typemismatch-error
                    */

                    var image = win.document.createElement ( "img" ) ;

                    /*
                        onload and onerror run asynchronously
                    */

                    image.onload = function ()
                    {
                        try
                        {
                            if ( width === 0 && height === 0 )
                            {
                                width = image.naturalWidth ;
                                height = image.naturalHeight ;
                            }
                            else if ( width === 0 )
                            {
                                width = uMathTrunc( height * image.naturalWidth / image.naturalHeight ) ;
                            }
                            else if ( height === 0 )
                            {
                                height = uMathTrunc( width * image.naturalHeight / image.naturalWidth ) ;
                            }

                            context.save () ; // Create a new drawing state
                            context.drawImage ( image, x, y, width, height ) ;
                            context.restore () ; // Discard drawing state

                            return ;
                        }
                        catch ( e )
                        {
                            console.log ( "drawImage:", e ) ;
                        }
                    }

                    image.onerror = function ()
                    {
                        try
                        {
                            if ( width === 0 )
                            {
                                width = 40 ;
                            }

                            if ( height === 0 )
                            {
                                height = 40 ;
                            }

                            context.save () ; // Create a new drawing state

                            try
                            {
                                context.setLineDash ( [4,4] ) ;
                            }
                            catch ( e )
                            {
                                /*
                                    Note: Microsoft Edge throws an Invalid argument exception
                                */
                            }

                            context.translate ( x, y ) ;

                            context.strokeRect ( 0, 0, width, height ) ;

                            context.restore () ; // Discard drawing state

                            return ;
                        }
                        catch ( e )
                        {
                            console.log ( "drawImage:", e ) ;
                        }
                    }

                    image.src = element.src ; // Asynchronous

                    /*
                        Return will happen immediately and other elements will be drawn while the image is being fetched
                    */

                    return ;
                }
                catch ( e )
                {
                    console.log ( "drawImage:", e ) ;
                }
            }

            function getX ( canvasMetrics, measurement )
            {
                /* Avoid floating point coordinates  */

                return uMathTrunc ( canvasMetrics.dpm * measurement ) ;
            }

            function getY ( canvasMetrics, measurement )
            {
                /* Avoid floating point coordinates */

                return uMathTrunc ( canvasMetrics.dpm * measurement ) ;
            }

            function uMathTrunc ( value )
            {
               return ( Math[ value  > 0 ? "floor" : "ceil"] (value));
            }

        }
        catch ( e )
        {
            console.log ( "drawPage:", e ) ;
        }

    /* close this.DrawPage */
    }
    
function Show (report, reportContainer, bPrintPreview)
{
         reportContainer = window.open ( "", "", "width=" + report.winWidth + ",height=" + report.winHeight );

         var doc = this.reportContainer.document ;
         doc.open() ;
         doc.write( "<!DOCTYPE html>" ) ;
         doc.write('<html>') ;
         doc.write( "<head>" ) ;
         doc.write( "<title>" + report.title + "</title>" ) ;
         /*
           Print Styles

           @page{size:A4; margin:0}

           The 0 margin stops the browser from adding a footer and header
         */
         doc.write( "<style media='print'>");
         doc.write( "@page{size:" + report.size + ";margin:0}" ) ;
         doc.write( ".print-div{page-break-after:always}" ) ;
         doc.write( ".print-hidden{display:none}" ) ;

                if ( navigator.userAgent.includes ( "Firefox/" ) )
                {
                    // Use 6mm margin for printing
                    // Firefox does not set the margin to 0, so the printer margin of 4mm is still in place, so add 2mm to bring to 6mm

                    var printMargin = report.printMargin ;

                    if ( report.printMarginFirefox )
                    {
                        printMargin = report.printMarginFirefox ;
                    }

                    doc.write( ".print-canvas{zoom:1.0;margin-top:" + printMargin + report.uom + ";margin-left:" + printMargin + report.uom + ";margin-bottom:0;margin-right:0;border-style:none}" ) ;
                }
                else
                {
                    // Use 6mm margin for printing
                    doc.write( ".print-canvas{zoom:1.0;margin-top:" + report.printMargin + report.uom + ";margin-left:" + report.printMargin + report.uom + ";margin-bottom:0;margin-right:0;border-style:none}" ) ;
                }

                doc.write( "</style>" ) ;

                /*
                    Screen Styles
                */

                doc.write( "<style>" ) ;
                doc.write( "html,body{margin:0;padding:0}" ) ;

/*                 if ( report.printIcon )
                {
                    doc.write( "img{position:absolute;top:" + report.printIcon[0] + "px;left:" + report.printIcon[1] + "px}" ) ;
                } */

                var zoom = 1.0 ;

                if ( report.canvasZoom )
                {
                    zoom = report.canvasZoom ;
                }

                doc.write( "canvas{zoom:" + zoom + ";margin-top:" + report.canvasMarginTop + report.uom + ";margin-left:" + report.canvasMarginLeft + report.uom + ";margin-bottom:0;margin-right:0;border-width:thin;border-style:solid}" ) ;
                //doc.write( ".report-top{margin-top:" + report.screenMarginTop + report.uom + ";margin-left:" + report.canvasMarginLeft + report.uom + ";margin-bottom:0;margin-right:0}" ) ;
                //doc.write( ".report-bottom{margin-top:" + report.screenMarginBottom + report.uom + ";margin-left:" + report.canvasMarginLeft + report.uom + ";margin-bottom:0;margin-right:0}" ) ;
                doc.write( "</style>" );
                doc.write( "</head>" ) ;
                doc.write( "<body>" ) ;

                /*
                    Add report top
                */

                doc.write( "<div class='report-top print-hidden'></div>" ) ;

                /*
                    Add print icon
                */

                doc.write( "<img class='print-hidden' onclick='window.print()' src='data:image/png;base64," +
                                        "R0lGODlhEAAQANUjAIKCgbi4uMDAwc3h+WSVy25ubsrKyuvx+NfW1tbm+/D0+VSJxZeXl/Ly8kRE" +
                                        "RB4eHvj4+MTb9vz8/E2BxKamprrW9eDp96+vr+np6IWx5N/j3/j7/lqQzGiY2o6v3n2k2oSm2LfL" +
                                        "6vf39////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
                                        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAACMALAAAAAAQABAAAAabwJEw" +
                                        "9FksOJyFR8hkLg6KgzSR6TSdioE2shlkQNfRIru1SCfhcSKhrVQUaKYBoF4PIu9JITBCMAx1bHdw" +
                                        "AgUGDAgYAIuMjRiFABISBg2VlpUGkgUAEBAXGgahohoUnZsIfggCq6ypCA57AYgBtLUIALQPexcM" +
                                        "jAUFDsGxuhQBABesrBQPsg8UAA4EIlJSFhYbBA8ODEwE3t/gTEEAOw=='/>" ) ;

                /*
                    Add canvas pages
                */


        for (var i=0; i < report.ReportPages.length; i++)
        {
          doc.write( "<canvas class='print-canvas' id='page-" + i + "'></canvas>" ) ;
          DrawPage(i);
          doc.write( "<div class='print-div'></div>" ) ; // Page break
        }

        if (!bPrintPreview)
        {
          doc.getElementById('printImage').onclick();
        }

        doc.write( "</body>" ) ;
        doc.write( "</html>" ) ;
        doc.close() ;
        
        norotate ( report, false ) ;

        /*
            Monitor print events
        */

        var printing = false ; // Bug: chrome fires two 'before print' events

        if ( win.onbeforeprint === null )
        {
            /*
                Firefox and Microsoft Edge

                How the printing sequence works in Gecko:

                1)  Start with a document D1
                2)  Fire beforeprint on D1's window
                3)  Clone D1 to produce a new document D2
                4)  Fire afterprint on D1's window
                5)  Print D2
            */

            win.onbeforeprint = function ( event )
            {
                beforePrint () ;
            }

            win.onafterprint = function ( event )
            {
                afterPrint () ;
            }
        }

        if ( typeof ( win.onbeforeprint ) === 'undefined' )
        {
            /*
                Chrome
            */

            win.matchMedia ( 'print' ).addListener ( function ( event )
            {
                /*
                    Chrome

                    https://bugs.chromium.org/p/chromium/issues/detail?id=218205
                    https://bugs.chromium.org/p/chromium/issues/detail?id=401179
                    https://bugs.chromium.org/p/chromium/issues/detail?id=422883
                    https://bugs.chromium.org/p/chromium/issues/detail?id=423833
                    ...

                    Firefox

                    https://bugzilla.mozilla.org/show_bug.cgi?id=774398
                */

                if ( event.matches == true )
                {
                    /*
                        Bug: chrome fires two 'before print' events
                    */

                    beforePrint () ;
                } ;

                if ( event.matches == false )
                {
                    afterPrint () ;
                } ;
            } ) ;
        }

        return win ;

        /*
            ================
            HELPER FUNCTIONS
            ================
        */


        function beforePrint ()
        {
            try
            {
                /*
                    Modify DOM before printing
                */

                if ( printing )
                {
                    /*
                        Bug: chrome fires two 'before print' events
                    */

                    return ;
                }

                printing = true ;
                norotate ( report, true ) ;
            }
            catch ( e )
            {
                console.log ( "drawReport: beforePrint:", e ) ;
            }
        }

        function afterPrint ()
        {
            try
            {
                /*
                    Restore DOM after printing or cancel
                */
                printing = false ;
                norotate ( report, false ) ;
            }
            catch ( e )
            {
                console.log ( "drawReport: afterPrint:", e ) ;
            }
        }


        function norotate ( report, beforePrint )
        {
            try
            {
                /*
                    Landscape pages with 'norotate' property are not rotated on screen
                */

                var pages = report.pages ;

                for ( var i=0; i < pages.length; i++ )
                {
                    if ( !pages[i].landscape )
                    {
                        continue ;
                    }

                    /*
                        page is landscape, so rotate by default
                    */

                    var canvas = win.document.getElementById ( 'page-'  + i ) ;

                    if ( !canvas )
                    {
                        continue ;
                    }

                    if ( beforePrint )
                    {
                        /*
                            Remove rotation
                        */

                        canvas.style.marginTop = '' ; // Use empty string to reset
                        canvas.style.transformOrigin = 'initial' ;
                        canvas.style.transform = 'none' ;

                        continue ;
                    }

                    if ( pages[i].norotate )
                    {
                        /*
                            Do not rotate landscape page on screen
                        */

                        continue ;
                    }

                    /*
                        Apply rotation

                        How transform works:

                        Element gets rendered
                        Element gets transformed (moved, rotated, scaled)
                        Elements stay where they got rendered - around the "original element"
                        The white space is where the original element was rendered
                    */

                    var width  = parseInt ( canvas.style.width,  10 ) ; // Ignore trailing px
                    var height = parseInt ( canvas.style.height, 10 ) ; // Ignore trailing px

                    var marginTop = width - height + getPixels ( report, report.canvasMarginTop ) ;

                    /*
                        Bug: Microsoft Edge translateX seems to use the zoomed co-ordinate
                    */

                    var translateX = width ;

                    if ( navigator.userAgent.includes ( "Edge/" ) )
                    {
                        translateX = uMathTrunc ( translateX * report.canvasZoom ) ;
                    }

                    canvas.style.marginTop = marginTop + 'px' ;
                    canvas.style.transformOrigin = 'bottom right' ;
                    canvas.style.transform = 'translateX(-' + translateX + 'px) rotate(90deg)' ;
                }
            }
            catch ( e )
            {
                console.log ( "drawReport: norotate:", e ) ;
            }
        }

        function getPixels ( report, measurement )
        {
            /*
                https://www.w3.org/Style/Examples/007/units.en.html

                https://www.w3.org/TR/css3-values/#absolute-lengths

                CSS requires that 1px must be exactly 1/96th of an inch in all printed output
            */

            var dpi = 96 ;

            if ( report.dpi )
            {
                dpi = report.dpi ;
            }

            if ( report.uom === 'mm' )
            {
                return uMathTrunc ( measurement * dpi / 25.4 ) ;
            }

            return uMathTrunc ( measurement * dpi ) ;
        }        
}     
