(function() {

    var rootUrl = "https://blogs.developer.lansa.com/docs/";

    // Check if a custom docUrl is specified
    // but for our convenience, only do that 
    // if the browser supports URLSearchParams
    if(typeof URLSearchParams === "function")
    {
        var queryParams = new URLSearchParams(document.location.search);
        var customDocUrl = queryParams.get("$docUrl");
        if(customDocUrl)
        {
            rootUrl = decodeURIComponent(customDocUrl);
            console.log("Custom doc URL specified: " + rootUrl);
        }
    }

    // Load script
    var scriptEl = document.createElement("script");

    scriptEl.src = rootUrl + "scripts/loader.js";
    scriptEl.onload = function() {
        $XLoader.baseUrl = rootUrl; 
        $XLoader.import("scripts/main.js");
    };

    document.body.appendChild(scriptEl);
})();