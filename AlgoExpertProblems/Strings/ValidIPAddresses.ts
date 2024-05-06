export function validIPAddresses(string: string) {
    const IPAddressFound: string[] = []
    
    for( let i = 0; i < Math.min(string.length, 4); i++){
      const currentIPAddress = ['', '', '', '']
      currentIPAddress[0] = string.slice(0,i)
      if(!isValid(currentIPAddress[0])) continue
  
      for(let j=i + 1; j < i + Math.min(string.length - i, 4); j++){
        currentIPAddress[1] = string.slice(i , j)
        if(!isValid(currentIPAddress[1])) continue
  
        for(let k = j + 1; k< j + Math.min(string.length - j, 4); k++){
          currentIPAddress[2] = string.slice(j, k)
          currentIPAddress[3] = string.slice(k)
  
          if(isValid(currentIPAddress[2]) && isValid(currentIPAddress[3])) {
            IPAddressFound.push(currentIPAddress.join('.'))
          }
        
        }
      }
      
    }
    return IPAddressFound;
  }
  
  function isValid(string: string){
    const stringAsInt =  parseInt(string)
    if( stringAsInt > 255) return false
  
    return string.length === stringAsInt.toString().length
  
  }

  // I/p "1921680"

  //output
 // ["1.9.216.80", "1.92.16.80", "1.92.168.0", "19.2.16.80", "19.2.168.0", "19.21.6.80", "19.21.68.0", "19.216.8.0", "192.1.6.80", "192.1.68.0", "192.16.8.0"]

 validIPAddresses("1921680")