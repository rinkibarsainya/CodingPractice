export function arrayOfProducts(array: number[]) {
    // Write your code here.
    const products: number[] = new Array(array.length).fill(1)
    let leftProduct = 1
    for( let i =0; i<array.length; i++){
      products[i] = leftProduct
      leftProduct *= array[i]
      //console.log('1. products[i]' ,i, products[i] )
      //console.log('leftProd', leftProduct)
    }
    console.log('products',products)
    let rightProduct =1
    for(let i= array.length-1; i>=0; i--){
      products[i] *= rightProduct
      rightProduct *= array[i]
      console.log('2. products[i]' ,i, products[i] )
      console.log('rightProd', rightProduct)
    }
    console.log('Product', products)
    return products;
  }
  
  console.log('arrayOfProducts', arrayOfProducts([5,1,4,2]))