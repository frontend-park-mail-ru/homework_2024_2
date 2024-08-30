const letters = (str, saveFirst) => {
  if (typeof str !== "string") {
    throw new TypeError("Первый аргумент должен быть строкой")
  }
  if (typeof saveFirst !== "boolean" && saveFirst !== undefined) {
    throw new TypeError("Второй аргумент должен быть булевым значением")
  }

  let charArray = str.split("")
  let resultArray = charArray.filter((item, index) => {
    if (saveFirst == undefined) {
      return charArray.indexOf(item) === charArray.lastIndexOf(item)
    }
    if (saveFirst) {
      return charArray.indexOf(item) === index
    } else {
      return charArray.lastIndexOf(item) === index
    }
  })
  return resultArray.join("")
}
