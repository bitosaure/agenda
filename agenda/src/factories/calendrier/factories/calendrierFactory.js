'use strict';

angular.module('eklabs.angularStarterPack.event')
    .factory('calendrierFactory', function() {

        function calendrierFactory(eventObj){
            this.id = eventObj.id;
            this.name = eventObj.name;
            this.image = eventObj.image;
            this.description = eventObj.description;
            this.location = eventObj.location;
            this.startDate = eventObj.startDate;
            this.endDate = eventObj.endDate;
            this.organizer = eventObj.organizer;
            this.eventStatus = eventObj.eventStatus;
            this.attendee = eventObj.attendee;
            this.visibility = eventObj.visibility;
        }

        return calendrierFactory;
    });