document.write("<br>")
document.write("<br>")
let arr = ["bhopal","indore","ujjain","gwalior"]

//For loop
for(let a=0;a<arr.length;a++)
{
    document.write(arr[a]+"<br>")
}

document.write("<br>")

//For in loop
for(let x in arr)
{
    document.write(arr[x]+"<br>")
}
document.write("<br>")

//For of loop
for(let x of arr)
{
    document.write(x+"<br>")
}

document.write("<br>")

var i=0;
while(i < arr.length){
    document.write(arr[i]+"<br>")
    i++;
}


