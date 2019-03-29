/**
 * Refer to https://cp-algorithms.com/string/string-hashing.html
 * @param {string} str 
 */
function hash(str) {
    const p = 31;
    const m = 1e9 + 9;
    let h = 0;
    let pow = 1;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        h = (h + (c - 'a'.charCodeAt(0) + 1) * pow) % m;
        pow = (pow * p) % m;
    }
    return h;
}

function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

function randomColor() {
    color = Math.floor(Math.random()*16777215).toString(16);
    return '#' + padZero(color, 6);
}

function hashColor(str) {
    color = (hash(str) % 16777215).toString(16);
    return '#' + padZero(color, 6);
}

function setInvertedColor(className) {
    let elems = document.getElementsByClassName(className);
    for (const elem of elems) {
        const bgColor = hashColor(elem.innerText);
        const color = invertColor(bgColor, true);
        elem.style['color'] = color;
        elem.style['background-color'] = bgColor;
    }
}