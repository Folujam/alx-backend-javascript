/**
 * returns an arr of obj who are in a specific city.
 * @param {{
 * id: Number,
 * firstName: string,
 * location: string
 * }[]} students - list of students
 * @param {string} city
 * @returns {object}
 */
export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
