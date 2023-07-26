let menuHeader = document.querySelector(".menu-header");
let menuMain = document.querySelector(".menu-main");
let headerText = menuHeader.querySelector(".menu-header-item");
let mainText = menuMain.querySelectorAll(".menu-main-item");

menuHeader.addEventListener('click', () =>{
    menuMain.classList.toggle('active');
    mainText.forEach((elem, index) => {
        elem.style = `--i: ${index}`
    })
});

mainText.forEach(function(elem){
    elem.addEventListener('mouseover', () => {
        headerText.textContent = elem.textContent;
    })

    elem.addEventListener('click', () => {
        menuMain.classList.remove('active');
    })
})
    


