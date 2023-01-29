const form = document.querySelector('form');
const storedData = localStorage.getItem('userData');
const userData = JSON.parse(storedData);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;
// verify the email and password to make sure they are valid
const user = userData.find((user) => user.email === email);

// check if the user exists and the entered password matches
if (!user || user.password !== password) {
  document.querySelector('#error').innerHTML = 'Invalid email or password';
  return;
}
else {
  // redirect the user to the next page
  document.querySelector('#error').innerHTML = '';
  document.querySelector('#success').innerHTML = 'Login successful';
  localStorage.setItem('userData', JSON.stringify(userData));
  window.location.href = 'carGame.html';
}
});