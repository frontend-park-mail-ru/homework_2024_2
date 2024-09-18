'use strict';

QUnit.module('Тестируем функцию plainify на позитивные тесты', function () {
	QUnit.test('plainify работает правильно', function (assert) {
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






    QUnit.test('Plain obj без вложенности', function (assert) {
        const input = { a: 1, b: 2, c: 3 };
        const expected = { a: 1, b: 2, c: 3 };
        assert.deepEqual(plainify(input), expected, 'plainify возвращает исходный объект без изменений');
    });

    QUnit.test('Один уровень вложенности', function (assert) {
        const input = { a: 1, b: { c: 2, d: 3 } };
        const expected = { a: 1, 'b.c': 2, 'b.d': 3 };
        assert.deepEqual(plainify(input), expected, 'plainify корректно обрабатывает один уровень вложенности');
    });

    QUnit.test('Множественные уровни вложенности', function (assert) {
        const input = { a: { b: { c: 1 } } };
        const expected = { 'a.b.c': 1 };
        assert.deepEqual(plainify(input), expected, 'plainify корректно обрабатывает множественные уровни вложенности');
    });

    QUnit.test('Обработка null значений', function (assert) {
        const input = { a: null, b: { c: null } };
        const expected = { a: null, 'b.c': null };
        assert.deepEqual(plainify(input), expected, 'plainify корректно обрабатывает null значения');
    });
});

QUnit.module('Тестируем функцию plainify на негативные кейсы', function () {
    QUnit.test('plainify выбрасывает ошибку при передаче null', function (assert) {
        assert.throws(
            function() {
                plainify(null);
            },
            /Invalid input: plainify expects an object/,
            'plainify выбрасывает ошибку при null'
        );
    });

    QUnit.test('plainify выбрасывает ошибку при передаче строки', function (assert) {
        assert.throws(
            function() {
                plainify('string');
            },
            /Invalid input: plainify expects an object/,
            'plainify выбрасывает ошибку при передаче строки'
        );
    });

    QUnit.test('plainify выбрасывает ошибку при передаче числа', function (assert) {
        assert.throws(
            function() {
                plainify(42);
            },
            /Invalid input: plainify expects an object/,
            'plainify выбрасывает ошибку при передаче числа'
        );
    });

    QUnit.test('plainify выбрасывает ошибку при передаче undefined', function (assert) {
        assert.throws(
            function() {
                plainify(undefined);
            },
            /Invalid input: plainify expects an object/,
            'plainify выбрасывает ошибку при undefined'
        );
    });
});