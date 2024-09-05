'use strict'
const get = (obj, path) => path.split('.').filter(str => str !== "").reduce((acc, key) => acc?.[key], obj);

