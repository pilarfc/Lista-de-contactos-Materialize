
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


/*var crearTarjetas = function () {
    
     Creando tarjetas de contacto     
    
    var tarjetaDeContacto = $('<div/>', {
        
        'id'    : 'tarjetaCompleta'
    });
    
    
}*/


var plantillaTarjeta = '<div class="col s12 m7" id="tarjetaCompleta">' +
            '<div class="card horizontal" id="tarjetaCompleta">'+
              '<div class="card-image">'+
                '<img src="assets/img/flowers.jpg">'+
              '</div>' +
              '<div class="card-stacked">'+
                '<div class="card-content" id="texto-contacto">' +
                  '<p class="texto-tarjeta-nombre"> </p>'+
                  '<p class="texto-tarjeta-telefono"><i class="material-icons">perm_identity</i> <p>__nombre__</p> </p>' +
                  '<p class="texto-tarjeta-telefono"><i class="material-icons">phone</i> __telefono__ </p>'+
                '</div>'+
              '</div>'+
            '</div>' +
          '</div>'+
    

