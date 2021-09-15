export default function mergeSortInterface(array) {
    const change = []
    const comparing = []

    function merge(left, right) {
        const result = []
        let leftIdx = 0
        let rightIdx = 0
        let min = left[0].idx;

        while (leftIdx < left.length && rightIdx < right.length) {

            comparing.push([left[leftIdx].idx, right[rightIdx].idx])

            if (left[leftIdx].value < right[rightIdx].value) {
                result.push({ value: left[leftIdx].value, idx: min })
                change.push([left[leftIdx].value, min])
                min++
                leftIdx++
            } else {
                result.push({ value: right[rightIdx].value, idx: min })
                change.push([right[rightIdx].value, min])
                min++
                rightIdx++
            }
        }

        for (let j = 0; j < left.length - leftIdx; j++) {
            change.push([left[leftIdx + j].value, min])
            min++
        }
        return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))
    }


    function mergeSort(array) {
        if (array.length === 1) {
            return array
        }
        const middle = Math.floor(array.length / 2)
        const left = array.slice(0, middle)
        const right = array.slice(middle)

        return merge(
            mergeSort(left),
            mergeSort(right)
        )
    }



    mergeSort(array)
    return ({ changeLogArray: change, comparingLogArray: comparing })
}




/*
console.log(mergeSort([{ value: 5, idx: 0 }, { value: 4, idx: 1 }, { value: 3, idx: 2 }, { value: 7, idx: 3 }, { value: 1, idx: 4 }, { value: 9, idx: 5 }, { value: 8, idx: 6 }]))

console.log('change :', change) */

