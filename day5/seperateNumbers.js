function seperateNumbers(s){
    const n = s.length;
    for(let i=1;i<= Math.floor(n/2);i++){
        let first = s.substring(0,i);
        if(first.startsWith('0')) continue;
        let num = BigInt(first) // to make the seq
        let temp = first //start point
        while(temp.length<n){
            num+=1n
            temp+=num.toString()
        }

        if(temp == s){
            console.log(`YES ${first}`)
            return
        }
    }
    console.log("NO")
}
seperateNumbers('012345')