// Print number from 1 to 20 wiht following rules1
// 1. If number is divisible by 3 print "Fizz"
// 2. If number is divisible by 5 print "Buzz"
// 3. If number is divisible by both 3 and 5 print "FizzBuzz"
// Otherwise print the normal number.


let a = []

for (let i = 1; i <= 20; i++) {
    if (i%3 == 0 && i%5 == 0){
        a[i-1] = "FizzBuzz"
    } else if (i%3 == 0) {
        a[i-1] = "Fizz"
    } else if (i%5 == 0) {
        a[i-1] = "Buzz"
    } else{
        a[i-1] = i
    }
}

console.log(a);
