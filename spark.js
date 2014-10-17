var datafromServer = {};
var apicall = function(){
	TinderAjax.getJSON("http://ironhack-meet-me-api.herokuapp.com/locations.json", function(data) {
   	console.log(data);
   	datafromServer = data;
	});
};

var v = new TinderQuery();
v.querySelector("#ajax").on('click', apicall);
v.querySelector("#save").on('click', saveDatainlocalStorage);

function saveDatainlocalStorage() {
	var storage = TinderStorage.getInstance();
	for ( var i = 0; i < datafromServer.locations_list.length; i++ ){
  	storage.create( datafromServer.locations_list[i].name , datafromServer.locations_list[i]);
  }
}
