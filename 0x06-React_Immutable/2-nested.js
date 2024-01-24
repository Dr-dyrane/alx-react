// Import the necessary module from Immutable.js library
import { Map } from 'immutable';

/**
 * Accesses a nested value in a plain JavaScript object at the specified path.
 *
 * @param {Object} object - The plain JavaScript object to be accessed.
 * @param {Array} array - An array containing a list of a path to some key in the object.
 * @returns {undefined|string|Map} - The value at the defined path.
 */
export default function accessImmutableObject(object, array) {
  // Use Map to create an Immutable Map from the input object
  const immutableMap = Map(object);

  // Get the value at the specified path using getIn method
  const value = immutableMap.getIn(array);

  // Return the resulting value
  return value;
}
