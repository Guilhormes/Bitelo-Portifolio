//scroll reveal
ScrollReveal().reveal('.titulo-div', { 
    delay: 200,
    easing: 'ease',  
});

ScrollReveal().reveal('.about-foto', {
    delay: 250,
    origin: 'left', 
    distance: '50%',
    duration: 800, 
    easing: 'ease', 
});

ScrollReveal().reveal('.about-texto h4', {
    origin: 'top',
    distance: '20px',
    duration: 800,
    easing: 'ease',
    delay: 100 
});

ScrollReveal().reveal('.about-texto h1', {
    origin: 'top',
    distance: '20px',
    duration: 800,
    easing: 'ease',
    delay: 300 
});

ScrollReveal().reveal('.about-texto p', {
    origin: 'top',
    distance: '20px',
    duration: 800,
    easing: 'ease',
    delay: 500 
});

// Função para rolagem suave
function scrollToSection(id) {
    const section = document.querySelector(id);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Adicione um evento de clique para cada link do navbar
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Evite o comportamento padrão de clicar no link
        const targetId = this.getAttribute('href');
        scrollToSection(targetId);
    });
});

