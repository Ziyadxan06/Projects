let cardcontainer = document.querySelector(".card-container");
let input = document.querySelector('#filter-input');
let basket = document.querySelector(".basket")
let Basketbtn = document.querySelector(".basket-btn")
let basketItems = [];


function getData(){
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        for(let user of data){
            let cardTitle = user.title;
            if(cardTitle.length > 47){
                cardTitle = cardTitle.slice(0, 50);

                cardcontainer.innerHTML += `
                    <div class="card">
                        <img src="${user.image}" alt="">

                        <div class="card-body">
                            <h3 class="card-title">${cardTitle}...</h3>
                            <p class="card-price">${user.price}</p>
                            <p class="category">${user.category}</p>
                            <a href="#" class="card-btn">Add Basket</a>
                        </div>
                    </div>
                `
            }

            else{
                cardcontainer.innerHTML += `
                    <div class="card">
                        <img src="${user.image}" alt="">

                        <div class="card-body">
                            <h3 class="card-title">${user.title}...</h3>
                            <p class="card-price">${user.price}</p>
                            <p class="category">${user.category}</p>
                            <a href="#" class="card-btn">Add Basket</a>
                        </div>
                    </div>
                `
            }
            

        basket.innerHTML +=`
        <div class="card">
            <img src="${user.image}" alt="">

            <div class="basket-card-body">
                <h3 class="basket-card-title">${user.title}</h3>
                <p class="basket-card-price">${user.price}</p>
                <p class="basket-category">${user.category}</p>
            </div>
        </div>
        `
        }
        let Cardbtn = document.querySelectorAll(".card-btn")
        let basketCard = document.querySelectorAll(".basket > .card")
        Cardbtn.forEach((element, index,array) => {
            array[index].addEventListener('click', () => {
                basketCard.forEach((elem, ind, arr)=>{
                    if(index == ind){
                        arr[ind].classList.replace("card", "active");
                    }
                })
            })
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

Basketbtn.addEventListener('click', () => {
    if(basket.style.display == "none"){
        basket.style.display = "block";
    }

    else{
        basket.style.display = "none";
    }
});









