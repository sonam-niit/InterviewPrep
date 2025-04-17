function squares(a, b) {
    const squ=[]
    for(let i = a; i<=b;i++){
        res=Math.sqrt(i)
        if(!squ.includes(Math.ceil(res)))
            squ.push(Math.ceil(res))
    }
    console.log(squ)
    console.log(squ.length)
}

squares(3,9)

function perfSquare(a,b){
    const squareA= Math.floor(Math.sqrt(a))
    const squareB= Math.ceil(Math.sqrt(b))
    for(let i=squareA;i<squareB;i++){
        console.log(i*i)
    }
}
perfSquare(10,50)