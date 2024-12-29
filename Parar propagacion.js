// Podemos detener el efecto de burbujeo 

document.querySelector('.svg-skill').addEventListener('click', evento => {
    console.log('click en imagen');
    evento.stopPropagation();
});

// const button = document.querySelector('#boton');
// button.addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('Botón presionado');
// });