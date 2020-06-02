function mostrar(index){
	if (index == 1){
	document.getElementById('Foto').src="Images/Foto1.jpg";
	}
	else{
	document.getElementById('Foto').src="Images/Foto2.jpg";
	}
}
function bordear(index){
	if (index == 1){
	document.getElementById('Foto').className = "estilo1";
	}
	else{
	document.getElementById('Foto').className = "estilo2";
	}
}