const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.querySelector('#contact-form');

// Mobile menu toggle
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after click
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
});

// Contact form handling
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.querySelector('[name="name"]').value.trim();
    const email = contactForm.querySelector('[name="email"]').value.trim();
    const message = contactForm.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      alert('Please complete all fields before sending your message.');
      return;
    }

    alert('Thank you, ' + name + '! This is a static site prototype. Connect a backend or form provider to enable message delivery.');
    contactForm.reset();
  });
}

// Typing effect for hero h1
const heroH1 = document.querySelector('.hero-content h1');
if (heroH1) {
  const text = heroH1.textContent;
  heroH1.textContent = '';
  heroH1.style.borderRight = '2px solid #00d4ff';
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroH1.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      heroH1.style.borderRight = 'none';
    }
  };
  typeWriter();
}

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-fill');
// Animate skill bars on scroll
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetWidth = entry.target.getAttribute('data-target-width');
      if (targetWidth) entry.target.style.width = targetWidth;
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  // Save the intended width from the inline style
  const width = bar.style.width || bar.getAttribute('style')?.match(/width:\s*([^;]+)/)?.[1];
  bar.setAttribute('data-target-width', width || '0%');
  // Start from 0, then animate to target
  bar.style.width = '0%';
  skillObserver.observe(bar);
});


// Fade-in animation for sections on scroll
const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => sectionObserver.observe(section));
