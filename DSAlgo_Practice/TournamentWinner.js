function tournamentWinner(competitions, results) {
    var leader = { score: -Infinity, name: '' };
    var scoreboard = {};
    for (var i = 0; i < competitions.length; i++) {
        console.log('result[i]', results[i]);
        var winnerIdx = results[i] === 0 ? 1 : 0;
        console.log('winnerIdx', winnerIdx);
        var winner = competitions[i][winnerIdx];
        console.log('winner', winner);
        if (winner in scoreboard)
            scoreboard[winner] += 3;
        else
            scoreboard[winner] = 3;
        console.log('scoreboard', scoreboard);
        if (leader.score < scoreboard[winner]) {
            leader.name = winner;
            leader.score = scoreboard[winner];
        }
    }
    return leader.name;
}
var competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
];
var result = [0, 1, 1];
console.log('tournamentWinner', tournamentWinner([
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
], [0, 1, 1]));
