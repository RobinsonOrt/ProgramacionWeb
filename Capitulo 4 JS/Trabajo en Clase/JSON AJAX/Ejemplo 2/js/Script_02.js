function mostrar() {
	var items = "";
	for (var i=0; i<productos.length; i++){
	var item =	'<div class="media">';
		item += '<img src="' + productos[i].foto + '" class="align-self-start mr-3" alt="...">';
		item += '<div class="media-body">';
		item += '<h5 class="mt-0">' + productos[i].nombre + '</h5>';
		item += '<p>' + productos[i].descripcion + '</p>';
		item += '</div>';
		item += '</div>';

		items += item;
	}

	document.getElementById("Div_Productos").innerHTML = items;
}    	  	