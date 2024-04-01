function Palindrome(s){
  reverseStr = s.split('').reverse().join('');
  if(s === reverseStr) return true
  return false;
}

console.log('NITIN', Palindrome('NITIN'));
console.log('TEST', Palindrome('TEST'));