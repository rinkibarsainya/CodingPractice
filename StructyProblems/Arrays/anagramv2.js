function countMap(s){
    const count_dict = {}
    for(let char of s){
        //console.log('char', char)
        if(char in count_dict)
          count_dict[char] += 1;
        else 
          count_dict[char] = 1
    }
    //console.log('count_dict', count_dict)
    return count_dict;

}

function isAnagramv2(s1, s2){
    console.log('s1', countMap(s1));
    console.log('s2',countMap(s2));
    return countMap(s1) == countMap(s2) ;
}

console.log('isAnagram', isAnagramv2('restful', 'fluster'))