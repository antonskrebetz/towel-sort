
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length === 0) {
    return [];
  } 

  let m = [];
  for (i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      m = m.concat((matrix[i]).reverse());
    } else {
      m = m.concat(matrix[i]);
    }
  }
  return m;
}
