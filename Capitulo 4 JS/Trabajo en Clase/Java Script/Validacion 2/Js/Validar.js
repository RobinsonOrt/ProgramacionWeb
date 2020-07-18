function validar() {
	var edad = document.getElementById("edad");
	//edad.setCustomValidity("Edad no valida3");
	console.log(edad);
	if(edad.checkValidity() == false){
		alert("Edad no Valida " + edad.validationMessage);
		return false;
	}
	else{
		//if(edad == ""){
		//	alert("Debes Digitar una edad " + edad.validationMessage);
		//	return false;
		//}
		//else{
			return true;
		//}
	}
}