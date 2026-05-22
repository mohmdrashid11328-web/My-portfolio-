// declare variables
const name = "Amatullah";
const age = "25";
const role = "Learning";
const country = "kuwait";
const hobby = "coding";

// add arrow function(define variables first)
const greet = (userName) => "Welcome to JAVASCRIPT " + userName;

// log variable
console.log(name, age, role, country, hobby);

// welcome message ( use arrow funtion )
// console.log("Welcome to JAVASCRIPT " + name);
console.log(greet(name));

// change h1 text
document.querySelector('h1').textContent = "WELCOME!";
// highlight h1 (function calling)
highlightElement(".about-text");

// CHANGE HERO SECTION
document.querySelector("#home").style.backgroundColor = "black";

// toggle class
function toggleTheme() {
    const section = document.querySelector("#home");
    section.classList.toggle("dark");
}

// highlight function
function highlightElement(h1) {
    const el = document.querySelector(h1);

    if (!el) return;

    el.style.transition = "background-color 0.3s";
    el.style.backgroundColor = "green";

    setTimeout(() => {
        el.style.backgroundColor = "";
    }, 1000); // 1 second
}

// footer year
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

// js scroll listner for nav
const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// for even.target navlink
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        console.log("Clicked link:", event.target.textContent);
    });
});

// section id created
function showSection(id) {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const activeSection = document.getElementById(id);

    if (activeSection) {
        activeSection.classList.add("active");
    }
}

function handleScroll() {
    console.log("Scrolling page...");
}

window.addEventListener("scroll", handleScroll);

showSection("education");


// hamburger
const hamburger = document.getElementById("hamburger");
const mobilenavLinks = document.getElementById("navLinks");

// toggle menu
hamburger.addEventListener("click", () => {
    mobilenavLinks.classList.toggle("open");
});

// close when link clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        mobilenavLinks.classList.remove("open");
    });
});

// Step 1: Create array of project objects
const projects = [
    {
        title: "Project 1",
        desc: "A webpage built with HTML & CSS to manage tasks efficiently.",
        url: "#"
    },
    {
        title: "Project 2",
        desc: "Discover my contact form.",
        url: "contact.html"
    },
    {
        title: "Project 3",
        desc: "Another project added dynamically.",
        url: "about.html"
    }
];

projects.forEach(project => {
    console.log("Title:", project.title);
    console.log("Description:", project.desc);
    console.log("URL:", project.url);
    console.log("--------------");
});

// Step 2: Select .projects-grid container
const container = document.querySelector(".projects-grid");

// Step 3: Loop through each object and create a card
projects.forEach(project => {
    container.innerHTML += `
    <div class="project-card">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <a href="${project.url}" target="_blank" class="view-link">View Project</a>
    </div>
  `;
});

// form 
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successBox = document.getElementById("successBox");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop reload

    let hasError = false;
    successBox.innerText = ""; // clear old success message

    // Validate Name
    if (nameInput.value.trim() === "") {
        nameError.innerText = "Name cannot be empty";
        hasError = true;
    } else {
        nameError.innerText = "";
    }

    // Validate Email
    if (!emailInput.value.includes("@")) {
        emailError.innerText = "Invalid email format";
        hasError = true;
    } else {
        emailError.innerText = "";
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
        messageError.innerText = "Message cannot be empty";
        hasError = true;
    } else {
        messageError.innerText = "";
    }

    // If no error → success message
    if (!hasError) {
        successBox.innerText = "Message sent successfully!";
        successBox.classList.add("success");
        form.reset();
    }
});

