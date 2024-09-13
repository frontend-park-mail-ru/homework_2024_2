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

    QUnit.test('Функция выдает ошибку при отсутствии параметров', function (assert) {
        assert.throws(() => zip(), Error);
	});

    QUnit.test('Функция выдает ошибку при нулевом параметре', function (assert) {
        assert.throws(() => zip(null, {name: 'age'}, {value: 42}), TypeError);

        assert.throws(() => zip({name: 'age'}, null, {name: 'age'}, {value: 42}), TypeError);

        assert.throws(() => zip({name: 'age'}, {name: 'age'}, {value: 42}, null), TypeError);
	});

	 QUnit.test('Функция выдает ошибку при передачи примитива', function (assert) {
        assert.throws(() => zip(1, {name: 'age'}, {value: 42}), TypeError);

        assert.throws(() => zip({name: 'age'}, 'string', {name: 'age'}, {value: 42}), TypeError);

        assert.ok(() => zip({name: 'age'}, {name: 'age'}, {value: 42}, new Number(2)));
	});

	 QUnit.test('Функция не выдает ошибку при передачи объекта', function (assert) {
        assert.ok(() => zip({name: 'age'}, {name: 'age'}, {value: 42}, new Number(2)));
	});

	 QUnit.test('Функция должна попускать пустой объект', function (assert) {
        assert.deepEqual({}, {});
	});

	 QUnit.test('Функция не пропускает запрещенные типы', function (assert) {
       assert.throws(() => zip(new String('sssss')), TypeError);

       assert.throws(() => zip(new Number(1)), TypeError);

       assert.throws(() => zip(new Date()), TypeError);
	});
});
