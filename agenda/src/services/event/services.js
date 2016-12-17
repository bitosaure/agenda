'use strict';

angular.module('eklabs.angularStarterPack.event')
    .service("eventService", function($http, $config){

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

		/*
         * Création d'un event. Prend en paramètre un objet de type eventFactory
         */
        this.createEvent = function(params){
                return $http.post($config.getEventBaseUrl(), params, $config).then(
                    function(response){
                        return successCallback(response);
                    },
                    function(response){
                        return errorCallback(response);
                    });
        };

        /*
         * Récupération de tout les events.
         */
        this.getEvents = function(){
            return $http.get($config.getEventBaseUrl(), $config).then(
                function(response){
                    return successCallback(response);
                },
                function(){
                    return [];
                });
        };

        /*
         * Récupération d'un Event. Prend en paramètre l'id d'un event.
         */
        this.getEvent = function(event_id){
            return $http.get($config.getEventBaseUrl()+event_id, $config).then(
                function(response){
                    return successCallback(response);
                },
                function(response){
                    return errorCallback(response);
                });
        };

        /*
         * Mise à jour d'un event. Prend en paramètre l'event à mettre à jour. L'id ne doit pas être modifié.
         */
        this.updateEvent = function(params){
            console.log(params);
            return $http.put($config.getEventBaseUrl() + params.id, params, $config).then(
                function(response){
                    return successCallback(response);
                },
                function(response){
                    return errorCallback(response);
                });
        };

        /*
         * Suppression d'un event. Prend en paramètre l'event à supprimer.
         */
        this.deleteEvent = function(params){
                $http.post($config.getEventBaseUrl() + '/deleteEvent/', params.id , $config).then(function(response){
                        successCallback(response);
                    },
                    function(){
                        errorCallback(response);
                    });
        };


        /*
         * Ajout d'un participant à un event. Prend en paramètre l'id de l'event et l'id d'une personne.
         */
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

        /*
         * Suppression d'un participant à un event. Prend en paramètre l'id d'un event et d'une personne.
         */
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

        /*
         * Rejoindre un event. Pour le moment, identique à l'ajout d'un participant.
         */
        this.joinEvent = function(event_id,person_id){
                this.addParticipant(event_id,person_id);
        };

        /*
         * Ne plus participer à un event. Pour le moment, identique à la suppression d'un participant.
         */
        this.unsubscribe = function(event_id,person_id){
                this.deleteParticipant(event_id,person_id);
        };

        /*
         * Accepter une invitation. Pour le moment, identique à l'ajout d'un participant.
         */
        this.acceptInvitation = function(params){
            this.addParticipant(event_id,person_id);
        };

        /*
         * Refuser une invitation. Pour le moment, identique à la suppression d'un participant.
         */
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

        /*
         * Permet de récupérer une personne. Prend en paramètre son id.
         */
        this.getAttendee = function(person_id){
            return $http.get($config.getPersonBaseUrl()+person_id, $config).then(
                function(response){
                    return successCallback(response);
                },
                function(){
                    return []//errorCallback(response);
                });
        };

        /*
         * Permet de récupérer la liste de toutes les personnes.
         */
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
