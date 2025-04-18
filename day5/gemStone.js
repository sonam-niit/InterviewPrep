function gemstones(arr) {
    let common = new Set(arr[0])
    console.log(common);
    for(let rock of arr.slice(1)){
        common = new Set([...common].filter(c=>rock.includes(c)))
        console.log(rock,':',common)
    }
}

gemstones(['abcdde', 'baccd', 'eeabg','cddda'])