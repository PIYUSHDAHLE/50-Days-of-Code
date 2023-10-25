const arr = [2, 4, 5, 9, 3, 1, 8];
const num = parseInt(prompt("Enter the number : "));
switch (num) {
  case arr[0]:
    document.write("Num Is Found");
    break;
  case arr[1]:
    document.write("Num Is Found");
    break;
  case arr[2]:
    document.write("Num Is Found");
    break;
  case arr[3]:
    document.write("Num Is Found");
    break;
  case arr[4]:
    document.write("Num Is Found");
    break;
  case arr[5]:
    document.write("Num Is Found");
    break;
  case arr[6]:
    document.write("Num Is Found");
    break;
  default:
    document.write("Num Is Not Found");
}
document.write("<br>Your Entered Number : " + num);
document.write("<br>Array = [" + arr + "]");
