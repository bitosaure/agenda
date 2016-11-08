'use strict';

angular.module('eklabs.angularStarterPack.calendrier')
    .directive('calendrier',function($log, uiCalendarConfig){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/calendrier/directives/calendrier/calendrierFormView.html',
            scope : {
                eventSources : '=?',
                callback    : '=?'

            },link : function(scope){
                console.log("ui config ",uiCalendarConfig);
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
                    $scope.alertMessage = (date.title + ' was clicked ');
                };
                /* alert on Drop */
                scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
                    $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
                };
                /* alert on Resize */
                scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
                    $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
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
                    compile(element)(scope);
                };
                //scope.uiConfig.calendar.dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
                //scope.uiConfig.calendar.dayNamesShort = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];



                //scope.eventSources = [scope.calEvents,scope.calEvents2];
                console.log("Bonjour");
                console.log(scope.events);

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
                console.log("test event sources "+scope.eventSources);
                /**
                 * 
                 */
                scope.$watch('eventSources', function(events){
                    if(scope.eventSources){
                    scope.$apply(function() {

                        scope.eventSources = events;
                    })
                    }
                    //scope.eventSources = events;
                });
                console.log("event dans directive "+scope.events);


                /**
                 * Default Actions
                 * @type {{onValid: default_actions.onValid}}
                 */
                var default_actions = {
                  onValid : function(user){
                      $log.info('my user is : ',user)
                    }
                };

                /**
                 * Catch Callback
                 */
                scope.$watch('callback', function(callback){
                    if(callback instanceof Object){
                        scope.actions = angular.extend({},default_actions,callback);
                    }else{
                        scope.actions = default_actions;
                    }
                });



            }
        }
    });