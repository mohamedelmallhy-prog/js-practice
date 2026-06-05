// دالة بتستخدم لنسخ أو دمج خصائص (Properties) من Object إلى Object آخر.

let a1={
    name:1
}
let a2={
    name:2
}
let a3={
    name:3
}
let a4= Object.assign(a1,a2,a3);
console.log(a4);