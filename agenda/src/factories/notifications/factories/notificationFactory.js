'use strict';

angular.module('eklabs.angularStarterPack.notification')
    .factory('notificationFactory', function() {

        function notificationFactory(notifObj) {
            this.sender =  notifObj.sender;
            this.dateRead =  notifObj.dateRead;
            this.dateSend = notifObj.dateSend;
            this.location = notifObj.location;
            this.recipient = notifObj.recipient;
            this.text = notifObj.text;
        }

        return notificationFactory;
    });