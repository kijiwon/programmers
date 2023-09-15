function solution(s) {
    // 숫자 문자열을 배열에 담기
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    // 들어올 s를 할당
    var answer = s;

    // 숫자 문자열을 하나씩 순회
    for(let i=0; i< numbers.length; i++) {
        // 숫자 문자열 하나를 기준으로 문자열을 자른 뒤 배열에 담기
        // 해당하는 문자열이 없는 경우(숫자) 그대로 반환
        let arr = answer.split(numbers[i]);
        // 해당 인덱스로 넣어주기
        answer = arr.join(i);
    }

    return Number(answer);
}