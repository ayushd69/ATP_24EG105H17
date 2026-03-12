const cart=[
    {id:101,name:"laptop",price:60000,quantity:1,inStock:true},
    {id:102,name:"Mouse",price:800,quantity:2,inStock:true},
    {id:103,name:"keyboard",price:1500,quantity:1,inStock:true},
    {id:104,name:"Monitor",price:12000,quantity:1,inStock:true},
];
let res1=cart.filter(item=>item.inStock);
console.log("available item",res1);
let res2=cart.map(item=>({name:item.name,totalprice:item.price*item.quantity}));
console.log("after mapping",res2);
let res3=cart.reduce((total,item)=>
total+(item.price*item.quantity),0);
console.log("grandtotal:",res3);
let res4=cart.find(item=>item.name==="Mouse");
console.log("mouse details:",res4);
let res5=cart.findIndex(item=>item.name==="keyboard");
console.log("index of keyboard:",res5);





