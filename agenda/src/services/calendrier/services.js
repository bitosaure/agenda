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
        this.getEventsCalendarParametrableDateDebut = function (dateDeb,dateFin) {
            return $http.get($config.getEventBaseUrl() , $config).then(
                function (response) {
                    var eventsCalendar = [];

                    angular.forEach(response.data, function (value) {
                        if (dateDeb) {
                            if(dateFin){
                                var obj = new calendrierFactory(value);
                                var dateObj = new Date(obj.start);
                                var dtDeb = new Date(dateDeb);
                                var dtFin = new Date(dateFin);
                                if (dateObj > dtDeb && dateObj < dtFin) {
                                    eventsCalendar.push(obj);
                                }
                            }else{
                                var obj = new calendrierFactory(value);
                                var dateObj = new Date(obj.start);
                                var dtDeb = new Date(dateDeb);
                                if (dateObj > dtDeb) {
                                    eventsCalendar.push(obj);
                                }
                            }
                        }else{
                            if(dateFin){
                                var obj = new calendrierFactory(value);
                                var dateObj = new Date(obj.start);
                                var dtFin = new Date(dateFin);
                                if (dateObj < dtFin) {
                                    eventsCalendar.push(obj);
                                }
                            }else{
                                var obj = new calendrierFactory(value);
                                eventsCalendar.push(obj);
                            }
                        }



                    });


                    return eventsCalendar;
                },
                function (response) {

                    return errorCallback(response);
                });
        };
    });
    