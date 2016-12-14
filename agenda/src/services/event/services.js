'use strict';

angular.module('eklabs.angularStarterPack.event')
    .service("eventService", function($http, $config, eventFactory){

        function successCallback (response){
            console.log(response);
            return response;
        };

        function errorCallback(response){
            console.log(response);
            return {};
        };

        this.getAttendees = function(){
                return $http.get($config.getPersonBaseUrl(), $config).then(
                    function(response){
                        return successCallback(response);
                    },
                    function(response){
                        return errorCallback(response);
                    });
        };

        this.createEvent = function(params){
                return $http.post($config.getEventBaseUrl() + 'event/', params, $config).then(
                    function(response){
                        return successCallback(response);
                    },
                    function(response){
                        return errorCallback(response);
                    });
        };

        this.getEvents = function(){
            return $http.get($config.getEventBaseUrl(), $config).then(
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

        this.getEvent = function(event_id){
            return $http.get($config.getEventBaseUrl()+event_id, $config).then(
                function(response){
                        return new eventFactory(response.data);
                },
                function(response){
                    return errorCallback(response);
                });
        };

        this.updateEvent = function(params){
                $http.put($config.getEventBaseUrl() + params.id, params, $config).then(function(response){
                        successCallback(response);
                    },
                    function(){
                        errorCallback(response);
                    });
        };
        /*this.deleteEvent = function(params){
                $http.post($config.getEventBaseUrl() + '/deleteEvent/', params.id , $config).then(function(response){
                        successCallback(response);
                    },
                    function(){
                        errorCallback(response);
                    });
        };
        this.addParticipant = function(params){
                $http.put($config.getEventBaseUrl() + '/addParticipant/' + idEvent, params.idPersonne, config).then(function(response){
                        successCallback(response);
                    },
                    function(){
                        errorCallback(response);
                    });
        };
        this.deleteParticipant = function(params){
                $http.post($config.getEventBaseUrl() + '/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.joinEvent = function(params){
                $http.post($config.getEventBaseUrl() + '/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.unsubscribe = function(params){
                $http.post($config.getEventBaseUrl() + '/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.acceptInvitation = function(params){
                $http.post($config.getEventBaseUrl() + '/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.refuseInvitation = function(params){
                $http.post($config.getEventBaseUrl() + '/someUrl', data, config).then(successCallback, errorCallback);
        };
        
        this.getEvent = function(params){
                $http.get($config.getEventBaseUrl() + 'getEvent/' + params, config).then(function(response){
                        console.log(response);
                        return event(response.data);
                    },
                    function(){
                        errorCallback(response);
                    });
        };

        this.getEvents = function(){
            $http.get($config.getEventBaseUrl() + 'event/', $config).then(
                function(){

                },
                function(){

                });
        };*/

});
