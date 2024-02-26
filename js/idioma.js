/* const idiomas = {
    es: 'inicio.html',
    en: '../EN/home.html',
    eu: 'euskera.html',
    fr: 'francia.html'
  };
  
  const botonGlobo = document.querySelector('.globo-btn');
  const menuIdioma = document.querySelector('.menu-idioma');
  const listaIdiomas = document.querySelectorAll('.menu-idioma-lista a');
  
  function cambiarIdioma(idioma) {
    if (idioma !== obtenerIdiomaActual()) {
      const nuevaPagina = idiomas[idioma];
      if (nuevaPagina) {
        window.location.href = `../${idioma}/${nuevaPagina}`;
      }
    }
  }
  
  function obtenerIdiomaActual() {
    const urlActual = window.location.href;
    for (let idioma in idiomas) {
      if (urlActual.includes(idiomas[idioma])) {
        return idioma;
      }
    }
    return 'es'; // Valor predeterminado si no se encuentra el idioma actual
  }
  
  botonGlobo.addEventListener('click', function(event) {
    event.preventDefault();
    menuIdioma.classList.toggle('mostrar');
  });
  
  listaIdiomas.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
      event.preventDefault();
      const idioma = this.dataset.idioma;
      cambiarIdioma(idioma);
    });
  });
   */


/* Segunda iteración */

/*   document.addEventListener('click', function(event) {
    const menuIdioma = document.querySelector('.menu-idioma');
    const botonGlobo = document.querySelector('.globo-btn');
    const listaIdiomas = document.querySelectorAll('.menu-idioma-lista a');
  
    if (event.target === botonGlobo) {
      // Si se hace clic en el botón del globo, alternar la visibilidad del menú de idiomas
      menuIdioma.classList.toggle('mostrar');
    } else if (!menuIdioma.contains(event.target)) {
      // Si se hace clic fuera del menú de idiomas, cerrar el menú si está abierto
      menuIdioma.classList.remove('mostrar');
    }
  
    // Si se hace clic en un enlace de idioma, cambiar al idioma correspondiente
    if (event.target.dataset.idioma) {
      event.preventDefault();
      cambiarIdioma(event.target.dataset.idioma);
    }
  });
  
  function cambiarIdioma(idioma) {
    const idiomas = {
      es: '../index.html',
      en: '../EN/home.html',
      eu: 'euskera.html',
      fr: 'francia.html'
    };
  
    const nuevaPagina = idiomas[idioma];
    if (nuevaPagina) {
      window.location.href = `../${idioma}/${nuevaPagina}`;
    }
  }
   */

  /* segunda iteración */

  /* tercera iteración */

  const idiomas = {
    es: {
      nombre: 'Español',
      ruta: '',
      paginas: {
        inicio: 'index.html',
        contacto: 'contacto.html',
        tienda: 'tienda.html'
      }
    },
    en: {
      nombre: 'English',
      ruta: 'EN',
      paginas: {
        home: 'home.html',
        contact: 'contact.html',
        shop: 'shop.html'
      }
    },
    eu: {
      nombre: 'Euskara',
      ruta: 'EU',
      paginas: {
        hasiera: 'hasiera.html',
        kontaktua: 'kontaktua.html',
        dendak: 'dendak.html'
      }
    },
    fr: {
      nombre: 'Français',
      ruta: 'FR',
      paginas: {
        accueil: 'accueil.html',
        contact: 'contact.html',
        magasin: 'magasin.html'
      }
    }
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    const botonGlobo = document.querySelector('.globo-btn');
    const menuIdioma = document.querySelector('.menu-idioma');
  
    botonGlobo.addEventListener('click', function() {
      menuIdioma.classList.toggle('mostrar');
    });
  
    document.querySelectorAll('.menu-idioma-lista a').forEach(function(enlace) {
      enlace.addEventListener('click', function(event) {
        event.preventDefault();
        cambiarIdioma(enlace.dataset.idioma);
      });
    });
  });
  
  function cambiarIdioma(idioma) {
    const paginaActual = obtenerNombrePaginaActual();
    const nuevaPagina = idiomas[idioma].paginas[paginaActual] || 'index.html';
    const rutaIdioma = idiomas[idioma].ruta ? `${idiomas[idioma].ruta}/` : '';
  
    window.location.href = `${rutaIdioma}${nuevaPagina}`;
  }
  
  function obtenerNombrePaginaActual() {
    return location.pathname.split('/').pop().replace('.html', '') || 'inicio';
  }
  

  /* tercera iteración */