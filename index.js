/**
 * Perform weave on array
 * @param a - Incoming array
 * @returns {Array}
 * @private
 */
const _weaveArray = a => {
    const z = [];

    const n2 = Math.ceil(a.length / 2);
    const a1 = a.slice(0, n2);
    const a2 = a.slice(n2);
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
    const z = a.reduce((m, v, i) => {
        // Alternate between u (even) and v (odd) arrays in the memo object m
        const q = (i&1) === 0 ? m.u : m.v;
        q.push(v);
        return m;
    }, {
        u: [],
        v: []
    });
    // Concatenate u and v to get the unweaved array
    return z.u.concat(z.v);
};

/**
 * Perform weave, handling some outlier cases
 * @param s - Incoming string
 * @returns {string}
 */
const weave = s => {
    if (s.length < 3) return s;

    return _weaveArray(s.split('')).join('');
};

/**
 * Perform unweave, handling some outlier cases
 * @param s - Incoming string
 * @returns {string}
 */
const unweave = s => {
    if (s.length < 3) return s;

    return _unweaveArray(s.split('')).join('');
};

/**
 * Weave array
 * @param a
 * @returns {*}
 */
const weaveArray = a => {
    if (a.length < 3) return a;

    return _weaveArray(a);
};

/**
 * Unweave array
 * @param a
 * @returns {*}
 */
const unweaveArray = a => {
    if (a.length < 3) return a;

    return _unweaveArray(a);
};

module.exports = {
    // String based functions
    shuffle: weave,
    unshuffle: unweave,
    weave,
    unweave,

    // Array based functions
    shuffleArray: weaveArray,
    unshuffleArray: unweaveArray,
    weaveArray: weaveArray,
    unweaveArray: unweaveArray,
};
