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
});
