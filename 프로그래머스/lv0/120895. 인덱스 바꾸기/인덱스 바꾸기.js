function solution(my_string, num1, num2) {
    var answer = my_string.split('');
    // splice()
    // splice(변경을 시작할 인덱스, (배열에서 제거할 요소의 수), (배열에 추가할 요소))
    answer.splice(num1, 1, my_string[num2]);
    answer.splice(num2, 1, my_string[num1]);
    return answer.join('');
}