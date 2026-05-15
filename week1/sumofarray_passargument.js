let b=function(a)
{
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
        sum=sum+a[i];
    }
    return sum;
}
let res=b([22,21,17,19]);
console.log(res);