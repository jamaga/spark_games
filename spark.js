var apicall = function(){
	TinderAjax.getJSON("http://ironhack-meet-me-api.herokuapp.com/locations.json", function(data) {
   	console.log(data);
	});
}

var v = new TinderQuery();
v.querySelector("#ajax").on('click', apicall);

// var storage = TinderStorage.getInstance();
// 	 storage.create("location1", { address: "Main Street" });
//    storage.read("location1");
//    storage.update("location1", { address: "Secondary Street" });
//    storage.destroy("location1");










