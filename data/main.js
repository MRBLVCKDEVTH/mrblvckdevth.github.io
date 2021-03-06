const typed = new Typed('.typed', {
	strings: [
	'> Hola<br>> Este es un proyecto de Luis Enrique Perez Silva<br>> Por favor elige que proyecto ver ahora<br>> <a href=Practica_1/index.html>Practica 1</a><br>> <a href=Practica_2/index.html>Practica 2</a><br>> <a href=Practica_3/index.html>Practica 3</a><br>> <a href=Practica_4/index.html>Practica 4</a><br>'
	],
	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 15, // Velocidad en mlisegundos para poner una letra,
	startDelay: 3000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 15, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '...', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
