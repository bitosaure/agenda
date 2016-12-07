'use strict';

angular.module('eklabs.angularStarterPack')
    .factory('$config', ['WEBAPP_CONFIG',function(WEBAPP_CONFIG){

        var parameters = angular.extend({}, WEBAPP_CONFIG);

        return {
            get: function (name) {
                return parameters[name];
            },

            getCalendar : function() {
                //return parameters[calendarDev]; // Config pour la dev
                return parameters[calendar]; // Config de prod
            },

            getEventBaseUrl : function() {
                //return parameters[event.BaseUrlDev]; // Config pour la dev
                //return parameters[event.BaseUrl]; // Config de prod
                return "http://91.134.241.60:3080/resources/";
            },
            
        }
    }]);