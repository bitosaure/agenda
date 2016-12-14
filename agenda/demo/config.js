'use strict';

/**
 * Example config, if your app needs somethings
 */

angular.module('demoApp')
    .constant('WEBAPP_CONFIG', {

        platform : 'DEV',

        name : 'ANGULARJS Component Starter Pack',

        version : '0.2.1',

        event : {
            BaseUrl : 'http://91.134.241.60:3080/resources/',
            BaseUrlDev : ''
        },
        calendar : {
            BaseUrl : ''

        },
        calendarDev : {
            BaseUrl : ''
        }


    });