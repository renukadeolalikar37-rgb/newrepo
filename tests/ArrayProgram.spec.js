import {test,expect} from '@playwright/test'
test('Array programs',async ({page})=>{
let a=[2,5,10,11,2];
let min=a[0];
let max =a[0];
for(let e of a)
{
  if(e<min)
  {min=e}
  if(e>max)
  {max=e}
}
//console.log('Min value', min);
//console.log('Max value', max);

//const mp=a.map(s => s+1);
//const fe =a.filter(f=> f>10);
//const fnd =a.find(s => s>=10);
//console.log(a);
//console.log(mp);
//console.log(fe);
//console.log(fnd);

let duplicate=[];
for(let i=0; i<a.length; i++)
{
    for(let j=i+1; j<a.length; j++)
    {

         if(a[i]===a[j] && !duplicate.includes(a[i]))
         {
            duplicate.push(a[i]);
         }
    }
}
console.log(duplicate);

let o={};
for(let i of a)
{
    o[i]=(o[i] || 0) +1;
}
console.log(o);


let unique=[...new Set(a)];
console.log(unique);


}
)