'use strict';

angular.module('eklabs.angularStarterPack.notification')
    .directive('notification',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/notification/directives/notification/notificationView.html',
            scope : {

            },link : function(scope){

                scope.showUnreaded = true;
                scope.showReaded = false;

                scope.changeVisibility = function(b) {

                    //Si b est égal à true, on se focalise sur les notifications non vue
                    if(b){
                        if(scope.showUnreaded)
                            scope.showUnreaded = false;
                        else
                            scope.showUnreaded = true;
                    }else{
                        if(scope.showReaded)
                            scope.showReaded = false;
                        else
                            scope.showReaded = true;
                    }

                };

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
                    },
                    {
                        "sender" : "",
                        "dateRead" : "28/10/2016 12:22",
                        "dateSend" : "28/10/2016 11:56",
                        "recipient" : "Mickael",
                        "text" : "Mickael est sur agenda !"
                    }
                ];


            }
        }
    });