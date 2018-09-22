/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.splice(0, 0, 0); // избавляемся от нуля в индексе
  let count=0;
  let i; // index
  for (i = 1; i < preferences.length; i++) {
  let a = preferences[i];
  if (a == i) continue;
  let b = preferences[a];
  if (a == b) continue;
  let c = preferences[b];
  if (b == c) continue;
  if (c == i) {
  count++}
  }
  return count/3;
}
