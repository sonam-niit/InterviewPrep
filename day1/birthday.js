function birthday(s, d, m) {
    let count=0;
    let sum =0;
    //loop for array 
    for (let i=0; i<m;i++){
        sum +=s[i];
    }
    if(sum === d){
        count++;
    }
    //Use The Sliding Window Technique
    for(let i =m ; i<s.length;i++){
        sum -= s[i-m]; //Subtracting one which is not a part of window
        sum += s[i]
        if(sum===d){
            count++
        }
    }
    return count;
}


s= [1,2,1,3,2] //the numbers on each of the squares of chocolate
d= 3 //birthday
m= 2 // month
const result = birthday(s, d, m);
console.log(result + '\n');
/*
reusult: 2
*/
