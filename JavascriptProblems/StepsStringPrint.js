function StepsStringPrint(n){
   
    for(let row= 1; row<=n; row++){
        let line = ''
        for(let col=1; col<=n; col++){
          if(col <= row) line += '#'
          else line += ' '
        }
        console.log(line)
    }
   

}
console.log(StepsStringPrint(6))