//Runs on google

// "https://*/*"
// "https://www.google.*/*"

// Circumvention: use elgoog maybe

function blockGoogleGames() {
    var e;
    var n; // Google.com/search
    if (document.location.pathname.includes("search") && document.querySelectorAll("block-component div[data-parent-funbox]").length !== 0) {
        e = document.createElement("style").innerHTML = "block-component { display: none; }"; // Blocks games
        document.head.appendChild(e);
        n = document.querySelector("block-component")
        n.parentElement.removeChild(n);
    }
    
    if (document.location.pathname.includes("fbx")) {
        e = document.createElement("style").innerHTML = "body > div { display: none; }"; // Idk what this does
        document.head.appendChild(e);
        n = document.querySelector("body > div")
        n.parentElement.removeChild(n)
    }
}
if (document.readyState !== "loading") {
    blockGoogleGames()
} else {
    document.addEventListener("DOMContentLoaded", function() {
        blockGoogleGames()
    });
}
