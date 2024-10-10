function solution(array) {
    const arr = array.sort((a,b) => a-b);
    const idx = Math.floor(array.length / 2);
    return arr[idx];
}