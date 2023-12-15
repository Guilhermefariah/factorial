
function factorial(num){
    let fact = 1
    for(let count = num; count > 1; count--){
        fact *= count
    }
    return fact
}
console.log(factorial(5))

//5! = 5 x 4 x 3 x 2 x 1= 120