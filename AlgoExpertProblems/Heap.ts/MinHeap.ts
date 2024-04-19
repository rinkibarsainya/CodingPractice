// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
export class MinHeap {
    heap: number[];
  
    constructor(array: number[]) {
      this.heap = this.buildHeap(array);
    }
  
    buildHeap(array: number[]) {
      //get firstParent Idx array.length/2 -1
      const firstParentIdx = Math.floor((array.length - 2) / 2) 
      for(let i = firstParentIdx; i>=0; i--){
        this.siftDown(i, array.length-1, array)
      }
      return array;
    }
  
    siftDown(currentIdx: number, endIdx:number, heap: number[]) {
      let leftChildIdx = currentIdx * 2 + 1
      while(leftChildIdx <= endIdx){
        let rightChildIdx = currentIdx * 2 + 2 < endIdx ? currentIdx * 2 + 2 : -1
        let idxToSwap;
        if(rightChildIdx != -1 && heap[rightChildIdx] < heap[leftChildIdx]){
           idxToSwap = rightChildIdx
        }else{
          idxToSwap = leftChildIdx
        }
        if(heap[idxToSwap] < heap[currentIdx]){
          this.swap(idxToSwap, currentIdx , heap)
          currentIdx = idxToSwap
          leftChildIdx = currentIdx * 2 + 1
        }else {
          return
        }
      }
    }
  
    siftUp(currentIdx: number, heap: number[]) {
      let parentIdx = Math.floor((currentIdx -1)/2)
      while(currentIdx > 0 && heap[currentIdx] < heap[parentIdx]){
        this.swap(currentIdx, parentIdx, heap)
        currentIdx = parentIdx
        parentIdx = Math.floor((currentIdx - 1)/2)
      }
    }
  
   
  
    remove() {
      this.swap(0 , this.heap.length -1, this.heap)
      const valueToRemove = this.heap.pop()
      this.siftDown(0, this.heap.length -1 , this.heap)
      return valueToRemove;
    }
  
    insert(value: number) {
      this.heap.push(value)
      this.siftUp(this.heap.length -1, this.heap)   
    }
    
    peek() {
      // Write your code here.
      return this.heap[0];
    }
    
    swap(i: number, j : number, array:number[]){
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
  