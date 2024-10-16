function solution(n) {
    var answer = 0;
    let number = Math.sqrt(n)
    if (number === Math.ceil(number)){
        answer = 1
    }else{
        answer = 2
    }
    return answer;
}