import test from "node:test";

function matchPattern(word: string, pattern: string): boolean {
    const regex = new RegExp("^" + pattern.replace(/\(/g, "[").replace(/\)/g, "]") + "$");
    //console.log('regex', regex, 'word', word)
    return regex.test(word);
}

function solveAlienProblem( dictionary: string[], testCases: string[]): void {
    for (let i = 0; i < testCases.length; i++) {
        let count = 0;
        const pattern = testCases[i];
        for (const word of dictionary) {
            if (matchPattern(word, pattern)) {
                count++;
            }
        }
        console.log(`Case #${i + 1}: ${count}`);
    }
}

function main(): void {
    // Parse input
    const inputLines: string[] = [
        "3 5 4",
        "abc",
        "bca",
        "dac",
        "dbc",
        "cba",
        "(ab)(bc)(ca)",
        "abc",
        "(abc)(abc)(abc)",
        "(zyx)bc"
    ];

    const [L, D, N] = inputLines[0].split(" ").map(Number);
    const dictionary = inputLines.slice(1, D + 1);
    const testCases = inputLines.slice(D + 1);
    //console.log('dictionary and test cases', dictionary, testCases )
    solveAlienProblem(dictionary, testCases);
}

main();
