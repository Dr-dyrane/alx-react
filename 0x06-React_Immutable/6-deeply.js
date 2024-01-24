// Import the necessary module from Immutable.js library
import { Map } from 'immutable';

/**
 * Deeply merges two objects into an Immutable List.
 *
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {List} - Immutable List containing the values of both objects with deep merging.
 */
export function mergeDeeplyElements(page1, page2) {
  // Use Map to create Immutable Maps from the input objects
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Use mergeWith to deep merge the two Maps, combining values if they are the same
  const mergedMap = map1.mergeWith((oldVal, newVal) => {
    // If oldVal and newVal are both maps, recursively merge them
    if (Map.isMap(oldVal) && Map.isMap(newVal)) {
      return mergeDeeplyElements(oldVal.toJS(), newVal.toJS()).toMap();
    }
    // If oldVal and newVal are both lists, concatenate them
    if (List.isList(oldVal) && List.isList(newVal)) {
      return oldVal.concat(newVal);
    }
    // For other types, combine them
    return oldVal + newVal;
  }, map2);

  // Return the values of the merged Map as an Immutable List
  return mergedMap.toList();
}
