function solution(i, j, k) {
    var answer = '';
    // 문자열로 모든 수를 연결해 카운트
    for(i; i<=j;i++){
        answer +=i;
    }
    
    
    return answer.split(k).length-1;
}