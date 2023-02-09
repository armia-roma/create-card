function permutations (string) {
    let a = string.split("")
    let head = []
    let out = []
    let temp = a.slice()
    let  result = []
    a.forEach((v,i,arr) => {
        if(head.indexOf(v) == -1){
            head.push(v);
            temp.splice(temp.indexOf(v), 1);
            
        }
    });
    console.log(a)
    console.log(temp)
}
console.log(permutations('abc'))