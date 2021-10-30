const bday='14 Dec 2021';
const daysele= document.getElementById('days')
const Hoursele=document.getElementById('Hours');
const minsele=document.getElementById('mins');
const secsele=document.getElementById('secs');

function countdown(){
    const bdaydate= new Date(bday);
    const todaydate=new Date();
    
    const totalseconds= (bdaydate-todaydate)/1000;

    const seconds= Math.floor(totalseconds)%60;
    const mins= Math.floor(totalseconds/60)%60;
    const hours=Math.floor(totalseconds/3600)%24;
    const days=Math.floor(totalseconds/(3600*24));
    console.log(days,hours,mins,seconds);

    daysele.innerHTML=days;
    Hoursele.innerHTML=format(hours);
    minsele.innerHTML=format(mins);
    secsele.innerHTML=format(seconds);

}
function format(time){
    return time < 10 ? `0${time}`:time;
}
countdown();
setInterval(countdown,1000);