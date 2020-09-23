//Selectors
const TODOINPUT = document.querySelector('.todo-input');
const TODOBUTTON = document.querySelector('.todo-button');
const TODOLIST = document.querySelector('.todo-list');

//Event Listeners
TODOBUTTON.addEventListener('click', addTodo);
TODOLIST.addEventListener('click', deleteCheck)

//Functions

function addTodo(event) {
    //prevent form from submitting (refreshing)
    event.preventDefault();

    //Todo DIV
    const TODODIV = document.createElement("div");
    TODODIV.classList.add("todo");


    //Create LI
    const NEWTODO = document.createElement('li');
    NEWTODO.innerText = TODOINPUT.value;
    NEWTODO.classList.add('todo-item');
    TODODIV.appendChild(NEWTODO);

    //Checked button

    const COMPLETEDBUTTON = document.createElement('button');
    COMPLETEDBUTTON.innerHTML = '<i class="fas fa-check">  </i>';
    COMPLETEDBUTTON.classList.add("complete-btn");
    TODODIV.appendChild(COMPLETEDBUTTON);
    
    //Trash button

    const TRASHBUTTON = document.createElement('button');
    TRASHBUTTON.innerHTML = '<i class="fas fa-trash">  </i>';
    TRASHBUTTON.classList.add("trash-btn");
    TODODIV.appendChild(TRASHBUTTON);

    //Append to list

    TODOLIST.appendChild(TODODIV);

    //clear todo INPUT VALUE
    TODOINPUT.value="";
}

function deleteCheck(e){
    const ITEM = e.target;

    //Delete TODO
    if(ITEM.classList [0] === 'trash-btn'){
        const TODO = ITEM.parentElement;
        TODO.remove();
    }

    //Check mark

    if (ITEM.classList[0] === "complete-btn") {
        const TODO = item.parentElement;
        todo.classList.toggle("completed");
        
      }
}


