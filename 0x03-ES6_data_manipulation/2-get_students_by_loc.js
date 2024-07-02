/**
 * returns an array of objects who are located in a specific city.
 * @param {{}[]} students 
 * @param {string} city 
 * @returns 
 */
export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
