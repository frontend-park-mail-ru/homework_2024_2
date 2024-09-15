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

	// Добавленные тесты
	QUnit.test('set работает правильно c объектами со свойством null', function (assert) {
		const object = {
			deep: {
				nested: {
					null: 2
				}
			}
		};

		const object2 = {
			deep: {
				nested: {
					null: 43
				}
			}
		};

		const object3 = {
			deep: {
				null: {
					null: 43
				}
			}
		};

		const object4 = {
			deep: {
				null: {
					null: null
				}
			}
		};

		assert.deepEqual(set(object, '.deep.nested.null', 43), object2);
		assert.deepEqual(set(object3, '.deep.null.null', null), object4);
		assert.deepEqual(object, object2);
		assert.deepEqual(object3, object4);
	});

	QUnit.test('set работает правильно c объектами со вложенностью больше 3', function (assert) {
		const object = {
			very: {
				deep: {
					nested: {
						field: 'value'
					}
				}
			}
		};

		const object2 = {
			very: {
				deep: {
					nested: {
						field: 'other value'
					}
				}
			}
		};

		const object3 = {
			incredibly: {
				very: {
					deep: {
						nested: {
							field: 'value'
						}
					}
				}
			}
		};

		const object4 = {
			incredibly: {
				very: {
					deep: {
						nested: {
							field: 'other value'
						}
					}
				}
			}
		};

		const objectNested5 = {
			absolutely: {
				incredibly: {
					very: {
						deep: {
							nested: {
								field: 'value'
							}
						}
					}
				}
			}
		};

		const objectNested5_2 = {
			absolutely: {
				incredibly: {
					very: {
						deep: {
							nested: {
								field: 'other value'
							}
						}
					}
				}
			}
		};

		const objectNested5_3 = {
			null: {
				absolutely: {
					incredibly: {
						very: {
							deep: {
								nested: {
									field: 'other value'
								}
							}
						}
					}
				}
			},
			absolutely: {
				incredibly: {
					very: {
						deep: {
							nested: {
								field: 'other value'
							}
						}
					}
				}
			}
		};

		assert.deepEqual(set(object, '.very.deep.nested.field', 'other value'), object2);
		assert.deepEqual(set(object3, '.incredibly.very.deep.nested.field', 'other value'), object4);
		assert.deepEqual(set(objectNested5, '.absolutely.incredibly.very.deep.nested.field', 'other value'), objectNested5_2);
		assert.deepEqual(set(objectNested5, '.null.absolutely.incredibly.very.deep.nested.field', 'other value'), objectNested5_3);
	});

	QUnit.test('set не меняет исходный объект если path неверное', function (assert) {
		const object = {
			very: {
				deep: {
					nested: {
						field: 'value'
					}
				}
			}
		};

		const object1 = {
			very: {
				deep: {
					nested: {
						field: 'value'
					}
				}
			}
		};

		assert.deepEqual(set(object, 32, 'other value'), object1);
		assert.deepEqual(set(object, 'very.deep.nested.field', 'other value'), object1);
		assert.deepEqual(set(object, '', 'other value'), object1);
		assert.deepEqual(set(object, object1, 'other value'), object1);
	});

	QUnit.test('set меняет исходный объект если path содержит хотя бы одно, но корректное значение пути', function (assert) {
		const object = {
			very: {
				deep: {
					nested: {
						field: 'value'
					}
				}
			}
		};

		const object1 = {
			'': 'other value',
			very: {
				deep: {
					nested: {
						field: 'value'
					}
				}
			}
		};

		const object3 = {};
		const object4 = {
			field: 'other value'
		};

		assert.deepEqual(set(object, '.', 'other value'), object1);
		assert.deepEqual(set(object3, '.field', 'other value'), object4);
	});

	QUnit.test('set правильно работает для строк созданных с помощью оператора new', function (assert) {
		const object = {};
		const object10 = {};
		const object1 = {
			very: {
				deep: {
					nested: {
						field: 'value'
					}
				}
			}
		};

		const pathStringIncorrect = new String('aaa');
		const pathString = new String('.very.deep.nested.field');

		assert.deepEqual(set(object, pathStringIncorrect, 'value'), object10);
		assert.deepEqual(set(object, pathString, 'value'), object1);
	});
});
