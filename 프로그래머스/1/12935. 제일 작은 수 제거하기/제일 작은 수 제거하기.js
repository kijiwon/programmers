function solution(arr) {
    if(arr.length===1) return [-1];
    var elm = [...arr].sort((a,b)=>a-b)[0];
    // answer = arr.filter((el)=> Math.min(...arr)!==el);
    
    return arr.filter((el)=> el !== elm);
}
