! function r(o, s, l) {
    function u(e, t) {
        if (!s[e]) {
            if (!o[e]) {
                var n = "function" == typeof require && require;
                if (!t && n) return n(e, !0);
                if (d) return d(e, !0);
                var i = new Error("Cannot find module '" + e + "'");
                throw i.code = "MODULE_NOT_FOUND", i
            }
            var a = s[e] = {
                exports: {}
            };
            o[e][0].call(a.exports, function (t) {
                return u(o[e][1][t] || t)
            }, a, a.exports, r, o, s, l)
        }
        return s[e].exports
    }
    for (var d = "function" == typeof require && require, t = 0; t < l.length; t++) u(l[t]);
    return u
}({
    1: [function (t, e, n) {
        var i, a;
        i = this, a = function (i) {
            "use strict";
            i = i && i.hasOwnProperty("default") ? i.default : i;
            var t, d = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                u = (function (t) {
                    var u = {};
                    for (var e in d) d.hasOwnProperty(e) && (u[d[e]] = e);
                    var o = t.exports = {
                        rgb: {
                            channels: 3,
                            labels: "rgb"
                        },
                        hsl: {
                            channels: 3,
                            labels: "hsl"
                        },
                        hsv: {
                            channels: 3,
                            labels: "hsv"
                        },
                        hwb: {
                            channels: 3,
                            labels: "hwb"
                        },
                        cmyk: {
                            channels: 4,
                            labels: "cmyk"
                        },
                        xyz: {
                            channels: 3,
                            labels: "xyz"
                        },
                        lab: {
                            channels: 3,
                            labels: "lab"
                        },
                        lch: {
                            channels: 3,
                            labels: "lch"
                        },
                        hex: {
                            channels: 1,
                            labels: ["hex"]
                        },
                        keyword: {
                            channels: 1,
                            labels: ["keyword"]
                        },
                        ansi16: {
                            channels: 1,
                            labels: ["ansi16"]
                        },
                        ansi256: {
                            channels: 1,
                            labels: ["ansi256"]
                        },
                        hcg: {
                            channels: 3,
                            labels: ["h", "c", "g"]
                        },
                        apple: {
                            channels: 3,
                            labels: ["r16", "g16", "b16"]
                        },
                        gray: {
                            channels: 1,
                            labels: ["gray"]
                        }
                    };
                    for (var n in o)
                        if (o.hasOwnProperty(n)) {
                            if (!("channels" in o[n])) throw new Error("missing channels property: " + n);
                            if (!("labels" in o[n])) throw new Error("missing channel labels property: " + n);
                            if (o[n].labels.length !== o[n].channels) throw new Error("channel and label counts mismatch: " + n);
                            var i = o[n].channels,
                                a = o[n].labels;
                            delete o[n].channels, delete o[n].labels, Object.defineProperty(o[n], "channels", {
                                value: i
                            }), Object.defineProperty(o[n], "labels", {
                                value: a
                            })
                        } o.rgb.hsl = function (t) {
                        var e, n, i = t[0] / 255,
                            a = t[1] / 255,
                            r = t[2] / 255,
                            o = Math.min(i, a, r),
                            s = Math.max(i, a, r),
                            l = s - o;
                        return s === o ? e = 0 : i === s ? e = (a - r) / l : a === s ? e = 2 + (r - i) / l : r === s && (e = 4 + (i - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [e, 100 * (s === o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n]
                    }, o.rgb.hsv = function (t) {
                        function e(t) {
                            return (d - t) / 6 / h + .5
                        }
                        var n, i, a, r, o, s = t[0] / 255,
                            l = t[1] / 255,
                            u = t[2] / 255,
                            d = Math.max(s, l, u),
                            h = d - Math.min(s, l, u);
                        return 0 == h ? r = o = 0 : (o = h / d, n = e(s), i = e(l), a = e(u), s === d ? r = a - i : l === d ? r = 1 / 3 + n - a : u === d && (r = 2 / 3 + i - n), r < 0 ? r += 1 : 1 < r && --r), [360 * r, 100 * o, 100 * d]
                    }, o.rgb.hwb = function (t) {
                        var e = t[0],
                            n = t[1],
                            i = t[2];
                        return [o.rgb.hsl(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, i))), 100 * (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i)))]
                    }, o.rgb.cmyk = function (t) {
                        var e, n = t[0] / 255,
                            i = t[1] / 255,
                            a = t[2] / 255;
                        return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - a))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
                    }, o.rgb.keyword = function (t) {
                        var e = u[t];
                        if (e) return e;
                        var n, i, a, r = 1 / 0;
                        for (var o in d)
                            if (d.hasOwnProperty(o)) {
                                var s = d[o],
                                    l = (i = t, a = s, Math.pow(i[0] - a[0], 2) + Math.pow(i[1] - a[1], 2) + Math.pow(i[2] - a[2], 2));
                                l < r && (r = l, n = o)
                            } return n
                    }, o.keyword.rgb = function (t) {
                        return d[t]
                    }, o.rgb.xyz = function (t) {
                        var e = t[0] / 255,
                            n = t[1] / 255,
                            i = t[2] / 255;
                        return [100 * (.4124 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = .04045 < n ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = .04045 < i ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
                    }, o.rgb.lab = function (t) {
                        var e = o.rgb.xyz(t),
                            n = e[0],
                            i = e[1],
                            a = e[2];
                        return i /= 100, a /= 108.883, n = .008856 < (n /= 95.047) ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (a = .008856 < a ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
                    }, o.hsl.rgb = function (t) {
                        var e, n, i, a, r, o = t[0] / 360,
                            s = t[1] / 100,
                            l = t[2] / 100;
                        if (0 == s) return [r = 255 * l, r, r];
                        e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
                        for (var u = 0; u < 3; u++)(i = o + 1 / 3 * -(u - 1)) < 0 && i++, 1 < i && i--, r = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * r;
                        return a
                    }, o.hsl.hsv = function (t) {
                        var e = t[0],
                            n = t[1] / 100,
                            i = t[2] / 100,
                            a = n,
                            r = Math.max(i, .01);
                        return n *= (i *= 2) <= 1 ? i : 2 - i, a *= r <= 1 ? r : 2 - r, [e, 100 * (0 === i ? 2 * a / (r + a) : 2 * n / (i + n)), 100 * ((i + n) / 2)]
                    }, o.hsv.rgb = function (t) {
                        var e = t[0] / 60,
                            n = t[1] / 100,
                            i = t[2] / 100,
                            a = Math.floor(e) % 6,
                            r = e - Math.floor(e),
                            o = 255 * i * (1 - n),
                            s = 255 * i * (1 - n * r),
                            l = 255 * i * (1 - n * (1 - r));
                        switch (i *= 255, a) {
                            case 0:
                                return [i, l, o];
                            case 1:
                                return [s, i, o];
                            case 2:
                                return [o, i, l];
                            case 3:
                                return [o, s, i];
                            case 4:
                                return [l, o, i];
                            case 5:
                                return [i, o, s]
                        }
                    }, o.hsv.hsl = function (t) {
                        var e, n, i, a = t[0],
                            r = t[1] / 100,
                            o = t[2] / 100,
                            s = Math.max(o, .01);
                        return i = (2 - r) * o, n = r * s, [a, 100 * (n = (n /= (e = (2 - r) * s) <= 1 ? e : 2 - e) || 0), 100 * (i /= 2)]
                    }, o.hwb.rgb = function (t) {
                        var e, n, i, a, r, o, s, l = t[0] / 360,
                            u = t[1] / 100,
                            d = t[2] / 100,
                            h = u + d;
                        switch (1 < h && (u /= h, d /= h), i = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (i = 1 - i), a = u + i * ((n = 1 - d) - u), e) {
                            default:
                            case 6:
                            case 0:
                                r = n, o = a, s = u;
                                break;
                            case 1:
                                r = a, o = n, s = u;
                                break;
                            case 2:
                                r = u, o = n, s = a;
                                break;
                            case 3:
                                r = u, o = a, s = n;
                                break;
                            case 4:
                                r = a, o = u, s = n;
                                break;
                            case 5:
                                r = n, o = u, s = a
                        }
                        return [255 * r, 255 * o, 255 * s]
                    }, o.cmyk.rgb = function (t) {
                        var e = t[0] / 100,
                            n = t[1] / 100,
                            i = t[2] / 100,
                            a = t[3] / 100;
                        return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a))]
                    }, o.xyz.rgb = function (t) {
                        var e, n, i, a = t[0] / 100,
                            r = t[1] / 100,
                            o = t[2] / 100;
                        return n = -.9689 * a + 1.8758 * r + .0415 * o, i = .0557 * a + -.204 * r + 1.057 * o, e = .0031308 < (e = 3.2406 * a + -1.5372 * r + -.4986 * o) ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, i = .0031308 < i ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
                    }, o.xyz.lab = function (t) {
                        var e = t[0],
                            n = t[1],
                            i = t[2];
                        return n /= 100, i /= 108.883, e = .008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
                    }, o.lab.xyz = function (t) {
                        var e, n, i, a = t[0];
                        e = t[1] / 500 + (n = (a + 16) / 116), i = n - t[2] / 200;
                        var r = Math.pow(n, 3),
                            o = Math.pow(e, 3),
                            s = Math.pow(i, 3);
                        return n = .008856 < r ? r : (n - 16 / 116) / 7.787, e = .008856 < o ? o : (e - 16 / 116) / 7.787, i = .008856 < s ? s : (i - 16 / 116) / 7.787, [e *= 95.047, n *= 100, i *= 108.883]
                    }, o.lab.lch = function (t) {
                        var e, n = t[0],
                            i = t[1],
                            a = t[2];
                        return (e = 360 * Math.atan2(a, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + a * a), e]
                    }, o.lch.lab = function (t) {
                        var e, n = t[0],
                            i = t[1];
                        return e = t[2] / 360 * 2 * Math.PI, [n, i * Math.cos(e), i * Math.sin(e)]
                    }, o.rgb.ansi16 = function (t) {
                        var e = t[0],
                            n = t[1],
                            i = t[2],
                            a = 1 in arguments ? arguments[1] : o.rgb.hsv(t)[2];
                        if (0 === (a = Math.round(a / 50))) return 30;
                        var r = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
                        return 2 === a && (r += 60), r
                    }, o.hsv.ansi16 = function (t) {
                        return o.rgb.ansi16(o.hsv.rgb(t), t[2])
                    }, o.rgb.ansi256 = function (t) {
                        var e = t[0],
                            n = t[1],
                            i = t[2];
                        return e === n && n === i ? e < 8 ? 16 : 248 < e ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(i / 255 * 5)
                    }, o.ansi16.rgb = function (t) {
                        var e = t % 10;
                        if (0 === e || 7 === e) return 50 < t && (e += 3.5), [e = e / 10.5 * 255, e, e];
                        var n = .5 * (1 + ~~(50 < t));
                        return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
                    }, o.ansi256.rgb = function (t) {
                        if (232 <= t) {
                            var e = 10 * (t - 232) + 8;
                            return [e, e, e]
                        }
                        var n;
                        return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
                    }, o.rgb.hex = function (t) {
                        var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
                        return "000000".substring(e.length) + e
                    }, o.hex.rgb = function (t) {
                        var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                        if (!e) return [0, 0, 0];
                        var n = e[0];
                        3 === e[0].length && (n = n.split("").map(function (t) {
                            return t + t
                        }).join(""));
                        var i = parseInt(n, 16);
                        return [i >> 16 & 255, i >> 8 & 255, 255 & i]
                    }, o.rgb.hcg = function (t) {
                        var e, n = t[0] / 255,
                            i = t[1] / 255,
                            a = t[2] / 255,
                            r = Math.max(Math.max(n, i), a),
                            o = Math.min(Math.min(n, i), a),
                            s = r - o;
                        return e = s <= 0 ? 0 : r === n ? (i - a) / s % 6 : r === i ? 2 + (a - n) / s : 4 + (n - i) / s + 4, e /= 6, [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
                    }, o.hsl.hcg = function (t) {
                        var e = t[1] / 100,
                            n = t[2] / 100,
                            i = 1,
                            a = 0;
                        return (i = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (a = (n - .5 * i) / (1 - i)), [t[0], 100 * i, 100 * a]
                    }, o.hsv.hcg = function (t) {
                        var e = t[1] / 100,
                            n = t[2] / 100,
                            i = e * n,
                            a = 0;
                        return i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a]
                    }, o.hcg.rgb = function (t) {
                        var e = t[0] / 360,
                            n = t[1] / 100,
                            i = t[2] / 100;
                        if (0 == n) return [255 * i, 255 * i, 255 * i];
                        var a, r = [0, 0, 0],
                            o = e % 1 * 6,
                            s = o % 1,
                            l = 1 - s;
                        switch (Math.floor(o)) {
                            case 0:
                                r[0] = 1, r[1] = s, r[2] = 0;
                                break;
                            case 1:
                                r[0] = l, r[1] = 1, r[2] = 0;
                                break;
                            case 2:
                                r[0] = 0, r[1] = 1, r[2] = s;
                                break;
                            case 3:
                                r[0] = 0, r[1] = l, r[2] = 1;
                                break;
                            case 4:
                                r[0] = s, r[1] = 0, r[2] = 1;
                                break;
                            default:
                                r[0] = 1, r[1] = 0, r[2] = l
                        }
                        return a = (1 - n) * i, [255 * (n * r[0] + a), 255 * (n * r[1] + a), 255 * (n * r[2] + a)]
                    }, o.hcg.hsv = function (t) {
                        var e = t[1] / 100,
                            n = e + t[2] / 100 * (1 - e),
                            i = 0;
                        return 0 < n && (i = e / n), [t[0], 100 * i, 100 * n]
                    }, o.hcg.hsl = function (t) {
                        var e = t[1] / 100,
                            n = t[2] / 100 * (1 - e) + .5 * e,
                            i = 0;
                        return 0 < n && n < .5 ? i = e / (2 * n) : .5 <= n && n < 1 && (i = e / (2 * (1 - n))), [t[0], 100 * i, 100 * n]
                    }, o.hcg.hwb = function (t) {
                        var e = t[1] / 100,
                            n = e + t[2] / 100 * (1 - e);
                        return [t[0], 100 * (n - e), 100 * (1 - n)]
                    }, o.hwb.hcg = function (t) {
                        var e = t[1] / 100,
                            n = 1 - t[2] / 100,
                            i = n - e,
                            a = 0;
                        return i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a]
                    }, o.apple.rgb = function (t) {
                        return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
                    }, o.rgb.apple = function (t) {
                        return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
                    }, o.gray.rgb = function (t) {
                        return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
                    }, o.gray.hsl = o.gray.hsv = function (t) {
                        return [0, 0, t[0]]
                    }, o.gray.hwb = function (t) {
                        return [0, 100, t[0]]
                    }, o.gray.cmyk = function (t) {
                        return [0, 0, 0, t[0]]
                    }, o.gray.lab = function (t) {
                        return [t[0], 0, 0]
                    }, o.gray.hex = function (t) {
                        var e = 255 & Math.round(t[0] / 100 * 255),
                            n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
                        return "000000".substring(n.length) + n
                    }, o.rgb.gray = function (t) {
                        return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
                    }
                }(t = {
                    exports: {}
                }), t.exports);
            u.rgb, u.hsl, u.hsv, u.hwb, u.cmyk, u.xyz, u.lab, u.lch, u.hex, u.keyword, u.ansi16, u.ansi256, u.hcg, u.apple, u.gray;

            function s(t) {
                var e = function () {
                        for (var t = {}, e = Object.keys(u), n = e.length, i = 0; i < n; i++) t[e[i]] = {
                            distance: -1,
                            parent: null
                        };
                        return t
                    }(),
                    n = [t];
                for (e[t].distance = 0; n.length;)
                    for (var i = n.pop(), a = Object.keys(u[i]), r = a.length, o = 0; o < r; o++) {
                        var s = a[o],
                            l = e[s]; - 1 === l.distance && (l.distance = e[i].distance + 1, l.parent = i, n.unshift(s))
                    }
                return e
            }

            function r(e, n) {
                return function (t) {
                    return n(e(t))
                }
            }

            function l(t, e) {
                for (var n = [e[t].parent, t], i = u[e[t].parent][t], a = e[t].parent; e[a].parent;) n.unshift(e[a].parent), i = r(u[e[a].parent][a], i), a = e[a].parent;
                return i.conversion = n, i
            }
            var a = {};

            function o(e) {
                function t(t) {
                    return null == t ? t : (1 < arguments.length && (t = Array.prototype.slice.call(arguments)), e(t))
                }
                return "conversion" in e && (t.conversion = e.conversion), t
            }

            function h(a) {
                function t(t) {
                    if (null == t) return t;
                    1 < arguments.length && (t = Array.prototype.slice.call(arguments));
                    var e = a(t);
                    if ("object" == typeof e)
                        for (var n = e.length, i = 0; i < n; i++) e[i] = Math.round(e[i]);
                    return e
                }
                return "conversion" in a && (t.conversion = a.conversion), t
            }
            Object.keys(u).forEach(function (n) {
                a[n] = {}, Object.defineProperty(a[n], "channels", {
                    value: u[n].channels
                }), Object.defineProperty(a[n], "labels", {
                    value: u[n].labels
                });
                var i = function (t) {
                    for (var e = s(t), n = {}, i = Object.keys(e), a = i.length, r = 0; r < a; r++) {
                        var o = i[r];
                        null !== e[o].parent && (n[o] = l(o, e))
                    }
                    return n
                }(n);
                Object.keys(i).forEach(function (t) {
                    var e = i[t];
                    a[n][t] = h(e), a[n][t].raw = o(e)
                })
            });
            var c = a,
                f = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                n = {
                    getRgba: g,
                    getHsla: m,
                    getRgb: function (t) {
                        var e = g(t);
                        return e && e.slice(0, 3)
                    },
                    getHsl: function (t) {
                        var e = m(t);
                        return e && e.slice(0, 3)
                    },
                    getHwb: p,
                    getAlpha: function (t) {
                        var e = g(t); {
                            if (e) return e[3];
                            if (e = m(t)) return e[3];
                            if (e = p(t)) return e[3]
                        }
                    },
                    hexString: function (t, e) {
                        e = void 0 !== e && 3 === t.length ? e : t[3];
                        return "#" + _(t[0]) + _(t[1]) + _(t[2]) + (0 <= e && e < 1 ? _(Math.round(255 * e)) : "")
                    },
                    rgbString: function (t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return v(t, e);
                        return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                    },
                    rgbaString: v,
                    percentString: function (t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return b(t, e);
                        var n = Math.round(t[0] / 255 * 100),
                            i = Math.round(t[1] / 255 * 100),
                            a = Math.round(t[2] / 255 * 100);
                        return "rgb(" + n + "%, " + i + "%, " + a + "%)"
                    },
                    percentaString: b,
                    hslString: function (t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return y(t, e);
                        return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                    },
                    hslaString: y,
                    hwbString: function (t, e) {
                        void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                        return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                    },
                    keyword: function (t) {
                        return e[t.slice(0, 3)]
                    }
                };

            function g(t) {
                if (t) {
                    var e = [0, 0, 0],
                        n = 1,
                        i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                        a = "";
                    if (i) {
                        a = (i = i[1])[3];
                        for (var r = 0; r < e.length; r++) e[r] = parseInt(i[r] + i[r], 16);
                        a && (n = Math.round(parseInt(a + a, 16) / 255 * 100) / 100)
                    } else if (i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                        a = i[2], i = i[1];
                        for (r = 0; r < e.length; r++) e[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16);
                        a && (n = Math.round(parseInt(a, 16) / 255 * 100) / 100)
                    } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (r = 0; r < e.length; r++) e[r] = parseInt(i[r + 1]);
                        n = parseFloat(i[4])
                    } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (r = 0; r < e.length; r++) e[r] = Math.round(2.55 * parseFloat(i[r + 1]));
                        n = parseFloat(i[4])
                    } else if (i = t.match(/(\w+)/)) {
                        if ("transparent" == i[1]) return [0, 0, 0, 0];
                        if (!(e = f[i[1]])) return
                    }
                    for (r = 0; r < e.length; r++) e[r] = x(e[r], 0, 255);
                    return n = n || 0 == n ? x(n, 0, 1) : 1, e[3] = n, e
                }
            }

            function m(t) {
                if (t) {
                    var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var n = parseFloat(e[4]);
                        return [x(parseInt(e[1]), 0, 360), x(parseFloat(e[2]), 0, 100), x(parseFloat(e[3]), 0, 100), x(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function p(t) {
                if (t) {
                    var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var n = parseFloat(e[4]);
                        return [x(parseInt(e[1]), 0, 360), x(parseFloat(e[2]), 0, 100), x(parseFloat(e[3]), 0, 100), x(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function v(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function b(t, e) {
                return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
            }

            function y(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function x(t, e, n) {
                return Math.min(Math.max(e, t), n)
            }

            function _(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            var e = {};
            for (var w in f) e[f[w]] = w;
            var k = function (t) {
                return t instanceof k ? t : this instanceof k ? (this.valid = !1, this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                }, void("string" == typeof t ? (e = n.getRgba(t)) ? this.setValues("rgb", e) : (e = n.getHsla(t)) ? this.setValues("hsl", e) : (e = n.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new k(t);
                var e
            };
            k.prototype = {
                isValid: function () {
                    return this.valid
                },
                rgb: function () {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function () {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function () {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function () {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function () {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function () {
                    return this.values.rgb
                },
                hslArray: function () {
                    return this.values.hsl
                },
                hsvArray: function () {
                    return this.values.hsv
                },
                hwbArray: function () {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function () {
                    return this.values.cmyk
                },
                rgbaArray: function () {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function () {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function (t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                },
                red: function (t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function (t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function (t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function (t) {
                    return t = t && ((t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                },
                saturation: function (t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function (t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function (t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function (t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function (t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function (t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function (t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function (t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function (t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function (t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function () {
                    return n.hexString(this.values.rgb)
                },
                rgbString: function () {
                    return n.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function () {
                    return n.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function () {
                    return n.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function () {
                    return n.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function () {
                    return n.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function () {
                    return n.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function () {
                    return n.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function () {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function () {
                    for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                        var i = t[n] / 255;
                        e[n] = i <= .03928 ? i / 12.92 : Math.pow((.055 + i) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function (t) {
                    var e = this.luminosity(),
                        n = t.luminosity();
                    return n < e ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
                },
                level: function (t) {
                    var e = this.contrast(t);
                    return 7.1 <= e ? "AAA" : 4.5 <= e ? "AA" : ""
                },
                dark: function () {
                    var t = this.values.rgb;
                    return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                },
                light: function () {
                    return !this.dark()
                },
                negate: function () {
                    for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                },
                lighten: function (t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                },
                darken: function (t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                },
                saturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                },
                desaturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                },
                whiten: function (t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                },
                blacken: function (t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                },
                greyscale: function () {
                    var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                },
                clearer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                },
                opaquer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                },
                rotate: function (t) {
                    var e = this.values.hsl,
                        n = (e[0] + t) % 360;
                    return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
                },
                mix: function (t, e) {
                    var n = this,
                        i = t,
                        a = void 0 === e ? .5 : e,
                        r = 2 * a - 1,
                        o = n.alpha() - i.alpha(),
                        s = (1 + (r * o == -1 ? r : (r + o) / (1 + r * o))) / 2,
                        l = 1 - s;
                    return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * a + i.alpha() * (1 - a))
                },
                toJSON: function () {
                    return this.rgb()
                },
                clone: function () {
                    var t, e, n = new k,
                        i = this.values,
                        a = n.values;
                    for (var r in i) i.hasOwnProperty(r) && (t = i[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
                    return n
                }
            }, k.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, k.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, k.prototype.getValues = function (t) {
                for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
                return 1 !== e.alpha && (n.a = e.alpha), n
            }, k.prototype.setValues = function (t, e) {
                var n, i, a = this.values,
                    r = this.spaces,
                    o = this.maxes,
                    s = 1;
                if (this.valid = !0, "alpha" === t) s = e;
                else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (n = 0; n < t.length; n++) a[t][n] = e[t.charAt(n)];
                    s = e.a
                } else if (void 0 !== e[r[t][0]]) {
                    var l = r[t];
                    for (n = 0; n < t.length; n++) a[t][n] = e[l[n]];
                    s = e.alpha
                }
                if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;
                for (n = 0; n < t.length; n++) i = Math.max(0, Math.min(o[t][n], a[t][n])), a[t][n] = Math.round(i);
                for (var u in r) u !== t && (a[u] = c[t][u](a[t]));
                return !0
            }, k.prototype.setSpace = function (t, e) {
                var n = e[0];
                return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
            }, k.prototype.setChannel = function (t, e, n) {
                var i = this.values[t];
                return void 0 === n ? i[e] : (n === i[e] || (i[e] = n, this.setValues(t, i)), this)
            }, "undefined" != typeof window && (window.Color = k);
            var M, S = k,
                D = {
                    noop: function () {},
                    uid: (M = 0, function () {
                        return M++
                    }),
                    isNullOrUndef: function (t) {
                        return null == t
                    },
                    isArray: function (t) {
                        if (Array.isArray && Array.isArray(t)) return !0;
                        var e = Object.prototype.toString.call(t);
                        return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
                    },
                    isObject: function (t) {
                        return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                    },
                    isFinite: function (t) {
                        return ("number" == typeof t || t instanceof Number) && isFinite(t)
                    },
                    valueOrDefault: function (t, e) {
                        return void 0 === t ? e : t
                    },
                    valueAtIndexOrDefault: function (t, e, n) {
                        return D.valueOrDefault(D.isArray(t) ? t[e] : t, n)
                    },
                    callback: function (t, e, n) {
                        if (t && "function" == typeof t.call) return t.apply(n, e)
                    },
                    each: function (t, e, n, i) {
                        var a, r, o;
                        if (D.isArray(t))
                            if (r = t.length, i)
                                for (a = r - 1; 0 <= a; a--) e.call(n, t[a], a);
                            else
                                for (a = 0; a < r; a++) e.call(n, t[a], a);
                        else if (D.isObject(t))
                            for (r = (o = Object.keys(t)).length, a = 0; a < r; a++) e.call(n, t[o[a]], o[a])
                    },
                    arrayEquals: function (t, e) {
                        var n, i, a, r;
                        if (!t || !e || t.length !== e.length) return !1;
                        for (n = 0, i = t.length; n < i; ++n)
                            if (a = t[n], r = e[n], a instanceof Array && r instanceof Array) {
                                if (!D.arrayEquals(a, r)) return !1
                            } else if (a !== r) return !1;
                        return !0
                    },
                    clone: function (t) {
                        if (D.isArray(t)) return t.map(D.clone);
                        if (D.isObject(t)) {
                            for (var e = {}, n = Object.keys(t), i = n.length, a = 0; a < i; ++a) e[n[a]] = D.clone(t[n[a]]);
                            return e
                        }
                        return t
                    },
                    _merger: function (t, e, n, i) {
                        var a = e[t],
                            r = n[t];
                        D.isObject(a) && D.isObject(r) ? D.merge(a, r, i) : e[t] = D.clone(r)
                    },
                    _mergerIf: function (t, e, n) {
                        var i = e[t],
                            a = n[t];
                        D.isObject(i) && D.isObject(a) ? D.mergeIf(i, a) : e.hasOwnProperty(t) || (e[t] = D.clone(a))
                    },
                    merge: function (t, e, n) {
                        var i, a, r, o, s, l = D.isArray(e) ? e : [e],
                            u = l.length;
                        if (!D.isObject(t)) return t;
                        for (i = (n = n || {}).merger || D._merger, a = 0; a < u; ++a)
                            if (e = l[a], D.isObject(e))
                                for (s = 0, o = (r = Object.keys(e)).length; s < o; ++s) i(r[s], t, e, n);
                        return t
                    },
                    mergeIf: function (t, e) {
                        return D.merge(t, e, {
                            merger: D._mergerIf
                        })
                    },
                    extend: Object.assign || function (t) {
                        return D.merge(t, [].slice.call(arguments, 1), {
                            merger: function (t, e, n) {
                                e[t] = n[t]
                            }
                        })
                    },
                    inherits: function (t) {
                        function e() {
                            this.constructor = i
                        }
                        var n = this,
                            i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                                return n.apply(this, arguments)
                            };
                        return e.prototype = n.prototype, i.prototype = new e, i.extend = D.inherits, t && D.extend(i.prototype, t), i.__super__ = n.prototype, i
                    },
                    _deprecated: function (t, e, n, i) {
                        void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + i + '" instead')
                    }
                },
                C = D;
            D.callCallback = D.callback, D.indexOf = function (t, e, n) {
                return Array.prototype.indexOf.call(t, e, n)
            }, D.getValueOrDefault = D.valueOrDefault, D.getValueAtIndexOrDefault = D.valueAtIndexOrDefault;
            var P = {
                    linear: function (t) {
                        return t
                    },
                    easeInQuad: function (t) {
                        return t * t
                    },
                    easeOutQuad: function (t) {
                        return -t * (t - 2)
                    },
                    easeInOutQuad: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function (t) {
                        return t * t * t
                    },
                    easeOutCubic: function (t) {
                        return --t * t * t + 1
                    },
                    easeInOutCubic: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function (t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function (t) {
                        return -(--t * t * t * t - 1)
                    },
                    easeInOutQuart: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function (t) {
                        return t * t * t * t * t
                    },
                    easeOutQuint: function (t) {
                        return --t * t * t * t * t + 1
                    },
                    easeInOutQuint: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function (t) {
                        return 1 - Math.cos(t * (Math.PI / 2))
                    },
                    easeOutSine: function (t) {
                        return Math.sin(t * (Math.PI / 2))
                    },
                    easeInOutSine: function (t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    },
                    easeInExpo: function (t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function (t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    easeInOutExpo: function (t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                    },
                    easeInCirc: function (t) {
                        return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)
                    },
                    easeOutCirc: function (t) {
                        return Math.sqrt(1 - --t * t)
                    },
                    easeInOutCirc: function (t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function (t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (n = n || .3, e = i < 1 ? (i = 1, n / 4) : n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * --t) * Math.sin((t - e) * (2 * Math.PI) / n)))
                    },
                    easeOutElastic: function (t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (n = n || .3, e = i < 1 ? (i = 1, n / 4) : n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                    },
                    easeInOutElastic: function (t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n = n || .45, e = i < 1 ? (i = 1, n / 4) : n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * --t) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * --t) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                    },
                    easeInBack: function (t) {
                        return t * t * (2.70158 * t - 1.70158)
                    },
                    easeOutBack: function (t) {
                        return --t * t * (2.70158 * t + 1.70158) + 1
                    },
                    easeInOutBack: function (t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    easeInBounce: function (t) {
                        return 1 - P.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function (t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    easeInOutBounce: function (t) {
                        return t < .5 ? .5 * P.easeInBounce(2 * t) : .5 * P.easeOutBounce(2 * t - 1) + .5
                    }
                },
                T = {
                    effects: P
                };
            C.easingEffects = P;
            var O = Math.PI,
                A = O / 180,
                F = 2 * O,
                I = O / 2,
                L = O / 4,
                R = 2 * O / 3,
                W = {
                    clear: function (t) {
                        t.ctx.clearRect(0, 0, t.width, t.height)
                    },
                    roundedRect: function (t, e, n, i, a, r) {
                        if (r) {
                            var o = Math.min(r, a / 2, i / 2),
                                s = e + o,
                                l = n + o,
                                u = e + i - o,
                                d = n + a - o;
                            t.moveTo(e, l), s < u && l < d ? (t.arc(s, l, o, -O, -I), t.arc(u, l, o, -I, 0), t.arc(u, d, o, 0, I), t.arc(s, d, o, I, O)) : s < u ? (t.moveTo(s, n), t.arc(u, l, o, -I, I), t.arc(s, l, o, I, O + I)) : l < d ? (t.arc(s, l, o, -O, 0), t.arc(s, d, o, 0, O)) : t.arc(s, l, o, -O, O), t.closePath(), t.moveTo(e, n)
                        } else t.rect(e, n, i, a)
                    },
                    drawPoint: function (t, e, n, i, a, r) {
                        var o, s, l, u, d, h = (r || 0) * A;
                        if (e && "object" == typeof e && ("[object HTMLImageElement]" === (o = e.toString()) || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, a), t.rotate(h), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();
                        if (!(isNaN(n) || n <= 0)) {
                            switch (t.beginPath(), e) {
                                default:
                                    t.arc(i, a, n, 0, F), t.closePath();
                                    break;
                                case "triangle":
                                    t.moveTo(i + Math.sin(h) * n, a - Math.cos(h) * n), h += R, t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n), h += R, t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n), t.closePath();
                                    break;
                                case "rectRounded":
                                    u = n - (d = .516 * n), s = Math.cos(h + L) * u, l = Math.sin(h + L) * u, t.arc(i - s, a - l, d, h - O, h - I), t.arc(i + l, a - s, d, h - I, h), t.arc(i + s, a + l, d, h, h + I), t.arc(i - l, a + s, d, h + I, h + O), t.closePath();
                                    break;
                                case "rect":
                                    if (!r) {
                                        u = Math.SQRT1_2 * n, t.rect(i - u, a - u, 2 * u, 2 * u);
                                        break
                                    }
                                    h += L;
                                case "rectRot":
                                    s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + l, a - s), t.lineTo(i + s, a + l), t.lineTo(i - l, a + s), t.closePath();
                                    break;
                                case "crossRot":
                                    h += L;
                                case "cross":
                                    s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s);
                                    break;
                                case "star":
                                    s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s), h += L, s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s);
                                    break;
                                case "line":
                                    s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l);
                                    break;
                                case "dash":
                                    t.moveTo(i, a), t.lineTo(i + Math.cos(h) * n, a + Math.sin(h) * n)
                            }
                            t.fill(), t.stroke()
                        }
                    },
                    _isPointInArea: function (t, e) {
                        return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6
                    },
                    clipArea: function (t, e) {
                        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                    },
                    unclipArea: function (t) {
                        t.restore()
                    },
                    lineTo: function (t, e, n, i) {
                        var a = n.steppedLine;
                        if (a) {
                            if ("middle" === a) {
                                var r = (e.x + n.x) / 2;
                                t.lineTo(r, i ? n.y : e.y), t.lineTo(r, i ? e.y : n.y)
                            } else "after" === a && !i || "after" !== a && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                            t.lineTo(n.x, n.y)
                        } else n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
                    }
                },
                N = W;
            C.clear = W.clear, C.drawRoundedRectangle = function (t) {
                t.beginPath(), W.roundedRect.apply(W, arguments)
            };
            var Y = {
                _set: function (t, e) {
                    return C.merge(this[t] || (this[t] = {}), e)
                }
            };
            Y._set("global", {
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                defaultLineHeight: 1.2,
                showLines: !0
            });
            var z = Y,
                E = C.valueOrDefault;
            var V = {
                    toLineHeight: function (t, e) {
                        var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                        if (!n || "normal" === n[1]) return 1.2 * e;
                        switch (t = +n[2], n[3]) {
                            case "px":
                                return t;
                            case "%":
                                t /= 100
                        }
                        return e * t
                    },
                    toPadding: function (t) {
                        var e, n, i, a;
                        return C.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, a = +t.left || 0) : e = n = i = a = +t || 0, {
                            top: e,
                            right: n,
                            bottom: i,
                            left: a,
                            height: e + i,
                            width: a + n
                        }
                    },
                    _parseFont: function (t) {
                        var e, n = z.global,
                            i = E(t.fontSize, n.defaultFontSize),
                            a = {
                                family: E(t.fontFamily, n.defaultFontFamily),
                                lineHeight: C.options.toLineHeight(E(t.lineHeight, n.defaultLineHeight), i),
                                size: i,
                                style: E(t.fontStyle, n.defaultFontStyle),
                                weight: null,
                                string: ""
                            };
                        return a.string = !(e = a) || C.isNullOrUndef(e.size) || C.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family, a
                    },
                    resolve: function (t, e, n, i) {
                        var a, r, o, s = !0;
                        for (a = 0, r = t.length; a < r; ++a)
                            if (void 0 !== (o = t[a]) && (void 0 !== e && "function" == typeof o && (o = o(e), s = !1), void 0 !== n && C.isArray(o) && (o = o[n], s = !1), void 0 !== o)) return i && !s && (i.cacheable = !1), o
                    }
                },
                B = {
                    _factorize: function (t) {
                        var e, n = [],
                            i = Math.sqrt(t);
                        for (e = 1; e < i; e++) t % e == 0 && (n.push(e), n.push(t / e));
                        return i === (0 | i) && n.push(i), n.sort(function (t, e) {
                            return t - e
                        }).pop(), n
                    },
                    log10: Math.log10 || function (t) {
                        var e = Math.log(t) * Math.LOG10E,
                            n = Math.round(e);
                        return t === Math.pow(10, n) ? n : e
                    }
                },
                H = B;
            C.log10 = B.log10;
            var j = C,
                U = T,
                G = N,
                q = V,
                Z = H,
                $ = {
                    getRtlAdapter: function (t, e, n) {
                        return t ? (i = e, a = n, {
                            x: function (t) {
                                return i + i + a - t
                            },
                            setWidth: function (t) {
                                a = t
                            },
                            textAlign: function (t) {
                                return "center" === t ? t : "right" === t ? "left" : "right"
                            },
                            xPlus: function (t, e) {
                                return t - e
                            },
                            leftForLtr: function (t, e) {
                                return t - e
                            }
                        }) : {
                            x: function (t) {
                                return t
                            },
                            setWidth: function (t) {},
                            textAlign: function (t) {
                                return t
                            },
                            xPlus: function (t, e) {
                                return t + e
                            },
                            leftForLtr: function (t, e) {
                                return t
                            }
                        };
                        var i, a
                    },
                    overrideTextDirection: function (t, e) {
                        var n, i;
                        "ltr" !== e && "rtl" !== e || (i = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = i)
                    },
                    restoreTextDirection: function (t) {
                        var e = t.prevTextDirection;
                        void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
                    }
                };
            j.easing = U, j.canvas = G, j.options = q, j.math = Z, j.rtl = $;

            function X(t) {
                j.extend(this, t), this.initialize.apply(this, arguments)
            }
            j.extend(X.prototype, {
                _type: void 0,
                initialize: function () {
                    this.hidden = !1
                },
                pivot: function () {
                    var t = this;
                    return t._view || (t._view = j.extend({}, t._model)), t._start = {}, t
                },
                transition: function (t) {
                    var e = this,
                        n = e._model,
                        i = e._start,
                        a = e._view;
                    return n && 1 !== t ? (a = a || (e._view = {}), function (t, e, n, i) {
                        var a, r, o, s, l, u, d, h, c, f = Object.keys(n);
                        for (a = 0, r = f.length; a < r; ++a)
                            if (u = n[o = f[a]], e.hasOwnProperty(o) || (e[o] = u), (s = e[o]) !== u && "_" !== o[0]) {
                                if (t.hasOwnProperty(o) || (t[o] = s), (d = typeof u) == typeof (l = t[o]))
                                    if ("string" == d) {
                                        if ((h = S(l)).valid && (c = S(u)).valid) {
                                            e[o] = c.mix(h, i).rgbString();
                                            continue
                                        }
                                    } else if (j.isFinite(l) && j.isFinite(u)) {
                                    e[o] = l + (u - l) * i;
                                    continue
                                }
                                e[o] = u
                            }
                    }(i = i || (e._start = {}), a, n, t)) : (e._view = j.extend({}, n), e._start = null), e
                },
                tooltipPosition: function () {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function () {
                    return j.isNumber(this._model.x) && j.isNumber(this._model.y)
                }
            }), X.extend = j.inherits;
            var K = X,
                J = K.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }),
                Q = J;
            Object.defineProperty(J.prototype, "animationObject", {
                get: function () {
                    return this
                }
            }), Object.defineProperty(J.prototype, "chartInstance", {
                get: function () {
                    return this.chart
                },
                set: function (t) {
                    this.chart = t
                }
            }), z._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: j.noop,
                    onComplete: j.noop
                }
            });
            var tt = {
                    animations: [],
                    request: null,
                    addAnimation: function (t, e, n, i) {
                        var a, r, o = this.animations;
                        for (e.chart = t, e.startTime = Date.now(), e.duration = n, i || (t.animating = !0), a = 0, r = o.length; a < r; ++a)
                            if (o[a].chart === t) return void(o[a] = e);
                        o.push(e), 1 === o.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function (e) {
                        var t = j.findIndex(this.animations, function (t) {
                            return t.chart === e
                        }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
                    },
                    requestAnimationFrame: function () {
                        var t = this;
                        null === t.request && (t.request = j.requestAnimFrame.call(window, function () {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function () {
                        this.advance(), 0 < this.animations.length && this.requestAnimationFrame()
                    },
                    advance: function () {
                        for (var t, e, n, i, a = this.animations, r = 0; r < a.length;) e = (t = a[r]).chart, n = t.numSteps, i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(i, n), j.callback(t.render, [e, t], e), j.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (j.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(r, 1)) : ++r
                    }
                },
                et = j.options.resolve,
                nt = ["push", "pop", "shift", "splice", "unshift"];

            function it(e, t) {
                var n = e._chartjs;
                if (n) {
                    var i = n.listeners,
                        a = i.indexOf(t); - 1 !== a && i.splice(a, 1), 0 < i.length || (nt.forEach(function (t) {
                        delete e[t]
                    }), delete e._chartjs)
                }
            }

            function at(t, e) {
                this.initialize(t, e)
            }
            j.extend(at.prototype, {
                datasetElementType: null,
                dataElementType: null,
                _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
                initialize: function (t, e) {
                    var n = this;
                    n.chart = t, n.index = e, n.linkScales(), n.addElements(), n._type = n.getMeta().type
                },
                updateIndex: function (t) {
                    this.index = t
                },
                linkScales: function () {
                    var t = this.getMeta(),
                        e = this.chart,
                        n = e.scales,
                        i = this.getDataset(),
                        a = e.options.scales;
                    null !== t.xAxisID && t.xAxisID in n && !i.xAxisID || (t.xAxisID = i.xAxisID || a.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !i.yAxisID || (t.yAxisID = i.yAxisID || a.yAxes[0].id)
                },
                getDataset: function () {
                    return this.chart.data.datasets[this.index]
                },
                getMeta: function () {
                    return this.chart.getDatasetMeta(this.index)
                },
                getScaleForId: function (t) {
                    return this.chart.scales[t]
                },
                _getValueScaleId: function () {
                    return this.getMeta().yAxisID
                },
                _getIndexScaleId: function () {
                    return this.getMeta().xAxisID
                },
                _getValueScale: function () {
                    return this.getScaleForId(this._getValueScaleId())
                },
                _getIndexScale: function () {
                    return this.getScaleForId(this._getIndexScaleId())
                },
                reset: function () {
                    this._update(!0)
                },
                destroy: function () {
                    this._data && it(this._data, this)
                },
                createMetaDataset: function () {
                    var t = this.datasetElementType;
                    return t && new t({
                        _chart: this.chart,
                        _datasetIndex: this.index
                    })
                },
                createMetaData: function (t) {
                    var e = this.dataElementType;
                    return e && new e({
                        _chart: this.chart,
                        _datasetIndex: this.index,
                        _index: t
                    })
                },
                addElements: function () {
                    var t, e, n = this.getMeta(),
                        i = this.getDataset().data || [],
                        a = n.data;
                    for (t = 0, e = i.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
                    n.dataset = n.dataset || this.createMetaDataset()
                },
                addElementAndReset: function (t) {
                    var e = this.createMetaData(t);
                    this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                },
                buildOrUpdateElements: function () {
                    var a, t, e = this,
                        n = e.getDataset(),
                        i = n.data || (n.data = []);
                    e._data !== i && (e._data && it(e._data, e), i && Object.isExtensible(i) && (t = e, (a = i)._chartjs ? a._chartjs.listeners.push(t) : (Object.defineProperty(a, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {
                            listeners: [t]
                        }
                    }), nt.forEach(function (t) {
                        var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                            i = a[t];
                        Object.defineProperty(a, t, {
                            configurable: !0,
                            enumerable: !1,
                            value: function () {
                                var e = Array.prototype.slice.call(arguments),
                                    t = i.apply(this, e);
                                return j.each(a._chartjs.listeners, function (t) {
                                    "function" == typeof t[n] && t[n].apply(t, e)
                                }), t
                            }
                        })
                    }))), e._data = i), e.resyncElements()
                },
                _configure: function () {
                    this._config = j.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], {
                        merger: function (t, e, n) {
                            "_meta" !== t && "data" !== t && j._merger(t, e, n)
                        }
                    })
                },
                _update: function (t) {
                    this._configure(), this._cachedDataOpts = null, this.update(t)
                },
                update: j.noop,
                transition: function (t) {
                    for (var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i; ++a) n[a].transition(t);
                    e.dataset && e.dataset.transition(t)
                },
                draw: function () {
                    var t = this.getMeta(),
                        e = t.data || [],
                        n = e.length,
                        i = 0;
                    for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw()
                },
                getStyle: function (t) {
                    var e, n = this.getMeta(),
                        i = n.dataset;
                    return this._configure(), !1 !== (e = i && void 0 === t ? this._resolveDatasetElementOptions(i || {}) : (t = t || 0, this._resolveDataElementOptions(n.data[t] || {}, t))).fill && null !== e.fill || (e.backgroundColor = e.borderColor), e
                },
                _resolveDatasetElementOptions: function (t, e) {
                    var n, i, a, r, o = this,
                        s = o.chart,
                        l = o._config,
                        u = t.custom || {},
                        d = s.options.elements[o.datasetElementType.prototype._type] || {},
                        h = o._datasetElementOptions,
                        c = {},
                        f = {
                            chart: s,
                            dataset: o.getDataset(),
                            datasetIndex: o.index,
                            hover: e
                        };
                    for (n = 0, i = h.length; n < i; ++n) a = h[n], r = e ? "hover" + a.charAt(0).toUpperCase() + a.slice(1) : a, c[a] = et([u[r], l[r], d[r]], f);
                    return c
                },
                _resolveDataElementOptions: function (t, e) {
                    var n = this,
                        i = t && t.custom,
                        a = n._cachedDataOpts;
                    if (a && !i) return a;
                    var r, o, s, l, u = n.chart,
                        d = n._config,
                        h = u.options.elements[n.dataElementType.prototype._type] || {},
                        c = n._dataElementOptions,
                        f = {},
                        g = {
                            chart: u,
                            dataIndex: e,
                            dataset: n.getDataset(),
                            datasetIndex: n.index
                        },
                        m = {
                            cacheable: !i
                        };
                    if (i = i || {}, j.isArray(c))
                        for (o = 0, s = c.length; o < s; ++o) f[l = c[o]] = et([i[l], d[l], h[l]], g, e, m);
                    else
                        for (o = 0, s = (r = Object.keys(c)).length; o < s; ++o) f[l = r[o]] = et([i[l], d[c[l]], d[l], h[l]], g, e, m);
                    return m.cacheable && (n._cachedDataOpts = Object.freeze(f)), f
                },
                removeHoverStyle: function (t) {
                    j.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
                },
                setHoverStyle: function (t) {
                    var e = this.chart.data.datasets[t._datasetIndex],
                        n = t._index,
                        i = t.custom || {},
                        a = t._model,
                        r = j.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: a.backgroundColor,
                        borderColor: a.borderColor,
                        borderWidth: a.borderWidth
                    }, a.backgroundColor = et([i.hoverBackgroundColor, e.hoverBackgroundColor, r(a.backgroundColor)], void 0, n), a.borderColor = et([i.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)], void 0, n), a.borderWidth = et([i.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, n)
                },
                _removeDatasetHoverStyle: function () {
                    var t = this.getMeta().dataset;
                    t && this.removeHoverStyle(t)
                },
                _setDatasetHoverStyle: function () {
                    var t, e, n, i, a, r, o = this.getMeta().dataset,
                        s = {};
                    if (o) {
                        for (r = o._model, a = this._resolveDatasetElementOptions(o, !0), t = 0, e = (i = Object.keys(a)).length; t < e; ++t) s[n = i[t]] = r[n], r[n] = a[n];
                        o.$previousStyle = s
                    }
                },
                resyncElements: function () {
                    var t = this.getMeta(),
                        e = this.getDataset().data,
                        n = t.data.length,
                        i = e.length;
                    i < n ? t.data.splice(i, n - i) : n < i && this.insertElements(n, i - n)
                },
                insertElements: function (t, e) {
                    for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
                },
                onDataPush: function () {
                    var t = arguments.length;
                    this.insertElements(this.getDataset().data.length - t, t)
                },
                onDataPop: function () {
                    this.getMeta().data.pop()
                },
                onDataShift: function () {
                    this.getMeta().data.shift()
                },
                onDataSplice: function (t, e) {
                    this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                },
                onDataUnshift: function () {
                    this.insertElements(0, arguments.length)
                }
            }), at.extend = j.inherits;
            var rt = at,
                ot = 2 * Math.PI;

            function st(t, e) {
                var n = e.startAngle,
                    i = e.endAngle,
                    a = e.pixelMargin,
                    r = a / e.outerRadius,
                    o = e.x,
                    s = e.y;
                t.beginPath(), t.arc(o, s, e.outerRadius, n - r, i + r), e.innerRadius > a ? (r = a / e.innerRadius, t.arc(o, s, e.innerRadius - a, i + r, n - r, !0)) : t.arc(o, s, a, i + Math.PI / 2, n - Math.PI / 2), t.closePath(), t.clip()
            }

            function lt(t, e, n) {
                var i = "inner" === e.borderAlign;
                i ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), n.fullCircles && function (t, e, n, i) {
                    var a, r = n.endAngle;
                    for (i && (n.endAngle = n.startAngle + ot, st(t, n), n.endAngle = r, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += ot, n.fullCircles--)), t.beginPath(), t.arc(n.x, n.y, n.innerRadius, n.startAngle + ot, n.startAngle, !0), a = 0; a < n.fullCircles; ++a) t.stroke();
                    for (t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + ot), a = 0; a < n.fullCircles; ++a) t.stroke()
                }(t, e, n, i), i && st(t, n), t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle), t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), t.closePath(), t.stroke()
            }
            z._set("global", {
                elements: {
                    arc: {
                        backgroundColor: z.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2,
                        borderAlign: "center"
                    }
                }
            });
            var ut = K.extend({
                    _type: "arc",
                    inLabelRange: function (t) {
                        var e = this._view;
                        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                    },
                    inRange: function (t, e) {
                        var n = this._view;
                        if (n) {
                            for (var i = j.getAngleFromPoint(n, {
                                    x: t,
                                    y: e
                                }), a = i.angle, r = i.distance, o = n.startAngle, s = n.endAngle; s < o;) s += ot;
                            for (; s < a;) a -= ot;
                            for (; a < o;) a += ot;
                            var l = o <= a && a <= s,
                                u = r >= n.innerRadius && r <= n.outerRadius;
                            return l && u
                        }
                        return !1
                    },
                    getCenterPoint: function () {
                        var t = this._view,
                            e = (t.startAngle + t.endAngle) / 2,
                            n = (t.innerRadius + t.outerRadius) / 2;
                        return {
                            x: t.x + Math.cos(e) * n,
                            y: t.y + Math.sin(e) * n
                        }
                    },
                    getArea: function () {
                        var t = this._view;
                        return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                    },
                    tooltipPosition: function () {
                        var t = this._view,
                            e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                            n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                        return {
                            x: t.x + Math.cos(e) * n,
                            y: t.y + Math.sin(e) * n
                        }
                    },
                    draw: function () {
                        var t, e = this._chart.ctx,
                            n = this._view,
                            i = "inner" === n.borderAlign ? .33 : 0,
                            a = {
                                x: n.x,
                                y: n.y,
                                innerRadius: n.innerRadius,
                                outerRadius: Math.max(n.outerRadius - i, 0),
                                pixelMargin: i,
                                startAngle: n.startAngle,
                                endAngle: n.endAngle,
                                fullCircles: Math.floor(n.circumference / ot)
                            };
                        if (e.save(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, a.fullCircles) {
                            for (a.endAngle = a.startAngle + ot, e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), t = 0; t < a.fullCircles; ++t) e.fill();
                            a.endAngle = a.startAngle + n.circumference % ot
                        }
                        e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), e.fill(), n.borderWidth && lt(e, n, a), e.restore()
                    }
                }),
                dt = j.valueOrDefault,
                ht = z.global.defaultColor;
            z._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: ht,
                        borderWidth: 3,
                        borderColor: ht,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            });
            var ct = K.extend({
                    _type: "line",
                    draw: function () {
                        var t, e, n, i = this,
                            a = i._view,
                            r = i._chart.ctx,
                            o = a.spanGaps,
                            s = i._children.slice(),
                            l = z.global,
                            u = l.elements.line,
                            d = -1,
                            h = i._loop;
                        if (s.length) {
                            if (i._loop) {
                                for (t = 0; t < s.length; ++t)
                                    if (e = j.previousItem(s, t), !s[t]._view.skip && e._view.skip) {
                                        s = s.slice(t).concat(s.slice(0, t)), h = o;
                                        break
                                    } h && s.push(s[0])
                            }
                            for (r.save(), r.lineCap = a.borderCapStyle || u.borderCapStyle, r.setLineDash && r.setLineDash(a.borderDash || u.borderDash), r.lineDashOffset = dt(a.borderDashOffset, u.borderDashOffset), r.lineJoin = a.borderJoinStyle || u.borderJoinStyle, r.lineWidth = dt(a.borderWidth, u.borderWidth), r.strokeStyle = a.borderColor || l.defaultColor, r.beginPath(), (n = s[0]._view).skip || (r.moveTo(n.x, n.y), d = 0), t = 1; t < s.length; ++t) n = s[t]._view, e = -1 === d ? j.previousItem(s, t) : s[d], n.skip || (d !== t - 1 && !o || -1 === d ? r.moveTo(n.x, n.y) : j.canvas.lineTo(r, e._view, n), d = t);
                            h && r.closePath(), r.stroke(), r.restore()
                        }
                    }
                }),
                ft = j.valueOrDefault,
                gt = z.global.defaultColor;

            function mt(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
            }
            z._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: gt,
                        borderColor: gt,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            });
            var pt = K.extend({
                    _type: "point",
                    inRange: function (t, e) {
                        var n = this._view;
                        return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                    },
                    inLabelRange: mt,
                    inXRange: mt,
                    inYRange: function (t) {
                        var e = this._view;
                        return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                    },
                    getCenterPoint: function () {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    },
                    getArea: function () {
                        return Math.PI * Math.pow(this._view.radius, 2)
                    },
                    tooltipPosition: function () {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y,
                            padding: t.radius + t.borderWidth
                        }
                    },
                    draw: function (t) {
                        var e = this._view,
                            n = this._chart.ctx,
                            i = e.pointStyle,
                            a = e.rotation,
                            r = e.radius,
                            o = e.x,
                            s = e.y,
                            l = z.global,
                            u = l.defaultColor;
                        e.skip || void 0 !== t && !j.canvas._isPointInArea(e, t) || (n.strokeStyle = e.borderColor || u, n.lineWidth = ft(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || u, j.canvas.drawPoint(n, i, r, o, s, a))
                    }
                }),
                vt = z.global.defaultColor;

            function bt(t) {
                return t && void 0 !== t.width
            }

            function yt(t) {
                var e, n, i, a, r;
                return a = bt(t) ? (r = t.width / 2, e = t.x - r, n = t.x + r, i = Math.min(t.y, t.base), Math.max(t.y, t.base)) : (r = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), i = t.y - r, t.y + r), {
                    left: e,
                    top: i,
                    right: n,
                    bottom: a
                }
            }

            function xt(t, e, n) {
                return t === e ? n : t === n ? e : t
            }

            function _t(t, e, n) {
                var i, a, r, o, s, l, u, d = t.borderWidth,
                    h = (a = (i = t).borderSkipped, r = {}, a && (i.horizontal ? i.base > i.x && (a = xt(a, "left", "right")) : i.base < i.y && (a = xt(a, "bottom", "top")), r[a] = !0), r);
                return j.isObject(d) ? (o = +d.top || 0, s = +d.right || 0, l = +d.bottom || 0, u = +d.left || 0) : o = s = l = u = +d || 0, {
                    t: h.top || o < 0 ? 0 : n < o ? n : o,
                    r: h.right || s < 0 ? 0 : e < s ? e : s,
                    b: h.bottom || l < 0 ? 0 : n < l ? n : l,
                    l: h.left || u < 0 ? 0 : e < u ? e : u
                }
            }

            function wt(t, e, n) {
                var i = null === e,
                    a = null === n,
                    r = !(!t || i && a) && yt(t);
                return r && (i || e >= r.left && e <= r.right) && (a || n >= r.top && n <= r.bottom)
            }
            z._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: vt,
                        borderColor: vt,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            });
            var kt = K.extend({
                    _type: "rectangle",
                    draw: function () {
                        var t, e, n, i, a, r = this._chart.ctx,
                            o = this._view,
                            s = (e = yt(t = o), n = e.right - e.left, i = e.bottom - e.top, a = _t(t, n / 2, i / 2), {
                                outer: {
                                    x: e.left,
                                    y: e.top,
                                    w: n,
                                    h: i
                                },
                                inner: {
                                    x: e.left + a.l,
                                    y: e.top + a.t,
                                    w: n - a.l - a.r,
                                    h: i - a.t - a.b
                                }
                            }),
                            l = s.outer,
                            u = s.inner;
                        r.fillStyle = o.backgroundColor, r.fillRect(l.x, l.y, l.w, l.h), l.w === u.w && l.h === u.h || (r.save(), r.beginPath(), r.rect(l.x, l.y, l.w, l.h), r.clip(), r.fillStyle = o.borderColor, r.rect(u.x, u.y, u.w, u.h), r.fill("evenodd"), r.restore())
                    },
                    height: function () {
                        var t = this._view;
                        return t.base - t.y
                    },
                    inRange: function (t, e) {
                        return wt(this._view, t, e)
                    },
                    inLabelRange: function (t, e) {
                        var n = this._view;
                        return bt(n) ? wt(n, t, null) : wt(n, null, e)
                    },
                    inXRange: function (t) {
                        return wt(this._view, t, null)
                    },
                    inYRange: function (t) {
                        return wt(this._view, null, t)
                    },
                    getCenterPoint: function () {
                        var t, e, n = this._view;
                        return e = bt(n) ? (t = n.x, (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, n.y), {
                            x: t,
                            y: e
                        }
                    },
                    getArea: function () {
                        var t = this._view;
                        return bt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
                    },
                    tooltipPosition: function () {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    }
                }),
                Mt = {},
                St = ut,
                Dt = ct,
                Ct = pt,
                Pt = kt;
            Mt.Arc = St, Mt.Line = Dt, Mt.Point = Ct, Mt.Rectangle = Pt;
            var Tt = j._deprecated,
                Ot = j.valueOrDefault;

            function At(t, e, n) {
                var i, a, r = n.barThickness,
                    o = e.stackCount,
                    s = e.pixels[t],
                    l = j.isNullOrUndef(r) ? function (t, e) {
                        var n, i, a, r, o = t._length;
                        for (a = 1, r = e.length; a < r; ++a) o = Math.min(o, Math.abs(e[a] - e[a - 1]));
                        for (a = 0, r = t.getTicks().length; a < r; ++a) i = t.getPixelForTick(a), o = 0 < a ? Math.min(o, Math.abs(i - n)) : o, n = i;
                        return o
                    }(e.scale, e.pixels) : -1;
                return a = j.isNullOrUndef(r) ? (i = l * n.categoryPercentage, n.barPercentage) : (i = r * o, 1), {
                    chunk: i / o,
                    ratio: a,
                    start: s - i / 2
                }
            }
            z._set("bar", {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }), z._set("global", {
                datasets: {
                    bar: {
                        categoryPercentage: .8,
                        barPercentage: .9
                    }
                }
            });
            var Ft = rt.extend({
                    dataElementType: Mt.Rectangle,
                    _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
                    initialize: function () {
                        var t, e, n = this;
                        rt.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0, e = n._getIndexScale().options, Tt("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Tt("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Tt("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Tt("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Tt("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
                    },
                    update: function (t) {
                        var e, n, i = this.getMeta().data;
                        for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) this.updateElement(i[e], e, t)
                    },
                    updateElement: function (t, e, n) {
                        var i = this,
                            a = i.getMeta(),
                            r = i.getDataset(),
                            o = i._resolveDataElementOptions(t, e);
                        t._xScale = i.getScaleForId(a.xAxisID), t._yScale = i.getScaleForId(a.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
                            backgroundColor: o.backgroundColor,
                            borderColor: o.borderColor,
                            borderSkipped: o.borderSkipped,
                            borderWidth: o.borderWidth,
                            datasetLabel: r.label,
                            label: i.chart.data.labels[e]
                        }, j.isArray(r.data[e]) && (t._model.borderSkipped = null), i._updateElementGeometry(t, e, n, o), t.pivot()
                    },
                    _updateElementGeometry: function (t, e, n, i) {
                        var a = this,
                            r = t._model,
                            o = a._getValueScale(),
                            s = o.getBasePixel(),
                            l = o.isHorizontal(),
                            u = a._ruler || a.getRuler(),
                            d = a.calculateBarValuePixels(a.index, e, i),
                            h = a.calculateBarIndexPixels(a.index, e, u, i);
                        r.horizontal = l, r.base = n ? s : d.base, r.x = l ? n ? s : d.head : h.center, r.y = l ? h.center : n ? s : d.head, r.height = l ? h.size : void 0, r.width = l ? void 0 : h.size
                    },
                    _getStacks: function (t) {
                        var e, n, i = this._getIndexScale(),
                            a = i._getMatchingVisibleMetas(this._type),
                            r = i.options.stacked,
                            o = a.length,
                            s = [];
                        for (e = 0; e < o && (n = a[e], (!1 === r || -1 === s.indexOf(n.stack) || void 0 === r && void 0 === n.stack) && s.push(n.stack), n.index !== t); ++e);
                        return s
                    },
                    getStackCount: function () {
                        return this._getStacks().length
                    },
                    getStackIndex: function (t, e) {
                        var n = this._getStacks(t),
                            i = void 0 !== e ? n.indexOf(e) : -1;
                        return -1 === i ? n.length - 1 : i
                    },
                    getRuler: function () {
                        var t, e, n = this._getIndexScale(),
                            i = [];
                        for (t = 0, e = this.getMeta().data.length; t < e; ++t) i.push(n.getPixelForValue(null, t, this.index));
                        return {
                            pixels: i,
                            start: n._startPixel,
                            end: n._endPixel,
                            stackCount: this.getStackCount(),
                            scale: n
                        }
                    },
                    calculateBarValuePixels: function (t, e, n) {
                        var i, a, r, o, s, l, u, d = this.chart,
                            h = this._getValueScale(),
                            c = h.isHorizontal(),
                            f = d.data.datasets,
                            g = h._getMatchingVisibleMetas(this._type),
                            m = h._parseValue(f[t].data[e]),
                            p = n.minBarLength,
                            v = h.options.stacked,
                            b = this.getMeta().stack,
                            y = void 0 === m.start ? 0 : 0 <= m.max && 0 <= m.min ? m.min : m.max,
                            x = void 0 === m.start ? m.end : 0 <= m.max && 0 <= m.min ? m.max - m.min : m.min - m.max,
                            _ = g.length;
                        if (v || void 0 === v && void 0 !== b)
                            for (i = 0; i < _ && (a = g[i]).index !== t; ++i) a.stack === b && (r = void 0 === (u = h._parseValue(f[a.index].data[e])).start ? u.end : 0 <= u.min && 0 <= u.max ? u.max : u.min, (m.min < 0 && r < 0 || 0 <= m.max && 0 < r) && (y += r));
                        return o = h.getPixelForValue(y), l = (s = h.getPixelForValue(y + x)) - o, void 0 !== p && Math.abs(l) < p && (l = p, s = 0 <= x && !c || x < 0 && c ? o - p : o + p), {
                            size: l,
                            base: o,
                            head: s,
                            center: s + l / 2
                        }
                    },
                    calculateBarIndexPixels: function (t, e, n, i) {
                        var a, r, o, s, l, u, d, h, c, f = "flex" === i.barThickness ? (a = e, o = i, l = (r = n).pixels, u = l[a], d = 0 < a ? l[a - 1] : null, h = a < l.length - 1 ? l[a + 1] : null, c = o.categoryPercentage, null === d && (d = u - (null === h ? r.end - r.start : h - u)), null === h && (h = u + u - d), s = u - (u - Math.min(d, h)) / 2 * c, {
                                chunk: Math.abs(h - d) / 2 * c / r.stackCount,
                                ratio: o.barPercentage,
                                start: s
                            }) : At(e, n, i),
                            g = this.getStackIndex(t, this.getMeta().stack),
                            m = f.start + f.chunk * g + f.chunk / 2,
                            p = Math.min(Ot(i.maxBarThickness, 1 / 0), f.chunk * f.ratio);
                        return {
                            base: m - p / 2,
                            head: m + p / 2,
                            center: m,
                            size: p
                        }
                    },
                    draw: function () {
                        var t = this.chart,
                            e = this._getValueScale(),
                            n = this.getMeta().data,
                            i = this.getDataset(),
                            a = n.length,
                            r = 0;
                        for (j.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) {
                            var o = e._parseValue(i.data[r]);
                            isNaN(o.min) || isNaN(o.max) || n[r].draw()
                        }
                        j.canvas.unclipArea(t.ctx)
                    },
                    _resolveDataElementOptions: function () {
                        var t = j.extend({}, rt.prototype._resolveDataElementOptions.apply(this, arguments)),
                            e = this._getIndexScale().options,
                            n = this._getValueScale().options;
                        return t.barPercentage = Ot(e.barPercentage, t.barPercentage), t.barThickness = Ot(e.barThickness, t.barThickness), t.categoryPercentage = Ot(e.categoryPercentage, t.categoryPercentage), t.maxBarThickness = Ot(e.maxBarThickness, t.maxBarThickness), t.minBarLength = Ot(n.minBarLength, t.minBarLength), t
                    }
                }),
                It = j.valueOrDefault,
                Lt = j.options.resolve;
            z._set("bubble", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t, e) {
                            var n = e.datasets[t.datasetIndex].label || "",
                                i = e.datasets[t.datasetIndex].data[t.index];
                            return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                        }
                    }
                }
            });
            var Rt = rt.extend({
                    dataElementType: Mt.Point,
                    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
                    update: function (n) {
                        var i = this,
                            t = i.getMeta().data;
                        j.each(t, function (t, e) {
                            i.updateElement(t, e, n)
                        })
                    },
                    updateElement: function (t, e, n) {
                        var i = this,
                            a = i.getMeta(),
                            r = t.custom || {},
                            o = i.getScaleForId(a.xAxisID),
                            s = i.getScaleForId(a.yAxisID),
                            l = i._resolveDataElementOptions(t, e),
                            u = i.getDataset().data[e],
                            d = i.index,
                            h = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                            c = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                        t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            rotation: l.rotation,
                            radius: n ? 0 : l.radius,
                            skip: r.skip || isNaN(h) || isNaN(c),
                            x: h,
                            y: c
                        }, t.pivot()
                    },
                    setHoverStyle: function (t) {
                        var e = t._model,
                            n = t._options,
                            i = j.getHoverColor;
                        t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth,
                            radius: e.radius
                        }, e.backgroundColor = It(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = It(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = It(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
                    },
                    _resolveDataElementOptions: function (t, e) {
                        var n = this,
                            i = n.chart,
                            a = n.getDataset(),
                            r = t.custom || {},
                            o = a.data[e] || {},
                            s = rt.prototype._resolveDataElementOptions.apply(n, arguments),
                            l = {
                                chart: i,
                                dataIndex: e,
                                dataset: a,
                                datasetIndex: n.index
                            };
                        return n._cachedDataOpts === s && (s = j.extend({}, s)), s.radius = Lt([r.radius, o.r, n._config.radius, i.options.elements.point.radius], l, e), s
                    }
                }),
                Wt = j.valueOrDefault,
                Nt = Math.PI,
                Yt = 2 * Nt,
                zt = Nt / 2;
            z._set("doughnut", {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                hover: {
                    mode: "single"
                },
                legendCallback: function (t) {
                    var e, n, i, a = document.createElement("ul"),
                        r = t.data,
                        o = r.datasets,
                        s = r.labels;
                    if (a.setAttribute("class", t.id + "-legend"), o.length)
                        for (n = o[e = 0].data.length; e < n; ++e)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
                    return a.outerHTML
                },
                legend: {
                    labels: {
                        generateLabels: function (a) {
                            var r = a.data;
                            return r.labels.length && r.datasets.length ? r.labels.map(function (t, e) {
                                var n = a.getDatasetMeta(0),
                                    i = n.controller.getStyle(e);
                                return {
                                    text: t,
                                    fillStyle: i.backgroundColor,
                                    strokeStyle: i.borderColor,
                                    lineWidth: i.borderWidth,
                                    hidden: isNaN(r.datasets[0].data[e]) || n.data[e].hidden,
                                    index: e
                                }
                            }) : []
                        }
                    },
                    onClick: function (t, e) {
                        var n, i, a, r = e.index,
                            o = this.chart;
                        for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
                        o.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -zt,
                circumference: Yt,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t, e) {
                            var n = e.labels[t.index],
                                i = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return j.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                        }
                    }
                }
            });
            var Et = rt.extend({
                dataElementType: Mt.Arc,
                linkScales: j.noop,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                getRingIndex: function (t) {
                    for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                    return e
                },
                update: function (t) {
                    var e, n, i, a, r = this,
                        o = r.chart,
                        s = o.chartArea,
                        l = o.options,
                        u = 1,
                        d = 1,
                        h = 0,
                        c = 0,
                        f = r.getMeta(),
                        g = f.data,
                        m = l.cutoutPercentage / 100 || 0,
                        p = l.circumference,
                        v = r._getRingWeight(r.index);
                    if (p < Yt) {
                        var b = l.rotation % Yt,
                            y = (b += Nt <= b ? -Yt : b < -Nt ? Yt : 0) + p,
                            x = Math.cos(b),
                            _ = Math.sin(b),
                            w = Math.cos(y),
                            k = Math.sin(y),
                            M = b <= 0 && 0 <= y || Yt <= y,
                            S = b <= zt && zt <= y || Yt + zt <= y,
                            D = b <= -zt && -zt <= y || Nt + zt <= y,
                            C = b === -Nt || Nt <= y ? -1 : Math.min(x, x * m, w, w * m),
                            P = D ? -1 : Math.min(_, _ * m, k, k * m),
                            T = M ? 1 : Math.max(x, x * m, w, w * m),
                            O = S ? 1 : Math.max(_, _ * m, k, k * m);
                        u = (T - C) / 2, d = (O - P) / 2, h = -(T + C) / 2, c = -(O + P) / 2
                    }
                    for (i = 0, a = g.length; i < a; ++i) g[i]._options = r._resolveDataElementOptions(g[i], i);
                    for (o.borderWidth = r.getMaxBorderWidth(), e = (s.right - s.left - o.borderWidth) / u, n = (s.bottom - s.top - o.borderWidth) / d, o.outerRadius = Math.max(Math.min(e, n) / 2, 0), o.innerRadius = Math.max(o.outerRadius * m, 0), o.radiusLength = (o.outerRadius - o.innerRadius) / (r._getVisibleDatasetWeightTotal() || 1), o.offsetX = h * o.outerRadius, o.offsetY = c * o.outerRadius, f.total = r.calculateTotal(), r.outerRadius = o.outerRadius - o.radiusLength * r._getRingWeightOffset(r.index), r.innerRadius = Math.max(r.outerRadius - o.radiusLength * v, 0), i = 0, a = g.length; i < a; ++i) r.updateElement(g[i], i, t)
                },
                updateElement: function (t, e, n) {
                    var i = this,
                        a = i.chart,
                        r = a.chartArea,
                        o = a.options,
                        s = o.animation,
                        l = (r.left + r.right) / 2,
                        u = (r.top + r.bottom) / 2,
                        d = o.rotation,
                        h = o.rotation,
                        c = i.getDataset(),
                        f = n && s.animateRotate || t.hidden ? 0 : i.calculateCircumference(c.data[e]) * (o.circumference / Yt),
                        g = n && s.animateScale ? 0 : i.innerRadius,
                        m = n && s.animateScale ? 0 : i.outerRadius,
                        p = t._options || {};
                    j.extend(t, {
                        _datasetIndex: i.index,
                        _index: e,
                        _model: {
                            backgroundColor: p.backgroundColor,
                            borderColor: p.borderColor,
                            borderWidth: p.borderWidth,
                            borderAlign: p.borderAlign,
                            x: l + a.offsetX,
                            y: u + a.offsetY,
                            startAngle: d,
                            endAngle: h,
                            circumference: f,
                            outerRadius: m,
                            innerRadius: g,
                            label: j.valueAtIndexOrDefault(c.label, e, a.data.labels[e])
                        }
                    });
                    var v = t._model;
                    n && s.animateRotate || (v.startAngle = 0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
                },
                calculateTotal: function () {
                    var n, i = this.getDataset(),
                        t = this.getMeta(),
                        a = 0;
                    return j.each(t.data, function (t, e) {
                        n = i.data[e], isNaN(n) || t.hidden || (a += Math.abs(n))
                    }), a
                },
                calculateCircumference: function (t) {
                    var e = this.getMeta().total;
                    return 0 < e && !isNaN(t) ? Yt * (Math.abs(t) / e) : 0
                },
                getMaxBorderWidth: function (t) {
                    var e, n, i, a, r, o, s, l, u = 0,
                        d = this.chart;
                    if (!t)
                        for (e = 0, n = d.data.datasets.length; e < n; ++e)
                            if (d.isDatasetVisible(e)) {
                                t = (i = d.getDatasetMeta(e)).data, e !== this.index && (r = i.controller);
                                break
                            } if (!t) return 0;
                    for (e = 0, n = t.length; e < n; ++e) a = t[e], "inner" !== (o = r ? (r._configure(), r._resolveDataElementOptions(a, e)) : a._options).borderAlign && (u = (u = u < (s = o.borderWidth) ? s : u) < (l = o.hoverBorderWidth) ? l : u);
                    return u
                },
                setHoverStyle: function (t) {
                    var e = t._model,
                        n = t._options,
                        i = j.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth
                    }, e.backgroundColor = Wt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Wt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Wt(n.hoverBorderWidth, n.borderWidth)
                },
                _getRingWeightOffset: function (t) {
                    for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
                    return e
                },
                _getRingWeight: function (t) {
                    return Math.max(Wt(this.chart.data.datasets[t].weight, 1), 0)
                },
                _getVisibleDatasetWeightTotal: function () {
                    return this._getRingWeightOffset(this.chart.data.datasets.length)
                }
            });
            z._set("horizontalBar", {
                hover: {
                    mode: "index",
                    axis: "y"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        type: "category",
                        position: "left",
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    mode: "index",
                    axis: "y"
                }
            }), z._set("global", {
                datasets: {
                    horizontalBar: {
                        categoryPercentage: .8,
                        barPercentage: .9
                    }
                }
            });
            var Vt = Ft.extend({
                    _getValueScaleId: function () {
                        return this.getMeta().xAxisID
                    },
                    _getIndexScaleId: function () {
                        return this.getMeta().yAxisID
                    }
                }),
                Bt = j.valueOrDefault,
                Ht = j.options.resolve,
                jt = j.canvas._isPointInArea;

            function Ut(t, e) {
                var n = t && t.options.ticks || {},
                    i = n.reverse,
                    a = void 0 === n.min ? e : 0,
                    r = void 0 === n.max ? e : 0;
                return {
                    start: i ? r : a,
                    end: i ? a : r
                }
            }
            z._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            });
            var Gt = rt.extend({
                    datasetElementType: Mt.Line,
                    dataElementType: Mt.Point,
                    _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
                    _dataElementOptions: {
                        backgroundColor: "pointBackgroundColor",
                        borderColor: "pointBorderColor",
                        borderWidth: "pointBorderWidth",
                        hitRadius: "pointHitRadius",
                        hoverBackgroundColor: "pointHoverBackgroundColor",
                        hoverBorderColor: "pointHoverBorderColor",
                        hoverBorderWidth: "pointHoverBorderWidth",
                        hoverRadius: "pointHoverRadius",
                        pointStyle: "pointStyle",
                        radius: "pointRadius",
                        rotation: "pointRotation"
                    },
                    update: function (t) {
                        var e, n, i = this,
                            a = i.getMeta(),
                            r = a.dataset,
                            o = a.data || [],
                            s = i.chart.options,
                            l = i._config,
                            u = i._showLine = Bt(l.showLine, s.showLines);
                        for (i._xScale = i.getScaleForId(a.xAxisID), i._yScale = i.getScaleForId(a.yAxisID), u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = i._yScale, r._datasetIndex = i.index, r._children = o, r._model = i._resolveDatasetElementOptions(r), r.pivot()), e = 0, n = o.length; e < n; ++e) i.updateElement(o[e], e, t);
                        for (u && 0 !== r._model.tension && i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) o[e].pivot()
                    },
                    updateElement: function (t, e, n) {
                        var i, a, r = this,
                            o = r.getMeta(),
                            s = t.custom || {},
                            l = r.getDataset(),
                            u = r.index,
                            d = l.data[e],
                            h = r._xScale,
                            c = r._yScale,
                            f = o.dataset._model,
                            g = r._resolveDataElementOptions(t, e);
                        i = h.getPixelForValue("object" == typeof d ? d : NaN, e, u), a = n ? c.getBasePixel() : r.calculatePointY(d, e, u), t._xScale = h, t._yScale = c, t._options = g, t._datasetIndex = u, t._index = e, t._model = {
                            x: i,
                            y: a,
                            skip: s.skip || isNaN(i) || isNaN(a),
                            radius: g.radius,
                            pointStyle: g.pointStyle,
                            rotation: g.rotation,
                            backgroundColor: g.backgroundColor,
                            borderColor: g.borderColor,
                            borderWidth: g.borderWidth,
                            tension: Bt(s.tension, f ? f.tension : 0),
                            steppedLine: !!f && f.steppedLine,
                            hitRadius: g.hitRadius
                        }
                    },
                    _resolveDatasetElementOptions: function (t) {
                        var e, n, i, a, r, o, s, l, u, d, h, c = this,
                            f = c._config,
                            g = t.custom || {},
                            m = c.chart.options,
                            p = m.elements.line,
                            v = rt.prototype._resolveDatasetElementOptions.apply(c, arguments);
                        return v.spanGaps = Bt(f.spanGaps, m.spanGaps), v.tension = Bt(f.lineTension, p.tension), v.steppedLine = Ht([g.steppedLine, f.steppedLine, p.stepped]), v.clip = (e = Bt(f.clip, (o = c._xScale, s = c._yScale, l = v.borderWidth, d = Ut(o, u = l / 2), {
                            top: (h = Ut(s, u)).end,
                            right: d.end,
                            bottom: h.start,
                            left: d.start
                        })), j.isObject(e) ? (n = e.top, i = e.right, a = e.bottom, r = e.left) : n = i = a = r = e, {
                            top: n,
                            right: i,
                            bottom: a,
                            left: r
                        }), v
                    },
                    calculatePointY: function (t, e, n) {
                        var i, a, r, o, s, l, u, d = this.chart,
                            h = this._yScale,
                            c = 0,
                            f = 0;
                        if (h.options.stacked) {
                            for (s = +h.getRightValue(t), u = (l = d._getSortedVisibleDatasetMetas()).length, i = 0; i < u && (r = l[i]).index !== n; ++i) a = d.data.datasets[r.index], "line" === r.type && r.yAxisID === h.id && ((o = +h.getRightValue(a.data[e])) < 0 ? f += o || 0 : c += o || 0);
                            return s < 0 ? h.getPixelForValue(f + s) : h.getPixelForValue(c + s)
                        }
                        return h.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function () {
                        var t, e, n, i, a = this.chart,
                            r = this.getMeta(),
                            o = r.dataset._model,
                            s = a.chartArea,
                            l = r.data || [];

                        function u(t, e, n) {
                            return Math.max(Math.min(t, n), e)
                        }
                        if (o.spanGaps && (l = l.filter(function (t) {
                                return !t._model.skip
                            })), "monotone" === o.cubicInterpolationMode) j.splineCurveMonotone(l);
                        else
                            for (t = 0, e = l.length; t < e; ++t) n = l[t]._model, i = j.splineCurve(j.previousItem(l, t)._model, n, j.nextItem(l, t)._model, o.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
                        if (a.options.elements.line.capBezierPoints)
                            for (t = 0, e = l.length; t < e; ++t) n = l[t]._model, jt(n, s) && (0 < t && jt(l[t - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && jt(l[t + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom)))
                    },
                    draw: function () {
                        var t, e = this.chart,
                            n = this.getMeta(),
                            i = n.data || [],
                            a = e.chartArea,
                            r = e.canvas,
                            o = 0,
                            s = i.length;
                        for (this._showLine && (t = n.dataset._model.clip, j.canvas.clipArea(e.ctx, {
                                left: !1 === t.left ? 0 : a.left - t.left,
                                right: !1 === t.right ? r.width : a.right + t.right,
                                top: !1 === t.top ? 0 : a.top - t.top,
                                bottom: !1 === t.bottom ? r.height : a.bottom + t.bottom
                            }), n.dataset.draw(), j.canvas.unclipArea(e.ctx)); o < s; ++o) i[o].draw(a)
                    },
                    setHoverStyle: function (t) {
                        var e = t._model,
                            n = t._options,
                            i = j.getHoverColor;
                        t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth,
                            radius: e.radius
                        }, e.backgroundColor = Bt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Bt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Bt(n.hoverBorderWidth, n.borderWidth), e.radius = Bt(n.hoverRadius, n.radius)
                    }
                }),
                qt = j.options.resolve;
            z._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    gridLines: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                legendCallback: function (t) {
                    var e, n, i, a = document.createElement("ul"),
                        r = t.data,
                        o = r.datasets,
                        s = r.labels;
                    if (a.setAttribute("class", t.id + "-legend"), o.length)
                        for (n = o[e = 0].data.length; e < n; ++e)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
                    return a.outerHTML
                },
                legend: {
                    labels: {
                        generateLabels: function (a) {
                            var r = a.data;
                            return r.labels.length && r.datasets.length ? r.labels.map(function (t, e) {
                                var n = a.getDatasetMeta(0),
                                    i = n.controller.getStyle(e);
                                return {
                                    text: t,
                                    fillStyle: i.backgroundColor,
                                    strokeStyle: i.borderColor,
                                    lineWidth: i.borderWidth,
                                    hidden: isNaN(r.datasets[0].data[e]) || n.data[e].hidden,
                                    index: e
                                }
                            }) : []
                        }
                    },
                    onClick: function (t, e) {
                        var n, i, a, r = e.index,
                            o = this.chart;
                        for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
                        o.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            });
            var Zt = rt.extend({
                dataElementType: Mt.Arc,
                linkScales: j.noop,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                _getIndexScaleId: function () {
                    return this.chart.scale.id
                },
                _getValueScaleId: function () {
                    return this.chart.scale.id
                },
                update: function (t) {
                    var e, n, i, a = this,
                        r = a.getDataset(),
                        o = a.getMeta(),
                        s = a.chart.options.startAngle || 0,
                        l = a._starts = [],
                        u = a._angles = [],
                        d = o.data;
                    for (a._updateRadius(), o.count = a.countVisibleElements(), e = 0, n = r.data.length; e < n; e++) l[e] = s, i = a._computeAngle(e), s += u[e] = i;
                    for (e = 0, n = d.length; e < n; ++e) d[e]._options = a._resolveDataElementOptions(d[e], e), a.updateElement(d[e], e, t)
                },
                _updateRadius: function () {
                    var t = this,
                        e = t.chart,
                        n = e.chartArea,
                        i = e.options,
                        a = Math.min(n.right - n.left, n.bottom - n.top);
                    e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
                },
                updateElement: function (t, e, n) {
                    var i = this,
                        a = i.chart,
                        r = i.getDataset(),
                        o = a.options,
                        s = o.animation,
                        l = a.scale,
                        u = a.data.labels,
                        d = l.xCenter,
                        h = l.yCenter,
                        c = o.startAngle,
                        f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
                        g = i._starts[e],
                        m = g + (t.hidden ? 0 : i._angles[e]),
                        p = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
                        v = t._options || {};
                    j.extend(t, {
                        _datasetIndex: i.index,
                        _index: e,
                        _scale: l,
                        _model: {
                            backgroundColor: v.backgroundColor,
                            borderColor: v.borderColor,
                            borderWidth: v.borderWidth,
                            borderAlign: v.borderAlign,
                            x: d,
                            y: h,
                            innerRadius: 0,
                            outerRadius: n ? p : f,
                            startAngle: n && s.animateRotate ? c : g,
                            endAngle: n && s.animateRotate ? c : m,
                            label: j.valueAtIndexOrDefault(u, e, u[e])
                        }
                    }), t.pivot()
                },
                countVisibleElements: function () {
                    var n = this.getDataset(),
                        t = this.getMeta(),
                        i = 0;
                    return j.each(t.data, function (t, e) {
                        isNaN(n.data[e]) || t.hidden || i++
                    }), i
                },
                setHoverStyle: function (t) {
                    var e = t._model,
                        n = t._options,
                        i = j.getHoverColor,
                        a = j.valueOrDefault;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth
                    }, e.backgroundColor = a(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = a(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = a(n.hoverBorderWidth, n.borderWidth)
                },
                _computeAngle: function (t) {
                    var e = this,
                        n = this.getMeta().count,
                        i = e.getDataset(),
                        a = e.getMeta();
                    if (isNaN(i.data[t]) || a.data[t].hidden) return 0;
                    var r = {
                        chart: e.chart,
                        dataIndex: t,
                        dataset: i,
                        datasetIndex: e.index
                    };
                    return qt([e.chart.options.elements.arc.angle, 2 * Math.PI / n], r, t)
                }
            });
            z._set("pie", j.clone(z.doughnut)), z._set("pie", {
                cutoutPercentage: 0
            });
            var $t = Et,
                Xt = j.valueOrDefault;
            z._set("radar", {
                spanGaps: !1,
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        fill: "start",
                        tension: 0
                    }
                }
            });
            var Kt = rt.extend({
                datasetElementType: Mt.Line,
                dataElementType: Mt.Point,
                linkScales: j.noop,
                _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
                _dataElementOptions: {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                },
                _getIndexScaleId: function () {
                    return this.chart.scale.id
                },
                _getValueScaleId: function () {
                    return this.chart.scale.id
                },
                update: function (t) {
                    var e, n, i = this,
                        a = i.getMeta(),
                        r = a.dataset,
                        o = a.data || [],
                        s = i.chart.scale,
                        l = i._config;
                    for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = i.index, r._children = o, r._loop = !0, r._model = i._resolveDatasetElementOptions(r), r.pivot(), e = 0, n = o.length; e < n; ++e) i.updateElement(o[e], e, t);
                    for (i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) o[e].pivot()
                },
                updateElement: function (t, e, n) {
                    var i = this,
                        a = t.custom || {},
                        r = i.getDataset(),
                        o = i.chart.scale,
                        s = o.getPointPositionForValue(e, r.data[e]),
                        l = i._resolveDataElementOptions(t, e),
                        u = i.getMeta().dataset._model,
                        d = n ? o.xCenter : s.x,
                        h = n ? o.yCenter : s.y;
                    t._scale = o, t._options = l, t._datasetIndex = i.index, t._index = e, t._model = {
                        x: d,
                        y: h,
                        skip: a.skip || isNaN(d) || isNaN(h),
                        radius: l.radius,
                        pointStyle: l.pointStyle,
                        rotation: l.rotation,
                        backgroundColor: l.backgroundColor,
                        borderColor: l.borderColor,
                        borderWidth: l.borderWidth,
                        tension: Xt(a.tension, u ? u.tension : 0),
                        hitRadius: l.hitRadius
                    }
                },
                _resolveDatasetElementOptions: function () {
                    var t = this._config,
                        e = this.chart.options,
                        n = rt.prototype._resolveDatasetElementOptions.apply(this, arguments);
                    return n.spanGaps = Xt(t.spanGaps, e.spanGaps), n.tension = Xt(t.lineTension, e.elements.line.tension), n
                },
                updateBezierControlPoints: function () {
                    var t, e, n, i, a = this.getMeta(),
                        r = this.chart.chartArea,
                        o = a.data || [];

                    function s(t, e, n) {
                        return Math.max(Math.min(t, n), e)
                    }
                    for (a.dataset._model.spanGaps && (o = o.filter(function (t) {
                            return !t._model.skip
                        })), t = 0, e = o.length; t < e; ++t) n = o[t]._model, i = j.splineCurve(j.previousItem(o, t, !0)._model, n, j.nextItem(o, t, !0)._model, n.tension), n.controlPointPreviousX = s(i.previous.x, r.left, r.right), n.controlPointPreviousY = s(i.previous.y, r.top, r.bottom), n.controlPointNextX = s(i.next.x, r.left, r.right), n.controlPointNextY = s(i.next.y, r.top, r.bottom)
                },
                setHoverStyle: function (t) {
                    var e = t._model,
                        n = t._options,
                        i = j.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth,
                        radius: e.radius
                    }, e.backgroundColor = Xt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Xt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Xt(n.hoverBorderWidth, n.borderWidth), e.radius = Xt(n.hoverRadius, n.radius)
                }
            });
            z._set("scatter", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        id: "x-axis-1",
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        id: "y-axis-1",
                        type: "linear",
                        position: "left"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }), z._set("global", {
                datasets: {
                    scatter: {
                        showLine: !1
                    }
                }
            });
            var Jt = {
                bar: Ft,
                bubble: Rt,
                doughnut: Et,
                horizontalBar: Vt,
                line: Gt,
                polarArea: Zt,
                pie: $t,
                radar: Kt,
                scatter: Gt
            };

            function Qt(t, e) {
                return t.native ? {
                    x: t.x,
                    y: t.y
                } : j.getRelativePosition(t, e)
            }

            function te(t, e) {
                var n, i, a, r, o, s, l = t._getSortedVisibleDatasetMetas();
                for (i = 0, r = l.length; i < r; ++i)
                    for (a = 0, o = (n = l[i].data).length; a < o; ++a)(s = n[a])._view.skip || e(s)
            }

            function ee(t, e) {
                var n = [];
                return te(t, function (t) {
                    t.inRange(e.x, e.y) && n.push(t)
                }), n
            }

            function ne(t, i, a, r) {
                var o = Number.POSITIVE_INFINITY,
                    s = [];
                return te(t, function (t) {
                    if (!a || t.inRange(i.x, i.y)) {
                        var e = t.getCenterPoint(),
                            n = r(i, e);
                        n < o ? (s = [t], o = n) : n === o && s.push(t)
                    }
                }), s
            }

            function ie(t) {
                var a = -1 !== t.indexOf("x"),
                    r = -1 !== t.indexOf("y");
                return function (t, e) {
                    var n = a ? Math.abs(t.x - e.x) : 0,
                        i = r ? Math.abs(t.y - e.y) : 0;
                    return Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2))
                }
            }

            function ae(t, e, n) {
                var i = Qt(e, t);
                n.axis = n.axis || "x";
                var a = ie(n.axis),
                    r = n.intersect ? ee(t, i) : ne(t, i, !1, a),
                    o = [];
                return r.length ? (t._getSortedVisibleDatasetMetas().forEach(function (t) {
                    var e = t.data[r[0]._index];
                    e && !e._view.skip && o.push(e)
                }), o) : []
            }
            var re = {
                    modes: {
                        single: function (t, e) {
                            var n = Qt(e, t),
                                i = [];
                            return te(t, function (t) {
                                return t.inRange(n.x, n.y) && (i.push(t), i)
                            }), i.slice(0, 1)
                        },
                        label: ae,
                        index: ae,
                        dataset: function (t, e, n) {
                            var i = Qt(e, t);
                            n.axis = n.axis || "xy";
                            var a = ie(n.axis),
                                r = n.intersect ? ee(t, i) : ne(t, i, !1, a);
                            return 0 < r.length && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r
                        },
                        "x-axis": function (t, e) {
                            return ae(t, e, {
                                intersect: !1
                            })
                        },
                        point: function (t, e) {
                            return ee(t, Qt(e, t))
                        },
                        nearest: function (t, e, n) {
                            var i = Qt(e, t);
                            n.axis = n.axis || "xy";
                            var a = ie(n.axis);
                            return ne(t, i, n.intersect, a)
                        },
                        x: function (t, e, n) {
                            var i = Qt(e, t),
                                a = [],
                                r = !1;
                            return te(t, function (t) {
                                t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (r = !0)
                            }), n.intersect && !r && (a = []), a
                        },
                        y: function (t, e, n) {
                            var i = Qt(e, t),
                                a = [],
                                r = !1;
                            return te(t, function (t) {
                                t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (r = !0)
                            }), n.intersect && !r && (a = []), a
                        }
                    }
                },
                oe = j.extend;

            function se(t, e) {
                return j.where(t, function (t) {
                    return t.pos === e
                })
            }

            function le(t, a) {
                return t.sort(function (t, e) {
                    var n = a ? e : t,
                        i = a ? t : e;
                    return n.weight === i.weight ? n.index - i.index : n.weight - i.weight
                })
            }

            function ue(t) {
                var e = function (t) {
                        var e, n, i, a = [];
                        for (e = 0, n = (t || []).length; e < n; ++e) i = t[e], a.push({
                            index: e,
                            box: i,
                            pos: i.position,
                            horizontal: i.isHorizontal(),
                            weight: i.weight
                        });
                        return a
                    }(t),
                    n = le(se(e, "left"), !0),
                    i = le(se(e, "right")),
                    a = le(se(e, "top"), !0),
                    r = le(se(e, "bottom"));
                return {
                    leftAndTop: n.concat(a),
                    rightAndBottom: i.concat(r),
                    chartArea: se(e, "chartArea"),
                    vertical: n.concat(i),
                    horizontal: a.concat(r)
                }
            }

            function de(t, e, n, i) {
                return Math.max(t[n], e[n]) + Math.max(t[i], e[i])
            }

            function he(t, e, n) {
                var i, a, r = n.box,
                    o = t.maxPadding;
                if (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? r.height : r.width, t[n.pos] += n.size, r.getPadding) {
                    var s = r.getPadding();
                    o.top = Math.max(o.top, s.top), o.left = Math.max(o.left, s.left), o.bottom = Math.max(o.bottom, s.bottom), o.right = Math.max(o.right, s.right)
                }
                return i = e.outerWidth - de(o, t, "left", "right"), a = e.outerHeight - de(o, t, "top", "bottom"), i !== t.w || a !== t.h ? (t.w = i, t.h = a, n.horizontal ? i !== t.w : a !== t.h) : void 0
            }

            function ce(t, n) {
                var i = n.maxPadding;

                function e(t) {
                    var e = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    };
                    return t.forEach(function (t) {
                        e[t] = Math.max(n[t], i[t])
                    }), e
                }
                return e(t ? ["left", "right"] : ["top", "bottom"])
            }

            function fe(t, e, n) {
                var i, a, r, o, s, l, u = [];
                for (i = 0, a = t.length; i < a; ++i)(o = (r = t[i]).box).update(r.width || e.w, r.height || e.h, ce(r.horizontal, e)), he(e, n, r) && (l = !0, u.length && (s = !0)), o.fullWidth || u.push(r);
                return s && fe(u, e, n) || l
            }

            function ge(t, e, n) {
                var i, a, r, o, s = n.padding,
                    l = e.x,
                    u = e.y;
                for (i = 0, a = t.length; i < a; ++i) o = (r = t[i]).box, r.horizontal ? (o.left = o.fullWidth ? s.left : e.left, o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w, o.top = u, o.bottom = u + o.height, o.width = o.right - o.left, u = o.bottom) : (o.left = l, o.right = l + o.width, o.top = e.top, o.bottom = e.top + e.h, o.height = o.bottom - o.top, l = o.right);
                e.x = l, e.y = u
            }
            z._set("global", {
                layout: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            });
            var me, pe = {
                    defaults: {},
                    addBox: function (t, e) {
                        t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
                            return [{
                                z: 0,
                                draw: function () {
                                    e.draw.apply(e, arguments)
                                }
                            }]
                        }, t.boxes.push(e)
                    },
                    removeBox: function (t, e) {
                        var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
                    },
                    configure: function (t, e, n) {
                        for (var i, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) i = a[o], n.hasOwnProperty(i) && (e[i] = n[i])
                    },
                    update: function (n, t, e) {
                        if (n) {
                            var i, a, r = n.options.layout || {},
                                o = j.options.toPadding(r.padding),
                                s = t - o.width,
                                l = e - o.height,
                                u = ue(n.boxes),
                                d = u.vertical,
                                h = u.horizontal,
                                c = Object.freeze({
                                    outerWidth: t,
                                    outerHeight: e,
                                    padding: o,
                                    availableWidth: s,
                                    vBoxMaxWidth: s / 2 / d.length,
                                    hBoxMaxHeight: l / 2
                                }),
                                f = oe({
                                    maxPadding: oe({}, o),
                                    w: s,
                                    h: l,
                                    x: o.left,
                                    y: o.top
                                }, o);
                            ! function (t, e) {
                                var n, i, a;
                                for (n = 0, i = t.length; n < i; ++n)(a = t[n]).width = a.horizontal ? a.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, a.height = a.horizontal && e.hBoxMaxHeight
                            }(d.concat(h), c), fe(d, f, c), fe(h, f, c) && fe(d, f, c), a = (i = f).maxPadding, i.y += g("top"), i.x += g("left"), g("right"), g("bottom"), ge(u.leftAndTop, f, c), f.x += f.w, f.y += f.h, ge(u.rightAndBottom, f, c), n.chartArea = {
                                left: f.left,
                                top: f.top,
                                right: f.left + f.w,
                                bottom: f.top + f.h
                            }, j.each(u.chartArea, function (t) {
                                var e = t.box;
                                oe(e, n.chartArea), e.update(f.w, f.h)
                            })
                        }

                        function g(t) {
                            var e = Math.max(a[t] - i[t], 0);
                            return i[t] += e, e
                        }
                    }
                },
                ve = (me = Object.freeze({
                    __proto__: null,
                    default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n"
                })) && me.default || me,
                be = "$chartjs",
                ye = "chartjs-",
                xe = ye + "size-monitor",
                _e = ye + "render-monitor",
                we = ye + "render-animation",
                ke = ["animationstart", "webkitAnimationStart"],
                Me = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };

            function Se(t, e) {
                var n = j.getStyle(t, e),
                    i = n && n.match(/^(\d+)(\.\d+)?px$/);
                return i ? Number(i[1]) : void 0
            }
            var De = !! function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    window.addEventListener("e", null, e)
                } catch (t) {}
                return t
            }() && {
                passive: !0
            };

            function Ce(t, e, n) {
                t.addEventListener(e, n, De)
            }

            function Pe(t, e, n) {
                t.removeEventListener(e, n, De)
            }

            function Te(t, e, n, i, a) {
                return {
                    type: t,
                    chart: e,
                    native: a || null,
                    x: void 0 !== n ? n : null,
                    y: void 0 !== i ? i : null
                }
            }

            function Oe(t) {
                var e = document.createElement("div");
                return e.className = t || "", e
            }

            function Ae(n, i, a) {
                var t, e, r, o, s, l, u, d, h, c, f, g, m = n[be] || (n[be] = {}),
                    p = m.resizer = (u = !(s = function () {
                        if (m.resizer) {
                            var t = a.options.maintainAspectRatio && n.parentNode,
                                e = t ? t.clientWidth : 0;
                            i(Te("resize", a)), t && t.clientWidth < e && a.canvas && i(Te("resize", a))
                        }
                    }), d = [], t = function () {
                        d = Array.prototype.slice.call(arguments), l = l || this, u || (u = !0, j.requestAnimFrame.call(window, function () {
                            u = !1, s.apply(l, d)
                        }))
                    }, e = Oe(xe), r = Oe(xe + "-expand"), o = Oe(xe + "-shrink"), r.appendChild(Oe()), o.appendChild(Oe()), e.appendChild(r), e.appendChild(o), e._reset = function () {
                        r.scrollLeft = 1e6, r.scrollTop = 1e6, o.scrollLeft = 1e6, o.scrollTop = 1e6
                    }, Ce(r, "scroll", v.bind(r, "expand")), Ce(o, "scroll", v.bind(o, "shrink")), e);

                function v() {
                    e._reset(), t()
                }
                c = function () {
                    if (m.resizer) {
                        var t = n.parentNode;
                        t && t !== p.parentNode && t.insertBefore(p, t.firstChild), p._reset()
                    }
                }, f = (h = n)[be] || (h[be] = {}), g = f.renderProxy = function (t) {
                    t.animationName === we && c()
                }, j.each(ke, function (t) {
                    Ce(h, t, g)
                }), f.reflow = !!h.offsetParent, h.classList.add(_e)
            }

            function Fe(t) {
                var e, n, i, a = t[be] || {},
                    r = a.resizer;
                delete a.resizer, n = (e = t)[be] || {}, (i = n.renderProxy) && (j.each(ke, function (t) {
                    Pe(e, t, i)
                }), delete n.renderProxy), e.classList.remove(_e), r && r.parentNode && r.parentNode.removeChild(r)
            }
            var Ie = {
                disableCSSInjection: !1,
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                _ensureLoaded: function (t) {
                    if (!this.disableCSSInjection) {
                        var e = t.getRootNode ? t.getRootNode() : document;
                        ! function (t, e) {
                            var n = t[be] || (t[be] = {});
                            if (!n.containsStyles) {
                                n.containsStyles = !0, e = "/* Chart.js */\n" + e;
                                var i = document.createElement("style");
                                i.setAttribute("type", "text/css"), i.appendChild(document.createTextNode(e)), t.appendChild(i)
                            }
                        }(e.host ? e : document.head, ve)
                    }
                },
                acquireContext: function (t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                    var n = t && t.getContext && t.getContext("2d");
                    return n && n.canvas === t ? (this._ensureLoaded(t), function (t, e) {
                        var n = t.style,
                            i = t.getAttribute("height"),
                            a = t.getAttribute("width");
                        if (t[be] = {
                                initial: {
                                    height: i,
                                    width: a,
                                    style: {
                                        display: n.display,
                                        height: n.height,
                                        width: n.width
                                    }
                                }
                            }, n.display = n.display || "block", null === a || "" === a) {
                            var r = Se(t, "width");
                            void 0 !== r && (t.width = r)
                        }
                        if (null === i || "" === i)
                            if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                            else {
                                var o = Se(t, "height");
                                void 0 !== r && (t.height = o)
                            }
                    }(t, e), n) : null
                },
                releaseContext: function (t) {
                    var n = t.canvas;
                    if (n[be]) {
                        var i = n[be].initial;
                        ["height", "width"].forEach(function (t) {
                            var e = i[t];
                            j.isNullOrUndef(e) ? n.removeAttribute(t) : n.setAttribute(t, e)
                        }), j.each(i.style || {}, function (t, e) {
                            n.style[e] = t
                        }), n.width = n.width, delete n[be]
                    }
                },
                addEventListener: function (r, t, o) {
                    var e = r.canvas;
                    if ("resize" !== t) {
                        var n = o[be] || (o[be] = {});
                        Ce(e, t, (n.proxies || (n.proxies = {}))[r.id + "_" + t] = function (t) {
                            var e, n, i, a;
                            o((n = r, i = Me[(e = t).type] || e.type, a = j.getRelativePosition(e, n), Te(i, n, a.x, a.y, e)))
                        })
                    } else Ae(e, o, r)
                },
                removeEventListener: function (t, e, n) {
                    var i = t.canvas;
                    if ("resize" !== e) {
                        var a = ((n[be] || {}).proxies || {})[t.id + "_" + e];
                        a && Pe(i, e, a)
                    } else Fe(i)
                }
            };
            j.addEvent = Ce, j.removeEvent = Pe;
            var Le = Ie._enabled ? Ie : {
                    acquireContext: function (t) {
                        return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                    }
                },
                Re = j.extend({
                    initialize: function () {},
                    acquireContext: function () {},
                    releaseContext: function () {},
                    addEventListener: function () {},
                    removeEventListener: function () {}
                }, Le);
            z._set("global", {
                plugins: {}
            });
            var We = {
                    _plugins: [],
                    _cacheId: 0,
                    register: function (t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function (t) {
                            -1 === e.indexOf(t) && e.push(t)
                        }), this._cacheId++
                    },
                    unregister: function (t) {
                        var n = this._plugins;
                        [].concat(t).forEach(function (t) {
                            var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                        }), this._cacheId++
                    },
                    clear: function () {
                        this._plugins = [], this._cacheId++
                    },
                    count: function () {
                        return this._plugins.length
                    },
                    getAll: function () {
                        return this._plugins
                    },
                    notify: function (t, e, n) {
                        var i, a, r, o, s, l = this.descriptors(t),
                            u = l.length;
                        for (i = 0; i < u; ++i)
                            if ("function" == typeof (s = (r = (a = l[i]).plugin)[e]) && ((o = [t].concat(n || [])).push(a.options), !1 === s.apply(r, o))) return !1;
                        return !0
                    },
                    descriptors: function (t) {
                        var e = t.$plugins || (t.$plugins = {});
                        if (e.id === this._cacheId) return e.descriptors;
                        var i = [],
                            a = [],
                            n = t && t.config || {},
                            r = n.options && n.options.plugins || {};
                        return this._plugins.concat(n.plugins || []).forEach(function (t) {
                            if (-1 === i.indexOf(t)) {
                                var e = t.id,
                                    n = r[e];
                                !1 !== n && (!0 === n && (n = j.clone(z.global.plugins[e])), i.push(t), a.push({
                                    plugin: t,
                                    options: n || {}
                                }))
                            }
                        }), e.descriptors = a, e.id = this._cacheId, a
                    },
                    _invalidate: function (t) {
                        delete t.$plugins
                    }
                },
                Ne = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function (t, e, n) {
                        this.constructors[t] = e, this.defaults[t] = j.clone(n)
                    },
                    getScaleConstructor: function (t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    },
                    getScaleDefaults: function (t) {
                        return this.defaults.hasOwnProperty(t) ? j.merge({}, [z.scale, this.defaults[t]]) : {}
                    },
                    updateScaleDefaults: function (t, e) {
                        this.defaults.hasOwnProperty(t) && (this.defaults[t] = j.extend(this.defaults[t], e))
                    },
                    addScalesToLayout: function (e) {
                        j.each(e.scales, function (t) {
                            t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, pe.addBox(e, t)
                        })
                    }
                },
                Ye = j.valueOrDefault,
                ze = j.rtl.getRtlAdapter;
            z._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: j.noop,
                        title: function (t, e) {
                            var n = "",
                                i = e.labels,
                                a = i ? i.length : 0;
                            if (0 < t.length) {
                                var r = t[0];
                                r.label ? n = r.label : r.xLabel ? n = r.xLabel : 0 < a && r.index < a && (n = i[r.index])
                            }
                            return n
                        },
                        afterTitle: j.noop,
                        beforeBody: j.noop,
                        beforeLabel: j.noop,
                        label: function (t, e) {
                            var n = e.datasets[t.datasetIndex].label || "";
                            return n && (n += ": "), j.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n
                        },
                        labelColor: function (t, e) {
                            var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                            return {
                                borderColor: n.borderColor,
                                backgroundColor: n.backgroundColor
                            }
                        },
                        labelTextColor: function () {
                            return this._options.bodyFontColor
                        },
                        afterLabel: j.noop,
                        afterBody: j.noop,
                        beforeFooter: j.noop,
                        footer: j.noop,
                        afterFooter: j.noop
                    }
                }
            });
            var Ee = {
                average: function (t) {
                    if (!t.length) return !1;
                    var e, n, i = 0,
                        a = 0,
                        r = 0;
                    for (e = 0, n = t.length; e < n; ++e) {
                        var o = t[e];
                        if (o && o.hasValue()) {
                            var s = o.tooltipPosition();
                            i += s.x, a += s.y, ++r
                        }
                    }
                    return {
                        x: i / r,
                        y: a / r
                    }
                },
                nearest: function (t, e) {
                    var n, i, a, r = e.x,
                        o = e.y,
                        s = Number.POSITIVE_INFINITY;
                    for (n = 0, i = t.length; n < i; ++n) {
                        var l = t[n];
                        if (l && l.hasValue()) {
                            var u = l.getCenterPoint(),
                                d = j.distanceBetweenPoints(e, u);
                            d < s && (s = d, a = l)
                        }
                    }
                    if (a) {
                        var h = a.tooltipPosition();
                        r = h.x, o = h.y
                    }
                    return {
                        x: r,
                        y: o
                    }
                }
            };

            function Ve(t, e) {
                return e && (j.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
            }

            function Be(t) {
                return ("string" == typeof t || t instanceof String) && -1 < t.indexOf("\n") ? t.split("\n") : t
            }

            function He(t) {
                var e = z.global;
                return {
                    xPadding: t.xPadding,
                    yPadding: t.yPadding,
                    xAlign: t.xAlign,
                    yAlign: t.yAlign,
                    rtl: t.rtl,
                    textDirection: t.textDirection,
                    bodyFontColor: t.bodyFontColor,
                    _bodyFontFamily: Ye(t.bodyFontFamily, e.defaultFontFamily),
                    _bodyFontStyle: Ye(t.bodyFontStyle, e.defaultFontStyle),
                    _bodyAlign: t.bodyAlign,
                    bodyFontSize: Ye(t.bodyFontSize, e.defaultFontSize),
                    bodySpacing: t.bodySpacing,
                    titleFontColor: t.titleFontColor,
                    _titleFontFamily: Ye(t.titleFontFamily, e.defaultFontFamily),
                    _titleFontStyle: Ye(t.titleFontStyle, e.defaultFontStyle),
                    titleFontSize: Ye(t.titleFontSize, e.defaultFontSize),
                    _titleAlign: t.titleAlign,
                    titleSpacing: t.titleSpacing,
                    titleMarginBottom: t.titleMarginBottom,
                    footerFontColor: t.footerFontColor,
                    _footerFontFamily: Ye(t.footerFontFamily, e.defaultFontFamily),
                    _footerFontStyle: Ye(t.footerFontStyle, e.defaultFontStyle),
                    footerFontSize: Ye(t.footerFontSize, e.defaultFontSize),
                    _footerAlign: t.footerAlign,
                    footerSpacing: t.footerSpacing,
                    footerMarginTop: t.footerMarginTop,
                    caretSize: t.caretSize,
                    cornerRadius: t.cornerRadius,
                    backgroundColor: t.backgroundColor,
                    opacity: 0,
                    legendColorBackground: t.multiKeyBackground,
                    displayColors: t.displayColors,
                    borderColor: t.borderColor,
                    borderWidth: t.borderWidth
                }
            }

            function je(t, e) {
                var n = t._chart.ctx,
                    i = 2 * e.yPadding,
                    a = 0,
                    r = e.body,
                    o = r.reduce(function (t, e) {
                        return t + e.before.length + e.lines.length + e.after.length
                    }, 0);
                o += e.beforeBody.length + e.afterBody.length;
                var s = e.title.length,
                    l = e.footer.length,
                    u = e.titleFontSize,
                    d = e.bodyFontSize,
                    h = e.footerFontSize;
                i += s * u, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += o * d, i += o ? (o - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * h, i += l ? (l - 1) * e.footerSpacing : 0;

                function c(t) {
                    a = Math.max(a, n.measureText(t).width + f)
                }
                var f = 0;
                return n.font = j.fontString(u, e._titleFontStyle, e._titleFontFamily), j.each(e.title, c), n.font = j.fontString(d, e._bodyFontStyle, e._bodyFontFamily), j.each(e.beforeBody.concat(e.afterBody), c), f = e.displayColors ? d + 2 : 0, j.each(r, function (t) {
                    j.each(t.before, c), j.each(t.lines, c), j.each(t.after, c)
                }), f = 0, n.font = j.fontString(h, e._footerFontStyle, e._footerFontFamily), j.each(e.footer, c), {
                    width: a += 2 * e.xPadding,
                    height: i
                }
            }

            function Ue(t, e) {
                return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
            }

            function Ge(t) {
                return Ve([], Be(t))
            }
            var qe = K.extend({
                    initialize: function () {
                        this._model = He(this._options), this._lastActive = []
                    },
                    getTitle: function () {
                        var t = this._options.callbacks,
                            e = t.beforeTitle.apply(this, arguments),
                            n = t.title.apply(this, arguments),
                            i = t.afterTitle.apply(this, arguments),
                            a = [];
                        return a = Ve(a, Be(e)), a = Ve(a, Be(n)), a = Ve(a, Be(i))
                    },
                    getBeforeBody: function () {
                        return Ge(this._options.callbacks.beforeBody.apply(this, arguments))
                    },
                    getBody: function (t, n) {
                        var i = this,
                            a = i._options.callbacks,
                            r = [];
                        return j.each(t, function (t) {
                            var e = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            Ve(e.before, Be(a.beforeLabel.call(i, t, n))), Ve(e.lines, a.label.call(i, t, n)), Ve(e.after, Be(a.afterLabel.call(i, t, n))), r.push(e)
                        }), r
                    },
                    getAfterBody: function () {
                        return Ge(this._options.callbacks.afterBody.apply(this, arguments))
                    },
                    getFooter: function () {
                        var t = this._options.callbacks,
                            e = t.beforeFooter.apply(this, arguments),
                            n = t.footer.apply(this, arguments),
                            i = t.afterFooter.apply(this, arguments),
                            a = [];
                        return a = Ve(a, Be(e)), a = Ve(a, Be(n)), a = Ve(a, Be(i))
                    },
                    update: function (t) {
                        var e, n, i, a, r, o, s, l, u, d, h, c, f, g, m, p, v, b, y, x, _, w, k, M = this,
                            S = M._options,
                            D = M._model,
                            C = M._model = He(S),
                            P = M._active,
                            T = M._data,
                            O = {
                                xAlign: D.xAlign,
                                yAlign: D.yAlign
                            },
                            A = {
                                x: D.x,
                                y: D.y
                            },
                            F = {
                                width: D.width,
                                height: D.height
                            },
                            I = {
                                x: D.caretX,
                                y: D.caretY
                            };
                        if (P.length) {
                            C.opacity = 1;
                            var L = [],
                                R = [];
                            I = Ee[S.position].call(M, P, M._eventPosition);
                            var W = [];
                            for (e = 0, n = P.length; e < n; ++e) W.push((p = P[e], k = w = _ = b = v = void 0, v = p._xScale, b = p._yScale || p._scale, y = p._index, x = p._datasetIndex, _ = p._chart.getDatasetMeta(x).controller, w = _._getIndexScale(), k = _._getValueScale(), {
                                xLabel: v ? v.getLabelForIndex(y, x) : "",
                                yLabel: b ? b.getLabelForIndex(y, x) : "",
                                label: w ? "" + w.getLabelForIndex(y, x) : "",
                                value: k ? "" + k.getLabelForIndex(y, x) : "",
                                index: y,
                                datasetIndex: x,
                                x: p._model.x,
                                y: p._model.y
                            }));
                            S.filter && (W = W.filter(function (t) {
                                return S.filter(t, T)
                            })), S.itemSort && (W = W.sort(function (t, e) {
                                return S.itemSort(t, e, T)
                            })), j.each(W, function (t) {
                                L.push(S.callbacks.labelColor.call(M, t, M._chart)), R.push(S.callbacks.labelTextColor.call(M, t, M._chart))
                            }), C.title = M.getTitle(W, T), C.beforeBody = M.getBeforeBody(W, T), C.body = M.getBody(W, T), C.afterBody = M.getAfterBody(W, T), C.footer = M.getFooter(W, T), C.x = I.x, C.y = I.y, C.caretPadding = S.caretPadding, C.labelColors = L, C.labelTextColors = R, C.dataPoints = W, O = function (t, e) {
                                var n, i, a, r, o, s = t._model,
                                    l = t._chart,
                                    u = t._chart.chartArea,
                                    d = "center",
                                    h = "center";
                                s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
                                var c = (u.left + u.right) / 2,
                                    f = (u.top + u.bottom) / 2;
                                i = "center" === h ? (n = function (t) {
                                    return t <= c
                                }, function (t) {
                                    return c < t
                                }) : (n = function (t) {
                                    return t <= e.width / 2
                                }, function (t) {
                                    return t >= l.width - e.width / 2
                                }), a = function (t) {
                                    return t + e.width + s.caretSize + s.caretPadding > l.width
                                }, r = function (t) {
                                    return t - e.width - s.caretSize - s.caretPadding < 0
                                }, o = function (t) {
                                    return t <= f ? "top" : "bottom"
                                }, n(s.x) ? (d = "left", a(s.x) && (d = "center", h = o(s.y))) : i(s.x) && (d = "right", r(s.x) && (d = "center", h = o(s.y)));
                                var g = t._options;
                                return {
                                    xAlign: g.xAlign ? g.xAlign : d,
                                    yAlign: g.yAlign ? g.yAlign : h
                                }
                            }(this, F = je(this, C)), i = C, a = F, r = O, o = M._chart, s = i.x, l = i.y, u = i.caretSize, d = i.caretPadding, h = i.cornerRadius, c = r.xAlign, f = r.yAlign, g = u + d, m = h + d, "right" === c ? s -= a.width : "center" === c && ((s -= a.width / 2) + a.width > o.width && (s = o.width - a.width), s < 0 && (s = 0)), "top" === f ? l += g : l -= "bottom" === f ? a.height + g : a.height / 2, "center" === f ? "left" === c ? s += g : "right" === c && (s -= g) : "left" === c ? s -= m : "right" === c && (s += m), A = {
                                x: s,
                                y: l
                            }
                        } else C.opacity = 0;
                        return C.xAlign = O.xAlign, C.yAlign = O.yAlign, C.x = A.x, C.y = A.y, C.width = F.width, C.height = F.height, C.caretX = I.x, C.caretY = I.y, M._model = C, t && S.custom && S.custom.call(M, C), M
                    },
                    drawCaret: function (t, e) {
                        var n = this._chart.ctx,
                            i = this._view,
                            a = this.getCaretPosition(t, e, i);
                        n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3)
                    },
                    getCaretPosition: function (t, e, n) {
                        var i, a, r, o, s, l, u = n.caretSize,
                            d = n.cornerRadius,
                            h = n.xAlign,
                            c = n.yAlign,
                            f = t.x,
                            g = t.y,
                            m = e.width,
                            p = e.height;
                        if ("center" === c) s = g + p / 2, l = "left" === h ? (a = (i = f) - u, r = i, o = s + u, s - u) : (a = (i = f + m) + u, r = i, o = s - u, s + u);
                        else if (r = (i = "left" === h ? (a = f + d + u) - u : "right" === h ? (a = f + m - d - u) - u : (a = n.caretX) - u, a + u), "top" === c) s = (o = g) - u, l = o;
                        else {
                            s = (o = g + p) + u, l = o;
                            var v = r;
                            r = i, i = v
                        }
                        return {
                            x1: i,
                            x2: a,
                            x3: r,
                            y1: o,
                            y2: s,
                            y3: l
                        }
                    },
                    drawTitle: function (t, e, n) {
                        var i, a, r, o = e.title,
                            s = o.length;
                        if (s) {
                            var l = ze(e.rtl, e.x, e.width);
                            for (t.x = Ue(e, e._titleAlign), n.textAlign = l.textAlign(e._titleAlign), n.textBaseline = "middle", i = e.titleFontSize, a = e.titleSpacing, n.fillStyle = e.titleFontColor, n.font = j.fontString(i, e._titleFontStyle, e._titleFontFamily), r = 0; r < s; ++r) n.fillText(o[r], l.x(t.x), t.y + i / 2), t.y += i + a, r + 1 === s && (t.y += e.titleMarginBottom - a)
                        }
                    },
                    drawBody: function (e, t, n) {
                        function i(t) {
                            n.fillText(t, y.x(e.x + v), e.y + c / 2), e.y += c + f
                        }
                        var a, r, o, s, l, u, d, h, c = t.bodyFontSize,
                            f = t.bodySpacing,
                            g = t._bodyAlign,
                            m = t.body,
                            p = t.displayColors,
                            v = 0,
                            b = p ? Ue(t, "left") : 0,
                            y = ze(t.rtl, t.x, t.width),
                            x = y.textAlign(g);
                        for (n.textAlign = g, n.textBaseline = "middle", n.font = j.fontString(c, t._bodyFontStyle, t._bodyFontFamily), e.x = Ue(t, x), n.fillStyle = t.bodyFontColor, j.each(t.beforeBody, i), v = p && "right" !== x ? "center" === g ? c / 2 + 1 : c + 2 : 0, l = 0, d = m.length; l < d; ++l) {
                            for (a = m[l], r = t.labelTextColors[l], o = t.labelColors[l], n.fillStyle = r, j.each(a.before, i), u = 0, h = (s = a.lines).length; u < h; ++u) {
                                if (p) {
                                    var _ = y.x(b);
                                    n.fillStyle = t.legendColorBackground, n.fillRect(y.leftForLtr(_, c), e.y, c, c), n.lineWidth = 1, n.strokeStyle = o.borderColor, n.strokeRect(y.leftForLtr(_, c), e.y, c, c), n.fillStyle = o.backgroundColor, n.fillRect(y.leftForLtr(y.xPlus(_, 1), c - 2), e.y + 1, c - 2, c - 2), n.fillStyle = r
                                }
                                i(s[u])
                            }
                            j.each(a.after, i)
                        }
                        v = 0, j.each(t.afterBody, i), e.y -= f
                    },
                    drawFooter: function (t, e, n) {
                        var i, a, r = e.footer,
                            o = r.length;
                        if (o) {
                            var s = ze(e.rtl, e.x, e.width);
                            for (t.x = Ue(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = s.textAlign(e._footerAlign), n.textBaseline = "middle", i = e.footerFontSize, n.fillStyle = e.footerFontColor, n.font = j.fontString(i, e._footerFontStyle, e._footerFontFamily), a = 0; a < o; ++a) n.fillText(r[a], s.x(t.x), t.y + i / 2), t.y += i + e.footerSpacing
                        }
                    },
                    drawBackground: function (t, e, n, i) {
                        n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth;
                        var a = e.xAlign,
                            r = e.yAlign,
                            o = t.x,
                            s = t.y,
                            l = i.width,
                            u = i.height,
                            d = e.cornerRadius;
                        n.beginPath(), n.moveTo(o + d, s), "top" === r && this.drawCaret(t, i), n.lineTo(o + l - d, s), n.quadraticCurveTo(o + l, s, o + l, s + d), "center" === r && "right" === a && this.drawCaret(t, i), n.lineTo(o + l, s + u - d), n.quadraticCurveTo(o + l, s + u, o + l - d, s + u), "bottom" === r && this.drawCaret(t, i), n.lineTo(o + d, s + u), n.quadraticCurveTo(o, s + u, o, s + u - d), "center" === r && "left" === a && this.drawCaret(t, i), n.lineTo(o, s + d), n.quadraticCurveTo(o, s, o + d, s), n.closePath(), n.fill(), 0 < e.borderWidth && n.stroke()
                    },
                    draw: function () {
                        var t = this._chart.ctx,
                            e = this._view;
                        if (0 !== e.opacity) {
                            var n = {
                                    width: e.width,
                                    height: e.height
                                },
                                i = {
                                    x: e.x,
                                    y: e.y
                                },
                                a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                            this._options.enabled && r && (t.save(), t.globalAlpha = a, this.drawBackground(i, e, t, n), i.y += e.yPadding, j.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), j.rtl.restoreTextDirection(t, e.textDirection), t.restore())
                        }
                    },
                    handleEvent: function (t) {
                        var e, n = this,
                            i = n._options;
                        return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), i.reverse && n._active.reverse()), (e = !j.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                            x: t.x,
                            y: t.y
                        }, n.update(!0), n.pivot())), e
                    }
                }),
                Ze = Ee,
                $e = qe;
            $e.positioners = Ze;
            var Xe = j.valueOrDefault;

            function Ke() {
                return j.merge({}, [].slice.call(arguments), {
                    merger: function (t, e, n, i) {
                        if ("xAxes" === t || "yAxes" === t) {
                            var a, r, o, s = n[t].length;
                            for (e[t] || (e[t] = []), a = 0; a < s; ++a) o = n[t][a], r = Xe(o.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || o.type && o.type !== e[t][a].type ? j.merge(e[t][a], [Ne.getScaleDefaults(r), o]) : j.merge(e[t][a], o)
                        } else j._merger(t, e, n, i)
                    }
                })
            }

            function Je() {
                return j.merge({}, [].slice.call(arguments), {
                    merger: function (t, e, n, i) {
                        var a = e[t] || {},
                            r = n[t];
                        "scales" === t ? e[t] = Ke(a, r) : "scale" === t ? e[t] = j.merge(a, [Ne.getScaleDefaults(r.type), r]) : j._merger(t, e, n, i)
                    }
                })
            }

            function Qe(t, e, n) {
                for (var i, a = function (t) {
                        return t.id === i
                    }; i = e + n++, 0 <= j.findIndex(t, a););
                return i
            }

            function tn(t) {
                return "top" === t || "bottom" === t
            }

            function en(n, i) {
                return function (t, e) {
                    return t[n] === e[n] ? t[i] - e[i] : t[n] - e[n]
                }
            }
            z._set("global", {
                elements: {},
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: "nearest",
                    intersect: !0,
                    animationDuration: 400
                },
                onClick: null,
                maintainAspectRatio: !0,
                responsive: !0,
                responsiveAnimationDuration: 0
            });

            function nn(t, e) {
                return this.construct(t, e), this
            }
            j.extend(nn.prototype, {
                construct: function (t, e) {
                    var n, i, a = this;
                    (i = (n = (n = e) || {}).data = n.data || {}).datasets = i.datasets || [], i.labels = i.labels || [], n.options = Je(z.global, z[n.type], n.options || {}), e = n;
                    var r = Re.acquireContext(t, e),
                        o = r && r.canvas,
                        s = o && o.height,
                        l = o && o.width;
                    a.id = j.uid(), a.ctx = r, a.canvas = o, a.config = e, a.width = l, a.height = s, a.aspectRatio = s ? l / s : null, a.options = e.options, a._bufferedRender = !1, a._layers = [], (a.chart = a).controller = a, nn.instances[a.id] = a, Object.defineProperty(a, "data", {
                        get: function () {
                            return a.config.data
                        },
                        set: function (t) {
                            a.config.data = t
                        }
                    }), r && o ? (a.initialize(), a.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                },
                initialize: function () {
                    var t = this;
                    return We.notify(t, "beforeInit"), j.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), We.notify(t, "afterInit"), t
                },
                clear: function () {
                    return j.canvas.clear(this), this
                },
                stop: function () {
                    return tt.cancelAnimation(this), this
                },
                resize: function (t) {
                    var e = this,
                        n = e.options,
                        i = e.canvas,
                        a = n.maintainAspectRatio && e.aspectRatio || null,
                        r = Math.max(0, Math.floor(j.getMaximumWidth(i))),
                        o = Math.max(0, Math.floor(a ? r / a : j.getMaximumHeight(i)));
                    if ((e.width !== r || e.height !== o) && (i.width = e.width = r, i.height = e.height = o, i.style.width = r + "px", i.style.height = o + "px", j.retinaScale(e, n.devicePixelRatio), !t)) {
                        var s = {
                            width: r,
                            height: o
                        };
                        We.notify(e, "resize", [s]), n.onResize && n.onResize(e, s), e.stop(), e.update({
                            duration: n.responsiveAnimationDuration
                        })
                    }
                },
                ensureScalesHaveIDs: function () {
                    var t = this.options,
                        n = t.scales || {},
                        e = t.scale;
                    j.each(n.xAxes, function (t, e) {
                        t.id || (t.id = Qe(n.xAxes, "x-axis-", e))
                    }), j.each(n.yAxes, function (t, e) {
                        t.id || (t.id = Qe(n.yAxes, "y-axis-", e))
                    }), e && (e.id = e.id || "scale")
                },
                buildOrUpdateScales: function () {
                    var o = this,
                        t = o.options,
                        s = o.scales || {},
                        e = [],
                        l = Object.keys(s).reduce(function (t, e) {
                            return t[e] = !1, t
                        }, {});
                    t.scales && (e = e.concat((t.scales.xAxes || []).map(function (t) {
                        return {
                            options: t,
                            dtype: "category",
                            dposition: "bottom"
                        }
                    }), (t.scales.yAxes || []).map(function (t) {
                        return {
                            options: t,
                            dtype: "linear",
                            dposition: "left"
                        }
                    }))), t.scale && e.push({
                        options: t.scale,
                        dtype: "radialLinear",
                        isDefault: !0,
                        dposition: "chartArea"
                    }), j.each(e, function (t) {
                        var e = t.options,
                            n = e.id,
                            i = Xe(e.type, t.dtype);
                        tn(e.position) !== tn(t.dposition) && (e.position = t.dposition), l[n] = !0;
                        var a = null;
                        if (n in s && s[n].type === i)(a = s[n]).options = e, a.ctx = o.ctx, a.chart = o;
                        else {
                            var r = Ne.getScaleConstructor(i);
                            if (!r) return;
                            a = new r({
                                id: n,
                                type: i,
                                options: e,
                                ctx: o.ctx,
                                chart: o
                            }), s[a.id] = a
                        }
                        a.mergeTicksOptions(), t.isDefault && (o.scale = a)
                    }), j.each(l, function (t, e) {
                        t || delete s[e]
                    }), o.scales = s, Ne.addScalesToLayout(this)
                },
                buildOrUpdateControllers: function () {
                    var t, e, n = this,
                        i = [],
                        a = n.data.datasets;
                    for (t = 0, e = a.length; t < e; t++) {
                        var r = a[t],
                            o = n.getDatasetMeta(t),
                            s = r.type || n.config.type;
                        if (o.type && o.type !== s && (n.destroyDatasetMeta(t), o = n.getDatasetMeta(t)), o.type = s, o.order = r.order || 0, o.index = t, o.controller) o.controller.updateIndex(t), o.controller.linkScales();
                        else {
                            var l = Jt[o.type];
                            if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
                            o.controller = new l(n, t), i.push(o.controller)
                        }
                    }
                    return i
                },
                resetElements: function () {
                    var n = this;
                    j.each(n.data.datasets, function (t, e) {
                        n.getDatasetMeta(e).controller.reset()
                    }, n)
                },
                reset: function () {
                    this.resetElements(), this.tooltip.initialize()
                },
                update: function (t) {
                    var e, n, i, a, r = this;
                    if (t && "object" == typeof t || (t = {
                            duration: t,
                            lazy: arguments[1]
                        }), a = (i = r).options, j.each(i.scales, function (t) {
                            pe.removeBox(i, t)
                        }), a = Je(z.global, z[i.config.type], a), i.options = i.config.options = a, i.ensureScalesHaveIDs(), i.buildOrUpdateScales(), i.tooltip._options = a.tooltips, i.tooltip.initialize(), We._invalidate(r), !1 !== We.notify(r, "beforeUpdate")) {
                        r.tooltip._data = r.data;
                        var o = r.buildOrUpdateControllers();
                        for (e = 0, n = r.data.datasets.length; e < n; e++) r.getDatasetMeta(e).controller.buildOrUpdateElements();
                        r.updateLayout(), r.options.animation && r.options.animation.duration && j.each(o, function (t) {
                            t.reset()
                        }), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], We.notify(r, "afterUpdate"), r._layers.sort(en("z", "_idx")), r._bufferedRender ? r._bufferedRequest = {
                            duration: t.duration,
                            easing: t.easing,
                            lazy: t.lazy
                        } : r.render(t)
                    }
                },
                updateLayout: function () {
                    var e = this;
                    !1 !== We.notify(e, "beforeLayout") && (pe.update(this, this.width, this.height), e._layers = [], j.each(e.boxes, function (t) {
                        t._configure && t._configure(), e._layers.push.apply(e._layers, t._layers())
                    }, e), e._layers.forEach(function (t, e) {
                        t._idx = e
                    }), We.notify(e, "afterScaleUpdate"), We.notify(e, "afterLayout"))
                },
                updateDatasets: function () {
                    if (!1 !== We.notify(this, "beforeDatasetsUpdate")) {
                        for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                        We.notify(this, "afterDatasetsUpdate")
                    }
                },
                updateDataset: function (t) {
                    var e = this.getDatasetMeta(t),
                        n = {
                            meta: e,
                            index: t
                        };
                    !1 !== We.notify(this, "beforeDatasetUpdate", [n]) && (e.controller._update(), We.notify(this, "afterDatasetUpdate", [n]))
                },
                render: function (t) {
                    var e = this;
                    t && "object" == typeof t || (t = {
                        duration: t,
                        lazy: arguments[1]
                    });
                    var n = e.options.animation,
                        i = Xe(t.duration, n && n.duration),
                        a = t.lazy;
                    if (!1 !== We.notify(e, "beforeRender")) {
                        var r = function (t) {
                            We.notify(e, "afterRender"), j.callback(n && n.onComplete, [t], e)
                        };
                        if (n && i) {
                            var o = new Q({
                                numSteps: i / 16.66,
                                easing: t.easing || n.easing,
                                render: function (t, e) {
                                    var n = j.easing.effects[e.easing],
                                        i = e.currentStep,
                                        a = i / e.numSteps;
                                    t.draw(n(a), a, i)
                                },
                                onAnimationProgress: n.onProgress,
                                onAnimationComplete: r
                            });
                            tt.addAnimation(e, o, i, a)
                        } else e.draw(), r(new Q({
                            numSteps: 0,
                            chart: e
                        }));
                        return e
                    }
                },
                draw: function (t) {
                    var e, n, i = this;
                    if (i.clear(), j.isNullOrUndef(t) && (t = 1), i.transition(t), !(i.width <= 0 || i.height <= 0) && !1 !== We.notify(i, "beforeDraw", [t])) {
                        for (n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(i.chartArea);
                        for (i.drawDatasets(t); e < n.length; ++e) n[e].draw(i.chartArea);
                        i._drawTooltip(t), We.notify(i, "afterDraw", [t])
                    }
                },
                transition: function (t) {
                    for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                    this.tooltip.transition(t)
                },
                _getSortedDatasetMetas: function (t) {
                    var e, n, i = [];
                    for (e = 0, n = (this.data.datasets || []).length; e < n; ++e) t && !this.isDatasetVisible(e) || i.push(this.getDatasetMeta(e));
                    return i.sort(en("order", "index")), i
                },
                _getSortedVisibleDatasetMetas: function () {
                    return this._getSortedDatasetMetas(!0)
                },
                drawDatasets: function (t) {
                    var e, n;
                    if (!1 !== We.notify(this, "beforeDatasetsDraw", [t])) {
                        for (n = (e = this._getSortedVisibleDatasetMetas()).length - 1; 0 <= n; --n) this.drawDataset(e[n], t);
                        We.notify(this, "afterDatasetsDraw", [t])
                    }
                },
                drawDataset: function (t, e) {
                    var n = {
                        meta: t,
                        index: t.index,
                        easingValue: e
                    };
                    !1 !== We.notify(this, "beforeDatasetDraw", [n]) && (t.controller.draw(e), We.notify(this, "afterDatasetDraw", [n]))
                },
                _drawTooltip: function (t) {
                    var e = this.tooltip,
                        n = {
                            tooltip: e,
                            easingValue: t
                        };
                    !1 !== We.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), We.notify(this, "afterTooltipDraw", [n]))
                },
                getElementAtEvent: function (t) {
                    return re.modes.single(this, t)
                },
                getElementsAtEvent: function (t) {
                    return re.modes.label(this, t, {
                        intersect: !0
                    })
                },
                getElementsAtXAxis: function (t) {
                    return re.modes["x-axis"](this, t, {
                        intersect: !0
                    })
                },
                getElementsAtEventForMode: function (t, e, n) {
                    var i = re.modes[e];
                    return "function" == typeof i ? i(this, t, n) : []
                },
                getDatasetAtEvent: function (t) {
                    return re.modes.dataset(this, t, {
                        intersect: !0
                    })
                },
                getDatasetMeta: function (t) {
                    var e = this.data.datasets[t];
                    e._meta || (e._meta = {});
                    var n = e._meta[this.id];
                    return n = n || (e._meta[this.id] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: e.order || 0,
                        index: t
                    })
                },
                getVisibleDatasetCount: function () {
                    for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
                    return t
                },
                isDatasetVisible: function (t) {
                    var e = this.getDatasetMeta(t);
                    return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                },
                generateLegend: function () {
                    return this.options.legendCallback(this)
                },
                destroyDatasetMeta: function (t) {
                    var e = this.id,
                        n = this.data.datasets[t],
                        i = n._meta && n._meta[e];
                    i && (i.controller.destroy(), delete n._meta[e])
                },
                destroy: function () {
                    var t, e, n = this,
                        i = n.canvas;
                    for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) n.destroyDatasetMeta(t);
                    i && (n.unbindEvents(), j.canvas.clear(n), Re.releaseContext(n.ctx), n.canvas = null, n.ctx = null), We.notify(n, "destroy"), delete nn.instances[n.id]
                },
                toBase64Image: function () {
                    return this.canvas.toDataURL.apply(this.canvas, arguments)
                },
                initToolTip: function () {
                    var t = this;
                    t.tooltip = new $e({
                        _chart: t,
                        _chartInstance: t,
                        _data: t.data,
                        _options: t.options.tooltips
                    }, t)
                },
                bindEvents: function () {
                    var e = this,
                        n = e._listeners = {},
                        i = function () {
                            e.eventHandler.apply(e, arguments)
                        };
                    j.each(e.options.events, function (t) {
                        Re.addEventListener(e, t, i), n[t] = i
                    }), e.options.responsive && (i = function () {
                        e.resize()
                    }, Re.addEventListener(e, "resize", i), n.resize = i)
                },
                unbindEvents: function () {
                    var n = this,
                        t = n._listeners;
                    t && (delete n._listeners, j.each(t, function (t, e) {
                        Re.removeEventListener(n, e, t)
                    }))
                },
                updateHoverStyle: function (t, e, n) {
                    var i, a, r, o = n ? "set" : "remove";
                    for (a = 0, r = t.length; a < r; ++a)(i = t[a]) && this.getDatasetMeta(i._datasetIndex).controller[o + "HoverStyle"](i);
                    "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"]()
                },
                eventHandler: function (t) {
                    var e = this,
                        n = e.tooltip;
                    if (!1 !== We.notify(e, "beforeEvent", [t])) {
                        e._bufferedRender = !0, e._bufferedRequest = null;
                        var i = e.handleEvent(t);
                        n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), We.notify(e, "afterEvent", [t]);
                        var a = e._bufferedRequest;
                        return a ? e.render(a) : i && !e.animating && (e.stop(), e.render({
                            duration: e.options.hover.animationDuration,
                            lazy: !0
                        })), e._bufferedRender = !1, e._bufferedRequest = null, e
                    }
                },
                handleEvent: function (t) {
                    var e, n = this,
                        i = n.options || {},
                        a = i.hover;
                    return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, a.mode, a), j.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1), n.active.length && a.mode && n.updateHoverStyle(n.active, a.mode, !0), e = !j.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e
                }
            }), nn.instances = {};
            var an = nn;
            (nn.Controller = nn).types = {}, j.configMerge = Je, j.scaleMerge = Ke;

            function rn() {
                throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
            }

            function on(t) {
                this.options = t || {}
            }
            j.extend(on.prototype, {
                formats: rn,
                parse: rn,
                format: rn,
                add: rn,
                diff: rn,
                startOf: rn,
                endOf: rn,
                _create: function (t) {
                    return t
                }
            }), on.override = function (t) {
                j.extend(on.prototype, t)
            };
            var sn = {
                    _date: on
                },
                ln = {
                    formatters: {
                        values: function (t) {
                            return j.isArray(t) ? t : "" + t
                        },
                        linear: function (t, e, n) {
                            var i = 3 < n.length ? n[2] - n[1] : n[1] - n[0];
                            1 < Math.abs(i) && t !== Math.floor(t) && (i = t - Math.floor(t));
                            var a = j.log10(Math.abs(i)),
                                r = "";
                            if (0 !== t)
                                if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                                    var o = j.log10(Math.abs(t)),
                                        s = Math.floor(o) - Math.floor(a);
                                    s = Math.max(Math.min(s, 20), 0), r = t.toExponential(s)
                                } else {
                                    var l = -1 * Math.floor(a);
                                    l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l)
                                }
                            else r = "0";
                            return r
                        },
                        logarithmic: function (t, e, n) {
                            var i = t / Math.pow(10, Math.floor(j.log10(t)));
                            return 0 === t ? "0" : 1 == i || 2 == i || 5 == i || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                        }
                    }
                },
                un = j.isArray,
                dn = j.isNullOrUndef,
                hn = j.valueOrDefault,
                cn = j.valueAtIndexOrDefault;

            function fn(t, e, n) {
                var i, a = t.getTicks().length,
                    r = Math.min(e, a - 1),
                    o = t.getPixelForTick(r),
                    s = t._startPixel,
                    l = t._endPixel;
                if (!(n && (i = 1 === a ? Math.max(o - s, l - o) : 0 === e ? (t.getPixelForTick(1) - o) / 2 : (o - t.getPixelForTick(r - 1)) / 2, (o += r < e ? i : -i) < s - 1e-6 || l + 1e-6 < o))) return o
            }

            function gn(t, e, n, i) {
                var a, r, o, s, l, u, d, h, c, f, g, m, p, v, b, y = n.length,
                    x = [],
                    _ = [],
                    w = [];
                for (a = 0; a < y; ++a) {
                    if (s = n[a].label, l = n[a].major ? e.major : e.minor, t.font = u = l.string, d = i[u] = i[u] || {
                            data: {},
                            gc: []
                        }, h = l.lineHeight, c = f = 0, dn(s) || un(s)) {
                        if (un(s))
                            for (r = 0, o = s.length; r < o; ++r) g = s[r], dn(g) || un(g) || (c = j.measureText(t, d.data, d.gc, c, g), f += h)
                    } else c = j.measureText(t, d.data, d.gc, c, s), f = h;
                    x.push(c), _.push(f), w.push(h / 2)
                }

                function k(t) {
                    return {
                        width: x[t] || 0,
                        height: _[t] || 0,
                        offset: w[t] || 0
                    }
                }
                return v = i, b = y, j.each(v, function (t) {
                    var e, n = t.gc,
                        i = n.length / 2;
                    if (b < i) {
                        for (e = 0; e < i; ++e) delete t.data[n[e]];
                        n.splice(0, i)
                    }
                }), m = x.indexOf(Math.max.apply(null, x)), p = _.indexOf(Math.max.apply(null, _)), {
                    first: k(0),
                    last: k(y - 1),
                    widest: k(m),
                    highest: k(p)
                }
            }

            function mn(t) {
                return t.drawTicks ? t.tickMarkLength : 0
            }

            function pn(t) {
                var e, n;
                return t.display ? (e = j.options._parseFont(t), n = j.options.toPadding(t.padding), e.lineHeight + n.height) : 0
            }

            function vn(t, e) {
                return j.extend(j.options._parseFont({
                    fontFamily: hn(e.fontFamily, t.fontFamily),
                    fontSize: hn(e.fontSize, t.fontSize),
                    fontStyle: hn(e.fontStyle, t.fontStyle),
                    lineHeight: hn(e.lineHeight, t.lineHeight)
                }), {
                    color: j.options.resolve([e.fontColor, t.fontColor, z.global.defaultFontColor])
                })
            }

            function bn(t) {
                var e = vn(t, t.minor);
                return {
                    minor: e,
                    major: t.major.enabled ? vn(t, t.major) : e
                }
            }

            function yn(t) {
                var e, n, i, a = [];
                for (n = 0, i = t.length; n < i; ++n) void 0 !== (e = t[n])._index && a.push(e);
                return a
            }

            function xn(t, e, n, i) {
                var a, r, o, s, l = function (t) {
                        var e, n, i = t.length;
                        if (i < 2) return !1;
                        for (n = t[0], e = 1; e < i; ++e)
                            if (t[e] - t[e - 1] !== n) return !1;
                        return n
                    }(t),
                    u = (e.length - 1) / i;
                if (!l) return Math.max(u, 1);
                for (o = 0, s = (a = j.math._factorize(l)).length - 1; o < s; o++)
                    if (u < (r = a[o])) return r;
                return Math.max(u, 1)
            }

            function _n(t, e, n, i) {
                var a, r, o, s, l = hn(n, 0),
                    u = Math.min(hn(i, t.length), t.length),
                    d = 0;
                for (e = Math.ceil(e), i && (e = (a = i - n) / Math.floor(a / e)), s = l; s < 0;) d++, s = Math.round(l + d * e);
                for (r = Math.max(l, 0); r < u; r++) o = t[r], r === s ? (o._index = r, d++, s = Math.round(l + d * e)) : delete o.label
            }
            z._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0,0,0,0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    display: !1,
                    labelString: "",
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: ln.formatters.values,
                    minor: {},
                    major: {}
                }
            });
            var wn = K.extend({
                zeroLineIndex: 0,
                getPadding: function () {
                    return {
                        left: this.paddingLeft || 0,
                        top: this.paddingTop || 0,
                        right: this.paddingRight || 0,
                        bottom: this.paddingBottom || 0
                    }
                },
                getTicks: function () {
                    return this._ticks
                },
                _getLabels: function () {
                    var t = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                },
                mergeTicksOptions: function () {},
                beforeUpdate: function () {
                    j.callback(this.options.beforeUpdate, [this])
                },
                update: function (t, e, n) {
                    var i, a, r, o, s, l = this,
                        u = l.options.ticks,
                        d = u.sampleSize;
                    if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = j.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, n), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), o = l.buildTicks() || [], (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
                        for (o = [], i = 0, a = l.ticks.length; i < a; ++i) o.push({
                            value: l.ticks[i],
                            major: !1
                        });
                    return s = d < (l._ticks = o).length, r = l._convertTicksToLabels(s ? function (t, e) {
                        for (var n = [], i = t.length / e, a = 0, r = t.length; a < r; a += i) n.push(t[Math.floor(a)]);
                        return n
                    }(o, d) : o), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(o) : o, s && (r = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = r, l.afterUpdate(), l.minSize
                },
                _configure: function () {
                    var t, e, n = this,
                        i = n.options.ticks.reverse;
                    n.isHorizontal() ? (t = n.left, e = n.right) : (t = n.top, e = n.bottom, i = !i), n._startPixel = t, n._endPixel = e, n._reversePixels = i, n._length = e - t
                },
                afterUpdate: function () {
                    j.callback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function () {
                    j.callback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                },
                afterSetDimensions: function () {
                    j.callback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function () {
                    j.callback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: j.noop,
                afterDataLimits: function () {
                    j.callback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function () {
                    j.callback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: j.noop,
                afterBuildTicks: function (t) {
                    var e = this;
                    return un(t) && t.length ? j.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = j.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
                },
                beforeTickToLabelConversion: function () {
                    j.callback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function () {
                    var t = this.options.ticks;
                    this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                },
                afterTickToLabelConversion: function () {
                    j.callback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function () {
                    j.callback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function () {
                    var t, e, n, i, a, r, o, s = this,
                        l = s.options,
                        u = l.ticks,
                        d = s.getTicks().length,
                        h = u.minRotation || 0,
                        c = u.maxRotation,
                        f = h;
                    !s._isVisible() || !u.display || c <= h || d <= 1 || !s.isHorizontal() ? s.labelRotation = h : (e = (t = s._getLabelSizes()).widest.width, n = t.highest.height - t.highest.offset, i = Math.min(s.maxWidth, s.chart.width - e), (a = l.offset ? s.maxWidth / d : i / (d - 1)) < e + 6 && (a = i / (d - (l.offset ? .5 : 1)), r = s.maxHeight - mn(l.gridLines) - u.padding - pn(l.scaleLabel), o = Math.sqrt(e * e + n * n), f = j.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / a, 1)), Math.asin(Math.min(r / o, 1)) - Math.asin(n / o))), f = Math.max(h, Math.min(c, f))), s.labelRotation = f)
                },
                afterCalculateTickRotation: function () {
                    j.callback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function () {
                    j.callback(this.options.beforeFit, [this])
                },
                fit: function () {
                    var t = this,
                        e = t.minSize = {
                            width: 0,
                            height: 0
                        },
                        n = t.chart,
                        i = t.options,
                        a = i.ticks,
                        r = i.scaleLabel,
                        o = i.gridLines,
                        s = t._isVisible(),
                        l = "bottom" === i.position,
                        u = t.isHorizontal();
                    if (u ? e.width = t.maxWidth : s && (e.width = mn(o) + pn(r)), u ? s && (e.height = mn(o) + pn(r)) : e.height = t.maxHeight, a.display && s) {
                        var d = bn(a),
                            h = t._getLabelSizes(),
                            c = h.first,
                            f = h.last,
                            g = h.widest,
                            m = h.highest,
                            p = .4 * d.minor.lineHeight,
                            v = a.padding;
                        if (u) {
                            var b = 0 !== t.labelRotation,
                                y = j.toRadians(t.labelRotation),
                                x = Math.cos(y),
                                _ = Math.sin(y),
                                w = _ * g.width + x * (m.height - (b ? m.offset : 0)) + (b ? 0 : p);
                            e.height = Math.min(t.maxHeight, e.height + w + v);
                            var k, M, S = t.getPixelForTick(0) - t.left,
                                D = t.right - t.getPixelForTick(t.getTicks().length - 1);
                            M = b ? (k = l ? x * c.width + _ * c.offset : _ * (c.height - c.offset), l ? _ * (f.height - f.offset) : x * f.width + _ * f.offset) : (k = c.width / 2, f.width / 2), t.paddingLeft = Math.max((k - S) * t.width / (t.width - S), 0) + 3, t.paddingRight = Math.max((M - D) * t.width / (t.width - D), 0) + 3
                        } else {
                            var C = a.mirror ? 0 : g.width + v + p;
                            e.width = Math.min(t.maxWidth, e.width + C), t.paddingTop = c.height / 2, t.paddingBottom = f.height / 2
                        }
                    }
                    t.handleMargins(), u ? (t.width = t._length = n.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t.margins.top - t.margins.bottom)
                },
                handleMargins: function () {
                    var t = this;
                    t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom))
                },
                afterFit: function () {
                    j.callback(this.options.afterFit, [this])
                },
                isHorizontal: function () {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                isFullWidth: function () {
                    return this.options.fullWidth
                },
                getRightValue: function (t) {
                    if (dn(t)) return NaN;
                    if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
                    if (t)
                        if (this.isHorizontal()) {
                            if (void 0 !== t.x) return this.getRightValue(t.x)
                        } else if (void 0 !== t.y) return this.getRightValue(t.y);
                    return t
                },
                _convertTicksToLabels: function (t) {
                    var e, n, i, a = this;
                    for (a.ticks = t.map(function (t) {
                            return t.value
                        }), a.beforeTickToLabelConversion(), e = a.convertTicksToLabels(t) || a.ticks, a.afterTickToLabelConversion(), n = 0, i = t.length; n < i; ++n) t[n].label = e[n];
                    return e
                },
                _getLabelSizes: function () {
                    var t = this,
                        e = t._labelSizes;
                    return e || (t._labelSizes = e = gn(t.ctx, bn(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e
                },
                _parseValue: function (t) {
                    var e, n, i, a;
                    return a = un(t) ? (e = +this.getRightValue(t[0]), n = +this.getRightValue(t[1]), i = Math.min(e, n), Math.max(e, n)) : (e = void 0, i = n = t = +this.getRightValue(t)), {
                        min: i,
                        max: a,
                        start: e,
                        end: n
                    }
                },
                _getScaleLabel: function (t) {
                    var e = this._parseValue(t);
                    return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t)
                },
                getLabelForIndex: j.noop,
                getPixelForValue: j.noop,
                getValueForPixel: j.noop,
                getPixelForTick: function (t) {
                    var e = this.options.offset,
                        n = this._ticks.length,
                        i = 1 / Math.max(n - (e ? 0 : 1), 1);
                    return t < 0 || n - 1 < t ? null : this.getPixelForDecimal(t * i + (e ? i / 2 : 0))
                },
                getPixelForDecimal: function (t) {
                    return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length
                },
                getDecimalForPixel: function (t) {
                    var e = (t - this._startPixel) / this._length;
                    return this._reversePixels ? 1 - e : e
                },
                getBasePixel: function () {
                    return this.getPixelForValue(this.getBaseValue())
                },
                getBaseValue: function () {
                    var t = this.min,
                        e = this.max;
                    return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0
                },
                _autoSkip: function (t) {
                    var e, n, i, a, r = this.options.ticks,
                        o = this._length,
                        s = r.maxTicksLimit || o / this._tickSize() + 1,
                        l = r.major.enabled ? function (t) {
                            var e, n, i = [];
                            for (e = 0, n = t.length; e < n; e++) t[e].major && i.push(e);
                            return i
                        }(t) : [],
                        u = l.length,
                        d = l[0],
                        h = l[u - 1];
                    if (s < u) return function (t, e, n) {
                        var i, a, r = 0,
                            o = e[0];
                        for (n = Math.ceil(n), i = 0; i < t.length; i++) a = t[i], i === o ? (a._index = i, o = e[++r * n]) : delete a.label
                    }(t, l, u / s), yn(t);
                    if (i = xn(l, t, 0, s), 0 < u) {
                        for (e = 0, n = u - 1; e < n; e++) _n(t, i, l[e], l[e + 1]);
                        return a = 1 < u ? (h - d) / (u - 1) : null, _n(t, i, j.isNullOrUndef(a) ? 0 : d - a, d), _n(t, i, h, j.isNullOrUndef(a) ? t.length : h + a), yn(t)
                    }
                    return _n(t, i), yn(t)
                },
                _tickSize: function () {
                    var t = this.options.ticks,
                        e = j.toRadians(this.labelRotation),
                        n = Math.abs(Math.cos(e)),
                        i = Math.abs(Math.sin(e)),
                        a = this._getLabelSizes(),
                        r = t.autoSkipPadding || 0,
                        o = a ? a.widest.width + r : 0,
                        s = a ? a.highest.height + r : 0;
                    return this.isHorizontal() ? o * i < s * n ? o / n : s / i : s * i < o * n ? s / n : o / i
                },
                _isVisible: function () {
                    var t, e, n, i = this.chart,
                        a = this.options.display;
                    if ("auto" !== a) return !!a;
                    for (t = 0, e = i.data.datasets.length; t < e; ++t)
                        if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
                    return !1
                },
                _computeGridLineItems: function (t) {
                    function e(t) {
                        return F(x, t, O)
                    }
                    var n, i, a, r, o, s, l, u, d, h, c, f, g, m, p, v, b, y = this,
                        x = y.chart,
                        _ = y.options,
                        w = _.gridLines,
                        k = _.position,
                        M = w.offsetGridLines,
                        S = y.isHorizontal(),
                        D = y._ticksToDraw,
                        C = D.length + (M ? 1 : 0),
                        P = mn(w),
                        T = [],
                        O = w.drawBorder ? cn(w.lineWidth, 0, 0) : 0,
                        A = O / 2,
                        F = j._alignPixel;
                    for ("top" === k ? (n = e(y.bottom), l = y.bottom - P, d = n - A, c = e(t.top) + A, g = t.bottom) : "bottom" === k ? (n = e(y.top), c = t.top, g = e(t.bottom) - A, l = n + A, d = y.top + P) : "left" === k ? (n = e(y.right), s = y.right - P, u = n - A, h = e(t.left) + A, f = t.right) : (n = e(y.left), h = t.left, f = e(t.right) - A, s = n + A, u = y.left + P), i = 0; i < C; ++i) a = D[i] || {}, dn(a.label) && i < D.length || (b = i === y.zeroLineIndex && _.offset === M ? (m = w.zeroLineWidth, p = w.zeroLineColor, v = w.zeroLineBorderDash || [], w.zeroLineBorderDashOffset || 0) : (m = cn(w.lineWidth, i, 1), p = cn(w.color, i, "rgba(0,0,0,0.1)"), v = w.borderDash || [], w.borderDashOffset || 0), void 0 !== (r = fn(y, a._index || i, M)) && (o = F(x, r, m), S ? s = u = h = f = o : l = d = c = g = o, T.push({
                        tx1: s,
                        ty1: l,
                        tx2: u,
                        ty2: d,
                        x1: h,
                        y1: c,
                        x2: f,
                        y2: g,
                        width: m,
                        color: p,
                        borderDash: v,
                        borderDashOffset: b
                    })));
                    return T.ticksLength = C, T.borderValue = n, T
                },
                _computeLabelItems: function () {
                    var t, e, n, i, a, r, o, s, l, u, d, h, c = this,
                        f = c.options,
                        g = f.ticks,
                        m = f.position,
                        p = g.mirror,
                        v = c.isHorizontal(),
                        b = c._ticksToDraw,
                        y = bn(g),
                        x = g.padding,
                        _ = mn(f.gridLines),
                        w = -j.toRadians(c.labelRotation),
                        k = [];
                    for (o = "top" === m ? (r = c.bottom - _ - x, w ? "left" : "center") : "bottom" === m ? (r = c.top + _ + x, w ? "right" : "center") : "left" === m ? (a = c.right - (p ? 0 : _) - x, p ? "left" : "right") : (a = c.left + (p ? 0 : _) + x, p ? "right" : "left"), t = 0, e = b.length; t < e; ++t) i = (n = b[t]).label, dn(i) || (s = c.getPixelForTick(n._index || t) + g.labelOffset, u = (l = n.major ? y.major : y.minor).lineHeight, d = un(i) ? i.length : 1, h = v ? (a = s, "top" === m ? ((w ? 1 : .5) - d) * u : (w ? 0 : .5) * u) : (r = s, (1 - d) * u / 2), k.push({
                        x: a,
                        y: r,
                        rotation: w,
                        label: i,
                        font: l,
                        textOffset: h,
                        textAlign: o
                    }));
                    return k
                },
                _drawGrid: function (t) {
                    var e = this,
                        n = e.options.gridLines;
                    if (n.display) {
                        var i, a, r, o, s, l = e.ctx,
                            u = e.chart,
                            d = j._alignPixel,
                            h = n.drawBorder ? cn(n.lineWidth, 0, 0) : 0,
                            c = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                        for (r = 0, o = c.length; r < o; ++r) i = (s = c[r]).width, a = s.color, i && a && (l.save(), l.lineWidth = i, l.strokeStyle = a, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
                        if (h) {
                            var f, g, m, p, v = h,
                                b = cn(n.lineWidth, c.ticksLength - 1, 1),
                                y = c.borderValue;
                            e.isHorizontal() ? (f = d(u, e.left, v) - v / 2, g = d(u, e.right, b) + b / 2, m = p = y) : (m = d(u, e.top, v) - v / 2, p = d(u, e.bottom, b) + b / 2, f = g = y), l.lineWidth = h, l.strokeStyle = cn(n.color, 0), l.beginPath(), l.moveTo(f, m), l.lineTo(g, p), l.stroke()
                        }
                    }
                },
                _drawLabels: function () {
                    var t = this;
                    if (t.options.ticks.display) {
                        var e, n, i, a, r, o, s, l, u = t.ctx,
                            d = t._labelItems || (t._labelItems = t._computeLabelItems());
                        for (e = 0, i = d.length; e < i; ++e) {
                            if (o = (r = d[e]).font, u.save(), u.translate(r.x, r.y), u.rotate(r.rotation), u.font = o.string, u.fillStyle = o.color, u.textBaseline = "middle", u.textAlign = r.textAlign, s = r.label, l = r.textOffset, un(s))
                                for (n = 0, a = s.length; n < a; ++n) u.fillText("" + s[n], 0, l), l += o.lineHeight;
                            else u.fillText(s, 0, l);
                            u.restore()
                        }
                    }
                },
                _drawTitle: function () {
                    var t = this,
                        e = t.ctx,
                        n = t.options,
                        i = n.scaleLabel;
                    if (i.display) {
                        var a, r, o = hn(i.fontColor, z.global.defaultFontColor),
                            s = j.options._parseFont(i),
                            l = j.options.toPadding(i.padding),
                            u = s.lineHeight / 2,
                            d = n.position,
                            h = 0;
                        if (t.isHorizontal()) a = t.left + t.width / 2, r = "bottom" === d ? t.bottom - u - l.bottom : t.top + u + l.top;
                        else {
                            var c = "left" === d;
                            a = c ? t.left + u + l.top : t.right - u - l.top, r = t.top + t.height / 2, h = c ? -.5 * Math.PI : .5 * Math.PI
                        }
                        e.save(), e.translate(a, r), e.rotate(h), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = o, e.font = s.string, e.fillText(i.labelString, 0, 0), e.restore()
                    }
                },
                draw: function (t) {
                    this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels())
                },
                _layers: function () {
                    var t = this,
                        e = t.options,
                        n = e.ticks && e.ticks.z || 0,
                        i = e.gridLines && e.gridLines.z || 0;
                    return t._isVisible() && n !== i && t.draw === t._draw ? [{
                        z: i,
                        draw: function () {
                            t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments)
                        }
                    }, {
                        z: n,
                        draw: function () {
                            t._drawLabels.apply(t, arguments)
                        }
                    }] : [{
                        z: n,
                        draw: function () {
                            t.draw.apply(t, arguments)
                        }
                    }]
                },
                _getMatchingVisibleMetas: function (e) {
                    var n = this,
                        i = n.isHorizontal();
                    return n.chart._getSortedVisibleDatasetMetas().filter(function (t) {
                        return (!e || t.type === e) && (i ? t.xAxisID === n.id : t.yAxisID === n.id)
                    })
                }
            });
            wn.prototype._draw = wn.prototype.draw;
            var kn = wn,
                Mn = j.isNullOrUndef,
                Sn = kn.extend({
                    determineDataLimits: function () {
                        var t, e = this,
                            n = e._getLabels(),
                            i = e.options.ticks,
                            a = i.min,
                            r = i.max,
                            o = 0,
                            s = n.length - 1;
                        void 0 !== a && 0 <= (t = n.indexOf(a)) && (o = t), void 0 !== r && 0 <= (t = n.indexOf(r)) && (s = t), e.minIndex = o, e.maxIndex = s, e.min = n[o], e.max = n[s]
                    },
                    buildTicks: function () {
                        var t = this._getLabels(),
                            e = this.minIndex,
                            n = this.maxIndex;
                        this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1)
                    },
                    getLabelForIndex: function (t, e) {
                        var n = this.chart;
                        return n.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(n.data.datasets[e].data[t]) : this._getLabels()[t]
                    },
                    _configure: function () {
                        var t = this,
                            e = t.options.offset,
                            n = t.ticks;
                        kn.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), n && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(n.length - (e ? 0 : 1), 1))
                    },
                    getPixelForValue: function (t, e, n) {
                        var i, a, r, o = this;
                        return Mn(e) || Mn(n) || (t = o.chart.data.datasets[n].data[e]), Mn(t) || (i = o.isHorizontal() ? t.x : t.y), (void 0 !== i || void 0 !== t && isNaN(e)) && (a = o._getLabels(), t = j.valueOrDefault(i, t), e = -1 !== (r = a.indexOf(t)) ? r : e, isNaN(e) && (e = t)), o.getPixelForDecimal((e - o._startValue) / o._valueRange)
                    },
                    getPixelForTick: function (t) {
                        var e = this.ticks;
                        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex)
                    },
                    getValueForPixel: function (t) {
                        var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
                        return Math.min(Math.max(e, 0), this.ticks.length - 1)
                    },
                    getBasePixel: function () {
                        return this.bottom
                    }
                }),
                Dn = {
                    position: "bottom"
                };
            Sn._defaults = Dn;
            var Cn = j.noop,
                Pn = j.isNullOrUndef;
            var Tn = kn.extend({
                    getRightValue: function (t) {
                        return "string" == typeof t ? +t : kn.prototype.getRightValue.call(this, t)
                    },
                    handleTickRangeOptions: function () {
                        var t = this,
                            e = t.options.ticks;
                        if (e.beginAtZero) {
                            var n = j.sign(t.min),
                                i = j.sign(t.max);
                            n < 0 && i < 0 ? t.max = 0 : 0 < n && 0 < i && (t.min = 0)
                        }
                        var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                            r = void 0 !== e.max || void 0 !== e.suggestedMax;
                        void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a != r && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                    },
                    getTickLimit: function () {
                        var t, e = this.options.ticks,
                            n = e.stepSize,
                            i = e.maxTicksLimit;
                        return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t
                    },
                    _computeTickLimit: function () {
                        return Number.POSITIVE_INFINITY
                    },
                    handleDirectionalChanges: Cn,
                    buildTicks: function () {
                        var t = this,
                            e = t.options.ticks,
                            n = t.getTickLimit(),
                            i = {
                                maxTicks: n = Math.max(2, n),
                                min: e.min,
                                max: e.max,
                                precision: e.precision,
                                stepSize: j.valueOrDefault(e.fixedStepSize, e.stepSize)
                            },
                            a = t.ticks = function (t, e) {
                                var n, i, a, r, o = [],
                                    s = t.stepSize,
                                    l = s || 1,
                                    u = t.maxTicks - 1,
                                    d = t.min,
                                    h = t.max,
                                    c = t.precision,
                                    f = e.min,
                                    g = e.max,
                                    m = j.niceNum((g - f) / u / l) * l;
                                if (m < 1e-14 && Pn(d) && Pn(h)) return [f, g];
                                u < (r = Math.ceil(g / m) - Math.floor(f / m)) && (m = j.niceNum(r * m / u / l) * l), s || Pn(c) ? n = Math.pow(10, j._decimalPlaces(m)) : (n = Math.pow(10, c), m = Math.ceil(m * n) / n), i = Math.floor(f / m) * m, a = Math.ceil(g / m) * m, s && (!Pn(d) && j.almostWhole(d / m, m / 1e3) && (i = d), !Pn(h) && j.almostWhole(h / m, m / 1e3) && (a = h)), r = (a - i) / m, r = j.almostEquals(r, Math.round(r), m / 1e3) ? Math.round(r) : Math.ceil(r), i = Math.round(i * n) / n, a = Math.round(a * n) / n, o.push(Pn(d) ? i : d);
                                for (var p = 1; p < r; ++p) o.push(Math.round((i + p * m) * n) / n);
                                return o.push(Pn(h) ? a : h), o
                            }(i, t);
                        t.handleDirectionalChanges(), t.max = j.max(a), t.min = j.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    },
                    convertTicksToLabels: function () {
                        var t = this;
                        t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), kn.prototype.convertTicksToLabels.call(t)
                    },
                    _configure: function () {
                        var t, e = this,
                            n = e.getTicks(),
                            i = e.min,
                            a = e.max;
                        kn.prototype._configure.call(e), e.options.offset && n.length && (i -= t = (a - i) / Math.max(n.length - 1, 1) / 2, a += t), e._startValue = i, e._endValue = a, e._valueRange = a - i
                    }
                }),
                On = {
                    position: "left",
                    ticks: {
                        callback: ln.formatters.linear
                    }
                };

            function An(t, e, n, i) {
                var a, r, o, s, l, u, d = t.options,
                    h = d.stacked,
                    c = (a = e, r = h, s = [(o = n).type, void 0 === r && void 0 === o.stack ? o.index : "", o.stack].join("."), void 0 === a[s] && (a[s] = {
                        pos: [],
                        neg: []
                    }), a[s]),
                    f = c.pos,
                    g = c.neg,
                    m = i.length;
                for (l = 0; l < m; ++l) u = t._parseValue(i[l]), isNaN(u.min) || isNaN(u.max) || n.data[l].hidden || (f[l] = f[l] || 0, g[l] = g[l] || 0, d.relativePoints ? f[l] = 100 : u.min < 0 || u.max < 0 ? g[l] += u.min : f[l] += u.max)
            }

            function Fn(t, e, n) {
                var i, a, r = n.length;
                for (i = 0; i < r; ++i) a = t._parseValue(n[i]), isNaN(a.min) || isNaN(a.max) || e.data[i].hidden || (t.min = Math.min(t.min, a.min), t.max = Math.max(t.max, a.max))
            }
            var In = Tn.extend({
                    determineDataLimits: function () {
                        var t, e, n, i, a = this,
                            r = a.options,
                            o = a.chart.data.datasets,
                            s = a._getMatchingVisibleMetas(),
                            l = r.stacked,
                            u = {},
                            d = s.length;
                        if (a.min = Number.POSITIVE_INFINITY, a.max = Number.NEGATIVE_INFINITY, void 0 === l)
                            for (t = 0; !l && t < d; ++t) l = void 0 !== (e = s[t]).stack;
                        for (t = 0; t < d; ++t) n = o[(e = s[t]).index].data, l ? An(a, u, e, n) : Fn(a, e, n);
                        j.each(u, function (t) {
                            i = t.pos.concat(t.neg), a.min = Math.min(a.min, j.min(i)), a.max = Math.max(a.max, j.max(i))
                        }), a.min = j.isFinite(a.min) && !isNaN(a.min) ? a.min : 0, a.max = j.isFinite(a.max) && !isNaN(a.max) ? a.max : 1, a.handleTickRangeOptions()
                    },
                    _computeTickLimit: function () {
                        var t;
                        return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = j.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight))
                    },
                    handleDirectionalChanges: function () {
                        this.isHorizontal() || this.ticks.reverse()
                    },
                    getLabelForIndex: function (t, e) {
                        return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                    },
                    getPixelForValue: function (t) {
                        return this.getPixelForDecimal((this.getRightValue(t) - this._startValue) / this._valueRange)
                    },
                    getValueForPixel: function (t) {
                        return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                    },
                    getPixelForTick: function (t) {
                        var e = this.ticksAsNumbers;
                        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                    }
                }),
                Ln = On;
            In._defaults = Ln;
            var Rn = j.valueOrDefault,
                Wn = j.math.log10;
            var Nn = {
                position: "left",
                ticks: {
                    callback: ln.formatters.logarithmic
                }
            };

            function Yn(t, e) {
                return j.isFinite(t) && 0 <= t ? t : e
            }
            var zn = kn.extend({
                    determineDataLimits: function () {
                        var t, e, n, i, a, r, o = this,
                            s = o.options,
                            l = o.chart,
                            u = l.data.datasets,
                            d = o.isHorizontal();

                        function h(t) {
                            return d ? t.xAxisID === o.id : t.yAxisID === o.id
                        }
                        o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, o.minNotZero = Number.POSITIVE_INFINITY;
                        var c = s.stacked;
                        if (void 0 === c)
                            for (t = 0; t < u.length; t++)
                                if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e) && void 0 !== e.stack) {
                                    c = !0;
                                    break
                                } if (s.stacked || c) {
                            var f = {};
                            for (t = 0; t < u.length; t++) {
                                var g = [(e = l.getDatasetMeta(t)).type, void 0 === s.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
                                if (l.isDatasetVisible(t) && h(e))
                                    for (void 0 === f[g] && (f[g] = []), a = 0, r = (i = u[t].data).length; a < r; a++) {
                                        var m = f[g];
                                        n = o._parseValue(i[a]), isNaN(n.min) || isNaN(n.max) || e.data[a].hidden || n.min < 0 || n.max < 0 || (m[a] = m[a] || 0, m[a] += n.max)
                                    }
                            }
                            j.each(f, function (t) {
                                if (0 < t.length) {
                                    var e = j.min(t),
                                        n = j.max(t);
                                    o.min = Math.min(o.min, e), o.max = Math.max(o.max, n)
                                }
                            })
                        } else
                            for (t = 0; t < u.length; t++)
                                if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e))
                                    for (a = 0, r = (i = u[t].data).length; a < r; a++) n = o._parseValue(i[a]), isNaN(n.min) || isNaN(n.max) || e.data[a].hidden || n.min < 0 || n.max < 0 || (o.min = Math.min(n.min, o.min), o.max = Math.max(n.max, o.max), 0 !== n.min && (o.minNotZero = Math.min(n.min, o.minNotZero)));
                        o.min = j.isFinite(o.min) ? o.min : null, o.max = j.isFinite(o.max) ? o.max : null, o.minNotZero = j.isFinite(o.minNotZero) ? o.minNotZero : null, this.handleTickRangeOptions()
                    },
                    handleTickRangeOptions: function () {
                        var t = this,
                            e = t.options.ticks;
                        t.min = Yn(e.min, t.min), t.max = Yn(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(Wn(t.min)) - 1), t.max = Math.pow(10, Math.floor(Wn(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(Wn(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(Wn(t.min)) + 1) : 10), null === t.minNotZero && (0 < t.min ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(Wn(t.max))) : t.minNotZero = 1)
                    },
                    buildTicks: function () {
                        var t = this,
                            e = t.options.ticks,
                            n = !t.isHorizontal(),
                            i = {
                                min: Yn(e.min),
                                max: Yn(e.max)
                            },
                            a = t.ticks = function (t, e) {
                                var n, i, a = [],
                                    r = Rn(t.min, Math.pow(10, Math.floor(Wn(e.min)))),
                                    o = Math.floor(Wn(e.max)),
                                    s = Math.ceil(e.max / Math.pow(10, o));
                                0 === r ? (n = Math.floor(Wn(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), a.push(r), r = i * Math.pow(10, n)) : (n = Math.floor(Wn(r)), i = Math.floor(r / Math.pow(10, n)));
                                for (var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1; a.push(r), 10 === ++i && (i = 1, l = 0 <= ++n ? 1 : l), r = Math.round(i * Math.pow(10, n) * l) / l, n < o || n === o && i < s;);
                                var u = Rn(t.max, r);
                                return a.push(u), a
                            }(i, t);
                        t.max = j.max(a), t.min = j.min(a), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && a.reverse()
                    },
                    convertTicksToLabels: function () {
                        this.tickValues = this.ticks.slice(), kn.prototype.convertTicksToLabels.call(this)
                    },
                    getLabelForIndex: function (t, e) {
                        return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                    },
                    getPixelForTick: function (t) {
                        var e = this.tickValues;
                        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                    },
                    _getFirstTickValue: function (t) {
                        var e = Math.floor(Wn(t));
                        return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                    },
                    _configure: function () {
                        var t = this,
                            e = t.min,
                            n = 0;
                        kn.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), n = Rn(t.options.ticks.fontSize, z.global.defaultFontSize) / t._length), t._startValue = Wn(e), t._valueOffset = n, t._valueRange = (Wn(t.max) - Wn(e)) / (1 - n)
                    },
                    getPixelForValue: function (t) {
                        var e = this,
                            n = 0;
                        return (t = +e.getRightValue(t)) > e.min && 0 < t && (n = (Wn(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(n)
                    },
                    getValueForPixel: function (t) {
                        var e = this,
                            n = e.getDecimalForPixel(t);
                        return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange)
                    }
                }),
                En = Nn;
            zn._defaults = En;
            var Vn = j.valueOrDefault,
                Bn = j.valueAtIndexOrDefault,
                Hn = j.options.resolve,
                jn = {
                    display: !0,
                    animate: !0,
                    position: "chartArea",
                    angleLines: {
                        display: !0,
                        color: "rgba(0,0,0,0.1)",
                        lineWidth: 1,
                        borderDash: [],
                        borderDashOffset: 0
                    },
                    gridLines: {
                        circular: !1
                    },
                    ticks: {
                        showLabelBackdrop: !0,
                        backdropColor: "rgba(255,255,255,0.75)",
                        backdropPaddingY: 2,
                        backdropPaddingX: 2,
                        callback: ln.formatters.linear
                    },
                    pointLabels: {
                        display: !0,
                        fontSize: 10,
                        callback: function (t) {
                            return t
                        }
                    }
                };

            function Un(t) {
                var e = t.ticks;
                return e.display && t.display ? Vn(e.fontSize, z.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
            }

            function Gn(t, e, n, i, a) {
                return t === i || t === a ? {
                    start: e - n / 2,
                    end: e + n / 2
                } : t < i || a < t ? {
                    start: e - n,
                    end: e
                } : {
                    start: e,
                    end: e + n
                }
            }

            function qn(t, e, n, i) {
                var a, r, o = n.y + i / 2;
                if (j.isArray(e))
                    for (a = 0, r = e.length; a < r; ++a) t.fillText(e[a], n.x, o), o += i;
                else t.fillText(e, n.x, o)
            }

            function Zn(t) {
                return j.isNumber(t) ? t : 0
            }
            var $n = Tn.extend({
                    setDimensions: function () {
                        var t = this;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Un(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
                    },
                    determineDataLimits: function () {
                        var a = this,
                            n = a.chart,
                            r = Number.POSITIVE_INFINITY,
                            o = Number.NEGATIVE_INFINITY;
                        j.each(n.data.datasets, function (t, e) {
                            if (n.isDatasetVisible(e)) {
                                var i = n.getDatasetMeta(e);
                                j.each(t.data, function (t, e) {
                                    var n = +a.getRightValue(t);
                                    isNaN(n) || i.data[e].hidden || (r = Math.min(n, r), o = Math.max(n, o))
                                })
                            }
                        }), a.min = r === Number.POSITIVE_INFINITY ? 0 : r, a.max = o === Number.NEGATIVE_INFINITY ? 0 : o, a.handleTickRangeOptions()
                    },
                    _computeTickLimit: function () {
                        return Math.ceil(this.drawingArea / Un(this.options))
                    },
                    convertTicksToLabels: function () {
                        var e = this;
                        Tn.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(function () {
                            var t = j.callback(e.options.pointLabels.callback, arguments, e);
                            return t || 0 === t ? t : ""
                        })
                    },
                    getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    fit: function () {
                        var t = this.options;
                        t.display && t.pointLabels.display ? function (t) {
                            var e, n, i, a = j.options._parseFont(t.options.pointLabels),
                                r = {
                                    l: 0,
                                    r: t.width,
                                    t: 0,
                                    b: t.height - t.paddingTop
                                },
                                o = {};
                            t.ctx.font = a.string, t._pointLabelSizes = [];
                            var s, l, u, d = t.chart.data.labels.length;
                            for (e = 0; e < d; e++) {
                                i = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, u = t.pointLabels[e], n = j.isArray(u) ? {
                                    w: j.longestText(s, s.font, u),
                                    h: u.length * l
                                } : {
                                    w: s.measureText(u).width,
                                    h: l
                                }, t._pointLabelSizes[e] = n;
                                var h = t.getIndexAngle(e),
                                    c = j.toDegrees(h) % 360,
                                    f = Gn(c, i.x, n.w, 0, 180),
                                    g = Gn(c, i.y, n.h, 90, 270);
                                f.start < r.l && (r.l = f.start, o.l = h), f.end > r.r && (r.r = f.end, o.r = h), g.start < r.t && (r.t = g.start, o.t = h), g.end > r.b && (r.b = g.end, o.b = h)
                            }
                            t.setReductions(t.drawingArea, r, o)
                        }(this) : this.setCenterPoint(0, 0, 0, 0)
                    },
                    setReductions: function (t, e, n) {
                        var i = this,
                            a = e.l / Math.sin(n.l),
                            r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                            o = -e.t / Math.cos(n.t),
                            s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
                        a = Zn(a), r = Zn(r), o = Zn(o), s = Zn(s), i.drawingArea = Math.min(Math.floor(t - (a + r) / 2), Math.floor(t - (o + s) / 2)), i.setCenterPoint(a, r, o, s)
                    },
                    setCenterPoint: function (t, e, n, i) {
                        var a = this,
                            r = a.width - e - a.drawingArea,
                            o = t + a.drawingArea,
                            s = n + a.drawingArea,
                            l = a.height - a.paddingTop - i - a.drawingArea;
                        a.xCenter = Math.floor((o + r) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop)
                    },
                    getIndexAngle: function (t) {
                        var e = this.chart,
                            n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
                        return (n < 0 ? 360 + n : n) * Math.PI * 2 / 360
                    },
                    getDistanceFromCenterForValue: function (t) {
                        var e = this;
                        if (j.isNullOrUndef(t)) return NaN;
                        var n = e.drawingArea / (e.max - e.min);
                        return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                    },
                    getPointPosition: function (t, e) {
                        var n = this.getIndexAngle(t) - Math.PI / 2;
                        return {
                            x: Math.cos(n) * e + this.xCenter,
                            y: Math.sin(n) * e + this.yCenter
                        }
                    },
                    getPointPositionForValue: function (t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    },
                    getBasePosition: function (t) {
                        var e = this.min,
                            n = this.max;
                        return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && n < 0 ? n : 0 < e && 0 < n ? e : 0)
                    },
                    _drawGrid: function () {
                        var t, n, e, i = this,
                            a = i.ctx,
                            r = i.options,
                            o = r.gridLines,
                            s = r.angleLines,
                            l = Vn(s.lineWidth, o.lineWidth),
                            u = Vn(s.color, o.color);
                        if (r.pointLabels.display && function (t) {
                                var e, n, i, a, r = t.ctx,
                                    o = t.options,
                                    s = o.pointLabels,
                                    l = Un(o),
                                    u = t.getDistanceFromCenterForValue(o.ticks.reverse ? t.min : t.max),
                                    d = j.options._parseFont(s);
                                r.save(), r.font = d.string, r.textBaseline = "middle";
                                for (var h = t.chart.data.labels.length - 1; 0 <= h; h--) {
                                    var c = 0 === h ? l / 2 : 0,
                                        f = t.getPointPosition(h, u + c + 5),
                                        g = Bn(s.fontColor, h, z.global.defaultFontColor);
                                    r.fillStyle = g;
                                    var m = t.getIndexAngle(h),
                                        p = j.toDegrees(m);
                                    r.textAlign = 0 === (a = p) || 180 === a ? "center" : a < 180 ? "left" : "right", e = p, n = t._pointLabelSizes[h], i = f, 90 === e || 270 === e ? i.y -= n.h / 2 : (270 < e || e < 90) && (i.y -= n.h), qn(r, t.pointLabels[h], f, d.lineHeight)
                                }
                                r.restore()
                            }(i), o.display && j.each(i.ticks, function (t, e) {
                                0 !== e && (n = i.getDistanceFromCenterForValue(i.ticksAsNumbers[e]), function (t, e, n, i) {
                                    var a, r = t.ctx,
                                        o = e.circular,
                                        s = t.chart.data.labels.length,
                                        l = Bn(e.color, i - 1),
                                        u = Bn(e.lineWidth, i - 1);
                                    if ((o || s) && l && u) {
                                        if (r.save(), r.strokeStyle = l, r.lineWidth = u, r.setLineDash && (r.setLineDash(e.borderDash || []), r.lineDashOffset = e.borderDashOffset || 0), r.beginPath(), o) r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                                        else {
                                            a = t.getPointPosition(0, n), r.moveTo(a.x, a.y);
                                            for (var d = 1; d < s; d++) a = t.getPointPosition(d, n), r.lineTo(a.x, a.y)
                                        }
                                        r.closePath(), r.stroke(), r.restore()
                                    }
                                }(i, o, n, e))
                            }), s.display && l && u) {
                            for (a.save(), a.lineWidth = l, a.strokeStyle = u, a.setLineDash && (a.setLineDash(Hn([s.borderDash, o.borderDash, []])), a.lineDashOffset = Hn([s.borderDashOffset, o.borderDashOffset, 0])), t = i.chart.data.labels.length - 1; 0 <= t; t--) n = i.getDistanceFromCenterForValue(r.ticks.reverse ? i.min : i.max), e = i.getPointPosition(t, n), a.beginPath(), a.moveTo(i.xCenter, i.yCenter), a.lineTo(e.x, e.y), a.stroke();
                            a.restore()
                        }
                    },
                    _drawLabels: function () {
                        var n = this,
                            i = n.ctx,
                            a = n.options.ticks;
                        if (a.display) {
                            var r, o, t = n.getIndexAngle(0),
                                s = j.options._parseFont(a),
                                l = Vn(a.fontColor, z.global.defaultFontColor);
                            i.save(), i.font = s.string, i.translate(n.xCenter, n.yCenter), i.rotate(t), i.textAlign = "center", i.textBaseline = "middle", j.each(n.ticks, function (t, e) {
                                0 === e && !a.reverse || (r = n.getDistanceFromCenterForValue(n.ticksAsNumbers[e]), a.showLabelBackdrop && (o = i.measureText(t).width, i.fillStyle = a.backdropColor, i.fillRect(-o / 2 - a.backdropPaddingX, -r - s.size / 2 - a.backdropPaddingY, o + 2 * a.backdropPaddingX, s.size + 2 * a.backdropPaddingY)), i.fillStyle = l, i.fillText(t, 0, -r))
                            }), i.restore()
                        }
                    },
                    _drawTitle: j.noop
                }),
                Xn = jn;
            $n._defaults = Xn;
            var Kn = j._deprecated,
                Jn = j.options.resolve,
                Qn = j.valueOrDefault,
                ti = Number.MIN_SAFE_INTEGER || -9007199254740991,
                ei = Number.MAX_SAFE_INTEGER || 9007199254740991,
                ni = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: 1e3
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: 60
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: 60
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: 24
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: 30
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: 4
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: 12
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: 4
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                ii = Object.keys(ni);

            function ai(t, e) {
                return t - e
            }

            function ri(t) {
                return j.valueOrDefault(t.time.min, t.ticks.min)
            }

            function oi(t) {
                return j.valueOrDefault(t.time.max, t.ticks.max)
            }

            function si(t, e, n, i) {
                var a = function (t, e, n) {
                        for (var i, a, r, o = 0, s = t.length - 1; 0 <= o && o <= s;) {
                            if (a = t[(i = o + s >> 1) - 1] || null, r = t[i], !a) return {
                                lo: null,
                                hi: r
                            };
                            if (r[e] < n) o = 1 + i;
                            else {
                                if (!(a[e] > n)) return {
                                    lo: a,
                                    hi: r
                                };
                                s = i - 1
                            }
                        }
                        return {
                            lo: r,
                            hi: null
                        }
                    }(t, e, n),
                    r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
                    o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
                    s = o[e] - r[e],
                    l = s ? (n - r[e]) / s : 0,
                    u = (o[i] - r[i]) * l;
                return r[i] + u
            }

            function li(t, e) {
                var n = t._adapter,
                    i = t.options.time,
                    a = i.parser,
                    r = a || i.format,
                    o = e;
                return "function" == typeof a && (o = a(o)), j.isFinite(o) || (o = "string" == typeof r ? n.parse(o, r) : n.parse(o)), null !== o ? +o : (a || "function" != typeof r || (o = r(e), j.isFinite(o) || (o = n.parse(o))), o)
            }

            function ui(t, e) {
                if (j.isNullOrUndef(e)) return null;
                var n = t.options.time,
                    i = li(t, t.getRightValue(e));
                return null === i || n.round && (i = +t._adapter.startOf(i, n.round)), i
            }

            function di(t, e, n, i) {
                var a, r, o, s = ii.length;
                for (a = ii.indexOf(t); a < s - 1; ++a)
                    if (o = (r = ni[ii[a]]).steps ? r.steps : ei, r.common && Math.ceil((n - e) / (o * r.size)) <= i) return ii[a];
                return ii[s - 1]
            }

            function hi(t, e, n) {
                var i, a, r = [],
                    o = {},
                    s = e.length;
                for (i = 0; i < s; ++i) o[a = e[i]] = i, r.push({
                    value: a,
                    major: !1
                });
                return 0 !== s && n ? function (t, e, n, i) {
                    var a, r, o = t._adapter,
                        s = +o.startOf(e[0].value, i),
                        l = e[e.length - 1].value;
                    for (a = s; a <= l; a = +o.add(a, 1, i)) 0 <= (r = n[a]) && (e[r].major = !0);
                    return e
                }(t, r, o, n) : r
            }
            var ci = kn.extend({
                    initialize: function () {
                        this.mergeTicksOptions(), kn.prototype.initialize.call(this)
                    },
                    update: function () {
                        var t = this.options,
                            e = t.time || (t.time = {}),
                            n = this._adapter = new sn._date(t.adapters.date);
                        return Kn("time scale", e.format, "time.format", "time.parser"), Kn("time scale", e.min, "time.min", "ticks.min"), Kn("time scale", e.max, "time.max", "ticks.max"), j.mergeIf(e.displayFormats, n.formats()), kn.prototype.update.apply(this, arguments)
                    },
                    getRightValue: function (t) {
                        return t && void 0 !== t.t && (t = t.t), kn.prototype.getRightValue.call(this, t)
                    },
                    determineDataLimits: function () {
                        var t, e, n, i, a, r, o, s = this,
                            l = s.chart,
                            u = s._adapter,
                            d = s.options,
                            h = d.time.unit || "day",
                            c = ei,
                            f = ti,
                            g = [],
                            m = [],
                            p = [],
                            v = s._getLabels();
                        for (t = 0, n = v.length; t < n; ++t) p.push(ui(s, v[t]));
                        for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
                            if (l.isDatasetVisible(t))
                                if (a = l.data.datasets[t].data, j.isObject(a[0]))
                                    for (m[t] = [], e = 0, i = a.length; e < i; ++e) r = ui(s, a[e]), g.push(r), m[t][e] = r;
                                else m[t] = p.slice(0), o || (g = g.concat(p), o = !0);
                        else m[t] = [];
                        p.length && (c = Math.min(c, p[0]), f = Math.max(f, p[p.length - 1])), g.length && (g = 1 < n ? function (t) {
                            var e, n, i, a = {},
                                r = [];
                            for (e = 0, n = t.length; e < n; ++e) a[i = t[e]] || (a[i] = !0, r.push(i));
                            return r
                        }(g).sort(ai) : g.sort(ai), c = Math.min(c, g[0]), f = Math.max(f, g[g.length - 1])), c = ui(s, ri(d)) || c, f = ui(s, oi(d)) || f, c = c === ei ? +u.startOf(Date.now(), h) : c, f = f === ti ? +u.endOf(Date.now(), h) + 1 : f, s.min = Math.min(c, f), s.max = Math.max(c + 1, f), s._table = [], s._timestamps = {
                            data: g,
                            datasets: m,
                            labels: p
                        }
                    },
                    buildTicks: function () {
                        var t, e, n, i, a, r, o, s, l, u = this,
                            d = u.min,
                            h = u.max,
                            c = u.options,
                            f = c.ticks,
                            g = c.time,
                            m = u._timestamps,
                            p = [],
                            v = u.getLabelCapacity(d),
                            b = f.source,
                            y = c.distribution;
                        for (m = "data" === b || "auto" === b && "series" === y ? m.data : "labels" === b ? m.labels : function (t, e, n, i) {
                                var a, r = t._adapter,
                                    o = t.options,
                                    s = o.time,
                                    l = s.unit || di(s.minUnit, e, n, i),
                                    u = Jn([s.stepSize, s.unitStepSize, 1]),
                                    d = "week" === l && s.isoWeekday,
                                    h = e,
                                    c = [];
                                if (d && (h = +r.startOf(h, "isoWeek", d)), h = +r.startOf(h, d ? "day" : l), r.diff(n, e, l) > 1e5 * u) throw e + " and " + n + " are too far apart with stepSize of " + u + " " + l;
                                for (a = h; a < n; a = +r.add(a, u, l)) c.push(a);
                                return a !== n && "ticks" !== o.bounds || c.push(a), c
                            }(u, d, h, v), "ticks" === c.bounds && m.length && (d = m[0], h = m[m.length - 1]), d = ui(u, ri(c)) || d, h = ui(u, oi(c)) || h, t = 0, e = m.length; t < e; ++t) d <= (n = m[t]) && n <= h && p.push(n);
                        return u.min = d, u.max = h, u._unit = g.unit || (f.autoSkip ? di(g.minUnit, u.min, u.max, v) : function (t, e, n, i, a) {
                            var r, o;
                            for (r = ii.length - 1; r >= ii.indexOf(n); r--)
                                if (o = ii[r], ni[o].common && t._adapter.diff(a, i, o) >= e - 1) return o;
                            return ii[n ? ii.indexOf(n) : 0]
                        }(u, p.length, g.minUnit, u.min, u.max)), u._majorUnit = f.major.enabled && "year" !== u._unit ? function (t) {
                            for (var e = ii.indexOf(t) + 1, n = ii.length; e < n; ++e)
                                if (ni[ii[e]].common) return ii[e]
                        }(u._unit) : void 0, u._table = function (t, e, n, i) {
                            if ("linear" === i || !t.length) return [{
                                time: e,
                                pos: 0
                            }, {
                                time: n,
                                pos: 1
                            }];
                            var a, r, o, s, l, u = [],
                                d = [e];
                            for (a = 0, r = t.length; a < r; ++a) e < (s = t[a]) && s < n && d.push(s);
                            for (d.push(n), a = 0, r = d.length; a < r; ++a) l = d[a + 1], o = d[a - 1], s = d[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
                                time: s,
                                pos: a / (r - 1)
                            });
                            return u
                        }(u._timestamps.data, d, h, y), u._offsets = (i = u._table, a = p, l = s = 0, c.offset && a.length && (r = si(i, "time", a[0], "pos"), s = 1 === a.length ? 1 - r : (si(i, "time", a[1], "pos") - r) / 2, o = si(i, "time", a[a.length - 1], "pos"), l = 1 === a.length ? o : (o - si(i, "time", a[a.length - 2], "pos")) / 2), {
                            start: s,
                            end: l,
                            factor: 1 / (s + 1 + l)
                        }), f.reverse && p.reverse(), hi(u, p, u._majorUnit)
                    },
                    getLabelForIndex: function (t, e) {
                        var n = this,
                            i = n._adapter,
                            a = n.chart.data,
                            r = n.options.time,
                            o = a.labels && t < a.labels.length ? a.labels[t] : "",
                            s = a.datasets[e].data[t];
                        return j.isObject(s) && (o = n.getRightValue(s)), r.tooltipFormat ? i.format(li(n, o), r.tooltipFormat) : "string" == typeof o ? o : i.format(li(n, o), r.displayFormats.datetime)
                    },
                    tickFormatFunction: function (t, e, n, i) {
                        var a = this._adapter,
                            r = this.options,
                            o = r.time.displayFormats,
                            s = o[this._unit],
                            l = this._majorUnit,
                            u = o[l],
                            d = n[e],
                            h = r.ticks,
                            c = l && u && d && d.major,
                            f = a.format(t, i || (c ? u : s)),
                            g = c ? h.major : h.minor,
                            m = Jn([g.callback, g.userCallback, h.callback, h.userCallback]);
                        return m ? m(f, e, n) : f
                    },
                    convertTicksToLabels: function (t) {
                        var e, n, i = [];
                        for (e = 0, n = t.length; e < n; ++e) i.push(this.tickFormatFunction(t[e].value, e, t));
                        return i
                    },
                    getPixelForOffset: function (t) {
                        var e = this._offsets,
                            n = si(this._table, "time", t, "pos");
                        return this.getPixelForDecimal((e.start + n) * e.factor)
                    },
                    getPixelForValue: function (t, e, n) {
                        var i = null;
                        if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = ui(this, t)), null !== i) return this.getPixelForOffset(i)
                    },
                    getPixelForTick: function (t) {
                        var e = this.getTicks();
                        return 0 <= t && t < e.length ? this.getPixelForOffset(e[t].value) : null
                    },
                    getValueForPixel: function (t) {
                        var e = this._offsets,
                            n = this.getDecimalForPixel(t) / e.factor - e.end,
                            i = si(this._table, "pos", n, "time");
                        return this._adapter._create(i)
                    },
                    _getLabelSize: function (t) {
                        var e = this.options.ticks,
                            n = this.ctx.measureText(t).width,
                            i = j.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
                            a = Math.cos(i),
                            r = Math.sin(i),
                            o = Qn(e.fontSize, z.global.defaultFontSize);
                        return {
                            w: n * a + o * r,
                            h: n * r + o * a
                        }
                    },
                    getLabelWidth: function (t) {
                        return this._getLabelSize(t).w
                    },
                    getLabelCapacity: function (t) {
                        var e = this.options.time,
                            n = e.displayFormats,
                            i = n[e.unit] || n.millisecond,
                            a = this.tickFormatFunction(t, 0, hi(this, [t], this._majorUnit), i),
                            r = this._getLabelSize(a),
                            o = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h);
                        return this.options.offset && o--, 0 < o ? o : 1
                    }
                }),
                fi = {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    adapters: {},
                    time: {
                        parser: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {}
                    },
                    ticks: {
                        autoSkip: !1,
                        source: "auto",
                        major: {
                            enabled: !1
                        }
                    }
                };
            ci._defaults = fi;
            var gi = {
                    category: Sn,
                    linear: In,
                    logarithmic: zn,
                    radialLinear: $n,
                    time: ci
                },
                mi = {
                    datetime: "MMM D, YYYY, h:mm:ss a",
                    millisecond: "h:mm:ss.SSS a",
                    second: "h:mm:ss a",
                    minute: "h:mm a",
                    hour: "hA",
                    day: "MMM D",
                    week: "ll",
                    month: "MMM YYYY",
                    quarter: "[Q]Q - YYYY",
                    year: "YYYY"
                };
            sn._date.override("function" == typeof i ? {
                _id: "moment",
                formats: function () {
                    return mi
                },
                parse: function (t, e) {
                    return "string" == typeof t && "string" == typeof e ? t = i(t, e) : t instanceof i || (t = i(t)), t.isValid() ? t.valueOf() : null
                },
                format: function (t, e) {
                    return i(t).format(e)
                },
                add: function (t, e, n) {
                    return i(t).add(e, n).valueOf()
                },
                diff: function (t, e, n) {
                    return i(t).diff(i(e), n)
                },
                startOf: function (t, e, n) {
                    return t = i(t), "isoWeek" === e ? t.isoWeekday(n).valueOf() : t.startOf(e).valueOf()
                },
                endOf: function (t, e) {
                    return i(t).endOf(e).valueOf()
                },
                _create: function (t) {
                    return i(t)
                }
            } : {}), z._set("global", {
                plugins: {
                    filler: {
                        propagate: !0
                    }
                }
            });
            var pi = {
                dataset: function (t) {
                    var e = t.fill,
                        n = t.chart,
                        i = n.getDatasetMeta(e),
                        a = i && n.isDatasetVisible(e) && i.dataset._children || [],
                        r = a.length || 0;
                    return r ? function (t, e) {
                        return e < r && a[e]._view || null
                    } : null
                },
                boundary: function (t) {
                    var n = t.boundary,
                        e = n ? n.x : null,
                        i = n ? n.y : null;
                    return j.isArray(n) ? function (t, e) {
                        return n[e]
                    } : function (t) {
                        return {
                            x: null === e ? t.x : e,
                            y: null === i ? t.y : i
                        }
                    }
                }
            };

            function vi(t, e, n) {
                var i, a = t._model || {},
                    r = a.fill;
                if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
                if (!0 === r) return "origin";
                if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = e + i), !(i === e || i < 0 || n <= i) && i;
                switch (r) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return r;
                    default:
                        return !1
                }
            }

            function bi(t) {
                return ((t.el._scale || {}).getPointPositionForValue ? function (t) {
                    var e, n, i, a, r, o = t.el._scale,
                        s = o.options,
                        l = o.chart.data.labels.length,
                        u = t.fill,
                        d = [];
                    if (!l) return null;
                    for (e = s.ticks.reverse ? o.max : o.min, n = s.ticks.reverse ? o.min : o.max, i = o.getPointPositionForValue(0, e), a = 0; a < l; ++a) r = "start" === u || "end" === u ? o.getPointPositionForValue(a, "start" === u ? e : n) : o.getBasePosition(a), s.gridLines.circular && (r.cx = i.x, r.cy = i.y, r.angle = o.getIndexAngle(a) - Math.PI / 2), d.push(r);
                    return d
                } : function (t) {
                    var e, n = t.el._model || {},
                        i = t.el._scale || {},
                        a = t.fill,
                        r = null;
                    if (isFinite(a)) return null;
                    if ("start" === a ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePixel && (r = i.getBasePixel()), null != r) {
                        if (void 0 !== r.x && void 0 !== r.y) return r;
                        if (j.isFinite(r)) return {
                            x: (e = i.isHorizontal()) ? r : null,
                            y: e ? null : r
                        }
                    }
                    return null
                })(t)
            }

            function yi(t, e, n) {
                var i, a = t[e].fill,
                    r = [e];
                if (!n) return a;
                for (; !1 !== a && -1 === r.indexOf(a);) {
                    if (!isFinite(a)) return a;
                    if (!(i = t[a])) return !1;
                    if (i.visible) return a;
                    r.push(a), a = i.fill
                }
                return !1
            }

            function xi(t) {
                return t && !t.skip
            }

            function _i(t, e, n, i, a) {
                var r, o, s, l;
                if (i && a) {
                    for (t.moveTo(e[0].x, e[0].y), r = 1; r < i; ++r) j.canvas.lineTo(t, e[r - 1], e[r]);
                    if (void 0 === n[0].angle)
                        for (t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; 0 < r; --r) j.canvas.lineTo(t, n[r], n[r - 1], !0);
                    else
                        for (o = n[0].cx, s = n[0].cy, l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)), r = a - 1; 0 < r; --r) t.arc(o, s, l, n[r].angle, n[r - 1].angle, !0)
                }
            }

            function wi(t, e, n, i, a, r) {
                var o, s, l, u, d, h, c, f, g = e.length,
                    m = i.spanGaps,
                    p = [],
                    v = [],
                    b = 0,
                    y = 0;
                for (t.beginPath(), o = 0, s = g; o < s; ++o) d = n(u = e[l = o % g]._view, l, i), h = xi(u), c = xi(d), r && void 0 === f && h && (s = g + (f = o + 1)), h && c ? (b = p.push(u), y = v.push(d)) : b && y && (m ? (h && p.push(u), c && v.push(d)) : (_i(t, p, v, b, y), b = y = 0, p = [], v = []));
                _i(t, p, v, b, y), t.closePath(), t.fillStyle = a, t.fill()
            }
            var ki = {
                    id: "filler",
                    afterDatasetsUpdate: function (t, e) {
                        var n, i, a, r, o, s, l, u = (t.data.datasets || []).length,
                            d = e.propagate,
                            h = [];
                        for (i = 0; i < u; ++i) r = null, (a = (n = t.getDatasetMeta(i)).dataset) && a._model && a instanceof Mt.Line && (r = {
                            visible: t.isDatasetVisible(i),
                            fill: vi(a, i, u),
                            chart: t,
                            el: a
                        }), n.$filler = r, h.push(r);
                        for (i = 0; i < u; ++i)(r = h[i]) && (r.fill = yi(h, i, d), r.boundary = bi(r), r.mapper = (l = void 0, s = (o = r).fill, !(l = "dataset") === s ? null : (isFinite(s) || (l = "boundary"), pi[l](o))))
                    },
                    beforeDatasetsDraw: function (t) {
                        var e, n, i, a, r, o, s, l = t._getSortedVisibleDatasetMetas(),
                            u = t.ctx;
                        for (n = l.length - 1; 0 <= n; --n)(e = l[n].$filler) && e.visible && (a = (i = e.el)._view, r = i._children || [], o = e.mapper, s = a.backgroundColor || z.global.defaultColor, o && s && r.length && (j.canvas.clipArea(u, t.chartArea), wi(u, r, o, a, s, i._loop), j.canvas.unclipArea(u)))
                    }
                },
                Mi = j.rtl.getRtlAdapter,
                Si = j.noop,
                Di = j.valueOrDefault;

            function Ci(t, e) {
                return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
            }
            z._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    align: "center",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function (t, e) {
                        var n = e.datasetIndex,
                            i = this.chart,
                            a = i.getDatasetMeta(n);
                        a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update()
                    },
                    onHover: null,
                    onLeave: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function (n) {
                            var i = n.data.datasets,
                                t = n.options.legend || {},
                                a = t.labels && t.labels.usePointStyle;
                            return n._getSortedDatasetMetas().map(function (t) {
                                var e = t.controller.getStyle(a ? 0 : void 0);
                                return {
                                    text: i[t.index].label,
                                    fillStyle: e.backgroundColor,
                                    hidden: !n.isDatasetVisible(t.index),
                                    lineCap: e.borderCapStyle,
                                    lineDash: e.borderDash,
                                    lineDashOffset: e.borderDashOffset,
                                    lineJoin: e.borderJoinStyle,
                                    lineWidth: e.borderWidth,
                                    strokeStyle: e.borderColor,
                                    pointStyle: e.pointStyle,
                                    rotation: e.rotation,
                                    datasetIndex: t.index
                                }
                            }, this)
                        }
                    }
                },
                legendCallback: function (t) {
                    var e, n, i, a = document.createElement("ul"),
                        r = t.data.datasets;
                    for (a.setAttribute("class", t.id + "-legend"), e = 0, n = r.length; e < n; e++)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = r[e].backgroundColor, r[e].label && i.appendChild(document.createTextNode(r[e].label));
                    return a.outerHTML
                }
            });
            var Pi = K.extend({
                initialize: function (t) {
                    j.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
                },
                beforeUpdate: Si,
                update: function (t, e, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: Si,
                beforeSetDimensions: Si,
                setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: Si,
                beforeBuildLabels: Si,
                buildLabels: function () {
                    var e = this,
                        n = e.options.labels || {},
                        t = j.callback(n.generateLabels, [e.chart], e) || [];
                    n.filter && (t = t.filter(function (t) {
                        return n.filter(t, e.chart.data)
                    })), e.options.reverse && t.reverse(), e.legendItems = t
                },
                afterBuildLabels: Si,
                beforeFit: Si,
                fit: function () {
                    var t = this,
                        e = t.options,
                        i = e.labels,
                        n = e.display,
                        a = t.ctx,
                        r = j.options._parseFont(i),
                        o = r.size,
                        s = t.legendHitBoxes = [],
                        l = t.minSize,
                        u = t.isHorizontal();
                    if (u ? (l.width = t.maxWidth, l.height = n ? 10 : 0) : (l.width = n ? 10 : 0, l.height = t.maxHeight), n) {
                        if (a.font = r.string, u) {
                            var d = t.lineWidths = [0],
                                h = 0;
                            a.textAlign = "left", a.textBaseline = "middle", j.each(t.legendItems, function (t, e) {
                                var n = Ci(i, o) + o / 2 + a.measureText(t.text).width;
                                (0 === e || d[d.length - 1] + n + 2 * i.padding > l.width) && (h += o + i.padding, d[d.length - (0 < e ? 0 : 1)] = 0), s[e] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: o
                                }, d[d.length - 1] += n + i.padding
                            }), l.height += h
                        } else {
                            var c = i.padding,
                                f = t.columnWidths = [],
                                g = t.columnHeights = [],
                                m = i.padding,
                                p = 0,
                                v = 0;
                            j.each(t.legendItems, function (t, e) {
                                var n = Ci(i, o) + o / 2 + a.measureText(t.text).width;
                                0 < e && v + o + 2 * c > l.height && (m += p + i.padding, f.push(p), g.push(v), v = p = 0), p = Math.max(p, n), v += o + c, s[e] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: o
                                }
                            }), m += p, f.push(p), g.push(v), l.width += m
                        }
                        t.width = l.width, t.height = l.height
                    } else t.width = l.width = t.height = l.height = 0
                },
                afterFit: Si,
                isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function () {
                    var g = this,
                        n = g.options,
                        m = n.labels,
                        t = z.global,
                        p = t.defaultColor,
                        v = t.elements.line,
                        b = g.height,
                        y = g.columnHeights,
                        x = g.width,
                        _ = g.lineWidths;
                    if (n.display) {
                        var w, k = Mi(n.rtl, g.left, g.minSize.width),
                            M = g.ctx,
                            e = Di(m.fontColor, t.defaultFontColor),
                            i = j.options._parseFont(m),
                            S = i.size;
                        M.textAlign = k.textAlign("left"), M.textBaseline = "middle", M.lineWidth = .5, M.strokeStyle = e, M.fillStyle = e, M.font = i.string;
                        var D = Ci(m, S),
                            C = g.legendHitBoxes,
                            P = function (t, e) {
                                switch (n.align) {
                                    case "start":
                                        return m.padding;
                                    case "end":
                                        return t - e;
                                    default:
                                        return (t - e + m.padding) / 2
                                }
                            },
                            T = g.isHorizontal();
                        w = T ? {
                            x: g.left + P(x, _[0]),
                            y: g.top + m.padding,
                            line: 0
                        } : {
                            x: g.left + m.padding,
                            y: g.top + P(b, y[0]),
                            line: 0
                        }, j.rtl.overrideTextDirection(g.ctx, n.textDirection);
                        var O = S + m.padding;
                        j.each(g.legendItems, function (t, e) {
                            var n = M.measureText(t.text).width,
                                i = D + S / 2 + n,
                                a = w.x,
                                r = w.y;
                            k.setWidth(g.minSize.width), T ? 0 < e && a + i + m.padding > g.left + g.minSize.width && (r = w.y += O, w.line++, a = w.x = g.left + P(x, _[w.line])) : 0 < e && r + O > g.top + g.minSize.height && (a = w.x = a + g.columnWidths[w.line] + m.padding, w.line++, r = w.y = g.top + P(b, y[w.line]));
                            var o, s, l, u, d, h, c, f = k.x(a);
                            ! function (t, e, n) {
                                if (!(isNaN(D) || D <= 0)) {
                                    M.save();
                                    var i = Di(n.lineWidth, v.borderWidth);
                                    if (M.fillStyle = Di(n.fillStyle, p), M.lineCap = Di(n.lineCap, v.borderCapStyle), M.lineDashOffset = Di(n.lineDashOffset, v.borderDashOffset), M.lineJoin = Di(n.lineJoin, v.borderJoinStyle), M.lineWidth = i, M.strokeStyle = Di(n.strokeStyle, p), M.setLineDash && M.setLineDash(Di(n.lineDash, v.borderDash)), m && m.usePointStyle) {
                                        var a = D * Math.SQRT2 / 2,
                                            r = k.xPlus(t, D / 2),
                                            o = e + S / 2;
                                        j.canvas.drawPoint(M, n.pointStyle, a, r, o, n.rotation)
                                    } else M.fillRect(k.leftForLtr(t, D), e, D, S), 0 !== i && M.strokeRect(k.leftForLtr(t, D), e, D, S);
                                    M.restore()
                                }
                            }(f, r, t), C[e].left = k.leftForLtr(f, C[e].width), C[e].top = r, o = f, s = r, l = t, u = n, d = S / 2, h = k.xPlus(o, D + d), c = s + d, M.fillText(l.text, h, c), l.hidden && (M.beginPath(), M.lineWidth = 2, M.moveTo(h, c), M.lineTo(k.xPlus(h, u), c), M.stroke()), T ? w.x += i + m.padding : w.y += O
                        }), j.rtl.restoreTextDirection(g.ctx, n.textDirection)
                    }
                },
                _getLegendItemAt: function (t, e) {
                    var n, i, a;
                    if (t >= this.left && t <= this.right && e >= this.top && e <= this.bottom)
                        for (a = this.legendHitBoxes, n = 0; n < a.length; ++n)
                            if (t >= (i = a[n]).left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return this.legendItems[n];
                    return null
                },
                handleEvent: function (t) {
                    var e, n = this.options,
                        i = "mouseup" === t.type ? "click" : t.type;
                    if ("mousemove" === i) {
                        if (!n.onHover && !n.onLeave) return
                    } else {
                        if ("click" !== i) return;
                        if (!n.onClick) return
                    }
                    e = this._getLegendItemAt(t.x, t.y), "click" === i ? e && n.onClick && n.onClick.call(this, t.native, e) : (n.onLeave && e !== this._hoveredItem && (this._hoveredItem && n.onLeave.call(this, t.native, this._hoveredItem), this._hoveredItem = e), n.onHover && e && n.onHover.call(this, t.native, e))
                }
            });

            function Ti(t, e) {
                var n = new Pi({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                pe.configure(t, n, e), pe.addBox(t, n), t.legend = n
            }
            var Oi = {
                    id: "legend",
                    _element: Pi,
                    beforeInit: function (t) {
                        var e = t.options.legend;
                        e && Ti(t, e)
                    },
                    beforeUpdate: function (t) {
                        var e = t.options.legend,
                            n = t.legend;
                        e ? (j.mergeIf(e, z.global.legend), n ? (pe.configure(t, n, e), n.options = e) : Ti(t, e)) : n && (pe.removeBox(t, n), delete t.legend)
                    },
                    afterEvent: function (t, e) {
                        var n = t.legend;
                        n && n.handleEvent(e)
                    }
                },
                Ai = j.noop;
            z._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var Fi = K.extend({
                initialize: function (t) {
                    j.extend(this, t), this.legendHitBoxes = []
                },
                beforeUpdate: Ai,
                update: function (t, e, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: Ai,
                beforeSetDimensions: Ai,
                setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: Ai,
                beforeBuildLabels: Ai,
                buildLabels: Ai,
                afterBuildLabels: Ai,
                beforeFit: Ai,
                fit: function () {
                    var t, e = this.options,
                        n = this.minSize = {},
                        i = this.isHorizontal();
                    e.display ? (t = (j.isArray(e.text) ? e.text.length : 1) * j.options._parseFont(e).lineHeight + 2 * e.padding, this.width = n.width = i ? this.maxWidth : t, this.height = n.height = i ? t : this.maxHeight) : this.width = n.width = this.height = n.height = 0
                },
                afterFit: Ai,
                isHorizontal: function () {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                draw: function () {
                    var t = this.ctx,
                        e = this.options;
                    if (e.display) {
                        var n, i, a, r = j.options._parseFont(e),
                            o = r.lineHeight,
                            s = o / 2 + e.padding,
                            l = 0,
                            u = this.top,
                            d = this.left,
                            h = this.bottom,
                            c = this.right;
                        t.fillStyle = j.valueOrDefault(e.fontColor, z.global.defaultFontColor), t.font = r.string, this.isHorizontal() ? (i = d + (c - d) / 2, a = u + s, n = c - d) : (i = "left" === e.position ? d + s : c - s, a = u + (h - u) / 2, n = h - u, l = Math.PI * ("left" === e.position ? -.5 : .5)), t.save(), t.translate(i, a), t.rotate(l), t.textAlign = "center", t.textBaseline = "middle";
                        var f = e.text;
                        if (j.isArray(f))
                            for (var g = 0, m = 0; m < f.length; ++m) t.fillText(f[m], 0, g, n), g += o;
                        else t.fillText(f, 0, 0, n);
                        t.restore()
                    }
                }
            });

            function Ii(t, e) {
                var n = new Fi({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                pe.configure(t, n, e), pe.addBox(t, n), t.titleBlock = n
            }
            var Li = {},
                Ri = ki,
                Wi = Oi,
                Ni = {
                    id: "title",
                    _element: Fi,
                    beforeInit: function (t) {
                        var e = t.options.title;
                        e && Ii(t, e)
                    },
                    beforeUpdate: function (t) {
                        var e = t.options.title,
                            n = t.titleBlock;
                        e ? (j.mergeIf(e, z.global.title), n ? (pe.configure(t, n, e), n.options = e) : Ii(t, e)) : n && (pe.removeBox(t, n), delete t.titleBlock)
                    }
                };

            function Yi(t, e, n) {
                var i;
                return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
            }

            function zi(t) {
                return null != t && "none" !== t
            }

            function Ei(t, e, n) {
                var i = document.defaultView,
                    a = j._getParentNode(t),
                    r = i.getComputedStyle(t)[e],
                    o = i.getComputedStyle(a)[e],
                    s = zi(r),
                    l = zi(o),
                    u = Number.POSITIVE_INFINITY;
                return s || l ? Math.min(s ? Yi(r, t, n) : u, l ? Yi(o, a, n) : u) : "none"
            }
            for (var Vi in Li.filler = Ri, Li.legend = Wi, Li.title = Ni, (an.helpers = j).where = function (t, e) {
                    if (j.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var n = [];
                    return j.each(t, function (t) {
                        e(t) && n.push(t)
                    }), n
                }, j.findIndex = Array.prototype.findIndex ? function (t, e, n) {
                    return t.findIndex(e, n)
                } : function (t, e, n) {
                    n = void 0 === n ? t : n;
                    for (var i = 0, a = t.length; i < a; ++i)
                        if (e.call(n, t[i], i, t)) return i;
                    return -1
                }, j.findNextWhere = function (t, e, n) {
                    j.isNullOrUndef(n) && (n = -1);
                    for (var i = n + 1; i < t.length; i++) {
                        var a = t[i];
                        if (e(a)) return a
                    }
                }, j.findPreviousWhere = function (t, e, n) {
                    j.isNullOrUndef(n) && (n = t.length);
                    for (var i = n - 1; 0 <= i; i--) {
                        var a = t[i];
                        if (e(a)) return a
                    }
                }, j.isNumber = function (t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, j.almostEquals = function (t, e, n) {
                    return Math.abs(t - e) < n
                }, j.almostWhole = function (t, e) {
                    var n = Math.round(t);
                    return n - e <= t && t <= n + e
                }, j.max = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, j.min = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, j.sign = Math.sign ? function (t) {
                    return Math.sign(t)
                } : function (t) {
                    return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
                }, j.toRadians = function (t) {
                    return t * (Math.PI / 180)
                }, j.toDegrees = function (t) {
                    return t * (180 / Math.PI)
                }, j._decimalPlaces = function (t) {
                    if (j.isFinite(t)) {
                        for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
                        return n
                    }
                }, j.getAngleFromPoint = function (t, e) {
                    var n = e.x - t.x,
                        i = e.y - t.y,
                        a = Math.sqrt(n * n + i * i),
                        r = Math.atan2(i, n);
                    return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                        angle: r,
                        distance: a
                    }
                }, j.distanceBetweenPoints = function (t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, j.aliasPixel = function (t) {
                    return t % 2 == 0 ? 0 : .5
                }, j._alignPixel = function (t, e, n) {
                    var i = t.currentDevicePixelRatio,
                        a = n / 2;
                    return Math.round((e - a) * i) / i + a
                }, j.splineCurve = function (t, e, n, i) {
                    var a = t.skip ? e : t,
                        r = e,
                        o = n.skip ? e : n,
                        s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                        l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                        u = s / (s + l),
                        d = l / (s + l),
                        h = i * (u = isNaN(u) ? 0 : u),
                        c = i * (d = isNaN(d) ? 0 : d);
                    return {
                        previous: {
                            x: r.x - h * (o.x - a.x),
                            y: r.y - h * (o.y - a.y)
                        },
                        next: {
                            x: r.x + c * (o.x - a.x),
                            y: r.y + c * (o.y - a.y)
                        }
                    }
                }, j.EPSILON = Number.EPSILON || 1e-14, j.splineCurveMonotone = function (t) {
                    var e, n, i, a, r, o, s, l, u, d = (t || []).map(function (t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        h = d.length;
                    for (e = 0; e < h; ++e)
                        if (!(i = d[e]).model.skip) {
                            if (n = 0 < e ? d[e - 1] : null, (a = e < h - 1 ? d[e + 1] : null) && !a.model.skip) {
                                var c = a.model.x - i.model.x;
                                i.deltaK = 0 != c ? (a.model.y - i.model.y) / c : 0
                            }!n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                        } for (e = 0; e < h - 1; ++e) i = d[e], a = d[e + 1], i.model.skip || a.model.skip || (j.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (r = i.mK / i.deltaK, o = a.mK / i.deltaK, (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = r * s * i.deltaK, a.mK = o * s * i.deltaK)));
                    for (e = 0; e < h; ++e)(i = d[e]).model.skip || (n = 0 < e ? d[e - 1] : null, a = e < h - 1 ? d[e + 1] : null, n && !n.model.skip && (u = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - u, i.model.controlPointPreviousY = i.model.y - u * i.mK), a && !a.model.skip && (u = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + u, i.model.controlPointNextY = i.model.y + u * i.mK))
                }, j.nextItem = function (t, e, n) {
                    return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, j.previousItem = function (t, e, n) {
                    return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, j.niceNum = function (t, e) {
                    var n = Math.floor(j.log10(t)),
                        i = t / Math.pow(10, n);
                    return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                }, j.requestAnimFrame = "undefined" == typeof window ? function (t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, j.getRelativePosition = function (t, e) {
                    var n, i, a = t.originalEvent || t,
                        r = t.target || t.srcElement,
                        o = r.getBoundingClientRect(),
                        s = a.touches;
                    i = s && 0 < s.length ? (n = s[0].clientX, s[0].clientY) : (n = a.clientX, a.clientY);
                    var l = parseFloat(j.getStyle(r, "padding-left")),
                        u = parseFloat(j.getStyle(r, "padding-top")),
                        d = parseFloat(j.getStyle(r, "padding-right")),
                        h = parseFloat(j.getStyle(r, "padding-bottom")),
                        c = o.right - o.left - l - d,
                        f = o.bottom - o.top - u - h;
                    return {
                        x: n = Math.round((n - o.left - l) / c * r.width / e.currentDevicePixelRatio),
                        y: i = Math.round((i - o.top - u) / f * r.height / e.currentDevicePixelRatio)
                    }
                }, j.getConstraintWidth = function (t) {
                    return Ei(t, "max-width", "clientWidth")
                }, j.getConstraintHeight = function (t) {
                    return Ei(t, "max-height", "clientHeight")
                }, j._calculatePadding = function (t, e, n) {
                    return -1 < (e = j.getStyle(t, e)).indexOf("%") ? n * parseInt(e, 10) / 100 : parseInt(e, 10)
                }, j._getParentNode = function (t) {
                    var e = t.parentNode;
                    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
                }, j.getMaximumWidth = function (t) {
                    var e = j._getParentNode(t);
                    if (!e) return t.clientWidth;
                    var n = e.clientWidth,
                        i = n - j._calculatePadding(e, "padding-left", n) - j._calculatePadding(e, "padding-right", n),
                        a = j.getConstraintWidth(t);
                    return isNaN(a) ? i : Math.min(i, a)
                }, j.getMaximumHeight = function (t) {
                    var e = j._getParentNode(t);
                    if (!e) return t.clientHeight;
                    var n = e.clientHeight,
                        i = n - j._calculatePadding(e, "padding-top", n) - j._calculatePadding(e, "padding-bottom", n),
                        a = j.getConstraintHeight(t);
                    return isNaN(a) ? i : Math.min(i, a)
                }, j.getStyle = function (t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, j.retinaScale = function (t, e) {
                    var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                    if (1 !== n) {
                        var i = t.canvas,
                            a = t.height,
                            r = t.width;
                        i.height = a * n, i.width = r * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = a + "px", i.style.width = r + "px")
                    }
                }, j.fontString = function (t, e, n) {
                    return e + " " + t + "px " + n
                }, j.longestText = function (t, e, n, i) {
                    var a = (i = i || {}).data = i.data || {},
                        r = i.garbageCollect = i.garbageCollect || [];
                    i.font !== e && (a = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;
                    var o, s, l, u, d, h = 0,
                        c = n.length;
                    for (o = 0; o < c; o++)
                        if (null != (u = n[o]) && !0 !== j.isArray(u)) h = j.measureText(t, a, r, h, u);
                        else if (j.isArray(u))
                        for (s = 0, l = u.length; s < l; s++) null == (d = u[s]) || j.isArray(d) || (h = j.measureText(t, a, r, h, d));
                    var f = r.length / 2;
                    if (f > n.length) {
                        for (o = 0; o < f; o++) delete a[r[o]];
                        r.splice(0, f)
                    }
                    return h
                }, j.measureText = function (t, e, n, i, a) {
                    var r = e[a];
                    return r || (r = e[a] = t.measureText(a).width, n.push(a)), i < r && (i = r), i
                }, j.numberOfLabelLines = function (t) {
                    var e = 1;
                    return j.each(t, function (t) {
                        j.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, j.color = S ? function (t) {
                    return t instanceof CanvasGradient && (t = z.global.defaultColor), S(t)
                } : function (t) {
                    return console.error("Color.js not found!"), t
                }, j.getHoverColor = function (t) {
                    return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : j.color(t).saturate(.5).darken(.1).rgbString()
                }, an._adapters = sn, an.Animation = Q, an.animationService = tt, an.controllers = Jt, an.DatasetController = rt, an.defaults = z, an.Element = K, an.elements = Mt, an.Interaction = re, an.layouts = pe, an.platform = Re, an.plugins = We, an.Scale = kn, an.scaleService = Ne, an.Ticks = ln, an.Tooltip = $e, an.helpers.each(gi, function (t, e) {
                    an.scaleService.registerScaleType(e, t, t._defaults)
                }), Li) Li.hasOwnProperty(Vi) && an.plugins.register(Li[Vi]);
            an.platform.initialize();
            var Bi = an;
            return "undefined" != typeof window && (window.Chart = an), (an.Chart = an).Legend = Li.legend._element, an.Title = Li.title._element, an.pluginService = an.plugins, an.PluginBase = an.Element.extend({}), an.canvasHelpers = an.helpers.canvas, an.layoutService = an.layouts, an.LinearScaleBase = Tn, an.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function (n) {
                an[n] = function (t, e) {
                    return new an(t, an.helpers.merge(e || {}, {
                        type: n.charAt(0).toLowerCase() + n.slice(1)
                    }))
                }
            }), Bi
        }, "object" == typeof n && void 0 !== e ? e.exports = a(function () {
            try {
                return t("moment")
            } catch (t) {}
        }()) : "function" == typeof define && define.amd ? define(["require"], function (t) {
            return a(function () {
                try {
                    return t("moment")
                } catch (t) {}
            }())
        }) : (i = i || self).Chart = a(i.moment)
    }, {
        moment: 2
    }],
    2: [function (Xn, Kn, t) {
        var e, n;
        e = this, n = function () {
            "use strict";
            var t, a;

            function c() {
                return t.apply(null, arguments)
            }

            function s(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }

            function l(t) {
                return null != t && "[object Object]" === Object.prototype.toString.call(t)
            }

            function r(t) {
                return void 0 === t
            }

            function u(t) {
                return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
            }

            function o(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }

            function d(t, e) {
                var n, i = [];
                for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
                return i
            }

            function f(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function h(t, e) {
                for (var n in e) f(e, n) && (t[n] = e[n]);
                return f(e, "toString") && (t.toString = e.toString), f(e, "valueOf") && (t.valueOf = e.valueOf), t
            }

            function g(t, e, n, i) {
                return Ce(t, e, n, i, !0).utc()
            }

            function m(t) {
                return null == t._pf && (t._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), t._pf
            }

            function p(t) {
                if (null == t._isValid) {
                    var e = m(t),
                        n = a.call(e.parsedDateParts, function (t) {
                            return null != t
                        }),
                        i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                    if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
                    t._isValid = i
                }
                return t._isValid
            }

            function v(t) {
                var e = g(NaN);
                return null != t ? h(m(e), t) : m(e).userInvalidated = !0, e
            }
            a = Array.prototype.some ? Array.prototype.some : function (t) {
                for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
                    if (i in e && t.call(this, e[i], i, e)) return !0;
                return !1
            };
            var b = c.momentProperties = [];

            function y(t, e) {
                var n, i, a;
                if (r(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), r(e._i) || (t._i = e._i), r(e._f) || (t._f = e._f), r(e._l) || (t._l = e._l), r(e._strict) || (t._strict = e._strict), r(e._tzm) || (t._tzm = e._tzm), r(e._isUTC) || (t._isUTC = e._isUTC), r(e._offset) || (t._offset = e._offset), r(e._pf) || (t._pf = m(e)), r(e._locale) || (t._locale = e._locale), 0 < b.length)
                    for (n = 0; n < b.length; n++) r(a = e[i = b[n]]) || (t[i] = a);
                return t
            }
            var e = !1;

            function x(t) {
                y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === e && (e = !0, c.updateOffset(this), e = !1)
            }

            function _(t) {
                return t instanceof x || null != t && null != t._isAMomentObject
            }

            function w(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            }

            function k(t) {
                var e = +t,
                    n = 0;
                return 0 != e && isFinite(e) && (n = w(e)), n
            }

            function M(t, e, n) {
                var i, a = Math.min(t.length, e.length),
                    r = Math.abs(t.length - e.length),
                    o = 0;
                for (i = 0; i < a; i++)(n && t[i] !== e[i] || !n && k(t[i]) !== k(e[i])) && o++;
                return o + r
            }

            function S(t) {
                !1 === c.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }

            function n(a, r) {
                var o = !0;
                return h(function () {
                    if (null != c.deprecationHandler && c.deprecationHandler(null, a), o) {
                        for (var t, e = [], n = 0; n < arguments.length; n++) {
                            if (t = "", "object" == typeof arguments[n]) {
                                for (var i in t += "\n[" + n + "] ", arguments[0]) t += i + ": " + arguments[0][i] + ", ";
                                t = t.slice(0, -2)
                            } else t = arguments[n];
                            e.push(t)
                        }
                        S(a + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack), o = !1
                    }
                    return r.apply(this, arguments)
                }, r)
            }
            var i, D = {};

            function C(t, e) {
                null != c.deprecationHandler && c.deprecationHandler(t, e), D[t] || (S(e), D[t] = !0)
            }

            function P(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }

            function T(t, e) {
                var n, i = h({}, t);
                for (n in e) f(e, n) && (l(t[n]) && l(e[n]) ? (i[n] = {}, h(i[n], t[n]), h(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                for (n in t) f(t, n) && !f(e, n) && l(t[n]) && (i[n] = h({}, i[n]));
                return i
            }

            function O(t) {
                null != t && this.set(t)
            }
            c.suppressDeprecationWarnings = !1, c.deprecationHandler = null, i = Object.keys ? Object.keys : function (t) {
                var e, n = [];
                for (e in t) f(t, e) && n.push(e);
                return n
            };
            var A = {};

            function F(t, e) {
                var n = t.toLowerCase();
                A[n] = A[n + "s"] = A[e] = t
            }

            function I(t) {
                return "string" == typeof t ? A[t] || A[t.toLowerCase()] : void 0
            }

            function L(t) {
                var e, n, i = {};
                for (n in t) f(t, n) && (e = I(n)) && (i[e] = t[n]);
                return i
            }
            var R = {};

            function W(t, e) {
                R[t] = e
            }

            function N(t, e, n) {
                var i = "" + Math.abs(t),
                    a = e - i.length;
                return (0 <= t ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i
            }
            var Y = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                E = {},
                V = {};

            function B(t, e, n, i) {
                var a = i;
                "string" == typeof i && (a = function () {
                    return this[i]()
                }), t && (V[t] = a), e && (V[e[0]] = function () {
                    return N(a.apply(this, arguments), e[1], e[2])
                }), n && (V[n] = function () {
                    return this.localeData().ordinal(a.apply(this, arguments), t)
                })
            }

            function H(t, e) {
                return t.isValid() ? (e = j(e, t.localeData()), E[e] = E[e] || function (i) {
                    var t, a, e, r = i.match(Y);
                    for (t = 0, a = r.length; t < a; t++) V[r[t]] ? r[t] = V[r[t]] : r[t] = (e = r[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
                    return function (t) {
                        var e, n = "";
                        for (e = 0; e < a; e++) n += P(r[e]) ? r[e].call(t, i) : r[e];
                        return n
                    }
                }(e), E[e](t)) : t.localeData().invalidDate()
            }

            function j(t, e) {
                var n = 5;

                function i(t) {
                    return e.longDateFormat(t) || t
                }
                for (z.lastIndex = 0; 0 <= n && z.test(t);) t = t.replace(z, i), z.lastIndex = 0, --n;
                return t
            }
            var U = /\d/,
                G = /\d\d/,
                q = /\d{3}/,
                Z = /\d{4}/,
                $ = /[+-]?\d{6}/,
                X = /\d\d?/,
                K = /\d\d\d\d?/,
                J = /\d\d\d\d\d\d?/,
                Q = /\d{1,3}/,
                tt = /\d{1,4}/,
                et = /[+-]?\d{1,6}/,
                nt = /\d+/,
                it = /[+-]?\d+/,
                at = /Z|[+-]\d\d:?\d\d/gi,
                rt = /Z|[+-]\d\d(?::?\d\d)?/gi,
                ot = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                st = {};

            function lt(t, n, i) {
                st[t] = P(n) ? n : function (t, e) {
                    return t && i ? i : n
                }
            }

            function ut(t, e) {
                return f(st, t) ? st[t](e._strict, e._locale) : new RegExp(dt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, a) {
                    return e || n || i || a
                })))
            }

            function dt(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var ht = {};

            function ct(t, n) {
                var e, i = n;
                for ("string" == typeof t && (t = [t]), u(n) && (i = function (t, e) {
                        e[n] = k(t)
                    }), e = 0; e < t.length; e++) ht[t[e]] = i
            }

            function ft(t, a) {
                ct(t, function (t, e, n, i) {
                    n._w = n._w || {}, a(t, n._w, n, i)
                })
            }
            var gt = 0,
                mt = 1,
                pt = 2,
                vt = 3,
                bt = 4,
                yt = 5,
                xt = 6,
                _t = 7,
                wt = 8;

            function kt(t) {
                return Mt(t) ? 366 : 365
            }

            function Mt(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            }
            B("Y", 0, 0, function () {
                var t = this.year();
                return t <= 9999 ? "" + t : "+" + t
            }), B(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), F("year", "y"), W("year", 1), lt("Y", it), lt("YY", X, G), lt("YYYY", tt, Z), lt("YYYYY", et, $), lt("YYYYYY", et, $), ct(["YYYYY", "YYYYYY"], gt), ct("YYYY", function (t, e) {
                e[gt] = 2 === t.length ? c.parseTwoDigitYear(t) : k(t)
            }), ct("YY", function (t, e) {
                e[gt] = c.parseTwoDigitYear(t)
            }), ct("Y", function (t, e) {
                e[gt] = parseInt(t, 10)
            }), c.parseTwoDigitYear = function (t) {
                return k(t) + (68 < k(t) ? 1900 : 2e3)
            };
            var St, Dt = Ct("FullYear", !0);

            function Ct(e, n) {
                return function (t) {
                    return null != t ? (Tt(this, e, t), c.updateOffset(this, n), this) : Pt(this, e)
                }
            }

            function Pt(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
            }

            function Tt(t, e, n) {
                t.isValid() && !isNaN(n) && ("FullYear" === e && Mt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), Ot(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
            }

            function Ot(t, e) {
                if (isNaN(t) || isNaN(e)) return NaN;
                var n, i = (e % (n = 12) + n) % n;
                return t += (e - i) / 12, 1 == i ? Mt(t) ? 29 : 28 : 31 - i % 7 % 2
            }
            St = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e;
                return -1
            }, B("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            }), B("MMM", 0, 0, function (t) {
                return this.localeData().monthsShort(this, t)
            }), B("MMMM", 0, 0, function (t) {
                return this.localeData().months(this, t)
            }), F("month", "M"), W("month", 8), lt("M", X), lt("MM", X, G), lt("MMM", function (t, e) {
                return e.monthsShortRegex(t)
            }), lt("MMMM", function (t, e) {
                return e.monthsRegex(t)
            }), ct(["M", "MM"], function (t, e) {
                e[mt] = k(t) - 1
            }), ct(["MMM", "MMMM"], function (t, e, n, i) {
                var a = n._locale.monthsParse(t, i, n._strict);
                null != a ? e[mt] = a : m(n).invalidMonth = t
            });
            var At = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                Ft = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
            var It = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Lt(t, e) {
                var n;
                if (!t.isValid()) return t;
                if ("string" == typeof e)
                    if (/^\d+$/.test(e)) e = k(e);
                    else if (!u(e = t.localeData().monthsParse(e))) return t;
                return n = Math.min(t.date(), Ot(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
            }

            function Rt(t) {
                return null != t ? (Lt(this, t), c.updateOffset(this, !0), this) : Pt(this, "Month")
            }
            var Wt = ot;
            var Nt = ot;

            function Yt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, i = [],
                    a = [],
                    r = [];
                for (e = 0; e < 12; e++) n = g([2e3, e]), i.push(this.monthsShort(n, "")), a.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
                for (i.sort(t), a.sort(t), r.sort(t), e = 0; e < 12; e++) i[e] = dt(i[e]), a[e] = dt(a[e]);
                for (e = 0; e < 24; e++) r[e] = dt(r[e]);
                this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function zt(t) {
                var e;
                if (t < 100 && 0 <= t) {
                    var n = Array.prototype.slice.call(arguments);
                    n[0] = t + 400, e = new Date(Date.UTC.apply(null, n)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)
                } else e = new Date(Date.UTC.apply(null, arguments));
                return e
            }

            function Et(t, e, n) {
                var i = 7 + e - n;
                return i - (7 + zt(t, 0, i).getUTCDay() - e) % 7 - 1
            }

            function Vt(t, e, n, i, a) {
                var r, o, s = 1 + 7 * (e - 1) + (7 + n - i) % 7 + Et(t, i, a);
                return o = s <= 0 ? kt(r = t - 1) + s : s > kt(t) ? (r = t + 1, s - kt(t)) : (r = t, s), {
                    year: r,
                    dayOfYear: o
                }
            }

            function Bt(t, e, n) {
                var i, a, r = Et(t.year(), e, n),
                    o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
                return o < 1 ? i = o + Ht(a = t.year() - 1, e, n) : o > Ht(t.year(), e, n) ? (i = o - Ht(t.year(), e, n), a = t.year() + 1) : (a = t.year(), i = o), {
                    week: i,
                    year: a
                }
            }

            function Ht(t, e, n) {
                var i = Et(t, e, n),
                    a = Et(t + 1, e, n);
                return (kt(t) - i + a) / 7
            }
            B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), F("week", "w"), F("isoWeek", "W"), W("week", 5), W("isoWeek", 5), lt("w", X), lt("ww", X, G), lt("W", X), lt("WW", X, G), ft(["w", "ww", "W", "WW"], function (t, e, n, i) {
                e[i.substr(0, 1)] = k(t)
            });

            function jt(t, e) {
                return t.slice(e, 7).concat(t.slice(0, e))
            }
            B("d", 0, "do", "day"), B("dd", 0, 0, function (t) {
                return this.localeData().weekdaysMin(this, t)
            }), B("ddd", 0, 0, function (t) {
                return this.localeData().weekdaysShort(this, t)
            }), B("dddd", 0, 0, function (t) {
                return this.localeData().weekdays(this, t)
            }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), F("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), lt("d", X), lt("e", X), lt("E", X), lt("dd", function (t, e) {
                return e.weekdaysMinRegex(t)
            }), lt("ddd", function (t, e) {
                return e.weekdaysShortRegex(t)
            }), lt("dddd", function (t, e) {
                return e.weekdaysRegex(t)
            }), ft(["dd", "ddd", "dddd"], function (t, e, n, i) {
                var a = n._locale.weekdaysParse(t, i, n._strict);
                null != a ? e.d = a : m(n).invalidWeekday = t
            }), ft(["d", "e", "E"], function (t, e, n, i) {
                e[i] = k(t)
            });
            var Ut = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
            var Gt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
            var qt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
            var Zt = ot;
            var $t = ot;
            var Xt = ot;

            function Kt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, i, a, r, o = [],
                    s = [],
                    l = [],
                    u = [];
                for (e = 0; e < 7; e++) n = g([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), o.push(i), s.push(a), l.push(r), u.push(i), u.push(a), u.push(r);
                for (o.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) s[e] = dt(s[e]), l[e] = dt(l[e]), u[e] = dt(u[e]);
                this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
            }

            function Jt() {
                return this.hours() % 12 || 12
            }

            function Qt(t, e) {
                B(t, 0, 0, function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), e)
                })
            }

            function te(t, e) {
                return e._meridiemParse
            }
            B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, Jt), B("k", ["kk", 2], 0, function () {
                return this.hours() || 24
            }), B("hmm", 0, 0, function () {
                return "" + Jt.apply(this) + N(this.minutes(), 2)
            }), B("hmmss", 0, 0, function () {
                return "" + Jt.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
            }), B("Hmm", 0, 0, function () {
                return "" + this.hours() + N(this.minutes(), 2)
            }), B("Hmmss", 0, 0, function () {
                return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
            }), Qt("a", !0), Qt("A", !1), F("hour", "h"), W("hour", 13), lt("a", te), lt("A", te), lt("H", X), lt("h", X), lt("k", X), lt("HH", X, G), lt("hh", X, G), lt("kk", X, G), lt("hmm", K), lt("hmmss", J), lt("Hmm", K), lt("Hmmss", J), ct(["H", "HH"], vt), ct(["k", "kk"], function (t, e, n) {
                var i = k(t);
                e[vt] = 24 === i ? 0 : i
            }), ct(["a", "A"], function (t, e, n) {
                n._isPm = n._locale.isPM(t), n._meridiem = t
            }), ct(["h", "hh"], function (t, e, n) {
                e[vt] = k(t), m(n).bigHour = !0
            }), ct("hmm", function (t, e, n) {
                var i = t.length - 2;
                e[vt] = k(t.substr(0, i)), e[bt] = k(t.substr(i)), m(n).bigHour = !0
            }), ct("hmmss", function (t, e, n) {
                var i = t.length - 4,
                    a = t.length - 2;
                e[vt] = k(t.substr(0, i)), e[bt] = k(t.substr(i, 2)), e[yt] = k(t.substr(a)), m(n).bigHour = !0
            }), ct("Hmm", function (t, e, n) {
                var i = t.length - 2;
                e[vt] = k(t.substr(0, i)), e[bt] = k(t.substr(i))
            }), ct("Hmmss", function (t, e, n) {
                var i = t.length - 4,
                    a = t.length - 2;
                e[vt] = k(t.substr(0, i)), e[bt] = k(t.substr(i, 2)), e[yt] = k(t.substr(a))
            });
            var ee, ne = Ct("Hours", !0),
                ie = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: Ft,
                    monthsShort: It,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Ut,
                    weekdaysMin: qt,
                    weekdaysShort: Gt,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                ae = {},
                re = {};

            function oe(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }

            function se(t) {
                var e = null;
                if (!ae[t] && void 0 !== Kn && Kn && Kn.exports) try {
                    e = ee._abbr, Xn("./locale/" + t), le(e)
                } catch (t) {}
                return ae[t]
            }

            function le(t, e) {
                var n;
                return t && ((n = r(e) ? de(t) : ue(t, e)) ? ee = n : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), ee._abbr
            }

            function ue(t, e) {
                if (null === e) return delete ae[t], null;
                var n, i = ie;
                if (e.abbr = t, null != ae[t]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = ae[t]._config;
                else if (null != e.parentLocale)
                    if (null != ae[e.parentLocale]) i = ae[e.parentLocale]._config;
                    else {
                        if (null == (n = se(e.parentLocale))) return re[e.parentLocale] || (re[e.parentLocale] = []), re[e.parentLocale].push({
                            name: t,
                            config: e
                        }), null;
                        i = n._config
                    } return ae[t] = new O(T(i, e)), re[t] && re[t].forEach(function (t) {
                    ue(t.name, t.config)
                }), le(t), ae[t]
            }

            function de(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ee;
                if (!s(t)) {
                    if (e = se(t)) return e;
                    t = [t]
                }
                return function (t) {
                    for (var e, n, i, a, r = 0; r < t.length;) {
                        for (e = (a = oe(t[r]).split("-")).length, n = (n = oe(t[r + 1])) ? n.split("-") : null; 0 < e;) {
                            if (i = se(a.slice(0, e).join("-"))) return i;
                            if (n && n.length >= e && M(a, n, !0) >= e - 1) break;
                            e--
                        }
                        r++
                    }
                    return ee
                }(t)
            }

            function he(t) {
                var e, n = t._a;
                return n && -2 === m(t).overflow && (e = n[mt] < 0 || 11 < n[mt] ? mt : n[pt] < 1 || n[pt] > Ot(n[gt], n[mt]) ? pt : n[vt] < 0 || 24 < n[vt] || 24 === n[vt] && (0 !== n[bt] || 0 !== n[yt] || 0 !== n[xt]) ? vt : n[bt] < 0 || 59 < n[bt] ? bt : n[yt] < 0 || 59 < n[yt] ? yt : n[xt] < 0 || 999 < n[xt] ? xt : -1, m(t)._overflowDayOfYear && (e < gt || pt < e) && (e = pt), m(t)._overflowWeeks && -1 === e && (e = _t), m(t)._overflowWeekday && -1 === e && (e = wt), m(t).overflow = e), t
            }

            function ce(t, e, n) {
                return null != t ? t : null != e ? e : n
            }

            function fe(t) {
                var e, n, i, a, r, o = [];
                if (!t._d) {
                    var s, l;
                    for (s = t, l = new Date(c.now()), i = s._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], t._w && null == t._a[pt] && null == t._a[mt] && function (t) {
                            var e, n, i, a, r, o, s, l;
                            if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, o = 4, n = ce(e.GG, t._a[gt], Bt(Pe(), 1, 4).year), i = ce(e.W, 1), ((a = ce(e.E, 1)) < 1 || 7 < a) && (l = !0);
                            else {
                                r = t._locale._week.dow, o = t._locale._week.doy;
                                var u = Bt(Pe(), r, o);
                                n = ce(e.gg, t._a[gt], u.year), i = ce(e.w, u.week), null != e.d ? ((a = e.d) < 0 || 6 < a) && (l = !0) : null != e.e ? (a = e.e + r, (e.e < 0 || 6 < e.e) && (l = !0)) : a = r
                            }
                            i < 1 || i > Ht(n, r, o) ? m(t)._overflowWeeks = !0 : null != l ? m(t)._overflowWeekday = !0 : (s = Vt(n, i, a, r, o), t._a[gt] = s.year, t._dayOfYear = s.dayOfYear)
                        }(t), null != t._dayOfYear && (r = ce(t._a[gt], i[gt]), (t._dayOfYear > kt(r) || 0 === t._dayOfYear) && (m(t)._overflowDayOfYear = !0), n = zt(r, 0, t._dayOfYear), t._a[mt] = n.getUTCMonth(), t._a[pt] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = o[e] = i[e];
                    for (; e < 7; e++) t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[vt] && 0 === t._a[bt] && 0 === t._a[yt] && 0 === t._a[xt] && (t._nextDay = !0, t._a[vt] = 0), t._d = (t._useUTC ? zt : function (t, e, n, i, a, r, o) {
                        var s;
                        return t < 100 && 0 <= t ? (s = new Date(t + 400, e, n, i, a, r, o), isFinite(s.getFullYear()) && s.setFullYear(t)) : s = new Date(t, e, n, i, a, r, o), s
                    }).apply(null, o), a = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[vt] = 24), t._w && void 0 !== t._w.d && t._w.d !== a && (m(t).weekdayMismatch = !0)
                }
            }
            var ge = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                me = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                pe = /Z|[+-]\d\d(?::?\d\d)?/,
                ve = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                be = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                ye = /^\/?Date\((\-?\d+)/i;

            function xe(t) {
                var e, n, i, a, r, o, s = t._i,
                    l = ge.exec(s) || me.exec(s);
                if (l) {
                    for (m(t).iso = !0, e = 0, n = ve.length; e < n; e++)
                        if (ve[e][1].exec(l[1])) {
                            a = ve[e][0], i = !1 !== ve[e][2];
                            break
                        } if (null == a) return void(t._isValid = !1);
                    if (l[3]) {
                        for (e = 0, n = be.length; e < n; e++)
                            if (be[e][1].exec(l[3])) {
                                r = (l[2] || " ") + be[e][0];
                                break
                            } if (null == r) return void(t._isValid = !1)
                    }
                    if (!i && null != r) return void(t._isValid = !1);
                    if (l[4]) {
                        if (!pe.exec(l[4])) return void(t._isValid = !1);
                        o = "Z"
                    }
                    t._f = a + (r || "") + (o || ""), Se(t)
                } else t._isValid = !1
            }
            var _e = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

            function we(t, e, n, i, a, r) {
                var o = [function (t) {
                    var e = parseInt(t, 10); {
                        if (e <= 49) return 2e3 + e;
                        if (e <= 999) return 1900 + e
                    }
                    return e
                }(t), It.indexOf(e), parseInt(n, 10), parseInt(i, 10), parseInt(a, 10)];
                return r && o.push(parseInt(r, 10)), o
            }
            var ke = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };

            function Me(t) {
                var e, n, i, a = _e.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (a) {
                    var r = we(a[4], a[3], a[2], a[5], a[6], a[7]);
                    if (e = a[1], n = r, i = t, e && Gt.indexOf(e) !== new Date(n[0], n[1], n[2]).getDay() && (m(i).weekdayMismatch = !0, !void(i._isValid = !1))) return;
                    t._a = r, t._tzm = function (t, e, n) {
                        if (t) return ke[t];
                        if (e) return 0;
                        var i = parseInt(n, 10),
                            a = i % 100;
                        return 60 * ((i - a) / 100) + a
                    }(a[8], a[9], a[10]), t._d = zt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), m(t).rfc2822 = !0
                } else t._isValid = !1
            }

            function Se(t) {
                if (t._f !== c.ISO_8601)
                    if (t._f !== c.RFC_2822) {
                        t._a = [], m(t).empty = !0;
                        var e, n, i, a, r, o, s, l, u = "" + t._i,
                            d = u.length,
                            h = 0;
                        for (i = j(t._f, t._locale).match(Y) || [], e = 0; e < i.length; e++) a = i[e], (n = (u.match(ut(a, t)) || [])[0]) && (0 < (r = u.substr(0, u.indexOf(n))).length && m(t).unusedInput.push(r), u = u.slice(u.indexOf(n) + n.length), h += n.length), V[a] ? (n ? m(t).empty = !1 : m(t).unusedTokens.push(a), o = a, l = t, null != (s = n) && f(ht, o) && ht[o](s, l._a, l, o)) : t._strict && !n && m(t).unusedTokens.push(a);
                        m(t).charsLeftOver = d - h, 0 < u.length && m(t).unusedInput.push(u), t._a[vt] <= 12 && !0 === m(t).bigHour && 0 < t._a[vt] && (m(t).bigHour = void 0), m(t).parsedDateParts = t._a.slice(0), m(t).meridiem = t._meridiem, t._a[vt] = function (t, e, n) {
                            var i;
                            if (null == n) return e;
                            return null != t.meridiemHour ? t.meridiemHour(e, n) : (null != t.isPM && ((i = t.isPM(n)) && e < 12 && (e += 12), i || 12 !== e || (e = 0)), e)
                        }(t._locale, t._a[vt], t._meridiem), fe(t), he(t)
                    } else Me(t);
                else xe(t)
            }

            function De(t) {
                var e, n, i = t._i,
                    a = t._f;
                return t._locale = t._locale || de(t._l), null === i || void 0 === a && "" === i ? v({
                    nullInput: !0
                }) : ("string" == typeof i && (t._i = i = t._locale.preparse(i)), _(i) ? new x(he(i)) : (o(i) ? t._d = i : s(a) ? function (t) {
                    var e, n, i, a, r;
                    if (0 === t._f.length) return m(t).invalidFormat = !0, t._d = new Date(NaN);
                    for (a = 0; a < t._f.length; a++) r = 0, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[a], Se(e), p(e) && (r += m(e).charsLeftOver, r += 10 * m(e).unusedTokens.length, m(e).score = r, (null == i || r < i) && (i = r, n = e));
                    h(t, n || e)
                }(t) : a ? Se(t) : r(n = (e = t)._i) ? e._d = new Date(c.now()) : o(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? function (t) {
                    var e = ye.exec(t._i);
                    null === e ? (xe(t), !1 === t._isValid && (delete t._isValid, Me(t), !1 === t._isValid && (delete t._isValid, c.createFromInputFallback(t)))) : t._d = new Date(+e[1])
                }(e) : s(n) ? (e._a = d(n.slice(0), function (t) {
                    return parseInt(t, 10)
                }), fe(e)) : l(n) ? function (t) {
                    if (!t._d) {
                        var e = L(t._i);
                        t._a = d([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                            return t && parseInt(t, 10)
                        }), fe(t)
                    }
                }(e) : u(n) ? e._d = new Date(n) : c.createFromInputFallback(e), p(t) || (t._d = null), t))
            }

            function Ce(t, e, n, i, a) {
                var r, o = {};
                return !0 !== n && !1 !== n || (i = n, n = void 0), (l(t) && function (t) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                    var e;
                    for (e in t)
                        if (t.hasOwnProperty(e)) return;
                    return 1
                }(t) || s(t) && 0 === t.length) && (t = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = n, o._i = t, o._f = e, o._strict = i, (r = new x(he(De(o))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
            }

            function Pe(t, e, n, i) {
                return Ce(t, e, n, i, !1)
            }
            c.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }), c.ISO_8601 = function () {}, c.RFC_2822 = function () {};
            var Te = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var t = Pe.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t < this ? this : t : v()
                }),
                Oe = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var t = Pe.apply(null, arguments);
                    return this.isValid() && t.isValid() ? this < t ? this : t : v()
                });

            function Ae(t, e) {
                var n, i;
                if (1 === e.length && s(e[0]) && (e = e[0]), !e.length) return Pe();
                for (n = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](n) || (n = e[i]);
                return n
            }
            var Fe = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function Ie(t) {
                var e = L(t),
                    n = e.year || 0,
                    i = e.quarter || 0,
                    a = e.month || 0,
                    r = e.week || e.isoWeek || 0,
                    o = e.day || 0,
                    s = e.hour || 0,
                    l = e.minute || 0,
                    u = e.second || 0,
                    d = e.millisecond || 0;
                this._isValid = function (t) {
                    for (var e in t)
                        if (-1 === St.call(Fe, e) || null != t[e] && isNaN(t[e])) return !1;
                    for (var n = !1, i = 0; i < Fe.length; ++i)
                        if (t[Fe[i]]) {
                            if (n) return !1;
                            parseFloat(t[Fe[i]]) !== k(t[Fe[i]]) && (n = !0)
                        } return !0
                }(e), this._milliseconds = +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +o + 7 * r, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = de(), this._bubble()
            }

            function Le(t) {
                return t instanceof Ie
            }

            function Re(t) {
                return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
            }

            function We(t, n) {
                B(t, 0, 0, function () {
                    var t = this.utcOffset(),
                        e = "+";
                    return t < 0 && (t = -t, e = "-"), e + N(~~(t / 60), 2) + n + N(~~t % 60, 2)
                })
            }
            We("Z", ":"), We("ZZ", ""), lt("Z", rt), lt("ZZ", rt), ct(["Z", "ZZ"], function (t, e, n) {
                n._useUTC = !0, n._tzm = Ye(rt, t)
            });
            var Ne = /([\+\-]|\d\d)/gi;

            function Ye(t, e) {
                var n = (e || "").match(t);
                if (null === n) return null;
                var i = ((n[n.length - 1] || []) + "").match(Ne) || ["-", 0, 0],
                    a = 60 * i[1] + k(i[2]);
                return 0 === a ? 0 : "+" === i[0] ? a : -a
            }

            function ze(t, e) {
                var n, i;
                return e._isUTC ? (n = e.clone(), i = (_(t) || o(t) ? t.valueOf() : Pe(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + i), c.updateOffset(n, !1), n) : Pe(t).local()
            }

            function Ee(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }

            function Ve() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }
            c.updateOffset = function () {};
            var Be = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                He = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function je(t, e) {
                var n, i, a, r = t,
                    o = null;
                return Le(t) ? r = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                } : u(t) ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (o = Be.exec(t)) ? (n = "-" === o[1] ? -1 : 1, r = {
                    y: 0,
                    d: k(o[pt]) * n,
                    h: k(o[vt]) * n,
                    m: k(o[bt]) * n,
                    s: k(o[yt]) * n,
                    ms: k(Re(1e3 * o[xt])) * n
                }) : (o = He.exec(t)) ? (n = "-" === o[1] ? -1 : 1, r = {
                    y: Ue(o[2], n),
                    M: Ue(o[3], n),
                    w: Ue(o[4], n),
                    d: Ue(o[5], n),
                    h: Ue(o[6], n),
                    m: Ue(o[7], n),
                    s: Ue(o[8], n)
                }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (a = function (t, e) {
                    var n;
                    if (!t.isValid() || !e.isValid()) return {
                        milliseconds: 0,
                        months: 0
                    };
                    e = ze(e, t), t.isBefore(e) ? n = Ge(t, e) : ((n = Ge(e, t)).milliseconds = -n.milliseconds, n.months = -n.months);
                    return n
                }(Pe(r.from), Pe(r.to)), (r = {}).ms = a.milliseconds, r.M = a.months), i = new Ie(r), Le(t) && f(t, "_locale") && (i._locale = t._locale), i
            }

            function Ue(t, e) {
                var n = t && parseFloat(t.replace(",", "."));
                return (isNaN(n) ? 0 : n) * e
            }

            function Ge(t, e) {
                var n = {};
                return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = e - t.clone().add(n.months, "M"), n
            }

            function qe(i, a) {
                return function (t, e) {
                    var n;
                    return null === e || isNaN(+e) || (C(a, "moment()." + a + "(period, number) is deprecated. Please use moment()." + a + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = t, t = e, e = n), Ze(this, je(t = "string" == typeof t ? +t : t, e), i), this
                }
            }

            function Ze(t, e, n, i) {
                var a = e._milliseconds,
                    r = Re(e._days),
                    o = Re(e._months);
                t.isValid() && (i = null == i || i, o && Lt(t, Pt(t, "Month") + o * n), r && Tt(t, "Date", Pt(t, "Date") + r * n), a && t._d.setTime(t._d.valueOf() + a * n), i && c.updateOffset(t, r || o))
            }
            je.fn = Ie.prototype, je.invalid = function () {
                return je(NaN)
            };
            var $e = qe(1, "add"),
                Xe = qe(-1, "subtract");

            function Ke(t, e) {
                var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    i = t.clone().add(n, "months");
                return -(n + (e - i < 0 ? (e - i) / (i - t.clone().add(n - 1, "months")) : (e - i) / (t.clone().add(1 + n, "months") - i))) || 0
            }

            function Je(t) {
                var e;
                return void 0 === t ? this._locale._abbr : (null != (e = de(t)) && (this._locale = e), this)
            }
            c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Qe = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
                return void 0 === t ? this.localeData() : this.locale(t)
            });

            function tn() {
                return this._locale
            }
            var en = 126227808e5;

            function nn(t, e) {
                return (t % e + e) % e
            }

            function an(t, e, n) {
                return t < 100 && 0 <= t ? new Date(t + 400, e, n) - en : new Date(t, e, n).valueOf()
            }

            function rn(t, e, n) {
                return t < 100 && 0 <= t ? Date.UTC(t + 400, e, n) - en : Date.UTC(t, e, n)
            }

            function on(t, e) {
                B(0, [t, t.length], 0, e)
            }

            function sn(t, e, n, i, a) {
                var r;
                return null == t ? Bt(this, i, a).year : ((r = Ht(t, i, a)) < e && (e = r), function (t, e, n, i, a) {
                    var r = Vt(t, e, n, i, a),
                        o = zt(r.year, 0, r.dayOfYear);
                    return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
                }.call(this, t, e, n, i, a))
            }
            B(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            }), B(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }), on("gggg", "weekYear"), on("ggggg", "weekYear"), on("GGGG", "isoWeekYear"), on("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), W("weekYear", 1), W("isoWeekYear", 1), lt("G", it), lt("g", it), lt("GG", X, G), lt("gg", X, G), lt("GGGG", tt, Z), lt("gggg", tt, Z), lt("GGGGG", et, $), lt("ggggg", et, $), ft(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
                e[i.substr(0, 2)] = k(t)
            }), ft(["gg", "GG"], function (t, e, n, i) {
                e[i] = c.parseTwoDigitYear(t)
            }), B("Q", 0, "Qo", "quarter"), F("quarter", "Q"), W("quarter", 7), lt("Q", U), ct("Q", function (t, e) {
                e[mt] = 3 * (k(t) - 1)
            }), B("D", ["DD", 2], "Do", "date"), F("date", "D"), W("date", 9), lt("D", X), lt("DD", X, G), lt("Do", function (t, e) {
                return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
            }), ct(["D", "DD"], pt), ct("Do", function (t, e) {
                e[pt] = k(t.match(X)[0])
            });
            var ln = Ct("Date", !0);
            B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), W("dayOfYear", 4), lt("DDD", Q), lt("DDDD", q), ct(["DDD", "DDDD"], function (t, e, n) {
                n._dayOfYear = k(t)
            }), B("m", ["mm", 2], 0, "minute"), F("minute", "m"), W("minute", 14), lt("m", X), lt("mm", X, G), ct(["m", "mm"], bt);
            var un = Ct("Minutes", !1);
            B("s", ["ss", 2], 0, "second"), F("second", "s"), W("second", 15), lt("s", X), lt("ss", X, G), ct(["s", "ss"], yt);
            var dn, hn = Ct("Seconds", !1);
            for (B("S", 0, 0, function () {
                    return ~~(this.millisecond() / 100)
                }), B(0, ["SS", 2], 0, function () {
                    return ~~(this.millisecond() / 10)
                }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function () {
                    return 10 * this.millisecond()
                }), B(0, ["SSSSS", 5], 0, function () {
                    return 100 * this.millisecond()
                }), B(0, ["SSSSSS", 6], 0, function () {
                    return 1e3 * this.millisecond()
                }), B(0, ["SSSSSSS", 7], 0, function () {
                    return 1e4 * this.millisecond()
                }), B(0, ["SSSSSSSS", 8], 0, function () {
                    return 1e5 * this.millisecond()
                }), B(0, ["SSSSSSSSS", 9], 0, function () {
                    return 1e6 * this.millisecond()
                }), F("millisecond", "ms"), W("millisecond", 16), lt("S", Q, U), lt("SS", Q, G), lt("SSS", Q, q), dn = "SSSS"; dn.length <= 9; dn += "S") lt(dn, nt);

            function cn(t, e) {
                e[xt] = k(1e3 * ("0." + t))
            }
            for (dn = "S"; dn.length <= 9; dn += "S") ct(dn, cn);
            var fn = Ct("Milliseconds", !1);
            B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
            var gn = x.prototype;

            function mn(t) {
                return t
            }
            gn.add = $e, gn.calendar = function (t, e) {
                var n = t || Pe(),
                    i = ze(n, this).startOf("day"),
                    a = c.calendarFormat(this, i) || "sameElse",
                    r = e && (P(e[a]) ? e[a].call(this, n) : e[a]);
                return this.format(r || this.localeData().calendar(a, this, Pe(n)))
            }, gn.clone = function () {
                return new x(this)
            }, gn.diff = function (t, e, n) {
                var i, a, r;
                if (!this.isValid()) return NaN;
                if (!(i = ze(t, this)).isValid()) return NaN;
                switch (a = 6e4 * (i.utcOffset() - this.utcOffset()), e = I(e)) {
                    case "year":
                        r = Ke(this, i) / 12;
                        break;
                    case "month":
                        r = Ke(this, i);
                        break;
                    case "quarter":
                        r = Ke(this, i) / 3;
                        break;
                    case "second":
                        r = (this - i) / 1e3;
                        break;
                    case "minute":
                        r = (this - i) / 6e4;
                        break;
                    case "hour":
                        r = (this - i) / 36e5;
                        break;
                    case "day":
                        r = (this - i - a) / 864e5;
                        break;
                    case "week":
                        r = (this - i - a) / 6048e5;
                        break;
                    default:
                        r = this - i
                }
                return n ? r : w(r)
            }, gn.endOf = function (t) {
                var e;
                if (void 0 === (t = I(t)) || "millisecond" === t || !this.isValid()) return this;
                var n = this._isUTC ? rn : an;
                switch (t) {
                    case "year":
                        e = n(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        e = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        e = n(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        e = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        e = n(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        e = this._d.valueOf(), e += 36e5 - nn(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                        break;
                    case "minute":
                        e = this._d.valueOf(), e += 6e4 - nn(e, 6e4) - 1;
                        break;
                    case "second":
                        e = this._d.valueOf(), e += 1e3 - nn(e, 1e3) - 1
                }
                return this._d.setTime(e), c.updateOffset(this, !0), this
            }, gn.format = function (t) {
                t = t || (this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
                var e = H(this, t);
                return this.localeData().postformat(e)
            }, gn.from = function (t, e) {
                return this.isValid() && (_(t) && t.isValid() || Pe(t).isValid()) ? je({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }, gn.fromNow = function (t) {
                return this.from(Pe(), t)
            }, gn.to = function (t, e) {
                return this.isValid() && (_(t) && t.isValid() || Pe(t).isValid()) ? je({
                    from: this,
                    to: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }, gn.toNow = function (t) {
                return this.to(Pe(), t)
            }, gn.get = function (t) {
                return P(this[t = I(t)]) ? this[t]() : this
            }, gn.invalidAt = function () {
                return m(this).overflow
            }, gn.isAfter = function (t, e) {
                var n = _(t) ? t : Pe(t);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = I(e) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
            }, gn.isBefore = function (t, e) {
                var n = _(t) ? t : Pe(t);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = I(e) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
            }, gn.isBetween = function (t, e, n, i) {
                var a = _(t) ? t : Pe(t),
                    r = _(e) ? e : Pe(e);
                return !!(this.isValid() && a.isValid() && r.isValid()) && (("(" === (i = i || "()")[0] ? this.isAfter(a, n) : !this.isBefore(a, n)) && (")" === i[1] ? this.isBefore(r, n) : !this.isAfter(r, n)))
            }, gn.isSame = function (t, e) {
                var n, i = _(t) ? t : Pe(t);
                return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = I(e) || "millisecond") ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
            }, gn.isSameOrAfter = function (t, e) {
                return this.isSame(t, e) || this.isAfter(t, e)
            }, gn.isSameOrBefore = function (t, e) {
                return this.isSame(t, e) || this.isBefore(t, e)
            }, gn.isValid = function () {
                return p(this)
            }, gn.lang = Qe, gn.locale = Je, gn.localeData = tn, gn.max = Oe, gn.min = Te, gn.parsingFlags = function () {
                return h({}, m(this))
            }, gn.set = function (t, e) {
                if ("object" == typeof t)
                    for (var n = function (t) {
                            var e = [];
                            for (var n in t) e.push({
                                unit: n,
                                priority: R[n]
                            });
                            return e.sort(function (t, e) {
                                return t.priority - e.priority
                            }), e
                        }(t = L(t)), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit]);
                else if (P(this[t = I(t)])) return this[t](e);
                return this
            }, gn.startOf = function (t) {
                var e;
                if (void 0 === (t = I(t)) || "millisecond" === t || !this.isValid()) return this;
                var n = this._isUTC ? rn : an;
                switch (t) {
                    case "year":
                        e = n(this.year(), 0, 1);
                        break;
                    case "quarter":
                        e = n(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        e = n(this.year(), this.month(), 1);
                        break;
                    case "week":
                        e = n(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        e = n(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        e = this._d.valueOf(), e -= nn(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                        break;
                    case "minute":
                        e = this._d.valueOf(), e -= nn(e, 6e4);
                        break;
                    case "second":
                        e = this._d.valueOf(), e -= nn(e, 1e3)
                }
                return this._d.setTime(e), c.updateOffset(this, !0), this
            }, gn.subtract = Xe, gn.toArray = function () {
                return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
            }, gn.toObject = function () {
                return {
                    years: this.year(),
                    months: this.month(),
                    date: this.date(),
                    hours: this.hours(),
                    minutes: this.minutes(),
                    seconds: this.seconds(),
                    milliseconds: this.milliseconds()
                }
            }, gn.toDate = function () {
                return new Date(this.valueOf())
            }, gn.toISOString = function (t) {
                if (!this.isValid()) return null;
                var e = !0 !== t,
                    n = e ? this.clone().utc() : this;
                return n.year() < 0 || 9999 < n.year() ? H(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : P(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", H(n, "Z")) : H(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, gn.inspect = function () {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var t = "moment",
                    e = "";
                this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
                var n = "[" + t + '("]',
                    i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    a = e + '[")]';
                return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + a)
            }, gn.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
            }, gn.toString = function () {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, gn.unix = function () {
                return Math.floor(this.valueOf() / 1e3)
            }, gn.valueOf = function () {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, gn.creationData = function () {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, gn.year = Dt, gn.isLeapYear = function () {
                return Mt(this.year())
            }, gn.weekYear = function (t) {
                return sn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, gn.isoWeekYear = function (t) {
                return sn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, gn.quarter = gn.quarters = function (t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            }, gn.month = Rt, gn.daysInMonth = function () {
                return Ot(this.year(), this.month())
            }, gn.week = gn.weeks = function (t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            }, gn.isoWeek = gn.isoWeeks = function (t) {
                var e = Bt(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            }, gn.weeksInYear = function () {
                var t = this.localeData()._week;
                return Ht(this.year(), t.dow, t.doy)
            }, gn.isoWeeksInYear = function () {
                return Ht(this.year(), 1, 4)
            }, gn.date = ln, gn.day = gn.days = function (t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (e = t, n = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = n.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - i, "d")) : i
            }, gn.weekday = function (t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            }, gn.isoWeekday = function (t) {
                if (!this.isValid()) return null != t ? this : NaN;
                if (null == t) return this.day() || 7;
                var e, n, i = (e = t, n = this.localeData(), "string" == typeof e ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
                return this.day(this.day() % 7 ? i : i - 7)
            }, gn.dayOfYear = function (t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            }, gn.hour = gn.hours = ne, gn.minute = gn.minutes = un, gn.second = gn.seconds = hn, gn.millisecond = gn.milliseconds = fn, gn.utcOffset = function (t, e, n) {
                var i, a = this._offset || 0;
                if (!this.isValid()) return null != t ? this : NaN;
                if (null == t) return this._isUTC ? a : Ee(this);
                if ("string" == typeof t) {
                    if (null === (t = Ye(rt, t))) return this
                } else Math.abs(t) < 16 && !n && (t *= 60);
                return !this._isUTC && e && (i = Ee(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), a !== t && (!e || this._changeInProgress ? Ze(this, je(t - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this
            }, gn.utc = function (t) {
                return this.utcOffset(0, t)
            }, gn.local = function (t) {
                return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ee(this), "m")), this
            }, gn.parseZone = function () {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var t = Ye(at, this._i);
                    null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                }
                return this
            }, gn.hasAlignedHourOffset = function (t) {
                return !!this.isValid() && (t = t ? Pe(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
            }, gn.isDST = function () {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, gn.isLocal = function () {
                return !!this.isValid() && !this._isUTC
            }, gn.isUtcOffset = function () {
                return !!this.isValid() && this._isUTC
            }, gn.isUtc = Ve, gn.isUTC = Ve, gn.zoneAbbr = function () {
                return this._isUTC ? "UTC" : ""
            }, gn.zoneName = function () {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, gn.dates = n("dates accessor is deprecated. Use date instead.", ln), gn.months = n("months accessor is deprecated. Use month instead", Rt), gn.years = n("years accessor is deprecated. Use year instead", Dt), gn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
                return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
            }), gn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
                if (!r(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if (y(t, this), (t = De(t))._a) {
                    var e = (t._isUTC ? g : Pe)(t._a);
                    this._isDSTShifted = this.isValid() && 0 < M(t._a, e.toArray())
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            });
            var pn = O.prototype;

            function vn(t, e, n, i) {
                var a = de(),
                    r = g().set(i, e);
                return a[n](r, t)
            }

            function bn(t, e, n) {
                if (u(t) && (e = t, t = void 0), t = t || "", null != e) return vn(t, e, n, "month");
                var i, a = [];
                for (i = 0; i < 12; i++) a[i] = vn(t, i, n, "month");
                return a
            }

            function yn(t, e, n, i) {
                e = ("boolean" == typeof t ? u(e) && (n = e, e = void 0) : (e = t, t = !1, u(n = e) && (n = e, e = void 0)), e || "");
                var a, r = de(),
                    o = t ? r._week.dow : 0;
                if (null != n) return vn(e, (n + o) % 7, i, "day");
                var s = [];
                for (a = 0; a < 7; a++) s[a] = vn(e, (a + o) % 7, i, "day");
                return s
            }
            pn.calendar = function (t, e, n) {
                var i = this._calendar[t] || this._calendar.sameElse;
                return P(i) ? i.call(e, n) : i
            }, pn.longDateFormat = function (t) {
                var e = this._longDateFormat[t],
                    n = this._longDateFormat[t.toUpperCase()];
                return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
                    return t.slice(1)
                }), this._longDateFormat[t])
            }, pn.invalidDate = function () {
                return this._invalidDate
            }, pn.ordinal = function (t) {
                return this._ordinal.replace("%d", t)
            }, pn.preparse = mn, pn.postformat = mn, pn.relativeTime = function (t, e, n, i) {
                var a = this._relativeTime[n];
                return P(a) ? a(t, e, n, i) : a.replace(/%d/i, t)
            }, pn.pastFuture = function (t, e) {
                var n = this._relativeTime[0 < t ? "future" : "past"];
                return P(n) ? n(e) : n.replace(/%s/i, e)
            }, pn.set = function (t) {
                var e, n;
                for (n in t) P(e = t[n]) ? this[n] = e : this["_" + n] = e;
                this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, pn.months = function (t, e) {
                return t ? s(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || At).test(e) ? "format" : "standalone"][t.month()] : s(this._months) ? this._months : this._months.standalone
            }, pn.monthsShort = function (t, e) {
                return t ? s(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[At.test(e) ? "format" : "standalone"][t.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, pn.monthsParse = function (t, e, n) {
                var i, a, r;
                if (this._monthsParseExact) return function (t, e, n) {
                    var i, a, r, o = t.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) r = g([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase();
                    return n ? "MMM" === e ? -1 !== (a = St.call(this._shortMonthsParse, o)) ? a : null : -1 !== (a = St.call(this._longMonthsParse, o)) ? a : null : "MMM" === e ? -1 !== (a = St.call(this._shortMonthsParse, o)) || -1 !== (a = St.call(this._longMonthsParse, o)) ? a : null : -1 !== (a = St.call(this._longMonthsParse, o)) || -1 !== (a = St.call(this._shortMonthsParse, o)) ? a : null
                }.call(this, t, e, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                    if (a = g([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
                    if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
                    if (!n && this._monthsParse[i].test(t)) return i
                }
            }, pn.monthsRegex = function (t) {
                return this._monthsParseExact ? (f(this, "_monthsRegex") || Yt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = Nt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
            }, pn.monthsShortRegex = function (t) {
                return this._monthsParseExact ? (f(this, "_monthsRegex") || Yt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = Wt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, pn.week = function (t) {
                return Bt(t, this._week.dow, this._week.doy).week
            }, pn.firstDayOfYear = function () {
                return this._week.doy
            }, pn.firstDayOfWeek = function () {
                return this._week.dow
            }, pn.weekdays = function (t, e) {
                var n = s(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
                return !0 === t ? jt(n, this._week.dow) : t ? n[t.day()] : n
            }, pn.weekdaysMin = function (t) {
                return !0 === t ? jt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
            }, pn.weekdaysShort = function (t) {
                return !0 === t ? jt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
            }, pn.weekdaysParse = function (t, e, n) {
                var i, a, r;
                if (this._weekdaysParseExact) return function (t, e, n) {
                    var i, a, r, o = t.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) r = g([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase();
                    return n ? "dddd" === e ? -1 !== (a = St.call(this._weekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = St.call(this._shortWeekdaysParse, o)) ? a : null : -1 !== (a = St.call(this._minWeekdaysParse, o)) ? a : null : "dddd" === e ? -1 !== (a = St.call(this._weekdaysParse, o)) || -1 !== (a = St.call(this._shortWeekdaysParse, o)) || -1 !== (a = St.call(this._minWeekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = St.call(this._shortWeekdaysParse, o)) || -1 !== (a = St.call(this._weekdaysParse, o)) || -1 !== (a = St.call(this._minWeekdaysParse, o)) ? a : null : -1 !== (a = St.call(this._minWeekdaysParse, o)) || -1 !== (a = St.call(this._weekdaysParse, o)) || -1 !== (a = St.call(this._shortWeekdaysParse, o)) ? a : null
                }.call(this, t, e, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                    if (a = g([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
                    if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
                    if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
                    if (!n && this._weekdaysParse[i].test(t)) return i
                }
            }, pn.weekdaysRegex = function (t) {
                return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = Zt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, pn.weekdaysShortRegex = function (t) {
                return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $t), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, pn.weekdaysMinRegex = function (t) {
                return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, pn.isPM = function (t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            }, pn.meridiem = function (t, e, n) {
                return 11 < t ? n ? "pm" : "PM" : n ? "am" : "AM"
            }, le("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (t) {
                    var e = t % 10;
                    return t + (1 === k(t % 100 / 10) ? "th" : 1 == e ? "st" : 2 == e ? "nd" : 3 == e ? "rd" : "th")
                }
            }), c.lang = n("moment.lang is deprecated. Use moment.locale instead.", le), c.langData = n("moment.langData is deprecated. Use moment.localeData instead.", de);
            var xn = Math.abs;

            function _n(t, e, n, i) {
                var a = je(e, n);
                return t._milliseconds += i * a._milliseconds, t._days += i * a._days, t._months += i * a._months, t._bubble()
            }

            function wn(t) {
                return t < 0 ? Math.floor(t) : Math.ceil(t)
            }

            function kn(t) {
                return 4800 * t / 146097
            }

            function Mn(t) {
                return 146097 * t / 4800
            }

            function Sn(t) {
                return function () {
                    return this.as(t)
                }
            }
            var Dn = Sn("ms"),
                Cn = Sn("s"),
                Pn = Sn("m"),
                Tn = Sn("h"),
                On = Sn("d"),
                An = Sn("w"),
                Fn = Sn("M"),
                In = Sn("Q"),
                Ln = Sn("y");

            function Rn(t) {
                return function () {
                    return this.isValid() ? this._data[t] : NaN
                }
            }
            var Wn = Rn("milliseconds"),
                Nn = Rn("seconds"),
                Yn = Rn("minutes"),
                zn = Rn("hours"),
                En = Rn("days"),
                Vn = Rn("months"),
                Bn = Rn("years");
            var Hn = Math.round,
                jn = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                };

            function Un(t, e, n) {
                var i = je(t).abs(),
                    a = Hn(i.as("s")),
                    r = Hn(i.as("m")),
                    o = Hn(i.as("h")),
                    s = Hn(i.as("d")),
                    l = Hn(i.as("M")),
                    u = Hn(i.as("y")),
                    d = (a <= jn.ss ? ["s", a] : a < jn.s && ["ss", a]) || r <= 1 && ["m"] || r < jn.m && ["mm", r] || o <= 1 && ["h"] || o < jn.h && ["hh", o] || s <= 1 && ["d"] || s < jn.d && ["dd", s] || l <= 1 && ["M"] || l < jn.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
                return d[2] = e, d[3] = 0 < +t, d[4] = n,
                    function (t, e, n, i, a) {
                        return a.relativeTime(e || 1, !!n, t, i)
                    }.apply(null, d)
            }
            var Gn = Math.abs;

            function qn(t) {
                return (0 < t) - (t < 0) || +t
            }

            function Zn() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t, e, n = Gn(this._milliseconds) / 1e3,
                    i = Gn(this._days),
                    a = Gn(this._months);
                t = w(n / 60), e = w(t / 60), n %= 60, t %= 60;
                var r = w(a / 12),
                    o = a %= 12,
                    s = i,
                    l = e,
                    u = t,
                    d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                    h = this.asSeconds();
                if (!h) return "P0D";
                var c = h < 0 ? "-" : "",
                    f = qn(this._months) !== qn(h) ? "-" : "",
                    g = qn(this._days) !== qn(h) ? "-" : "",
                    m = qn(this._milliseconds) !== qn(h) ? "-" : "";
                return c + "P" + (r ? f + r + "Y" : "") + (o ? f + o + "M" : "") + (s ? g + s + "D" : "") + (l || u || d ? "T" : "") + (l ? m + l + "H" : "") + (u ? m + u + "M" : "") + (d ? m + d + "S" : "")
            }
            var $n = Ie.prototype;
            return $n.isValid = function () {
                return this._isValid
            }, $n.abs = function () {
                var t = this._data;
                return this._milliseconds = xn(this._milliseconds), this._days = xn(this._days), this._months = xn(this._months), t.milliseconds = xn(t.milliseconds), t.seconds = xn(t.seconds), t.minutes = xn(t.minutes), t.hours = xn(t.hours), t.months = xn(t.months), t.years = xn(t.years), this
            }, $n.add = function (t, e) {
                return _n(this, t, e, 1)
            }, $n.subtract = function (t, e) {
                return _n(this, t, e, -1)
            }, $n.as = function (t) {
                if (!this.isValid()) return NaN;
                var e, n, i = this._milliseconds;
                if ("month" === (t = I(t)) || "quarter" === t || "year" === t) switch (e = this._days + i / 864e5, n = this._months + kn(e), t) {
                    case "month":
                        return n;
                    case "quarter":
                        return n / 3;
                    case "year":
                        return n / 12
                } else switch (e = this._days + Math.round(Mn(this._months)), t) {
                    case "week":
                        return e / 7 + i / 6048e5;
                    case "day":
                        return e + i / 864e5;
                    case "hour":
                        return 24 * e + i / 36e5;
                    case "minute":
                        return 1440 * e + i / 6e4;
                    case "second":
                        return 86400 * e + i / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + i;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }, $n.asMilliseconds = Dn, $n.asSeconds = Cn, $n.asMinutes = Pn, $n.asHours = Tn, $n.asDays = On, $n.asWeeks = An, $n.asMonths = Fn, $n.asQuarters = In, $n.asYears = Ln, $n.valueOf = function () {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
            }, $n._bubble = function () {
                var t, e, n, i, a, r = this._milliseconds,
                    o = this._days,
                    s = this._months,
                    l = this._data;
                return 0 <= r && 0 <= o && 0 <= s || r <= 0 && o <= 0 && s <= 0 || (r += 864e5 * wn(Mn(s) + o), s = o = 0), l.milliseconds = r % 1e3, t = w(r / 1e3), l.seconds = t % 60, e = w(t / 60), l.minutes = e % 60, n = w(e / 60), l.hours = n % 24, o += w(n / 24), s += a = w(kn(o)), o -= wn(Mn(a)), i = w(s / 12), s %= 12, l.days = o, l.months = s, l.years = i, this
            }, $n.clone = function () {
                return je(this)
            }, $n.get = function (t) {
                return t = I(t), this.isValid() ? this[t + "s"]() : NaN
            }, $n.milliseconds = Wn, $n.seconds = Nn, $n.minutes = Yn, $n.hours = zn, $n.days = En, $n.weeks = function () {
                return w(this.days() / 7)
            }, $n.months = Vn, $n.years = Bn, $n.humanize = function (t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e = this.localeData(),
                    n = Un(this, !t, e);
                return t && (n = e.pastFuture(+this, n)), e.postformat(n)
            }, $n.toISOString = Zn, $n.toString = Zn, $n.toJSON = Zn, $n.locale = Je, $n.localeData = tn, $n.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Zn), $n.lang = Qe, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), lt("x", it), lt("X", /[+-]?\d+(\.\d{1,3})?/), ct("X", function (t, e, n) {
                n._d = new Date(1e3 * parseFloat(t, 10))
            }), ct("x", function (t, e, n) {
                n._d = new Date(k(t))
            }), c.version = "2.24.0", t = Pe, c.fn = gn, c.min = function () {
                return Ae("isBefore", [].slice.call(arguments, 0))
            }, c.max = function () {
                return Ae("isAfter", [].slice.call(arguments, 0))
            }, c.now = function () {
                return Date.now ? Date.now() : +new Date
            }, c.utc = g, c.unix = function (t) {
                return Pe(1e3 * t)
            }, c.months = function (t, e) {
                return bn(t, e, "months")
            }, c.isDate = o, c.locale = le, c.invalid = v, c.duration = je, c.isMoment = _, c.weekdays = function (t, e, n) {
                return yn(t, e, n, "weekdays")
            }, c.parseZone = function () {
                return Pe.apply(null, arguments).parseZone()
            }, c.localeData = de, c.isDuration = Le, c.monthsShort = function (t, e) {
                return bn(t, e, "monthsShort")
            }, c.weekdaysMin = function (t, e, n) {
                return yn(t, e, n, "weekdaysMin")
            }, c.defineLocale = ue, c.updateLocale = function (t, e) {
                if (null != e) {
                    var n, i, a = ie;
                    null != (i = se(t)) && (a = i._config), (n = new O(e = T(a, e))).parentLocale = ae[t], ae[t] = n, le(t)
                } else null != ae[t] && (null != ae[t].parentLocale ? ae[t] = ae[t].parentLocale : null != ae[t] && delete ae[t]);
                return ae[t]
            }, c.locales = function () {
                return i(ae)
            }, c.weekdaysShort = function (t, e, n) {
                return yn(t, e, n, "weekdaysShort")
            }, c.normalizeUnits = I, c.relativeTimeRounding = function (t) {
                return void 0 === t ? Hn : "function" == typeof t && (Hn = t, !0)
            }, c.relativeTimeThreshold = function (t, e) {
                return void 0 !== jn[t] && (void 0 === e ? jn[t] : (jn[t] = e, "s" === t && (jn.ss = e - 1), !0))
            }, c.calendarFormat = function (t, e) {
                var n = t.diff(e, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }, c.prototype = gn, c.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, c
        }, "object" == typeof t && void 0 !== Kn ? Kn.exports = n() : "function" == typeof define && define.amd ? define(n) : e.moment = n()
    }, {}],
    3: [function (t, e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function (t) {
            var e, n = {
                    min: -100,
                    max: 100
                },
                i = new a.default(t, {
                    type: "bubble",
                    data: {
                        datasets: d
                    },
                    options: {
                        legend: {
                            display: !1
                        },
                        elements: {
                            point: {
                                borderColor: "rgba(0,0,0,0)",
                                hoverRadius: 0
                            }
                        },
                        animation: {
                            onComplete: function () {
                                e && clearTimeout(e), e = setTimeout(function () {
                                    var n;
                                    n = l(u), d.forEach(function (t, e) {
                                        t.data = s(), t.backgroundColor = n[e]
                                    }), i.update()
                                }, 1e3)
                            }
                        },
                        scales: {
                            xAxes: [{
                                display: !1,
                                ticks: n
                            }],
                            yAxes: [{
                                display: !1,
                                ticks: n
                            }]
                        }
                    }
                })
        };
        var i, a = (i = t("chart.js")) && i.__esModule ? i : {
                default: i
            },
            r = t("../colours.js");

        function o() {
            return (.5 < Math.random() ? 1 : -1) * Math.round(85 * Math.random())
        }
        var s = function (t) {
                for (var e, n = [], i = (0 < arguments.length && void 0 !== t ? t : 10) - 1; 0 <= i; i--) n.push((e = Math.abs(o()) / 5, {
                    x: o(),
                    y: o(),
                    r: e
                }));
                return n
            },
            l = function (t) {
                for (var e = t.length; 0 < e;) {
                    var n = Math.floor(Math.random() * e),
                        i = t[--e];
                    t[e] = t[n], t[n] = i
                }
                return t
            },
            u = [r.grey, r.red, r.yellow, r.blue, r.green],
            d = [{
                backgroundColor: r.grey,
                data: s()
            }, {
                backgroundColor: r.red,
                data: s()
            }, {
                backgroundColor: r.blue,
                data: s()
            }, {
                backgroundColor: r.yellow,
                data: s()
            }, {
                backgroundColor: r.green,
                data: s()
            }]
    }, {
        "../colours.js": 7,
        "chart.js": 1
    }],
    4: [function (t, e, n) {
        "use strict";

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function (t) {
            var e = a.default.helpers.color(r.red),
                n = {
                    datasets: [{
                        borderColor: e.alpha(1).rgbaString(),
                        backgroundColor: e.alpha(.5).rgbaString(),
                        pointBorderColor: e.alpha(1).rgbaString(),
                        pointBackgroundColor: "#FFFFFF",
                        pointBorderWidth: 2,
                        showLine: !0,
                        data: [{
                            x: 1,
                            y: -.01711
                        }, {
                            x: 1.58,
                            y: -.04285
                        }, {
                            x: 2.51,
                            y: -.1068
                        }, {
                            x: 3.98,
                            y: -.2635
                        }, {
                            x: 6.31,
                            y: -.6339
                        }, {
                            x: 10,
                            y: -1.445
                        }, {
                            x: 15.8,
                            y: -2.992
                        }, {
                            x: 25.1,
                            y: -5.429
                        }, {
                            x: 39.8,
                            y: -8.607
                        }, {
                            x: 63.1,
                            y: -12.23
                        }, {
                            x: 100,
                            y: -16.07
                        }]
                    }]
                };
            return new a.default(t, {
                type: "scatter",
                data: n,
                options: {
                    legend: {
                        display: !1
                    },
                    elements: {
                        point: {
                            radius: 4
                        }
                    },
                    scales: {
                        xAxes: [{
                            type: "logarithmic",
                            position: "top",
                            gridLines: {
                                color: "rgba(231,233,237,0.5)",
                                zeroLineColor: "rgba(231,233,237,1)"
                            },
                            ticks: {
                                userCallback: function (t) {
                                    var e = t / Math.pow(10, Math.floor(a.default.helpers.log10(t)));
                                    return 1 == e || 2 == e || 5 == e ? t.toString() : ""
                                }
                            }
                        }],
                        yAxes: [{
                            type: "linear",
                            gridLines: {
                                color: "rgba(231,233,237,0.5)",
                                zeroLineColor: "rgba(231,233,237,1)"
                            },
                            ticks: {
                                display: !1
                            }
                        }]
                    }
                }
            })
        };
        var i, a = (i = t("chart.js")) && i.__esModule ? i : {
                default: i
            },
            r = function (t) {
                if (t && t.__esModule) return t;
                if (null === t || "object" !== o(t) && "function" != typeof t) return {
                    default: t
                };
                var e = s();
                if (e && e.has(t)) return e.get(t);
                var n = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in t)
                    if (Object.prototype.hasOwnProperty.call(t, a)) {
                        var r = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                        r && (r.get || r.set) ? Object.defineProperty(n, a, r) : n[a] = t[a]
                    } n.default = t, e && e.set(t, n);
                return n
            }(t("../colours.js"));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap;
            return s = function () {
                return t
            }, t
        }
    }, {
        "../colours.js": 7,
        "chart.js": 1
    }],
    5: [function (t, e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function (t) {
            for (var e, n, i = function () {
                    return 80 * Math.random() + 20
                }, a = function () {
                    return Math.round(100 * Math.random())
                }, r = [], o = 99; 0 <= o; o--) r.push(i());
            var s = {
                type: "bar",
                options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    legend: {
                        display: !1
                    },
                    scales: {
                        yAxes: [{
                            display: !1,
                            ticks: {
                                beginAtZero: !0
                            }
                        }],
                        xAxes: [{
                            display: !1
                        }]
                    },
                    animation: {
                        onComplete: function () {
                            e && clearTimeout(e), e = setTimeout(function () {
                                for (var t = a() - 1; 0 <= t; t--) r[a()] = i();
                                n.update()
                            }, 2e3)
                        }
                    }
                },
                data: {
                    labels: new Array(100),
                    datasets: [{
                        backgroundColor: "rgba(0,0,0,0.05)",
                        hoverBackgroundColor: "rgba(0,0,0,0.1)",
                        data: r
                    }]
                }
            };
            n = new l.default(t, s)
        };
        var i, l = (i = t("chart.js")) && i.__esModule ? i : {
            default: i
        }
    }, {
        "chart.js": 1
    }],
    6: [function (t, e, n) {
        "use strict";

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function (t) {
            var e = {
                    labels: ["A", "B", "C", "D", "E", "F", "G"],
                    datasets: [{
                        type: "bar",
                        backgroundColor: r.mauve,
                        data: [l(), l(), l(), l(), l(), l(), l()],
                        borderColor: "white",
                        borderWidth: 2
                    }, {
                        type: "bar",
                        backgroundColor: r.blue,
                        data: [l(), l(), l(), l(), l(), l(), l()],
                        borderColor: "white",
                        borderWidth: 2
                    }, {
                        type: "line",
                        backgroundColor: a.default.helpers.color(r.yellow).alpha(.5).rgbaString(),
                        data: [l(), l(), l(), l(), l(), l(), l()],
                        borderColor: a.default.helpers.color(r.yellow).alpha(1).rgbaString(),
                        borderWidth: 1,
                        pointBorderColor: a.default.helpers.color(r.yellow).alpha(1).rgbaString(),
                        pointBorderWidth: 2,
                        pointBackgroundColor: "white"
                    }]
                },
                n = a.default.helpers.color(r.grey).alpha(.5).rgbaString(),
                i = a.default.helpers.color(r.grey).alpha(1).rgbaString();
            return new a.default(t, {
                type: "bar",
                data: e,
                options: {
                    tooltips: {
                        enabled: !1
                    },
                    elements: {
                        point: {
                            radius: 4
                        }
                    },
                    scales: {
                        xAxes: [{
                            barPercentage: .75,
                            gridLines: {
                                color: n,
                                zeroLineColor: i
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: n,
                                zeroLineColor: i
                            },
                            ticks: {
                                display: !1
                            }
                        }]
                    },
                    responsive: !0,
                    legend: {
                        display: !1
                    }
                }
            })
        };
        var i, a = (i = t("chart.js")) && i.__esModule ? i : {
                default: i
            },
            r = function (t) {
                if (t && t.__esModule) return t;
                if (null === t || "object" !== o(t) && "function" != typeof t) return {
                    default: t
                };
                var e = s();
                if (e && e.has(t)) return e.get(t);
                var n = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in t)
                    if (Object.prototype.hasOwnProperty.call(t, a)) {
                        var r = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                        r && (r.get || r.set) ? Object.defineProperty(n, a, r) : n[a] = t[a]
                    } n.default = t, e && e.set(t, n);
                return n
            }(t("../colours.js"));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap;
            return s = function () {
                return t
            }, t
        }
        var l = function () {
            return Math.round(100 * Math.random())
        }
    }, {
        "../colours.js": 7,
        "chart.js": 1
    }],
    7: [function (t, e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.mauve = n.grey = n.green = n.blue = n.yellow = n.red = void 0;
        n.red = "rgba(255,99,132,0.8)";
        n.yellow = "rgba(255,205,86,0.8)";
        n.blue = "rgba(54,162,235,0.8)";
        n.green = "rgba(75,192,192,0.8)";
        n.grey = "rgba(231,233,237,0.8)";
        n.mauve = "rgba(179,181,198,0.8)"
    }, {}],
    8: [function (t, e, n) {
        "use strict";
        var i = l(t("chart.js")),
            a = l(t("./charts/backgroundBars")),
            r = l(t("./charts/mixedTypes")),
            o = l(t("./charts/axisTypes")),
            s = l(t("./charts/animatedChart"));

        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i.default.defaults.global.tooltips.enabled = !1, a.default)(document.getElementById("background-bar").getContext("2d")), (0, r.default)(document.getElementById("mixed-chart").getContext("2d")), (0, o.default)(document.getElementById("axis-chart").getContext("2d")), (0, s.default)(document.getElementById("animate-chart").getContext("2d"))
    }, {
        "./charts/animatedChart": 3,
        "./charts/axisTypes": 4,
        "./charts/backgroundBars": 5,
        "./charts/mixedTypes": 6,
        "chart.js": 1
    }]
}, {}, [8]);