// Import the necessary module from Immutable.js library
import { Map } from "immutable";

// Create an Immutable Map named 'map'
export const map = Map({
	1: "Liam",
	2: "Noah",
	3: "Elijah",
	4: "Oliver",
	5: "Jacob",
	6: "Lucas",
});

// Export a second constant named 'map2'
export const map2 = map.withMutations((values) => {
	values
		.set(2, "Benjamin") // Modify the value for index 2 to 'Benjamin'
		.set(4, "Oliver"); // Modify the value for index 4 to 'Oliver'
});
