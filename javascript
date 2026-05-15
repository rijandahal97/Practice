// 🌙 Dark Mode with Save
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
}

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Load saved mode
    if (localStorage.getItem("mode") === "dark") {
        document.body.classList.add("dark");
    }

    // 📬 Form Validation
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            let msg = document.getElementById("formMsg");

            // Email pattern check
            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if (name === "" || email === "" || message === "") {
                msg.style.color = "red";
                msg.innerText = "Please fill all fields!";
            } 
            else if (!email.match(emailPattern)) {
                msg.style.color = "orange";
                msg.innerText = "Enter a valid email!";
            }
            else {
                msg.style.color = "green";
                msg.innerText = "Message sent successfully!";

                form.reset(); // clear form
            }
        });
    }

    // Optional: typing effect (safe call)
    if (typeof typeEffect === "function") {
        typeEffect();
// ✨ Typing Effect
const text = "I am a Web Developer 🚀";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

// 🌙 Dark Mode (keep your previous code)
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "mode",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

// Load saved mode + typing
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("mode") === "dark") {
        document.body.classList.add("dark");
    }
    typeEffect();
});

// 📬 Form Validation (same as before)

// 👀 Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 200;

        if (top > offset) {
            section.classList.add("show");
// 🎯 Project Filtering
function filterProjects(category) {

    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {

        if (category === "all") {
            project.style.display = "inline-block";
        }
        else if (project.classList.contains(category)) {
            project.style.display = "inline-block";
        }
        else {
            project.style.display = "none";
        }

    });
}
        }
    });
});
    }
});
