(function(annyang) {
    'use strict';

    function MapService() {
        var service = {};
        service.center = "Anyang, Korea"; //default map locaiton
        service.zoom = 14; //default zoom is 14

        service.generateMap = function(targetCenter, targetZoom) {
            if (targetCenter === undefined) {
                targetCenter = service.center;
            } else{
                //when we change the center of the map keep track of it
                service.center = targetCenter;
            }
            if (targetZoom === undefined) {
               targetZoom = service.zoom;
            } 


			console.log("service.center = "+service.center);
			console.log("targetCenter = "+targetCenter);
            console.log("service.zoom = "+service.zoom);

            return "https://maps.googleapis.com/maps/api/staticmap?center="+targetCenter+"&zoom="+targetZoom+
            "&format=png&sensor=false&scale=2&size="+window.innerWidth+"x1200&maptype=roadmap&style=visibility:on|weight:1|invert_lightness:true|saturation:-100|lightness:1&key=AIzaSyC7EU0hCMaPxxfB4KD1uE4BHZeKgEAIVtc";
        };

        service.zoomIn = function() {
            service.zoom = service.zoom + 1;
            return service.generateMap(service.center);
                     
        };

        service.zoomOut = function() {
            service.zoom = service.zoom - 1;
            return service.generateMap(service.center);
        };

        service.reset = function() {
            service.zoom = 14;
            return service.generateMap(service.center);
        };

        return service;
    }

    angular.module('SmartMirror')
        .factory('MapService', MapService);

}(window.annyang));
