/**
 * Created by darty les halles on 03/10/2016.
 */
'use strict';

angular.module('demoApp')
    .controller('eventCtrl', function($scope,$filter,$http,$q){

        






        
        
        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------

        $scope.params = [{
            /**
             * Default
             */
            case       : 'Liste des événements',
            options    : undefined,
            json       : undefined,
            callback   : undefined,
            listeners  : undefined
        },{
            /**
             * Case JSON
             */
            case       : 'Afficher un événement',
            options    : undefined,
            json       : {"hello" : "world"},
            callback   : undefined,
            listeners  : undefined

        },{
            /**
             * Callback active
             */
            case       : 'Créer un événement',
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
            title : 'directive json-editor',
            haveCodeSource : true,
            code : [{
                link : 'pages/demoEditor/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive demo-json-editor'
            },{
                link : 'pages/demoEditor/code/contract.json',
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

    });
