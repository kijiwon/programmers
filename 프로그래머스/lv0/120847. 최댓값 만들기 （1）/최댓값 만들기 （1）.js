function solution(numbers) {
    // 숫자를 오름차순으로 정렬시엔 요소를 문자열로 취급 =>11<9이 됨
    // 정렬을 하려면 값 비교를 해줄 함수를 넣음
    // a-b가 양수면 뒤로, 음수면 앞으로
    let arr = numbers.sort((a,b)=>a-b);
    let num1 = arr[arr.length-1];
    let num2 = arr[arr.length-2];
    return num1*num2;
}