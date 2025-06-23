


const  convertNullableValues=(obj)=>{
    
 for(let item in obj){
        if(obj[item] === undefined){
            obj[item] = "";
        }
        else if( obj[item] === null){
            obj[item] =0;
        }

       
    }
    return obj
}
const Nullable = {product:undefined,color: null, price: 400}
console.log(convertNullableValues(Nullable))
