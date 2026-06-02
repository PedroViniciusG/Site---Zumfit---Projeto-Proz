document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("togglePassword");
    const errorMessage = document.getElementById("errorMessage");
    const errorText = document.getElementById("errorText");

    // Alternar visibilidade da senha
    togglePasswordBtn.addEventListener("click", function () {
        const isPassword = passwordInput.getAttribute("type") === "password";
        passwordInput.setAttribute("type", isPassword ? "text" : "password");

        const icon = this.querySelector("i") || this;
        
        if (isPassword) {
            icon.classList.remove("fa-regular", "fa-eye");
            icon.classList.add("fa-solid", "fa-eye-slash");
        } else {
            icon.classList.remove("fa-solid", "fa-eye-slash");
            icon.classList.add("fa-regular", "fa-eye");
        }
    });

    // Validação e envio do formulário
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = passwordInput.value;

        errorMessage.classList.add("hidden");

        if (email === "") {
            errorText.textContent = "Por favor, insira o seu e-mail.";
            errorMessage.classList.remove("hidden");
            return;
        }

        if (password.length < 6) {
            errorText.textContent = "A senha precisa conter pelo menos 6 caracteres.";
            errorMessage.classList.remove("hidden");
            return;
        }

        // Redirecionamento correto dentro do evento de submit
        window.location.href = "dashboard.html";    
    });
});
