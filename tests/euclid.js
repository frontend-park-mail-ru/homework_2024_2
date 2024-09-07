"use strict";

QUnit.module("Тестируем функцию euclid", function () {
  QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [ 80325, 55275, 8746650, 3000000, 45672375, 225, 54675 ];
		assert.strictEqual(euclid(...[ ...temp, ...temp, ...temp, ...temp, ...temp ]), euclid(...temp));
	});

  QUnit.test(
    "Функция должна корректно работать с отрицательными числами", function (assert) {
      assert.strictEqual(euclid(-10, 15), 5, "euclid(-10, 15) === 5");
      assert.strictEqual(euclid(-20, -30), 10, "euclid(-20, -30) === 10");
    }
  );

  QUnit.test("Функция должна корректно работать с нулями", function (assert) {
    assert.strictEqual(euclid(0, 0), 0, "euclid(0, 0) === 0");
    assert.strictEqual(euclid(15, 0), 15, "euclid(15, 0) === 15");
    assert.strictEqual(euclid(0, -3), 3, "euclid(0, -3) === 3");
  });

  QUnit.test(
    "Функция должна выбрасывать ошибки, если есть не числовые элементы", function (assert) {
      assert.throws(
        () => euclid("hello"),
        new TypeError("Все элементы массива должны быть числами"),
        "euclid(hello) === Error(Все элементы массива должны быть числами)"
      );
      assert.throws(
        () => euclid(16, "hello", 4),
        new TypeError("Все элементы массива должны быть числами"),
        "euclid(16, hello, 4) === Error(Все элементы массива должны быть числами)"
      );
      assert.throws(
        () => euclid(16, 8, 4, "hello"),
        new TypeError("Все элементы массива должны быть числами"),
        "euclid(16, 8, 4, hello) === Error(Все элементы массива должны быть числами)"
      );
    }
  );
});
