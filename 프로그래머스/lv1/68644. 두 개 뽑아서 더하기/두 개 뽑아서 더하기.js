function solution(numbers) {
    var answer = [];
    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            // 중복 확인하기
            if(answer.indexOf(sum)===-1){
                answer.push(sum);
            }
        }
    }
    // 순서대로 정렬
    answer = answer.sort((a,b)=> a-b);
    return answer;
}