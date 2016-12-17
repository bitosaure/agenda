/**
 * Created by Thibault et Emilie on 08/11/2016.
 * service calendrierService utiliser par la directive calendrierFormDirective
 */
angular.module('eklabs.angularStarterPack.calendrier')

    .service("calendrierService", function($http, $config, calendrierFactory) {

        /*
         * Callback de succès générique
         */
        function successCallback (response){
            return response.data;
        };

        /*
         * Callback d'erreur générique
         */
        function errorCallback(response){
            console.log("Error");
            return {};
        };

        /**
         * fonction recuperant tous les évenements via l'api
         * @returns  rien si la recuperation s est mal passée ou retun une liste d'évenement si la récupération s'est bien passée
         */
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
        /**
         * fonction permettant de récuperer tous les évenements si dateDeb et dateFin is undefined
         * ou de recuperer des évenements a partir d une date de debut si dateDeb is defined et dateFin is undefined
         * ou de recuperer des événements jusqu a une date de fin si dateFin is defined ou dateDeb is undefined
         * ou de recuperer des evenements a partir d'une date de debut jusqu a une date fin si dateDeb et dateFin is defined
         * @param dateDeb représente la date a laquelle on souhaite recuperer les evenements qui ont lieu a partir de cette date
         * @param dateFin représente la date jusqu a laquelle on souhaite recuperer les evenements
         * @returns  rien si la recuperation s est mal passée ou retun une liste d'évenement si la récupération s'est bien passée
         */
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
    