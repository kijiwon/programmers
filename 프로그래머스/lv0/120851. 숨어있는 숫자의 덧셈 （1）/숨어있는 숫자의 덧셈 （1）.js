function solution(my_string) {
    var answer = 0;
    // isNaN()함수를 사용
    // 숫자면 true, 아니면 false를 리턴
    my_string.split('').map((el)=> !isNaN(el)? answer = answer+Number(el):0)
    return answer;
}