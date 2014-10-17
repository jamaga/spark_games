var datafromServer = {};
var locationHere = "";
var longitude;
var latitude;
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
v.querySelector("#notify").on('click', addressInfo);


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
	// myPosition.geolocate(function(coords){
		
		latitude = 41.39606733017981;
		longitude = 2.193755822002537;
		locationHere = "Latitude:" + latitude + " Longitude:"+ longitude;

	// });
  v.querySelector("#geolocate").after(" Success!!!!");
}

function addressInfo() {
	TinderAjax.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude , function(data) {
 	var addressDetails =  data.results[0].formatted_address; 
 	NotifyMyLocation(addressDetails);  
	})
}

function NotifyMyLocation (addressDetails) {
	var options = {
	       icon: "http://lorempixel.com/60/60",
	     	 body: addressDetails
	     }
	var notification = TinderNotification.getInstance();
	notification.notificate(locationHere, options);
	console.log("located!");
	v.querySelector("#notify").after(" Success!!!!");
}




