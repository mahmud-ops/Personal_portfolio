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

//slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: { delay: 1000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});