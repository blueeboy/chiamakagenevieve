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


   // FAQ Toggle (Expand/Collapse)
   document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // Filter Buttons
  const filterButtons = document.querySelectorAll('.faq-filters button');
  const faqItems = document.querySelectorAll('.faq-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.getAttribute('data-category');

      faqItems.forEach(item => {
        if (category === "all" || item.getAttribute('data-category') === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });


  (function(){
    emailjs.init("DRH0ApN0wz2FZGg24"); // Replace with your EmailJS public key
  })();
  
  document.getElementById("newsletter-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Send to you (admin)
    emailjs.sendForm("service_vl8s3jh", "template_1h9qssj", this, "DRH0ApN0wz2FZGg24")
      .then(() => {
        document.getElementById("status-message").textContent = "✅ Subscription successful!";
        document.getElementById("newsletter-form").reset();
      }, (err) => {
        document.getElementById("status-message").textContent = "❌ Something went wrong. Try again.";
        console.error("EmailJS error:", error);
      });
  
    // Send auto-reply to user
    emailjs.sendForm("service_vl8s3jh", "template_x7ggsfd", this, "DRH0ApN0wz2FZGg24")
      .then(() => {
        console.log("Auto-reply sent to user!");
      }, (err) => {
        console.error("Auto-reply error:", err);
      });
  });
  