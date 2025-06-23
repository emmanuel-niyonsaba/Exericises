

const MagicThree = (Arr)=>{
    const n= Arr.length
    for( let i=0 ; i<n ; i ++){
        for( let j=0; j<i ; j++){
            for( let k=0; k<j; k++){
                if( Arr[i]+Arr[j]+Arr[j]===0){
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

console.log(MagicThree([1,2,3,4,5,5,6,65,4,3,5,3,3]))