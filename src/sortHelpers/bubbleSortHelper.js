function bubleSortHelper(array) {

    const animation = []


    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            animation.push([j, j + 1, 0])
            animation.push([j, j + 1, 0])
            if (array[j].value >= array[j + 1].value) {
                animation.push([j, j + 1, 1])
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return (animation)
}

export default bubleSortHelper


