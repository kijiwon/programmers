function solution(array) {
    var answer = 0;
    let arr = array.sort((a,b)=>a-b);
    let midIdx = Math.floor(array.length/2);
    answer = arr[midIdx];
    return answer;
}