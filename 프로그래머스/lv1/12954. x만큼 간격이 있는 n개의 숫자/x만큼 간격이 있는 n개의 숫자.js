function solution(x, n) {
    var answer = [];
    // x의 배수를 n개 넣기
    for(let i=1; i<=n; i++){
        answer.push(x*i);
    }
    return answer;
}