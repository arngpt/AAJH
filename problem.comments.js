$(document).ready(function() {
	$(".viewComm").click(function() {
		var id = $(this).attr("data-viewComm");
		$(".commentBox").not("#commentBox" + id).slideUp("fast");
		$("#commentBox" + id).slideToggle();
	});
});