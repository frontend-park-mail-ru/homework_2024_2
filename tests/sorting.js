'use strict';

QUnit.module('Тестируем функцию sorting', function () {
	QUnit.test('sorting не меняет пустой массив', function (assert) {
		const initial = [];
		const actual = sorting(initial, []);

		const expected = [];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting не изменяет массив, если не передано никаких полей для сортировки', function (assert) {
		const initial = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4}
		];
		const actual = sorting(initial, []);

		const expected = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по численному свойству', function (assert) {
		const initial = [
			{prop1: 30},
			{prop1: 1000},
			{prop1: 4},
			{prop1: 200}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: 4},
			{prop1: 30},
			{prop1: 200},
			{prop1: 1000}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по строковому свойству', function (assert) {
		const initial = [
			{prop1: '30'},
			{prop1: '1000'},
			{prop1: '4'},
			{prop1: '200'}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: '1000'},
			{prop1: '200'},
			{prop1: '30'},
			{prop1: '4'}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting реализует устойчивую сортировку', function (assert) {
		const initial = [
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2},
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует по нескольким полям', function (assert) {
		const initial = [
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 1, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 4, id: '1'},
			{prop1: 4, id: '2'},
			{prop1: 2, id: '1'},
			{prop1: 2, id: '2'}
		];
		const actual = sorting(initial, [ 'id', 'prop1' ]);

		const expected = [
			{prop1: 1, id: '1'},
			{prop1: 2, id: '1'},
			{prop1: 3, id: '1'},
			{prop1: 4, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 2, id: '2'},
			{prop1: 3, id: '2'},
			{prop1: 4, id: '2'}
		];

		assert.deepEqual(actual, expected);
	});


	QUnit.test("Некорректный тип первого параметра", assert => {
		assert.throws(() => sorting(null, ["name"]), /Первый параметр должен быть массивом объектов/, "Должно выбрасывать ошибку, если первый параметр не массив");
	});

	QUnit.test("Некорректный тип второго параметра", assert => {
		const data = [
			{ name: "Charlie", age: 22 },
			{ name: "Alice", age: 25 }
		];
		assert.throws(() => sorting(data, null), /Второй параметр должен быть массивом строк/, "Должно выбрасывать ошибку, если второй параметр не массив строк");
	});

	QUnit.test("Свойство отсутствует у одного из объектов", assert => {
		const data = [
			{ name: "Alice", age: 25 },
			{ name: "Bob", age: 30 }
		];
		assert.throws(() => sorting(data, ["height"]), /Свойство 'height' отсутствует у одного из объектов/, "Должно выбрасывать ошибку, если у объекта отсутствует свойство");
	});

	QUnit.test("Сортировка по пустому массиву свойств", assert => {
		const data = [
			{ name: "Alice", age: 25 },
			{ name: "Bob", age: 30 }
		];
		const result = sorting(data, []);
		assert.deepEqual(result, data, "При пустом массиве свойств исходный массив должен оставаться неизменным");
	});


	QUnit.test("Сортировка объектов на основе значений, содержащих как положительные, так и отрицательные числа.", assert => {
		const data = [
			{ name: "Alice", balance: -50 },
			{ name: "Bob", balance: 0 },
			{ name: "Charlie", balance: 100 },
			{ name: "Dave", balance: -150 }
		];
		const result = sorting(data, ["balance"]);
		assert.deepEqual(result, [
			{ name: "Dave", balance: -150 },
			{ name: "Alice", balance: -50 },
			{ name: "Bob", balance: 0 },
			{ name: "Charlie", balance: 100 }
		], "Должно правильно сортировать числа с положительными и отрицательными значениями");
	});


	QUnit.test("Сортировка объектов, где все значения являются отрицательными", assert => {
		const data = [
			{ name: "Alice", debt: -100 },
			{ name: "Bob", debt: -300 },
			{ name: "Charlie", debt: -200 }
		];
		const result = sorting(data, ["debt"]);
		assert.deepEqual(result, [
			{ name: "Bob", debt: -300 },
			{ name: "Charlie", debt: -200 },
			{ name: "Alice", debt: -100 }
		], "Должно правильно сортировать по отрицательному числовому свойству");
	});
});
