//Selectors
const TODOINPUT = document.querySelector('.todo-input');
const TODOBUTTON = document.querySelector('.todo-button');
const TODOLIST = document.querySelector('.todo-list');

//Event Listeners
TODOBUTTON.addEventListener('click', addTodo);

//Functions

function addTodo(event) {
    //prevent form from submitting (refreshing)
    event.preventDefault();

    //Todo DIV
    const TODODIV = document.createElement("div");
    TODODIV.classList.add("todo");


    //Create LI
    const NEWTODO = document.createElement('li');
    NEWTODO.innerText = 'hey'
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
    TRASHBUTTON.classList.add("complete-btn");
    TODODIV.appendChild(TRASHBUTTON);

    //Append to list

    TODOLIST.appendChild(TODODIV);
}