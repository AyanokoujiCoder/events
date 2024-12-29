// Los eventos son como anuncios que suceden en tu documento, esto puede suceder 
// cuando presionas un boton y hay muchas formas de crear estos tipos de eventos.

// Cuando estoy moviendo el maouse muchos eventos estan sucediendo detras de escenas 
// que no se pueden ver evidentemente, cuando hago un click lo mismo sucede cuando presiono 
// teclas, cuando hago scroll en una pagina cuando bajo y subo hay eventos que sucueden.

// ¿Donde estan esos eventos y porque no los podemos ver?
// Los eventos estan escondidos pero hay forma de verlos.

monitorEvents(document)

// Trata de monitorear los eventos que suceden, registra cuando movemos el puntero del Mouse 
// como tambien el evento de click y tambien si presionamos la tecla espaciadora para scrollear 

// Y para parar los eventos usamos esto:

unmonitorEvents(document)