import './style.css'

const textToType = "shreyas singh | maskjelly"; 
const typingElement = document.getElementById('name');
let charIndex = 0;
const typingDelay = 100; 

function typeText() {
  if (charIndex < textToType.length) {
    typingElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingDelay);
  }
}


document.addEventListener('DOMContentLoaded', typeText);

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const darkModeClass = 'dark-mode';

themeToggle.addEventListener('click', () => {
  body.classList.toggle(darkModeClass);
  updateButtonText();
  saveThemePreference(); // Save preference to localStorage
});

function updateButtonText() {
  if (body.classList.contains(darkModeClass)) {
    themeToggle.textContent = 'Toggle Light Mode';
  } else {
    themeToggle.textContent = 'Toggle Dark Mode';
  }
}

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add(darkModeClass);
  }
  updateButtonText();
});

function saveThemePreference() {
  if (body.classList.contains(darkModeClass)) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}
