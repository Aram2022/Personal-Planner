const openBtn = document.querySelector('.openBtn')
const closeBtn = document.querySelector('.fa-circle-xmark')
const addTask = document.querySelector('.addTask')
const addBtn = document.querySelector('.addBtn')
const input = document.querySelector('.input')
const taskList = document.querySelector('.taskList')

openBtn.addEventListener('click', function(){
    addTask.classList.toggle('open');
})

closeBtn.addEventListener('click', function(){
    addTask.classList.remove('open');
})

addBtn.addEventListener('click', function(event){
    event.preventDefault();

    if(!input.value.trim()) return;

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('tasks');

    const span1 = document.createElement('span');
    span1.innerHTML = input.value;

    const span2 = document.createElement('span');
    span2.innerHTML = ' <i class="fas fa-circle-check"></i> <i class="fas fa-circle-minus"></i>'

    taskDiv.appendChild(span1);
    taskDiv.appendChild(span2);
    taskList.appendChild(taskDiv);

    saveInLocalStorage(input.value);
    input.value = ''
})

taskList.addEventListener('click', function(event){
    const task = event.target.parentElement.parentElement;
    if(event.target.classList[1] == 'fa-circle-check'){
        task.classList.toggle('complated');
    }
    if(event.target.classList[1] == 'fa-circle-minus'){
        task.classList.add('remove');
        removeFromLocalStorage(task.children[0].innerText)
    }
})

document.addEventListener('DOMContentLoaded', function(){
    input.focus();

    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(text=>{

    const taskDiv = document.createElement('div');
    taskDiv.classList.add("tasks")
    const span1 = document.createElement('span');
    span1.innerText = text;

    const span2 = document.createElement('span');
    span2.innerHTML = ' <i class="fas fa-circle-check"></i> <i class="fas fa-circle-minus"></i>';

    taskDiv.appendChild(span1);
    taskDiv.appendChild(span2);
    taskList.appendChild(taskDiv);
})
    
});

function saveInLocalStorage(text){
    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(text);
    console.log(text.parentElement);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeFromLocalStorage(text){
    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    let index = tasks.indexOf(text);
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



