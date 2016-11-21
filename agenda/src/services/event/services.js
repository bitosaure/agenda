'use strict';

angular.module('eklabs.angularStarterPack.event')
    .service("eventService", function(params,$config){

        this.createEvent = function(params){
                $http.post($config.get(), data, config).then(successCallback, errorCallback);
        };
        this.updateEvent = function(params){
                $http.post('/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.deleteEvent = function(params){
                $http.post('/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.addParticipant = function(params){
                $http.post('/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.deleteParticipant = function(params){
                $http.post('/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.joinEvent = function(params){
                $http.post('/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.unsubscribe = function(params){
                $http.post('/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.acceptInvitation = function(params){
                $http.post('/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.refuseInvitation = function(params){
                $http.post('/someUrl', data, config).then(successCallback, errorCallback);
        };
        this.getEvent = function(params){
                $http.post('/someUrl', data, config).then(successCallback, errorCallback);
        };

});
