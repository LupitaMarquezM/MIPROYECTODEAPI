document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos(){
    //crear el objeto xmlhttRequest
    const xhr = new XMLHttpRequest();

    // Abrir una conexion 
    xhr.open('GET', 'datos.txt', true);

   
    xhr.onreadystatechange = function() {

        console.log(`Estado ${this.readyState}`);

        //200:correcto | 403:prohibido | 404:no encontrado
        if(this.readyState === 4 && this.status === 200) {
            // console.log(this.responseText);
        }

    }
    // ready status
    /*
   0 - No inicializado
   1.-Conexion establecida
   2.-Recibido
   3: Procesando
   4: Respuesta lista
   */


    //enviar el request
    xhr.send();

}