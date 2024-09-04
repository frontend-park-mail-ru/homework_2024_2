'use strict';

QUnit.module('Тестируем функцию zip', function () {
	QUnit.test('Функция работает с единственным объектом', function (assert) {
		assert.deepEqual(zip({}), {});
		assert.deepEqual(zip({answer: 42}), {answer: 42});
		assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});
		const obj = {
			count: 0,
			cost: '120$'
		};
		assert.deepEqual(zip(obj), obj);
	});

	QUnit.test('Функция работает с falsy свойствами', function(assert) {
		assert.deepEqual(zip({ falsy: "" }), { falsy: "" });
		assert.deepEqual(zip({ falsy: 0 }), { falsy: 0 });
		assert.deepEqual(zip({ falsy: null }), { falsy: null });
		assert.deepEqual(zip({ falsy: NaN }), { falsy: NaN });

		const falsyObj = {
			str: "",
			num: 0,
			bool: false,
			nan: NaN,
		};
		assert.deepEqual(zip({ str: "" }, { num: 0 }, { bool: false }, { nan: NaN }), falsyObj);

	});

	QUnit.test('Функция работает с объектами среди которых есть объекты без свойств', function (assert) {
		assert.deepEqual(zip({}, {}), {});
		assert.deepEqual(zip({answer: 42}, {}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {}, {}, {name: 'Georg'}), {name: 'Georg'});

		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
	});

	QUnit.test('Функция работает с объектами со свойствами с разными именами', function (assert) {
		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({count: 0}, {cost: '120$'}), obj);

		const obj2 = {
			a: 1,
			b: 2,
			c: null,
			d: 4,
			e: 5
		};
		assert.deepEqual(zip({a: 1}, {b: 2}, {c: null}, {d: 4}, {e: 5}), obj2);

		const obj3 = {
			name: 'age',
			value: 42
		};

		const obj4 = {
			prop: false,
			attr: null
		};

		const obj5 = {
			name: 'age',
			value: 42,
			prop: false,
			attr: null
		};

		assert.deepEqual(zip(obj3, obj4), obj5);
	});

	QUnit.test('Функция правильно работает со свойствами, которые встречаются в нескольких объектах', function (assert) {
		assert.deepEqual(zip({answer: 42}, {answer: false}), {answer: 42}, 'Значение должно браться из первого встретившегося поля');
		assert.deepEqual(zip({age: 5}, {}, {age: 4}, {age: 72}), {age: 5});

		const obj = {
			name: 'age',
			value: 42
		};
		assert.deepEqual(zip({name: 'age'}, {value: 42}, {name: 'cost'}, {value: -6}), obj);
	});

	QUnit.test('Функция правильно работает с вложенными объектами', function(assert) {
		assert.deepEqual(zip({ empty: {} }), { empty: {} });

		const obj = {
			val: 5,
			selfref: null
		};
		obj.selfref = obj;
		assert.deepEqual(zip(obj), obj);

		const car = {
			owner: "John",
			type: "sedan",
			allowedDrivers: [
				"Linda",
				"Bill"
			],
		};
		assert.deepEqual(zip(car), car);

	});

	QUnit.test('Функция правильно обрабатывает некорректные входные данные', function(assert) {
		assert.deepEqual(zip(1), undefined, 'При подаче на вход не объекта должно возвращаться undefined');
		assert.deepEqual(zip(""), undefined);
		assert.deepEqual(zip(null), undefined);
		assert.deepEqual(zip(undefined), undefined);
		assert.deepEqual(zip(false), undefined);

		assert.deepEqual(zip(1, { name: 'age' }), undefined);
		assert.deepEqual(zip({ name: 'age' }, 1, undefined));
	});

});
