var homeroCerveza = Titanium.Media.createSound({
	url : "http://www.sonidosmp3gratis.com/sounds/homero22.mp3",
	preload : true 
});

var homeroLisa = Titanium.Media.createSound({
	url : "http://www.sonidosmp3gratis.com/sounds/homero16.mp3",
	preload : true 
});

var risaMala = Titanium.Media.createSound({
	url : "http://www.sonidosmp3gratis.com/sounds/008621579_prev.mp3",
	preload : true 
});

var grito = Titanium.Media.createSound({
	url : "http://www.sonidosmp3gratis.com/sounds/009269148_prev.mp3",
	preload : true 
});

var asiNoMasPo = Titanium.Media.createSound({
	url : "http://paginasprueba.netau.net/sites/Asi+nomas+po+Ruperto.mp3",
	preload : true 
});

var estupido = Titanium.Media.createSound({
	url : "http://paginasprueba.netau.net/sites/Estupido+Rupertina.mp3",
	preload : true 
});

var ahha = Titanium.Media.createSound({
	url : "http://paginasprueba.netau.net/sites/AHAA.mp3",
	preload : true 
});

function doClickAh(e) {
    ahha.play();
}

function doClickEstupido(e) {
    estupido.play();
}

function doClickAsiNoMasPo(e) {
    asiNoMasPo.play();
}

function doClickHomeroCerveza(e) {
    homeroCerveza.play();
}

function doClickHomeroLisa(e) {
    homeroLisa.play();
}

function doClickRisaMala(e) {
    risaMala.play();
}

function doClickGrito(e) {
    grito.play();
}

$.index.open();
