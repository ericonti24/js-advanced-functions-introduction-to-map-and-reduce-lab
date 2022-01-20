// Your code here
function mapToNegativize(array) {
   return array.map(x => x * -1);
};

function mapToNoChange(array) {
    return array;
}

function mapToDouble(array) {
    return array.map(x => x * 2)
}

function mapToSquare(array) {
    return array.map(x => x ** 2)
}

function reduceToTotal(array, startPoint = 0) {
    let total = startPoint
    for (let i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) 
        return false
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i])
        return true
    }
    return false
}