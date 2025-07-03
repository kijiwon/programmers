function solution(s) {
    var answer = 0;
    let arr = s.split(' ');
    let result = [];
    for(let i of arr){
        if(i==='Z'){
            // 앞에 넣었던 숫자 없애기
            result.pop();
        } else{
            result.push(i);
        }
    }
    for(let i of result){
        answer += Number(i)
    }
    return answer;
}