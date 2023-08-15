function solution(array) {
    // 스프레드 연산자로 배열을 풀어주기
    let a = Math.max(...array);
    let idx = array.indexOf(a);
    return [a, idx]
}