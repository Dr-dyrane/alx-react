// Import the necessary module from Immutable.js library
import { fromJS } from 'immutable';

/**
 * Converts a plain JavaScript object into an Immutable Map using fromJS.
 *
 * @param {Object} object - The plain JavaScript object to be converted.
 * @returns {Map} - Immutable Map created from the input object.
 */
const getImmutableObject = (object) => {
  // Use fromJS to create an Immutable Map from the input object
  const immutableMap = fromJS(object);

  // Return the resulting Immutable Map
  return immutableMap;
};

// Export the function as the default export to make it accessible in other files
export default getImmutableObject;
