'use strict';

/**
 * Zip multiple objects into one object containing all their attributes. If
 * some of the objects have same attribute, value of the first object with
 * such an attribute will be taken.
 * Note that subobjects are not deepcopied.
 * @param {...Object} objects - The objects to be zipped
 * @throws {TypeError} All of the arguments must be objects
 */
const zip = (...objects) => {
	if (!objects.every(isObject)) {
		throw new TypeError("All of the arguments must be objects");
	};

	return objects.reduce((zippedObject, currentObject) => {
		Object.entries(currentObject).forEach(([key, value]) => {
			if (!zippedObject.hasOwnProperty(key)) {
				zippedObject[key] = value;
			}
		});
		return zippedObject;
	}, {});
};

/**
 * Check if input is object.
 * Array is considered to be an object too.
 * @param {*} potentialObject - a value to be checked
 */
const isObject = (potentialObject) => {
	return (Object.prototype.toString.call(potentialObject) ===
		'[object Object]');
};
