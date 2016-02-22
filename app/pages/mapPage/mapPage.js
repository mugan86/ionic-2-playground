import {Page, Platform} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/mapPage/mapPage.html',
})

export class MapPage {
	
	constructor(platform: Platform) {
		this.platform = platform;

		//this.initializeMap();    
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

		      this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		  },

		  (error) => {
		      console.log(error);
		  }, options

		);

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

	addInfoWindow(marker, content){
 
	  let infoWindow = new google.maps.InfoWindow({
	    content: content
	  });
	 
	  google.maps.event.addListener(marker, 'click', function(){
	    infoWindow.open(this.map, marker);
	  });
	 
	}
}
