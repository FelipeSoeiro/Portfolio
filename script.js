var typed = new Typed(".mutiple-text", {
    strings: ["Web", "front-end","back-end"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// obtém todos os links na barra de navegação
const navLinks = document.querySelectorAll('.navbar a');

// adiciona um ouvinte de rolagem para a janela
window.addEventListener('scroll', () => {
  // percorre todos os links na barra de navegação
  navLinks.forEach(link => {
    // obtém o elemento correspondente ao link
    const section = document.querySelector(link.getAttribute('href'));
    
    // verifica se a seção está visível na janela
    if (isInViewport(section)) {
      // adiciona a classe "active" ao link correspondente
      link.classList.add('active');
    } else {
      // remove a classe "active" do link correspondente
      link.classList.remove('active');
    }
  });
});

// função que verifica se um elemento está visível na janela
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//Scroll reveal

ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});


ScrollReveal().reveal('.home-content', {origin: 'left'});
ScrollReveal().reveal('.home-img', {origin: 'right'});


ScrollReveal().reveal('.imagem_sobremim', {origin: 'left'});
ScrollReveal().reveal('.sobre_texto', {origin: 'right'});

ScrollReveal().reveal('.titulo-habilidades', {origin: 'top'});
ScrollReveal().reveal('.skill-wrapper', {origin: 'bottom'});





//document.querySelectorAll('.footer-iconTop').forEach(link => {
 // link.addEventListener('click', (e) => {
 //   e.preventDefault(); // impede o comportamento padrão do link
    
    // obtém o elemento correspondente ao link clicado
 //   const target = document.querySelector(link.getAttribute('href'));
    
//    // rola para o elemento correspondente
//    target.scrollIntoView({ behavior: 'smooth' });
//  })
//})



// Seção de link ativo de scroll 
//let sections = document.querySelectorAll('section');
//let navLinks= document.querySelectorAll('.navbar a');

//window.onscroll = () => {
  //sections.forEach(sec=> {
    //let top = window.scrollY;
    //let offset= sec.offsetTop - 150;
    //let height = sec.offsetHeight;
    //let id = sec.getAttribute ('id');

    //if (top >= offset && top < offset + height) {
        //navLinks.forEach(links => {
          //links.classList.remove('active');
          //document.querySelector('.navbar a[href*="' + id + '"]').classList.add('active');
        //});
    //};
  //});
//};

// adiciona um ouvinte de clique a cada link na barra de navegação
//navLinks.forEach(link => {
 // link.addEventListener('click', (e) => {
  //  e.preventDefault(); // impede o comportamento padrão do link
    
    // obtém o elemento correspondente ao link clicado
   // const target = document.querySelector(link.getAttribute('href'));
    
    // rola para o elemento correspondente com suavidade
   // target.scrollIntoView({ behavior: 'smooth' });
    
    // adiciona a classe "active" ao link correspondente
   // navLinks.forEach(otherLink => {
   //   otherLink.classList.remove('active');
   // });
   // link.classList.add('active');
 // });
//});

// obtém o link dentro do elemento .footer
//const scrollToTopLink = document.querySelector('.footer-iconTop a');

// adiciona um ouvinte de clique ao link
//scrollToTopLink.addEventListener('click', (e) => {
//  e.preventDefault(); // impede o comportamento padrão do link

  // rola para o topo da página com suavidade
//  window.scrollTo({
 //   top: 0,
 //   behavior: 'smooth'
 // });
//});