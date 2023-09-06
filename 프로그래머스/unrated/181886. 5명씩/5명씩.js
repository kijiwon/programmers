function solution(names) {
    var answer = [];
    // names 요소가 0이 되기 전까지
    // 5명씩 잘라서 맨 앞 요소만 넣기
    while(names.length!==0){
        answer.push(names.splice(0, 5)[0]);
    };
    return answer;
}