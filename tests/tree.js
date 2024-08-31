'use strict';

QUnit.module('Тестируем функцию tree', function() {
  QUnit.test('Ёлочек высотой ниже трёх не бывает', function(assert) {
    assert.strictEqual(tree(0), null);
    assert.strictEqual(tree(1), null);
    assert.strictEqual(tree(2), null);
    assert.strictEqual(tree('0'), null);
    assert.strictEqual(tree('1'), null);
    assert.strictEqual(tree('2'), null);
  });

  QUnit.test('Ёлочек высотой ниже трёх не бывает (дробные числа)', function(assert) {
    assert.strictEqual(tree(0.5), null);
    assert.strictEqual(tree(1.2), null);
    assert.strictEqual(tree(2.9), null);
    assert.strictEqual(tree('0.5'), null);
    assert.strictEqual(tree('1.2'), null);
    assert.strictEqual(tree('2.9'), null);
  });

  QUnit.test('Ёлочек с отрицательной высотой не бывает', function(assert) {
    assert.strictEqual(tree(-1), null);
    assert.strictEqual(tree(-5), null);
    assert.strictEqual(tree('-1'), null);
    assert.strictEqual(tree('-5'), null);
  });

  QUnit.test('Передаём строку, не являющуюся числом', function(assert) {
    assert.strictEqual(tree("test"), null);
    assert.strictEqual(tree(""), null);
  });

  QUnit.test('Передаём объект', function(assert) {
    assert.strictEqual(tree({ test: "test" }), null);
    assert.strictEqual(tree({}), null);
  });

  QUnit.test('Ёлочка высотой 3', function(assert) {
    const expected =
      ' * \n' +
      '***\n' +
      ' | \n';
    assert.strictEqual(tree(3), expected);
    assert.strictEqual(tree('3'), expected);
  });

  QUnit.test('Ёлочка высотой 3.2', function(assert) {
    const expected =
      ' * \n' +
      '***\n' +
      ' | \n';
    assert.strictEqual(tree(3.2), expected);
    assert.strictEqual(tree('3.2'), expected);
  });

  QUnit.test('Ёлочка высотой 4', function(assert) {
    const expected =
      '  *  \n' +
      ' *** \n' +
      '*****\n' +
      '  |  \n';
    assert.strictEqual(tree(4), expected);
    assert.strictEqual(tree('4'), expected);
  });

  QUnit.test('Ёлочка высотой 5', function(assert) {
    const expected =
      '   *   \n' +
      '  ***  \n' +
      ' ***** \n' +
      '*******\n' +
      '   |   \n';
    assert.strictEqual(tree(5), expected);
    assert.strictEqual(tree('5'), expected);
  });

  QUnit.test('Ёлочка высотой 8', function(assert) {
    const expected =
      '      *      \n' +
      '     ***     \n' +
      '    *****    \n' +
      '   *******   \n' +
      '  *********  \n' +
      ' *********** \n' +
      '*************\n' +
      '      |      \n';
    assert.strictEqual(tree(8), expected);
    assert.strictEqual(tree('8'), expected);
  });

  QUnit.test('Ёлочка высотой 8.9', function(assert) {
    const expected =
      '      *      \n' +
      '     ***     \n' +
      '    *****    \n' +
      '   *******   \n' +
      '  *********  \n' +
      ' *********** \n' +
      '*************\n' +
      '      |      \n';
    assert.strictEqual(tree(8.9), expected);
    assert.strictEqual(tree('8.9'), expected);
  });

});
