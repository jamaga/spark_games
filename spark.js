var datafromServer = {};
var apicall = function(){
	TinderAjax.getJSON("http://ironhack-meet-me-api.herokuapp.com/locations.json", function(data) {
   	console.log(data);
   	v.querySelector("#ajax").after(" Success!!!!");
   	datafromServer = data;
	});
};

var v = new TinderQuery();
v.querySelector("#ajax").on('click', apicall);
v.querySelector("#save").on('click', saveDatainlocalStorage);
v.querySelector("#populate").on('click', populateList);
v.querySelector("#geolocate").on('click', geolocateMe);

function saveDatainlocalStorage() {
	var storage = TinderStorage.getInstance();
	for ( var i = 0; i < datafromServer.locations_list.length; i++ ){
  	storage.create( datafromServer.locations_list[i].name , datafromServer.locations_list[i]);
  }
  v.querySelector("#save").after(" Success!!!!");
}

function populateList(){
	for ( var i = 0; i < datafromServer.locations_list.length; i++ ){
		v.querySelector("ul").append("<li>" + datafromServer.locations_list[i].name + "</li>");
	}
  v.querySelector("#populate").after(" Success!!!!");
}

function geolocateMe() {
	var myPosition = new TinderGeolocation();
	myPosition.geolocate(function(coords){
		console.log(coords);
	});
  v.querySelector("#geolocate").after(" Success!!!!");
}
