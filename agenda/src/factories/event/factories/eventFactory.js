'use strict';

angular.module('eklabs.angularStarterPack.event')
    .factory('eventFactory', function(personFactory, eventService)  {

        function eventFactory(eventObj){
            console.log(eventObj.attendees);
            this.id = eventObj.id;
            this.name = eventObj.name;
            this.image = eventObj.image;
            this.description = eventObj.description;
            this.location = eventObj.location;
            this.startDate = new Date(eventObj.startDate);
            this.endDate = new Date(eventObj.endDate);
            this.organizer = eventObj.organizer;
            this.eventStatus = eventObj.eventStatus;
            this.attendees = eventObj.attendees;
            this.visibility = eventObj.visibility;
        }

        function getAttendee(attendee_array){
            var attendees = [];
            angular.forEach(attendee_array, function(value){
                personFactory.getById(value).then(function(person)
                {
                    var attendee = person;
                    attendees.push(attendee);
                });
            });
            console.log(attendees);
            this.attendees = attendees;
        }

        function privateGetIdAttendees(attendees){
            var res = [];
            angular.forEach(attendees, function(attendee){
                res.push(attendee);
            });
            return res;
        }

        eventFactory.prototype.setAttendees = function(array_attendees){
            this.attendees = array_attendees;
        }

        eventFactory.prototype.getIdAttendees = function(){
            var res = [];
            angular.forEach(this.attendees, function(attendee){
                res.push(attendee.id);
            });
            return res;
        }

        eventFactory.prototype.update = function(){
            eventService.updateEvent(this).then(
                function(response){

                }
            );
        }

        eventFactory.prototype.create = function(){
            var attendees_array = privateGetIdAttendees(this.attendees);
            console.log(attendees_array);
            eventService.createEvent(this).then(function(response){
                eventService.addParticipant(response, attendees_array).then(function(response_attendee){

                });
            });
        }

        eventFactory.prototype.setAttendeesProperties = function(){
            var attendees = [];
            angular.forEach(this.attendees, function(value){
                personFactory.getById(value).then(function(person)
                {
                    var attendee = person;
                    attendees.push(attendee);
                });
            });
            this.attendees = attendees;
        }

        return eventFactory;
    })

    .factory('listEventFactory', function(personService, eventService, eventFactory, $q)  {

        return {
            eventList : function(){
                var defer = $q.defer();
                eventService.getEvents().then(function (response) {
                    var events_db = response;
                    var events = [];

                    angular.forEach(events_db, function (event) {
                        console.log("Création de l'event");
                        var event_tmp = new eventFactory(event);
                        events.push(event_tmp);
                    });
                    defer.resolve(events);
                })
                return defer.promise;
            },

            getEventById : function(event_id){
                var defer = $q.defer();
                eventService.getEvent(event_id).then(function (response) {
                    var event = new eventFactory(response);
                    defer.resolve(event);
                })
                return defer.promise;
            }
        }

    })

    .factory('personFactory', function(personService, $q) {
        return {

            getAll  :  function(){
                var defer = $q.defer();
                personService.getAttendees().then(function (response) {
                    defer.resolve(response);
                })
                return defer.promise;
            },

            getById : function(person_id){
                var defer = $q.defer();
                personService.getAttendee(person_id).then(function (response) {
                    defer.resolve(response);
                })
                return defer.promise;
            }
        }

    });

