

// This if for checking if the given string contains the name user mationed

const itContain =(str,name)=>{
    let matchs = 0;
    for( char of str){
        if(char === name[matchs]){
            matchs++
        }

    }
    return matchs === name.length ? true:false
}
console.log(itContain("emmgfghjjandfjjuel","emmanuel"))