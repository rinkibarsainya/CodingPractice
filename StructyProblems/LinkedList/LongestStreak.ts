import { DefaultNode, s1} from "./DefaultNode";

const LongestStreak =(head:DefaultNode) => {
    let max_streak = 0;
    let current_streak = 0;
    let prevValue = null;
    let current = head;

    while(current !== null)
    {
        if(prevValue === current.val){
          current_streak += 1;
        }else{
            current_streak =1;
        }

        if(current_streak > max_streak){
            max_streak = current_streak;
        }
        prevValue = current.val;
        current =current.next;
    }
    return max_streak;
}

console.log('LongestStreak', LongestStreak(s1));
