$(function () {
  
  function initMap() {
    var location = new google.maps.LatLng(-37.7875247, 175.277075);
    
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: location,
      zoom: 16,
      panControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,//set to true to disable all map controls,
      scrollwheel: false//set to true to enable mouse scrolling while inside the map area
    };
    
    var map = new google.maps.Map(mapCanvas, mapOptions);
    
    
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
    
    var contentString = '<div class="info-window">' +
      '<h3>TheWebSiteCompany</h3>' +
      '<div class="info-content">' +
      '<p>109 Ward St, Hamilton 3240</p>' +
      '</div>' +
      '</div>';
    
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 400
    });
    
    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
  
    var styles = [{"featureType": "landscape",
      "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}];
    map.set('styles', styles);
  }
  
  google.maps.event.addDomListener(window, 'load', initMap);
});