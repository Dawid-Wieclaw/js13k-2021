import * as math from '../src/math.js';
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
})