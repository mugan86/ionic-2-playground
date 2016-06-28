import {Page, Platform} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/mapPage/mapPage.html',
})

export class MapPage {
	
	constructor(platform: Platform) {
		this.platform = platform;

		this.initializeMap();    
		this.loadMap();
	}

	initializeMap() {

		this.platform.ready().then(() => {
		    var minZoomLevel = 12;

		    this.map = new google.maps.Map(document.getElementById('map_canvas'), {
		        zoom: minZoomLevel,
		        center: new google.maps.LatLng(38.50, -90.50),
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		    });
		});
	} 


	loadMap() //With geolocation info. Required: ionic plugin add cordova-plugin-geolocation
	{
		let options = {timeout: 10000, enableHighAccuracy: true};
 
		navigator.geolocation.getCurrentPosition(

		  	(position) => {
	      		let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

		      	let mapOptions = {
			          center: latLng,
			          zoom: 15,
			          mapTypeId: google.maps.MapTypeId.ROADMAP
	      		}

		      	let myLocation = new google.maps.Marker({
	                position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
		                map: this.map,
		                animation: google.maps.Animation.DROP,
		                title: "My Location"
	            });

	      		let content = '<h4><a href="https://twitter.com/mugan86">My Location!</a></h4>' + myLocation.position;          
	 
				this.addInfoWindow(myLocation, content);

				//Load map with map options
				
				this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

				//Add default marker with our location
				
				myLocation.setMap(this.map);

			},

			(error) => {
			  console.log(error);
			}, options);

	}

	addMarker(){
 
	  let marker = new google.maps.Marker({
	    map: this.map,
	    animation: google.maps.Animation.DROP,
	    position: this.map.getCenter()
	  });
	 
	  let content = '<h4><a href="http://codesyntax.com">Information!</a></h4>' + marker.position;          
	 
	  this.addInfoWindow(marker, content);
	 
	} 

	addMarkers(){

		let lats = [43.17435195, 43.18461688, 43.19009317, 43.18887015, 43.2052032];
		let lngs = [-2.44430863, -2.45711319, -2.44808768, -2.47486081, -2.47535927];
		
		for (var j = 0; j < 5; j++)
		{
			let marker = new google.maps.Marker({
			    map: this.map,
			    animation: google.maps.Animation.DROP,
			    position: new google.maps.LatLng(lats[j], lngs[j])
			  });
			 
			  let content = '<h4><a href="http://codesyntax.com">Information!</a></h4>' + marker.position;          
			 
			  this.addInfoWindow(marker, content);
		}
 
	  
	 
	} 

	addInfoWindow(marker, content){
 
	  let infoWindow = new google.maps.InfoWindow({
	    content: content
	  });
	 
	  google.maps.event.addListener(marker, 'click', function(){
	    infoWindow.open(this.map, marker);
	  });
	 
	}
}
