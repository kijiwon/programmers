function solution(n){
    let answer = 0;
    let str = n.toString();
    let arr = str.split('');
    for(let i of arr){
        answer = answer + Number(i);
    }
    return answer;
}