document.addEventListener('DOMContentLoaded', () => {
  // Implementación de smooth scrolling para los enlaces de la barra de navegación
  const links = document.querySelectorAll('.spine-links a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Obtenemos la posición de la sección, ajustando por la altura de la barra de navegación fija
        const spineHeight = document.querySelector('.spine').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - spineHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
