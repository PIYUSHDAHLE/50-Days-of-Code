let price = parseInt(prompt("Enter the price of product :"));
let pay = parseInt(prompt("Enter the customer payment price :"));

if (price == pay) {
  alert("payment successful");
} else {
  alert(`payment not completed due amout is ${price-pay}`);
}

