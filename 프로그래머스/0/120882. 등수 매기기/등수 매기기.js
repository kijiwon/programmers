function solution(score) {
    var answer = [];
    let combArr = score.map(i => i[0]+i[1])
    let sortArr= combArr.slice().sort((a,b)=> b-a)
    answer = combArr.map((i)=> sortArr.indexOf(i)+1)
    return answer;
}