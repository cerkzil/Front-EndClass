const form = document.querySelector('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const submit = document.getElementById('submit');
const msg = document.querySelector('p');

form.onsubmit = function(e){
  if (firstname.value === '' || lastname.value === ''){
    e.preventDefault();
    msg.innerHTML = '<span class="error">You must fill in all fields!<span>';
  }
}