// primitive datatype
let str="hello my name is piyush";
let bool=true;
let n=10;
let value=null;
let x;
let bigNum = BigInt("123422222222222222222222222222222222222");
const sym = Symbol("foo");

document.write(typeof(str)+"<br>");
document.write(typeof(bool)+"<br>");
document.write(typeof(n)+"<br>");
document.write(typeof(value)+"<br>");
document.write(typeof(bigNum)+"<br>");
document.write(typeof(sym)+"<br><br>");


//non- primitive datatype : array
const arr=["Piyush Dahle",23,'balaghat','piyushdahle@gmail.com',null];
document.write("name : "+arr[0]+"<br>");
document.write("age : "+arr[1]+"<br>");
document.write("city : "+arr[2]+"<br>");
document.write("email : "+arr[3]+"<br>");
document.write("girl friend : "+arr[4]+"<br>");

document.write(typeof(arr)+"<br><br>");
document.write(typeof(arr[0])+"<br><br>");

//non- primitive datatype : object
let student ={
    naam :"piyush dahle",
    roll : "452541",
    city :"bhopal",
    college :"buit college bhopal",
};

document.write(student["college"]+"<br>");
document.write(typeof(student)+"<br>");
document.write(typeof(student["college"])+"<br>");
