/**
 * exported weak map
 */
export const weakMap = new WeakMap();
const MAXQUERIES = 5;
/**
 * query API
 * @param {*} endpoint
 */
export default function queryAPI(endpoint) {
  if(!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) > MAXQUERIES) {
    throw new Error('Endpoint load is high');
  }
}
