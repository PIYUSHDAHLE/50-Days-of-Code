let jsonObj = {
    name : "piyush",
    class : "med",
    dev : "web"
}

console.log(jsonObj);
let jsonStr = JSON.stringify(jsonObj); //convert obj into str
console.log(jsonStr);

jsonStr = jsonStr.replace('piyush','dahle');
console.log(jsonStr);

newJsonObj= JSON.parse(jsonStr); //convert str INTO boj
console.log(newJsonObj);

