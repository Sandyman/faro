const assert = require('assert');
const weave = require('../index');

describe('Weave', () => {
    describe('Empty string', () => {
        it('should return empty string when input is empty string', () => {
            assert.equal(weave(''), '');
        })
    })
});
