// Runs on youtube
// "*://*.youtube.com/*", "*://youtube.com/*", "*://youtube-nocookie.com/*", "*://*.youtube-nocookie.com/*"

var port = chrome.runtime.connect({
    name: "yt"
});

function onWindowLoad() {
    window.onscroll = function() {
        onWindowScroll(); // CIRCUMVENTION (possibly): Some things are only called when window.onscroll is called, therefore setting window.onscroll to null should fix comments and sidebar being removed
    };
    window.youtubeLastCheck = null;
    sendOptionsRequest();
    let e = document.documentElement.innerHTML.includes("ytp-embed");
    if (e) {
        let n = null;
        let t = null;
        let o = /\/watch\?v=([a-zA-Z0-9-_]{1,})">/; // If video is being watched...
        let d = document.documentElement.innerHTML.match(o);
        if (d.length === 2) {
            n = d[1];
        }
        let i = /\/channel\/([a-zA-Z0-9-_]{1,})"/; // Or channel is being looked at.
        d = document.documentElement.innerHTML.match(i);
        if (d.length) === 2) {
            t = d[1];
        }
        let l = {
            channelId: t,
            videoId: n,
            category: null,
            embedded: e
        };
        if (null != l.channelId || null != l.videoId) {
            sendData(l);
            return true;
        }
    }
    if (document.documentElement.innerHTML.includes('window["ytInitialPlayerResponse"] = null')) {
        sendData(fetchPageInfo(true, document.documentElement.innerHTML))
    }
    if (document.documentElement.innerHTML.indexOf('itemprop="channelId"') > -1) {
        sendData(fetchPageInfo(false))
    }
    var n = document.title.toString();
    var t = document.querySelector("title");
    (new MutationObserver(function(e) {
        e.some(function(e) {
            var t = e.target.textContent.toString();
            t = t.replace(/^\([0-9]{0,}\)\s/, "");
            t = t.replace(/ +/g, " ");
            if (t != n) {
                n = t;
                if (!document.URL.includes("results?search_query")) {
                    location.reload(); // Why reload the page???
                }
                return true;
            }
        })
    }).observe(t, {
        subtree: true,
        characterData: true,
        childList: true
    });
    if (null != document.querySelector("ytd-browse")) {
        window.ytdBrowse = document.querySelector("ytd-browse");
        window.lastUpdateBrowse = null;
        new MutationObserver(function(e) {
            e.some(function() {
                if (null == window.lastUpdateBrowse || Math.floor(Date.now() / 1000) - window.lastUpdateBrowse > 5) {
                    window.lastUpdateBrowse = Math.floor(Date.now() / 1000);
                    sendData(fetchPageInfo(false));
                    processActions(window.lastResponse);
                    return true;
                }
            })
        }).observe(ytdBrowse, {
            subtree: true,
            characterData: true,
            childList: true
        });
    }
}

function fetchPageInfo(e, n = "") {
    if (e) {
        let e = n.indexOf("var ytInitialPlayerResponse = ") + 30;
        let i = n.indexOf("};", e) + 1 - e;
        var t = null;
        var o = null;
        var d = null;
        let l = n.indexOf("ytp-embed") >= 0;
        try {
            let l = JSON.parse(n.substr(e, i));
            t = l.videoDetails.channelId;
            o = l.videoDetails.videoId;
            d = l.microformat.playerMicroformatRenderer.category;
        } catch (e) {}
        return {
            channelId: t,
            videoId: o,
            category: d,
            embedded: l
        }
    }
    if (false === e && null != document.querySelector("meta[itemprop='channelId']")) {
        return {
            channelId: document.querySelector("meta[itemprop='channelId']").getAttribute("content"),
            videoId: null,
            category: null,
            embedded: n.includes("ytp-embed")
        }
    }
}

function sendData(e) {
    port.postMessage({
        action: "getSourceYoutube",
        channelId: e.channelId,
        videoId: e.videoId,
        category: e.category,
        embedded: e.embedded
    })
}

function sendOptionsRequest() {
    port.postMessage({
        action: "getYoutubeOptions"
    })
}

function processActions(e) { // This will hide a bunch of stuff when it is called. On window scroll, on page change, and on port message.
    if (window.lastResponse != e) {
        window.lastResponse = e
        if (e.hideComments) {
            hideComment();
        }
        if (e.hideThumbnails) {
            hideThumbnails();
        }
        if (e.hideSidebar) {
            hideSidebar();
        }
        if (e.hideRecommended) {
            hideRecommended();
        }
        if (e.action && "deny" === e.action) {
            self.location = e.url;
        }
    }
}

function hideComment() { // I wonder what this function does. Well, it hides comments, it doesn't hide comment, but it's pretty self-explanatory.
    if (document.querySelector("ytd-comments")) {
        document.querySelector("ytd-comments").remove();
    }
}

function hideThumbnails() { // Why the thumbnails? :(
    [...document.querySelectorAll("ytd-thumbnail")].forEach(e => {
        e.remove()
    });
    [...document.querySelectorAll("ytd-playlist-thumbnail")].forEach(e => {
        e.remove()
    })
}

function hideSidebar() { // Self-explanatory.
    if (document.querySelector("div[id='related']")) {
        document.querySelector("div[id='related']").remove();
    }
}

function hideRecommended() {} // Why an empty function?

function onWindowScroll() {
    processActions(window.lastResponse);
}

function callWindowLoadWithTimeOut() {
    setTimeout(onWindowLoad, 2000); // Give it time to load
}
port.onMessage.addListener(function(e) {
    processActions(e);
});
window.lastResponse = null;
window.youtubeLastCheck = null;
if (window.addEventListener) {
    window.addEventListener("load", callWindowLoadWithTimeOut, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", callWindowLoadWithTimeOut);
}
