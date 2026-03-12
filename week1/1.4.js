let mar=[90,78,85,98]
let small=mar[0];
for(let i=0;i<mar.length;i++)
{
    if(mar[i]<small)
    {
        small=mar[i];
    }
}
console.log(`small is ${small}`);