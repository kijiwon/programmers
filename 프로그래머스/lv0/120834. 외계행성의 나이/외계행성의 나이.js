function solution(age) {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let answer = [];
    let ageArr = String(age).split('');
    for(let i=0; i<ageArr.length; i++){
        answer.push(alpha[ageArr[i]]);
    }
    return answer.join('');
}