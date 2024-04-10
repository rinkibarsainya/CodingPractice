//{"dishes" : [-3,-5,1,7], "target": 8}

export function sweetAndSavory(dishes: number[], target: number) {
    // Write your code here.
    const sweetDishes = dishes.filter(dish => dish < 0).sort((a,b) => b - a ) // [-5,-3]
    const savoryDishes = dishes.filter(dish => dish > 0).sort((a,b) => a - b) // [1, 7]
  
    let sweetIdx = 0
    let savoryIdx = 0
  
    let bestPair = [0, 0]
    let bestDiff = Infinity
  
    while (sweetIdx < sweetDishes.length && savoryIdx < savoryDishes.length) {
      const currentSum = sweetDishes[sweetIdx] + savoryDishes[savoryIdx] 
      
      if(currentSum <= target){
        const currentDiff = target - currentSum
        if(currentDiff < bestDiff){
          bestDiff = currentDiff
          bestPair = [sweetDishes[sweetIdx], savoryDishes[savoryIdx]]
        }
        
        savoryIdx++
        console.log('bestpair savoryIdx', bestPair, savoryIdx)
      }
      else{
        sweetIdx++
        console.log('sweetIndex', sweetIdx)
      }
    }
    return bestPair;
  }
  
  console.log('Sweet and Savory =>',sweetAndSavory([-3, -5, 1, 7], 8) )