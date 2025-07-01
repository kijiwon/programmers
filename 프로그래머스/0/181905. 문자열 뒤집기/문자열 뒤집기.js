function solution(my_string, s, e) {
   let arr = Array.from(my_string)
   let revStr = arr.slice(s,e+1)
   revStr.reverse()
    arr.splice(s, e-s+1,...revStr) //e-s+1 -> 문자열의 길이
    return arr.join('')
}