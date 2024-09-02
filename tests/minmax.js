'use strict';

QUnit.module('Тестируем функцию minmax', function () {
    QUnit.test('minmax работает правильно на строках без чисел', function (assert) {
        assert.deepEqual(minmax(''), [undefined, undefined], 'Особый случай, когда в строке нет чисел');
        assert.deepEqual(minmax('мама мыла раму'), [undefined, undefined]);
        assert.deepEqual(minmax('.,;!'), [undefined, undefined], 'Только символы пунктуации');
    });

    QUnit.test('minmax правильно парсит отдельные числа', function (assert) {
        assert.deepEqual(minmax('0'), [0, 0]);
        assert.deepEqual(minmax('1'), [1, 1]);
        assert.deepEqual(minmax('Infinity'), [Infinity, Infinity]);
        assert.deepEqual(minmax('-Infinity'), [-Infinity, -Infinity]);
        assert.deepEqual(minmax('42'), [42, 42]);
        assert.deepEqual(minmax('.0'), [.0, .0]);
        assert.deepEqual(minmax('1.1'), [1.1, 1.1]);
        assert.deepEqual(minmax('.01'), [.01, .01]);
        assert.deepEqual(minmax('1.01'), [1.01, 1.01]);
        assert.deepEqual(minmax('1e5'), [1e5, 1e5]);
        assert.deepEqual(minmax('-1e-5'), [-1e-5, -1e-5]);
        assert.deepEqual(minmax('-.1e-5'), [-.1e-5, -.1e-5]);
    });

    QUnit.test('minmax правильно парсит несколько чисел', function (assert) {
        assert.deepEqual(minmax('0 0 0 0'), [0, 0]);
        assert.deepEqual(minmax('1 1 1 1'), [1, 1]);
        assert.deepEqual(minmax('1 2 3 4'), [1, 4]);
        assert.deepEqual(minmax('-Infinity -1 0 1 Infinity'), [-Infinity, Infinity]);
        assert.deepEqual(minmax('-.01 0 .01'), [-.01, .01]);
        assert.deepEqual(minmax('10 20 30 -10 -20 -30'), [-30, 30], 'Множество положительных и отрицательных чисел');
    });

    QUnit.test('minmax игнорирует обычный текст', function (assert) {
        assert.deepEqual(minmax('1, -5.8 или 10, хотя 34 + -5.3 и 73'), [-5.8, 73]);
        assert.deepEqual(minmax('Сравни 3 и -2.5 или 8.7'), [-2.5, 8.7], 'Текст с числами');
        assert.deepEqual(minmax('Текст без чисел вообще'), [undefined, undefined], 'Текст без чисел');
        assert.deepEqual(minmax('abc 1 def 2 ghi 3'), [1, 3], 'Числа смешаны с текстом');
    });

    QUnit.test('minmax работает с отрицательными числами и их комбинациями', function (assert) {
        assert.deepEqual(minmax('-10 -20 -30'), [-30, -10], 'Только отрицательные числа');
        assert.deepEqual(minmax('-5 0 5'), [-5, 5], 'Комбинация отрицательных, нуля и положительных чисел');
    });

    QUnit.test('minmax корректно обрабатывает несколько пробелов', function (assert) {
        assert.deepEqual(minmax('   1    2   3   '), [1, 3], 'Много пробелов');
    });
    QUnit.test('minmax выбрасывает исключение при неверном типе данных',
        function (assert) {
            assert.throws(function () {
                minmax(123);
            }, TypeError, 'Число вместо строки');
            assert.throws(function () {
                minmax(true);
            }, TypeError, 'Булевое значение вместо строки');
            assert.throws(function () {
                minmax(null);
            }, TypeError, 'Null вместо строки');
            assert.throws(function () {
                minmax(undefined);
            }, TypeError, 'Undefined вместо строки');
            assert.throws(function () {
                minmax({});
            }, TypeError, 'Объект вместо строки');
            assert.throws(function () {
                minmax([]);
            }, TypeError, 'Массив вместо строки');
        });
});
