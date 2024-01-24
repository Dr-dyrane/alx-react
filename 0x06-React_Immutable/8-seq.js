// Import the necessary module from Immutable.js library
import { Seq } from 'immutable';

/**
 * Filters and prints best students with a score >= 70.
 *
 * @param {Object} grades - An object containing student grades.
 */
export function printBestStudents(grades) {
  // Use Seq to create a lazy sequence from the input object
  const gradesSeq = Seq(grades);

  // Use filter and map to transform and filter the students with a score >= 70
  const bestStudentsSeq = gradesSeq
    .filter(student => student.score >= 70)
    .map(student => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));

  // Convert the lazy sequence to a regular JavaScript object
  const bestStudents = bestStudentsSeq.toObject();

  // Print the resulting object to the console
  console.log(bestStudents);
}
