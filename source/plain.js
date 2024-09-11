'use strict';

/**
 * Разбивает вложенный объект на плоский объект с иерархическими ключами.
 * @param {*} obj Вложенный объект для разбиения.
 * @param {*} prefix Префикс для ключей в результирующем объекте.
 * @param {*} maxDepth Максимальная глубина вложенности объекта.
 * 
 * @returns Плоский объект с иерархическими ключами.
 */
const plainify = (obj, prefix = '', maxDepth = 1000) => {
  // Проверяем, что obj является объектом
  if (Object.prototype.toString.call(obj) !== '[object Object]' || obj === null) {
    return {};    
  }

  // Проверяем, что prefix является строкой
  if (Object.prototype.toString.call(prefix) !== '[object String]') {
    throw new TypeError('Префикс должен быть строкой');
  }

  const result = {};
  const stack = [{ obj, prefix, depth: 0 }];

  while (stack.length > 0) {
    const { obj: currentObject, prefix: currentPrefix, depth } = stack.pop();

    // Условие выхода из цикла
    if (depth > maxDepth) {
      throw new Error('Объект слишком глубоко вложен. Максимальная глубина: ${maxDepth}');
    }
    // Используем Object.entries для итерации по ключ-значению объекта (хеш)
    for (const [key, value] of Object.entries(currentObject)) {
      // Создаем новый ключ, конкатенируя префикс и оригинальный ключ
      const newKey = currentPrefix ? `${currentPrefix}.${key}` : key;

      // Проверяем, что value является объектом и не является null или массивом
      if (Object.prototype.toString.call(value) === '[object Object]' && value !== null && !Array.isArray(value)) {
        stack.push({ obj: value, prefix: newKey, depth: depth + 1});
      } else {
        result[newKey] = value;
      }
    }
  }

  return result;
};

