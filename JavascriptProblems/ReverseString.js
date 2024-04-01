function ReverseString(s){
    let ReverseString = '';
    for(let char of s){
        ReverseString = char + ReverseString;
    }
    return ReverseString;
}

const str = "Chinmay";

console.log('revreser string', ReverseString("Rinki"))
console.log('Reverse', str.split('').reverse().join(''));