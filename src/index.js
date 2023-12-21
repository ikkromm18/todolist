import 'regenerator-runtime';
import './styles/style.css';
import generateId from './scripts/generateId';
import generateToDoObject from './scripts/generateToDoObject';

const todos = [];
const RENDER_EVENT = 'render-todo';

function addTodo(){
  const toDo = document.getElementById('to-do').value;
  const deadline = document.getElementById('deadline').value;

  const generateID = generateId();

  const toDoObject = generateToDoObject(generateID, toDo, deadline, false);
  todos.push(toDoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
}

 
document.addEventListener(RENDER_EVENT, function () {
  console.log(todos);
});

document.addEventListener('DOMContentLoaded', function(){
  const submitForm = document.getElementById('form');
  submitForm.addEventListener('submit', function(event){
    event.preventDefault();
    addTodo();
  })  
});