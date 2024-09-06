'use strict';

/**
 * Zip multiple objects into one object containing all their attributes. If
 * some of the objects have same attribute, value of the first object with
 * such an attribute will be taken.
 * Note that subobjects are not deepcopied.
 * If the function receives at least one non-object argument,
 * the output will be undefined.
 * @param {...Object} objects - The objects to be zipped
 * @throws {TypeError} All of the arguments must be objects
 */
const zip = (...objects) => {
	objects.forEach((obj) => {
		if (typeof obj !== 'object' ||
			obj === null) {
			throw new TypeError("All of the arguments must be objects");
		}
	});

	return objects.reduce((zippedObject, currentObject) => {
		Object.entries(currentObject).forEach(([key, value]) => {
			if (!zippedObject.hasOwnProperty(key)) {
				zippedObject[key] = value;
			}
		});
		return zippedObject;
	}, {});
};



