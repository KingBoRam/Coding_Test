function solution(numbers) {
    let answer = numbers.reduce((acc,cur)=>acc+cur,0);
    return answer / numbers.length
}