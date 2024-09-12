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

	// NEW TESTS

	QUnit.test('Функция работает с некорректными типами данных', function (assert) {
		const obj1 = undefined
		const obj2 = null
		const obj3 = false
		const obj4 = {
			a: 'test',
            b: 42
		}

		const expected = {
			a: 'test',
			b: 42
		};

		assert.deepEqual(zip(obj1, obj2, obj3, obj4), expected)
	})

    QUnit.test('Функция работает с объектами, содержащими массивы', function (assert) {
        const obj1 = {a: [1, 2, 3]};
        const obj2 = {b: [4, 5, 6], a: [1, 2]};
        const expected = {a: [1, 2, 3], b: [4, 5, 6]};
        assert.deepEqual(zip(obj1, obj2), expected);
    });

	QUnit.test('Функция работает с объектами, содержащими вложенные объекты', function (assert) {
        const obj1 = {
            a: {
                secondLevel: {
					workOk: true
				}
            }
        };
        const obj2 = {
			a: {
				anotherSecondLevel: {
					shouldThisBeInResult: false
                }
			},

            b: {
				simpleSecondLevel: 777,
                secondLevel: {
                    testing: true
                }
            }
        };


        const expected = {
            a: {
                secondLevel: {
					workOk: true
				}
            },
            b: {
                secondLevel: {
                    testing: true
                },
				simpleSecondLevel: 777
            }
        };
        assert.deepEqual(zip(obj1, obj2), expected);
    });


});
