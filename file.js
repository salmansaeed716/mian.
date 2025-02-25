document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Offset for navbar
                    behavior: "smooth"
                });
            }
        });
    });

    // Product Dropdown Menu (Our Products Page)
    const dropdownTrigger = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-content");

    if (dropdownTrigger && dropdownMenu) {
        dropdownTrigger.addEventListener("click", function (event) {
            event.stopPropagation();
            dropdownMenu.classList.toggle("show");
        });

        document.addEventListener("click", function (event) {
            if (!dropdownMenu.contains(event.target) && !dropdownTrigger.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    }

    // Scroll Animations
    const elements = document.querySelectorAll(".animate-on-scroll");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check on load
});