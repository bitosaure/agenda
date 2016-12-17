'use strict';

angular.module('eklabs.angularStarterPack.notification')
    .service('notificationService', function($http, $config, notificationFactory) {

        /*
         * Callback de succès générique
         */
        function successCallback (response){
            return response.data;
        };

        /*
         * Callback d'erreur générique
         */
        function errorCallback(response){
            console.log("Error");
            return {};
        };

        /*
         * Récupération de toutes les notifications.
         */
        this.getNotifications = function () {

            return $http.get($config.getNotificationBaseUrl()).then(
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

        /*
         * Mise à jour d'une notification lue. Prend en paramètre la notification à mettre à jour. L'id ne doit pas être modifié.
         */
        this.readNotification = function(params){
            var data = params;
            data.dateRead = new Date("dd/mm/yyyy hh:MM");
            return $http.put($config.getNotificationBaseUrl() + data.id, data, $config).then(
                function(response){
                    return successCallback(response);
                },
                function(response){
                    return errorCallback(response);
                });
        };


    });