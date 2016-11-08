'use strict';

angular.module('eklabs.angularStarterPack.notification')
    .factory('notification', function(notifObj) {
        return {
            "sender": notifObj.sender,
            "dateRead" : notifObj.dateRead,
            "dateSend" : notifObj.dateSend,
            "location" : notifObj.location,
            "recipient" : notifObj.recipient,
            "text" : notifObj.text,
        }
    });
