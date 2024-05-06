"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boggleBoard = void 0;
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = {};
        this.endSymbol = '*';
    }
    Trie.prototype.add = function (word) {
        var current = this.root;
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var letter = word_1[_i];
            if (!(letter in current))
                current[letter] = {};
            current = current[letter];
        }
        current[this.endSymbol] = word;
    };
    return Trie;
}());
function boggleBoard(board, words) {
    var trie = new Trie();
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        trie.add(word);
    }
    var finalWords = {};
    var visited = board.map(function (row) { return row.map(function (letter) { return false; }); });
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            explore(i, j, board, trie.root, visited, finalWords);
        }
    }
    return Object.keys(finalWords);
}
exports.boggleBoard = boggleBoard;
function explore(i, j, board, trieNode, visited, finalWords) {
    if (visited[i][j])
        return;
    var letter = board[i][j];
    if (!(letter in trieNode))
        return;
    visited[i][j] = true;
    trieNode = trieNode[letter];
    if ('*' in trieNode)
        finalWords[trieNode['*']] = true;
    var neighbors = getNeighbors(i, j, board);
    for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
        var neighbor = neighbors_1[_i];
        explore(neighbor[0], neighbor[1], board, trieNode, visited, finalWords);
    }
    visited[i][j] = false;
}
function getNeighbors(i, j, board) {
    var neighbors = [];
    if (i > 0 && j > 0) {
        neighbors.push([i - 1, j - 1]);
    }
    if (i > 0 && j < board[0].length - 1) {
        neighbors.push([i - 1, j + 1]);
    }
    if (i < board.length - 1 && j < board[0].length - 1) {
        neighbors.push([i + 1, j + 1]);
    }
    if (i < board.length - 1 && j > 0) {
        neighbors.push([i + 1, j - 1]);
    }
    if (i > 0) {
        neighbors.push([i - 1, j]);
    }
    if (i < board.length - 1) {
        neighbors.push([i + 1, j]);
    }
    if (j > 0) {
        neighbors.push([i, j - 1]);
    }
    if (j < board[0].length - 1) {
        neighbors.push([i, j + 1]);
    }
    return neighbors;
}
/*

{
  "board": [
    ["t", "h", "i", "s", "i", "s", "a"],
    ["s", "i", "m", "p", "l", "e", "x"],
    ["b", "x", "x", "x", "x", "e", "b"],
    ["x", "o", "g", "g", "l", "x", "o"],
    ["x", "x", "x", "D", "T", "r", "a"],
    ["R", "E", "P", "E", "A", "d", "x"],
    ["x", "x", "x", "x", "x", "x", "x"],
    ["N", "O", "T", "R", "E", "-", "P"],
    ["x", "x", "D", "E", "T", "A", "E"]
  ],
  "words": ["this", "is", "not", "a", "simple", "boggle", "board", "test", "REPEATED", "NOTRE-PEATED"]
}
O/P:
["NOTRE-PEATED", "a", "board", "boggle", "is", "simple", "this"]
*/ 
