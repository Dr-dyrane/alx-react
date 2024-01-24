// Import the necessary module from Immutable.js library
import { Map } from 'immutable';

/**
 * Immutable Map containing a list of names with corresponding indices.
 * @type {Map}
 */
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

/**
 * Immutable Map with mutations applied to modify values at specific indices.
 * @type {Map}
 */
export const map2 = map.withMutations((values) => {
  // Modify the value for index 2 to 'Benjamin' & index 4 to 'Oliver'
  values.set(2, 'Benjamin').set(4, 'Oliver');
});
