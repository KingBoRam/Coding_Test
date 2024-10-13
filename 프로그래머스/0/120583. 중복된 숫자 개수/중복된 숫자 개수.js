function solution(array, n) {
  return array.reduce((acc, cur) => {
    if (cur === n) {
      acc++;
    }
    return acc;
  }, 0);
}