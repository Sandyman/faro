const assert = require('assert');
const weave = require('../index');

describe('Weave', () => {
    describe('Empty string', () => {
        it('should return empty string when input is empty string', () => {
            assert.equal(weave(''), '');
        })
    });

    describe('String of length 1', () => {
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
            assert.equal(weave('ab '), 'a b');
            assert.equal(weave('a b'), 'ab ');
        })
    });
});
