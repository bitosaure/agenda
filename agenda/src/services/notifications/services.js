'use strict';

angular.module('demoApp')
    .service('notification', function() {

        this.loadNotifications = function () {
            return [
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


    });