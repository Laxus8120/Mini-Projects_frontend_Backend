import "../styles/modern_normalize.css"
import '../styles/style.css'
import '../styles/aside.css'
import '../styles/main.css'
import '../styles/utils.css'


// Assuming the 'burger' button has an ID of 'burger'
var burgerButton = document.getElementById('burger');

// Assuming the 'header' has an ID of 'header' and the cross has a class of 'cross'
var header = document.getElementById('header');
var crossButton = document.getElementById('cross');

burgerButton.addEventListener('click', function() {
  header.classList.toggle('show-header');
  crossButton.style.display = 'block';
  burgerButton.style.display = 'none';
});

crossButton.addEventListener('click', function() {
  header.classList.remove('show-header');
  crossButton.style.display = 'none';
  burgerButton.style.display = 'block';
});

  