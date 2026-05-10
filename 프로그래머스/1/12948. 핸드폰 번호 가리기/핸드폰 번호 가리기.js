function solution(phone_number) {
    let num = phone_number.slice(-4).toString();
    let str = phone_number.slice(0,-4).replace(/\d/g, '*');
    return str+num;
}