var apicall = function(){
	TinderAjax.getJSON("http://ironhack-meet-me-api.herokuapp.com/locations.json", function(data) {
   	console.log(data);
	});
}

var v = new TinderQuery();
v.querySelector("#ajax").on('click', apicall);
