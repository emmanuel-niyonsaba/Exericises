


const targetGame = (vals)=>{
    let p2 =0; p1=0 
    for (let val of vals){
        let shoot = p2+ Math.max(0,val)
        let skeep = p1
        let current = Math.max(skeep,shoot)
           p2= p1
            p1 =current
    }
 return p1
    
}
console.log(targetGame([11, 82, 47, 48, 80, 35, 73, 99, 86, 32, 32]))
