

function displayclock() {
 var time= new Date();
 var hrs= time.getHours();
 var min= time.getMinutes();
 var sec= time.getSeconds();
 var en= 'Am';

 if(hrs>12)
 {
    hrs= hrs-12;
    en='Pm';
 }
 if(hrs==0)
 {
    hrs=12;
 }
 if(hrs<10)
 {
    hrs= '0'+hrs;
 }
 if(sec<10)
 {
    sec= '0'+ sec;
 }
 if(min<10)
 {
    min= '0'+ min;
 }
 document.querySelector("#hours").innerHTML= hrs;
 document.querySelector("#minutes").innerHTML= min;
 document.querySelector("#seconds").innerHTML= sec;
 document.querySelector("#amorpm").innerHTML= en;



}

setInterval(displayclock, 500);