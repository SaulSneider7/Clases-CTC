// incio Slider
let imagenes = [];
imagenes[0] = 'img/slider1.jpg';
imagenes[1] = 'img/slider2.png';
imagenes[2] = 'img/slider3.jpg';
imagenes[3] = 'img/slider4.webp';
imagenes[4] = 'img/slider5.jpg';

let indice = 0;

function cambiarImg() {
    document.slider.src=imagenes[indice];
    if (indice<4) {
        indice ++;
    } else {
        indice=0;
    }
}
cambiarImg();
setInterval(() => {
    cambiarImg();
}, 1000);
// fin Slider



