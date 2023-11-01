var area = "circle";
var PI = 3.14;
var l = 5,
  b = 6,
  r = 7;
if (area == "circle") {
  console.log("Area of circle : " + PI * r ** 2);
} else if (area == "square") {
  console.log("Area of square : " + l * l);
} else if (area == "rectangle") {
  console.log("Area of rectangle : " + l * b);
} else if (area == "triangle") {
  console.log("Area of triangle : " + (l * b) / 2);
} else {
  console.log("invalid");
}
