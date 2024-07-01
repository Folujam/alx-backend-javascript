/**
 * function getListStudentIds that returns an array of ids from a list of object
 */
export default getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((student) => student.id);
  }
  return [];
}
