'use strict';

angular.module('demoApp')
    .service('notification', function() {

        this.loadNotifications = function () {

            $http.get('91.134.241.60:3080/ressources/Event/notification').then(function(response){
                return response.data;
            });

        }


    });