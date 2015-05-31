var main = function() {

$('.questionLeadin').click(function(){
	// remove the Qcurrent class from other active classes to hide these and only display the question you're working on
	// $('.questionLeadin').removeClass('Qcurrent');
	// $('questions').removeClass('Qscurrent');
	
	// add current classes to the element clicked on - the question lead in - and the next element, the question & answer bundling in ".questions" div class - which will show them
	$(this).addClass('Qcurrent');
	$(this).next('.questions').addClass('Qscurrent');

	// from there - if you click on the right answer, alert that they got it right and move on to next question - if not, confirm as to whether the person wants to move on bc they go it wrong
	$('.answers').click(function() {
		if($(this).hasClass('right')) {
			// alert("great- you're totally crushing it");
			var L1 = $(this).parentsUntil('.questions');
			L1.next('.questionsLeadin').addClass('Qcurrent');
		} else {
			confirm("umm.. not going so well so far - you sure you want to continue with this?");
			$(this).parentsUntil('.questions').next('.questionsLeadin').addClass('Qcurrent');
		}
	});
});




}

$(document).ready(main);