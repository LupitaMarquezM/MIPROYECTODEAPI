//listado de paises
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];


//Se agrega un nuevo pais despues de 2 segundos
function nuevoPais(pais, callback) {
    setTimeout(function() {
        paises.push(pais);
        callback();
  }, 2000);
}

//los paises se muestran despues de 1 segundo
function mostrarPaises(){
    setTimeout(function(){
        let html = '';
        paises.forEach(function(pais) {
            html += `<li>${pais}</l>`;
        });
        document.getElementById('app').innerHTML = html;

    }, 1000);
}

//Agregar nuevo pais
nuevoPais('Alemania', mostrarPaises);

//Mostar los Paises
mostrarPaises();