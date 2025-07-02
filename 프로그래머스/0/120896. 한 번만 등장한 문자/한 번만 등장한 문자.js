function solution(s) {
    var answer = '';
    // 특정 알파벳을 기준으로 분리 -> 하나만 있을때 배열의 길이 = 2
    answer = [...s].filter(c => s.split(c).length===2);
    // 사전 순서대로 정렬 후 붙이기
    return answer.sort().join('');
}