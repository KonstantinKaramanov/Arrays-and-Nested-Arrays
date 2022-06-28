function solve(arr) {
    let obj = {};
 
    for (let index = 0; index < array.length; index += 2) {
        let product = array[index];
        let colories = arr[index + 1];
        obj[product] = Number(colories);
 
    }
    console.log(obj);
}