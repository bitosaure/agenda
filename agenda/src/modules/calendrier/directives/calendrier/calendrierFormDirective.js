'use strict';

angular.module('eklabs.angularStarterPack.calendrier')
    .directive('calendrier',function($log, uiCalendarConfig,$compile,$timeout,calendrierService){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/calendrier/directives/calendrier/calendrierFormView.html',
            scope : {
                eventSources : '=?',
                callback    : '=?',
                render : '=?',
                json      : '=?',
                dateDeb : '=?',
                dateFin : '=?',
                index : '=?'


            },link : function(scope){

                var bjson = false;
                var bcallback = false;

                var calendar_actions = {
                    erase : function(){
                        if(scope.eventSources)
                            if(!bcallback && !bjson)
                                scope.eventSources = undefined;
                    },

                    remote : function(){
                            console.log("remote");
                            calendrierService.getEventsCalendarParametrableDateDebut(scope.dateDeb,scope.dateFin).then(function(response){
                            scope.eventSources =  [
                                { events :response}];
                            });
                    },

                    local : function(json){

                        scope.eventSources = json;
                    }


                };
                scope.$watch('json', function(json){
                    if(json){

                        bjson = true;
                        calendar_actions.local(json);
                    }else{

                        bjson = false;
                        calendar_actions.erase();
                    }
                });

                /**
                 * Check if callback in params
                 */
                scope.$watch('callback', function(callback){
                    console.log("call");

                    if(callback){

                        bcallback = true;
                        calendar_actions.remote();
                    }else{
                        bcallback = false;
                        calendar_actions.erase();
                    }
                });
                scope.$watch('dateDeb',function(dateDebut){
                    scope.dateDeb = dateDebut;
                    if(callback) {
                        calendar_actions.remote();
                    }
                });
                scope.$watch('dateFin',function(dateFin){
                    scope.dateFin = dateFin;
                    if(callback) {
                        
                        calendar_actions.remote();
                    }
                });
                scope.$watch('index',function(index){
                    scope.index = index;
                });

                /* Change View */
                scope.changeView = function(view,calendar) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
                };


                /* Change View */
                scope.renderCalender = function(calendar) {
                    if(uiCalendarConfig.calendars[calendar]){
                        uiCalendarConfig.calendars[calendar].fullCalendar('render');
                    }
                };
                /* alert on eventClick */
                scope.alertOnEventClick = function( date, jsEvent, view){
                    console.log("Titre "+date.title);
                    scope.alertMessage = (date.title + ' was clicked ');
                };
                /* alert on Drop */
                scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
                    scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
                };
                /* alert on Resize */
                scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
                    scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
                };
                /* add and removes an event source of choice */
                scope.addRemoveEventSource = function(sources,source) {
                    var canAdd = 0;
                    angular.forEach(sources,function(value, key){
                        if(sources[key] === source){
                            sources.splice(key,1);
                            canAdd = 1;
                        }
                    });
                    if(canAdd === 0){
                        sources.push(source);
                    }
                };
                /* add custom event*/
                scope.addEvent = function() {
                    scope.events.push({
                        title: 'Salut toto',
                        start: new Date(y, m, 28),
                        end: new Date(y, m, 29),
                        className: ['salut_toto']
                    });
                };
                /* remove event */
                scope.remove = function(index) {
                    scope.events.splice(index,1);
                };
                /* Change View */
                scope.changeView = function(view,calendar) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
                };
                /* Change View */
                scope.renderCalender = function(calendar) {
                    if(uiCalendarConfig.calendars[calendar]){

                            uiCalendarConfig.calendars[calendar].fullCalendar('render');



                    }
                };

                /* Render Tooltip */
                scope.eventRender = function( event, element, view ) {



                    element.attr({'tooltip': event.title,
                        'tooltip-append-to-body': true});
                    $compile(element)(scope);

                };

                /**
                 * Configuration du calendrier
                 */
                scope.uiConfig = {
                    calendar:{
                        monthNames:["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"],
                        dayNames : ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                        dayNamesShort : ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                        height: 450,
                        editable: true,
                        header:{
                            left: 'month agendaWeek basicDay ',
                            center: 'title',
                            right: 'today prev,next'
                        },
                        eventClick: scope.alertOnEventClick,
                        eventDrop: scope.alertOnDrop,
                        eventResize: scope.alertOnResize,
                        eventRender : scope.eventRender
                    }
                };

                //scope.eventSources = [scope.events,scope.events];
                //console.log("test event sources "+scope.eventSources);
                /**
                 * Watch permet de detecter des changements de données sur la variable eventSources
                 */
                scope.$watch('eventSources', function(events){
                    scope.isAvailable = false;
                    $timeout(function(){
                        scope.$apply(function(){
                            scope.isAvailable = true;
                        })
                    },0)
                });
                
                /**
                 * Default Actions
                 * @type {{onValid: default_actions.onValid}}
                 */
                var default_actions = {
                    onValid : function(user){
                        $log.info('my user is : ',user)
                    }
                };

               /*

                /**
                 * Catch Callback
                 */

                /*
                scope.$watch('callback', function(callback){
                    if(callback instanceof Object){
                        scope.actions = angular.extend({},default_actions,callback);
                    }else{
                        scope.actions = default_actions;
                    }


                });

                */
                scope.$watch('render', function(render){
                    console.log(render);
                    scope.renderCalender();
                })



                scope.showUnreaded = true;
                scope.showReaded = false;

                scope.changeVisibility = function(b) {

                    //Si b est égal à true, on se focalise sur les notifications non vue
                    if(b){
                        if(scope.showUnreaded)
                            scope.showUnreaded = false;
                        else
                            scope.showUnreaded = true;
                    }else{
                        if(scope.showReaded)
                            scope.showReaded = false;
                        else
                            scope.showReaded = true;
                    }

                };

            }
        }
    });