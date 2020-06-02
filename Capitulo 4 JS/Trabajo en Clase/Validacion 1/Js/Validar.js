function validar() {
	var edad=document.getElementById('edad').value;
	console.log("edad");
	if(edad < 0 || edad > 120){
		alert("Edad no Valida");
		return false;
	}
	else{
		if(edad == ""){
			alert("Digite un valor para edad");
			return false;
		}
		else{
			return true;
		}
	}
}