
    var socket = io();

    socket.on('connect', function () {

        console.log('Conectado al servidor');
    });
    // Los on son para escuchar informacion
    socket.on('disconnect', function(){

        console.log('Perdimos conexion con el servidor')

    });

    // Los emit son para enviar informacion
    socket.emit('enviarMensaje', {
        usuario: 'Fernando',
        mensaje: 'Hola Mundo'
    }, function (resp){
        console.log('respuesta server: ', resp);
    });

    // Escuchar informacion
    socket.on('enviarMensaje', function(mensaje){
       
        console.log('Servidor: ', mensaje);
    })


