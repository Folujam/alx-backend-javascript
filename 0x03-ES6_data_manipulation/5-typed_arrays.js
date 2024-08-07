/**
 *
 * @param {*} length
 * @param {*} position
 * @param {*} value
 * @returns
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffa = new DataView(new ArrayBuffer(length), 0, length);
  buffa.setInt8(position, value);
  return buffa;
}
