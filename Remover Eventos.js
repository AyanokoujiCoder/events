function agrandar() {
    document.querySelector('.svg-skill').style.transform = 'scale(2)';
}

document.querySelector('.svg-skill').addEventListener('click', agrandar);

document.querySelector('.svg-skill').removeEventListener('click', agrandar);