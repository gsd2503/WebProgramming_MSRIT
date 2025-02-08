// Count vowels in a string

 // Approach 1
 let st = "javascript"
 let count = 0;
 for (let i = 0; i < st.length; i++) {
     if (st[i] == 'a' || st[i] == 'e' || st[i] == 'i' || st[i] == 'o' || st[i] == 'u'){
         count+=1;
     }
 }
 console.log(count);
 
 // Approach 2
 let v = ['a','e','i','o','u']
 let c = 0
 for (const i of st) {
     if (v.includes(i)){
         c++;
     }
 }

 console.log(c);