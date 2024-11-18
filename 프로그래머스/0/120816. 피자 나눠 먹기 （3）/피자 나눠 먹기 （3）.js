function solution(slice, n) {
    var answer = 1;
    while(true){
        if(slice * answer < n){
            answer ++;
        }else if( slice * answer > n || slice*answer === n){
            break;
        }
    }
    return answer;
}