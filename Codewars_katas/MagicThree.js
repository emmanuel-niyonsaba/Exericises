

const MagicThree = (Arr)=>{
    const zeros = Arr.filter((a)=>a===0).length
    if(zeros >= 3){
        return true
    }
    const n= Arr.length
    if( n <3){
        return false
    }
    for( let i=0 ; i<n ; i ++){
        for( let j=0; j<i ; j++){
            for( let k=0; k<j; k++){
                if( Arr[i]+Arr[j]+Arr[k]===0){
                    console.log("true")
                    return true
                }
                else{
                    console.log("false")
                    return false
                }
            }
        }

    }
}

console.log(MagicThree([0]))