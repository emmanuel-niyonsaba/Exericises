
function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  
  const arriva1= start- tz_from 
  const arriva2 =arriva1 +duration
  const arriva3 =arriva2 +tz_to
  
  return  arriva3<0 
}
console.log(was_package_received_yesterday(0,0,0,0))