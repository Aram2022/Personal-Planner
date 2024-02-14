const openBtn = document.querySelector('.openBtn')
const closeBtn = document.querySelector('.fa-circle-xmark')
const addTask = document.querySelector('.addTask')
const addBtn = document.querySelector('.addBtn')
const input = document.querySelector('.input')
const myList = document.querySelector('.myList')
const deleteList = document.querySelector('.fa-trash')

openBtn.addEventListener('click', function(){
    addTask.classList.toggle('open');
})

closeBtn.addEventListener('click', function(){
    addTask.classList.remove('open');
})

addBtn.addEventListener('click', function(event){
    event.preventDefault();

    if(!input.value.trim()) return;
    
    const list = document.createElement('a');
    // list.href = input.value + '.html';
    // list.target = '_blank'
    list.classList.add('tasks');

    const span1 = document.createElement('span');
    span1.innerHTML = input.value;
    const span2 = document.createElement('span');
    span2.innerHTML = '<i class="fas fa-trash"></i>';

    list.appendChild(span1);
    list.appendChild(span2);
    myList.appendChild(list);

    saveInLocalStorage(input.value);
    input.value = ''
})

myList.addEventListener('click', function(event){
    const list = event.target.parentElement.parentElement;

    if(event.target.classList[1] == 'fa-trash'){
        list.classList.toggle('remove');
        removeFromLocalStorage(list.children[0].innerText)
    }
})

document.addEventListener('DOMContentLoaded', function(){
    input.focus();

    let lists;
    if(localStorage.getItem('lists') == null){
        lists = []
    }else{
        lists = JSON.parse(localStorage.getItem('lists'))
    }

    lists.forEach(text=>{

    const list = document.createElement('a');
    list.classList.add("tasks")
    
    const span1 = document.createElement('span');
    span1.innerText = text;

    const span2 = document.createElement('span');
    span2.innerHTML = '<i class="fas fa-trash"></i>'

    list.appendChild(span1);
    list.appendChild(span2);
    myList.appendChild(list);

    })
    
});

function saveInLocalStorage(text){
    let lists;
    if(localStorage.getItem('lists') == null){
        lists = []
    }else{
        lists = JSON.parse(localStorage.getItem('lists'))
    }

    lists.push(text);
    localStorage.setItem('lists', JSON.stringify(lists));
}

function removeFromLocalStorage(text){
    let lists;
    if(localStorage.getItem('lists') == null){
        lists = []
    }else{
        lists = JSON.parse(localStorage.getItem('lists'))
    }

    let index = lists.indexOf(text);
    lists.splice(index, 1)
    localStorage.setItem('lists', JSON.stringify(lists));
}