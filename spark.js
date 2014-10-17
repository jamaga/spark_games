var apicall = function(){
	TinderAjax.getJSON("http://ironhack-meet-me-api.herokuapp.com/locations.json", function(data) {
   	console.log(data);
	});
}

var ajaxbutton = document.getElementById("ajax");
ajaxbutton.addEventListener("click",apicall);












