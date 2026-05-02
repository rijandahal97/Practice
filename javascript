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
    }
});
