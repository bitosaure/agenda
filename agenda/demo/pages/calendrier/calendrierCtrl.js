/**
 * Created by Thibault et Emilie on 03/10/2016.
 */
'use strict';

angular.module('demoApp')
    .controller('calendrierCtrl', function($scope,$filter,$http,$q,calendrierService){

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------

        $scope.params = [{
            /**
             * Default aucun évènement ne doit appraitre dans le calendrier
             */
            case       : 'Default Case',
            options    : undefined,
            eventSources :undefined,
            json       : undefined,
            callback   : undefined,
            listeners  : undefined
        },{
            /**
             * Case JSON, injecte dans le calendrier les évènements présents dans json
             */
            case       : 'Case inject Json',
            options    : undefined,
            json: [
                { events :
                    [
                        {id: 999,title: 'Repeating Event',start: new Date(2016, 11, 17 - 3, 16, 0),allDay: false},
                        {id: 999,title: 'Repeating Event',start: new Date(2016,11, 24, 16, 0),allDay: false},
                        {title: 'Birthday Party',start: new Date(2016, 11, 25, 19, 0),end: new Date(2016, 11, 25, 22, 30),allDay: false},
                        {title: 'Click for Google',start: new Date(2016, 11, 28,15,0),end: new Date(2016, 11, 29,15,0),url: 'http://google.com/'}
                    ]
                }
            ],
            callback   : undefined,
            listeners  : undefined

        },{
            /**
             * Case appel de l'api
             * eventSources sera défini lors de l'appel du service (qui va appeler notre factory calendrierFactory)
             */
            case       : 'Case call api',
            options    : undefined,
            json       : undefined,
            eventSources: undefined,
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

            $scope.events       = $scope.params[index].eventSources;
            $scope.myOptions    = $scope.params[index].options;
            $scope.myJson       = $scope.params[index].json;
            $scope.myCallback   = $scope.params[index].callback;
            $scope.myListener   = $scope.params[index].listeners;
            $scope.index          = index;
            $scope.triggerRender  = moment().valueOf();
            $scope.haveResult     = false;
            $scope.dateDeb = new Date();
            $scope.dateFin =  new Date(y, m+2, d );
            
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
            title : 'directive calendrier',
            haveCodeSource : true,
            code : [{
                link : 'pages/calendrier/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive calendrier'
            },{
                link : 'pages/calendrier/code/contract.json',
                language : 'json',
                title : 'Params available for the directive calendrier'
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