// Ahora vamos a ver como podemos responder a estos eventos, veamos esto con un ejemplo 

document.addEventListener('click',()=>{
    console.log('recibi un click');
});

// Este metodo sirve para escuchar eventos y puede resivir tres argumentos 

document.querySelector('.svg-skill').addEventListener('click', ()=>{
    document.querySelector('.svg-skill').style.transform = 'scale(2)';
});

// Si damos un click a la imagen svg hemos incrementado el tamaño de ese elemento y
// haci le puedes dar interactividad a tu página web