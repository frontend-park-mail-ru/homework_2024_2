'use strict';

const plain = arr => arr.reduce((acc, v) => acc.concat(Array.isArray(v) ? plain(v) : v), []);
