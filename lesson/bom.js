const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
  let favchap = input.value;
  input.value = '';

  const favchapList = document.createElement('li');
  const favchapText = document.createElement('span');
  const deleteBtn = document.createElement('button');

        favchapList.appendChild(favchapText);
  favchapText.textContent = favchap;
  favchapList.appendChild(deleteBtn);
  deleteBtn.textContent = 'X';
  list.appendChild(favchapList);

  deleteBtn.onclick = function(e) {
    list.removeChild(favchapList);
  }

  input.focus();
}