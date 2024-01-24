// Import the necessary module from Immutable.js library
import { List } from 'immutable';

/**
 * Converts an array into an Immutable List using the Immutable.js library.
 *
 * @param {Array} array - The array to be converted.
 * @returns {List} - Immutable List created from the input array.
 */
export function getListObject(array) {
  // Use List to create an Immutable List from the input array
  const immutableList = List(array);

  // Return the resulting Immutable List
  return immutableList;
}

/**
 * Appends a string to an existing Immutable List.
 *
 * @param {List} list - The Immutable List to which the string will be appended.
 * @param {string} element - The string to be appended to the list.
 * @returns {List} - The updated Immutable List with the appended string.
 */
export function addElementToList(list, element) {
  // Use push method to append the string to the Immutable List
  const updatedList = list.push(element);

  // Return the updated Immutable List
  return updatedList;
}
