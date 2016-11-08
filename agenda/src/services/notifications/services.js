'use strict';

angular.module('demoApp')
    .service('notification', function() {

        this.getNotifications = function () {
            $http.get('91.134.241.60:3080/ressources/Event/notification').then(function(response){
                return response.data;
            });
        };

        this.readNotification = function(idNotif) {
            $http.post('91.134.241.60:3080/ressources/Event/notification/'+idNotif).then(function(response){
                return response.data;
            });
        };







    });