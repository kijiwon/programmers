function solution(n) {
    var answer = [];
    let str = n.toString();
    let arr = str.split('');
    for(let i=0; i<arr.length; i++){
        answer.unshift(Number(arr[i]));
    }
    return answer;
}