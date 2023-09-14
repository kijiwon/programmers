function solution(n) {
    var answer = [];
    // n을 3진법으로 변환
    let str = n.toString(3);
    // 요소를 뒤집어 넣기
    for(let i=0; i<str.length; i++){
        answer.unshift(str[i]);
    }
    // 문자열로 묶어준 후 10진법으로 변환
    let result = answer.join('')
    return parseInt(result, 3);
}