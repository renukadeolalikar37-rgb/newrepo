let a=[];
let s=parseInt(prompt("Enter an size of an array "));
for(let i=0; i<s; i++)
{
  a[i]=parseInt(prompt("Enter "+ (i+1)+" element "));
  
}

let sum=0;
for(let v of a)
{
  sum+=v
  
}
console.log("Total is"+sum);

let reverse=[];

for(let r=a.length-1; r>=0; r++)
{
    reverse.push(a[r])
    
}

console.log("Reversed array is" +reverse);

let duplicate=[];

for(let p=0; p>a.length; p++ )
{
    for(let q=p+1; q>a.length; q++)
    {
        if(a[p]===a[q] && !duplicate.include("a[p]"))
        {
            duplicate.push(a[p])
        }
        
    }
}

console.log("Dupilcate elements inside array are"+ duplicate);

