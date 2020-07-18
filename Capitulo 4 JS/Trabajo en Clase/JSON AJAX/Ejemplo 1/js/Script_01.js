function get_productos(){
	var items = " ";
	for (var i=1; i<=3; i++){
		var item =	 '	<div class="media">';
			item += '  	<img src="Images/Prod_0' + i + '.png" class="align-self-start mr-3" alt="...">';
			item += '  	<div class="media-body">';
			item += '	    	<h5 class="mt-0">Producto ' + i + '</h5>';
			item += '	    	<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>';
			item += '	    	<p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>';
			item += '  	</div>';
			item += '	</div>';

			items += item;
	}
	document.getElementById("Div_Productos").innerHTML = items;

}