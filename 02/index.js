const monthName=document.getElementById("month");
const dayName=document.getElementById("day");
const dayNum=document.getElementById("date");
const yearEl=document.getElementById("year");
const date=new Date();
console.log(date);
const Mnth=date.getMonth();
monthName.innerHTML=date.toLocaleString("en",{
    month:"long"
})

dayName.innerText=date.toLocaleString("en",{
    weekday:"long"
})
 
dayNum.innerText=date.getDate();
yearEl.innerText=date.getFullYear();