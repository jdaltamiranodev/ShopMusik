
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

 


  
 
