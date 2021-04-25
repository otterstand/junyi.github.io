// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {

    var latlng = new google.maps.LatLng(25.040861111111113, 121.5625);
    var latlng2 = new google.maps.LatLng(31.242738, 121.44233499999996);

    var myOptions = {
        zoom: 16,
        zoomControl: false,
        scaleControl: false,
        disableDoubleClickZoom: true,
        disableDefaultUI: true, //disableDefaultUI(是否關閉所有地圖物件)
        scrollwheel: false, //scrollwheel(是否允許使用者使用滑鼠滾輪縮放地圖)
        mapTypeControl: false, //mapTypeControl(是否開啟地圖類型控制項)
        center: latlng,

        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": -60
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": "-100"
            }, {
                "lightness": "30"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "gamma": "0.00"
            }, {
                "lightness": "74"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "lightness": "3"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "stylers": [{
                "saturation": -100,
                "lightness": -15
            }]
        }]
    };

    var myOptions2 = {
        zoom: 16,
        zoomControl: false,
        scaleControl: false,
        disableDoubleClickZoom: true,
        disableDefaultUI: true, //disableDefaultUI(是否關閉所有地圖物件)
        scrollwheel: false, //scrollwheel(是否允許使用者使用滑鼠滾輪縮放地圖)
        mapTypeControl: false, //mapTypeControl(是否開啟地圖類型控制項)
        center: latlng2,

        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": -60
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": "-100"
            }, {
                "lightness": "30"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "gamma": "0.00"
            }, {
                "lightness": "74"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "lightness": "3"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "stylers": [{
                "saturation": -100,
                "lightness": -15
            }]
        }]
    };


    var map = new google.maps.Map(document.getElementById("map1"), myOptions);
    var map2 = new google.maps.Map(document.getElementById("map2"), myOptions2);

    var iconBase = 'images/';
    var myMarker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: iconBase + 'marker.png',
        title: 'Elite Branding Design - Taipei',
        animation: google.maps.Animation.DROP
    });

    var myMarker2 = new google.maps.Marker({
        position: latlng2,
        map: map2,
        icon: iconBase + 'marker.png',
        title: 'Elite Branding Design - Shanghai',
        animation: google.maps.Animation.DROP
    });



}