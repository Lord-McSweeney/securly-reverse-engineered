//Runs on chat.google.com to detect bullying; CIRCUMVENTION: use a different chat site

!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        o = n.flat ? function(e) {
            return n.flat.call(e)
        } : function(e) {
            return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        u = {},
        l = u.toString,
        c = u.hasOwnProperty,
        f = c.toString,
        p = f.call(Object),
        d = {},
        h = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        g = function(e) {
            return null != e && e === e.window
        },
        y = e.document,
        v = {
            type: true,
            src: true,
            nonce: true,
            noModule: true
        };

    function m(e, t, n) {
        var r, i, o = (n = n || y).createElement("script");
        if (o.text = e, t)
            for (r in v)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
    }
    var b = function(e, t) {
        return new b.fn.init(e, t)
    };

    function w(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    b.fn = b.prototype = {
        jquery: "3.6.0",
        constructor: b,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return b.each(this, e)
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(b.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(b.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, b.extend = b.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = false;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || h(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (b.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || b.isPlainObject(n) ? n : {}, i = false, a[t] = b.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, b.extend({
        expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== l.call(e)) && (!(t = r(e)) || "function" == typeof(n = c.call(t, "constructor") && t.constructor) && f.call(n) === p)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return false;
            return true
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (w(e))
                for (n = e.length; r < n && false !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (false === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0,
                s = [];
            if (w(e))
                for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return o(s)
        },
        guid: 1,
        support: d
    }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var C = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            C = 0,
            T = 0,
            S = ue(),
            E = ue(),
            A = ue(),
            j = ue(),
            k = function(e, t) {
                return e === t && (f = true), 0
            },
            D = {}.hasOwnProperty,
            N = [],
            L = N.pop,
            q = N.push,
            H = N.push,
            M = N.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            B = "\\[" + R + "*(" + I + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + R + "*\\]",
            W = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            F = new RegExp(R + "+", "g"),
            $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            _ = new RegExp("^" + R + "*," + R + "*"),
            G = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            z = new RegExp(R + "|>"),
            U = new RegExp(W),
            V = new RegExp("^" + I + "$"),
            X = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                p()
            },
            ae = be(function(e) {
                return true === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(N = M.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: N.length ? function(e, t) {
                    q.apply(e, M.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
            if (!i && (p(t), t = t || d, g)) {
                if (11 !== w && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === w) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !j[e + " "] && (!y || !y.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, m = t, 1 === w && (z.test(e) || G.test(e))) {
                        for ((m = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                        v = h.join(",")
                    }
                    try {
                        return H.apply(r, m.querySelectorAll(v)), r
                    } catch (t) {
                        j(e, true)
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace($, "$1"), t, r, i)
        }

        function ue() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function le(e) {
            return e[b] = true, e
        }

        function ce(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return false
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function(t) {
                return "form" in t ? t.parentNode && false === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ye(e) {
            return le(function(t) {
                return t = +t, le(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, o = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, p = se.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, false) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce(function(e) {
                    return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), n.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ce(function(e) {
                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function(e) {
                    return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                }), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], y = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function(e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + R + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), (t = d.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = true, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                    n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
                }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return true;
                    return false
                }, k = t ? function(e, t) {
                    if (e === t) return f = true, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = true, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                    if (i === o) return pe(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                }, d) : d
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (p(e), n.matchesSelector && g && !j[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {
                    j(t, true)
                }
                return se(t, d, null, [e]).length > 0
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != d && p(e), x(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(k), f) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, true)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return true
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && S(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = se.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                y = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                m = !u && !s,
                                x = false;
                            if (y) {
                                if (o) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return false;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return true
                                }
                                if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                    for (x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === C && l[1]) && l[2], p = d && y.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                        if (1 === p.nodeType && ++x && p === t) {
                                            c[e] = [C, d, x];
                                            break
                                        }
                                } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === C && l[1]), false === x)
                                    for (;
                                        (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [C, x]), p !== t)););
                                return (x -= i) === r || x % r == 0 && x / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace($, "$1"));
                        return r[b] ? le(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: le(function(e) {
                        return function(t) {
                            return se(e, t).length > 0
                        }
                    }),
                    contains: le(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || i(t)).indexOf(e) > -1
                            }
                    }),
                    lang: le(function(e) {
                        return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return false
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(false),
                    disabled: ge(true),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, true === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return false;
                        return true
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ye(function() {
                        return [0]
                    }),
                    last: ye(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ye(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ye(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ye(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ye(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: ye(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) r.pseudos[t] = de(t);
        for (t in {
                submit: true,
                reset: true
            }) r.pseudos[t] = he(t);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = T++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return false
            } : function(t, n, u) {
                var l, c, f, p = [C, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return true
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === C && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return true
                            } return false
            }
        }

        function we(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return false;
                return true
            } : e[0]
        }

        function Ce(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), le(function(o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : Ce(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r)
                    for (l = Ce(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = Ce(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : H.apply(a, v)
            })
        }

        function Se(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function(e) {
                    return e === t
                }, s, true), f = be(function(e) {
                    return P(t, e) > -1
                }, s, true), p = [function(e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [be(we(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                        return Te(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace($, "$1"), n, u < i && Se(e.slice(u, i)), i < o && Se(e = e.slice(i)), i < o && xe(e))
                    }
                    p.push(n)
                } return we(p)
        }
        return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = E[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = r.preFilter; s;) {
                for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = false, (i = G.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace($, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = X[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : E(e, u).slice(0)
        }, s = se.compile = function(e, t) {
            var n, i = [],
                o = [],
                s = A[e + " "];
            if (!s) {
                for (t || (t = a(e)), n = t.length; n--;)(s = Se(t[n]))[b] ? i.push(s) : o.push(s);
                (s = A(e, function(e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        o = function(o, a, s, u, c) {
                            var f, h, y, v = 0,
                                m = "0",
                                x = o && [],
                                b = [],
                                w = l,
                                T = o || i && r.find.TAG("*", c),
                                S = C += null == w ? 1 : Math.random() || .1,
                                E = T.length;
                            for (c && (l = a == d || a || c); m !== E && null != (f = T[m]); m++) {
                                if (i && f) {
                                    for (h = 0, a || f.ownerDocument == d || (p(f), s = !g); y = e[h++];)
                                        if (y(f, a || d, s)) {
                                            u.push(f);
                                            break
                                        } c && (C = S)
                                }
                                n && ((f = !y && f) && v--, o && x.push(f))
                            }
                            if (v += m, n && m !== v) {
                                for (h = 0; y = t[h++];) y(x, b, a, s);
                                if (o) {
                                    if (v > 0)
                                        for (; m--;) x[m] || b[m] || (b[m] = L.call(u));
                                    b = Ce(b)
                                }
                                H.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && se.uniqueSort(u)
                            }
                            return c && (C = S, l = w), x
                        };
                    return n ? le(o) : o
                }(o, i))).selector = e
            }
            return s
        }, u = se.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                for (o = X.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ve(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && xe(u))) return H.apply(n, i), n;
                        break
                    }
            }
            return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(k).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(O, function(e, t, n) {
            var r;
            if (!n) return true === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(e);
    b.find = C, b.expr = C.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = C.uniqueSort, b.text = C.getText, b.isXMLDoc = C.isXML, b.contains = C.contains, b.escapeSelector = C.escape;
    var T = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && b(e).is(n)) break;
                    r.push(e)
                } return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        E = b.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function k(e, t, n) {
        return h(t) ? b.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? b.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? b.grep(e, function(e) {
            return s.call(t, e) > -1 !== n
        }) : b.filter(t, e, n)
    }
    b.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? b.find.matchesSelector(r, e) ? [r] : [] : b.find.matches(e, b.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, b.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(b(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (b.contains(i[t], this)) return true
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) b.find(e, i[t], n);
            return r > 1 ? b.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(k(this, e || [], false))
        },
        not: function(e) {
            return this.pushStack(k(this, e || [], true))
        },
        is: function(e) {
            return !!k(this, "string" == typeof e && E.test(e) ? b(e) : e || [], false).length
        }
    });
    var D, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof b ? t[0] : t, b.merge(this, b.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : y, true)), j.test(r[1]) && b.isPlainObject(t))
                    for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = y.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this)
    }).prototype = b.fn, D = b(y);
    var L = /^(?:parents|prev(?:Until|All))/,
        q = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };

    function H(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    b.fn.extend({
        has: function(e) {
            var t = b(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (b.contains(this, t[e])) return true
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && b(e);
            if (!E.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(b(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), b.merge([], e.childNodes))
        }
    }, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = b.filter(r, i)), this.length > 1 && (q[e] || b.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function O(e) {
        throw e
    }

    function R(e, t, n, r) {
        var i;
        try {
            e && h(i = e.promise) ? i.call(e).done(t).fail(n) : e && h(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return b.each(e.match(M) || [], function(e, n) {
                t[n] = true
            }), t
        }(e) : b.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function() {
                for (i = i || e.once, r = t = true; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) false === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = false);
                e.memory || (n = false), t = false, i && (o = n ? [] : "")
            },
            l = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        b.each(n, function(n, r) {
                            h(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return b.each(arguments, function(e, t) {
                        for (var n;
                            (n = b.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function(e) {
                    return e ? b.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    }, b.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                    ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return b.Deferred(function(t) {
                            b.each(n, function(n, r) {
                                var i = h(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, h(l) ? i ? l.call(e, a(o, n, P, i), a(o, n, O, i)) : (o++, l.call(e, a(o, n, P, i), a(o, n, O, i), a(o, n, P, n.notifyWith))) : (r !== P && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function() {
                                        try {
                                            l()
                                        } catch (e) {
                                            b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== O && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return b.Deferred(function(e) {
                            n[0][3].add(a(0, e, h(i) ? i : P, e.notifyWith)), n[1][3].add(a(0, e, h(t) ? t : P)), n[2][3].add(a(0, e, h(r) ? r : O))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? b.extend(e, i) : i
                    }
                },
                o = {};
            return b.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = i.call(arguments),
                a = b.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, o[e] = arguments.length > 1 ? i.call(arguments) : n, --t || a.resolveWith(r, o)
                    }
                };
            if (t <= 1 && (R(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || h(o[n] && o[n].then))) return a.then();
            for (; n--;) R(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && I.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, b.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var B = b.Deferred();

    function W() {
        y.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), b.ready()
    }
    b.fn.ready = function(e) {
        return B.then(e).catch(function(e) {
            b.readyException(e)
        }), this
    }, b.extend({
        isReady: false,
        readyWait: 1,
        ready: function(e) {
            (true === e ? --b.readyWait : b.isReady) || (b.isReady = true, true !== e && --b.readyWait > 0 || B.resolveWith(y, [b]))
        }
    }), b.ready.then = B.then, "complete" === y.readyState || "loading" !== y.readyState && !y.documentElement.doScroll ? e.setTimeout(b.ready) : (y.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
    var F = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n))
                for (s in i = true, n) F(e, t, s, n[s], true, o, a);
            else if (void 0 !== r && (i = true, h(r) || (a = true), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(b(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        $ = /^-ms-/,
        _ = /-([a-z])/g;

    function G(e, t) {
        return t.toUpperCase()
    }

    function z(e) {
        return e.replace($, "ms-").replace(_, G)
    }
    var U = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function V() {
        this.expando = b.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: true
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[z(t)] = n;
            else
                for (r in t) i[z(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in r ? [t] : t.match(M) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || b.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !b.isEmptyObject(t)
        }
    };
    var X = new V,
        Y = new V,
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function K(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Y.set(e, t, n)
            } else n = void 0;
        return n
    }
    b.extend({
        hasData: function(e) {
            return Y.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        removeData: function(e, t) {
            Y.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }), b.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Y.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = z(r.slice(5)), K(o, r, i[r]));
                    X.set(o, "hasDataAttrs", true)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Y.set(this, e)
            }) : F(this, function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Y.get(o, e)) ? n : void 0 !== (n = K(o, e)) ? n : void 0;
                this.each(function() {
                    Y.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, true)
        },
        removeData: function(e) {
            return this.each(function() {
                Y.remove(this, e)
            })
        }
    }), b.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = X.get(e, t), n && (!r || Array.isArray(n) ? r = X.access(e, t, b.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = b._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                b.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }), b.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = b.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = X.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
        te = ["Top", "Right", "Bottom", "Left"],
        ne = y.documentElement,
        re = function(e) {
            return b.contains(e.ownerDocument, e)
        },
        ie = {
            composed: true
        };
    ne.getRootNode && (re = function(e) {
        return b.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument
    });
    var oe = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === b.css(e, "display")
    };

    function ae(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return b.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (b.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (b.cssNumber[t] || "px" !== l && +u) && ee.exec(b.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) b.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, b.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var se = {};

    function ue(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = se[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = b.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), se[r] = i, i)
    }

    function le(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = X.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && oe(r) && (i[o] = ue(r))) : "none" !== n && (i[o] = "none", X.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    b.fn.extend({
        show: function() {
            return le(this, true)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                oe(this) ? b(this).show() : b(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = y.createDocumentFragment().appendChild(y.createElement("div")), (fe = y.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), d.checkClone = ce.cloneNode(true).cloneNode(true).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!ce.cloneNode(true).lastChild.defaultValue, ce.innerHTML = "<option></option>", d.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ye(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? b.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, d.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) b.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + b.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            b.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && b.inArray(o, r) > -1) i && i.push(o);
            else if (l = re(o), a = ye(f.appendChild(o), "script"), l && ve(a), n)
            for (c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return true
    }

    function Ce() {
        return false
    }

    function Te(e, t) {
        return e === function() {
            try {
                return y.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), false === i) i = Ce;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return b().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = b.guid++)), e.each(function() {
            b.event.add(this, t, i, r, n)
        })
    }

    function Ee(e, t, n) {
        n ? (X.set(e, t, false), b.event.add(e, t, {
            namespace: false,
            handler: function(e) {
                var r, o, a = X.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(b.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments), X.set(this, t, a), r = n(this, t), this[t](), a !== (o = X.get(this, t)) || r ? X.set(this, t, false) : o = {}, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                } else a.length && (X.set(this, t, {
                    value: b.event.trigger(b.extend(a[0], b.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === X.get(e, t) && b.event.add(e, t, we)
    }
    b.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = X.get(e);
            if (U(e))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && b.find.matchesSelector(ne, i), n.guid || (n.guid = b.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(t) {
                        return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(M) || [""]).length; l--;) d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = b.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = b.event.special[d] || {}, c = b.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && b.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && false !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), b.event.global[d] = true)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = X.hasData(e) && X.get(e);
            if (y && (u = y.events)) {
                for (l = (t = (t || "").match(M) || [""]).length; l--;)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = b.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && false !== f.teardown.call(e, h, y.handle) || b.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) b.event.remove(e, d + t[l], n, r, true);
                b.isEmptyObject(u) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = b.event.fix(e),
                l = (X.get(this, "events") || Object.create(null))[u.type] || [],
                c = b.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || false !== c.preDispatch.call(this, u)) {
                for (a = b.event.handlers.call(this, u, l), t = 0;
                    (i = a[t++]) && !u.isPropagationStopped();)
                    for (u.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && false !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((b.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && false === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || true !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? b(i, this).index(l) > -1 : b.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(b.Event.prototype, e, {
                enumerable: true,
                configurable: true,
                get: h(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[b.expando] ? e : new b.Event(e)
        },
        special: {
            load: {
                noBubble: true
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we), false
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click"), true
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && X.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, b.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, b.Event = function(e, t) {
        if (!(this instanceof b.Event)) return new b.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && false === e.returnValue ? we : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[b.expando] = true
    }, b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, b.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        char: true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
    }, b.event.addProp), b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        b.event.special[e] = {
            setup: function() {
                return Ee(this, e, Te), false
            },
            trigger: function() {
                return Ee(this, e), true
            },
            _default: function() {
                return true
            },
            delegateType: t
        }
    }), b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || b.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.fn.extend({
        on: function(e, t, n, r) {
            return Se(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Se(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, b(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return false !== t && "function" != typeof t || (n = t, t = void 0), false === n && (n = Ce), this.each(function() {
                b.event.remove(this, e, n, t)
            })
        }
    });
    var Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function De(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e
    }

    function Ne(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function qe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (s = X.get(e).events))
                for (i in X.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) b.event.add(t, i, s[i][n]);
            Y.hasData(e) && (o = Y.access(e), a = b.extend({}, o), Y.set(t, a))
        }
    }

    function He(e, t, n, r) {
        t = o(t);
        var i, a, s, u, l, c, f = 0,
            p = e.length,
            g = p - 1,
            y = t[0],
            v = h(y);
        if (v || p > 1 && "string" == typeof y && !d.checkClone && je.test(y)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), He(o, t, n, r)
        });
        if (p && (a = (i = xe(t, e[0].ownerDocument, false, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (u = (s = b.map(ye(i, "script"), Ne)).length; f < p; f++) l = i, f !== g && (l = b.clone(l, true, true), u && b.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, b.map(s, Le), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !X.access(l, "globalEval") && b.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? b._evalUrl && !l.noModule && b._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, c) : m(l.textContent.replace(ke, ""), l, c))
        }
        return e
    }

    function Me(e, t, n) {
        for (var r, i = t ? b.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || b.cleanData(ye(r)), r.parentNode && (n && re(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    b.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(true),
                f = re(e);
            if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) qe(o[r], a[r]);
                else qe(e, c);
            return (a = ye(c, "script")).length > 0 && ve(a, !f && ye(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (U(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? b.event.remove(n, r) : b.removeEvent(n, r, t.handle);
                        n[X.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }), b.fn.extend({
        detach: function(e) {
            return Me(this, e, true)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? b.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (b.cleanData(ye(e, false)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return b.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = b.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (b.cleanData(ye(t, false)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return He(this, arguments, function(t) {
                var n = this.parentNode;
                b.inArray(this, e) < 0 && (b.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            for (var n, r = [], i = b(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(true), b(i[s])[t](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Pe = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        Oe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Re = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ie = new RegExp(te.join("|"), "i");

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Oe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || re(e) || (a = b.style(e, t)), !d.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function We(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), ne.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, u, l = y.createElement("div"),
            c = y.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(true).style.backgroundClip = "", d.clearCloneStyle = "content-box" === c.style.backgroundClip, b.extend(d, {
            boxSizingReliable: function() {
                return t(), i
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == s && (t = y.createElement("table"), n = y.createElement("tr"), r = y.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", ne.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, ne.removeChild(t)), s
            }
        }))
    }();
    var Fe = ["Webkit", "Moz", "ms"],
        $e = y.createElement("div").style,
        _e = {};

    function Ge(e) {
        var t = b.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;)
                if ((e = Fe[n] + t) in $e) return e
        }(e) || e)
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Ue = /^--/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ye(e, t, n) {
        var r = ee.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += b.css(e, n + te[a], true, i)), r ? ("content" === n && (u -= b.css(e, "padding" + te[a], true, i)), "margin" !== n && (u -= b.css(e, "border" + te[a] + "Width", true, i))) : (u += b.css(e, "padding" + te[a], true, i), "padding" !== n ? u += b.css(e, "border" + te[a] + "Width", true, i) : s += b.css(e, "border" + te[a] + "Width", true, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Oe(e),
            i = (!d.boxSizingReliable() || n) && "border-box" === b.css(e, "boxSizing", false, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!d.boxSizingReliable() && i || !d.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === b.css(e, "display", false, r)) && e.getClientRects().length && (i = "border-box" === b.css(e, "boxSizing", false, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = z(t),
                    u = Ue.test(t),
                    l = e.style;
                if (u || (t = Ge(s)), a = b.cssHooks[t] || b.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, false, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ee.exec(n)) && i[1] && (n = ae(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (b.cssNumber[s] ? "" : "px")), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = z(t);
            return Ue.test(t) || (t = Ge(s)), (a = b.cssHooks[t] || b.cssHooks[s]) && "get" in a && (i = a.get(e, true, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Xe && (i = Xe[t]), "" === n || n ? (o = parseFloat(i), true === n || isFinite(o) ? o || 0 : i) : i
        }
    }), b.each(["height", "width"], function(e, t) {
        b.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !ze.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, t, r) : Re(e, Ve, function() {
                    return Je(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = Oe(e),
                    a = !d.scrollboxSize() && "absolute" === o.position,
                    s = (a || r) && "border-box" === b.css(e, "boxSizing", false, o),
                    u = r ? Qe(e, t, r, s, o) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Qe(e, t, "border", false, o) - .5)), u && (i = ee.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = b.css(e, t)), Ye(0, n, u)
            }
        }
    }), b.cssHooks.marginLeft = We(d.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + te[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (b.cssHooks[e + t].set = Ye)
    }), b.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Oe(e), i = t.length; a < i; a++) o[t[a]] = b.css(e, t[a], false, r);
                    return o
                }
                return void 0 !== n ? b.style(e, t, n) : b.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), b.Tween = Ke, Ke.prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || b.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }, Ke.prototype.init.prototype = Ke.prototype, Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !b.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Ke.propHooks.scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, b.fx = Ke.prototype.init, b.fx.step = {};
    var Ze, et, tt = /^(?:toggle|show|hide)$/,
        nt = /queueHooks$/;

    function rt() {
        et && (false === y.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, b.fx.interval), b.fx.tick())
    }

    function it() {
        return e.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function ot(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = te[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function at(e, t, n) {
        for (var r, i = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function st(e, t, n) {
        var r, i, o = 0,
            a = st.prefilters.length,
            s = b.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return false;
                for (var t = Ze || it(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), false)
            },
            l = s.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(true, {
                    specialEasing: {},
                    easing: b.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ze || it(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = true; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = z(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = b.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); o < a; o++)
            if (r = st.prefilters[o].call(l, e, c, l.opts)) return h(r.stop) && (b._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return b.map(c, at, l), h(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    b.Animation = b.extend(st, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return ae(n.elem, e, ee.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                h(e) ? (t = e, e = ["*"]) : e = e.match(M);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], st.tweeners[n] = st.tweeners[n] || [], st.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && oe(e),
                    y = X.get(e, "fxshow");
                for (r in n.queue || (null == (a = b._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, p.always(function() {
                        p.always(function() {
                            a.unqueued--, b.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                    if (i = t[r], tt.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !y || void 0 === y[r]) continue;
                            g = true
                        }
                        d[r] = y && y[r] || b.style(e, r)
                    } if ((u = !b.isEmptyObject(t)) || !b.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = X.get(e, "display")), "none" === (c = b.css(e, "display")) && (l ? c = l : (le([e], true), l = e.style.display || l, c = b.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === b.css(e, "float") && (u || (p.done(function() {
                            h.display = l
                        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        })), u = false, d) u || (y ? "hidden" in y && (g = y.hidden) : y = X.access(e, "fxshow", {
                        display: l
                    }), o && (y.hidden = !g), g && le([e], true), p.done(function() {
                        for (r in g || le([e]), X.remove(e, "fxshow"), d) b.style(e, r, d[r])
                    })), u = at(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
            }],
            prefilter: function(e, t) {
                t ? st.prefilters.unshift(e) : st.prefilters.push(e)
            }
        }), b.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? b.extend({}, e) : {
                complete: n || !n && t || h(e) && e,
                duration: e,
                easing: n && t || t && !h(t) && t
            };
            return b.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in b.fx.speeds ? r.duration = b.fx.speeds[r.duration] : r.duration = b.fx.speeds._default), null != r.queue && true !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                h(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
            }, r
        }, b.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(oe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = b.isEmptyObject(e),
                    o = b.speed(t, n, r),
                    a = function() {
                        var t = st(this, b.extend({}, e), o);
                        (i || X.get(this, "finish")) && t.stop(true)
                    };
                return a.finish = a, i || false === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                    var t = true,
                        i = null != e && e + "queueHooks",
                        o = b.timers,
                        a = X.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && nt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = false, o.splice(i, 1));
                    !t && n || b.dequeue(this, e)
                })
            },
            finish: function(e) {
                return false !== e && (e = e || "fx"), this.each(function() {
                    var t, n = X.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = b.timers,
                        a = r ? r.length : 0;
                    for (n.finish = true, b.queue(this, e, []), i && i.stop && i.stop.call(this, true), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(true), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), b.each(["toggle", "show", "hide"], function(e, t) {
            var n = b.fn[t];
            b.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, true), e, r, i)
            }
        }), b.each({
            slideDown: ot("show"),
            slideUp: ot("hide"),
            slideToggle: ot("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            b.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), b.timers = [], b.fx.tick = function() {
            var e, t = 0,
                n = b.timers;
            for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || b.fx.stop(), Ze = void 0
        }, b.fx.timer = function(e) {
            b.timers.push(e), b.fx.start()
        }, b.fx.interval = 13, b.fx.start = function() {
            et || (et = true, rt())
        }, b.fx.stop = function() {
            et = null
        }, b.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, b.fn.delay = function(t, n) {
            return t = b.fx && b.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = y.createElement("input"),
                t = y.createElement("select").appendChild(y.createElement("option"));
            e.type = "checkbox", d.checkOn = "" !== e.value, d.optSelected = t.selected, (e = y.createElement("input")).value = "t", e.type = "radio", d.radioValue = "t" === e.value
        }();
    var ut, lt = b.expr.attrHandle;
    b.fn.extend({
        attr: function(e, t) {
            return F(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e)
            })
        }
    }), b.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === o && b.isXMLDoc(e) || (i = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void b.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = b.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!d.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ut = {
        set: function(e, t, n) {
            return false === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = lt[t] || b.find.attr;
        lt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = lt[a], lt[a] = i, i = null != n(e, t, r) ? a : null, lt[a] = o), i
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;

    function pt(e) {
        return (e.match(M) || []).join(" ")
    }

    function dt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ht(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
    }
    b.fn.extend({
        prop: function(e, t) {
            return F(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[b.propFix[e] || e]
            })
        }
    }), b.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && b.isXMLDoc(e) || (t = b.propFix[t] || t, i = b.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = b.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), d.optSelected || (b.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        b.propFix[this.toLowerCase()] = this
    }), b.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e)) return this.each(function(t) {
                b(this).addClass(e.call(this, t, dt(this)))
            });
            if ((t = ht(e)).length)
                for (; n = this[u++];)
                    if (i = dt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e)) return this.each(function(t) {
                b(this).removeClass(e.call(this, t, dt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = ht(e)).length)
                for (; n = this[u++];)
                    if (i = dt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, dt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = b(this), a = ht(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = dt(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || false === e ? "" : X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + pt(dt(n)) + " ").indexOf(t) > -1) return true;
            return false
        }
    });
    var gt = /\r/g;
    b.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = h(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, b(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = b.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(gt, "") : null == n ? "" : n : void 0
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = b.find.attr(e, "value");
                    return null != t ? t : pt(b.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = b.makeArray(t), a = i.length; a--;)((r = i[a]).selected = b.inArray(b.valHooks.option.get(r), o) > -1) && (n = true);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = b.inArray(b(e).val(), t) > -1
            }
        }, d.checkOn || (b.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), d.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        vt = function(e) {
            e.stopPropagation()
        };
    b.extend(b.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, f, p, d, v = [r || y],
                m = c.call(t, "type") ? t.type : t,
                x = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = s = r = r || y, 3 !== r.nodeType && 8 !== r.nodeType && !yt.test(m + b.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), l = m.indexOf(":") < 0 && "on" + m, (t = t[b.expando] ? t : new b.Event(m, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : b.makeArray(n, [t]), p = b.event.special[m] || {}, i || !p.trigger || false !== p.trigger.apply(r, n))) {
                if (!i && !p.noBubble && !g(r)) {
                    for (u = p.delegateType || m, yt.test(u + m) || (a = a.parentNode); a; a = a.parentNode) v.push(a), s = a;
                    s === (r.ownerDocument || y) && v.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = v[o++]) && !t.isPropagationStopped();) d = a, t.type = o > 1 ? u : p.bindType || m, (f = (X.get(a, "events") || Object.create(null))[t.type] && X.get(a, "handle")) && f.apply(a, n), (f = l && a[l]) && f.apply && U(a) && (t.result = f.apply(a, n), false === t.result && t.preventDefault());
                return t.type = m, i || t.isDefaultPrevented() || p._default && false !== p._default.apply(v.pop(), n) || !U(r) || l && h(r[m]) && !g(r) && ((s = r[l]) && (r[l] = null), b.event.triggered = m, t.isPropagationStopped() && d.addEventListener(m, vt), r[m](), t.isPropagationStopped() && d.removeEventListener(m, vt), b.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = b.extend(new b.Event, n, {
                type: e,
                isSimulated: true
            });
            b.event.trigger(r, null, t)
        }
    }), b.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return b.event.trigger(e, t, n, true)
        }
    }), d.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e))
        };
        b.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this,
                    i = X.access(r, t);
                i || r.addEventListener(e, n, true), X.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this,
                    i = X.access(r, t) - 1;
                i ? X.access(r, t, i) : (r.removeEventListener(e, n, true), X.remove(r, t))
            }
        }
    });
    var mt = e.location,
        xt = {
            guid: Date.now()
        },
        bt = /\?/;
    b.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {}
        return r = n && n.getElementsByTagName("parsererror")[0], n && !r || b.error("Invalid XML: " + (r ? b.map(r.childNodes, function(e) {
            return e.textContent
        }).join("\n") : t)), n
    };
    var wt = /\[\]$/,
        Ct = /\r?\n/g,
        Tt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function Et(e, t, n, r) {
        var i;
        if (Array.isArray(t)) b.each(t, function(t, i) {
            n || wt.test(e) ? r(e, i) : Et(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) Et(e + "[" + i + "]", t[i], n, r)
    }
    b.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = h(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Et(n, e[n], t, i);
        return r.join("&")
    }, b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && St.test(this.nodeName) && !Tt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = b(this).val();
                return null == n ? null : Array.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            }).get()
        }
    });
    var At = /%20/g,
        jt = /#.*$/,
        kt = /([?&])_=[^&]*/,
        Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Nt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        qt = {},
        Ht = {},
        Mt = "*/".concat("*"),
        Pt = y.createElement("a");

    function Ot(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(M) || [];
            if (h(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Rt(e, t, n, r) {
        var i = {},
            o = e === Ht;

        function a(s) {
            var u;
            return i[s] = true, b.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), false)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function It(e, t) {
        var n, r, i = b.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && b.extend(true, e, r), e
    }
    Pt.href = mt.href, b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mt.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": JSON.parse,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(e, t) {
            return t ? It(It(e, b.ajaxSettings), t) : It(b.ajaxSettings, e)
        },
        ajaxPrefilter: Ot(qt),
        ajaxTransport: Ot(Ht),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, i, o, a, s, u, l, c, f, p, d = b.ajaxSetup({}, n),
                h = d.context || d,
                g = d.context && (h.nodeType || h.jquery) ? b(h) : b.event,
                v = b.Deferred(),
                m = b.Callbacks("once memory"),
                x = d.statusCode || {},
                w = {},
                C = {},
                T = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!a)
                                for (a = {}; t = Dt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return l ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (l) S.always(e[S.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t), E(0, t), this
                    }
                };
            if (v.promise(S), d.url = ((t || d.url || mt.href) + "").replace(Lt, mt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(M) || [""], null == d.crossDomain) {
                u = y.createElement("a");
                try {
                    u.href = d.url, u.href = u.href, d.crossDomain = Pt.protocol + "//" + Pt.host != u.protocol + "//" + u.host
                } catch (e) {
                    d.crossDomain = true
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = b.param(d.data, d.traditional)), Rt(qt, d, n, S), l) return S;
            for (f in (c = b.event && d.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Nt.test(d.type), i = d.url.replace(jt, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(At, "+")) : (p = d.url.slice(i.length), d.data && (d.processData || "string" == typeof d.data) && (i += (bt.test(i) ? "&" : "?") + d.data, delete d.data), false === d.cache && (i = i.replace(kt, "$1"), p = (bt.test(i) ? "&" : "?") + "_=" + xt.guid++ + p), d.url = i + p), d.ifModified && (b.lastModified[i] && S.setRequestHeader("If-Modified-Since", b.lastModified[i]), b.etag[i] && S.setRequestHeader("If-None-Match", b.etag[i])), (d.data && d.hasContent && false !== d.contentType || n.contentType) && S.setRequestHeader("Content-Type", d.contentType), S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : d.accepts["*"]), d.headers) S.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (false === d.beforeSend.call(h, S, d) || l)) return S.abort();
            if (T = "abort", m.add(d.complete), S.done(d.success), S.fail(d.error), r = Rt(Ht, d, n, S)) {
                if (S.readyState = 1, c && g.trigger("ajaxSend", [S, d]), l) return S;
                d.async && d.timeout > 0 && (s = e.setTimeout(function() {
                    S.abort("timeout")
                }, d.timeout));
                try {
                    l = false, r.send(w, E)
                } catch (e) {
                    if (l) throw e;
                    E(-1, e)
                }
            } else E(-1, "No Transport");

            function E(t, n, a, u) {
                var f, p, y, w, C, T = n;
                l || (l = true, s && e.clearTimeout(s), r = void 0, o = u || "", S.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, a && (w = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(d, S, a)), !f && b.inArray("script", d.dataTypes) > -1 && b.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}), w = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    true === a ? a = l[i] : true !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (true !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, w, S, f), f ? (d.ifModified && ((C = S.getResponseHeader("Last-Modified")) && (b.lastModified[i] = C), (C = S.getResponseHeader("etag")) && (b.etag[i] = C)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, p = w.data, f = !(y = w.error))) : (y = T, !t && T || (T = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || T) + "", f ? v.resolveWith(h, [p, T, S]) : v.rejectWith(h, [S, T, y]), S.statusCode(x), x = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [S, d, f ? p : y]), m.fireWith(h, [S, T]), c && (g.trigger("ajaxComplete", [S, d]), --b.active || b.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return b.get(e, void 0, t, "script")
        }
    }), b.each(["get", "post"], function(e, t) {
        b[t] = function(e, n, r, i) {
            return h(n) && (i = i || r, r = n, n = void 0), b.ajax(b.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, b.isPlainObject(e) && e))
        }
    }), b.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), b._evalUrl = function(e, t, n) {
        return b.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                b.globalEval(e, t, n)
            }
        })
    }, b.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = b(e, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return h(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = h(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                b(this).replaceWith(this.childNodes)
            }), this
        }
    }), b.expr.pseudos.hidden = function(e) {
        return !b.expr.pseudos.visible(e)
    }, b.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, b.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        Wt = b.ajaxSettings.xhr();
    d.cors = !!Wt && "withCredentials" in Wt, d.ajax = Wt = !!Wt, b.ajaxTransport(function(t) {
        var n, r;
        if (d.cors || Wt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), b.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = false)
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = false), e.crossDomain && (e.type = "GET")
    }), b.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, i) {
                t = b("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), y.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Ft, $t = [],
        _t = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || b.expando + "_" + xt.guid++;
            return this[e] = true, e
        }
    }), b.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = false !== t.jsonp && (_t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(_t, "$1" + i) : false !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || b.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? b(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, $t.push(i)), a && h(o) && o(a[0]), a = o = void 0
        }), "script"
    }), d.createHTMLDocument = ((Ft = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), b.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = false), t || (d.createHTMLDocument ? ((r = (t = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href, t.head.appendChild(r)) : t = y), i = j.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && b(o).remove(), b.merge([], i.childNodes)));
        var r, i, o
    }, b.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = pt(e.slice(s)), e = e.slice(0, s)), h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && b.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? b("<div>").append(b.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, b.expr.pseudos.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem
        }).length
    }, b.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = b.css(e, "position"),
                c = b(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = b.css(e, "top"), u = b.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), h(t) && (t = t.call(e, n, b.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, b.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                b.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === b.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = b(e).offset()).top += b.css(e, "borderTopWidth", true), i.left += b.css(e, "borderLeftWidth", true))
                }
                return {
                    top: t.top - i.top - b.css(r, "marginTop", true),
                    left: t.left - i.left - b.css(r, "marginLeft", true)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === b.css(e, "position");) e = e.offsetParent;
                return e || ne
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function(r) {
            return F(this, function(e, r, i) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), b.each(["top", "left"], function(e, t) {
        b.cssHooks[t] = We(d.pixelPosition, function(e, n) {
            if (n) return n = Be(e, t), Pe.test(n) ? b(e).position()[t] + "px" : n
        })
    }), b.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        b.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            b.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (true === i || true === o ? "margin" : "border");
                return F(this, function(t, n, i) {
                    var o;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? b.css(t, n, s) : b.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), b.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    b.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return r = i.call(arguments, 2), (o = function() {
            return e.apply(t || this, r.concat(i.call(arguments)))
        }).guid = e.guid = e.guid || b.guid++, o
    }, b.holdReady = function(e) {
        e ? b.readyWait++ : b.ready(true)
    }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = A, b.isFunction = h, b.isWindow = g, b.camelCase = z, b.type = x, b.now = Date.now, b.isNumeric = function(e) {
        var t = b.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, b.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return b
    });
    var zt = e.jQuery,
        Ut = e.$;
    return b.noConflict = function(t) {
        return e.$ === b && (e.$ = Ut), t && e.jQuery === b && (e.jQuery = zt), b
    }, void 0 === t && (e.jQuery = e.$ = b), b
});

jqGCSecurly = jQuery.noConflict(true);




// Real code now
const gChatPort = chrome.runtime.connect({
    name: "gchat-widget"
});

var phrasesList;
var regexBullyArray;
var regexGriefArray;
var regexViolenceArray;
var gChatId;
var featureConfig = undefined;
var phraseMatchList = {
    Bully: [],
    Grief: [],
    Violence: []
};
var previousStr = "";
var mappingDictionary = {};
!function(e) {
    function t() {
        if (featureConfig && featureConfig.google_chat_flagging) {
            phrasesList = {
                Bully: phraseMatchList.Bully.map(e => e.Phrase),
                Grief: phraseMatchList.Grief.map(e => e.Phrase),
                Violence: phraseMatchList.Violence.map(e => e.Phrase)
            };
            
            regexBullyArray = new RegExp("\\b" + phrasesList.Bully.join("|"), "gim");
            regexGriefArray = new RegExp("\\b" + phrasesList.Grief.join("|"), "gim");
            regexViolenceArray = new RegExp("\\b" + phrasesList.Violence.join("|"), "gim");
            
            phraseMatchList.Bully.forEach(e => {
                mappingDictionary[e.Phrase] = e.Confidence + "-" + e.Urgency
            });
            phraseMatchList.Grief.forEach(e => {
                mappingDictionary[e.Phrase] = e.Confidence + "-" + e.Urgency
            });
            phraseMatchList.Violence.forEach(e => {
                mappingDictionary[e.Phrase] = e.Confidence + "-" + e.Urgency
            });
            
            jqGCSecurly(document.body).on("keyup", 'div[role="textbox"]', function(e) {
                var t = e.target.value ? e.target.value : e.target.innerHTML;
                var r = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
                if (13 != r || e.shiftKey) { // 13 is Enter key; if Enter key isn't pressed or if both shift and Enter keys are pressed
                    previousStr = t; // Save the string.
                } else { // If the Enter key has been pressed and it has been sent
                    if (previousStr.length > 0) { // If the entered string is not empty...
                        n(previousStr, e); // process it.
                    }
                    previousStr = ""; // After sending set the saved string to empty
                }
            });
            
            jqGCSecurly(document.body).on("keydown", 'div[role="textbox"]', function(e) { // Save as above
                var t = e.target.value ? e.target.value : e.target.innerHTML;
                var r = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
                if (13 != r || e.shiftKey) {
                    previousStr = t;
                } else {
                    if (previousStr.length > 0) {
                        n(previousStr, e);
                    }
                    previousStr = "";
                }
            });
            
            jqGCSecurly(document.body).on("click", 'div[role="button"]', function(e) {
                var t = jqGCSecurly(e.target).parents().parents().find('div[role="textbox"]');
                if (t.length > 0) {
                    typedString = t[0].innerHTML;
                    if (typedString.length > 0) {
                        setTimeout(function() {
                            0 != t[0].innerHTML.length && "<br>" != t[0].innerHTML || n(typedString, e)
                        }, 500)
                    }
                }
            })
        }
    }

    function n(e, t) {
        e = e.toLowerCase();
        let n = (e.replace(/<[^>]*>?/gm, "").replace(/[\r\t\n]/gm, " ").replace(/\s{2,}/g, " ")).replace(/[^a-zA-Z0-9 ]/g, "");
        let i = [...n.matchAll(regexBullyArray)];
        if (i.length > 0) { // Switch over bully, grief, and violence arrays to see which one is matched
            r(e, i, "Bully", t);
        } else {
            i = [...n.matchAll(regexGriefArray)]
            if (i.length > 0) {
                r(e, i, "Grief", t);
            } else {
                i = [...n.matchAll(regexViolenceArray)]
                if (i.length > 0) {
                    r(e, i, "Violence", t);
                }
            }
        } 
    }

    function r(e, t, n, r) {
        const i = [];
        let o = [];
        jqGCSecurly(r.currentTarget).parents("body").find("c-wiz[data-is-user-topic]").each((e, t) => {
            var n = {
                userEmail: jqGCSecurly(t).find("div[data-hovercard-id]").data("hovercard-id"),
                displayname: jqGCSecurly(t).find("div[data-name]").data("name"),
                timestamp: jqGCSecurly(t).find("span[data-absolute-timestamp]").data("absolute-timestamp"),
                message: jqGCSecurly(t).find("div[data-group-synthetic-id]").parent().parent().parent().text()
            };
            gChatId = jqGCSecurly(t).find("div[data-group-synthetic-id]").data("group-synthetic-id");
            if (n.message.length > 0) {
                i.push(n);
            }
        });
        jqGCSecurly(r.currentTarget).parents("body").find('c-wiz[data-group-id="' + gChatId + '"]').find("span[data-hovercard-id]").each((e, t) => {
            var n = {
                userEmail: jqGCSecurly(t).data("hovercard-id"),
                displayname: jqGCSecurly(t).data("name")
            };
            if (n.userEmail.length > 0) {
                o.push(n);
            }
        });
        function(e, t, n, r, i) {
            let o = t.map(e => phraseMatchList[i].find(t => t.Phrase.toLowerCase() == e)).filter(e => undefined !== e);
            var a = {
                chatRoomId: gChatId,
                flagged_text: e,
                matched_phrase: t.join("|"),
                context: r
            };
            a.score = function(e) { // function to calculate score
                let t = 0;
                let n = 0;
                let r = 0;
                const i = {
                    "Low-Low": 1,
                    "Low-Medium": 2,
                    "Low-High": 3,
                    "Medium-Low": 4,
                    "Medium-Medium": 5,
                    "Medium-High": 6,
                    "High-Low": 7,
                    "High-Medium": 8,
                    "High-High": 16,
                    "eHigh-eHigh": 500
                };
                try {
                    for (index in e) {
                        n = i[mappingDictionary[e[index].Phrase]];
                        r += n *= n;
                    }
                    if (r > 2000) {
                        return 1;
                    }
                    const o = {
                        "0,9": "50,60",
                        "10,14": "60,70",
                        "15,29": "70,80",
                        "30,44": "80,90",
                        "45,2000": "90,100"
                    };
                    let a = 0;
                    let s = 0;
                    let u = 0;
                    let l = 0;
                    for (const [e, t] of Object.entries(o)) {
                        const n = e.split(",");
                        const i = t.split(",");
                        if (r >= n[0] && r <= n[1]) {
                            a = n[0];
                            s = n[1];
                            u = i[0];
                            l = i[1];
                        }
                    }
                    let c = Math.abs(r - a) / Math.abs(s - a);
                    t = (10 * c + 1 * u) / 100
                } catch (e) {
                    console.error("Error in calculating score", e);
                    t = 0;
                }
                return t
            }(o);
            a.confidence = o.map(e => e.Confidence).join("|");
            a.type_detail = i;
            a.chatMembers = n;
            gChatPort.postMessage({
                action: "sendGoogleChatAnaltics", // Misspelling ("Analtics" --> "Analytics"): this could actually be purposeful tho
                data: JSON.stringify(a)
            });
        }(e, t, o = o.filter((e, t, n) => n.findIndex(t => ["displayname", "userEmail"].every(n => t[n] === e[n])) === t), i, n)
    }

    function i() {
        gChatPort.postMessage({
            action: "fetchInitialConfiguration"
        })
    };
    gChatPort.onMessage.addListener(function(e) {
        if ("initConfig" === e.action) {
            featureConfig = e.featureConfig;
            phraseMatchList = e.phraseMatchList;
            setTimeout(t, 2000);
        }
    });
    if (window.addEventListener) {
        window.addEventListener("load", i, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", i);
    }
}(jqGCSecurly);
