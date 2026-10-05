// 🌙 Dark Mode with Save
function toggleDarkMode() {
    document.body.classList.toggle("dark");
 if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
}
}
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");
function openImage(imageSrc) {
lightbox.style.display = "flex";
lightboxImg.src = imageSrc;
}
// 🚀 Day 16 - Service Card Animation
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach(card => {
card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});
closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});
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
window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";
const modal = document.getElementById("projectModal");

const closeBtn = document.querySelector(".close");

function openModal(title, description){

    document.getElementById("modalTitle").innerText = title;

    document.getElementById("modalDescription").innerText = description;

    modal.style.display = "block";

}

closeBtn.onclick = function(){

    modal.style.display = "none";

}

window.onclick = function(event){

    if(event.target == modal){

        modal.style.display = "none";

    }

}
const username = "YOUR_GITHUB_USERNAME";

async function loadRepositories() {

    const container = document.getElementById("repoContainer");

    try {

        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated`
        );

        const repos = await response.json();

        container.innerHTML = "";

        repos.slice(0, 6).forEach(repo => {

            container.innerHTML += `
                <div class="repo-card">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available."}</p>

                    <a href="${repo.html_url}" target="_blank">
                        View Repository
                    </a>
                </div>
            `;
        });

    } catch (error) {

        container.innerHTML =
            "<p>Unable to load repositories.</p>";
    }
}

document.addEventListener("DOMContentLoaded", loadRepositories);
});
