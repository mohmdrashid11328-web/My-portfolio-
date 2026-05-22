//  Select all elements you want to reveal
const revealElements = document.querySelectorAll('.reveal');

// Create an observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // show animation
        }
        else {
            entry.target.classList.remove('visible');
        }
    });
});

// Observe each section
revealElements.forEach(el => observer.observe(el));