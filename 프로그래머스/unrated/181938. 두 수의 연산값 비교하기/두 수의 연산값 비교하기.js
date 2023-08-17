function solution(a, b) {
    let pls = Number(String(a)+String(b));
    if(pls<(2*a*b)){
        return 2*a*b;
    } else{
        return pls
    }
}