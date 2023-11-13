// 👉 Document Object model in JavaScript

// 1️⃣ Window is the main container or we can say the
// global Object and any operations related to entire
// browser window can be a part of window object.

// For ex 👉 the history or to find the url etc.

// whereas the DOM is the child of Window Object

document.body;
document.head;
document.title;
document.documentElement;
document.children;
document.firstElementChild;
document.lastElementChild;
document.body.hasChildNodes; //true or false

document.body.firstElementChild.firstElementChild.style.color = "blue";
document.body.firstElementChild.lastElementChild.style.color = "red";

document.body.querySelector(".child-two").style.color = "green";

document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("tag");
