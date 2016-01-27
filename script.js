$(document).ready(function(){

	// $('span').on('click', function(){
	// 	alert('clicked!');
	// });

	// Put something on list
	$('#name-form').on('submit', function(e){
		e.preventDefault();
		var $name = $('#name-form input').val();
		console.log($name);

		$('ol').append('<li id="item">' + $name + ' <span id="delete">&#9986;</span>  </li>').sortable();
	});

	// Clear input
	$('ol').on("click", "li #delete" , function(event){
		event.preventDefault;
		$(this).parent().remove();
	});

});