// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger) {
  hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    nav.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.header-right') && !event.target.closest('.nav')) {
    nav.classList.remove('active');
  }
});

function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var subject = "Feedbacks/Questions";
  var mailto_link = 'mailto:kushawaha.nilay.foreign@gmail.com?subject=' + subject + '&body=' + "Name: " + name + "%0A" + "Email: " + email + "%0A" + "Message: " + message;
  window.location.href = mailto_link;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

document.getElementById("back-to-top").addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', body.dataset.theme);
});

// Apply the saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.dataset.theme = savedTheme;
}
