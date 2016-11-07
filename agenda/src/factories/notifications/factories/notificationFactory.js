'use strict';

angular.module('eklabs.angularStarterPack.notifications')
    .factory('notifications', function(eventObj) {
        return {
            "sender": eventObj.sender,
            "dateRead" : eventObj.dateRead,
            "dateSend" : eventObj.dateSend,
            "location" : eventObj.location,
            "recipient" : eventObj.recipient,
            "text" : eventObj.text,
        }
    });
