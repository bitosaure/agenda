'use strict';

angular.module('eklabs.angularStarterPack.event')
    .factory('eventFactory', function(personService, eventService)  {

        function eventFactory(eventObj){
            this.id = eventObj.id;
            this.name = eventObj.name;
            this.image = eventObj.image;
            this.description = eventObj.description;
            this.location = eventObj.location;
            this.startDate = eventObj.startDate;
            this.endDate = eventObj.endDate;
            this.organizer = eventObj.organizer;
            this.eventStatus = eventObj.eventStatus;
            this.attendees = getAttendee(eventObj.attendees);
            this.visibility = eventObj.visibility;
        }

        function getAttendee(attendee_array){
            var attendees = [];
            angular.forEach(attendee_array, function(value){
                personService.getAttendee(value).then(function(response)
                {
                    var attendee = response;
                    attendees.push(attendee);
                });
            });
            return attendees;
        }

        return eventFactory;
    })

    .factory('listEventFactory', function(personService, eventService, eventFactory)  {

        function listEventFactory(){
            this.eventList = [];
        }
/*
        return {
            loadFromDb : function () {
                this.eventList =
                    eventService.getEvents().then(function (response) {
                        var events_db = response;
                        console.log(events_db);
                        var events = [];
                        angular.forEach(events_db, function (event) {
                            console.log("Création de l'event");
                            var event_tmp = new eventFactory(event);
                            events.push(event_tmp);
                        });
                        return events;
                    })
            }



        }*/
        return {
            eventList : function(){
                eventService.getEvents().then(function (response) {
                    var events_db = response;
                    console.log(events_db);
                    var events = [];
                    angular.forEach(events_db, function (event) {
                        console.log("Création de l'event");
                        var event_tmp = new eventFactory(event);
                        events.push(event_tmp);
                    });
                    console.log(events);
                    return events;
                })
            }
        }

    });
