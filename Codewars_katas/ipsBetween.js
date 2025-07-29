

// this function will count the possible number of ips between start and end ips

const ipsBetween = (start,end)=>{
    const isnum=(ip)=>{
        return ip.split('.').reduce((a,b)=>{
            return a*256 + Number(b)
        },0)
    }
    return  isnum(end)- isnum(start)
}
console.log(ipsBetween("123.233.0.2","192.168.0.0"))