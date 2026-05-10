function solution(s) {
    let mid = Math.floor(s.length/2);
    if(s.length%2===0){
        let str = s[mid-1] + s[mid];
        return str;
    }
    return s[mid];
}