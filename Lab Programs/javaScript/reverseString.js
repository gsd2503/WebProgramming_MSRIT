// Reverse a string

let st = "hello"
let st_rev = ""
for (let i = 0; i < st.length; i++) {
    st_rev = st[i] + st_rev    
}
console.log(st_rev);