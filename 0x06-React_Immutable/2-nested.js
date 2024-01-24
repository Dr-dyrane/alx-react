// Import the necessary module from Immutable.js library
import { fromJS } from 'immutable';

/**
 * Accesses a nested value in a plain JavaScript object at the specified path.
 *
 * @param {Object} object - The plain JavaScript object to be accessed.
 * @param {Array} array - An array containing a list of a path to some key in the object.
 * @returns {undefined|string|Map} - The value at the defined path.
 */
export default function accessImmutableObject(object, array) {
  // Use fromJS to create an Immutable Map from the input object
  const immutableMap = fromJS(object);

  // Get the value at the specified path using getIn method
  const value = immutableMap.getIn(array, undefined);

  // Return the resulting value
  return value;
}
