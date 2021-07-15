const addBtn = document.getElementById('addBtn');
const ul = document.getElementById('myList');

addBtn.addEventListener('click', () => {
  let li = document.createElement('li');
  let myText = document.getElementById('myInput').value;
  li.innerText = myText;
  ul.appendChild(li);
});