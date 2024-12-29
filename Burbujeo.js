document.querySelector('.svg-skill').addEventListener('click', () => {
    console.log('click en imagen')
});

document.querySelector('body').addEventListener('click', () => {
    console.log('click en body')
});

document.addEventListener('click', () => {
    console.log('click en documento')
});

// Aqui podemos ver el efecto de Burbujeo

// Click en imagen
// Click en body
// Click en documento

// Crea un programa que imprima primero el evento 'event' del elemento padre 
// con id 'padre' al hacer clic en un elemento hijo y después imprime el evento 
// 'event' del elemento hijo con id 'hijo' esto en la fase de captura.

function configurarEvento() {
	const elementoPadre = document.getElementById('padre');
    const elementoHijo = document.getElementById('hijo');

    elementoPadre.addEventListener('click', (event) => {
        console.log(event);
    }, true);
    
    elementoHijo.addEventListener('click', (event) => {
        console.log(event);
    }, true);
}