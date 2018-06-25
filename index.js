/**
 * Perform actual weave
 * @param s - Incoming string
 * @returns {string} - Result of the weave
 * @private
 */
const _weave = s => {
    const n = s.length;
    const n2 = Math.ceil(n/2);
    const a1 = s.slice(0, n2).split('');
    const a2 = s.slice(n2).split('');

    const z = [];
    let c = 0;
    while (c < n) {
        z.push(a1.shift());
        z.push(a2.shift());
        c++;
    }

    return z.join('');
};

/**
 * Perform actual unweave
 * @param s
 * @returns {string}
 * @private
 */
const _unweave = s => {
    const a = s.split('');

    const z1 = [];
    const z2 = [];
    a.reduce((ar, v, i) => {
        if ((i % 2) === 0) ar.z1.push(v);
        else ar.z2.push(v);
        return ar;
    }, {z1, z2});
    return z1.join('') + z2.join('');
};

/**
 * Perform weave, handling some outlier cases
 * @param s - Incoming string
 * @returns {string}
 */
const weave = s => {
    if (s === '') return '';
    if (s.length < 3) return s;

    return _weave(s);
};


const unweave = s => {
    if (s === '') return '';
    if (s.length < 3) return s;

    return _unweave(s);
};

module.exports = {
    weave,
    unweave,
};
