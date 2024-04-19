export function nonConstructibleChange(coins: number[]) {
    // Write your code here.
    coins.sort((a,b) => a-b)
    
    let currentChange = 0
  
    for(const coin of coins){
      if(coin >  currentChange + 1) return currentChange +1
        currentChange += coin
    }
    return currentChange + 1;
  }

  //using hasp map

  function nonConstructibleChange1(coins: number[]): number {
    const coinCounts: { [key: number]: number } = {};
    let totalSum = 0;

    // Count the occurrences of each coin
    for (const coin of coins) {
        if (coinCounts[coin]) {
            coinCounts[coin]++;
        } else {
            coinCounts[coin] = 1;
        }
        totalSum += coin;
    }

    // Attempt to construct each possible sum from 1 to totalSum
    for (let sum = 1; sum <= totalSum; sum++) {
        if (!canMakeSum(coinCounts, sum)) {
            return sum;
        }
    }

    // If all sums up to totalSum can be made, the next sum cannot be made
    return totalSum + 1;
}

function canMakeSum(coinCounts: { [key: number]: number }, target: number): boolean {
    for (const coin in coinCounts) {
        const coinValue = parseInt(coin);
        if (coinValue <= target && coinCounts[coinValue] > 0) {
            coinCounts[coinValue]--;
            if (target === coinValue || canMakeSum(coinCounts, target - coinValue)) {
                return true;
            }
            coinCounts[coinValue]++; // Backtrack
        }
    }
    return false;
}

// Example usage
const coins1 = [1, 2, 2, 4];
console.log(nonConstructibleChange(coins1));  // Output should be 10

const coins2 = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(coins2));  // Output should be 20
