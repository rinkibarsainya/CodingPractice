import * as readline from 'readline';

// Function to check if a word matches the given pattern
function matchesPattern(word: string, pattern) {
  if (word.length !== pattern.length) {
      return false;
  }
  for (let i = 0; i < word.length; i++) {
      if (pattern[i] === '(') {
          let closingIndex = pattern.indexOf(')', i);
          let options = pattern.substring(i + 1, closingIndex);
          if (!options.includes(word[i])) {
              return false;
          }
          i = closingIndex;
      } else if (word[i] !== pattern[i]) {
          return false;
      }
  }
  return true;
}

// Read integers from input
const [L, D, N] = readline().split(' ').map(Number);

// Read known words
const knownWords = [];
for (let i = 0; i < D; i++) {
  knownWords.push(readline());
}

// Process test cases
for (let t = 1; t <= N; t++) {
  const pattern = readline();
  let count = 0;
  for (const word of knownWords) {
      if (matchesPattern(word, pattern)) {
          count++;
      }
  }
  console.log(`Case #${t}: ${count}`);
}
