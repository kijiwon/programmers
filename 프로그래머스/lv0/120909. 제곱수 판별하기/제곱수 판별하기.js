function solution(n) {
    // 루트를 씌운 값이 소수점이 나오지 않으면 제곱수
    if(Math.sqrt(n)%1===0){
        return 1;
    }
    return 2;
}