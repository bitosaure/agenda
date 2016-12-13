/**
 * Created by emilie on 08/11/2016.
 */
angular.module('eklabs.angularStarterPack.calendrier')
<<<<<<< HEAD
    .service("calendrierService", function($http, $config, calendrierFactory){
        console.log($config.getEventBaseUrl());

        function successCallback (response){
            console.log(response);
            return response;
        };

        function errorCallback(response){
            console.log(response);
            return {};
        };
        this.getEventsCalendar = function(){
            return $http.get($config.getEventBaseUrl() + 'event/', $config).then(
                function(response){
                    var eventsCalendar = [];
                    angular.forEach(response.data, function(value){
                        eventsCalendar.push(new calendrierFactory(value));
                    });
                    return eventsCalendar;
                },
                function(response){
                    return errorCallback(response);
                });
        };
=======
    .service("calendrierService", function(params){
>>>>>>> parent of 079a365... ajout de la factory, modification du service et du controleur

        this.getEvents = function(params){};
    });
    