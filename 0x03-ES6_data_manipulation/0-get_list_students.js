/**
 * gets list of students
 * @returns {{
 * id; Number,
 * firstName: string,
 * location:string
 * }[]} a list of objs
 */
export default function getListStudents() {
  return [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ];
}
