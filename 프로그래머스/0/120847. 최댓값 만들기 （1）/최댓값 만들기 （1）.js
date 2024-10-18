function solution(numbers) {
    var answer = 0;
    let arr = numbers.sort((a,b) => a-b);
    answer = Number(arr[arr.length-1]) * Number(arr[arr.length-2])
    return answer;
}