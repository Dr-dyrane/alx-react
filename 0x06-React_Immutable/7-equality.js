// Import the necessary module from Immutable.js library
import { Map, is } from 'immutable';

/**
 * Checks if two Immutable Maps are equal.
 *
 * @param {Map} map1 - The first Immutable Map.
 * @param {Map} map2 - The second Immutable Map.
 * @returns {boolean} - True if the Maps are equal, false otherwise.
 */
export function areMapsEqual(map1, map2) {
  // Use is method from Immutable.js to check for equality
  const equal = is(map1, map2);

  // Return the result of the equality check
  return equal;
}
