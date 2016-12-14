'use strict';

angular.module('eklabs.angularStarterPack.notification')
    .service('notificationService', function($http, $config, notificationFactory) {

        function successCallback (response){
            console.log(response);
            return response;
        };

        function errorCallback(response){
            console.log(response);
            return {};
        };

        this.getNotifications = function () {

            //console.log($config.getNotificationBaseUrl());

            return $http.get('http://91.134.241.60:3080/resources/notifications/'/*, $config*/).then(
                function(response){

                    var notifications = [];
                    angular.forEach(response.data, function(value){
                        notifications.push(new notificationFactory(value));
                    });

                    //console.log(notifications);
                    return notifications;
                },
                function(response){
                    return errorCallback(response);
                }
            )
        };


        /**
        this.readNotification = function(idNotif) {
            $http.post('91.134.241.60:3080/ressources/Event/notification/'+idNotif).then(function(response){
                return response.data;
            });
        };*

        $http.get('91.134.241.60:3080/ressources/Event/notification').then(function(response){
            return response.data;
        });*/


    });