'use strict';

angular.module('demoApp')
    .controller('notificationCtrl', function($scope,$mdDialog){

        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------

        $scope.params = [{
            /**
             * Default
             */
            case       : 'Default Case',
            options    : undefined,
            json       : undefined,
            callback   : undefined,
            listeners  : undefined
        },{
            /**
             * Case JSON
             */
            case       : 'Case inject Json',
            options    : undefined,
            json       : [
                {
                    "sender" : "Mickhou",
                    "dateRead" : "",
                    "dateSend" : "06/12/2016 12:53",
                    "recipient" : "Florian",
                    "text" : "Mickhou vous invite à rejoindre l'évènement 'Rendu du module Notification'"
                },
                {
                    "sender" : "Emipisu",
                    "dateRead" : "28/10/2016 12:22",
                    "dateSend" : "28/10/2016 11:56",
                    "recipient" : "Maxime",
                    "text" : "Emipisu s'est désinscrit(e) à votre évènement 'Crémaillère payante'"
                }
            ],
            callback   : undefined,
            listeners  : undefined

        },{
            /**
             * Callback active
             */
            case       : 'Case Callback and Function',
            options    : undefined,
            json       : undefined,
            callback   : {
                valid : function(json){
                    displayCode('Callback : valid',json);
                }
            },
            listeners  : {
                onError : function(errors){
                    displayCode('Listeners : onError',errors,true);
                }
            }
        }];

        $scope.chooseParams = function(index){

            // --- Define current status
            $scope.myOptions    = $scope.params[index].options;
            $scope.myJson       = $scope.params[index].json;
            $scope.myCallback   = $scope.params[index].callback;
            $scope.myListener   = $scope.params[index].listeners;

            $scope.index          = index;
            $scope.refresh        = moment().valueOf();
            $scope.haveResult     = false;
        };

        // --- Init
        $scope.chooseParams(0);

        // --- Update result viewer
        var displayCode = function(from,code,isError){

            $scope.haveResult   = true;

            $scope.result       = {
                code : code,
                isError : isError,
                title : from
            };
        };
        
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
                link : 'pages/notification/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive notification'
            },{
                link : 'pages/notification/code/contract.json',
                language : 'json',
                title : 'Params available for the directive notification'
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