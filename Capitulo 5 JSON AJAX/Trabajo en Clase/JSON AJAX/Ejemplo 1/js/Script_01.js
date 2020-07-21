function get_productos_json() {
	var url = "https://raw.githubusercontent.com/RobinsonOrt/ProgramacionWeb/master/Capitulo%205%20JSON%20AJAX/Trabajo%20en%20Clase/Archivos%20Json/Productos.json";
  	
  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    	  	console.log(this.responseText);

    	  	var respuesta = this.responseText;
    	  	var data_json = JSON.parse(respuesta);
    	  	var productos = data_json.productos;

    	  	console.log(productos);

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
  	};
  	xhttp.open("GET", url, true);
  	xhttp.send();
}