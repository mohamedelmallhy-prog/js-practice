// بالـ id
document.getElementById("id");

// بالـ class
document.getElementsByClassName("class");

// بالـ tag
document.getElementsByTagName("p");

// باستخدام CSS Selector
document.querySelector(".class");
document.querySelector("#id");

// كل العناصر المطابقة
document.querySelectorAll(".class");

// مثال

let p = document.querySelector(".text");
p.style.color = "red";