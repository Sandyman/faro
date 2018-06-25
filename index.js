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
 * Perform weave, handling some outlier cases
 * @param s - Incoming string
 * @returns {string}
 */
const weave = s => {
    if (s === '') return '';
    if (s.length < 3) return s;

    return _weave(s);
};

module.exports = weave;
