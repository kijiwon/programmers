function solution(n) {
    let answer = 0;
    let str = n.toString();
    for(let i=0; i<str.length; i++){
        answer = answer+Number(str[i]);
    }
    return answer;
}