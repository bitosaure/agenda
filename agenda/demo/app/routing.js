'use strict';

angular.module('demoApp')
    .config(function ($urlRouterProvider, $stateProvider) {

    $stateProvider
        // ------------------------------------------------------------------------------------------------
        // HOMEPAGE - Init the current value
        // ------------------------------------------------------------------------------------------------
        .state('default', {
            url : '/',
            controller : 'homepageCtrl',
            templateUrl : "pages/_homepage/homepageView.html"
        })

        // ------------------------------------------------------------------------------------------------
        // DEMO EDITOR Component
        // ------------------------------------------------------------------------------------------------
        .state('jsonEditor', {
            url : '/json-editor',
            controller : 'demoEditorCtrl',
            templateUrl : "pages/demoEditor/demoEditorView.html"
        })

        .state('calendrier', {
            url : '/calendrier',
            controller : 'calendrierCtrl',
            templateUrl : "pages/calendrier/eventView.html"
        })

        .state('notification', {
            url : '/notification',
            controller: 'notificationCtrl',
            templateUrl : 'pages/notification/notificationView.html'
        })
        .state('event', {
            url : '/event',
            controller: 'eventCtrl',
            templateUrl : 'pages/event/eventView.html'
        })


    ;



    
    $urlRouterProvider.otherwise('/');
});