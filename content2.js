// Runs on google maps

var port = chrome.runtime.connect({
    name: "gmaps"
});
var prevUrl = document.location.href;
var prevTitle = document.title.toString();
var title = document.querySelector("title");
var observer = new MutationObserver(function(e) {
    e.some(function(e) {
        var t = e.target.textContent.toString();
        t = t.replace(/^\([0-9]{0,}\)\s/, "").replace(/ +/g, " ");
        if (t != prevTitle) {
            prevTitle = t;
            fetchURL();
            return true;
        }
    })
});

function sendData(e) {
    if (e != prevUrl) {
        prevUrl = document.location.href;
        port.postMessage({
            action: "MapsURL",
            url: e
        });
    }
}
async function fetchURL() {
    await sleep(2000);
    sendData(document.location.href);
}

function sleep(e) {
    return new Promise(t => setTimeout(t, e))
}
observer.observe(title, {
    subtree: false,
    characterData: true,
    childList: true
});
