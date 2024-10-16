function solution(my_string) {
  let answer = 0;
  const stringArr = [...my_string];
  answer = stringArr.reduce(
    (acc, cur) => (!isNaN(Number(cur)) ? acc + Number(cur) : acc),
    0
  );
  return answer;
}