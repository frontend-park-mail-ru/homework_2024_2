'use strict';

QUnit.module('Тестируем функцию plainify', function () {
	QUnit.test('Преобразование вложенных объектов в плоские', function (assert) {
		assert.deepEqual(plainify({foo: 'bar', baz: 42}), {'foo': 'bar', 'baz': 42});

		const nested1 = {
			deep: {
				foo: 'bar',
				baz: 42
			}
		};

		const plain1 = {
			'deep.foo': 'bar',
			'deep.baz': 42
		};

		assert.deepEqual(plainify(nested1), plain1);

		const nested2 = {
			deep: {
				foobar: 0,
				nested: {
					object: {
						fields: {
							foo: 42,
							bar: 42,
							baz: 42
						}
					}
				}
			}
		};

		const plain2 = {
			'deep.foobar': 0,
			'deep.nested.object.fields.foo': 42,
			'deep.nested.object.fields.bar': 42,
			'deep.nested.object.fields.baz': 42
		};

		assert.deepEqual(plainify(nested2), plain2);
	});

	QUnit.test('Преобразование не объекта', function (assert) {
		assert.deepEqual(plainify('строка'), {}, 'Строка должна преобразоваться в пустой объект');
	});
  
	QUnit.test('Преобразование объекта с null', function (assert) {
		const obj = { 
		foo: null, 
		bar: 42 
		};

		const expected = { 
		foo: null, 
		bar: 42 
		};

		assert.deepEqual(plainify(obj), expected, 'Null должно остаться null');
	});
	
	QUnit.test('Преобразование объекта с массивом', function (assert) {
		const obj = { 
		foo: [1, 2, 3], 
		bar: 42 
		};

		const expected = { 
		foo: [1, 2, 3], 
		bar: 42 
		};

		assert.deepEqual(plainify(obj), expected, 'Массив должен остаться массивом');
	});
	
	QUnit.test('Преобразование объекта с префиксом, не являющимся строкой', function (assert) {
		const obj = { 
		foo: 'bar' 
		};

		const prefix = 42;

		assert.throws(function () {
		plainify(obj, prefix);
		}, 'Префикс должен быть строкой'); 
	});

});
