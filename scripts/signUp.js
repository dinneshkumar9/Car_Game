const form = document.querySelector('form');
const userData = [];
let id = 1;
let loginBtn = document.querySelector('#login_btn');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //get form data
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;

    //validate form data
    if(checkName(name)<2){
        document.querySelector('#nameError').innerHTML = '*Name should have at least two words';
        return;
      } 
      else {
        document.querySelector('#nameError').innerHTML = '';
      }
    
    //validate email
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    document.querySelector('#emailError').innerHTML = 'Email should be a valid email address';
    return;
  } 
  else {
    document.querySelector('#emailError').innerHTML = '';
  }
  //validate password
  if (password.length<8 || password == name || password == email) {
    document.querySelector('#passwordError').innerHTML = 'Password should have at least 8 characters and should not be the same as name or email';
    return;
  } 
  else {
    document.querySelector('#passwordError').innerHTML = '';
  }

  if (password !== confirmPassword) {
    document.querySelector('#confirmPasswordError').innerHTML = 'Passwords do not match';
    return;
  }
   else {
    document.querySelector('#confirmPasswordError').innerHTML = '';
  }
  //check if user already exists   
  const existingUser = userData.find((user) => user.email === email);
  if (existingUser) {
    document.querySelector('#signup-failed').innerHTML = 'Email already registered';
    return;
  }
   else {
    document.querySelector('#signup-failed').innerHTML = '';
   }

   //store user data
  userData.push({ id, name, email, password });
  id++;
  localStorage.setItem('userData', JSON.stringify(userData));

// //show login button
//    if(userData.length > 0){
//     loginBtn.style.display = 'block';
//    }
//    else{
//     loginBtn.style.display = 'none';
//    }
//    console.log("1")
//    console.log(userData);
   form.reset();
   if(userData.length > 0){
    window.location.href = 'login.html'
   }
});
//validate name
function checkName(name){
   
    let arr = name.split(' ');
    return arr.length;
}


loginBtn.addEventListener('click',(e) => {
  if(userData.length > 0){
    window.location.href = 'login.html'
   }
   else{
    alert('Please sign up first or else you wont be able to play the game');
   }
});