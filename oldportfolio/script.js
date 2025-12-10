let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', function() {
    // LinkedIn
    document.getElementById('linkedin').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'https://www.linkedin.com/in/kent-andrey-aguhob-5b5a97306/'; // Replace 'your-profile-url' with your actual LinkedIn profile URL
    });

    // GitHub
    document.getElementById('github').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'https://github.com/Kynbeau'; // Replace 'your-username' with your actual GitHub username
    });

    // Instagram
    document.getElementById('instagram').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'https://www.instagram.com/kentandreyflores/?hl=en'; // Replace 'your-username' with your actual Instagram username
    });

    // Facebook
    document.getElementById('facebook').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'https://www.facebook.com/kenbeau03'; // Replace 'your-profile-url' with your actual Facebook profile URL
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // LinkedIn
    document.getElementById('linkedin0').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'https://www.linkedin.com/in/kent-andrey-aguhob-5b5a97306/'; // Replace 'your-profile-url' with your actual LinkedIn profile URL
    });

    // GitHub
    document.getElementById('github0').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'https://github.com/Kynbeau'; // Replace 'your-username' with your actual GitHub username
    });

    // Instagram
    document.getElementById('instagram0').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'https://www.instagram.com/kentandreyflores/?hl=en'; // Replace 'your-username' with your actual Instagram username
    });

    // Facebook
    document.getElementById('facebook0').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'https://www.facebook.com/kenbeau03'; // Replace 'your-profile-url' with your actual Facebook profile URL
    });
});