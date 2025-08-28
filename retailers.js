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

(function(){
    emailjs.init("DRH0ApN0wz2FZGg24"); // Replace with your EmailJS public key
  })();

  document.getElementById("newsletter-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_vl8s3jh", "template_1h9qssj", this)
      .then(function() {
        document.getElementById("status-message").textContent = "✅ Subscription successful!";
        document.getElementById("newsletter-form").reset();
      }, function(error) {
        document.getElementById("status-message").textContent = "❌ Something went wrong. Try again.";
        console.error("EmailJS error:", error);
      });
  });