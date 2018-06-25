const assert = require('assert');
const weave = require('../index').weave;
const unweave = require('../index').unweave;

describe('Weave', () => {
    describe('Empty string', () => {
        it('should return empty string when input is empty string', () => {
            assert.equal(weave(''), '');
        })
    });

    describe('String of length 1 or 2', () => {
        it('should return the same string when its length is 1 or 2', () => {
            assert.equal(weave('1'), '1');
            assert.equal(weave('12'), '12');
        })
    });

    describe('String of length even', () => {
        it('should return weaved string when its length is even', () => {
            assert.equal(weave('1234'), '1324');
            assert.equal(weave('cafe'), 'cfae');
            assert.equal(weave('twelve monkeys'), 'tmwoenlkveey s');
        })
    });

    describe('String of length odd', () => {
        it('should return weaved string when its length is odd', () => {
            assert.equal(weave('123'), '132');
            assert.equal(weave('bar'), 'bra');
            assert.equal(weave('the usual suspect'), 't hseu supseucatl');
        })
    });

    describe('String with oddly placed space', () => {
        it('should return weaved string when space at awkward location', () => {
            assert.equal(weave('     '), '     ');
            assert.equal(weave('ab '), 'a b');
            assert.equal(weave('a b'), 'ab ');
        })
    });
});

describe('Unweave', () => {
    describe('Empty string', () => {
        it('should return empty string when input is empty string', () => {
            assert.equal(unweave(''), '');
        })
    });

    describe('String of length 1 or 2', () => {
        it('should return the same string when its length is 1 or 2', () => {
            assert.equal(unweave('1'), '1');
            assert.equal(unweave('ab'), 'ab');
        })
    });

    describe('String of length odd', () => {
        it('should return unweaved string when its length is odd', () => {
            assert.equal(unweave('132'), '123');
            assert.equal(unweave('t hseu supseucatl'), 'the usual suspect');
        })
    });

    describe('String of length even', () => {
        it('should return unweaved string when its length is even', () => {
            assert.equal(unweave('1324'), '1234');
            assert.equal(unweave('tmwoenlkveey s'), 'twelve monkeys');
        })
    })
});

describe('Weave then unweave', () => {
    describe('Round robin', () => {
        const f = 'Fahrenheit 9/11';
        const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        it('should return the original string when we weave then unweave', () => {
            assert.equal(unweave(weave(f)), f);
            assert.equal(unweave(weave(jwtToken)), jwtToken);
        })
    });
});
