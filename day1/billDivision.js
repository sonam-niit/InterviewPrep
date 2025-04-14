function bonAppetit(bill, k, b) {
   const totalCost = bill.reduce((sum,item,index)=>{
    return index!==k ? sum+item : sum
   })

   const annaShare = totalCost /2;
   if(annaShare === b)
    console.log('Bon Appetit')
   else
    console.log(b - annaShare)
}

const bill= [3,10,2,9]
const k =1
// b = 12
b=7
bonAppetit(bill, k, b);