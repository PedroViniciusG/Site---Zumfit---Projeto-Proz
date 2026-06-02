document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".nav-links a");

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                    });
                }
            }
        });
    });
});
