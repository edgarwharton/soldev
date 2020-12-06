LANSA.addComponent({id:"BPFWGT000",nm:"BPFGoogleAnalyticsAPI",ot:"ww",tp:"Widget",pt:"ap",de:"Google Analytics API",tl:14000101,cl:15000300},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
window.dataLayer = window.dataLayer || [];
this.gtag = function() {dataLayer.push(arguments);}
this.gtag('js', new Date());
this.timings = [];
}
PROTOTYPE.getGA_Measurement_ID = function()
{
return this.m_GA_Measurement_ID;
}
PROTOTYPE.setGA_Measurement_ID = function( strValue )
{
this.m_GA_Measurement_ID = strValue;
}
PROTOTYPE.getEnabled = function()
{
return this.m_Enabled;
}
PROTOTYPE.setEnabled = function( bValue )
{
this.m_Enabled = bValue;
var disableString = 'ga-disable-' + this.m_GA_Measurement_ID
window[disableString] = (!this.m_Enabled);
}
PROTOTYPE.UpdatePageView = function(strPageTitle)
{
var pathData = {}; pathData.page_path = window.location.href.substring((window.location.href.lastIndexOf('/')));
if (strPageTitle != '') { pathData.page_title = strPageTitle; }
this.gtag('config', this.m_GA_Measurement_ID, pathData);
}
PROTOTYPE.UpdateUserIdentification = function( strUserValue )
{
var userdata = {}; userData.user_id = strUserValue;
this.gtag('config', this.m_GA_Measurement_ID, userData);
}
PROTOTYPE.SendEvent = function( strAction, strCategory, strLabel, iValue )
{
var eventData = {};
if (strCategory != '') {
eventData.event_category = strCategory;
}
if (strLabel != '') {
eventData.event_label = strLabel;
}
if (iValue != '0') {
eventData.value = parseInt(iValue);
}
this.gtag('event', strAction, eventData);
}
PROTOTYPE.SendScreenView = function( strApplicationName, strScreenName )
{
var eventData = {};
eventData.app_name = strApplicationName;
eventData.screen_name = strScreenName;
this.gtag('event', 'screen_view', eventData);
}
PROTOTYPE.StartUserTimingEvent = function( strName, strCategory, strLabel )
{
var newTimingEvent = {};
newTimingEvent.name = strName;
newTimingEvent.event_category = strCategory;
if (strLabel != '') { newTimingEvent.event_label = strLabel; }
newTimingEvent.value = new Date();
this.timings.push(newTimingEvent);
return (this.timings.length - 1);
}
PROTOTYPE.StopUserTimingEvent = function( iTimingIdentifier )
{
var end = new Date();
var timingData = (this.timings.splice(iTimingIdentifier,1))[0];
timingData.value = (end.getTime() - timingData.value.getTime());
this.gtag('event', 'timing_complete', timingData);
}
PROTOTYPE.SendException = function( strDescription, bFatal )
{
var eventData = {};
eventData.description = strDescription;
eventData.fatal = (bFatal == 'True');
this.gtag('event', 'exception', eventData);
}
return WIDGET.Completed;
}
le = LANSA.s.Encrypt;
ld = LANSA.s.Decrypt;
mt = ['POST','NULL'];
;
l.rWg({nm:"BPFWGT000",fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setENABLED(false);this.setGA_MEASUREMENT_ID("");}});cO.getENABLED=function(){return l.tB(this.get("Enabled"));};cO.setENABLED=function(v){this.set("Enabled",l.tB(v));};cO.getGA_MEASUREMENT_ID=function(){return l.tS(this.get("GA_Measurement_ID"));};cO.setGA_MEASUREMENT_ID=function(v){this.set("GA_Measurement_ID",l.tS(v));};cO.mthUPDATEPAGEVIEW=function(P0){this.invoke("UpdatePageView",[l.tS(P0)]);
};cO.mthUPDATEUSERIDENTIFICATION=function(P0){this.invoke("UpdateUserIdentification",[l.tS(P0)]);};cO.mthSENDEVENT=function(P0,P1,P2,P3){this.invoke("SendEvent",[l.tS(P0),l.tS(P1),l.tS(P2),l.tI(P3)]);};cO.mthSENDEXCEPTION=function(P0,P1){this.invoke("SendException",[l.tS(P0),l.tB(P1)]);};cO.mthSENDSCREENVIEW=function(P0,P1){this.invoke("SendScreenView",[l.tS(P0),l.tS(P1)]);};cO.mthSTARTUSERTIMINGEVENT=function(P0,P1,P2){return l.tD(this.invoke("StartUserTimingEvent",[l.tS(P0),l.tS(P1),l.tS(P2)]));
};cO.mthSTOPUSERTIMINGEVENT=function(P0){this.invoke("StopUserTimingEvent",[l.tI(P0)]);};},{rp:["PRIM_WDGT.Object"]});