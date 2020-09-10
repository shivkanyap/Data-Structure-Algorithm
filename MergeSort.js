unsortedArray=[340,1,3,76,23,4,12,122,7642,646]

function mergeSort(unsortedArray){
    if(unsortedArray.length<=1){
        return unsortedArray
    }

    //divide the array in half,to find the middle element
    const middle=Math.floor(unsortedArray.length/2)

    const left=unsortedArray.slice(0,middle)
    const right=unsortedArray.slice(middle)

    return merge(mergeSort(left),mergeSort(right))

}
function merge(left,right){
    let resultArray=[],leftIndex=0,rightIndex=0
    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            resultArray.push(left[leftIndex])
            leftIndex++
        }
        else{
            resultArray.push(right[rightIndex])
            rightIndex++
        }
    }
    return resultArray 
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex))
}
console.log(mergeSort(unsortedArray))