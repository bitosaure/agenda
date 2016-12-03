'use strict';

angular.module('eklabs.angularStarterPack.event')
    .service("eventService", function($http, $config,event){

        successCallback = function(response){
            console.log(response);
            return response.data;
        };

        errorCallback = function(response){
            console.log(response);
            return {};
        };

        this.getAttendees = function(){
                return $http.get($config.getEventBaseUrl() + 'person/', $config).then(
                    function(response){
                        successCallback(response);
                    },
                    function(){
                        errorCallback(response);
                    });
        };

        this.createEvent = function(params){
                $http.post($config.getEventBaseUrl() + 'createEvent/', params, $config).then(function(response){
                        successCallback(response);
                    },
                    function(){
                        errorCallback(response);
                    });
        };

        this.updateEvent = function(params){
                $http.put($config.getEventBaseUrl() + '/updateEvent/' + params.id, data, $config).then(function(response){
                        successCallback(response);
                    },
                    function(){
                        errorCallback(response);
                    });
        };
        this.deleteEvent = function(params){
                $http.post($config.getEventBaseUrl() + '/deleteEvent/', params.id , $config).then(function(response){
                        successCallback(response);
                    },
                    function(){
                        errorCallback(response);
                    });
        };
        /*this.addParticipant = function(params){
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
        };*/
        
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
        };

});
