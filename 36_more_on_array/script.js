// Q.1.Calculate second-max element in an array 

// -- array ki suruvat ke do element me se jo element bada hoga usko ham manenge max aur jo chota hoga usko ham manenge secondMax
// -- max = Math.max(arr[0], arr[1]); inme se jo bada aayega vo max 
// -- secondMax = Math.min(arr[0], arr[1]); inme se jo chota aayega vo secondMax
// -- ab ham array ke 2nd element se loop chalayenge aur check karenge ki vo max se bada hai ya nahi agar bada hai to usko max me store karenge aur max ko secondMax me store karenge
// -- agar vo max se chota hai to usko secondMax me store karenge
/* 
let arr = [28,6,74,48,84,79];
let max = Math.max(arr[0], arr[1]); 
let secondMax = Math.min(arr[0], arr[1]);

for(let i = 2; i < arr.length; i++){
    if(arr[i] > max){
        secondMax = max;
        max = arr[i]; 
    }else if(arr[i] > secondMax){
        secondMax = arr[i];
    }
}
console.log("second max : " + secondMax);  


// Q.2.Calculate second-min element in an array:
let min = Math.min(arr[0], arr[1]);
let secondMin = Math.max(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
    if (arr[i] < min) {
        secondMin = min;
        min = arr[i];
    } else if (arr[i] < secondMin) {
        secondMin = arr[i];
    }
}
console.log("Second minimum value: " + secondMin);


// Q.Finding the Minimum Value in an Array:
let arr = [28, 6, 74, 48, 84, 79];
let min = arr[0]; 

for (let i = 1; i < arr.length; i++) { 
    if (arr[i] < min) { 
        min = arr[i]; 
    } 
} 

console.log("Minimum value: " + min);




























*/
