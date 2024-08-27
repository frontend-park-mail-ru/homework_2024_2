// Здравствуйте, я Алексей Нарыжный из группы WEB-21. 
// Мои контакты:
// tg: fish190 | vk: vk.com/leshka_055

'use strict';

// Определяем функцию plainify, которая принимает объект
const plainify = (obj, prefix = '') =>

  // Используем Object.entries для итерации по ключ-значению объекта (хеш)
  Object.entries(obj).reduce((acc, [key, value]) => {

    // Создаем новый ключ, конкатенируя префикс и оригинальный ключ
    const newKey = prefix ? `${prefix}.${key}` : key;

    // Если значение является объектом, рекурсивно вызываем plainify
    return typeof value === 'object'
      ? { ...acc, ...plainify(value, newKey) }

      // Иначе, добавляем значение с новым ключом
      : { ...acc, [newKey]: value };
  }, {});

// Модуль тестирования функции plainify
QUnit.module('Тестируем функцию plainify', function () {

  // Тест: plainify работает правильно
  QUnit.test('plainify работает правильно', function (assert) {

    // Проверяем, что plainify работает корректно для простого объекта
    assert.deepEqual(plainify({ foo: 'bar', baz: 42 }), { foo: 'bar', baz: 42 });

    // Проверяем, что plainify работает корректно для вложенного объекта
    assert.deepEqual(plainify({ deep: { foo: 'bar', baz: 42 } }), { 'deep.foo': 'bar', 'deep.baz': 42 });
    
  // Проверяем, что plainify работает корректно для сложного вложенного объекта
    assert.deepEqual(plainify({
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
    }), {
      'deep.foobar': 0,
      'deep.nested.object.fields.foo': 42,
      'deep.nested.object.fields.bar': 42,
      'deep.nested.object.fields.baz': 42
    });
  });
});