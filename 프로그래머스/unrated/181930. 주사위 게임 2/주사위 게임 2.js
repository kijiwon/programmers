function solution(a, b, c) {
    var answer = 0;
    a === b && b === c && c === a? answer = (a+b+c)*(a*a + b*b + c*c)*(Math.pow(a,3)+ Math.pow(b,3) + Math.pow(c,3)) :
    a !== b && b !== c && c !== a? answer = a + b + c : answer = (a+b+c)*(a*a + b*b + c*c)
    return answer;
}