        // Тестирование с использованием QUnit
        QUnit.module("Sorting Function Tests", () => {

            QUnit.test("Сортировка объектов по одному свойству", assert => {
                const data = [
                    { name: "Charlie", age: 22 },
                    { name: "Alice", age: 25 },
                    { name: "Bob", age: 30 }
                ];
                const result = sorting(data, ["name"]);
                assert.deepEqual(result, [
                    { name: "Alice", age: 25 },
                    { name: "Bob", age: 30 },
                    { name: "Charlie", age: 22 }
                ], "Должно правильно сортировать по полю 'name'");
            });

            QUnit.test("Сортировка объектов по нескольким свойствам", assert => {
                const data = [
                    { name: "Bob", age: 30 },
                    { name: "Alice", age: 25 },
                    { name: "Alice", age: 22 }
                ];
                const result = sorting(data, ["name", "age"]);
                assert.deepEqual(result, [
                    { name: "Alice", age: 22 },
                    { name: "Alice", age: 25 },
                    { name: "Bob", age: 30 }
                ], "Должно правильно сортировать по полям 'name' и 'age'");
            });

            QUnit.test("Пустой массив не изменяется", assert => {
                const data = [];
                const result = sorting(data, ["name"]);
                assert.deepEqual(result, [], "Пустой массив должен оставаться пустым");
            });

            QUnit.test("Некорректный тип первого параметра", assert => {
                assert.throws(() => sorting(null, ["name"]), /Первый параметр должен быть массивом объектов/, "Должно выбрасывать ошибку, если первый параметр не массив");
            });

            QUnit.test("Некорректный тип второго параметра", assert => {
                const data = [
                    { name: "Charlie", age: 22 },
                    { name: "Alice", age: 25 }
                ];
                assert.throws(() => sorting(data, null), /Второй параметр должен быть массивом строк/, "Должно выбрасывать ошибку, если второй параметр не массив строк");
            });

            QUnit.test("Свойство отсутствует у одного из объектов", assert => {
                const data = [
                    { name: "Alice", age: 25 },
                    { name: "Bob", age: 30 }
                ];
                assert.throws(() => sorting(data, ["height"]), /Свойство 'height' отсутствует у одного из объектов/, "Должно выбрасывать ошибку, если у объекта отсутствует свойство");
            });

            QUnit.test("Сортировка по пустому массиву свойств", assert => {
                const data = [
                    { name: "Alice", age: 25 },
                    { name: "Bob", age: 30 }
                ];
                const result = sorting(data, []);
                assert.deepEqual(result, data, "При пустом массиве свойств исходный массив должен оставаться неизменным");
            });

            // Новый тест: Сортировка по численному свойству разных знаков
            QUnit.test("Сортировка объектов на основе значений, содержащих как положительные, так и отрицательные числа.", assert => {
                const data = [
                    { name: "Alice", balance: -50 },
                    { name: "Bob", balance: 0 },
                    { name: "Charlie", balance: 100 },
                    { name: "Dave", balance: -150 }
                ];
                const result = sorting(data, ["balance"]);
                assert.deepEqual(result, [
                    { name: "Dave", balance: -150 },
                    { name: "Alice", balance: -50 },
                    { name: "Bob", balance: 0 },
                    { name: "Charlie", balance: 100 }
                ], "Должно правильно сортировать числа с положительными и отрицательными значениями");
            });

            // Новый тест: Сортировка по отрицательному числовому свойству
            QUnit.test("Сортировка объектов, где все значения являются отрицательными", assert => {
                const data = [
                    { name: "Alice", debt: -100 },
                    { name: "Bob", debt: -300 },
                    { name: "Charlie", debt: -200 }
                ];
                const result = sorting(data, ["debt"]);
                assert.deepEqual(result, [
                    { name: "Bob", debt: -300 },
                    { name: "Charlie", debt: -200 },
                    { name: "Alice", debt: -100 }
                ], "Должно правильно сортировать по отрицательному числовому свойству");
            });

        });