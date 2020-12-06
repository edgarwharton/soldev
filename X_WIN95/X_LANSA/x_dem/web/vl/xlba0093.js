LANSA.addComponent({id:"XLBA0093",nm:"XInternal_DeviceSqlDb_Widget",ot:"ww",tp:"Widget",de:"[pkg-lansa-mobile]",tl:14000101,cl:14020401},function(l,oI,u){var fF=function(wP){wP.fireExecuteSqlCompleted=function(pStatus,pMessage,pRows){var eP=l.ePs();eP.aS("STATUS",pStatus);eP.aS("MESSAGE",pMessage);eP.aS("ROWS",pRows);l.fE(this,"EXECUTESQLCOMPLETED",eP);};wP.fireApplySchemaCompleted=function(pStatus,pMessage){var eP=l.ePs();eP.aS("STATUS",pStatus);eP.aS("MESSAGE",pMessage);l.fE(this,"APPLYSCHEMACOMPLETED",eP);
};wP.fireDownloadDataCompleted=function(pStatus,pMessage,pTag){var eP=l.ePs();eP.aS("STATUS",pStatus);eP.aS("MESSAGE",pMessage);eP.aS("TAG",pTag);l.fE(this,"DOWNLOADDATACOMPLETED",eP);};};var fW=
/**
*
*/
(function (PROTOTYPE, WIDGET) {
var definition = {
/**
*
*/
ApplySchema: function (schema) {
var _this = this;
LONGRANGE.SQLDB.executesql({
schema: schema,
onCompleted: function (result) {
_this.fireApplySchemaCompleted(result.status == LONGRANGE.Status.Ok ? "OK" : "APPLY_FAILED", result.message);
}
});
},
/**
*
*/
ExecuteSql: function (strsql, jsonArgs) {
var _this = this;
var options = {
sql: strsql,
allowScripting: true,
parameters: undefined,
onCompleted: function (result) {
var message = "";
var rows = "";
if (result.message) {
message = result.message;
}
if (result.rows) {
rows = JSON.stringify(result.rows);
}
_this.fireExecuteSqlCompleted(result.status == LONGRANGE.Status.Ok ? "OK" : "EXEC_FAILED", message, rows);
},
};
if (jsonArgs.length > 0) {
options.parameters = JSON.parse(jsonArgs);
}
LONGRANGE.SQLDB.executesql(options);
},
/**
*
*/
DownloadData: function (url, tag) {
var _this = this;
fetch(url)
.then(function (response) {
var error = null;
switch (response.status) {
case 200: break;
case 404:
error = "The service can't be found, ensure you have the path defined in your server module API definition.";
break;
default:
error = "Unknown error occurred while invoking the download service.";
break;
}
if (error) {
error += "\nThe url/path is \"" + url + "\"\nHTTP status code is " + response.status;
throw new Error(error);
}
return response.json();
})
.then(function (data) { return data.tables; })
.then(function (tables) { return processTables(tables); })
.then(function () { return _this.fireDownloadDataCompleted("OK", "", tag); })
.catch(function (e) { return _this.fireDownloadDataCompleted("FAILED", e ? (e.message ? e.message : e.toString()) : "Unspecified error", tag); });
function processTables(tables) {
var p = Promise.resolve();
var _loop_1 = function (table) {
var name_1 = table.table;
var rows = table.rows;
var _loop_2 = function (row) {
p = p.then(function () { return processRow(name_1, row); });
};
for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
var row = rows_1[_i];
_loop_2(row);
}
};
for (var _i = 0, tables_1 = tables; _i < tables_1.length; _i++) {
var table = tables_1[_i];
_loop_1(table);
}
return p;
}
function processRow(tableName, row) {
var query = constructSql(tableName, row);
return new Promise(function (resolve, reject) {
LONGRANGE.SQLDB.executesql({
sql: query.sql,
allowScripting: true,
parameters: query.args,
onCompleted: function (result) {
if (result.status == LONGRANGE.Status.Ok) {
resolve();
}
else {
reject(result.message);
}
},
});
});
}
function constructSql(tableName, values) {
var fields = [];
var argIdentifiers = [];
var argValues = [];
for (var field in values) {
fields.push(field);
argValues.push(values[field]);
argIdentifiers.push("?" + fields.length);
}
return {
sql: "REPLACE INTO " + tableName + "(" + fields.join(",") + ") VALUES (" + argIdentifiers.join(",") + ")",
args: argValues,
};
}
},
};
return init();
/**
*
*/
function init() {
Object
.getOwnPropertyNames(definition)
.forEach(function (prop) { return PROTOTYPE[prop] = definition[prop]; });
var widgetStatus = WIDGET.Completed;
if (!window.LONGRANGE) {
widgetStatus = WIDGET.Loading;
var pPreviousOnLongRangeReady_1 = window.onLongRangeReady;
window.onLongRangeReady = function () {
WIDGET.Finalize();
if (pPreviousOnLongRangeReady_1) {
pPreviousOnLongRangeReady_1();
}
};
}
return widgetStatus;
}
});
;
l.rWg({nm:"XLBA0093",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);}});cO.mthEXECUTESQL=function(P0,P1){this.invoke("ExecuteSql",[l.tS(P0),l.tS(P1)]);};cO.mthAPPLYSCHEMA=function(P0){this.invoke("ApplySchema",[l.tS(P0)]);};cO.mthDOWNLOADDATA=function(P0,P1){this.invoke("DownloadData",[l.tS(P0),l.tS(P1)]);};},{rp:["PRIM_WDGT.Object"]});