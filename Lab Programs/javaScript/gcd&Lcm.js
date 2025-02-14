function gcd(a,b) {
    let x = 0;
    for (let i = 1; i <= (a+b); i++) {
        if(a%i == 0 && b%i ==0){
            x = i;
        }
    }
    return x;

}

function lcm(a,b){
    let lcm = (a*b) / gcd(a,b)
    return lcm
}

console.log(`LCM: ${lcm(10,15)}`);
console.log(`GCD: ${gcd(10,15)}`);
