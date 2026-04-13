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

  it('FT3: Bullet should be at mid-way at point', () => {
    var strtPoint = 0;
    var targetPoint = 200;

    var bulletCurrentPos = math.lerp(strtPoint, targetPoint, 0.5);
    assert.strictEqual(
      bulletCurrentPos,
      100,
      'Bullet must be at 100 units after half travel',
    );
  });
});
