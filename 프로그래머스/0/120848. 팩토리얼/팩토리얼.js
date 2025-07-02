function solution(n) {
    var answer = 1;
    let factorial = 1;
    while(factorial <=n){
        answer += 1; // 숫자 증가 후 연산
        factorial *= answer;
    }
    return answer-1;
}