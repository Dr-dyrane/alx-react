// Import the necessary module from Immutable.js library
import { Seq } from "immutable";

/**
 * Filters and prints best students with a score >= 70.
 *
 * @param {Object} object - An object containing student information.
 */
export default function printBestStudents(object) {
	// Create a lazy sequence from the input object using Seq
	const seq = Seq(object);

	// Filter students with a score > 70 and transform their names
	const filtered = seq
		.filter((student) => student.score > 70)
		.map((student) => ({
			...student,
			firstName: capFirstLetter(student.firstName),
			lastName: capFirstLetter(student.lastName),
		}));

	// Convert the lazy sequence to a JavaScript object
	const JSObject = filtered.toJS();

	// Print the resulting object to the console
	console.log(JSObject);
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} string - The input string.
 * @returns {string} - The string with the first letter capitalized.
 */
function capFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
