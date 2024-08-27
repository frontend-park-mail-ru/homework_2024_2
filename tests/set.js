'use strict';

QUnit.module('Тестируем функцию set', function () {
	QUnit.test('set работает правильно c объектами с существующими свойствами', function (assert) {
		const object = {
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		const object2 = {
			deep: {
				hested: {
					field: 42
				}
			}
		};

		const object3 = {
			deep: {
				hested: {
					foo: 'bar'
				}
			}
		};

		const object4 = {
			deep: null
		};

		assert.deepEqual(set({foo: 'bar'}, '.foo', 'baz'), {foo: 'baz'});
		assert.deepEqual(set(object, '.deep.hested.field', 42), object2);

		assert.deepEqual(set(object, '.deep.hested', {foo: 'bar'}), object3);
		assert.deepEqual(set(object, '.deep', null), object4);
	});

	QUnit.test('set изменяет переданный объект', function (assert) {
		const object = {
			foo: 'bar'
		};

		const object1 = {
			foo: 'baz'
		};

		const object2 = set(object, '.foo', 'baz');
		assert.deepEqual(object, object1);
		assert.deepEqual(object2, object1);
	});

	QUnit.test('set работает правильно c массивами', function (assert) {
		const object1 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const object2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new1 = {
			foo: [ 42, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: 'baz'}
			]
		};

		assert.deepEqual(set(object1, '.foo.0', 42), new1);
		assert.deepEqual(set(object2, '.bar.0.foobar', 'baz'), new2);
	});

	QUnit.test('set работает правильно c объектами без свойств', function (assert) {
		const object = {
			deep: {
				nested: {
					field: null
				}
			}
		};

		assert.deepEqual(set({}, '.deep.nested.field', null), object);
	});

	QUnit.test('Устанавливает значение на верхнем уровне объекта', function (assert) {
        let obj = {};
        set(obj, 'a', 1);
        assert.deepEqual(obj, { a: 1 }, 'obj.a === 1');
    });

    QUnit.test('Устанавливает значение на вложенном уровне объекта', function (assert) {
        let obj = {};
        set(obj, 'a.b.c', 2);
        assert.deepEqual(obj, { a: { b: { c: 2 } } }, 'obj.a.b.c === 2');
    });

    QUnit.test('Перезаписывает значение существующего свойства', function (assert) {
        let obj = { a: { b: { c: 3 } } };
        set(obj, 'a.b.c', 4);
        assert.deepEqual(obj, { a: { b: { c: 4 } } }, 'obj.a.b.c === 4');
    });

    QUnit.test('Создает вложенные объекты, если их не существует', function (assert) {
        let obj = {};
        set(obj, 'a.b.c', 5);
        assert.deepEqual(obj, { a: { b: { c: 5 } } }, 'Создаются вложенные объекты');
    });

    QUnit.test('Работает с массивами', function (assert) {
        let obj = { a: [] };
        set(obj, 'a[0].b', 6);
        assert.deepEqual(obj, { a: [{ b: 6 }] }, 'Работает с массивами');
    });

    QUnit.test('Создает массив, если его не существует', function (assert) {
        let obj = {};
        set(obj, 'a[0].b', 7);
        assert.deepEqual(obj, { a: [{ b: 7 }] }, 'Создает массив, если его не существует');
    });

    QUnit.test('Устанавливает значение для длинного пути', function (assert) {
        let obj = {};
        set(obj, 'a.b.c.d.e.f.g.h.i.j', 10);
        assert.deepEqual(obj, { a: { b: { c: { d: { e: { f: { g: { h: { i: { j: 10 } } } } } } } } } }, 'obj.a.b.c.d.e.f.g.h.i.j === 10');
    });

    QUnit.test('Перезаписывает массивы и объекты при установке', function (assert) {
        let obj = { a: [1, 2, { b: 3 }] };
        set(obj, 'a[2].b', 8);
        assert.deepEqual(obj, { a: [1, 2, { b: 8 }] }, 'Перезаписывает значение в массиве');
    });

    QUnit.test('Устанавливает значение на несуществующем пути с числом в ключе', function (assert) {
        let obj = {};
        set(obj, 'a.b[0].c', 9);
        assert.deepEqual(obj, { a: { b: [{ c: 9 }] } }, 'Устанавливает значение на несуществующем пути с числом в ключе');
    });

    QUnit.test('Работает с пустым путем', function (assert) {
        let obj = { a: 3 };
        set(obj, '', 11);
        assert.deepEqual(obj, { a: 3 }, 'Игнорирует пустой путь');
    });

    QUnit.test('Работает с вложенными массивами', function (assert) {
        let obj = { a: [[]] };
        set(obj, 'a[0][0].b', 12);
        assert.deepEqual(obj, { a: [[{ b: 12 }]] }, 'Работает с вложенными массивами');
    });

    QUnit.test('Обрабатывает путь с несуществующим родителем', function (assert) {
        let obj = {};
        set(obj, 'a.b.c[0].d.e', 13);
        assert.deepEqual(obj, { a: { b: { c: [{ d: { e: 13 } }] } } }, 'Создает промежуточные объекты и массивы для несуществующих родителей');
    });

    QUnit.test('Не ломается при большом объекте', function (assert) {
        let obj = { a: { b: { c: { d: { e: { f: { g: { h: { i: { j: {} } } } } } } } } } };
        set(obj, 'a.b.c.d.e.f.g.h.i.j.k', 14);
        assert.deepEqual(obj, { a: { b: { c: { d: { e: { f: { g: { h: { i: { j: { k: 14 } } } } } } } } } } }, 'Не ломается при большом объекте');
    });

    QUnit.test('Работает с нечисловыми индексами в пути', function (assert) {
        let obj = {};
        set(obj, 'a.b.c["key"]', 15);
        assert.deepEqual(obj, { a: { b: { c: { key: 15 } } } }, 'Работает с нечисловыми индексами в пути');
    });

    QUnit.test('Ошибка обращения к отрицательному элементу массива', assert => {
        assert.throws(() => set({ a: [] }, 'a[-1].b', 16), new Error('Addressing an array element with a negative key is invalid'));
    });

    QUnit.test('Работает с примитивными значениями в объекте', function (assert) {
        let obj = { a: 17 };
        set(obj, 'a.b.c', 18);
        assert.deepEqual(obj, { a: { b: { c: 18 } } }, 'Работает с примитивными значениями в объекте');
    });

    QUnit.test('Не ломается при большом объекте с 1e4 вложенными элементами', function (assert) {
        let obj = {};
        let path = '';
        let expectedObj = {};
        let current = expectedObj;
        for (let i = 0; i < 1e4; i++) {
            path += (i === 0 ? '' : '.') + 'a' + i;

            if (i === 1e4 - 1) {
                current['a' + i] = 1e4;
            } else {
                current = current['a' + i] = {};
            }
        }

        set(obj, path, 1e4);

        assert.deepEqual(obj, expectedObj, 'Не ломается при большом объекте с 1e4 вложенными элементами');
    });

    QUnit.test('Заменяет объект числом, если путь ведет до объекта', function (assert) {
        let obj = { a: { b: {} } };
        set(obj, 'a', 1);
        assert.deepEqual(obj, { a: 1 }, 'Объект заменяется числом');
    });

    QUnit.test('Заменяет объект числом, если путь ведет до вложенного объекта', function (assert) {
        let obj = { a: { b: { c: {} } } };
        set(obj, 'a.b', 2);
        assert.deepEqual(obj, { a: { b: 2 } }, 'Вложенный объект заменяется числом');
    });

    QUnit.test('Заменяет объект массивом, если путь ведет до объекта', function (assert) {
        let obj = { a: { b: {} } };
        set(obj, 'a', [3]);
        assert.deepEqual(obj, { a: [3] }, 'Объект заменяется массивом');
    });

    QUnit.test('Обрабатывает путь с несуществующим родителем (обращение к 1-ому элементу)', function (assert) {
        let obj = {};
        set(obj, 'a.b.c[1].d.e', 13);
        assert.deepEqual(obj, { a: { b: { c: [undefined, { d: { e: 13 } }] } } }, 'Создает промежуточные объекты и массивы для несуществующих родителей');
    });

    QUnit.test('Не удаляет данные не затрагиваемые путем', function (assert) {
        let obj = { a: 3 };
        set(obj, 'b.c[0].d.e', 13);
        assert.deepEqual(obj, { a: 3, b: {c: [{ d: { e: 13 } }] } }, 'Создает промежуточные объекты и массивы для несуществующих родителей не затрагивая не нужные к изменению элементы');
    });
});
