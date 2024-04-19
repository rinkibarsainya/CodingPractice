//Jump1
/*You are given an integer array nums. You are initially positioned at the array's first index, and 
each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.*/

function canJump(nums: number[]): boolean {
    let maxReach = 0; // Initialize the maximum reach from the start

    for (let i = 0; i < nums.length; i++) {
        //If the current index is beyond the maximum reach, return false
        if (i > maxReach) return false;
           
        // Get the next index to jum and Update the max reach
        let nextIdx = i + nums[i]
        maxReach = Math.max(maxReach, nextIdx); 
        
        // If max reach is greater than or equal to the last index, return true
        if (maxReach >= nums.length - 1) return true;
    }

    return maxReach >= nums.length - 1; // Final check if last index is reachable
}

// Example usage
const nums1 = [2, 3, 1, 1, 4];
const nums2 = [3, 2, 1, 0, 4];

console.log(canJump(nums1)); // Output: true
console.log(canJump(nums2)); // Output: false



//Jump 2
/*You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words,
if you are at nums[i], you can jump to any nums[i + j] where:
0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
*/

function jump(nums: number[]): number {
    
    let minReach = 0
    for(let i =0; i < nums.length; i++){
        if(i > minReach){
            return
        }
        minReach = Math.max(minReach, i+ nums[i])
        if(minReach <= nums.length -1) return minReach

    }
    return minReach
};