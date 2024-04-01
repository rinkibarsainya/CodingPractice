//write a program that console log numbers from 1 to n
// if number is multiple of 3 then print fizz
//if number is multiple of 5 then print buzz and if number is multiple of both then print fizzbuzz

function FizBuzz(n){
  for(let i=1; i<=n; i++){
    if(i%3 === 0 && i%5 === 0) console.log('fizzbuzz')
    else if(i%3 === 0) console.log('fizz')
    else if(i%5 === 0) console.log('buzz')
    else
     console.log(i)
  }
}

console.log('FizBuzz', FizBuzz(27));
