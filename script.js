// Scroll Reveal Animation
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "all 1s ease";
    }
  });
});

// Initial hidden
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
});
