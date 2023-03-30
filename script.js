var typed = new Typed(".mutiple-text", {
    strings: ["Web", "front-end","back-end"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // impede o comportamento padrão do link
    
    // obtém o elemento correspondente ao link clicado
    const target = document.querySelector(link.getAttribute('href'));
    
    // rola para o elemento correspondente
    target.scrollIntoView({ behavior: 'smooth' });
    
    // adiciona a classe active no link clicado e remove a classe active dos outros links
    document.querySelectorAll('.navbar a').forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
      }
    });
    link.classList.add('active');
  });
});



