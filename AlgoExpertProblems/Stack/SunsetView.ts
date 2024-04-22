export enum Direction {
    East = 'EAST',
    West = 'WEST',
  }
  
  export function sunsetViews(buildings: number[], direction: Direction) {
    const buildingWithSunsetViews : number[] = []
    let startIdx = direction === Direction.East ? 0 : buildings.length - 1
    const step = direction === Direction.East ?  1 : -1
    
    while(startIdx >=0 && startIdx < buildings.length){
       const buildingHeight = buildings[startIdx]
       
      while(buildingWithSunsetViews.length > 0 && buildings[buildingWithSunsetViews[buildingWithSunsetViews.length - 1]] <= buildingHeight){
        buildingWithSunsetViews.pop()
      }
       buildingWithSunsetViews.push(startIdx)
       startIdx += step  
    }
  
    if(direction === Direction.West) buildingWithSunsetViews.reverse()
    
    return buildingWithSunsetViews;
  }

 /*{
  "buildings": [3, 5, 4, 4, 3, 1, 3, 2],
  "direction": "EAST"
} */