export function paginationTool(array, param) {
    let customArray = [];
    let outArray = [];
    let limit = param;
    for (let i = 0; i < array.length ; i++) {
        customArray.push(array[i])
        if (i + 1 ===  limit) {
            outArray.push(customArray)
            customArray = []
            limit = limit + param
        }
    }
    if (customArray.length !== 0) {
        outArray.push(customArray)
    }
    return outArray
}

export function toMinutes (ms) {
    const minutes = (ms/1000)/60
    const int = Math.floor(minutes);
    const dec = Math.floor((minutes - Math.floor(minutes) ) * 10)/ 10
    return int + dec; 
  }
