document.querySelector(".toggler").addEventListener("click", function () {
    document.getElementById("navBar").classList.toggle("nav-expanded");
});
document.addEventListener("DOMContentLoaded", () => {
    const skillContainer = document.querySelector("#skill-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                skillContainer.classList.add("skill-active"); // Add class when in view
            } else {
                skillContainer.classList.remove("skill-active"); // Remove class when out of view
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillContainer);
});
