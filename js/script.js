

//script para la fecha
 const $fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth(),
    anio = f.getFullYear(),
    diaSemana = f.getDay();
    
    dia = ('0' + dia).slice(-2);

    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Sábado'];
    let showSemana = (semana[diaSemana]);

    let mesAnio = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    let showMes = (mesAnio[mes]);

    document.querySelector('.fecha').innerHTML = `${showSemana} ${dia} de ${showMes} de ${anio}`
}  

setInterval(digitalClock, 1000);