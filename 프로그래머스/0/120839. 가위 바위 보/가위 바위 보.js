function solution(rsp) {
    var answer = '';
    let string = rsp.split('');
    for(let i = 0 ; i<string.length; i++){
        if(string[i] === '2'){
            answer += '0'
        }else if (string[i] === '0'){
            answer += '5'
        }else {
            answer += '2'
        }
    }
    return answer;
}