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