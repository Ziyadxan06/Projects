let dayInput = document.querySelector('#day');
let monthInput = document.querySelector('#month');
let yearInput = document.querySelector('#year');
let button = document.querySelector(".btn")
let ageDiv = document.querySelector(".age")
let arr = ["s","a",1,2];
let now = new Date();
let birthDate;
let birthMonth;


function makeDate(){
    switch(monthInput.value){
        case "1":
            birthMonth = "January";
        break;
    
        case "2":
            birthMonth = "Febuary";
        break;
    
        case "3":
            birthMonth = "March";
        break;
    
        case "4":
            birthMonth = "April";
        break;
    
        case "5":
            birthMonth = "May";
        break;
    
        case "6":
            birthMonth = "June";
        break;
    
        case "7":
            birthMonth = "July";
        break;
    
        case "8":
            birthMonth = "August";
        break;
    
        case "9":
            birthMonth = "September";
        break;
    
        case "10":
            birthMonth = "October";
        break;
    
        case "11":
            birthMonth = "November";
        break;
    
        case "12":
            birthMonth = "December";
        break;
    }

    birthDate = new Date(`${birthMonth} ${dayInput.value}, ${yearInput.value} 21:30:50`);
      
}

button.addEventListener('click', ()=>{
    makeDate();
    find()

})

function find(){
    let difference = now - birthDate;

    let day = Math.round(difference/86400000);
    let month = Math.round(difference/2629743830)
    let year = Math.round(difference/31556926000)

    if(yearInput.value > now.getFullYear() || monthInput.value > 12 || dayInput.value > 31 || yearInput.value == "" || monthInput.value == "" || dayInput.value == ""){
        ageDiv.innerHTML =`
        <p><span>--</span> years</p>
        <p><span>--</span> months</p>
        <p><span>--</span> days</p>
    `
    }

    else{
        ageDiv.innerHTML =`
        <p><span>${year}</span> years</p>
        <p><span>${month}</span> months</p>
        <p><span>${day}</span> days</p>
    `
    }
    
}