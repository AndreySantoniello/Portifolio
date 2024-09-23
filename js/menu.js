const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});


const closeMenu = () => {
    menu.classList.remove('abrir-menu');
};

menu.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);


const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
};

const links = [
    { id: 'inicio', section: 'inicioSecao' },
    { id: 'especialidades', section: 'especialidadesSecao' },
    { id: 'sobre', section: 'sobreSecao' },
    { id: 'projetos', section: 'portifolioSecao' },
    { id: 'contato', section: 'footerSecao' },
    { id: 'inicioM', section: 'inicioSecao' },
    { id: 'especialidadesM', section: 'especialidadesSecao' },
    { id: 'sobreM', section: 'sobreSecao' },
    { id: 'projetosM', section: 'portifolioSecao' },
    { id: 'contatoM', section: 'footerSecao' },
    { id: 'seta', section: 'inicioSecao'}
];

links.forEach(link => {
    document.getElementById(link.id).addEventListener('click', (event) => {
        scrollToSection(event, link.section);
    });
});