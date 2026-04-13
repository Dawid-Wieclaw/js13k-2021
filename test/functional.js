/* global describe, it */
import assert from 'assert';

import * as math from '../src/math.js';

describe('Functional Game Logic (Required by Assignment)', () => {
  it('FT1: Should keep player inside the level bound', () => {
    var playerX = 550;
    var boundary = 500;
    var finalPos = math.clamp(playerX, -boundary, boundary);
    assert.strictEqual(finalPos, 500, 'Player must be stopped at the boundary');
  });

  it('FT2: Should reduce health correctly when hit', () => {
    var health = 100;
    var damage = 25;
    health = math.clamp(health - damage, 0, 100);
    assert.strictEqual(health, 75, 'Health should be 75 aftr 25 damage');
  });
});
