function showMessage(){
	alert("Hello World");
}

function cambiarContenido(){
	document.getElementById("message").innerHTML="Texto Nuevo";
}
function cambiarValor(){
	document.getElementById("nombre").value="Robinson";
}
function depurar(){
	console.log("Texto nuevo para la consola");
	console.log(document.getElementById("nombre").value);
}