const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn')
const ul = document.getElementById('myList');
const removeBtn = document.getElementById('removeBtn');

// Task adding click event in the to-do list 

addBtn.addEventListener('click', () => {
  // Add li to ul 
  let li = document.createElement('li');
  li.className = 'task'

  // Create li with user-typed input & removeBtn inslide li 
  let removeBtn = document.createElement('button');
  removeBtn.id = 'removeBtn';
  removeBtn.className = 'removeBtn';
  removeBtn.innerText = 'x'

  
  let myText = document.getElementById('myInput').value;
  li.innerText = myText;
  ul.appendChild(li);
  li.appendChild(removeBtn);

  removeBtn.addEventListener('click', () => {
    li.innerHTML = "";
  });
  
});


// Clearing content click event 

clearBtn.addEventListener('click', () => {
  ul.innerHTML = "";
});


// removing a task from the list

