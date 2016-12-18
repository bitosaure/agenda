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
            if(eventObj.startDate > eventObj.endDate){
                var tmp = eventObj.endDate;
                eventObj.endDate = eventObj.startDate;
                eventObj.startDate = tmp;
            }
            this.startDate = new Date(eventObj.startDate).toDateString();
            this.endDate = new Date(eventObj.endDate).toDateString();
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
            var start = new Date(this.startDate);
            var end = new Date(this.endDate);
            console.log(start);
            console.log(end);
            console.log(start > end);
            if(start > end){
                var tmp = end;
                end = start;
                start = tmp;
            }
            this.startDate = start;
            this.endDate = end;
            return eventService.updateEvent(this).then(
                function(response){
                    return response;
                }
            );
        }

        eventFactory.prototype.delete = function(){
            return eventService.deleteEvent(this).then(
                function(response){
                    return response;
                }
            );
        }

        eventFactory.prototype.create = function(){
            var attendees_array = privateGetIdAttendees(this.attendees);
            console.log(attendees_array);
            return eventService.createEvent(this).then(function(response){
                return eventService.addParticipant(response, attendees_array).then(function(response_attendee){
                    return response_attendee;
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

