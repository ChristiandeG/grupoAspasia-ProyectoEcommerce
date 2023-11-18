    //Se crea una "bandera" para que la ventana solo se abra 1 vez
    var bandera = false;
    // Se hace una escucha de la ventana tipo scroll
    window.addEventListener('scroll', function(e) {
    //Se obtiene la posicion de desplazamiento
    var y = window.scrollY;
    //Se guarda esa posicion en la consola
    console.log(y);
    //Se mete en el if cuando scrolleas
    if (y > 1350 && !bandera) {
        setTimeout(function() {
        // Abre una nueva ventana de dimension determinada. Si se cumple
        var popup = window.open("Enlaces/contacto.html", "Popup", "width=500,height=527");
        // Se desplaza hasta el sitio indicado
        popup.moveTo(650, 300);

        // Tiempo que tarda en abrirse y en cerrarse
        setTimeout(function() {
            popup.close();
        }, 500000);
    }, 1000);
    //Cambiamos el estado de la bandera para que la ventan solo se abra 1 vez
    bandera = true;
    } 
    });