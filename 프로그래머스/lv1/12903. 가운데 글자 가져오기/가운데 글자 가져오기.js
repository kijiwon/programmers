function solution(s) {
    let mid = Math.floor(s.length/2);
    if(s.length%2===0){
        let str = s[s.length/2-1] + s[s.length/2];
        return str;
    }
    return s[mid];
}