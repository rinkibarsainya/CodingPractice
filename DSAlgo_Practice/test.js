//Problem 1. 
// Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.
// Input: [2,7,11,15], 9 output: [0,1]
// Algo Expert : passed all test cases
// export function twoNumberSum(array: number[], targetSum: number) {
//     // Write your code here.
//     const obj: {[key:number]: number} = {}
//       for(let i=0; i<array.length; i++){
//           //sum = x+y
//           let x = array[i];
//           let y = targetSum - x;
//           if( y in obj) 
//             return [y, array[i]];
//           else
//            obj[x] = i
//       }
//     return [];
//   }
//console.log('TwoNumSum ==>', TwoNumSum([2,7,11,15], 9))
//Problem :2
// function PairSum(array: number[], targetSum: number){
//     const arrayMap : {[key:number]: number}= {}
//     for(let i=0; i<array.length; i++){
//        // sum = x+y 
//        let firstNum = array[i];
//        let secondNum = targetSum - firstNum;
//        if(secondNum in arrayMap){
//           return [arrayMap[secondNum], i]
//        }else{
//           arrayMap[firstNum] = i
//        }
//     }
//     return[-1, -1];
// }
//[3, 2, 5, 4, 1], 8
// function PairSum1(array: number[], targetSum: number){
//    array.sort((a,b) => a-b) 
//    let i = 0;
//    let j = array.length -1;
//    let currentSum =0;
//    while(i<j){
//      currentSum = array[i] + array[j];
//      //console.log('Current Sum' , currentSum);
//       if(currentSum === targetSum){
//         return [i, j]
//       }else if(currentSum < targetSum){
//          i++;
//       }else if(currentSum > targetSum){
//         j--;
//       }
//    }
// }
// console.log('PairSum 1', PairSum1([3, 2, 5, 4, 1], 8));
// console.log('PairSum 2', PairSum1([4, 7, 9, 2, 5, 1], 5));
// console.log('PairSum 3', PairSum1([4, 7, 9, 2, 5, 1], 3));
// console.log('PairSum 4', PairSum1([1, 6, 7, 2], 13));
// console.log('PairSum 5', PairSum1([9, 9], 18));
// console.log('PairSum 6', PairSum1([6, 4, 2, 8 ], 12));
//Problem : 3
//five_sort([12, 5, 1, 5, 12, 7])
//# -> [12, 7, 1, 12, 5, 5] 
// function fiveSortNew(array:number[]) {
//   let i = 0;
//   let j = array.length -1;
//   while(i<j){
//     if(array[i] === 5){
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//         j--;
//     }else{
//         i++;
//     }
//   }
//   return array;
// }
// console.log('fiveSort 1', fiveSortNew([12, 5, 1, 5, 12, 7]))
// console.log('fiveSort 2', fiveSortNew([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]))
// console.log('five sort 3 ', fiveSortNew([5, 5, 5, 1, 1, 1, 4]))
// console.log('fiveSort 4', fiveSortNew([5, 5, 6, 5, 5, 5, 5]))
// console.log('fiveSort 5', fiveSortNew([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]))
//Problem : 4
// function charMap(str: string){
//     const charMap = {}
//     for(let char of str){
//       charMap[char] = char;
//     }
//     return charMap;
// }
// function anagrams(strA: string, strB:string){
//    if(strA.length !== strB.length) return false;
//    // build char Map for string A and String B
//    const charMapStrA = charMap(strA);
//    const charMapStrB = charMap(strB);
//    for(let key in charMapStrA){
//      if(charMapStrA[key] !== charMapStrB[key]) return false
//    }
//    return true;
// }
// console.log('isAnagram', anagrams('restful', 'fluster'))
// console.log('isAnagram', anagrams('cats', 'tocs'))
// console.log('isAnagram', anagrams('monkeyswrite', 'newyorktimes'))
// console.log('isAnagram', anagrams('restful', 'fluster'))
// console.log('isAnagram', anagrams('cats', 'tocs'))
// console.log('isAnagram', anagrams('tax', 'taxi'))
// console.log('isAnagram', anagrams('night', 'thing'))
// console.log('isAnagram', anagrams('elbow', 'below'))
// console.log('isAnagram', anagrams('abbc', 'aabc'))
// console.log('isAnagram', anagrams('po', 'popp'))
// console.log('isAnagram', anagrams('pp', 'oo'))
// Problem : 5
// array: [3, 1, 7, 5, 10, 2];
// sequence: [1, 5, 2];
// Output: true
// function ValidSubSequence(array: number[], sequence: number[])
// {
//       let seqIndex = 0;
//       for(let i=0; i<array.length; i++){
//         if(seqIndex === sequence.length) break;
//         if(array[i] === sequence[seqIndex]){
//             seqIndex++;
//         }
//       }
//       return seqIndex === sequence.length;
// }
// console.log('Valid SubSequence', ValidSubSequence([3, 1, 7, 5, 10, 2], [1,5,2]))
// console.log('Valid SubSequence', ValidSubSequence([5, 1, 22, 25, 6, -1, 8, 10],  [1, 6, -1, 10]))
// console.log('Valid SubSequence', ValidSubSequence([3, 1, 7, 5, 10, 2], [1,2,5]))
// console.log('Valid SubSequence', ValidSubSequence([1, 1, 1, 1, 1], [1,1,1]))
// console.log('Valid SubSequence', ValidSubSequence([5,1,22,25,6,-1,8,10], [25]))
//Problem: 6
//{ 4, 7, 2, 8, 10, 9 } = 10
// function MaxVal(array:number[]){
//    let max = -Infinity;
//    for(let num of array){
//      if(num > max){
//         max = num;
//      }
//    }
//    return max;
// }
// console.log('MaxVal', MaxVal([4, 7, 2, 8, 10, 9]))
//Problem :7  pairedParentheses("(david)((abby))") 
//2. pairedParentheses("()rose(jeff");  //false
// function pairedParentheses(str: string){
//     const stack = [];
//     for( let char of str){
//         if(char === '('){
//            stack.push(char);
//         }else if(char === ')'){
//         stack.pop();
//         }
//     }
//     return stack.length === 0;
// }
// console.log('pairedParentheses', pairedParentheses("(david)((abby))"))
// console.log('pairedParentheses', pairedParentheses("()rose(jeff"))
// Problem :8 pair_product([3, 2, 5, 4, 1], 8) # -> (1, 3)
// function pair_product(array: number[], targetProduct: number){
//     // prod = x*y
//     const charMap ={}
//     for(let i=0; i<array.length; i++){
//        let firstNum = array[i]
//        let secondNum = targetProduct / firstNum;
//        if(secondNum in charMap)
//            return [charMap[secondNum], i]
//         else
//            charMap[firstNum] = i;
//     }
// }
// console.log('pair prod', pair_product([3, 2, 5, 4, 1], 8))
// console.log('pair prod', pair_product([3, 2, 5, 4, 1], 10) )
// console.log('pair prod', pair_product([4, 7, 9, 2, 5, 1], 35))
// console.log('pair prod', pair_product([3, 2, 5, 4, 1], 10))
// console.log('pair prod', pair_product([4, 6, 8, 2], 16) )
//Problem 10 : befittingBrackets('(){}[](())'); 
//You may assume string contains only characters: ( ) [ ] { }
var Brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
};
function befittingBrackets(str) {
    var stack = [];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char in Brackets) {
            stack.push(Brackets[char]);
        }
        else if (stack.length > 0 && stack[stack.length - 1] == char) {
            stack.pop();
        }
        else {
            return false;
        }
    }
    return stack.length === 0;
}
// console.log('befittingBrackets 1',befittingBrackets('(){}[](())') )
// console.log('befittingBrackets 2',befittingBrackets('({[]})') )
// console.log('befittingBrackets 3', befittingBrackets('[][}]'))
// console.log('befittingBrackets 4',befittingBrackets('{[]}({}') )
// console.log('befittingBrackets 5',befittingBrackets('[]{}(}[]') )
// console.log('befittingBrackets 6',befittingBrackets('[]{}()[]') )
// console.log('befittingBrackets 7', befittingBrackets(']{}'))
// console.log('befittingBrackets 8',befittingBrackets('') )
//Problem : 11 compress('ccaaatsss') # -> '2c3at3s'
function compress(inputStr) {
    var compressStr = '';
    var currentChar = inputStr[0];
    var charCount = 1;
    for (var i = 1; i <= inputStr.length; i++) {
        if (currentChar === inputStr[i]) {
            charCount += 1;
        }
        else {
            compressStr += charCount !== 1 ? charCount + currentChar : currentChar;
            currentChar = inputStr[i];
            charCount = 1;
        }
    }
    return compressStr;
}
// console.log('compress ccaaatsss =>', compress('ccaaatsss'))
// console.log('compress ssssbbz =>', compress('ssssbbz'))
// console.log('compress ppoppppp =>', compress('ppoppppp'))
// console.log('compress nnneeeeeeeeeeeezz =>', compress('nnneeeeeeeeeeeezz'))
// console.log('compress yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy =>', compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'))
//Problem 12: mostFrequentChar('bookeeper'); // -> 'e'
// {b:1 , o:2, k:1, e:3, p:1, r:1}
function mostFrequentChar(str) {
    var charMap = {};
    var maxChar = '';
    var max = 0;
    for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
        var char = str_2[_i];
        if (char in charMap) {
            charMap[char] += 1;
        }
        else {
            charMap[char] = 1;
        }
    }
    for (var key in charMap) {
        if (charMap[key] > max) {
            max = charMap[key];
            maxChar = key;
        }
    }
    return maxChar;
}
// console.log('mostFrequentChar', mostFrequentChar('bookeeper'));
// console.log('mostFrequentChar david', mostFrequentChar('david'));
// console.log('mostFrequentChar abby', mostFrequentChar('abby'));
// console.log('mostFrequentChar mississippi', mostFrequentChar('mississippi'));
// console.log('mostFrequentChar david', mostFrequentChar('david'));
// console.log('mostFrequentChar eleventennine', mostFrequentChar('eleventennine'));
// console.log('mostFrequentChar potato', mostFrequentChar('potato'));
// console.log('mostFrequentChar riverbed', mostFrequentChar('riverbed'));
//Problem: 13 intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
function Intersection(array1, array2) {
    var result = [];
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var num = array1_1[_i];
        if (array2.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
// console.log('intersection', Intersection([4,2,1,6], [3,6,9,2,10]))
// console.log('intersection', Intersection([2,4,6], [4,2]) )
// console.log('intersection', Intersection([4,2,1], [1,2,4,6]))
// console.log('intersection', Intersection([0,1,2], [10,11]))
//Problem: 14 uncompress("2c3a1t"); // -> 'ccaaat'
function uncompress(str) {
    var uncompressStr = '';
    var multiplier = '';
    for (var _i = 0, str_3 = str; _i < str_3.length; _i++) {
        var char = str_3[_i];
        if (!isNaN(Number(char))) { // char is number
            multiplier += char;
        }
        else {
            var num = parseInt(multiplier);
            uncompressStr += char.repeat(num); // repeat char 
            multiplier = '';
        }
    }
    return uncompressStr;
}
// console.log('uncompress 2c3a1t', uncompress("2c3a1t"))
// console.log('uncompress 3n12e2z', uncompress("3n12e2z"))
// console.log('uncompress 3n12e2z', uncompress("3n12e2z"))
// console.log('uncompress 4s2b', uncompress("4s2b"))
// console.log('uncompress 2p1o5p', uncompress("2p1o5p"))
// console.log('uncompress 127y', uncompress("127y"))
//Problem:14 decompressBraces("2{q}3{tu}v"); 
function decompressBraces(str) {
    var stack = [];
    for (var _i = 0, str_4 = str; _i < str_4.length; _i++) {
        var char = str_4[_i];
        if (!isNaN(Number(char))) {
            stack.push(Number(char));
        }
        else if (char === '}') {
            var newChar = '';
            while (typeof stack[stack.length - 1] !== 'number') {
                var poppedChar = stack.pop();
                newChar += poppedChar;
            }
            var num = stack.pop();
            stack.push(newChar.repeat(num));
        }
        else if (char !== '{') {
            stack.push(char);
        }
    }
    return stack.join('');
}
console.log('decompressBraces("2{q}3{tu}v")', decompressBraces("2{q}3{tu}v"));
