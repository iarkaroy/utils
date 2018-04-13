export const is = {
    arr: a => Array.isArray(a),
    obj: a => stringContains(Object.prototype.toString.call(a), 'Object'),
    str: a => typeof a === 'string',
    fnc: a => typeof a === 'function',
    und: a => typeof a === 'undefined',
    num: a => typeof a === 'number',
    nul: a => a === null
};

function stringContains(str, text) {
    return str.indexOf(text) > -1;
}

export function rand(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function range(end, start = 0, step = 1) {
    var arr = [];
    for (var i = start; i < end; i += step) {
        arr[arr.length] = i;
    }
    return arr;
}

export function max(arr) {
    return Math.max.apply(Math, arr);
}

export function min(arr) {
    return Math.min.apply(Math, arr);
}