// given an array [17, 5,-3, 27] value should be key= value , value = index , 
// HashMap { 
//     17:0, (key: val)
//     5:1,
//     -3:2,
//     27: 3
// }
var arr = [17, 5, -3, 27];
function HashMapTest(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        var index = i;
        obj[val] = index;
    }
    console.log(obj);
    return [-1, -1];
}
console.log(HashMapTest([17, 5, -3, 27]));
