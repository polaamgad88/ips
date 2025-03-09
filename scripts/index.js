document.addEventListener("DOMContentLoaded", function () {
    let banner = document.querySelector(".banner");

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                banner.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(banner);
});



document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service-item");

    function revealOnScroll() {
        services.forEach(service => {
            const rect = service.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                service.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load in case items are already in view
});


document.addEventListener("DOMContentLoaded", function () {
    const divisions = document.querySelectorAll(".division-card");

    function revealOnScroll() {
        divisions.forEach(division => {
            const rect = division.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                division.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load in case items are already in view
});



function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("navMenu").classList.remove("active");
}


document.addEventListener("DOMContentLoaded", function () {
    const strategyText = document.querySelector(".strategy-text");

    function revealStrategyText() {
        if (!strategyText) return; // Avoid errors if element is missing
        const rect = strategyText.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            strategyText.classList.add("show");
            window.removeEventListener("scroll", revealStrategyText); // Stop checking after showing
        }
    }

    window.addEventListener("scroll", revealStrategyText);
    revealStrategyText(); // Check on page load in case it's already in view
});
