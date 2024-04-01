function Pyramid(n){
    const mid = Math.floor((2*n -1)/2)
    for(row =0; row<n; row++){
        let line ='';
        for(col=0; col< 2*n-1; col++){
           
          if(col >= mid- row && col <= mid + row)
          {
            console.log('mid with #', row, col)
           line += "#";
          }
          else {
            console.log('mid with space', row, col)
            line += ' ';
          }
           
        }
        console.log(line)
    }
}

console.log(Pyramid(3))