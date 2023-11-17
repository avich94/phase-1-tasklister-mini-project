document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputElement = document.getElementById("new-task-description");
    const task = inputElement.value;
    const colorInput = document.getElementById("priorityColors");
    const selectedColor = colorInput.value;
    buildToDo(task, selectedColor);
    form.reset();
  });
});

function buildToDo(todo, color) {
  let p = document.createElement('p');
  let submit = document.createElement('button');
  submit.addEventListener('click', handleDelete);
  submit.textContent = 'x';
  p.textContent = `${todo} `;
  p.appendChild(submit);
  p.style.color = color;
  console.log(p);
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(event) {
  event.target.parentNode.remove();
}
