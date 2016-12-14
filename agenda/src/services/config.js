'use strict';

angular.module('eklabs.angularStarterPack')
    .constant('WEBAPP_CONFIG', {
        api         : 'http://91.134.241.60:3080/',
        resources  : 'resources/',
        event_url   : 'event/',
        person_url : 'person/'
    })

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
            
        }
    }]);