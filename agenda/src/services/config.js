'use strict';

angular.module('eklabs.angularStarterPack')
    .config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }])

    /*
     * Constantes utilisés pour la configuration
     */
    .constant('WEBAPP_CONFIG', {
        api         : 'http://91.134.241.60:3080/',
        resources  : 'resources/',
        event_url   : 'event/',
        person_url : 'person/',
        notification_url : 'notifications/'
    })

    /*
     * Factory pour la configuration. Permet de générer les url des services.
     */
    .factory('$config', ['WEBAPP_CONFIG',function(WEBAPP_CONFIG){

        var parameters = angular.extend({}, WEBAPP_CONFIG);
        var resource = WEBAPP_CONFIG.api+WEBAPP_CONFIG.resources;
        return {
            get: function (name) {
                return parameters[name];
            },

            getCalendar : function() {
                return parameters[calendar]; // Config de prod
            },

            getEventBaseUrl : function() {
                return resource + WEBAPP_CONFIG.event_url
            },

            getPersonBaseUrl : function() {
                return resource + WEBAPP_CONFIG.person_url
            },

            getNotificationBaseUrl : function(){
                return resource + WEBAPP_CONFIG.notification_url
            }
            
        }
    }]);