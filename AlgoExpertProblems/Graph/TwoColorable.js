"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoColorable = void 0;
function twoColorable(edges) {
    //const colors : Array<null | boolean> = edges.map(_ => null) 
    var colors = new Array(edges.length).fill(null);
    colors[0] = true;
    var stack = [0];
    while (stack.length > 0) {
        var node = stack.pop();
        for (var _i = 0, _a = edges[node]; _i < _a.length; _i++) {
            var connection = _a[_i];
            if (colors[connection] === null) {
                colors[connection] = !colors[node];
                stack.push(connection);
            }
            else if (colors[connection] === colors[node]) {
                return false;
            }
        }
    }
    return true;
}
exports.twoColorable = twoColorable;
/*
{
  "edges": [
    [1, 2],
    [0, 2],
    [0, 1]
  ]
}
O/P : false
*/ 
