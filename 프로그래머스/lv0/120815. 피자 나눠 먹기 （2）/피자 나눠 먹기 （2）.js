function solution(n) {
    var answer = 0;
    // 피자 한 판의 조각 개수
    let pizza = 6;
    
    // 조각 개수%n===0 이 될 때까지 한 판씩 더하기
    while(pizza % n !==0){
        pizza += 6;
    }
    // 피자 몇 판이 필요한지 구하기
    answer = pizza/6;
    return answer;
}