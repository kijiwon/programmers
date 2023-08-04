function solution(arr) {
    var answer = [];
    answer = arr.filter((el)=> Math.min(...arr)!==el);
    if(answer.length===0) return [-1];
    return answer;
}