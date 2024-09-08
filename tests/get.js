'use strict';

QUnit.module('Тестируем функцию get', function () {
	QUnit.test('get работает правильно c объектами с существующими свойствами', function (assert) {
		const object = {
			foo: 'bar',
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		assert.strictEqual(get(object, '.foo'), object.foo);
		assert.strictEqual(get(object, '.deep.hested.field'), object.deep.hested.field);

		assert.deepEqual(get(object, '.deep.hested'), object.deep.hested);
		assert.deepEqual(get(object, '.deep'), object.deep);
		assert.deepEqual(get(object, '.'), object);
	});

	QUnit.test('get работает правильно c массивами', function (assert) {
		const object = {
			foo: 'bar',
			baz: [ 1, 2, 3 ],
			deep: [
				{foobar: '42'}
			]
		};

		assert.strictEqual(get(object, '.foo.0'), object.foo[ 0 ]);
		assert.strictEqual(get(object, '.foo.length'), object.foo.length);
		assert.strictEqual(get(object, '.baz.0'), object.baz[ 0 ]);
		assert.strictEqual(get(object, '.baz.length'), object.baz.length);
		assert.strictEqual(get(object, '.deep.0.foobar'), object.deep[ 0 ].foobar);
	});

	QUnit.test('get работает правильно c объектами без свойств', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.strictEqual(get(object, '.foobar'), undefined);
		assert.strictEqual(get(object, '.foo.baz'), undefined);
		assert.strictEqual(get(object, '.baz.0'), undefined);
		assert.strictEqual(get(object, '.baz.length'), undefined);
		assert.strictEqual(get(object, '.0.1.2'), undefined);
	});
	QUnit.test('get работает правильно с пустым объектом', function (assert) {
		const object = {
		};

		assert.strictEqual(get(object, '.foobar'), undefined);
		assert.strictEqual(get(object, '.'), object);
	});
	QUnit.test('get работает правильно с объектами с большой вложенностью', function (assert) {
		const object = {
			foo: {
				bar: {
					baz: {
						deep: {
							more: {
								word: 'ok'
							}
						}
					}
				}
			}
		};

		assert.strictEqual(get(object, '.foo'), object.foo);
		assert.strictEqual(get(object, '.foo.bar'), object.foo.bar);
		assert.strictEqual(get(object, '.foo.bar.baz'), object.foo.bar.baz);
		assert.strictEqual(get(object, '.foo.bar.baz.deep'), object.foo.bar.baz.deep);
		assert.strictEqual(get(object, '.foo.bar.baz.deep.more'), object.foo.bar.baz.deep.more);
		assert.strictEqual(get(object, '.foo.bar.baz.deep.more.word'), object.foo.bar.baz.deep.more.word);
	});
	QUnit.test('get работает правильно c существующими свойствами и возвращает разные типы', function (assert) {
		const object = {
			foo: [1, 2, 3],
			user: true,
			good: 1.6,
			bad: null,
		};

		assert.strictEqual(get(object, '.foo'), object.foo);
		assert.strictEqual(get(object, '.user'), object.user);
		assert.strictEqual(get(object, '.good'), object.good);
		assert.strictEqual(get(object, '.bad'), object.bad);
		assert.strictEqual(get(object, '.'), object);
	});
});
