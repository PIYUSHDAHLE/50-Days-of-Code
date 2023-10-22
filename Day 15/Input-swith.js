let n1=parseInt(prompt("Enter the 1st number :"));
let n2=parseInt(prompt("Enter the 2nd number :"));
let operation=prompt("Enter any one operation (+, -, *, /) :");
console.log(typeof(n1));
console.log(typeof(n2));

switch (operation)
{
    case '+':
        document.write(`Addition of ${n1} and ${n2} is ${n1+n2}`);
        break;
    case '-':
        document.write(`Subtraction of ${n1} and ${n2} is ${n1-n2}`);
        break;
    case '*':
        document.write(`Multiplcation of ${n1} and ${n2} is ${n1*n2}`);
        break;
    case '/':
        document.write(`Division of ${n1} and ${n2} is ${n1/n2}`);
        break;
        default:
            document.write("This operation are not allow.");
}