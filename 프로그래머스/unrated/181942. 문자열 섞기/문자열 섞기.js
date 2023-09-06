function solution(str1, str2) {
    var answer = '';
    // 두 문자열의 같은 인덱스 문자를 넣기
    for(let i=0; i<str1.length; i++){
        answer += str1[i]+ str2[i];
    }
    return answer;
}