// const ans = (x,y) => x+y;

const nums =[1,2,3,4];

for (let x in nums)
{
   console.log(x);
}

///////////////////////////////////
const du =nums.map(item =>{
    return item*2;
    })

///////////////////////////////
const du2 =nums.filter(item =>{
    return item>2;
    })
    
//////////////////////////////////
const du3 =nums.reduce(function(preious,current){
    return preious+current;
    })