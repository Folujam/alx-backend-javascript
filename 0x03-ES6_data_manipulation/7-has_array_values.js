/**
 * returns values in a set
 * @param {*} set 
 * @param {*} arr 
 * @returns 
 */
export default function hasValuesFromArray(set, arr) {
  return arr.every((value) => set.has(value));
}
