export function collidingAsteroids(asteroids: number[]) {
    const stack: number[] = []
    for(const asteroid of asteroids){
      if(asteroid > 0){
        stack.push(asteroid)
        continue
      }
      while(true){
        if(stack.length === 0 || stack[stack.length -1] < 0){
          stack.push(asteroid)
          break
        }else if(stack[stack.length - 1] > Math.abs(asteroid)){
          break;
        }else if(stack[stack.length -1] === Math.abs(asteroid)){
          stack.pop()
          break
        }
        stack.pop()
      }
    }
    return stack;
  }
  //IP "asteroids": [-3, 7, -8, 6, 7, -5, -7]
  //op [-3, -8, 6]