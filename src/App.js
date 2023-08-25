

function addElement(e){
  const lists = document.querySelector("ul");
  let input = document.querySelector(".todo-input");
  e.preventDefault();
  
    if(input.value){
      lists.innerHTML +=`
      <li>
        <a>${input.value}</a>
        <i class="fa-solid fa-trash"></i>
      </li>
      `
    }

    else{
        alert("Please enter a task");
    }

    input.value = "";

    deleteItems();
}

function deleteItems(){
    const listItemicon = document.querySelectorAll("i");

    listItemicon?.forEach((elem) => {
        elem?.addEventListener('click', () => {
                elem.parentElement.remove();
        })
        
    })
}



function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <form>
            <h1>ToDo</h1>
            <input placeholder="add todo" className="todo-input" type="text" />
            <button onClick={addElement} className="btn">Add</button>
        </form>
        <ul className="todo-lists">
        </ul>
      </div>
    </div>
  );
}



export default App;
