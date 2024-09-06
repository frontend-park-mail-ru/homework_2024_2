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
		const error = new TypeError('All of the arguments must be objects');
		assert.throws(() => zip(1), error, 'При подаче на вход не объекта должна выбрасываться ошибка');
		assert.throws(() => zip(""), error);
		assert.throws(() => zip(undefined), error);
		assert.throws(() => zip(false), error);
		assert.throws(() => zip(null), error);

		assert.throws(() => zip(1, { name: 'age' }), error);
		assert.throws(() => zip({ name: 'age' }, 1), error);
	});


	QUnit.test('Функция не копирует свойства прототипа объекта', function(assert) {
		const prototypeObj = { prototypeAttr: "Prototype value" };
		const newObj = Object.create(prototypeObj);
		newObj.newAttr = "New value";
		const newObjWithoutPrototype = { newAttr: "New value" };
		assert.deepEqual(zip(newObj), newObjWithoutPrototype);
	});

});
