'use strict';

angular.module('demoApp')
    .controller('notificationCtrl', function($scope,$mdDialog){


        // ----------------------------------------------------------------------------------------------------
        // ---- DISPLAY CODE MODE
        // ----------------------------------------------------------------------------------------------------
        $scope.displayCode  = false;
        $scope.maxHeight    = $(window).height() - 250;

        $scope.showCode = function(){
            $scope.displayCode = !$scope.displayCode;
        };
        

        /**
         * Page description
         * @type {{title: string, icon: string, haveCodeSource: boolean}}
         */
        $scope.page         = {
            title : 'directive notification',
            haveCodeSource : true,
            code : [{
                link : 'pages/demoform/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive demo-json-editor'
            },{
                link : 'pages/demoform/code/contract.json',
                language : 'json',
                title : 'Params available for the directive demo-json-editor'
            }]
        };

        /**
         * MODE Fullscreen
         */
        $scope.fullScreenMode = true;
        $scope.hideParams     = false;
        $scope.fullScreen = function(){
            $scope.hideParams = !$scope.hideParams;
        };


        /**
         *
         *
         */

    });