const getTotal = (arr = []) => {
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
}
const getAvarage = (arr=[], sum) => sum / arr.length

export default {getAvarage, getTotal}