// Recursion
function factorial(num){
    if (num == 1) {
        return 1
    }else{
        return num * factorial(num-1)
    }
}

console.log(factorial(5))
/*
 5! = 5 x 4 x 3 x 2 x 1

 5! = 5 x 4 

 num! = num(num - 1) 
 
  1! = 1 */