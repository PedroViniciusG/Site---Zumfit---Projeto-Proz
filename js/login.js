document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("togglePassword");
    const errorMessage = document.getElementById("errorMessage");
    const errorText = document.getElementById("errorText");

    togglePasswordBtn.addEventListener("click", function () {
        const isPassword = passwordInput.getAttribute("type") === "password";

        passwordInput.setAttribute("type", isPassword ? "text" : "password");

        const icon = this.querySelector("i");
        if (isPassword) {
            icon.classList.remove("fa-regular", "fa-eye");
            icon.classList.add("fa-solid", "fa-eye-slash");
        } else {
            icon.classList.remove("fa-solid", "fa-eye-slash");
            icon.classList.add("fa-regular", "fa-eye");
        }
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = passwordInput.value;

        errorMessage.classList.add("hidden");

        if (password.length < 6) {
            errorText.textContent =
                "A senha precisa conter pelo menos 6 caracteres.";
            errorMessage.classList.remove("hidden");
            return;
        }

    );

        window.location.href = "dashboard.html";
    });
});
