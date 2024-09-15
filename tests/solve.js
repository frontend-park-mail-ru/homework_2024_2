'use strict';

QUnit.module('Тестируем функцию solve', function () {
  QUnit.test('solve работает правильно с односимвольными числами', function (assert) {
    assert.strictEqual(solve('x + 1', 1), 2);
    assert.strictEqual(solve('2 + x - 1', 5), 6);
    assert.strictEqual(solve('2 * x - 1', 5), 9);
    assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
    assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
    assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
  });

  QUnit.test('solve работает правильно с многосимвольными числами и делением', function (assert) {
    assert.strictEqual(solve('100 + x', 23), 123);
    assert.strictEqual(solve('100 / 2 + x', 50), 100);
    assert.strictEqual(solve('2 * (x + 5)', 10), 30);
    assert.strictEqual(solve('10 / (x - 5)', 10), 2);
  });

  QUnit.test('solve корректно обрабатывает вложенные скобки', function (assert) {
    assert.strictEqual(solve('((5 - x) * (x + 5)) * (2 + 2)', 3), 64);
    assert.strictEqual(solve('(10 * (x + 1)) / 2', 9), 50);
  });

  QUnit.test('solve работает с пограничными значениями', function (assert) {
    assert.strictEqual(solve('x / 0', 5), Infinity);
    assert.strictEqual(solve('x + 0', 0), 0);
    assert.strictEqual(solve('x - 0', -5), -5);
  });

  QUnit.test('solve работает с отрицательными числами', function (assert) {
    assert.strictEqual(solve('-x + 5', -5), 10);
    assert.strictEqual(solve('x - (-5)', 10), 15);
  });

  QUnit.test('solve работает с выражениями без пробелов и с табуляцией', function (assert) {
    assert.strictEqual(solve('x+5', 10), 15);
    assert.strictEqual(solve('2*(x+5)', 10), 30);
    assert.strictEqual(solve('10/\t(x-5)', 10), 2);
  });
});
