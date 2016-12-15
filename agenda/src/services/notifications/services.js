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

                    return notifications;
                },
                function(response){
                    return errorCallback(response);
                }
            )
        };
        


    });