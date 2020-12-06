LANSA.addComponent({id:"XEX00068",nm:"xDemoAwsS3EmployeeImageWidget",ot:"ww",tp:"Widget",de:"[pkg-ex-integration-lib]",tl:14000101,cl:14020401},function(l,oI,u){var fF=function(wP){wP.fireOnFileSelected=function(){l.fE(this,"ONFILESELECTED");};wP.fireOnUploadEnded=function(pStatus,pMessage){var eP=l.ePs();eP.aS("STATUS",pStatus);eP.aS("MESSAGE",pMessage);l.fE(this,"ONUPLOADENDED",eP);};};var fW=
/**
* Widget Implementation
*/
(function (PROTOTYPE, WIDGET) {
PROTOTYPE.onCreateInstance = function () {
};
PROTOTYPE.onRealizeControl = function (parentElement) {
var _this = this;
this._parentElement = parentElement;
var container = document.createElement("div");
var styles = container.style;
styles.position = "absolute";
styles.left = styles.right = styles.top = styles.bottom = "10px";
styles.display = "flex";
styles.flexDirection = "column";
var imgEl = document.createElement("img");
imgEl.style.flex = "1";
imgEl.style.border = "1px solid #777";
container.appendChild(imgEl);
var fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.style.display = "none";
fileInput.addEventListener("change", function () {
_this._selectedFile = fileInput.files[0];
showImageFromFileAsync(_this._selectedFile, imgEl, function () {
_this.fireOnFileSelected();
});
});
container.appendChild(fileInput);
parentElement.appendChild(container);
this._fileInputEl = fileInput;
this._imageEl = imgEl;
};
PROTOTYPE.SelectFile = function () {
this._fileInputEl.click();
};
PROTOTYPE.BeginDownload = function (url) {
var _this = this;
var req = new XMLHttpRequest();
req.responseType = "blob";
req.open("GET", url);
req.send();
req.addEventListener("load", function () {
if (req.status === 200) {
var body = req.response;
loadImageFromBlob(body, _this._imageEl);
}
else {
_this._imageEl.src = "";
}
});
function loadImageFromBlob(blob, imgEl) {
var reader = new FileReader();
reader.readAsDataURL(blob);
reader.addEventListener("load", function () {
imgEl.src = reader.result;
});
}
};
PROTOTYPE.BeginUpload = function (url) {
var _this = this;
if (this._selectedFile) {
var request_1 = new XMLHttpRequest();
request_1.open("PUT", url);
request_1.send(this._selectedFile);
request_1.addEventListener("load", function () {
switch (request_1.status) {
case 200:
_this.fireOnUploadEnded("OK", "");
break;
case 403:
_this.fireOnUploadEnded("ERROR_PERMISSION", "No permission to write to the target");
break;
default:
_this.fireOnUploadEnded("ERROR_OTHER", "An HTTP error has occurred, status code is " + request_1.status);
break;
}
});
request_1.addEventListener("error", function () { return _this.fireOnUploadEnded("ERROR_NETWORK", "A network/CORS error has occurred"); });
request_1.addEventListener("timeout", function () { return _this.fireOnUploadEnded("ERROR_TIMEOUT", "The server did not respond in a timely manner"); });
}
else {
this.fireOnUploadEnded("ERROR_NO_FILE", "No selected file to upload");
}
};
return WIDGET.Completed;
function showImageFromFileAsync(file, imageElement, onCompleted) {
if (file) {
var reader_1 = new FileReader();
reader_1.addEventListener("load", function () {
imageElement.src = reader_1.result;
invokeOnCompletedAsync();
}, false);
reader_1.readAsDataURL(file);
}
else {
imageElement.src = "";
invokeOnCompletedAsync();
}
function invokeOnCompletedAsync() {
setTimeout(onCompleted, 500);
}
}
});
;
l.rWg({nm:"XEX00068",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);}});cO.mthSELECTFILE=function(){this.invoke("SelectFile");};cO.mthBEGINUPLOAD=function(P0){this.invoke("BeginUpload",[l.tS(P0)]);};cO.mthBEGINDOWNLOAD=function(P0){this.invoke("BeginDownload",[l.tS(P0)]);};},{rp:["PRIM_WDGT.Control"]});