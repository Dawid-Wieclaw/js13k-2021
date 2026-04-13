import * as math from '../src/math.js';
import * as util from '../src/utils.js';
import assert from 'assert';
import Mocha from 'mocha';

describe('Math', () => {
    describe('randFloatSpread', () => {
        it('randFloatSpread(1) <= 1 returns true', () => {
            assert.equal(math.randFloatSpread(1) <= 1, true);
        })
        it('randFloatSpread(1) >= -1 returns true', () => {
            assert.equal(math.randFloatSpread(1) >= -1, true);
        })
        // My tests
        it('randFloatSpread(1) > 1 return false', () => {
            assert.equal(math.randFloatSpread(1) > 1, false);
        })
        it('randFloatSpread(1) < -1 returns false', () => {
            assert.equal(math.randFloatSpread(1) < -1, false);
        })
    })

    describe('mapLinear', () => {
        it('mapLinear(1,2,3,4,5) returns 3', () => {
            assert.equal(math.mapLinear(1, 2, 3, 4, 5), 3);
        })
        it('mapLinear(1,20,3,40,5) returns 0.882352941176471', () => {
            assert.equal(math.mapLinear(1, 20, 3, 40, 5), 0.882352941176471);
        })
    })

    describe('lerp', () => {
        it('lerp(1,3,20) returns 41', () => {
            assert.equal(math.lerp(1, 3, 20), 41);
        })
        it('lerp(1.3,-7,2) returns -15.3', () => {
            assert.equal(math.lerp(1.3, -7, 2), -15.3);
        })
    })

    // My tests
    describe('sample', () => {
        it('Should return a random element from array', () => {
            const array = [1,2,3,4,5];
            assert.equal(array.includes(util.sample(array)), true);
        })
        it('Should retourn the only array element', () => {
            const array = [1];
            assert.equal(util.sample(array), 1);
        })
    })
})