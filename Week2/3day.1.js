const temp=[32,35,28,40,38,30,42];
//filter()
let a=temp.filter(temp=>temp>35);
console.log("temperature above 35:",a);
let b=temp.map(temp=>(temp*9/5)+32);
console.log("temperature in foriegnheat:",b);
let c=temp.reduce((sum,temp)=>sum+temp,0)/temp.lengths;
console.log("average temperature",c);
let d=temp.find(temp=>temp>40);
console.log("temp above 40",d);
let e=temp.findIndex(temp=>temp===28);
console.log("index of 28:",e);