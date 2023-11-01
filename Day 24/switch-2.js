var area = "triangle";
var PI = 3.14;
var l = 10,
  b = 15,
  r = 5;

switch (area) {
  case "circle":
    console.log("Area of circle : " + PI * r ** 2);
    break;
  case "square":
    console.log("Area of square : " + l * l);
    break;
  case "rectangle":
    console.log("Area of rectangle : " + l * b);
    break;
  case "triangle":
    console.log("Area of triangle : " + (l * b) / 2);
    break;
  default:
    console.log("invalid");
    break;
}
