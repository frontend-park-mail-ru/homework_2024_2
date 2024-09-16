"use strict";

QUnit.module("Тестируем функцию roman", function () {
  QUnit.test(
    "roman правильно переводит из римской системы счисления",
    function (assert) {
      assert.strictEqual(roman("I"), 1);
      assert.strictEqual(roman("V"), 5);
      assert.strictEqual(roman("M"), 1000);
      assert.strictEqual(roman("l"), 50);
      assert.strictEqual(roman("d"), 500);

      assert.strictEqual(roman("iv"), 4);
      assert.strictEqual(roman("iiii"), 4);
      assert.strictEqual(roman("CM"), 900);

      assert.strictEqual(roman("MCMIV"), 1904);
      assert.strictEqual(roman("MCMXC"), 1990);
      assert.strictEqual(roman("mmxvii"), 2017);
    },
  );

  QUnit.test(
    "roman правильно переводит из десятичной системы счисления",
    function (assert) {
      assert.strictEqual(roman(1), "I");
      assert.strictEqual(roman(5), "V");
      assert.strictEqual(roman(1000), "M");
      assert.strictEqual(roman(50), "L");
      assert.strictEqual(roman(500), "D");

      assert.strictEqual(roman(4), "IV");
      assert.strictEqual(roman(900), "CM");

      assert.strictEqual(roman(1904), "MCMIV");
      assert.strictEqual(roman(1990), "MCMXC");
      assert.strictEqual(roman(2017), "MMXVII");
    },
  );

  QUnit.test(
    "roman правильно определяет, что было передано на вход",
    function (assert) {
      assert.strictEqual(roman("1904"), "MCMIV");
      assert.strictEqual(roman("1990"), "MCMXC");
      assert.strictEqual(roman("2017"), "MMXVII");
    },
  );

  QUnit.test(
    "roman проводит проверку корректности числа записанного римскими цифрами",
    function (assert) {
      assert.throws(
        function () {
          roman("XLM");
        },
        Error,
        "Ошибка выбрасывается для 'XLM'",
      );
      assert.throws(
        function () {
          roman("IVX");
        },
        Error,
        "Ошибка выбрасывается для 'IVX'",
      );
      assert.throws(
        function () {
          roman("CDM");
        },
        Error,
        "Ошибка выбрасывается для 'CDM'",
      );
      assert.throws(
        function () {
          roman("Im");
        },
        Error,
        "Ошибка выбрасывается для 'Im'",
      );
      assert.throws(
        function () {
          roman("XlM");
        },
        Error,
        "Ошибка выбрасывается для 'XlM'",
      );
    },
  );

  QUnit.test(
    "roman проводит проверку корректности записи числа",
    function (assert) {
      assert.throws(
        function () {
          roman("00111");
        },
        Error,
        "Ошибка выбрасывается для '00111'",
      );
      assert.throws(
        function () {
          roman("MM_DI");
        },
        Error,
        "Ошибка выбрасывается для '19_2'",
      );
      assert.throws(
        function () {
          roman("ЧXLV");
        },
        Error,
        "Ошибка выбрасывается для 'ЧXLV'",
      );
      assert.throws(
        function () {
          roman("1000111");
        },
        Error,
        "Ошибка выбрасывается для '1000111'",
      );
      assert.throws(
        function () {
          roman("");
        },
        Error,
        "Ошибка выбрасывается для ''",
      );
      assert.throws(
        function () {
          roman("0");
        },
        Error,
        "Ошибка выбрасывается для '0'",
      );
      assert.throws(
        function () {
          roman(0);
        },
        Error,
        "Ошибка выбрасывается для 0",
      );
    },
  );
});
