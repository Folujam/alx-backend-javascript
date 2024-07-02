/**
 * returns a list of students based on id
 * @param {id, firstName, location} students 
 * @returns 
 */
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((student) => student.id);
  }
  return [];
}
