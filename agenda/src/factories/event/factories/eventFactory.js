'use strict';

angular.module('eklabs.angularStarterPack.event')
    .factory('eventFactory', function(personFactory, eventService)  {

        function eventFactory(eventObj){
            this.id = eventObj.id;
            this.name = eventObj.name;
            this.image = eventObj.image;
            this.description = eventObj.description;
            this.location = eventObj.location;
            this.startDate = new Date(eventObj.startDate);
            this.endDate = new Date(eventObj.endDate);
            this.organizer = eventObj.organizer;
            this.eventStatus = eventObj.eventStatus;
            this.attendees = getAttendee(eventObj.attendees);
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
            return attendees;
        }

        eventFactory.prototype.create = function(){
            var attendees_tmp = this.attendees;
            console.log(attendees_tmp);
            this.attendees = [];
            eventService.createEvent(this).then(function(response){
                angular.forEach(attendees_tmp, function(attendee){
                    console.log(attendee);
                    eventService.addParticipant(response, attendee.id).then(function(response_attendee){
                       console.log(response_attendee);
                    });
                });
            });
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
                    console.log(events);
                    defer.resolve(events);
                })
                console.log(defer.promise.$$state);
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

