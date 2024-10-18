function solution(my_string, letter) {
    var answer = '';
    let strarr = my_string.split('')
    answer = strarr.filter((str) => str !== letter).join('')
    return answer;
}