"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayOfProducts = void 0;
function arrayOfProducts(array) {
    // Write your code here.
    var products = new Array(array.length).fill(1);
    var leftProduct = 1;
    for (var i = 0; i < array.length; i++) {
        products[i] = leftProduct;
        leftProduct *= array[i];
        //console.log('1. products[i]' ,i, products[i] )
        //console.log('leftProd', leftProduct)
    }
    console.log('products', products);
    var rightProduct = 1;
    for (var i = array.length - 1; i >= 0; i--) {
        products[i] *= rightProduct;
        rightProduct *= array[i];
        console.log('2. products[i]', i, products[i]);
        console.log('rightProd', rightProduct);
    }
    console.log('Product', products);
    return products;
}
exports.arrayOfProducts = arrayOfProducts;
console.log('arrayOfProducts', arrayOfProducts([5, 1, 4, 2]));
