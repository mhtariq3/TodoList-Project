// Check off todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("finished");
});

// Remove todos by clicking X
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Add new todo when enter is pressed
$("input").on("keypress", function(event) {
	if(event.which === 13) {
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
});

// Toggle the input
$("#plus").on("click", function() {
	$("input").fadeToggle();
});