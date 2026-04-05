document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav-menu');
  
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
});
