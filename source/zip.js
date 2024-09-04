'use strict';

/**
 * Zip multiple objects into one object containing all their attributes. If
 * some of the objects have same attribute, value of the first object with
 * such an attribute will be taken.
 * Note that subobjects are not deepcopied.
 * If the function receives at least one non-object argument,
 * the output will be undefined.
 * @param {...*} objects - The objects to be zipped
 */
const zip = (...objects) => {
	return objects.reduce((zippedObject, currentObject) => {
		if (zippedObject === undefined ||
			typeof currentObject !== 'object' ||
			currentObject === null) {
			return undefined;
		}
		for (const attr in currentObject) {
			if (zippedObject[attr] === undefined) {
				zippedObject[attr] = currentObject[attr];
			}
		}
		return zippedObject;
	}, {});
}
