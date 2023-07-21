function solution(money) {
    var answer = [];
    let coffee = Math.floor(money/5500);
    let charge = money-(coffee*5500);
    answer = [coffee, charge];
    return answer;
}