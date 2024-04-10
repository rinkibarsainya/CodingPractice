function isAnagram(s1, s2) {
    if (s1.length != s2.length)
        return false;
    else {
        var s1CharMap = {};
        var s2CharMap = {};
        //map object containing character as property and count of that character as value
        for (var i = 0; i < s1.length; i++) {
            s1CharMap[s1[i]] = s1CharMap[s1[i]] + 1 || 1;
            s2CharMap[s2[i]] = s2CharMap[s2[i]] + 1 || 1;
        }
        for (var _i = 0, s2_1 = s2; _i < s2_1.length; _i++) {
            var char = s2_1[_i];
            console.log('s1 and s2 charmap ===>', char, s2CharMap[char], s1CharMap[char]);
            if (s2CharMap[char] !== s1CharMap[char])
                return false;
        }
        return true;
    }
}
console.log('is Anagram ', isAnagram('restful', 'fluster'));
