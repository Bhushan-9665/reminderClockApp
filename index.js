let displayMassege = document.getElementsByClassName('text-1');
// console.log(displayMassege)
let assignTime = document.getElementsByClassName('clock-adj');
function clockStart(){
    let AMPM = '';
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    
    if (hrs <= 10 && hrs >= 4){
        displayMassege[0].innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"
    }else if (hrs > 10 && hrs <= 16 ) {
        displayMassege[0].innerHTML = "LET'S HAVE SOME LUNCH !!"
    }else if (hrs > 16 && hrs <= 20){
        displayMassege[0].innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    }else if(hrs >20 || hrs <=4){
        displayMassege[0].innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
    }


    if(hrs > 12){
        hrs -= 12
        AMPM = "PM"
    }else{
        AMPM = "AM"
    }
    console.log(`Time is - ${hrs} :  ${mins}  :${secs}  :  ${AMPM} `);
    // assignTime[0].innerHTML = `${hrs} : ${mins} : ${secs} : ${AMPM}`;
    assignTime[0].innerHTML = `${hrs}`;
    assignTime[1].innerHTML = `${mins}`
    assignTime[2].innerHTML = `${secs}`
    assignTime[3].innerHTML = `${AMPM}`

    
}
clockStart();


setInterval(() =>{
    clockStart();
},1000);



let selectAlarm = document.querySelectorAll('select');
let updateImage = document.querySelector('.wake_up')
let updateData = document.getElementById('upText')
function callFunction (){
    let time = new Date();
    let hrs = time.getHours();

    console.log(selectAlarm)
    let wakeup = selectAlarm[0].selectedIndex;
    let lunch = selectAlarm[1].selectedIndex;
    let nap = selectAlarm[2].selectedIndex;
    let night = selectAlarm[3].selectedIndex;
    console.log(hrs)

    let morning = selectAlarm[0].options[wakeup]
    let noon = selectAlarm[1].options[lunch]
    let evening = selectAlarm[2].options[nap]
    let sleep = selectAlarm[3].options[night]

    console.log(morning)
    console.log(noon)
    console.log(evening)
    console.log(sleep)

    updation1.innerHTML = `Wake up Time: ${morning.innerHTML}`;
    updation2.innerHTML = `Lunch Time: ${noon.innerHTML}`;
    updation3.innerHTML = `Nap Time: ${evening.innerHTML}`;
    updation4.innerHTML = `Night Time: ${sleep.innerHTML}`;

    if ((parseInt(selectAlarm[0].value) === hrs)){
        msg.innerHTML = "GOOD MORNING!! WAKE UP !!"
        imgs.src = "./asset/Group51832x.png"
    }
    else if ((parseInt(selectAlarm[1].value) === hrs)){
        msg.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP!!"
        imgs.src = "./asset/Group5183.png"
    }
    else if (parseInt(selectAlarm[2].value) === hrs){
        msg.innerHTML = "GOOD EVENING !!"
        imgs.src = "./asset/lunch_image.png"   
    }
    else if (parseInt(selectAlarm[3].value) === hrs){
        msg.innerHTML = "GOOD NIGHT !!"
        imgs.src = "./asset/Group5194.png"     
    }

    
}