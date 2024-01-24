// Import the necessary module from Immutable.js library
import { Map } from 'immutable';

/**
 * Deeply merges two objects into an Immutable Map using mergeDeep.
 *
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {Map} - Immutable Map containing the values of both objects with deep merging.
 */
export default function mergeDeeplyElements(page1, page2) {
  // Use Map to create Immutable Maps from the input objects
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Use mergeDeep to deeply merge the two Maps
  const mergedMap = map1.mergeDeep(map2);

  // Return the resulting Immutable Map
  return mergedMap;
}
