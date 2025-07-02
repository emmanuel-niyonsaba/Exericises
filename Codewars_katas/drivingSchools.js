

const cost=(mins)=>{
    if(mins <=60)return 30;
    let remain = mins - 60;
    if (remain <= 5) return 30;
    let extraMins = mins - 65;
    let halfHours = Math.ceil(extraMins/30)
    return 30 + (halfHours * 10)
}
console.log(cost(93))