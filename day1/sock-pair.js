function sockMerchant(n, ar) {
    
    const colorCounts={}
    let pairs = 0
    for(let i=0; i<n; i++){
        const color = ar[i]
        if(colorCounts[color]){
            colorCounts[color]++;
        }else{
            colorCounts[color]=1
        }
    }
    for(let color in colorCounts){
        pairs += Math.floor(colorCounts[color]/2);
    }
    return pairs;

}


n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
const result = sockMerchant(n, ar);
console.log(result + '\n');

//Sample INPUT
//n = 9
//ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

//Expected Output
//3