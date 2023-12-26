import 'regenerator-runtime';
import './styles/style.css';
import generateId from './scripts/generateId';
import generateToDoObject from './scripts/generateToDoObject';

const todos = [];
const RENDER_EVENT = 'render-todo';

//membuat objek
function addTodo(){

  //mengambil nilai dari form
  const toDo = document.getElementById('to-do').value;
  const deadline = document.getElementById('deadline').value;

  //mengenerate id
  const generateID = generateId();

  const toDoObject = generateToDoObject(generateID, toDo, deadline, false);
  todos.push(toDoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
}

//  membuat todo
function makeToDo(toDoObject) {
  // membuat elemen h3 dan mengambil nilai dari objecl toDo
  const toDoTitle = document.createElement('h3') ;
  toDoTitle.innerText = toDoObject.toDo;
  
  // membuat elemen h3 dan mengambil nilai dari objecl deadline
  const deadlineToDo = document.createElement('p')
  deadlineToDo.innerText = toDoObject.deadline;
 
  //appenchild nilai todotitle dan deadlinetodo
  const containerDo = document.querySelector('#do');
  containerDo.appendChild(toDoTitle);
  containerDo.appendChild(deadlineToDo);
 }

document.addEventListener(RENDER_EVENT, function () {
  //mengosongkan nilai #do sebelum menambahkan do baru
  const containerDo = document.querySelector('#do');
  containerDo.innerHTML='';

  for (const todoItem of todos) {
    const todoElement = makeToDo(todoItem);
  }
});

document.addEventListener('DOMContentLoaded', function(){
  const submitForm = document.getElementById('form');
  submitForm.addEventListener('submit', function(event){
    event.preventDefault();
    addTodo();
  })  
});



