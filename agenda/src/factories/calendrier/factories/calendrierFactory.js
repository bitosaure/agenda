'use strict';

angular.module('eklabs.angularStarterPack.calendrier')
    .factory('calendrierFactory', function() {

         function calendrierFactory(eventObj){
            this.id = eventObj.id;
            this.title = eventObj.name;
            this.image = eventObj.image;
            this.description = eventObj.description;
            this.location = eventObj.location;
            this.start = new Date(eventObj.startDate);
            this.end =new Date(eventObj.endDate);
             
            this.organizer = eventObj.organizer;
            this.eventStatus = eventObj.eventStatus;
            this.attendee = eventObj.attendee;
            this.visibility = eventObj.visibility;
            this.allDay=false;



        }
        return calendrierFactory ;

    });