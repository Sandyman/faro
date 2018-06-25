const _weave = s => {
    const n2 = Math.ceil(s.length/2);
    const a1 = s.slice(0, n2).split('');
    const a2 = s.slice(n2).split('');

    const z = [];
    a1.forEach((v) => {
        z.push(v);
        z.push(a2.shift());
    });

    return z.join('');
};

const weave = s => {
    if (s === '') return '';
    if (s.length < 3) return s;

    return _weave(s);
};

module.exports = weave;
