// Runs on search engines

var sepPort = chrome.runtime.connect({
    name: "search_engine_parser"
});

let shContent = [];

function sepOnWindowLoad() {
    let e = document.querySelector("title");
    if (e) {
        if (document.location.hostname.includes("youtube")) {
            var t = document.title.toString();
            new MutationObserver(function(e) {
                e.some(function(e) {
                    var n = e.target.textContent.toString();
                    n = n.replace(/^\([0-9]{0,}\)\s/, "").replace(/ +/g, " ");
                    if (n != t && document.URL.includes("results?search_query")) {
                         searchFlaggedData(n);
                         t = n;
                    }
                })
            }).observe(e, {
                subtree: true,
                characterData: true,
                childList: true
            })
        }
        sepCheckTitle(e)
    } else {
        setTimeout(bingIssueFix, 2000);
    }
}

function bingIssueFix() {
    if (document.location.hostname.includes("bing")) {
        let e = document.querySelector("input[type=search]");
        if (e && "" != e.value) {
            searchFlaggedData(e.value + " - bing");
            return undefined;
        }
    }
}

function sepCheckTitle(e) {
    if (e && (!e.text || "" == e.text)) {
        return;
    }
    let t = e.text;
    if (document.location.hostname.includes("youtube")) {
        let e = /^\([0-9]{0,}\)\s/;
        t = t.replace(e, "");
        t = t.replace(/ +/g, " ");
    } else {
        if (document.location.hostname.includes("bing")) {
            t = t.toLowerCase().replace(" - search", " - bing");
        }
    }
    searchFlaggedData(t)
}

function searchFlaggedData(e) { // CIRCUMVENTION: Use a different search engine than bing, google, or yahoo. This is why duckduckgo is blocked- it's a different search engine.
    let t = false;
    for (let n = 0; n < shContent.length; n++) {
        if (e.toLowerCase().includes("google")) {
            let o = document.querySelector("div#taw");
            if (o && (indexStr = o.innerHTML.toLowerCase().indexOf(shContent[n].toLowerCase()), -1 != indexStr)) {
                let a = Array.from(o.getElementsByTagName("a"));
                let r = a.length > 0 ? a[0].href : "";
                t || sendSHData(e.toLowerCase().replace("- google search", "").trim(), r, shContent[n], sepCleanDomainName(document.domain)), t = true
            }
        } else if (e.toLowerCase().includes("bing")) {
            let o = document.querySelector("li.b_ans.b_top");
            if (o && (indexStr = o.innerHTML.toLowerCase().indexOf(shContent[n].toLowerCase()), -1 != indexStr)) {
                let a = Array.from(o.getElementsByTagName("a"));
                let r = a.length > 0 ? a[0].href : "";
                t || sendSHData(e.toLowerCase().replace("- bing", "").trim(), r, shContent[n], sepCleanDomainName(document.domain)), t = true
            }
        } else if (e.toLowerCase().includes("yahoo search")) {
            let o = document.querySelector("div#results div#main li.first");
            if (o && (indexStr = o.innerHTML.toLowerCase().indexOf(shContent[n].toLowerCase()), -1 != indexStr)) {
                let a = Array.from(o.getElementsByTagName("a"));
                let r = a.length > 0 ? a[0].href : "";
                t || sendSHData(e.toLowerCase().replace("- yahoo search results", "").trim(), r, shContent[n], sepCleanDomainName(document.domain)), t = true
            }
        } else if (e.toLowerCase().includes("- youtube")) {
            let o = document.querySelector("ytd-emergency-onebox-renderer");
            if (o && (indexStr = o.innerHTML.toLowerCase().indexOf(shContent[n].toLowerCase()), -1 != indexStr)) {
                let a = Array.from(o.getElementsByTagName("a"));
                let r = a.length > 0 ? a[0].href : "";
                t || sendSHData(e.toLowerCase().replace("- youtube", "").trim(), r, shContent[n], sepCleanDomainName(document.domain)), t = true
            }
        }
        if (t) {
            break;
        }
    }
}

function sepSendData(e) {
    sepPort.postMessage({
        action: "fetchResult"
    })
}

function sendSHData(e, t, n, o) {
    sepPort.postMessage({
        action: "sendSHResult",
        msg: e,
        url: t,
        matchedTerm: n,
        domain: o
    })
}

function sepCleanDomainName(e) {
    return e.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
}

function sepCallWindowLoadWithTimeOut() {
    sepSendData(), setTimeout(sepOnWindowLoad, 2000)
}
sepPort.onMessage.addListener(function(e) {
    shContent = e
});
if (window.addEventListener) {
    window.addEventListener("load", sepCallWindowLoadWithTimeOut, false);
} else {
    if (window.attachEvent) {
         window.attachEvent("onload", sepCallWindowLoadWithTimeOut);
    }
}
