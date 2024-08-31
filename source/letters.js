/**
 * @param {string} str - Входная строка для обработки.
 * @param {boolean | undefined} saveFirst - Опциональный параметр для сохранения первого или последнего вхождения символа.
 * @returns {string} - Фильтрованная строка.
 */
const letters = (str, saveFirst) => {
  if (typeof str !== "string") {
    throw new TypeError("Первый аргумент должен быть строкой");
  }
  if (typeof saveFirst !== "boolean" && saveFirst !== undefined) {
    throw new TypeError("Второй аргумент должен быть булевым значением");
  }

  const charArray = str.split("");
  return charArray
    .filter((item, index) => {
      if (saveFirst === undefined) {
        return charArray.indexOf(item) === charArray.lastIndexOf(item);
      }
      return saveFirst
        ? charArray.indexOf(item) === index
        : charArray.lastIndexOf(item) === index;
    })
    .join("");
};
