
function tournamentWinner(competitions: string[][], results: number[]) {
    const leader = {score: -Infinity, name:''}
    const scoreboard = {}

    for(let i =0; i<competitions.length; i++){
      console.log('result[i]',results[i])
      //home team :0 and away team :1
      const winnerIdx = results[i] === 0 ? 1 : 0; 
      console.log('winnerIdx',winnerIdx)
      const winner = competitions[i][winnerIdx]
      
      console.log('winner', winner);
      if(winner in scoreboard) scoreboard[winner] += 3;
      else scoreboard[winner] =3;
       console.log('scoreboard', scoreboard)

      //update leader score 
      if(leader.score < scoreboard[winner])
        {
            leader.name = winner;
            leader.score = scoreboard[winner]
        }
      
    }
    
    return leader.name;
  }

  const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ]

  const result =[0,1,1]

  console.log('tournamentWinner', tournamentWinner([
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
  ], [0,1,1]))