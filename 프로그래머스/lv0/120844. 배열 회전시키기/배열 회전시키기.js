function solution(numbers, direction) {
    if(direction==="right"){
        // 맨 마지막 요소를 앞으로 넣기
        numbers.unshift(numbers.pop());
    } else if(direction==="left"){
        // 맨 앞 요소를 뒤에 넣기
        numbers.push(numbers.shift());
    }
    return numbers;
}