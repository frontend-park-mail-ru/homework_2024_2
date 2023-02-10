"use strict";

QUnit.module("Тестируем функцию tree", function () {
    QUnit.test("Ёлочек высотой ниже трёх не бывает", function (assert) {
        assert.strictEqual(tree(-100), null);
        assert.strictEqual(tree(-1), null);
        assert.strictEqual(tree(0), null);
        assert.strictEqual(tree(1), null);
        assert.strictEqual(tree(2), null);
        assert.strictEqual(tree("0"), null);
        assert.strictEqual(tree("1"), null);
        assert.strictEqual(tree("2"), null);
    });

    QUnit.test("Ёлочка, проверка на входной тип данных", function (assert) {
        assert.strictEqual(tree(null), null);
        assert.strictEqual(tree(undefined), null);
        assert.strictEqual(tree({}), null);
        assert.strictEqual(tree({ name: "Mihail" }), null);
        assert.strictEqual(tree([]), null);
        assert.strictEqual(tree([1, 2, 5]), null);
        assert.strictEqual(tree(["42", "12"]), null);
        assert.strictEqual(tree(true), null);
        assert.strictEqual(tree(false), null);
        assert.strictEqual(
            tree(() => 5),
            null
        );
    });

    QUnit.test("Ёлочка высотой 3", function (assert) {
        const expected =
            " * \n" + //
            "***\n" +
            " | \n";
        assert.strictEqual(tree(3), expected);
        assert.strictEqual(tree("3"), expected);
    });

    QUnit.test("Ёлочка высотой 4", function (assert) {
        const expected =
            "  *  \n" + //
            " *** \n" +
            "*****\n" +
            "  |  \n";
        assert.strictEqual(tree(4), expected);
        assert.strictEqual(tree("4"), expected);
    });

    QUnit.test("Ёлочка высотой 5", function (assert) {
        const expected =
            "   *   \n" + //
            "  ***  \n" +
            " ***** \n" +
            "*******\n" +
            "   |   \n";
        assert.strictEqual(tree(5), expected);
        assert.strictEqual(tree("5"), expected);
    });

    QUnit.test("Ёлочка высотой 6", function (assert) {
        const expected =
            "    *    \n" + //
            "   ***   \n" +
            "  *****  \n" +
            " ******* \n" +
            "*********\n" +
            "    |    \n";
        assert.strictEqual(tree(6), expected);
        assert.strictEqual(tree("6"), expected);
    });

    QUnit.test("Ёлочка высотой 7", function (assert) {
        const expected =
            "     *     \n" + //
            "    ***    \n" +
            "   *****   \n" +
            "  *******  \n" +
            " ********* \n" +
            "***********\n" +
            "     |     \n";
        assert.strictEqual(tree(7), expected);
        assert.strictEqual(tree("7"), expected);
    });

    QUnit.test("Ёлочка высотой 8", function (assert) {
        const expected =
            "      *      \n" + //
            "     ***     \n" +
            "    *****    \n" +
            "   *******   \n" +
            "  *********  \n" +
            " *********** \n" +
            "*************\n" +
            "      |      \n";
        assert.strictEqual(tree(8), expected);
        assert.strictEqual(tree("8"), expected);
    });
});
