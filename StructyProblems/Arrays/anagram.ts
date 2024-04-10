function isAnagram(s1:string, s2:string){
    if(s1.length != s2.length)
        return false;
    else{
        let s1CharMap ={};
        let s2CharMap ={};
        //map object containing character as property and count of that character as value
        for(let i =0; i<s1.length; i++)
        {
            s1CharMap[s1[i]] = s1CharMap[s1[i]] + 1 || 1;
            s2CharMap[s2[i]] = s2CharMap[s2[i]] + 1 || 1;

        }
        for(let char of s2 ){
            console.log('s1 and s2 charmap ===>',char, s2CharMap[char], s1CharMap[char]);
            if(s2CharMap[char] !== s1CharMap[char])
                return false;
        }
        return true;

    }
}

console.log('is Anagram ', isAnagram('restful', 'fluster'));