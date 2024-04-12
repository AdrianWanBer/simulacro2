
var contraseña;
var contadorFalladas = 0;
var contadorAciertos = 0;

function crearContraseña() {
	contraseña = prompt("Digame la contraseña", 0);
	alert("Contraseña creada con exito");
}

function probarContraseña() {
	if (prompt("Digame la contraseña") == contraseña) {
		alert("HAS ACERTADO");
		contadorFalladas = 0;
		contadorAciertos++;
	} else {
		contadorFalladas++;
	}

	if (contadorFalladas >= 3) {
		alert();
	}
	var falladas = document.getElementById("falladas");
	falladas.innerHTML = "Falladas: " + contadorFalladas;
	var falladas = document.getElementById("acertadas");
	falladas.innerHTML = "Acertadas: " + contadorAciertos;
	
	setTimeout(contadorFalladas = 0 ,900000);
}
