/**
 * Created by emilie on 08/11/2016.
 */
angular.module('eklabs.angularStarterPack.calendrier')
    .service("calendrierService", function($http, $config, eventFactory){
        console.log($config.getEventBaseUrl());

        function successCallback (response){
            console.log(response);
            return response;
        };

        function errorCallback(response){
            console.log(response);
            return {};
        };
        this.getEvents = function(){
            return $http.get($config.getEventBaseUrl() + 'event/', $config).then(
                function(response){
                    var events = [];
                    angular.forEach(response.data, function(value){
                        events.push(new eventFactory(value));
                    });
                    return events;
                },
                function(response){
                    return errorCallback(response);
                });
        };

    });
    