// Import the necessary modules from Immutable.js library
import { List, Map } from 'immutable';

/**
 * Concatenates two arrays into an Immutable List.
 *
 * @param {Array} page1 - The first array.
 * @param {Array} page2 - The second array.
 * @returns {List} - Immutable List containing the values of both arrays.
 */
export function concatElements(page1, page2) {
  // Use List to create an Immutable List by concatenating the two arrays
  const concatenatedList = List(page1).concat(List(page2));

  // Return the resulting Immutable List
  return concatenatedList;
}

/**
 * Merges two objects into an Immutable List.
 *
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {List} - Immutable List containing the values of both objects.
 */
export function mergeElements(page1, page2) {
  // Use Map to create Immutable Maps from the input objects
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Use mergeWith to merge the two Maps, giving preference to values from page2
  const mergedMap = map1.mergeWith((oldVal, newVal) => newVal, map2);

  // Return the values of the merged Map as an Immutable List
  return mergedMap.toList();
}
