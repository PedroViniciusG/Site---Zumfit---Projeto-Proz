document.addEventListener("DOMContentLoaded", function () {

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            if (this.getAttribute("href") === "#") {
                menuItems.forEach((i) => i.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });
});
