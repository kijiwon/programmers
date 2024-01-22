function solution(numbers) {
    var answer = 0;
    // 내림 차순 정렬
    const sorttedNumbers = numbers.sort((a,b)=>{ 
        return b-a;
    });
    // 가장 앞의 두 숫자의 곱과 가장 마지막 두 숫자의 곱을 비교
    let firstNum = sorttedNumbers[0]*sorttedNumbers[1];
    let lastNum = sorttedNumbers[sorttedNumbers.length-1]*sorttedNumbers[sorttedNumbers.length-2];
    if(firstNum>= lastNum){
        answer = firstNum
    }else{
        answer = lastNum;
    }
    return answer;
}