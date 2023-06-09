document.title = "DOM";

console.log(document.doctype);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.forms);

var header = document.getElementById("main-header");
var headerTitle = document.getElementById("header-title");
headerTitle.textContent = "HELLO";
headerTitle.innerText = "HELLO world";
headerTitle.innerHTML = "<h1>Hello There! </h1>";
header.style.borderBottom = "5px solid #000";

var Title = document.querySelector(".title");
console.log(Title.innerText);
Title.style.fontWeight = "bold";
Title.style.color = "green";

// Items =============

var Items = document.getElementsByClassName("list-group-item");
// console.log(Items[2]);
Items[2].style.backgroundColor = "green";
Items[2].style.color = "white";

for (let i = 0; i < Items.length; i++) Items[i].style.fontWeight = "bold";
