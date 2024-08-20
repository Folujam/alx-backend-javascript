const fs = require('fs').promises;
/**
 * 
 * @param {string} filePath 
 */
async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const students = data.split('\n').filter(Boolean); // Remove empty lines
    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      const [field, firstName] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;