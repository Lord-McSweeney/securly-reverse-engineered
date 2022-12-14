// Runs on all sites, this is a widget for something

!function() { // 
    var e;
    var n;
    var t = false;
    var l = '\n        <div class="well-path-widget">\n            <div class="well-path-widget-row">\n                <div class="well-path-widget-header">{header}</div>\n                <div class="well-path-widget-close">\n                    <img src="{close_btn_src}" />\n                </div>\n            </div>\n            <div class="well-path-widget-row">\n                <div class="well-path-widget-body">{body}</div>\n                <div class="well-path-widget-links">{links}</div>\n            </div>\n        </div>\n    ';
    var a = '<div class="well-path-widget-link-row">{links}</div>';
    var d = '<div class="well-path-widget-link-wrap"><span data-href="{href}">{label}</span></div>';
    var closewidget = function() {
        e.remove();
        document.removeEventListener("click", widgetclickhandler); // When widget is closed nothing can be clicked anyway
        console.log("widget removed");
    };
    var widgetclickhandler = function(e) { // On widget click
        if ("span" == e.target.nodeName.toLowerCase()) {
            if (e.target.parentElement.className.includes("well-path-widget-link-wrap")) {
                console.log("cta clicked");
                window.open(e.target.dataset.href);
                chrome.runtime.sendMessage({
                    source: "well-path-widget",
                    action: "ctaClicked",
                    label: e.target.innerText,
                    link: e.target.dataset.href.replace("mailto:", "") // No mailto in widget link I think
                });
                closewidget();
            }
        }
        if ("img" == e.target.nodeName.toLowerCase() && e.target.parentElement.className.includes("well-path-widget-close")) {
            console.log("close button clicked");
            chrome.runtime.sendMessage({
                source: "well-path-widget",
                action: "closed"
            })
            closewidget();
        }
    };
    if (window.location.href.includes("securly.com")) {
        chrome.runtime.onMessage.addListener((p, s) => {
            console.debug("wpw msg received", p, s);
            if ("object" == typeof p && undefined !== p.action && undefined !== p.source && "well-path-widget" == p.source) {
                switch (p.action) {
                    case "display":
                        if (undefined === p.data || t) return;
                        !function(w) { // Styling for widget
                            n = document.createElement("style");
                            n.textContent = "\n        .well-path-widget-wrapper {\n            position: fixed;\n            top: 0;\n            left: 0;\n            /* max z-index i.e. 32 bit signed int*/\n            z-index: 2147483647; \n            /* specified again to counter any possible max z-index of website and ensure widget shows on top*/\n            z-index: 2147483648; \n            background-color: #ffffff;\n            width: 100%;\n            font-size: 13px;\n            font-family: Arial;\n            color: #333333;\n            display: block;\n            box-shadow: 0 2px 3px 0 #dbe6f0;\n        }\n\n        .well-path-widget-wrapper div {\n            display: block;\n        }\n\n        .well-path-widget {\n            position: relative;\n            padding: 8px 15px;\n        }\n\n        .well-path-widget-row > div {\n            display: inline-block;\n            vertical-align: top;\n        }\n\n        .well-path-widget-row * {\n            line-height: initial;\n            letter-spacing: normal;\n            font-stretch: normal;\n        }\n\n        .well-path-widget .well-path-widget-close {\n            text-align: right;\n            width: 4.5%;\n            min-width: 25px;\n        }\n\n        .well-path-widget .well-path-widget-close img {\n            cursor: pointer;\n        }\n\n        .well-path-widget .well-path-widget-header {\n            color: #171b1f;\n            width: 95%;\n            max-width: calc(100% - 40px);\n            font-family: Metropolis Medium;\n            font-weight: 500;\n            font-size: 20px;\n            line-height: 32px;\n        }\n\n        .well-path-widget .well-path-widget-body {\n            line-height: 22px;\n            font-family: 'Metropolis Regular';\n            font-size: 13px;\n            color: grey;\n            padding-top: 5px;\n            width: 60%;\n        }\n\n        .well-path-widget .well-path-widget-links {\n            width: calc(39.5% - 15px);\n            vertical-align: top;\n            padding: 5px 0 0 15px;\n        }\n\n        .well-path-widget .well-path-widget-links .well-path-widget-link-wrap {\n            padding: 0 15px 5px 0px;\n            display: inline-block;\n            width: calc(50% - 15px);\n            min-width: 75px;\n            vertical-align: top;\n        }\n\n        .well-path-widget .well-path-widget-links .well-path-widget-link-row:last-child .well-path-widget-link-wrap {\n            padding-bottom: 0px;\n        }\n\n        .well-path-widget .well-path-widget-links span,\n        .well-path-widget .well-path-widget-links span:hover,\n        .well-path-widget .well-path-widget-links span:focus,\n        .well-path-widget .well-path-widget-links span:active {\n            color: #0073e6;\n            font-family: 'Metropolis Semi Bold';\n            font-weight: 600;\n            font-size: 14px;\n            line-height: 20px;\n            text-decoration: none;\n            display: initial;\n            cursor: pointer;\n        }\n\n        @media (max-width: 768px) {\n            .well-path-widget .well-path-widget-body,\n            .well-path-widget .well-path-widget-links {\n                width: 100%;\n            }\n\n            .well-path-widget .well-path-widget-links {\n                padding: 10px 0 0 0;\n            }\n        \n            .well-path-widget .well-path-widget-links .well-path-widget-link-wrap {\n                padding: 0 15px 5px 0;\n                width: 100%;\n            }\n\n            .well-path-widget .well-path-widget-links .well-path-widget-link-row:last-child .well-path-widget-link-wrap {\n                padding: 0 15px 5px 0;\n            }\n\n            .well-path-widget .well-path-widget-links .well-path-widget-link-row:last-child .well-path-widget-link-wrap:last-child {\n                padding-bottom: 0px;\n            }\n        }\n    ";
                            document.head.appendChild(n);
                            widgetLinks = "";
                            var p = "";
                            for (i = 0; i < w.links.length; i++) {
                                var s = w.links[i];
                                var r = undefined !== s.email ? "mailto:" + s.email : s.url;
                                p += d.replace("{href}", r).replace("{label}", s.label);
                                if (i % 2 == 1) {
                                    widgetLinks += a.replace("{links}", p);
                                    p = "";
                                }
                            }
                            if (p) {
                                widgetLinks += a.replace("{links}", p);
                            }
                            widgetHtml = l.replace("{close_btn_src}", chrome.extension.getURL("icon-16-px-close.svg").replace("{header}", w.header).replace("{body}", w.body).replace("{links}", widgetLinks));
                            e = document.createElement("div");
                            e.className = "well-path-widget-wrapper";
                            e.innerHTML = widgetHtml;
                            document.body.appendChild(e);
                            document.body.insertBefore(e, document.body.firstChild);
                            console.log("widget displayed");
                            t = true;
                            document.addEventListener("click", widgetclickhandler);
                        }(p.data); // Do not simplify this function since the original variable conflicts with one on line 50
                        break;
                    case "remove":
                        closewidget(); // No need for a break statement here
                }
            }
        });
        chrome.runtime.sendMessage({
            source: "well-path-widget",
            action: "ready"
        });
        var p = document.createElement("link");
        p.rel = "stylesheet";
        p.href = chrome.extension.getURL("fonts/Metropolis.css"); // Why the Metropolis font is loaded into all sites
        document.head.appendChild(p);
    }
}();
