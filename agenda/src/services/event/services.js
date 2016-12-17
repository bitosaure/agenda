'use strict';

angular.module('eklabs.angularStarterPack.event')
    .service("eventService", function($http, $config){

        function successCallback (response){
            return response.data;
        };

        function errorCallback(response){
            console.log("Error");
            return {};
        };

        function updateEventInside(params){
            console.log("ici");
            console.log($config.getEventBaseUrl() + params.id);
            return $http.put($config.getEventBaseUrl() + params.id, params, $config).then(function(response){
                    return successCallback(response);
                },
                function(){
                    return errorCallback(response);
                });
        };

        this.createEvent = function(params){
                return $http.post($config.getEventBaseUrl(), params, $config).then(
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
                    return successCallback(response);
                },
                function(){
                    return [];
                });
        };

        this.getEvent = function(event_id){
            return $http.get($config.getEventBaseUrl()+event_id, $config).then(
                function(response){
                    return successCallback(response);
                },
                function(response){
                    return errorCallback(response);
                });
        };

        this.updateEvent = function(params){
            return $http.put($config.getEventBaseUrl() + params.id, params, $config).then(
                function(response){
                    return successCallback(response);
                },
                function(response){
                    return errorCallback(response);
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

        this.addParticipant = function(event_id, array_person_id){
            return $http.get($config.getEventBaseUrl()+event_id, $config).then(
                function(response){
                    var data = response.data;
                    console.log(data.attendees);
                    data.attendees = array_person_id;
                    return updateEventInside(data);
                },
                function(response){
                    return errorCallback(response);
                });
        };

        this.deleteParticipant = function(event_id,person_id){
            return $http.get($config.getEventBaseUrl()+event_id, $config).then(
                function(response){
                    return successCallback(response);
                },
                function(response){
                    return errorCallback(response);
                })
                .then(function(response){
                        var data = response;
                        var index = data.attendees.indexOf(person_id);
                        data.attendees.splice(index,1);
                        this.updateEvent(data);
                    },
                    function(response){
                        return errorCallback(response);
                    });
        };

        this.joinEvent = function(event_id,person_id){
                this.addParticipant(event_id,person_id);
        };
        this.unsubscribe = function(event_id,person_id){
                this.deleteParticipant(event_id,person_id);
        };
        this.acceptInvitation = function(params){
            this.addParticipant(event_id,person_id);
        };
        this.refuseInvitation = function(params){
            this.deleteParticipant(event_id,person_id);
        };

    })

    .service("personService", function($http, $config) {

        function successCallback (response){
            return response.data;
        };

        function errorCallback(response){
            return {};
        };

        this.getAttendee = function(person_id){
            return $http.get($config.getPersonBaseUrl()+person_id, $config).then(
                function(response){
                    return successCallback(response);
                },
                function(){
                    return []//errorCallback(response);
                });
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
    });
