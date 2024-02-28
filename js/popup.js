/*esto es la animacion y funcionamiento del login -register*/
/*funcion para mover la animacion del formulario*/

document.getElementById("btn_iniciarSesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina); 
const contenedor_loginRegister = document.querySelector(".contenedor_loginRegister");
const formulario_login = document.querySelector(".formulario_login");
const formulario_register = document.querySelector(".formulario_register");
const caja_traseraLogin = document.querySelector(".caja_traseraLogin");
const caja_traseraRegister = document.querySelector(".caja_traseraRegister");

function anchoPagina(){
    if(window.innerWidth > 850) {
        caja_traseraLogin.style.display = "block";
        caja_traseraRegister.style.display = "block";
    } else {
        caja_traseraRegister.style.display = "block"
        caja_traseraRegister.style.opacity = "1";
        caja_traseraLogin.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_loginRegister.style.left = "0px";
    }
}

function iniciarSesion(){

    if(window.innerWidth > 850){
         
   
    formulario_register.style.display = "none";
    contenedor_loginRegister.style.left = "10px"
    formulario_login.style.display = "block";
    caja_traseraRegister.style.opacity = "1";
    caja_traseraLogin.style.opacity = "0";
    }else { 
        formulario_register.style.display = "none";
        contenedor_loginRegister.style.left = "0px"
        formulario_login.style.display = "block";
        caja_traseraRegister.style.display = "block";
        caja_traseraLogin.style.display = "none";

  }
}

function register(){

    if(window.innerWidth >850) { 
    formulario_register.style.display = "block";
    contenedor_loginRegister.style.left = "410px"
    formulario_login.style.display = "none";
    caja_traseraRegister.style.opacity = "0";
    caja_traseraLogin.style.opacity = "1";
   } else {
    formulario_register.style.display = "block";
    contenedor_loginRegister.style.left = "0px"
    formulario_login.style.display = "none";
    caja_traseraRegister.style.display = "none";
    caja_traseraLogin.style.display = "block";
    caja_traseraLogin.style.opacity = "1";
           

   }
}


/*a partir de aqui es el funcionamiento del registro y la autentificacion
lo anterior es solo animacion */
/////////////////**********trabajando con registro
const signupForm = document.querySelector(".formulario_register" )
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const usuario = document.querySelector('#usuario').value;
    const password = document.querySelector('#password').value;
    
    // Verificar si hay datos almacenados en localStorage
    const storedUsers = localStorage.getItem('users');
    const Users = storedUsers ? JSON.parse(storedUsers) : [];
    
    const isUserRegistered = Users.find(user => user.email === email || user.usuario === usuario);
    if(isUserRegistered){
        return alert('El usuario ya está registrado')
    }

    Users.push({name: name, email: email, usuario:usuario, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')

    //redirecionar (tengo que ponerla web nuestra)
    window.location.href = 'index.html'

 });

 //*************trabajando con login 
 const loginForm = document.querySelector('.formulario_login')
loginForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const email = document.querySelector('#emailLogin').value; 
    const password = document.querySelector('#passwordLogin').value;
   
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password); 
   
   if (!validUser){
        return alert('Usuario y/o contraseña incorrectos!');
    }

    if (validUser.email === 'admin@gmail.com') { // Cambiar 'admin@example.com' por el email del usuario especial
        alert('Bienvenido Administrador');
        window.location.href = 'admin.html'; // Redirigir a una página especial para el usuario admin
     } else {

      alert(`Bienvenido ${validUser.name}`);
      window.location.href = '../index.html'
     }
  
});



// Función para mostrar el popup
function mostrarPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
    }
    
    // Función para cerrar el popup
    function cerrarPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
    }