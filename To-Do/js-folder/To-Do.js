const form = document.querySelector("form"),
      lists = document.querySelector("ul"),
      input = document.querySelector("input"),
      button = document.querySelector("button");



form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(input.value != ""){
        let a = document.createElement("a");
        let icon = document.createElement("i");
        let li = document.createElement("li");
        a.textContent = input.value;
        icon.classList.add("fa-solid", "fa-trash");

        li.appendChild(a);
        li.appendChild(icon);
        lists.appendChild(li); 

        input.value = "";

        input.addEventListener("keyup", () => {
                a.style = `color: ${input.value}; font-size: ${input.value}`;
        })
    }

    else{
        alert("Please enter a task");
    }

    deleteItems();

    
});

function deleteItems(){
    const listItemicon = document.querySelectorAll("i");

    listItemicon.forEach((elem) => {
        elem.addEventListener('click', () => {
                elem.parentElement.remove();
        })
        
    })
}

