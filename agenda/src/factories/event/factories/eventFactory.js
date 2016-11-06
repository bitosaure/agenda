'use strict';

angular.module('eklabs.angularStarterPack.event')
    .factory('event', function(eventObj) {
    return {
        "name": eventObj.name,
        "image" : eventObj.image,
        "description" : eventObj.description,
        "location" : eventObj.location,
        "startDate" : eventObj.startDate,
        "endDate" : eventObj.endDate,
        "organizer" : eventObj.organizer,
        "eventStatus" : eventObj.eventStatus,
        "attendee" : eventObj.attendee,
        "visibility" : eventObj.visibility
    }
});
