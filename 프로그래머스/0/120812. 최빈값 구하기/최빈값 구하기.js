function solution(array) {
  if (array.length === 1) {
    return array[0];
  }

  let arrInfo = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (arrInfo[item]) {
      arrInfo[item]++;
    } else {
      arrInfo[item] = 1;
    }
  }

  const arrInfoValues = Object.entries(arrInfo);
  const maxEntry = arrInfoValues.reduce(
    (max, entry) => (entry[1] > max[1] ? entry : max),
    [null, 0]
  );

  const maxCount = maxEntry[1];
  const maxCountItems = arrInfoValues.filter(
    ([_, count]) => count === maxCount
  );

  if (maxCountItems.length > 1) {
    return -1; // 최빈값이 여러 개인 경우
  }

  return Number(maxEntry[0]); // 최빈값을 반환
}
