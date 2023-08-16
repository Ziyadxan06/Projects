let cardcontainer = document.querySelector(".card-container");
let input = document.querySelector('#filter-input');
let basket = document.querySelector(".basket")
let Basketbtn = document.querySelector(".basket-btn")
let basketItems = [];


function getData(){
    fetch("https://countryapi.io/api/all?apikey=wfejy7yPRaO3L7Vf7TYgPi2X49nnPD4nOqcskirO")
    .then(res => res.json())
    .then(data => {
        Object.values(data).forEach(element =>{
            console.log(element)
            cardcontainer.innerHTML += `
                    <div class="card">
                        <img src="${element.flag.large}" alt="">

                        <div class="card-body">
                            <h3 class="card-title">${element.name}</h3>
                            <p class="capital">Capital: ${element.capital}</p>
                            <p class="population">Population: ${element.population}</p>
                            <p> Area: ${element.area}</p>
                        </div>
                    </div>
                `
        })
    })
}

        

input.addEventListener("keyup", (e) => {
    
    let value = e.target.value.toUpperCase();
    let title = document.querySelectorAll(".card-title");
    title.forEach((item) => {
        if(item.textContent.toUpperCase().includes(value)){
            item.parentElement.parentElement.style.display = 'block';
        }

        else{
            item.parentElement.parentElement.style.display = 'none';
        }
    })
})

getData();











