let second = document.querySelector('#sec');
let min = document.querySelector('#min');
let hours = document.querySelector('#hours');

setInterval(()=>{
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

    hours.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

    // Digital Clock

let sec_digital = document.getElementById("seconds");
let min_digital = document.getElementById("minutes");
let hours_digital = document.getElementById("hr");
let ampm = document.getElementById("ampm");

        let hhd = new Date().getHours();
        let mmd = new Date().getMinutes();
        let ssd = new Date().getSeconds();

    // add zero before single digit number
    if(hhd < 10){
        hhd = "0" + hhd;
    }
    if(mmd < 10){
        mmd = "0" + mmd;
    }
    if(ssd < 10){
        ssd = "0" + ssd;
    }

        // Convert 24HR to 12HR clock
        if(hhd > 12){
            hhd = hhd - 12;
        }

        let am;
        if(hhd <= 12){
            am = "PM";
        }else{
            am = "AM";
        }
        
        hours_digital.innerHTML = hhd;
        min_digital.innerHTML = mmd;
        sec_digital.innerHTML = ssd;
        ampm.innerHTML = am;
        
})
    