



// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Back to top button
let backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Animated counter for stats
function animateCounter() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200;

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = Math.min(count + increment, target);
      setTimeout(() => animateCounter(), 1);
    }
  });
}

// Initialize counter when stats section is in view
const statsSection = document.querySelector('.stats-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(statsSection);

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200; // lower = faster count

  const animateCounters = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const updateCount = () => {
          const target = +counter.getAttribute("data-count");
          const count = +counter.innerText;
          const increment = Math.ceil(target / speed);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
        counter.parentElement.classList.add("visible");
        observer.unobserve(counter); // animate once
      }
    });
  };

  const observer = new IntersectionObserver(animateCounters, {
    threshold: 0.5
  });

  counters.forEach(counter => {
    observer.observe(counter);
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");
  const duration = 2000; // total time in ms (2s)

  const animateCounters = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-count");
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1); // clamp 0 → 1
          counter.innerText = Math.floor(progress * target);

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            counter.innerText = target; // ensure final value
          }
        }

        requestAnimationFrame(update);
        counter.parentElement.classList.add("visible");
        observer.unobserve(counter); // animate only once
      }
    });
  };

  const observer = new IntersectionObserver(animateCounters, {
    threshold: 0.5
  });

  counters.forEach(counter => {
    observer.observe(counter);
  });
});





// About
