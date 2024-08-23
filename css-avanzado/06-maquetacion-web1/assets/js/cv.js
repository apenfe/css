document.addEventListener("DOMContentLoaded", (e) => { 
 
    // JavaScript para manejar la descarga del CV
    const btn = document.getElementById('btn-cv');
    
    btn.addEventListener('click', function() {        

        // Establecer el atributo download para que se descargue el archivo
        btn.download = './assets/documents/adrian-peñalver-fernandez-cv.pdf';

    });

});