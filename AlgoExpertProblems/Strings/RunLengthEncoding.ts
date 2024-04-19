export function runLengthEncoding(string: string) {
  const  encodedString = []
  let currentRunLength = 1
  
  for( let i = 1;  i < string.length; i++){
    if(string[i] !== string[i-1] || currentRunLength === 9){
      encodedString.push(currentRunLength.toString())
      encodedString.push(string[i-1])
      currentRunLength = 0
    }
    currentRunLength++
  }
    encodedString.push(currentRunLength.toString())
    encodedString.push(string[string.length -1])
    
  
  return encodedString.join('');
}

//Ip   AAAAAAAAAAAAABBCCCCDD
//o/p  9A4A2B4C2D