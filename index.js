/**
 * Perform weave on array
 * @param a - Incoming array
 * @returns {Array}
 * @private
 */
const _weaveArray = a => {
    const n2 = Math.ceil(a.length / 2);
    const a1 = a.slice(0, n2);
    const a2 = a.slice(n2);
    const z = [];
    let c = 0;
    while (c++ < n2) {
        z.push(a1.shift());
        z.push(a2.shift());
    }
    return z;
};

/**
 * Unweave array
 * @param a - Incoming array
 * @returns {*[]}
 * @private
 */
const _unweaveArray = a => {
    const z = a.reduce((ar, v, i) => {
        if ((i % 2) === 0) ar.z1.push(v);
        else ar.z2.push(v);
        return ar;
    }, {
        z1: [],
        z2: []
    });
    return z.z1.concat(z.z2);
};

/**
 * Perform actual weave
 * @param s - Incoming string
 * @returns {string} - Result of the weave
 * @private
 */
const _weaveString = s => _weaveArray(s.split('')).join('');

/**
 * Perform actual unweave
 * @param s
 * @returns {string}
 * @private
 */
const _unweaveString = s => _unweaveArray(s.split('')).join('');

/**
 * Perform weave, handling some outlier cases
 * @param s - Incoming string
 * @returns {string}
 */
const weave = s => {
    if (s.length < 3) return s;

    return _weaveString(s);
};

/**
 * Perform unweave, handling some outlier cases
 * @param s - Incoming string
 * @returns {string}
 */
const unweave = s => {
    if (s.length < 3) return s;

    return _unweaveString(s);
};

module.exports = {
    shuffle: weave,
    weave,
    unshuffle: unweave,
    unweave,
};
