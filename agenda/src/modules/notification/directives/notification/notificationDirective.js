'use strict';

angular.module('eklabs.angularStarterPack.notification')
    .directive('notification',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/notification/directives/notification/notificationView.html',
            scope : {

            },link : function(scope){

                scope.notifications = [
                    {
                        "sender" : "Bitosaur",
                        "dateRead" : "",
                        "dateSend" : "03/10/2016 02:33",
                        "recipient" : "Florian",
                        "text" : "Bitosaur vous invite à rejoindre l'évènement 'DM de Web'"
                    },
                    {
                        "sender" : "Eddie",
                        "dateRead" : "",
                        "dateSend" : "02/10/2016 16:01",
                        "recipient" : "Florian",
                        "text" : "Eddie vous invite à rejoindre l'évènement 'BBQ chez moi'"
                    },
                    {
                        "sender" : "Emilie",
                        "dateRead" : "",
                        "dateSend" : "01/10/2016 08:56",
                        "recipient" : "Florian",
                        "text" : "Emilie vous invite à rejoindre l'évènement 'Nouvel an'"
                    },
                    {
                        "sender" : "",
                        "dateRead" : "28/09/2016 12:22",
                        "dateSend" : "28/09/2016 11:56",
                        "recipient" : "Florian",
                        "text" : "Bienvenue sur AgenMiage !"
                    }
                ];


            }
        }
    });