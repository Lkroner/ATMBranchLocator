// TODO: Housekeeping: Break these spaces into different files.

// =============================================== 
//                Namespacing
// =============================================== 
// Create namespace for app.
Locator={};

// =============================================== 
//                Initialize App
// =============================================== 

// Initialize app
window.onload = function() {
	var views = new Locator.Views()
	var controller = new Locator.Controller(views)

	controller.initialize(views)
};


// =============================================== 
//                 MAP Views
// =============================================== 

// Create Views
Locator.Views = function() {
	this.renderGoogleMap = function(mapOptions) {
		return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}
}

// =============================================== 
//                 MAP Controller
// =============================================== 
// Create Controller
Locator.Controller = function(views) {

	this.views = views

	// Initialize map
	this.initialize = function() {
		var map = this.map()
		// TODO: Activate when styles have map styles have been implemented.
		// map.setOptions({styles: this.mapStyle()})
		this.findBranches()
	};

	// Render map view.
	this.map = function() {
		return this.views.renderGoogleMap(this.mapOptions())
	};

	// Collect map options into a returnable object
	this.mapOptions = function(zoom, center) {
		var sf = new google.maps.LatLng(37.77,-122.42)
		var zoom = zoom || 14
		var center = center || sf

		return {
			zoom: zoom,
			center: center
		}
	};

	// TODO: Add map styles.
	this.mapStyle = function() {
		return []
	};

	this.geolocation = function() {
		var coords = []
		var x = document.getElementById("geolocation");

		function getLocation() {
			if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(showPosition);
			} else {
					x.innerHTML = "Geolocation is not supported by this browser.";
			}
		}
		function showPosition(position) {
			coords.push(position.coords.latitude);
			coords.push(position.coords.longitude);
		}
		return coords
	};
	// Find branch from given location, creates markers/info windows.
	// TODO: Separate concerns, way too much happening in this one method.
	this.findBranches = function() {
		markers = [];
		var map = this.map();

		// TODO: Activate when styles have map styles have been implemented.
		// map.setOptions({styles: this.mapStyle()});

		$.getJSON('data/branches.json', function(branches) {
			for (var i = 0; i < branches.locations.length; i++) {

				// Set branch
				var branch = branches.locations[i];

				// Branch detail pop-up content.
				var contentString = '<div id="content">'+
				'<div id="siteNotice">'+'</div>'+
				'<h1 id="firstHeading" class="firstHeading">Branch Info</h1>'+
				'<div id="bodyContent">'+
				'<p> <b>Branch </b>: ' + branch.label + '</p>' +
				'<p> <b>Location Type </b>: ' + branch.locType + '</p>' +
				'<p> <b>Address </b>: ' + branch.address + '</p>' +
				'<p> <b>City </b>: ' + branch.city + ', ' + branch.state + ' ' + branch.zip + '</p>' +
				'<p> <b>Atms </b>: ' + branch.atms + '</p>' +
				'<p> <b>Phone </b>: ' + branch.phone + '</p>' +
				'</div>'+
				'</div>';

				// Instantiate detail pop up.
				var myInfowindow = new google.maps.InfoWindow({
					content: contentString
				});

				//
				var latlng = new google.maps.LatLng(branch.lat, branch.lng);

				// Create marker, add infowindow property
				var marker = new google.maps.Marker({
					map: map,
					position: latlng,
					icon: '../images/chase_logo_small.png',
					title: branch.label,
					infowindow: myInfowindow
				});

				// Add click event to marker.
				google.maps.event.addListener(marker, 'click', function() {
					this.infowindow.open(map,this);
				});
				// Push all markers into markers array to be displayed.
				markers.push(marker);
				}
		});
	}
}
