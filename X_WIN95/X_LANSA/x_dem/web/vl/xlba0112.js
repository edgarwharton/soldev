LANSA.addComponent({id:"XLBA0112",nm:"XInternal_Stomp_WebClient_Widget",ot:"ww",tp:"Widget",de:"[pkg-integration-lib] Internal",tl:14000101,cl:14020401},function(l,oI,u){var fF=function(wP){wP.fireReceiveMessage=function(pSubscriptionId,pMessageId,pCommand,pReceivedFrom,pSentTo,pBody,pProperties){var eP=l.ePs();eP.aS("SUBSCRIPTIONID",pSubscriptionId);eP.aS("MESSAGEID",pMessageId);eP.aS("COMMAND",pCommand);eP.aS("RECEIVEDFROM",pReceivedFrom);eP.aS("SENTTO",pSentTo);eP.aS("BODY",pBody);eP.aS("PROPERTIES",pProperties);
l.fE(this,"RECEIVEMESSAGE",eP);};wP.fireConnected=function(){l.fE(this,"CONNECTED");};wP.fireDisconnected=function(){l.fE(this,"DISCONNECTED");};wP.fireConnectFailed=function(){l.fE(this,"CONNECTFAILED");};};var fW=
/**
*
*/
(function (PROTOTYPE, WIDGET) {
PROTOTYPE.Connect = function (url) {
var _this_1 = this;
this._client = window.Stomp.client(url);
this._client.connect({}, function () { return _this_1.fireConnected(); }, function () { return _this_1.fireConnectFailed(); });
};
PROTOTYPE.Disconnect = function () {
var _this_1 = this;
this._client.disconnect(function () {
_this_1.fireDisconnected();
});
};
PROTOTYPE.Send = function (destination, body, propertiesAsJson) {
this._client.send(destination, transformHeaderValues(JSON.parse(propertiesAsJson), encodeHeaderValue), body);
};
PROTOTYPE.Subscribe = function (destination) {
var _this_1 = this;
var subscriptionId;
var subscription = this._client.subscribe(destination, function (frame) {
var messageId = frame.headers["message-id"];
var sentTo = frame.headers.destination;
var receivedFrom = destination;
_this_1.fireReceiveMessage(subscriptionId, messageId, frame.command, receivedFrom, sentTo, frame.body, JSON.stringify(transformHeaderValues(frame.headers, decodeHeaderValue)));
});
subscriptionId = subscription.id;
return subscriptionId;
};
PROTOTYPE.Unsubscribe = function (subscriptionId) {
this._client.unsubscribe(subscriptionId);
};
PROTOTYPE.Ack = function (messageID, subscriptionId) {
this._client.ack(messageID, subscriptionId);
};
PROTOTYPE.Nack = function (messageID, subscriptionId) {
this._client.nack(messageID, subscriptionId);
};
libStompJS.call(window);
return WIDGET.Completed;
function libStompJS() {
/**
* STOMP implementation using WebSocket.
*
* If there is a new version of the library, replace below,
* between BEGIN-STOMPJS and END-STOMPJS markers.
* Make sure to include copyright notice included in the
* original file.
*/
/*
Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0
Copyright (C) 2010-2013 [Jeff Mesnil](http://jmesnil.net/)
Copyright (C) 2012 [FuseSource, Inc.](http://fusesource.com)
*/
(function () {
var Byte, Client, Frame, Stomp, __hasProp = {}.hasOwnProperty, __slice = [].slice;
Byte = {
LF: '\x0A',
NULL: '\x00'
};
Frame = (function () {
var unmarshallSingle;
function Frame(command, headers, body) {
this.command = command;
this.headers = headers != null ? headers : {};
this.body = body != null ? body : '';
}
Frame.prototype.toString = function () {
var lines, name, skipContentLength, value, _ref;
lines = [this.command];
skipContentLength = this.headers['content-length'] === false ? true : false;
if (skipContentLength) {
delete this.headers['content-length'];
}
_ref = this.headers;
for (name in _ref) {
if (!__hasProp.call(_ref, name))
continue;
value = _ref[name];
lines.push("" + name + ":" + value);
}
if (this.body && !skipContentLength) {
lines.push("content-length:" + (Frame.sizeOfUTF8(this.body)));
}
lines.push(Byte.LF + this.body);
return lines.join(Byte.LF);
};
Frame.sizeOfUTF8 = function (s) {
if (s) {
return encodeURI(s).match(/%..|./g).length;
}
else {
return 0;
}
};
unmarshallSingle = function (data) {
var body, chr, command, divider, headerLines, headers, i, idx, len, line, start, trim, _i, _j, _len, _ref, _ref1;
divider = data.search(RegExp("" + Byte.LF + Byte.LF));
headerLines = data.substring(0, divider).split(Byte.LF);
command = headerLines.shift();
headers = {};
trim = function (str) {
return str.replace(/^\s+|\s+$/g, '');
};
_ref = headerLines.reverse();
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
line = _ref[_i];
idx = line.indexOf(':');
headers[trim(line.substring(0, idx))] = trim(line.substring(idx + 1));
}
body = '';
start = divider + 2;
if (headers['content-length']) {
len = parseInt(headers['content-length']);
body = ('' + data).substring(start, start + len);
}
else {
chr = null;
for (i = _j = start, _ref1 = data.length; start <= _ref1 ? _j < _ref1 : _j > _ref1; i = start <= _ref1 ? ++_j : --_j) {
chr = data.charAt(i);
if (chr === Byte.NULL) {
break;
}
body += chr;
}
}
return new Frame(command, headers, body);
};
Frame.unmarshall = function (datas) {
var data;
return (function () {
var _i, _len, _ref, _results;
_ref = datas.split(RegExp("" + Byte.NULL + Byte.LF + "*"));
_results = [];
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
data = _ref[_i];
if ((data != null ? data.length : void 0) > 0) {
_results.push(unmarshallSingle(data));
}
}
return _results;
})();
};
Frame.marshall = function (command, headers, body) {
var frame;
frame = new Frame(command, headers, body);
return frame.toString() + Byte.NULL;
};
return Frame;
})();
Client = (function () {
var now;
function Client(ws) {
this.ws = ws;
this.ws.binaryType = "arraybuffer";
this.counter = 0;
this.connected = false;
this.heartbeat = {
outgoing: 10000,
incoming: 10000
};
this.maxWebSocketFrameSize = 16 * 1024;
this.subscriptions = {};
}
Client.prototype.debug = function (message) {
var _ref;
return typeof window !== "undefined" && window !== null ? (_ref = window.console) != null ? _ref.log(message) : void 0 : void 0;
};
now = function () {
if (Date.now) {
return Date.now();
}
else {
return new Date().valueOf;
}
};
Client.prototype._transmit = function (command, headers, body) {
var out;
out = Frame.marshall(command, headers, body);
if (typeof this.debug === "function") {
this.debug(">>> " + out);
}
while (true) {
if (out.length > this.maxWebSocketFrameSize) {
this.ws.send(out.substring(0, this.maxWebSocketFrameSize));
out = out.substring(this.maxWebSocketFrameSize);
if (typeof this.debug === "function") {
this.debug("remaining = " + out.length);
}
}
else {
return this.ws.send(out);
}
}
};
Client.prototype._setupHeartbeat = function (headers) {
var serverIncoming, serverOutgoing, ttl, v, _ref, _ref1;
if ((_ref = headers.version) !== Stomp.VERSIONS.V1_1 && _ref !== Stomp.VERSIONS.V1_2) {
return;
}
_ref1 = (function () {
var _i, _len, _ref1, _results;
_ref1 = headers['heart-beat'].split(",");
_results = [];
for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
v = _ref1[_i];
_results.push(parseInt(v));
}
return _results;
})(), serverOutgoing = _ref1[0], serverIncoming = _ref1[1];
if (!(this.heartbeat.outgoing === 0 || serverIncoming === 0)) {
ttl = Math.max(this.heartbeat.outgoing, serverIncoming);
if (typeof this.debug === "function") {
this.debug("send PING every " + ttl + "ms");
}
this.pinger = Stomp.setInterval(ttl, (function (_this) {
return function () {
_this.ws.send(Byte.LF);
return typeof _this.debug === "function" ? _this.debug(">>> PING") : void 0;
};
})(this));
}
if (!(this.heartbeat.incoming === 0 || serverOutgoing === 0)) {
ttl = Math.max(this.heartbeat.incoming, serverOutgoing);
if (typeof this.debug === "function") {
this.debug("check PONG every " + ttl + "ms");
}
return this.ponger = Stomp.setInterval(ttl, (function (_this) {
return function () {
var delta;
delta = now() - _this.serverActivity;
if (delta > ttl * 2) {
if (typeof _this.debug === "function") {
_this.debug("did not receive server activity for the last " + delta + "ms");
}
return _this.ws.close();
}
};
})(this));
}
};
Client.prototype._parseConnect = function () {
var args, connectCallback, errorCallback, headers;
args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
headers = {};
switch (args.length) {
case 2:
headers = args[0], connectCallback = args[1];
break;
case 3:
if (args[1] instanceof Function) {
headers = args[0], connectCallback = args[1], errorCallback = args[2];
}
else {
headers.login = args[0], headers.passcode = args[1], connectCallback = args[2];
}
break;
case 4:
headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3];
break;
default:
headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3], headers.host = args[4];
}
return [headers, connectCallback, errorCallback];
};
Client.prototype.connect = function () {
var args, errorCallback, headers, out;
args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
out = this._parseConnect.apply(this, args);
headers = out[0], this.connectCallback = out[1], errorCallback = out[2];
if (typeof this.debug === "function") {
this.debug("Opening Web Socket...");
}
this.ws.onmessage = (function (_this) {
return function (evt) {
var arr, c, client, data, frame, messageID, onreceive, subscription, _i, _len, _ref, _results;
data = typeof ArrayBuffer !== 'undefined' && evt.data instanceof ArrayBuffer ? (arr = new Uint8Array(evt.data), typeof _this.debug === "function" ? _this.debug("--- got data length: " + arr.length) : void 0, ((function () {
var _i, _len, _results;
_results = [];
for (_i = 0, _len = arr.length; _i < _len; _i++) {
c = arr[_i];
_results.push(String.fromCharCode(c));
}
return _results;
})()).join('')) : evt.data;
_this.serverActivity = now();
if (data === Byte.LF) {
if (typeof _this.debug === "function") {
_this.debug("<<< PONG");
}
return;
}
if (typeof _this.debug === "function") {
_this.debug("<<< " + data);
}
_ref = Frame.unmarshall(data);
_results = [];
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
frame = _ref[_i];
switch (frame.command) {
case "CONNECTED":
if (typeof _this.debug === "function") {
_this.debug("connected to server " + frame.headers.server);
}
_this.connected = true;
_this._setupHeartbeat(frame.headers);
_results.push(typeof _this.connectCallback === "function" ? _this.connectCallback(frame) : void 0);
break;
case "MESSAGE":
subscription = frame.headers.subscription;
onreceive = _this.subscriptions[subscription] || _this.onreceive;
if (onreceive) {
client = _this;
messageID = frame.headers["message-id"];
frame.ack = function (headers) {
if (headers == null) {
headers = {};
}
return client.ack(messageID, subscription, headers);
};
frame.nack = function (headers) {
if (headers == null) {
headers = {};
}
return client.nack(messageID, subscription, headers);
};
_results.push(onreceive(frame));
}
else {
_results.push(typeof _this.debug === "function" ? _this.debug("Unhandled received MESSAGE: " + frame) : void 0);
}
break;
case "RECEIPT":
_results.push(typeof _this.onreceipt === "function" ? _this.onreceipt(frame) : void 0);
break;
case "ERROR":
_results.push(typeof errorCallback === "function" ? errorCallback(frame) : void 0);
break;
default:
_results.push(typeof _this.debug === "function" ? _this.debug("Unhandled frame: " + frame) : void 0);
}
}
return _results;
};
})(this);
this.ws.onclose = (function (_this) {
return function () {
var msg;
msg = "Whoops! Lost connection to " + _this.ws.url;
if (typeof _this.debug === "function") {
_this.debug(msg);
}
_this._cleanUp();
return typeof errorCallback === "function" ? errorCallback(msg) : void 0;
};
})(this);
return this.ws.onopen = (function (_this) {
return function () {
if (typeof _this.debug === "function") {
_this.debug('Web Socket Opened...');
}
headers["accept-version"] = Stomp.VERSIONS.supportedVersions();
headers["heart-beat"] = [_this.heartbeat.outgoing, _this.heartbeat.incoming].join(',');
return _this._transmit("CONNECT", headers);
};
})(this);
};
Client.prototype.disconnect = function (disconnectCallback, headers) {
if (headers == null) {
headers = {};
}
this._transmit("DISCONNECT", headers);
this.ws.onclose = null;
this.ws.close();
this._cleanUp();
return typeof disconnectCallback === "function" ? disconnectCallback() : void 0;
};
Client.prototype._cleanUp = function () {
this.connected = false;
if (this.pinger) {
Stomp.clearInterval(this.pinger);
}
if (this.ponger) {
return Stomp.clearInterval(this.ponger);
}
};
Client.prototype.send = function (destination, headers, body) {
if (headers == null) {
headers = {};
}
if (body == null) {
body = '';
}
headers.destination = destination;
return this._transmit("SEND", headers, body);
};
Client.prototype.subscribe = function (destination, callback, headers) {
var client;
if (headers == null) {
headers = {};
}
if (!headers.id) {
headers.id = "sub-" + this.counter++;
}
headers.destination = destination;
this.subscriptions[headers.id] = callback;
this._transmit("SUBSCRIBE", headers);
client = this;
return {
id: headers.id,
unsubscribe: function () {
return client.unsubscribe(headers.id);
}
};
};
Client.prototype.unsubscribe = function (id) {
delete this.subscriptions[id];
return this._transmit("UNSUBSCRIBE", {
id: id
});
};
Client.prototype.begin = function (transaction) {
var client, txid;
txid = transaction || "tx-" + this.counter++;
this._transmit("BEGIN", {
transaction: txid
});
client = this;
return {
id: txid,
commit: function () {
return client.commit(txid);
},
abort: function () {
return client.abort(txid);
}
};
};
Client.prototype.commit = function (transaction) {
return this._transmit("COMMIT", {
transaction: transaction
});
};
Client.prototype.abort = function (transaction) {
return this._transmit("ABORT", {
transaction: transaction
});
};
Client.prototype.ack = function (messageID, subscription, headers) {
if (headers == null) {
headers = {};
}
headers["message-id"] = messageID;
headers.subscription = subscription;
return this._transmit("ACK", headers);
};
Client.prototype.nack = function (messageID, subscription, headers) {
if (headers == null) {
headers = {};
}
headers["message-id"] = messageID;
headers.subscription = subscription;
return this._transmit("NACK", headers);
};
return Client;
})();
Stomp = {
VERSIONS: {
V1_0: '1.0',
V1_1: '1.1',
V1_2: '1.2',
supportedVersions: function () {
return '1.1,1.0';
}
},
client: function (url, protocols) {
var klass, ws;
if (protocols == null) {
protocols = ['v10.stomp', 'v11.stomp'];
}
klass = Stomp.WebSocketClass || WebSocket;
ws = new klass(url, protocols);
return new Client(ws);
},
over: function (ws) {
return new Client(ws);
},
Frame: Frame
};
if (typeof exports !== "undefined" && exports !== null) {
exports.Stomp = Stomp;
}
if (typeof window !== "undefined" && window !== null) {
Stomp.setInterval = function (interval, f) {
return window.setInterval(f, interval);
};
Stomp.clearInterval = function (id) {
return window.clearInterval(id);
};
window.Stomp = Stomp;
}
else if (!exports) {
self.Stomp = Stomp;
}
}).call(this);
}
/**
* Decode received STOMP header value
* STOMP header values are encoded (e.g. colon -> \c, newline -> \n)
* but it seems that STOMPJS implementation does not decode upon receiving
* messages, so we are doing it ourselves
* @param value Header value (encoded) to be decoded
*/
function decodeHeaderValue(value) {
function map(escape) {
switch (escape) {
case "r": return "\r";
case "n": return "\n";
case "c": return ":";
case "\\": return "\\";
default: return "";
}
}
var output = [];
output.length = value.length;
var i = 0;
var j = 0;
while (i < value.length) {
var ch = value.charAt(i++);
if (ch === "\\") {
if (i < value.length) {
ch = map(value.charAt(i++));
}
else {
ch = "";
}
}
if (ch.length > 0) {
output[j++] = ch;
}
}
if (j < output.length) {
output = output.slice(0, j);
}
return output.join("");
}
/**
* Encode STOMP header value prior to sending
* STOMP spec requires header values to be encoded (e.g. colon -> \c, newline -> \n)
* but it seems that STOMPJS implementation does not do the encoding
* @param value Header value to be encoded
*/
function encodeHeaderValue(value) {
function map(ch) {
switch (ch) {
case "\r": return "r";
case "\n": return "n";
case ":": return "c";
case "\\": return "\\";
default: return "";
}
}
var output = [];
output.length = value.length;
var i = 0;
for (var _a = 0, value_1 = value; _a < value_1.length; _a++) {
var ch = value_1[_a];
var escape_1 = map(ch);
if (escape_1.length === 0) {
output[i] = ch;
}
else {
output[i] = "\\" + escape_1;
}
i++;
}
return output.join("");
}
function transformHeaderValues(headers, transformer) {
var result = {};
for (var _a = 0, _b = Object.getOwnPropertyNames(headers); _a < _b.length; _a++) {
var h = _b[_a];
result[h] = transformer(headers[h]);
}
return result;
}
});
;
l.rWg({nm:"XLBA0112",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);}});cO.mthCONNECT=function(P0){this.invoke("Connect",[l.tS(P0)]);};cO.mthDISCONNECT=function(){this.invoke("Disconnect");};cO.mthSEND=function(P0,P1,P2){this.invoke("Send",[l.tS(P0),l.tS(P1),l.tS(P2)]);};cO.mthSUBSCRIBE=function(P0){return l.tS(this.invoke("Subscribe",[l.tS(P0)]));};cO.mthUNSUBSCRIBE=function(P0){this.invoke("Unsubscribe",[l.tS(P0)]);};},{rp:["PRIM_WDGT.Object"]});