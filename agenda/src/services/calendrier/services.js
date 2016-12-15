/**
 * Created by emilie on 08/11/2016.
 */
angular.module('eklabs.angularStarterPack.calendrier')

    .service("calendrierService", function($http, $config, calendrierFactory) {
      //  console.log($config.getEventBaseUrl());

        function successCallback(response) {
            console.log(response);
            return response;
        };

        function errorCallback(response) {
            console.log(response);
            return {};
        };
        this.getEventsCalendar = function () {
            return $http.get($config.getEventBaseUrl() , $config).then(
                function (response) {
                    var eventsCalendar = [];
                    
                    angular.forEach(response.data, function (value) {
                        var obj=new calendrierFactory(value);
                        eventsCalendar.push(new calendrierFactory(value));

                    });
                    return eventsCalendar;
                },
                function (response) {
                    return errorCallback(response);
                });
        };
        this.getEventsCalendarParametrableDateDebut = function (date) {
            return $http.get($config.getEventBaseUrl() , $config).then(
                function (response) {
                    var eventsCalendar = [];

                    angular.forEach(response.data, function (value) {
                        var obj=new calendrierFactory(value);

                        if(new Date(obj.start)>new Date(date)){
                            eventsCalendar.push(obj);

                        }


                    });


                    return eventsCalendar;
                },
                function (response) {

                    return errorCallback(response);
                });
        };
    });
    