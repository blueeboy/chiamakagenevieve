// Toggle mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});


const sections = document.querySelectorAll('.animate-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // Remove so it can animate again
        }
    });
}, { threshold: 0.2 }); // Trigger when 20% visible

sections.forEach(section => observer.observe(section));


function filterStores(country) {
    // Hide all bookstores
    const allStores = document.querySelectorAll('.bookstore');
    allStores.forEach(store => store.classList.add('hidden'));

    // Show only selected country's bookstores
    const selectedStores = document.querySelectorAll('.' + country);
    selectedStores.forEach(store => store.classList.remove('hidden'));

    // Update active button
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}