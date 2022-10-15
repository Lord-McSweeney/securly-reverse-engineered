// Runs on meet.google.com

function onWindowLoad() {
    if (document.title.toString().includes("Meet - ")) { // Google meet interference
        chrome.runtime.connect({
            name: "gmeet"
        }).postMessage({
            action: "getGoogleMeetUrl",
            url: window.location.href
        })
    }
}

function callWindowLoadWithTimeOut() {
    setTimeout(onWindowLoad, 2000); // Wait so that everything has fully loaded
}
if (window.addEventListener) {
    window.addEventListener("load", callWindowLoadWithTimeOut, false);
} else {
    if (window.attachEvent) {
        window.attachEvent("onload", callWindowLoadWithTimeOut);
    }
}
