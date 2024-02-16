function fuja(btn){
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10,90);
    btn.style.left = geraPosicao(10,90);
    console.log('ta vendo ai?')
}
function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}