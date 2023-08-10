let icon = document.querySelector(".fa-bars");
let menu = document.querySelector(".nav-links");

icon.addEventListener('click', () => {
    if(menu.style.display == 'none' || menu.style.display == ''){
        menu.style.display = 'block'
    }

    else{
        menu.style.display = 'none'
    }
})