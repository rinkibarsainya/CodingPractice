export function caesarCipherEncryptor(string: string, key: number) {
    const resultArray : string[] = []
    const newKey = key % 26
    
    for (const letter of string){
      resultArray.push(getNewLetter(letter, newKey))
    }
    return resultArray.join('');
  }
  
  function getNewLetter(letter: string, key: number){
    console.log('letter', letter)
    const newLetterCode = letter.charCodeAt(0) + key
    const newLetter = newLetterCode <= 122
      ? String.fromCharCode(newLetterCode) 
      :  String.fromCharCode(96 + (newLetterCode % 122))
      console.log('newLeter', newLetter)
    return newLetter
  }

  console.log('caesarCipherEncryptor', caesarCipherEncryptor('abc', 52))