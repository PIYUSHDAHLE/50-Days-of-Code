let para = "Hello this is the string";

//forward search
console.log(para.indexOf("IS")); //-1
console.log(para.indexOf("is")); //8
console.log(para.indexOf("is", 9)); //11
console.log(para.indexOf("the")); //14
console.log("-----------");
//backward search
console.log(para.lastIndexOf("IS")); //-1
console.log(para.lastIndexOf("is")); //11
console.log(para.lastIndexOf("is", 9)); //8
console.log(para.lastIndexOf("the")); //14
