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


document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".strategy-text");
    const text = textElement.innerHTML.trim(); // Preserve existing text
    textElement.innerHTML = ""; // Clear text before animation
    let index = 0;

    function typeText() {
        if (index < text.length) {
            // Preserve new lines and spaces properly
            let currentText = text.substring(0, index + 1);
            textElement.innerHTML = currentText.replace(/\n/g, "<br>") + "<span class='cursor'>|</span>";
            index++;
            setTimeout(typeText, 100); // Adjust typing speed
        } else {
            document.querySelector(".cursor").remove(); // Remove cursor when done
        }
    }

    function checkVisibility() {
        const rect = textElement.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            window.removeEventListener("scroll", checkVisibility);
            typeText();
        }
    }

    window.addEventListener("scroll", checkVisibility);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent instant jump
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("navMenu").classList.remove("active");
}
