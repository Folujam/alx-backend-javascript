/**
 * returns a list of students based on id
 * @param {{
 * id: Number,
 * firstName: string,
 * location: string
 * }[]} students
 * @returns
 */
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((student) => student.id);
  }
  return [];
}
