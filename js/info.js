
//esto es la animacion la imagen
const photoContainer = document.getElementById('photoContainer');
  const mainPhoto = document.getElementById('mainPhoto');


  const secondPhoto = document.createElement('img');
  secondPhoto.src = 'img/ibanez2.webp';
  secondPhoto.className = 'photo';
  secondPhoto.style.display = 'none'; 
  secondPhoto.style.width = '49rem';
  
  photoContainer.appendChild(secondPhoto);
  
 
  mainPhoto.addEventListener('mouseover', function() {
   
    mainPhoto.style.display = 'none';
   
    secondPhoto.style.display = 'inline-block';

  });
  
  
  secondPhoto.addEventListener('mouseout', function() {
   
    secondPhoto.style.display = 'none';
   
    mainPhoto.style.display = 'inline-block';
  });

  //a partir de aqui empieza el codigo de  informacion

 


  const productTitles = [
    "Product 1",
    "Product 2",
    "Product 3"
];


const tituloInstrumento = document.querySelector('.titulo-instrumento');


if (tituloInstrumento) {
    
    const randomIndex = Math.floor(Math.random() * productTitles.length);
    tituloInstrumento.textContent = productTitles[randomIndex];
} else {
    console.error("Element with class 'titulo-instrumento' not found.");
}
 
