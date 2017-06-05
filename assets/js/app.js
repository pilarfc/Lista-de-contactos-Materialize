
// Función para el modal
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

 
//Funcion para el navbar 

$(".button-collapse").sideNav();


// Función para imprimir 

var Obtenercontacto = function ($nombre, $telefono) {
    
    var $inputNombre = $(".textoNombre");
    var $nombre = $inputNombre.val(); 
    var $inputTelefono = $(".textoTelefono"); 
    var $telefono = $inputTelefono.val();
    
    this.$nombre = $inputNombre.val(); 
    this.$telefono = $inputTelefono.val(); 
    
}


var crearTarjetas = function () {
    
    // Creando tarjetas de contacto     
    
    var tarjetaDeContacto = $('<div/>', {
        
        'id'    : 'tarjetaCompleta'
    });
    
}
