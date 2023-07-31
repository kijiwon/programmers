function solution(start, end) {
    var answer = [];
    for(let i=end; i<=start; i++){
        answer.push(i);
    }
    answer.sort((a,b)=> b-a);
    return answer;
}