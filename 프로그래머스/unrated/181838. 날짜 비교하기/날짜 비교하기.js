function solution(date1, date2) {
    // 년도가 같지 않다면 -> 더 빠른 년도 비교
    if(date1[0] !== date2[0]) return date1[0] < date2[0] ?  1 : 0
    // 월이 같지 않다면 -> 더 빠른 월 비교
    if(date1[1] !== date2[1]) return date1[1] < date2[1] ? 1 : 0
    // 일이 같지 않다면 -> 더 빠른 일 비교
    if(date1[2] !== date2[2]) return date1[2] < date2[2] ? 1 : 0
    return 0
}