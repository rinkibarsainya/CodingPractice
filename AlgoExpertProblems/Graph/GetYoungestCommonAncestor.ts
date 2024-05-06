// This is an input class. Do not edit.
class AncestralTree {
    name: string;
    ancestor: AncestralTree | null;
  
    constructor(name: string) {
      this.name = name;
      this.ancestor = null;
    }
  }
  
  export function getYoungestCommonAncestor(
    topAncestor: AncestralTree,
    descendantOne: AncestralTree,
    descendantTwo: AncestralTree,
  ) {
    const depthOne = getDescendantDepth(topAncestor, descendantOne)
    const depthTwo = getDescendantDepth(topAncestor, descendantTwo)
    if(depthOne > depthTwo)
      return backTrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo)
    else
      return backTrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne)
   
  }
  
  function getDescendantDepth(topAncestor : AncestralTree, descendant : AncestralTree){
    let depth = 0
    while (descendant !== topAncestor){
      depth++
      descendant = descendant.ancestor!
    }
    return depth
  }
  
  function backTrackAncestralTree(lowerDescendant : AncestralTree, higherDescendant: AncestralTree, diff: number){
    while (diff > 0){
      lowerDescendant = lowerDescendant.ancestor!
      diff--
    }
    while( lowerDescendant !== higherDescendant){
      lowerDescendant = lowerDescendant.ancestor!
      higherDescendant = higherDescendant.ancestor!
    }
    return lowerDescendant
  }

  /*
  {
  "topAncestor": "A",
  "descendantOne": "E",
  "descendantTwo": "I",
  "ancestralTree": {
    "nodes": [
      {"ancestor": null, "id": "A", "name": "A"},
      {"ancestor": "A", "id": "B", "name": "B"},
      {"ancestor": "A", "id": "C", "name": "C"},
      {"ancestor": "B", "id": "D", "name": "D"},
      {"ancestor": "B", "id": "E", "name": "E"},
      {"ancestor": "C", "id": "F", "name": "F"},
      {"ancestor": "C", "id": "G", "name": "G"},
      {"ancestor": "D", "id": "H", "name": "H"},
      {"ancestor": "D", "id": "I", "name": "I"}
    ]
  }
}

o/p: node B
*/