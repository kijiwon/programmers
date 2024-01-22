function solution(cards1, cards2, goal) {
    // 각 배열의 가장 앞 요소만 꺼낼 수 있음
    // -> 배열의 가장 앞 요소가 일치하는 경우 꺼내기
    for(let str of goal){
        if(cards1[0]===str){
            cards1.shift();
        }else if(cards2[0]===str){
            cards2.shift();
        }else{
            return "No"
        }
    }
    return "Yes";
}