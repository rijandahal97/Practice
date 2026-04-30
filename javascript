// 🌙 Dark Mode with Save
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
}

// Load saved mode
window.onload = function () {
    if (localStorage.getItem("mode") === "dark") {
        document.body.classList.add("dark");
    }

    typeEffect(); // keep your typing effect working
};

// 📬 Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let msg = document.getElementById("formMsg");

    if (name === "" || email === "" || message === "") {
        msg.style.color = "red";
        msg.innerText = "Please fill all fields!";
    } else {
        msg.style.color = "green";
        msg.innerText = "Message sent successfully!";
    }
});
